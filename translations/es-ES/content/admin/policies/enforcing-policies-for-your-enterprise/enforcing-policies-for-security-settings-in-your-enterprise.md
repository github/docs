---
title: Enforcing policies for security settings in your enterprise
intro: 'You can enforce policies to manage security settings in your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
---

## About policies for security settings in your enterprise

You can enforce policies to control the security settings for organizations owned by your enterprise on {% data variables.product.product_name %}. By default, organization owners can manage security settings. For more information, see "[Keeping your organization secure](/organizations/keeping-your-organization-secure)."

{% ifversion ghec or ghes %}

## Requiring two-factor authentication for organizations in your enterprise

Enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise use two-factor authentication to secure their personal accounts.

Before you can require 2FA for all organizations owned by your enterprise, you must enable two-factor authentication for your own account. Para obtener más información, consulta "[Proteger tu cuenta con la autenticación de dos factores (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/)".

{% warning %}

**Advertencias:**

- When you require two-factor authentication for your enterprise, members, outside collaborators, and billing managers (including bot accounts) in all organizations owned by your enterprise who do not use 2FA will be removed from the organization and lose access to its repositories. También perderán acceso a las bifurcaciones de sus repositorios privados de la organización. Puedes reinstalar sus privilegios de acceso y sus parámetros de configuración si habilitan la autenticación de dos factores para sus cuentas personales dentro de un plazo de tres meses a partir de su eliminación de tu organización. Para obtener más información, consulta "[Reinstalar un miembro antiguo de tu organización](/enterprise/{{ page.version }}/user/articles/reinstating-a-former-member-of-your-organization)".
- Any organization owner, member, billing manager, or outside collaborator in any of the organizations owned by your enterprise who disables 2FA for their personal account after you've enabled required two-factor authentication will automatically be removed from the organization.
- If you're the sole owner of a enterprise that requires two-factor authentication, you won't be able to disable 2FA for your personal account without disabling required two-factor authentication for the enterprise.

{% endwarning %}

Antes de solicitar el uso de la autenticación de dos factores, te recomendamos notificar a los miembros de la organización, a los colaboradores externos y a los gerentes de facturación y pedirles que configuren la 2FA para sus cuentas. Los propietarios de la organización pueden ver si los miembros y los colaboradores externos ya usan 2FA en la página Personas de cada organización. Para obtener más información, consulta "[Ver si los usuarios en tu organización tienen la 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)".

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. En "Autenticación de dos factores", revisa la información sobre cómo modificar los parámetros. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Debajo de "Two-factor authentication" ¨(Autenticación de dos factores), selecciona **Require two-factor authentication for all organizations in your business** (Requerir autenticación de dos factores para todas las organizaciones en tu empresa) y luego haz clic en **Save** (Guardar). ![Casilla de verificación para requerir autenticación de dos factores](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. If prompted, read the information about members and outside collaborators who will be removed from the organizations owned by your enterprise. To confirm the change, type your enterprise's name, then click **Remove members & require two-factor authentication**. ![Cuadro Confirmar aplicación obligatoria de dos factores](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Optionally, if any members or outside collaborators are removed from the organizations owned by your enterprise, we recommend sending them an invitation to reinstate their former privileges and access to your organization. Cada persona debe habilitar la autenticación de dos factores para poder aceptar tu invitación.

{% endif %}

{% ifversion ghec or ghae %}

## Managing allowed IP addresses for organizations in your enterprise

{% ifversion ghae %}

You can restrict network traffic to your enterprise on {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Restringir el tráfico de red para tu empresa](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise)".

{% elsif ghec %}

Enterprise owners can restrict access to assets owned by organizations in an enterprise by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %} {% data reusables.identity-and-permissions.ip-allow-lists-enterprise %}

También puedes configurar las direcciones IP permitidas para una organización individual. Para obtener más información, consulta "[Administrar las direcciones IP permitidas en tu organización](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)".

### Agregar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

### Permitir el acceso mediante {% data variables.product.prodname_github_apps %}

{% data reusables.identity-and-permissions.ip-allow-lists-githubapps-enterprise %}

### Habilitar direcciones IP permitidas

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. En "IP allow list" (Lista de permisos de IP), seleccione **Enable IP allow list** (Habilitar lista de permisos de IP). ![Realizar una marca de verificación para permitir direcciones IP](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Haz clic en **Save ** (guardar).

### Editar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Da clic en **Actualizar**.

### Eliminar una dirección IP permitida

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

### Utilizar {% data variables.product.prodname_actions %} con un listado de direcciones IP permitidas

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

{% endif %}

{% endif %}

## Managing SSH certificate authorities for your enterprise

You can use a SSH certificate authorities (CA) to allow members of any organization owned by your enterprise to access that organization's repositories using SSH certificates you provide. {% data reusables.organizations.can-require-ssh-cert %}Para obtener más información, consulta "[Acerca de las autoridades de certificados de SSH](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)".

### Agregar una autoridad de certificado de SSH

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### Eliminar una autoridad de certificado de SSH

La eliminación de un CA no se puede deshacer. Si deseas usar la misma CA en el futuro, deberás cargarla nuevamente.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

{% ifversion ghec or ghae %}

## Leer más

- "[About identity and access management for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)"

{% endif %}
