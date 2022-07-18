---
title: Configurar el aprovisionamiento de usuarios para tu empresa
shortTitle: Configure user provisioning
intro: 'Puedes configurar el Sistema para la Administración de Identidad entre Dominios (SCIM) para tu empresa, el cual aprovisiona las cuentas de usuario automáticamente en {% data variables.product.product_location %} cuando asignas la aplicación para {% data variables.product.product_location %} a un usuario en tu proveedor de identidad (IdP).'
permissions: 'Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.'
versions:
  ghae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/authentication/configuring-user-provisioning-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-user-provisioning-for-your-enterprise
---

## Acerca del aprovisionamiento de usuarios para tu empresa

{% data reusables.saml.ae-uses-saml-sso %} Para obtener más información, consulta la sección "[Configurar el incio de sesión único de SAML para tu empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

You can configure user provisioning with SCIM to automatically create or suspend user accounts and grant access for {% data variables.product.product_name %} when you assign or unassign the application on your IdP. For more information about SCIM, see [System for Cross-domain Identity Management: Protocol (RFC 7644)](https://tools.ietf.org/html/rfc7644) on the IETF website.

If you do not configure user provisioning with SCIM, your IdP will not communicate with {% data variables.product.product_name %} automatically when you assign or unassign the application to a user. Without SCIM, {% data variables.product.product_name %} creates a user account using SAML Just-in-Time (JIT) provisioning the first time someone navigates to {% data variables.product.product_name %} and signs in by authenticating through your IdP.

Configurar el aprovisionamiento le permite a tu IdP comunicarse con {% data variables.product.product_location %} cuando asignas o desasignas la aplicación para {% data variables.product.product_name %} a un usuario en tu IdP. Cuando asignas la aplicación, tu IdP pedirá que {% data variables.product.product_location %} cree una cuenta y enviará un correo electrónico de incorporación al usuario. Cuando desasignas la aplicación, tu IdP se comunicará con {% data variables.product.product_name %} para invalidad cualquier sesión de SAML e inhabilitar la cuenta del miembro.

Para configurar el aprovisionamiento para tu empresa, debes inhabilitar el aprovisionamiento en {% data variables.product.product_name %} y posteriormente instalar y configurar una aplicación de aprovisionamiento en tu IdP.

La aplicación de aprovisionamiento en tu IdP se comunica con {% data variables.product.product_name %} a través de nuestra API de SCIM para empresas. Para obtener más información, consulta la sección "[Adminsitración de GitHub Enterprise](/rest/reference/enterprise-admin#scim)" en la documentación de la API de REST de {% data variables.product.prodname_dotcom %}.

## Proveedores de identidad compatibles

Los siguientes IDP son compatibles con SSO con {% data variables.product.prodname_ghe_managed %}:

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

Para los IdP que son compatibles con el mapeo de equipos, puedes asignar o dejar de asignar la aplicación de {% data variables.product.product_name %} a los grupos de usuarios en tu IdP. Estos grupos estarán entonces disponibles para que los propietarios de organización y mantenedores de equipo en {% data variables.product.product_location %} los mapeen a los equipos de {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Mapear grupos de Okta en los equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

## Prerrequisitos

Para aprovisionar y desaprovisionar automáticamente el acceso a {% data variables.product.product_location %} desde tu IdP, primero debes configurar el SSO de SAML cuando inicializas {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Debes tener acceso administrativo en tu IdP para configurar la aplicación para el aprovisionamiento de usuarios para {% data variables.product.product_name %}.

## Habilitar el aprovisionamiento de usuarios para tu empresa

1. Mientras tengas una sesión activa en {% data variables.product.product_location %} como propietario de empresa, crea un token de acceso personal con el alcance **admin:enterprise**. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
  {% note %}

  **Notas**:
    - Para crear el token de acceso personal, te recomendamos utilizar la cuenta para el primer propietario empresarial que creaste durante la inicialización. Para obtener más información, consulta la sección "[Inicializar {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".
    - Necesitarás que este token de accesopersonal configure la aplicación para SCIM en tu IdP. Almacena el token de manera segura en un administrador de contraseñas hasta que lo necesites nuevamente más adelante en estas instrucciones.

  {% endnote %}
  {% warning %}

  **Advertencia**: Si la cuenta de usuario para el propietario de la empresa que crea el token de acceso personal se desactiva o desaprovisiona, tu IdP ya no aprovisionará ni desaprovisionará cuentas de usuario para tu empresa automáticamente. Otro propietario de empresa deberá crear un token de acceso personal nuevo y reconfigurar el aprovisionamiento en el IdP.

  {% endwarning %}
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Debajo de "Aprovisionamiento de usuario de SCIM", selecciona **Requerir el aprovisionamiento de usuario de SCIM**. ![Casilla de verificación para "Requerir aprovisionamiento de usuarios de SCIM" dentro de la configuración de seguridad empresarial](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Haz clic en **Save ** (guardar). ![Botón de guardar debajo de "Requerir aprovisionamiento de usuarios de SCIM" dentro de la configuración de seguridad de la empresa](/assets/images/help/enterprises/settings-scim-save.png)
1. Configura el aprovisionamiento de usuarios en la aplicación para {% data variables.product.product_name %} en tu IdP.

  Los siguientes IdP proporcionan documentación acerca de cómo configurar el aprovisionamiento para {% data variables.product.product_name %}. Si no se lista tu IdP, por favor, contáctalo para solicitar soporte para {% data variables.product.product_name %}.

  | IdP      | Más información                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
  |:-------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | Azure AD | [Tutorial: Configurar a {% data variables.product.prodname_ghe_managed %} para el aprovisionamiento automático de usuarios](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) en los documentos de Microsoft. Para configurar a Azure AD para {% data variables.product.prodname_ghe_managed %}, consulta la sección "[Configurar la autenticación y aprovisionamiento para tu empresa utilizando Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)". |
  | Okta     | (beta) Para configurar a Okta en {% data variables.product.prodname_ghe_managed %}, consulta la sección "[Configurar el aprovisionamiento y la autenticación en tu empresa utilizando Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)".                                                                                                                                                                                                                                                                  |

  La aplicación en tu IdP requiere dos valores para aprovisionar o desaprovisionar las cuentas de usuario en {% data variables.product.product_location %}.

  | Valor              | Otros nombres                           | Descripción                                                                                                           | Ejemplo                                                            |
  |:------------------ |:--------------------------------------- |:--------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------ |
  | URL                | URL de inquilino                        | URL para la API de aprovisionamiento de SCIM para tu empresa en {% data variables.product.prodname_ghe_managed %}   | <nobr>`{% data variables.product.api_url_pre %}/scim/v2</nobr>` |
  | Secreto compartido | Token de acceso personal, token secreto | Toekn para que la aplicación en tu IdP realice las tareas de aprovisionamiento en nombre de un propietario de empresa | Token de acceso personal que creaste en el paso 1                  |
