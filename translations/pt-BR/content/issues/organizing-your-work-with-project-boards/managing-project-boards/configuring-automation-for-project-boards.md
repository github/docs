---
title: 'Configurando automação para {% data variables.product.prodname_projects_v1 %}'
intro: 'Você pode configurar fluxos de trabalho automáticos para transferir problemas e pull requests para uma coluna de {% data variables.projects.projects_v1_board %} quando ocorrer um evento especificado.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/configuring-automation-for-project-boards
  - /articles/configuring-automation-for-project-boards
  - /github/managing-your-work-on-github/configuring-automation-for-project-boards
versions:
  feature: projects-v1
topics:
  - Pull requests
  - Projects
  - Issues
  - Project management
shortTitle: Configurar automação
type: how_to
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

{% data reusables.project-management.automate-project-board-permissions %} Para obter mais informações, consulte "[Sobre automação para {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.resync-automation %}

{% tip %}

**Dica**: para editar colunas com automação já configurada, clique em **Manage** (Gerenciar) na parte inferior da coluna.

{% endtip %}

1. Acesse o {% data variables.projects.projects_v1_board %} que você deseja automatizar.
2. Na coluna que deseja automatizar, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. ![Ícone Edit (Editar)](/assets/images/help/projects/edit-column-button.png)
3. Clique em **Manage automation** (Gerenciar automação). ![Botão Manage automation (Gerenciar automação)](/assets/images/help/projects/manage-automation-button.png)
4. Usando o menu suspenso Preset (Predefinida), selecione uma automação predefinida. ![Selecionar automação predefinida no menu](/assets/images/help/projects/select-automation.png)
5. Selecione as automações do fluxo de trabalho que deseja configurar para a coluna. ![Lista de opções para automação da coluna](/assets/images/help/projects/select-automation-options-existing-column.png)
6. Clique em **Update automation** (Atualizar automação).

## Leia mais
- "[Sobre automação para {% data variables.product.prodname_projects_v1 %}](/articles/about-automation-for-project-boards)"
