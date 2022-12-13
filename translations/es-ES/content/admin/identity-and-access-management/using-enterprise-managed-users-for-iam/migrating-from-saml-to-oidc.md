---
title: Migración de SAML a OIDC
shortTitle: Migrating from SAML to OIDC
intro: 'Si usas SAML para autenticar miembros en tu {% data variables.enterprise.prodname_emu_enterprise %}, puedes migrar a OpenID Connect (OIDC) y beneficiarte de la compatibilidad con la Directiva de acceso condicional de tu proveedor de identidades.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 36c93c94bfda1d0ebc951b0a8325691afa0199bb
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180049'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Acerca de la migración de tu {% data variables.enterprise.prodname_emu_enterprise %} de SAML a OIDC

Si tu {% data variables.enterprise.prodname_emu_enterprise %} usa el SSO de SAML para autenticarse con Azure Active Directory (Azure AD), puedes migrar a OIDC. {% data reusables.enterprise-accounts.emu-cap-validates %}

Al migrar de SAML a OIDC, {% data variables.enterprise.prodname_managed_users %} y los grupos que estaban aprovisionados para SAML, pero que no están aprovisionados por la aplicación {% data variables.product.prodname_emu_idp_oidc_application %}, tendrán el sufijo "(SAML)" adjunto al nombre para mostrar.

Si no estás familiarizado con {% data variables.product.prodname_emus %} y todavía no configuraste la autenticación para tu empresa, no es necesario que migres y puedes configurar el inicio de sesión único de OIDC de inmediato. Para más información, consulta "[Configuración de OIDC para usuarios administrados por empresas](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)".

## Migración de tu empresa

{% note %}

**Nota:** Para iniciar sesión como el usuario de configuración, necesitarás un código de recuperación. Si todavía no tienes códigos de recuperación, puedes acceder a ellos después de iniciar sesión como propietario de la empresa. Para más información, consulta "[Descarga de los códigos de recuperación de inicio de sesión único de la cuenta empresarial](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes)".

{% endnote %}

1. Antes de empezar la migración, inicia sesión en Azure y deshabilita el aprovisionamiento en la aplicación {% data variables.product.prodname_emu_idp_application %} existente.
1. Si usas [directivas de ubicación de red de acceso condicional (CA)](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition) en Azure AD y actualmente usas una lista de direcciones IP permitidas con tu cuenta empresarial o con cualquiera de las organizaciones que pertenecen a la cuenta empresarial en {% data variables.product.prodname_dotcom_the_website %}, deshabilita las listas de direcciones IP permitidas. Para obtener más información, consulta "[Aplicación de la configuración de seguridad en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" y "[Administración de direcciones IP permitidas para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)".
1.  Inicia sesión en {% data variables.product.prodname_dotcom_the_website %} como el usuario de configuración de la empresa con el nombre de usuario **@<em>SHORT-CODE</em>_admin**. 
1. Cuando se te pida continuar a tu proveedor de identidades, haz clic en **Usar un código de recuperación** e inicia sesión con uno de los códigos de recuperación de la empresa.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. En la parte inferior de la página, junto a "Migrar al inicio de sesión único de OpenID Connect", haz clic en **Configurar con Azure**.  
   {% warning %} 

   **Advertencia:** La migración puede tardar hasta una hora y es importante que no se aprovisione ningún usuario durante el proceso. Para confirmar si la migración sigue en curso, vuelve a la página de la configuración de seguridad de la empresa; si la opción "Requerir autenticación de SAML" todavía está activada, la migración sigue en curso.

   {% endwarning %}

   ![Captura de pantalla en la que se muestra el botón "Configurar con Azure"](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. Lee ambas advertencias y haz clic para continuar.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. En una pestaña o ventana nueva, mientras sigues en la sesión que iniciaste como usuario de configuración en {% data variables.product.prodname_dotcom_the_website %}, crea un {% data variables.product.pat_v1 %} con el ámbito **admin:enterprise** y **sin expiración** y cópialo en el Portapapeles. Para obtener más información sobre cómo crear un nuevo token, consulta "[Creación de un {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token)".
1. En la configuración de la aplicación {% data variables.product.prodname_emu_idp_oidc_application %} en Azure Portal, en "URL de inquilino", escribe `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE` y reemplaza YOUR_ENTERPRISE por el nombre de tu cuenta empresarial.  
   
   Por ejemplo, si la dirección URL de tu cuenta empresarial es `https://github.com/enterprises/octo-corp`, el nombre de la cuenta empresarial es `octo-corp`.
1. En "Token secreto", pega {% data variables.product.pat_v1 %} con el ámbito **admin:enterprise** que creaste anteriormente.
1. Para probar la configuración, haz clic en **Probar conexión**.
1. Para guardar los cambios, haz clic en **Guardar** en la parte superior del formulario.
1. En Azure Portal, copia los usuarios y los grupos de la aplicación {% data variables.product.prodname_emu_idp_application %} anterior a la aplicación {% data variables.product.prodname_emu_idp_oidc_application %} nueva.
1. Para probar la configuración, aprovisiona un usuario nuevo único.
1. Si la prueba se completa correctamente, empieza a aprovisionar para todos los usuarios con un clic en **Iniciar aprovisionamiento**.
