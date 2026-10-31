# Hub Castilho

Página de links "link na bio" do Michael Castilho: quem sou, formação, atuação,
comunidade CCIA e contatos num só lugar. Visual escuro com detalhes em dourado,
feito primeiro para celular.

## Como editar

Quase tudo fica em **`config.js`**: nome, rótulo, bio, botão principal, links,
frase, atuação e formação. Abra, troque os textos entre aspas e salve.

**Falta preencher** (estão como `#LINK_...` ou `DDDNUMERO`):
- link da CCIA, do YouTube e do LinkedIn em `config.js`;
- número do WhatsApp em `config.js` (`https://wa.me/55` + DDD + número, só números,
  ex.: `https://wa.me/5569999998888`);
- o mesmo número em **`contato.vcf`** (linha `TEL`, ex.: `+5569999998888`). É esse
  arquivo que o botão "Salvar contato" entrega para a agenda do celular.

Outras dicas:
- **Foto:** `foto.webp`, com fundo transparente. Para trocar, use outra imagem sem
  fundo com o mesmo nome.
- **Ícones disponíveis:** `whatsapp`, `youtube`, `linkedin`, `instagram`, `email`, `site`, `doc`.

Para ver no computador, abra o `index.html` no navegador.

## Como publicar de graça (GitHub Pages)

1. No GitHub, abra o repositório → **Settings** → **Pages**.
2. Em **Source**, escolha **Deploy from a branch**, selecione a branch onde está o site (ex.: `main`) e a pasta `/ (root)`.
3. Salve. Em um ou dois minutos o site fica no ar em
   `https://engcastilho.github.io/HUB-CASTILHO/`.
4. Cole esse endereço no campo **Site** do seu perfil do Instagram.

## Arquivos

- `config.js` — seus dados.
- `contato.vcf` — cartão de contato do botão "Salvar contato".
- `foto.webp` — sua foto sem fundo.
- `index.html` — estrutura da página.
- `style.css` — visual (cores, letras, animação de entrada).
- `app.js` — monta a página a partir do `config.js`.
