/* =========================================================
   Moteur du "bureau" : icônes, fenêtres, dock, terminal.
   Le contenu se modifie dans data.js.
   ========================================================= */

const $ = (sel, el = document) => el.querySelector(sel);
const desktop = $("#desktop");
const winLayer = $("#windows");
const iconsEl = $("#icons");
const dock = $("#dock");
const menuApp = $("#menu-app");

const isMobile = () => window.matchMedia("(max-width: 700px)").matches;
const initials = (name) => name.split(/\s+/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

/* ---------- Icônes SVG ---------- */
const ICONS = {
  folder: `<svg viewBox="0 0 64 52"><defs><linearGradient id="fg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#86ccff"/><stop offset="1" stop-color="#3d9ef2"/></linearGradient></defs><path d="M3 9a4 4 0 0 1 4-4h15.5a4 4 0 0 1 2.8 1.2L29 10h28a4 4 0 0 1 4 4v4H3z" fill="#2f86d6"/><rect x="3" y="14" width="58" height="35" rx="4" fill="url(#fg)"/><rect x="3" y="14" width="58" height="1.5" fill="#fff" opacity=".5"/></svg>`,
  doc: `<svg viewBox="0 0 48 60"><path d="M7 1.5h25L45.5 15v41a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 56V4A2.5 2.5 0 0 1 7 1.5z" fill="#fff" stroke="#cfcfd4"/><path d="M32 1.5V12a3 3 0 0 0 3 3h10.5" fill="#ececf0" stroke="#cfcfd4"/><path d="M11 24h26M11 30h26M11 36h26M11 42h18" stroke="#c3c3c9" stroke-width="2" stroke-linecap="round"/></svg>`,
  pdf: `<svg viewBox="0 0 48 60"><path d="M7 1.5h25L45.5 15v41a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 56V4A2.5 2.5 0 0 1 7 1.5z" fill="#fff" stroke="#cfcfd4"/><path d="M32 1.5V12a3 3 0 0 0 3 3h10.5" fill="#ececf0" stroke="#cfcfd4"/><path d="M11 22h26M11 28h20" stroke="#c3c3c9" stroke-width="2" stroke-linecap="round"/><rect x="2" y="36" width="30" height="13" rx="2.5" fill="#e5423a"/><text x="17" y="45.6" font-size="9" font-weight="700" fill="#fff" text-anchor="middle" font-family="Helvetica,Arial,sans-serif">PDF</text></svg>`,
  contact: `<svg viewBox="0 0 60 48"><rect x="2" y="2" width="56" height="44" rx="6" fill="#fff" stroke="#cfcfd4"/><circle cx="19" cy="19" r="7" fill="#8e8e93"/><path d="M8 38c1.5-6.5 6-9.5 11-9.5s9.5 3 11 9.5z" fill="#8e8e93"/><path d="M36 17h15M36 24h15M36 31h10" stroke="#c3c3c9" stroke-width="2.5" stroke-linecap="round"/></svg>`,
};

const GLYPHS = {
  user: `<svg viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="8" r="4"/><path d="M4 20c.8-4 4-6 8-6s7.2 2 8 6z"/></svg>`,
  folder: `<svg viewBox="0 0 24 24" fill="#fff"><path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4.6l2 2h8.4A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>`,
  doc: `<svg viewBox="0 0 24 24" fill="#fff"><path d="M6 3h8l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M8.5 13h7M8.5 16.5h5" stroke="#e5423a" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l4 4-4 4M12 17h7"/></svg>`,
  trash: `<svg viewBox="0 0 24 24"><defs><linearGradient id="tg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9a9aa0"/><stop offset=".5" stop-color="#d9d9de"/><stop offset="1" stop-color="#8e8e94"/></linearGradient></defs><path d="M5 6.5h14l-1.3 13.2a1.5 1.5 0 0 1-1.5 1.3H7.8a1.5 1.5 0 0 1-1.5-1.3z" fill="url(#tg)" opacity=".9"/><ellipse cx="12" cy="6.5" rx="7.4" ry="1.6" fill="#77777d"/><path d="M8.5 9.5l.6 9M12 9.5v9M15.5 9.5l-.6 9" stroke="#6e6e74" stroke-width=".7"/></svg>`,
  /* Logiciels */
  finalcut: `<svg viewBox="0 0 64 64"><defs>
    <linearGradient id="fcr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f7f03c"/><stop offset=".35" stop-color="#ff8a3d"/><stop offset=".55" stop-color="#ff4d6d"/><stop offset=".75" stop-color="#b07cff"/><stop offset="1" stop-color="#5ab8ff"/></linearGradient>
    <linearGradient id="fcr2" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff5a5a" stop-opacity="0"/><stop offset=".6" stop-color="#3fe0c8" stop-opacity=".55"/><stop offset="1" stop-color="#46e04a"/></linearGradient>
    <linearGradient id="fcb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b4f5c"/><stop offset="1" stop-color="#23252c"/></linearGradient></defs>
    <path d="M9 12.5c0-2 1.3-3.6 3.3-3.9L48 3.4c2.4-.4 4.6 1.3 4.9 3.7l.4 2.7-44 6.4z" fill="url(#fcb)"/>
    <path d="M15 11.3l5.6 4M25.2 9.8l5.6 4M35.4 8.3l5.6 4M45.6 6.8l5.3 3.9" stroke="#e8e9ee" stroke-width="4.2"/>
    <rect x="9" y="17" width="46" height="41" rx="7" fill="url(#fcb)"/>
    <path d="M12 18h40v6H12z" fill="#e8e9ee"/><path d="M17 18l-3 6M27 18l-3 6M37 18l-3 6M47 18l-3 6" stroke="#2b2e36" stroke-width="3.4"/>
    <rect x="13" y="27" width="38" height="27" rx="4.5" fill="url(#fcr)"/><rect x="13" y="27" width="38" height="27" rx="4.5" fill="url(#fcr2)"/></svg>`,
  adobe: `<svg viewBox="0 0 24 24" fill="#fff"><path d="M14.782 3.153c-.231.02-.472.04-.703.07a8.453 8.453 0 0 0-2.832.834 8.951 8.951 0 0 0-2.46 1.777c-.03.04-.09.06-.141.05a7.44 7.44 0 0 0-1.496-.07 7.424 7.424 0 0 0-2.932.763c-1.768.884-3.013 2.26-3.736 4.108a7.089 7.089 0 0 0-.462 2.139c0 .05-.01.09-.02.13v.773c.02.201.05.392.07.593.1.813.332 1.596.703 2.33.824 1.646 2.089 2.851 3.786 3.594a7.127 7.127 0 0 0 2.45.593c.032 0 .06.004.086.01h8.576c.183-.017.362-.035.547-.06a8.344 8.344 0 0 0 2.811-.834 8.836 8.836 0 0 0 3.646-3.304 8.187 8.187 0 0 0 1.184-3.093c.05-.34.08-.692.121-1.034 0-.05.01-.09.02-.13v-.794c-.02-.23-.05-.452-.05-.662a8.345 8.345 0 0 0-.834-2.812 8.952 8.952 0 0 0-3.324-3.645 8.245 8.245 0 0 0-3.072-1.175c-.362-.06-.713-.09-1.075-.13-.05 0-.09-.01-.14-.02zm.369 1.693c2.126.005 3.93.826 5.395 2.455a6.93 6.93 0 0 1 1.616 3.323c.15.764.181 1.547.07 2.32-.19 1.346-.702 2.55-1.576 3.605a7.082 7.082 0 0 1-3.997 2.45 7.297 7.297 0 0 1-2.56.1c-1.095-.14-2.099-.501-3.003-1.154a5.2 5.2 0 0 1-.672-.573c-1.226-1.205-2.44-2.42-3.666-3.625-.301-.3-.321-.632-.18-.934a.822.822 0 0 1 .863-.472c.21.02.372.141.522.292 1.105 1.114 2.2 2.209 3.304 3.324a5.263 5.263 0 0 0 3.093 1.536c1.948.261 3.605-.341 4.92-1.798.713-.793 1.145-1.747 1.326-2.811.26-1.587-.11-3.013-1.095-4.268-.873-1.115-2.018-1.808-3.404-2.059-1.416-.25-2.751.02-3.966.794-.03.02-.1.03-.131.01a9.04 9.04 0 0 0-1.406-.854s-.01-.01-.02-.03a6.603 6.603 0 0 1 1.255-.823 6.646 6.646 0 0 1 2.641-.784 8.45 8.45 0 0 1 .67-.024zM7.546 7.509c1.455-.024 2.791.525 3.982 1.63.854.802 1.637 1.636 2.46 2.47.231.23.281.522.171.833-.11.311-.362.462-.683.512a.722.722 0 0 1-.632-.23c-.784-.784-1.567-1.557-2.34-2.35-.633-.653-1.386-1.025-2.27-1.186-1.958-.351-3.936.784-4.639 2.641-.904 2.36.522 5.031 2.982 5.594.482.11.995.11 1.497.1.14-.01.22.04.32.13.483.473.995.945 1.497 1.416.03.03.07.06.1.09-.06 0-.1.01-.14.01h-2.3a5.833 5.833 0 0 1-5.693-4.568c-.653-2.942 1.034-5.925 3.926-6.798a6.33 6.33 0 0 1 1.762-.294Z"/></svg>`,
  capcut: `<img src="assets/logos/capcut.webp" alt="">`,
  notion: `<svg viewBox="0 0 24 24" fill="#111"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>`,
};

/* ---------- Applications / fenêtres ---------- */
const APPS = {
  about:    { title: "À propos.txt",    icon: "doc",     w: 940, h: 640, render: renderAbout },
  projects: { title: "Projets",         icon: "folder",  w: 900, h: 720, render: renderProjects },
  skills:   { title: "Compétences.txt", icon: "doc",     w: 860, h: 600, render: renderSkills },
  contact:  { title: "Contact.vcf",     icon: "contact", w: 880, h: 580, render: renderContact },
  cv:       { title: "CV.pdf",          icon: "pdf",     w: 640, h: 860, render: renderCV },
  terminal: { title: `${PROFILE.username} — zsh`, icon: null, w: 600, h: 380, render: renderTerminal, dark: true },
  trash:    { title: "Corbeille", icon: null, w: 460, h: 300, render: (el) => {
    el.innerHTML = `<div class="empty"><div>${GLYPHS.trash}<p>La corbeille est vide.</p></div></div>`;
  } },
};

function getApp(id) {
  if (APPS[id]) return APPS[id];
  if (id.startsWith("project:")) {
    const p = PROJECTS.find((x) => x.slug === id.slice(8));
    if (p) return { title: p.title, w: 1000, h: 820, render: (el) => renderProject(el, p) };
  }
  return null;
}

/* Icônes affichées sur le bureau */
const DESKTOP_ITEMS = ["about", "projects", "skills", "contact", "cv"];

/* Icônes du dock */
const DOCK_ITEMS = [
  { id: "about",    label: "À propos",    glyph: "user",     bg: "linear-gradient(160deg,#ffd166,#ff9f1c)" },
  { id: "projects", label: "Projets",     glyph: "folder",   bg: "linear-gradient(160deg,#5ac8fa,#0a6cff)" },
  { id: "skills",   label: "Compétences", glyph: "star",     bg: "linear-gradient(160deg,#b38cff,#6a3cff)" },
  { id: "contact",  label: "Contact",     glyph: "mail",     bg: "linear-gradient(160deg,#6ee7b7,#10a37f)" },
  "sep",
  { id: "cv",       label: "CV",          glyph: "doc",      bg: "linear-gradient(160deg,#ff8a80,#e5423a)" },
  { id: "terminal", label: "Terminal",    glyph: "terminal", bg: "linear-gradient(160deg,#4a4a4f,#1c1c1e)" },
  "sep",
  { skill: "finalcut", label: "Final Cut Pro",        glyph: "finalcut", bg: "transparent", plain: true },
  { skill: "adobe",    label: "Adobe Creative Cloud", glyph: "adobe",    bg: "radial-gradient(circle at 12% 100%,#2f8cff 0,transparent 48%),radial-gradient(circle at 95% 100%,#4ddc48 0,transparent 45%),radial-gradient(circle at 92% 70%,#ffd51c 0,transparent 42%),radial-gradient(circle at 0% 45%,#e637e6 0,transparent 50%),radial-gradient(circle at 10% 10%,#ff1790 0,transparent 45%),linear-gradient(160deg,#ff0a1a,#ff6a00)" },
  { skill: "capcut",   label: "CapCut",               glyph: "capcut",   bg: "#fff" },
  { skill: "notion",   label: "Notion",               glyph: "notion",   bg: "#fff" },
  "sep",
  { id: "trash",    label: "Corbeille",   glyph: "trash",    bg: "transparent", plain: true },
];

/* ---------- Gestion des fenêtres ---------- */
const openWindows = new Map();
let zTop = 10;
let cascade = 0;

function openWindow(id) {
  if (openWindows.has(id)) {
    const w = openWindows.get(id);
    w.classList.remove("minimized");
    focusWindow(w);
    return w;
  }
  const app = getApp(id);
  if (!app) return null;

  const win = document.createElement("section");
  win.className = "window opening" + (app.dark ? " dark" : "");
  win.dataset.id = id;
  win.setAttribute("role", "dialog");
  win.setAttribute("aria-label", app.title);
  win.innerHTML = `
    <div class="titlebar">
      <div class="lights">
        <button class="light close" aria-label="Fermer"></button>
        <button class="light min" aria-label="Réduire"></button>
        <button class="light max" aria-label="Agrandir"></button>
      </div>
      <div class="title">${app.title}</div>
    </div>
    <div class="content"></div>`;

  // Taille et position (en cascade)
  const area = desktop.getBoundingClientRect();
  const w = Math.min(app.w, area.width - 40);
  const h = Math.min(app.h, area.height - 110);
  const step = (cascade++ % 6) * 28;
  win.style.width = w + "px";
  win.style.height = h + "px";
  win.style.left = Math.max(10, (area.width - w) / 2 - 80 + step) + "px";
  win.style.top = Math.max(10, (area.height - 90 - h) / 2 - 40 + step) + "px";

  winLayer.appendChild(win);
  app.render($(".content", win), win);
  openWindows.set(id, win);
  focusWindow(win);
  bindWindow(win, id);
  updateDock();
  bounceDock(id);

  win.getBoundingClientRect(); // force le reflow pour l'animation
  win.classList.remove("opening");
  return win;
}

function closeWindow(id) {
  const win = openWindows.get(id);
  if (!win) return;
  win.classList.add("closing");
  openWindows.delete(id);
  setTimeout(() => win.remove(), 200);
  updateDock();
  const next = [...openWindows.values()].filter((w) => !w.classList.contains("minimized")).pop();
  if (next) focusWindow(next); else menuApp.textContent = "Finder";
}

function focusWindow(win) {
  winLayer.querySelectorAll(".window.focused").forEach((w) => w.classList.remove("focused"));
  win.style.zIndex = ++zTop;
  win.classList.add("focused");
  menuApp.textContent = getApp(win.dataset.id)?.title.replace(/\.\w+$/, "") || "Finder";
}

function toggleMaximize(win) {
  win.classList.add("animate-geo");
  win.classList.toggle("maximized");
  setTimeout(() => win.classList.remove("animate-geo"), 300);
}

function bindWindow(win, id) {
  win.addEventListener("pointerdown", () => focusWindow(win));
  $(".close", win).addEventListener("click", (e) => { e.stopPropagation(); closeWindow(id); });
  $(".min", win).addEventListener("click", (e) => { e.stopPropagation(); win.classList.add("minimized"); win.classList.remove("focused"); menuApp.textContent = "Finder"; });
  $(".max", win).addEventListener("click", (e) => { e.stopPropagation(); toggleMaximize(win); });

  // Déplacement par la barre de titre
  const bar = $(".titlebar", win);
  bar.addEventListener("dblclick", (e) => { if (!e.target.closest(".lights")) toggleMaximize(win); });
  bar.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".lights") || win.classList.contains("maximized") || isMobile()) return;
    const startX = e.clientX, startY = e.clientY;
    const left = win.offsetLeft, top = win.offsetTop;
    const area = desktop.getBoundingClientRect();
    bar.setPointerCapture(e.pointerId);
    const move = (ev) => {
      const x = Math.min(Math.max(left + ev.clientX - startX, 80 - win.offsetWidth), area.width - 80);
      const y = Math.min(Math.max(top + ev.clientY - startY, 0), area.height - 40);
      win.style.left = x + "px";
      win.style.top = y + "px";
    };
    const up = () => { bar.removeEventListener("pointermove", move); bar.removeEventListener("pointerup", up); };
    bar.addEventListener("pointermove", move);
    bar.addEventListener("pointerup", up);
  });
}

