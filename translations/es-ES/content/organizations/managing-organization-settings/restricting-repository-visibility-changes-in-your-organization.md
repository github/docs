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

Puedes restringir quién tiene la capacidad de cambiar la visibilidad de los repositorios en tu organización, tal como cambiarlo de privado a público. Para obtener más información acerca de la visibilidad de los repositorios, consulta la sección "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Puedes restringir la capacidad de cambiar la visibilidad de los repositorios para que solo lo puedan hacer los propietarios de las organizaciones o puedes permitir que cualquier persona con permisos administrativos en dicho repositorio lo pueda hacer.

{% warning %}

**Advertencia**: De habilitarse, este ajuste permite que las personas con acceso administrativo elijan cualquier tipo de visibilidad en un repositorio existente, incluso si no permites que se cree ese tipo de repositorio. Para obtener más información acerca de cómo restringir la visibilidad de los repositorios durante su creación, consulta la sección "[Restringir la creación de repositorios en tu organización](/articles/restricting-repository-creation-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. En "Repository visibility change" (Cambio en la visibilidad de los repositorios), anula la selección de **Allow members to change repository visibilities for this organization** (Permitir que los miembros cambien las visibilidades de los repositorios para esta organización). ![Casilla para permitir que los miembros cambien la visibilidad de los repositorios](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Haz clic en **Save ** (guardar).
