---
title: Restringir la creación de repositorios en tu organización
intro: 'Para proteger los datos de tu organización, puedes configurar permisos para crear repositorios en tu organización.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restringir la creación de repositorios
---

Puedes elegir si los miembros pueden crear repositorios en tu organización o no. Si permites que los miembros creen repositorios, puedes elegir qué tipos de repositorios pueden crear.{% ifversion fpt or ghec %} Para permitir que los miembros creen solo repositorios privados, tu organización debe utilizar {% data variables.product.prodname_ghe_cloud %}.{% endif %}{% ifversion fpt %} Para obtener más información, consulta la sección "[Acerca de los repositorios](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories)" en la documentación de {% data variables.product.prodname_ghe_cloud %}{% endif %}.

Los propietarios de la organización siempre pueden crear cualquier tipo de repositorio.
{% ifversion ghec or ghae or ghes %}
{% ifversion ghec or ghae %}Los propietarios de empresas{% elsif ghes %}Los administradores de sitio{% endif %} pueden restringir las opciones que tienes disponibles para la política de creación de repositorios de tu organización. {% ifversion ghec or ghes or ghae %} Para obtener más información, consulta la sección "[Restringir la creación de repositorios en tu empresa.](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)".{% endif %}{% endif %}

{% warning %}

**Advertencia**: Este ajuste solo restringe las opciones de visibilidad disponibles cuando los repositorios se crean y no restringe la capacidad de cambiar la visibilidad del repositorio posteriormente. Para obtener más información acerca de cómo restringir los cambios a las visibilidades existentes de los repositorios, consulta la sección "[Restringir la visibilidad de los repositorios en tu organización](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Debajo de "Creación de repositorios", selecciona una o más opciones.

   {%- ifversion ghes or ghec or ghae %}
   ![Opciones de creación de repositorio](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
   {%- elsif fpt %}
   ![Opciones de creación de repositorio](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png)
   {%- endif %}
6. Haz clic en **Save ** (guardar).
