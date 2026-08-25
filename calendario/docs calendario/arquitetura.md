# 🏗️ Arquitetura do Sistema e Estrutura de Dados

Este documento detalha a organização interna do código do Portal Místico, mapeando como os dados e as funções foram modularizados para garantir alta performance e facilidade de manutenção.

---

## 📊 1. Modelo e Estrutura de Dados

O sistema gerencia dois conjuntos principais de dados em memória volátil (Arrays de Objetos):

### A. Matriz de Regência Mensal (12 Elementos)

Mapeia o mês atual do sistema operacional diretamente para uma criatura específica.

* **Campos:** `nome` (String), `criatura` (String), `elemento` (String), `imagem` (URL/String).

### B. Catálogo de Criaturas Companheiras (25 Elementos)

Acervo de criaturas disponíveis para sorteio lúdico.

* **Campos:** `nome` (String), `imagem` (URL/String), `raridade` (Enum/String), `poema` (String/Rima).
* **Divisão de Classes de Raridade:**
  * 🟢 **Comum:** Alta probabilidade de sorteio.
  * 🔵 **Raro:** Média probabilidade de sorteio.
  * 🟣 **Místico:** Baixa probabilidade de sorteio.
  * 👑 **Harley (Especial):** Raridade única e exclusiva do acervo.

---

## ⚙️ 2. Divisão de Responsabilidades do Código (Scripts)

Para evitar arquivos inflados (problema de acoplamento forte), a lógica do JavaScript foi dividida mentalmente em quatro camadas de execução:

1.**Camada de Dados Temáticos (Parte 1):** Declaração do dicionário/array estático dos 12 regentes dos meses.
2.**Camada de Dados de Recompensa (Parte 2):** Declaração do acervo dos 25 pets e suas rimas de quatro linhas.
3. *Camada de Sincronização Temporal (Parte 3):** Função que intercepta o relógio do sistema via `new Date().getMonth()`, renderiza os dados corretos no cabeçalho e trata falhas de carregamento através de estados de *fallback* poéticos.
4.  **Camada de Gamificação e Interface (Parte 4):** Motor aleatório que calcula o sorteio ponderado com base nas faixas de raridade, injeta as strings e URLs correspondentes na janela modal (`<div id="janela-magica">`) e altera a classe CSS para exibição em tela (`.classList.add('mostrar')`).

---

## 🔧 3. Guia de Extensibilidade (Manutenção Futura)

### Como Adicionar Novos Pets Poéticos

Para expandir o acervo de bem-estar do portal, basta localizar o array de criaturas da Parte 2 e inserir um novo objeto seguindo rigorosamente a tipagem abaixo:

```javascript
{
  nome: "Nome da Nova Criatura",
  raridade: "Comum", // Opções: Comum, Raro, Místico, Harley
  imagem: "URL_da_imagem_otimizada_em_webp",
  poema: "Rima simples de até quatro linhas\nPara o leitor ler sem pressa\nCausando calmaria na mente\nQue o ambiente digital estressa."
}
```
