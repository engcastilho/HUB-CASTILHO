// Monta a página a partir de config.js. Normalmente não é preciso mexer aqui.
(function () {
  const hub = window.HUB || {};
  const $ = (id) => document.getElementById(id);

  const svg = (d) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

  const ICONES = {
    instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>'),
    whatsapp: svg('<path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3a8.5 8.5 0 1 1 15.5-4.6z"/><path d="M9 8.5c0 3.5 2.9 6.5 6.5 6.5l1-1.6-2-1-1 .9c-1-.4-2-1.4-2.4-2.4l.9-1-1-2-1.6.6"/>'),
    linkedin: svg('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.5v.01M12 16v-5.5M12 13c0-1.5 1-2.5 2.3-2.5S16 11.3 16 13v3"/>'),
    email: svg('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>'),
    github: svg('<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.9-2.4c3-.3 6-1.5 6-6.6a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.8 12.8 0 0 0-6.7 0C5.6 1 4.5 1.3 4.5 1.3a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3 8.5c0 5.1 3 6.3 6 6.6a3 3 0 0 0-.9 2.4V21"/>'),
    site: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
    doc: svg('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
  };
  const SETA = svg('<path d="M7 17 17 7M8 7h9v9"/>');

  const texto = (el, valor) => {
    if (valor) el.textContent = valor;
    else el.remove();
  };

  // Perfil
  const nome = hub.nome || "";
  document.title = nome ? `${nome} · Links` : document.title;
  texto($("nome"), nome);
  texto($("titulo"), hub.titulo);
  texto($("local"), hub.local);
  texto($("bio"), hub.bio);

  const avatar = $("avatar");
  if (hub.foto) {
    const img = document.createElement("img");
    img.src = hub.foto;
    img.alt = nome;
    avatar.appendChild(img);
  } else {
    avatar.textContent = nome.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
  }

  // Links
  const links = $("links");
  (hub.links || []).forEach((l) => {
    const a = document.createElement("a");
    a.className = "link" + (l.destaque ? " destaque" : "");
    a.href = l.url;
    if (/^https?:/.test(l.url)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    a.innerHTML = (ICONES[l.icone] || ICONES.site) + "<span></span>" + SETA;
    a.querySelector("span").textContent = l.texto;
    links.appendChild(a);
  });

  // Formação
  const formacao = hub.formacao || [];
  if (formacao.length) {
    formacao.forEach((f) => {
      const li = document.createElement("li");
      li.innerHTML = '<span class="curso"></span><span class="detalhe"></span>';
      li.querySelector(".curso").textContent = f.curso;
      li.querySelector(".detalhe").textContent = [f.instituicao, f.periodo].filter(Boolean).join(" · ");
      $("formacao").appendChild(li);
    });
  } else {
    $("bloco-formacao").remove();
  }

  // Áreas
  const areas = hub.areas || [];
  if (areas.length) {
    areas.forEach((a) => {
      const li = document.createElement("li");
      li.textContent = a;
      $("areas").appendChild(li);
    });
  } else {
    $("bloco-areas").remove();
  }

  texto($("rodape"), hub.rodape);
})();
