---
title: 'Inhabilitar los {% data variables.projects.projects_v1_boards %} en un repositorio'
intro: 'Los administradores de repositorio pueden apagar los {% data variables.projects.projects_v1_boards %} para un repositorio si tú o tu equipo administra el trabajo de forma distinta.'
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
shortTitle: 'Inhabilitar los {% data variables.projects.projects_v1_boards %}'
allowTitleToDifferFromFilename: true
---

Cuando inhabilitas los {% data variables.projects.projects_v1_boards %}, ya no verás la información del {% data variables.projects.projects_v1_board %} en las líneas de tiempo ni en las [bitácoras de auditoría](/articles/reviewing-your-security-log/).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Características", quita la marca de selección de la casilla de verificación **Proyectos**. ![Casilla de verificación Eliminar proyectos](/assets/images/help/projects/disable-projects-checkbox.png)

After {% data variables.projects.projects_v1_boards %} are disabled, existing {% data variables.projects.projects_v1_boards %} are inaccessible at their previous URLs. {% data reusables.organizations.disable_project_board_results %}
