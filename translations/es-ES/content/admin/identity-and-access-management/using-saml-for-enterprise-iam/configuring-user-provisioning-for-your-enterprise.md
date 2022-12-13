---
title: Configurar el aprovisionamiento de usuarios para tu empresa
shortTitle: Configure user provisioning
intro: Puedes configurar el Sistema para la Administración de Identidad entre Dominios (SCIM) para tu empresa, el cual aprovisiona las cuentas de usuario automáticamente en {% data variables.product.product_location %} cuando asignas la aplicación para {% data variables.product.product_location %} a un usuario en tu proveedor de identidad (IdP).
permissions: Enterprise owners can configure user provisioning for an enterprise on {% data variables.product.product_name %}.
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
ms.openlocfilehash: c76cf3a3245b272fc61db68470e7a34796a89e42
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145112641"
---
## Acerca del aprovisionamiento de usuarios para tu empresa

{% data reusables.saml.ae-uses-saml-sso %} Para obtener más información, consulta "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

Puedes configurar el aprovisionamiento de usuarios con SCIM para crear o suspender automáticamente cuentas de usuario y conceder acceso a los datos para {% data variables.product.product_name %} al asignar la aplicación en el IdP o anular su asignación. Para obtener más información sobre SCIM, consulta [System for Cross-domain Identity Management: Protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) en el sitio web de IETF.

Si no configuras el aprovisionamiento de usuarios con SCIM, el IdP no se comunicará con {% data variables.product.product_name %} automáticamente al asignar la aplicación a un usuario o anular su asignación. Sin SCIM, {% data variables.product.product_name %} crea una cuenta de usuario mediante el aprovisionamiento Just-In-Time (JIT) de SAML la primera vez que alguien navega a {% data variables.product.product_name %} e inicia sesión mediante la autenticación a través de su IdP.

Configurar el aprovisionamiento le permite a tu IdP comunicarse con {% data variables.product.product_location %} cuando asignas o desasignas la aplicación para {% data variables.product.product_name %} a un usuario en tu IdP. Cuando asignas la aplicación, tu IdP pedirá que {% data variables.product.product_location %} cree una cuenta y enviará un correo electrónico de incorporación al usuario. Cuando desasignas la aplicación, tu IdP se comunicará con {% data variables.product.product_name %} para invalidad cualquier sesión de SAML e inhabilitar la cuenta del miembro.

Para configurar el aprovisionamiento para tu empresa, debes inhabilitar el aprovisionamiento en {% data variables.product.product_name %} y posteriormente instalar y configurar una aplicación de aprovisionamiento en tu IdP.

La aplicación de aprovisionamiento en tu IdP se comunica con {% data variables.product.product_name %} a través de nuestra API de SCIM para empresas. Para obtener más información, consulta "[Administración de GitHub Enterprise](/rest/reference/enterprise-admin#scim)" en la documentación de la API de REST de {% data variables.product.prodname_dotcom %}.

## Proveedores de identidad compatibles

Los siguientes IDP son compatibles con SSO con {% data variables.product.prodname_ghe_managed %}:

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

Para los IdP que son compatibles con el mapeo de equipos, puedes asignar o dejar de asignar la aplicación de {% data variables.product.product_name %} a los grupos de usuarios en tu IdP. Estos grupos estarán entonces disponibles para que los propietarios de organización y mantenedores de equipo en {% data variables.product.product_location %} los mapeen a los equipos de {% data variables.product.product_name %}. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

## Prerrequisitos

Para aprovisionar y desaprovisionar automáticamente el acceso a {% data variables.product.product_location %} desde tu IdP, primero debes configurar el SSO de SAML cuando inicializas {% data variables.product.product_name %}. Para obtener más información, consulte "[Inicialización de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

Debes tener acceso administrativo en tu IdP para configurar la aplicación para el aprovisionamiento de usuarios para {% data variables.product.product_name %}.

## Habilitar el aprovisionamiento de usuarios para tu empresa

1. Mientras tengas una sesión activa en {% data variables.product.product_location %} como propietario de empresa, crea un token de acceso personal con el ámbito **admin:enterprise**. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
  {% note %}

  **Notas**:
    - Para crear el token de acceso personal, te recomendamos utilizar la cuenta para el primer propietario empresarial que creaste durante la inicialización. Para obtener más información, consulte "[Inicialización de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".
    - Necesitarás que este token de accesopersonal configure la aplicación para SCIM en tu IdP. Almacena el token de manera segura en un administrador de contraseñas hasta que lo necesites nuevamente más adelante en estas instrucciones.

  {% endnote %} {% warning %}

  **Advertencia**: Si la cuenta de usuario para el propietario de la empresa que crea el token de acceso personal se desactiva o desaprovisiona, tu IdP ya no aprovisionará ni desaprovisionará cuentas de usuario para tu empresa automáticamente. Otro propietario de empresa deberá crear un token de acceso personal nuevo y reconfigurar el aprovisionamiento en el IdP.

  {% endwarning %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. En "Aprovisionamiento de usuarios de SCIM", selecciona **Requerir aprovisionamiento de usuarios de SCIM**.
  ![Casilla "Requerir aprovisionamiento de usuarios de SCIM" en la configuración de seguridad empresarial](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Haga clic en **Save**(Guardar).
  ![Botón guardar debajo de "Requerir aprovisionamiento de usuarios de SCIM" en la configuración de seguridad empresarial](/assets/images/help/enterprises/settings-scim-save.png)
1. Configura el aprovisionamiento de usuarios en la aplicación para {% data variables.product.product_name %} en tu IdP.

  Los siguientes IdP proporcionan documentación acerca de cómo configurar el aprovisionamiento para {% data variables.product.product_name %}. Si no se lista tu IdP, por favor, contáctalo para solicitar soporte para {% data variables.product.product_name %}.

  | IdP | Más información |
  | :- | :- |
  | Azure AD | [Tutorial: Configuración de {% data variables.product.prodname_ghe_managed %} para el aprovisionamiento de usuarios automático](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) en Microsoft Docs. Para configurar Azure AD para {% data variables.product.prodname_ghe_managed %}, consulta "[Configuración de la autenticación y el aprovisionamiento para la empresa mediante Azure AD](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)".|
| Okta | (beta) Si quieres configurar Okta para {% data variables.product.prodname_ghe_managed %}, consulta "[Configuración de la autenticación y el aprovisionamiento para la empresa mediante Okta](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)".|

  La aplicación en tu IdP requiere dos valores para aprovisionar o desaprovisionar las cuentas de usuario en {% data variables.product.product_location %}.

  | Value | Otros nombres | Descripción | Ejemplo |
  | :- | :- | :- | :- |
  | Resolución | URL de inquilino | URL para la API de aprovisionamiento de SCIM para tu empresa en {% data variables.product.prodname_ghe_managed %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Secreto compartido | Token de acceso personal, token secreto | Toekn para que la aplicación en tu IdP realice las tareas de aprovisionamiento en nombre de un propietario de empresa | Token de acceso personal que creaste en el paso 1 |
