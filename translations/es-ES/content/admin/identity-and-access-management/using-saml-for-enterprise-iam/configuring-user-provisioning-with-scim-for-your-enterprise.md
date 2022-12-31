---
title: Configuración del aprovisionamiento de usuarios con SCIM para la empresa
shortTitle: Configure SCIM user provisioning
intro: 'Puedes configurar System for Cross-domain Identity Management (SCIM) para {% ifversion scim-for-ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}, que aprovisiona automáticamente las cuentas de usuario al asignar la aplicación para {% ifversion scim-for-ghes %}tu instancia{% elsif ghae %}{% data variables.product.product_name %}{% endif %} a un usuario en el proveedor de identidades (IdP).'
permissions: '{% ifversion scim-for-ghes %}Site administrators{% elsif ghae %}Enterprise owners{% endif %} can configure user provisioning for {% ifversion scim-for-ghes %}a {% data variables.product.product_name %} instance{% elsif ghae %}an enterprise on {% data variables.product.product_name %}{% endif %}.'
versions:
  ghae: '*'
  feature: scim-for-ghes
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
  - /admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-for-your-enterprise
ms.openlocfilehash: ded93a01d14d1a5e26cdf35efed4f13afc832ca1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192669'
---
{% data reusables.scim.ghes-beta-note %}

## Acerca del aprovisionamiento de usuarios para {% data variables.product.product_name %}

{% ifversion ghae %}

{% data reusables.saml.ae-uses-saml-sso %} Para obtener más información, consulta "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise)".

{% endif %}

