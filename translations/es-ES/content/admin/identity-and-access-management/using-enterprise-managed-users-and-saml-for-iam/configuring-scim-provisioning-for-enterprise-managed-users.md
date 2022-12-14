---
title: Configurar el aprovisionamiento de SCIM para los Usuarios Administrados Empresariales
shortTitle: Provisioning managed users
intro: You can configure your identity provider to provision new users and manage their membership in your enterprise and teams.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
- /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
- /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
- Accounts
- Enterprise
ms.openlocfilehash: 7bd9d539218492c474f7a530636ac7719ff14f44
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145116602"
---
## <a name="about-provisioning-for--data-variablesproductprodname_emus-"></a>Acerca del aprovisionamiento para los {% data variables.product.prodname_emus %}

Debes configurar el aprovisionamiento de {% data variables.product.prodname_emus %} para crear, administrar y desactivar las cuentas de usuario para los miembros de las empresas. Cuando configuras el aprovisionamiento para {% data variables.product.prodname_emus %}, los usuarios que se asignaron a la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu proveedor de identidad se aprovisionan como cuentas de usuario nuevas en {% data variables.product.prodname_dotcom %} a través de SCIM y los usuarios se agregan a tu empresa. 

Al actualizar la información asociada a la identidad de un usuario en el IdP, el IdP actualizará la cuenta del usuario en GitHub.com. Cuando desasignas al usuario desde la aplicación de {% data variables.product.prodname_emu_idp_application %} o cuando desactivas una cuenta de usuario en tu IdP, dicho IdP se comunicará con {% data variables.product.prodname_dotcom %} para invalidar las sesiones de SAML e inhabilitar la cuenta del miembro. La información de la cuenta inhabilitada se mantiene y su nombre de usuario se cambia por un hash del nombre de usuario original con el código corto anexo. Si reasignas a un usuario a la aplicación de {% data variables.product.prodname_emu_idp_application %} o reactivas su cuenta en tu IdP, la cuenta de {% data variables.product.prodname_managed_user %} en {% data variables.product.prodname_dotcom %} se reactivará y el nombre de usuario se restablecerá.

Los grupos en tu IdP pueden utilizarse para administrar la membrecía de equipo dentro de las organizaciones de tu empresa, permitiéndote configurar el acceso y los permisos del repositorio mediante tu IdP. Para más información sobre cómo administrar equipos, vea "[Administración de pertenencias a equipos con grupos de proveedores de identidades](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)".

## <a name="prerequisites"></a>Prerrequisitos

Antes de que puedas configurar el aprovisionamiento para {% data variables.product.prodname_emus %}, debes configurar el inicio de sesión único de SAML. Para más información, vea "[Configuración del inicio de sesión único de SAML para usuarios administrados de la empresa](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

## <a name="creating-a-personal-access-token"></a>Creación de un token de acceso personal

Para configurar el aprovisionamiento de {% data variables.product.prodname_emu_enterprise %}, necesita un token de acceso personal con el ámbito **admin:enterprise** que pertenezca el usuario de configuración.

{% warning %}

**Advertencia:** Si el token expira o lo crea un usuario aprovisionado, el aprovisionamiento de SCIM podría dejar de funcionar inesperadamente. Asegúrate de crear el token mientras tienes iniciada la sesión como usuario de configuración y que el vencimiento del token esté configurado como "Sin vencimiento".

{% endwarning %}

1. Inicie sesión en {% data variables.product.prodname_dotcom_the_website %} como el usuario de configuración de la nueva empresa con el nombre de usuario **@<em>CÓDIGO_BREVE</em>_admin**.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. En **Nota**, asigne un nombre descriptivo al token.
   ![Captura de pantalla en la que se muestra el nombre del token](/assets/images/help/enterprises/emu-pat-name.png)
1. Seleccione el menú desplegable **Expiración** y, después, haga clic en **Sin expiración**.
   ![Captura de pantalla en la que se muestra la expiración del token establecida en "Sin expiración"](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. Seleccione el ámbito **admin:enterprise**.
   ![Captura de pantalla en la que se muestra el ámbito admin:enterprise](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Haga clic en **Generar token**.
   ![Botón Generar token](/assets/images/help/settings/generate_token.png)
1. Para copiar el token a tu portapapeles, haz clic en el {% octicon "paste" aria-label="The copy icon" %}.
   ![Token recién creado](/assets/images/help/settings/personal_access_tokens.png)
2. Para guardar el token para utilizarlo posteriormente, almacénalo de forma segura en un administrador de contraseñas.

## <a name="configuring-provisioning-for--data-variablesproductprodname_emus-"></a>Configurar el aprovisionamiento para {% data variables.product.prodname_emus %}

Después de crear tu token de acceso personal y almacenarlo de forma segura, puedes configurar el aprovisionamiento en tu proveedor de identidad.

{% data reusables.scim.emu-scim-rate-limit %}

A fin de configurar Azure Active Directory para aprovisionar usuarios para {% data variables.product.prodname_emu_enterprise %}, vea [Tutorial: Configuración del usuario administrado de GitHub Enterprise para el aprovisionamiento automático de usuarios](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) en la documentación de Azure AD.

A fin de configurar Okta para aprovisionar usuarios para {% data variables.product.prodname_emu_enterprise %}, vea "[Configuración del aprovisionamiento de SCIM para usuarios administrados de Enterprise con Okta](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users-with-okta)".

