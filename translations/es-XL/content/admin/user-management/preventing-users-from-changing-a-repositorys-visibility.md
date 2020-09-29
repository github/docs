---
title: Impedir que los usuarios modifiquen la visibilidad de un repositorio
intro: 'Puedes hacer que los miembros no puedan modificar la visibilidad de los repositorios que son propiedad de la organización en tu aparato {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-a-repository-s-visibility
  - /enterprise/admin/user-management/preventing-users-from-changing-a-repositorys-visibility
versions:
  enterprise-server: '*'
---

Cuando impides que los miembros modifiquen la visibilidad del repositorio, solo los administradores del sitio tienen la capacidad de convertir los repositorios públicos en privado o los repositorios privados en públicos.

Si un administrador del sitio ha restringido la creación del repositorio solo a los propietarios de la organización, entonces los miembros no podrán modificar la visibilidad del repositorio. Si un administrador del sitio ha restringido la creación del repositorio del miembro solo a los repositorios privados, entonces los miembros solo podrán modificar los repositorios de público a privado. Para obtener más información, consulta "[Restringir la creación de repositorios en tu instancia](/enterprise/{{ currentVersion }}/admin/guides/user-management/restricting-repository-creation-in-your-instance)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.repositories-tab %}
5. En "Modificar visibilidad del repositorio", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}

{% data reusables.enterprise-accounts.repository-visibility-policy %}
