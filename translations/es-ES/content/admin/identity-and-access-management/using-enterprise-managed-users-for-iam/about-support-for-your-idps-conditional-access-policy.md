---
title: Sobre la compatibilidad con la Directiva de acceso condicional de IdP
shortTitle: Conditional access policy
intro: 'Cuando la empresa usa el inicio de sesión único de OIDC, {% data variables.product.prodname_dotcom %} validará el acceso a la empresa y sus recursos mediante la Directiva de acceso condicional (CAP) del IdP.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 5cdbf686ec72a8d26ade861d59f6208d9f5901e2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147684471'
---
{% data reusables.enterprise-accounts.oidc-beta-notice %}

## Sobre la compatibilidad con las Directivas de acceso condicional

{% data reusables.enterprise-accounts.emu-cap-validates %}

La compatibilidad con CAP se habilita de forma automática para cualquier {% data variables.product.prodname_emu_enterprise %} que habilita el inicio de sesión único de OIDC, y no se puede deshabilitar. {% data variables.product.prodname_dotcom %} aplica las condiciones de la IP del IdP, pero no las condiciones de cumplimiento del dispositivo.

Para más información sobre el uso de OIDC con {% data variables.product.prodname_emus %}, consulta "[Configuración de OIDC para usuarios administrados por empresas](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)" y "[Migración de SAML a OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)".

{% note %}

**Nota:** Si usas directivas de ubicación de red de acceso condicional (CA) en el inquilino de Azure AD, no uses la característica de lista de direcciones IP permitidas en {% data variables.product.prodname_dotcom_the_website %} con tu cuenta de empresa ni con ninguna de las organizaciones propiedad de la empresa. El uso de ambas no es compatible y puede dar lugar a que se aplique una directiva incorrecta. Para obtener más información sobre las listas de direcciones IP permitidas, consulta "[Aplicación de la configuración de seguridad en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise)" y "[Administración de direcciones IP permitidas para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)".

{% endnote %}

## Consideraciones sobre integraciones y automatizaciones

{% data variables.product.prodname_dotcom %} envía la dirección IP de origen al IdP para su validación en el CAP. Para asegurar que las acciones y las aplicaciones no están bloqueadas por el CAP del IdP, habrá que realizar cambios en la configuración.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

Es probable que las acciones que usen un token de acceso personal estén bloqueadas por el CAP del IdP. Se recomienda que los tokens de acceso personal se creen mediante una cuenta de servicio que, después, esté exenta de los controles IP en el CAP del IdP. 

Si no puedes usar una cuenta de servicio, otra opción para desbloquear acciones que usan tokens de acceso personal es permitir los intervalos IP usados por {% data variables.product.prodname_actions %}. Para más información, consulta "[Sobre las direcciones IP de GitHub](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)".

### {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %} 

Cuando {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %} realizan solicitudes en nombre de un miembro, {% data variables.product.prodname_dotcom %} enviará la dirección IP del servidor de la aplicación al IdP para su validación. Si el CAP del IDP no valida la dirección IP del servidor de la aplicación, se producirá un error en la solicitud.

Puedes contactar con los propietarios de las aplicaciones que quiere usar, pedir sus intervalos IP y configurar el CAP del IdP para permitir el acceso desde esos intervalos IP. Si no puedes contactar con los propietarios, puedes revisar los registros de inicio de sesión de IdP para revisar las direcciones IP que se ven en las solicitudes y, después, permitir enumerar esas direcciones. 

También puedes habilitar la configuración de la lista de direcciones IP permitidas para los datos {% data variables.product.prodname_github_apps %} instalados. Cuando se habilita, todos los datos {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %} seguirán funcionando independientemente de la dirección IP de origen. Para obtener más información, consulta "[Aplicación de directivas de configuración de seguridad en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)".
