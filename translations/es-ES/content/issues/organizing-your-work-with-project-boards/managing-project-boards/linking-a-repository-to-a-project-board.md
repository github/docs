---
title: Vincular un repositorio a un tablero de proyecto
intro: Puedes enlazar un repositorio al tablero de proyecto de tu cuenta personal o de organización.
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Enlazar un repositorio al tablero
---

{% data reusables.projects.project_boards_old %}

Cualquiera con permisos de escritura en un tablero de proyecto puede enlazar repositorios que sean propiedad de la cuenta personal o de organización al mismo. Para obtener más información, consulta la sección "[Permisos para una organización sobre el tablero de proyecto](/articles/project-board-permissions-for-an-organization/)" o "[Niveles de permiso para tableros de proyecto propiedad de un usuario](/articles/permission-levels-for-user-owned-project-boards/)".

{% data reusables.project-management.link-repos-to-project-board %} Puedes agregar propuestas y solicitudes de extracción desde cualquier repositorio no vinculado escribiendo la URL de la propuesta o de la solicitud de extracción en una tarjeta. Para obtener más información, consulta "[Agregar propuestas y solicitudes de extracción a un tablero de proyecto](/articles/adding-issues-and-pull-requests-to-a-project-board)".

1. Navega hasta el tablero de proyecto al que quieras vincular un repositorio.
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
4. En la barra lateral izquierda, haz clic en **Linked repositories** (Repositorios vinculados). ![Opción del menú Linked repositories (Repositorios vinculados) en la barra lateral izquierda](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Haz clic en **Link a repository** (Vincular un repositorio). ![Botón Link a repository (Vincular un repositorio) en la pestaña Linked repositories (Repositorios vinculados)](/assets/images/help/projects/link-repository-button.png)
6. Busca el repositorio que quieras vincular. ![Campo de búsqueda en la ventana Link a repository (Vincular un repositorio)](/assets/images/help/projects/search-to-link-repository.png)
7. Da clic en **Enlace**. Para desvincular, haz clic en **Unlink** (Desvincular). ![Botón Link (Vincular)](/assets/images/help/projects/link-button.png)

{% note %}

**Nota:** Para poder vincular el repositorio a tu tablero de proyectos que pertenece a tu organización o usuario, el repositorio necesita que se le habiliten las propuestas. Es decir, el repositorio tiene una pestaña de "Propuestas" (en los repositorios bifurcados, las propuestas se inhabilitan predeterminadamente).  Para obtener más información sobre cómo habilitar o inhabilitar las propuestas en un repositorio, consulta la sección "[Inhabilitar las propuestas en un repositorio](/github/managing-your-work-on-github/disabling-issues)".

{% endnote %}

## Leer más

- "[Acerca de los tableros de proyectos](/articles/about-project-boards)"
