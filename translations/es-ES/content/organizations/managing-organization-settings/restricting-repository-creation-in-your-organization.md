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

Puedes elegir si los miembros pueden crear repositorios en tu organización o no. {% ifversion ghec or ghes or ghae %}If you allow members to create repositories, you can choose which types of repositories members can create.{% elsif fpt %}If you allow members to create repositories, you can choose whether members can create both public and private repositories or public repositories only.{% endif %} Organization owners can always create any type of repository.

{% ifversion fpt %}
Organizations using {% data variables.product.prodname_ghe_cloud %} can also restrict members to creating private repositories only. Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %}
Enterprise owners can restrict the options you have available for your organization's repository creation policy. Para obtener más información, consulta la sección "[Requerir políticas de administración de repositorios en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
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

   {% note %}

   **Note:** To restrict members to creating private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.

   {% endnote %}
   {%- endif %}

6. Haz clic en **Save ** (guardar).
