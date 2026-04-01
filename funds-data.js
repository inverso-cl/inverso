// Datos actualizados: 2026-03-28
// 10 administradoras · Fuentes: CMF, sitios oficiales, Morningstar Chile
const FUNDS_DATA = [
  // === BCI ===
  {"name":"BCI Rendimiento","provider":"BCI","currency":"CLP","category":"deuda","risk":1,"rent30":0.35,"rent12":4.50,"fee":0.60,"desc":"Deuda corto plazo, emisores nacionales. Duración máx 90 días."},
  {"name":"BCI Ahorro Digital","provider":"BCI","currency":"CLP","category":"deuda","risk":1,"rent30":0.39,"rent12":4.90,"fee":0.45,"desc":"Fondo 100% digital de renta fija corto plazo. Comisión más baja de BCI."},
  {"name":"BCI Estrategia Pesos hasta 1 año","provider":"BCI","currency":"CLP","category":"deuda","risk":2,"rent30":0.50,"rent12":5.80,"fee":1.19,"desc":"Deuda nacional hasta 365 días."},
  {"name":"BCI Cartera Mediano Plazo","provider":"BCI","currency":"CLP","category":"deuda","risk":2,"rent30":0.55,"rent12":6.30,"fee":1.30,"desc":"Bonos y depósitos mediano plazo."},
  {"name":"BCI Gestión Global Dinámica","provider":"BCI","currency":"CLP","category":"balanceado","risk":3,"rent30":1.20,"rent12":9.00,"fee":2.38,"desc":"Estrategia global que ajusta renta variable según mercado."},
  {"name":"BCI Cartera Patrimonial Balanceada","provider":"BCI","currency":"CLP","category":"balanceado","risk":3,"rent30":1.05,"rent12":8.10,"fee":1.85,"desc":"Mezcla equilibrada renta fija y variable."},
  {"name":"BCI Acciones Chilenas","provider":"BCI","currency":"CLP","category":"accionario","risk":4,"rent30":2.10,"rent12":16.20,"fee":2.98,"desc":"Acciones de empresas chilenas en bolsa."},
  {"name":"BCI Selección Bursátil","provider":"BCI","currency":"CLP","category":"accionario","risk":4,"rent30":1.80,"rent12":14.80,"fee":2.68,"desc":"Selección activa de acciones chilenas."},
  {"name":"BCI Estados Unidos","provider":"BCI","currency":"USD","category":"accionario","risk":5,"rent30":0.90,"rent12":21.50,"fee":3.20,"desc":"Acciones estadounidenses. Riesgo tipo de cambio."},
  {"name":"BCI América Latina","provider":"BCI","currency":"CLP","category":"accionario","risk":5,"rent30":2.60,"rent12":18.30,"fee":3.10,"desc":"Acciones latinoamericanas."},
  // === BANCHILE ===
  {"name":"Banchile Utilidades","provider":"Banchile","currency":"CLP","category":"deuda","risk":1,"rent30":0.36,"rent12":4.60,"fee":0.55,"desc":"Deuda corto plazo en UF. Bajo riesgo."},
  {"name":"Banchile Depósito XXI","provider":"Banchile","currency":"CLP","category":"deuda","risk":1,"rent30":0.34,"rent12":4.30,"fee":0.48,"desc":"Depósitos bancarios y títulos corto plazo."},
  {"name":"Banchile Horizonte","provider":"Banchile","currency":"CLP","category":"deuda","risk":2,"rent30":0.48,"rent12":5.70,"fee":1.05,"desc":"Renta fija mediano plazo."},
  {"name":"Banchile Deuda Chile","provider":"Banchile","currency":"CLP","category":"deuda","risk":2,"rent30":0.55,"rent12":6.20,"fee":1.15,"desc":"Bonos corporativos y soberanos chilenos."},
  {"name":"Banchile Estrategia Moderada","provider":"Banchile","currency":"CLP","category":"balanceado","risk":3,"rent30":0.90,"rent12":7.80,"fee":1.90,"desc":"Renta fija y variable, nacional y extranjera."},
  {"name":"Banchile Estrategia Agresiva","provider":"Banchile","currency":"CLP","category":"balanceado","risk":3,"rent30":1.35,"rent12":10.20,"fee":2.20,"desc":"Mayor exposición a renta variable."},
  {"name":"Banchile Acciones Nacionales","provider":"Banchile","currency":"CLP","category":"accionario","risk":4,"rent30":2.00,"rent12":15.80,"fee":2.85,"desc":"Acciones mercado chileno. Premio Salmón."},
  {"name":"Banchile USA Equity","provider":"Banchile","currency":"USD","category":"accionario","risk":5,"rent30":0.80,"rent12":20.50,"fee":3.15,"desc":"Acciones de grandes empresas estadounidenses."},
  // === BANCOESTADO ===
  {"name":"BancoEstado Money Market","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":1,"rent30":0.34,"rent12":4.35,"fee":0.50,"desc":"Máxima liquidez y seguridad. Monto mínimo bajo."},
  {"name":"BancoEstado Ahorro Plus","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":1,"rent30":0.38,"rent12":4.70,"fee":0.55,"desc":"Rentabilidad estable sin riesgo."},
  {"name":"BancoEstado Renta Mediano Plazo","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":2,"rent30":0.47,"rent12":5.60,"fee":1.00,"desc":"Bonos y depósitos mediano plazo. Comisión competitiva."},
  {"name":"BancoEstado Moderado","provider":"BancoEstado","currency":"CLP","category":"balanceado","risk":3,"rent30":0.80,"rent12":7.20,"fee":1.75,"desc":"Mezcla equilibrada. Accesible desde montos bajos."},
  {"name":"BancoEstado Acciones Nacionales","provider":"BancoEstado","currency":"CLP","category":"accionario","risk":4,"rent30":1.90,"rent12":15.00,"fee":2.70,"desc":"Acciones chilenas. Comisión más baja en accionarios."},
  {"name":"BancoEstado BNP Paribas Acc. Desarrolladas","provider":"BancoEstado","currency":"USD","category":"accionario","risk":5,"rent30":0.70,"rent12":19.50,"fee":2.80,"desc":"Acciones mercados desarrollados. Premio Morningstar 2025."},
  // === SCOTIABANK ===
  {"name":"Scotiabank Money Market","provider":"Scotiabank","currency":"CLP","category":"deuda","risk":1,"rent30":0.33,"rent12":4.20,"fee":0.52,"desc":"Liquidez inmediata. Depósitos y pagarés corto plazo."},
  {"name":"Scotiabank Deuda Mediano Plazo","provider":"Scotiabank","currency":"CLP","category":"deuda","risk":2,"rent30":0.52,"rent12":5.75,"fee":1.15,"desc":"Bonos corporativos y soberanos mediano plazo."},
  {"name":"Scotiabank Balanceado","provider":"Scotiabank","currency":"CLP","category":"balanceado","risk":3,"rent30":0.95,"rent12":7.50,"fee":1.95,"desc":"Portafolio diversificado renta fija y variable."},
  {"name":"Scotiabank Acciones Chilenas","provider":"Scotiabank","currency":"CLP","category":"accionario","risk":4,"rent30":2.05,"rent12":14.50,"fee":2.90,"desc":"Acciones IPSA y mercado nacional."},
  {"name":"Scotiabank USA Equity","provider":"Scotiabank","currency":"USD","category":"accionario","risk":5,"rent30":0.85,"rent12":19.80,"fee":3.10,"desc":"Acciones S&P 500 y Nasdaq."},
  // === SANTANDER ===
  {"name":"Santander Money Market","provider":"Santander","currency":"CLP","category":"deuda","risk":1,"rent30":0.37,"rent12":4.65,"fee":0.48,"desc":"Muy corto plazo. Comisión más baja de Santander."},
  {"name":"Santander Bonos Chile","provider":"Santander","currency":"CLP","category":"deuda","risk":2,"rent30":0.58,"rent12":6.40,"fee":1.25,"desc":"Bonos soberanos y corporativos chilenos."},
  {"name":"Santander Renta Mediana","provider":"Santander","currency":"CLP","category":"deuda","risk":2,"rent30":0.51,"rent12":5.85,"fee":1.10,"desc":"Bonos mediano plazo, duración 1-3 años."},
  {"name":"Santander Equilibrio","provider":"Santander","currency":"CLP","category":"balanceado","risk":3,"rent30":1.00,"rent12":7.70,"fee":1.90,"desc":"Portafolio balanceado con ajuste dinámico."},
  {"name":"Santander Acciones Chilenas","provider":"Santander","currency":"CLP","category":"accionario","risk":4,"rent30":2.15,"rent12":15.50,"fee":2.85,"desc":"Acciones mercado nacional con gestión activa."},
  {"name":"Santander Acciones Globales","provider":"Santander","currency":"USD","category":"accionario","risk":5,"rent30":0.75,"rent12":20.00,"fee":3.05,"desc":"Diversificación global en acciones."},
  // === ITAÚ ===
  {"name":"Itaú Cash CLP","provider":"Itaú","currency":"CLP","category":"deuda","risk":1,"rent30":0.36,"rent12":4.55,"fee":0.52,"desc":"Money market en pesos. Rescate en 24 horas."},
  {"name":"Itaú Select Renta Fija","provider":"Itaú","currency":"CLP","category":"deuda","risk":2,"rent30":0.53,"rent12":6.10,"fee":1.08,"desc":"Deuda nacional mediano plazo. Buena comisión."},
  {"name":"Itaú Moderado","provider":"Itaú","currency":"CLP","category":"balanceado","risk":3,"rent30":0.92,"rent12":7.90,"fee":1.80,"desc":"Portafolio diversificado renta fija y variable."},
  {"name":"Itaú Top Acciones Chile","provider":"Itaú","currency":"CLP","category":"accionario","risk":4,"rent30":2.20,"rent12":16.00,"fee":2.75,"desc":"Selección de las mejores acciones chilenas."},
  {"name":"Itaú Acciones USA","provider":"Itaú","currency":"USD","category":"accionario","risk":5,"rent30":0.95,"rent12":21.00,"fee":3.00,"desc":"Acciones de empresas líderes en EE.UU."},
  // === FINTUAL ===
  {"name":"Fintual Very Conservative Streep","provider":"Fintual","currency":"CLP","category":"deuda","risk":1,"rent30":0.32,"rent12":4.10,"fee":0.49,"desc":"Renta fija de muy corto plazo. 100% digital. Sin monto mínimo."},
  {"name":"Fintual Conservative Clooney","provider":"Fintual","currency":"CLP","category":"deuda","risk":2,"rent30":0.48,"rent12":5.60,"fee":1.19,"desc":"Renta fija nacional. Para horizontes de 1+ año. 100% digital."},
  {"name":"Fintual Moderate Pitt","provider":"Fintual","currency":"CLP","category":"balanceado","risk":3,"rent30":1.10,"rent12":8.80,"fee":1.19,"desc":"Mezcla de renta fija y ETFs accionarios. Comisión única 1.19%."},
  {"name":"Fintual Risky Norris","provider":"Fintual","currency":"CLP","category":"accionario","risk":5,"rent30":1.80,"rent12":22.80,"fee":1.19,"desc":"Casi 100% ETFs accionarios globales. Comisión baja (1.19%). Alto riesgo, alto potencial. 100% digital, sin mínimos."},
  // === SECURITY ===
  {"name":"Security Money Market","provider":"Security","currency":"CLP","category":"deuda","risk":1,"rent30":0.35,"rent12":4.40,"fee":0.50,"desc":"Liquidez y seguridad en instrumentos de corto plazo."},
  {"name":"Security Renta Fija Mediano Plazo","provider":"Security","currency":"CLP","category":"deuda","risk":2,"rent30":0.50,"rent12":5.70,"fee":1.12,"desc":"Bonos y deuda corporativa chilena."},
  {"name":"Security Balanceado","provider":"Security","currency":"CLP","category":"balanceado","risk":3,"rent30":0.88,"rent12":7.60,"fee":1.85,"desc":"Diversificación entre renta fija y variable."},
  {"name":"Security Acciones Chilenas","provider":"Security","currency":"CLP","category":"accionario","risk":4,"rent30":2.00,"rent12":14.70,"fee":2.80,"desc":"Acciones del mercado nacional."},
  // === BICE ===
  {"name":"BICE Money Market","provider":"BICE","currency":"CLP","category":"deuda","risk":1,"rent30":0.34,"rent12":4.30,"fee":0.48,"desc":"Depósitos y pagarés de muy corto plazo."},
  {"name":"BICE Renta Fija Nacional","provider":"BICE","currency":"CLP","category":"deuda","risk":2,"rent30":0.52,"rent12":5.90,"fee":1.10,"desc":"Bonos soberanos y corporativos nacionales."},
  {"name":"BICE Balanceado Global","provider":"BICE","currency":"CLP","category":"balanceado","risk":3,"rent30":1.00,"rent12":8.30,"fee":1.95,"desc":"Renta fija y variable global."},
  {"name":"BICE Acciones Nacionales","provider":"BICE","currency":"CLP","category":"accionario","risk":4,"rent30":1.95,"rent12":15.20,"fee":2.82,"desc":"Acciones chilenas con gestión activa."},
  // === LARRAINVIAL ===
  {"name":"LarrainVial Ahorro Capital","provider":"LarrainVial","currency":"CLP","category":"deuda","risk":1,"rent30":0.37,"rent12":4.65,"fee":0.53,"desc":"Renta fija corto plazo. Orientado a preservar capital."},
  {"name":"LarrainVial Deuda Chile","provider":"LarrainVial","currency":"CLP","category":"deuda","risk":2,"rent30":0.56,"rent12":6.35,"fee":1.18,"desc":"Bonos chilenos de mediano y largo plazo."},
  {"name":"LarrainVial Balanceado","provider":"LarrainVial","currency":"CLP","category":"balanceado","risk":3,"rent30":1.08,"rent12":8.50,"fee":2.00,"desc":"Portafolio diversificado entre clases de activos."},
  {"name":"LarrainVial Acciones Chilenas","provider":"LarrainVial","currency":"CLP","category":"accionario","risk":4,"rent30":2.25,"rent12":16.50,"fee":2.90,"desc":"Acciones chilenas con enfoque en valor."},
  {"name":"LarrainVial Acciones Globales","provider":"LarrainVial","currency":"USD","category":"accionario","risk":5,"rent30":0.88,"rent12":20.80,"fee":3.08,"desc":"Acciones de mercados globales desarrollados."}
];

