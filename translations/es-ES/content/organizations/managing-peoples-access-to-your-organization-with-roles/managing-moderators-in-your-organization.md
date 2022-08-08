---
title: Administrar moderadores en tu organización
intro: Puedes proporcionar a un individuo o equipo de tu organización la capacidad de bloquear y limitar el acceso si les asignas el rol de moderador.
permissions: Organization owners can assign the moderator role.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Community
shortTitle: Administrar moderadores
---

## Acerca de los moderadores de las organizaciones

Algunas veces es necesario bloquear a un contribuyente o configurar los límites de interacción de tu organización o para los repositorios individuales. Como propietario de organización, puedes llevar a cabo estas tareas, pero podrías necesitar delegar estas tareas a otros miembros de tu organización. Puedes hacer esto asignando el rol de moderador a un miembro de la organización o a un equipo.

Los moderadores de las organizaciones pueden:
* Bloquear y desbloquear a los usuarios de la organización. Para obtener más información, consulta "[Bloquear un usuario de tu organización](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization)".
* Administrar los límites de interacción de la organización. Para obtener más información, consulta "[Limitar las interacciones en tu organización](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-organization)".
* Administrar los límites de interacción del repositorio. Para obtener más información, consulta "[Limitar las interacciones en tu repositorio](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository)".
* Ocultar los comentarios en todos los repositorios públicos que le pertenecen a la organización. Para obtener más información, consulta la sección "[Administrar los comentarios ofensivos](/communities/moderating-comments-and-conversations/managing-disruptive-comments)".

El convertir a alguien en moderador de la organización no le otorgará capacidades adicionales mas que las que se listan anteriormente. Por ejemplo, alguien que solo tenga acceso de lectura a un repositorio no obtendrá acceso de escritura solo porque se haya convertido en moderador.

Puedes agregar hasta 10 personas o equipos individuales como moderadores. Si ya asignaste a 10 individuos o equipos como usuarios y quieres agregar más, puedes agrupar personas en un equipo de moderador y luego utilizarlas para reemplazar a una o más de las tareas existentes. Para obtener más información, consulta la sección "[Crear un equipo](/organizations/organizing-members-into-teams/creating-a-team)".

## Agregar a un moderador de organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. En la sección "Acceso" de la barra lateral, selecciona **{% octicon "report" aria-label="The report icon" %} Moderación** y luego haz clic en **Moderadores**.
1. Debajo de **Moderadores**, busca y selecciona la persona o equipo a la que le quieras asignar el rol de moderador. Cada persona o equipo que selecciones aparecerá en una lista debajo de la barra de búsqueda. ![El campo y lista de búsqueda de moderadores](/assets/images/help/organizations/add-moderators.png)


## Eliminar a un moderador de organización

Sigue los pasos anteriores del 1 al 3, luego haz clic en **Eliminar moderador** al costado de la persona o equipo que quieras eliminar como moderador.
