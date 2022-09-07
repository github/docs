---
title: 'Enlazar un repositorio a un {% data variables.product.prodname_project_v1 %}'
intro: 'Puedes enlazar un repositorio al {% data variables.projects.projects_v1_board %} de tu cuenta personal o de organización.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Enlazar un repositorio al tablero
allowTitleToDifferFromFilename: true
---

{% data reusables.projects.project_boards_old %}

Cualquiera con permisos de escritura en un {% data variables.projects.projects_v1_board %} puede enlazar repositorios que le pertenezcan a dicha organización o cuenta personal al {% data variables.projects.projects_v1_board %}. Para obtener más información, consulta la sección "[Permisos de los {% data variables.product.prodname_project_v1_caps %} para una organización](/articles/project-board-permissions-for-an-organization/)" o "[Niveles de permiso para los {% data variables.product.prodname_projects_v1 %} que pertenecen a usuarios](/articles/permission-levels-for-user-owned-project-boards/)".

{% data reusables.project-management.link-repos-to-project-board %} Puedes agregar propuestas y solicitudes de extracción desde cualquier repositorio no vinculado escribiendo la URL de la propuesta o de la solicitud de extracción en una tarjeta. Para obtener más información, consulta la sección "[Agregar propuestas y solicitudes de cambio a un {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)".

1. Navega al {% data variables.projects.projects_v1_board %} en donde quieres enlazar un repositorio.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. En la barra lateral izquierda, haz clic en **Linked repositories** (Repositorios vinculados). ![Opción del menú Linked repositories (Repositorios vinculados) en la barra lateral izquierda](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Haz clic en **Link a repository** (Vincular un repositorio). ![Botón Link a repository (Vincular un repositorio) en la pestaña Linked repositories (Repositorios vinculados)](/assets/images/help/projects/link-repository-button.png)
6. Busca el repositorio que quieras vincular. ![Campo de búsqueda en la ventana Link a repository (Vincular un repositorio)](/assets/images/help/projects/search-to-link-repository.png)
7. Da clic en **Enlace**. Para desvincular, haz clic en **Unlink** (Desvincular). ![Botón Link (Vincular)](/assets/images/help/projects/link-button.png)

{% note %}

**Nota:** Para enlazar un repositorio a tu {% data variables.projects.projects_v1_board %} que pertenece a un usuario u organización, el repositorio necesita tener habilitadas las propuestas. Es decir, el repositorio tiene una pestaña de "Propuestas" (en los repositorios bifurcados, las propuestas se inhabilitan predeterminadamente).  Para obtener más información sobre cómo habilitar o inhabilitar las propuestas en un repositorio, consulta la sección "[Inhabilitar las propuestas en un repositorio](/github/managing-your-work-on-github/disabling-issues)".

{% endnote %}

## Leer más

- "[Acerca de {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
