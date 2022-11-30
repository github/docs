---
title: Administrar las direcciones IP permitidas en tu organización
intro: Puedes restringir el acceso a los activos de tu organización si configuras una lista de direcciones IP que se pueden conectar a ella.
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
versions:
  fpt: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Administrar las direcciones IP permitidas
---

Los propietarios de las organizaciones pueden administrar las direcciones IP permitidas en las mismas.

## Acerca de las direcciones IP permitidas

Puedes restringir el acceso a los activos de la organización configurando un listado de direcciones IP específicas permitidas. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Si configuras una lista de direcciones permitidas, también puedes elegir agregar automáticamente a ella cualquier dirección IP que hayas configurado para las {% data variables.product.prodname_github_apps %} que instales en tu organización. El creador de una {% data variables.product.prodname_github_app %} puede configurar una lista de direcciones permitidas para su aplicación, las cuales especifiquen las direcciones IP en las cuales se ejecuta esta. Al heredar la lista de direcciones permitidas en la tuya, estás evitando las solicitudes de conexión de la aplicación que se está rehusando. Para obtener más información, consulta la sección "[Permitir el acceso mediante {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps)".

También puedes configurar las direcciones IP permitidas para las organizaciones en una cuenta empresarial. Para obtener más información, consulta la sección {% ifversion ghae %}"[Restringir el tráfico de red para tu empresa](/admin/configuration/restricting-network-traffic-to-your-enterprise)". {% else %}"[Requerir una configuración de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)."{% endif %}

## Agregar una dirección IP permitida

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

## Habilitar direcciones IP permitidas

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. En "IP allow list" (Lista de permisos de IP), seleccione **Enable IP allow list** (Habilitar lista de permisos de IP). ![Realizar una marca de verificación para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. Haz clic en **Save ** (guardar).

## Permitir el acceso mediante {% data variables.product.prodname_github_apps %}

Si estás utilizando una lista de direcciones permitidas, también puedes elegir agregar automáticamente a ella cualquier dirección IP que hayas configurado para las {% data variables.product.prodname_github_apps %} que instales en tu organización.

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Para obtener más información sobre cómo crear una lista de direcciones permitidas para una {% data variables.product.prodname_github_app %} que hayas creado, consulta la sección "[Administrar las direcciones IP permitidas para una GitHub App](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app)".

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
1. Debajo de "Lista de direcciones IP permitidas", selecciona **Habilitar la configuración de la lista de direcciones IP permitidas para las GitHub Apps instaladas**. ![Casilla de verificación para permitir las direcciones IP de las GitHub Apps](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Haz clic en **Save ** (guardar).

## Editar una dirección IP permitida

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Da clic en **Actualizar**.

## Eliminar una dirección IP permitida

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## Utilizar {% data variables.product.prodname_actions %} con un listado de direcciones IP permitidas

{% ifversion ghae %}

{% data reusables.github-actions.ip-allow-list-hosted-runners %}

{% else %}

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

{% endif %}
