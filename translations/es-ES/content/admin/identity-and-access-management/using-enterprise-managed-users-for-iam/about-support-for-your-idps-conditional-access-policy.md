---
title: Sobre la compatibilidad con la Directiva de acceso condicional de IdP
shortTitle: Conditional access policy
intro: 'Cuando la empresa usa el inicio de sesión único de OIDC, {% data variables.product.prodname_dotcom %} puede validar el acceso a la empresa y sus recursos mediante la Directiva de acceso condicional (CAP) del IdP.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: aed7008bd008ccfd6303ccbb36f4d6f3bd7002ca
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180001'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Sobre la compatibilidad con las Directivas de acceso condicional

{% data reusables.enterprise-accounts.emu-cap-validates %}

{% data variables.product.product_name %} admite CAP para cualquier {% data variables.enterprise.prodname_emu_enterprise %} donde está habilitado el inicio de sesión único de OIDC. {% data variables.product.product_name %} aplica las condiciones de la IP del IdP, pero no las condiciones de cumplimiento del dispositivo. Los propietarios de la empresa pueden optar por usar esta configuración de lista de direcciones IP permitidas en lugar de la lista de direcciones permitidas de {% data variables.product.product_name %}, y pueden hacerlo una vez configurado el inicio de sesión único de OIDC. Para obtener más información sobre las listas de direcciones IP permitidas, consulta "[Restricción del tráfico de red con una lista de direcciones IP permitidas](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)" y "[Administración de las direcciones IP permitidas para tu organización](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization)".


Para más información sobre el uso de OIDC con {% data variables.product.prodname_emus %}, consulta "[Configuración de OIDC para usuarios administrados por empresas](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)" y "[Migración de SAML a OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)".

## Consideraciones sobre integraciones y automatizaciones

{% data variables.product.prodname_dotcom %} envía la dirección IP de origen al IdP para su validación en el CAP. Para asegurar que las acciones y las aplicaciones no están bloqueadas por el CAP del IdP, habrá que realizar cambios en la configuración.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

Es probable que las acciones que usen un {% data variables.product.pat_generic %} estén bloqueadas por el CAP del proveedor de identidades. Se recomienda que los {% data variables.product.pat_generic %} se creen mediante una cuenta de servicio que, después, esté exenta de los controles IP en el CAP del proveedor de identidades. 

Si no puedes usar una cuenta de servicio, otra opción para desbloquear acciones que usan {% data variables.product.pat_generic %} es permitir los intervalos IP usados por {% data variables.product.prodname_actions %}. Para más información, consulta "[Sobre las direcciones IP de GitHub](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)".

### {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %} 

Cuando {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %} realizan solicitudes en nombre de un miembro, {% data variables.product.prodname_dotcom %} enviará la dirección IP del servidor de la aplicación al IdP para su validación. Si el CAP del IDP no valida la dirección IP del servidor de la aplicación, se producirá un error en la solicitud.

Puedes contactar con los propietarios de las aplicaciones que quiere usar, pedir sus intervalos IP y configurar el CAP del IdP para permitir el acceso desde esos intervalos IP. Si no puedes contactar con los propietarios, puedes revisar los registros de inicio de sesión de IdP para revisar las direcciones IP que se ven en las solicitudes y, después, permitir enumerar esas direcciones. 

Si no quieres permitir todos los intervalos IP para todas las aplicaciones de la empresa, también puedes excluir los {% data variables.product.prodname_github_apps %} y los {% data variables.product.prodname_oauth_apps %} autorizados de la lista de permitidos del proveedor de identidades. Si lo haces, estas aplicaciones seguirán funcionando independientemente de la dirección IP de origen. Para obtener más información, consulta "[Aplicación de directivas de configuración de seguridad en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps)".
