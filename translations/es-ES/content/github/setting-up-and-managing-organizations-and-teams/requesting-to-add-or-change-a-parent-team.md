---
title: Solicitar agregar o modificar un equipo padre
intro: 'Si tienes permisos de mantenedor en un equipo, puedes solicitar anidar tu equipo bajo un equipo padre en la jerarquía de tu organización.'
redirect_from:
  - /articles/requesting-to-add-or-change-a-parent-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Cuando solicitas agregar o modificar el padre de tu equipo, se envía una solicitud a los mantenedores del equipo padre. Cuando un mantenedor del nuevo equipo padre aprueba tu solicitud, tu equipo se anida como equipo hijo en bajo el equipo padre en la jerarquía de tu organización.

Si eres propietario de la organización o tienes permisos de mantenedor del equipo en el equipo hijo y el equipo padre, puedes agregar el equipo padre sin solicitar aprobación ni modificar el padre de tu equipo desde la página de parámetros del equipo. Para obtener más información, consulta "[Mover un equipo en la jerarquía de tu organización](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% data reusables.organizations.child-team-inherits-permissions %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.teams %}
4. En la lista de equipos, haz clic en el nombre del equipo que quieres anidar bajo un padre. ![Lista de los equipos de la organización](/assets/images/help/teams/click-team-name.png)
{% data reusables.organizations.team_settings %}
6. En "Parent team" (Equipo padre), utiliza el menú desplegable "Select parent team" (Seleccionar equipo padre) y haz clic en el nombre del nuevo equipo padre. ![Menú desplegable que enumera los equipos de la organización](/assets/images/help/teams/choose-parent-team.png)
7. Haz clic en **Guardar cambios**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Haz clic en **Confirm changes** (Confirmar cambios) para enviar una solicitud para agregar o modificar el padre de tu equipo. ![Casilla modal para información acerca de los cambios en los permisos de acceso del repositorio](/assets/images/help/teams/confirm-new-parent-team.png)

### Leer más

- [Acerca de los equipos](/articles/about-teams)"
- "[Mover un equipo en la jerarquía de tu organización](/articles/moving-a-team-in-your-organization-s-hierarchy)"
- "[Solicitar agregar un equipo hijo](/articles/requesting-to-add-a-child-team)"
