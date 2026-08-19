// ============================================================
//  LETIYVICFLIX — CATÁLOGO
//  Edita este archivo para añadir, quitar o cambiar títulos.
//  No hace falta tocar nada más: la web se genera sola.
// ============================================================
//
//  Cada título tiene estos campos:
//
//  titulo      : nombre que aparece en la carátula y el modal
//  subtitulo   : texto pequeño bajo el título (ej. "Temporada 2")
//  descripcion : sinopsis de broma que sale al abrirlo
//  etiquetas   : ["Romance", "Comedia"] — chips que salen en el modal
//  match       : número (porcentaje de coincidencia, broma Netflix)
//  anio        : año
//  duracion    : texto libre ("2 temporadas", "1 h 43 min", "∞")
//  tipo        : "video" | "foto" | "texto"
//  archivo     : para video/foto → ruta dentro de /media (ej. "media/roma.mp4")
//                Si el archivo no existe todavía, se muestra un aviso simpático.
//  texto       : para tipo "texto" → el texto que se muestra (admite saltos de línea con \n)
//  portada     : (opcional) imagen para la carátula (ej. "media/portada-roma.jpg").
//                Si no la pones, se genera una carátula bonita automáticamente.
//  color       : (opcional) color base de la carátula generada. Uno de:
//                "rojo", "azul", "verde", "morado", "naranja", "rosa", "dorado", "turquesa"
//  emoji       : (opcional) emoji grande de la carátula generada
//  destacado   : true → aparece en el banner grande de arriba (solo uno)
//
// ------------------------------------------------------------

const PERFIL = {
  nombre: "Leti y Vic",
  // Frase que sale en el banner si el destacado no tiene descripción propia
  eslogan: "Todo nuestro universo, en streaming. Sin anuncios (casi).",
};

// Perfiles de la pantalla "¿Quién está viendo?"
// Añade o quita los que quieras (nombre + emoji del avatar).
// Si un perfil lleva "clave", sale con candado y pide esa clave
// para entrar (da igual las mayúsculas/minúsculas).
const PERFILES = [
  { nombre: "Viajes", emoji: "✈️", clave: "ESPRITSEL25" },
  { nombre: "LetiyVic", emoji: "❤️", clave: "MOTILLA1" },
  { nombre: "Risas", emoji: "😂", clave: "CHICOTE123" },
];

