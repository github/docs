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
ms.openlocfilehash: c0291aab00df0139b0b54eda8ec34b6e20deb19f
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192685'
---
## Acerca de la autenticación y el aprovisionamiento de usuarios con Azure AD

Azure Active Directory (Azure AD) es un servicio de Microsoft que te permite administrar centralmente las cuentas de usuario y el acceso a las aplicaciones web. Para obtener más información, consulte [¿Qué Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) en Microsoft Docs.

{% data reusables.saml.idp-saml-and-scim-explanation %}

{% data reusables.scim.ghes-beta-note %}

Después de habilitar el inicio de sesión único de SAML y SCIM para {% data variables.product.product_name %} mediante Azure AD, puedes hacer lo siguiente desde tu inquilino de Azure AD.

* Asignar la aplicación de {% data variables.product.product_name %} en Azure AD a una cuenta de usuario para que cree y otorgue acceso automáticamente a una cuenta de usuario correspondiente en {% data variables.product.product_name %}.
* Desasignar la aplicación de {% data variables.product.product_name %} de una cuenta de usuario en Azure AD para desactivar la cuenta de usuario correspondiente en {% data variables.product.product_name %}.
* Asignar la aplicación de {% data variables.product.product_name %} a un grupo de IdP en Azure AD para que cree y otorgue acceso automáticamente a las cuentas de usuario en {% data variables.product.product_name %} para todos los miembros del grupo de IdP. Además, el grupo de IdP estará disponible en {% data variables.product.product_name %} para que se conecte a un equipo y a sus organizaciones primarias.
* Desasignar la aplicación de {% data variables.product.product_name %} desde un grupo de IdP para desactivar las cuentas de usuario de {% data variables.product.product_name %} de todos los usuarios de IdP que tuvieron acceso únicamente a través de este grupo de IdP y eliminar a los usuarios de la organización primaria. El grupo de IdP se desconectará de cualquier equipo en {% data variables.product.product_name %}.

Para obtener más información sobre cómo administrar la identidad y el acceso de la empresa en{% data variables.location.product_location %}, consulta "[Administración de la identidad y el acceso para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise)".

## Requisitos previos

- Para configurar la autenticación y el aprovisionamiento de usuarios para {% data variables.product.product_name %} utilizando Azure AD, debes tener una cuenta y un inquilino en Azure AD. Para obtener más información, consulte el [sitio web de Azure AD](https://azure.microsoft.com/free/active-directory) e [Inicio rápido: Creación de un inquilino de Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) en Microsoft Docs.

{%- ifversion scim-for-ghes %}
- {% data reusables.saml.ghes-you-must-configure-saml-sso %} {%- endif %}

- {% data reusables.saml.create-a-machine-user %}

## Configurar la autenticación y el aprovisionamiento de usuarios con Azure AD

{% ifversion ghae %}

En el inquilino de Azure AD, agrega la aplicación para {% data variables.product.product_name %} y, luego, configura el aprovisionamiento.

1. En Azure AD, agrega la {% data variables.enterprise.ae_azure_ad_app_link %} a tu inquilino y configura el inicio de sesión único. Para obtener más información, consulta [Tutorial: Integración del inicio de sesión único (SSO) de Azure Active Directory con {% data variables.product.product_name %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) en Microsoft Docs.

1. En {% data variables.product.product_name %}, especifica los detalles de tu inquilino de Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Si ya configuraste el SSO de SAML para {% data variables.location.product_location %} con otro IdP y quieres usar Azure AD en su lugar, puedes editar la configuración. Para obtener más información, consulte "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)".

1. Habilita el aprovisionamiento de usuarios en {% data variables.product.product_name %} y configura el aprovisionamiento de usurios en Azure AD. Para obtener más información, consulte "[Configuración del aprovisionamiento de usuarios para la empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

{% elsif scim-for-ghes %}

1. Configura el inicio de sesión único de SAML para {% data variables.location.product_location %}. Para obtener más información, consulte "[Configuración del inicio de sesión único de SAML para la empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise#configuring-saml-sso)".
1. Configura el aprovisionamiento de usuarios con SCIM para la instancia. Para obtener más información, consulta "[Configuración del aprovisionamiento de usuarios con SCIM para la empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/configuring-user-provisioning-with-scim-for-your-enterprise)".

{% endif %}

## Administración de propietarios de empresas 

Los pasos para convertir a una persona en un propietario de la empresa dependen de si solo usas SAML o también usas SCIM. Para obtener más información sobre los propietarios de empresas, consulta "[Roles en una empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

Si has configurado el aprovisionamiento, para conceder la propiedad empresarial del usuario en {% data variables.product.product_name %}, asigna el rol de propietario de empresa al usuario de Azure AD.

Si no configuraste el aprovisionamiento, para conceder la propiedad empresarial del usuario en {% data variables.product.product_name %}, incluye el atributo `administrator` con el valor de `true` en la aserción de SAML para la cuenta de usuario en el IdP. Para obtener más información sobre la inclusión del atributo `administrator` en la notificación de SAML de Azure AD, consulta: [Procedimiento: personalización de las notificaciones emitidas en el token SAML para aplicaciones empresariales](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) en Microsoft Docs.