const DEPOSITS_DATA = {
  "BCI":[{"plazo":30,"tasa":0.32,"tasaAnual":3.90,"minMonto":500000},{"plazo":90,"tasa":0.98,"tasaAnual":4.00,"minMonto":500000},{"plazo":180,"tasa":2.05,"tasaAnual":4.15,"minMonto":1000000},{"plazo":360,"tasa":4.25,"tasaAnual":4.25,"minMonto":1000000}],
  "Banchile":[{"plazo":30,"tasa":0.31,"tasaAnual":3.80,"minMonto":500000},{"plazo":90,"tasa":0.96,"tasaAnual":3.90,"minMonto":500000},{"plazo":180,"tasa":2.00,"tasaAnual":4.05,"minMonto":1000000},{"plazo":360,"tasa":4.18,"tasaAnual":4.18,"minMonto":1000000}],
  "BancoEstado":[{"plazo":30,"tasa":0.33,"tasaAnual":4.05,"minMonto":250000},{"plazo":90,"tasa":1.02,"tasaAnual":4.15,"minMonto":250000},{"plazo":180,"tasa":2.12,"tasaAnual":4.30,"minMonto":500000},{"plazo":360,"tasa":4.40,"tasaAnual":4.40,"minMonto":500000}],
  "Scotiabank":[{"plazo":30,"tasa":0.30,"tasaAnual":3.70,"minMonto":500000},{"plazo":90,"tasa":0.93,"tasaAnual":3.80,"minMonto":500000},{"plazo":180,"tasa":1.95,"tasaAnual":3.95,"minMonto":1000000},{"plazo":360,"tasa":4.05,"tasaAnual":4.05,"minMonto":1000000}],
  "Santander":[{"plazo":30,"tasa":0.31,"tasaAnual":3.85,"minMonto":500000},{"plazo":90,"tasa":0.97,"tasaAnual":3.95,"minMonto":500000},{"plazo":180,"tasa":2.02,"tasaAnual":4.10,"minMonto":1000000},{"plazo":360,"tasa":4.20,"tasaAnual":4.20,"minMonto":1000000}],
  "Itaú":[{"plazo":30,"tasa":0.32,"tasaAnual":3.92,"minMonto":500000},{"plazo":90,"tasa":0.99,"tasaAnual":4.02,"minMonto":500000},{"plazo":180,"tasa":2.06,"tasaAnual":4.18,"minMonto":1000000},{"plazo":360,"tasa":4.28,"tasaAnual":4.28,"minMonto":1000000}],
  "Security":[{"plazo":30,"tasa":0.30,"tasaAnual":3.72,"minMonto":500000},{"plazo":90,"tasa":0.94,"tasaAnual":3.82,"minMonto":500000},{"plazo":180,"tasa":1.96,"tasaAnual":3.98,"minMonto":1000000},{"plazo":360,"tasa":4.10,"tasaAnual":4.10,"minMonto":1000000}],
  "BICE":[{"plazo":30,"tasa":0.31,"tasaAnual":3.82,"minMonto":500000},{"plazo":90,"tasa":0.96,"tasaAnual":3.88,"minMonto":500000},{"plazo":180,"tasa":1.98,"tasaAnual":4.02,"minMonto":1000000},{"plazo":360,"tasa":4.15,"tasaAnual":4.15,"minMonto":1000000}]
};

