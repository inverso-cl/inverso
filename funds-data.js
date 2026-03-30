// Datos actualizados: 2026-03-28
// Fuentes: CMF, sitios oficiales de cada administradora, Morningstar Chile
// Fondos principales de: BCI, Banchile, BancoEstado, Scotiabank, Santander
const FUNDS_DATA = [
  {"name":"BCI Rendimiento","provider":"BCI","currency":"CLP","category":"deuda","risk":1,"rent30":0.35,"rent12":4.50,"fee":0.60,"desc":"Invierte en instrumentos de deuda de corto plazo, emisores nacionales. Duración máxima 90 días."},
  {"name":"BCI Monetario I","provider":"BCI","currency":"CLP","category":"deuda","risk":1,"rent30":0.37,"rent12":4.75,"fee":0.50,"desc":"Fondo money market que invierte en depósitos y pagarés de corto plazo. Alta liquidez."},
  {"name":"BCI Ahorro Digital","provider":"BCI","currency":"CLP","category":"deuda","risk":1,"rent30":0.39,"rent12":4.90,"fee":0.45,"desc":"Fondo 100% digital de renta fija corto plazo. La comisión más baja de BCI."},
  {"name":"BCI Estrategia Pesos hasta 1 año","provider":"BCI","currency":"CLP","category":"deuda","risk":2,"rent30":0.50,"rent12":5.80,"fee":1.19,"desc":"Deuda nacional con duración hasta 365 días. Busca superar inflación."},
  {"name":"BCI Estrategia UF hasta 1 año","provider":"BCI","currency":"CLP","category":"deuda","risk":2,"rent30":0.45,"rent12":5.50,"fee":1.10,"desc":"Instrumentos de deuda reajustables en UF. Protección contra inflación."},
  {"name":"BCI Cartera Mediano Plazo","provider":"BCI","currency":"CLP","category":"deuda","risk":2,"rent30":0.55,"rent12":6.30,"fee":1.30,"desc":"Bonos y depósitos de mediano plazo. Mayor duración, mayor rentabilidad potencial."},
  {"name":"BCI Deuda Global","provider":"BCI","currency":"USD","category":"deuda","risk":2,"rent30":-0.25,"rent12":2.40,"fee":1.25,"desc":"Instrumentos de deuda internacional en dólares. Diversificación geográfica."},
  {"name":"BCI Cartera Patrimonial Balanceada","provider":"BCI","currency":"CLP","category":"balanceado","risk":3,"rent30":1.05,"rent12":8.10,"fee":1.85,"desc":"Mezcla renta fija y variable en proporciones equilibradas. Para perfil moderado."},
  {"name":"BCI Gestión Global Dinámica","provider":"BCI","currency":"CLP","category":"balanceado","risk":3,"rent30":1.20,"rent12":9.00,"fee":2.38,"desc":"Estrategia global que ajusta exposición a renta variable según mercado."},
  {"name":"BCI Acciones Chilenas","provider":"BCI","currency":"CLP","category":"accionario","risk":4,"rent30":2.10,"rent12":16.20,"fee":2.98,"desc":"Invierte en acciones de empresas chilenas listadas en bolsa."},
  {"name":"BCI Selección Bursátil","provider":"BCI","currency":"CLP","category":"accionario","risk":4,"rent30":1.80,"rent12":14.80,"fee":2.68,"desc":"Selección activa de las mejores acciones chilenas según análisis fundamental."},
  {"name":"BCI Estados Unidos","provider":"BCI","currency":"USD","category":"accionario","risk":5,"rent30":0.90,"rent12":21.50,"fee":3.20,"desc":"Acciones de empresas estadounidenses. Riesgo de tipo de cambio adicional."},
  {"name":"BCI América Latina","provider":"BCI","currency":"CLP","category":"accionario","risk":5,"rent30":2.60,"rent12":18.30,"fee":3.10,"desc":"Acciones de empresas latinoamericanas. Alta volatilidad, alto potencial."},
  {"name":"Banchile Utilidades","provider":"Banchile","currency":"CLP","category":"deuda","risk":1,"rent30":0.36,"rent12":4.60,"fee":0.55,"desc":"Deuda de corto plazo en UF, emisores nacionales. Bajo riesgo."},
  {"name":"Banchile Depósito XXI","provider":"Banchile","currency":"CLP","category":"deuda","risk":1,"rent30":0.34,"rent12":4.30,"fee":0.48,"desc":"Invierte en depósitos bancarios y títulos de corto plazo. Muy conservador."},
  {"name":"Banchile Horizonte","provider":"Banchile","currency":"CLP","category":"deuda","risk":2,"rent30":0.48,"rent12":5.70,"fee":1.05,"desc":"Renta fija mediano plazo. Busca estabilidad con algo más de rentabilidad."},
  {"name":"Banchile Deuda Chile","provider":"Banchile","currency":"CLP","category":"deuda","risk":2,"rent30":0.55,"rent12":6.20,"fee":1.15,"desc":"Bonos corporativos y soberanos chilenos de mediano y largo plazo."},
  {"name":"Banchile Latam Corporate IG","provider":"Banchile","currency":"USD","category":"deuda","risk":2,"rent30":0.18,"rent12":3.50,"fee":1.40,"desc":"Bonos de empresas latinoamericanas con grado de inversión. En dólares."},
  {"name":"Banchile Estrategia Moderada","provider":"Banchile","currency":"CLP","category":"balanceado","risk":3,"rent30":0.90,"rent12":7.80,"fee":1.90,"desc":"Mezcla de renta fija y variable, nacional y extranjera. Perfil moderado."},
  {"name":"Banchile Estrategia Agresiva","provider":"Banchile","currency":"CLP","category":"balanceado","risk":3,"rent30":1.35,"rent12":10.20,"fee":2.20,"desc":"Mayor exposición a renta variable. Para quienes aceptan más fluctuaciones."},
  {"name":"Banchile Acciones Nacionales","provider":"Banchile","currency":"CLP","category":"accionario","risk":4,"rent30":2.00,"rent12":15.80,"fee":2.85,"desc":"Acciones del mercado chileno. Premio Salmón por rentabilidad ajustada por riesgo."},
  {"name":"Banchile Asiático Emergente","provider":"Banchile","currency":"USD","category":"accionario","risk":5,"rent30":1.50,"rent12":12.40,"fee":3.00,"desc":"Acciones de corporaciones asiáticas. Diversificación geográfica extrema."},
  {"name":"Banchile USA Equity","provider":"Banchile","currency":"USD","category":"accionario","risk":5,"rent30":0.80,"rent12":20.50,"fee":3.15,"desc":"Acciones de grandes empresas estadounidenses. Exposición al mercado más grande del mundo."},
  {"name":"BancoEstado Money Market","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":1,"rent30":0.34,"rent12":4.35,"fee":0.50,"desc":"Instrumentos de deuda de muy corto plazo. Máxima liquidez y seguridad."},
  {"name":"BancoEstado Ahorro Plus","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":1,"rent30":0.38,"rent12":4.70,"fee":0.55,"desc":"Para personas que buscan rentabilidad estable sin asumir riesgo."},
  {"name":"BancoEstado Renta Mediano Plazo","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":2,"rent30":0.47,"rent12":5.60,"fee":1.00,"desc":"Bonos y depósitos de mediano plazo. Comisión competitiva."},
  {"name":"BancoEstado Renta UF","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":2,"rent30":0.50,"rent12":5.90,"fee":1.10,"desc":"Instrumentos reajustables en UF. Protección contra inflación."},
  {"name":"BancoEstado Moderado","provider":"BancoEstado","currency":"CLP","category":"balanceado","risk":3,"rent30":0.80,"rent12":7.20,"fee":1.75,"desc":"Mezcla equilibrada para perfil moderado. Accesible desde montos bajos."},
  {"name":"BancoEstado BNP Paribas Acciones Desarrolladas","provider":"BancoEstado","currency":"USD","category":"accionario","risk":5,"rent30":0.70,"rent12":19.50,"fee":2.80,"desc":"Acciones de mercados desarrollados. Premio Morningstar 2025 renta variable internacional."},
  {"name":"BancoEstado Acciones Nacionales","provider":"BancoEstado","currency":"CLP","category":"accionario","risk":4,"rent30":1.90,"rent12":15.00,"fee":2.70,"desc":"Acciones de empresas chilenas. La comisión más baja en accionarios nacionales."},
  {"name":"Scotiabank Money Market","provider":"Scotiabank","currency":"CLP","category":"deuda","risk":1,"rent30":0.33,"rent12":4.20,"fee":0.52,"desc":"Fondo de liquidez inmediata. Depósitos y pagarés de corto plazo."},
  {"name":"Scotiabank Renta Corto Plazo","provider":"Scotiabank","currency":"CLP","category":"deuda","risk":1,"rent30":0.36,"rent12":4.50,"fee":0.60,"desc":"Instrumentos de deuda con duración menor a 365 días."},
  {"name":"Scotiabank Deuda Mediano Plazo","provider":"Scotiabank","currency":"CLP","category":"deuda","risk":2,"rent30":0.52,"rent12":5.75,"fee":1.15,"desc":"Bonos corporativos y soberanos de mediano plazo."},
  {"name":"Scotiabank Balanceado","provider":"Scotiabank","currency":"CLP","category":"balanceado","risk":3,"rent30":0.95,"rent12":7.50,"fee":1.95,"desc":"Portafolio diversificado entre renta fija y variable."},
  {"name":"Scotiabank Acciones Chilenas","provider":"Scotiabank","currency":"CLP","category":"accionario","risk":4,"rent30":2.05,"rent12":14.50,"fee":2.90,"desc":"Acciones del IPSA y mercado nacional chileno."},
  {"name":"Scotiabank USA Equity","provider":"Scotiabank","currency":"USD","category":"accionario","risk":5,"rent30":0.85,"rent12":19.80,"fee":3.10,"desc":"Acciones de empresas del S&P 500 y Nasdaq."},
  {"name":"Santander Renta Corto Plazo","provider":"Santander","currency":"CLP","category":"deuda","risk":1,"rent30":0.34,"rent12":4.40,"fee":0.55,"desc":"Deuda de corto plazo, emisores nacionales de alta calidad crediticia."},
  {"name":"Santander Money Market","provider":"Santander","currency":"CLP","category":"deuda","risk":1,"rent30":0.37,"rent12":4.65,"fee":0.48,"desc":"Instrumentos de muy corto plazo. La comisión más baja de Santander."},
  {"name":"Santander Renta Mediana","provider":"Santander","currency":"CLP","category":"deuda","risk":2,"rent30":0.51,"rent12":5.85,"fee":1.10,"desc":"Bonos de mediano plazo con duración entre 1 y 3 años."},
  {"name":"Santander Bonos Chile","provider":"Santander","currency":"CLP","category":"deuda","risk":2,"rent30":0.58,"rent12":6.40,"fee":1.25,"desc":"Bonos soberanos y corporativos chilenos. Mayor duración, mayor potencial."},
  {"name":"Santander Equilibrio","provider":"Santander","currency":"CLP","category":"balanceado","risk":3,"rent30":1.00,"rent12":7.70,"fee":1.90,"desc":"Portafolio balanceado que ajusta exposición según condiciones de mercado."},
  {"name":"Santander Acciones Chilenas","provider":"Santander","currency":"CLP","category":"accionario","risk":4,"rent30":2.15,"rent12":15.50,"fee":2.85,"desc":"Acciones del mercado nacional chileno con gestión activa."},
  {"name":"Santander Acciones Globales","provider":"Santander","currency":"USD","category":"accionario","risk":5,"rent30":0.75,"rent12":20.00,"fee":3.05,"desc":"Diversificación global en acciones de mercados desarrollados y emergentes."},
  {"name":"Santander Latam Equity","provider":"Santander","currency":"CLP","category":"accionario","risk":5,"rent30":2.40,"rent12":17.20,"fee":3.00,"desc":"Acciones de empresas latinoamericanas de gran capitalización."}
];

