---
title: Administrar las direcciones IP permitidas en tu organización
intro: Puedes restringir el acceso a los activos de tu organización si configuras una lista de direcciones IP que se pueden conectar a ella.
product: '{% data reusables.gated-features.allowed-ip-addresses %}'
versions:
  free-pro-team: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
---
Los propietarios de las organizaciones pueden administrar las direcciones IP permitidas en las mismas.

### Acerca de las direcciones IP permitidas

Puedes restringir el acceso a los activos de la organización configurando un listado de direcciones IP específicas permitidas. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

También puedes configurar las direcciones IP permitidas para las organizaciones en una cuenta empresarial. Para obtener más información, consulta la sección "[Requerir los parámetros de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account)".

### Agregar una dirección IP permitida

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Habilitar direcciones IP permitidas

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
3. En "IP allow list" (Lista de permisos de IP), seleccione **Enable IP allow list** (Habilitar lista de permisos de IP). ![Realizar una marca de verificación para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
4. Haz clic en **Save (Guardar)**.

### Editar una dirección IP permitida

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Da clic en **Actualizar**.

### Eliminar una dirección IP permitida

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### Utilizar {% data variables.product.prodname_actions %} con un listado de direcciones IP permitidas

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}
