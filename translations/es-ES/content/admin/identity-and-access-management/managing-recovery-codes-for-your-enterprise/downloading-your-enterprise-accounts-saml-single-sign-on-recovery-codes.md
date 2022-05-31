---
title: Descargar los códigos de recuperación del inicio de sesión único de SAML para tu cuenta empresarial
shortTitle: Descargar los códigos de recuperación
intro: 'Para garantizar que puedes acceder a {% data variables.product.product_name %}, si tu proveedor de identidad (IdP) no está disponible, debes descargar los códigos de recuperación del inicio de sesión único (SSO) de SAML para tu cuenta empresarial.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
---

En caso de que tu IdP no esté disponible, puedes usar un código de recuperación para iniciar sesión y acceder a tu empresa en {% data variables.product.product_location %}. Para obtener más información, consulta la sección "[Acceder a tu cuenta empresarial si tu proveedor de identidad no está disponible](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)".

Si no guardaste tus códigos de recuperación cuando configuraste el SSO de SAML, aún puedes acceder a ellos desde los ajustes de tu empresa.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. Debajo de "Requerir la autenticación de SAML", haz clic en **Guardar tus códigos de recuperación**. ![Captura de pantalla del botón para probar la configuración de SAML antes de requerirla](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. Para guardar tus códigos de recuperación, haz clic en **Descargar**, **Imprimir** o **Copiar**. ![Captura de pantalla de los botones para descargar, imprimir o copiar tus códigos de recuperación](/assets/images/help/saml/saml_recovery_code_options.png)
