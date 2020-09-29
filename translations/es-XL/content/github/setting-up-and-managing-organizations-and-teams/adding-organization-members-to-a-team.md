---
title: Agregar miembros de la organización a un equipo
intro: 'Las personas con permisos de propietario o mantenedor del equipo pueden agregar miembros de la organización a los equipos. Las personas con permisos de propietario también pueden {% if currentVersion == "free-pro-team@latest" %} invitar a personas que no son miembros {% else %}a incorporar a personas que no son miembros a{% endif %} un equipo y la organización.'
redirect_from:
  - /articles/adding-organization-members-to-a-team-early-access-program/
  - /articles/adding-organization-members-to-a-team
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.team-synchronization %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_members_tab %}
6. Encima de la lista de los miembros del equipo, haz clic en **Add a member** (Agregar un miembro). ![Botón Add member (Agregar miembro)](/assets/images/help/teams/add-member-button.png)
{% data reusables.organizations.invite_to_team %}
{% data reusables.organizations.review-team-repository-access %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.organizations.cancel_org_invite %}{% endif %}

### Leer más

- [Acerca de los equipos](/articles/about-teams)"
- "[Administrar el acceso del equipo al repositorio de una organización](/articles/managing-team-access-to-an-organization-repository)"
