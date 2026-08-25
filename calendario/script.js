// 🧙‍♂️ Script Mágico do Calendário Encantado, por hora dividido em blocos com os dicinários e funções lógicas
//  1. Banco de Dados dos Regentes dos Meses
const mesesRegentes = [
  {
    nome: "Janeiro",
    criatura: "Fênix Solar",
    elemento: "Fogo",
    imagem: "https://cdn.pixabay.com/photo/2023/08/01/16/20/ai-generated-8163302_1280.jpg",
  },
  {
    nome: "Fevereiro",
    criatura: "Pégaso Lunar",
    elemento: "Astral",
    imagem: "https://cdn.pixabay.com/photo/2023/11/05/18/57/ai-generated-8368152_1280.png",
  },
  { nome: "Março", criatura: "Silfo dos Ventos", elemento: "Ar", imagem: "" },
  {
    nome: "Abril",
    criatura: "Sereia Randy",
    elemento: "Água",
    imagem: "https://cdn.pixabay.com/photo/2021/11/09/02/05/fantasy-6780505_1280.png",
  },
  {
    nome: "Maio",
    criatura: "Golem de Pedra",
    elemento: "Terra",
    imagem: "https://cdn.pixabay.com/photo/2024/05/04/00/55/golem-8738112_1280.jpg",
  },
  {
    nome: "Junho",
    criatura: "Dragão de Gelo",
    elemento: "Gelo",
    imagem: "https://cdn.pixabay.com/photo/2026/06/28/19/25/19-25-18-537_1280.png",
  },
  {
    nome: "Julho",
    criatura: "Ninfa da Floresta",
    elemento: "Natureza",
    imagem: "https://cdn.pixabay.com/photo/2024/05/09/05/43/ai-generated-8749828_1280.jpg",
  },
  {
    nome: "Agosto",
    criatura: "Dríade Macarena",
    elemento: "Natureza",
    imagem: "https://cdn.pixabay.com/photo/2025/05/16/10/28/dark-dryad-9603536_1280.png",
  },
  {
    nome: "Setembro",
    criatura: "Grifo de Ouro",
    elemento: "Luz",
    imagem: "https://cdn.pixabay.com/photo/2025/02/28/01/01/ai-generated-9436401_1280.png",
  },
  {
    nome: "Outubro",
    criatura: "Quimera das Sombras",
    elemento: "Trevas",
    imagem: "https://cdn.pixabay.com/photo/2024/05/27/23/58/cat-8792516_1280.jpg",
  },
  {
    nome: "Novembro",
    criatura: "Centauro de Prata",
    elemento: "Metal",
    imagem: "https://cdn.pixabay.com/photo/2025/03/16/14/27/ai-generated-9474029_1280.jpg",
  },
  {
    nome: "Dezembro",
    criatura: "Espírito Mago das Estrelas",
    elemento: "Cosmo",
    imagem: "https://cdn.pixabay.com/photo/2024/05/08/19/09/ai-generated-8748966_1280.jpg",
  },
];
// 🐾 2. Banco de Dados dos Pets com as suas rimas
const listaDePets = [
  // Comuns
  {
    nome: "Raposa Vermelha",
    raridade: "Comum",
    poema: "Pelagem de fogo a correr, um segredo vem proteger.",
    imagem: "https://cdn.pixabay.com/photo/2023/10/17/13/59/ai-generated-8321384_1280.jpg",
  },
  {
    nome: "Gato da Noite",
    raridade: "Comum",
    poema: "Olhos que brilham na escuridão, guardam mistérios no coração.",
    imagem: "https://cdn.pixabay.com/photo/2024/08/09/15/46/ai-generated-8957564_1280.jpg",
  },
  {
    nome: "Libélula de Cristal",
    raridade: "Comum",
    poema: "Asas que brilham sob o luar, o tempo parece parar.",
    imagem: "https://cdn.pixabay.com/photo/2024/03/11/17/53/ai-generated-8627365_1280.png",
  },
  {
    nome: "Sapo Cururu Místico",
    raridade: "Comum",
    poema: "Na beira do caldeirão a coaxar, a boa sorte ele vai chamar.",
    imagem: "https://cdn.pixabay.com/photo/2024/02/19/17/19/ai-generated-8583850_1280.png",
  },
  {
    nome: "Esquilo",
    raridade: "Comum",
    poema: "Luzes douradas nas patas a carregar, o inverno não vai te assustar.",
    imagem: "https://cdn.pixabay.com/photo/2023/10/18/10/31/squirrel-8323679_1280.jpg",
  },
  {
    nome: "Morcego de Orelhas Longas",
    raridade: "Comum",
    poema: "Pequeno abraço de asas de algodão, voando baixo na sua direção.",
    imagem: "https://cdn.pixabay.com/photo/2025/01/05/01/04/ai-generated-9311092_1280.png",
  },
  {
    nome: "Furão Sombra",
    raridade: "Comum",
    poema: "Rápido e leve como o vento a passar, um sorriso ele vai te roubar.",
    imagem: "https://cdn.pixabay.com/photo/2025/12/07/07/42/ferret-9999684_1280.png",
  },
  // Raros
  {
    nome: "Raposa Branca",
    raridade: "Raro",
    poema: "Passos leves na neve a caçar, o frio do mundo não vai te tocar.",
    imagem: "https://cdn.pixabay.com/photo/2025/04/28/20/55/ai-generated-9565792_1280.jpg",
  },
  {
    nome: "Coruja de Asas Cósmicas",
    raridade: "Raro",
    poema: "Penas que guardam o céu estrelado, o universo caminha ao seu lado.",
    imagem: "https://cdn.pixabay.com/photo/2023/02/14/23/04/owl-7790576_1280.jpg",
  },
  {
    nome: "Salamandra de Fogo",
    raridade: "Raro",
    poema: "Nas cinzas quentes gosta de brincar, a sua coragem ela vai reacender.",
    imagem: "https://cdn.pixabay.com/photo/2023/04/21/16/41/ai-generated-7942261_1280.jpg",
  },
  {
    nome: "Mini Capivara d'Água",
    raridade: "Raro",
    poema: "Casca de rio e pelo que brilha, a paz reside na sua trilha.",
    imagem: "https://cdn.pixabay.com/photo/2023/04/10/14/59/capybara-7913987_1280.jpg",
  },
  {
    nome: "Cobrinha de Chifres",
    raridade: "Raro",
    poema: "No jardim élfico gosta de dormir, nenhum mal vai te atingir.",
    imagem: "https://cdn.pixabay.com/photo/2024/09/04/01/02/ai-generated-9020477_1280.jpg",
  },
  {
    nome: "Duas Cabeças de Dragão",
    raridade: "Raro",
    poema: "Duas lambidas para te dar, o dobro de amor para te curar.",
    imagem: "https://cdn.pixabay.com/photo/2024/08/06/06/59/ai-generated-8948556_1280.jpg",
  },
  {
    nome: "Monstrinho de Grandes Olhos",
    raridade: "Raro",
    poema: "Ele enxerga além do que se vê, e diz que o amanhã sorri para você.",
    imagem: "https://cdn.pixabay.com/photo/2026/07/27/20/45/20-45-52-716_1280.png",
  },
  // Místicos
  {
    nome: "Mini Gato feérico",
    raridade: "Místico",
    poema: "Não costumam ronronar, mas só querem seu carinho ganhar.",
    imagem: "https://pixabay.com/images/download/jcoope12-ai-generated-9393391_1920.jpg",
  },
  {
    nome: "Dragão Filhote",
    raridade: "Místico",
    poema: "Com carinho e atenção seus olhos te seguirão, um grande amigo na palma da mão.",
    imagem: "https://cdn.pixabay.com/photo/2024/07/11/13/12/ai-generated-8888181_1280.jpg",
  },
  {
    nome: "Serpente Branca Sagrada",
    raridade: "Místico",
    poema: "Chama sagrada que corre no chão, traz luz para a sua escuridão.",
    imagem: "https://cdn.pixabay.com/photo/2024/08/06/06/59/ai-generated-8948556_1280.jpg",
  },
  {
    nome: "Filhote de Pégaso",
    raridade: "Místico",
    poema: "Um dia as nuvens você vai tocar.",
    imagem: "https://cdn.pixabay.com/photo/2024/04/07/15/50/unicorn-8681671_1280.png",
  },
  {
    nome: "Mini Lagarto voador",
    raridade: "Místico",
    poema: "Olhar rápido no silêcio total, mas seu afeto é puro e real.",
    imagem:"https://pixabay.com/images/download/jcoope12-ai-generated-9342371_1920.jpg"
  },
  {
    nome: "Tartaruga de Casco de Cristal",
    raridade: "Místico",
    poema: "Passos lentos que carregam o mar, nenhuma pressa vai te alcançar.",
    imagem: "https://cdn.pixabay.com/photo/2024/04/28/19/52/ai-generated-8726192_1280.jpg",
  },
  {
    nome: "Pégaso de Bolso",
    raridade: "Místico",
    poema: "Se o seu dia hoje virou poeira, amanhã você brilha de qualquer maneira.",
    imagem: "https://pixabay.com/images/download/1tamara2-hands-8913508_1920.jpg",
  },
  {
    nome: "Felino Nuvem",
    raridade: "Místico",
    poema: "Feito de brisa, fofura e algodão, flutua leve no seu coração.",
    imagem: "https://cdn.pixabay.com/photo/2026/01/04/05/20/ice-10051406_1280.png",
  },
  {
    nome: "Elemental da Natureza",
    raridade: "Místico",
    poema: "Broto de luz, sorte gentil, que teu dia floresça sutil.",
    imagem: "https://cdn.pixabay.com/photo/2024/12/27/14/52/ai-generated-9294290_1280.jpg",
  },
  {
    nome: "Cervo Mágico",
    raridade: "Místico",
    poema: "Nas florestas místicas gosta de andar, as suas dores ele vai levar.",
    imagem: "https://cdn.pixabay.com/photo/2025/01/25/19/04/ai-generated-9359603_1280.jpg",
  },
  // Espírito
  {
    nome: "Harley",
    raridade: "Espírito",
    poema: "Confusão e alegria no ar, o caos sagrado veio te saudar!",
    imagem: "https://cdn.pixabay.com/photo/2025/01/14/20/58/jester-9333656_1280.png",
  },
];
// 🧙‍♂️ 3. Lógica para Definir o Criatura do Mês Atual automaticamente
function iniciarPortal() {
  const dataAtual = new Date();
  const mesAtual = dataAtual.getMonth();

  const regenteDoMes = mesesRegentes[mesAtual];

  document.getElementById("nome-mes").innerText = regenteDoMes.nome;
  document.getElementById("criatura-regente").innerText =
    `Regido por: ${regenteDoMes.criatura} (${regenteDoMes.elemento})`;

  //  A MÁGICA: Pega o link direto do objeto e joga no fundo do site
  document.body.style.backgroundImage = `url('${regenteDoMes.imagem}')`;
}
//============================================================
// 4. A Função Mística de Sorteio com Sistema de Raridade (Gacha)
function sortearPetDoDia() {
  // Passo 1: Sorteia um número de 1 a 100
  const numeroSorteado = Math.floor(Math.random() * 100) + 1;
  let raridadeEscolhida = "Comum";

  // Passo 2: Define a raridade com base nas chances (pesos)
  if (numeroSorteado <= 2) {
    raridadeEscolhida = "Espírito"; // 2% de chance (O Harley!)
  } else if (numeroSorteado <= 20) {
    raridadeEscolhida = "Místico"; // 18% de chance (Do número 3 ao 20)
  } else if (numeroSorteado <= 50) {
    raridadeEscolhida = "Raro"; // 30% de chance (Do número 21 ao 50)
  } else {
    raridadeEscolhida = "Comum"; // 50% de chance (Do número 51 ao 100)
  }

  // Passo 3: Filtra o banco de dados para pegar apenas os pets da raridade sorteada
  const petsDaMesmaRaridade = listaDePets.filter(
    (pet) => pet.raridade === raridadeEscolhida
  );

  // Passo 4: Sorteia um pet específico dentro dessa lista filtrada
  const indiceAleatorio = Math.floor(
    Math.random() * petsDaMesmaRaridade.length
  );
  const petSorteado = petsDaMesmaRaridade[indiceAleatorio];

  // Passo 5: Atualiza a janela mágica (modal) na tela
  document.getElementById("modal-pet-nome").innerText = `${petSorteado.nome}`;
  document.getElementById("modal-pet-poema").innerText =
    `"${petSorteado.poema}"`;
  document.getElementById("modal-pet-imagem").src = petSorteado.imagem;

  // Remove e adiciona as cores da raridade na carta para dar um efeito visual incrível
  const carta = document.querySelector(".carta-taro");
  carta.className = `carta-taro ${raridadeEscolhida.toLowerCase()}`;

  // Mostra a janela mágica na tela
  document.getElementById("janela-magica").classList.add("mostrar");
}
window.onload = function () {
  iniciarPortal();
};

