const STAGES = {
  group: "Fase de grupos",
  r32: "Dieciseisavos",
  r16: "Octavos de final",
  qf: "Cuartos de final",
  sf: "Semifinales",
  third: "Tercer puesto",
  final: "Final",
};

const STAGE_ORDER = ["group", "r32", "r16", "qf", "sf", "third", "final"];

const channelClasses = {
  DSports: "channel-dsports",
  DGO: "channel-dgo",
  "Paramount+": "channel-paramount",
  Flow: "channel-flow",
  Telefe: "channel-telefe",
  "TV Pública": "channel-tv-publica",
};

const universalChannels = ["DSports", "DGO", "Paramount+", "Flow"];

function match(id, date, time, stage, group, home, away, venue) {
  return { id, date, time, stage, group, home, away, venue };
}

const matches = [
  match(1, "2026-06-11", "16:00", "group", "Grupo A", "México", "Sudáfrica", "Estadio Azteca · Ciudad de México"),
  match(2, "2026-06-11", "23:00", "group", "Grupo A", "Corea del Sur", "Rep. Checa", "Estadio Akron · Guadalajara"),
  match(3, "2026-06-12", "16:00", "group", "Grupo B", "Canadá", "Bosnia y Herz.", "BMO Field · Toronto"),
  match(4, "2026-06-12", "22:00", "group", "Grupo D", "EE.UU.", "Paraguay", "SoFi Stadium · Los Ángeles"),
  match(8, "2026-06-13", "16:00", "group", "Grupo B", "Qatar", "Suiza", "Levi's Stadium · San Francisco"),
  match(7, "2026-06-13", "19:00", "group", "Grupo C", "Brasil", "Marruecos", "MetLife Stadium · Nueva Jersey"),
  match(5, "2026-06-13", "22:00", "group", "Grupo C", "Haití", "Escocia", "Gillette Stadium · Boston"),
  match(6, "2026-06-14", "01:00", "group", "Grupo D", "Australia", "Turquía", "BC Place · Vancouver"),
  match(10, "2026-06-14", "14:00", "group", "Grupo E", "Alemania", "Curazao", "NRG Stadium · Houston"),
  match(11, "2026-06-14", "17:00", "group", "Grupo F", "Países Bajos", "Japón", "AT&T Stadium · Dallas"),
  match(9, "2026-06-14", "20:00", "group", "Grupo E", "Costa de Marfil", "Ecuador", "Lincoln Financial Field · Filadelfia"),
  match(12, "2026-06-14", "23:00", "group", "Grupo F", "Suecia", "Túnez", "Estadio BBVA · Monterrey"),
  match(14, "2026-06-15", "13:00", "group", "Grupo H", "España", "Cabo Verde", "Mercedes-Benz Stadium · Atlanta"),
  match(16, "2026-06-15", "16:00", "group", "Grupo G", "Bélgica", "Egipto", "Lumen Field · Seattle"),
  match(13, "2026-06-15", "19:00", "group", "Grupo H", "Arabia Saudita", "Uruguay", "Hard Rock Stadium · Miami"),
  match(15, "2026-06-15", "22:00", "group", "Grupo G", "Irán", "Nueva Zelanda", "SoFi Stadium · Los Ángeles"),
  match(17, "2026-06-16", "16:00", "group", "Grupo I", "Francia", "Senegal", "MetLife Stadium · Nueva Jersey"),
  match(18, "2026-06-16", "19:00", "group", "Grupo I", "Irak", "Noruega", "Gillette Stadium · Boston"),
  match(19, "2026-06-16", "22:00", "group", "Grupo J", "Argentina", "Argelia", "Arrowhead Stadium · Kansas City"),
  match(20, "2026-06-17", "01:00", "group", "Grupo J", "Austria", "Jordania", "Levi's Stadium · San Francisco"),
  match(23, "2026-06-17", "14:00", "group", "Grupo K", "Portugal", "R.D. del Congo", "NRG Stadium · Houston"),
  match(22, "2026-06-17", "17:00", "group", "Grupo L", "Inglaterra", "Croacia", "AT&T Stadium · Dallas"),
  match(21, "2026-06-17", "20:00", "group", "Grupo L", "Ghana", "Panamá", "BMO Field · Toronto"),
  match(24, "2026-06-17", "23:00", "group", "Grupo K", "Uzbekistán", "Colombia", "Estadio Azteca · Ciudad de México"),
  match(25, "2026-06-18", "13:00", "group", "Grupo A", "Rep. Checa", "Sudáfrica", "Mercedes-Benz Stadium · Atlanta"),
  match(26, "2026-06-18", "16:00", "group", "Grupo B", "Suiza", "Bosnia y Herz.", "SoFi Stadium · Los Ángeles"),
  match(27, "2026-06-18", "19:00", "group", "Grupo B", "Canadá", "Qatar", "BC Place · Vancouver"),
  match(28, "2026-06-18", "22:00", "group", "Grupo A", "México", "Corea del Sur", "Estadio Akron · Guadalajara"),
  match(32, "2026-06-19", "16:00", "group", "Grupo D", "EE.UU.", "Australia", "Lumen Field · Seattle"),
  match(30, "2026-06-19", "19:00", "group", "Grupo C", "Escocia", "Marruecos", "Gillette Stadium · Boston"),
  match(29, "2026-06-19", "22:00", "group", "Grupo C", "Brasil", "Haití", "Lincoln Financial Field · Filadelfia"),
  match(31, "2026-06-20", "01:00", "group", "Grupo D", "Turquía", "Paraguay", "Levi's Stadium · San Francisco"),
  match(35, "2026-06-20", "14:00", "group", "Grupo F", "Países Bajos", "Suecia", "NRG Stadium · Houston"),
  match(33, "2026-06-20", "17:00", "group", "Grupo E", "Alemania", "Costa de Marfil", "BMO Field · Toronto"),
  match(34, "2026-06-20", "23:00", "group", "Grupo E", "Ecuador", "Curazao", "Arrowhead Stadium · Kansas City"),
  match(36, "2026-06-21", "01:00", "group", "Grupo F", "Túnez", "Japón", "Estadio BBVA · Monterrey"),
  match(38, "2026-06-21", "13:00", "group", "Grupo H", "España", "Arabia Saudita", "Mercedes-Benz Stadium · Atlanta"),
  match(39, "2026-06-21", "16:00", "group", "Grupo G", "Bélgica", "Irán", "SoFi Stadium · Los Ángeles"),
  match(37, "2026-06-21", "19:00", "group", "Grupo H", "Uruguay", "Cabo Verde", "Hard Rock Stadium · Miami"),
  match(40, "2026-06-21", "22:00", "group", "Grupo G", "Nueva Zelanda", "Egipto", "BC Place · Vancouver"),
  match(43, "2026-06-22", "14:00", "group", "Grupo J", "Argentina", "Austria", "AT&T Stadium · Dallas"),
  match(42, "2026-06-22", "18:00", "group", "Grupo I", "Francia", "Irak", "Lincoln Financial Field · Filadelfia"),
  match(41, "2026-06-22", "21:00", "group", "Grupo I", "Noruega", "Senegal", "MetLife Stadium · Nueva Jersey"),
  match(44, "2026-06-23", "00:00", "group", "Grupo J", "Jordania", "Argelia", "Levi's Stadium · San Francisco"),
  match(47, "2026-06-23", "14:00", "group", "Grupo K", "Portugal", "Uzbekistán", "NRG Stadium · Houston"),
  match(45, "2026-06-23", "17:00", "group", "Grupo L", "Inglaterra", "Ghana", "Gillette Stadium · Boston"),
  match(46, "2026-06-23", "20:00", "group", "Grupo L", "Panamá", "Croacia", "BMO Field · Toronto"),
  match(48, "2026-06-23", "23:00", "group", "Grupo K", "Colombia", "R.D. del Congo", "Estadio Akron · Guadalajara"),
  match(51, "2026-06-24", "16:00", "group", "Grupo B", "Suiza", "Canadá", "BC Place · Vancouver"),
  match(52, "2026-06-24", "16:00", "group", "Grupo B", "Bosnia y Herz.", "Qatar", "Lumen Field · Seattle"),
  match(49, "2026-06-24", "19:00", "group", "Grupo C", "Brasil", "Escocia", "Hard Rock Stadium · Miami"),
  match(50, "2026-06-24", "19:00", "group", "Grupo C", "Marruecos", "Haití", "Mercedes-Benz Stadium · Atlanta"),
  match(53, "2026-06-24", "22:00", "group", "Grupo A", "Rep. Checa", "México", "Estadio Azteca · Ciudad de México"),
  match(54, "2026-06-24", "22:00", "group", "Grupo A", "Sudáfrica", "Corea del Sur", "Estadio BBVA · Monterrey"),
  match(56, "2026-06-25", "17:00", "group", "Grupo E", "Ecuador", "Alemania", "MetLife Stadium · Nueva Jersey"),
  match(55, "2026-06-25", "17:00", "group", "Grupo E", "Curazao", "Costa de Marfil", "Lincoln Financial Field · Filadelfia"),
  match(57, "2026-06-25", "20:00", "group", "Grupo F", "Japón", "Suecia", "AT&T Stadium · Dallas"),
  match(58, "2026-06-25", "20:00", "group", "Grupo F", "Túnez", "Países Bajos", "Arrowhead Stadium · Kansas City"),
  match(59, "2026-06-25", "23:00", "group", "Grupo D", "Turquía", "EE.UU.", "SoFi Stadium · Los Ángeles"),
  match(60, "2026-06-25", "23:00", "group", "Grupo D", "Paraguay", "Australia", "Levi's Stadium · San Francisco"),
  match(61, "2026-06-26", "16:00", "group", "Grupo I", "Noruega", "Francia", "Gillette Stadium · Boston"),
  match(62, "2026-06-26", "16:00", "group", "Grupo I", "Senegal", "Irak", "BMO Field · Toronto"),
  match(65, "2026-06-26", "21:00", "group", "Grupo H", "Cabo Verde", "Arabia Saudita", "NRG Stadium · Houston"),
  match(66, "2026-06-26", "21:00", "group", "Grupo H", "Uruguay", "España", "Estadio Akron · Guadalajara"),
  match(63, "2026-06-27", "00:00", "group", "Grupo G", "Egipto", "Irán", "Lumen Field · Seattle"),
  match(64, "2026-06-27", "00:00", "group", "Grupo G", "Nueva Zelanda", "Bélgica", "BC Place · Vancouver"),
  match(67, "2026-06-27", "18:00", "group", "Grupo L", "Panamá", "Inglaterra", "MetLife Stadium · Nueva Jersey"),
  match(68, "2026-06-27", "18:00", "group", "Grupo L", "Croacia", "Ghana", "Lincoln Financial Field · Filadelfia"),
  match(71, "2026-06-27", "20:30", "group", "Grupo K", "Colombia", "Portugal", "Hard Rock Stadium · Miami"),
  match(72, "2026-06-27", "20:30", "group", "Grupo K", "R.D. del Congo", "Uzbekistán", "Mercedes-Benz Stadium · Atlanta"),
  match(69, "2026-06-27", "23:00", "group", "Grupo J", "Argelia", "Austria", "Arrowhead Stadium · Kansas City"),
  match(70, "2026-06-27", "23:00", "group", "Grupo J", "Jordania", "Argentina", "AT&T Stadium · Dallas"),

  match(73, "2026-06-28", "16:00", "r32", "", "2° Grupo A", "2° Grupo B", "SoFi Stadium · Los Ángeles"),
  match(76, "2026-06-29", "14:00", "r32", "", "1° Grupo C", "2° Grupo F", "NRG Stadium · Houston"),
  match(74, "2026-06-29", "17:30", "r32", "", "1° Grupo E", "Mejor 3° A/B/C/D/F", "Gillette Stadium · Boston"),
  match(75, "2026-06-29", "22:00", "r32", "", "1° Grupo F", "2° Grupo C", "Estadio BBVA · Monterrey"),
  match(78, "2026-06-30", "14:00", "r32", "", "2° Grupo E", "2° Grupo I", "AT&T Stadium · Dallas"),
  match(77, "2026-06-30", "18:00", "r32", "", "1° Grupo I", "Mejor 3° C/D/F/G/H", "MetLife Stadium · Nueva Jersey"),
  match(79, "2026-06-30", "22:00", "r32", "", "1° Grupo A", "Mejor 3° C/E/F/H/I", "Estadio Azteca · Ciudad de México"),
  match(80, "2026-07-01", "13:00", "r32", "", "1° Grupo L", "Mejor 3° E/H/I/J/K", "Mercedes-Benz Stadium · Atlanta"),
  match(82, "2026-07-01", "17:00", "r32", "", "1° Grupo G", "Mejor 3° A/E/H/I/J", "Lumen Field · Seattle"),
  match(81, "2026-07-01", "21:00", "r32", "", "1° Grupo D", "Mejor 3° B/E/F/I/J", "Levi's Stadium · San Francisco"),
  match(84, "2026-07-02", "16:00", "r32", "", "1° Grupo H", "2° Grupo J", "SoFi Stadium · Los Ángeles"),
  match(83, "2026-07-02", "20:00", "r32", "", "2° Grupo K", "2° Grupo L", "BMO Field · Toronto"),
  match(85, "2026-07-03", "00:00", "r32", "", "1° Grupo B", "Mejor 3° E/F/G/I/J", "BC Place · Vancouver"),
  match(88, "2026-07-03", "15:00", "r32", "", "2° Grupo D", "2° Grupo G", "AT&T Stadium · Dallas"),
  match(86, "2026-07-03", "19:00", "r32", "", "1° Grupo J", "2° Grupo H", "Hard Rock Stadium · Miami"),
  match(87, "2026-07-03", "22:30", "r32", "", "1° Grupo K", "Mejor 3° D/E/I/J/L", "Arrowhead Stadium · Kansas City"),

  match(90, "2026-07-04", "14:00", "r16", "", "Ganador P73", "Ganador P75", "NRG Stadium · Houston"),
  match(89, "2026-07-04", "18:00", "r16", "", "Ganador P74", "Ganador P77", "Lincoln Financial Field · Filadelfia"),
  match(91, "2026-07-05", "17:00", "r16", "", "Ganador P76", "Ganador P78", "MetLife Stadium · Nueva Jersey"),
  match(92, "2026-07-05", "21:00", "r16", "", "Ganador P79", "Ganador P80", "Estadio Azteca · Ciudad de México"),
  match(93, "2026-07-06", "16:00", "r16", "", "Ganador P83", "Ganador P84", "AT&T Stadium · Dallas"),
  match(94, "2026-07-06", "21:00", "r16", "", "Ganador P81", "Ganador P82", "Lumen Field · Seattle"),
  match(95, "2026-07-07", "13:00", "r16", "", "Ganador P86", "Ganador P88", "Mercedes-Benz Stadium · Atlanta"),
  match(96, "2026-07-07", "17:00", "r16", "", "Ganador P85", "Ganador P87", "BC Place · Vancouver"),

  match(97, "2026-07-09", "17:00", "qf", "", "Ganador P89", "Ganador P90", "Gillette Stadium · Boston"),
  match(98, "2026-07-10", "16:00", "qf", "", "Ganador P93", "Ganador P94", "SoFi Stadium · Los Ángeles"),
  match(99, "2026-07-11", "18:00", "qf", "", "Ganador P91", "Ganador P92", "Hard Rock Stadium · Miami"),
  match(100, "2026-07-11", "22:00", "qf", "", "Ganador P95", "Ganador P96", "Arrowhead Stadium · Kansas City"),

  match(101, "2026-07-14", "16:00", "sf", "", "Ganador P97", "Ganador P98", "AT&T Stadium · Dallas"),
  match(102, "2026-07-15", "16:00", "sf", "", "Ganador P99", "Ganador P100", "Mercedes-Benz Stadium · Atlanta"),
  match(103, "2026-07-18", "18:00", "third", "", "Perdedor P101", "Perdedor P102", "Hard Rock Stadium · Miami"),
  match(104, "2026-07-19", "16:00", "final", "", "Ganador P101", "Ganador P102", "MetLife Stadium · Nueva Jersey"),
];