/* Tout élément avec data-open="..." ouvre une fenêtre */
document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-open]");
  if (t && !t.closest("#icons")) openWindow(t.dataset.open);
});

/* ---------- Icônes du bureau ---------- */
function renderDesktopIcons() {
  iconsEl.innerHTML = DESKTOP_ITEMS.map((id) => {
    const app = APPS[id];
    return `<button class="icon" data-app="${id}">
      <span class="img">${ICONS[app.icon]}</span>
      <span class="label">${app.title}</span>
    </button>`;
  }).join("");

  iconsEl.addEventListener("click", (e) => {
    const icon = e.target.closest(".icon");
    if (!icon) return;
    iconsEl.querySelectorAll(".selected").forEach((i) => i.classList.remove("selected"));
    icon.classList.add("selected");
    openWindow(icon.dataset.app);
  });
  desktop.addEventListener("pointerdown", (e) => {
    if (e.target === desktop || e.target === winLayer || e.target === iconsEl) {
      iconsEl.querySelectorAll(".selected").forEach((i) => i.classList.remove("selected"));
    }
  });
}

/* ---------- Dock ---------- */
function renderDock() {
  dock.innerHTML = DOCK_ITEMS.map((it) =>
    it === "sep"
      ? `<span class="dock-sep"></span>`
      : `<button class="dock-item${it.skill ? " skill-item" : ""}${it.plain ? " plain" : ""}" ${it.skill ? `data-skill="${it.skill}"` : `data-app="${it.id}"`} data-label="${it.label}" aria-label="${it.label}">
           <span class="app" style="background:${it.bg}">${GLYPHS[it.glyph]}</span>
           <span class="dot"></span>
         </button>`
  ).join("");

  dock.addEventListener("click", (e) => {
    const item = e.target.closest(".dock-item");
    if (!item) return;
    if (item.dataset.skill) return toggleSkillPop(item);
    closeSkillPop();
    openWindow(item.dataset.app);
  });

  // Effet de loupe
  const items = [...dock.querySelectorAll(".dock-item")];
  dock.addEventListener("mousemove", (e) => {
    if (isMobile()) return;
    items.forEach((it) => {
      const r = it.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      const s = Math.max(0, 1 - d / 130);
      it.style.setProperty("--size", 52 + 28 * s * s + "px");
    });
  });
  dock.addEventListener("mouseleave", () => items.forEach((it) => it.style.removeProperty("--size")));
}

