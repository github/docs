---
title: Limitación de solicitudes de acceso a aplicaciones de OAuth y aplicaciones de GitHub
intro: 'Como propietario de la organización, puedes decidir si permitir que los colaboradores externos soliciten acceso de la organización a {% data variables.product.prodname_oauth_apps %} y {% data variables.product.prodname_github_apps %}.'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth Apps
shortTitle: Limit app access requests
ms.openlocfilehash: 6c991ecfbdac75f1bb3bb4fdb5ea3a0692f1d040
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186439'
---
## Acerca de las solicitudes de acceso de integración

Cuando se habilitan las solicitudes de acceso de integración, los colaboradores externos pueden solicitar acceso de la organización a {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %} que aún no han sido aprobadas por la organización. Si se deshabilitan las solicitudes de acceso de integración, solo los miembros de la organización podrán solicitar acceso de la organización a {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %}. Los colaboradores externos seguirán pudiendo dar su consentimiento para {% data variables.product.prodname_github_apps %} y {% data variables.product.prodname_oauth_apps %} aprobadas previamente accediendo a los mismos recursos a los que tiene acceso el colaborador externo que realiza la solicitud.

Las solicitudes de acceso de integración están habilitadas de forma predeterminada. Si tu organización tiene un gran número de colaboradores externos, posiblemente te convenga deshabilitar las solicitudes de acceso de integración para reducir el número de solicitudes que hay que revisar. 

## Cómo habilitar o deshabilitar solicitudes de acceso de integración

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. En "Solicitudes de acceso de integración", selecciona **Permitir solicitudes de integración de colaboradores externos** (o anula su selección) y haz clic en **Guardar**.
    ![Captura de pantalla de configuración de solicitudes de acceso de integración](/assets/images/help/organizations/integration-access-requests.png)
