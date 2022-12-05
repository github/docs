---
title: Verwalten von GitHub Advanced Security-Features für dein Unternehmen
intro: 'Du kannst {% data variables.product.prodname_GH_advanced_security %}-Features steuern, die Code in allen Organisationen im Besitz deines Unternehmens sichern und analysieren.'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_advanced_security %} features for organizations in an enterprise.'
versions:
  feature: secret-scanning-enterprise-level
type: how_to
topics:
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Manage GitHub Advanced Security
ms.openlocfilehash: 0d48863d55805c5386435b7fef52a61a4ba7d43c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107205'
---
## Informationen zur Verwaltung von {% data variables.product.prodname_advanced_security %}-Features

Mithilfe von {% data variables.product.prodname_advanced_security %}-Features kannst du die Sicherheit für die Organisationen in deinem Unternehmen erhöhen. Für eine optimale Verwaltung von {% data variables.product.prodname_advanced_security %} kannst du die einzelnen Features für alle vorhandenen und/oder neuen Repositorys innerhalb der Organisationen im Besitz deines Unternehmens aktivieren oder deaktivieren.

{% ifversion ghes or ghec %}Weitere Informationen zum Erwerb einer Lizenz für {% data variables.product.prodname_GH_advanced_security %} findest du unter [Informationen zur Abrechnung von {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).{% elsif ghae %}In der Betaversion fallen keine Gebühren für {% data variables.product.prodname_GH_advanced_security %} in {% data variables.product.prodname_ghe_managed %} an.{% endif %}

Ist {% data variables.product.prodname_GH_advanced_security %} für eine Organisation nicht zugelassen, wirkt sich das Aktivieren eines Features für alle vorhandenen oder neuen Repositorys nicht auf diese Organisation aus. Weitere Informationen zum Ablehnen von {% data variables.product.prodname_GH_advanced_security %} für eine Organisation findest du unter [Erzwingen von Richtlinien für Advanced Security in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise).

Wenn du ein oder mehrere Sicherheits- und Analysefeatures für vorhandene Repositorys aktivierst, werden alle Ergebnisse innerhalb von Minuten in {% data variables.product.prodname_dotcom %} angezeigt.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

## Verwalten von {% data variables.product.prodname_advanced_security %}-Features

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Klicke in der linken Randleiste auf **Codesicherheit und -analyse**. 
1. Optional kannst du ein Feature für alle vorhandenen Repositorys aktivieren oder deaktivieren.

   - Klicke rechts neben dem Feature auf **Alle deaktivieren** oder **Alle aktivieren**. {% ifversion ghes or ghec %}Ist die Steuerung für {% data variables.product.prodname_GH_advanced_security %} deaktiviert, sind in deiner {% data variables.product.prodname_GH_advanced_security %}-Lizenz keine offenen Plätze verfügbar.{% endif %}
   
   ![Screenshot: Schaltflächen „Alle aktivieren“ oder „Alle deaktivieren“ für „Sicherheits- und Analysefeatures konfigurieren“](/assets/images/enterprise/security/enterprise-security-and-analysis-disable-or-enable-all.png)

   - Klicke auf **Alle aktivieren/deaktivieren** oder **Für berechtigte Repositorys aktivieren/deaktivieren**, um die Änderung zu bestätigen.
   
     ![Screenshot: Schaltfläche zum Aktivieren eines Features für alle berechtigten Repositorys in der Organisation](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-secret-scanning.png)

1. Wenn du ein Feature automatisch aktivieren oder deaktivieren möchtest, wenn neue Repositorys hinzugefügt werden, aktiviere das Kontrollkästchen unterhalb des Features.
   
   ![Screenshot: Kontrollkästchen zum Aktivieren eines Features für neue Repositorys](/assets/images/enterprise/security/enterprise-security-and-analysis-enable-or-disable-feature-checkbox.png){% ifversion secret-scanning-custom-link-on-block %}

1. Wenn du optional einen Ressourcenlink in die Nachricht einfügen möchtest, die Mitgliedern beim Pushversuch eines Geheimnisses angezeigt wird, wähle **Ressourcenlink in CLI und Webbenutzeroberfläche hinzufügen, wenn ein Commit blockiert ist** aus, gib eine URL ein, und klicke auf **Link speichern**.
  
  {% note %}

  **Hinweis**: Ist für eine Organisation ein benutzerdefinierter Link konfiguriert, setzt der Wert auf Organisationsebene den benutzerdefinierten Link für das Unternehmen außer Kraft. Weitere Informationen findest du unter [Schützen von Pushvorgängen mithilfe der Geheimnisüberprüfung](/code-security/secret-scanning/protecting-pushes-with-secret-scanning).

  {% endnote %}

   ![Screenshot: Kontrollkästchen und Textfeld zum Aktivieren eines benutzerdefinierten Links](/assets/images/help/organizations/secret-scanning-custom-link.png){% endif %}

