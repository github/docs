---
title: 'Arquivando cartões em um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode arquivar cartões de {% data variables.projects.projects_v1_board %} para organizar seu fluxo de trabalho sem perder o contexto histórico de um projeto.'
redirect_from:
  - /github/managing-your-work-on-github/tracking-the-progress-of-your-work-with-project-boards/archiving-cards-on-a-project-board
  - /articles/archiving-cards-on-a-project-board
  - /github/managing-your-work-on-github/archiving-cards-on-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: 'Arquivar cartões em {% data variables.product.prodname_project_v1 %}'
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

A automação em seu {% data variables.projects.projects_v1_board %} não se aplica aos cartões de {% data variables.projects.projects_v1_board %} arquivados. Por exemplo, se você fechar um problema no arquivo de um {% data variables.projects.projects_v1_board %}, o cartão arquivado não irã mover-se automaticamente para a coluna "Concluído". Ao restaurar um cartão do arquivo {% data variables.projects.projects_v1_board %}, o cartão retornará à coluna onde foi arquivado.

## Arquivando cartões em um {% data variables.projects.projects_v1_board %}

1. Em um {% data variables.projects.projects_v1_board %}, encontre o cartão que você deseja arquivar e, em seguida, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Lista de opções para edição de um cartão do quadro de projeto](/assets/images/help/projects/select-archiving-options-project-board-card.png)
2. Clique em **Arquivar**. ![Opção de seleção de arquivamento no menu](/assets/images/help/projects/archive-project-board-card.png)

## Restaurando os cartões de um {% data variables.projects.projects_v1_board %} na barra lateral

{% data reusables.project-management.click-menu %}
2. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **View archive** (Exibir arquivamento). ![Opção de seleção de exibição de arquivamento no menu](/assets/images/help/projects/select-view-archive-option-project-board-card.png)
3. Acima do cartão {% data variables.projects.projects_v1_board %} que deseja desarquivar, clique em **Restaurar**. ![Seleção da restauração do cartão do quadro de projeto](/assets/images/help/projects/restore-card.png)
