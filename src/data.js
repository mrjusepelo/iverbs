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
  { "infinitive": "forecast", "past": "forecast", "participle": "forecast", "translate": "predecir", "group": 2  },
  { "infinitive": "keep", "past": "kept", "participle": "kept", "translate": "mantener", "group": 3  },
  { "infinitive": "sleep", "past": "slept", "participle": "slept", "translate": "dormir", "group": 3  },
  { "infinitive": "weep", "past": "wept", "participle": "wept", "translate": "llorar, berriar", "group": 3  },
  { "infinitive": "feel", "past": "felt", "participle": "felt", "translate": "sentir", "group": 3  },
  { "infinitive": "kneel", "past": "knelt", "participle": "knelt", "translate": "arrodillarse", "group": 3  },
  { "infinitive": "meet", "past": "met", "participle": "met", "translate": "reunir", "group": 3  },
  { "infinitive": "lead", "past": "led", "participle": "led", "translate": "guiar", "group": 3  },
  { "infinitive": "feed", "past": "fed", "participle": "fed", "translate": "alimentar", "group": 3  },
  { "infinitive": "bleed", "past": "bled", "participle": "bled", "translate": "sangrar", "group": 3  },
  { "infinitive": "speed", "past": "sped", "participle": "sped", "translate": "velocidad", "group": 3  },
  { "infinitive": "deal", "past": "dealt", "participle": "dealt", "translate": "negociar, trato", "group": 3  },
  { "infinitive": "lean", "past": "leant", "participle": "leant", "translate": "inclinar", "group": 3  },
  { "infinitive": "mean", "past": "meant", "participle": "meant", "translate": "significar", "group": 3  },
  { "infinitive": "leap", "past": "leapt", "participle": "leapt", "translate": "brincar", "group": 3  },
  { "infinitive": "dream", "past": "dreamt", "participle": "dreamt", "translate": "soñar", "group": 3  },
  { "infinitive": "read", "past": "read", "participle": "read", "translate": "leer", "group": 3  },
  { "infinitive": "hear", "past": "heard", "participle": "heard", "translate": "escuchar", "group": 3  },
  { "infinitive": "learn", "past": "learnt", "participle": "learnt", "translate": "aprender", "group": 3  },
  { "infinitive": "find", "past": "found", "participle": "found", "translate": "encontrar", "group": 4  },
  { "infinitive": "bind", "past": "bound", "participle": "bound", "translate": "atar", "group": 4  },
  { "infinitive": "grind", "past": "ground", "participle": "ground", "translate": "moler", "group": 4  },
  { "infinitive": "wind", "past": "wound", "participle": "wound", "translate": "viento", "group": 4  },
  { "infinitive": "unwind", "past": "unwound", "participle": "unwound", "translate": "relajarse", "group": 4  },
  { "infinitive": "unbind", "past": "unbound", "participle": "unbround", "translate": "desatar", "group": 4  },
  { "infinitive": "send", "past": "sent", "participle": "sent", "translate": "desatar", "group": 4  },
  { "infinitive": "spend", "past": "spent", "participle": "spent", "translate": "gastar", "group": 4  },
  { "infinitive": "bend", "past": "bent", "participle": "bent", "translate": "doblarse", "group": 4  },
  { "infinitive": "blend", "past": "blent", "participle": "blent", "translate": "mezclar", "group": 4  },
  { "infinitive": "lend", "past": "lent", "participle": "lent", "translate": "prestar", "group": 4  }

]

function groupBy(xs, f) {
   // eslint-disable-next-line
  return xs.reduce((r, v, i, a, k = f(v)) => ((r[k] || (r[k] = [])).push(v), r), {});
}

const result = groupBy(data, (c) => c.group);

console.log(data)

export default result;

