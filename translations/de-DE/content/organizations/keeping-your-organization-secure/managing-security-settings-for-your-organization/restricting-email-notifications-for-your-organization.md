---
title: Einschränken von E-Mail-Benachrichtigungen für deine Organisation
intro: 'Um zu verhindern, dass Organisationsinformationen über persönliche E-Mail-Konten weitergegeben werden, kannst du die Domänen einschränkten, in denen Mitglieder E-Mail-Benachrichtigungen über Organisationsaktivitäten erhalten können.'
permissions: Organization owners can restrict email notifications for an organization.
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Restrict email notifications
ms.openlocfilehash: 480f587862e0618c0624eec581520343c54afa35
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060098'
---
## Informationen zu E-Mail-Einschränkungen

Wenn in einer Organisation eingeschränkte E-Mail-Benachrichtigungen aktiviert sind, können die Mitglieder der Organisation E-Mail-Benachrichtigungen zu den Aktivitäten der Organisation nur an E-Mail-Adressen innerhalb der hierfür verifizierten oder genehmigten Domäne der Organisation erhalten. Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

{% ifversion ghec %} {% note %}

**Hinweis:** Deine Organisation muss {% data variables.product.prodname_ghe_cloud %} verwenden, damit E-Mail-Benachrichtigungen eingeschränkt werden können. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.notifications.email-restrictions-verification %}

Externe Mitarbeiter unterliegen nicht den Einschränkungen für E-Mail-Benachrichtigungen für verifizierte oder genehmigte Domänen. Weitere Informationen zu externen Mitarbeitern findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators).

Wenn deine Organisation einem Unternehmenskonto gehört, können die Organisationsmitglieder Benachrichtigungen von allen Domänen erhalten, die durch das Unternehmenskonto verifiziert oder genehmigt wurden, zusätzlich zu allen Domänen, die für die Organisation verifiziert oder genehmigt wurden. Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

## Einschränken von E-Mail-Benachrichtigungen

Bevor du E-Mail-Benachrichtigungen für deine Organisation einschränken kannst, musst du mindestens eine Domäne für die Organisation verifizieren oder genehmigen, oder ein*e Unternehmensbesitzer*in muss mindestens eine Domäne für das Unternehmenskonto verifiziert oder genehmigt haben.

Weitere Informationen zum Verifizieren und Genehmigen von Domänen für eine Organisation findest du unter [Verifizieren oder Genehmigen einer Domäne für deine Organisation](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.restrict-email-notifications %}
6. Klicken Sie auf **Speichern**.
