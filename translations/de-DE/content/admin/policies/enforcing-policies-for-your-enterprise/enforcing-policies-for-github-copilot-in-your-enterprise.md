---
title: Erzwingen von Richtlinien für GitHub Copilot in deinem Unternehmen
intro: 'Du kannst Richtlinien für {% data variables.product.prodname_copilot_for_business %} in den Organisationen deines Unternehmens erzwingen oder das Festlegen von Richtlinien in den einzelnen Organisationen zulassen.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_copilot_for_business %} in an enterprise.'
product: '{% data reusables.gated-features.copilot-billing %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Copilot
  - Enterprise
  - Organizations
  - Policies
shortTitle: GitHub Copilot policies
ms.openlocfilehash: f87fa318a6390c9e254c3c115638325b8bfc474a
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193296'
---
## Informationen zu Richtlinien für {% data variables.product.prodname_copilot %} in deinem Unternehmen

{% data reusables.copilot.about-copilot %}

Du kannst Richtlinien für {% data variables.product.prodname_copilot_for_business %} in den Organisationen deines Unternehmens erzwingen oder das Festlegen von Richtlinien in den einzelnen Organisationen zulassen. 

Wenn du ein Abonnement für {% data variables.product.prodname_copilot_for_business %} einrichtest, kannst du Organisationen innerhalb deines Unternehmens Zugriff auf {% data variables.product.prodname_copilot %} gewähren sowie den Zugriff widerrufen. Nachdem du einer Organisation Zugriff auf {% data variables.product.prodname_copilot %} gewährt hast, können die Administratoren dieser Organisation einzelnen Personen und Teams Zugriff gewähren. Weitere Informationen findest du unter [Konfigurieren der {% data variables.product.prodname_copilot %}-Einstellungen in deiner Organisation](/copilot/configuring-github-copilot/configuring-github-copilot-settings-in-your-organization).

Abonnements für {% data variables.product.prodname_copilot_for_business %} werden monatlich basierend auf der Anzahl von {% data variables.product.prodname_copilot %}-Arbeitsplätzen abgerechnet, die Benutzern innerhalb deines Unternehmens zugewiesen sind. Weitere Informationen findest du unter [{% data variables.product.prodname_copilot %} Informationen zur Abrechnung für {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot#github-copilot-pricing-for-github-enterprise-cloud).

{% data variables.product.prodname_copilot %} enthält einen Filter, der Codevorschläge erkennt, die öffentlichem Code auf {% data variables.product.prodname_dotcom %} entsprechen. Bei {% data variables.product.prodname_copilot_for_business %} kannst du auswählen, ob du den Filter auf Unternehmensebene aktivieren oder deaktivieren oder diese Entscheidung Organisationsadministratoren auf Organisationsebene überlassen möchtest. Wenn der Filter aktiviert ist, vergleicht {% data variables.product.prodname_copilot %} Codevorschläge einschließlich des umgebenden Codes von ca. 150 Zeichen mit öffentlichem Code auf {% data variables.product.prodname_dotcom %}. Wenn es eine Übereinstimmung oder Beinahe-Übereinstimmung gibt, wird der Vorschlag nicht angezeigt.

## Erzwingen einer Richtlinie zum Verwalten der Verwendung von {% data variables.product.prodname_copilot_for_business %} in deinem Unternehmen 

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. Konfiguriere unter „Verwalten des Organisationszugriffs auf {% data variables.product.prodname_copilot %}“ den Zugriff für dein {% data variables.product.prodname_copilot %}-Abonnement. 
    - Wenn du {% data variables.product.prodname_copilot %} für alle Organisationen in deinem Unternehmen deaktivieren möchtest, wähle **Deaktiviert** aus.
    - Wenn du {% data variables.product.prodname_copilot %} für alle derzeitigen und zukünftigen Organisationen in deinem Unternehmen aktivieren möchtest, wähle **Für alle Organisationen zulassen** aus.
    - Wenn du {% data variables.product.prodname_copilot %} für bestimmte Organisationen aktivieren möchtest, wähle **Für bestimmte Organisationen zulassen** aus.
    
    ![Screenshot: Organisationszugriffseinstellungen für {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/manage-org-access-enterprise.png)
    
1. Wenn du **Für bestimmte Organisationen zulassen** ausgewählt hast, wähle die Organisationen aus, für die du {% data variables.product.prodname_copilot %} aktivieren möchtest. Alternativ kannst du die Organisationen auswählen, für die du den {% data variables.product.prodname_copilot %}-Zugriff deaktivieren möchtest.
    - Klicke auf **Organisationsberechtigungen festlegen**, und wähle **Aktivieren** oder **Deaktivieren** aus, um den {% data variables.product.prodname_copilot %}-Zugriff für die angegebenen Organisationen zu gewähren oder zu verweigern.

    ![Screenshot: Einstellungen „Aktivieren“ und „Deaktivieren“ für {% data variables.product.prodname_copilot %}-Organisationsberechtigungen](/assets/images/help/copilot/set-org-permissions-enterprise.png)
   
1. Klicke auf **Änderungen speichern**.
  
   ![Screenshot: Option zum Speichern der Benutzerberechtigungen für {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/save-org-settings-enterprise.png)

## Erzwingen einer Richtlinie zum Verwalten der Verwendung von {% data variables.product.prodname_copilot %}-Vorschlägen, die mit öffentlichem Code identisch sind, in deinem Unternehmen

{% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.copilot-tab %}
1. Klicke unter „Mit öffentlichem Code identische Vorschläge“ auf das Dropdownmenü, und wähle die zu erzwingende Richtlinie aus.
    - Wenn du {% data variables.product.prodname_copilot %}-Vorschläge, die mit öffentlichem Code identisch sind, zulassen möchtest, wähle **Zugelassen** aus.
    - Wenn du {% data variables.product.prodname_copilot %}-Vorschläge, die mit öffentlichem Code identisch sind, blockieren möchtest, wähle **Blockiert** aus.
    - Wenn jede deiner Organisationen ihre eigene Richtlinie für die Verwendung von {% data variables.product.prodname_copilot %}-Vorschlägen, die mit öffentlichem Code identisch sind, festlegen können soll, wähle **Keine Richtlinie (jede Organisation selbst entscheiden lassen)** aus.
    
    ![Screenshot: Einstellungen für {% data variables.product.prodname_copilot %}-Vorschläge, die mit öffentlichem Code identisch sind](/assets/images/help/copilot/duplication-detection-enterprise-dropdown.png)

## Weitere Informationsquellen

- [Datenschutzerklärung für {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)
