---
title: 'Copying a {% data variables.product.prodname_project_v1 %}'
intro: 'You can copy a {% data variables.projects.projects_v1_board %} to quickly create a new project. Copying frequently used or highly customized {% data variables.projects.projects_v1_boards %} helps standardize your workflow.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/copying-a-project-board
  - /articles/copying-a-project-board
  - /github/managing-your-work-on-github/copying-a-project-board
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pull requests
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Copying a {% data variables.projects.projects_v1_board %} allows you to reuse a {% data variables.projects.projects_v1_board %}'s title, description, and automation configuration. You can copy {% data variables.projects.projects_v1_boards %} to eliminate the manual process of creating new {% data variables.projects.projects_v1_boards %} for similar workflows.

You must have read access to a {% data variables.projects.projects_v1_board %} to copy it to a repository or organization where you have write access.

When you copy a {% data variables.projects.projects_v1_board %} to an organization, the {% data variables.projects.projects_v1_board %}'s visibility will default to private, with an option to change the visibility. For more information, see "[Changing {% data variables.product.prodname_project_v1 %} visibility](/articles/changing-project-board-visibility/)."

A {% data variables.projects.projects_v1_board %}'s automation is also enabled by default. For more information, see "[About automation for {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards/)."

1. Navigate to the {% data variables.projects.projects_v1_board %} you want to copy.
{% data reusables.project-management.click-menu %}
3. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, em **Copy** (Copiar). ![Opção de cópia no menu suspenso da barra lateral do quadro de projeto](/assets/images/help/projects/project-board-copy-setting.png)
4. Em "Owner" (Proprietário), use o menu suspenso e clique no repositório ou na organização em que deseja copiar o quadro de projeto. ![Selecionar proprietário do quadro de projeto copiado no menu suspenso](/assets/images/help/projects/copied-project-board-owner.png)
5. Optionally, under "Project board name", type the name of the copied {% data variables.projects.projects_v1_board %}. ![Campo para digitar um nome para o quadro de projeto copiado](/assets/images/help/projects/copied-project-board-name.png)
6. Se desejar, em "Description" (Descrição), digite uma descrição do quadro de projeto copiado que outras pessoas verão. ![Campo para digitar uma descrição para o quadro de projeto copiado](/assets/images/help/projects/copied-project-board-description.png)
7. Se desejar, em "Automation settings" (Configurações de automação), selecione se deseja copiar os fluxos de trabalho automáticos configurados. Essa opção é habilitada por padrão. Para obter mais informações, consulte "[Sobre a automação para quadros de projeto](/articles/about-automation-for-project-boards/)". ![Configurações de seleção de automação para o quadro de projeto copiado](/assets/images/help/projects/copied-project-board-automation-settings.png)
{% data reusables.project-management.choose-visibility %}
9. Clique em **Copy project** (Copiar projeto). ![Botão Confirm Copy (Confirmar cópia)](/assets/images/help/projects/confirm-copy-project-board.png)