const coverage = {
  primary: [
    ["DSports", "104", "TV paga · Todos los encuentros"],
    ["Paramount+", "104", "Streaming · Todos desde el 1 de junio"],
    ["DGO", "104", "Streaming · Señales DSports"],
    ["Flow", "104", "Plataforma · Grilla completa reportada"],
  ],
  secondary: [
    ["TyC Sports", "50", "Selección de partidos"],
    ["Telefe", "30", "TV abierta · Selección de partidos"],
    ["Disney+", "30", "Streaming · Selección vía ESPN"],
    ["TV Pública", "ARG", "Argentina, semifinales y final"],
  ],
};

const argentinaMatches = matches.filter(
  (item) => item.home === "Argentina" || item.away === "Argentina",
);

const sortedMatches = [...matches].sort((a, b) =>
  `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`),
);

const state = {
  argentinaOnly: false,
  channel: "all",
  query: "",
  stage: "all",
};

const els = {
  argentinaFilter: document.querySelector("#argentina-filter"),
  argentinaGrid: document.querySelector("#argentina-grid"),
  channelFilter: document.querySelector("#channel-filter"),
  clearFilter: document.querySelector("#clear-filter"),
  countdown: document.querySelector("#countdown"),
  coveragePrimary: document.querySelector("#coverage-primary"),
  coverageSecondary: document.querySelector("#coverage-secondary"),
  emptyState: document.querySelector("#empty-state"),
  matchDetail: document.querySelector("#match-detail"),
  matchDialog: document.querySelector("#match-dialog"),
  resultsSummary: document.querySelector("#results-summary"),
  scheduleList: document.querySelector("#schedule-list"),
  searchInput: document.querySelector("#search-input"),
  sourcesDialog: document.querySelector("#sources-dialog"),
  stageFilter: document.querySelector("#stage-filter"),
};

