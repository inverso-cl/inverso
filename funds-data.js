// Datos REALES — Fuente: CMF (Comisión para el Mercado Financiero)
// 313 fondos de 10 instituciones, con series detalladas
// rent30/90/180/360: variación % en 30, 90, 180 y 360 días
// TAC: Tasa Anual de Costos estimada desde datos CMF
// Cada fondo incluye array 'series' con todas las series disponibles
const FUNDS_DATA = [
  {
    "name": "Banchile Depósito XXI",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "BCH",
        "rent30": 1.13,
        "rent90": 2.72,
        "rent180": 3.94,
        "rent360": 6.44,
        "tac": 0.01,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 1.09,
        "rent90": 2.59,
        "rent180": 3.68,
        "rent360": 5.91,
        "tac": 0.51,
        "participes": 561
      },
      {
        "serie": "V",
        "rent30": 1.07,
        "rent90": 2.52,
        "rent180": 3.54,
        "rent360": 5.64,
        "tac": 0.77,
        "participes": 1
      },
      {
        "serie": "M",
        "rent30": 1,
        "rent90": 2.28,
        "rent180": 3.07,
        "rent360": 4.7,
        "tac": 1.67,
        "participes": 7862
      },
      {
        "serie": "L",
        "rent30": 0.98,
        "rent90": 2.22,
        "rent180": 2.95,
        "rent360": 4.46,
        "tac": 1.9,
        "participes": 4593
      }
    ],
    "rent30": 1.09,
    "rent90": 2.59,
    "rent180": 3.68,
    "rent360": 5.91,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Disponible",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0.36,
        "rent90": 1.17,
        "rent180": 2.36,
        "rent360": 2.91,
        "tac": 0,
        "participes": 2
      },
      {
        "serie": "B",
        "rent30": 0.32,
        "rent90": 1.04,
        "rent180": 2.11,
        "rent360": 4.31,
        "tac": 0.5,
        "participes": 771
      },
      {
        "serie": "APVDIGITAL",
        "rent30": 0.32,
        "rent90": 1.04,
        "rent180": 2.11,
        "rent360": 4.31,
        "tac": 0.51,
        "participes": 373
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.27,
        "rent90": 0.87,
        "rent180": 1.75,
        "rent360": 3.6,
        "tac": 1.2,
        "participes": 5277
      },
      {
        "serie": "M",
        "rent30": 0.26,
        "rent90": 0.84,
        "rent180": 1.7,
        "rent360": 3.49,
        "tac": 1.31,
        "participes": 362
      },
      {
        "serie": "L",
        "rent30": 0.24,
        "rent90": 0.79,
        "rent180": 1.59,
        "rent360": 3.28,
        "tac": 1.73,
        "participes": 86235
      }
    ],
    "rent30": 0.27,
    "rent90": 0.87,
    "rent180": 1.75,
    "rent360": 3.6,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Banchile Ahorro Nominal",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0.28,
        "rent90": 1.04,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 0.21,
        "rent90": 0.91,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.01,
        "participes": 62
      },
      {
        "serie": "L",
        "rent30": 0.19,
        "rent90": 0.87,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.23,
        "participes": 7988
      }
    ],
    "rent30": 0.21,
    "rent90": 0.91,
    "rent180": 0,
    "rent360": 0,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Global Dollar",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": -4.34,
        "rent90": -3.48,
        "rent180": 1.31,
        "rent360": 33.25,
        "tac": 0.01,
        "participes": 1
      },
      {
        "serie": "M",
        "rent30": -4.56,
        "rent90": -4.21,
        "rent180": -0.2,
        "rent360": 29.39,
        "tac": 2.98,
        "participes": 82
      },
      {
        "serie": "L",
        "rent30": -4.6,
        "rent90": -4.36,
        "rent180": -0.5,
        "rent360": 28.63,
        "tac": 3.58,
        "participes": 409
      }
    ],
    "rent30": -4.34,
    "rent90": -3.48,
    "rent180": 1.31,
    "rent360": 33.25,
    "defaultSerie": "BCH"
  },
  {
    "name": "Banchile Emerging",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "B",
        "rent30": -3.18,
        "rent90": 5.95,
        "rent180": 3.55,
        "rent360": 29.13,
        "tac": 1.58,
        "participes": 305
      },
      {
        "serie": "M",
        "rent30": -3.29,
        "rent90": 5.55,
        "rent180": 2.78,
        "rent360": 27.26,
        "tac": 3.05,
        "participes": 318
      },
      {
        "serie": "L",
        "rent30": -3.33,
        "rent90": 5.39,
        "rent180": 2.47,
        "rent360": 26.52,
        "tac": 3.64,
        "participes": 1077
      }
    ],
    "rent30": -3.18,
    "rent90": 5.95,
    "rent180": 3.55,
    "rent360": 29.13,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Blackrock ESG",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APVDIGITAL",
        "rent30": -2.46,
        "rent90": -2.96,
        "rent180": -4.68,
        "rent360": 17.18,
        "tac": 0.68,
        "participes": 77
      },
      {
        "serie": "DIGITAL",
        "rent30": -2.5,
        "rent90": -3.09,
        "rent180": -4.94,
        "rent360": 16.55,
        "tac": 1.22,
        "participes": 1275
      },
      {
        "serie": "B",
        "rent30": -2.53,
        "rent90": -2.97,
        "rent180": -6.38,
        "rent360": 0,
        "tac": 1.52,
        "participes": 1
      },
      {
        "serie": "L",
        "rent30": -2.68,
        "rent90": -3.68,
        "rent180": -6.07,
        "rent360": 13.84,
        "tac": 3.6,
        "participes": 40
      }
    ],
    "rent30": -2.5,
    "rent90": -3.09,
    "rent180": -4.94,
    "rent360": 16.55,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Banchile Horizonte",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 1.17,
        "rent90": 2.6,
        "rent180": 4.24,
        "rent360": 7.24,
        "tac": 0.01,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 1.13,
        "rent90": 2.46,
        "rent180": 3.97,
        "rent360": 6.72,
        "tac": 0.51,
        "participes": 434
      },
      {
        "serie": "V",
        "rent30": 1.11,
        "rent90": 2.4,
        "rent180": 3.84,
        "rent360": 6.44,
        "tac": 0.77,
        "participes": 1
      },
      {
        "serie": "M",
        "rent30": 1.04,
        "rent90": 2.16,
        "rent180": 3.37,
        "rent360": 5.49,
        "tac": 1.67,
        "participes": 2033
      },
      {
        "serie": "L",
        "rent30": 1.02,
        "rent90": 2.1,
        "rent180": 3.24,
        "rent360": 5.25,
        "tac": 1.91,
        "participes": 1794
      }
    ],
    "rent30": 1.13,
    "rent90": 2.46,
    "rent180": 3.97,
    "rent360": 6.72,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Estrategico",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 1.08,
        "rent90": 2.66,
        "rent180": 4.03,
        "rent360": 7.13,
        "tac": 0.01,
        "participes": 1
      },
      {
        "serie": "APVDIGITAL",
        "rent30": 1.03,
        "rent90": 2.49,
        "rent180": 3.69,
        "rent360": 6.44,
        "tac": 0.66,
        "participes": 320
      },
      {
        "serie": "B",
        "rent30": 1.01,
        "rent90": 2.4,
        "rent180": 3.51,
        "rent360": 6.07,
        "tac": 1,
        "participes": 1740
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.99,
        "rent90": 2.35,
        "rent180": 3.41,
        "rent360": 5.88,
        "tac": 1.18,
        "participes": 1304
      },
      {
        "serie": "M",
        "rent30": 0.95,
        "rent90": 2.23,
        "rent180": 3.16,
        "rent360": 5.38,
        "tac": 1.67,
        "participes": 6922
      },
      {
        "serie": "L",
        "rent30": 0.94,
        "rent90": 2.17,
        "rent180": 3.04,
        "rent360": 5.13,
        "tac": 1.9,
        "participes": 10725
      }
    ],
    "rent30": 0.99,
    "rent90": 2.35,
    "rent180": 3.41,
    "rent360": 5.88,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Banchile Estatal Largo Plazo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "L",
        "rent30": 2.82,
        "rent90": 2.99,
        "rent180": 5.64,
        "rent360": 5.67,
        "tac": 1.16,
        "participes": 550
      }
    ],
    "rent30": 2.82,
    "rent90": 2.99,
    "rent180": 5.64,
    "rent360": 5.67,
    "defaultSerie": "L"
  },
  {
    "name": "Banchile Capital Financiero",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0.36,
        "rent90": 1.19,
        "rent180": 2.41,
        "rent360": 4.97,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 0.34,
        "rent90": 1.14,
        "rent180": 2.31,
        "rent360": 4.77,
        "tac": 0.2,
        "participes": 1667
      },
      {
        "serie": "A",
        "rent30": 0.24,
        "rent90": 0.81,
        "rent180": 1.64,
        "rent360": 3.43,
        "tac": 1.55,
        "participes": 16823
      }
    ],
    "rent30": 0.34,
    "rent90": 1.14,
    "rent180": 2.31,
    "rent360": 4.77,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Utilidades",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 1.55,
        "rent90": 2.54,
        "rent180": 3.13,
        "rent360": 5.65,
        "tac": 0.01,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 1.47,
        "rent90": 2.28,
        "rent180": 2.61,
        "rent360": 4.61,
        "tac": 1,
        "participes": 494
      },
      {
        "serie": "M",
        "rent30": 1.46,
        "rent90": 2.24,
        "rent180": 2.55,
        "rent360": 4.47,
        "tac": 1.13,
        "participes": 850
      },
      {
        "serie": "L",
        "rent30": 1.45,
        "rent90": 2.23,
        "rent180": 2.52,
        "rent360": 4.41,
        "tac": 1.18,
        "participes": 14764
      }
    ],
    "rent30": 1.47,
    "rent90": 2.28,
    "rent180": 2.61,
    "rent360": 4.61,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Renta Corto Plazo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0.72,
        "rent90": 1.72,
        "rent180": 2.75,
        "rent360": 5.35,
        "tac": 0.01,
        "participes": 1
      },
      {
        "serie": "APVDIGITAL",
        "rent30": 0.68,
        "rent90": 1.59,
        "rent180": 2.49,
        "rent360": 4.83,
        "tac": 0.5,
        "participes": 214
      },
      {
        "serie": "B",
        "rent30": 0.68,
        "rent90": 1.59,
        "rent180": 2.49,
        "rent360": 4.83,
        "tac": 0.5,
        "participes": 329
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.66,
        "rent90": 1.51,
        "rent180": 2.34,
        "rent360": 4.52,
        "tac": 0.8,
        "participes": 4110
      },
      {
        "serie": "M",
        "rent30": 0.63,
        "rent90": 1.43,
        "rent180": 2.17,
        "rent360": 4.17,
        "tac": 1.14,
        "participes": 676
      },
      {
        "serie": "L",
        "rent30": 0.63,
        "rent90": 1.41,
        "rent180": 2.13,
        "rent360": 4.11,
        "tac": 1.19,
        "participes": 18750
      }
    ],
    "rent30": 0.66,
    "rent90": 1.51,
    "rent180": 2.34,
    "rent360": 4.52,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Banchile Deuda Soberana",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0.82,
        "rent90": 1.96,
        "rent180": 4.18,
        "rent360": 5.24,
        "tac": 0.01,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 0.74,
        "rent90": 1.7,
        "rent180": 3.65,
        "rent360": 4.2,
        "tac": 1.01,
        "participes": 63
      },
      {
        "serie": "M",
        "rent30": 0.69,
        "rent90": 1.53,
        "rent180": 3.31,
        "rent360": 3.52,
        "tac": 1.69,
        "participes": 418
      },
      {
        "serie": "L",
        "rent30": 0.67,
        "rent90": 1.47,
        "rent180": 3.18,
        "rent360": 3.28,
        "tac": 1.91,
        "participes": 261
      }
    ],
    "rent30": 0.74,
    "rent90": 1.7,
    "rent180": 3.65,
    "rent360": 4.2,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Capital Empresarial",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0.36,
        "rent90": 1.21,
        "rent180": 2.43,
        "rent360": 4.99,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": 0.24,
        "rent90": 0.82,
        "rent180": 1.66,
        "rent360": 3.45,
        "tac": 1.83,
        "participes": 28797
      }
    ],
    "rent30": 0.24,
    "rent90": 0.82,
    "rent180": 1.66,
    "rent360": 3.45,
    "defaultSerie": "A"
  },
  {
    "name": "Banchile Corporate Dollar",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0.32,
        "rent90": 1.09,
        "rent180": 2.2,
        "rent360": 4.43,
        "tac": 0,
        "participes": 3
      },
      {
        "serie": "A",
        "rent30": 0.25,
        "rent90": 0.84,
        "rent180": 1.71,
        "rent360": 3.45,
        "tac": 1.09,
        "participes": 46651
      }
    ],
    "rent30": 0.25,
    "rent90": 0.84,
    "rent180": 1.71,
    "rent360": 3.45,
    "defaultSerie": "A"
  },
  {
    "name": "Banchile Deuda Dólar",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": -0.03,
        "rent90": 0.77,
        "rent180": 1.92,
        "rent360": 4.66,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": -0.14,
        "rent90": 0.39,
        "rent180": 1.15,
        "rent360": 3.12,
        "tac": 1.5,
        "participes": 4030
      }
    ],
    "rent30": -0.14,
    "rent90": 0.39,
    "rent180": 1.15,
    "rent360": 3.12,
    "defaultSerie": "A"
  },
  {
    "name": "Banchile Deuda Global",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "M",
        "rent30": -2.06,
        "rent90": -1.21,
        "rent180": -0.44,
        "rent360": 2.67,
        "tac": 1.32,
        "participes": 174
      },
      {
        "serie": "L",
        "rent30": -2.1,
        "rent90": -1.33,
        "rent180": -0.68,
        "rent360": 2.19,
        "tac": 1.8,
        "participes": 715
      }
    ],
    "rent30": 0,
    "rent90": 0,
    "rent180": 0,
    "rent360": 0,
    "defaultSerie": "BCH"
  },
  {
    "name": "Banchile Emerging Dollar",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "M",
        "rent30": -5.67,
        "rent90": 2.92,
        "rent180": 5.79,
        "rent360": 33.2,
        "tac": 3.03,
        "participes": 89
      },
      {
        "serie": "L",
        "rent30": -5.71,
        "rent90": 2.77,
        "rent180": 5.47,
        "rent360": 32.42,
        "tac": 3.66,
        "participes": 497
      }
    ],
    "rent30": 0,
    "rent90": 0,
    "rent180": 0,
    "rent360": 0,
    "defaultSerie": "BCH"
  },
  {
    "name": "Banchile U.s Dollar",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "M",
        "rent30": -4.26,
        "rent90": -6.75,
        "rent180": -3.35,
        "rent360": 28.05,
        "tac": 3.01,
        "participes": 114
      },
      {
        "serie": "L",
        "rent30": -4.31,
        "rent90": -6.89,
        "rent180": -3.64,
        "rent360": 27.3,
        "tac": 3.61,
        "participes": 846
      }
    ],
    "rent30": 0,
    "rent90": 0,
    "rent180": 0,
    "rent360": 0,
    "defaultSerie": "BCH"
  },
  {
    "name": "Banchile Moderado",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APVDIGITAL",
        "rent30": -0.61,
        "rent90": 1.11,
        "rent180": 2.63,
        "rent360": 16.02,
        "tac": 0.66,
        "participes": 467
      },
      {
        "serie": "DIGITAL",
        "rent30": -0.66,
        "rent90": 0.98,
        "rent180": 2.35,
        "rent360": 15.4,
        "tac": 1.21,
        "participes": 6303
      }
    ],
    "rent30": -0.66,
    "rent90": 0.98,
    "rent180": 2.35,
    "rent360": 15.4,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Banchile Portafolio Moderado Largo Plazo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "B",
        "rent30": -0.42,
        "rent90": 1.16,
        "rent180": 2.4,
        "rent360": 15.29,
        "tac": 1.25,
        "participes": 4851
      },
      {
        "serie": "L",
        "rent30": -0.47,
        "rent90": 1,
        "rent180": 1.94,
        "rent360": 13.97,
        "tac": 1.89,
        "participes": 18231
      }
    ],
    "rent30": -0.42,
    "rent90": 1.16,
    "rent180": 2.4,
    "rent360": 15.29,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Portafolio Activo Dolar Moderado",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "L",
        "rent30": -2.95,
        "rent90": -1.73,
        "rent180": 0.58,
        "rent360": 14.81,
        "tac": 1.89,
        "participes": 1506
      }
    ],
    "rent30": -2.95,
    "rent90": -1.73,
    "rent180": 0.58,
    "rent360": 14.81,
    "defaultSerie": "L"
  },
  {
    "name": "Banchile Portafolio Activo Dolar Conservador",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "L",
        "rent30": -2.49,
        "rent90": -1.54,
        "rent180": 0.69,
        "rent360": 10.04,
        "tac": 1.55,
        "participes": 1345
      }
    ],
    "rent30": -2.49,
    "rent90": -1.54,
    "rent180": 0.69,
    "rent360": 10.04,
    "defaultSerie": "L"
  },
  {
    "name": "Banchile Conservador",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": -0.37,
        "rent360": -0.37,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APVDIGITAL",
        "rent30": 0.68,
        "rent90": 2.02,
        "rent180": 3.48,
        "rent360": 10.27,
        "tac": 0.67,
        "participes": 419
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.64,
        "rent90": 1.88,
        "rent180": 3.2,
        "rent360": 9.69,
        "tac": 1.21,
        "participes": 6452
      }
    ],
    "rent30": 0.64,
    "rent90": 1.88,
    "rent180": 3.2,
    "rent360": 9.69,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Banchile Portafolio Retorno Mediano Plazo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "B",
        "rent30": 1.06,
        "rent90": 2.35,
        "rent180": 3.26,
        "rent360": 5.45,
        "tac": 0.99,
        "participes": 566
      },
      {
        "serie": "L",
        "rent30": 1.01,
        "rent90": 2.18,
        "rent180": 2.92,
        "rent360": 4.76,
        "tac": 1.66,
        "participes": 15058
      }
    ],
    "rent30": 1.06,
    "rent90": 2.35,
    "rent180": 3.26,
    "rent360": 5.45,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Portafolio Ahorro Corto Plazo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "B",
        "rent30": 0.73,
        "rent90": 1.47,
        "rent180": 2.18,
        "rent360": 4.23,
        "tac": 1,
        "participes": 843
      },
      {
        "serie": "L",
        "rent30": 0.72,
        "rent90": 1.42,
        "rent180": 2.09,
        "rent360": 4.04,
        "tac": 1.19,
        "participes": 44308
      }
    ],
    "rent30": 0.73,
    "rent90": 1.47,
    "rent180": 2.18,
    "rent360": 4.23,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Portafolio Ahorro Dólar Corto Plazo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "L",
        "rent30": 0.03,
        "rent90": 0.6,
        "rent180": 1.43,
        "rent360": 3.38,
        "tac": 1.19,
        "participes": 5218
      }
    ],
    "rent30": 0.03,
    "rent90": 0.6,
    "rent180": 1.43,
    "rent360": 3.38,
    "defaultSerie": "L"
  },
  {
    "name": "Banchile Portafolio Conservador Largo Plazo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "B1",
        "rent30": 0.75,
        "rent90": 2.04,
        "rent180": 3.22,
        "rent360": 9.33,
        "tac": 1,
        "participes": 1430
      },
      {
        "serie": "L",
        "rent30": 0.7,
        "rent90": 1.9,
        "rent180": 2.9,
        "rent360": 8.57,
        "tac": 1.54,
        "participes": 18720
      }
    ],
    "rent30": 0,
    "rent90": 0,
    "rent180": 0,
    "rent360": 0,
    "defaultSerie": "BCH"
  },
  {
    "name": "Banchile Latam Accionario",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "B",
        "rent30": 3.5,
        "rent90": 17.76,
        "rent180": 20.21,
        "rent360": 50.56,
        "tac": 1.52,
        "participes": 460
      },
      {
        "serie": "M",
        "rent30": 3.38,
        "rent90": 17.31,
        "rent180": 19.32,
        "rent360": 48.38,
        "tac": 2.95,
        "participes": 679
      },
      {
        "serie": "L",
        "rent30": 3.33,
        "rent90": 17.14,
        "rent180": 18.96,
        "rent360": 47.51,
        "tac": 3.45,
        "participes": 2146
      }
    ],
    "rent30": 3.5,
    "rent90": 17.76,
    "rent180": 20.21,
    "rent360": 50.56,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Selección Acciones Chilenas",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "BCH",
        "rent30": 2.74,
        "rent90": 1.78,
        "rent180": 21.58,
        "rent360": 51.2,
        "tac": 1.04,
        "participes": 1
      },
      {
        "serie": "P2",
        "rent30": 2.57,
        "rent90": 1.19,
        "rent180": 18.56,
        "rent360": 40.6,
        "tac": 1.66,
        "participes": 24
      },
      {
        "serie": "B",
        "rent30": 2.62,
        "rent90": 1.39,
        "rent180": 20.66,
        "rent360": 48.97,
        "tac": 2.54,
        "participes": 1583
      },
      {
        "serie": "L",
        "rent30": 2.27,
        "rent90": 0.88,
        "rent180": 18.8,
        "rent360": 41.32,
        "tac": 3.43,
        "participes": 11228
      }
    ],
    "rent30": 2.62,
    "rent90": 1.39,
    "rent180": 20.66,
    "rent360": 48.97,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Dividendos Acciones Chilenas",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "B",
        "rent30": 2.09,
        "rent90": 2.95,
        "rent180": 18.51,
        "rent360": 40.92,
        "tac": 2.35,
        "participes": 436
      },
      {
        "serie": "L",
        "rent30": 1.85,
        "rent90": 2.66,
        "rent180": 16.7,
        "rent360": 32.59,
        "tac": 2.36,
        "participes": 4297
      }
    ],
    "rent30": 2.09,
    "rent90": 2.95,
    "rent180": 18.51,
    "rent360": 40.92,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Renta Variable Nacional",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "BCH",
        "rent30": 3.75,
        "rent90": 1.47,
        "rent180": 17.96,
        "rent360": 41.89,
        "tac": 0.01,
        "participes": 1
      },
      {
        "serie": "L",
        "rent30": 2.91,
        "rent90": 0.5,
        "rent180": 15.86,
        "rent360": 35.94,
        "tac": 0.61,
        "participes": 3006
      },
      {
        "serie": "B",
        "rent30": 3.63,
        "rent90": 1.09,
        "rent180": 17.07,
        "rent360": 39.8,
        "tac": 1.51,
        "participes": 134
      }
    ],
    "rent30": 3.63,
    "rent90": 1.09,
    "rent180": 17.07,
    "rent360": 39.8,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Global Accionario",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "APVDIGITAL",
        "rent30": -2.01,
        "rent90": -1.19,
        "rent180": -2.43,
        "rent360": 25.31,
        "tac": 0.67,
        "participes": 32
      },
      {
        "serie": "DIGITAL",
        "rent30": -2.05,
        "rent90": -1.32,
        "rent180": -2.69,
        "rent360": 24.64,
        "tac": 1.21,
        "participes": 443
      },
      {
        "serie": "B",
        "rent30": -2.12,
        "rent90": -1.53,
        "rent180": -3.09,
        "rent360": 23.65,
        "tac": 2.02,
        "participes": 387
      },
      {
        "serie": "M",
        "rent30": -2.19,
        "rent90": -1.77,
        "rent180": -3.56,
        "rent360": 22.46,
        "tac": 3,
        "participes": 547
      },
      {
        "serie": "L",
        "rent30": -2.23,
        "rent90": -1.92,
        "rent180": -3.85,
        "rent360": 21.74,
        "tac": 3.6,
        "participes": 1670
      }
    ],
    "rent30": -2.05,
    "rent90": -1.32,
    "rent180": -2.69,
    "rent360": 24.64,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Banchile Portafolio Activo Dolar Agresivo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "L",
        "rent30": -2.86,
        "rent90": -0.71,
        "rent180": 2.41,
        "rent360": 24.36,
        "tac": 2.14,
        "participes": 392
      }
    ],
    "rent30": -2.86,
    "rent90": -0.71,
    "rent180": 2.41,
    "rent360": 24.36,
    "defaultSerie": "L"
  },
  {
    "name": "Banchile Inversión USA",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "B",
        "rent30": -1.98,
        "rent90": -3.98,
        "rent180": -5.86,
        "rent360": 24.29,
        "tac": 1.53,
        "participes": 840
      },
      {
        "serie": "M",
        "rent30": -2.09,
        "rent90": -4.34,
        "rent180": -6.56,
        "rent360": 22.49,
        "tac": 3.01,
        "participes": 1168
      },
      {
        "serie": "L",
        "rent30": -2.14,
        "rent90": -4.48,
        "rent180": -6.84,
        "rent360": 21.77,
        "tac": 3.6,
        "participes": 2951
      }
    ],
    "rent30": -1.98,
    "rent90": -3.98,
    "rent180": -5.86,
    "rent360": 24.29,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Asiatico Emergente",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "B",
        "rent30": -4.83,
        "rent90": 2.86,
        "rent180": -0.5,
        "rent360": 24.21,
        "tac": 1.82,
        "participes": 357
      },
      {
        "serie": "V",
        "rent30": -4.87,
        "rent90": 2.71,
        "rent180": -0.78,
        "rent360": 23.52,
        "tac": 2.38,
        "participes": 1
      },
      {
        "serie": "M",
        "rent30": -4.92,
        "rent90": 2.55,
        "rent180": -1.08,
        "rent360": 22.77,
        "tac": 3.01,
        "participes": 798
      },
      {
        "serie": "L",
        "rent30": -4.96,
        "rent90": 2.4,
        "rent180": -1.38,
        "rent360": 22.05,
        "tac": 3.62,
        "participes": 1222
      }
    ],
    "rent30": -4.83,
    "rent90": 2.86,
    "rent180": -0.5,
    "rent360": 24.21,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Agresivo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APVDIGITAL",
        "rent30": -1.51,
        "rent90": 0.82,
        "rent180": 2.43,
        "rent360": 23.62,
        "tac": 0.67,
        "participes": 990
      },
      {
        "serie": "DIGITAL",
        "rent30": -1.55,
        "rent90": 0.68,
        "rent180": 2.15,
        "rent360": 22.96,
        "tac": 1.21,
        "participes": 4612
      }
    ],
    "rent30": -1.55,
    "rent90": 0.68,
    "rent180": 2.15,
    "rent360": 22.96,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Banchile Portafolio Agresivo Largo Plazo",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "B",
        "rent30": -1.74,
        "rent90": 0.44,
        "rent180": 1.87,
        "rent360": 22.52,
        "tac": 1.5,
        "participes": 3089
      },
      {
        "serie": "L",
        "rent30": -1.79,
        "rent90": 0.28,
        "rent180": 1.37,
        "rent360": 20.95,
        "tac": 2.12,
        "participes": 5920
      }
    ],
    "rent30": -1.74,
    "rent90": 0.44,
    "rent180": 1.87,
    "rent360": 22.52,
    "defaultSerie": "B"
  },
  {
    "name": "Banchile Europa Desarrollada",
    "provider": "Banchile",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "BCH",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "B",
        "rent30": -1.87,
        "rent90": 1.42,
        "rent180": 2.47,
        "rent360": 20.45,
        "tac": 1.53,
        "participes": 263
      },
      {
        "serie": "M",
        "rent30": -1.98,
        "rent90": 1.04,
        "rent180": 1.71,
        "rent360": 18.7,
        "tac": 3.01,
        "participes": 495
      },
      {
        "serie": "L",
        "rent30": -2.02,
        "rent90": 0.89,
        "rent180": 1.4,
        "rent360": 18,
        "tac": 3.6,
        "participes": 907
      }
    ],
    "rent30": -1.87,
    "rent90": 1.42,
    "rent180": 2.47,
    "rent360": 20.45,
    "defaultSerie": "B"
  },
  {
    "name": "Bancoestado Ahorro Corto Plazo",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "BE",
        "rent30": 1.5,
        "rent90": 2.5,
        "rent180": 3.16,
        "rent360": 5.72,
        "tac": 0,
        "participes": 4
      },
      {
        "serie": "VIVIENDA",
        "rent30": 1.48,
        "rent90": 2.46,
        "rent180": 3.08,
        "rent360": 5.56,
        "tac": 0.15,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 1.43,
        "rent90": 2.29,
        "rent180": 2.74,
        "rent360": 4.89,
        "tac": 0.8,
        "participes": 1519
      },
      {
        "serie": "A",
        "rent30": 1.43,
        "rent90": 2.28,
        "rent180": 2.73,
        "rent360": 4.85,
        "tac": 0.82,
        "participes": 1813
      },
      {
        "serie": "B",
        "rent30": 1.4,
        "rent90": 2.19,
        "rent180": 2.55,
        "rent360": 4.51,
        "tac": 1.16,
        "participes": 3229
      },
      {
        "serie": "C",
        "rent30": 1.39,
        "rent90": 2.14,
        "rent180": 2.45,
        "rent360": 4.31,
        "tac": 1.36,
        "participes": 12583
      }
    ],
    "rent30": 1.4,
    "rent90": 2.19,
    "rent180": 2.55,
    "rent360": 4.51,
    "defaultSerie": "B"
  },
  {
    "name": "Bancoestado Liquidez Xii",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "WEB",
        "rent30": 0.28,
        "rent90": 0.96,
        "rent180": 1.96,
        "rent360": 4.24,
        "tac": 0.9,
        "participes": 15
      },
      {
        "serie": "CLASICO",
        "rent30": 0.23,
        "rent90": 0.84,
        "rent180": 1.77,
        "rent360": 3.9,
        "tac": 1.56,
        "participes": 275
      }
    ],
    "rent30": 0.28,
    "rent90": 0.96,
    "rent180": 1.96,
    "rent360": 4.24,
    "defaultSerie": "WEB"
  },
  {
    "name": "Bancoestado Liquidez Xi",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "WEB",
        "rent30": 0.28,
        "rent90": 0.91,
        "rent180": 1.9,
        "rent360": 4.08,
        "tac": 0.9,
        "participes": 14
      },
      {
        "serie": "CLASICO",
        "rent30": 0.23,
        "rent90": 0.75,
        "rent180": 1.64,
        "rent360": 3.67,
        "tac": 1.56,
        "participes": 535
      }
    ],
    "rent30": 0.28,
    "rent90": 0.91,
    "rent180": 1.9,
    "rent360": 4.08,
    "defaultSerie": "WEB"
  },
  {
    "name": "Bancoestado Liquidez Xiii",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "WEB",
        "rent30": 0.32,
        "rent90": 1.07,
        "rent180": 1.67,
        "rent360": 3.82,
        "tac": 0.9,
        "participes": 7
      },
      {
        "serie": "CLASICO",
        "rent30": 0.32,
        "rent90": 1.07,
        "rent180": 1.67,
        "rent360": 3.81,
        "tac": 1.91,
        "participes": 234
      }
    ],
    "rent30": 0.32,
    "rent90": 1.07,
    "rent180": 1.67,
    "rent360": 3.82,
    "defaultSerie": "WEB"
  },
  {
    "name": "Bancoestado Liquidez Asg",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "BEAGF",
        "rent30": 0.36,
        "rent90": 1.2,
        "rent180": 2.42,
        "rent360": 0,
        "tac": 0,
        "participes": 3
      },
      {
        "serie": "CRECI",
        "rent30": 0.3,
        "rent90": 1,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.78,
        "participes": 349
      },
      {
        "serie": "WEB",
        "rent30": 0.29,
        "rent90": 0.97,
        "rent180": 1.95,
        "rent360": 4.01,
        "tac": 0.91,
        "participes": 5974
      },
      {
        "serie": "CLASI",
        "rent30": 0.24,
        "rent90": 0.81,
        "rent180": 1.62,
        "rent360": 3.31,
        "tac": 1.55,
        "participes": 13020
      }
    ],
    "rent30": 0.24,
    "rent90": 0.81,
    "rent180": 1.62,
    "rent360": 3.31,
    "defaultSerie": "CLASI"
  },
  {
    "name": "Bancoestado Dolar Disponible",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "BE",
        "rent30": 0.31,
        "rent90": 1.06,
        "rent180": 2.15,
        "rent360": 4.34,
        "tac": 0,
        "participes": 3
      },
      {
        "serie": "CB",
        "rent30": 0.3,
        "rent90": 1.03,
        "rent180": 2.07,
        "rent360": 4.2,
        "tac": 0.14,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": 0.25,
        "rent90": 0.88,
        "rent180": 1.87,
        "rent360": 3.9,
        "tac": 0.7,
        "participes": 328
      },
      {
        "serie": "B",
        "rent30": 0.22,
        "rent90": 0.76,
        "rent180": 1.54,
        "rent360": 3.12,
        "tac": 1.2,
        "participes": 506
      },
      {
        "serie": "C",
        "rent30": 0.19,
        "rent90": 0.66,
        "rent180": 1.35,
        "rent360": 2.76,
        "tac": 1.55,
        "participes": 1979
      }
    ],
    "rent30": 0.22,
    "rent90": 0.76,
    "rent180": 1.54,
    "rent360": 3.12,
    "defaultSerie": "B"
  },
  {
    "name": "Bancoestado BNP Paribas Deuda Brasil",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BE",
        "rent30": 1.43,
        "rent90": 8.52,
        "rent180": 8.36,
        "rent360": 24.09,
        "tac": 0,
        "participes": 1
      }
    ],
    "rent30": 1.43,
    "rent90": 8.52,
    "rent180": 8.36,
    "rent360": 24.09,
    "defaultSerie": "BE"
  },
  {
    "name": "Bancoestado Renta Futura",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BE",
        "rent30": 1.03,
        "rent90": 2.65,
        "rent180": 3.98,
        "rent360": 7.05,
        "tac": 0,
        "participes": 5
      },
      {
        "serie": "VIVIENDA",
        "rent30": 1,
        "rent90": 2.54,
        "rent180": 3.77,
        "rent360": 6.63,
        "tac": 0.4,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 0.97,
        "rent90": 2.46,
        "rent180": 3.62,
        "rent360": 6.31,
        "tac": 0.7,
        "participes": 1201
      },
      {
        "serie": "A",
        "rent30": 0.96,
        "rent90": 2.42,
        "rent180": 3.52,
        "rent360": 6.12,
        "tac": 0.88,
        "participes": 252
      },
      {
        "serie": "APER",
        "rent30": 0.95,
        "rent90": 2.38,
        "rent180": 3.46,
        "rent360": 6,
        "tac": 1,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 0.93,
        "rent90": 2.3,
        "rent180": 3.3,
        "rent360": 5.67,
        "tac": 1.31,
        "participes": 514
      },
      {
        "serie": "C",
        "rent30": 0.91,
        "rent90": 2.24,
        "rent180": 3.18,
        "rent360": 5.43,
        "tac": 1.54,
        "participes": 2020
      }
    ],
    "rent30": 0.93,
    "rent90": 2.3,
    "rent180": 3.3,
    "rent360": 5.67,
    "defaultSerie": "B"
  },
  {
    "name": "Bancoestado Chile Ecologico",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BE",
        "rent30": 0.73,
        "rent90": 1.99,
        "rent180": 3.67,
        "rent360": 6.31,
        "tac": 0,
        "participes": 2
      },
      {
        "serie": "PATRI",
        "rent30": 0.69,
        "rent90": 1.87,
        "rent180": 3.42,
        "rent360": 5.82,
        "tac": 0.47,
        "participes": 80
      },
      {
        "serie": "APV",
        "rent30": 0.67,
        "rent90": 1.8,
        "rent180": 3.28,
        "rent360": 5.54,
        "tac": 0.75,
        "participes": 19446
      },
      {
        "serie": "WEB",
        "rent30": 0.67,
        "rent90": 1.79,
        "rent180": 3.26,
        "rent360": 5.51,
        "tac": 0.77,
        "participes": 5396
      },
      {
        "serie": "CLASI",
        "rent30": 0.65,
        "rent90": 1.73,
        "rent180": 3.14,
        "rent360": 5.28,
        "tac": 1.01,
        "participes": 8592
      }
    ],
    "rent30": 0.65,
    "rent90": 1.73,
    "rent180": 3.14,
    "rent360": 5.28,
    "defaultSerie": "CLASI"
  },
  {
    "name": "Bancoestado Estructurado Renta UF",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "WEB",
        "rent30": 1.98,
        "rent90": 2.8,
        "rent180": 2.97,
        "rent360": 5.14,
        "tac": 0.9,
        "participes": 24
      },
      {
        "serie": "CLASICO",
        "rent30": 1.96,
        "rent90": 2.73,
        "rent180": 2.82,
        "rent360": 4.84,
        "tac": 1.19,
        "participes": 381
      }
    ],
    "rent30": 1.98,
    "rent90": 2.8,
    "rent180": 2.97,
    "rent360": 5.14,
    "defaultSerie": "WEB"
  },
  {
    "name": "Compromiso Bancoestado",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BE",
        "rent30": 1.17,
        "rent90": 2.69,
        "rent180": 3.77,
        "rent360": 6.48,
        "tac": 0,
        "participes": 6
      },
      {
        "serie": "F",
        "rent30": 1.16,
        "rent90": 2.66,
        "rent180": 3.71,
        "rent360": 6.36,
        "tac": 0.12,
        "participes": 3
      },
      {
        "serie": "VIVIENDA",
        "rent30": 1.16,
        "rent90": 2.65,
        "rent180": 3.7,
        "rent360": 6.33,
        "tac": 0.15,
        "participes": 4
      },
      {
        "serie": "A",
        "rent30": 1.1,
        "rent90": 2.46,
        "rent180": 3.31,
        "rent360": 5.56,
        "tac": 0.88,
        "participes": 4207
      },
      {
        "serie": "APV",
        "rent30": 1.09,
        "rent90": 2.43,
        "rent180": 3.25,
        "rent360": 5.44,
        "tac": 1,
        "participes": 13983
      },
      {
        "serie": "B",
        "rent30": 1.07,
        "rent90": 2.35,
        "rent180": 3.09,
        "rent360": 5.11,
        "tac": 1.31,
        "participes": 3569
      },
      {
        "serie": "C",
        "rent30": 1.05,
        "rent90": 2.29,
        "rent180": 2.97,
        "rent360": 4.87,
        "tac": 1.54,
        "participes": 8131
      }
    ],
    "rent30": 1.07,
    "rent90": 2.35,
    "rent180": 3.09,
    "rent360": 5.11,
    "defaultSerie": "B"
  },
  {
    "name": "Bancoestado Mi Futuro Accesible",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.47,
        "rent90": 1.35,
        "rent180": 2.46,
        "rent360": 4.95,
        "tac": 0.6,
        "participes": 32961
      },
      {
        "serie": "WEB",
        "rent30": 0.45,
        "rent90": 1.29,
        "rent180": 2.33,
        "rent360": 4.71,
        "tac": 0.83,
        "participes": 14611
      },
      {
        "serie": "CLASICO",
        "rent30": 0.44,
        "rent90": 1.24,
        "rent180": 2.24,
        "rent360": 4.53,
        "tac": 1.01,
        "participes": 70747
      }
    ],
    "rent30": 0.47,
    "rent90": 1.35,
    "rent180": 2.46,
    "rent360": 4.95,
    "defaultSerie": "APV"
  },
  {
    "name": "Bancoestado BNP Paribas Mas Renta Bicentenario",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BE",
        "rent30": -0.15,
        "rent90": 1.44,
        "rent180": 3.06,
        "rent360": 5.92,
        "tac": 0,
        "participes": 6
      },
      {
        "serie": "F",
        "rent30": -0.16,
        "rent90": 1.41,
        "rent180": 3,
        "rent360": 5.79,
        "tac": 0.12,
        "participes": 1
      },
      {
        "serie": "VIVIENDA",
        "rent30": -0.16,
        "rent90": 1.41,
        "rent180": 2.98,
        "rent360": 5.76,
        "tac": 0.15,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": -0.21,
        "rent90": 1.22,
        "rent180": 2.6,
        "rent360": 5,
        "tac": 0.88,
        "participes": 431
      },
      {
        "serie": "APV",
        "rent30": -0.22,
        "rent90": 1.21,
        "rent180": 2.59,
        "rent360": 4.98,
        "tac": 0.9,
        "participes": 3606
      },
      {
        "serie": "B",
        "rent30": -0.25,
        "rent90": 1.11,
        "rent180": 2.38,
        "rent360": 4.55,
        "tac": 1.31,
        "participes": 1618
      },
      {
        "serie": "C",
        "rent30": -0.26,
        "rent90": 1.05,
        "rent180": 2.26,
        "rent360": 4.32,
        "tac": 1.54,
        "participes": 4616
      }
    ],
    "rent30": -0.25,
    "rent90": 1.11,
    "rent180": 2.38,
    "rent360": 4.55,
    "defaultSerie": "B"
  },
  {
    "name": "Proteccion Bancoestado",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BE",
        "rent30": 0.69,
        "rent90": 1.66,
        "rent180": 2.69,
        "rent360": 5.37,
        "tac": 0,
        "participes": 4
      },
      {
        "serie": "F",
        "rent30": 0.68,
        "rent90": 1.63,
        "rent180": 2.63,
        "rent360": 5.25,
        "tac": 0.12,
        "participes": 2
      },
      {
        "serie": "VIVIENDA",
        "rent30": 0.67,
        "rent90": 1.63,
        "rent180": 2.62,
        "rent360": 5.22,
        "tac": 0.15,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": 0.63,
        "rent90": 1.46,
        "rent180": 2.29,
        "rent360": 4.57,
        "tac": 0.77,
        "participes": 16841
      },
      {
        "serie": "APV",
        "rent30": 0.61,
        "rent90": 1.41,
        "rent180": 2.18,
        "rent360": 4.33,
        "tac": 1,
        "participes": 30710
      },
      {
        "serie": "B",
        "rent30": 0.6,
        "rent90": 1.36,
        "rent180": 2.09,
        "rent360": 4.16,
        "tac": 1.17,
        "participes": 16701
      },
      {
        "serie": "C",
        "rent30": 0.58,
        "rent90": 1.31,
        "rent180": 1.99,
        "rent360": 3.96,
        "tac": 1.36,
        "participes": 10006
      }
    ],
    "rent30": 0.6,
    "rent90": 1.36,
    "rent180": 2.09,
    "rent360": 4.16,
    "defaultSerie": "B"
  },
  {
    "name": "Solvente Bancoestado",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BE",
        "rent30": 0.36,
        "rent90": 1.21,
        "rent180": 2.44,
        "rent360": 4.98,
        "tac": 0,
        "participes": 2
      },
      {
        "serie": "VIVIENDA",
        "rent30": 0.35,
        "rent90": 1.17,
        "rent180": 2.36,
        "rent360": 4.83,
        "tac": 0.15,
        "participes": 1
      },
      {
        "serie": "CORPO",
        "rent30": 0.36,
        "rent90": 1.19,
        "rent180": 2.41,
        "rent360": 4.95,
        "tac": 0.18,
        "participes": 13
      },
      {
        "serie": "F",
        "rent30": 0.35,
        "rent90": 1.18,
        "rent180": 2.37,
        "rent360": 4.86,
        "tac": 0.38,
        "participes": 3
      },
      {
        "serie": "A",
        "rent30": 0.3,
        "rent90": 1.01,
        "rent180": 2.04,
        "rent360": 4.18,
        "tac": 0.8,
        "participes": 12840
      },
      {
        "serie": "EMPRES",
        "rent30": 0.35,
        "rent90": 1.16,
        "rent180": 2.33,
        "rent360": 4.78,
        "tac": 0.89,
        "participes": 57
      },
      {
        "serie": "B",
        "rent30": 0.27,
        "rent90": 0.91,
        "rent180": 1.85,
        "rent360": 3.82,
        "tac": 1.13,
        "participes": 45446
      },
      {
        "serie": "C",
        "rent30": 0.24,
        "rent90": 0.81,
        "rent180": 1.64,
        "rent360": 3.39,
        "tac": 1.55,
        "participes": 138274
      }
    ],
    "rent30": 0.27,
    "rent90": 0.91,
    "rent180": 1.85,
    "rent360": 3.82,
    "defaultSerie": "B"
  },
  {
    "name": "Bancoestado Deuda Largo Plazo",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BE",
        "rent30": 0.72,
        "rent90": 1.66,
        "rent180": 4.18,
        "rent360": 5.23,
        "tac": 0,
        "participes": 5
      },
      {
        "serie": "WEB",
        "rent30": 0.66,
        "rent90": 1.45,
        "rent180": 3.76,
        "rent360": 4.41,
        "tac": 0.8,
        "participes": 284
      },
      {
        "serie": "CLASI",
        "rent30": 0.61,
        "rent90": 1.27,
        "rent180": 3.4,
        "rent360": 3.68,
        "tac": 1.5,
        "participes": 78
      }
    ],
    "rent30": 0.61,
    "rent90": 1.27,
    "rent180": 3.4,
    "rent360": 3.68,
    "defaultSerie": "CLASI"
  },
  {
    "name": "Conveniencia Bancoestado",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BE",
        "rent30": 0.36,
        "rent90": 1.2,
        "rent180": 2.43,
        "rent360": 4.98,
        "tac": 0,
        "participes": 7
      },
      {
        "serie": "F",
        "rent30": 0.35,
        "rent90": 1.17,
        "rent180": 2.37,
        "rent360": 4.85,
        "tac": 0.13,
        "participes": 1
      },
      {
        "serie": "CB",
        "rent30": 0.35,
        "rent90": 1.17,
        "rent180": 2.36,
        "rent360": 4.84,
        "tac": 0.14,
        "participes": 3
      },
      {
        "serie": "CORPO",
        "rent30": 0.35,
        "rent90": 1.16,
        "rent180": 2.35,
        "rent360": 4.82,
        "tac": 0.72,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": 0.3,
        "rent90": 1,
        "rent180": 2.03,
        "rent360": 4.18,
        "tac": 0.78,
        "participes": 30689
      },
      {
        "serie": "WEB",
        "rent30": 0.3,
        "rent90": 1,
        "rent180": 2.02,
        "rent360": 4.16,
        "tac": 0.81,
        "participes": 12061
      },
      {
        "serie": "EMPRES",
        "rent30": 0.34,
        "rent90": 1.14,
        "rent180": 2.29,
        "rent360": 4.7,
        "tac": 0.88,
        "participes": 16
      },
      {
        "serie": "APV",
        "rent30": 0.28,
        "rent90": 0.95,
        "rent180": 1.92,
        "rent360": 3.95,
        "tac": 1,
        "participes": 9
      },
      {
        "serie": "B",
        "rent30": 0.25,
        "rent90": 0.83,
        "rent180": 1.7,
        "rent360": 3.51,
        "tac": 1.43,
        "participes": 78548
      },
      {
        "serie": "C",
        "rent30": 0.24,
        "rent90": 0.8,
        "rent180": 1.64,
        "rent360": 3.39,
        "tac": 1.55,
        "participes": 121169
      }
    ],
    "rent30": 0.25,
    "rent90": 0.83,
    "rent180": 1.7,
    "rent360": 3.51,
    "defaultSerie": "B"
  },
  {
    "name": "Bancoestado Perfil  A",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": -0.93,
        "rent90": 0.82,
        "rent180": 2.54,
        "rent360": 19.05,
        "tac": 0.75,
        "participes": 113932
      },
      {
        "serie": "PATRI",
        "rent30": -0.98,
        "rent90": 0.67,
        "rent180": 2.22,
        "rent360": 18.37,
        "tac": 1.37,
        "participes": 55
      },
      {
        "serie": "CRECI",
        "rent30": -0.99,
        "rent90": 0.62,
        "rent180": 2.13,
        "rent360": 18.14,
        "tac": 1.56,
        "participes": 164
      },
      {
        "serie": "CLASI",
        "rent30": -1.02,
        "rent90": 0.53,
        "rent180": 1.95,
        "rent360": 17.72,
        "tac": 1.94,
        "participes": 2357
      }
    ],
    "rent30": -1.02,
    "rent90": 0.53,
    "rent180": 1.95,
    "rent360": 17.72,
    "defaultSerie": "CLASI"
  },
  {
    "name": "Bancoestado Perfil C",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.27,
        "rent90": 1.65,
        "rent180": 3.47,
        "rent360": 13.92,
        "tac": 0.75,
        "participes": 90220
      },
      {
        "serie": "PATRI",
        "rent30": 0.24,
        "rent90": 1.57,
        "rent180": 3.31,
        "rent360": 13.58,
        "tac": 1.07,
        "participes": 83
      },
      {
        "serie": "CRECI",
        "rent30": 0.23,
        "rent90": 1.52,
        "rent180": 3.21,
        "rent360": 13.36,
        "tac": 1.25,
        "participes": 248
      },
      {
        "serie": "CLASI",
        "rent30": 0.2,
        "rent90": 1.43,
        "rent180": 3.03,
        "rent360": 12.96,
        "tac": 1.61,
        "participes": 3473
      }
    ],
    "rent30": 0.2,
    "rent90": 1.43,
    "rent180": 3.03,
    "rent360": 12.96,
    "defaultSerie": "CLASI"
  },
  {
    "name": "Bancoestado Perfil  E",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "VIVIENDA",
        "rent30": 0.72,
        "rent90": 2.07,
        "rent180": 3.87,
        "rent360": 8.29,
        "tac": 0.15,
        "participes": 3
      },
      {
        "serie": "APV",
        "rent30": 0.67,
        "rent90": 1.91,
        "rent180": 3.56,
        "rent360": 7.65,
        "tac": 0.75,
        "participes": 177194
      },
      {
        "serie": "PATRI",
        "rent30": 0.67,
        "rent90": 1.91,
        "rent180": 3.54,
        "rent360": 7.64,
        "tac": 0.77,
        "participes": 153
      },
      {
        "serie": "CRECI",
        "rent30": 0.65,
        "rent90": 1.86,
        "rent180": 3.45,
        "rent360": 7.45,
        "tac": 0.95,
        "participes": 353
      },
      {
        "serie": "CLASI",
        "rent30": 0.63,
        "rent90": 1.77,
        "rent180": 3.26,
        "rent360": 7.07,
        "tac": 1.31,
        "participes": 3132
      }
    ],
    "rent30": 0.63,
    "rent90": 1.77,
    "rent180": 3.26,
    "rent360": 7.07,
    "defaultSerie": "CLASI"
  },
  {
    "name": "Bancoestado Mi Futuro Moderado",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.58,
        "rent90": 1.72,
        "rent180": 3.18,
        "rent360": 6.85,
        "tac": 0.7,
        "participes": 27692
      },
      {
        "serie": "WEB",
        "rent30": 0.56,
        "rent90": 1.66,
        "rent180": 3.05,
        "rent360": 6.59,
        "tac": 0.95,
        "participes": 1957
      },
      {
        "serie": "CLASICO",
        "rent30": 0.55,
        "rent90": 1.6,
        "rent180": 2.93,
        "rent360": 6.32,
        "tac": 1.19,
        "participes": 6855
      }
    ],
    "rent30": 0.58,
    "rent90": 1.72,
    "rent180": 3.18,
    "rent360": 6.85,
    "defaultSerie": "APV"
  },
  {
    "name": "Bancoestado Mi Futuro Conservador",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "CB",
        "rent30": 0.81,
        "rent90": 2.07,
        "rent180": 3.35,
        "rent360": 6.15,
        "tac": 0.14,
        "participes": 3
      },
      {
        "serie": "APV",
        "rent30": 0.77,
        "rent90": 1.94,
        "rent180": 3.09,
        "rent360": 5.63,
        "tac": 0.65,
        "participes": 17172
      },
      {
        "serie": "WEB",
        "rent30": 0.76,
        "rent90": 1.87,
        "rent180": 2.96,
        "rent360": 5.37,
        "tac": 0.88,
        "participes": 7034
      },
      {
        "serie": "CLASICO",
        "rent30": 0.74,
        "rent90": 1.81,
        "rent180": 2.84,
        "rent360": 5.12,
        "tac": 1.13,
        "participes": 9284
      }
    ],
    "rent30": 0.77,
    "rent90": 1.94,
    "rent180": 3.09,
    "rent360": 5.63,
    "defaultSerie": "APV"
  },
  {
    "name": "Bancoestado Chile Sostenible Conservador",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "BE",
        "rent30": 0.41,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 0.36,
        "rent90": 1.23,
        "rent180": 2.55,
        "rent360": 0,
        "tac": 0.6,
        "participes": 15974
      },
      {
        "serie": "WEB",
        "rent30": 0.34,
        "rent90": 1.18,
        "rent180": 2.44,
        "rent360": 0,
        "tac": 0.8,
        "participes": 2284
      },
      {
        "serie": "CLASICO",
        "rent30": 0.33,
        "rent90": 1.13,
        "rent180": 2.33,
        "rent360": 0,
        "tac": 1.01,
        "participes": 1912
      }
    ],
    "rent30": 0.36,
    "rent90": 1.23,
    "rent180": 2.55,
    "rent360": 0,
    "defaultSerie": "APV"
  },
  {
    "name": "Bancoestado Acciones Nacionales",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "BE",
        "rent30": 3,
        "rent90": 1.03,
        "rent180": 17.13,
        "rent360": 39.25,
        "tac": 0,
        "participes": 7
      },
      {
        "serie": "VIVIENDA",
        "rent30": 2.99,
        "rent90": 0.97,
        "rent180": 17.01,
        "rent360": 38.98,
        "tac": 0.2,
        "participes": 1
      },
      {
        "serie": "PATRI",
        "rent30": 2.93,
        "rent90": 0.8,
        "rent180": 16.61,
        "rent360": 26.04,
        "tac": 0.88,
        "participes": 6
      },
      {
        "serie": "APV",
        "rent30": 2.92,
        "rent90": 0.77,
        "rent180": 16.54,
        "rent360": 37.88,
        "tac": 1,
        "participes": 2030
      },
      {
        "serie": "CRECI",
        "rent30": 2.9,
        "rent90": 0.69,
        "rent180": 16.36,
        "rent360": 37.46,
        "tac": 1.31,
        "participes": 41
      },
      {
        "serie": "CLASI",
        "rent30": 2.86,
        "rent90": 0.58,
        "rent180": 16.1,
        "rent360": 36.87,
        "tac": 1.76,
        "participes": 4745
      }
    ],
    "rent30": 2.86,
    "rent90": 0.58,
    "rent180": 16.1,
    "rent360": 36.87,
    "defaultSerie": "CLASI"
  },
  {
    "name": "Bancoestado BNP Paribas Acciones Desarrolladas",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BE",
        "rent30": -2.58,
        "rent90": -0.88,
        "rent180": -1.75,
        "rent360": 19.93,
        "tac": 0,
        "participes": 7
      },
      {
        "serie": "PATRI",
        "rent30": -2.65,
        "rent90": -1.11,
        "rent180": -2.19,
        "rent360": 18.89,
        "tac": 0.88,
        "participes": 80
      },
      {
        "serie": "APV",
        "rent30": -2.66,
        "rent90": -1.14,
        "rent180": -2.24,
        "rent360": 18.75,
        "tac": 1,
        "participes": 1529
      },
      {
        "serie": "CRECI",
        "rent30": -2.68,
        "rent90": -1.21,
        "rent180": -2.4,
        "rent360": 18.38,
        "tac": 1.32,
        "participes": 214
      },
      {
        "serie": "CLASI",
        "rent30": -2.71,
        "rent90": -1.33,
        "rent180": -2.61,
        "rent360": 17.87,
        "tac": 1.75,
        "participes": 3541
      }
    ],
    "rent30": -2.71,
    "rent90": -1.33,
    "rent180": -2.61,
    "rent360": 17.87,
    "defaultSerie": "CLASI"
  },
  {
    "name": "Bancoestado BNP Paribas Mercados Emergentes",
    "provider": "BancoEstado",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BE",
        "rent30": -0.51,
        "rent90": 3.71,
        "rent180": 3.71,
        "rent360": 3.71,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -0.57,
        "rent90": 4.74,
        "rent180": 2.88,
        "rent360": 15.36,
        "tac": 0.75,
        "participes": 1268
      },
      {
        "serie": "PATRI",
        "rent30": -0.58,
        "rent90": 4.71,
        "rent180": 2.81,
        "rent360": 15.21,
        "tac": 0.88,
        "participes": 8
      },
      {
        "serie": "WEB",
        "rent30": -0.58,
        "rent90": 4.7,
        "rent180": 2.8,
        "rent360": 15.19,
        "tac": 0.9,
        "participes": 806
      },
      {
        "serie": "CRECI",
        "rent30": -0.61,
        "rent90": 4.59,
        "rent180": 2.59,
        "rent360": 14.73,
        "tac": 1.31,
        "participes": 32
      },
      {
        "serie": "CLASI",
        "rent30": -0.65,
        "rent90": 4.48,
        "rent180": 2.37,
        "rent360": 14.23,
        "tac": 1.75,
        "participes": 1011
      }
    ],
    "rent30": -0.65,
    "rent90": 4.48,
    "rent180": 2.37,
    "rent360": 14.23,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Competitivo",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0.37,
        "rent90": 1.23,
        "rent180": 2.47,
        "rent360": 5.04,
        "tac": 0,
        "participes": 10
      },
      {
        "serie": "A",
        "rent30": 0.37,
        "rent90": 1.21,
        "rent180": 2.43,
        "rent360": 4.96,
        "tac": 0.16,
        "participes": 20
      },
      {
        "serie": "GAMMA",
        "rent30": 0.33,
        "rent90": 1.09,
        "rent180": 2.19,
        "rent360": 4.48,
        "tac": 0.54,
        "participes": 8
      },
      {
        "serie": "APV",
        "rent30": 0.33,
        "rent90": 1.08,
        "rent180": 2.16,
        "rent360": 4.43,
        "tac": 0.59,
        "participes": 40
      },
      {
        "serie": "AP",
        "rent30": 0.31,
        "rent90": 1.03,
        "rent180": 2.08,
        "rent360": 4.32,
        "tac": 1.15,
        "participes": 2955
      },
      {
        "serie": "E",
        "rent30": 0.33,
        "rent90": 1.08,
        "rent180": 2.18,
        "rent360": 4.49,
        "tac": 1.32,
        "participes": 52
      },
      {
        "serie": "CLASIC",
        "rent30": 0.29,
        "rent90": 0.95,
        "rent180": 1.9,
        "rent360": 3.91,
        "tac": 1.34,
        "participes": 10107
      }
    ],
    "rent30": 0.37,
    "rent90": 1.21,
    "rent180": 2.43,
    "rent360": 4.96,
    "defaultSerie": "A"
  },
  {
    "name": "BCI Ahorro Digital",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.3,
        "rent90": 1.04,
        "rent180": 2.12,
        "rent360": 4.36,
        "tac": 0.82,
        "participes": 3041
      }
    ],
    "rent30": 0.3,
    "rent90": 1.04,
    "rent180": 2.12,
    "rent360": 4.36,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BCI Deposito Efectivo",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "A",
        "rent30": 0.35,
        "rent90": 1.19,
        "rent180": 2.41,
        "rent360": 4.94,
        "tac": 0.21,
        "participes": 8
      },
      {
        "serie": "GAMMA",
        "rent30": 0.34,
        "rent90": 1.14,
        "rent180": 2.3,
        "rent360": 4.71,
        "tac": 0.29,
        "participes": 12
      },
      {
        "serie": "APV",
        "rent30": 0.32,
        "rent90": 1.06,
        "rent180": 2.14,
        "rent360": 4.4,
        "tac": 0.59,
        "participes": 61
      },
      {
        "serie": "CLASI",
        "rent30": 0.29,
        "rent90": 0.96,
        "rent180": 1.94,
        "rent360": 3.99,
        "tac": 1.23,
        "participes": 14288
      },
      {
        "serie": "E",
        "rent30": 0.32,
        "rent90": 1.07,
        "rent180": 2.16,
        "rent360": 4.48,
        "tac": 1.32,
        "participes": 7
      }
    ],
    "rent30": 0.29,
    "rent90": 0.96,
    "rent180": 1.94,
    "rent360": 3.99,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Dolar Cash",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0.32,
        "rent90": 1.09,
        "rent180": 2.21,
        "rent360": 4.49,
        "tac": 0,
        "participes": 16
      },
      {
        "serie": "GAMMA",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 0.27,
        "rent90": 0.92,
        "rent180": 1.87,
        "rent360": 3.79,
        "tac": 0.64,
        "participes": 4
      },
      {
        "serie": "CLASI",
        "rent30": 0.24,
        "rent90": 0.83,
        "rent180": 1.7,
        "rent360": 3.48,
        "tac": 1.23,
        "participes": 6792
      }
    ],
    "rent30": 0.24,
    "rent90": 0.83,
    "rent180": 1.7,
    "rent360": 3.48,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI America Latina",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": -2.72,
        "rent90": 11.18,
        "rent180": 14.8,
        "rent360": 30.62,
        "tac": 0.03,
        "participes": 3
      },
      {
        "serie": "APV",
        "rent30": -2.86,
        "rent90": 10.69,
        "rent180": 13.79,
        "rent360": 28.38,
        "tac": 1.78,
        "participes": 160
      },
      {
        "serie": "FAMIL",
        "rent30": -2.95,
        "rent90": 10.33,
        "rent180": 13.07,
        "rent360": 26.8,
        "tac": 3.03,
        "participes": 13
      },
      {
        "serie": "CLASI",
        "rent30": -2.99,
        "rent90": 10.19,
        "rent180": 12.79,
        "rent360": 26.18,
        "tac": 3.53,
        "participes": 1784
      }
    ],
    "rent30": -2.99,
    "rent90": 10.19,
    "rent180": 12.79,
    "rent360": 26.18,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Estrategia UF > 5 Años",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "A",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APVC",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "BCI",
        "rent30": 1.29,
        "rent90": 2.72,
        "rent180": 4.64,
        "rent360": 7.78,
        "tac": 0,
        "participes": 10
      },
      {
        "serie": "APV",
        "rent30": 1.23,
        "rent90": 2.51,
        "rent180": 4.22,
        "rent360": 6.93,
        "tac": 0.8,
        "participes": 469
      },
      {
        "serie": "FAMIL",
        "rent30": 1.17,
        "rent90": 2.33,
        "rent180": 3.86,
        "rent360": 6.2,
        "tac": 1.49,
        "participes": 23
      },
      {
        "serie": "CLASI",
        "rent30": 1.17,
        "rent90": 2.3,
        "rent180": 3.81,
        "rent360": 6.09,
        "tac": 1.59,
        "participes": 5705
      }
    ],
    "rent30": 1.17,
    "rent90": 2.3,
    "rent180": 3.81,
    "rent360": 6.09,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Deuda Latam HY",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": -2.11,
        "rent90": -0.66,
        "rent180": 0.68,
        "rent360": 7.71,
        "tac": 0,
        "participes": 9
      },
      {
        "serie": "INSTI",
        "rent30": -2.16,
        "rent90": -0.84,
        "rent180": 0.33,
        "rent360": 6.97,
        "tac": 0.7,
        "participes": 4
      },
      {
        "serie": "APV",
        "rent30": -2.19,
        "rent90": -0.95,
        "rent180": 0.06,
        "rent360": 0.06,
        "tac": 1.13,
        "participes": 1
      },
      {
        "serie": "CLASI",
        "rent30": -2.24,
        "rent90": -1.11,
        "rent180": -0.22,
        "rent360": 5.82,
        "tac": 1.8,
        "participes": 691
      }
    ],
    "rent30": -2.24,
    "rent90": -1.11,
    "rent180": -0.22,
    "rent360": 5.82,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Deuda Global",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": -2.61,
        "rent90": -1,
        "rent180": 0.88,
        "rent360": 7.29,
        "tac": 0,
        "participes": 5
      },
      {
        "serie": "APV",
        "rent30": -2.69,
        "rent90": -1.25,
        "rent180": 0.37,
        "rent360": 6.23,
        "tac": 1.01,
        "participes": 1
      },
      {
        "serie": "CLASI",
        "rent30": -2.72,
        "rent90": -1.35,
        "rent180": 0.17,
        "rent360": 5.81,
        "tac": 1.4,
        "participes": 66
      }
    ],
    "rent30": -2.72,
    "rent90": -1.35,
    "rent180": 0.17,
    "rent360": 5.81,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Deuda Corporativa Estratégica",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": 1.11,
        "rent90": 2.65,
        "rent180": 4.12,
        "rent360": 7.19,
        "tac": 0,
        "participes": 9
      },
      {
        "serie": "A",
        "rent30": 1.07,
        "rent90": 2.51,
        "rent180": 3.86,
        "rent360": 6.66,
        "tac": 0.5,
        "participes": 3
      },
      {
        "serie": "INSTI",
        "rent30": 1.06,
        "rent90": 2.48,
        "rent180": 3.78,
        "rent360": 6.5,
        "tac": 0.64,
        "participes": 38
      },
      {
        "serie": "APV",
        "rent30": 1.05,
        "rent90": 2.44,
        "rent180": 3.7,
        "rent360": 6.34,
        "tac": 0.8,
        "participes": 93
      },
      {
        "serie": "CLASI",
        "rent30": 1,
        "rent90": 2.25,
        "rent180": 3.33,
        "rent360": 5.61,
        "tac": 1.49,
        "participes": 5274
      }
    ],
    "rent30": 1,
    "rent90": 2.25,
    "rent180": 3.33,
    "rent360": 5.61,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Estructurado UF Vii",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 1.83,
        "rent90": 2.73,
        "rent180": 3.1,
        "rent360": 5.38,
        "tac": 1,
        "participes": 57
      },
      {
        "serie": "CLASI",
        "rent30": 1.83,
        "rent90": 2.73,
        "rent180": 3.1,
        "rent360": 5.38,
        "tac": 1,
        "participes": 2644
      }
    ],
    "rent30": 1.83,
    "rent90": 2.73,
    "rent180": 3.1,
    "rent360": 5.38,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Estructurado UF Vi",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 1.77,
        "rent90": 2.67,
        "rent180": 3.05,
        "rent360": 5.05,
        "tac": 1.26,
        "participes": 27
      },
      {
        "serie": "CLASI",
        "rent30": 1.77,
        "rent90": 2.67,
        "rent180": 3.05,
        "rent360": 5.05,
        "tac": 1.26,
        "participes": 698
      }
    ],
    "rent30": 1.77,
    "rent90": 2.67,
    "rent180": 3.05,
    "rent360": 5.05,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Estrategia UF Hasta 5 Años",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": 1.14,
        "rent90": 2.7,
        "rent180": 4.16,
        "rent360": 7.12,
        "tac": 0,
        "participes": 13
      },
      {
        "serie": "APV",
        "rent30": 1.07,
        "rent90": 2.49,
        "rent180": 3.74,
        "rent360": 6.28,
        "tac": 0.8,
        "participes": 249
      },
      {
        "serie": "FAMIL",
        "rent30": 1.02,
        "rent90": 2.31,
        "rent180": 3.38,
        "rent360": 5.56,
        "tac": 1.49,
        "participes": 3
      },
      {
        "serie": "CLASI",
        "rent30": 0.98,
        "rent90": 2.18,
        "rent180": 3.12,
        "rent360": 5.03,
        "tac": 2,
        "participes": 5041
      }
    ],
    "rent30": 0.98,
    "rent90": 2.18,
    "rent180": 3.12,
    "rent360": 5.03,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI  Estrategia UF Hasta 3 Años",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "A",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "BCI",
        "rent30": 1.29,
        "rent90": 2.78,
        "rent180": 3.86,
        "rent360": 6.57,
        "tac": 0,
        "participes": 12
      },
      {
        "serie": "APV",
        "rent30": 1.22,
        "rent90": 2.57,
        "rent180": 3.44,
        "rent360": 5.73,
        "tac": 0.8,
        "participes": 538
      },
      {
        "serie": "FAMIL",
        "rent30": 1.15,
        "rent90": 2.37,
        "rent180": 3.04,
        "rent360": 4.9,
        "tac": 1.78,
        "participes": 19
      },
      {
        "serie": "CLASI",
        "rent30": 1.15,
        "rent90": 2.31,
        "rent180": 2.93,
        "rent360": 4.7,
        "tac": 1.79,
        "participes": 18133
      }
    ],
    "rent30": 1.15,
    "rent90": 2.31,
    "rent180": 2.93,
    "rent360": 4.7,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Estrategia UF Hasta 1 Año",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": 1.57,
        "rent90": 2.58,
        "rent180": 3.17,
        "rent360": 5.85,
        "tac": 0,
        "participes": 4
      },
      {
        "serie": "FAMIL",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 1.51,
        "rent90": 2.35,
        "rent180": 2.73,
        "rent360": 4.96,
        "tac": 0.85,
        "participes": 111
      },
      {
        "serie": "BP",
        "rent30": 1.5,
        "rent90": 2.33,
        "rent180": 2.68,
        "rent360": 4.86,
        "tac": 0.93,
        "participes": 966
      },
      {
        "serie": "AP",
        "rent30": 1.49,
        "rent90": 2.3,
        "rent180": 2.63,
        "rent360": 4.75,
        "tac": 1.03,
        "participes": 1030
      },
      {
        "serie": "CLASI",
        "rent30": 1.48,
        "rent90": 2.26,
        "rent180": 2.55,
        "rent360": 4.6,
        "tac": 1.19,
        "participes": 14791
      },
      {
        "serie": "DIGITAL",
        "rent30": 1.48,
        "rent90": 2.26,
        "rent180": 2.55,
        "rent360": 4.6,
        "tac": 1.2,
        "participes": 10
      }
    ],
    "rent30": 1.48,
    "rent90": 2.26,
    "rent180": 2.55,
    "rent360": 4.6,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Estrategia Pesos Hasta 1 Año",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0.76,
        "rent90": 1.8,
        "rent180": 2.83,
        "rent360": 5.59,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "FAMIL",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 0.69,
        "rent90": 1.58,
        "rent180": 2.39,
        "rent360": 4.71,
        "tac": 0.84,
        "participes": 70
      },
      {
        "serie": "BP",
        "rent30": 0.69,
        "rent90": 1.56,
        "rent180": 2.34,
        "rent360": 4.6,
        "tac": 0.96,
        "participes": 80
      },
      {
        "serie": "AP",
        "rent30": 0.68,
        "rent90": 1.53,
        "rent180": 2.29,
        "rent360": 4.5,
        "tac": 1.05,
        "participes": 102
      },
      {
        "serie": "CLASI",
        "rent30": 0.67,
        "rent90": 1.49,
        "rent180": 2.21,
        "rent360": 4.35,
        "tac": 1.2,
        "participes": 6236
      }
    ],
    "rent30": 0.67,
    "rent90": 1.49,
    "rent180": 2.21,
    "rent360": 4.35,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Cartera Corto Plazo",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.31,
        "rent90": 1.03,
        "rent180": 2.08,
        "rent360": 4.27,
        "tac": 0.7,
        "participes": 179
      }
    ],
    "rent30": 0.31,
    "rent90": 1.03,
    "rent180": 2.08,
    "rent360": 4.27,
    "defaultSerie": "APV"
  },
  {
    "name": "BCI Deuda Latam IG",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "A",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "INSTI",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "BCI",
        "rent30": -2.5,
        "rent90": -1.55,
        "rent180": -0.26,
        "rent360": 5.33,
        "tac": 0.03,
        "participes": 1
      },
      {
        "serie": "CLASI",
        "rent30": -2.58,
        "rent90": -1.82,
        "rent180": -0.81,
        "rent360": 4.19,
        "tac": 1.13,
        "participes": 237
      }
    ],
    "rent30": -2.58,
    "rent90": -1.82,
    "rent180": -0.81,
    "rent360": 4.19,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Estrategia Pesos Mayor A 1 Año",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": -0.09,
        "rent90": 1.46,
        "rent180": 3.17,
        "rent360": 5.88,
        "tac": 0,
        "participes": 8
      },
      {
        "serie": "APV",
        "rent30": -0.15,
        "rent90": 1.26,
        "rent180": 2.75,
        "rent360": 5.04,
        "tac": 0.8,
        "participes": 143
      },
      {
        "serie": "FAMIL",
        "rent30": -0.21,
        "rent90": 1.08,
        "rent180": 2.4,
        "rent360": 4.33,
        "tac": 1.49,
        "participes": 1
      },
      {
        "serie": "CLASI",
        "rent30": -0.22,
        "rent90": 1.03,
        "rent180": 2.29,
        "rent360": 4.12,
        "tac": 1.7,
        "participes": 14329
      }
    ],
    "rent30": -0.22,
    "rent90": 1.03,
    "rent180": 2.29,
    "rent360": 4.12,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Mach",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.27,
        "rent90": 0.89,
        "rent180": 1.83,
        "rent360": 3.79,
        "tac": 1.01,
        "participes": 1
      }
    ],
    "rent30": 0.27,
    "rent90": 0.89,
    "rent180": 1.83,
    "rent360": 3.79,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BCI Rendimiento",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0.35,
        "rent90": 1.18,
        "rent180": 2.38,
        "rent360": 4.88,
        "tac": 0,
        "participes": 9
      },
      {
        "serie": "FAMIL",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 0.3,
        "rent90": 1,
        "rent180": 2.02,
        "rent360": 4.15,
        "tac": 0.7,
        "participes": 24
      },
      {
        "serie": "CLASI",
        "rent30": 0.23,
        "rent90": 0.77,
        "rent180": 1.56,
        "rent360": 3.24,
        "tac": 3.6,
        "participes": 6359
      }
    ],
    "rent30": 0.23,
    "rent90": 0.77,
    "rent180": 1.56,
    "rent360": 3.24,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Retorno Dólar IG",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": -0.7,
        "rent90": -0.28,
        "rent180": -0.03,
        "rent360": 2.43,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "BCI",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "A",
        "rent30": -0.6,
        "rent90": 0.26,
        "rent180": 1.1,
        "rent360": 0,
        "tac": 0.5,
        "participes": 3
      },
      {
        "serie": "CLASI",
        "rent30": -0.65,
        "rent90": 0.08,
        "rent180": 0.75,
        "rent360": 3.1,
        "tac": 1.2,
        "participes": 1066
      }
    ],
    "rent30": -0.65,
    "rent90": 0.08,
    "rent180": 0.75,
    "rent360": 3.1,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Deuda Global Sostenible",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -1.95,
        "rent90": -1.19,
        "rent180": -0.45,
        "rent360": 2.09,
        "tac": 1.59,
        "participes": 1
      },
      {
        "serie": "CLASI",
        "rent30": -1.95,
        "rent90": -1.16,
        "rent180": -0.63,
        "rent360": 1.2,
        "tac": 1.75,
        "participes": 176
      }
    ],
    "rent30": -1.95,
    "rent90": -1.16,
    "rent180": -0.63,
    "rent360": 1.2,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Cartera Mediano Plazo",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "A",
        "rent30": 1.12,
        "rent90": 2.03,
        "rent180": 2.69,
        "rent360": 0,
        "tac": 0.5,
        "participes": 2
      },
      {
        "serie": "APV",
        "rent30": 1.1,
        "rent90": 1.95,
        "rent180": 2.54,
        "rent360": 4.84,
        "tac": 0.8,
        "participes": 103
      }
    ],
    "rent30": 1.12,
    "rent90": 2.03,
    "rent180": 2.69,
    "rent360": 0,
    "defaultSerie": "A"
  },
  {
    "name": "BCI Estrategia Deuda Calificados",
    "provider": "BCI",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "INSTI",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      }
    ],
    "rent30": 0,
    "rent90": 0,
    "rent180": 0,
    "rent360": 0,
    "defaultSerie": "INSTI"
  },
  {
    "name": "BCI Cartera Dinamica Chile",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": 2.94,
        "rent90": 2.5,
        "rent180": 11.93,
        "rent360": 24.64,
        "tac": 1,
        "participes": 32
      },
      {
        "serie": "CLASI",
        "rent30": 2.82,
        "rent90": 2.11,
        "rent180": 11.09,
        "rent360": 22.8,
        "tac": 2.5,
        "participes": 7576
      }
    ],
    "rent30": 2.82,
    "rent90": 2.11,
    "rent180": 11.09,
    "rent360": 22.8,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Cartera Patrimonial Activa",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP",
        "rent30": -1.67,
        "rent90": 0.61,
        "rent180": 3.01,
        "rent360": 22.77,
        "tac": 0.8,
        "participes": 4
      },
      {
        "serie": "APV",
        "rent30": -1.7,
        "rent90": 0.51,
        "rent180": 2.79,
        "rent360": 22.28,
        "tac": 1.21,
        "participes": 392
      },
      {
        "serie": "INVER",
        "rent30": -1.85,
        "rent90": -0.02,
        "rent180": 1.74,
        "rent360": 19.82,
        "tac": 3.26,
        "participes": 907
      }
    ],
    "rent30": -1.7,
    "rent90": 0.51,
    "rent180": 2.79,
    "rent360": 22.28,
    "defaultSerie": "APV"
  },
  {
    "name": "BCI Cartera Dinamica Activa",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "FAMIL",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -1.56,
        "rent90": 0.27,
        "rent180": 2.85,
        "rent360": 22.49,
        "tac": 1.21,
        "participes": 884
      },
      {
        "serie": "ALTOP",
        "rent30": -1.62,
        "rent90": 0.06,
        "rent180": 2.44,
        "rent360": 21.52,
        "tac": 1.98,
        "participes": 57
      },
      {
        "serie": "CLASI",
        "rent30": -1.77,
        "rent90": -0.45,
        "rent180": 1.41,
        "rent360": 19.14,
        "tac": 4.08,
        "participes": 3510
      }
    ],
    "rent30": -1.77,
    "rent90": -0.45,
    "rent180": 1.41,
    "rent360": 19.14,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Cartera Patrimonial Balanceada",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP",
        "rent30": -0.78,
        "rent90": 1.43,
        "rent180": 3.67,
        "rent360": 15.76,
        "tac": 0.79,
        "participes": 7
      },
      {
        "serie": "APV",
        "rent30": -0.8,
        "rent90": 1.35,
        "rent180": 3.5,
        "rent360": 15.41,
        "tac": 1.1,
        "participes": 704
      },
      {
        "serie": "INVER",
        "rent30": -0.93,
        "rent90": 0.92,
        "rent180": 2.65,
        "rent360": 13.54,
        "tac": 2.75,
        "participes": 2283
      }
    ],
    "rent30": -0.8,
    "rent90": 1.35,
    "rent180": 3.5,
    "rent360": 15.41,
    "defaultSerie": "APV"
  },
  {
    "name": "BCI Cartera Dinámica Balanceada",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "FAMIL",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -0.25,
        "rent90": 1.5,
        "rent180": 3.67,
        "rent360": 16.1,
        "tac": 1,
        "participes": 1102
      },
      {
        "serie": "ALTOP",
        "rent30": -0.33,
        "rent90": 1.24,
        "rent180": 3.15,
        "rent360": 14.96,
        "tac": 2,
        "participes": 217
      },
      {
        "serie": "CLASI",
        "rent30": -0.4,
        "rent90": 0.98,
        "rent180": 2.63,
        "rent360": 13.83,
        "tac": 3,
        "participes": 6256
      }
    ],
    "rent30": -0.4,
    "rent90": 0.98,
    "rent180": 2.63,
    "rent360": 13.83,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Cartera Dolar Balanceada",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP",
        "rent30": -3.51,
        "rent90": -3.4,
        "rent180": -0.12,
        "rent360": 15.91,
        "tac": 0.92,
        "participes": 3
      },
      {
        "serie": "APV",
        "rent30": -3.52,
        "rent90": -3.42,
        "rent180": -0.17,
        "rent360": 15.8,
        "tac": 1.02,
        "participes": 13
      },
      {
        "serie": "CLASI",
        "rent30": -3.67,
        "rent90": -3.92,
        "rent180": -1.17,
        "rent360": 13.53,
        "tac": 3.01,
        "participes": 393
      }
    ],
    "rent30": -3.67,
    "rent90": -3.92,
    "rent180": -1.17,
    "rent360": 13.53,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Mach Moderado",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "BCI",
        "rent30": -1.08,
        "rent90": 0.23,
        "rent180": 0.24,
        "rent360": 14.76,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "DIGITAL",
        "rent30": -1.21,
        "rent90": -0.21,
        "rent180": -0.64,
        "rent360": 12.79,
        "tac": 1.76,
        "participes": 1
      }
    ],
    "rent30": -1.21,
    "rent90": -0.21,
    "rent180": -0.64,
    "rent360": 12.79,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BCI Cartera Dinámica Conservadora",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.59,
        "rent90": 2.28,
        "rent180": 3.99,
        "rent360": 9.74,
        "tac": 0.8,
        "participes": 984
      },
      {
        "serie": "ALTOP",
        "rent30": 0.53,
        "rent90": 2.09,
        "rent180": 3.63,
        "rent360": 8.98,
        "tac": 1.5,
        "participes": 712
      },
      {
        "serie": "FAMIL",
        "rent30": 0.52,
        "rent90": 2.04,
        "rent180": 2.41,
        "rent360": 2.41,
        "tac": 1.7,
        "participes": 1
      },
      {
        "serie": "CLASI",
        "rent30": 0.51,
        "rent90": 2.03,
        "rent180": 3.5,
        "rent360": 8.71,
        "tac": 1.75,
        "participes": 10423
      }
    ],
    "rent30": 0.51,
    "rent90": 2.03,
    "rent180": 3.5,
    "rent360": 8.71,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Cartera Dólar Conservadora",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 2.72,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -2.7,
        "rent90": -1.75,
        "rent180": 0.72,
        "rent360": 10.01,
        "tac": 0.81,
        "participes": 9
      },
      {
        "serie": "CLASI",
        "rent30": -2.79,
        "rent90": -2.05,
        "rent180": 0.12,
        "rent360": 8.71,
        "tac": 2.01,
        "participes": 659
      }
    ],
    "rent30": -2.79,
    "rent90": -2.05,
    "rent180": 0.12,
    "rent360": 8.71,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Cartera Patrimonial Conservadora",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 0.72,
        "rent90": 2.26,
        "rent180": 3.47,
        "rent360": 8.67,
        "tac": 1,
        "participes": 148
      },
      {
        "serie": "INVER",
        "rent30": 0.66,
        "rent90": 2.07,
        "rent180": 3.08,
        "rent360": 7.87,
        "tac": 1.75,
        "participes": 1752
      }
    ],
    "rent30": 0.72,
    "rent90": 2.26,
    "rent180": 3.47,
    "rent360": 8.67,
    "defaultSerie": "APV"
  },
  {
    "name": "BCI Mach Conservador",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0.04,
        "rent90": 1.39,
        "rent180": 2.01,
        "rent360": 9.62,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "DIGITAL",
        "rent30": -0.07,
        "rent90": 1.01,
        "rent180": 1.24,
        "rent360": 8.01,
        "tac": 1.49,
        "participes": 1
      }
    ],
    "rent30": -0.07,
    "rent90": 1.01,
    "rent180": 1.24,
    "rent360": 8.01,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BCI Cartera Patrimonial Ahorro",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP",
        "rent30": 1.02,
        "rent90": 2.34,
        "rent180": 3.45,
        "rent360": 6.18,
        "tac": 0.79,
        "participes": 5
      },
      {
        "serie": "APV",
        "rent30": 1.02,
        "rent90": 2.33,
        "rent180": 3.45,
        "rent360": 6.17,
        "tac": 0.8,
        "participes": 175
      },
      {
        "serie": "INVER",
        "rent30": 0.96,
        "rent90": 2.13,
        "rent180": 3.03,
        "rent360": 5.34,
        "tac": 1.6,
        "participes": 3288
      }
    ],
    "rent30": 1.02,
    "rent90": 2.33,
    "rent180": 3.45,
    "rent360": 6.17,
    "defaultSerie": "APV"
  },
  {
    "name": "BCI Cartera Dinámica Ahorro",
    "provider": "BCI",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "FAMIL",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 0.87,
        "rent90": 2.21,
        "rent180": 3.33,
        "rent360": 6.09,
        "tac": 0.8,
        "participes": 487
      },
      {
        "serie": "CLASI",
        "rent30": 0.77,
        "rent90": 1.9,
        "rent180": 2.71,
        "rent360": 4.84,
        "tac": 2,
        "participes": 11644
      }
    ],
    "rent30": 0.77,
    "rent90": 1.9,
    "rent180": 2.71,
    "rent360": 4.84,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Acciones Chilenas",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "A",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "BCI",
        "rent30": 4.07,
        "rent90": 1.5,
        "rent180": 17.83,
        "rent360": 40.26,
        "tac": 0,
        "participes": 11
      },
      {
        "serie": "GAMMA",
        "rent30": 3.98,
        "rent90": 1.22,
        "rent180": 17.19,
        "rent360": 38.76,
        "tac": 1.09,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 4.52,
        "rent90": 1.64,
        "rent180": 18.44,
        "rent360": 43.19,
        "tac": 1.75,
        "participes": 422
      },
      {
        "serie": "CLASI",
        "rent30": 3.84,
        "rent90": 0.74,
        "rent180": 16.09,
        "rent360": 36.23,
        "tac": 2.9,
        "participes": 8215
      },
      {
        "serie": "FAMIL",
        "rent30": 3.77,
        "rent90": 0.54,
        "rent180": 15.62,
        "rent360": 35.15,
        "tac": 3.75,
        "participes": 56
      }
    ],
    "rent30": 3.84,
    "rent90": 0.74,
    "rent180": 16.09,
    "rent360": 36.23,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Top Picks",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BCI",
        "rent30": 4.85,
        "rent90": 2.42,
        "rent180": 20.01,
        "rent360": 42.66,
        "tac": 0,
        "participes": 6
      },
      {
        "serie": "A",
        "rent30": 4.78,
        "rent90": 2.21,
        "rent180": 19.5,
        "rent360": 41.49,
        "tac": 0.84,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 5.08,
        "rent90": 2.43,
        "rent180": 20.66,
        "rent360": 46.08,
        "tac": 1.2,
        "participes": 15
      },
      {
        "serie": "ALTOP",
        "rent30": 4.73,
        "rent90": 2.03,
        "rent180": 19.1,
        "rent360": 40.56,
        "tac": 1.5,
        "participes": 31
      }
    ],
    "rent30": 4.78,
    "rent90": 2.21,
    "rent180": 19.5,
    "rent360": 41.49,
    "defaultSerie": "A"
  },
  {
    "name": "BCI Asia",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BCI",
        "rent30": -4.47,
        "rent90": 3.78,
        "rent180": 5.48,
        "rent360": 5.48,
        "tac": 0.02,
        "participes": 5
      },
      {
        "serie": "APV",
        "rent30": -4.59,
        "rent90": 3.32,
        "rent180": 0.98,
        "rent360": 27.8,
        "tac": 1.78,
        "participes": 152
      },
      {
        "serie": "CLASI",
        "rent30": -4.69,
        "rent90": 2.99,
        "rent180": 0.35,
        "rent360": 26.23,
        "tac": 3.05,
        "participes": 1912
      },
      {
        "serie": "FAMIL",
        "rent30": -4.8,
        "rent90": 2.6,
        "rent180": -0.41,
        "rent360": 24.37,
        "tac": 4.52,
        "participes": 18
      }
    ],
    "rent30": -4.69,
    "rent90": 2.99,
    "rent180": 0.35,
    "rent360": 26.23,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Emergente Global",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BCI",
        "rent30": -5.31,
        "rent90": 4.95,
        "rent180": 4.3,
        "rent360": 29.84,
        "tac": 0.04,
        "participes": 3
      },
      {
        "serie": "APV",
        "rent30": -5.43,
        "rent90": 4.48,
        "rent180": 3.38,
        "rent360": 27.61,
        "tac": 1.79,
        "participes": 184
      },
      {
        "serie": "ALTOP",
        "rent30": -5.51,
        "rent90": 4.22,
        "rent180": 2.86,
        "rent360": 26.35,
        "tac": 2.79,
        "participes": 402
      },
      {
        "serie": "FAMIL",
        "rent30": -5.6,
        "rent90": 3.89,
        "rent180": 2.21,
        "rent360": 24.8,
        "tac": 4.05,
        "participes": 20
      },
      {
        "serie": "CLASI",
        "rent30": -5.61,
        "rent90": 3.82,
        "rent180": 2.09,
        "rent360": 24.49,
        "tac": 4.29,
        "participes": 1228
      }
    ],
    "rent30": -5.61,
    "rent90": 3.82,
    "rent180": 2.09,
    "rent360": 24.49,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI USA",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BCI",
        "rent30": -4.63,
        "rent90": -6.15,
        "rent180": -1.95,
        "rent360": 26.5,
        "tac": 0.01,
        "participes": 5
      },
      {
        "serie": "APV",
        "rent30": -4.76,
        "rent90": -6.56,
        "rent180": -2.82,
        "rent360": 24.33,
        "tac": 1.75,
        "participes": 5
      },
      {
        "serie": "CLASI",
        "rent30": -4.85,
        "rent90": -6.86,
        "rent180": -3.43,
        "rent360": 22.8,
        "tac": 3.01,
        "participes": 1078
      }
    ],
    "rent30": -4.85,
    "rent90": -6.86,
    "rent180": -3.43,
    "rent360": 22.8,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Europa",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BCI",
        "rent30": -3.08,
        "rent90": 1.07,
        "rent180": 2.15,
        "rent360": 22.72,
        "tac": 0.03,
        "participes": 3
      },
      {
        "serie": "APV",
        "rent30": -3.21,
        "rent90": 0.62,
        "rent180": 1.26,
        "rent360": 20.61,
        "tac": 1.78,
        "participes": 169
      },
      {
        "serie": "CLASI",
        "rent30": -3.31,
        "rent90": 0.3,
        "rent180": 0.62,
        "rent360": 19.13,
        "tac": 3.03,
        "participes": 1320
      },
      {
        "serie": "FAMIL",
        "rent30": -3.42,
        "rent90": -0.08,
        "rent180": -0.14,
        "rent360": 17.37,
        "tac": 4.53,
        "participes": 15
      }
    ],
    "rent30": -3.31,
    "rent90": 0.3,
    "rent180": 0.62,
    "rent360": 19.13,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Global Titan",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "FAMIL",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -2.11,
        "rent90": -4.82,
        "rent180": -4.99,
        "rent360": 22,
        "tac": 1.76,
        "participes": 135
      },
      {
        "serie": "ALTOP",
        "rent30": -2.19,
        "rent90": -5.06,
        "rent180": -5.46,
        "rent360": 20.8,
        "tac": 2.76,
        "participes": 49
      },
      {
        "serie": "CLASI",
        "rent30": -2.32,
        "rent90": -5.48,
        "rent180": -6.3,
        "rent360": 18.72,
        "tac": 4.51,
        "participes": 1842
      }
    ],
    "rent30": -2.32,
    "rent90": -5.48,
    "rent180": -6.3,
    "rent360": 18.72,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Mach Arriesgado",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BCI",
        "rent30": -2.1,
        "rent90": -1,
        "rent180": -1.38,
        "rent360": 19.94,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "DIGITAL",
        "rent30": -2.25,
        "rent90": -1.5,
        "rent180": -2.37,
        "rent360": 17.59,
        "tac": 2,
        "participes": 1
      }
    ],
    "rent30": -2.25,
    "rent90": -1.5,
    "rent180": -2.37,
    "rent360": 17.59,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BCI Estados Unidos",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BCI",
        "rent30": -2.2,
        "rent90": -4.95,
        "rent180": -6.61,
        "rent360": 21.37,
        "tac": 0,
        "participes": 3
      },
      {
        "serie": "APV",
        "rent30": -2.34,
        "rent90": -5.37,
        "rent180": -7.43,
        "rent360": 19.29,
        "tac": 1.75,
        "participes": 736
      },
      {
        "serie": "ALTOP",
        "rent30": -2.41,
        "rent90": -5.61,
        "rent180": -7.9,
        "rent360": 18.12,
        "tac": 2.75,
        "participes": 106
      },
      {
        "serie": "CLASI",
        "rent30": -2.54,
        "rent90": -6.03,
        "rent180": -8.71,
        "rent360": 16.09,
        "tac": 4.51,
        "participes": 5205
      },
      {
        "serie": "FAMIL",
        "rent30": -2.54,
        "rent90": -6.03,
        "rent180": -8.71,
        "rent360": 16.09,
        "tac": 4.51,
        "participes": 20
      }
    ],
    "rent30": -2.54,
    "rent90": -6.03,
    "rent180": -8.71,
    "rent360": 16.09,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Acciones Sostenibles ESG",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -3.68,
        "rent90": -3.68,
        "rent180": -6.21,
        "rent360": 9.65,
        "tac": 1,
        "participes": 37
      },
      {
        "serie": "CLASI",
        "rent30": -3.8,
        "rent90": -4.06,
        "rent180": -6.94,
        "rent360": 7.98,
        "tac": 2.55,
        "participes": 615
      }
    ],
    "rent30": -3.8,
    "rent90": -4.06,
    "rent180": -6.94,
    "rent360": 7.98,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BCI Acciones Globales",
    "provider": "BCI",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "BCI",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 14.88,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -7.93,
        "rent90": -5.24,
        "rent180": -0.68,
        "rent360": 20.25,
        "tac": 1.01,
        "participes": 1
      },
      {
        "serie": "CLASI",
        "rent30": -7.99,
        "rent90": -5.43,
        "rent180": -1.09,
        "rent360": 0,
        "tac": 1.53,
        "participes": 11
      }
    ],
    "rent30": -7.99,
    "rent90": -5.43,
    "rent180": -1.09,
    "rent360": 0,
    "defaultSerie": "CLASI"
  },
  {
    "name": "BICE Renta Global Ahorro Dólar",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": -1.23,
        "rent90": -0.5,
        "rent180": 0.66,
        "rent360": 4.49,
        "tac": 0.7,
        "participes": 57
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -1.3,
        "rent90": -0.78,
        "rent180": 0.06,
        "rent360": 3.49,
        "tac": 1.46,
        "participes": 182
      }
    ],
    "rent30": -1.23,
    "rent90": -0.5,
    "rent180": 0.66,
    "rent360": 4.49,
    "defaultSerie": "INSTITUCIO"
  },
  {
    "name": "BICE Mp Liquidez",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "A",
        "rent30": 0.32,
        "rent90": 1.07,
        "rent180": 2.17,
        "rent360": 4.47,
        "tac": 0.53,
        "participes": 1
      }
    ],
    "rent30": 0.32,
    "rent90": 1.07,
    "rent180": 2.17,
    "rent360": 4.47,
    "defaultSerie": "A"
  },
  {
    "name": "BICE Digital Liquidez Pesos",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "DIGITAL",
        "rent30": 0.25,
        "rent90": 0.85,
        "rent180": 1.72,
        "rent360": 3.59,
        "tac": 1.39,
        "participes": 671
      }
    ],
    "rent30": 0.25,
    "rent90": 0.85,
    "rent180": 1.72,
    "rent360": 3.59,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BICE Liquidez Pesos",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.33,
        "rent90": 1.1,
        "rent180": 2.21,
        "rent360": 4.57,
        "tac": 0.43,
        "participes": 903
      },
      {
        "serie": "D",
        "rent30": 0.3,
        "rent90": 1,
        "rent180": 2.01,
        "rent360": 4.15,
        "tac": 0.83,
        "participes": 1
      },
      {
        "serie": "INVER",
        "rent30": 0.28,
        "rent90": 0.96,
        "rent180": 1.93,
        "rent360": 4,
        "tac": 1.14,
        "participes": 1239
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": 0.26,
        "rent90": 0.87,
        "rent180": 1.75,
        "rent360": 3.64,
        "tac": 1.33,
        "participes": 81
      },
      {
        "serie": "CLASICA",
        "rent30": 0.24,
        "rent90": 0.82,
        "rent180": 1.66,
        "rent360": 3.47,
        "tac": 1.67,
        "participes": 12235
      }
    ],
    "rent30": 0.24,
    "rent90": 0.82,
    "rent180": 1.66,
    "rent360": 3.47,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Liquidez Dólar",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.3,
        "rent90": 1.01,
        "rent180": 2.04,
        "rent360": 4.08,
        "tac": 0.43,
        "participes": 235
      },
      {
        "serie": "INSTITUCIO",
        "rent30": 0.26,
        "rent90": 0.9,
        "rent180": 1.82,
        "rent360": 3.64,
        "tac": 0.9,
        "participes": 725
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": 0.24,
        "rent90": 0.81,
        "rent180": 1.63,
        "rent360": 3.27,
        "tac": 1.22,
        "participes": 3260
      },
      {
        "serie": "CLASICA",
        "rent30": 0.24,
        "rent90": 0.81,
        "rent180": 1.63,
        "rent360": 3.27,
        "tac": 1.24,
        "participes": 1120
      }
    ],
    "rent30": 0.24,
    "rent90": 0.81,
    "rent180": 1.63,
    "rent360": 3.27,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Renta Más Largo Plazo",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 1.03,
        "rent90": 2.51,
        "rent180": 4.25,
        "rent360": 7.28,
        "tac": 0.57,
        "participes": 34
      },
      {
        "serie": "INSTITUCIO",
        "rent30": 1.01,
        "rent90": 2.44,
        "rent180": 4.11,
        "rent360": 7,
        "tac": 0.84,
        "participes": 44
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": 1,
        "rent90": 2.39,
        "rent180": 4.02,
        "rent360": 6.81,
        "tac": 1.02,
        "participes": 135
      },
      {
        "serie": "CLASICA",
        "rent30": 0.99,
        "rent90": 2.38,
        "rent180": 3.99,
        "rent360": 6.74,
        "tac": 1.08,
        "participes": 79
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": 0.95,
        "rent90": 2.24,
        "rent180": 3.7,
        "rent360": 6.18,
        "tac": 1.6,
        "participes": 132
      }
    ],
    "rent30": 0.99,
    "rent90": 2.38,
    "rent180": 3.99,
    "rent360": 6.74,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Renta Largo Plazo",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.96,
        "rent90": 2.57,
        "rent180": 3.92,
        "rent360": 6.76,
        "tac": 0.52,
        "participes": 343
      },
      {
        "serie": "INSTITUCIO",
        "rent30": 0.94,
        "rent90": 2.5,
        "rent180": 3.78,
        "rent360": 6.48,
        "tac": 0.79,
        "participes": 871
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": 0.92,
        "rent90": 2.45,
        "rent180": 3.69,
        "rent360": 6.29,
        "tac": 0.97,
        "participes": 191
      },
      {
        "serie": "D",
        "rent30": 0.92,
        "rent90": 2.43,
        "rent180": 3.66,
        "rent360": 6.24,
        "tac": 1.02,
        "participes": 1
      },
      {
        "serie": "CLASICA",
        "rent30": 0.92,
        "rent90": 2.43,
        "rent180": 3.66,
        "rent360": 6.23,
        "tac": 1.03,
        "participes": 748
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": 0.88,
        "rent90": 2.29,
        "rent180": 3.37,
        "rent360": 5.66,
        "tac": 1.56,
        "participes": 780
      }
    ],
    "rent30": 0.92,
    "rent90": 2.43,
    "rent180": 3.66,
    "rent360": 6.23,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Renta UF",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "E",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 1.05,
        "rent90": 2.5,
        "rent180": 3.55,
        "rent360": 6.1,
        "tac": 0.52,
        "participes": 932
      },
      {
        "serie": "INSTITUCIO",
        "rent30": 1.03,
        "rent90": 2.43,
        "rent180": 3.41,
        "rent360": 5.82,
        "tac": 0.78,
        "participes": 1411
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": 1.02,
        "rent90": 2.38,
        "rent180": 3.31,
        "rent360": 5.63,
        "tac": 0.97,
        "participes": 340
      },
      {
        "serie": "D",
        "rent30": 1.01,
        "rent90": 2.37,
        "rent180": 3.29,
        "rent360": 5.58,
        "tac": 1.02,
        "participes": 1
      },
      {
        "serie": "CLASICA",
        "rent30": 1.01,
        "rent90": 2.37,
        "rent180": 3.28,
        "rent360": 5.56,
        "tac": 1.03,
        "participes": 3682
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": 0.97,
        "rent90": 2.23,
        "rent180": 3,
        "rent360": 5,
        "tac": 1.55,
        "participes": 3938
      }
    ],
    "rent30": 1.01,
    "rent90": 2.37,
    "rent180": 3.28,
    "rent360": 5.56,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Renta Pesos",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "E",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -0.18,
        "rent90": 1.28,
        "rent180": 2.89,
        "rent360": 6,
        "tac": 0.5,
        "participes": 196
      },
      {
        "serie": "INSTITUCIO",
        "rent30": -0.2,
        "rent90": 1.23,
        "rent180": 2.78,
        "rent360": 5.79,
        "tac": 0.69,
        "participes": 702
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -0.21,
        "rent90": 1.19,
        "rent180": 2.69,
        "rent360": 5.6,
        "tac": 0.87,
        "participes": 68
      },
      {
        "serie": "CLASICA",
        "rent30": -0.22,
        "rent90": 1.17,
        "rent180": 2.66,
        "rent360": 5.54,
        "tac": 0.93,
        "participes": 853
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -0.26,
        "rent90": 1.03,
        "rent180": 2.38,
        "rent360": 4.97,
        "tac": 1.52,
        "participes": 939
      }
    ],
    "rent30": -0.22,
    "rent90": 1.17,
    "rent180": 2.66,
    "rent360": 5.54,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Digital Renta UF",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "DIGITAL",
        "rent30": 0.96,
        "rent90": 2.21,
        "rent180": 2.98,
        "rent360": 4.99,
        "tac": 1.47,
        "participes": 1209
      }
    ],
    "rent30": 0.96,
    "rent90": 2.21,
    "rent180": 2.98,
    "rent360": 4.99,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BICE Renta Corto Plazo",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "D",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "E",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 0.65,
        "rent90": 1.61,
        "rent180": 2.73,
        "rent360": 5.3,
        "tac": 0.46,
        "participes": 184
      },
      {
        "serie": "INSTITUCIO",
        "rent30": 0.64,
        "rent90": 1.56,
        "rent180": 2.63,
        "rent360": 5.1,
        "tac": 0.63,
        "participes": 551
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": 0.63,
        "rent90": 1.52,
        "rent180": 2.55,
        "rent360": 4.93,
        "tac": 0.81,
        "participes": 84
      },
      {
        "serie": "CLASICA",
        "rent30": 0.62,
        "rent90": 1.5,
        "rent180": 2.52,
        "rent360": 4.86,
        "tac": 0.87,
        "participes": 2258
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": 0.58,
        "rent90": 1.37,
        "rent180": 2.25,
        "rent360": 4.34,
        "tac": 1.39,
        "participes": 2393
      }
    ],
    "rent30": 0.62,
    "rent90": 1.5,
    "rent180": 2.52,
    "rent360": 4.86,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Temático Global",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": -4.28,
        "rent90": -7.23,
        "rent180": -14.05,
        "rent360": 6.14,
        "tac": 1.21,
        "participes": 5
      },
      {
        "serie": "APV",
        "rent30": -4.28,
        "rent90": -7.23,
        "rent180": -14.05,
        "rent360": 6.29,
        "tac": 1.24,
        "participes": 74
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -4.36,
        "rent90": -7.5,
        "rent180": -14.54,
        "rent360": 5.09,
        "tac": 2.35,
        "participes": 80
      },
      {
        "serie": "CLASICA",
        "rent30": -4.38,
        "rent90": -7.56,
        "rent180": -14.64,
        "rent360": 4.84,
        "tac": 2.6,
        "participes": 196
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -4.43,
        "rent90": -7.7,
        "rent180": -14.9,
        "rent360": 4.23,
        "tac": 3.18,
        "participes": 83
      }
    ],
    "rent30": -4.38,
    "rent90": -7.56,
    "rent180": -14.64,
    "rent360": 4.84,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Estructurado UF Viii",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 1.6,
        "rent90": 2.25,
        "rent180": 2.56,
        "rent360": 4.69,
        "tac": 1.02,
        "participes": 23
      },
      {
        "serie": "A",
        "rent30": 1.58,
        "rent90": 2.2,
        "rent180": 2.46,
        "rent360": 4.49,
        "tac": 1.21,
        "participes": 550
      }
    ],
    "rent30": 1.58,
    "rent90": 2.2,
    "rent180": 2.46,
    "rent360": 4.49,
    "defaultSerie": "A"
  },
  {
    "name": "BICE Tesoreria",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": 0.34,
        "rent90": 1.14,
        "rent180": 2.3,
        "rent360": 4.73,
        "tac": 0.31,
        "participes": 946
      },
      {
        "serie": "CLASICA",
        "rent30": 0.31,
        "rent90": 1.05,
        "rent180": 2.12,
        "rent360": 4.36,
        "tac": 0.69,
        "participes": 1093
      }
    ],
    "rent30": 0.31,
    "rent90": 1.05,
    "rent180": 2.12,
    "rent360": 4.36,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Estructurado Dólar Ii",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "UNICA",
        "rent30": 0.08,
        "rent90": 0.8,
        "rent180": 1.11,
        "rent360": 3.86,
        "tac": 1.22,
        "participes": 515
      }
    ],
    "rent30": 0.08,
    "rent90": 0.8,
    "rent180": 1.11,
    "rent360": 3.86,
    "defaultSerie": "UNICA"
  },
  {
    "name": "BICE Renta Global Dólar",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": -1.94,
        "rent90": -1.04,
        "rent180": -0.21,
        "rent360": 4.15,
        "tac": 0.56,
        "participes": 82
      },
      {
        "serie": "INSTITUCIO",
        "rent30": -1.94,
        "rent90": -1.07,
        "rent180": -0.33,
        "rent360": 3.9,
        "tac": 0.79,
        "participes": 177
      },
      {
        "serie": "CLASICA",
        "rent30": -1.97,
        "rent90": -1.17,
        "rent180": -0.57,
        "rent360": 3.47,
        "tac": 1.04,
        "participes": 178
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -2.01,
        "rent90": -1.34,
        "rent180": -0.87,
        "rent360": 2.88,
        "tac": 1.57,
        "participes": 133
      }
    ],
    "rent30": -1.97,
    "rent90": -1.17,
    "rent180": -0.57,
    "rent360": 3.47,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Estructurado UF Vii",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.65,
        "rent90": 1.31,
        "rent180": 1.67,
        "rent360": 3.65,
        "tac": 1.02,
        "participes": 40
      },
      {
        "serie": "A",
        "rent30": 0.64,
        "rent90": 1.26,
        "rent180": 1.58,
        "rent360": 3.46,
        "tac": 1.21,
        "participes": 902
      }
    ],
    "rent30": 0.64,
    "rent90": 1.26,
    "rent180": 1.58,
    "rent360": 3.46,
    "defaultSerie": "A"
  },
  {
    "name": "BICE Renta Global",
    "provider": "BICE",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.32,
        "rent90": 1.53,
        "rent180": -3.82,
        "rent360": -1.58,
        "tac": 0.55,
        "participes": 43
      },
      {
        "serie": "INSTITUCIO",
        "rent30": 0.3,
        "rent90": 1.46,
        "rent180": -3.95,
        "rent360": -1.85,
        "tac": 0.79,
        "participes": 62
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": 0.24,
        "rent90": 1.26,
        "rent180": -4.32,
        "rent360": -2.6,
        "tac": 1.6,
        "participes": 280
      }
    ],
    "rent30": 0.32,
    "rent90": 1.53,
    "rent180": -3.82,
    "rent360": -1.58,
    "defaultSerie": "APV"
  },
  {
    "name": "BICE Digital Balanceado",
    "provider": "BICE",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "DIGITAL",
        "rent30": -0.8,
        "rent90": 0.79,
        "rent180": 1.01,
        "rent360": 14.55,
        "tac": 1.53,
        "participes": 1758
      }
    ],
    "rent30": -0.8,
    "rent90": 0.79,
    "rent180": 1.01,
    "rent360": 14.55,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BICE Balanceado",
    "provider": "BICE",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "E",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -0.76,
        "rent90": 0.93,
        "rent180": 1.3,
        "rent360": 15.3,
        "tac": 1.01,
        "participes": 1538
      },
      {
        "serie": "INSTITUCIO",
        "rent30": -0.76,
        "rent90": 0.93,
        "rent180": 1.3,
        "rent360": 15.3,
        "tac": 1.03,
        "participes": 382
      },
      {
        "serie": "D",
        "rent30": -0.83,
        "rent90": 0.69,
        "rent180": 0.8,
        "rent360": 14.18,
        "tac": 1.92,
        "participes": 1
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -0.85,
        "rent90": 0.64,
        "rent180": 0.72,
        "rent360": 14.01,
        "tac": 2.15,
        "participes": 167
      },
      {
        "serie": "CLASICA",
        "rent30": -0.87,
        "rent90": 0.59,
        "rent180": 0.61,
        "rent360": 13.77,
        "tac": 2.37,
        "participes": 2651
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -0.91,
        "rent90": 0.43,
        "rent180": 0.31,
        "rent360": 13.1,
        "tac": 2.97,
        "participes": 564
      }
    ],
    "rent30": -0.87,
    "rent90": 0.59,
    "rent180": 0.61,
    "rent360": 13.77,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Digital Conservador",
    "provider": "BICE",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "DIGITAL",
        "rent30": 0.56,
        "rent90": 2.15,
        "rent180": 2.5,
        "rent360": 7.84,
        "tac": 1.51,
        "participes": 1366
      }
    ],
    "rent30": 0.56,
    "rent90": 2.15,
    "rent180": 2.5,
    "rent360": 7.84,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BICE Conservador",
    "provider": "BICE",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "E",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 0.62,
        "rent90": 2.39,
        "rent180": 2.94,
        "rent360": 8.76,
        "tac": 0.76,
        "participes": 681
      },
      {
        "serie": "INSTITUCIO",
        "rent30": 0.61,
        "rent90": 2.35,
        "rent180": 2.86,
        "rent360": 8.6,
        "tac": 0.91,
        "participes": 582
      },
      {
        "serie": "D",
        "rent30": 0.57,
        "rent90": 2.19,
        "rent180": 2.55,
        "rent360": 7.96,
        "tac": 1.51,
        "participes": 1
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": 0.56,
        "rent90": 2.16,
        "rent180": 2.49,
        "rent360": 7.84,
        "tac": 1.62,
        "participes": 97
      },
      {
        "serie": "CLASICA",
        "rent30": 0.55,
        "rent90": 2.15,
        "rent180": 2.47,
        "rent360": 7.8,
        "tac": 1.65,
        "participes": 2894
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": 0.49,
        "rent90": 1.92,
        "rent180": 2.01,
        "rent360": 6.84,
        "tac": 2.56,
        "participes": 1044
      }
    ],
    "rent30": 0.55,
    "rent90": 2.15,
    "rent180": 2.47,
    "rent360": 7.8,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Digital Acciones Chile Activo",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "DIGITAL",
        "rent30": 3.39,
        "rent90": 1.55,
        "rent180": 15.52,
        "rent360": 41.25,
        "tac": 3.05,
        "participes": 1721
      }
    ],
    "rent30": 3.39,
    "rent90": 1.55,
    "rent180": 15.52,
    "rent360": 41.25,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BICE Acciones Chile Activo",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": 3.45,
        "rent90": 1.95,
        "rent180": 15.85,
        "rent360": 39.7,
        "tac": 1.11,
        "participes": 463
      },
      {
        "serie": "APV",
        "rent30": 3.38,
        "rent90": 1.71,
        "rent180": 15.33,
        "rent360": 38.83,
        "tac": 2.01,
        "participes": 402
      },
      {
        "serie": "D",
        "rent30": 3.3,
        "rent90": 1.44,
        "rent180": 14.7,
        "rent360": 37.34,
        "tac": 2.97,
        "participes": 1
      },
      {
        "serie": "CLASICA",
        "rent30": 3.21,
        "rent90": 1.17,
        "rent180": 14.11,
        "rent360": 35.94,
        "tac": 4.14,
        "participes": 1426
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": 3.2,
        "rent90": 1.13,
        "rent180": 14.01,
        "rent360": 35.75,
        "tac": 4.28,
        "participes": 204
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": 3.2,
        "rent90": 1.12,
        "rent180": 14,
        "rent360": 35.71,
        "tac": 4.31,
        "participes": 727
      }
    ],
    "rent30": 3.21,
    "rent90": 1.17,
    "rent180": 14.11,
    "rent360": 35.94,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Acciones Chile Selectivo",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": 3.27,
        "rent90": 1.02,
        "rent180": 16.84,
        "rent360": 37.07,
        "tac": 0.66,
        "participes": 87
      },
      {
        "serie": "APV",
        "rent30": 3.19,
        "rent90": 0.79,
        "rent180": 16.31,
        "rent360": 36.13,
        "tac": 1.56,
        "participes": 117
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": 3.11,
        "rent90": 0.5,
        "rent180": 15.65,
        "rent360": 34.63,
        "tac": 2.68,
        "participes": 104
      },
      {
        "serie": "CLASICA",
        "rent30": 3.1,
        "rent90": 0.47,
        "rent180": 15.58,
        "rent360": 34.47,
        "tac": 2.8,
        "participes": 400
      },
      {
        "serie": "D",
        "rent30": 3.08,
        "rent90": 0.42,
        "rent180": 15.45,
        "rent360": 34.15,
        "tac": 2.92,
        "participes": 1
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": 2.99,
        "rent90": 0.14,
        "rent180": 14.82,
        "rent360": 32.74,
        "tac": 4.11,
        "participes": 48
      }
    ],
    "rent30": 3.1,
    "rent90": 0.47,
    "rent180": 15.58,
    "rent360": 34.47,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Acciones Chile Mid Cap",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": -1.5,
        "rent90": -0.55,
        "rent180": 12.13,
        "rent360": 33.85,
        "tac": 1.05,
        "participes": 224
      },
      {
        "serie": "APV",
        "rent30": -1.57,
        "rent90": -0.78,
        "rent180": 11.62,
        "rent360": 33.02,
        "tac": 1.95,
        "participes": 87
      },
      {
        "serie": "CLASICA",
        "rent30": -1.72,
        "rent90": -1.31,
        "rent180": 10.45,
        "rent360": 30.24,
        "tac": 4.05,
        "participes": 466
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -1.74,
        "rent90": -1.35,
        "rent180": 10.35,
        "rent360": 30.07,
        "tac": 4.23,
        "participes": 133
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -1.74,
        "rent90": -1.36,
        "rent180": 10.34,
        "rent360": 30.03,
        "tac": 4.25,
        "participes": 93
      }
    ],
    "rent30": -1.72,
    "rent90": -1.31,
    "rent180": 10.45,
    "rent360": 30.24,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Acciones Latam",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": -5.89,
        "rent90": 10.02,
        "rent180": 11.1,
        "rent360": 44.49,
        "tac": 1.23,
        "participes": 43
      },
      {
        "serie": "APV",
        "rent30": -5.96,
        "rent90": 9.77,
        "rent180": 10.6,
        "rent360": 43.6,
        "tac": 2.54,
        "participes": 146
      },
      {
        "serie": "D",
        "rent30": -6.03,
        "rent90": 9.48,
        "rent180": 10,
        "rent360": 42.06,
        "tac": 3.77,
        "participes": 1
      },
      {
        "serie": "CLASICA",
        "rent30": -6.11,
        "rent90": 9.18,
        "rent180": 9.43,
        "rent360": 40.55,
        "tac": 4,
        "participes": 471
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -6.08,
        "rent90": 9.3,
        "rent180": 9.67,
        "rent360": 41.25,
        "tac": 4.5,
        "participes": 79
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -6.15,
        "rent90": 9.02,
        "rent180": 9.1,
        "rent360": 39.79,
        "tac": 5.53,
        "participes": 143
      }
    ],
    "rent30": -6.11,
    "rent90": 9.18,
    "rent180": 9.43,
    "rent360": 40.55,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Acciones Mercados Emergentes",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": -7.81,
        "rent90": 5.73,
        "rent180": 4.12,
        "rent360": 26.13,
        "tac": 1.05,
        "participes": 46
      },
      {
        "serie": "APV",
        "rent30": -7.88,
        "rent90": 5.48,
        "rent180": 3.65,
        "rent360": 25.38,
        "tac": 1.95,
        "participes": 165
      },
      {
        "serie": "D",
        "rent30": -7.99,
        "rent90": 5.01,
        "rent180": 2.7,
        "rent360": 23.09,
        "tac": 3.5,
        "participes": 1
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -8,
        "rent90": 5.04,
        "rent180": 2.78,
        "rent360": 23.33,
        "tac": 3.63,
        "participes": 135
      },
      {
        "serie": "CLASICA",
        "rent30": -8.03,
        "rent90": 4.92,
        "rent180": 2.56,
        "rent360": 22.72,
        "tac": 4.06,
        "participes": 436
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -8.07,
        "rent90": 4.76,
        "rent180": 2.25,
        "rent360": 22.08,
        "tac": 4.65,
        "participes": 205
      }
    ],
    "rent30": -8.03,
    "rent90": 4.92,
    "rent180": 2.56,
    "rent360": 22.72,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Acciones Europa",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": -4.3,
        "rent90": 3.47,
        "rent180": 5.68,
        "rent360": 25.65,
        "tac": 1.05,
        "participes": 11
      },
      {
        "serie": "APV",
        "rent30": -4.36,
        "rent90": 3.23,
        "rent180": 5.2,
        "rent360": 24.9,
        "tac": 1.95,
        "participes": 110
      },
      {
        "serie": "D",
        "rent30": -4.48,
        "rent90": 2.77,
        "rent180": 4.24,
        "rent360": 22.63,
        "tac": 3.49,
        "participes": 1
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -4.48,
        "rent90": 2.79,
        "rent180": 4.32,
        "rent360": 22.86,
        "tac": 3.62,
        "participes": 129
      },
      {
        "serie": "CLASICA",
        "rent30": -4.52,
        "rent90": 2.68,
        "rent180": 4.09,
        "rent360": 22.25,
        "tac": 4.01,
        "participes": 374
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -4.56,
        "rent90": 2.52,
        "rent180": 3.78,
        "rent360": 21.61,
        "tac": 4.64,
        "participes": 127
      }
    ],
    "rent30": -4.52,
    "rent90": 2.68,
    "rent180": 4.09,
    "rent360": 22.25,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Digital Agresivo",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "DIGITAL",
        "rent30": -2.18,
        "rent90": -0.33,
        "rent180": -0.72,
        "rent360": 18.07,
        "tac": 1.57,
        "participes": 1034
      }
    ],
    "rent30": -2.18,
    "rent90": -0.33,
    "rent180": -0.72,
    "rent360": 18.07,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BICE Digital Acciones Mundo Sustentable",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "DIGITAL",
        "rent30": -4.53,
        "rent90": -2.96,
        "rent180": -5.73,
        "rent360": 17.71,
        "tac": 3.16,
        "participes": 510
      }
    ],
    "rent30": -4.53,
    "rent90": -2.96,
    "rent180": -5.73,
    "rent360": 17.71,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "BICE Acciones Mundo Sustentable",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "E",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "INSTITUCIO",
        "rent30": -4.39,
        "rent90": -2.41,
        "rent180": -4.76,
        "rent360": 20.08,
        "tac": 1.03,
        "participes": 173
      },
      {
        "serie": "APV",
        "rent30": -4.45,
        "rent90": -2.63,
        "rent180": -5.19,
        "rent360": 19.36,
        "tac": 1.92,
        "participes": 582
      },
      {
        "serie": "D",
        "rent30": -4.57,
        "rent90": -3.07,
        "rent180": -6.06,
        "rent360": 17.19,
        "tac": 3.47,
        "participes": 1
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -4.58,
        "rent90": -3.05,
        "rent180": -5.99,
        "rent360": 17.41,
        "tac": 3.6,
        "participes": 234
      },
      {
        "serie": "CLASICA",
        "rent30": -4.61,
        "rent90": -3.15,
        "rent180": -6.19,
        "rent360": 16.83,
        "tac": 4.03,
        "participes": 790
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -4.65,
        "rent90": -3.3,
        "rent180": -6.47,
        "rent360": 16.22,
        "tac": 4.66,
        "participes": 591
      }
    ],
    "rent30": -4.61,
    "rent90": -3.15,
    "rent180": -6.19,
    "rent360": 16.83,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Agresivo",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "E",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "INSTITUCIO",
        "rent30": -2.17,
        "rent90": -0.2,
        "rent180": -0.5,
        "rent360": 18.83,
        "tac": 1.01,
        "participes": 63
      },
      {
        "serie": "APV",
        "rent30": -2.18,
        "rent90": -0.25,
        "rent180": -0.6,
        "rent360": 18.59,
        "tac": 1.22,
        "participes": 1452
      },
      {
        "serie": "D",
        "rent30": -2.26,
        "rent90": -0.52,
        "rent180": -1.14,
        "rent360": 17.3,
        "tac": 2.18,
        "participes": 1
      },
      {
        "serie": "CLASICA",
        "rent30": -2.31,
        "rent90": -0.69,
        "rent180": -1.47,
        "rent360": 16.56,
        "tac": 3.02,
        "participes": 869
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -2.33,
        "rent90": -0.75,
        "rent180": -1.59,
        "rent360": 16.28,
        "tac": 3.21,
        "participes": 162
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -2.34,
        "rent90": -0.8,
        "rent180": -1.68,
        "rent360": 16.08,
        "tac": 3.38,
        "participes": 276
      }
    ],
    "rent30": -2.31,
    "rent90": -0.69,
    "rent180": -1.47,
    "rent360": 16.56,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Acciones Norteamerica",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "INSTITUCIO",
        "rent30": -5.92,
        "rent90": -8.22,
        "rent180": -9.5,
        "rent360": 10.2,
        "tac": 1.03,
        "participes": 70
      },
      {
        "serie": "APV",
        "rent30": -5.98,
        "rent90": -8.43,
        "rent180": -9.91,
        "rent360": 9.55,
        "tac": 1.93,
        "participes": 301
      },
      {
        "serie": "D",
        "rent30": -6.1,
        "rent90": -8.83,
        "rent180": -10.73,
        "rent360": 7.55,
        "tac": 3.48,
        "participes": 1
      },
      {
        "serie": "LARGOPLAZO",
        "rent30": -6.1,
        "rent90": -8.82,
        "rent180": -10.66,
        "rent360": 7.75,
        "tac": 3.61,
        "participes": 246
      },
      {
        "serie": "CLASICA",
        "rent30": -6.13,
        "rent90": -8.92,
        "rent180": -10.86,
        "rent360": 7.22,
        "tac": 3.74,
        "participes": 673
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -6.18,
        "rent90": -9.05,
        "rent180": -11.13,
        "rent360": 6.66,
        "tac": 4.63,
        "participes": 362
      }
    ],
    "rent30": -6.13,
    "rent90": -8.92,
    "rent180": -10.86,
    "rent360": 7.22,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "BICE Bonos Latam",
    "provider": "BICE",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV",
        "rent30": -1.9,
        "rent90": -0.36,
        "rent180": 0.68,
        "rent360": 6.6,
        "tac": 0.61,
        "participes": 28
      },
      {
        "serie": "INSTITUCIO",
        "rent30": -1.97,
        "rent90": -0.62,
        "rent180": 0.19,
        "rent360": 5.59,
        "tac": 1.34,
        "participes": 53
      },
      {
        "serie": "CLASICA",
        "rent30": -1.99,
        "rent90": -0.72,
        "rent180": -0.04,
        "rent360": 5.1,
        "tac": 1.82,
        "participes": 145
      },
      {
        "serie": "LIQUIDEZ",
        "rent30": -2.02,
        "rent90": -0.78,
        "rent180": -0.14,
        "rent360": 4.81,
        "tac": 2.01,
        "participes": 311
      }
    ],
    "rent30": -1.99,
    "rent90": -0.72,
    "rent180": -0.04,
    "rent360": 5.1,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Fintual Very Conservative Streep",
    "provider": "Fintual",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "A",
        "rent30": 0.32,
        "rent90": 1.02,
        "rent180": 2.02,
        "rent360": 4.09,
        "tac": 1.19,
        "participes": 73020
      }
    ],
    "rent30": 0.32,
    "rent90": 1.02,
    "rent180": 2.02,
    "rent360": 4.09,
    "defaultSerie": "A"
  },
  {
    "name": "Fintual Conservative Clooney",
    "provider": "Fintual",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.17,
        "rent90": 0.6,
        "rent180": 1.51,
        "rent360": 9.28,
        "tac": 0.49,
        "participes": 3810
      },
      {
        "serie": "A",
        "rent30": 0.12,
        "rent90": 0.42,
        "rent180": 1.15,
        "rent360": 8.52,
        "tac": 1.19,
        "participes": 46713
      }
    ],
    "rent30": 0.12,
    "rent90": 0.42,
    "rent180": 1.15,
    "rent360": 8.52,
    "defaultSerie": "A"
  },
  {
    "name": "Fintual Moderate Pitt",
    "provider": "Fintual",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": -0.57,
        "rent90": -1.91,
        "rent180": -1.45,
        "rent360": 18.34,
        "tac": 0.49,
        "participes": 17971
      },
      {
        "serie": "A",
        "rent30": -0.62,
        "rent90": -2.08,
        "rent180": -1.8,
        "rent360": 17.53,
        "tac": 1.19,
        "participes": 83671
      }
    ],
    "rent30": -0.62,
    "rent90": -2.08,
    "rent180": -1.8,
    "rent360": 17.53,
    "defaultSerie": "A"
  },
  {
    "name": "Fintual Risky Norris",
    "provider": "Fintual",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV",
        "rent30": -1.97,
        "rent90": -2.42,
        "rent180": -2.05,
        "rent360": 34.47,
        "tac": 0.49,
        "participes": 23602
      },
      {
        "serie": "A",
        "rent30": -2.03,
        "rent90": -2.59,
        "rent180": -2.4,
        "rent360": 33.55,
        "tac": 1.19,
        "participes": 67891
      }
    ],
    "rent30": -2.03,
    "rent90": -2.59,
    "rent180": -2.4,
    "rent360": 33.55,
    "defaultSerie": "A"
  },
  {
    "name": "Itaú Ahorro Corto Plazo",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "S-APV",
        "rent30": 0.71,
        "rent90": 1.72,
        "rent180": 2.89,
        "rent360": 5.52,
        "tac": 0.17,
        "participes": 1
      },
      {
        "serie": "F5",
        "rent30": 0.67,
        "rent90": 1.62,
        "rent180": 2.72,
        "rent360": 5.23,
        "tac": 0.62,
        "participes": 36
      },
      {
        "serie": "S",
        "rent30": 0.67,
        "rent90": 1.6,
        "rent180": 2.65,
        "rent360": 5.05,
        "tac": 0.62,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 0.67,
        "rent90": 1.65,
        "rent180": 2.85,
        "rent360": 5.56,
        "tac": 0.67,
        "participes": 594
      },
      {
        "serie": "F4",
        "rent30": 0.67,
        "rent90": 1.58,
        "rent180": 2.6,
        "rent360": 4.95,
        "tac": 0.72,
        "participes": 112
      },
      {
        "serie": "SIMPLE",
        "rent30": 0.63,
        "rent90": 1.48,
        "rent180": 2.42,
        "rent360": 4.62,
        "tac": 1.15,
        "participes": 9228
      }
    ],
    "rent30": 0.67,
    "rent90": 1.65,
    "rent180": 2.85,
    "rent360": 5.56,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Ahorro UF",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "F5",
        "rent30": 1.39,
        "rent90": 2.42,
        "rent180": 3.35,
        "rent360": 5.9,
        "tac": 0.56,
        "participes": 25
      },
      {
        "serie": "F4",
        "rent30": 1.38,
        "rent90": 2.37,
        "rent180": 3.22,
        "rent360": 5.62,
        "tac": 0.64,
        "participes": 23
      },
      {
        "serie": "APV",
        "rent30": 1.37,
        "rent90": 2.34,
        "rent180": 3.15,
        "rent360": 5.46,
        "tac": 0.85,
        "participes": 210
      },
      {
        "serie": "SIMPLE",
        "rent30": 1.35,
        "rent90": 2.27,
        "rent180": 3.04,
        "rent360": 5.27,
        "tac": 1.12,
        "participes": 9544
      }
    ],
    "rent30": 1.37,
    "rent90": 2.34,
    "rent180": 3.15,
    "rent360": 5.46,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Ahorro Plus",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "F7",
        "rent30": 0.67,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.42,
        "participes": 1
      },
      {
        "serie": "F5",
        "rent30": 0.66,
        "rent90": 1.52,
        "rent180": 2.7,
        "rent360": 5.35,
        "tac": 0.62,
        "participes": 65
      },
      {
        "serie": "APV",
        "rent30": 0.65,
        "rent90": 1.49,
        "rent180": 2.62,
        "rent360": 5.27,
        "tac": 0.67,
        "participes": 99
      },
      {
        "serie": "F4",
        "rent30": 0.65,
        "rent90": 1.48,
        "rent180": 2.61,
        "rent360": 5.16,
        "tac": 0.71,
        "participes": 59
      },
      {
        "serie": "SIMPLE",
        "rent30": 0.62,
        "rent90": 1.37,
        "rent180": 2.4,
        "rent360": 4.88,
        "tac": 1.14,
        "participes": 9691
      }
    ],
    "rent30": 0.65,
    "rent90": 1.49,
    "rent180": 2.62,
    "rent360": 5.27,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Ahorro Plus Dólar",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "F5",
        "rent30": 0.63,
        "rent90": 1.44,
        "rent180": 2.51,
        "rent360": 5.08,
        "tac": 0.63,
        "participes": 8
      },
      {
        "serie": "F4",
        "rent30": 0.63,
        "rent90": 1.41,
        "rent180": 2.46,
        "rent360": 4.91,
        "tac": 0.73,
        "participes": 11
      },
      {
        "serie": "SIMPLE",
        "rent30": 0.6,
        "rent90": 1.35,
        "rent180": 2.36,
        "rent360": 4.69,
        "tac": 1.16,
        "participes": 672
      }
    ],
    "rent30": 0.6,
    "rent90": 1.35,
    "rent180": 2.36,
    "rent360": 4.69,
    "defaultSerie": "SIMPLE"
  },
  {
    "name": "Itaú Cash Dollar",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "S",
        "rent30": 0.08,
        "rent90": 0.78,
        "rent180": 1.92,
        "rent360": 4.11,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "F4",
        "rent30": 0.31,
        "rent90": 1.03,
        "rent180": 2.12,
        "rent360": 4.27,
        "tac": 0.39,
        "participes": 60
      },
      {
        "serie": "F5",
        "rent30": 0.31,
        "rent90": 1.04,
        "rent180": 2.14,
        "rent360": 4.32,
        "tac": 0.5,
        "participes": 87
      },
      {
        "serie": "F3",
        "rent30": 0.28,
        "rent90": 0.94,
        "rent180": 1.93,
        "rent360": 3.89,
        "tac": 0.76,
        "participes": 128
      },
      {
        "serie": "F2",
        "rent30": 0.26,
        "rent90": 0.88,
        "rent180": 1.81,
        "rent360": 3.65,
        "tac": 1.04,
        "participes": 379
      },
      {
        "serie": "F1",
        "rent30": 0.24,
        "rent90": 0.81,
        "rent180": 1.69,
        "rent360": 3.4,
        "tac": 1.24,
        "participes": 2859
      }
    ],
    "rent30": 0.24,
    "rent90": 0.81,
    "rent180": 1.69,
    "rent360": 3.4,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Toesca Chile Equities",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 2.12,
        "rent90": -0.29,
        "rent180": 13.42,
        "rent360": 40.56,
        "tac": 1.83,
        "participes": 187
      },
      {
        "serie": "F3",
        "rent30": 2.09,
        "rent90": -0.38,
        "rent180": 13.22,
        "rent360": 40.08,
        "tac": 2.18,
        "participes": 24
      },
      {
        "serie": "F2",
        "rent30": 2.07,
        "rent90": -0.43,
        "rent180": 13.11,
        "rent360": 39.8,
        "tac": 2.38,
        "participes": 79
      },
      {
        "serie": "F1",
        "rent30": 2.05,
        "rent90": -0.49,
        "rent180": 12.96,
        "rent360": 39.46,
        "tac": 2.63,
        "participes": 2038
      }
    ],
    "rent30": 2.05,
    "rent90": -0.49,
    "rent180": 12.96,
    "rent360": 39.46,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú ESG Nordea Emerging Stars",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": -5.49,
        "rent90": 3.09,
        "rent180": -0.77,
        "rent360": 19.74,
        "tac": 0.49,
        "participes": 44
      },
      {
        "serie": "F3",
        "rent30": -5.5,
        "rent90": 3.07,
        "rent180": -0.82,
        "rent360": 19.62,
        "tac": 0.59,
        "participes": 3
      },
      {
        "serie": "F2",
        "rent30": -5.52,
        "rent90": 2.99,
        "rent180": -0.97,
        "rent360": 19.26,
        "tac": 0.89,
        "participes": 10
      },
      {
        "serie": "F1",
        "rent30": -5.53,
        "rent90": 2.93,
        "rent180": -1.07,
        "rent360": 19.03,
        "tac": 1.1,
        "participes": 373
      }
    ],
    "rent30": -5.53,
    "rent90": 2.93,
    "rent180": -1.07,
    "rent360": 19.03,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Us Advantage",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "F3",
        "rent30": -2.19,
        "rent90": -16.75,
        "rent180": -18.06,
        "rent360": 14.82,
        "tac": 0.48,
        "participes": 4
      },
      {
        "serie": "F2",
        "rent30": -2.19,
        "rent90": -16.78,
        "rent180": -18.18,
        "rent360": 14.5,
        "tac": 0.73,
        "participes": 9
      },
      {
        "serie": "F1",
        "rent30": -2.2,
        "rent90": -16.83,
        "rent180": -18.31,
        "rent360": 14.11,
        "tac": 0.98,
        "participes": 387
      }
    ],
    "rent30": -2.2,
    "rent90": -16.83,
    "rent180": -18.31,
    "rent360": 14.11,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Cartera Crecimiento Defensivo",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "F5",
        "rent30": -2.02,
        "rent90": -0.75,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.56,
        "participes": 4
      },
      {
        "serie": "F4",
        "rent30": -2.05,
        "rent90": -0.85,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.96,
        "participes": 3
      },
      {
        "serie": "APV",
        "rent30": -2.02,
        "rent90": -0.79,
        "rent180": -0.36,
        "rent360": 6.75,
        "tac": 2.05,
        "participes": 697
      },
      {
        "serie": "SIMPLE",
        "rent30": -2.1,
        "rent90": -1.03,
        "rent180": -0.81,
        "rent360": 5.96,
        "tac": 2.66,
        "participes": 4146
      }
    ],
    "rent30": -2.02,
    "rent90": -0.79,
    "rent180": -0.36,
    "rent360": 6.75,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Deuda Nominal",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.06,
        "rent90": 1.26,
        "rent180": 3.27,
        "rent360": 6.2,
        "tac": 0.35,
        "participes": 190
      },
      {
        "serie": "F5",
        "rent30": 0.05,
        "rent90": 1.21,
        "rent180": 3.17,
        "rent360": 4.62,
        "tac": 0.52,
        "participes": 3
      },
      {
        "serie": "F4",
        "rent30": -0.02,
        "rent90": 0.22,
        "rent180": 0.22,
        "rent360": 0.22,
        "tac": 1.36,
        "participes": 2
      },
      {
        "serie": "SIMPLE",
        "rent30": -0.04,
        "rent90": 0.92,
        "rent180": 2.59,
        "rent360": 4.84,
        "tac": 1.66,
        "participes": 2126
      }
    ],
    "rent30": 0.06,
    "rent90": 1.26,
    "rent180": 3.27,
    "rent360": 6.2,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú UF Plus",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 1.12,
        "rent90": 2.58,
        "rent180": 3.91,
        "rent360": 6.17,
        "tac": 0.37,
        "participes": 327
      },
      {
        "serie": "F5",
        "rent30": 1.07,
        "rent90": 2.42,
        "rent180": 3.6,
        "rent360": 5.54,
        "tac": 0.97,
        "participes": 25
      },
      {
        "serie": "F4",
        "rent30": 1.05,
        "rent90": 2.35,
        "rent180": 3.45,
        "rent360": 5.24,
        "tac": 1.28,
        "participes": 14
      },
      {
        "serie": "SIMPLE",
        "rent30": 1.01,
        "rent90": 2.24,
        "rent180": 3.24,
        "rent360": 4.81,
        "tac": 1.67,
        "participes": 4260
      }
    ],
    "rent30": 1.12,
    "rent90": 2.58,
    "rent180": 3.91,
    "rent360": 6.17,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Deuda Corporativa Chile",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.75,
        "rent90": 2.37,
        "rent180": 3.82,
        "rent360": 6.04,
        "tac": 0.33,
        "participes": 164
      },
      {
        "serie": "F5",
        "rent30": 0.7,
        "rent90": 2.19,
        "rent180": 3.46,
        "rent360": 5.31,
        "tac": 1.03,
        "participes": 10
      },
      {
        "serie": "F4",
        "rent30": 0.68,
        "rent90": 2.14,
        "rent180": 3.36,
        "rent360": 5.11,
        "tac": 1.22,
        "participes": 10
      },
      {
        "serie": "SIMPLE",
        "rent30": 0.65,
        "rent90": 2.03,
        "rent180": 3.15,
        "rent360": 4.69,
        "tac": 1.63,
        "participes": 516
      }
    ],
    "rent30": 0.75,
    "rent90": 2.37,
    "rent180": 3.82,
    "rent360": 6.04,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Income",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "F3",
        "rent30": -1.55,
        "rent90": -0.86,
        "rent180": 1.5,
        "rent360": 5.91,
        "tac": 0.42,
        "participes": 18
      },
      {
        "serie": "F2",
        "rent30": -1.57,
        "rent90": -0.95,
        "rent180": 1.4,
        "rent360": 5.69,
        "tac": 0.72,
        "participes": 36
      },
      {
        "serie": "F1",
        "rent30": -1.6,
        "rent90": -1,
        "rent180": 1.25,
        "rent360": 5.48,
        "tac": 0.93,
        "participes": 499
      }
    ],
    "rent30": -1.6,
    "rent90": -1,
    "rent180": 1.25,
    "rent360": 5.48,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Cartera Reserva",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "F5",
        "rent30": 0.74,
        "rent90": 1.33,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.31,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 0.72,
        "rent90": 1.58,
        "rent180": 2.62,
        "rent360": 5.15,
        "tac": 0.61,
        "participes": 655
      },
      {
        "serie": "F4",
        "rent30": 0.72,
        "rent90": 1.6,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.61,
        "participes": 2
      },
      {
        "serie": "SIMPLE",
        "rent30": 0.68,
        "rent90": 1.42,
        "rent180": 2.32,
        "rent360": 4.56,
        "tac": 1.16,
        "participes": 4490
      }
    ],
    "rent30": 0.72,
    "rent90": 1.58,
    "rent180": 2.62,
    "rent360": 5.15,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Select Plus",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "F6",
        "rent30": 0.22,
        "rent90": -0.82,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "S",
        "rent30": 0.34,
        "rent90": 1.17,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "F7",
        "rent30": 0.34,
        "rent90": 1.17,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.35,
        "participes": 4
      },
      {
        "serie": "F5",
        "rent30": 0.33,
        "rent90": 1.13,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.37,
        "participes": 17
      },
      {
        "serie": "F4",
        "rent30": 0.31,
        "rent90": 1.06,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.58,
        "participes": 15
      },
      {
        "serie": "F3",
        "rent30": 0.29,
        "rent90": 1.01,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.85,
        "participes": 21
      },
      {
        "serie": "F2",
        "rent30": 0.27,
        "rent90": 0.94,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.03,
        "participes": 30
      },
      {
        "serie": "C",
        "rent30": 0.26,
        "rent90": 0.89,
        "rent180": 1.82,
        "rent360": 3.75,
        "tac": 1.21,
        "participes": 18
      },
      {
        "serie": "SIMPLE",
        "rent30": 0.26,
        "rent90": 0.89,
        "rent180": 1.82,
        "rent360": 3.75,
        "tac": 1.22,
        "participes": 3807
      }
    ],
    "rent30": 0.26,
    "rent90": 0.89,
    "rent180": 1.82,
    "rent360": 3.75,
    "defaultSerie": "SIMPLE"
  },
  {
    "name": "Itaú Select",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.36,
        "rent90": 1.18,
        "rent180": 2.39,
        "rent360": 4.92,
        "tac": 0.02,
        "participes": 361
      },
      {
        "serie": "F5",
        "rent30": 0.34,
        "rent90": 1.12,
        "rent180": 2.27,
        "rent360": 4.66,
        "tac": 0.35,
        "participes": 618
      },
      {
        "serie": "F4",
        "rent30": 0.32,
        "rent90": 1.05,
        "rent180": 2.14,
        "rent360": 4.4,
        "tac": 0.56,
        "participes": 312
      },
      {
        "serie": "F7",
        "rent30": 0.34,
        "rent90": 1.14,
        "rent180": 2.32,
        "rent360": 4.76,
        "tac": 0.57,
        "participes": 30
      },
      {
        "serie": "F3",
        "rent30": 0.3,
        "rent90": 1,
        "rent180": 2.03,
        "rent360": 4.19,
        "tac": 0.8,
        "participes": 537
      },
      {
        "serie": "F6",
        "rent30": 0.34,
        "rent90": 1.13,
        "rent180": 2.29,
        "rent360": 4.71,
        "tac": 0.86,
        "participes": 40
      },
      {
        "serie": "S",
        "rent30": 0.35,
        "rent90": 1.15,
        "rent180": 2.34,
        "rent360": 4.8,
        "tac": 1.03,
        "participes": 7
      },
      {
        "serie": "F2",
        "rent30": 0.28,
        "rent90": 0.92,
        "rent180": 1.88,
        "rent360": 3.88,
        "tac": 1.08,
        "participes": 1169
      },
      {
        "serie": "F1",
        "rent30": 0.26,
        "rent90": 0.87,
        "rent180": 1.78,
        "rent360": 3.69,
        "tac": 1.48,
        "participes": 8231
      }
    ],
    "rent30": 0.26,
    "rent90": 0.87,
    "rent180": 1.78,
    "rent360": 3.69,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Performance",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "F6",
        "rent30": 0.16,
        "rent90": 0.16,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 0.27,
        "rent90": 1.13,
        "rent180": 2.36,
        "rent360": 4.89,
        "tac": 0.12,
        "participes": 104
      },
      {
        "serie": "F7",
        "rent30": 0.25,
        "rent90": 0.69,
        "rent180": 1.41,
        "rent360": 1.41,
        "tac": 0.27,
        "participes": 2
      },
      {
        "serie": "F5",
        "rent30": 0.24,
        "rent90": 1.04,
        "rent180": 2.19,
        "rent360": 4.54,
        "tac": 0.46,
        "participes": 20
      },
      {
        "serie": "F4",
        "rent30": 0.23,
        "rent90": 1.01,
        "rent180": 2.11,
        "rent360": 4.39,
        "tac": 0.61,
        "participes": 23
      },
      {
        "serie": "F3",
        "rent30": 0.21,
        "rent90": 0.95,
        "rent180": 2,
        "rent360": 4.16,
        "tac": 0.83,
        "participes": 105
      },
      {
        "serie": "F2",
        "rent30": 0.18,
        "rent90": 0.85,
        "rent180": 1.8,
        "rent360": 3.77,
        "tac": 1.22,
        "participes": 249
      },
      {
        "serie": "F1",
        "rent30": 0.17,
        "rent90": 0.82,
        "rent180": 1.74,
        "rent360": 3.66,
        "tac": 1.34,
        "participes": 5507
      }
    ],
    "rent30": 0.17,
    "rent90": 0.82,
    "rent180": 1.74,
    "rent360": 3.66,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Latam Corporate",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "F5",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "F6",
        "rent30": -2.28,
        "rent90": -0.87,
        "rent180": -0.78,
        "rent360": 4.69,
        "tac": 0.33,
        "participes": 4
      },
      {
        "serie": "F4",
        "rent30": -2.34,
        "rent90": -1.05,
        "rent180": -1.14,
        "rent360": 3.94,
        "tac": 1.05,
        "participes": 3
      },
      {
        "serie": "F3",
        "rent30": -2.37,
        "rent90": -1.17,
        "rent180": -1.39,
        "rent360": 3.43,
        "tac": 1.55,
        "participes": 3
      },
      {
        "serie": "F2",
        "rent30": -2.4,
        "rent90": -1.25,
        "rent180": -1.53,
        "rent360": 3.12,
        "tac": 1.85,
        "participes": 8
      },
      {
        "serie": "F1",
        "rent30": -2.42,
        "rent90": -1.32,
        "rent180": -1.68,
        "rent360": 2.82,
        "tac": 2.15,
        "participes": 643
      }
    ],
    "rent30": -2.42,
    "rent90": -1.32,
    "rent180": -1.68,
    "rent360": 2.82,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú ESG Global Credits",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": -2.1,
        "rent90": -0.66,
        "rent180": 0.14,
        "rent360": 2.64,
        "tac": 0.64,
        "participes": 25
      },
      {
        "serie": "F3",
        "rent30": -2.1,
        "rent90": -0.66,
        "rent180": 0.13,
        "rent360": 2.61,
        "tac": 0.65,
        "participes": 1
      },
      {
        "serie": "F2",
        "rent30": -2.13,
        "rent90": -0.76,
        "rent180": -0.06,
        "rent360": 2.24,
        "tac": 1.04,
        "participes": 5
      },
      {
        "serie": "F1",
        "rent30": -2.14,
        "rent90": -0.81,
        "rent180": -0.17,
        "rent360": 2.03,
        "tac": 1.24,
        "participes": 236
      }
    ],
    "rent30": -2.14,
    "rent90": -0.81,
    "rent180": -0.17,
    "rent360": 2.03,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Global Brands",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": -3.35,
        "rent90": -10.71,
        "rent180": -17.71,
        "rent360": -17.27,
        "tac": 0.39,
        "participes": 99
      },
      {
        "serie": "F3",
        "rent30": -3.36,
        "rent90": -10.72,
        "rent180": -17.74,
        "rent360": -17.31,
        "tac": 0.44,
        "participes": 7
      },
      {
        "serie": "F2",
        "rent30": -3.37,
        "rent90": -10.77,
        "rent180": -17.82,
        "rent360": -17.47,
        "tac": 0.64,
        "participes": 24
      },
      {
        "serie": "F1",
        "rent30": -3.4,
        "rent90": -10.85,
        "rent180": -17.96,
        "rent360": -17.75,
        "tac": 0.99,
        "participes": 420
      }
    ],
    "rent30": -3.4,
    "rent90": -10.85,
    "rent180": -17.96,
    "rent360": -17.75,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Cartera Crecimiento Balanceado",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": -3.11,
        "rent90": -1.67,
        "rent180": -2.04,
        "rent360": 8.92,
        "tac": 2.15,
        "participes": 502
      },
      {
        "serie": "F5",
        "rent30": -3.1,
        "rent90": -1.63,
        "rent180": 0,
        "rent360": 0,
        "tac": 2.65,
        "participes": 2
      },
      {
        "serie": "F4",
        "rent30": -3.13,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 3.05,
        "participes": 1
      },
      {
        "serie": "SIMPLE",
        "rent30": -3.18,
        "rent90": -1.9,
        "rent180": -2.5,
        "rent360": 8.09,
        "tac": 3.76,
        "participes": 2322
      }
    ],
    "rent30": -3.11,
    "rent90": -1.67,
    "rent180": -2.04,
    "rent360": 8.92,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Gestionado Moderado",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "S",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "S2",
        "rent30": -0.96,
        "rent90": 0.27,
        "rent180": 0.94,
        "rent360": 11,
        "tac": 0.56,
        "participes": 1
      },
      {
        "serie": "S-APV",
        "rent30": -0.96,
        "rent90": 0.25,
        "rent180": 0.91,
        "rent360": 10.95,
        "tac": 0.61,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -1,
        "rent90": 0.13,
        "rent180": 0.66,
        "rent360": 10.4,
        "tac": 1.11,
        "participes": 471
      },
      {
        "serie": "F5",
        "rent30": -1.01,
        "rent90": 0.11,
        "rent180": 0.63,
        "rent360": 10.34,
        "tac": 1.16,
        "participes": 5
      },
      {
        "serie": "APV2",
        "rent30": -1.01,
        "rent90": 0.1,
        "rent180": 0.61,
        "rent360": 10.29,
        "tac": 1.21,
        "participes": 142
      },
      {
        "serie": "F4",
        "rent30": -1.04,
        "rent90": 0,
        "rent180": 0.4,
        "rent360": 9.85,
        "tac": 1.61,
        "participes": 2
      },
      {
        "serie": "F3",
        "rent30": -1.07,
        "rent90": -0.1,
        "rent180": 0.21,
        "rent360": 9.44,
        "tac": 2.44,
        "participes": 12
      },
      {
        "serie": "F2",
        "rent30": -1.12,
        "rent90": -0.26,
        "rent180": -0.1,
        "rent360": 8.77,
        "tac": 2.61,
        "participes": 63
      },
      {
        "serie": "F1",
        "rent30": -1.15,
        "rent90": -0.38,
        "rent180": -0.35,
        "rent360": 8.24,
        "tac": 3.12,
        "participes": 1207
      }
    ],
    "rent30": -1.15,
    "rent90": -0.38,
    "rent180": -0.35,
    "rent360": 8.24,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Dinamico Plus",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "S-APV",
        "rent30": 1.56,
        "rent90": 3.28,
        "rent180": 4.18,
        "rent360": 7.11,
        "tac": 0.33,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 1.55,
        "rent90": 3.24,
        "rent180": 4.1,
        "rent360": 6.95,
        "tac": 0.48,
        "participes": 230
      },
      {
        "serie": "F5",
        "rent30": 1.5,
        "rent90": 3.06,
        "rent180": 3.73,
        "rent360": 6.22,
        "tac": 1.18,
        "participes": 30
      },
      {
        "serie": "F4",
        "rent30": 1.5,
        "rent90": 3.06,
        "rent180": 3.73,
        "rent360": 6.22,
        "tac": 1.2,
        "participes": 24
      },
      {
        "serie": "SIMPLE",
        "rent30": 1.45,
        "rent90": 2.9,
        "rent180": 3.42,
        "rent360": 5.59,
        "tac": 1.78,
        "participes": 1064
      }
    ],
    "rent30": 1.55,
    "rent90": 3.24,
    "rent180": 4.1,
    "rent360": 6.95,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Dinamico",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "S-APV",
        "rent30": 0.94,
        "rent90": 2.26,
        "rent180": 3.46,
        "rent360": 6.3,
        "tac": 0.17,
        "participes": 1
      },
      {
        "serie": "S",
        "rent30": 0.92,
        "rent90": 2.16,
        "rent180": 3.28,
        "rent360": 5.93,
        "tac": 0.52,
        "participes": 1
      },
      {
        "serie": "F5",
        "rent30": 0.91,
        "rent90": 2.14,
        "rent180": 3.23,
        "rent360": 5.84,
        "tac": 0.61,
        "participes": 93
      },
      {
        "serie": "APV",
        "rent30": 0.9,
        "rent90": 2.12,
        "rent180": 3.19,
        "rent360": 5.76,
        "tac": 0.87,
        "participes": 581
      },
      {
        "serie": "F4",
        "rent30": 0.88,
        "rent90": 2.03,
        "rent180": 3.02,
        "rent360": 5.41,
        "tac": 1.02,
        "participes": 118
      },
      {
        "serie": "SIMPLE",
        "rent30": 0.84,
        "rent90": 1.91,
        "rent180": 2.79,
        "rent360": 4.95,
        "tac": 1.51,
        "participes": 8171
      }
    ],
    "rent30": 0.9,
    "rent90": 2.12,
    "rent180": 3.19,
    "rent360": 5.76,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Renta Dinamica Global",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": -1.13,
        "rent90": -0.44,
        "rent180": 1.7,
        "rent360": 5.3,
        "tac": 0.32,
        "participes": 183
      },
      {
        "serie": "F4",
        "rent30": -1.13,
        "rent90": -0.44,
        "rent180": 1.7,
        "rent360": 5.3,
        "tac": 0.32,
        "participes": 16
      },
      {
        "serie": "F5",
        "rent30": -1.13,
        "rent90": -0.44,
        "rent180": 1.7,
        "rent360": 5.3,
        "tac": 0.32,
        "participes": 20
      },
      {
        "serie": "SIMPLE",
        "rent30": -1.18,
        "rent90": -0.59,
        "rent180": 1.39,
        "rent360": 4.99,
        "tac": 0.93,
        "participes": 2043
      }
    ],
    "rent30": -1.13,
    "rent90": -0.44,
    "rent180": 1.7,
    "rent360": 5.3,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Gestionado Conservador",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "S",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "S-APV",
        "rent30": -0.16,
        "rent90": 1.29,
        "rent180": 2.09,
        "rent360": 6.78,
        "tac": 0.42,
        "participes": 1
      },
      {
        "serie": "S2",
        "rent30": -0.18,
        "rent90": 1.25,
        "rent180": 2.02,
        "rent360": 6.62,
        "tac": 0.57,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -0.19,
        "rent90": 1.21,
        "rent180": 1.94,
        "rent360": 6.46,
        "tac": 0.72,
        "participes": 268
      },
      {
        "serie": "F5",
        "rent30": -0.21,
        "rent90": 1.13,
        "rent180": 1.78,
        "rent360": 6.14,
        "tac": 1.02,
        "participes": 5
      },
      {
        "serie": "APV2",
        "rent30": -0.22,
        "rent90": 1.11,
        "rent180": 1.73,
        "rent360": 6.04,
        "tac": 1.12,
        "participes": 124
      },
      {
        "serie": "F4",
        "rent30": -0.26,
        "rent90": 0.98,
        "rent180": 1.48,
        "rent360": 5.52,
        "tac": 1.62,
        "participes": 2
      },
      {
        "serie": "F3",
        "rent30": -0.27,
        "rent90": 0.92,
        "rent180": 1.35,
        "rent360": 5.26,
        "tac": 1.87,
        "participes": 7
      },
      {
        "serie": "F2",
        "rent30": -0.31,
        "rent90": 0.79,
        "rent180": 1.09,
        "rent360": 4.74,
        "tac": 2.38,
        "participes": 55
      },
      {
        "serie": "F1",
        "rent30": -0.33,
        "rent90": 0.72,
        "rent180": 0.97,
        "rent360": 4.48,
        "tac": 2.63,
        "participes": 2458
      }
    ],
    "rent30": -0.33,
    "rent90": 0.72,
    "rent180": 0.97,
    "rent360": 4.48,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Dinámico Ultra",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": 1.84,
        "rent90": 3.56,
        "rent180": 3.72,
        "rent360": 7.57,
        "tac": 1.1,
        "participes": 319
      },
      {
        "serie": "S",
        "rent30": 1.84,
        "rent90": 3.56,
        "rent180": 3.72,
        "rent360": 7.57,
        "tac": 1.1,
        "participes": 1
      },
      {
        "serie": "F5",
        "rent30": 1.84,
        "rent90": 3.56,
        "rent180": 3.72,
        "rent360": 7.57,
        "tac": 1.11,
        "participes": 2
      },
      {
        "serie": "F4",
        "rent30": 1.8,
        "rent90": 3.41,
        "rent180": 3.43,
        "rent360": 6.99,
        "tac": 1.66,
        "participes": 1
      },
      {
        "serie": "F3",
        "rent30": 1.72,
        "rent90": 3.15,
        "rent180": 2.91,
        "rent360": 5.94,
        "tac": 2.66,
        "participes": 4
      },
      {
        "serie": "F2",
        "rent30": 1.67,
        "rent90": 2.98,
        "rent180": 2.57,
        "rent360": 5.25,
        "tac": 3.32,
        "participes": 12
      },
      {
        "serie": "F1",
        "rent30": 1.58,
        "rent90": 2.69,
        "rent180": 2,
        "rent360": 4.11,
        "tac": 4.42,
        "participes": 2742
      }
    ],
    "rent30": 1.58,
    "rent90": 2.69,
    "rent180": 2,
    "rent360": 4.11,
    "defaultSerie": "F1"
  },
  {
    "name": "ETF IT Now S&P IPSA",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "UNICA",
        "rent30": 3.02,
        "rent90": 0.61,
        "rent180": 16.04,
        "rent360": 36.34,
        "tac": 0.35,
        "participes": 45
      }
    ],
    "rent30": 3.02,
    "rent90": 0.61,
    "rent180": 16.04,
    "rent360": 36.34,
    "defaultSerie": "UNICA"
  },
  {
    "name": "Itaú Acciones Latinoamericanas",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "F3",
        "rent30": -3.32,
        "rent90": -3.53,
        "rent180": -3.53,
        "rent360": 9.72,
        "tac": 0.49,
        "participes": 1
      },
      {
        "serie": "F2",
        "rent30": -3.33,
        "rent90": 14.41,
        "rent180": 13.48,
        "rent360": 21.16,
        "tac": 0.79,
        "participes": 4
      },
      {
        "serie": "F1",
        "rent30": -3.4,
        "rent90": 14.27,
        "rent180": 22.22,
        "rent360": 56,
        "tac": 1.1,
        "participes": 316
      }
    ],
    "rent30": -3.4,
    "rent90": 14.27,
    "rent180": 22.22,
    "rent360": 56,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Brasil Activo",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV",
        "rent30": -0.34,
        "rent90": 18.51,
        "rent180": 16.44,
        "rent360": 46.78,
        "tac": 1.02,
        "participes": 101
      },
      {
        "serie": "F5",
        "rent30": -0.36,
        "rent90": 18.43,
        "rent180": 16.3,
        "rent360": 46.43,
        "tac": 1.26,
        "participes": 4
      },
      {
        "serie": "F4",
        "rent30": -0.42,
        "rent90": 18.19,
        "rent180": 15.83,
        "rent360": 45.26,
        "tac": 2.07,
        "participes": 3
      },
      {
        "serie": "F3",
        "rent30": -0.46,
        "rent90": 18.04,
        "rent180": 15.54,
        "rent360": 44.55,
        "tac": 2.57,
        "participes": 3
      },
      {
        "serie": "F2",
        "rent30": -0.5,
        "rent90": 17.87,
        "rent180": 15.21,
        "rent360": 43.75,
        "tac": 3.13,
        "participes": 23
      },
      {
        "serie": "F1",
        "rent30": -0.59,
        "rent90": 17.54,
        "rent180": 14.57,
        "rent360": 42.19,
        "tac": 4.23,
        "participes": 602
      }
    ],
    "rent30": -0.59,
    "rent90": 17.54,
    "rent180": 14.57,
    "rent360": 42.19,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú National Equity",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "F4",
        "rent30": 0,
        "rent90": 0,
        "rent180": -1.06,
        "rent360": -1.06,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": 1.89,
        "rent90": -0.63,
        "rent180": 14.58,
        "rent360": 36.14,
        "tac": 1.41,
        "participes": 236
      },
      {
        "serie": "F5",
        "rent30": 1.89,
        "rent90": -0.64,
        "rent180": 14.55,
        "rent360": 36.07,
        "tac": 1.46,
        "participes": 4
      },
      {
        "serie": "S",
        "rent30": 1.89,
        "rent90": -0.64,
        "rent180": 14.55,
        "rent360": 36.07,
        "tac": 1.46,
        "participes": 2
      },
      {
        "serie": "SIMPLE",
        "rent30": 1.77,
        "rent90": -1.02,
        "rent180": 13.69,
        "rent360": 34.07,
        "tac": 2.97,
        "participes": 2155
      }
    ],
    "rent30": 1.89,
    "rent90": -0.63,
    "rent180": 14.58,
    "rent360": 36.14,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Acciones Emergentes",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV",
        "rent30": -1.05,
        "rent90": 2.27,
        "rent180": 2.05,
        "rent360": 31.19,
        "tac": 0.44,
        "participes": 98
      },
      {
        "serie": "F3",
        "rent30": -1.06,
        "rent90": 2.24,
        "rent180": 2,
        "rent360": 31.06,
        "tac": 0.54,
        "participes": 6
      },
      {
        "serie": "F2",
        "rent30": -1.08,
        "rent90": 2.16,
        "rent180": 1.84,
        "rent360": 30.68,
        "tac": 0.84,
        "participes": 21
      },
      {
        "serie": "F1",
        "rent30": -1.09,
        "rent90": 2.11,
        "rent180": 1.74,
        "rent360": 30.42,
        "tac": 1.04,
        "participes": 966
      }
    ],
    "rent30": -1.09,
    "rent90": 2.11,
    "rent180": 1.74,
    "rent360": 30.42,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Top USA",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "S",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -1.84,
        "rent90": -3.24,
        "rent180": -4.75,
        "rent360": 22.29,
        "tac": 0.99,
        "participes": 469
      },
      {
        "serie": "F5",
        "rent30": -1.86,
        "rent90": -3.3,
        "rent180": -4.86,
        "rent360": 22,
        "tac": 1.24,
        "participes": 11
      },
      {
        "serie": "F4",
        "rent30": -1.92,
        "rent90": -3.5,
        "rent180": -5.25,
        "rent360": 21.03,
        "tac": 2.05,
        "participes": 7
      },
      {
        "serie": "F3",
        "rent30": -1.96,
        "rent90": -3.62,
        "rent180": -5.49,
        "rent360": 20.43,
        "tac": 2.55,
        "participes": 25
      },
      {
        "serie": "F2",
        "rent30": -2.03,
        "rent90": -3.86,
        "rent180": -5.96,
        "rent360": 19.25,
        "tac": 3.55,
        "participes": 97
      },
      {
        "serie": "F1",
        "rent30": -2.12,
        "rent90": -4.17,
        "rent180": -6.56,
        "rent360": 17.77,
        "tac": 4.82,
        "participes": 1727
      }
    ],
    "rent30": -2.12,
    "rent90": -4.17,
    "rent180": -6.56,
    "rent360": 17.77,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Gestionado Agresivo",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "S",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "S2",
        "rent30": -1.97,
        "rent90": -0.3,
        "rent180": 0.26,
        "rent360": 16,
        "tac": 0.77,
        "participes": 1
      },
      {
        "serie": "S-APV",
        "rent30": -2,
        "rent90": -0.39,
        "rent180": 0.09,
        "rent360": 15.59,
        "tac": 1.12,
        "participes": 1
      },
      {
        "serie": "F5",
        "rent30": -2.01,
        "rent90": -0.44,
        "rent180": -0.01,
        "rent360": 15.38,
        "tac": 1.31,
        "participes": 4
      },
      {
        "serie": "APV2",
        "rent30": -2.01,
        "rent90": -0.44,
        "rent180": -0.01,
        "rent360": 15.37,
        "tac": 1.32,
        "participes": 86
      },
      {
        "serie": "F3",
        "rent30": -2.07,
        "rent90": -0.64,
        "rent180": -0.42,
        "rent360": 14.46,
        "tac": 1.32,
        "participes": 10
      },
      {
        "serie": "F4",
        "rent30": -2.03,
        "rent90": -0.52,
        "rent180": -0.17,
        "rent360": 15.02,
        "tac": 1.62,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -2.07,
        "rent90": -0.64,
        "rent180": -0.42,
        "rent360": 14.46,
        "tac": 2.16,
        "participes": 210
      },
      {
        "serie": "F2",
        "rent30": -2.13,
        "rent90": -0.83,
        "rent180": -0.79,
        "rent360": 13.61,
        "tac": 2.87,
        "participes": 18
      },
      {
        "serie": "F1",
        "rent30": -2.18,
        "rent90": -1.02,
        "rent180": -1.17,
        "rent360": 12.77,
        "tac": 3.62,
        "participes": 506
      }
    ],
    "rent30": -2.18,
    "rent90": -1.02,
    "rent180": -1.17,
    "rent360": 12.77,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Cartera Crecimiento Agresivo",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "F5",
        "rent30": -4.33,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.51,
        "participes": 2
      },
      {
        "serie": "APV",
        "rent30": -4.33,
        "rent90": -2.77,
        "rent180": -3.98,
        "rent360": 11.09,
        "tac": 3.08,
        "participes": 337
      },
      {
        "serie": "SIMPLE",
        "rent30": -4.41,
        "rent90": -3.01,
        "rent180": -4.43,
        "rent360": 10.25,
        "tac": 4.68,
        "participes": 837
      }
    ],
    "rent30": -4.33,
    "rent90": -2.77,
    "rent180": -3.98,
    "rent360": 11.09,
    "defaultSerie": "APV"
  },
  {
    "name": "Itaú Gestionado Acciones",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "S-APV",
        "rent30": -3.3,
        "rent90": -2.7,
        "rent180": -4.5,
        "rent360": 12.7,
        "tac": 0.94,
        "participes": 1
      },
      {
        "serie": "APV2",
        "rent30": -3.33,
        "rent90": -2.78,
        "rent180": -4.66,
        "rent360": 12.34,
        "tac": 1.26,
        "participes": 126
      },
      {
        "serie": "F5",
        "rent30": -3.35,
        "rent90": -2.85,
        "rent180": -4.8,
        "rent360": 12,
        "tac": 1.56,
        "participes": 3
      },
      {
        "serie": "S",
        "rent30": -3.35,
        "rent90": -2.85,
        "rent180": -4.8,
        "rent360": 12,
        "tac": 1.56,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -3.37,
        "rent90": -2.91,
        "rent180": -4.92,
        "rent360": 11.73,
        "tac": 1.81,
        "participes": 218
      },
      {
        "serie": "F4",
        "rent30": -3.39,
        "rent90": -2.98,
        "rent180": -5.04,
        "rent360": 11.45,
        "tac": 2.06,
        "participes": 5
      },
      {
        "serie": "F3",
        "rent30": -3.42,
        "rent90": -3.1,
        "rent180": -5.28,
        "rent360": 10.9,
        "tac": 2.57,
        "participes": 6
      },
      {
        "serie": "F2",
        "rent30": -3.5,
        "rent90": -3.35,
        "rent180": -5.76,
        "rent360": 9.81,
        "tac": 3.56,
        "participes": 8
      },
      {
        "serie": "F1",
        "rent30": -3.58,
        "rent90": -3.62,
        "rent180": -6.28,
        "rent360": 8.62,
        "tac": 4.67,
        "participes": 579
      }
    ],
    "rent30": -3.58,
    "rent90": -3.62,
    "rent180": -6.28,
    "rent360": 8.62,
    "defaultSerie": "F1"
  },
  {
    "name": "Itaú Moneda Credito Latam",
    "provider": "Itaú",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV",
        "rent30": -1.1,
        "rent90": -0.51,
        "rent180": 0.33,
        "rent360": 5.44,
        "tac": 0.35,
        "participes": 83
      },
      {
        "serie": "F3",
        "rent30": -1.1,
        "rent90": -0.51,
        "rent180": 0.33,
        "rent360": 5.44,
        "tac": 0.35,
        "participes": 10
      },
      {
        "serie": "F2",
        "rent30": -1.11,
        "rent90": -0.57,
        "rent180": 0.2,
        "rent360": 5.18,
        "tac": 0.6,
        "participes": 25
      },
      {
        "serie": "F1",
        "rent30": -1.14,
        "rent90": -0.66,
        "rent180": 0.02,
        "rent360": 4.82,
        "tac": 0.95,
        "participes": 938
      }
    ],
    "rent30": -1.14,
    "rent90": -0.66,
    "rent180": 0.02,
    "rent360": 4.82,
    "defaultSerie": "F1"
  },
  {
    "name": "Larrainvial Ahorro Corporativo",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "LV",
        "rent30": 1.06,
        "rent90": 2.66,
        "rent180": 4.26,
        "rent360": 7.61,
        "tac": 0.05,
        "participes": 5
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": 0.99,
        "rent90": 2.41,
        "rent180": 3.75,
        "rent360": 6.56,
        "tac": 1.04,
        "participes": 217
      },
      {
        "serie": "F",
        "rent30": 0.97,
        "rent90": 2.36,
        "rent180": 3.64,
        "rent360": 6.35,
        "tac": 1.24,
        "participes": 678
      },
      {
        "serie": "APV",
        "rent30": 0.96,
        "rent90": 2.32,
        "rent180": 3.57,
        "rent360": 6.2,
        "tac": 1.39,
        "participes": 201
      },
      {
        "serie": "A",
        "rent30": 0.91,
        "rent90": 2.16,
        "rent180": 3.25,
        "rent360": 5.57,
        "tac": 1.99,
        "participes": 1976
      }
    ],
    "rent30": 0.91,
    "rent90": 2.16,
    "rent180": 3.25,
    "rent360": 5.57,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Ahorro Capital",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "LV",
        "rent30": 1.19,
        "rent90": 2.61,
        "rent180": 3.88,
        "rent360": 6.94,
        "tac": 0.04,
        "participes": 2
      },
      {
        "serie": "M",
        "rent30": 1.12,
        "rent90": 2.38,
        "rent180": 3.41,
        "rent360": 6.01,
        "tac": 0.92,
        "participes": 68
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": 1.11,
        "rent90": 2.35,
        "rent180": 3.36,
        "rent360": 5.91,
        "tac": 1.02,
        "participes": 443
      },
      {
        "serie": "APV",
        "rent30": 1.11,
        "rent90": 2.33,
        "rent180": 3.31,
        "rent360": 5.8,
        "tac": 1.13,
        "participes": 378
      },
      {
        "serie": "F",
        "rent30": 1.1,
        "rent90": 2.3,
        "rent180": 3.26,
        "rent360": 5.7,
        "tac": 1.23,
        "participes": 1607
      },
      {
        "serie": "A",
        "rent30": 1.04,
        "rent90": 2.11,
        "rent180": 2.87,
        "rent360": 4.92,
        "tac": 1.97,
        "participes": 5472
      }
    ],
    "rent30": 1.04,
    "rent90": 2.11,
    "rent180": 2.87,
    "rent360": 4.92,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Ahorro Estrategico",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "LV",
        "rent30": 1,
        "rent90": 2.51,
        "rent180": 4.28,
        "rent360": 6.59,
        "tac": 0.04,
        "participes": 2
      },
      {
        "serie": "T",
        "rent30": 0.95,
        "rent90": 2.34,
        "rent180": 3.96,
        "rent360": 0,
        "tac": 0.62,
        "participes": 1
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": 0.92,
        "rent90": 2.25,
        "rent180": 3.76,
        "rent360": 5.56,
        "tac": 1.02,
        "participes": 363
      },
      {
        "serie": "APV",
        "rent30": 0.91,
        "rent90": 2.22,
        "rent180": 3.71,
        "rent360": 5.46,
        "tac": 1.12,
        "participes": 291
      },
      {
        "serie": "F",
        "rent30": 0.91,
        "rent90": 2.2,
        "rent180": 3.66,
        "rent360": 5.35,
        "tac": 1.23,
        "participes": 514
      },
      {
        "serie": "D",
        "rent30": 0.88,
        "rent90": 2.09,
        "rent180": 3.45,
        "rent360": 4.94,
        "tac": 1.62,
        "participes": 225
      },
      {
        "serie": "A",
        "rent30": 0.85,
        "rent90": 2,
        "rent180": 3.27,
        "rent360": 4.62,
        "tac": 1.97,
        "participes": 2109
      }
    ],
    "rent30": 0.85,
    "rent90": 2,
    "rent180": 3.27,
    "rent360": 4.62,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Ahorro UF",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "LV",
        "rent30": 1.37,
        "rent90": 2.36,
        "rent180": 3.03,
        "rent360": 5.67,
        "tac": 0.03,
        "participes": 2
      },
      {
        "serie": "APV",
        "rent30": 1.29,
        "rent90": 2.05,
        "rent180": 2.36,
        "rent360": 4.28,
        "tac": 0.69,
        "participes": 70
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": 1.29,
        "rent90": 2.1,
        "rent180": 2.52,
        "rent360": 4.65,
        "tac": 0.87,
        "participes": 136
      },
      {
        "serie": "F",
        "rent30": 1.27,
        "rent90": 2.02,
        "rent180": 2.34,
        "rent360": 4.26,
        "tac": 1.17,
        "participes": 724
      },
      {
        "serie": "A",
        "rent30": 1.24,
        "rent90": 1.95,
        "rent180": 2.21,
        "rent360": 4.03,
        "tac": 1.5,
        "participes": 1645
      }
    ],
    "rent30": 1.24,
    "rent90": 1.95,
    "rent180": 2.21,
    "rent360": 4.03,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Ahorro Dólar",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -0.63,
        "rent90": -0.09,
        "rent180": 0.81,
        "rent360": 4.63,
        "tac": 1.04,
        "participes": 33
      },
      {
        "serie": "F",
        "rent30": -0.65,
        "rent90": -0.15,
        "rent180": 0.71,
        "rent360": 4.43,
        "tac": 1.25,
        "participes": 303
      },
      {
        "serie": "APV",
        "rent30": -0.65,
        "rent90": -0.15,
        "rent180": 0.71,
        "rent360": 4.43,
        "tac": 1.32,
        "participes": 21
      },
      {
        "serie": "A",
        "rent30": -0.68,
        "rent90": -0.25,
        "rent180": 0.5,
        "rent360": 4.01,
        "tac": 1.65,
        "participes": 556
      }
    ],
    "rent30": -0.68,
    "rent90": -0.25,
    "rent180": 0.5,
    "rent360": 4.01,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Ahorro A Plazo",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "LV",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 1.16,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "D",
        "rent30": 0.72,
        "rent90": 1.54,
        "rent180": 2.36,
        "rent360": 4.65,
        "tac": 0.82,
        "participes": 758
      },
      {
        "serie": "M",
        "rent30": 0.71,
        "rent90": 1.52,
        "rent180": 2.31,
        "rent360": 4.53,
        "tac": 0.93,
        "participes": 6
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": 0.7,
        "rent90": 1.49,
        "rent180": 2.26,
        "rent360": 4.43,
        "tac": 1.03,
        "participes": 280
      },
      {
        "serie": "APV",
        "rent30": 0.7,
        "rent90": 1.49,
        "rent180": 2.26,
        "rent360": 4.43,
        "tac": 1.04,
        "participes": 489
      },
      {
        "serie": "F",
        "rent30": 0.68,
        "rent90": 1.44,
        "rent180": 2.15,
        "rent360": 4.22,
        "tac": 1.23,
        "participes": 540
      },
      {
        "serie": "A",
        "rent30": 0.65,
        "rent90": 1.31,
        "rent180": 1.9,
        "rent360": 3.71,
        "tac": 1.74,
        "participes": 8802
      }
    ],
    "rent30": 0.65,
    "rent90": 1.31,
    "rent180": 1.9,
    "rent360": 3.71,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Money Market",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "LV",
        "rent30": 0.31,
        "rent90": 1.06,
        "rent180": 2.15,
        "rent360": 4.32,
        "tac": 0.15,
        "participes": 13
      },
      {
        "serie": "M",
        "rent30": 0.27,
        "rent90": 0.94,
        "rent180": 1.93,
        "rent360": 3.86,
        "tac": 0.68,
        "participes": 29
      },
      {
        "serie": "APV",
        "rent30": 0.25,
        "rent90": 0.86,
        "rent180": 1.75,
        "rent360": 3.5,
        "tac": 1.01,
        "participes": 83
      },
      {
        "serie": "F",
        "rent30": 0.22,
        "rent90": 0.77,
        "rent180": 1.57,
        "rent360": 3.14,
        "tac": 1.37,
        "participes": 662
      },
      {
        "serie": "A",
        "rent30": 0.21,
        "rent90": 0.73,
        "rent180": 1.49,
        "rent360": 2.98,
        "tac": 1.53,
        "participes": 2188
      }
    ],
    "rent30": 0.21,
    "rent90": 0.73,
    "rent180": 1.49,
    "rent360": 2.98,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Ahorro Activo",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "LV",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APVD",
        "rent30": 0.7,
        "rent90": 1.73,
        "rent180": 2.39,
        "rent360": 4.9,
        "tac": 1.33,
        "participes": 181
      },
      {
        "serie": "D",
        "rent30": 0.67,
        "rent90": 1.65,
        "rent180": 2.23,
        "rent360": 4.59,
        "tac": 1.65,
        "participes": 1556
      }
    ],
    "rent30": 0,
    "rent90": 0,
    "rent180": 0,
    "rent360": 0,
    "defaultSerie": "LV"
  },
  {
    "name": "Larrainvial Latinoamericano",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "LV",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": -7.34,
        "rent90": 10.7,
        "rent180": 17.37,
        "rent360": 42.51,
        "tac": 1.65,
        "participes": 191
      },
      {
        "serie": "F",
        "rent30": -7.38,
        "rent90": 10.55,
        "rent180": 17.07,
        "rent360": 41.8,
        "tac": 2.12,
        "participes": 382
      },
      {
        "serie": "APV",
        "rent30": -7.4,
        "rent90": 10.46,
        "rent180": 16.87,
        "rent360": 41.32,
        "tac": 2.57,
        "participes": 509
      },
      {
        "serie": "A",
        "rent30": -7.51,
        "rent90": 10.02,
        "rent180": 15.96,
        "rent360": 39.17,
        "tac": 4,
        "participes": 1714
      }
    ],
    "rent30": -7.51,
    "rent90": 10.02,
    "rent180": 15.96,
    "rent360": 39.17,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Portfolio Lider",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "LV",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": -0.79,
        "rent90": 4.72,
        "rent180": 6.78,
        "rent360": 17.87,
        "tac": 1.15,
        "participes": 173
      },
      {
        "serie": "F",
        "rent30": -0.83,
        "rent90": 4.58,
        "rent180": 6.5,
        "rent360": 17.25,
        "tac": 1.68,
        "participes": 255
      },
      {
        "serie": "APV",
        "rent30": -0.84,
        "rent90": 4.56,
        "rent180": 6.46,
        "rent360": 17.17,
        "tac": 1.75,
        "participes": 400
      },
      {
        "serie": "A",
        "rent30": -0.93,
        "rent90": 4.23,
        "rent180": 5.79,
        "rent360": 15.73,
        "tac": 3.01,
        "participes": 2310
      }
    ],
    "rent30": -0.93,
    "rent90": 4.23,
    "rent180": 5.79,
    "rent360": 15.73,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Cuenta Activa Moderada Dólar",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "T",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0.49,
        "rent360": 14.39,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": -2.85,
        "rent90": -0.01,
        "rent180": 2.2,
        "rent360": 16.19,
        "tac": 1.03,
        "participes": 115
      },
      {
        "serie": "F",
        "rent30": -2.87,
        "rent90": -0.08,
        "rent180": 2.05,
        "rent360": 15.85,
        "tac": 1.33,
        "participes": 242
      },
      {
        "serie": "APV",
        "rent30": -2.88,
        "rent90": -0.14,
        "rent180": 1.95,
        "rent360": 15.62,
        "tac": 1.54,
        "participes": 72
      },
      {
        "serie": "A",
        "rent30": -2.93,
        "rent90": -0.29,
        "rent180": 1.64,
        "rent360": 14.93,
        "tac": 2.13,
        "participes": 582
      }
    ],
    "rent30": -2.93,
    "rent90": -0.29,
    "rent180": 1.64,
    "rent360": 14.93,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Cuenta Activa Moderada",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -0.36,
        "rent90": 1.53,
        "rent180": 2.93,
        "rent360": 16,
        "tac": 1.01,
        "participes": 572
      },
      {
        "serie": "F",
        "rent30": -0.38,
        "rent90": 1.45,
        "rent180": 2.77,
        "rent360": 15.65,
        "tac": 1.32,
        "participes": 524
      },
      {
        "serie": "D",
        "rent30": -0.4,
        "rent90": 1.37,
        "rent180": 2.62,
        "rent360": 15.31,
        "tac": 1.62,
        "participes": 225
      },
      {
        "serie": "APV",
        "rent30": -0.42,
        "rent90": 1.32,
        "rent180": 2.51,
        "rent360": 15.08,
        "tac": 1.82,
        "participes": 371
      },
      {
        "serie": "A",
        "rent30": -0.48,
        "rent90": 1.12,
        "rent180": 2.1,
        "rent360": 14.18,
        "tac": 2.62,
        "participes": 2444
      }
    ],
    "rent30": -0.48,
    "rent90": 1.12,
    "rent180": 2.1,
    "rent360": 14.18,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Proteccion",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": 0.55,
        "rent90": 2.46,
        "rent180": 3.66,
        "rent360": 10.56,
        "tac": 1.25,
        "participes": 38
      },
      {
        "serie": "APV",
        "rent30": 0.52,
        "rent90": 2.35,
        "rent180": 3.45,
        "rent360": 10.13,
        "tac": 1.65,
        "participes": 173
      },
      {
        "serie": "F",
        "rent30": 0.51,
        "rent90": 2.32,
        "rent180": 3.39,
        "rent360": 9.98,
        "tac": 1.78,
        "participes": 40
      },
      {
        "serie": "A",
        "rent30": 0.42,
        "rent90": 2.04,
        "rent180": 2.83,
        "rent360": 8.83,
        "tac": 2.86,
        "participes": 753
      }
    ],
    "rent30": 0.42,
    "rent90": 2.04,
    "rent180": 2.83,
    "rent360": 8.83,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Cuenta Activa Defensiva Dólar",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "LV",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": -1.53,
        "rent90": -0.48,
        "rent180": 0.77,
        "rent360": 5.42,
        "tac": 1.01,
        "participes": 41
      },
      {
        "serie": "APV",
        "rent30": -1.56,
        "rent90": -0.56,
        "rent180": 0.61,
        "rent360": 5.11,
        "tac": 1.32,
        "participes": 95
      },
      {
        "serie": "F",
        "rent30": -1.55,
        "rent90": -0.55,
        "rent180": 0.61,
        "rent360": 5.12,
        "tac": 1.32,
        "participes": 67
      },
      {
        "serie": "A",
        "rent30": -1.6,
        "rent90": -0.71,
        "rent180": 0.31,
        "rent360": 4.49,
        "tac": 1.93,
        "participes": 327
      }
    ],
    "rent30": -1.6,
    "rent90": -0.71,
    "rent180": 0.31,
    "rent360": 4.49,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Monetario",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "LV",
        "rent30": 0.35,
        "rent90": 1.19,
        "rent180": 2.41,
        "rent360": 4.95,
        "tac": 0.11,
        "participes": 16
      },
      {
        "serie": "M",
        "rent30": 0.32,
        "rent90": 1.06,
        "rent180": 2.16,
        "rent360": 4.42,
        "tac": 0.58,
        "participes": 54
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": 0.3,
        "rent90": 1.02,
        "rent180": 2.07,
        "rent360": 4.27,
        "tac": 0.79,
        "participes": 1
      },
      {
        "serie": "F",
        "rent30": 0.29,
        "rent90": 0.98,
        "rent180": 1.99,
        "rent360": 4.12,
        "tac": 0.98,
        "participes": 861
      },
      {
        "serie": "APV",
        "rent30": 0.29,
        "rent90": 0.97,
        "rent180": 1.96,
        "rent360": 4.06,
        "tac": 1.04,
        "participes": 1833
      },
      {
        "serie": "A",
        "rent30": 0.28,
        "rent90": 0.94,
        "rent180": 1.91,
        "rent360": 3.94,
        "tac": 1.94,
        "participes": 6630
      }
    ],
    "rent30": 0.28,
    "rent90": 0.94,
    "rent180": 1.91,
    "rent360": 3.94,
    "defaultSerie": "A"
  },
  {
    "name": "Consorcio Dinámico Crecimiento",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -1.75,
        "rent90": 1.24,
        "rent180": 1.56,
        "rent360": 17.03,
        "tac": 1.32,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -1.81,
        "rent90": 1.03,
        "rent180": 1.15,
        "rent360": 16.11,
        "tac": 2.13,
        "participes": 2
      },
      {
        "serie": "F",
        "rent30": -1.84,
        "rent90": 0.73,
        "rent180": 0.64,
        "rent360": 13.98,
        "tac": 2.56,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": -1.93,
        "rent90": 0.47,
        "rent180": 0.11,
        "rent360": 12.84,
        "tac": 3.78,
        "participes": 2
      }
    ],
    "rent30": -1.93,
    "rent90": 0.47,
    "rent180": 0.11,
    "rent360": 12.84,
    "defaultSerie": "A"
  },
  {
    "name": "Consorcio Dinámico Balanceado",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -0.85,
        "rent90": 1.55,
        "rent180": 2.42,
        "rent360": 13.1,
        "tac": 1.25,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -0.91,
        "rent90": 1.34,
        "rent180": 2.01,
        "rent360": 12.2,
        "tac": 2.09,
        "participes": 36
      },
      {
        "serie": "F",
        "rent30": -0.94,
        "rent90": 1.05,
        "rent180": 1.53,
        "rent360": 10.52,
        "tac": 2.48,
        "participes": 2
      },
      {
        "serie": "A",
        "rent30": -1.02,
        "rent90": 0.83,
        "rent180": 1.06,
        "rent360": 9.56,
        "tac": 3.59,
        "participes": 65
      }
    ],
    "rent30": -1.02,
    "rent90": 0.83,
    "rent180": 1.06,
    "rent360": 9.56,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Cuenta Activa Conservadora Dólar",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -2.21,
        "rent90": -0.8,
        "rent180": 0.58,
        "rent360": 9.81,
        "tac": 1.02,
        "participes": 30
      },
      {
        "serie": "APV",
        "rent30": -2.24,
        "rent90": -0.88,
        "rent180": 0.43,
        "rent360": 9.49,
        "tac": 1.2,
        "participes": 30
      },
      {
        "serie": "F",
        "rent30": -2.24,
        "rent90": -0.88,
        "rent180": 0.43,
        "rent360": 9.49,
        "tac": 1.33,
        "participes": 118
      },
      {
        "serie": "A",
        "rent30": -2.28,
        "rent90": -1.03,
        "rent180": 0.13,
        "rent360": 8.84,
        "tac": 1.93,
        "participes": 293
      }
    ],
    "rent30": -2.28,
    "rent90": -1.03,
    "rent180": 0.13,
    "rent360": 8.84,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Cuenta Activa Conservadora",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -0.15,
        "rent90": 1.66,
        "rent180": 2.78,
        "rent360": 9.19,
        "tac": 1.01,
        "participes": 178
      },
      {
        "serie": "F",
        "rent30": -0.17,
        "rent90": 1.58,
        "rent180": 2.62,
        "rent360": 8.86,
        "tac": 1.3,
        "participes": 271
      },
      {
        "serie": "APV",
        "rent30": -0.18,
        "rent90": 1.53,
        "rent180": 2.52,
        "rent360": 8.65,
        "tac": 1.51,
        "participes": 134
      },
      {
        "serie": "D",
        "rent30": -0.19,
        "rent90": 1.52,
        "rent180": 2.49,
        "rent360": 8.58,
        "tac": 1.57,
        "participes": 201
      },
      {
        "serie": "Q",
        "rent30": -0.21,
        "rent90": 1.45,
        "rent180": 2.36,
        "rent360": 8.33,
        "tac": 1.81,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": -0.23,
        "rent90": 1.38,
        "rent180": 2.21,
        "rent360": 8,
        "tac": 2.1,
        "participes": 1326
      }
    ],
    "rent30": -0.23,
    "rent90": 1.38,
    "rent180": 2.21,
    "rent360": 8,
    "defaultSerie": "A"
  },
  {
    "name": "Consorcio Dinámico Moderado",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -0.1,
        "rent90": 1.71,
        "rent180": 2.78,
        "rent360": 8.78,
        "tac": 1.23,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -0.15,
        "rent90": 1.57,
        "rent180": 2.49,
        "rent360": 8.19,
        "tac": 1.79,
        "participes": 2
      },
      {
        "serie": "F",
        "rent30": -0.17,
        "rent90": 1.48,
        "rent180": 2.31,
        "rent360": 7.81,
        "tac": 2.13,
        "participes": 2
      },
      {
        "serie": "A",
        "rent30": -0.22,
        "rent90": 1.32,
        "rent180": 2,
        "rent360": 7.18,
        "tac": 2.74,
        "participes": 2
      }
    ],
    "rent30": -0.22,
    "rent90": 1.32,
    "rent180": 2,
    "rent360": 7.18,
    "defaultSerie": "A"
  },
  {
    "name": "Consorcio Dinámico Conservador",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": 0.83,
        "rent90": 2.24,
        "rent180": 3.27,
        "rent360": 6.58,
        "tac": 1.09,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 0.8,
        "rent90": 2.12,
        "rent180": 3.04,
        "rent360": 6.1,
        "tac": 1.54,
        "participes": 45
      },
      {
        "serie": "F",
        "rent30": 0.77,
        "rent90": 2.03,
        "rent180": 2.85,
        "rent360": 5.74,
        "tac": 1.88,
        "participes": 3
      },
      {
        "serie": "A",
        "rent30": 0.74,
        "rent90": 1.92,
        "rent180": 2.65,
        "rent360": 5.32,
        "tac": 2.31,
        "participes": 58
      }
    ],
    "rent30": 0.74,
    "rent90": 1.92,
    "rent180": 2.65,
    "rent360": 5.32,
    "defaultSerie": "A"
  },
  {
    "name": "Consorcio Ahorro Dinámico",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "LV",
        "rent30": 1.07,
        "rent90": 2.65,
        "rent180": 4.23,
        "rent360": 7.38,
        "tac": 0.05,
        "participes": 7
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": 0.99,
        "rent90": 2.37,
        "rent180": 3.68,
        "rent360": 6.26,
        "tac": 1.13,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 0.95,
        "rent90": 2.26,
        "rent180": 3.45,
        "rent360": 5.81,
        "tac": 1.53,
        "participes": 165
      },
      {
        "serie": "F",
        "rent30": 0.93,
        "rent90": 2.18,
        "rent180": 3.3,
        "rent360": 5.5,
        "tac": 1.83,
        "participes": 5
      },
      {
        "serie": "A",
        "rent30": 0.9,
        "rent90": 2.08,
        "rent180": 3.09,
        "rent360": 5.08,
        "tac": 2.23,
        "participes": 371
      }
    ],
    "rent30": 0.9,
    "rent90": 2.08,
    "rent180": 3.09,
    "rent360": 5.08,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Acciones Nacionales",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "LV",
        "rent30": 1.01,
        "rent90": 0.73,
        "rent180": 14.25,
        "rent360": 39.17,
        "tac": 0.05,
        "participes": 8
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": 0.91,
        "rent90": 0.22,
        "rent180": 13.31,
        "rent360": 36.19,
        "tac": 1.35,
        "participes": 106
      },
      {
        "serie": "APV",
        "rent30": 0.81,
        "rent90": -0.01,
        "rent180": 12.68,
        "rent360": 34.63,
        "tac": 2.67,
        "participes": 565
      },
      {
        "serie": "F",
        "rent30": 0.81,
        "rent90": -0.03,
        "rent180": 12.67,
        "rent360": 34.46,
        "tac": 2.67,
        "participes": 114
      },
      {
        "serie": "A",
        "rent30": 0.77,
        "rent90": -0.07,
        "rent180": 12.48,
        "rent360": 33.94,
        "tac": 3.23,
        "participes": 1965
      }
    ],
    "rent30": 0.77,
    "rent90": -0.07,
    "rent180": 12.48,
    "rent360": 33.94,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Enfoque",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "LV",
        "rent30": 0.61,
        "rent90": 2.8,
        "rent180": 21.11,
        "rent360": 52.76,
        "tac": 0.07,
        "participes": 4
      },
      {
        "serie": "IR",
        "rent30": 0.51,
        "rent90": 1.46,
        "rent180": 18.68,
        "rent360": 0,
        "tac": 1.34,
        "participes": 13
      },
      {
        "serie": "M",
        "rent30": 0.51,
        "rent90": 1.56,
        "rent180": 18.82,
        "rent360": 47.33,
        "tac": 1.35,
        "participes": 56
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": 0.48,
        "rent90": 1.62,
        "rent180": 18.87,
        "rent360": 47.43,
        "tac": 1.66,
        "participes": 583
      },
      {
        "serie": "R",
        "rent30": 0.46,
        "rent90": 1.34,
        "rent180": 18.37,
        "rent360": 0,
        "tac": 1.94,
        "participes": 40
      },
      {
        "serie": "F",
        "rent30": 0.46,
        "rent90": 1.43,
        "rent180": 18.5,
        "rent360": 46.57,
        "tac": 1.95,
        "participes": 1320
      },
      {
        "serie": "APV",
        "rent30": 0.45,
        "rent90": 1.53,
        "rent180": 18.65,
        "rent360": 46.91,
        "tac": 2.09,
        "participes": 516
      },
      {
        "serie": "A",
        "rent30": 0.35,
        "rent90": 1.11,
        "rent180": 17.76,
        "rent360": 44.69,
        "tac": 3.47,
        "participes": 3964
      }
    ],
    "rent30": 0.35,
    "rent90": 1.11,
    "rent180": 17.76,
    "rent360": 44.69,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Cuenta Activa Agresiva Dólar",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -3.36,
        "rent90": 1.1,
        "rent180": 4.66,
        "rent360": 27.47,
        "tac": 1.08,
        "participes": 85
      },
      {
        "serie": "F",
        "rent30": -3.39,
        "rent90": 1.02,
        "rent180": 4.5,
        "rent360": 27.06,
        "tac": 1.39,
        "participes": 89
      },
      {
        "serie": "APV",
        "rent30": -3.4,
        "rent90": 0.97,
        "rent180": 4.39,
        "rent360": 26.81,
        "tac": 1.59,
        "participes": 64
      },
      {
        "serie": "A",
        "rent30": -3.44,
        "rent90": 0.81,
        "rent180": 4.08,
        "rent360": 26.04,
        "tac": 2.19,
        "participes": 307
      }
    ],
    "rent30": -3.44,
    "rent90": 0.81,
    "rent180": 4.08,
    "rent360": 26.04,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Estados Unidos",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "LV",
        "rent30": 0,
        "rent90": 0.94,
        "rent180": 0.94,
        "rent360": 0.94,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": -4.66,
        "rent90": -6.03,
        "rent180": -3.33,
        "rent360": 29.61,
        "tac": 1.65,
        "participes": 256
      },
      {
        "serie": "F",
        "rent30": -4.7,
        "rent90": -6.19,
        "rent180": -3.77,
        "rent360": 27.59,
        "tac": 2.14,
        "participes": 407
      },
      {
        "serie": "APV",
        "rent30": -4.74,
        "rent90": -6.27,
        "rent180": -3.82,
        "rent360": 28.34,
        "tac": 2.64,
        "participes": 444
      },
      {
        "serie": "A",
        "rent30": -4.84,
        "rent90": -6.6,
        "rent180": -4.63,
        "rent360": 25.44,
        "tac": 4.04,
        "participes": 1369
      }
    ],
    "rent30": -4.84,
    "rent90": -6.6,
    "rent180": -4.63,
    "rent360": 25.44,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Asia",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "LV",
        "rent30": -9.92,
        "rent90": -1.16,
        "rent180": 1.16,
        "rent360": 29.75,
        "tac": 0.54,
        "participes": 4
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": -10.01,
        "rent90": -1.53,
        "rent180": 0.38,
        "rent360": 27.76,
        "tac": 1.97,
        "participes": 112
      },
      {
        "serie": "F",
        "rent30": -10.05,
        "rent90": -1.66,
        "rent180": 0.12,
        "rent360": 27.13,
        "tac": 2.43,
        "participes": 117
      },
      {
        "serie": "APV",
        "rent30": -10.07,
        "rent90": -1.74,
        "rent180": -0.05,
        "rent360": 26.69,
        "tac": 2.81,
        "participes": 382
      },
      {
        "serie": "A",
        "rent30": -10.18,
        "rent90": -2.13,
        "rent180": -0.84,
        "rent360": 24.76,
        "tac": 4.35,
        "participes": 670
      }
    ],
    "rent30": -10.18,
    "rent90": -2.13,
    "rent180": -0.84,
    "rent360": 24.76,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Cuenta Activa Agresiva",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -1.4,
        "rent90": 1.27,
        "rent180": 2.37,
        "rent360": 23.54,
        "tac": 1.03,
        "participes": 689
      },
      {
        "serie": "F",
        "rent30": -1.42,
        "rent90": 1.19,
        "rent180": 2.22,
        "rent360": 23.17,
        "tac": 1.34,
        "participes": 224
      },
      {
        "serie": "D",
        "rent30": -1.44,
        "rent90": 1.12,
        "rent180": 2.08,
        "rent360": 22.85,
        "tac": 1.6,
        "participes": 257
      },
      {
        "serie": "APV",
        "rent30": -1.48,
        "rent90": 1.01,
        "rent180": 1.86,
        "rent360": 22.32,
        "tac": 2.02,
        "participes": 645
      },
      {
        "serie": "Q",
        "rent30": -1.5,
        "rent90": 0.93,
        "rent180": 1.7,
        "rent360": 21.96,
        "tac": 2.33,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": -1.55,
        "rent90": 0.75,
        "rent180": 1.35,
        "rent360": 21.12,
        "tac": 3.03,
        "participes": 1318
      }
    ],
    "rent30": -1.55,
    "rent90": 0.75,
    "rent180": 1.35,
    "rent360": 21.12,
    "defaultSerie": "A"
  },
  {
    "name": "Consorcio Dinámico Agresivo",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV-AP-APVC",
        "rent30": -2.33,
        "rent90": 0.6,
        "rent180": 0.4,
        "rent360": 21.07,
        "tac": 1.3,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -2.41,
        "rent90": 0.32,
        "rent180": -0.15,
        "rent360": 19.76,
        "tac": 2.41,
        "participes": 52
      },
      {
        "serie": "F",
        "rent30": -2.44,
        "rent90": 0.11,
        "rent180": -0.54,
        "rent360": 17.47,
        "tac": 2.81,
        "participes": 4
      },
      {
        "serie": "A",
        "rent30": -2.54,
        "rent90": -0.18,
        "rent180": -1.13,
        "rent360": 16.14,
        "tac": 4.12,
        "participes": 117
      }
    ],
    "rent30": -2.54,
    "rent90": -0.18,
    "rent180": -1.13,
    "rent360": 16.14,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Bonos Latam",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "LV",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "Q",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": -1.32,
        "rent90": -0.27,
        "rent180": 0.57,
        "rent360": 6.54,
        "tac": 0.99,
        "participes": 64
      },
      {
        "serie": "M",
        "rent30": -1.33,
        "rent90": -0.3,
        "rent180": 0.52,
        "rent360": 0,
        "tac": 1.1,
        "participes": 2
      },
      {
        "serie": "APV",
        "rent30": -1.37,
        "rent90": -0.43,
        "rent180": 0.26,
        "rent360": 5.91,
        "tac": 1.59,
        "participes": 61
      },
      {
        "serie": "F",
        "rent30": -1.38,
        "rent90": -0.42,
        "rent180": 0.26,
        "rent360": 5.91,
        "tac": 1.6,
        "participes": 241
      },
      {
        "serie": "A",
        "rent30": -1.41,
        "rent90": -0.55,
        "rent180": 0.01,
        "rent360": 5.39,
        "tac": 2.1,
        "participes": 517
      }
    ],
    "rent30": -1.41,
    "rent90": -0.55,
    "rent180": 0.01,
    "rent360": 5.39,
    "defaultSerie": "A"
  },
  {
    "name": "Larrainvial Europa",
    "provider": "LarrainVial",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "LV",
        "rent30": -8.57,
        "rent90": -8.69,
        "rent180": -4.37,
        "rent360": 8.15,
        "tac": 0.05,
        "participes": 4
      },
      {
        "serie": "APV-AP-APVC",
        "rent30": -8.69,
        "rent90": -9.05,
        "rent180": -5.12,
        "rent360": 6.49,
        "tac": 1.69,
        "participes": 68
      },
      {
        "serie": "F",
        "rent30": -8.72,
        "rent90": -9.45,
        "rent180": -5.8,
        "rent360": 5.11,
        "tac": 2.09,
        "participes": 66
      },
      {
        "serie": "APV",
        "rent30": -8.75,
        "rent90": -9.26,
        "rent180": -5.55,
        "rent360": 5.55,
        "tac": 2.54,
        "participes": 62
      },
      {
        "serie": "A",
        "rent30": -8.85,
        "rent90": -9.65,
        "rent180": -6.31,
        "rent360": 3.94,
        "tac": 4.01,
        "participes": 296
      }
    ],
    "rent30": -8.85,
    "rent90": -9.65,
    "rent180": -6.31,
    "rent360": 3.94,
    "defaultSerie": "A"
  },
  {
    "name": "Santander Ahorro Mediano Plazo",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "AM",
        "rent30": 1.38,
        "rent90": 2.38,
        "rent180": 3.06,
        "rent360": 5.65,
        "tac": 0.01,
        "participes": 13
      },
      {
        "serie": "APV",
        "rent30": 1.34,
        "rent90": 2.25,
        "rent180": 2.8,
        "rent360": 5.13,
        "tac": 0.5,
        "participes": 286
      },
      {
        "serie": "EJECU",
        "rent30": 1.33,
        "rent90": 2.19,
        "rent180": 2.7,
        "rent360": 4.92,
        "tac": 0.7,
        "participes": 1180
      },
      {
        "serie": "YOU",
        "rent30": 1.32,
        "rent90": 2.18,
        "rent180": 2.67,
        "rent360": 4.87,
        "tac": 0.76,
        "participes": 184
      },
      {
        "serie": "DIGITAL",
        "rent30": 1.29,
        "rent90": 2.07,
        "rent180": 2.45,
        "rent360": 4.42,
        "tac": 1.18,
        "participes": 14374
      },
      {
        "serie": "INVER",
        "rent30": 1.29,
        "rent90": 2.06,
        "rent180": 2.44,
        "rent360": 4.41,
        "tac": 1.19,
        "participes": 4864
      },
      {
        "serie": "UNIVE",
        "rent30": 1.27,
        "rent90": 2.01,
        "rent180": 2.34,
        "rent360": 4.2,
        "tac": 1.39,
        "participes": 8947
      }
    ],
    "rent30": 1.29,
    "rent90": 2.07,
    "rent180": 2.45,
    "rent360": 4.42,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Money Market",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "AM",
        "rent30": 0.36,
        "rent90": 1.19,
        "rent180": 2.43,
        "rent360": 4.97,
        "tac": 0.02,
        "participes": 20
      },
      {
        "serie": "APV",
        "rent30": 0.3,
        "rent90": 1.01,
        "rent180": 2.07,
        "rent360": 4.25,
        "tac": 0.76,
        "participes": 484
      },
      {
        "serie": "YOU",
        "rent30": 0.3,
        "rent90": 1,
        "rent180": 2.04,
        "rent360": 4.2,
        "tac": 0.77,
        "participes": 104
      },
      {
        "serie": "CORPO",
        "rent30": 0.31,
        "rent90": 1.03,
        "rent180": 2.09,
        "rent360": 4.3,
        "tac": 1.06,
        "participes": 1036
      },
      {
        "serie": "EJECU",
        "rent30": 0.27,
        "rent90": 0.9,
        "rent180": 1.84,
        "rent360": 3.81,
        "tac": 1.28,
        "participes": 8870
      },
      {
        "serie": "INVER",
        "rent30": 0.26,
        "rent90": 0.86,
        "rent180": 1.76,
        "rent360": 3.63,
        "tac": 1.43,
        "participes": 8846
      },
      {
        "serie": "UNIVE",
        "rent30": 0.24,
        "rent90": 0.82,
        "rent180": 1.67,
        "rent360": 3.43,
        "tac": 1.53,
        "participes": 103718
      }
    ],
    "rent30": 0.3,
    "rent90": 1.01,
    "rent180": 2.07,
    "rent360": 4.25,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Money Market Dolar",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "AMX",
        "rent30": 0.32,
        "rent90": 1.09,
        "rent180": 2.2,
        "rent360": 4.45,
        "tac": 0.01,
        "participes": 14
      },
      {
        "serie": "ALTO",
        "rent30": 0.29,
        "rent90": 0.98,
        "rent180": 2,
        "rent360": 4.04,
        "tac": 0.52,
        "participes": 40
      },
      {
        "serie": "EJECU",
        "rent30": 0.26,
        "rent90": 0.88,
        "rent180": 1.79,
        "rent360": 3.63,
        "tac": 0.93,
        "participes": 10577
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.23,
        "rent90": 0.78,
        "rent180": 1.59,
        "rent360": 3.23,
        "tac": 1.22,
        "participes": 1711
      },
      {
        "serie": "UNIVE",
        "rent30": 0.23,
        "rent90": 0.78,
        "rent180": 1.59,
        "rent360": 3.22,
        "tac": 1.26,
        "participes": 5331
      }
    ],
    "rent30": 0.23,
    "rent90": 0.78,
    "rent180": 1.59,
    "rent360": 3.23,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Estructurado Ahorro+ V",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "UNICA",
        "rent30": 0.14,
        "rent90": 0.72,
        "rent180": 1.64,
        "rent360": 0,
        "tac": 1.65,
        "participes": 168
      }
    ],
    "rent30": 0.14,
    "rent90": 0.72,
    "rent180": 1.64,
    "rent360": 0,
    "defaultSerie": "UNICA"
  },
  {
    "name": "Santander Equilibrio Dólar",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SI",
        "rent30": -3.77,
        "rent90": -2.04,
        "rent180": 0.89,
        "rent360": 15.58,
        "tac": 0.25,
        "participes": 7
      },
      {
        "serie": "ALTO",
        "rent30": -3.83,
        "rent90": -2.24,
        "rent180": 0.48,
        "rent360": 14.67,
        "tac": 1.06,
        "participes": 98
      },
      {
        "serie": "DIGITAL",
        "rent30": -3.84,
        "rent90": -2.28,
        "rent180": 0.39,
        "rent360": 14.45,
        "tac": 1.26,
        "participes": 573
      },
      {
        "serie": "EJECU",
        "rent30": -3.86,
        "rent90": -2.36,
        "rent180": 0.23,
        "rent360": 14.1,
        "tac": 1.55,
        "participes": 273
      },
      {
        "serie": "GLOBAL",
        "rent30": -3.88,
        "rent90": -2.42,
        "rent180": 0.1,
        "rent360": 13.82,
        "tac": 1.8,
        "participes": 667
      }
    ],
    "rent30": -3.84,
    "rent90": -2.28,
    "rent180": 0.39,
    "rent360": 14.45,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Private Banking Equilibrio",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SI",
        "rent30": -0.87,
        "rent90": 0.38,
        "rent180": 1.58,
        "rent360": 0,
        "tac": 0.21,
        "participes": 31
      },
      {
        "serie": "C",
        "rent30": -0.88,
        "rent90": 0.33,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.4,
        "participes": 177
      },
      {
        "serie": "APV",
        "rent30": -0.89,
        "rent90": 0.3,
        "rent180": 1.42,
        "rent360": 10.92,
        "tac": 0.51,
        "participes": 1407
      },
      {
        "serie": "III",
        "rent30": -0.89,
        "rent90": 0.3,
        "rent180": 1.43,
        "rent360": 0,
        "tac": 0.51,
        "participes": 2
      },
      {
        "serie": "ALTO",
        "rent30": -0.92,
        "rent90": 0.22,
        "rent180": 1.27,
        "rent360": 10.6,
        "tac": 0.81,
        "participes": 301
      },
      {
        "serie": "II",
        "rent30": -0.95,
        "rent90": 0.12,
        "rent180": 1.07,
        "rent360": 0,
        "tac": 1.21,
        "participes": 2
      },
      {
        "serie": "EJECU",
        "rent30": -1.01,
        "rent90": -0.08,
        "rent180": 0.66,
        "rent360": 9.21,
        "tac": 2.02,
        "participes": 1541
      },
      {
        "serie": "GLOBAL",
        "rent30": -1.04,
        "rent90": -0.21,
        "rent180": 0.41,
        "rent360": 8.73,
        "tac": 2.52,
        "participes": 4238
      }
    ],
    "rent30": -0.89,
    "rent90": 0.3,
    "rent180": 1.42,
    "rent360": 10.92,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Gestión Activa Equilibrio",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": -0.71,
        "rent90": 0.99,
        "rent180": 2.22,
        "rent360": 11.62,
        "tac": 0.53,
        "participes": 150
      },
      {
        "serie": "DIGITAL",
        "rent30": -0.77,
        "rent90": 0.81,
        "rent180": 1.87,
        "rent360": 10.86,
        "tac": 1.23,
        "participes": 4326
      },
      {
        "serie": "YOU",
        "rent30": -0.77,
        "rent90": 0.81,
        "rent180": 1.87,
        "rent360": 10.86,
        "tac": 1.23,
        "participes": 230
      },
      {
        "serie": "ALTO",
        "rent30": -0.83,
        "rent90": 0.6,
        "rent180": 1.45,
        "rent360": 9.97,
        "tac": 2.03,
        "participes": 29
      },
      {
        "serie": "EJECU",
        "rent30": -0.85,
        "rent90": 0.54,
        "rent180": 1.32,
        "rent360": 9.7,
        "tac": 2.28,
        "participes": 356
      },
      {
        "serie": "GLOBAL",
        "rent30": -0.86,
        "rent90": 0.48,
        "rent180": 1.2,
        "rent360": 9.43,
        "tac": 2.53,
        "participes": 1723
      }
    ],
    "rent30": -0.77,
    "rent90": 0.81,
    "rent180": 1.87,
    "rent360": 10.86,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Prudente Dólar",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SI",
        "rent30": -1.9,
        "rent90": -0.52,
        "rent180": 1.83,
        "rent360": 9.9,
        "tac": 0.31,
        "participes": 6
      },
      {
        "serie": "ALTO",
        "rent30": -1.95,
        "rent90": -0.69,
        "rent180": 1.47,
        "rent360": 9.14,
        "tac": 0.81,
        "participes": 104
      },
      {
        "serie": "DIGITAL",
        "rent30": -1.98,
        "rent90": -0.82,
        "rent180": 1.22,
        "rent360": 8.61,
        "tac": 1.3,
        "participes": 718
      },
      {
        "serie": "EJECU",
        "rent30": -1.98,
        "rent90": -0.82,
        "rent180": 1.22,
        "rent360": 8.6,
        "tac": 1.31,
        "participes": 312
      },
      {
        "serie": "GLOBAL",
        "rent30": -2.01,
        "rent90": -0.89,
        "rent180": 1.06,
        "rent360": 8.28,
        "tac": 1.62,
        "participes": 638
      }
    ],
    "rent30": -1.98,
    "rent90": -0.82,
    "rent180": 1.22,
    "rent360": 8.61,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Private Banking Prudente",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "II",
        "rent30": 0.79,
        "rent90": 2.25,
        "rent180": 3.56,
        "rent360": 0,
        "tac": 0,
        "participes": 2
      },
      {
        "serie": "SI",
        "rent30": 0.77,
        "rent90": 2.19,
        "rent180": 3.45,
        "rent360": 0,
        "tac": 0.21,
        "participes": 11
      },
      {
        "serie": "III",
        "rent30": 0.76,
        "rent90": 2.15,
        "rent180": 3.42,
        "rent360": 0,
        "tac": 0.35,
        "participes": 2
      },
      {
        "serie": "C",
        "rent30": 0.75,
        "rent90": 2.14,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.4,
        "participes": 102
      },
      {
        "serie": "APV",
        "rent30": 0.75,
        "rent90": 2.11,
        "rent180": 3.3,
        "rent360": 7.64,
        "tac": 0.5,
        "participes": 831
      },
      {
        "serie": "ALTO",
        "rent30": 0.73,
        "rent90": 2.06,
        "rent180": 3.19,
        "rent360": 7.43,
        "tac": 0.71,
        "participes": 338
      },
      {
        "serie": "EJECU",
        "rent30": 0.69,
        "rent90": 1.93,
        "rent180": 2.93,
        "rent360": 6.9,
        "tac": 1.2,
        "participes": 1405
      },
      {
        "serie": "GLOBAL",
        "rent30": 0.68,
        "rent90": 1.91,
        "rent180": 2.88,
        "rent360": 6.78,
        "tac": 1.3,
        "participes": 3274
      }
    ],
    "rent30": 0.75,
    "rent90": 2.11,
    "rent180": 3.3,
    "rent360": 7.64,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Renta Extra Largo Plazo UF",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": 1.36,
        "rent90": 2.73,
        "rent180": 4.6,
        "rent360": 7.86,
        "tac": 0.02,
        "participes": 1
      },
      {
        "serie": "SI",
        "rent30": 1.34,
        "rent90": 2.67,
        "rent180": 4.49,
        "rent360": 0,
        "tac": 0.22,
        "participes": 2
      },
      {
        "serie": "III",
        "rent30": 1.33,
        "rent90": 2.63,
        "rent180": 4.39,
        "rent360": 7.44,
        "tac": 0.41,
        "participes": 1
      },
      {
        "serie": "II",
        "rent30": 1.32,
        "rent90": 2.61,
        "rent180": 4.36,
        "rent360": 7.38,
        "tac": 0.47,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 1.32,
        "rent90": 2.6,
        "rent180": 4.33,
        "rent360": 7.33,
        "tac": 0.52,
        "participes": 253
      },
      {
        "serie": "ALTO",
        "rent30": 1.28,
        "rent90": 2.47,
        "rent180": 4.07,
        "rent360": 6.8,
        "tac": 1,
        "participes": 39
      },
      {
        "serie": "EJECU",
        "rent30": 1.26,
        "rent90": 2.39,
        "rent180": 3.91,
        "rent360": 6.48,
        "tac": 1.3,
        "participes": 344
      },
      {
        "serie": "INVER",
        "rent30": 1.24,
        "rent90": 2.34,
        "rent180": 3.81,
        "rent360": 6.27,
        "tac": 1.51,
        "participes": 438
      },
      {
        "serie": "UNIVE",
        "rent30": 1.22,
        "rent90": 2.27,
        "rent180": 3.68,
        "rent360": 6.01,
        "tac": 1.76,
        "participes": 4056
      }
    ],
    "rent30": 1.32,
    "rent90": 2.6,
    "rent180": 4.33,
    "rent360": 7.33,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Gestión Activa Prudente",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.77,
        "rent90": 2.15,
        "rent180": 3.32,
        "rent360": 7.6,
        "tac": 0.51,
        "participes": 127
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.71,
        "rent90": 1.97,
        "rent180": 2.96,
        "rent360": 6.87,
        "tac": 1.2,
        "participes": 6582
      },
      {
        "serie": "YOU",
        "rent30": 0.71,
        "rent90": 1.97,
        "rent180": 2.96,
        "rent360": 6.87,
        "tac": 1.2,
        "participes": 423
      },
      {
        "serie": "ALTO",
        "rent30": 0.71,
        "rent90": 1.95,
        "rent180": 2.93,
        "rent360": 6.8,
        "tac": 1.29,
        "participes": 73
      },
      {
        "serie": "EJECU",
        "rent30": 0.69,
        "rent90": 1.89,
        "rent180": 2.8,
        "rent360": 6.54,
        "tac": 1.5,
        "participes": 479
      },
      {
        "serie": "GLOBAL",
        "rent30": 0.67,
        "rent90": 1.81,
        "rent180": 2.65,
        "rent360": 6.22,
        "tac": 1.8,
        "participes": 2180
      }
    ],
    "rent30": 0.71,
    "rent90": 1.97,
    "rent180": 2.96,
    "rent360": 6.87,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Smart Investments Renta Mp",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": 1.23,
        "rent90": 2.61,
        "rent180": 3.8,
        "rent360": 6.76,
        "tac": 0.02,
        "participes": 1
      },
      {
        "serie": "SI",
        "rent30": 1.21,
        "rent90": 2.55,
        "rent180": 3.69,
        "rent360": 6.55,
        "tac": 0.22,
        "participes": 82
      }
    ],
    "rent30": 1.23,
    "rent90": 2.61,
    "rent180": 3.8,
    "rent360": 6.76,
    "defaultSerie": "AM"
  },
  {
    "name": "Santander Deuda Latam 2028",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "ALTO",
        "rent30": -1.26,
        "rent90": -0.41,
        "rent180": 0.74,
        "rent360": 6.73,
        "tac": 0.95,
        "participes": 6
      },
      {
        "serie": "GLOBAL",
        "rent30": -1.28,
        "rent90": -0.48,
        "rent180": 0.59,
        "rent360": 6.45,
        "tac": 1.24,
        "participes": 60
      }
    ],
    "rent30": -1.26,
    "rent90": -0.41,
    "rent180": 0.74,
    "rent360": 6.73,
    "defaultSerie": "ALTO"
  },
  {
    "name": "Fondo 10241",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": 0.61,
        "rent90": 2.05,
        "rent180": 3.47,
        "rent360": 6.55,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "SI",
        "rent30": 0.59,
        "rent90": 2,
        "rent180": 3.37,
        "rent360": 6.34,
        "tac": 0,
        "participes": 1
      }
    ],
    "rent30": 0.61,
    "rent90": 2.05,
    "rent180": 3.47,
    "rent360": 6.55,
    "defaultSerie": "AM"
  },
  {
    "name": "Santander Renta Largo Plazo UF",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": 1.3,
        "rent90": 2.77,
        "rent180": 3.95,
        "rent360": 6.93,
        "tac": 0,
        "participes": 13
      },
      {
        "serie": "CORPO",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "III",
        "rent30": 1.27,
        "rent90": 2.67,
        "rent180": 3.77,
        "rent360": 6.55,
        "tac": 0.36,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 1.26,
        "rent90": 2.64,
        "rent180": 3.69,
        "rent360": 6.41,
        "tac": 0.5,
        "participes": 331
      },
      {
        "serie": "II",
        "rent30": 1.25,
        "rent90": 2.59,
        "rent180": 3.6,
        "rent360": 6.22,
        "tac": 0.68,
        "participes": 1
      },
      {
        "serie": "EJECU",
        "rent30": 1.2,
        "rent90": 2.45,
        "rent180": 3.33,
        "rent360": 5.67,
        "tac": 1.2,
        "participes": 416
      },
      {
        "serie": "INVER",
        "rent30": 1.17,
        "rent90": 2.32,
        "rent180": 3.07,
        "rent360": 5.15,
        "tac": 1.69,
        "participes": 2266
      },
      {
        "serie": "UNIVE",
        "rent30": 1.16,
        "rent90": 2.31,
        "rent180": 3.04,
        "rent360": 5.1,
        "tac": 1.74,
        "participes": 9567
      }
    ],
    "rent30": 1.26,
    "rent90": 2.64,
    "rent180": 3.69,
    "rent360": 6.41,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Objetivo Abril 2028",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "ALTO",
        "rent30": 1.33,
        "rent90": 2.66,
        "rent180": 3.5,
        "rent360": 6.01,
        "tac": 0.77,
        "participes": 16
      },
      {
        "serie": "APV",
        "rent30": 1.33,
        "rent90": 2.66,
        "rent180": 3.5,
        "rent360": 6.01,
        "tac": 0.77,
        "participes": 4
      },
      {
        "serie": "GLOBAL",
        "rent30": 1.31,
        "rent90": 2.59,
        "rent180": 3.36,
        "rent360": 5.72,
        "tac": 1.05,
        "participes": 157
      }
    ],
    "rent30": 1.33,
    "rent90": 2.66,
    "rent180": 3.5,
    "rent360": 6.01,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Renta Selecta Chile",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": 1.21,
        "rent90": 2.73,
        "rent180": 4.03,
        "rent360": 7.12,
        "tac": 0.01,
        "participes": 14
      },
      {
        "serie": "III",
        "rent30": 1.18,
        "rent90": 2.63,
        "rent180": 3.84,
        "rent360": 6.74,
        "tac": 0.36,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 1.17,
        "rent90": 2.6,
        "rent180": 3.77,
        "rent360": 6.59,
        "tac": 0.51,
        "participes": 361
      },
      {
        "serie": "CORPO",
        "rent30": 1.16,
        "rent90": 2.57,
        "rent180": 3.72,
        "rent360": 6.48,
        "tac": 0.6,
        "participes": 480
      },
      {
        "serie": "PATRI",
        "rent30": 1.15,
        "rent90": 2.53,
        "rent180": 3.64,
        "rent360": 6.32,
        "tac": 0.75,
        "participes": 621
      },
      {
        "serie": "GLOBA",
        "rent30": 1.11,
        "rent90": 2.42,
        "rent180": 3.4,
        "rent360": 5.85,
        "tac": 1.19,
        "participes": 11347
      },
      {
        "serie": "DIGITAL",
        "rent30": 1.11,
        "rent90": 2.42,
        "rent180": 3.41,
        "rent360": 5.86,
        "tac": 1.2,
        "participes": 2879
      }
    ],
    "rent30": 1.11,
    "rent90": 2.42,
    "rent180": 3.41,
    "rent360": 5.86,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Renta Largo Plazo Pesos",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": -0.35,
        "rent90": 1.27,
        "rent180": 3.15,
        "rent360": 6.19,
        "tac": 0.01,
        "participes": 13
      },
      {
        "serie": "III",
        "rent30": -0.38,
        "rent90": 1.17,
        "rent180": 2.97,
        "rent360": 5.81,
        "tac": 0.37,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -0.39,
        "rent90": 1.14,
        "rent180": 2.89,
        "rent360": 5.67,
        "tac": 0.51,
        "participes": 155
      },
      {
        "serie": "CORPO",
        "rent30": -0.4,
        "rent90": 1.11,
        "rent180": 2.84,
        "rent360": 5.56,
        "tac": 0.61,
        "participes": 15
      },
      {
        "serie": "EJECU",
        "rent30": -0.44,
        "rent90": 0.96,
        "rent180": 2.53,
        "rent360": 4.94,
        "tac": 1.21,
        "participes": 87
      },
      {
        "serie": "INVER",
        "rent30": -0.48,
        "rent90": 0.83,
        "rent180": 2.27,
        "rent360": 4.42,
        "tac": 1.72,
        "participes": 768
      },
      {
        "serie": "UNIVE",
        "rent30": -0.48,
        "rent90": 0.82,
        "rent180": 2.25,
        "rent360": 4.37,
        "tac": 1.76,
        "participes": 9087
      }
    ],
    "rent30": -0.39,
    "rent90": 1.14,
    "rent180": 2.89,
    "rent360": 5.67,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Renta Mediano Plazo",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": 0.79,
        "rent90": 1.79,
        "rent180": 2.84,
        "rent360": 5.52,
        "tac": 0.01,
        "participes": 4
      },
      {
        "serie": "SI",
        "rent30": 0.78,
        "rent90": 1.74,
        "rent180": 2.74,
        "rent360": 5.31,
        "tac": 0.21,
        "participes": 34
      },
      {
        "serie": "CORPO",
        "rent30": 0.75,
        "rent90": 1.66,
        "rent180": 2.58,
        "rent360": 5,
        "tac": 0.51,
        "participes": 120
      },
      {
        "serie": "APV",
        "rent30": 0.75,
        "rent90": 1.66,
        "rent180": 2.58,
        "rent360": 5,
        "tac": 0.53,
        "participes": 248
      },
      {
        "serie": "EJECU",
        "rent30": 0.72,
        "rent90": 1.55,
        "rent180": 2.37,
        "rent360": 4.58,
        "tac": 0.92,
        "participes": 569
      },
      {
        "serie": "INVER",
        "rent30": 0.69,
        "rent90": 1.45,
        "rent180": 2.17,
        "rent360": 4.17,
        "tac": 1.32,
        "participes": 4527
      },
      {
        "serie": "UNIVE",
        "rent30": 0.68,
        "rent90": 1.43,
        "rent180": 2.12,
        "rent360": 4.07,
        "tac": 1.41,
        "participes": 18297
      }
    ],
    "rent30": 0.75,
    "rent90": 1.66,
    "rent180": 2.58,
    "rent360": 5,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Deuda Latam",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "III",
        "rent30": -1.15,
        "rent90": -1.16,
        "rent180": -0.4,
        "rent360": 5.32,
        "tac": 0.46,
        "participes": 4
      },
      {
        "serie": "ALTO",
        "rent30": -1.2,
        "rent90": -1.31,
        "rent180": -0.71,
        "rent360": 4.68,
        "tac": 1.08,
        "participes": 50
      },
      {
        "serie": "APV",
        "rent30": -1.2,
        "rent90": -1.31,
        "rent180": -0.71,
        "rent360": 4.68,
        "tac": 1.08,
        "participes": 64
      },
      {
        "serie": "EJECU",
        "rent30": -1.22,
        "rent90": -1.38,
        "rent180": -0.84,
        "rent360": 4.42,
        "tac": 1.33,
        "participes": 60
      },
      {
        "serie": "INVER",
        "rent30": -1.24,
        "rent90": -1.44,
        "rent180": -0.96,
        "rent360": 4.16,
        "tac": 1.58,
        "participes": 86
      },
      {
        "serie": "UNIVE",
        "rent30": -1.25,
        "rent90": -1.5,
        "rent180": -1.09,
        "rent360": 3.91,
        "tac": 1.86,
        "participes": 1862
      }
    ],
    "rent30": -1.2,
    "rent90": -1.31,
    "rent180": -0.71,
    "rent360": 4.68,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Tesoreria",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "CORP",
        "rent30": 0.33,
        "rent90": 1.1,
        "rent180": 2.24,
        "rent360": 4.66,
        "tac": 0.4,
        "participes": 39
      },
      {
        "serie": "APV",
        "rent30": 0.3,
        "rent90": 1,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.73,
        "participes": 188
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.29,
        "rent90": 0.98,
        "rent180": 2.01,
        "rent360": 4.12,
        "tac": 0.79,
        "participes": 2689
      },
      {
        "serie": "EJECU",
        "rent30": 0.3,
        "rent90": 1.01,
        "rent180": 2.06,
        "rent360": 4.31,
        "tac": 0.84,
        "participes": 240
      },
      {
        "serie": "INVER",
        "rent30": 0.29,
        "rent90": 0.97,
        "rent180": 1.98,
        "rent360": 4.11,
        "tac": 1.05,
        "participes": 146
      },
      {
        "serie": "GLOBAL",
        "rent30": 0.25,
        "rent90": 0.84,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.37,
        "participes": 12661
      }
    ],
    "rent30": 0.29,
    "rent90": 0.98,
    "rent180": 2.01,
    "rent360": 4.12,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Deuda Soberana",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": 1.46,
        "rent90": 1.71,
        "rent180": 4.88,
        "rent360": 4.15,
        "tac": 0.02,
        "participes": 4
      },
      {
        "serie": "S",
        "rent30": 1.45,
        "rent90": 1.67,
        "rent180": 4.79,
        "rent360": 3.98,
        "tac": 0.19,
        "participes": 7
      }
    ],
    "rent30": 1.45,
    "rent90": 1.67,
    "rent180": 4.79,
    "rent360": 3.98,
    "defaultSerie": "S"
  },
  {
    "name": "Santander Renta Corto Plazo",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "CORPO",
        "rent30": 0.28,
        "rent90": 1.06,
        "rent180": 2.21,
        "rent360": 4.62,
        "tac": 0.4,
        "participes": 612
      },
      {
        "serie": "APV",
        "rent30": 0.27,
        "rent90": 1.04,
        "rent180": 2.16,
        "rent360": 4.52,
        "tac": 0.51,
        "participes": 206
      },
      {
        "serie": "EJECU",
        "rent30": 0.25,
        "rent90": 0.98,
        "rent180": 2.06,
        "rent360": 4.31,
        "tac": 0.71,
        "participes": 1343
      },
      {
        "serie": "YOU",
        "rent30": 0.25,
        "rent90": 0.97,
        "rent180": 2.03,
        "rent360": 4.26,
        "tac": 0.77,
        "participes": 280
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.21,
        "rent90": 0.86,
        "rent180": 1.81,
        "rent360": 3.81,
        "tac": 1.2,
        "participes": 19338
      },
      {
        "serie": "INVER",
        "rent30": 0.21,
        "rent90": 0.83,
        "rent180": 1.75,
        "rent360": 3.7,
        "tac": 1.3,
        "participes": 5157
      },
      {
        "serie": "UNIVE",
        "rent30": 0.18,
        "rent90": 0.75,
        "rent180": 1.6,
        "rent360": 3.39,
        "tac": 1.6,
        "participes": 26587
      }
    ],
    "rent30": 0.21,
    "rent90": 0.86,
    "rent180": 1.81,
    "rent360": 3.81,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Deuda Latam ESG Dólar",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "ALTO",
        "rent30": -2.51,
        "rent90": -2.49,
        "rent180": -2.4,
        "rent360": 3.49,
        "tac": 1.01,
        "participes": 7
      },
      {
        "serie": "EJECU",
        "rent30": -2.53,
        "rent90": -2.55,
        "rent180": -2.52,
        "rent360": 3.23,
        "tac": 1.26,
        "participes": 45
      },
      {
        "serie": "INVER",
        "rent30": -2.55,
        "rent90": -2.61,
        "rent180": -2.64,
        "rent360": 2.98,
        "tac": 1.51,
        "participes": 62
      },
      {
        "serie": "UNIVE",
        "rent30": -2.57,
        "rent90": -2.68,
        "rent180": -2.76,
        "rent360": 2.72,
        "tac": 1.76,
        "participes": 325
      }
    ],
    "rent30": -2.51,
    "rent90": -2.49,
    "rent180": -2.4,
    "rent360": 3.49,
    "defaultSerie": "ALTO"
  },
  {
    "name": "Santander Renta Corto Plazo Dólar",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "ALTO",
        "rent30": 0.39,
        "rent90": 1.07,
        "rent180": 2.07,
        "rent360": 4.15,
        "tac": 0.5,
        "participes": 21
      },
      {
        "serie": "EJECU",
        "rent30": 0.36,
        "rent90": 0.97,
        "rent180": 1.86,
        "rent360": 3.73,
        "tac": 0.91,
        "participes": 615
      },
      {
        "serie": "GLOBAL",
        "rent30": 0.33,
        "rent90": 0.9,
        "rent180": 1.71,
        "rent360": 3.44,
        "tac": 1.19,
        "participes": 939
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.33,
        "rent90": 0.9,
        "rent180": 1.71,
        "rent360": 3.44,
        "tac": 1.2,
        "participes": 435
      }
    ],
    "rent30": 0.33,
    "rent90": 0.9,
    "rent180": 1.71,
    "rent360": 3.44,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Deuda Dólar",
    "provider": "Santander",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "AM",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0.4,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "ALTO",
        "rent30": -1.73,
        "rent90": -0.87,
        "rent180": 0.1,
        "rent360": 2.95,
        "tac": 0.8,
        "participes": 20
      },
      {
        "serie": "EJECU",
        "rent30": -1.75,
        "rent90": -0.94,
        "rent180": -0.03,
        "rent360": 2.69,
        "tac": 1.05,
        "participes": 74
      },
      {
        "serie": "INVER",
        "rent30": -1.76,
        "rent90": -1,
        "rent180": -0.16,
        "rent360": 2.44,
        "tac": 1.3,
        "participes": 67
      },
      {
        "serie": "UNIVE",
        "rent30": -1.78,
        "rent90": -1.06,
        "rent180": -0.28,
        "rent360": 2.19,
        "tac": 1.55,
        "participes": 328
      }
    ],
    "rent30": 0,
    "rent90": 0,
    "rent180": 0,
    "rent360": 0.4,
    "defaultSerie": "AM"
  },
  {
    "name": "Santander Acciones Selectas Chile",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "AM",
        "rent30": 4.05,
        "rent90": 2.65,
        "rent180": 18.92,
        "rent360": 43.76,
        "tac": 0.1,
        "participes": 7
      },
      {
        "serie": "SI",
        "rent30": 4.04,
        "rent90": 2.59,
        "rent180": 18.8,
        "rent360": 43.47,
        "tac": 0.3,
        "participes": 12
      },
      {
        "serie": "APV",
        "rent30": 4.01,
        "rent90": 2.52,
        "rent180": 18.62,
        "rent360": 43.05,
        "tac": 0.6,
        "participes": 402
      },
      {
        "serie": "PATRI",
        "rent30": 3.98,
        "rent90": 2.41,
        "rent180": 18.38,
        "rent360": 42.48,
        "tac": 1,
        "participes": 199
      },
      {
        "serie": "III",
        "rent30": 3.97,
        "rent90": 2.37,
        "rent180": 18.29,
        "rent360": 42.27,
        "tac": 1.15,
        "participes": 1
      },
      {
        "serie": "GLOBA",
        "rent30": 3.89,
        "rent90": 2.13,
        "rent180": 17.72,
        "rent360": 40.94,
        "tac": 2.1,
        "participes": 4968
      }
    ],
    "rent30": 4.01,
    "rent90": 2.52,
    "rent180": 18.62,
    "rent360": 43.05,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Acciones Chilenas",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "AM",
        "rent30": 1.31,
        "rent90": -1.21,
        "rent180": 14.31,
        "rent360": 35.65,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "III",
        "rent30": 3.35,
        "rent90": 0.69,
        "rent180": 16.34,
        "rent360": 37.7,
        "tac": 0.59,
        "participes": 2
      },
      {
        "serie": "APV",
        "rent30": 3.31,
        "rent90": 0.57,
        "rent180": 16.07,
        "rent360": 37.08,
        "tac": 1.05,
        "participes": 2071
      },
      {
        "serie": "ALTO",
        "rent30": 3.31,
        "rent90": 0.54,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.15,
        "participes": 88
      },
      {
        "serie": "EJECU",
        "rent30": 3.2,
        "rent90": 0.19,
        "rent180": 14.93,
        "rent360": 34.75,
        "tac": 2.55,
        "participes": 2421
      },
      {
        "serie": "INVER",
        "rent30": 3.18,
        "rent90": 0.12,
        "rent180": 15.05,
        "rent360": 34.73,
        "tac": 2.81,
        "participes": 1328
      },
      {
        "serie": "UNIVE",
        "rent30": 3.16,
        "rent90": 0.06,
        "rent180": 14.91,
        "rent360": 34.39,
        "tac": 3.05,
        "participes": 8901
      }
    ],
    "rent30": 3.31,
    "rent90": 0.57,
    "rent180": 16.07,
    "rent360": 37.08,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Bonos Nacionales",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "SI",
        "rent30": 0.39,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 51
      },
      {
        "serie": "AM",
        "rent30": 1.24,
        "rent90": 2.76,
        "rent180": 4.25,
        "rent360": 7.45,
        "tac": 0.01,
        "participes": 14
      },
      {
        "serie": "III",
        "rent30": 1.21,
        "rent90": 2.66,
        "rent180": 4.06,
        "rent360": 7.07,
        "tac": 0.37,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 1.2,
        "rent90": 2.62,
        "rent180": 3.99,
        "rent360": 6.92,
        "tac": 0.51,
        "participes": 196
      },
      {
        "serie": "CORPO",
        "rent30": 1.19,
        "rent90": 2.6,
        "rent180": 3.93,
        "rent360": 6.82,
        "tac": 0.61,
        "participes": 165
      },
      {
        "serie": "EJECU",
        "rent30": 1.15,
        "rent90": 2.44,
        "rent180": 3.62,
        "rent360": 6.18,
        "tac": 1.2,
        "participes": 363
      },
      {
        "serie": "INVER",
        "rent30": 1.11,
        "rent90": 2.31,
        "rent180": 3.36,
        "rent360": 5.66,
        "tac": 1.7,
        "participes": 1203
      },
      {
        "serie": "UNIVE",
        "rent30": 1.1,
        "rent90": 2.3,
        "rent180": 3.33,
        "rent360": 5.61,
        "tac": 1.76,
        "participes": 2921
      }
    ],
    "rent30": 1.2,
    "rent90": 2.62,
    "rent180": 3.99,
    "rent360": 6.92,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Go Acciones Selectas USA",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "AM",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "III",
        "rent30": -5.16,
        "rent90": -15.98,
        "rent180": -21.83,
        "rent360": 2.1,
        "tac": 0.95,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -5.16,
        "rent90": -15.99,
        "rent180": -21.85,
        "rent360": 2.05,
        "tac": 1,
        "participes": 365
      },
      {
        "serie": "YOU",
        "rent30": -5.18,
        "rent90": -16.03,
        "rent180": -21.93,
        "rent360": 1.86,
        "tac": 1.19,
        "participes": 146
      },
      {
        "serie": "ALTO",
        "rent30": -5.2,
        "rent90": -16.1,
        "rent180": -22.05,
        "rent360": 1.55,
        "tac": 1.5,
        "participes": 110
      },
      {
        "serie": "II",
        "rent30": -5.21,
        "rent90": -16.14,
        "rent180": -22.12,
        "rent360": 1.37,
        "tac": 1.68,
        "participes": 1
      },
      {
        "serie": "EJECU",
        "rent30": -5.27,
        "rent90": -16.31,
        "rent180": -22.44,
        "rent360": 0.55,
        "tac": 2.5,
        "participes": 476
      },
      {
        "serie": "INVER",
        "rent30": -5.29,
        "rent90": -16.37,
        "rent180": -22.54,
        "rent360": 0.3,
        "tac": 2.75,
        "participes": 643
      },
      {
        "serie": "UNIVE",
        "rent30": -5.31,
        "rent90": -16.42,
        "rent180": -22.64,
        "rent360": 0.05,
        "tac": 2.99,
        "participes": 6833
      }
    ],
    "rent30": -5.16,
    "rent90": -15.99,
    "rent180": -21.85,
    "rent360": 2.05,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Acciones Latinoamérica",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "III",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "ALTO",
        "rent30": -3.41,
        "rent90": 12.58,
        "rent180": 14.66,
        "rent360": 36.79,
        "tac": 1.05,
        "participes": 27
      },
      {
        "serie": "APV",
        "rent30": -3.41,
        "rent90": 12.58,
        "rent180": 14.66,
        "rent360": 36.79,
        "tac": 1.05,
        "participes": 788
      },
      {
        "serie": "EJECU",
        "rent30": -3.52,
        "rent90": 12.15,
        "rent180": 13.8,
        "rent360": 34.78,
        "tac": 2.59,
        "participes": 306
      },
      {
        "serie": "INVER",
        "rent30": -3.54,
        "rent90": 12.08,
        "rent180": 13.65,
        "rent360": 34.44,
        "tac": 2.8,
        "participes": 739
      },
      {
        "serie": "UNIVE",
        "rent30": -3.56,
        "rent90": 12.01,
        "rent180": 13.51,
        "rent360": 34.11,
        "tac": 3.05,
        "participes": 2612
      }
    ],
    "rent30": -3.41,
    "rent90": 12.58,
    "rent180": 14.66,
    "rent360": 36.79,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Go Acciones Asia Emergente",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "AM",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "III",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -10.14,
        "rent90": 5.22,
        "rent180": 0.97,
        "rent360": 26.65,
        "tac": 1.05,
        "participes": 286
      },
      {
        "serie": "ALTO",
        "rent30": -10.17,
        "rent90": 5.09,
        "rent180": 0.71,
        "rent360": 26.02,
        "tac": 1.55,
        "participes": 23
      },
      {
        "serie": "EJECU",
        "rent30": -10.24,
        "rent90": 4.82,
        "rent180": 0.21,
        "rent360": 24.78,
        "tac": 2.55,
        "participes": 182
      },
      {
        "serie": "INVER",
        "rent30": -10.26,
        "rent90": 4.75,
        "rent180": 0.08,
        "rent360": 24.47,
        "tac": 2.75,
        "participes": 247
      },
      {
        "serie": "UNIVE",
        "rent30": -10.27,
        "rent90": 4.69,
        "rent180": -0.05,
        "rent360": 24.17,
        "tac": 3.06,
        "participes": 2356
      }
    ],
    "rent30": -10.14,
    "rent90": 5.22,
    "rent180": 0.97,
    "rent360": 26.65,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Acciones Global Emergente",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "AM",
        "rent30": -5.11,
        "rent90": 5.34,
        "rent180": 1.61,
        "rent360": 16.57,
        "tac": 0.1,
        "participes": 2
      },
      {
        "serie": "APV",
        "rent30": -5.18,
        "rent90": 5.08,
        "rent180": 3.39,
        "rent360": 25.76,
        "tac": 1.1,
        "participes": 463
      },
      {
        "serie": "III",
        "rent30": -5.19,
        "rent90": 5.06,
        "rent180": 3.36,
        "rent360": 25.7,
        "tac": 1.15,
        "participes": 1
      },
      {
        "serie": "ALTO",
        "rent30": -5.22,
        "rent90": 4.94,
        "rent180": 3.13,
        "rent360": 25.14,
        "tac": 1.6,
        "participes": 16
      },
      {
        "serie": "II",
        "rent30": -5.23,
        "rent90": 4.89,
        "rent180": 3.04,
        "rent360": 24.92,
        "tac": 1.79,
        "participes": 1
      },
      {
        "serie": "EJECU",
        "rent30": -5.29,
        "rent90": 4.67,
        "rent180": 2.61,
        "rent360": 23.91,
        "tac": 2.67,
        "participes": 180
      },
      {
        "serie": "INVER",
        "rent30": -5.31,
        "rent90": 4.61,
        "rent180": 2.48,
        "rent360": 23.6,
        "tac": 2.9,
        "participes": 238
      },
      {
        "serie": "UNIVE",
        "rent30": -5.33,
        "rent90": 4.54,
        "rent180": 2.35,
        "rent360": 23.29,
        "tac": 3.1,
        "participes": 2222
      }
    ],
    "rent30": -5.18,
    "rent90": 5.08,
    "rent180": 3.39,
    "rent360": 25.76,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Agresivo Dólar",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "SI",
        "rent30": -6.76,
        "rent90": -5.43,
        "rent180": -0.7,
        "rent360": 22.43,
        "tac": 0.35,
        "participes": 5
      },
      {
        "serie": "ALTO",
        "rent30": -6.81,
        "rent90": -5.62,
        "rent180": -1.1,
        "rent360": 21.47,
        "tac": 1.15,
        "participes": 50
      },
      {
        "serie": "DIGITAL",
        "rent30": -6.83,
        "rent90": -5.67,
        "rent180": -1.19,
        "rent360": 21.24,
        "tac": 1.34,
        "participes": 602
      },
      {
        "serie": "EJECU",
        "rent30": -6.85,
        "rent90": -5.74,
        "rent180": -1.35,
        "rent360": 20.87,
        "tac": 1.65,
        "participes": 70
      },
      {
        "serie": "GLOBAL",
        "rent30": -6.87,
        "rent90": -5.8,
        "rent180": -1.47,
        "rent360": 20.57,
        "tac": 1.91,
        "participes": 483
      }
    ],
    "rent30": -6.83,
    "rent90": -5.67,
    "rent180": -1.19,
    "rent360": 21.24,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Gestión Activa Agresiva",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV",
        "rent30": -1.7,
        "rent90": 0.19,
        "rent180": 1.05,
        "rent360": 20.42,
        "tac": 0.6,
        "participes": 158
      },
      {
        "serie": "DIGITAL",
        "rent30": -1.75,
        "rent90": 0.01,
        "rent180": 0.7,
        "rent360": 19.6,
        "tac": 1.29,
        "participes": 3296
      },
      {
        "serie": "YOU",
        "rent30": -1.75,
        "rent90": 0.01,
        "rent180": 0.7,
        "rent360": 19.6,
        "tac": 1.29,
        "participes": 196
      },
      {
        "serie": "ALTO",
        "rent30": -1.85,
        "rent90": -0.32,
        "rent180": 0.03,
        "rent360": 18.06,
        "tac": 2.6,
        "participes": 14
      },
      {
        "serie": "EJECU",
        "rent30": -1.86,
        "rent90": -0.34,
        "rent180": -0.02,
        "rent360": 17.95,
        "tac": 2.7,
        "participes": 141
      },
      {
        "serie": "GLOBAL",
        "rent30": -1.87,
        "rent90": -0.38,
        "rent180": -0.09,
        "rent360": 17.77,
        "tac": 2.9,
        "participes": 1729
      }
    ],
    "rent30": -1.75,
    "rent90": 0.01,
    "rent180": 0.7,
    "rent360": 19.6,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Santander Private Banking Agresivo",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "SI",
        "rent30": -1.79,
        "rent90": -0.71,
        "rent180": 0.3,
        "rent360": 0,
        "tac": 0.2,
        "participes": 5
      },
      {
        "serie": "C",
        "rent30": -1.8,
        "rent90": -0.76,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.4,
        "participes": 409
      },
      {
        "serie": "III",
        "rent30": -1.81,
        "rent90": -0.79,
        "rent180": -0.96,
        "rent360": 0,
        "tac": 0.5,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": -1.81,
        "rent90": -0.79,
        "rent180": 0.15,
        "rent360": 19.33,
        "tac": 0.51,
        "participes": 1769
      },
      {
        "serie": "ALTO",
        "rent30": -1.84,
        "rent90": -0.89,
        "rent180": -0.06,
        "rent360": 18.89,
        "tac": 0.91,
        "participes": 142
      },
      {
        "serie": "II",
        "rent30": -1.87,
        "rent90": -0.97,
        "rent180": -0.21,
        "rent360": 0,
        "tac": 1.2,
        "participes": 1
      },
      {
        "serie": "EJECU",
        "rent30": -1.95,
        "rent90": -1.26,
        "rent180": -0.78,
        "rent360": 17.2,
        "tac": 2.36,
        "participes": 557
      },
      {
        "serie": "GLOBAL",
        "rent30": -1.96,
        "rent90": -1.29,
        "rent180": -0.86,
        "rent360": 16.94,
        "tac": 2.51,
        "participes": 5029
      }
    ],
    "rent30": -1.81,
    "rent90": -0.79,
    "rent180": 0.15,
    "rent360": 19.33,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Acciones Estados Unidos",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "AM",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 3.6,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -5.43,
        "rent90": -6.21,
        "rent180": -6.02,
        "rent360": 16.04,
        "tac": 1.05,
        "participes": 186
      },
      {
        "serie": "ALTO",
        "rent30": -5.47,
        "rent90": -6.33,
        "rent180": -6.26,
        "rent360": 15.47,
        "tac": 1.55,
        "participes": 9
      },
      {
        "serie": "EJECU",
        "rent30": -5.53,
        "rent90": -6.52,
        "rent180": -6.63,
        "rent360": 14.56,
        "tac": 2.35,
        "participes": 90
      },
      {
        "serie": "GLOBAL",
        "rent30": -5.56,
        "rent90": -6.63,
        "rent180": -6.85,
        "rent360": 14.05,
        "tac": 2.82,
        "participes": 1443
      }
    ],
    "rent30": -5.43,
    "rent90": -6.21,
    "rent180": -6.02,
    "rent360": 16.04,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Acciones Europa",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "AM",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -5.36,
        "rent90": -2.51,
        "rent180": -2.47,
        "rent360": 10.61,
        "tac": 1,
        "participes": 163
      },
      {
        "serie": "III",
        "rent30": -5.37,
        "rent90": -2.52,
        "rent180": -2.49,
        "rent360": 10.56,
        "tac": 1.06,
        "participes": 1
      },
      {
        "serie": "ALTO",
        "rent30": -5.4,
        "rent90": -2.64,
        "rent180": -2.71,
        "rent360": 10.07,
        "tac": 1.5,
        "participes": 22
      },
      {
        "serie": "EJECU",
        "rent30": -5.47,
        "rent90": -2.88,
        "rent180": -3.2,
        "rent360": 8.98,
        "tac": 2.5,
        "participes": 98
      },
      {
        "serie": "INVER",
        "rent30": -5.49,
        "rent90": -2.94,
        "rent180": -3.32,
        "rent360": 8.72,
        "tac": 2.75,
        "participes": 100
      },
      {
        "serie": "UNIVE",
        "rent30": -5.51,
        "rent90": -3.01,
        "rent180": -3.45,
        "rent360": 8.45,
        "tac": 3,
        "participes": 1674
      }
    ],
    "rent30": -5.36,
    "rent90": -2.51,
    "rent180": -2.47,
    "rent360": 10.61,
    "defaultSerie": "APV"
  },
  {
    "name": "Santander Go Acciones Globales ESG",
    "provider": "Santander",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "AM",
        "rent30": -3.48,
        "rent90": -3.17,
        "rent180": -3.68,
        "rent360": 10.69,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "APV",
        "rent30": -6.82,
        "rent90": -6.69,
        "rent180": -7.41,
        "rent360": 5.88,
        "tac": 1.01,
        "participes": 368
      },
      {
        "serie": "III",
        "rent30": -6.82,
        "rent90": -6.7,
        "rent180": -7.43,
        "rent360": 5.84,
        "tac": 1.06,
        "participes": 1
      },
      {
        "serie": "YOU",
        "rent30": -6.83,
        "rent90": -6.74,
        "rent180": -7.5,
        "rent360": 4.67,
        "tac": 1.2,
        "participes": 119
      },
      {
        "serie": "ALTO",
        "rent30": -6.85,
        "rent90": -6.81,
        "rent180": -7.64,
        "rent360": 5.37,
        "tac": 1.51,
        "participes": 168
      },
      {
        "serie": "II",
        "rent30": -6.87,
        "rent90": -6.85,
        "rent180": -7.73,
        "rent360": 5.18,
        "tac": 1.69,
        "participes": 1
      },
      {
        "serie": "EJECU",
        "rent30": -6.93,
        "rent90": -7.05,
        "rent180": -8.11,
        "rent360": 4.27,
        "tac": 2.52,
        "participes": 1194
      },
      {
        "serie": "INVER",
        "rent30": -6.94,
        "rent90": -7.11,
        "rent180": -8.22,
        "rent360": 4.07,
        "tac": 2.76,
        "participes": 416
      },
      {
        "serie": "UNIVE",
        "rent30": -6.96,
        "rent90": -7.17,
        "rent180": -8.34,
        "rent360": 3.82,
        "tac": 3.01,
        "participes": 3242
      }
    ],
    "rent30": -6.82,
    "rent90": -6.69,
    "rent180": -7.41,
    "rent360": 5.88,
    "defaultSerie": "APV"
  },
  {
    "name": "Scotia Money Market",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "AFP",
        "rent30": 0.36,
        "rent90": 1.19,
        "rent180": 2.4,
        "rent360": 4.94,
        "tac": 0,
        "participes": 2
      },
      {
        "serie": "SBK",
        "rent30": 0.36,
        "rent90": 1.2,
        "rent180": 2.42,
        "rent360": 4.97,
        "tac": 0,
        "participes": 3
      },
      {
        "serie": "PREMIUM",
        "rent30": 0.35,
        "rent90": 1.18,
        "rent180": 2.37,
        "rent360": 4.88,
        "tac": 0.05,
        "participes": 31
      },
      {
        "serie": "LARGE",
        "rent30": 0.35,
        "rent90": 1.16,
        "rent180": 2.34,
        "rent360": 4.83,
        "tac": 0.16,
        "participes": 186
      },
      {
        "serie": "MEDIUM",
        "rent30": 0.3,
        "rent90": 1.02,
        "rent180": 2.06,
        "rent360": 4.25,
        "tac": 0.91,
        "participes": 903
      },
      {
        "serie": "SMALL",
        "rent30": 0.25,
        "rent90": 0.85,
        "rent180": 1.72,
        "rent360": 3.58,
        "tac": 1.44,
        "participes": 10659
      }
    ],
    "rent30": 0.36,
    "rent90": 1.19,
    "rent180": 2.4,
    "rent360": 4.94,
    "defaultSerie": "AFP"
  },
  {
    "name": "Scotia Money Market Dolar",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "LARGE",
        "rent30": 0.3,
        "rent90": 1.03,
        "rent180": 2.08,
        "rent360": 4.19,
        "tac": 0.3,
        "participes": 55
      },
      {
        "serie": "MEDIUM",
        "rent30": 0.28,
        "rent90": 0.96,
        "rent180": 1.98,
        "rent360": 4.04,
        "tac": 0.6,
        "participes": 53
      },
      {
        "serie": "SMALL",
        "rent30": 0.24,
        "rent90": 0.81,
        "rent180": 1.77,
        "rent360": 3.77,
        "tac": 1.19,
        "participes": 2319
      }
    ],
    "rent30": 0.3,
    "rent90": 1.03,
    "rent180": 2.08,
    "rent360": 4.19,
    "defaultSerie": "LARGE"
  },
  {
    "name": "Scotia Liquidez",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "SBK",
        "rent30": 0,
        "rent90": 0.5,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "WEALTH",
        "rent30": 0.32,
        "rent90": 1.08,
        "rent180": 2.16,
        "rent360": 4.46,
        "tac": 0.52,
        "participes": 62
      },
      {
        "serie": "AHORROSIST",
        "rent30": 0.31,
        "rent90": 1.02,
        "rent180": 2.05,
        "rent360": 4.25,
        "tac": 0.7,
        "participes": 2531
      },
      {
        "serie": "WEB",
        "rent30": 0.3,
        "rent90": 1.01,
        "rent180": 2.03,
        "rent360": 4.21,
        "tac": 0.75,
        "participes": 5441
      },
      {
        "serie": "APV",
        "rent30": 0.3,
        "rent90": 1.01,
        "rent180": 2.02,
        "rent360": 4.18,
        "tac": 0.76,
        "participes": 21
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 0.3,
        "rent90": 1,
        "rent180": 2.01,
        "rent360": 4.15,
        "tac": 0.83,
        "participes": 135
      },
      {
        "serie": "CLASICA",
        "rent30": 0.26,
        "rent90": 0.86,
        "rent180": 1.73,
        "rent360": 3.59,
        "tac": 1.35,
        "participes": 47911
      }
    ],
    "rent30": 0.26,
    "rent90": 0.86,
    "rent180": 1.73,
    "rent360": 3.59,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Deuda Largo Plazo UF",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SBK",
        "rent30": 1.14,
        "rent90": 2.76,
        "rent180": 4.25,
        "rent360": 7.34,
        "tac": 0,
        "participes": 53
      },
      {
        "serie": "VIVIENDA",
        "rent30": 1.11,
        "rent90": 2.66,
        "rent180": 4.04,
        "rent360": 6.92,
        "tac": 0.4,
        "participes": 1
      },
      {
        "serie": "WEALTH",
        "rent30": 1.08,
        "rent90": 2.55,
        "rent180": 3.83,
        "rent360": 6.48,
        "tac": 0.81,
        "participes": 195
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 1.07,
        "rent90": 2.52,
        "rent180": 3.75,
        "rent360": 6.34,
        "tac": 0.95,
        "participes": 104
      },
      {
        "serie": "WEB",
        "rent30": 1.05,
        "rent90": 2.47,
        "rent180": 3.66,
        "rent360": 6.16,
        "tac": 1.12,
        "participes": 902
      },
      {
        "serie": "APV",
        "rent30": 1.05,
        "rent90": 2.46,
        "rent180": 3.64,
        "rent360": 6.12,
        "tac": 1.16,
        "participes": 548
      },
      {
        "serie": "ALTOV",
        "rent30": 1.03,
        "rent90": 2.4,
        "rent180": 3.52,
        "rent360": 5.86,
        "tac": 1.38,
        "participes": 306
      },
      {
        "serie": "CLASICA",
        "rent30": 1,
        "rent90": 2.29,
        "rent180": 3.31,
        "rent360": 5.45,
        "tac": 1.79,
        "participes": 5823
      }
    ],
    "rent30": 1,
    "rent90": 2.29,
    "rent180": 3.31,
    "rent360": 5.45,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Deuda Chile Flexible",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SBK",
        "rent30": 0.92,
        "rent90": 2.49,
        "rent180": 3.97,
        "rent360": 6.97,
        "tac": 0,
        "participes": 5
      },
      {
        "serie": "WEALTH",
        "rent30": 0.85,
        "rent90": 2.28,
        "rent180": 3.54,
        "rent360": 6.11,
        "tac": 0.8,
        "participes": 119
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 0.84,
        "rent90": 2.24,
        "rent180": 3.47,
        "rent360": 5.97,
        "tac": 0.95,
        "participes": 48
      },
      {
        "serie": "WEB",
        "rent30": 0.83,
        "rent90": 2.18,
        "rent180": 3.36,
        "rent360": 5.75,
        "tac": 1.16,
        "participes": 249
      },
      {
        "serie": "APV",
        "rent30": 0.83,
        "rent90": 2.18,
        "rent180": 3.34,
        "rent360": 5.72,
        "tac": 1.19,
        "participes": 279
      },
      {
        "serie": "ALTOV",
        "rent30": 0.81,
        "rent90": 2.11,
        "rent180": 3.21,
        "rent360": 5.44,
        "tac": 1.45,
        "participes": 15
      },
      {
        "serie": "CLASICA",
        "rent30": 0.78,
        "rent90": 2.02,
        "rent180": 3.03,
        "rent360": 5.08,
        "tac": 1.79,
        "participes": 1434
      }
    ],
    "rent30": 0.78,
    "rent90": 2.02,
    "rent180": 3.03,
    "rent360": 5.08,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Deuda Mediano Plazo UF",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SBK",
        "rent30": 1.27,
        "rent90": 2.75,
        "rent180": 3.96,
        "rent360": 6.81,
        "tac": 0,
        "participes": 3
      },
      {
        "serie": "WEALTH",
        "rent30": 1.21,
        "rent90": 2.55,
        "rent180": 3.56,
        "rent360": 5.99,
        "tac": 0.77,
        "participes": 300
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 1.2,
        "rent90": 2.51,
        "rent180": 3.49,
        "rent360": 5.86,
        "tac": 0.9,
        "participes": 298
      },
      {
        "serie": "WEB",
        "rent30": 1.19,
        "rent90": 2.46,
        "rent180": 3.39,
        "rent360": 5.66,
        "tac": 1.09,
        "participes": 3284
      },
      {
        "serie": "APV",
        "rent30": 1.19,
        "rent90": 2.46,
        "rent180": 3.38,
        "rent360": 5.63,
        "tac": 1.12,
        "participes": 478
      },
      {
        "serie": "ALTOV",
        "rent30": 1.17,
        "rent90": 2.39,
        "rent180": 3.25,
        "rent360": 5.38,
        "tac": 1.36,
        "participes": 806
      },
      {
        "serie": "CLASICA",
        "rent30": 1.13,
        "rent90": 2.28,
        "rent180": 3.02,
        "rent360": 4.92,
        "tac": 1.8,
        "participes": 11519
      }
    ],
    "rent30": 1.13,
    "rent90": 2.28,
    "rent180": 3.02,
    "rent360": 4.92,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Deuda Corto Plazo UF",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SBK",
        "rent30": 1.52,
        "rent90": 2.53,
        "rent180": 3.28,
        "rent360": 5.87,
        "tac": 0,
        "participes": 3
      },
      {
        "serie": "VIVIENDA",
        "rent30": 1.52,
        "rent90": 2.51,
        "rent180": 3.22,
        "rent360": 5.77,
        "tac": 0.1,
        "participes": 1
      },
      {
        "serie": "WEALTH",
        "rent30": 1.47,
        "rent90": 2.36,
        "rent180": 2.92,
        "rent360": 5.16,
        "tac": 0.68,
        "participes": 280
      },
      {
        "serie": "WEB",
        "rent30": 1.47,
        "rent90": 2.34,
        "rent180": 2.89,
        "rent360": 5.09,
        "tac": 0.74,
        "participes": 3582
      },
      {
        "serie": "APV",
        "rent30": 1.46,
        "rent90": 2.33,
        "rent180": 2.88,
        "rent360": 5.07,
        "tac": 0.77,
        "participes": 63
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 1.45,
        "rent90": 2.32,
        "rent180": 2.85,
        "rent360": 5.03,
        "tac": 0.95,
        "participes": 262
      },
      {
        "serie": "ALTOV",
        "rent30": 1.45,
        "rent90": 2.29,
        "rent180": 2.78,
        "rent360": 4.89,
        "tac": 0.96,
        "participes": 294
      },
      {
        "serie": "CLASICA",
        "rent30": 1.42,
        "rent90": 2.18,
        "rent180": 2.58,
        "rent360": 4.47,
        "tac": 1.35,
        "participes": 2856
      }
    ],
    "rent30": 1.42,
    "rent90": 2.18,
    "rent180": 2.58,
    "rent360": 4.47,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Deuda Mediano Plazo",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SBK",
        "rent30": -0.05,
        "rent90": 1.56,
        "rent180": 2.6,
        "rent360": 3.98,
        "tac": 0,
        "participes": 6
      },
      {
        "serie": "WEALTH",
        "rent30": -0.11,
        "rent90": 1.36,
        "rent180": 2.88,
        "rent360": 5.22,
        "tac": 0.78,
        "participes": 151
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -0.12,
        "rent90": 1.32,
        "rent180": 2.81,
        "rent360": 5.08,
        "tac": 0.9,
        "participes": 113
      },
      {
        "serie": "WEB",
        "rent30": -0.13,
        "rent90": 1.27,
        "rent180": 2.71,
        "rent360": 4.88,
        "tac": 1.1,
        "participes": 2101
      },
      {
        "serie": "APV",
        "rent30": -0.13,
        "rent90": 1.27,
        "rent180": 2.7,
        "rent360": 4.85,
        "tac": 1.12,
        "participes": 68
      },
      {
        "serie": "ALTOV",
        "rent30": -0.15,
        "rent90": 1.21,
        "rent180": 2.57,
        "rent360": 4.6,
        "tac": 1.31,
        "participes": 157
      },
      {
        "serie": "CLASICA",
        "rent30": -0.18,
        "rent90": 1.09,
        "rent180": 2.35,
        "rent360": 4.15,
        "tac": 1.8,
        "participes": 2782
      }
    ],
    "rent30": -0.18,
    "rent90": 1.09,
    "rent180": 2.35,
    "rent360": 4.15,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Estructurado Deuda UF Ii",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "UNICA",
        "rent30": 0.56,
        "rent90": 1.23,
        "rent180": 1.59,
        "rent360": 3.6,
        "tac": 1.05,
        "participes": 535
      }
    ],
    "rent30": 0.56,
    "rent90": 1.23,
    "rent180": 1.59,
    "rent360": 3.6,
    "defaultSerie": "UNICA"
  },
  {
    "name": "Scotia Deuda Latam Dolar",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SBK",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0.51,
        "rent360": 5.51,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "WEALTH",
        "rent30": -1.65,
        "rent90": -0.98,
        "rent180": -0.22,
        "rent360": 4.34,
        "tac": 0.81,
        "participes": 13
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -1.66,
        "rent90": -1.01,
        "rent180": -0.29,
        "rent360": 4.2,
        "tac": 0.95,
        "participes": 22
      },
      {
        "serie": "CLASICA",
        "rent30": -1.72,
        "rent90": -1.19,
        "rent180": -0.64,
        "rent360": 3.48,
        "tac": 1.65,
        "participes": 442
      }
    ],
    "rent30": -1.72,
    "rent90": -1.19,
    "rent180": -0.64,
    "rent360": 3.48,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Retail Dólar",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "WEALTH",
        "rent30": 0.27,
        "rent90": 0.93,
        "rent180": 1.89,
        "rent360": 3.93,
        "tac": 0.67,
        "participes": 7
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 0.26,
        "rent90": 0.9,
        "rent180": 1.82,
        "rent360": 3.67,
        "tac": 0.8,
        "participes": 5
      },
      {
        "serie": "CLASICA",
        "rent30": 0.24,
        "rent90": 0.82,
        "rent180": 1.66,
        "rent360": 3.36,
        "tac": 1.11,
        "participes": 1950
      }
    ],
    "rent30": 0.24,
    "rent90": 0.82,
    "rent180": 1.66,
    "rent360": 3.36,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Deuda Global Dólar",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SBK",
        "rent30": -1.07,
        "rent90": -0.13,
        "rent180": 0.92,
        "rent360": 4.25,
        "tac": 0,
        "participes": 6
      },
      {
        "serie": "WEALTH",
        "rent30": -1.13,
        "rent90": -0.34,
        "rent180": 0.51,
        "rent360": 3.42,
        "tac": 0.81,
        "participes": 80
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -1.15,
        "rent90": -0.37,
        "rent180": 0.44,
        "rent360": 3.27,
        "tac": 0.95,
        "participes": 28
      },
      {
        "serie": "CLASICA",
        "rent30": -1.2,
        "rent90": -0.55,
        "rent180": 0.09,
        "rent360": 2.56,
        "tac": 1.65,
        "participes": 67
      }
    ],
    "rent30": -1.2,
    "rent90": -0.55,
    "rent180": 0.09,
    "rent360": 2.56,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Real Estate Global",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "SBK",
        "rent30": -4.68,
        "rent90": 1.61,
        "rent180": -4.22,
        "rent360": 5.07,
        "tac": 0,
        "participes": 2
      },
      {
        "serie": "WEALTH",
        "rent30": -4.79,
        "rent90": 1.22,
        "rent180": -4.94,
        "rent360": 3.53,
        "tac": 1.47,
        "participes": 49
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -4.85,
        "rent90": 1.02,
        "rent180": -5.33,
        "rent360": 2.71,
        "tac": 2.3,
        "participes": 5
      },
      {
        "serie": "WEB",
        "rent30": -4.86,
        "rent90": 1,
        "rent180": -5.36,
        "rent360": 2.63,
        "tac": 2.38,
        "participes": 82
      },
      {
        "serie": "APV",
        "rent30": -4.86,
        "rent90": 0.98,
        "rent180": -5.4,
        "rent360": 2.56,
        "tac": 2.45,
        "participes": 73
      },
      {
        "serie": "ALTOV",
        "rent30": -4.9,
        "rent90": 0.84,
        "rent180": -5.65,
        "rent360": 2.02,
        "tac": 2.98,
        "participes": 30
      },
      {
        "serie": "CLASICA",
        "rent30": -4.94,
        "rent90": 0.71,
        "rent180": -5.9,
        "rent360": 1.5,
        "tac": 3.5,
        "participes": 383
      }
    ],
    "rent30": -4.94,
    "rent90": 0.71,
    "rent180": -5.9,
    "rent360": 1.5,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Portafolio Moderado",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "AHORROSIST",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "VIVIENDAUN",
        "rent30": 0.93,
        "rent90": 2.63,
        "rent180": 3.72,
        "rent360": 9.77,
        "tac": 0.1,
        "participes": 1
      },
      {
        "serie": "VIVIENDADO",
        "rent30": 0.9,
        "rent90": 2.55,
        "rent180": 3.56,
        "rent360": 9.45,
        "tac": 0.4,
        "participes": 1
      },
      {
        "serie": "APV",
        "rent30": 0.89,
        "rent90": 2.5,
        "rent180": 3.46,
        "rent360": 9.23,
        "tac": 0.6,
        "participes": 83
      },
      {
        "serie": "WEB",
        "rent30": 0.84,
        "rent90": 2.34,
        "rent180": 3.14,
        "rent360": 8.56,
        "tac": 1.21,
        "participes": 5491
      },
      {
        "serie": "WEALTH",
        "rent30": 0.83,
        "rent90": 2.3,
        "rent180": 3.06,
        "rent360": 8.4,
        "tac": 1.38,
        "participes": 55
      },
      {
        "serie": "ALTOV",
        "rent30": 0.81,
        "rent90": 2.26,
        "rent180": 2.97,
        "rent360": 8.23,
        "tac": 1.43,
        "participes": 203
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 0.8,
        "rent90": 2.22,
        "rent180": 2.89,
        "rent360": 8.05,
        "tac": 1.7,
        "participes": 87
      },
      {
        "serie": "CLASICA",
        "rent30": 0.79,
        "rent90": 2.19,
        "rent180": 2.83,
        "rent360": 7.94,
        "tac": 1.8,
        "participes": 2347
      }
    ],
    "rent30": 0.79,
    "rent90": 2.19,
    "rent180": 2.83,
    "rent360": 7.94,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Portafolio Conservador",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.92,
        "rent90": 2.28,
        "rent180": 3.58,
        "rent360": 7.55,
        "tac": 0.6,
        "participes": 64
      },
      {
        "serie": "WEALTH",
        "rent30": 0.88,
        "rent90": 2.16,
        "rent180": 3.33,
        "rent360": 7.04,
        "tac": 1.09,
        "participes": 161
      },
      {
        "serie": "AHORROSIST",
        "rent30": 0.88,
        "rent90": 2.15,
        "rent180": 3.31,
        "rent360": 6.99,
        "tac": 1.13,
        "participes": 1
      },
      {
        "serie": "WEB",
        "rent30": 0.88,
        "rent90": 2.13,
        "rent180": 3.28,
        "rent360": 6.93,
        "tac": 1.2,
        "participes": 3324
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 0.87,
        "rent90": 2.11,
        "rent180": 3.23,
        "rent360": 6.83,
        "tac": 1.28,
        "participes": 252
      },
      {
        "serie": "ALTOV",
        "rent30": 0.85,
        "rent90": 2.05,
        "rent180": 3.12,
        "rent360": 6.61,
        "tac": 1.49,
        "participes": 144
      },
      {
        "serie": "CLASICA",
        "rent30": 0.83,
        "rent90": 1.98,
        "rent180": 2.98,
        "rent360": 6.34,
        "tac": 1.75,
        "participes": 6478
      }
    ],
    "rent30": 0.83,
    "rent90": 1.98,
    "rent180": 2.98,
    "rent360": 6.34,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Portafolio Mas Conservador",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "CONVENIO",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "WEALTH",
        "rent30": 0.71,
        "rent90": 1.57,
        "rent180": 2.47,
        "rent360": 4.74,
        "tac": 0.68,
        "participes": 124
      },
      {
        "serie": "AHORROSIST",
        "rent30": 0.71,
        "rent90": 1.57,
        "rent180": 2.46,
        "rent360": 4.72,
        "tac": 0.72,
        "participes": 2
      },
      {
        "serie": "WEB",
        "rent30": 0.71,
        "rent90": 1.56,
        "rent180": 2.43,
        "rent360": 4.67,
        "tac": 0.75,
        "participes": 3144
      },
      {
        "serie": "APV",
        "rent30": 0.71,
        "rent90": 1.55,
        "rent180": 2.42,
        "rent360": 4.65,
        "tac": 0.77,
        "participes": 462
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 0.7,
        "rent90": 1.53,
        "rent180": 2.4,
        "rent360": 4.61,
        "tac": 0.95,
        "participes": 225
      },
      {
        "serie": "ALTOV",
        "rent30": 0.69,
        "rent90": 1.5,
        "rent180": 2.33,
        "rent360": 4.47,
        "tac": 1.01,
        "participes": 425
      },
      {
        "serie": "CLASICA",
        "rent30": 0.66,
        "rent90": 1.4,
        "rent180": 2.12,
        "rent360": 4.05,
        "tac": 1.35,
        "participes": 13257
      }
    ],
    "rent30": 0.66,
    "rent90": 1.4,
    "rent180": 2.12,
    "rent360": 4.05,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Acciones Chile",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "SBK",
        "rent30": 2.87,
        "rent90": 1.51,
        "rent180": 17.69,
        "rent360": 39.25,
        "tac": 0,
        "participes": 3
      },
      {
        "serie": "WEALTH",
        "rent30": 2.73,
        "rent90": 1.07,
        "rent180": 16.68,
        "rent360": 36.93,
        "tac": 1.68,
        "participes": 122
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 2.71,
        "rent90": 1,
        "rent180": 16.51,
        "rent360": 36.52,
        "tac": 2,
        "participes": 56
      },
      {
        "serie": "AHORROSIST",
        "rent30": 2.69,
        "rent90": 0.95,
        "rent180": 16.39,
        "rent360": 36.25,
        "tac": 2.2,
        "participes": 315
      },
      {
        "serie": "CONVENIO",
        "rent30": 2.69,
        "rent90": 0.92,
        "rent180": 16.32,
        "rent360": 36.1,
        "tac": 2.31,
        "participes": 78
      },
      {
        "serie": "WEB",
        "rent30": 2.69,
        "rent90": 0.92,
        "rent180": 16.32,
        "rent360": 36.1,
        "tac": 2.32,
        "participes": 633
      },
      {
        "serie": "APV",
        "rent30": 2.68,
        "rent90": 0.9,
        "rent180": 16.28,
        "rent360": 36.01,
        "tac": 2.38,
        "participes": 1094
      },
      {
        "serie": "ALTOV",
        "rent30": 2.65,
        "rent90": 0.8,
        "rent180": 16.07,
        "rent360": 35.51,
        "tac": 2.75,
        "participes": 410
      },
      {
        "serie": "CLASICA",
        "rent30": 2.6,
        "rent90": 0.64,
        "rent180": 15.69,
        "rent360": 34.66,
        "tac": 3.39,
        "participes": 5707
      }
    ],
    "rent30": 2.6,
    "rent90": 0.64,
    "rent180": 15.69,
    "rent360": 34.66,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Acciones Chile Mid Cap",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "WEALTH",
        "rent30": -1.13,
        "rent90": 0.86,
        "rent180": 11.97,
        "rent360": 32.99,
        "tac": 1.86,
        "participes": 9
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -1.16,
        "rent90": 0.78,
        "rent180": 11.78,
        "rent360": 32.55,
        "tac": 2.21,
        "participes": 12
      },
      {
        "serie": "WEB",
        "rent30": -1.17,
        "rent90": 0.75,
        "rent180": 11.72,
        "rent360": 32.4,
        "tac": 2.32,
        "participes": 386
      },
      {
        "serie": "APV",
        "rent30": -1.17,
        "rent90": 0.73,
        "rent180": 11.68,
        "rent360": 32.31,
        "tac": 2.38,
        "participes": 47
      },
      {
        "serie": "ALTOV",
        "rent30": -1.2,
        "rent90": 0.63,
        "rent180": 11.47,
        "rent360": 31.82,
        "tac": 2.75,
        "participes": 126
      },
      {
        "serie": "CLASICA",
        "rent30": -1.25,
        "rent90": 0.47,
        "rent180": 11.1,
        "rent360": 30.98,
        "tac": 3.41,
        "participes": 1215
      }
    ],
    "rent30": -1.25,
    "rent90": 0.47,
    "rent180": 11.1,
    "rent360": 30.98,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Renta Variable Latam",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "SBK",
        "rent30": 4.63,
        "rent90": 16.6,
        "rent180": 17.6,
        "rent360": 45.74,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "WEALTH",
        "rent30": 4.51,
        "rent90": 16.16,
        "rent180": 16.71,
        "rent360": 43.6,
        "tac": 1.46,
        "participes": 84
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 4.45,
        "rent90": 15.92,
        "rent180": 16.24,
        "rent360": 42.47,
        "tac": 2.3,
        "participes": 18
      },
      {
        "serie": "WEB",
        "rent30": 4.44,
        "rent90": 15.9,
        "rent180": 16.19,
        "rent360": 42.35,
        "tac": 2.3,
        "participes": 174
      },
      {
        "serie": "APV",
        "rent30": 4.44,
        "rent90": 15.87,
        "rent180": 16.15,
        "rent360": 42.25,
        "tac": 2.45,
        "participes": 76
      },
      {
        "serie": "ALTOV",
        "rent30": 4.4,
        "rent90": 15.72,
        "rent180": 15.84,
        "rent360": 41.51,
        "tac": 2.98,
        "participes": 81
      },
      {
        "serie": "CLASICA",
        "rent30": 4.35,
        "rent90": 15.56,
        "rent180": 15.54,
        "rent360": 40.79,
        "tac": 3.5,
        "participes": 149
      }
    ],
    "rent30": 4.35,
    "rent90": 15.56,
    "rent180": 15.54,
    "rent360": 40.79,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Portafolio Mas Arriesgado",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV",
        "rent30": -0.07,
        "rent90": 2.39,
        "rent180": 2.55,
        "rent360": 22.95,
        "tac": 0.6,
        "participes": 255
      },
      {
        "serie": "WEALTH",
        "rent30": -0.15,
        "rent90": 2.13,
        "rent180": 2.04,
        "rent360": 21.75,
        "tac": 1.59,
        "participes": 73
      },
      {
        "serie": "AHORROSIST",
        "rent30": -0.18,
        "rent90": 2.02,
        "rent180": 1.83,
        "rent360": 21.25,
        "tac": 2,
        "participes": 10
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -0.18,
        "rent90": 2.03,
        "rent180": 1.83,
        "rent360": 21.26,
        "tac": 2.01,
        "participes": 93
      },
      {
        "serie": "WEB",
        "rent30": -0.19,
        "rent90": 1.99,
        "rent180": 1.77,
        "rent360": 21.12,
        "tac": 2.12,
        "participes": 2715
      },
      {
        "serie": "ALTOV",
        "rent30": -0.23,
        "rent90": 1.86,
        "rent180": 1.5,
        "rent360": 20.49,
        "tac": 2.64,
        "participes": 258
      },
      {
        "serie": "CLASICA",
        "rent30": -0.26,
        "rent90": 1.74,
        "rent180": 1.27,
        "rent360": 19.94,
        "tac": 3.1,
        "participes": 2034
      }
    ],
    "rent30": -0.26,
    "rent90": 1.74,
    "rent180": 1.27,
    "rent360": 19.94,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Acciones USA",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "SBK",
        "rent30": -2.87,
        "rent90": -6.34,
        "rent180": -8.66,
        "rent360": 21.22,
        "tac": 0,
        "participes": 3
      },
      {
        "serie": "WEALTH",
        "rent30": -2.98,
        "rent90": -6.7,
        "rent180": -9.34,
        "rent360": 19.44,
        "tac": 1.5,
        "participes": 222
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -3.04,
        "rent90": -6.89,
        "rent180": -9.71,
        "rent360": 18.49,
        "tac": 2.3,
        "participes": 159
      },
      {
        "serie": "WEB",
        "rent30": -3.05,
        "rent90": -6.91,
        "rent180": -9.75,
        "rent360": 18.4,
        "tac": 2.38,
        "participes": 1431
      },
      {
        "serie": "APV",
        "rent30": -3.05,
        "rent90": -6.92,
        "rent180": -9.78,
        "rent360": 18.32,
        "tac": 2.45,
        "participes": 423
      },
      {
        "serie": "ALTOV",
        "rent30": -3.09,
        "rent90": -7.05,
        "rent180": -10.02,
        "rent360": 17.7,
        "tac": 2.98,
        "participes": 368
      },
      {
        "serie": "CLASICA",
        "rent30": -3.13,
        "rent90": -7.17,
        "rent180": -10.25,
        "rent360": 17.1,
        "tac": 3.5,
        "participes": 1225
      }
    ],
    "rent30": -3.13,
    "rent90": -7.17,
    "rent180": -10.25,
    "rent360": 17.1,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Portafolio Arriesgado",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV",
        "rent30": 0.51,
        "rent90": 2.55,
        "rent180": 3.22,
        "rent360": 15.99,
        "tac": 0.6,
        "participes": 303
      },
      {
        "serie": "WEALTH",
        "rent30": 0.45,
        "rent90": 2.35,
        "rent180": 2.81,
        "rent360": 15.1,
        "tac": 1.38,
        "participes": 175
      },
      {
        "serie": "AHORROSIST",
        "rent30": 0.43,
        "rent90": 2.28,
        "rent180": 2.69,
        "rent360": 14.82,
        "tac": 1.62,
        "participes": 9
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": 0.43,
        "rent90": 2.26,
        "rent180": 2.64,
        "rent360": 14.73,
        "tac": 1.69,
        "participes": 229
      },
      {
        "serie": "WEB",
        "rent30": 0.43,
        "rent90": 2.26,
        "rent180": 2.64,
        "rent360": 14.73,
        "tac": 1.7,
        "participes": 5147
      },
      {
        "serie": "ALTOV",
        "rent30": 0.39,
        "rent90": 2.15,
        "rent180": 2.42,
        "rent360": 14.25,
        "tac": 2.13,
        "participes": 470
      },
      {
        "serie": "CLASICA",
        "rent30": 0.36,
        "rent90": 2.05,
        "rent180": 2.23,
        "rent360": 13.83,
        "tac": 2.51,
        "participes": 2635
      }
    ],
    "rent30": 0.36,
    "rent90": 2.05,
    "rent180": 2.23,
    "rent360": 13.83,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Renta Variable Global Dolar",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "SBK",
        "rent30": 1.87,
        "rent90": 1.87,
        "rent180": 1.87,
        "rent360": 1.87,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "WEALTH",
        "rent30": -3.94,
        "rent90": -10.53,
        "rent180": -8.43,
        "rent360": 7.98,
        "tac": 1.5,
        "participes": 14
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -4,
        "rent90": -10.71,
        "rent180": -8.8,
        "rent360": 7.13,
        "tac": 2.3,
        "participes": 11
      },
      {
        "serie": "CLASICA",
        "rent30": -4.09,
        "rent90": -10.99,
        "rent180": -9.35,
        "rent360": 5.87,
        "tac": 3.5,
        "participes": 65
      }
    ],
    "rent30": -4.09,
    "rent90": -10.99,
    "rent180": -9.35,
    "rent360": 5.87,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Renta Variable Europa",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "SBK",
        "rent30": -0.34,
        "rent90": -4.72,
        "rent180": -5.71,
        "rent360": 7.5,
        "tac": 0,
        "participes": 1
      },
      {
        "serie": "WEALTH",
        "rent30": -0.45,
        "rent90": -5.08,
        "rent180": -6.42,
        "rent360": 5.91,
        "tac": 1.46,
        "participes": 109
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -0.51,
        "rent90": -5.28,
        "rent180": -6.79,
        "rent360": 5.08,
        "tac": 2.3,
        "participes": 25
      },
      {
        "serie": "APV",
        "rent30": -0.53,
        "rent90": -5.31,
        "rent180": -6.86,
        "rent360": 4.92,
        "tac": 2.45,
        "participes": 177
      },
      {
        "serie": "WEB",
        "rent30": -0.52,
        "rent90": -5.3,
        "rent180": -6.83,
        "rent360": 4.99,
        "tac": 2.46,
        "participes": 109
      },
      {
        "serie": "ALTOV",
        "rent30": -0.57,
        "rent90": -5.44,
        "rent180": -7.11,
        "rent360": 4.37,
        "tac": 2.98,
        "participes": 84
      },
      {
        "serie": "CLASICA",
        "rent30": -0.61,
        "rent90": -5.57,
        "rent180": -7.36,
        "rent360": 3.84,
        "tac": 3.5,
        "participes": 212
      }
    ],
    "rent30": -0.61,
    "rent90": -5.57,
    "rent180": -7.36,
    "rent360": 3.84,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Scotia Renta Variable Global",
    "provider": "Scotiabank",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "WEALTH",
        "rent30": -2.23,
        "rent90": -7.81,
        "rent180": -11.05,
        "rent360": 2.97,
        "tac": 1.5,
        "participes": 11
      },
      {
        "serie": "ALTOPATRIM",
        "rent30": -2.29,
        "rent90": -8,
        "rent180": -11.41,
        "rent360": 2.15,
        "tac": 2.3,
        "participes": 18
      },
      {
        "serie": "WEB",
        "rent30": -2.3,
        "rent90": -8.02,
        "rent180": -11.45,
        "rent360": 2.07,
        "tac": 2.38,
        "participes": 355
      },
      {
        "serie": "APV",
        "rent30": -2.31,
        "rent90": -8.03,
        "rent180": -11.48,
        "rent360": 2,
        "tac": 2.45,
        "participes": 136
      },
      {
        "serie": "ALTOV",
        "rent30": -2.34,
        "rent90": -8.16,
        "rent180": -11.72,
        "rent360": 1.47,
        "tac": 2.98,
        "participes": 166
      },
      {
        "serie": "CLASICA",
        "rent30": -2.38,
        "rent90": -8.28,
        "rent180": -11.95,
        "rent360": 0.95,
        "tac": 3.5,
        "participes": 539
      }
    ],
    "rent30": -2.38,
    "rent90": -8.28,
    "rent180": -11.95,
    "rent360": 0.95,
    "defaultSerie": "CLASICA"
  },
  {
    "name": "Security Dolar Money Market",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 1,
    "series": [
      {
        "serie": "S",
        "rent30": 0.33,
        "rent90": 1.11,
        "rent180": 2.25,
        "rent360": 4.52,
        "tac": 0.08,
        "participes": 5
      },
      {
        "serie": "D",
        "rent30": 0.28,
        "rent90": 0.97,
        "rent180": 2,
        "rent360": 4.04,
        "tac": 0.78,
        "participes": 10
      },
      {
        "serie": "C",
        "rent30": 0.26,
        "rent90": 0.88,
        "rent180": 1.64,
        "rent360": 3.15,
        "tac": 1.02,
        "participes": 21
      },
      {
        "serie": "B",
        "rent30": 0.23,
        "rent90": 0.77,
        "rent180": 1.48,
        "rent360": 2.89,
        "tac": 1.36,
        "participes": 53
      },
      {
        "serie": "A",
        "rent30": 0.23,
        "rent90": 0.76,
        "rent180": 1.44,
        "rent360": 2.56,
        "tac": 1.44,
        "participes": 2749
      }
    ],
    "rent30": 0.23,
    "rent90": 0.77,
    "rent180": 1.48,
    "rent360": 2.89,
    "defaultSerie": "B"
  },
  {
    "name": "Security Emerging Market",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "INSTITUCIONAL",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "S",
        "rent30": -5.96,
        "rent90": 2.14,
        "rent180": 7.27,
        "rent360": 36.35,
        "tac": 0.1,
        "participes": 1
      },
      {
        "serie": "J",
        "rent30": -6.01,
        "rent90": 1.94,
        "rent180": 6.86,
        "rent360": 35.32,
        "tac": 0.81,
        "participes": 2
      },
      {
        "serie": "I-APV",
        "rent30": -6.11,
        "rent90": 1.59,
        "rent180": 6.14,
        "rent360": 33.55,
        "tac": 2.2,
        "participes": 469
      },
      {
        "serie": "B",
        "rent30": -6.13,
        "rent90": 1.52,
        "rent180": 5.99,
        "rent360": 33.18,
        "tac": 2.48,
        "participes": 147
      },
      {
        "serie": "A",
        "rent30": -6.3,
        "rent90": 0.92,
        "rent180": 4.76,
        "rent360": 30.16,
        "tac": 4.95,
        "participes": 236
      }
    ],
    "rent30": -6.13,
    "rent90": 1.52,
    "rent180": 5.99,
    "rent360": 33.18,
    "defaultSerie": "B"
  },
  {
    "name": "Security Jugado",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV DIGITAL",
        "rent30": -2.2,
        "rent90": -1.83,
        "rent180": 1.12,
        "rent360": 24.21,
        "tac": 0.86,
        "participes": 51
      },
      {
        "serie": "DIGITAL",
        "rent30": -2.24,
        "rent90": -1.95,
        "rent180": 0.87,
        "rent360": 23.61,
        "tac": 1.35,
        "participes": 245
      },
      {
        "serie": "APV",
        "rent30": -2.28,
        "rent90": -2.1,
        "rent180": 0.56,
        "rent360": 22.87,
        "tac": 1.96,
        "participes": 41
      },
      {
        "serie": "A",
        "rent30": -2.33,
        "rent90": -2.24,
        "rent180": 0.28,
        "rent360": 22.2,
        "tac": 2.51,
        "participes": 56
      }
    ],
    "rent30": -2.24,
    "rent90": -1.95,
    "rent180": 0.87,
    "rent360": 23.61,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Security Global",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": -5.73,
        "rent90": -4.8,
        "rent180": -0.02,
        "rent360": 24.77,
        "tac": 0.06,
        "participes": 1
      },
      {
        "serie": "J",
        "rent30": -5.78,
        "rent90": -4.99,
        "rent180": -0.41,
        "rent360": 23.82,
        "tac": 0.83,
        "participes": 3
      },
      {
        "serie": "FO",
        "rent30": -5.79,
        "rent90": -5.03,
        "rent180": -0.5,
        "rent360": 23.6,
        "tac": 1.01,
        "participes": 5
      },
      {
        "serie": "I-APV",
        "rent30": -5.88,
        "rent90": -5.31,
        "rent180": -1.08,
        "rent360": 22.2,
        "tac": 2.16,
        "participes": 254
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": -5.88,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 2.16,
        "participes": 3
      },
      {
        "serie": "F",
        "rent30": -5.93,
        "rent90": -5.48,
        "rent180": -1.42,
        "rent360": 21.36,
        "tac": 2.86,
        "participes": 297
      },
      {
        "serie": "A",
        "rent30": -6.05,
        "rent90": -5.88,
        "rent180": -2.25,
        "rent360": 19.38,
        "tac": 4.52,
        "participes": 550
      }
    ],
    "rent30": -6.05,
    "rent90": -5.88,
    "rent180": -2.25,
    "rent360": 19.38,
    "defaultSerie": "A"
  },
  {
    "name": "Fondo Activo 2055",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "J",
        "rent30": -0.13,
        "rent90": 0.56,
        "rent180": 1.54,
        "rent360": 18.87,
        "tac": 0.57,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": -0.25,
        "rent90": 0.17,
        "rent180": 0.77,
        "rent360": 17.11,
        "tac": 2.07,
        "participes": 1
      }
    ],
    "rent30": -0.25,
    "rent90": 0.17,
    "rent180": 0.77,
    "rent360": 17.11,
    "defaultSerie": "B"
  },
  {
    "name": "Fondo Activo 2045",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "J",
        "rent30": 0.34,
        "rent90": 1.18,
        "rent180": 2.67,
        "rent360": 15.12,
        "tac": 0.59,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 0.22,
        "rent90": 0.8,
        "rent180": 1.89,
        "rent360": 13.41,
        "tac": 2.11,
        "participes": 1
      }
    ],
    "rent30": 0.22,
    "rent90": 0.8,
    "rent180": 1.89,
    "rent360": 13.41,
    "defaultSerie": "B"
  },
  {
    "name": "Fondo Activo 2035",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "J",
        "rent30": 1.14,
        "rent90": 2.56,
        "rent180": 3.82,
        "rent360": 10.97,
        "tac": 0.56,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 1.02,
        "rent90": 2.18,
        "rent180": 3.04,
        "rent360": 9.35,
        "tac": 2.06,
        "participes": 1
      }
    ],
    "rent30": 1.02,
    "rent90": 2.18,
    "rent180": 3.04,
    "rent360": 9.35,
    "defaultSerie": "B"
  },
  {
    "name": "Security Corporativo",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": 1.17,
        "rent90": 2.72,
        "rent180": 4.37,
        "rent360": 7.79,
        "tac": 0.05,
        "participes": 4
      },
      {
        "serie": "J",
        "rent30": 1.16,
        "rent90": 2.66,
        "rent180": 4.26,
        "rent360": 7.56,
        "tac": 0.27,
        "participes": 2
      },
      {
        "serie": "I-APV",
        "rent30": 1.12,
        "rent90": 2.54,
        "rent180": 4.01,
        "rent360": 7.05,
        "tac": 0.75,
        "participes": 602
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": 1.09,
        "rent90": 2.43,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.15,
        "participes": 8
      },
      {
        "serie": "B",
        "rent30": 1.08,
        "rent90": 2.41,
        "rent180": 3.75,
        "rent360": 6.53,
        "tac": 1.24,
        "participes": 407
      },
      {
        "serie": "A",
        "rent30": 0.97,
        "rent90": 2.04,
        "rent180": 3.01,
        "rent360": 5.06,
        "tac": 2.64,
        "participes": 808
      }
    ],
    "rent30": 1.08,
    "rent90": 2.41,
    "rent180": 3.75,
    "rent360": 6.53,
    "defaultSerie": "B"
  },
  {
    "name": "Security Gold",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": 1.33,
        "rent90": 2.78,
        "rent180": 3.99,
        "rent360": 7.04,
        "tac": 0.05,
        "participes": 2
      },
      {
        "serie": "J",
        "rent30": 1.31,
        "rent90": 2.73,
        "rent180": 3.87,
        "rent360": 6.81,
        "tac": 0.26,
        "participes": 2
      },
      {
        "serie": "I-APV",
        "rent30": 1.28,
        "rent90": 2.6,
        "rent180": 3.62,
        "rent360": 6.3,
        "tac": 0.75,
        "participes": 1167
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": 1.24,
        "rent90": 2.5,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.12,
        "participes": 46
      },
      {
        "serie": "B",
        "rent30": 1.24,
        "rent90": 2.47,
        "rent180": 3.37,
        "rent360": 5.79,
        "tac": 1.24,
        "participes": 1295
      },
      {
        "serie": "A",
        "rent30": 1.22,
        "rent90": 2.41,
        "rent180": 3.24,
        "rent360": 5.54,
        "tac": 1.47,
        "participes": 5313
      }
    ],
    "rent30": 1.24,
    "rent90": 2.47,
    "rent180": 3.37,
    "rent360": 5.79,
    "defaultSerie": "B"
  },
  {
    "name": "Security Deuda Corporativa Latinoamericana",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": -1.93,
        "rent90": -1.02,
        "rent180": -0.57,
        "rent360": 1.73,
        "tac": 0.08,
        "participes": 1
      },
      {
        "serie": "J",
        "rent30": -1.93,
        "rent90": -0.35,
        "rent180": 0.74,
        "rent360": 7.09,
        "tac": 0.09,
        "participes": 1
      },
      {
        "serie": "I-APV",
        "rent30": -1.99,
        "rent90": -0.57,
        "rent180": 0.31,
        "rent360": 6.21,
        "tac": 0.93,
        "participes": 190
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": -2.03,
        "rent90": -0.68,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.38,
        "participes": 13
      },
      {
        "serie": "B",
        "rent30": -2.04,
        "rent90": -0.71,
        "rent180": 0.03,
        "rent360": 5.62,
        "tac": 1.49,
        "participes": 151
      },
      {
        "serie": "A",
        "rent30": -2.08,
        "rent90": -0.86,
        "rent180": -0.27,
        "rent360": 5,
        "tac": 2.08,
        "participes": 363
      }
    ],
    "rent30": -2.04,
    "rent90": -0.71,
    "rent180": 0.03,
    "rent360": 5.62,
    "defaultSerie": "B"
  },
  {
    "name": "Fondo Activo 2025",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "B",
        "rent30": 0,
        "rent90": -0.02,
        "rent180": 0.62,
        "rent360": 5.58,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "J",
        "rent30": 0,
        "rent90": -0.02,
        "rent180": 1,
        "rent360": 6.75,
        "tac": 0,
        "participes": 0
      }
    ],
    "rent30": 0,
    "rent90": -0.02,
    "rent180": 0.62,
    "rent360": 5.58,
    "defaultSerie": "B"
  },
  {
    "name": "Security First",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": 0.15,
        "rent90": 1.25,
        "rent180": 2.92,
        "rent360": 6.09,
        "tac": 0.1,
        "participes": 2
      },
      {
        "serie": "I-APV",
        "rent30": 0.08,
        "rent90": 1.4,
        "rent180": 2.93,
        "rent360": 5.62,
        "tac": 1.05,
        "participes": 289
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": 0.07,
        "rent90": 1.36,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.2,
        "participes": 8
      },
      {
        "serie": "B",
        "rent30": 0.06,
        "rent90": 1.34,
        "rent180": 2.81,
        "rent360": 5.37,
        "tac": 1.29,
        "participes": 323
      },
      {
        "serie": "A",
        "rent30": 0.01,
        "rent90": 1.18,
        "rent180": 2.49,
        "rent360": 4.74,
        "tac": 1.92,
        "participes": 2765
      }
    ],
    "rent30": 0.06,
    "rent90": 1.34,
    "rent180": 2.81,
    "rent360": 5.37,
    "defaultSerie": "B"
  },
  {
    "name": "Security Mid Term UF",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": 1.51,
        "rent90": 2.39,
        "rent180": 2.85,
        "rent360": 5.5,
        "tac": 0.06,
        "participes": 1
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": 1.43,
        "rent90": 2.23,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.16,
        "participes": 8
      },
      {
        "serie": "B",
        "rent30": 1.42,
        "rent90": 2.2,
        "rent180": 2.64,
        "rent360": 4.92,
        "tac": 1.23,
        "participes": 439
      },
      {
        "serie": "I-APV",
        "rent30": 1.41,
        "rent90": 2.18,
        "rent180": 2.48,
        "rent360": 4.46,
        "tac": 1.3,
        "participes": 224
      },
      {
        "serie": "A",
        "rent30": 1.36,
        "rent90": 2.01,
        "rent180": 2.15,
        "rent360": 3.79,
        "tac": 1.94,
        "participes": 2118
      }
    ],
    "rent30": 1.42,
    "rent90": 2.2,
    "rent180": 2.64,
    "rent360": 4.92,
    "defaultSerie": "B"
  },
  {
    "name": "Security Defensivo",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "APV DIGITAL",
        "rent30": 0.98,
        "rent90": 2.04,
        "rent180": 3,
        "rent360": 5.41,
        "tac": 0.76,
        "participes": 45
      },
      {
        "serie": "APV",
        "rent30": 0.97,
        "rent90": 2.01,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.86,
        "participes": 11
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.94,
        "rent90": 1.91,
        "rent180": 2.74,
        "rent360": 4.9,
        "tac": 1.26,
        "participes": 412
      },
      {
        "serie": "A",
        "rent30": 0.92,
        "rent90": 1.84,
        "rent180": 2.61,
        "rent360": 4.63,
        "tac": 1.52,
        "participes": 329
      }
    ],
    "rent30": 0.94,
    "rent90": 1.91,
    "rent180": 2.74,
    "rent360": 4.9,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Security Deuda Internacional",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": -1.7,
        "rent90": -0.62,
        "rent180": 0.81,
        "rent360": 6.24,
        "tac": 0.08,
        "participes": 3
      },
      {
        "serie": "FO",
        "rent30": -1.75,
        "rent90": -0.8,
        "rent180": 0.45,
        "rent360": 5.51,
        "tac": 0.78,
        "participes": 8
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": -1.79,
        "rent90": -0.93,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.28,
        "participes": 8
      },
      {
        "serie": "APV",
        "rent30": -1.79,
        "rent90": -0.95,
        "rent180": 0.15,
        "rent360": 4.89,
        "tac": 1.38,
        "participes": 61
      },
      {
        "serie": "B",
        "rent30": -1.82,
        "rent90": -1.05,
        "rent180": -0.04,
        "rent360": 4.5,
        "tac": 1.75,
        "participes": 126
      },
      {
        "serie": "A",
        "rent30": -1.89,
        "rent90": -1.29,
        "rent180": -0.51,
        "rent360": 3.53,
        "tac": 2.7,
        "participes": 228
      }
    ],
    "rent30": -1.82,
    "rent90": -1.05,
    "rent180": -0.04,
    "rent360": 4.5,
    "defaultSerie": "B"
  },
  {
    "name": "Security Mid Term",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": 0.75,
        "rent90": 1.7,
        "rent180": 2.81,
        "rent360": 5.55,
        "tac": 0.07,
        "participes": 3
      },
      {
        "serie": "J",
        "rent30": 0.74,
        "rent90": 1.64,
        "rent180": 2.69,
        "rent360": 5.32,
        "tac": 0.29,
        "participes": 1
      },
      {
        "serie": "I-APV",
        "rent30": 0.7,
        "rent90": 1.52,
        "rent180": 2.45,
        "rent360": 4.82,
        "tac": 0.77,
        "participes": 684
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": 0.67,
        "rent90": 1.42,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.16,
        "participes": 8
      },
      {
        "serie": "B",
        "rent30": 0.66,
        "rent90": 1.39,
        "rent180": 2.22,
        "rent360": 4.39,
        "tac": 1.29,
        "participes": 458
      },
      {
        "serie": "A",
        "rent30": 0.6,
        "rent90": 1.19,
        "rent180": 1.8,
        "rent360": 3.54,
        "tac": 2.03,
        "participes": 2304
      }
    ],
    "rent30": 0.66,
    "rent90": 1.39,
    "rent180": 2.22,
    "rent360": 4.39,
    "defaultSerie": "B"
  },
  {
    "name": "Security Mid Term Global",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": 0.58,
        "rent90": 1.49,
        "rent180": 2.5,
        "rent360": 4.82,
        "tac": 0.05,
        "participes": 1
      },
      {
        "serie": "FO",
        "rent30": 0.53,
        "rent90": 1.31,
        "rent180": 2.15,
        "rent360": 4.42,
        "tac": 0.76,
        "participes": 11
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": 0.49,
        "rent90": 1.2,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.26,
        "participes": 16
      },
      {
        "serie": "B",
        "rent30": 0.47,
        "rent90": 1.14,
        "rent180": 1.92,
        "rent360": 4.08,
        "tac": 1.56,
        "participes": 69
      },
      {
        "serie": "A",
        "rent30": 0.43,
        "rent90": 1.03,
        "rent180": 1.78,
        "rent360": 3.89,
        "tac": 2.04,
        "participes": 642
      }
    ],
    "rent30": 0.47,
    "rent90": 1.14,
    "rent180": 1.92,
    "rent360": 4.08,
    "defaultSerie": "B"
  },
  {
    "name": "Security Plus",
    "provider": "Security",
    "currency": "CLP",
    "category": "deuda",
    "risk": 2,
    "series": [
      {
        "serie": "S",
        "rent30": 0.36,
        "rent90": 1.22,
        "rent180": 2.45,
        "rent360": 4.98,
        "tac": 0.09,
        "participes": 9
      },
      {
        "serie": "E",
        "rent30": 0.33,
        "rent90": 1.12,
        "rent180": 2.24,
        "rent360": 4.56,
        "tac": 0.52,
        "participes": 44
      },
      {
        "serie": "D",
        "rent30": 0.31,
        "rent90": 1.07,
        "rent180": 2.14,
        "rent360": 4.36,
        "tac": 0.8,
        "participes": 156
      },
      {
        "serie": "C",
        "rent30": 0.29,
        "rent90": 0.99,
        "rent180": 1.99,
        "rent360": 4.06,
        "tac": 1.04,
        "participes": 207
      },
      {
        "serie": "B",
        "rent30": 0.28,
        "rent90": 0.96,
        "rent180": 1.93,
        "rent360": 3.94,
        "tac": 1.08,
        "participes": 1397
      },
      {
        "serie": "A",
        "rent30": 0.27,
        "rent90": 0.92,
        "rent180": 1.83,
        "rent360": 3.75,
        "tac": 1.32,
        "participes": 7758
      }
    ],
    "rent30": 0.28,
    "rent90": 0.96,
    "rent180": 1.93,
    "rent360": 3.94,
    "defaultSerie": "B"
  },
  {
    "name": "Security Balanceado Estratégico",
    "provider": "Security",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "INSTITUCIONAL",
        "rent30": 0,
        "rent90": -0.53,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "S",
        "rent30": 0.5,
        "rent90": 1.5,
        "rent180": 3.3,
        "rent360": 15.15,
        "tac": 0.09,
        "participes": 2
      },
      {
        "serie": "J",
        "rent30": 0.46,
        "rent90": 1.36,
        "rent180": 3.01,
        "rent360": 14.53,
        "tac": 0.64,
        "participes": 4
      },
      {
        "serie": "I-APV",
        "rent30": 0.39,
        "rent90": 1.11,
        "rent180": 2.52,
        "rent360": 13.46,
        "tac": 1.59,
        "participes": 585
      },
      {
        "serie": "B",
        "rent30": 0.35,
        "rent90": 0.99,
        "rent180": 2.26,
        "rent360": 12.9,
        "tac": 2.08,
        "participes": 426
      },
      {
        "serie": "A",
        "rent30": 0.33,
        "rent90": 0.92,
        "rent180": 2.13,
        "rent360": 12.61,
        "tac": 2.35,
        "participes": 7322
      }
    ],
    "rent30": 0.35,
    "rent90": 0.99,
    "rent180": 2.26,
    "rent360": 12.9,
    "defaultSerie": "B"
  },
  {
    "name": "Security Digital Balanceado",
    "provider": "Security",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV DIGITAL",
        "rent30": 0.45,
        "rent90": 1.3,
        "rent180": 2.74,
        "rent360": 12.71,
        "tac": 0.78,
        "participes": 113
      },
      {
        "serie": "DIGITAL",
        "rent30": 0.41,
        "rent90": 1.17,
        "rent180": 2.48,
        "rent360": 12.17,
        "tac": 1.26,
        "participes": 672
      },
      {
        "serie": "APV",
        "rent30": 0.4,
        "rent90": 1.15,
        "rent180": 2.43,
        "rent360": 12.05,
        "tac": 1.37,
        "participes": 4
      },
      {
        "serie": "A",
        "rent30": 0.35,
        "rent90": 0.97,
        "rent180": 2.06,
        "rent360": 11.27,
        "tac": 2.09,
        "participes": 85
      }
    ],
    "rent30": 0.41,
    "rent90": 1.17,
    "rent180": 2.48,
    "rent360": 12.17,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Security Digital Conservador",
    "provider": "Security",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "APV DIGITAL",
        "rent30": 1.13,
        "rent90": 2.52,
        "rent180": 3.01,
        "rent360": 9.38,
        "tac": 0.78,
        "participes": 77
      },
      {
        "serie": "APV",
        "rent30": 1.09,
        "rent90": 2.4,
        "rent180": 2.78,
        "rent360": 8.9,
        "tac": 1.23,
        "participes": 3
      },
      {
        "serie": "DIGITAL",
        "rent30": 1.09,
        "rent90": 2.39,
        "rent180": 2.76,
        "rent360": 8.86,
        "tac": 1.27,
        "participes": 489
      },
      {
        "serie": "A",
        "rent30": 1.05,
        "rent90": 2.27,
        "rent180": 2.51,
        "rent360": 8.34,
        "tac": 1.76,
        "participes": 128
      }
    ],
    "rent30": 1.09,
    "rent90": 2.39,
    "rent180": 2.76,
    "rent360": 8.86,
    "defaultSerie": "DIGITAL"
  },
  {
    "name": "Security Conservador Estratégico",
    "provider": "Security",
    "currency": "CLP",
    "category": "balanceado",
    "risk": 3,
    "series": [
      {
        "serie": "S",
        "rent30": 1.19,
        "rent90": 2.73,
        "rent180": 4.02,
        "rent360": 10.31,
        "tac": 0.09,
        "participes": 2
      },
      {
        "serie": "J",
        "rent30": 1.15,
        "rent90": 2.59,
        "rent180": 3.73,
        "rent360": 9.71,
        "tac": 0.63,
        "participes": 1
      },
      {
        "serie": "I-APV",
        "rent30": 1.09,
        "rent90": 2.39,
        "rent180": 3.34,
        "rent360": 8.9,
        "tac": 1.39,
        "participes": 622
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": 1.07,
        "rent90": 2.31,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.69,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": 1.06,
        "rent90": 2.29,
        "rent180": 3.14,
        "rent360": 8.5,
        "tac": 1.76,
        "participes": 259
      },
      {
        "serie": "A",
        "rent30": 1.02,
        "rent90": 2.16,
        "rent180": 2.86,
        "rent360": 7.87,
        "tac": 2.28,
        "participes": 1013
      }
    ],
    "rent30": 1.06,
    "rent90": 2.29,
    "rent180": 3.14,
    "rent360": 8.5,
    "defaultSerie": "B"
  },
  {
    "name": "Security Index Fund S&p/clx IPSA",
    "provider": "Security",
    "currency": "CLP",
    "category": "accionario",
    "risk": 4,
    "series": [
      {
        "serie": "J",
        "rent30": 0,
        "rent90": 6.86,
        "rent180": 23.14,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "S",
        "rent30": 3.09,
        "rent90": 0.8,
        "rent180": 16.45,
        "rent360": 37.08,
        "tac": 0.11,
        "participes": 4
      },
      {
        "serie": "D",
        "rent30": 3.07,
        "rent90": 0.76,
        "rent180": 16.37,
        "rent360": 36.87,
        "tac": 0.26,
        "participes": 2
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": 3.03,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0.81,
        "participes": 840
      },
      {
        "serie": "B",
        "rent30": 2.98,
        "rent90": 0.44,
        "rent180": 15.63,
        "rent360": 35.19,
        "tac": 1.51,
        "participes": 781
      },
      {
        "serie": "I-APV",
        "rent30": 2.91,
        "rent90": 0.24,
        "rent180": 15.17,
        "rent360": 34.12,
        "tac": 2.3,
        "participes": 1217
      },
      {
        "serie": "A",
        "rent30": 2.85,
        "rent90": 0.04,
        "rent180": 14.73,
        "rent360": 33.13,
        "tac": 3.05,
        "participes": 1262
      }
    ],
    "rent30": 2.98,
    "rent90": 0.44,
    "rent180": 15.63,
    "rent360": 35.19,
    "defaultSerie": "B"
  },
  {
    "name": "Security Latam",
    "provider": "Security",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "S",
        "rent30": 2.7,
        "rent90": 15.11,
        "rent180": 25.58,
        "rent360": 63.52,
        "tac": 0.88,
        "participes": 5
      },
      {
        "serie": "J",
        "rent30": 2.64,
        "rent90": 14.88,
        "rent180": 25.09,
        "rent360": 62.28,
        "tac": 1.4,
        "participes": 1
      },
      {
        "serie": "FO",
        "rent30": 2.62,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.57,
        "participes": 6
      },
      {
        "serie": "B",
        "rent30": 2.53,
        "rent90": 14.5,
        "rent180": 24.28,
        "rent360": 60.35,
        "tac": 2.34,
        "participes": 206
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": 2.53,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 2.71,
        "participes": 1
      },
      {
        "serie": "A",
        "rent30": 2.36,
        "rent90": 13.85,
        "rent180": 22.76,
        "rent360": 56.24,
        "tac": 5.16,
        "participes": 381
      }
    ],
    "rent30": 2.53,
    "rent90": 14.5,
    "rent180": 24.28,
    "rent360": 60.35,
    "defaultSerie": "B"
  },
  {
    "name": "Security Asia Emergente",
    "provider": "Security",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "S",
        "rent30": -6.7,
        "rent90": 0.75,
        "rent180": 5.59,
        "rent360": 35.47,
        "tac": 0.08,
        "participes": 5
      },
      {
        "serie": "J",
        "rent30": -6.75,
        "rent90": 0.55,
        "rent180": 5.18,
        "rent360": 34.44,
        "tac": 0.87,
        "participes": 1
      },
      {
        "serie": "I-APV",
        "rent30": -6.85,
        "rent90": 0.21,
        "rent180": 4.47,
        "rent360": 32.68,
        "tac": 2.18,
        "participes": 296
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": -6.85,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 2.18,
        "participes": 1
      },
      {
        "serie": "B",
        "rent30": -6.87,
        "rent90": 0.14,
        "rent180": 4.33,
        "rent360": 32.31,
        "tac": 2.49,
        "participes": 113
      },
      {
        "serie": "A",
        "rent30": -7.03,
        "rent90": -0.43,
        "rent180": 3.17,
        "rent360": 29.44,
        "tac": 4.68,
        "participes": 249
      }
    ],
    "rent30": -6.87,
    "rent90": 0.14,
    "rent180": 4.33,
    "rent360": 32.31,
    "defaultSerie": "B"
  },
  {
    "name": "Security Acciones EEUU",
    "provider": "Security",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "S",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "J",
        "rent30": -4.61,
        "rent90": -6.62,
        "rent180": -1.68,
        "rent360": 33.48,
        "tac": 0.86,
        "participes": 2
      },
      {
        "serie": "I-APV",
        "rent30": -4.68,
        "rent90": -6.86,
        "rent180": -2.19,
        "rent360": 32.13,
        "tac": 1.89,
        "participes": 1049
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": -4.71,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 2.19,
        "participes": 40
      },
      {
        "serie": "B",
        "rent30": -4.73,
        "rent90": -7,
        "rent180": -2.47,
        "rent360": 31.37,
        "tac": 2.47,
        "participes": 632
      },
      {
        "serie": "A",
        "rent30": -4.9,
        "rent90": -7.55,
        "rent180": -3.61,
        "rent360": 28.39,
        "tac": 4.79,
        "participes": 1318
      }
    ],
    "rent30": -4.73,
    "rent90": -7,
    "rent180": -2.47,
    "rent360": 31.37,
    "defaultSerie": "B"
  },
  {
    "name": "Security Agresivo Estratégico",
    "provider": "Security",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "S",
        "rent30": -0.09,
        "rent90": 0.7,
        "rent180": 2.09,
        "rent360": 24.15,
        "tac": 0.09,
        "participes": 4
      },
      {
        "serie": "J",
        "rent30": -0.13,
        "rent90": 0.56,
        "rent180": 1.81,
        "rent360": 23.47,
        "tac": 0.64,
        "participes": 1
      },
      {
        "serie": "INSTITUCIONAL",
        "rent30": -0.22,
        "rent90": 0.26,
        "rent180": 0,
        "rent360": 0,
        "tac": 1.84,
        "participes": 4
      },
      {
        "serie": "I-APV",
        "rent30": -0.26,
        "rent90": 0.14,
        "rent180": 0.97,
        "rent360": 21.47,
        "tac": 2.29,
        "participes": 1711
      },
      {
        "serie": "B",
        "rent30": -0.27,
        "rent90": 0.09,
        "rent180": 0.88,
        "rent360": 21.26,
        "tac": 2.49,
        "participes": 448
      },
      {
        "serie": "A",
        "rent30": -0.34,
        "rent90": -0.14,
        "rent180": 0.36,
        "rent360": 19.93,
        "tac": 3.39,
        "participes": 926
      }
    ],
    "rent30": -0.27,
    "rent90": 0.09,
    "rent180": 0.88,
    "rent360": 21.26,
    "defaultSerie": "B"
  },
  {
    "name": "Security Europa Estratégico",
    "provider": "Security",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "INSTITUCIONAL",
        "rent30": 0,
        "rent90": 0,
        "rent180": 0,
        "rent360": 0,
        "tac": 0,
        "participes": 0
      },
      {
        "serie": "S",
        "rent30": -5.12,
        "rent90": -2.99,
        "rent180": 3.18,
        "rent360": 23.93,
        "tac": 0.09,
        "participes": 4
      },
      {
        "serie": "J",
        "rent30": -5.18,
        "rent90": -3.18,
        "rent180": 2.78,
        "rent360": 22.99,
        "tac": 0.86,
        "participes": 1
      },
      {
        "serie": "I-APV",
        "rent30": -5.25,
        "rent90": -3.43,
        "rent180": 2.25,
        "rent360": 21.74,
        "tac": 1.89,
        "participes": 116
      },
      {
        "serie": "B",
        "rent30": -5.3,
        "rent90": -3.58,
        "rent180": 1.95,
        "rent360": 21.05,
        "tac": 2.47,
        "participes": 46
      },
      {
        "serie": "A",
        "rent30": -5.46,
        "rent90": -4.12,
        "rent180": 0.81,
        "rent360": 18.42,
        "tac": 4.65,
        "participes": 132
      }
    ],
    "rent30": -5.3,
    "rent90": -3.58,
    "rent180": 1.95,
    "rent360": 21.05,
    "defaultSerie": "B"
  },
  {
    "name": "Security Digital Agresivo",
    "provider": "Security",
    "currency": "CLP",
    "category": "accionario",
    "risk": 5,
    "series": [
      {
        "serie": "APV DIGITAL",
        "rent30": -0.15,
        "rent90": 0.49,
        "rent180": 2.3,
        "rent360": 18.95,
        "tac": 0.8,
        "participes": 99
      },
      {
        "serie": "DIGITAL",
        "rent30": -0.19,
        "rent90": 0.37,
        "rent180": 2.06,
        "rent360": 18.4,
        "tac": 1.31,
        "participes": 359
      },
      {
        "serie": "A",
        "rent30": -0.26,
        "rent90": 0.14,
        "rent180": 1.59,
        "rent360": 17.34,
        "tac": 2.28,
        "participes": 42
      }
    ],
    "rent30": -0.19,
    "rent90": 0.37,
    "rent180": 2.06,
    "rent360": 18.4,
    "defaultSerie": "DIGITAL"
  }
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
  "Banchile":{"url":"https://sitiospublicos.bancochile.cl/banchileinversiones/fondos-mutuos","digital":true,"minInvest":"$1.000","desc":"Administradora del Banco de Chile. Mayor patrimonio administrado del país."},
  "BancoEstado":{"url":"https://www.bancoestado.cl/fondosmutuos","digital":true,"minInvest":"$5.000","desc":"El banco estatal. Montos mínimos bajos y cobertura nacional."},
  "Scotiabank":{"url":"https://www.scotiabankchile.cl/Inversiones/fondos-mutuos","digital":true,"minInvest":"$10.000","desc":"Banco internacional con presencia en Chile."},
  "Santander":{"url":"https://www.santander.cl/personas/inversiones/fondos-mutuos","digital":true,"minInvest":"$5.000","desc":"Banco global con amplia gama de fondos."},
  "Itaú":{"url":"https://www.itau.cl/inversiones","digital":true,"minInvest":"$10.000","desc":"Banco brasileño con operaciones en Chile. Buena oferta digital."},
  "Fintual":{"url":"https://fintual.cl","digital":true,"minInvest":"$1","desc":"100% digital, sin mínimos. Comisión única de 1.19%. La opción fintech."},
  "Security":{"url":"https://www.inversionessecurity.cl/","digital":true,"minInvest":"$10.000","desc":"Grupo financiero chileno con fondos para distintos perfiles."},
  "BICE":{"url":"https://banco.bice.cl/inversiones/fondos-mutuos","digital":true,"minInvest":"$1","desc":"Grupo BICE. Sin monto mínimo en series digitales. 100% online."},
  "LarrainVial":{"url":"https://www.larrainvial.com","digital":true,"minInvest":"$100.000","desc":"La corredora más grande de Chile. Fondos premium."}
};

const DATA_DATE = "2026-03-28";
