// ============================================================
//  LETIYVICFLIX — CATÁLOGO
//  Edita este archivo para añadir, quitar o cambiar títulos.
//  No hace falta tocar nada más: la web se genera sola.
// ============================================================
//
//  ORGANIZACIÓN DE ARCHIVOS (fotos y vídeos):
//    media/viajes/<destino>/ → contenido de la fila "Viajes"
//    media/letiyvic/         → contenido de la fila "Momentos LetiyVic"
//    media/risas/            → contenido de la fila "Risas"
//  ¡OJO! En la web publicada las rutas distinguen mayúsculas:
//  usa nombres de archivo en minúsculas y sin espacios ni acentos.
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
//  tipo        : "video" | "foto" | "texto" | "galeria"
//  archivo     : para video/foto → ruta dentro de /media
//  archivos    : para tipo "galeria" → lista de rutas; se ven como
//                pase de fotos con flechas (admite .mp4 mezclados)
//  texto       : para tipo "texto" → el texto que se muestra
//  portada     : (opcional) imagen para la carátula. Si no la pones,
//                se genera una carátula bonita automáticamente.
//  portadaFila : (opcional) foto distinta para la carátula de la fila
//                normal, para que no se repita con la del Top.
//  color       : (opcional) color base de la carátula generada. Uno de:
//                "rojo", "azul", "verde", "morado", "naranja", "rosa",
//                "dorado", "turquesa"
//  emoji       : (opcional) emoji grande de la carátula generada
//  destacado   : true → aparece en el banner grande (uno por perfil)
//  progreso    : (opcional) % visto → muestra la barra roja debajo
//
// ------------------------------------------------------------

const PERFIL = {
  nombre: "Leti y Vic",
  // Frase que sale en el banner si el destacado no tiene descripción propia
  eslogan: "Todo nuestro universo, en streaming. Sin anuncios (casi).",
};

// Perfiles de la pantalla "¿Quién está viendo?"
// Si un perfil lleva "clave", sale con candado y pide esa clave
// para entrar (da igual las mayúsculas/minúsculas).
// "filas" indica qué filas del catálogo ve ese perfil (por su nombre
// exacto). Un perfil sin "filas" lo vería todo.
// "foto" (opcional): imagen para el avatar; si no la pones, sale el emoji.
const PERFILES = [
  { nombre: "Viajes", emoji: "✈️", foto: "media/viajes/paris/img_1049.jpg", clave: "ESPRITSEL25", filas: ["Viajes"] },
  { nombre: "LetiyVic", emoji: "❤️", foto: "media/letiyvic/img_9078.jpg", clave: "MOTILLA1", filas: ["Momentos LetiyVic"] },
  { nombre: "Risas", emoji: "😂", foto: "media/risas/img_7889.jpg", clave: "CHICOTE123", filas: ["Risas"] },
  { nombre: "Ruta de Pintxos 2026", emoji: "🍢", foto: "media/viajes/pamplona-logrono/img_6448.jpg", clave: "MARYTXER", filas: ["Ruta de Pintxos 2026"] },
];

