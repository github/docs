---
title: Einschränken von E-Mail-Benachrichtigungen für dein Unternehmen
intro: 'Du kannst verhindern, dass die Daten deines Unternehmens in persönliche E-Mail-Konten gelangen, indem du die Domänen einschränkst, in denen Mitglieder E-Mail-Benachrichtigungen über Aktivitäten in Organisationen deines Unternehmens erhalten können.'
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/restricting-email-notifications-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account
shortTitle: Restrict email notifications
ms.openlocfilehash: f5ef3b4ffd3db266e96d4f7fc90f43cbd226034f
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147066497'
---
## Informationen zu E-Mail-Einschränkungen für dein Unternehmen

Wenn du E-Mail-Benachrichtigungen einschränkst, kann von Mitgliedern des Unternehmens nur eine E-Mail-Adresse in einer überprüften oder genehmigten Domäne verwendet werden, um E-Mail-Benachrichtigungen zu Aktivitäten in Organisationen zu erhalten, die zu deinem Unternehmen gehören.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

Die Domänen können vom Unternehmen geerbt oder für die jeweilige Organisation konfiguriert werden. Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise) sowie unter [Einschränken von E-Mail-Benachrichtigungen für deine Organisation](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization).

{% data reusables.notifications.email-restrictions-verification %}

Wenn E-Mail-Einschränkungen für ein Unternehmen aktiviert sind, können E-Mail-Einschränkungen für Organisationen, die zum Unternehmen gehören, von Organisationsbesitzern nicht deaktiviert werden. Sollte eine Organisation aufgrund von Änderungen über keine überprüften oder genehmigten Domänen verfügen (entweder geerbt von einem Unternehmen, zu dem die Organisation gehört, oder für die spezifische Organisation), werden E-Mail-Einschränkungen für die Organisation deaktiviert.

## Einschränken von E-Mail-Benachrichtigungen für dein Unternehmen

Um E-Mail-Benachrichtigungen für dein Unternehmen einschränken zu können, muss mindestens eine Domäne für das Unternehmen überprüft oder genehmigt werden. {% ifversion ghec %} Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.organizations.restrict-email-notifications %}
1. Klicken Sie auf **Speichern**.
