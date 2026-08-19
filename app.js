// ============================================================
//  LETIYVICFLIX — lógica de la web
//  (No hace falta editar este archivo: el contenido está en data.js)
//
//  Flujo: pantalla de perfiles → intro con el logo → app
// ============================================================

const $ = (id) => document.getElementById(id);

// ============================================================
//  PANTALLA DE PERFILES
// ============================================================

function pintarPerfiles() {
  const lista = $("perfiles-lista");
  const perfiles =
    typeof PERFILES !== "undefined" && PERFILES.length
      ? PERFILES
      : [{ nombre: "Leti", emoji: "👩" }, { nombre: "Vic", emoji: "🧑" }];

  perfiles.forEach((p, i) => {
    const clase = `av-${(i % 5) + 1}`;
    const candado = p.clave ? `<span class="perfil-candado">🔒</span>` : "";
    const btn = document.createElement("button");
    btn.className = "perfil";
    btn.innerHTML = `
      <div class="perfil-avatar ${clase}">${p.emoji}${candado}</div>
      <div class="perfil-nombre">${p.nombre}</div>`;
    btn.addEventListener("click", () => elegirPerfil(p, clase));
    lista.appendChild(btn);
  });

  // "Añadir perfil" decorativo
  const add = document.createElement("button");
  add.className = "perfil";
  add.innerHTML = `
    <div class="perfil-avatar" style="background:#2a2a2a;color:#808080">＋</div>
    <div class="perfil-nombre">Añadir perfil</div>`;
  add.addEventListener("click", () =>
    alert("Suscripción completa: no caben más personas en este sofá.")
  );
  lista.appendChild(add);
}

function elegirPerfil(perfil, clase) {
  if (perfil.clave) {
    mostrarPantallaClave(perfil, clase);
    return;
  }
  entrarConPerfil(perfil, clase);
}

function entrarConPerfil(perfil, clase) {
  $("avatar-mini").textContent = perfil.emoji;
  $("avatar-mini").className = "avatar-mini perfil-avatar " + clase;
  $("pantalla-perfiles").classList.add("oculto");
  $("pantalla-clave").classList.add("oculto");
  lanzarIntro();
}

// ---------- Pantalla de perfil bloqueado ----------

let perfilPendiente = null;
let clasePendiente = "";

function mostrarPantallaClave(perfil, clase) {
  perfilPendiente = perfil;
  clasePendiente = clase;

  const avatar = $("clave-avatar");
  avatar.textContent = perfil.emoji;
  avatar.className = "clave-avatar " + clase;

  $("clave-sub").textContent =
    `Introduce la clave para entrar en el perfil de ${perfil.nombre}.`;
  $("clave-error").classList.add("oculto");
  $("clave-input").value = "";
  $("clave-input").classList.remove("error");

  $("pantalla-perfiles").classList.add("oculto");
  $("pantalla-clave").classList.remove("oculto");
  $("clave-input").focus();
}

$("clave-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("clave-input");
  const intento = input.value.trim().toUpperCase();
  const correcta = (perfilPendiente?.clave || "").trim().toUpperCase();

  if (intento && intento === correcta) {
    entrarConPerfil(perfilPendiente, clasePendiente);
  } else {
    $("clave-error").classList.remove("oculto");
    input.classList.remove("error");
    void input.offsetWidth; // reinicia la animación de sacudida
    input.classList.add("error");
    input.select();
  }
});

$("clave-volver").addEventListener("click", () => {
  $("pantalla-clave").classList.add("oculto");
  $("pantalla-perfiles").classList.remove("oculto");
});

// ============================================================
//  INTRO — logo con zoom, destellos y "ta-dum" sintetizado
// ============================================================

function lanzarIntro() {
  const intro = $("intro");
  intro.classList.remove("oculto");
  intro.classList.add("fase-entrada");
  sonidoTudum();

  setTimeout(() => {
    intro.classList.remove("fase-entrada");
    intro.classList.add("fase-zoom");
  }, 1150);

  setTimeout(() => {
    intro.classList.add("oculto");
    $("app").classList.remove("oculto");
  }, 2600);
}

