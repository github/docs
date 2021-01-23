---
title: Administrar acceso de equipo a un tablero de proyecto de una organización
intro: 'Como propietario de la organización o administrador de un tablero de proyecto, puedes darle acceso de equipo a un tablero de proyecto propiedad de tu organización.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% warning %}

**Advertencias:**
- Puedes cambiar el nivel de permiso de un equipo si el equipo tiene acceso directo a un tablero de proyecto. Si el acceso del equipo a un tablero de proyecto se hereda de un equipo padre, debes cambiar el acceso del equipo padre al tablero de proyecto.
- Si agregas o eliminas acceso a un tablero de proyecto para un equipo padre, cada uno de esos equipos hijos también recibirá o perderá acceso al tablero de proyecto. Para obtener más información, consulta "[Acerca de los equipos](/articles/about-teams)".

{% endwarning %}

### Otorgarle a un equipo acceso a un tablero de proyecto

Puedes otorgarle a un equipo completo el mismo nivel de permiso a un tablero de proyecto.

{% note %}

**Nota:** {% data reusables.project-management.cascading-permissions %} Por ejemplo, si un propietario de la organización le ha otorgado a un equipo permisos de lectura a un tablero de proyecto y un administrador de tablero de proyecto le otorga a uno de los miembros del equipo permisos de administrador a ese tablero como colaborador individual, esa persona tendría permisos de administrador al tablero de proyecto. Para obtener más información, consulta "[Permisos de tablero de proyecto para una organización](/articles/project-board-permissions-for-an-organization)."

{% endnote %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.select-project %}
{% data reusables.project-management.click-menu %}
{% data reusables.project-management.access-collaboration-settings %}
8. En la barra lateral izquierda, haz clic en **Teams (Equipos)**.
9. Para agregar un equipo, haz clic en **Add a team: Select team (Agregar un equipo: seleccionar equipo)**. Después, elige un equipo del menú desplegable o busca el equipo que deseas agregar. ![Agregar un menú desplegable de equipo con una lista de equipos en la organización](/assets/images/help/projects/add-a-team.png)
10. Junto al nombre del equipo, utiliza el menú desplegable para seleccionar el nivel de permiso deseado: **Read** (Lectura), **Write** (Escritura) o **Admin** (Administración). ![Menú desplegable de permisos de equipo con opciones de lectura, escritura o administrador](/assets/images/help/projects/org-project-team-choose-permissions.png)

### Configurar el acceso de un equipo a un tablero de proyecto

Si un equipo hereda el acceso a un tablero de proyecto desde un equipo padre, deberás cambiar el acceso de dicho equipo padre a este tablero para actualizar el acceso de los equipos hijos.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. Encima de la conversación del equipo, haz clic en {% octicon "project" aria-label="The Projects icon" %} **Projects (Proyectos)**. ![La pestaña de repositorios del equipo](/assets/images/help/organizations/team-project-board-button.png)
5. Para cambiar los niveles de permiso, utiliza el menú desplegable que se encuentra al costado derecho del tablero de proyecto que quieres actualizar. Para elminar un tablero de proyecto, da clic en **{% octicon "trashcan" aria-label="The trashcan icon" %}**. ![Botón para eliminar un tablero de proyecto de la papelera del equipo](/assets/images/help/organizations/trash-button.png)
