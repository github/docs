---
title: Configurar el aprovisionamiento de SCIM para los Usuarios Administrados Empresariales
shortTitle: Provisioning managed users
intro: Puedes configurar tu proveedor de identidad para que aprovisione usuarios nuevos y administre sus membrecías en tu empresa y equipos.
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
ms.openlocfilehash: 3cf1f917f0bfd0e02a1b712958f8d72a041b7281
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160700'
---
## Acerca del aprovisionamiento para los {% data variables.product.prodname_emus %}

Debes configurar el aprovisionamiento de {% data variables.product.prodname_emus %} para crear, administrar y desactivar las cuentas de usuario para los miembros de las empresas. 

Después de configurar el aprovisionamiento para {% data variables.product.prodname_emus %}, los usuarios que se asignaron a la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu proveedor de identidad se aprovisionan como {% data variables.enterprise.prodname_managed_users %} nuevas en {% data variables.product.prodname_dotcom %} a través de SCIM y {% data variables.enterprise.prodname_managed_users %} se agrega a tu empresa. Si asigna un grupo a la aplicación, todos los usuarios del grupo se aprovisionarán como nuevos datos {% data variables.enterprise.prodname_managed_users %}.

Al actualizar la información asociada a la identidad de un usuario en el IdP, el IdP actualizará la cuenta del usuario en {% data variables.product.prodname_dotcom_the_website %}. Cuando desasignes el usuario de la aplicación de {% data variables.product.prodname_emu_idp_application %} o cuando desactives una cuenta de usuario en tu IdP, el IdP se pondrá en contacto con {% data variables.product.prodname_dotcom %} para invalidar las sesiones e inhabilitar la cuenta del miembro. La información de la cuenta inhabilitada se mantiene y su nombre de usuario se cambia por un hash del nombre de usuario original con el código corto anexo. Si reasignas a un usuario a la aplicación de {% data variables.product.prodname_emu_idp_application %} o reactivas su cuenta en tu IdP, {% data variables.enterprise.prodname_managed_user %} en {% data variables.product.prodname_dotcom %} se reactivará y el nombre de usuario se restablecerá.

Los grupos en tu IdP pueden utilizarse para administrar la membrecía de equipo dentro de las organizaciones de tu empresa, permitiéndote configurar el acceso y los permisos del repositorio mediante tu IdP. Para más información sobre cómo administrar equipos, vea "[Administración de pertenencias a equipos con grupos de proveedores de identidades](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

## Prerrequisitos

Para poder configurar el aprovisionamiento para {% data variables.product.prodname_emus %}, primero debes configurar el inicio de sesión único de SAML{% ifversion oidc-for-emu %} o OIDC{% endif %}. {% ifversion oidc-for-emu %}

- Para obtener más información sobre cómo se configura OIDC, consulta "[Configuración de OIDC para Usuarios Administrados de Enterprise](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)".
- {% endif %}Para obtener información sobre cómo configurar SAML, consulta "[Configuración del inicio de sesión único de SAML para Usuarios Administrados de Enterprise](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)".

## Creación de un {% data variables.product.pat_generic %}

Para configurar el aprovisionamiento de {% data variables.enterprise.prodname_emu_enterprise %}, necesita un {% data variables.product.pat_v1 %} con el ámbito **admin:enterprise** que pertenezca al usuario de configuración.

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

## Configurar el aprovisionamiento para {% data variables.product.prodname_emus %}

Después de crear tu {% data variables.product.pat_generic %} y almacenarlo de forma segura, puedes configurar el aprovisionamiento en tu proveedor de identidad. 

{% data reusables.scim.emu-scim-rate-limit %}

Para configurar el aprovisionamiento, sigue el vínculo correspondiente de la siguiente tabla.

| Proveedor de identidades | Método de SSO | Más información | |---|---|---|{% ifversion oidc-for-emu %} | Azure AD | OIDC | [Tutorial: Configuración de GitHub Enterprise Managed User (OIDC) para el aprovisionamiento automático de usuarios](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) en la documentación de Azure AD |{% endif %} | Azure AD | SAML | [Tutorial: Configuración de GitHub Enterprise Managed User para el aprovisionamiento automático de usuarios](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) en la documentación de Azure AD | | Okta | SAML | [Configuración del aprovisionamiento de SCIM para los Usuarios Administrados de Enterprise con Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) |

{% note %}

**Nota:** Azure AD no admite el aprovisionamiento de grupos anidados. Para más información, consulte [Funcionamiento del aprovisionamiento de aplicaciones en Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#assignment-based-scoping).

{% endnote %}
