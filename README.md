# Hub Castilho

Página de links no estilo "link na bio" do Instagram: quem sou, minha formação,
áreas de atuação e todos os meus contatos num só lugar.

## Como editar

Tudo fica em **`config.js`**: nome, profissão, bio, foto, botões, formação e áreas.
Abra o arquivo, troque os textos entre aspas e salve. Não é preciso mexer nos outros arquivos.

- **Foto:** coloque a imagem na pasta (ex.: `foto.jpg`) e escreva `foto: "foto.jpg"`.
  Sem foto, aparecem as iniciais do nome.
- **Botões:** cada item de `links` vira um botão. Ícones disponíveis:
  `instagram`, `whatsapp`, `linkedin`, `email`, `github`, `site`, `doc`.
  Use `destaque: true` para deixar um botão colorido (o principal).
- **WhatsApp:** o link é `https://wa.me/55` + DDD + número, só números. Ex.: `https://wa.me/5511999998888`.

Para ver no computador, basta abrir o `index.html` no navegador.

## Como publicar de graça (GitHub Pages)

1. No GitHub, abra o repositório → **Settings** → **Pages**.
2. Em **Source**, escolha **Deploy from a branch**, selecione a branch onde está o site (ex.: `main`) e a pasta `/ (root)`.
3. Salve. Em um ou dois minutos o site fica no ar em
   `https://engcastilho.github.io/HUB-CASTILHO/`.
4. Cole esse endereço no campo **Site** do seu perfil do Instagram.

## Arquivos

- `config.js` — seus dados (o único que você precisa editar).
- `index.html` — estrutura da página.
- `style.css` — visual (cores, tamanhos). Tema claro e escuro automáticos.
- `app.js` — monta a página a partir do `config.js`.