/* Bulle « compétence » au-dessus d'un logiciel du Dock */
let skillPop = null;
function closeSkillPop() {
  if (!skillPop) return;
  const pop = skillPop.el;
  skillPop.item.classList.remove("active");
  pop.classList.remove("show");
  setTimeout(() => pop.remove(), 250);
  skillPop = null;
}
function toggleSkillPop(item) {
  const same = skillPop && skillPop.item === item;
  closeSkillPop();
  if (same) return;
  const sw = SOFTWARE.find((x) => x.id === item.dataset.skill);
  if (!sw) return;
  const dockItem = DOCK_ITEMS.find((d) => d.skill === sw.id);
  const pop = document.createElement("div");
  pop.className = "skill-pop";
  pop.setAttribute("role", "dialog");
  pop.setAttribute("aria-label", sw.name);
  pop.innerHTML = `
    <div class="sp-head">
      <span class="sp-icon ${dockItem.plain ? "plain" : ""} ${sw.id}" style="background:${dockItem.bg};${dockItem.plain ? "box-shadow:none" : ""}">${GLYPHS[dockItem.glyph]}</span>
      <div><strong>${sw.name}</strong><span class="sp-badge">✓ Je maîtrise</span></div>
    </div>
    <div class="sp-level"><span>Niveau</span>
      <span class="sp-bars">${[1, 2, 3].map((n) => `<i class="${n <= sw.level ? "on" : ""}" style="--n:${n}"></i>`).join("")}</span>
      <em>${["", "Notions", "Bon niveau", "Expert"][sw.level]}</em>
    </div>
    <p>${sw.desc}</p>
    <div class="sp-tags">${sw.tags.map((t, i) => `<span style="--n:${i}">${t}</span>`).join("")}</div>
    <span class="sp-arrow"></span>`;
  document.body.appendChild(pop);
  const r = item.getBoundingClientRect();
  const w = pop.offsetWidth;
  const left = Math.min(Math.max(10, r.left + r.width / 2 - w / 2), window.innerWidth - w - 10);
  pop.style.left = left + "px";
  pop.style.bottom = window.innerHeight - dock.getBoundingClientRect().top + 14 + "px";
  pop.querySelector(".sp-arrow").style.left = r.left + r.width / 2 - left + "px";
  pop.style.transformOrigin = `${r.left + r.width / 2 - left}px 100%`;
  item.classList.add("active");
  item.classList.remove("bounce"); void item.offsetWidth; item.classList.add("bounce");
  requestAnimationFrame(() => pop.classList.add("show"));
  skillPop = { el: pop, item };
}
document.addEventListener("pointerdown", (e) => {
  if (skillPop && !e.target.closest(".skill-pop") && !e.target.closest(".skill-item")) closeSkillPop();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSkillPop(); });