const CATALOGO = [
  {
    fila: "Series originales de LetiyvicFlix",
    items: [
      {
        titulo: "El viaje a Roma",
        subtitulo: "Temporada 2",
        descripcion:
          "Dos aventureros, una ciudad eterna y un GPS que nunca funciona. En esta temporada: más helado, más escaleras y la misteriosa desaparición de un cargador de móvil.",
        etiquetas: ["Aventura", "Romance", "Turismo extremo"],
        match: 98,
        anio: 2025,
        duracion: "2 temporadas",
        tipo: "foto",
        archivo: "media/roma.jpg",
        color: "dorado",
        emoji: "🏛️",
        destacado: true,
      },
      {
        titulo: "Los lunes de sofá",
        subtitulo: "Serie infinita",
        descripcion:
          "Un documental sobre dos personas, una manta y la eterna pregunta: ¿qué vemos hoy? Spoiler: tardan 45 minutos en decidir y se quedan dormidos.",
        etiquetas: ["Documental", "Slice of life"],
        match: 100,
        anio: 2024,
        duracion: "∞ temporadas",
        tipo: "texto",
        texto:
          "EPISODIO TIPO DE 'LOS LUNES DE SOFÁ'\n\n21:02 — «¿Qué vemos?»\n21:14 — Scroll infinito por el catálogo.\n21:31 — «Elige tú.» «No, elige tú.»\n21:47 — Empieza una serie nueva.\n21:59 — Primera cabezada detectada.\n22:15 — Los dos dormidos. La serie sigue sola.\n\nFIN DEL EPISODIO. (Se repite todos los lunes.)",
        color: "morado",
        emoji: "🛋️",
      },
      {
        titulo: "Cocinas peligrosas",
        subtitulo: "Temporada 1",
        descripcion:
          "Reality de alto riesgo: recetas de internet, humo en la cocina y la crítica gastronómica más dura del mundo (la otra persona).",
        etiquetas: ["Reality", "Suspense culinario"],
        match: 87,
        anio: 2025,
        duracion: "8 episodios",
        tipo: "foto",
        archivo: "media/cocina.jpg",
        color: "naranja",
        emoji: "🍳",
      },
      {
        titulo: "Operación Ikea",
        subtitulo: "Miniserie",
        descripcion:
          "Un mueble. Cuarenta y siete tornillos. Dos manuales interpretados de forma opuesta. Solo uno saldrá con la razón (y no será ninguno).",
        etiquetas: ["Thriller", "Bricolaje"],
        match: 91,
        anio: 2024,
        duracion: "Miniserie · 3 episodios",
        tipo: "texto",
        texto:
          "TRANSCRIPCIÓN OFICIAL — OPERACIÓN IKEA\n\n«Esto se monta en 20 minutos.»\n(2 horas después)\n«¿Por qué sobran 4 tornillos?»\n«Eso es que hemos optimizado.»\n\nEl mueble sigue en pie a día de hoy. Nadie sabe cómo.",
        color: "azul",
        emoji: "🔧",
      },
    ],
  },
  {
    fila: "Películas",
    items: [
      {
        titulo: "La primera cita",
        subtitulo: "El clásico",
        descripcion:
          "Basada en hechos reales. Dos desconocidos, muchos nervios y una conversación que no quería terminar.",
        etiquetas: ["Romance", "Clásico"],
        match: 99,
        anio: 2023,
        duracion: "1 h 58 min",
        tipo: "foto",
        archivo: "media/primera-cita.jpg",
        color: "rosa",
        emoji: "💘",
      },
      {
        titulo: "Rápidos y dormilones",
        subtitulo: "La saga",
        descripcion:
          "La emoción de poner la alarma a las 7:00. La adrenalina de posponerla nueve veces. Una historia de velocidad… para llegar tarde igualmente.",
        etiquetas: ["Acción", "Comedia"],
        match: 84,
        anio: 2025,
        duracion: "1 h 12 min",
        tipo: "texto",
        texto:
          "RÁPIDOS Y DORMILONES\n\n07:00 — Alarma.\n07:09 — «Cinco minutos más.»\n07:45 — Modo turbo activado.\n07:58 — Récord mundial de desayuno.\n08:03 — «Si salimos ya, llegamos.»\n\n(No llegaron.)",
        color: "rojo",
        emoji: "⏰",
      },
      {
        titulo: "El señor de las croquetas",
        subtitulo: "Edición extendida",
        descripcion:
          "Una croqueta para gobernarlas a todas. Épica batalla por la última de la bandeja.",
        etiquetas: ["Fantasía épica", "Gastronomía"],
        match: 96,
        anio: 2024,
        duracion: "2 h 30 min",
        tipo: "foto",
        archivo: "media/croquetas.jpg",
        color: "verde",
        emoji: "🥘",
      },
      {
        titulo: "Perdidos (otra vez)",
        subtitulo: "Basada en hechos reales",
        descripcion:
          "«Yo me oriento genial.» Diez minutos después estaban en la otra punta de la ciudad. Nominada a mejor discusión sobre un mapa.",
        etiquetas: ["Aventura", "Drama leve"],
        match: 89,
        anio: 2025,
        duracion: "1 h 40 min",
        tipo: "video",
        archivo: "media/perdidos.mp4",
        color: "turquesa",
        emoji: "🧭",
      },
    ],
  },
  {
    fila: "Continuar viendo",
    items: [
      {
        titulo: "Nuestra playlist",
        subtitulo: "Concierto en directo",
        descripcion:
          "Dos estrellas del pop (en el coche). Afinación cuestionable, entrega absoluta.",
        etiquetas: ["Musical", "Karaoke"],
        match: 93,
        anio: 2025,
        duracion: "Directo",
        tipo: "video",
        archivo: "media/karaoke.mp4",
        color: "morado",
        emoji: "🎤",
        progreso: 62, // % visto (barra roja de "Continuar viendo")
      },
      {
        titulo: "Cartas desde el sofá",
        subtitulo: "Especial",
        descripcion: "Un mensaje importante. Ábrelo.",
        etiquetas: ["Especial", "Solo para ti"],
        match: 100,
        anio: 2026,
        duracion: "Lo que tú quieras",
        tipo: "texto",
        texto:
          "Hola:\n\nEste hueco está reservado para escribir algo bonito de verdad.\nEdita el archivo data.js, busca «Cartas desde el sofá» y cambia este texto por el tuyo.\n\nCon cariño,\nLa dirección de LetiyvicFlix",
        color: "rojo",
        emoji: "💌",
        progreso: 15,
      },
    ],
  },
];
