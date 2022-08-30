---
title: 'Filtrando cartões em um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode filtrar os cartões em um {% data variables.projects.projects_v1_board %} para pesquisar cartões específicos ou ver um subconjunto dos cartões.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filtrando cartões em {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Em um cartão, você pode clicar em qualquer atribuído, marco ou etiqueta para filtrar o {% data variables.projects.projects_v1_board %} por esse qualificador. Para limpar a pesquisa, você pode clicar no mesmo responsável, marco ou etiqueta novamente.

Você também pode usar a barra de pesquisa "Filtrar cartões" na parte superior de cada {% data variables.projects.projects_v1_board %} para pesquisar cartões. Você pode filtrar cartões usando os seguintes qualificadores de pesquisa em qualquer combinação ou simplesmente digitando algum texto que você gostaria de pesquisar.

- Filtrar cartões por autor com `author:USERNAME`
- Filtrar cartões por responsável com `assignee:USERNAME` ou `no:assignee`
- Filtrar cartões por etiqueta usando `label:LABEL`, `label:"MULTI-WORD LABEL NAME"` ou `no:label`
- Filtrar por marco com `milestone:MY-MILESTONE`
- Filtrar cartões por estado com `state:open`, `state:closed` ou `state:merged`
- Filtrar por status de revisão com `review:none`, `review:required`, `review:approved` ou `review:changes_requested`
- Filtrar cartões por status de verificação com `status:pending`, `status:success` ou `status:failure`
- Filtrar cartões por tipo com `type:issue`, `type:pr` ou `type:note`
- Filtrar cartões por estado e tipo com `is:open`, `is:closed` ou `is:merged`; e `is:issue`, `is:pr` ou `is:note`
- Filtrar cartões por problemas vinculados a um pull request por uma referência de fechamento usando `linked:pr`
- Filtrar cartões por repositório em uma organização {% data variables.projects.projects_v1_board %} usando `repo:ORGANIZATION/REPOSITORY`

1. Acesse {% data variables.projects.projects_v1_board %} que contém os cartões que você deseja filtrar.
2. Acima da coluna cartão de projeto, clique na barra de pesquisa "Filter cards" (Filtrar cartões) e digite uma consulta para filtrar os cartões. ![Barra de pesquisa Filter card (Filtrar cartões)](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Dica:** é possível arrastar e soltar cartões filtrados ou usar atalhos no teclado para movê-los entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Adicionando problemas e pull requests a um {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Adicionando observações a um {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)"