// Dos golpes graves sintetizados con WebAudio (homenaje casero)
function sonidoTudum() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const golpe = (t0, freq, dur, vol) => {
      const osc = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      const filtro = ctx.createBiquadFilter();
      filtro.type = "lowpass";
      filtro.frequency.value = 900;
      osc.type = "triangle";
      osc2.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, t0);
      osc2.frequency.setValueAtTime(freq / 2, t0);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.85, t0 + dur);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(filtro); osc2.connect(filtro);
      filtro.connect(gain); gain.connect(ctx.destination);
      osc.start(t0); osc2.start(t0);
      osc.stop(t0 + dur + 0.1); osc2.stop(t0 + dur + 0.1);
    };
    const ahora = ctx.currentTime;
    golpe(ahora, 98, 0.22, 0.5);          // "ta"
    golpe(ahora + 0.24, 87, 1.4, 0.55);   // "dummm"
  } catch (e) {
    /* sin sonido, no pasa nada */
  }
}

// ============================================================
//  BARRA SUPERIOR
// ============================================================

window.addEventListener("scroll", () => {
  $("topbar").classList.toggle("solida", window.scrollY > 40);
});

// ============================================================
//  CARÁTULAS
// ============================================================

function crearPortada(item, vertical = false) {
  if (item.portada) {
    const img = document.createElement("img");
    img.className = "portada";
    img.src = item.portada;
    img.alt = item.titulo;
    img.onerror = () => img.replaceWith(portadaGenerada(item));
    return img;
  }
  return portadaGenerada(item);
}

function portadaGenerada(item) {
  const div = document.createElement("div");
  div.className = `portada-gen c-${item.color || "rojo"}`;

  const textos = document.createElement("div");
  textos.className = "portada-textos";

  const marca = document.createElement("div");
  marca.className = "portada-marca";
  marca.textContent = "LETIYVICFLIX";

  const t = document.createElement("div");
  t.className = "portada-titulo";
  t.textContent = item.titulo;

  textos.append(marca, t);
  if (item.subtitulo) {
    const s = document.createElement("div");
    s.className = "portada-sub";
    s.textContent = item.subtitulo;
    textos.appendChild(s);
  }

  const emoji = document.createElement("div");
  emoji.className = "portada-emoji";
  emoji.textContent = item.emoji || "🎬";

  div.append(textos, emoji);
  return div;
}

function crearTarjeta(item, opciones = {}) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";
  tarjeta.title = item.titulo;

  const inner = document.createElement("div");
  inner.className = "tarjeta-inner";
  inner.appendChild(crearPortada(item));

  // Barra de progreso en "Continuar viendo"
  if (opciones.progreso != null) {
    const barra = document.createElement("div");
    barra.className = "progreso";
    barra.innerHTML = `<span style="width:${opciones.progreso}%"></span>`;
    inner.appendChild(barra);
  }

  // Panel que aparece al pasar el ratón
  const info = document.createElement("div");
  info.className = "tarjeta-info";
  const tags = (item.etiquetas || [])
    .slice(0, 3)
    .map((e) => `<span>${e}</span>`)
    .join("");
  info.innerHTML = `
    <div class="info-botones">
      <span class="mini-btn play">▶</span>
      <span class="mini-btn">＋</span>
      <span class="mini-btn">👍</span>
    </div>
    <div class="info-match">${item.match || 90}% para ti</div>
    <div class="info-tags">${tags}</div>`;
  inner.appendChild(info);

  tarjeta.appendChild(inner);
  tarjeta.addEventListener("click", () => abrirModal(item));
  return tarjeta;
}

// ============================================================
//  FILAS
// ============================================================

function pintarFilas() {
  const cont = $("filas");
  const todos = CATALOGO.flatMap((g) => g.items);

  CATALOGO.forEach((grupo, gi) => {
    const fila = document.createElement("section");
    fila.className = "fila";

    const titulo = document.createElement("h2");
    titulo.className = "fila-titulo";
    titulo.textContent = grupo.fila;

    const scroll = document.createElement("div");
    scroll.className = "fila-scroll";

    const esContinuar = /continuar/i.test(grupo.fila);
    grupo.items.forEach((item, i) => {
      const opciones = esContinuar
        ? { progreso: item.progreso != null ? item.progreso : 30 + ((i * 27) % 55) }
        : {};
      scroll.appendChild(crearTarjeta(item, opciones));
    });

    fila.append(titulo, scroll);
    cont.appendChild(fila);

    // Tras la primera fila, insertamos el TOP 10 automático
    if (gi === 0) cont.appendChild(crearFilaTop10(todos));
  });
}

