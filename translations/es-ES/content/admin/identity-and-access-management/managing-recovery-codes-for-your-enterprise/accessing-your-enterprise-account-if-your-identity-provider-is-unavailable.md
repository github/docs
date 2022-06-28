---
title: Acceder a tu cuenta empresarial si no está disponible tu proveedor de identidad
shortTitle: Acceder a tu cuenta empresarial
intro: 'You can sign into {% data variables.product.product_name %} even if your identity provider is unavailable by bypassing single sign-on (SSO) with a recovery code.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can use a recovery code to access an enterprise account.
---

You can use a recovery code to access your enterprise account when a authentication configuration error or an issue with your identity provider (IdP) prevents you from using SSO.

Para poder acceder a tu cuenta empresarial de esta forma, debes haber descargado previamente y almacenado los códigos de recuperación de tu empresa. For more information, see "[Downloading your enterprise account's single sign-on recovery codes](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)."

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Nota:** Si tus empresas utilizan {% data variables.product.prodname_emus %}, debes iniciar sesión como el usuario configurado para utilizar un código de recuperación.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
