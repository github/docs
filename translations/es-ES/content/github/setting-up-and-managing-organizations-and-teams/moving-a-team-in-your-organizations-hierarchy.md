---
title: Mover un equipo en la jerarquía de tu organización
intro: 'Los mantenedores del equipo y los propietarios de la organización pueden anidar un equipo bajo un equipo padre, o cambiar o eliminar un equipo padre de un equipo anidado.'
redirect_from:
  - /articles/changing-a-team-s-parent/
  - /articles/moving-a-team-in-your-organization-s-hierarchy
  - /articles/moving-a-team-in-your-organizations-hierarchy
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Los propietarios de la organización pueden cambiar el padre de cualquier equipo. Los mantenedores del equipo pueden cambiar el equipo padre de un equipo si son mantenedores tanto en el equipo hijo como en el equipo padre. Los mantenedores del equipo sin permisos de mantenedor en el equipo hijo puede solicitar agregar un equipo padre o hijo. Para obtener más información, consulta "[Solicitar agregar o cambiar un equipo padre](/articles/requesting-to-add-or-change-a-parent-team)" y "[Solicitar agregar un equipo hijo](/articles/requesting-to-add-a-child-team)."

{% data reusables.organizations.child-team-inherits-permissions %}

{% tip %}

**Tips:**
- No puedes cambiar el equipo padre de un equipo a un equipo secreto. Para obtener más información, consulta "[Acerca de los equipos](/articles/about-teams)".
- No puedes anidar un equipo padre debajo de uno de sus equipos hijos.

{% endtip %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.teams %}
4. En la lista de equipos, haz clic en el nombre del equipo cuyo padre deseas cambiar. ![Lista de los equipos de la organización](/assets/images/help/teams/click-team-name.png)
{% data reusables.organizations.team_settings %}
6. Utiliza el menú desplegable para elegir un equipo padre, o para eliminar un equipo padre existente, selecciona **Clear selected value (Borrar el valor seleccionado)**. ![Menú desplegable que enumera los equipos de la organización](/assets/images/help/teams/choose-parent-team.png)
7. Da clic en **Actualizar**.
{% data reusables.repositories.changed-repository-access-permissions %}
9. Haz clic en **Confirm new parent team (Confirmar nuevo equipo padre)**. ![Casilla modal para información acerca de los cambios en los permisos de acceso del repositorio](/assets/images/help/teams/confirm-new-parent-team.png)

### Further reading

- [Acerca de los equipos](/articles/about-teams)"
