---
title: Restringir la creación de repositorios en tu organización
intro: 'Para proteger los datos de tu organización, puedes configurar permisos para crear repositorios en tu organización.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - equipos
---

Puedes elegir si los miembros pueden crear repositorios en tu organización o no. Si permites que los miembros creen repositorios, puedes elegir qué tipos de repositorios pueden crear. {% if currentVersion == "free-pro-team@latest" %} Para permitir que los miembros creen únicamente repositorios privados, tu organización debe utilizar {% data variables.product.prodname_ghe_cloud %}.{% endif %} Para obtener más información, consulta la sección "[Acerca de la visibilidad de los repositorios](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

Los propietarios de la organización siempre pueden crear cualquier tipo de repositorio.

{% if currentVersion == "free-pro-team@latest" %}Los propietarios de las empresas{% else %}Los administradores de sitio{% endif %} pueden restringir las opciones que tienes disponibles para la política de creación de repositorios de tu empresa. Para obtener más información, consulta la sección {% if currentVersion == "free-pro-team@latest" %}"[Requerir políticas de administración de repositorios en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account)".{% else %}"[restringir la creación de repositorios en tu empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".{% endif %}

{% warning %}

**Advertencia**: Este ajuste solo restringe las opciones de visibilidad disponibles cuando los repositorios se crean y no restringe la capacidad de cambiar la visibilidad del repositorio posteriormente. Para obtener más información acerca de cómo restringir los cambios a las visibilidades existentes de los repositorios, consulta la sección "[Restringir la visibilidad de los repositorios en tu organización](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)".

{% endwarning %}

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Debajo de "Creación de repositorios", selecciona una o más opciones. ![Opciones de creación de repositorio](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
6. Haz clic en **Save ** (guardar).
