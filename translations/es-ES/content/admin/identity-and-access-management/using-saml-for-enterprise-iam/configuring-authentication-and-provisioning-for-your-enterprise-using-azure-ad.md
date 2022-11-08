---
title: Configurar la autenticación y el aprovisionamiento para tu empresa utilizando Azure AD
shortTitle: Configure with Azure AD
intro: "Puedes usar un inquilino en Azure Active Directory (Azure\_AD) como proveedor de identidades (IdP) para administrar centralmente la autenticación y el aprovisionamiento de usuarios para {% data variables.location.product_location %}."
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
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
  - /admin/authentication/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
  - /admin/identity-and-access-management/configuring-authentication-and-provisioning-with-your-identity-provider/configuring-authentication-and-provisioning-for-your-enterprise-using-azure-ad
ms.openlocfilehash: 10b6fdaa2014836e7a709bc94920dea6331ed030
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107519'
---
## Acerca de la autenticación y el aprovisionamiento de usuarios con Azure AD

Azure Active Directory (Azure AD) es un servicio de Microsoft que te permite administrar centralmente las cuentas de usuario y el acceso a las aplicaciones web. Para obtener más información, consulte [¿Qué Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) en Microsoft Docs.

Para administrar la identidad y el acceso para {% data variables.product.product_name %}, puedes utilizar un inquilino en Azure AD como un IdP de SAML para la autenticación. También puedes configurar Azure AD de modo que aprovisione automáticamente las cuentas y acceda a las pertenencias con SCIM, lo cual te permite crear usuarios de {% data variables.product.product_name %} y administrar las pertenencias de equipo y de organización desde tu inquilino de Azure AD.

{% data reusables.scim.ghes-beta-note %}

Después de habilitar el inicio de sesión único de SAML y SCIM para {% data variables.product.product_name %} mediante Azure AD, puedes hacer lo siguiente desde tu inquilino de Azure AD.

* Asignar la aplicación de {% data variables.product.product_name %} en Azure AD a una cuenta de usuario para que cree y otorgue acceso automáticamente a una cuenta de usuario correspondiente en {% data variables.product.product_name %}.
* Desasignar la aplicación de {% data variables.product.product_name %} de una cuenta de usuario en Azure AD para desactivar la cuenta de usuario correspondiente en {% data variables.product.product_name %}.
* Asignar la aplicación de {% data variables.product.product_name %} a un grupo de IdP en Azure AD para que cree y otorgue acceso automáticamente a las cuentas de usuario en {% data variables.product.product_name %} para todos los miembros del grupo de IdP. Además, el grupo de IdP estará disponible en {% data variables.product.product_name %} para que se conecte a un equipo y a sus organizaciones primarias.
* Desasignar la aplicación de {% data variables.product.product_name %} desde un grupo de IdP para desactivar las cuentas de usuario de {% data variables.product.product_name %} de todos los usuarios de IdP que tuvieron acceso únicamente a través de este grupo de IdP y eliminar a los usuarios de la organización primaria. El grupo de IdP se desconectará de cualquier equipo en {% data variables.product.product_name %}.

Para obtener más información sobre cómo administrar la identidad y el acceso de la empresa en{% data variables.location.product_location %}, consulta "[Administración de la identidad y el acceso para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise)". Para obtener más información sobre la sincronización de equipos con grupos de IdP, consulte "[Sincronizar un equipo con un grupo de proveedores de identidades](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)".

## Requisitos previos

- Para configurar la autenticación y el aprovisionamiento de usuarios para {% data variables.product.product_name %} utilizando Azure AD, debes tener una cuenta y un inquilino en Azure AD. Para obtener más información, consulte el [sitio web de Azure AD](https://azure.microsoft.com/free/active-directory) e [Inicio rápido: Creación de un inquilino de Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) en Microsoft Docs.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.assert-the-administrator-attribute %} Para obtener más información sobre la inclusión del atributo `administrator` en la notificación de SAML de Azure AD, consulte [Procedimiento: Personalización de las notificaciones emitidas en el token SAML para aplicaciones empresariales](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) en Microsoft Docs.

- {% data reusables.saml.create-a-machine-user %}

## Configurar la autenticación y el aprovisionamiento de usuarios con Azure AD

En el inquilino de Azure AD, agrega la aplicación para {% data variables.product.product_name %} y, luego, configura el aprovisionamiento.

{% ifversion ghae %}

1. En Azure AD, agrega la {% data variables.enterprise.ae_azure_ad_app_link %} a tu inquilino y configura el inicio de sesión único. Para obtener más información, consulta [Tutorial: Integración del inicio de sesión único (SSO) de Azure Active Directory con {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) en Microsoft Docs.

1. En {% data variables.product.product_name %}, especifica los detalles de tu inquilino de Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Si ya configuraste el SSO de SAML para {% data variables.location.product_location %} con otro IdP y quieres usar Azure AD en su lugar, puedes editar la configuración. Para obtener más información, consulte "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)".

1. Habilita el aprovisionamiento de usuarios en {% data variables.product.product_name %} y configura el aprovisionamiento de usurios en Azure AD. Para obtener más información, consulte "[Configuración del aprovisionamiento de usuarios para la empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

{% elsif scim-for-ghes %}

1. En el inquilino de Azure AD, en la barra lateral izquierda, haz clic en **Aprovisionamiento**.

1. En "URL de inquilino", escribe la dirección URL completa del punto de conexión para SCIM en {% data variables.location.product_location %}. Para obtener más información, consulta "[SCIM](/rest/enterprise-admin/scim#scim-endpoint-urls)" en la documentación de la API REST.

1. En "Token secreto", escribe el {% data variables.product.pat_v1 %} que creaste en el paso 4 de "[Configuración del aprovisionamiento de usuarios con SCIM para la empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

1. Para garantizar una conexión correcta desde Azure AD con {% data variables.location.product_location %}, haz clic en **Probar conexión**.

1. Después de asegurarte de que la conexión es correcta, en la parte superior de la página, haz clic en **Guardar**.

{% endif %}