function updateDock() {
  dock.querySelectorAll(".dock-item").forEach((it) => {
    const id = it.dataset.app;
    const running = openWindows.has(id) || (id === "projects" && [...openWindows.keys()].some((k) => k.startsWith("project:")));
    it.classList.toggle("running", running);
  });
}

function bounceDock(id) {
  const it = dock.querySelector(`[data-app="${id.startsWith("project:") ? "projects" : id}"]`);
  if (!it) return;
  it.classList.remove("bounce");
  void it.offsetWidth;
  it.classList.add("bounce");
}

/* ---------- Contenu des fenêtres ---------- */
function avatarHTML() {
  return PROFILE.avatar ? `<img src="${PROFILE.avatar}" alt="${PROFILE.name}">` : initials(PROFILE.name);
}

/* ---------- Animations « façon Apple » ----------
   data-a="up|blur|wipe|zoom|pop|drop|stamp|flip|draw" : effet d'apparition
   style="--d:300ms"  : délai     style="--r:-6deg" : rotation finale
   data-words         : le texte apparaît mot par mot
   data-depth="10"    : léger effet de profondeur au survol de la souris */
const A = "assets/slides/";

function splitWords(el) {
  let i = 0;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((n) => {
    const frag = document.createDocumentFragment();
    n.textContent.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) return frag.append(part);
      const s = document.createElement("span");
      s.className = "w";
      s.style.setProperty("--i", i++);
      s.textContent = part;
      frag.append(s);
    });
    n.replaceWith(frag);
  });
}

