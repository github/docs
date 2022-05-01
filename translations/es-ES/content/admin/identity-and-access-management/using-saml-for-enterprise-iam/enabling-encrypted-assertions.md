---
title: Habilitar las aserciones cifradas
shortTitle: Enable encrypted assertions
intro: 'You can improve {% data variables.product.product_location %}''s security with SAML single sign-on (SSO) by encrypting the messages that your SAML identity provider (IdP) sends.'
permissions: 'Site administrators can configure encrypted assertions for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '> 3.3'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
---

## About encrypted assertions

If your IdP support encryption of assertions, you can configure encrypted assertions on {% data variables.product.product_name %} for increased security during the authentication process.

## Prerrequisitos

To enable encrypted assertions for authentication to {% data variables.product.product_name %}, you must configure SAML authentication, and your IdP must support encrypted assertions.

## Habilitar las aserciones cifradas

To enable encrypted assertions, you must provide {% data variables.product.product_location %}'s public certificate to your IdP, and configure encryption settings that match your IdP.

{% note %}

**Nota**: {% data reusables.enterprise.test-in-staging %}

{% endnote %}

1. Opcionalmente, habilita la depuración de SAML. La depuración de SAML registra las entradas verbosas en la bitácora de autenticación de {% data variables.product.product_name %} y podría ayudarte a solucionar problemas de los intentos de autenticación fallidos. For more information, see "[Troubleshooting SAML authentication](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)."
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Selecciona **Requerir aserciones cifradas**.

   ![Captura de pantalla de la casilla de verificación "Habilitar aserciones cifradas" dentro de la sección de "Autenticación"de la consola de administración](/assets/images/help/saml/management-console-enable-encrypted-assertions.png)
1. A la derecha de "Cerficado de cifrado", haz clic en **Descargar** para guardar una copia del certificado público de {% data variables.product.product_location %} en tu máquina local.

   ![Captura de pantalla del botón "Descargar" de un certificado público para las aserciones cifradas](/assets/images/help/saml/management-console-encrypted-assertions-download-certificate.png)
1. Inicia sesión en tu IdP de SAML como administrador.
1. En la aplicación de {% data variables.product.product_location %}, habilita las aserciones cifradas.
   - Anota el método de cifrado y de transporte de llave.
   - Proporciona el certificado público que descargaste en el paso 7.
1. Regresa a la consola de administración en {% data variables.product.product_location %}.
1. A la derecha de "Método de cifrado", selecciona el método de cifrado para tu IdP desde el paso 9.

   ![Captura de pantalla de "Método de cifrado" para las aserciones cifradas](/assets/images/help/saml/management-console-encrypted-assertions-encryption-method.png)
1. A la derecha de "Método de transporte de llave", selecciona el método de transporte de llave para tu IdP desde el paso 9.

   ![Captura de pantalla del "Método de transporte de llave" para las aserciones cifradas](/assets/images/help/saml/management-console-encrypted-assertions-key-transport-method.png)
1. Haz clic en **Guardar parámetros**.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

Si habilitaste la depuración de SAML para probar la autenticación con las aserciones cifradas, inhabilita la depuración de SAML cuando termines de hacer las pruebas. Para obtener más información, consulta la sección "[Solucionar problemas de la autenticación de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication#configuring-saml-debugging)".
