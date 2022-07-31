---
title: 'Filtering cards on a {% data variables.product.prodname_project_v1 %}'
intro: 'You can filter the cards on a {% data variables.projects.projects_v1_board %} to search for specific cards or view a subset of the cards.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/filtering-cards-on-a-project-board
  - /articles/filtering-cards-on-a-project-board
  - /github/managing-your-work-on-github/filtering-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Filter cards on {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

On a card, you can click any assignee, milestone, or label to filter the {% data variables.projects.projects_v1_board %} by that qualifier. Para limpar a pesquisa, você pode clicar no mesmo responsável, marco ou etiqueta novamente.

You can also use the "Filter cards" search bar at the top of each {% data variables.projects.projects_v1_board %} to search for cards. Você pode filtrar cartões usando os seguintes qualificadores de pesquisa em qualquer combinação ou simplesmente digitando algum texto que você gostaria de pesquisar.

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
- Filter cards by repository in an organization-wide {% data variables.projects.projects_v1_board %} using `repo:ORGANIZATION/REPOSITORY`

1. Navigate to the {% data variables.projects.projects_v1_board %} that contains the cards you want to filter.
2. Acima da coluna cartão de projeto, clique na barra de pesquisa "Filter cards" (Filtrar cartões) e digite uma consulta para filtrar os cartões. ![Barra de pesquisa Filter card (Filtrar cartões)](/assets/images/help/projects/filter-card-search-bar.png)

{% tip %}

**Dica:** é possível arrastar e soltar cartões filtrados ou usar atalhos no teclado para movê-los entre colunas. {% data reusables.project-management.for-more-info-project-keyboard-shortcuts %}

{% endtip %}

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Adding issues and pull requests to a {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)"
- "[Adding notes to a {% data variables.product.prodname_project_v1 %}](/articles/adding-notes-to-a-project-board)"