function setupAnims(root) {
  root.querySelectorAll("[data-words]").forEach(splitWords);
  // Révèle chaque élément quand il entre dans la fenêtre (au scroll)
  let pending = [...root.querySelectorAll("[data-a],[data-words]")];
  let raf = 0;
  const check = () => {
    raf = 0;
    const rr = root.getBoundingClientRect();
    const limit = rr.bottom - rr.height * 0.06;
    pending = pending.filter((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < limit && r.bottom > rr.top) { el.classList.add("in"); return false; }
      return true;
    });
  };
  const schedule = () => { if (!raf) raf = requestAnimationFrame(check); };
  root.addEventListener("transitionend", (e) => {
    if (e.propertyName === "clip-path" && e.target.matches("[data-a]")) e.target.classList.add("done");
  });
  root.addEventListener("click", (e) => {
    const st = e.target.closest(".pel.sticker");
    if (!st) return;
    st.classList.remove("wiggle"); void st.offsetWidth; st.classList.add("wiggle");
  });
  root.addEventListener("scroll", schedule, { passive: true });
  new ResizeObserver(schedule).observe(root);
  root.querySelectorAll("img").forEach((i) => i.complete || i.addEventListener("load", schedule));
  schedule();

  // Profondeur : les stickers suivent légèrement la souris
  const layers = [...root.querySelectorAll("[data-depth]")];
  if (!layers.length || matchMedia("(hover: none)").matches) return;
  root.addEventListener("pointermove", (e) => {
    const r = root.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    layers.forEach((l) => { const d = +l.dataset.depth; l.style.translate = `${x * d}px ${y * d}px`; });
  });
  root.addEventListener("pointerleave", () => layers.forEach((l) => (l.style.translate = "0 0")));
}

