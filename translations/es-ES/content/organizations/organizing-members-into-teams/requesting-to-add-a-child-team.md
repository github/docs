---
title: Solicitar agregar un equipo hijo
intro: 'Si tienes permisos de mantenedor en un equipo, puedes solicitar anidar un equipo existente en tu equipo en la jerarquía de tu organización.'
redirect_from:
  - /articles/requesting-to-add-a-child-team
  - /github/setting-up-and-managing-organizations-and-teams/requesting-to-add-a-child-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Cuando solicitas agregar un equipo como hijo, se envía una solicitud a los mantenedores del equipo hijo. Una vez que un mantenedor del equipo hijo aprueba tu solicitud, el equipo hijo se anida en el equipo padre de la jerarquía de tu organización.

Si eres propietario de una organización o tienes permisos de mantenedor del equipo tanto en el equipo hijo como en el equipo padre, puedes agregar el equipo hijo sin solicitar aprobación o modificar el padre del equipo hijo desde la página de configuraciones del equipo hijo. Para obtener más información, consulta "[Mover un equipo en la jerarquía de tu organización](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.teams %}
4. En la lista de equipos, haz clic en el nombre del equipo al que quieres agregar el equipo hijo. ![Lista de los equipos de la organización](/assets/images/help/teams/click-team-name.png)
5. En la parte superior de la página del equipo, haz clic en {% octicon "people" aria-label="The people icon" %} **Teams** (Equipos). ![Pestaña de equipos en la página de un equipo](/assets/images/help/teams/team-teams-tab.png)
6. Haz clic en **Add a team** (Agregar un equipo). ![Botón Add a team (Agregar un equipo) en una página de equipo](/assets/images/help/teams/add-a-team.png)
7. Escribe el nombre del equipo que quieres agregar como equipo hijo y selecciónalo desde la lista desplegable. ![Recuadro para escribir y menú desplegable para seleccionar el nombre del equipo hijo](/assets/images/help/teams/type-child-team-name.png)
{% data reusables.repositories.changed-repository-access-permissions %}
9. Haz clic en **Confirm changes** (Confirmar cambios) para enviar una solicitud para agregar al equipo hijo. ![Casilla modal para información acerca de los cambios en los permisos de acceso del repositorio](/assets/images/help/teams/confirm-new-parent-team.png)

### Leer más

- [Acerca de los equipos](/articles/about-teams)"
- "[Mover un equipo en la jerarquía de tu organización](/articles/moving-a-team-in-your-organization-s-hierarchy)"
- "[Solicitar agregar o modificar un equipo padre](/articles/requesting-to-add-or-change-a-parent-team)"
