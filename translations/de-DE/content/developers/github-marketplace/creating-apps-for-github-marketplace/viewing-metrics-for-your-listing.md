---
title: Anzeigen von Metriken für deinen Eintrag
intro: 'Auf der Einblicksseite des {% data variables.product.prodname_marketplace %} werden Metriken für deine {% data variables.product.prodname_github_app %} angezeigt. Du kannst die Metriken dazu verwenden, die Leistung deiner {% data variables.product.prodname_github_app %} nachzuverfolgen und fundiertere Entscheidungen zu Preisen, Plänen und kostenlosen Testversionen zu treffen sowie darüber, wie du die Auswirkungen von Marketingkampagnen visualisieren kannst.'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/github-marketplace-insights
  - /marketplace/github-marketplace-insights
  - /developers/github-marketplace/viewing-metrics-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing metrics
ms.openlocfilehash: 92fde52b0edbc7c11ac22d641bc4d9c4bd02709f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145089748'
---
Du kannst Metriken für den letzten Tag (24 Stunden), die letzte Woche, den letzten Monat oder für den gesamten Zeitraum anzeigen, in dem deine {% data variables.product.prodname_github_app %} aufgeführt war.

{% note %}

**Hinweis:** Da das Aggregieren von Daten zeitaufwändig ist, wirst du eine geringfügige Verzögerung in den angezeigten Datumsangaben feststellen. Wenn du einen Zeitraum auswählst, kannst du die genauen Datumsangaben für die Metriken ganz oben auf der Seite anzeigen.

{% endnote %}

## Leistungsmetriken

Auf der Seite mit den Erkenntnissen werden diese Leistungsmetriken für den ausgewählten Zeitraum angezeigt:

* **Abonnementwert:** Möglicher Gesamtumsatz (in US-Dollar) für Abonnements. Dieser Wert stellt den möglichen Umsatz dar, wenn keine Pläne oder kostenlose Testversionen abgebrochen werden und alle Guthabentransaktionen erfolgreich sind. Der Abonnementwert enthält den vollständigen Wert für Pläne, die mit einer kostenlosen Testversion im ausgewählten Zeitraum beginnen, auch wenn keine finanziellen Transaktionen in diesem Zeitraum getätigt werden. Der Abonnementwert enthält auch den vollständigen Wert von Plänen im ausgewählten Zeitraum, für die ein Upgrade durchgeführt wurde. Der Wert enthält jedoch nicht den geschätzten Betrag. Informationen zum Anzeigen und Herunterladen einzelner Transaktionen findest du unter [GitHub Marketplace-Transaktionen](/marketplace/github-marketplace-transactions/).
* **Besucher:** Anzahl der Personen, die eine Seite in deiner GitHub-Apps-Liste angezeigt haben. Diese Zahl umfasst sowohl angemeldete als auch abgemeldete Besucher.
* **Seitenaufrufe:** Anzahl der Ansichten für die Seiten deiner Liste der GitHub-Apps. Ein einzelner Besucher kann mehrere Seitenaufrufe generieren.

{% note %}

**Hinweis:** Dein geschätzter Abonnementwert könnte viel höher liegen als die Transaktionen, die für diesen Zeitraum verarbeitet wurden. 

{% endnote %}

### Konvertierungsleistung

* **Unterschiedliche Besucher auf der Angebotsseite:** Anzahl der Personen, die deine GitHub-App-Angebotsseite besucht haben.
* **Unterschiedliche Besucher auf der Kassenseite:** Anzahl der Personen, die eine der Kassenseiten deiner GitHub-Apps besucht haben.
* **Kassenseite für neue Abonnements:** Gesamtzahl der kostenpflichtigen Abonnements, kostenlosen Testversionen und kostenlosen Abonnements. Weitere Informationen zur bestimmten Anzahl jedes Abonnementtyps findest du unter „Aufschlüsselung der Abonnements gesamt“.

![Marketplace-Erkenntnisse](/assets/images/marketplace/marketplace_insights.png)

So greifst du auf {% data variables.product.prodname_marketplace %}-Erkenntnisse zu:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Wähle die {% data variables.product.prodname_github_app %} aus, für die du Erkenntnisse ansehen möchtest.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Klicke auf die Registerkarte **Erkenntnisse**.
7. Wähle optional einen anderen Zeitraum aus, indem du auf das Dropdownmenü für den Zeitraum in der oberen rechten Ecke der Erkenntnisseite klickst.
![Marketplace-Zeitraum](/assets/images/marketplace/marketplace_insights_time_period.png)
