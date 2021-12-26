---
title: Crear un equipo
intro: Puedes crear equipos independientes o anidados para administrar los permisos del repositorio y las menciones de grupos de personas.
redirect_from:
  - /articles/creating-a-team-early-access-program/
  - /articles/creating-a-team
  - /github/setting-up-and-managing-organizations-and-teams/creating-a-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Solo los propietarios y mantenedores de la organización en un equipo padre pueden crear un nuevo equipo hijo debajo del padre. Los propietarios también pueden restringir los permisos de creación para todos los equipos en una organización. Para obtener más información, consulta "[Configurar los permisos de creación de equipo en tu organización](/articles/setting-team-creation-permissions-in-your-organization)."

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.create-team-choose-parent %}
{% if currentVersion == "free-pro-team@latest" %}
1. Como opción, si tu cuenta organizacional o empresarial utiliza la sincronización de equipos, para conectar un grupo de proveedor de identidad a tu equipo, utiliza el menú desplegable "Grupos de Proveedor de Identidad", y selecciona hasta 5 grupos. Para obtener más información, consulta la sección "[Sincronizar a un equipo con un grupo de proveedor de identidad](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)". ![Menú desplegable para elegir los grupos de proveedor de identidad](/assets/images/help/teams/choose-an-idp-group.png)
{% endif %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create_team %}
9. También puede [darle acceso al equipo a los repositorios de la organización](/articles/managing-team-access-to-an-organization-repository).

### Leer más

- [Acerca de los equipos](/articles/about-teams)"
- "[Cambiar la visibilidad del equipo](/articles/changing-team-visibility)"
- [Mover un equipo dentro de la jerarquía de tu organización](/articles/moving-a-team-in-your-organization-s-hierarchy)"
