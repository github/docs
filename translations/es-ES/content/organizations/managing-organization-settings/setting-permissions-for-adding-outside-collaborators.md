---
title: Configurar permisos para agregar colaboradores externos
intro: 'Para proteger los datos de tu organización y la cantidad de licencias pagadas que se utilizan en ella, puedes permitir que únicamente los propietarios inviten colaboradores externos a los repositorios que le pertenezcan.'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configurar la política de colaboradores
---

By default, anyone with admin access to a repository can invite outside collaborators to work on the repository. You can choose to restrict the ability to invite outside collaborators to organization owners only.


{% ifversion ghec %}
{% note %}

**Note:** Only organizations that use {% data variables.product.prodname_ghe_cloud %} can restrict the ability to invite outside collaborators to organization owners. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. En "Repository invitations" (Invitaciones al repositorio), selecciona **Allow members to invite outside collaborators to repositories for this organization** (Permitir que los miembros inviten colaboradores externos a los repositorios para esta organización). ![Casilla para permitir que los miembros inviten colaboradores externos a los repositorios de la organización](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. Haz clic en **Save ** (guardar).