const BANK_INFO = {
  "BCI":{"url":"https://www.bci.cl/inversiones","digital":true,"minInvest":"$1.000","desc":"Banco grande con amplia oferta de fondos y plataforma digital."},
  "Banchile":{"url":"https://ww2.banchileinversiones.cl/web/personas/p-fondos-mutuos","digital":true,"minInvest":"$1.000","desc":"Administradora del Banco de Chile. Mayor patrimonio administrado del país."},
  "BancoEstado":{"url":"https://www.bancoestado.cl/fondosmutuos","digital":true,"minInvest":"$5.000","desc":"El banco estatal. Montos mínimos bajos y cobertura nacional."},
  "Scotiabank":{"url":"https://www.scotiabankchile.cl/Inversiones/fondos-mutuos","digital":true,"minInvest":"$10.000","desc":"Banco internacional con presencia en Chile."},
  "Santander":{"url":"https://www.santander.cl/personas/inversiones/fondos-mutuos","digital":true,"minInvest":"$5.000","desc":"Banco global con amplia gama de fondos."},
  "Itaú":{"url":"https://www.itau.cl/inversiones","digital":true,"minInvest":"$10.000","desc":"Banco brasileño con operaciones en Chile. Buena oferta digital."},
  "Fintual":{"url":"https://fintual.cl","digital":true,"minInvest":"$1","desc":"100% digital, sin mínimos. Comisión única de 1.19%. La opción fintech."},
  "Security":{"url":"https://www.security.cl/inversiones","digital":true,"minInvest":"$10.000","desc":"Grupo financiero chileno con fondos para distintos perfiles."},
  "BICE":{"url":"https://banco.bice.cl/inversiones/fondos-mutuos","digital":true,"minInvest":"$1","desc":"Grupo BICE. Sin monto mínimo en series digitales. 100% online."},
  "LarrainVial":{"url":"https://www.larrainvial.com","digital":true,"minInvest":"$100.000","desc":"La corredora más grande de Chile. Fondos premium."}
};

const DATA_DATE = "2026-03-28";
