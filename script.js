// 🧙‍♂️ Script Mágico do Calendário Encantado
import { listaDePets, mesesRegentes } from "./criaturas.js";
// 🧙‍♂️ 1. Lógica para Definir o Criatura do Mês Atual automaticamente
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
// 2. A Função Mística de Sorteio com Sistema de Raridade (Gacha)
function sortearPetDoDia() {
  // 2.1 Passo 1: Sorteia um número de 1 a 100
  const numeroSorteado = Math.floor(Math.random() * 100) + 1;
  let raridadeEscolhida = "Comum";

  // 2.2 Passo 2: Define a raridade com base nas chances (pesos)
  if (numeroSorteado <= 2) {
    raridadeEscolhida = "Espírito"; // 2% de chance (O Harley!)
  } else if (numeroSorteado <= 20) {
    raridadeEscolhida = "Místico"; // 18% de chance (Do número 3 ao 20)
  } else if (numeroSorteado <= 50) {
    raridadeEscolhida = "Raro"; // 30% de chance (Do número 21 ao 50)
  } else {
    raridadeEscolhida = "Comum"; // 50% de chance (Do número 51 ao 100)
  }

  // 2.3 Passo 3: Filtra o banco de dados para pegar apenas os pets da raridade sorteada
  const petsDaMesmaRaridade = listaDePets.filter(
    (pet) => pet.raridade === raridadeEscolhida
  );

  // 2.4 Passo 4: Sorteia um pet específico dentro dessa lista filtrada
  const indiceAleatorio = Math.floor(
    Math.random() * petsDaMesmaRaridade.length
  );
  const petSorteado = petsDaMesmaRaridade[indiceAleatorio];

  // 2.5 Passo 5: Atualiza a janela mágica (modal) na tela
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
const botaoInvocar = document.querySelector(".botao-invocar");
window.onload = function () {
  iniciarPortal();
  botaoInvocar.addEventListener("click", sortearPetDoDia);
};