const sticker = (src, cls, anim, d, r, depth, extra = "") =>
  `<span class="stk ${cls}" data-a="${anim}" style="--d:${d}ms;--r:${r}deg" data-depth="${depth}" ${extra}><img src="${A}${src}" alt=""></span>`;

function renderAbout(el) {
  el.classList.add("slides");
  el.innerHTML = `
    <section class="page about-page">
      <div class="about-grid">
        <div class="photo-stack">
          <div class="photo-main" data-a="zoom" style="--d:100ms"><img src="${A}photo-kimono.webp" alt="${PROFILE.name}"></div>
          ${sticker("sd-card.webp", "sd", "pop", 900, 9, 18)}
          <figure class="polaroid" data-a="drop" style="--d:700ms;--r:-6deg" data-depth="10"><img src="${A}photo-rue.webp" alt=""></figure>
        </div>
        <div class="about-text">
          <div class="hello">
            <img class="t-bonjour" src="${A}title-bonjour.webp" alt="Bonjour ! moi c'est" data-a="wipe" style="--d:250ms">
            <img class="t-mentor" src="${A}title-mentor.webp" alt="${PROFILE.name}" data-a="blur" style="--d:550ms">
            ${sticker("scribble.webp", "scribble", "draw", 1000, 0, 14)}
          </div>
          <div class="bio">
            ${PROFILE.bio.map((p, i) => `<p data-words style="--d:${900 + i * 120}ms">${p}</p>`).join("")}
          </div>
        </div>
      </div>
      <div class="scroll-hint" data-a="up" style="--d:2200ms">Mon parcours ↓</div>
    </section>

    <section class="page parcours-page">
      <div class="parcours-title">
        ${sticker("star.webp", "star s1", "pop", 300, -12, 12)}
        <img src="${A}title-parcours.webp" alt="mon parcours" data-a="wipe" style="--d:100ms">
        ${sticker("star.webp", "star s2", "pop", 450, 14, 16)}
      </div>
      <div class="timeline">
        <span class="timeline-line" data-a="line" style="--d:400ms"></span>
        ${PARCOURS.map((p, i) => `
          <article class="step" data-a="up" style="--d:${500 + i * 250}ms">
            <span class="step-dot"></span>
            <h3>${p.label}</h3>
            <p>${p.title} <strong><em>${p.detail}</em></strong></p>
            <p class="school">${p.school}</p>
          </article>`).join("")}
      </div>
      <div class="ribbon-wrap">${sticker("ribbon.webp", "ribbon", "stamp", 1100, 0, 8)}</div>
    </section>`;
  setupAnims(el);
}

