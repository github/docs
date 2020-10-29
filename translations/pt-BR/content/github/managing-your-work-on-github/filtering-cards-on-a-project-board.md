---
title: Filtrar cartões em um quadro de projeto
intro: É possível filtrar um cartão em um quadro de projetos para pesquisar cartões específicos ou visualizar uma subcategoria de cartões.
redirect_from:
  - /articles/filtering-cards-on-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Em um cartão, você pode clicar em qualquer responsável, marco ou etiqueta para filtrar o quadro de projeto por esse qualificador. Para limpar a pesquisa, você pode clicar no mesmo responsável, marco ou etiqueta novamente.

Também é possível usar a barra de pesquisa "Filter cards" (Fitrar cartões) que está na parte superior de cada quadro de projetos para pesquisar por cartões. Você pode filtrar cartões usando os seguintes qualificadores de pesquisa em qualquer combinação ou simplesmente digitando algum texto que você gostaria de pesquisar.

- Filtrar cartões por autor com `author:USERNAME`
- Filtrar cartões por responsável com `assignee:USERNAME` ou `no:assignee`
- Filtrar cartões por etiqueta usando `label:LABEL`, `label:"MULTI-WORD LABEL NAME"` ou `no:label`
- Filtrar por marco com `milestone:MY-MILESTONE`
- Filtrar cartões por estado com `state:open`, `state:closed` ou `state:merged`
- Filtrar por status de revisão com `review:none`, `review:required`, `review:approved` ou `review:changes_requested`
- Filtrar cartões por status de verificação com `status:pending`, `status:success` ou `status:failure`
- Filtrar cartões por tipo com `type:issue`, `type:pr` ou `type:note`
- Filtrar cartões por estado e tipo com `is:open`, `is:closed` ou `is:merged`; e `is:issue`, `is:pr` ou `is:note`
- Filtrar cartões por problemas vinculados a um pull request por uma referência de fechamento usando `linked:pr`{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 0" %}
- Filtrar cartões por repositório em um quadro de projetos de toda a organização usando `repo:ORGANIZATION/REPOSITORY`{% endif %}

1. Navegue até o quadro de projetos que contém os cartões que você deseja filtrar.
2. Acima da coluna cartão de projeto, clique na barra de pesquisa "Filter cards" (Filtrar cartões) e digite uma consulta para filtrar os cartões. ![Barra de pesquisa Filter card (Filtrar cartões)](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Dica:** é possível arrastar e soltar cartões filtrados ou usar atalhos no teclado para movê-los entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

### Leia mais

- "[Sobre quadros de projetos](/articles/about-project-boards)"
- "[Adicionar problemas e pull requests a um quadro de projeto](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Adicionar observações em um quadro de projeto](/articles/adding-notes-to-a-project-board)"
