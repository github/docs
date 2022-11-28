---
title: Beschränken von Zugriffsanforderungen durch OAuth- und GitHub-Apps
intro: 'Als Organisationsbesitzer kannst du festlegen, ob externe Projektmitarbeiter Organisationszugriff für {% data variables.product.prodname_oauth_apps %} und {% data variables.product.prodname_github_apps %} anfordern dürfen.'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth Apps
shortTitle: Limit app access requests
ms.openlocfilehash: 4ea1bd133dcbabb9e7b3e3cbe65da5ff9c6eabac
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008167'
---
## Informationen zu Integrationszugriffsanforderungen

Wenn Integrationszugriffsanforderungen aktiviert sind, können externe Projektmitarbeiter Organisationszugriff für {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %} anfordern, die noch nicht von deiner Organisation genehmigt wurden. Wenn du Integrationszugriffsanforderungen deaktivierst, können nur Organisationsmitglieder Organisationszugriff für nicht genehmigte {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %} anfordern. Externe Projektmitarbeiter können weiterhin ihre Einwilligung für vorab genehmigte {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %} erteilen, die auf dieselben Ressourcen zugreifen, auf die der anfordernde externe Mitarbeiter zugreifen kann.

Integrationszugriffsanforderungen sind standardmäßig aktiviert. Wenn deine Organisation über eine große Anzahl von externen Projektmitarbeitern verfügt, solltest du die Integrationszugriffsanforderungen deaktivieren, um die Anzahl der Anforderungen zu verringern, die du überprüfen musst. 

## Aktivieren oder Deaktivieren von Integrationszugriffsanforderungen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. Aktiviere oder deaktiviere unter „Integrationszugriffsanforderungen“ die Option **Integrationsanforderungen von externen Projektmitarbeitern zulassen**, und klicke auf **Speichern**.
    ![Screenshot der Einstellung „Integrationszugriffsanforderungen“](/assets/images/help/organizations/integration-access-requests.png)
