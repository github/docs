---
title: 'Fechando um {% data variables.product.prodname_project_v1 %}'
intro: 'Se você tiver concluído todas as tarefas em um {% data variables.projects.projects_v1_board %} ou não precisar mais usar um {% data variables.projects.projects_v1_board %}, você pode fechar o {% data variables.projects.projects_v1_board %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/closing-a-project-board
  - /articles/closing-a-project
  - /articles/closing-a-project-board
  - /github/managing-your-work-on-github/closing-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Ao fechar um {% data variables.projects.projects_v1_board %}, qualquer automação de fluxo de trabalho configurada será pausada por padrão.

Se você reabrir um {% data variables.projects.projects_v1_board %}, você terá a opção de *sincronizar* automação, que atualiza a posição dos cartões no quadro de acordo com as configurações de automação configuradas para o quadro. Para obter mais informações, consulte "[Reabrindo um {% data variables.product.prodname_project_v1 %} fechado](/articles/reopening-a-closed-project-board)" ou "[Sobre automação para {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

1. Acesse a lista de {% data variables.projects.projects_v1_boards %} no seu repositório ou organização, ou pertencente à sua conta pessoal.
2. Na lista de projetos, ao lado de {% data variables.projects.projects_v1_board %} que você deseja fechar, clique em {% octicon "chevron-down" aria-label="The chevron icon" %}. ![Ícone de divisa à direita do nome do quadro de projeto](/assets/images/help/projects/project-list-action-chevron.png)
3. Clique em **Fechar**. ![Menu suspenso para fechar item no quadro de projeto](/assets/images/help/projects/close-project.png)

## Leia mais

- "[Sobre o {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
- "[Excluindo um {% data variables.product.prodname_project_v1 %}](/articles/deleting-a-project-board)"
- "[Desabilitando {% data variables.product.prodname_projects_v1 %} em um repositório](/articles/disabling-project-boards-in-a-repository)"
- "[Desabilitando {% data variables.product.prodname_projects_v1 %} na sua organização](/articles/disabling-project-boards-in-your-organization)"
- "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization)"