{% ifversion scim-for-ghes %}Si usas el inicio de sesión único (SSO) de SAML para {% data variables.location.product_location %},{% elsif ghae %}Tú{% endif %} puedes configurar SCIM a fin de crear o suspender automáticamente cuentas de usuario y conceder acceso{% ifversion scim-for-ghes %} a la instancia{% elsif ghae %} para {% data variables.product.product_name %}{% endif %} al asignar o anular la asignación de la aplicación en el IdP. Para obtener más información sobre SCIM, consulta [System for Cross-domain Identity Management: Protocolo (RFC 7644)](https://tools.ietf.org/html/rfc7644) en el sitio web de IETF.

Si no configuras el aprovisionamiento de usuarios con SCIM, el IdP no se comunicará con {% data variables.product.product_name %} automáticamente al asignar la aplicación a un usuario o anular su asignación. Sin SCIM, {% data variables.product.product_name %} crea una cuenta de usuario mediante el aprovisionamiento Just-In-Time (JIT) de SAML la primera vez que alguien navega a {% data variables.product.product_name %} e inicia sesión mediante la autenticación a través de su IdP.

Configurar el aprovisionamiento permite a tu IdP comunicarse con {% data variables.location.product_location %} cuando asignas o anulas la asignación de la aplicación para {% data variables.product.product_name %} a un usuario en tu IdP. Cuando asignas la aplicación, tu IdP pedirá que {% data variables.location.product_location %} cree una cuenta y enviará un correo electrónico de incorporación al usuario. Cuando desasignas la aplicación, tu IdP se comunicará con {% data variables.product.product_name %} para invalidad cualquier sesión de SAML e inhabilitar la cuenta del miembro.

Para configurar el aprovisionamiento para tu empresa, debes inhabilitar el aprovisionamiento en {% data variables.product.product_name %} y posteriormente instalar y configurar una aplicación de aprovisionamiento en tu IdP.

{% ifversion scim-for-ghes %}

La aplicación de aprovisionamiento en tu IdP se comunica con {% data variables.product.product_name %} con la API de SCIM. Para obtener más información, consulta "[SCIM](/rest/enterprise-admin/scim)" en la documentación de la API REST.

{% endif %}

## Acerca de las identidades y las notificaciones

Después de que un administrador de IdP conceda a una persona acceso a {% data variables.location.product_location %}, el usuario puede autenticarse mediante el IdP para acceder a {% data variables.product.product_name %} mediante el inicio de sesión único de SAML.

Durante la autenticación, {% ifversion scim-for-ghes %}la instancia{% elsif ghae %}{% data variables.product.product_name %}{% endif %} intenta asociar el usuario con una identidad SAML. De manera predeterminada, {% ifversion scim-for-ghes %}la instancia{% elsif ghae %}{% data variables.product.product_name %}{% endif %} compara la notificación `NameID` del IdP con el nombre de usuario de la cuenta. {% data variables.product.product_name %} normaliza el valor de `NameID` para la comparación. A fin de obtener más información sobre la normalización del nombre de usuario, consulta "[Consideraciones sobre el nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#about-username-normalization)".

Si no hay ninguna cuenta existente con un nombre de usuario coincidente en la instancia, el usuario no podrá iniciar sesión.{% ifversion scim-for-ghes %} Para que coincida, {% data variables.product.product_name %} compara la notificación SAML `NameId` del IdP con la notificación `username` de cada cuenta de usuario aprovisionada por SCIM en la instancia.{% endif %}

{% ifversion scim-for-ghes %}

{% note %}

**Nota**: Durante la autenticación SAML, puede que algunos entornos usen un valor distinto de `NameID` como notificación de identificación única. Actualmente, si usas el aprovisionamiento de SCIM, no se admiten asignaciones personalizadas para los atributos de usuario de SAML.

{% endnote %}

{% endif %}

Si {% data variables.product.product_name %} identifica correctamente a un usuario del IdP, pero los detalles de la cuenta, como la dirección de correo electrónico, el nombre o el apellido no coinciden, la instancia sobrescribirá los detalles con valores del IdP. Las direcciones de correo electrónico que no sean el correo electrónico principal aprovisionado por SCIM también se eliminarán de la cuenta de usuario.

## Proveedores de identidad compatibles

{% ifversion ghes %}

Durante la versión beta privada, el equipo de la cuenta proporcionará documentación para la configuración de SCIM para {% data variables.product.product_name %} en un IdP compatible.

{% elsif ghae %}

Los IdP siguientes admiten el aprovisionamiento de usuarios con SCIM para {% data variables.product.product_name %}.

{% data reusables.saml.okta-ae-sso-beta %}

{% data reusables.github-ae.saml-idp-table %}

{% data reusables.scim.ghes-scim-beta-note %}

{% data reusables.scim.ghes-scim-idp-table %}

Para los IdP que son compatibles con el mapeo de equipos, puedes asignar o dejar de asignar la aplicación de {% data variables.product.product_name %} a los grupos de usuarios en tu IdP. Luego, estos grupos estarán disponibles para que los propietarios de la organización y los mantenedores de equipos en {% data variables.location.product_location %} los asignen a los equipos de {% data variables.product.product_name %}. Para más información, vea "[Asignación de grupos de Okta a equipos](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)".

{% endif %}

## Requisitos previos

{% ifversion ghae %}

- Debes configurar el inicio de sesión único de SAML al inicializar {% data variables.product.product_name %}. Para obtener más información, consulte "[Inicialización de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".

{% elsif scim-for-ghes %}

- {% data reusables.saml.ghes-you-must-configure-saml-sso %}

- Debes permitir la autenticación integrada para los usuarios que no tengan una cuenta en el IdP. Para obtener más información, consulta "[Permiso para la autenticación integrada para usuarios fuera del proveedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)".

- El IdP debe admitir la realización de llamadas SCIM a un proveedor de servicios (SP).

{% endif %}

- Debes tener acceso administrativo en tu IdP para configurar la aplicación para el aprovisionamiento de usuarios para {% data variables.product.product_name %}.

## Habilitar el aprovisionamiento de usuarios para tu empresa

{% ifversion scim-for-ghes %}

Para realizar acciones de aprovisionamiento en la instancia, crearás una cuenta de usuario integrada y promoverás la cuenta a un propietario de la empresa.

Después de habilitar SCIM en una instancia de {% data variables.product.product_name %}, se suspenden todas las cuentas de usuario. La cuenta de usuario integrada seguirá realizando acciones de aprovisionamiento. Después de conceder a un usuario acceso a la instancia desde el IdP, el IdP se comunicará con la instancia mediante SCIM para anular la suspensión de la cuenta del usuario.

{% endif %}

{%- ifversion ghae %}
1. Mientras tengas una sesión iniciada en {% data variables.location.product_location %} como propietario de empresa, crea un {% data variables.product.pat_v1 %} con el ámbito **admin:enterprise**. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".
  {% note %}

  **Notas**:
    - A fin de crear el {% data variables.product.pat_generic %}, te recomendamos utilizar la cuenta para el primer propietario empresarial que creaste durante la inicialización. Para obtener más información, consulte "[Inicialización de {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)".
    - Necesitarás que este {% data variables.product.pat_generic %} configure la aplicación para SCIM en tu IdP. Almacena el token de manera segura en un administrador de contraseñas hasta que lo necesites nuevamente más adelante en estas instrucciones.

  {% endnote %} {% warning %}

  **Advertencia**: Si la cuenta de usuario para el propietario de la empresa que crea el {% data variables.product.pat_generic %} se desactiva o desaprovisiona, tu IdP ya no aprovisionará ni desaprovisionará cuentas de usuario para la empresa automáticamente. Otro propietario de empresa debe crear un {% data variables.product.pat_generic %} y volver a configurar el aprovisionamiento en el IdP.

  {% endwarning %} {%- elsif scim-for-ghes %}
1. Crea una cuenta de usuario integrada para realizar acciones de aprovisionamiento en la instancia. Para obtener más información, consulta "[Permiso para la autenticación integrada para usuarios fuera del proveedor](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider#inviting-users-outside-your-provider-to-authenticate-to-your-instance)".
1. Promueve la cuenta de usuario dedicada a un propietario de la empresa. Para más información, vea "[Invitación a usuarios a administrar la empresa](/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise#adding-an-enterprise-administrator-to-your-enterprise-account)".
1. Inicia sesión en la instancia como el nuevo propietario de la empresa.
1. Crea un {% data variables.product.pat_v1 %} con el ámbito **admin:enterprise**. No especifiques una fecha de expiración para el {% data variables.product.pat_v1 %}. Para obtener más información, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)".

   {% warning %}
   
   **Advertencia**: Asegúrate de no especificar una fecha de expiración para el {% data variables.product.pat_v1 %}. Si especificas una fecha de expiración, SCIM ya no funcionará una vez superada la fecha de expiración.
   
   {% endwarning %} {% note %}

   **Nota**: Necesitarás este {% data variables.product.pat_generic %} a fin de probar la configuración de SCIM y configurar la aplicación para SCIM en el IdP. Almacena el token de manera segura en un administrador de contraseñas hasta que lo necesites nuevamente más adelante en estas instrucciones.

   {% endnote %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. Para habilitar SCIM, ejecuta los comandos que proporciona el administrador de cuentas en {% data variables.contact.contact_enterprise_sales %}.
{% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}
1. Para validar que SCIM está operativo, ejecuta los comandos siguientes. Reemplaza _PAT FROM STEP 3_ y _YOUR INSTANCE'S HOSTNAME_ por valores reales.

   ```shell
   $ GHES_PAT="PAT FROM STEP 3"
   $ GHES_HOSTNAME="YOUR INSTANCE'S HOSTNAME"
   $ curl --location --request GET 'https://$GHES_HOSTNAME/api/v3/scim/v2/Users' \
       --header 'Content-Type: application/scim' \
       --header 'Authorization: Bearer $GHES_PAT'
   ```
   
   El comando debe devolver una matriz vacía.
{%- endif %} {%- ifversion ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. En "Aprovisionamiento de usuarios de SCIM", selecciona **Requerir aprovisionamiento de usuarios de SCIM**.
  ![Casilla "Requerir aprovisionamiento de usuarios de SCIM" en la configuración de seguridad empresarial](/assets/images/help/enterprises/settings-require-scim-user-provisioning.png)
1. Haga clic en **Save**(Guardar).
  ![Botón guardar en "Requerir aprovisionamiento de usuarios de SCIM" en la configuración de seguridad empresarial](/assets/images/help/enterprises/settings-scim-save.png) {%- endif %}
1. Configura el aprovisionamiento de usuarios en la aplicación para {% data variables.product.product_name %} en el IdP.{% ifversion scim-for-ghes %} Para solicitar documentación para un IdP compatible, contacta con el administrador de la cuenta en {% data variables.contact.contact_enterprise_sales %}. Si el IdP no es compatible, debes crear la aplicación y configurar SCIM manualmente.{% elsif ghae %}

  Los siguientes IdP proporcionan documentación acerca de cómo configurar el aprovisionamiento para {% data variables.product.product_name %}. Si no se lista tu IdP, por favor, contáctalo para solicitar soporte para {% data variables.product.product_name %}.

  | IdP | Más información |
  | :- | :- |
  | Azure AD | [Tutorial: Configuración de {% data variables.product.prodname_ghe_managed %} para el aprovisionamiento de usuarios automático](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-provisioning-tutorial) en Microsoft Docs. Para configurar Azure AD para {% data variables.product.product_name %}, consulta "[Configuración de la autenticación y el aprovisionamiento para la empresa mediante Azure AD](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad)". |
  | Okta | (beta) Si quieres configurar Okta para {% data variables.product.product_name %}, consulta "[Configuración de la autenticación y el aprovisionamiento para la empresa mediante Okta](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-authentication-and-provisioning-for-your-enterprise-using-okta)". |

  La aplicación en tu IdP requiere dos valores para aprovisionar o desaprovisionar las cuentas de usuario en {% data variables.location.product_location %}.

  | Value | Otros nombres | Descripción | Ejemplo |
  | :- | :- | :- | :- |
  | Resolución | URL de inquilino | URL para la API de aprovisionamiento de SCIM para tu empresa en {% data variables.product.product_name %} | <nobr><code>{% data variables.product.api_url_pre %}/scim/v2</nobr></code> |
  | Secreto compartido | {% data variables.product.pat_generic_caps %}, token secreto | Toekn para que la aplicación en tu IdP realice las tareas de aprovisionamiento en nombre de un propietario de empresa | {% data variables.product.pat_generic_caps %} que has creado en el paso 1 |
  {%- endif %}
