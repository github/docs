---
title: Anzeigen von Transaktionen für deinen Eintrag
intro: "Auf der {% data variables.product.prodname_marketplace %}-Seite „Transaktionen“ kannst du alle Transaktionen für dein {% data variables.product.prodname_marketplace %}-Angebot herunterladen und einsehen. Du kannst Transaktionen für den letzten Tag (24\_Stunden), die letzte Woche, den letzten Monat oder den gesamten Zeitraum anzeigen, in dem deine {% data variables.product.prodname_github_app %} gelistet war."
redirect_from:
  - /marketplace/github-marketplace-transactions
  - /developers/github-marketplace/viewing-transactions-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing transactions
ms.openlocfilehash: f0e02ca4038131752d4a5fab54de1f1f539289c2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089740'
---
{% note %}

**Hinweis:** Da das Aggregieren von Daten zeitaufwändig ist, wirst du eine geringfügige Verzögerung in den angezeigten Datumsangaben feststellen. Wenn du einen Zeitraum auswählst, kannst du die genauen Datumsangaben für die Metriken ganz oben auf der Seite anzeigen.

{% endnote %}


Du kannst die Transaktionsdaten anzeigen oder herunterladen, um deine Abonnementaktivität nachzuverfolgen. Klicke auf die Schaltfläche **CSV exportieren**, um eine `.csv`-Datei herunterzuladen. Du kannst auch einen Zeitraum zum Anzeigen und Suchen innerhalb der Transaktionsseite auswählen.

## Transaktionsdatenfelder

* **date:** Das Datum der Transaktion im `yyyy-mm-dd`-Format.
* **app_name:** Der App-Name.
* **user_login:** Die Anmeldung des Benutzers mit dem Abonnement.
* **user_id:** Die ID des Benutzers mit dem Abonnement.
* **user_type:** Der Typ des GitHub-Kontos, entweder `User` oder `Organization`.
* **country:** Die drei Buchstaben des Ländercodes.
* **amount_in_cents:** Der Betrag der Transaktion in Cent. Wenn ein Wert kleiner ist als der Planbetrag, wird der Benutzer hochgestuft und der neue Plan anteilig berechnet. Ein Wert von null (0) gibt an, dass der Benutzer seinen Plan gekündigt hat.
* **renewal_frequency:** Die Häufigkeit der Abonnementverlängerung, entweder `Monthly` oder `Yearly`.
* **marketplace_listing_plan_id:** Der `id`-Abonnementplan.
* **region:** Der Name der Region, in der sich die Rechnungsadresse befindet.
* **postal_code:** Die PLZ der Rechnungsadresse.

![Marketplace-Erkenntnisse](/assets/images/marketplace/marketplace_transactions.png)

## Zugreifen auf {% data variables.product.prodname_marketplace %}-Transaktionen

So greifst du auf {% data variables.product.prodname_marketplace %}-Transaktionen zu:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Wähle die {% data variables.product.prodname_github_app %} aus, für die du Transaktionen anzeigen möchtest.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Klicke auf die Registerkarte **Transaktionen**.
7. Wähle optional einen anderen Zeitraum aus, indem du auf das Dropdownmenü für den Zeitraum in der oberen rechten Ecke der Transaktionenseite klickst.
![Marketplace-Zeitraum](/assets/images/marketplace/marketplace_insights_time_period.png)
