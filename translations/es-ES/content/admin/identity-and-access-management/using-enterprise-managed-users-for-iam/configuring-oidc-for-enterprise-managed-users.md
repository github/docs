---
title: Configuración de OIDC para usuarios administrados de Enterprise
shortTitle: OIDC for managed users
intro: 'Puedes administrar automáticamente el acceso a tu cuenta de empresa en {% data variables.product.prodname_dotcom %} mediante la configuración del inicio de sesión único (SSO) de OpenID Connect (OIDC) y habilitar la compatibilidad con la directiva de acceso condicional (CAP) de IdP.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: caa557cb976fb60a59572e1623db6be87efeee54
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179993'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Acerca de OIDC para usuarios administrados de Enterprise

Con {% data variables.product.prodname_emus %}, tu empresa utiliza el proveedor de identidades (IdP) para autenticar a todos los miembros. Puedes usar OpenID Connect (OIDC) para administrar la autenticación de tu {% data variables.enterprise.prodname_emu_enterprise %}. Habilitar el inicio de sesión único de OIDC es un proceso de configuración con un solo clic con certificados administrados por {% data variables.product.prodname_dotcom %} y el IdP.

{% data reusables.enterprise-accounts.emu-cap-validates %} Para obtener más información, consulta "[Acerca de la compatibilidad con la directiva de acceso condicional del IdP](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)".

Puedes ajustar la duración de una sesión y la frecuencia con la que un {% data variables.enterprise.prodname_managed_user %} debe volver a autenticarse con el IdP cambiando la propiedad de la directiva de duración de los tokens de identificación emitidos para {% data variables.product.prodname_dotcom %} desde tu IdP. La duración predeterminada es de una hora. Para obtener más información, consulta "[Vigencia de los token configurables en la Plataforma de identidad de Microsoft"](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes) en la documentación de Azure AD.

{% data reusables.enterprise_user_management.SAML-to-OIDC-migration-for-EMU %}

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## Soporte del proveedor de identidad

La compatibilidad con OIDC está disponible para los clientes que usan Azure Active Directory (Azure AD). 

Cada inquilino de Azure AD solo puede admitir una integración de OIDC con {% data variables.product.prodname_emus %}. Si quieres conectar Azure AD a más de una empresa en {% data variables.product.prodname_dotcom %}, utiliza SAML en su lugar. Para obtener más información, consulta "[Configuración del inicio de sesión único de SAML para {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)".

## Configuración de OIDC para usuarios administrados de Enterprise

1. Inicie sesión en {% data variables.product.prodname_dotcom_the_website %} como el usuario configurador de la nueva empresa con el nombre de usuario **@<em>SHORT-CODE</em>_admin**.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Selecciona **Requerir inicio de sesión único de OIDC**.  
   ![Captura de pantalla que muestra la casilla "Requerir inicio de sesión único de OIDC"](/assets/images/help/enterprises/require-oidc.png)
1. Para continuar la instalación y redirigirte a Azure AD, haz clic en **Guardar**.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %} {% data reusables.enterprise-accounts.download-recovery-codes %}

## Habilitar el aprovisionamiento

Después de habilitar el SSO de OIDC, habilita el aprovisionamiento. Para más información, vea "[Configuración del aprovisionamiento de SCIM para usuarios administrados de la empresa](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)".
