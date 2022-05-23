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

Puedes elegir si los miembros pueden crear repositorios en tu organización o no. {% ifversion ghec or ghes or ghae %}Si permites que los miembros creen repositorios, puedes elegir qué tipos de estos pueden crear.{% elsif fpt %}Si permites que los miembros creen repositorios, puedes elegir si ellos pueden crear tanto repositorios públicos como privados o solo públicos.{% endif %} Los propietarios de las organizaciones siempre pueden crear cualquier tipo de repositorio.

{% ifversion fpt %}
Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} también pueden restringir a los miembros para que creen únicamente repositorios privados. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %}
Los propietarios de las empresas pueden restringir las opciones que tienes disponibles para la política de creación de repositorios de tu organización. Para obtener más información, consulta la sección "[Requerir políticas de administración de repositorios en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
{% endif %}

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

   {% ifversion fpt or ghec %}
   {% note %}

   **Nota:** Para restringir a los miembros y que no creen solo repositorios privados, tu organización debe utilizar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %}
   {%- endif %}

6. Haz clic en **Save ** (guardar).
