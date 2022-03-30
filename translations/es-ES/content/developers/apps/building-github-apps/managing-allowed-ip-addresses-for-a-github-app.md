---
title: Administrar las direcciones IP permitidas para una GitHub App
intro: 'Puedes agregar una lista de direcciones IP permitidas a tu {% data variables.product.prodname_github_app %} para prevenir que se bloquee con la lista de direcciones permitidas propia de la organización.'
versions:
  fpt: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Administrar las direcciones IP permitidas
---

## Acerca de las listas de direcciones IP permitidas para las {% data variables.product.prodname_github_apps %}

Los propietarios de organizaciones y empresas pueden restringir el acceso a los activos si configuran una lista de direcciones IP permitidas. Esta lista especifica las direcciones IP a las que se les permite conectarse. Para obtener más información, consulta la sección "[Requerir políticas para la configuración de seguridad en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)".

Cuando una organización tiene una lista de direcciones permitidas, se negará el acceso a las aplicaciones de terceros que se conecten a través de una {% data variables.product.prodname_github_app %}, a menos de que ambas condiciones siguientes sean verdaderas:

* El creador de {% data variables.product.prodname_github_app %} configuró una lista de direcciones permitidas para la aplicación, la cual especifica las direcciones IP en donde se ejecuta la aplicación. Consulta los detalles de cómo hacerlo a continuación.
* El propietario de la organización eligió permitir que las direcciones en la lista de direcciones permitidas de la {% data variables.product.prodname_github_app %} se agreguen a su propia lista de direcciones permitidas. For more information, see "[Managing allowed IP addresses for your organization](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}

{% data reusables.apps.ip-allow-list-only-apps %}

## Agrega una lista de direcciones IP permitidas a una {% data variables.product.prodname_github_app %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
1. Desplázate hacia abajo para encontrar la sección de "lista de direcciones IP permitidas". ![Sección de información básica para tu GitHub App](/assets/images/github-apps/github-apps-allow-list-empty.png)
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
  La descripción es para tu referencia y no se utiliza en la lista de direcciones permitidas de las organizaciones en donde está instalada la {% data variables.product.prodname_github_app %}. En vez de esto, las listas de direcciones permitidas de la organización incluirán "Managed by the NAME GitHub App" como descripción.
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}
