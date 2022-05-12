---
title: Restringir cambios en la visibilidad de los repositorios en tu organización
intro: 'Para proteger los datos de tu organización, puedes configurar permisos para cambiar la visibilidad de los repositorios en tu organización.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Configurar la política de cambios de visibilidad
permissions: Organization owners can restrict repository visibility changes for an organization.
---

You can restrict who has the ability to change the visibility of repositories in your organization, such as changing a repository from private to public. For more information about repository visibility, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

You can restrict the ability to change repository visibility to organization owners only, or you can allow anyone with admin access to a repository to change visibility.

{% warning %}

**Warning**: If enabled, this setting allows people with admin access to choose any visibility for an existing repository, even if you do not allow that type of repository to be created. Para obtener más información acerca de cómo restringir la visibilidad de los repositorios durante su creación, consulta la sección "[Restringir la creación de repositorios en tu organización](/articles/restricting-repository-creation-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. En "Repository visibility change" (Cambio en la visibilidad de los repositorios), anula la selección de **Allow members to change repository visibilities for this organization** (Permitir que los miembros cambien las visibilidades de los repositorios para esta organización). ![Casilla para permitir que los miembros cambien la visibilidad de los repositorios](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Haz clic en **Save ** (guardar).
