/* ============================================================
   Panadería "El Buen Pancito" - Lógica mockeada (sin base de datos)
   ============================================================ */

/* Usuario de prueba (datos inventados / mockeados) */
const USUARIO_MOCK = {
  usuario: "Campus Caritas",
  clave: "Caritas123",
  nombre: "Campus Caritas",
};

/* ---------- LOGIN ---------- */
function iniciarSesion(evento) {
  evento.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value;
  const aviso = document.getElementById("aviso-login");

  if (usuario === USUARIO_MOCK.usuario && clave === USUARIO_MOCK.clave) {
    // Guardamos una "sesión" simulada en el navegador
    sessionStorage.setItem("panaderia_sesion", USUARIO_MOCK.nombre);
    window.location.href = "inicio.html";
  } else {
    aviso.textContent = "Usuario o contraseña incorrectos. Intenta de nuevo.";
    aviso.className = "aviso error";
  }
  return false;
}

/* ---------- PROTECCIÓN DE PÁGINAS ---------- */
/* Llamar en cada página interna; si no hay sesión, vuelve al login */
function protegerPagina() {
  const sesion = sessionStorage.getItem("panaderia_sesion");
  if (!sesion) {
    window.location.href = "index.html";
    return;
  }
  const saludo = document.getElementById("saludo-usuario");
  if (saludo) {
    saludo.textContent = "Hola, " + sesion;
  }
}

/* ---------- CERRAR SESIÓN ---------- */
function cerrarSesion() {
  sessionStorage.removeItem("panaderia_sesion");
  window.location.href = "index.html";
}

/* ---------- FORMULARIO DE CONTACTO (mockeado) ---------- */
function enviarContacto(evento) {
  evento.preventDefault();
  const nombre = document.getElementById("c-nombre").value.trim();
  const aviso = document.getElementById("aviso-contacto");

  // No hay base de datos: solo simulamos el envío
  aviso.textContent =
    "¡Gracias " + nombre + "! Tu mensaje fue recibido. Te contactaremos pronto. 🥖";
  aviso.className = "aviso ok";
  evento.target.reset();
  return false;
}
