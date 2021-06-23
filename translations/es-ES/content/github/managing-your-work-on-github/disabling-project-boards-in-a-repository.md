---
title: Inhabilitar los tableros de proyecto en un repositorio
intro: Los administradores de los repositorios pueden desactivar los tableros de proyecto para un repositorio si tanto tu equipo como tú administran el trabajo de forma diferente.
redirect_from:
  - /articles/disabling-project-boards-in-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Cuando inhabilitas los tableros de proyecto, ya no ves la información de los tableros de proyecto de manera cronológica o de acuerdo con los [registros de auditoría](/articles/reviewing-your-security-log/).

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. En "Características", quita la marca de selección de la casilla de verificación **Proyectos**. ![Casilla de verificación Eliminar proyectos](/assets/images/help/projects/disable-projects-checkbox.png)

Una vez que se inhabilitan los tableros de proyecto, ya no se puede acceder a ellos en sus URL anteriores. {% data reusables.organizations.disable_project_board_results %}
