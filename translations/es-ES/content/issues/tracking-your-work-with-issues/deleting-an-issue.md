---
title: Eliminar una propuesta
intro: Los usuarios con permisos de administración en un repositorio determinado pueden eliminar una propuesta de manera permanente de ese repositorio.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/deleting-an-issue
  - /articles/deleting-an-issue
  - /github/managing-your-work-on-github/deleting-an-issue
  - /issues/tracking-your-work-with-issues/creating-issues/deleting-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

The ability to delete issues depends on whether the repository is owned by a personal account or an organization:
- The only account that can delete issues in a repository owned by a personal account is that account.
- Only accounts with admin or owner permissions can delete issues in a repository owned by an organization.

  To delete an issue in a repository owned by an organization, an organization owner must enable deleting issues for the organization's repositories. Para obtener más información, consulta la sección "[Permitir que se eliminen propuestas en tu organización](/articles/allowing-people-to-delete-issues-in-your-organization)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Collaborators do not receive a notification when issues are deleted. When visiting the URL of a deleted issue, collaborators will see a message stating that the web page can't be found (but they can use the API to determine that it was deleted). Los usuarios con permisos de propietario o de administración en el repositorio verán también el nombre de usuario de la persona que eliminó la propuesta y la fecha en que se la eliminó.

1. Dirígete a la propuesta que deseas eliminar.
2. En la barra lateral derecha, debajo de "Notificaciones", da clic en **Borrar informe de problemas**. ![Texto de "Borrar informe de problemas" resaltado al final de la barra lateral derecha de la página del informe de problemas](/assets/images/help/issues/delete-issue.png)
4. Para confirmar la eliminación, haz clic en **Eliminar esta propuesta**.

## Leer más

- "[Enlazar una solicitud de extracción a un informe de problemas](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)"
