// Datos actualizados: 2025-12-29
// Fuentes: CMF, sitios de cada administradora, Morningstar, Rankia
const FUNDS_DATA = [
  {"name":"BCI Rendimiento","provider":"BCI","currency":"CLP","category":"deuda","risk":1,"rent30":0.38,"rent12":4.85,"fee":0.60},
  {"name":"BCI Monetario I","provider":"BCI","currency":"CLP","category":"deuda","risk":1,"rent30":0.40,"rent12":5.10,"fee":0.50},
  {"name":"BCI Ahorro Digital","provider":"BCI","currency":"CLP","category":"deuda","risk":1,"rent30":0.42,"rent12":5.20,"fee":0.45},
  {"name":"BCI Estrategia Pesos hasta 1 año","provider":"BCI","currency":"CLP","category":"deuda","risk":2,"rent30":0.55,"rent12":6.30,"fee":1.19},
  {"name":"BCI Estrategia UF hasta 1 año","provider":"BCI","currency":"CLP","category":"deuda","risk":2,"rent30":0.48,"rent12":5.80,"fee":1.10},
  {"name":"BCI Cartera Mediano Plazo","provider":"BCI","currency":"CLP","category":"deuda","risk":2,"rent30":0.60,"rent12":6.80,"fee":1.30},
  {"name":"BCI Deuda Global","provider":"BCI","currency":"USD","category":"deuda","risk":2,"rent30":-0.30,"rent12":2.10,"fee":1.25},
  {"name":"BCI Cartera Patrimonial Balanceada","provider":"BCI","currency":"CLP","category":"balanceado","risk":3,"rent30":1.10,"rent12":8.50,"fee":1.85},
  {"name":"BCI Gestión Global Dinámica","provider":"BCI","currency":"CLP","category":"balanceado","risk":3,"rent30":1.25,"rent12":9.20,"fee":2.38},
  {"name":"BCI Acciones Chilenas","provider":"BCI","currency":"CLP","category":"accionario","risk":4,"rent30":2.30,"rent12":14.80,"fee":2.98},
  {"name":"BCI Selección Bursátil","provider":"BCI","currency":"CLP","category":"accionario","risk":4,"rent30":1.90,"rent12":13.50,"fee":2.68},
  {"name":"BCI Estados Unidos","provider":"BCI","currency":"USD","category":"accionario","risk":5,"rent30":-1.20,"rent12":18.50,"fee":3.20},
  {"name":"BCI América Latina","provider":"BCI","currency":"CLP","category":"accionario","risk":5,"rent30":2.80,"rent12":16.40,"fee":3.10},
  {"name":"Banchile Utilidades","provider":"Banchile","currency":"CLP","category":"deuda","risk":1,"rent30":0.39,"rent12":4.72,"fee":0.55},
  {"name":"Banchile Depósito XXI","provider":"Banchile","currency":"CLP","category":"deuda","risk":1,"rent30":0.36,"rent12":4.50,"fee":0.48},
  {"name":"Banchile Horizonte","provider":"Banchile","currency":"CLP","category":"deuda","risk":2,"rent30":0.52,"rent12":6.10,"fee":1.05},
  {"name":"Banchile Deuda Chile","provider":"Banchile","currency":"CLP","category":"deuda","risk":2,"rent30":0.58,"rent12":6.50,"fee":1.15},
  {"name":"Banchile Latam Corporate IG","provider":"Banchile","currency":"USD","category":"deuda","risk":2,"rent30":0.20,"rent12":3.80,"fee":1.40},
  {"name":"Banchile Estrategia Moderada","provider":"Banchile","currency":"CLP","category":"balanceado","risk":3,"rent30":0.95,"rent12":8.20,"fee":1.90},
  {"name":"Banchile Estrategia Agresiva","provider":"Banchile","currency":"CLP","category":"balanceado","risk":3,"rent30":1.40,"rent12":10.50,"fee":2.20},
  {"name":"Banchile Acciones Nacionales","provider":"Banchile","currency":"CLP","category":"accionario","risk":4,"rent30":2.20,"rent12":15.10,"fee":2.85},
  {"name":"Banchile Asiático Emergente","provider":"Banchile","currency":"USD","category":"accionario","risk":5,"rent30":1.60,"rent12":11.80,"fee":3.00},
  {"name":"Banchile USA Equity","provider":"Banchile","currency":"USD","category":"accionario","risk":5,"rent30":-0.90,"rent12":19.20,"fee":3.15},
  {"name":"BancoEstado Money Market","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":1,"rent30":0.37,"rent12":4.60,"fee":0.50},
  {"name":"BancoEstado Ahorro Plus","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":1,"rent30":0.41,"rent12":5.00,"fee":0.55},
  {"name":"BancoEstado Renta Mediano Plazo","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":2,"rent30":0.50,"rent12":5.90,"fee":1.00},
  {"name":"BancoEstado Renta UF","provider":"BancoEstado","currency":"CLP","category":"deuda","risk":2,"rent30":0.53,"rent12":6.20,"fee":1.10},
  {"name":"BancoEstado Moderado","provider":"BancoEstado","currency":"CLP","category":"balanceado","risk":3,"rent30":0.85,"rent12":7.50,"fee":1.75},
  {"name":"BancoEstado BNP Paribas Acciones Desarrolladas","provider":"BancoEstado","currency":"USD","category":"accionario","risk":5,"rent30":-0.60,"rent12":17.80,"fee":2.80},
  {"name":"BancoEstado Acciones Nacionales","provider":"BancoEstado","currency":"CLP","category":"accionario","risk":4,"rent30":2.10,"rent12":14.20,"fee":2.70},
  {"name":"Scotiabank Money Market","provider":"Scotiabank","currency":"CLP","category":"deuda","risk":1,"rent30":0.35,"rent12":4.40,"fee":0.52},
  {"name":"Scotiabank Renta Corto Plazo","provider":"Scotiabank","currency":"CLP","category":"deuda","risk":1,"rent30":0.38,"rent12":4.70,"fee":0.60},
  {"name":"Scotiabank Deuda Mediano Plazo","provider":"Scotiabank","currency":"CLP","category":"deuda","risk":2,"rent30":0.55,"rent12":6.00,"fee":1.15},
  {"name":"Scotiabank Balanceado","provider":"Scotiabank","currency":"CLP","category":"balanceado","risk":3,"rent30":1.00,"rent12":7.80,"fee":1.95},
  {"name":"Scotiabank Acciones Chilenas","provider":"Scotiabank","currency":"CLP","category":"accionario","risk":4,"rent30":2.15,"rent12":13.90,"fee":2.90},
  {"name":"Scotiabank USA Equity","provider":"Scotiabank","currency":"USD","category":"accionario","risk":5,"rent30":-1.10,"rent12":17.50,"fee":3.10},
  {"name":"Santander Renta Corto Plazo","provider":"Santander","currency":"CLP","category":"deuda","risk":1,"rent30":0.36,"rent12":4.55,"fee":0.55},
  {"name":"Santander Money Market","provider":"Santander","currency":"CLP","category":"deuda","risk":1,"rent30":0.39,"rent12":4.80,"fee":0.48},
  {"name":"Santander Renta Mediana","provider":"Santander","currency":"CLP","category":"deuda","risk":2,"rent30":0.54,"rent12":6.15,"fee":1.10},
  {"name":"Santander Bonos Chile","provider":"Santander","currency":"CLP","category":"deuda","risk":2,"rent30":0.62,"rent12":6.70,"fee":1.25},
  {"name":"Santander Equilibrio","provider":"Santander","currency":"CLP","category":"balanceado","risk":3,"rent30":1.05,"rent12":8.00,"fee":1.90},
  {"name":"Santander Acciones Chilenas","provider":"Santander","currency":"CLP","category":"accionario","risk":4,"rent30":2.25,"rent12":14.50,"fee":2.85},
  {"name":"Santander Acciones Globales","provider":"Santander","currency":"USD","category":"accionario","risk":5,"rent30":-0.80,"rent12":18.00,"fee":3.05},
  {"name":"Santander Latam Equity","provider":"Santander","currency":"CLP","category":"accionario","risk":5,"rent30":2.50,"rent12":15.80,"fee":3.00}
];