function crearFilaTop10(todos) {
  const fila = document.createElement("section");
  fila.className = "fila fila-top10";

  const titulo = document.createElement("h2");
  titulo.className = "fila-titulo";
  titulo.textContent = "Top 10 en vuestro sofá hoy";

  const scroll = document.createElement("div");
  scroll.className = "fila-scroll";

  const top = [...todos]
    .sort((a, b) => (b.match || 0) - (a.match || 0))
    .slice(0, 10);

  top.forEach((item, i) => {
    const wrap = document.createElement("div");
    wrap.className = "top10-item";

    const num = document.createElement("div");
    num.className = "top10-num";
    num.textContent = i + 1;

    wrap.append(num, crearTarjeta(item));
    scroll.appendChild(wrap);
  });

  fila.append(titulo, scroll);
  return fila;
}

// ============================================================
//  BANNER DESTACADO
// ============================================================

function pintarHero() {
  const todos = CATALOGO.flatMap((g) => g.items);
  const destacado = todos.find((i) => i.destacado) || todos[0];
  if (!destacado) return;

  $("hero-titulo").textContent = destacado.titulo;
  $("hero-sub").textContent = destacado.subtitulo || "";
  $("hero-desc").textContent = destacado.descripcion || PERFIL.eslogan;

  const fondo = $("hero-fondo");
  if (destacado.portada) {
    fondo.style.backgroundImage = `url("${destacado.portada}")`;
  } else {
    fondo.className = `hero-fondo c-${destacado.color || "rojo"}`;
    fondo.innerHTML = `<div class="hero-emoji">${destacado.emoji || "🎬"}</div>`;
  }

  $("hero-play").addEventListener("click", () => abrirModal(destacado));
  $("hero-info").addEventListener("click", () => abrirModal(destacado));
}

// ============================================================
//  MODAL
// ============================================================

function abrirModal(item) {
  const media = $("modal-media");
  media.innerHTML = "";

  if (item.tipo === "texto") {
    const div = document.createElement("div");
    div.className = "modal-texto";
    div.textContent = item.texto || "(Aún no hay texto: edítalo en data.js)";
    media.appendChild(div);
  } else if (item.tipo === "video") {
    const video = document.createElement("video");
    video.src = item.archivo;
    video.controls = true;
    video.autoplay = true;
    video.onerror = () => media.replaceChildren(avisoArchivo(item));
    media.appendChild(video);
  } else if (item.tipo === "foto") {
    const img = document.createElement("img");
    img.src = item.archivo;
    img.alt = item.titulo;
    img.onerror = () => media.replaceChildren(avisoArchivo(item));
    media.appendChild(img);
  }

  $("modal-titulo").textContent = item.titulo;

  const meta = $("modal-meta");
  meta.innerHTML = "";
  if (item.match) {
    const m = document.createElement("span");
    m.className = "match";
    m.textContent = `${item.match}% para ti`;
    meta.appendChild(m);
  }
  if (item.anio) meta.appendChild(texto("span", item.anio));
  if (item.duracion) meta.appendChild(texto("span", item.duracion));
  const hd = texto("span", "HD");
  hd.className = "hd";
  meta.appendChild(hd);

  const chips = $("modal-chips");
  chips.innerHTML = "";
  (item.etiquetas || []).forEach((e) => {
    const c = texto("span", e);
    c.className = "chip";
    chips.appendChild(c);
  });

  $("modal-desc").textContent = item.descripcion || "";
  $("modal-fondo").classList.remove("oculto");
  document.body.style.overflow = "hidden";
}

function texto(tag, contenido) {
  const el = document.createElement(tag);
  el.textContent = contenido;
  return el;
}

function avisoArchivo(item) {
  const div = document.createElement("div");
  div.className = "modal-aviso";
  div.innerHTML = `
    <span class="grande">🎬</span>
    Este título todavía no tiene su ${item.tipo === "video" ? "vídeo" : "foto"}.<br>
    Guarda el archivo como <code>${item.archivo}</code> dentro de la carpeta
    LetiyvicFlix y recarga la página.
  `;
  return div;
}

function cerrarModal() {
  const video = $("modal-media").querySelector("video");
  if (video) video.pause();
  $("modal-fondo").classList.add("oculto");
  document.body.style.overflow = "";
}

$("modal-cerrar").addEventListener("click", cerrarModal);
$("modal-fondo").addEventListener("click", (e) => {
  if (e.target === $("modal-fondo")) cerrarModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarModal();
});

// ============================================================
//  ARRANQUE
// ============================================================

pintarPerfiles();
pintarHero();
pintarFilas();