/* ---------- Projets ---------- */
const LINK_LABELS = { youtube: "YouTube", instagram: "Instagram", site: "Site web" };
const LINK_ICONS = {
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>`,
  site: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
};
const P = "assets/projets/";

/* Reconstruit une diapo : chaque élément est positionné en % et animé */
function slideHTML(key, project) {
  const groups = (typeof PROJECT_SLIDES !== "undefined" && PROJECT_SLIDES[key]) || [];
  return `<div class="stage">${groups.map((g) => {
    const href = g.link && project?.links?.[g.link];
    const tag = href ? "a" : "div";
    const kind = href ? "link" : g.kind === "link" ? "sticker" : g.kind;
    const attrs = href
      ? `href="${href}" target="_blank" rel="noopener" aria-label="${project.title} sur ${LINK_LABELS[g.link]}"`
      : g.kind === "deco" ? `aria-hidden="true"` : "";
    const [x, y, w, h] = g.box;
    return `<${tag} class="pel ${kind}" ${attrs} data-a="${g.anim}"
        style="left:${x}%;top:${y}%;width:${w}%;height:${h}%;z-index:${g.z};--d:${g.d}ms">
        <span class="pel-in">${g.items.map(itemHTML).join("")}</span>
        ${href ? `<span class="pel-tip">${LINK_ICONS[g.link]}${LINK_LABELS[g.link]} ↗</span>` : ""}
      </${tag}>`;
  }).join("")}</div>`;
}

function itemHTML(it) {
  const [x, y, w, h] = it.box;
  const box = `left:${x}%;top:${y}%;width:${w}%;height:${h}%`;
  if (it.m) {
    return `<span class="pit" style="${box}"><img src="${P}${it.src}" alt="" draggable="false"
      style="width:${it.iw}%;height:${it.ih}%;transform:translate(-50%,-50%) matrix(${it.m.join(",")},0,0)"></span>`;
  }
  return `<span class="pit" style="${box}"><img src="${P}${it.src}" alt="${it.alt || ""}" draggable="false"></span>`;
}

function linkButtons(p, cls = "") {
  return Object.entries(p.links || {}).map(([k, url], i) =>
    `<a class="proj-btn ${k} ${cls}" href="${url}" target="_blank" rel="noopener" data-a="up" style="--d:${1300 + i * 100}ms">
      ${LINK_ICONS[k] || ""}<span>${LINK_LABELS[k] || k}</span></a>`).join("");
}

function renderProjects(el) {
  el.classList.add("slides");
  el.innerHTML = `
    <div class="finder">
      <aside>
        <p class="side-h">Favoris</p>
        <button class="side-link active">${GLYPHS.folder.replace('fill="#fff"', 'fill="#0a84ff"')}Projets</button>
        <button class="side-link" data-open="about">${GLYPHS.user.replace('fill="#fff"', 'fill="#0a84ff"')}À propos</button>
        <button class="side-link" data-open="skills">${GLYPHS.star.replace('fill="#fff"', 'fill="#0a84ff"')}Compétences</button>
        <button class="side-link" data-open="contact">${GLYPHS.mail.replace('stroke="#fff"', 'stroke="#0a84ff"')}Contact</button>
      </aside>
      <div class="finder-body">
        <div class="finder-main">
          <div class="cover">${slideHTML("cover")}</div>
          <div class="file-grid">
          ${PROJECTS.map((p, i) => `
            <button class="file" data-open="project:${p.slug}" data-a="up" style="--d:${900 + i * 90}ms">
              ${p.thumb
                ? `<span class="thumb" style="background-image:url('${p.thumb}')"></span>`
                : `<span class="thumb thumb-text">${p.title}</span>`}
              <span class="label">${p.title}</span>
            </button>`).join("")}
          </div>
        </div>
        <div class="finder-status">${PROJECTS.length} éléments</div>
      </div>
    </div>`;
  setupAnims($(".finder-main", el));
}

function renderProject(el, p) {
  el.classList.add("slides");
  const i = PROJECTS.indexOf(p);
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const hero = p.slide
    ? slideHTML(p.slide, p)
    : `<div class="stage text-hero">
        ${sticker("star.webp", "h-star", "pop", 600, -12, 14)}
        ${sticker("sparkles.webp", "h-sparkles", "pop", 800, 0, 18)}
        ${sticker("coin.webp", "h-coin", "flip", 950, 0, 10)}
        <div class="hero-text">
          <h1 data-a="blur" style="--d:100ms">${p.title}</h1>
          ${p.subtitle ? `<p data-a="up" style="--d:400ms">${p.subtitle}</p>` : ""}
        </div>
      </div>`;
  el.innerHTML = `
    <section class="proj-page">
      ${hero}
      <div class="proj-info">
        <div class="proj-head">
          <h2 data-a="up" style="--d:900ms">${p.title}</h2>
          <div class="proj-links">${linkButtons(p)}</div>
        </div>
        <ul class="proj-roles">${p.roles.map((r, k) => `<li data-a="up" style="--d:${1000 + k * 70}ms">${r}</li>`).join("")}</ul>
        ${p.highlights?.length ? `<ul class="proj-highlights">${p.highlights.map((h, k) =>
          `<li data-a="up" style="--d:${1200 + k * 90}ms">${h}</li>`).join("")}</ul>` : ""}
        <button class="proj-next" data-open="project:${next.slug}" data-a="up" style="--d:1500ms">Projet suivant : ${next.title} →</button>
      </div>
    </section>`;
  setupAnims(el);
}

function renderSkills(el) {
  el.classList.add("slides");
  el.innerHTML = `
    <section class="page skills-page">
      <img class="t-competences" src="${A}title-competences.webp" alt="mes compétences" data-a="blur" style="--d:100ms">
      <div class="coins">
        ${[0, 1, 2, 3, 4].map((i) => `<img src="${A}coin.webp" alt="" data-a="flip" style="--d:${450 + i * 110}ms">`).join("")}
      </div>
      <ul class="skill-list">
        ${SKILLS.map((s, i) => `<li data-a="up" style="--d:${800 + i * 110}ms"><span>${s}</span></li>`).join("")}
      </ul>
      <div class="tools">
        ${TOOLS.map((t, i) => `<span class="tool t${i}" data-a="pop" style="--d:${1500 + i * 140}ms;--r:${[-9, 3, 10][i] ?? 0}deg" data-depth="${[10, 6, 12][i] ?? 8}" title="${t.name}"><img src="${t.img}" alt="${t.name}"></span>`).join("")}
      </div>
    </section>`;
  setupAnims(el);
}

function renderContact(el) {
  el.classList.add("slides");
  const ig = PROFILE.instagram;
  el.innerHTML = `
    <section class="page contact-page">
      <div class="contact-top">
        <a href="tel:${PROFILE.phone.replace(/\s/g, "")}" data-a="up" style="--d:900ms">${PROFILE.phone}</a>
        ${ig ? `<a href="${ig.url}" target="_blank" rel="noopener" data-a="up" style="--d:1000ms">${ig.handle}</a>` : ""}
      </div>
      <div class="contact-stage">
        <div class="fuji" data-a="zoom" style="--d:100ms"><img src="${A}photo-fuji.webp" alt=""></div>
        <img class="t-ensemble" src="${A}title-ensemble.webp" alt="On devrait travailler ensemble ?" data-a="wipe" style="--d:500ms" data-depth="8">
        ${sticker("sparkles.webp", "sparkles", "pop", 1100, 0, 16)}
        ${sticker("smiley.webp", "smiley", "stamp", 1300, -8, 12)}
      </div>
      <div class="contact-bottom" data-a="up" style="--d:1200ms">
        <a class="mail" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
        <button class="copy" id="copy-mail" aria-label="Copier l'adresse e-mail">Copier</button>
      </div>
    </section>`;
  $("#copy-mail", el).addEventListener("click", async (e) => {
    try { await navigator.clipboard.writeText(PROFILE.email); e.target.textContent = "Copié ✓"; }
    catch { e.target.textContent = "Sélectionne l'adresse"; }
    setTimeout(() => (e.target.textContent = "Copier"), 1800);
  });
  setupAnims(el);
}

function renderCV(el) {
  el.classList.add("preview");
  el.innerHTML = `
    <div class="pv-toolbar">
      <span class="pv-name">${PROFILE.cvFileName || "CV.pdf"}</span>
      <div class="pv-actions">
        <button class="pv-btn" id="pv-zoom" aria-label="Zoomer">Zoom +</button>
        <a class="pv-btn" href="${PROFILE.cv}" target="_blank" rel="noopener">Ouvrir le PDF</a>
        <a class="pv-btn primary" href="${PROFILE.cv}" download="${PROFILE.cvFileName || "CV.pdf"}">Télécharger</a>
      </div>
    </div>
    <div class="pv-stage">
      <div class="pv-sheet" data-a="rise" style="--d:150ms">
        <img src="${PROFILE.cvPreview}" alt="CV de ${PROFILE.name}">
      </div>
    </div>`;
  const stage = $(".pv-stage", el);
  const btn = $("#pv-zoom", el);
  const toggle = (e) => {
    const zoomed = stage.classList.toggle("zoomed");
    btn.textContent = zoomed ? "Zoom −" : "Zoom +";
    // Zoome vers l'endroit cliqué
    if (zoomed && e && e.target.tagName === "IMG") {
      const r = e.target.getBoundingClientRect();
      const fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
      requestAnimationFrame(() => {
        stage.scrollLeft = stage.scrollWidth * fx - stage.clientWidth / 2;
        stage.scrollTop = stage.scrollHeight * fy - stage.clientHeight / 2;
      });
    }
  };
  btn.addEventListener("click", () => toggle());
  $("img", el).addEventListener("click", toggle);
  setupAnims(stage);
}

function renderTerminal(el) {
  el.classList.add("term");
  const prompt = `${PROFILE.username}@portfolio ~ %`;
  el.innerHTML = `<div class="term-out"></div>
    <label class="term-line"><span class="prompt">${prompt}</span><input spellcheck="false" autocomplete="off" aria-label="Commande"></label>`;
  const out = $(".term-out", el);
  const input = $("input", el);
  const print = (text, cls = "") => {
    const d = document.createElement("div");
    d.textContent = text;
    if (cls) d.className = cls;
    out.appendChild(d);
  };

  const COMMANDS = {
    help: () => print("Commandes : whoami, parcours, projets, competences, contact, open <nom>, date, clear"),
    whoami: () => print(`${PROFILE.name} — ${PROFILE.role}`),
    projets: () => print(PROJECTS.map((p) => `  ${p.slug.padEnd(18)} ${p.title}`).join("\n")),
    ls: () => COMMANDS.projets(),
    competences: () => print(SKILLS.map((s) => `  • ${s}`).join("\n")),
    parcours: () => print(PARCOURS.map((p) => `  ${p.label} — ${p.title}, ${p.detail} (${p.school})`).join("\n")),
    contact: () => print(`${PROFILE.email}\n${PROFILE.phone}\n${PROFILE.links.map((l) => `${l.label} : ${l.url}`).join("\n")}`),
    date: () => print(new Date().toLocaleString("fr-FR")),
    clear: () => (out.innerHTML = ""),
    open: (arg) => {
      const id = APPS[arg] ? arg : PROJECTS.some((p) => p.slug === arg) ? `project:${arg}` : null;
      id ? openWindow(id) : print(`open: ${arg || "?"} introuvable (essaie : about, projects, contact, cv, ${PROJECTS[0]?.slug})`);
    },
  };

  print(`Last login: ${new Date().toLocaleString("fr-FR")} on ttys001`);
  print('Tapez "help" pour voir les commandes disponibles.', "muted");

  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    const raw = input.value.trim();
    input.value = "";
    print(`${prompt} ${raw}`, "echo");
    if (!raw) return;
    const [cmd, ...args] = raw.split(/\s+/);
    const fn = COMMANDS[cmd.toLowerCase()];
    fn ? fn(args.join(" ")) : print(`zsh: command not found: ${cmd}`);
    el.scrollTop = el.scrollHeight;
  });
  el.addEventListener("click", () => input.focus());
  setTimeout(() => input.focus(), 50);
}

/* ---------- Horloge ---------- */
const clockFmt = new Intl.DateTimeFormat("fr-FR", { weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
function tick() { $("#clock").textContent = clockFmt.format(new Date()).replace(",", ""); }

/* ---------- Démarrage ---------- */
document.title = `${PROFILE.name} — Portfolio`;
renderDesktopIcons();
renderDock();
tick();
setInterval(tick, 10_000);
if (!isMobile()) setTimeout(() => openWindow("about"), 300);
