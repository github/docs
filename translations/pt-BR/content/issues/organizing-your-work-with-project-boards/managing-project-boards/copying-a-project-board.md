---
title: 'Copiando um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode copiar um {% data variables.projects.projects_v1_board %} para criar rapidamente um novo projeto. Copiar com freqüência ou {% data variables.projects.projects_v1_boards %} altamente personalizado ajuda a padronizar seu fluxo de trabalho.'
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

Copiar um {% data variables.projects.projects_v1_board %} permite que você reutilize um título, descrição e configuração de automação de {% data variables.projects.projects_v1_board %}. Você pode copiar {% data variables.projects.projects_v1_boards %} para eliminar o processo manual de criação de novos {% data variables.projects.projects_v1_boards %} para fluxos de trabalho similares.

Você deve ter acesso de leitura a um {% data variables.projects.projects_v1_board %} para copiá-lo para um repositório ou organização onde tenha acesso de gravação.

Ao copiar um {% data variables.projects.projects_v1_board %} para uma organização, a visibilidade do {% data variables.projects.projects_v1_board %} será padrão para privado, com uma opção para mudar a visibilidade. Para obter mais informações, consulte "[Alterando a visibilidade de {% data variables.product.prodname_project_v1 %}](/articles/changing-project-board-visibility/)".

A automação de um {% data variables.projects.projects_v1_board %} também é habilitada por padrão. Para obter mais informações, consulte "[Sobre automação para {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards/)".

1. Acesse o {% data variables.projects.projects_v1_board %} que você deseja copiar.
{% data reusables.project-management.click-menu %}
3. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e, em seguida, em **Copy** (Copiar). ![Opção de cópia no menu suspenso da barra lateral do quadro de projeto](/assets/images/help/projects/project-board-copy-setting.png)
4. Em "Owner" (Proprietário), use o menu suspenso e clique no repositório ou na organização em que deseja copiar o quadro de projeto. ![Selecionar proprietário do quadro de projeto copiado no menu suspenso](/assets/images/help/projects/copied-project-board-owner.png)
5. Opcionalmente, no "Nome do quadro do projeto", digite o nome do {% data variables.projects.projects_v1_board %} copiado. ![Campo para digitar um nome para o quadro de projeto copiado](/assets/images/help/projects/copied-project-board-name.png)
6. Se desejar, em "Description" (Descrição), digite uma descrição do quadro de projeto copiado que outras pessoas verão. ![Campo para digitar uma descrição para o quadro de projeto copiado](/assets/images/help/projects/copied-project-board-description.png)
7. Se desejar, em "Automation settings" (Configurações de automação), selecione se deseja copiar os fluxos de trabalho automáticos configurados. Essa opção é habilitada por padrão. Para obter mais informações, consulte "[Sobre a automação para quadros de projeto](/articles/about-automation-for-project-boards/)". ![Configurações de seleção de automação para o quadro de projeto copiado](/assets/images/help/projects/copied-project-board-automation-settings.png)
{% data reusables.project-management.choose-visibility %}
9. Clique em **Copy project** (Copiar projeto). ![Botão Confirm Copy (Confirmar cópia)](/assets/images/help/projects/confirm-copy-project-board.png)
