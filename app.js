// Monta a página a partir de config.js. Normalmente não é preciso mexer aqui.
(function () {
  const hub = window.HUB || {};
  const $ = (id) => document.getElementById(id);

  const svg = (d) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

  const ICONES = {
    whatsapp: svg('<path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.5-4.3a8.5 8.5 0 1 1 15.5-4.6z"/><path d="M9 8.5c0 3.5 2.9 6.5 6.5 6.5l1-1.6-2-1-1 .9c-1-.4-2-1.4-2.4-2.4l.9-1-1-2-1.6.6"/>'),
    youtube: svg('<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/>'),
    linkedin: svg('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.5v.01M12 16v-5.5M12 13c0-1.5 1-2.5 2.3-2.5S16 11.3 16 13v3"/>'),
    instagram: svg('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>'),
    email: svg('<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>'),
    site: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
    doc: svg('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
    contato: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M19 3v4M17 5h4"/>'),
  };
  const SETA = svg('<path d="M9 6l6 6-6 6"/>').replace("<svg ", '<svg class="seta" ');

  const el = (tag, classe, conteudo) => {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (conteudo) e.textContent = conteudo;
    return e;
  };
  const texto = (alvo, valor) => (valor ? (alvo.textContent = valor) : alvo.remove());
  const abrirFora = (a, url) => {
    if (/^https?:/.test(url)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  };

  // Animação em cascata: cada elemento entra um pouco depois do anterior
  let atraso = 0.15;
  const animar = (e) => {
    e.classList.add("anima");
    e.style.setProperty("--atraso", atraso.toFixed(2) + "s");
    atraso += 0.07;
  };

  // Perfil
  const nomeCompleto = [hub.nome, hub.sobrenome].filter(Boolean).join(" ");
  if (nomeCompleto) document.title = nomeCompleto;

  if (hub.foto) {
    const img = document.createElement("img");
    img.src = hub.foto;
    img.alt = nomeCompleto;
    img.decoding = "async";
    $("foto").appendChild(img);
  } else {
    $("foto").remove();
  }

  texto($("rotulo"), hub.rotulo);
  const h1 = $("nome");
  h1.textContent = (hub.nome || "") + " ";
  if (hub.sobrenome) h1.appendChild(el("em", "", hub.sobrenome));

  const local = $("local");
  [hub.local, hub.registro].filter(Boolean).forEach((t) => local.appendChild(el("span", "", t)));
  if (!local.children.length) local.remove();

  texto($("bio"), hub.bio);
  ["rotulo", "nome", "local", "bio"].forEach((id) => $(id) && animar($(id)));

  // Links
  const links = $("links");
  if (hub.principal) {
    const a = el("a", "principal");
    a.href = hub.principal.url;
    abrirFora(a, hub.principal.url);
    a.appendChild(el("strong", "", hub.principal.texto));
    if (hub.principal.descricao) a.appendChild(el("small", "", hub.principal.descricao));
    links.appendChild(a);
    animar(a);
  }

  (hub.links || []).forEach((l) => {
    const a = el("a", "link");
    a.href = l.url;
    abrirFora(a, l.url);
    a.innerHTML = `<span class="icone">${ICONES[l.icone] || ICONES.site}</span><span class="textos"></span>${SETA}`;
    const textos = a.querySelector(".textos");
    textos.appendChild(el("strong", "", l.texto));
    if (l.descricao) textos.appendChild(el("small", "", l.descricao));
    links.appendChild(a);
    animar(a);
  });

  if (hub.salvarContato) {
    const a = el("a", "contato");
    a.href = "contato.vcf";
    a.setAttribute("download", "Michael Castilho.vcf");
    a.innerHTML = ICONES.contato + "<span>Salvar contato</span>";
    links.appendChild(a);
    animar(a);
  }

  // Frase
  const frase = $("frase");
  if (hub.frase && hub.frase.texto) {
    frase.appendChild(el("p", "", "“" + hub.frase.texto + "”"));
    if (hub.frase.autor) frase.appendChild(el("cite", "", "— " + hub.frase.autor));
    animar(frase);
  } else {
    frase.remove();
  }

  // Atuação
  const atuacao = hub.atuacao || [];
  if (atuacao.length) {
    atuacao.forEach((item) => {
      const li = el("li");
      li.appendChild(el("strong", "", item.titulo));
      if (item.detalhe) li.appendChild(el("span", "", item.detalhe));
      $("atuacao").appendChild(li);
    });
    animar($("bloco-atuacao"));
  } else {
    $("bloco-atuacao").remove();
  }

  // Formação
  const formacao = hub.formacao || [];
  if (formacao.length) {
    formacao.forEach((f) => {
      const li = el("li");
      if (f.periodo) li.appendChild(el("span", "periodo", f.periodo));
      li.appendChild(el("strong", "", f.curso));
      if (f.instituicao) li.appendChild(el("span", "inst", f.instituicao));
      $("formacao").appendChild(li);
    });
    animar($("bloco-formacao"));
  } else {
    $("bloco-formacao").remove();
  }

  texto($("rodape"), hub.rodape);
})();