function getChannels(item) {
  const channels = [...universalChannels];
  const argentinaGame = isArgentinaGame(item);

  if (item.id === 1 || argentinaGame || item.stage === "sf" || item.stage === "final") {
    channels.push("Telefe");
  }

  if (argentinaGame || item.stage === "sf" || item.stage === "final") {
    channels.push("TV Pública");
  }

  return channels;
}

function isArgentinaGame(item) {
  return item.home === "Argentina" || item.away === "Argentina";
}

function couldIncludeArgentina(item) {
  return !isArgentinaGame(item) && `${item.home} ${item.away}`.includes("Grupo J");
}

function normalize(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function formatLongDate(date) {
  const parsed = new Date(`${date}T12:00:00-03:00`);
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "long",
    timeZone: "America/Argentina/Buenos_Aires",
    weekday: "long",
  }).format(parsed);
}

function formatShortDate(date) {
  const parsed = new Date(`${date}T12:00:00-03:00`);
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "short",
    timeZone: "America/Argentina/Buenos_Aires",
    weekday: "short",
  })
    .format(parsed)
    .replace(".", "");
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderCoverageCards(items, container, primary) {
  container.innerHTML = items
    .map(
      ([name, count, description]) => `
        <article class="coverage-card ${primary ? "primary" : ""}">
          <small>${primary ? "COBERTURA COMPLETA" : "COBERTURA SELECTIVA"}</small>
          <b>${name}</b>
          <strong>${count}</strong>
          <span>${description}</span>
        </article>
      `,
    )
    .join("");
}