const DEPOSITS_DATA = {
  "BCI": [
    {"plazo":30,"tasa":0.34,"tasaAnual":4.15,"minMonto":500000},
    {"plazo":90,"tasa":1.08,"tasaAnual":4.40,"minMonto":500000},
    {"plazo":180,"tasa":2.22,"tasaAnual":4.50,"minMonto":1000000},
    {"plazo":360,"tasa":4.60,"tasaAnual":4.60,"minMonto":1000000}
  ],
  "Banchile": [
    {"plazo":30,"tasa":0.33,"tasaAnual":4.05,"minMonto":500000},
    {"plazo":90,"tasa":1.05,"tasaAnual":4.28,"minMonto":500000},
    {"plazo":180,"tasa":2.18,"tasaAnual":4.42,"minMonto":1000000},
    {"plazo":360,"tasa":4.55,"tasaAnual":4.55,"minMonto":1000000}
  ],
  "BancoEstado": [
    {"plazo":30,"tasa":0.35,"tasaAnual":4.25,"minMonto":250000},
    {"plazo":90,"tasa":1.12,"tasaAnual":4.55,"minMonto":250000},
    {"plazo":180,"tasa":2.30,"tasaAnual":4.66,"minMonto":500000},
    {"plazo":360,"tasa":4.75,"tasaAnual":4.75,"minMonto":500000}
  ],
  "Scotiabank": [
    {"plazo":30,"tasa":0.32,"tasaAnual":3.95,"minMonto":500000},
    {"plazo":90,"tasa":1.02,"tasaAnual":4.15,"minMonto":500000},
    {"plazo":180,"tasa":2.15,"tasaAnual":4.35,"minMonto":1000000},
    {"plazo":360,"tasa":4.45,"tasaAnual":4.45,"minMonto":1000000}
  ],
  "Santander": [
    {"plazo":30,"tasa":0.33,"tasaAnual":4.10,"minMonto":500000},
    {"plazo":90,"tasa":1.06,"tasaAnual":4.32,"minMonto":500000},
    {"plazo":180,"tasa":2.20,"tasaAnual":4.46,"minMonto":1000000},
    {"plazo":360,"tasa":4.58,"tasaAnual":4.58,"minMonto":1000000}
  ]
};

const DATA_DATE = "2025-12-29";
