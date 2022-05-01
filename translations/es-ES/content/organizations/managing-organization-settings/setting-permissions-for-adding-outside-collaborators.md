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

Predeterminadamente, cualquiera con acceso administrativo en un repositorio puede invitar a los colaboradores externos a trabajar en el repositorio. Puedes elegir restringir la capacidad de invitar colaboradores externos para que solo sean propietarios de la organización.

{% ifversion ghec %}
{% note %}

**Nota:** Solo las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} pueden restringir la capacidad de invitar colaboradores externos para que solo sean los propietarios de organizaciones. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% ifversion ghec %}Si tu organización el pertenece a una cuenta empresarial, no podrás{% else %}No podrás{% endif %}configurar este ajuste para ella en caso de que un propietario de empresa haya configurado una política a nivel empresarial. Para obtener más información, consulta la sección "[Requerir políticas de administración de repositorios en tu empresa]{% ifversion ghec %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)"{% else %}(/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories){% endif %}".

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. En "Repository invitations" (Invitaciones al repositorio), selecciona **Allow members to invite outside collaborators to repositories for this organization** (Permitir que los miembros inviten colaboradores externos a los repositorios para esta organización). ![Casilla para permitir que los miembros inviten colaboradores externos a los repositorios de la organización](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. Haz clic en **Save ** (guardar).