function renderArgentinaCards() {
  els.argentinaGrid.innerHTML = argentinaMatches
    .map((item, index) => {
      const rival = item.home === "Argentina" ? item.away : item.home;
      return `
        <article class="argentina-card">
          <p class="match-date card-label">PARTIDO 0${index + 1} · ${capitalize(formatShortDate(item.date))}</p>
          <h3>ARGENTINA</h3>
          <span class="versus">VS</span>
          <p class="opponent">${rival}</p>
          <footer>
            <span><b>${item.time} HS</b>HORA ARGENTINA</span>
            <span><b>${item.venue.split(" · ")[1]}</b>${item.venue.split(" · ")[0]}</span>
          </footer>
        </article>
      `;
    })
    .join("");
}

function filterMatches() {
  const query = normalize(state.query);

  return sortedMatches.filter((item) => {
    const channels = getChannels(item);
    const haystack = normalize(
      `${item.home} ${item.away} ${item.venue} ${item.group} ${STAGES[item.stage]} ${channels.join(" ")}`,
    );

    return (
      (state.stage === "all" || item.stage === state.stage) &&
      (state.channel === "all" || channels.includes(state.channel)) &&
      (!state.argentinaOnly || isArgentinaGame(item) || couldIncludeArgentina(item)) &&
      (!query || haystack.includes(query))
    );
  });
}

