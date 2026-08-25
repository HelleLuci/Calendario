# 🧪 Plano de Testes de Caixa Preta: Portal Místico

Este documento registra os roteiros de teste utilizados para validar a resiliência da interface e garantir que usuários com baixo letramento ou ansiosos nunca fiquem travados.

---

## 📋 CT-01: Validação do Fluxo de Exceção (Clique Duplo Rápido / Ansiedade)

* **Objetivo:** Garantir que se um usuário ansioso clicar várias vezes seguidas no botão por pressa, o sistema não trave a tela ou sobreponha várias animações.
* **Pré-condição:** O site deve estar carregado na tela inicial do calendário.
* **Dados de Entrada (Ação do Usuário):** Clicar no botão "Revelar o Dia" 5 vezes seguidas em menos de 2 segundos.
* **Resultado Esperado:** O sistema deve desabilitar o botão após o primeiro clique ou ignorar os cliques repetidos, mantendo apenas uma única janela de carregamento ativa.
* **Resultado Obtido:** [ Passou ]

---

### 📋 CT-02: Validação de Resiliência de Dados (O Risco de Março)

* **Objetivo:** Garantir que o sistema não exiba uma imagem quebrada caso o banco de dados falhe no envio da URL da foto.
* **Pré-condição:** O relógio do computador deve ser alterado manualmente para o mês de Março (onde a string de imagem está vazia `""`).
* **Dados de Entrada (Ação do Usuário):** Atualizar a página e clicar no botão "Revelar o Dia".
* **Resultado Esperado:** A carta de tarô deve abrir normalmente exibindo a imagem padrão (fallback) do ateliê, sem ícone de imagem corrompida.
* **Resultado Obtido:** [ Falhou ]
* **A imagem foi inserida no mês faltante pois, o teste falhou.**
