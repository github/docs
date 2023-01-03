---
title: Anzeigen der Sicherheitsübersicht
intro: 'Navigieren zu den verschiedenen Ansichten, die in der Sicherheitsübersicht verfügbar sind'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
allowTitleToDifferFromFilename: true
versions:
  ghae: '>= 3.4'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: View the security overview
ms.openlocfilehash: bc802d290406bb4e480050ee21bb7a4687475d97
ms.sourcegitcommit: 094dff459fcbf7d0634930e02405606dfffd7f0a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/12/2022
ms.locfileid: '148163219'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

{% data reusables.security-overview.information-varies-GHAS %}

## Anzeigen der Sicherheitsübersicht für eine Organisation

{% data reusables.security-overview.beta-org-risk-coverage %}

{% ifversion security-overview-org-risk-coverage %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Wähle die Übersicht, die du anzeigen möchtest, aus den Optionen in der Seitenleiste aus.
1. Nutze die Dropdownfilter und das Suchfeld, um dich auf die Informationen zu konzentrieren, die dich am meisten interessieren. Die Ansichten „Sicherheitsrisiko“ und „Sicherheitsabdeckung“ verfügen außerdem über eine interaktive Kopfzeile, mit der du die Ergebnisse filtern kannst.

  ![Screenshot: Ansicht „Sicherheitsrisiko“ mit hervorgehobener interaktiver Kopfzeile](/assets/images/help/security-overview/security-risk-interactive-header.png)

{% else %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.security-overview %}
1. Wenn du aggregierte Informationen zu Warnungstypen anzeigen möchtest, klicke auf **Mehr anzeigen**.
  ![Schaltfläche „Mehr anzeigen“](/assets/images/help/security-overview/security-overview-show-more-button.png) {% data reusables.organizations.filter-security-overview %} {% ifversion security-overview-alert-views %} {% data reusables.organizations.security-overview-feature-specific-page %} ![Screenshot: Seite für die Codeüberprüfung](/assets/images/help/security-overview/security-overview-code-scanning-alerts.png) {% endif %}

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Anzeigen der Sicherheitsübersicht für ein Unternehmen

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
1. Klicke auf der linken Seitenleiste auf {% octicon "shield" aria-label="The shield icon" %} **Codesicherheit**.
{% ifversion security-overview-feature-specific-alert-page %} {% data reusables.organizations.security-overview-feature-specific-page %} {% endif %}

{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Anzeigen der Sicherheitsübersicht für ein Team

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %} {% data reusables.organizations.team-security-overview %} {% data reusables.organizations.filter-security-overview %} {% endif %}