function renderSchedule() {
  const visibleMatches = filterMatches();
  const groups = Object.groupBy
    ? Object.groupBy(visibleMatches, (item) => item.date)
    : visibleMatches.reduce((acc, item) => {
        (acc[item.date] ||= []).push(item);
        return acc;
      }, {});

  els.emptyState.hidden = visibleMatches.length > 0;
  els.resultsSummary.textContent =
    visibleMatches.length === matches.length
      ? "Mostrando todos los encuentros"
      : `${visibleMatches.length} partido${visibleMatches.length === 1 ? "" : "s"} encontrado${visibleMatches.length === 1 ? "" : "s"}`;

  els.scheduleList.innerHTML = Object.entries(groups)
    .map(
      ([date, dateMatches]) => `
        <section class="date-group">
          <header class="date-heading">
            <b>${dateMatches.length}</b>
            <span>${capitalize(formatLongDate(date))}</span>
          </header>
          ${dateMatches.map(renderMatchRow).join("")}
        </section>
      `,
    )
    .join("");

  document.querySelectorAll("[data-match-id]").forEach((button) => {
    button.addEventListener("click", () => openMatch(Number(button.dataset.matchId)));
  });
}

function renderMatchRow(item) {
  const channels = getChannels(item);
  const dots = channels
    .map(
      (channel) =>
        `<i class="${channelClasses[channel]}" title="${channel}"></i>`,
    )
    .join("");

  return `
    <article class="match-row ${isArgentinaGame(item) ? "argentina" : ""}">
      <div class="match-time">
        <b>${item.time}</b>
        <span>HORA ARG</span>
      </div>
      <div class="match-teams">
        <b>${item.home}</b>
        <i>VS</i>
        <b>${item.away}</b>
      </div>
      <div class="match-meta">
        <span>${item.group || STAGES[item.stage]} · P${item.id}</span>
        <b>${item.venue}</b>
        <div class="channel-dots">${dots}</div>
      </div>
      <button class="match-action" type="button" data-match-id="${item.id}">DÓNDE VER</button>
    </article>
  `;
}

