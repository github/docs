---
title: Configurar permisos para agregar colaboradores externos
intro: 'Para proteger los datos de tu organización y la cantidad de licencias pagadas que se utilizan en ella, puedes permitir que únicamente los propietarios inviten colaboradores externos a los repositorios que le pertenezcan.'
product: '{% data reusables.gated-features.restict-add-collaborator %}'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories/
  - /articles/setting-permissions-for-adding-outside-collaborators
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - equipos
---

Los propietarios de la organización y los miembros con privilegios administrativos en los repositorios pueden invitar colaboradores externos para trabajar en ellos. También puedes restringir los permisos de invitación de colaboradores externos para que solo los propietarios de la organización puedan emitirlos.

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Debajo de "Invitaciones al repositorio", selecciona **Permitir que los miembros inviten colaboradores externos a los repositorios de esta organización**.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %} ![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox-updated.png){% else %}
![Checkbox to allow members to invite outside collaborators to organization repositories](/assets/images/help/organizations/repo-invitations-checkbox.png){% endif %}
6. Haz clic en **Save ** (guardar).
