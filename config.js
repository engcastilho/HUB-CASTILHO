// =====================================================================
//  EDITE AQUI: todas as informações do seu hub ficam neste arquivo.
//  Troque os textos entre aspas. Para remover um item, apague a linha
//  (ou o bloco { ... }) inteira. Para adicionar, copie um bloco e cole.
// =====================================================================

window.HUB = {
  // O sobrenome aparece em itálico dourado
  nome: "Michael",
  sobrenome: "Castilho",

  // Linha dourada, em maiúsculas, acima do nome
  rotulo: "Engenheiro · Professor de IA",

  // Linha pequena abaixo do nome (cidade e registro)
  local: "Alta Floresta D'Oeste – RO",
  registro: "CREA 24464D-RO",

  // Foto (arquivo na pasta do projeto, com fundo transparente)
  foto: "foto.webp",

  bio: "Engenheiro civil e de segurança do trabalho, assessor parlamentar e professor de Inteligência Artificial. Aqui você encontra minha comunidade, meus conteúdos e meus contatos.",

  // Botão dourado principal
  principal: {
    texto: "Quero entrar na CCIA",
    descricao: "Comunidade Castilho de Inteligência Artificial",
    url: "#LINK_DA_CCIA",
  },

  // Demais botões
  // icone: whatsapp | youtube | linkedin | instagram | email | site | doc
  links: [
    { texto: "WhatsApp", descricao: "Fale comigo direto", url: "https://wa.me/55DDDNUMERO", icone: "whatsapp" },
    { texto: "YouTube", descricao: "Aulas e conteúdos sobre IA", url: "#LINK_DO_YOUTUBE", icone: "youtube" },
    { texto: "LinkedIn", descricao: "Trajetória profissional", url: "#LINK_DO_LINKEDIN", icone: "linkedin" },
  ],

  // Botão "Salvar contato": baixa o arquivo contato.vcf, que o iPhone e o
  // Android abrem direto na agenda. Os dados do contato ficam em contato.vcf.
  salvarContato: true,

  frase: {
    texto: "Cada dia é uma aventura para dar uma volta por cima.",
    autor: "Ítalo Marsili",
  },

  atuacao: [
    { titulo: "Assessor Parlamentar", detalhe: "4 anos de experiência no Legislativo" },
    { titulo: "Engenheiro Civil e de Segurança do Trabalho", detalhe: "CREA 24464D-RO" },
    { titulo: "Professor e Advisor de IA", detalhe: "Ensino e consultoria em Inteligência Artificial" },
  ],

  // Formação (do mais recente para o mais antigo)
  formacao: [
    { periodo: "Em andamento", curso: "Pós-graduação em Gestão Pública Municipal", instituicao: "UNIR – Universidade Federal de Rondônia" },
    { periodo: "2023 – 2024", curso: "Engenharia de Segurança do Trabalho", instituicao: "Centro Universitário União das Américas Descomplica" },
    { periodo: "2018 – 2022", curso: "Engenharia Civil", instituicao: "FAROL" },
  ],

  rodape: "© " + new Date().getFullYear() + " Michael Castilho",
};
