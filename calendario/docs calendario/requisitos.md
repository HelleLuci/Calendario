# 📑 Especificação de Engenharia de Software: Portal Místico

Este documento formaliza as regras de negócio e requisitos do Portal Místico, um software focado em inclusão digital através de interações lúdicas e de baixa carga cognitiva.

---

## 🎯 1. Requisitos Funcionais (RF)

* **RF01 - Inicialização Dinâmica do Calendário:** Ao carregar a página, o sistema deve identificar o mês atual e preencher automaticamente o cabeçalho com o nome do mês e seu elemento regente.
* **RF02 - Acionamento de Invocação:** O sistema deve fornecer um botão místico central ("Revelar o Dia") para iniciar o sorteio da criatura.
* **RF03 - Exibição da Janela Mágica (Modal):** Após o clique, o sistema deve abrir uma janela sobreposta (estilo carta de tarô) contendo o nome da criatura, sua imagem e um poema acolhedor associado.
* **RF04 - Fechamento Amigável:** A janela mágica deve possuir um botão visível de fechamento (`×`) que retorne o usuário à tela inicial do calendário sem recarregar a página.

---

## 🛠️ 2. Requisitos Não-Funcionais (RNF)

* **RNF01 - Baixa Carga Cognitiva (Inclusão Digital):** A interface deve exigir apenas um único clique para entregar o valor principal do sistema, eliminando a necessidade de digitação ou navegação complexa pelo usuário.
* **RNF02 - Arquitetura de Componentes Nativos:** O controle de exibição da janela mágica deve ser feito manipulando classes CSS via JavaScript (`.classList.remove('mostrar')`), garantindo leveza e velocidade na execução.
* **RNF03 - Responsividade Imersiva:** O layout da carta de tarô deve se adaptar proporcionalmente ao tamanho da tela (celular, tablet ou desktop) mantendo a legibilidade do poema.

---

## 🛡️ 3. Regras de Negócio (RN)

* **RN01 - Sincronização Temporal com o Mundo Real:** A criatura regente exibida no cabeçalho não pode ser aleatória; ela deve ser calculada baseando-se estritamente no mês atual do calendário do sistema do usuário.
* **RN02 - Acoplamento de Atributos da Criatura (Integridade dos Dados):** O sistema não pode misturar os dados. Ao sortear uma criatura, a Imagem, o Nome e o Poema exibidos na tela devem obrigatoriamente pertencer ao mesmo conjunto de dados (ID do Pet).
* **RN03 - Ciclo de Interação Livre:** O usuário pode clicar no botão de invocação quantas vezes quiser por dia nesta versão (MVP), permitindo que ele brinque com o visual e descubra novas criaturas de forma livre e sem punições ou limites de tentativas.
* **RN04 - Neutralidade de Estado Inicial:** Antes do primeiro clique no botão, a janela modal deve permanecer completamente invisível e seu conteúdo interno (`src` da imagem e textos) não deve ocupar espaço visual ou interferir na leitura da tela inicial.