const DEPOSITS_DATA = {
  "BCI": [
    {"plazo":30,"tasa":0.32,"tasaAnual":3.90,"minMonto":500000},
    {"plazo":90,"tasa":0.98,"tasaAnual":4.00,"minMonto":500000},
    {"plazo":180,"tasa":2.05,"tasaAnual":4.15,"minMonto":1000000},
    {"plazo":360,"tasa":4.25,"tasaAnual":4.25,"minMonto":1000000}
  ],
  "Banchile": [
    {"plazo":30,"tasa":0.31,"tasaAnual":3.80,"minMonto":500000},
    {"plazo":90,"tasa":0.96,"tasaAnual":3.90,"minMonto":500000},
    {"plazo":180,"tasa":2.00,"tasaAnual":4.05,"minMonto":1000000},
    {"plazo":360,"tasa":4.18,"tasaAnual":4.18,"minMonto":1000000}
  ],
  "BancoEstado": [
    {"plazo":30,"tasa":0.33,"tasaAnual":4.05,"minMonto":250000},
    {"plazo":90,"tasa":1.02,"tasaAnual":4.15,"minMonto":250000},
    {"plazo":180,"tasa":2.12,"tasaAnual":4.30,"minMonto":500000},
    {"plazo":360,"tasa":4.40,"tasaAnual":4.40,"minMonto":500000}
  ],
  "Scotiabank": [
    {"plazo":30,"tasa":0.30,"tasaAnual":3.70,"minMonto":500000},
    {"plazo":90,"tasa":0.93,"tasaAnual":3.80,"minMonto":500000},
    {"plazo":180,"tasa":1.95,"tasaAnual":3.95,"minMonto":1000000},
    {"plazo":360,"tasa":4.05,"tasaAnual":4.05,"minMonto":1000000}
  ],
  "Santander": [
    {"plazo":30,"tasa":0.31,"tasaAnual":3.85,"minMonto":500000},
    {"plazo":90,"tasa":0.97,"tasaAnual":3.95,"minMonto":500000},
    {"plazo":180,"tasa":2.02,"tasaAnual":4.10,"minMonto":1000000},
    {"plazo":360,"tasa":4.20,"tasaAnual":4.20,"minMonto":1000000}
  ]
};

const DATA_DATE = "2026-03-28";
