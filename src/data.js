const data = [
  { "infinitive": "bid", "past": "bid", "participle": "bid", "translate": "ofrecer, licitar", "group": 1 },
  { "infinitive": "fit", "past": "fit", "participle": "fit", "translate": "encajar", "group": 1 },
  { "infinitive": "hit", "past": "hit", "participle": "hit", "translate": "golpear", "group": 1 },
  { "infinitive": "quit", "past": "quit", "participle": "quit", "translate": "abandonar", "group": 1 },
  { "infinitive": "rid", "past": "rid", "participle": "rid", "translate": "deshacerse, botar", "group": 1 },
  { "infinitive": "split", "past": "split", "participle": "split", "translate": "dividir", "group": 1 },
  { "infinitive": "slit", "past": "slit", "participle": "slit", "translate": "rajar, cortar", "group": 1 },
  { "infinitive": "let", "past": "let", "participle": "let", "translate": "dejar", "group": 1 },
  { "infinitive": "set", "past": "set", "participle": "set", "translate": "insertar, poner", "group": 1 },
  { "infinitive": "wet", "past": "wet", "participle": "wet", "translate": "lavar", "group": 1 },
  { "infinitive": "bet", "past": "bet", "participle": "bet", "translate": "apostar", "group": 1 },
  { "infinitive": "spread", "past": "spread", "participle": "spread", "translate": "esparcirse, esparcir, abrir", "group": 2  },
  { "infinitive": "sweat", "past": "sweat", "participle": "sweat", "translate": "sudar", "group": 2  },
  { "infinitive": "beat", "past": "beat", "participle": "beat", "translate": "golpear", "group": 2  },
  { "infinitive": "put", "past": "put", "participle": "put", "translate": "poner", "group": 2  },
  { "infinitive": "cut", "past": "cut", "participle": "cut", "translate": "cortar", "group": 2  },
  { "infinitive": "shut", "past": "shut", "participle": "shut", "translate": "cerrar", "group": 2  },
  { "infinitive": "thrust", "past": "thrust", "participle": "thrust", "translate": "introducir, insertar", "group": 2  },
  { "infinitive": "cost", "past": "cost", "participle": "cost", "translate": "costar", "group": 2  },
  { "infinitive": "hurt", "past": "hurt", "participle": "hurt", "translate": "lastimar, herir", "group": 2  },
  { "infinitive": "burst", "past": "burst", "participle": "burst", "translate": "reventar", "group": 2  },
  { "infinitive": "cast", "past": "cast", "participle": "cast", "translate": "reparto, elenco, fundir", "group": 2  },
  { "infinitive": "broadcast", "past": "broadcast", "participle": "broadcast", "translate": "transmitir", "group": 2  },
  { "infinitive": "forecast", "past": "forecast", "participle": "forecast", "translate": "predecir", "group": 2  }

]

function groupBy(xs, f) {
  return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
}

const result = groupBy(data, (c) => c.group);

console.log(data)

export default result;

