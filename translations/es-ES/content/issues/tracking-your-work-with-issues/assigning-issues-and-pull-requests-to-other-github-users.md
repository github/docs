---
title: Asignar propuestas y solicitudes de extracción a otros usuarios de GitHub
intro: Los asignatarios aclaran quién está trabajando en propuestas y solicitudes de extracción específicas.
permissions: 'Anyone with write access to a repository can assign issues and pull requests. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/assigning-issues-and-pull-requests-to-other-github-users
  - /articles/assigning-issues-and-pull-requests-to-other-github-users
  - /github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users
  - /issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Asignar propuestas & solicitudes de cambio
---

## Acerca de los asignatarios de las propuestas y solicitudes de cambios

You can assign multiple people to each issue or pull request, including yourself, anyone who has commented on the issue or pull request, anyone with write permissions to the repository, and organization members with read permissions to the repository. Para obtener más información, consulta "[Permisos de acceso en {% data variables.product.prodname_dotcom %}](/articles/access-permissions-on-github)".

Issues and pull requests in public repositories, and in private repositories for a paid account, can have up to 10 people assigned. Private repositories on the free plan are limited to one person per issue or pull request.

## Asignar una propuesta o solicitud de cambios individual

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Abre la propuesta o solicitud de cambios que quieras asignarle a alguien.
4. Si no se ha asignado a nadie a la solicitud de cambios o propuesta, haz clic en **asignarte a ti mismo** para asignarte a ti mismo. ![El elemento de asignarte a ti mismo](/assets/images/help/issues/assign_yourself.png)
5. En el menú lateral derecho, haz clic en **Asignatarios**. ![El elemento de menú de Asignatarios](/assets/images/help/issues/assignee_menu.png)
6. Para asignar la solicitud de cambios o propuesta a un usurio, comienza a teclear su nombre de usuario y luego haz clic en su nombre cuando aparezca. Puedes seleccionar y asignar hasta 10 asignatarios a una propuesta o solicitud de extracción. ![Desplegable de la asignación de propuestas](/assets/images/help/issues/issues_assigning_dropdown.png)

## Asignar solicitudes de extracción o propuestas múltiples

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
3. Selecciona la casilla de verificación junto a los elementos que deseas asignar a alguien. ![Casilla de verificación de metadatos de propuestas](/assets/images/help/issues/issues_assign_checkbox.png)
4. En la esquina superior derecha, haz clic en **Asignar**.
5. Para asignar los elementos a un usuario, comienza escribiendo su nombre de usuario, luego haz clic en su nombre cuando aparezca. Puedes seleccionar y asignar hasta 10 asignatarios a una propuesta o solicitud de extracción. ![Desplegable de la asignación de propuestas](/assets/images/help/issues/issues_assigning_dropdown.png)

## Leer más

* "[Filtrar propuestas y solicitudes de extracción por asignatarios](/articles/filtering-issues-and-pull-requests-by-assignees)"
