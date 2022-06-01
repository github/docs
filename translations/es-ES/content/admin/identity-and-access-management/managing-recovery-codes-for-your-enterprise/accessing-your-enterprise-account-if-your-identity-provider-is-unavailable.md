---
title: Acceder a tu cuenta empresarial si no está disponible tu proveedor de identidad
shortTitle: Acceder a tu cuenta empresarial
intro: 'Puedes iniciar sesión en {% data variables.product.product_name %}, incluso si no está disponible tu proveedor de identidad, si omites el inicio de sesión único (SSO) de SAML con un código de recuperación.'
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

Puedes utilizar un código de recuperación para acceder a tu cuenta empresarial cuando un error de configuración de SAML o un problema con tu proveedor de identidad (IdP) impida que utilices el SSO de SAML.

Para poder acceder a tu cuenta empresarial de esta forma, debes haber descargado previamente y almacenado los códigos de recuperación de tu empresa. Para obtener más información, consulta la sección "[Descargar los códigos de recuperación del inicio de sesión único de SAML de tu cuenta empresarial](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes)".

{% data reusables.saml.recovery-code-caveats %}

{% note %}

**Nota:** Si tus empresas utilizan {% data variables.product.prodname_emus %}, debes iniciar sesión como el usuario configurado para utilizar un código de recuperación.

{% endnote %}

{% data reusables.saml.recovery-code-access %}
