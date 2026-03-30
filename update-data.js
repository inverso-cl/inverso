// ============================================
// INVERSO — Script para actualizar datos de fondos
// Corre: node update-data.js
// Genera: funds-data.js con todos los fondos
// ============================================

const PROVIDERS = [
    { id: 6, short: 'BCI' },
    { id: 3, short: 'Banchile' },
    { id: 4, short: 'BancoEstado' },
    { id: 18, short: 'Scotiabank' },
    { id: 17, short: 'Santander' }
];

const API = 'https://fintual.cl/api';

function classify(name) {
    const n = name.toUpperCase();
    if (n.includes('ACCION') || n.includes('EQUITY') || n.includes('BURSATIL') || n.includes('VARIABLE') || n.includes('STOCK')) return { category: 'accionario', risk: 4 };
    if (n.includes('BALANCE') || n.includes('DIVERSIF') || n.includes('GLOBAL') || n.includes('DINAMICO') || n.includes('ESTRATEG') || n.includes('MIXTO') || n.includes('PATRIMON')) return { category: 'balanceado', risk: 3 };
    if (n.includes('MONETARIO') || n.includes('MONEY') || n.includes('LIQUIDEZ') || n.includes('EFECTIVO') || n.includes('CASH') || n.includes('DEPOSITO') || n.includes('AHORRO')) return { category: 'deuda', risk: 1 };
    if (n.includes('DEUDA') || n.includes('RENTA FIJA') || n.includes('FIXED') || n.includes('MEDIANO') || n.includes('CORTO PLAZO') || n.includes('RENDIMIENTO') || n.includes('SOBERAN')) return { category: 'deuda', risk: 2 };
    return { category: 'deuda', risk: 2 };
}

async function fetchJSON(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    return r.json();
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
    console.log('🚀 Inverso — Actualizando datos de fondos mutuos\n');

    const today = new Date();
    const todayStr = today.toISOString().slice(0, 10);
    const d30 = new Date(today); d30.setDate(d30.getDate() - 35);
    const d365 = new Date(today); d365.setDate(d365.getDate() - 370);
    const d30Str = d30.toISOString().slice(0, 10);
    const d365Str = d365.toISOString().slice(0, 10);

    const allFunds = [];

    // Step 1: Get all funds from all providers
    for (const prov of PROVIDERS) {
        process.stdout.write(`📦 Cargando fondos de ${prov.short}...`);
        try {
            const data = await fetchJSON(`${API}/asset_providers/${prov.id}/conceptual_assets`);
            const funds = data.data.filter(f => f.attributes.category === 'mutual_fund');
            console.log(` ${funds.length} fondos`);

            for (const fund of funds) {
                const attr = fund.attributes;
                const cls = classify(attr.name);
                allFunds.push({
                    id: fund.id,
                    name: attr.name,
                    currency: attr.currency || 'CLP',
                    provider: prov.short,
                    category: cls.category,
                    risk: cls.risk,
                    rent30: null,
                    rent12: null
                });
            }
        } catch (e) {
            console.log(` ERROR: ${e.message}`);
        }
        await sleep(300);
    }

    console.log(`\n📊 Total: ${allFunds.length} fondos. Calculando rentabilidades...\n`);

    // Step 2: Get returns for each fund
    let done = 0;
    let withData = 0;

    for (const fund of allFunds) {
        done++;
        if (done % 10 === 0) process.stdout.write(`  ${done}/${allFunds.length} procesados (${withData} con datos)\r`);

        try {
            // Get series
            const seriesData = await fetchJSON(`${API}/conceptual_assets/${fund.id}/real_assets`);
            if (!seriesData.data || seriesData.data.length === 0) continue;

            // Find first series with a price
            const series = seriesData.data.find(s => s.attributes.last_day && s.attributes.last_day.price);
            if (!series) continue;

            // Get historical prices
            const daysData = await fetchJSON(`${API}/real_assets/${series.id}/days?from_date=${d365Str}&to_date=${todayStr}`);
            if (!daysData.data || daysData.data.length < 2) continue;

            const prices = daysData.data
                .map(d => ({ date: d.attributes.date, price: d.attributes.price }))
                .filter(p => p.price && p.price > 0)
                .sort((a, b) => a.date.localeCompare(b.date));

            if (prices.length < 2) continue;

            const latest = prices[prices.length - 1];

            // 30 day return
            const t30 = new Date(latest.date); t30.setDate(t30.getDate() - 30);
            const t30Str = t30.toISOString().slice(0, 10);
            const p30 = [...prices].reverse().find(p => p.date <= t30Str);
            if (p30) fund.rent30 = Math.round(((latest.price - p30.price) / p30.price * 100) * 100) / 100;

            // 12 month return
            const t365 = new Date(latest.date); t365.setDate(t365.getDate() - 365);
            const t365Str2 = t365.toISOString().slice(0, 10);
            const p365 = [...prices].reverse().find(p => p.date <= t365Str2);
            if (p365) fund.rent12 = Math.round(((latest.price - p365.price) / p365.price * 100) * 100) / 100;

            if (fund.rent30 !== null || fund.rent12 !== null) withData++;

        } catch (e) { /* skip */ }

        await sleep(150); // Rate limiting
    }

    console.log(`\n\n✅ Listo! ${withData} fondos con datos de rentabilidad\n`);

    // Step 3: Filter only funds with data and generate JS file
    const validFunds = allFunds
        .filter(f => f.rent30 !== null || f.rent12 !== null)
        .map(f => ({
            name: f.name,
            provider: f.provider,
            currency: f.currency,
            category: f.category,
            risk: f.risk,
            rent30: f.rent30,
            rent12: f.rent12
        }));

    const output = `// Datos actualizados: ${todayStr}
// Generado por: node update-data.js
// Fondos: ${validFunds.length} de ${PROVIDERS.map(p => p.short).join(', ')}
const FUNDS_DATA = ${JSON.stringify(validFunds, null, 2)};
const DATA_DATE = "${todayStr}";
`;

    const fs = require('fs');
    fs.writeFileSync('funds-data.js', output);
    console.log(`💾 Archivo guardado: funds-data.js (${validFunds.length} fondos)`);
    console.log(`📅 Fecha de datos: ${todayStr}`);
    console.log('\n👉 Ahora haz: git add . && git commit -m "Actualizar datos fondos" && git push\n');
}

main().catch(e => { console.error('Error:', e); process.exit(1); });
