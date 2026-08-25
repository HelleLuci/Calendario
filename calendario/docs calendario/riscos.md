# 🎲 Matriz de Riscos para o Portal Místico (docs/riscos.md)

Sabe-se que brincar com imagens e sorteios traz riscos de desempenho e experiência. Por isso aqui explico matriz de riscos para este site:

| ID | Categoria | Descrição do Risco | Probabilidade | Impacto | Ação de Mitigação (Prevenção) | Plano de Contingência |
| --- | --- | --- | --- | --- | --- | --- |
| R01 | Técnico | O JavaScript falhar ao carregar, deixando a tela travada em "Carregando Mês...". | Baixa | Alta | Escrever um código JS limpo e sem dependências externas. | Adicionar um texto padrão (fallback) no HTML caso o JS falhe. |
| R02 | UX / Performance | As imagens das criaturas serem muito pesadas e demorarem para aparecer na carta de tarô após o clique. | Média | Alta | Otimizar o tamanho das imagens (usando formatos como .webp) e tamanhos reduzidos antes de subir para o repositório. | Exibir um ícone de carregamento (spinner) dentro da carta enquanto a imagem carrega. |
| R03 | Inclusão | O botão de fechar (×) ser muito pequeno ou confuso para usuários idosos ou com dificuldades motoras. | Média | Média | Ajuste de CSS: Garantir que o botão de fechar tenha uma área de clique grande (mínimo de 44x44 pixels) e boa cor de contraste. | Permitir que a janela feche também se o usuário clicar em qualquer lugar fora da carta de tarô. |

------------------------------
