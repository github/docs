---
title: Administrar las direcciones IP permitidas en tu organización
intro: Puedes restringir el acceso a los activos de tu organización si configuras una lista de direcciones IP que se pueden conectar a ella.
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

Los propietarios de las organizaciones pueden administrar las direcciones IP permitidas en las mismas.

### Acerca de las direcciones IP permitidas

Puedes restringir el acceso a los activos de la organización configurando un listado de direcciones IP específicas permitidas. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

If you set up an allow list you can also choose to automatically add to your allow list any IP addresses configured for {% data variables.product.prodname_github_apps %} that you install in your organization. The creator of a {% data variables.product.prodname_github_app %} can configure an allow list for their application, specifying the IP addresses at which the application runs. By inheriting their allow list into yours, you avoid connection requests from the application being refused. For more information, see "[Allowing access by {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps)."

También puedes configurar las direcciones IP permitidas para las organizaciones en una cuenta empresarial. Para obtener más información, consulta la sección {% if currentVersion == "github-ae@latest" %}"[Restringir el tráfico de red para tu empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)". {% else %}"[Requerir una configuración de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)."{% endif %}

### Agregar una dirección IP permitida

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Habilitar direcciones IP permitidas

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. En "IP allow list" (Lista de permisos de IP), seleccione **Enable IP allow list** (Habilitar lista de permisos de IP). ![Realizar una marca de verificación para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. Haz clic en **Save ** (guardar).

### Allowing access by {% data variables.product.prodname_github_apps %}

If you're using an allow list, you can also choose to automatically add to your allow list any IP addresses configured for {% data variables.product.prodname_github_apps %} that you install in your organization.

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

For more information about how to create an allow list for a {% data variables.product.prodname_github_app %} you have created, see "[Managing allowed IP addresses for a GitHub App](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)."

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Under "IP allow list", select **Enable IP allow list configuration for installed GitHub Apps**. ![Checkbox to allow GitHub App IP addresses](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Haz clic en **Save ** (guardar).

### Editar una dirección IP permitida

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Da clic en **Actualizar**.

### Eliminar una dirección IP permitida

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### Utilizar {% data variables.product.prodname_actions %} con un listado de direcciones IP permitidas

{% if currentVersion == "github-ae@latest" %}

{% data reusables.github-actions.ip-allow-list-hosted-runners %}

{% else %}

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

{% endif %}
