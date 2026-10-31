// =====================================================================
//  EDITE AQUI: todas as informações do seu hub ficam neste arquivo.
//  Troque os textos entre aspas. Para remover um item, apague a linha
//  (ou o bloco { ... }) inteira. Para adicionar, copie um bloco e cole.
// =====================================================================

window.HUB = {
  // Nome que aparece em destaque
  nome: "Castilho",

  // Uma linha curta abaixo do nome (profissão / área)
  titulo: "[Sua profissão] · [Sua área]",

  // Cidade / estado (deixe "" para esconder)
  local: "[Cidade - UF]",

  // Foto: coloque o arquivo na pasta do projeto (ex.: foto.jpg) e escreva o
  // nome aqui. Deixe "" para mostrar as iniciais no lugar da foto.
  foto: "",

  // Texto curto de apresentação (2 a 3 frases)
  bio: "[Escreva aqui quem você é, o que faz e como pode ajudar quem chegou pelo seu Instagram.]",

  // Botões principais (aparecem em lista, um embaixo do outro)
  // icone: instagram | whatsapp | linkedin | email | github | site | doc
  links: [
    { texto: "Fale comigo no WhatsApp", url: "https://wa.me/55DDDNUMERO", icone: "whatsapp", destaque: true },
    { texto: "Instagram", url: "https://instagram.com/SEU_USUARIO", icone: "instagram" },
    { texto: "LinkedIn", url: "https://linkedin.com/in/SEU_USUARIO", icone: "linkedin" },
    { texto: "Castilho AI — meu chatbot de IA", url: "https://github.com/engcastilho/Castilho-AI-", icone: "github" },
    { texto: "Currículo (PDF)", url: "#", icone: "doc" },
    { texto: "E-mail", url: "mailto:SEU_EMAIL", icone: "email" },
  ],

  // Formação acadêmica (do mais recente para o mais antigo)
  formacao: [
    { curso: "[Nome do curso]", instituicao: "[Instituição]", periodo: "[Ano – Ano]" },
    // { curso: "Pós-graduação em ...", instituicao: "...", periodo: "2024 – 2025" },
  ],

  // Habilidades / áreas de atuação (aparecem como etiquetas)
  areas: ["[Área 1]", "[Área 2]", "[Área 3]"],

  // Texto do rodapé
  rodape: "© " + new Date().getFullYear() + " Castilho",
};
