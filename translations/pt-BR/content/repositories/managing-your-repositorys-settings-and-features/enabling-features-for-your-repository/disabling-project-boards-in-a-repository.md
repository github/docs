---
title: 'Desabilitando {% data variables.projects.projects_v1_boards %} em um repositório'
intro: 'Os administradores do repositório podem desativar {% data variables.projects.projects_v1_boards %} para um repositório, se você ou sua equipe gerenciarem trabalhos de forma diferente.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/disabling-project-boards-in-a-repository
  - /articles/disabling-project-boards-in-a-repository
  - /github/managing-your-work-on-github/disabling-project-boards-in-a-repository
  - /github/administering-a-repository/managing-repository-settings/disabling-project-boards-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: 'Desabilite {% data variables.projects.projects_v1_boards %}'
allowTitleToDifferFromFilename: true
---

Ao desabilitar {% data variables.projects.projects_v1_boards %}, você não verá mais as informações de {% data variables.projects.projects_v1_board %} em linhas do tempo ou em [logs de auditoria](/articles/reviewing-your-security-log/).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em "Features" (Recursos), desmarque a caixa de seleção **Projects** (Projetos). ![Caixa de seleção Remove Projects (Remover projetos)](/assets/images/help/projects/disable-projects-checkbox.png)

Após {% data variables.projects.projects_v1_boards %} ser desabilitado, {% data variables.projects.projects_v1_boards %} existente poderá ser acessado nas suas URLs anteriores. {% data reusables.organizations.disable_project_board_results %}
