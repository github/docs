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

Solo puedes borrar las propuestas en un repositorio que le pertenezca a tu cuenta personal. No puedes borrar propuestas en los repositorios que pertenezcan a otra cuenta personal, incluso si eres un colaborador en ella.

Para eliminar una propuesta en un repositorio que sea propiedad de una organización, un propietario de la organización debe habilitar la eliminación de una propuesta para los repositorios de la organización, y tú debes tener permisos de propietario o de administración en ese repositorio. Para obtener más información, consulta la sección "[Permitir que se eliminen propuestas en tu organización](/articles/allowing-people-to-delete-issues-in-your-organization)" y "[Roles de repositorio para una organización](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

Los colaboradores no reciben una notificación cuando eliminas una propuesta. Cuando visiten la URL de una propuesta que ha sido eliminada, los colaboradores verán un mensaje que dice que la propuesta se ha eliminado. Los usuarios con permisos de propietario o de administración en el repositorio verán también el nombre de usuario de la persona que eliminó la propuesta y la fecha en que se la eliminó.

1. Dirígete a la propuesta que deseas eliminar.
2. En la barra lateral derecha, debajo de "Notificaciones", da clic en **Borrar informe de problemas**. ![Texto de "Borrar informe de problemas" resaltado al final de la barra lateral derecha de la página del informe de problemas](/assets/images/help/issues/delete-issue.png)
4. Para confirmar la eliminación, haz clic en **Eliminar esta propuesta**.

## Leer más

- "[Enlazar una solicitud de extracción a un informe de problemas](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)"
