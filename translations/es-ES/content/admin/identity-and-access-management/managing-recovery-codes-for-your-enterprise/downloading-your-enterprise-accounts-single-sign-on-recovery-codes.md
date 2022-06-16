---
title: Downloading your enterprise account's single sign-on recovery codes
shortTitle: Descargar los códigos de recuperación
intro: 'To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account''s single sign-on (SSO) recovery codes.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
---

En caso de que tu IdP no esté disponible, puedes usar un código de recuperación para iniciar sesión y acceder a tu empresa en {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Acceder a tu cuenta empresarial si tu proveedor de identidad no está disponible](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".

If you did not save your recovery codes when you configured SSO, you can still access the codes from your enterprise's settings.



{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Under{% ifversion oidc-for-emu %} either{% endif %} "Require SAML authentication"{% ifversion oidc-for-emu %} or "Require OIDC authentication"{% endif %}, click **Save your recovery codes**.{% ifversion oidc-for-emu %}
  {% note %}

  **Note:** OIDC SSO is only available for {% data variables.product.prodname_emus %}. Para obtener más información, consulta la sección "[Acerca de los Usuarios Empresariales Administrados](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".

  {% endnote %}{% endif %}

  ![Captura de pantalla del botón para probar la configuración de SAML antes de requerirla](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. Para guardar tus códigos de recuperación, haz clic en **Descargar**, **Imprimir** o **Copiar**. ![Captura de pantalla de los botones para descargar, imprimir o copiar tus códigos de recuperación](/assets/images/help/saml/saml_recovery_code_options.png)