function openMatch(id) {
  const item = matches.find((candidate) => candidate.id === id);
  const channels = getChannels(item);
  const potentialNote = couldIncludeArgentina(item)
    ? "Este cruce podría incluir a Argentina según su posición en el Grupo J. Si juega la Selección, también se emitirá por Telefe y TV Pública."
    : "";

  els.matchDetail.innerHTML = `
    <p class="detail-stage">${STAGES[item.stage]} ${item.group ? `· ${item.group}` : ""} · Partido ${item.id}</p>
    <h2>${capitalize(formatLongDate(item.date))}</h2>
    <div class="detail-teams">
      <b>${item.home}</b>
      <i>VS</i>
      <b>${item.away}</b>
    </div>
    <div class="detail-facts">
      <div><small>Hora argentina</small><b>${item.time} HS · UTC-3</b></div>
      <div><small>Sede</small><b>${item.venue}</b></div>
    </div>
    <p class="dialog-section-title">Disponible en Argentina</p>
    <div class="badges">
      ${channels
        .map(
          (channel) =>
            `<span class="badge ${channel === "Telefe" || channel === "TV Pública" ? "public" : ""}">${channel}</span>`,
        )
        .join("")}
    </div>
    <p class="detail-note">
      DSports, DGO, Paramount+ y Flow cubren la grilla completa. TyC Sports y Disney+
      también ofrecen selecciones de partidos; revisá su programación cerca de la fecha.
      ${potentialNote}
    </p>
    <button class="calendar-button" type="button" data-calendar-id="${item.id}">
      AGREGAR AL CALENDARIO
    </button>
  `;

  els.matchDetail
    .querySelector("[data-calendar-id]")
    .addEventListener("click", () => downloadCalendar(item));
  els.matchDialog.showModal();
}

function formatICSDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function escapeICS(value) {
  return value.replace(/[\\,;]/g, "\\$&").replace(/\n/g, "\\n");
}

function downloadCalendar(item) {
  const start = new Date(`${item.date}T${item.time}:00-03:00`);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  const title = `Mundial 2026: ${item.home} vs ${item.away}`;
  const channels = getChannels(item).join(", ");
  const content = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//M26 Agenda//ES",
    "BEGIN:VEVENT",
    `UID:m26-${item.id}@agenda.local`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:${escapeICS(title)}`,
    `LOCATION:${escapeICS(item.venue)}`,
    `DESCRIPTION:${escapeICS(`Ver en Argentina: ${channels}. Horario Argentina UTC-3.`)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const file = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mundial-2026-partido-${item.id}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function updateCountdown() {
  const opening = new Date("2026-06-11T16:00:00-03:00");
  const remaining = Math.max(opening.getTime() - Date.now(), 0);
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const parts = [days, hours, minutes];

  els.countdown.querySelectorAll("b").forEach((element, index) => {
    element.textContent = String(parts[index]).padStart(2, "0");
  });
}

function clearFilters() {
  state.argentinaOnly = false;
  state.channel = "all";
  state.query = "";
  state.stage = "all";
  els.argentinaFilter.classList.remove("active");
  els.channelFilter.value = "all";
  els.searchInput.value = "";
  els.stageFilter.value = "all";
  renderSchedule();
}

function setArgentinaFilter(active = !state.argentinaOnly) {
  state.argentinaOnly = active;
  els.argentinaFilter.classList.toggle("active", active);
  renderSchedule();
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderSchedule();
  });

  els.stageFilter.addEventListener("change", (event) => {
    state.stage = event.target.value;
    renderSchedule();
  });

  els.channelFilter.addEventListener("change", (event) => {
    state.channel = event.target.value;
    renderSchedule();
  });

  els.argentinaFilter.addEventListener("click", () => setArgentinaFilter());
  els.clearFilter.addEventListener("click", clearFilters);

  document.querySelector("#show-argentina").addEventListener("click", () => {
    setArgentinaFilter(true);
    document.querySelector("#partidos").scrollIntoView({ behavior: "smooth" });
  });

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => els.matchDialog.close());
  });

  document.querySelectorAll("[data-close-sources]").forEach((button) => {
    button.addEventListener("click", () => els.sourcesDialog.close());
  });

  document.querySelectorAll("#open-sources, #open-sources-footer").forEach((button) => {
    button.addEventListener("click", () => els.sourcesDialog.showModal());
  });

  [els.matchDialog, els.sourcesDialog].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
}

function init() {
  renderCoverageCards(coverage.primary, els.coveragePrimary, true);
  renderCoverageCards(coverage.secondary, els.coverageSecondary, false);
  renderArgentinaCards();
  renderSchedule();
  bindEvents();
  updateCountdown();
  setInterval(updateCountdown, 60000);

  if (matches.length !== 104) {
    console.warn(`Se esperaban 104 partidos y hay ${matches.length}.`);
  }
}

init();