const CATALOGO = [
  // ==========================================================
  //  FILA 1 — VIAJES  (una galería por destino)
  // ==========================================================
  {
    fila: "Viajes",
    // Título personalizado de la fila Top automática de este perfil
    tituloTop: "Top 9 aventuras",
    items: [
      {
        titulo: "Alsacia: cuento de invierno",
        subtitulo: "La saga completa",
        descripcion:
          "Casitas de colores, mercadillos navideños y un trineo que no era de alquiler. Dos protagonistas, todo el vino caliente de la región… y una escena final que cambió el reparto para siempre: ahora hay un anillo.",
        etiquetas: ["Aventura", "Romance", "Navideña"],
        match: 98,
        anio: 2025,
        duracion: "23 fotos · 6 vídeos",
        tipo: "galeria",
        archivos: ["media/viajes/alsacia/94926bf5-f5d9-4fc9-8249-7512145bfa36.jpg", "media/viajes/alsacia/img_0586.jpg", "media/viajes/alsacia/img_0614.jpg", "media/viajes/alsacia/img_0625.jpg", "media/viajes/alsacia/img_0671.jpg", "media/viajes/alsacia/img_0686.jpg", "media/viajes/alsacia/img_0690.jpg", "media/viajes/alsacia/img_0695.jpg", "media/viajes/alsacia/img_0700.jpg", "media/viajes/alsacia/img_0788.jpg", "media/viajes/alsacia/img_0824.jpg", "media/viajes/alsacia/img_0846.jpg", "media/viajes/alsacia/img_0852.jpg", "media/viajes/alsacia/img_0858.jpg", "media/viajes/alsacia/img_0860.jpg", "media/viajes/alsacia/img_0910.jpg", "media/viajes/alsacia/img_0921.jpg", "media/viajes/alsacia/img_1061.jpg", "media/viajes/alsacia/img_7205.jpg", "media/viajes/alsacia/img_7218.jpg", "media/viajes/alsacia/img_7220.jpg", "media/viajes/alsacia/img_7221.jpg", "media/viajes/alsacia/img_7225.jpg", "media/viajes/alsacia/img_0655.mp4", "media/viajes/alsacia/img_0662.mp4", "media/viajes/alsacia/img_0663.mp4", "media/viajes/alsacia/img_0897.mp4", "media/viajes/alsacia/img_7240.mp4", "media/viajes/alsacia/img_7563.mp4"],
        portada: "media/viajes/alsacia/img_0921.jpg",
        portadaFila: "media/viajes/alsacia/img_0700.jpg",
        color: "dorado",
        emoji: "🎄",
        destacado: true,
      },
      {
        titulo: "Budapest a dos orillas",
        subtitulo: "Buda vs. Pest",
        descripcion:
          "Sol abrasador, un parlamento de postal y la eterna duda: ¿estamos en Buda o en Pest? Nadie lo supo nunca, pero el estofado y el paprika estaban buenísimos.",
        etiquetas: ["Aventura", "Spa", "Historia"],
        match: 95,
        anio: 2025,
        duracion: "13 fotos · 1 vídeo",
        tipo: "galeria",
        archivos: ["media/viajes/budapest/12abba6b-329c-4248-a0ea-3fcdafd2309f.jpg", "media/viajes/budapest/1f775240-4889-4f25-98c7-9ce459e81390.jpg", "media/viajes/budapest/39f2888e-d561-4085-a686-4372394344f8.jpg", "media/viajes/budapest/4dab852c-9016-4f62-875f-782c84f160cd.jpg", "media/viajes/budapest/6eb8faa0-dd28-43a8-8314-9988105136ba.jpg", "media/viajes/budapest/74a2a3cd-e49d-4d2c-88f1-2990930e0d40.jpg", "media/viajes/budapest/755558de-6dc5-4894-b03d-459ad49ad840.jpg", "media/viajes/budapest/7b5de31e-8b3e-4fa7-8dbe-2ce0aa9ef4b3.jpg", "media/viajes/budapest/aef055a4-f816-485e-af67-95378d2185f9.jpg", "media/viajes/budapest/b1a98aaf-3f1c-4434-a3ba-fb8278dca26f.jpg", "media/viajes/budapest/d6e0db0e-eccd-4a81-a920-6c04615a4c9f.jpg", "media/viajes/budapest/e4486825-026b-4255-8e25-2c891274d44a.jpg", "media/viajes/budapest/f8eca369-1d80-4a22-8379-32b39f87b6f0.jpg", "media/viajes/budapest/9473175f-cfb4-4931-b4b9-40db7b97d84d.mp4"],
        portada: "media/viajes/budapest/755558de-6dc5-4894-b03d-459ad49ad840.jpg",
        portadaFila: "media/viajes/budapest/12abba6b-329c-4248-a0ea-3fcdafd2309f.jpg",
        color: "azul",
        emoji: "🌉",
      },
      {
        titulo: "Cangas de Onís: la expedición",
        subtitulo: "Edición montañera",
        descripcion:
          "Un puente romano, lagos de Covadonga y unos cachopos que cambiaron vidas. Documental de naturaleza con más comilonas que las recomendadas por la organización.",
        etiquetas: ["Naturaleza", "Gastronomía"],
        match: 93,
        anio: 2025,
        duracion: "7 fotos · 2 vídeos",
        tipo: "galeria",
        archivos: ["media/viajes/cangas-de-onis/5de0d183-d8ed-4f96-83c4-5d209f993415.jpg", "media/viajes/cangas-de-onis/img_6471.jpg", "media/viajes/cangas-de-onis/img_6556.jpg", "media/viajes/cangas-de-onis/img_9268.jpg", "media/viajes/cangas-de-onis/img_9302.jpg", "media/viajes/cangas-de-onis/img_9304.jpg", "media/viajes/cangas-de-onis/img_9320.jpg", "media/viajes/cangas-de-onis/img_9269.mp4", "media/viajes/cangas-de-onis/img_9310.mp4"],
        portada: "media/viajes/cangas-de-onis/img_9268.jpg",
        portadaFila: "media/viajes/cangas-de-onis/img_6471.jpg",
        color: "verde",
        emoji: "🏔️",
      },
      {
        titulo: "Conil: el reencuentro",
        subtitulo: "Temporadas 25 y 26",
        descripcion:
          "La serie que vuelve cada verano. Playa, atardeceres y mucho atún.",
        etiquetas: ["Verano", "Playa", "Romance"],
        match: 96,
        anio: 2026,
        duracion: "2 temporadas · 8 fotos",
        tipo: "galeria",
        archivos: ["media/viajes/conil/7491f24f-d18d-42cb-94d1-5f85be435296.jpg", "media/viajes/conil/img_4323.jpg", "media/viajes/conil/img_4571.jpg", "media/viajes/conil/img_4578.jpg", "media/viajes/conil/img_6422.jpg", "media/viajes/conil/img_8197.jpg", "media/viajes/conil/img_8208.jpg", "media/viajes/conil/img_9295.jpg"],
        portada: "media/viajes/conil/img_8197.jpg",
        portadaFila: "media/viajes/conil/img_4323.jpg",
        color: "naranja",
        emoji: "🏖️",
      },
      {
        titulo: "Granada en tres actos",
        subtitulo: "Cortometraje",
        descripcion:
          "Tres fotos, una Alhambra y la revelación de que aquí las tapas vienen solas con la bebida. Corto pero intenso, como una tarde en el Albaicín.",
        etiquetas: ["Historia", "Tapas"],
        match: 91,
        anio: 2025,
        duracion: "3 fotos",
        tipo: "galeria",
        archivos: ["media/viajes/granada/img_2433.jpg", "media/viajes/granada/img_2455.jpg", "media/viajes/granada/img_2458.jpg"],
        portada: "media/viajes/granada/img_2433.jpg",
        portadaFila: "media/viajes/granada/img_2458.jpg",
        color: "rojo",
        emoji: "🌇",
      },
      {
        titulo: "La ruta de los pinchos",
        subtitulo: "Pamplona y Logroño",
        descripcion:
          "Road movie gastronómica. Dos ciudades, una misión: probar todos los pinchos de la calle Laurel y Estafeta sin perder la dignidad. Misión cumplida a medias.",
        etiquetas: ["Road trip", "Gastronomía"],
        match: 94,
        anio: 2025,
        duracion: "5 fotos · 3 vídeos",
        tipo: "galeria",
        archivos: ["media/viajes/pamplona-logrono/img_6337.jpg", "media/viajes/pamplona-logrono/img_6348.jpg", "media/viajes/pamplona-logrono/img_6365.jpg", "media/viajes/pamplona-logrono/img_6391.jpg", "media/viajes/pamplona-logrono/img_6448.jpg", "media/viajes/pamplona-logrono/img_6325.mp4", "media/viajes/pamplona-logrono/img_6388.mp4", "media/viajes/pamplona-logrono/img_6389.mp4"],
        portada: "media/viajes/pamplona-logrono/img_6365.jpg",
        portadaFila: "media/viajes/pamplona-logrono/img_6391.jpg",
        color: "morado",
        emoji: "🍷",
      },
      {
        titulo: "París, mon amour",
        subtitulo: "El clásico europeo",
        descripcion:
          "Torre Eiffel, croissants y kilómetros andados que ningún reloj quiso contar. La ciudad del amor recibe a sus dos críticos más exigentes.",
        etiquetas: ["Romance", "Clásico"],
        match: 97,
        anio: 2025,
        duracion: "11 fotos · 3 vídeos",
        tipo: "galeria",
        archivos: ["media/viajes/paris/img_0634.jpg", "media/viajes/paris/img_0946.jpg", "media/viajes/paris/img_0956.jpg", "media/viajes/paris/img_0977.jpg", "media/viajes/paris/img_0983.jpg", "media/viajes/paris/img_1004.jpg", "media/viajes/paris/img_1018.jpg", "media/viajes/paris/img_1049.jpg", "media/viajes/paris/img_1080.jpg", "media/viajes/paris/img_1118.jpg", "media/viajes/paris/img_1126.jpg", "media/viajes/paris/img_1136.mp4", "media/viajes/paris/img_1137.mp4", "media/viajes/paris/img_1140.mp4"],
        portada: "media/viajes/paris/img_0946.jpg",
        portadaFila: "media/viajes/paris/img_0634.jpg",
        color: "rosa",
        emoji: "🗼",
      },
      {
        titulo: "Santillana del Mar",
        subtitulo: "El pueblo de las tres mentiras",
        descripcion:
          "Ni es santa, ni es llana, ni tiene mar. Pero tiene piedras bonitas, y eso a estos dos les basta para hacer 400 fotos (aquí, las 9 mejores).",
        etiquetas: ["Escapada", "Medieval"],
        match: 92,
        anio: 2025,
        duracion: "9 fotos",
        tipo: "galeria",
        archivos: ["media/viajes/santillana/img_6136.jpg", "media/viajes/santillana/img_7741.jpg", "media/viajes/santillana/img_7749.jpg", "media/viajes/santillana/img_7754.jpg", "media/viajes/santillana/img_7770.jpg", "media/viajes/santillana/img_7809.jpg", "media/viajes/santillana/img_7832.jpg", "media/viajes/santillana/img_7866.jpg", "media/viajes/santillana/img_9244.jpg"],
        portada: "media/viajes/santillana/img_9244.jpg",
        portadaFila: "media/viajes/santillana/img_6136.jpg",
        color: "turquesa",
        emoji: "🏘️",
      },
      {
        titulo: "La peli de Torrevieja",
        subtitulo: "Basada en hechos reales",
        descripcion:
          "Cuarenta y cinco minutos eligiendo una película que le gustara a ella. Se durmió en el minuto cinco. Él se la tragó entera. Crítica: «horrorosa». Audiencia: uno.",
        etiquetas: ["Drama", "Comedia", "Cine forzoso"],
        match: 84,
        anio: 2025,
        duracion: "La peli entera (él)",
        tipo: "texto",
        texto:
          "LA PELI DE TORREVIEJA\n\nEscenario: Torrevieja, una noche cualquiera.\n\n21:30 — «Elige tú, pero que me guste.»\n22:15 — Tras 45 minutos de catálogo, elegida\n        LA película perfecta para ella.\n22:20 — Leti: dormida. Cinco minutos. Récord.\n22:21 — Vic mira la tele. Mira a Leti. Mira la tele.\n00:05 — Vic se ha tragado ENTERA su peli horrorosa.\n\nNominada a mejor actor de reparto:\nel sofá de Torrevieja.",
        portada: "media/risas/img_8465.jpg",
        portadaFila: "media/letiyvic/img_9342.jpg",
        color: "rojo",
        emoji: "🎬",
      },
    ],
  },

  // ==========================================================
  //  FILA 2 — RISAS  (archivos en media/risas/)
  // ==========================================================
  {
    fila: "Risas",
    items: [
      {
        titulo: "El álbum de las risas",
        subtitulo: "Recopilatorio oficial",
        descripcion:
          "28 pruebas fotográficas de que estos dos no pueden estar serios ni en Navidad. Incluye pelucas de espumillón, muecas y decisiones estéticas cuestionables.",
        etiquetas: ["Comedia", "Documental"],
        match: 97,
        anio: 2026,
        duracion: "28 fotos",
        tipo: "galeria",
        archivos: ["media/risas/171f0c28-8642-47f2-b718-5abce10c491a.jpg", "media/risas/20617c90-f720-4844-9d5b-16fd1922c4e6.jpg", "media/risas/37e91c65-d02f-4601-bb01-26ec480a7d4b.jpg", "media/risas/3a3b2ee7-9fec-460d-844a-8a13186cbcaf.jpg", "media/risas/41552c06-a62e-4691-bcf5-3e20dc43606d.jpg", "media/risas/525356aa-eb7c-4720-a46c-3868cfa1a071.jpg", "media/risas/6ade9265-0556-4ab2-81ff-c7a641c0b8cb.jpg", "media/risas/9e241d5f-b537-4817-a358-e443268989c2.jpg", "media/risas/d553f24b-cd1d-4e6a-8cec-f539340c6512.jpg", "media/risas/d55a5426-ec30-403a-96cd-9adf69e8cfab.jpg", "media/risas/ec73c44e-eede-44ef-9f0d-a62ef21ec0ce.jpg", "media/risas/img_0791.jpg", "media/risas/img_1035.jpg", "media/risas/img_1091.jpg", "media/risas/img_5091.jpg", "media/risas/img_5173.jpg", "media/risas/img_5500.jpg", "media/risas/img_6680.jpg", "media/risas/img_6744.jpg", "media/risas/img_7065.jpg", "media/risas/img_7847.jpg", "media/risas/img_7888.jpg", "media/risas/img_7889.jpg", "media/risas/img_7890.jpg", "media/risas/img_7990.jpg", "media/risas/img_8042.jpg", "media/risas/img_8465.jpg", "media/risas/img_8883.jpg"],
        portada: "media/risas/img_7888.jpg",
        portadaFila: "media/risas/img_5500.jpg",
        color: "naranja",
        emoji: "😂",
        destacado: true,
      },
      {
        titulo: "Videoclub del caos",
        subtitulo: "25 episodios",
        descripcion:
          "La colección completa de vídeos que jamás deberían salir de este círculo de confianza. El jurado sigue deliberando cuál es el mejor.",
        etiquetas: ["Comedia", "Sin guion"],
        match: 94,
        anio: 2026,
        duracion: "2 fotos · 25 vídeos",
        tipo: "galeria",
        portada: "media/risas/img_1035.jpg",
        portadaFila: "media/risas/171f0c28-8642-47f2-b718-5abce10c491a.jpg",
        archivos: ["media/risas/3b27c3ad-6726-4df2-91e3-878561d8e84c.mp4","media/risas/6b08962d-0a1c-4daf-955b-c8efce1a5868.mp4", "media/risas/85fe202b-9170-4590-84ac-bac80f504f5b.mp4", "media/risas/acd3826c-12a0-4ae6-891b-db5d1c975afc.mp4", "media/risas/b8a77536-095b-4285-aa4c-1bdd10ca20df.mp4", "media/risas/img_0861.mp4", "media/risas/img_0896.mp4", "media/risas/img_0940.mp4", "media/risas/img_1158.mp4", "media/risas/img_1160.mp4", "media/risas/img_4990.mp4", "media/risas/img_4991.mp4", "media/risas/img_5022.mp4", "media/risas/img_5030.mp4", "media/risas/img_5121.mp4", "media/risas/img_6355.mp4", "media/risas/img_6389.mp4", "media/risas/img_6434.mp4", "media/risas/img_6478.mp4", "media/risas/img_7250.mp4", "media/risas/img_7478.mp4", "media/risas/img_8459.mp4", "media/risas/img_9266.mp4", "media/risas/img_9336.mp4", "media/risas/img_9468.mp4"],
        color: "morado",
        emoji: "🎥",
        progreso: 62,
      },
      {
        titulo: "Operación Ikea",
        subtitulo: "Miniserie",
        descripcion:
          "Hoy limpiamos sí o sí! Al final la casa se limpia sola.",
        etiquetas: ["Thriller", "Bricolaje"],
        match: 91,
        anio: 2024,
        duracion: "Miniserie · 3 episodios",
        tipo: "texto",
        texto:
          "TRANSCRIPCIÓN OFICIAL — OPERACIÓN IKEA\n\n«Esto se monta en 20 minutos.»\n(2 horas después)\n«¿Por qué sobran 4 tornillos?»\n«Eso es que hemos optimizado.»\n\nEl mueble sigue en pie a día de hoy. Nadie sabe cómo.",
        portada: "media/risas/img_8042.jpg",
        portadaFila: "media/risas/41552c06-a62e-4691-bcf5-3e20dc43606d.jpg",
        color: "azul",
        emoji: "🔧",
      },
    ],
  },

  // ==========================================================
  //  FILA 3 — MOMENTOS LETIYVIC  (archivos en media/letiyvic/)
  // ==========================================================
  {
    fila: "Momentos LetiyVic",
    items: [
      {
        titulo: "Nosotros: la serie",
        subtitulo: "Todas las temporadas",
        descripcion:
          "43 momentos de una historia que sigue en emisión. Crítica: «no la veas si no quieres engancharte». Renovada automáticamente cada año.",
        etiquetas: ["Romance", "Slice of life"],
        match: 100,
        anio: 2026,
        duracion: "43 fotos",
        tipo: "galeria",
        archivos: ["media/letiyvic/07362a7b-c03b-4d22-a1e8-5527b9c53bdf.jpg", "media/letiyvic/0eff68e9-a28c-443f-9114-c8f664c78397.jpg", "media/letiyvic/15e67b75-6bb8-4787-8a87-bbfa4162e5f6.jpg", "media/letiyvic/18c9e0c7-1a14-4478-adcc-53b95b037ab5.jpg", "media/letiyvic/1f5a2080-d68a-4c39-a249-95cb8e5ac45e.jpg", "media/letiyvic/2a71ce0c-2ed9-4a98-867e-5ae076d99e8e.jpg", "media/letiyvic/311196cf-e15e-4f31-8892-cb41d5120ef0.jpg", "media/letiyvic/35671d1a-2c10-4cae-97e0-c68f2dddbf7c.jpg", "media/letiyvic/3b3726e5-73fa-42f7-b38e-e9195c90f227.jpg", "media/letiyvic/4c09e287-3c3f-446b-bf92-a36c14428661.jpg", "media/letiyvic/56533ac0-2724-402b-80dd-de4753165d0f.jpg", "media/letiyvic/59253bd2-9050-42e7-87fa-c6434a36dcca.jpg", "media/letiyvic/82765ed1-818a-45d4-b72c-ad3d756df17e.jpg", "media/letiyvic/8819ba0b-ece4-461a-bf45-01711111aeb4.jpg", "media/letiyvic/8e41a8b0-e9bd-4872-bf86-63f1ce5486d6.jpg", "media/letiyvic/9882e6d1-fab8-43e8-b04a-a04487ed6af1.jpg", "media/letiyvic/9a81fcb6-55eb-412b-9961-5204e07458c9.jpg", "media/letiyvic/a3195ee3-3536-45a4-8559-161ab0ef283b.jpg", "media/letiyvic/a449b868-368c-43ef-b8e4-5eb539bf7903.jpg", "media/letiyvic/ac1a237a-c814-4266-8e23-51bc96400a8f.jpg", "media/letiyvic/bd26bf29-97c0-4b1a-8e5a-680f9951eede.jpg", "media/letiyvic/c03d7298-f5fd-40bc-84fc-439e3c2b24f9.jpg", "media/letiyvic/c233296f-1bfd-4b71-97a1-7d01ef8bf87c.jpg", "media/letiyvic/c67d39e3-3f47-404d-93e8-78f7d8beb309.jpg", "media/letiyvic/d3017f28-8a1d-4646-80ad-8d697f79b799.jpg", "media/letiyvic/d945a21e-f063-4b0c-907d-1806e68c8d8e.jpg", "media/letiyvic/fce95f10-12de-42d9-b6bc-05ab7bba12c6.jpg", "media/letiyvic/fe997569-904c-4d9b-8eed-831890a0854d.jpg", "media/letiyvic/img_0373.jpg", "media/letiyvic/img_4972.jpg", "media/letiyvic/img_5066.jpg", "media/letiyvic/img_5149.jpg", "media/letiyvic/img_5165.jpg", "media/letiyvic/img_5582.jpg", "media/letiyvic/img_5610.jpg", "media/letiyvic/img_5716.jpg", "media/letiyvic/img_6711.jpg", "media/letiyvic/img_8083.jpg", "media/letiyvic/img_8458.jpg", "media/letiyvic/img_8910.jpg", "media/letiyvic/img_8973.jpg", "media/letiyvic/img_9078.jpg", "media/letiyvic/img_9342.jpg"],
        portada: "media/letiyvic/img_0373.jpg",
        portadaFila: "media/letiyvic/8819ba0b-ece4-461a-bf45-01711111aeb4.jpg",
        color: "rosa",
        emoji: "💘",
        destacado: true,
      },
      {
        titulo: "Películas caseras",
        subtitulo: "Colección limitada",
        descripcion:
          "Nueva casa nuevas aventuras.",
        etiquetas: ["Documental", "Romance"],
        match: 100,
        anio: 2026,
        duracion: "2 fotos · 6 vídeos",
        tipo: "galeria",
        portada: "media/letiyvic/img_5716.jpg",
        portadaFila: "media/letiyvic/fce95f10-12de-42d9-b6bc-05ab7bba12c6.jpg",
        archivos: ["media/letiyvic/198e4993-e7b9-47b6-9d5f-416caaeac5a5.mp4","media/letiyvic/30734ac5-7fec-40e8-869a-f45708c31475.mp4", "media/letiyvic/93dbf839-8de4-4272-83b1-cfde55fb64b0.mp4", "media/letiyvic/94a0e134cc6c4c16806d6d6a4fea5414.mp4", "media/letiyvic/9ee837e0-8041-4912-820b-3625b50b0284.mp4", "media/letiyvic/img_7477.mp4"],
        color: "morado",
        emoji: "🎬",
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
        portada: "media/risas/img_5091.jpg",
        portadaFila: "media/letiyvic/img_8458.jpg",
        color: "morado",
        emoji: "🛋️",
      },
      {
        titulo: "Cartas desde el sofá",
        subtitulo: "Especial",
        descripcion: "Lo que nunca falta en nuestras aventuras, muchos besos.",
        etiquetas: ["Especial", "Solo para ti"],
        match: 100,
        anio: 2026,
        duracion: "Lo que tú quieras",
        tipo: "texto",
        texto:
          "En esta peli no falta amor, mimos o mofletes.",
        portada: "media/letiyvic/img_5066.jpg",
        portadaFila: "media/letiyvic/56533ac0-2724-402b-80dd-de4753165d0f.jpg",
        color: "rojo",
        emoji: "💌",
        progreso: 15,
      },
    ],
  },

  // ==========================================================
  //  FILA 4 — RUTA DE PINTXOS 2026  (el regalo 🎁)
  //  Imágenes de media/regalo/ desde Wikimedia Commons:
  //   - pintxos.jpg: "Pintxos Donostia 2014" de Gordito1869 (CC BY 3.0)
  //   - san-sebastian.jpg: "Donosti (112287257)" (CC BY-SA 3.0)
  //   - pais-vasco.jpg: "Guggenheim Museum Bilbao 6" de kallerna (CC BY-SA 4.0)
  // ==========================================================
  {
    fila: "Ruta de Pintxos 2026",
    // Fila especial: solo el banner + una fila numerada estilo Top
    estilo: "top",
    tituloTop: "Top 3 opciones de regalo a elegir",
    items: [
      {
        titulo: "Tu regalo: Ruta de Pintxos 2026",
        subtitulo: "Estreno exclusivo · Solo para ti",
        descripcion:
          "Enhorabuena: has desbloqueado un viaje. Abajo tienes las tres opciones candidatas. Míralas con calma, elige una… y prepara el apetito. La producción corre a cargo de la casa.",
        etiquetas: ["Regalo", "Estreno", "Gastronomía"],
        match: 100,
        anio: 2026,
        duracion: "3 opciones · 1 decisión",
        tipo: "texto",
        texto:
          "RUTA DE PINTXOS 2026\n\nQuerida espectadora:\n\nEste perfil no es una serie. Es un billete.\n\nEn esta fila hay tres opciones de viaje. Solo puedes\nelegir una (sí, solo una, ya hemos mirado el presupuesto).\n\nOPCIÓN 1 — Pamplona\nOPCIÓN 2 — San Sebastián\nOPCIÓN 3 — Ruta por País Vasco (Bilbao + San Sebastián + Vitoria)\n\nAbre cada carátula para ver los detalles.\nCuando lo tengas claro, dilo en voz alta:\nla dirección de LetiyvicFlix tomará nota.\n\nFeliz cumpleaños.",
        portada: "media/regalo/pintxos.jpg",
        color: "dorado",
        emoji: "🎁",
        destacado: true,
      },
      {
        titulo: "Opción 1: Pamplona",
        subtitulo: "La revancha",
        descripcion:
          "Ya la conocemos, y por eso mismo hay cuentas pendientes: los pinchos de la Estafeta que quedaron sin probar. Secuela con más presupuesto que la primera parte.",
        etiquetas: ["Opción 1", "Gastronomía", "Secuela"],
        match: 94,
        anio: 2026,
        duracion: "Escapada",
        tipo: "texto",
        texto:
          "OPCIÓN 1 — PAMPLONA\n\nLa ciudad donde ya fuimos felices comiendo.\nVolver a la calle Estafeta con lista cerrada de bares\n(la hicimos al volver, esta vez no se nos escapa ninguno).\n\nIncluye: pinchos, paseo por la Ciudadela y\ncero encierros (los toros, tranquilos).\n\nSi eliges esta opción, di: «¡OPCIÓN 1!»",
        portada: "media/viajes/pamplona-logrono/img_6337.jpg",
        color: "rojo",
        emoji: "🥘",
      },
      {
        titulo: "Opción 2: San Sebastián",
        subtitulo: "La joya del Cantábrico",
        descripcion:
          "La Concha, el barrio viejo y la mayor concentración de pintxos por metro cuadrado del planeta. Los críticos le dan 3 estrellas; nosotros le daremos un repaso completo.",
        etiquetas: ["Opción 2", "Playa", "Alta cocina en miniatura"],
        match: 97,
        anio: 2026,
        duracion: "Escapada",
        tipo: "texto",
        texto:
          "OPCIÓN 2 — SAN SEBASTIÁN\n\nDonostia: la bahía de La Concha, el monte Igueldo\ny un barrio viejo donde cada barra es un museo\n(de esos en los que sí se puede tocar).\n\nIncluye: paseo por La Concha al atardecer,\nruta de pintxos por la Parte Vieja y\ndebate oficial sobre cuál estaba más bueno.\n\nSi eliges esta opción, di: «¡OPCIÓN 2!»",
        portada: "media/regalo/san-sebastian.jpg",
        color: "azul",
        emoji: "🌊",
      },
      {
        titulo: "Opción 3: Ruta por País Vasco",
        subtitulo: "Bilbao · San Sebastián · Vitoria",
        descripcion:
          "La trilogía completa en un solo viaje: el Guggenheim de Bilbao, los pintxos de Donostia y la Vitoria más verde. Para espectadoras que no saben elegir solo una ciudad.",
        etiquetas: ["Opción 3", "Road trip", "Trilogía"],
        match: 99,
        anio: 2026,
        duracion: "La saga completa",
        tipo: "texto",
        texto:
          "OPCIÓN 3 — RUTA POR PAÍS VASCO\n\nEpisodio I — BILBAO: el Guggenheim, el casco viejo\ny los primeros pintxos de la gira.\n\nEpisodio II — SAN SEBASTIÁN: La Concha y la\nParte Vieja (ver Opción 2, aquí en versión extendida).\n\nEpisodio III — VITORIA: la capital verde, su almendra\nmedieval y el cierre de gira por todo lo alto.\n\nTres ciudades, un coche y una playlist discutible.\n\nSi eliges esta opción, di: «¡OPCIÓN 3!»",
        portada: "media/regalo/pais-vasco.jpg",
        color: "verde",
        emoji: "🚗",
      },
    ],
  },
];
