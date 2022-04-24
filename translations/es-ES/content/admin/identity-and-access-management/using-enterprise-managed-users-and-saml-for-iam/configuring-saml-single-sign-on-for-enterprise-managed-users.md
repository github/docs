---
title: Configurar el inicio de sesión único de SAML para los usuarios administrados de Enterprise
shortTitle: SAML para usuarios administrados
intro: 'Puedes administrar el acceso a tu cuenta empresarial automáticamente en {% data variables.product.prodname_dotcom %} si configuras el Inicio de Sesión Único (SSO) de Lenguaje de Marcado para Confirmaciones de Seguridad (SAML).'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users
versions:
  ghec: '*'
type: tutorial
topics:
  - Authentication
  - Enterprise
  - SSO
---

## Acerca del inicio de sesión único de SAML para {% data variables.product.prodname_emus %}

Con {% data variables.product.prodname_emus %}, tu empresa utiliza el SSO de SAML para autenticar a todos los miembros. En vez de iniciar sesión en {% data variables.product.prodname_dotcom %} con un nombre de usuario de {% data variables.product.prodname_dotcom %} y contraseña, los miembros de tu empresa iniciarán sesión con tu IdP.

{% data variables.product.prodname_emus %} es compatible con los siguientes IdP:

{% data reusables.enterprise-accounts.emu-supported-idps %}

Después de que configures el SSO de SAML, te recomendamos que almacenes tus códigos de recuperación para que puedas recuperar el acceso a tu empresa en caso de que no esté disponible tu proveedor de identidad.

{% note %}

**Nota:** Cuando se habilita el SSO de SAML, el único ajuste que puedes actualizar en {% data variables.product.prodname_dotcom %} para tu configuración existente de SAML es el certificado de SAML. Si necesitas actualizar la URL de inicio de sesión o el emisor, primero debes inhabilitar el SSO de SAML y luego volver a configurarlo con los ajustes nuevos.

{% endnote %}

## Configurar el inicio de sesión único de SAML para {% data variables.product.prodname_emus %}

Para configurar el SSO de SAML para tu {% data variables.product.prodname_emu_enterprise %}, debes configurar una aplicación en tu IdP y luego configurar tu empresa en GitHub.com. Después de que configures el SSO de SAML, puedes configurar el aprovisionamiento de usuarios.

Para instalar y configurar la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu IdP, debes tener un inquilino y acceso administrativo en un IdP compatible.

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

1. [Configurar tu proveedor de identidad](#configuring-your-identity-provider)
2. [Configurar tu empresa](#configuring-your-enterprise)
3. [Habilitar el aprovisionamiento](#enabling-provisioning)

### Configurar tu proveedor de identidad

Para configurar tu IdP, sigue las instrucciones que proporciona para configurar la aplicación de {% data variables.product.prodname_emu_idp_application %} en este.

1. Para instalar la aplicación de {% data variables.product.prodname_emu_idp_application %}, haz clic en el enlace de tu IdP a continuación:

     - [Aplicación de {% data variables.product.prodname_emu_idp_application %} en Azure Active Directory](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/aad.githubenterprisemanageduser?tab=Overview)
     - [Aplicación de {% data variables.product.prodname_emu_idp_application %} en Okta](https://www.okta.com/integrations/github-enterprise-managed-user)

1. Para configurar la aplicación de {% data variables.product.prodname_emu_idp_application %} y tu IdP, haz clic en el siguiente enlace y sigue las instrucciones que proporciona tu IdP:

     - [Tutorial de Azure Active Directory para {% data variables.product.prodname_emus %}](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-tutorial)
     - [Documentación de Okta para {% data variables.product.prodname_emus %}](https://saml-doc.okta.com/SAML_Docs/How-to-Configure-SAML-2.0-for-GitHub-Enterprise-Managed-User.html)

1. Así que puedes probar y configurar tu empresa, asígnate o asigna al usuario que configurará el SSO de SAML en {% data variables.product.prodname_dotcom %} en la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu IdP.

1. Para habilitarte para seguir configurando tu empresa en {% data variables.product.prodname_dotcom %}, ubica y anota la siguiente información desde la aplicación que instalaste en tu IdP:

    | Valor                                     | Otros nombres                        | Descripción                                                                           |
    |:----------------------------------------- |:------------------------------------ |:------------------------------------------------------------------------------------- |
    | IdP Sign-On URL                           | URL de inicio de sesión, URL del IdP | URL de la aplicación en tu IdP                                                        |
    | IdP Identifier URL                        | Emisor                               | El identificador del IdP de los proveedores de servicio para la autenticación de SAML |
    | Certificado de firmado, cifrado en Base64 | Certificado público                  | Certificado público que utiliza el IdP para firmar las solicitudes de autenticación   |

### Configurar tu empresa

Después de que instalas y configuras la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu proveedor de identidad, puedes configurar tu empresa.

1. Inicia sesión en {% data variables.product.prodname_dotcom_the_website %} como el usuario configurador para tu empresa nueva con el nombre de usuario **@<em>SHORT-CODE</em>_admin**.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}

1. En "Inicio de sesión único de SAML", selecciona **Requerir autenticación SAML**. ![Casilla de verificación para habilitar SAML SSO](/assets/images/help/business-accounts/enable-saml-auth-enterprise.png)

1. Debajo de **URL de inicio de sesión**, teclea la terminal HTTPS de tu IdP para solicitudes de inicio de sesión único que anotaste al configurar tu IdP. ![Campo para la URL a la que los miembros serán redireccionados cuando inicien sesión](/assets/images/help/saml/saml_sign_on_url_business.png)

1. Debajo de **Emisor**, teclea la URL de tu emisor de SAML, el cual anotaste al configurar tu IdP, para verificar la autenticidad de los mensajes enviados. ![Campo para el nombre del emisor SAML](/assets/images/help/saml/saml_issuer.png)

1. Debajo de **Certificado público**, pega el certificado que anotaste al configurar tu IdP, para verificar las respuestas de SAML. ![Campo para el certificado público de tu proveedor de identidad](/assets/images/help/saml/saml_public_certificate.png)

1. Para verificar la integridad de las solicitudes de tu emisor de SAML, haz clic en {% octicon "pencil" aria-label="The edit icon" %}. Posteriormente, en los menús desplegables de "Método de firma" y "Método de resumen", elige el algoritmo de hash que utiliza tu emisor de SAML. ![Menús desplegables para los algoritmos de hash del Método de firma y del Método de resumen usados por tu emisor SAML](/assets/images/help/saml/saml_hashing_method.png)

1. Antes de habilitar el SSO de SAML para tu empresa, para asegurarte de que la información que ingresaste es correcta, haz clic en **Probar la configuración de SAML**. ![Botón para probar la configuración de SAML antes de exigir el inicio de sesión único](/assets/images/help/saml/saml_test.png)

1. Haz clic en **Save ** (guardar).

    {% note %}

    **Nota:** Cuando requieres el SSO de SAML para tu empresa, el usuario de configuración ya no tendrá acceso a ella, pero permanecerá firmado en GitHub. Únicamente los {% data variables.product.prodname_managed_users %} que haya aprovisionado tu IdP tendrán acceso a la empresa.

    {% endnote %}

{% data reusables.enterprise-accounts.download-recovery-codes %}


### Habilitar el aprovisionamiento

Después de que habilitas el SSO de SAML, habilita el aprovisionamiento. Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de SCIM para los usuarios administrados de las empresas](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users)".

