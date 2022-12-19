---
title: Informationen zur Abrechnung für GitHub Packages
intro: 'Wenn du {% data variables.product.prodname_registry %} über den in deinem Konto definierten Kontingenten für Speicher oder Datenübertragung verwenden möchtest, wird dir die zusätzliche Nutzung in Rechnung gestellt.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: About billing
ms.openlocfilehash: 809065836c17701003917cb679ffc81cceb1b47f
ms.sourcegitcommit: 9b6371e5d55e4078c717e68536eca1fcd44a45e5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180218'
---
## Informationen zur Abrechnung für {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} Weitere Informationen findest du unter [Informationen zu Ausgabenlimits](#about-spending-limits).

{% note %}

**Aktualisierung der Abrechnung für Containerimagespeicher:** Der Zeitraum für die kostenlose Nutzung von Containerimagespeicher und Bandbreite für {% data variables.product.prodname_container_registry %} wurde verlängert. Wenn du {% data variables.product.prodname_container_registry %} verwendest, wirst du mindestens einen Monat vor Beginn der Abrechnung informiert und erhältst eine Schätzung der zu erwartenden Kosten. Weitere Informationen zu {% data variables.product.prodname_container_registry %} findest du unter [Arbeiten mit der Containerregistrierung](/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

{% endnote %}

{% ifversion ghec %} Wenn du {% data variables.product.prodname_enterprise %} über ein Microsoft Enterprise Agreement erworben hast, kannst du deine Azure-Abonnement-ID mit deinem Unternehmenskonto verbinden, um die Nutzung von {% data variables.product.prodname_registry %} über die im Konto enthaltenen Beträge hinaus zu aktivieren und zu bezahlen. Weitere Informationen findest du unter [Verbinden eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

Die Datenübertragung wird jeden Monat zurückgesetzt, während Speichernutzung dies nicht tut.

Produkt | Storage | Datenübertragung (pro Monat)
------- | ------- | ---------
{% data variables.product.prodname_free_user %} | 500 MB | 1 GB
{% data variables.product.prodname_pro %} | 2GB | 10GB
{% data variables.product.prodname_free_team %} für Organsationen | 500 MB | 1 GB |
{% data variables.product.prodname_team %} | 2GB | 10GB
{% data variables.product.prodname_ghe_cloud %} | 50 GB | 100 GB

Alle Daten, welche nach Auslösung durch {% data variables.product.prodname_actions %} nach Außen übertragen werden und alle Daten, die von irgendeiner Quelle nach Innen übertragen werden, sind kostenlos. Wir stellen fest, dass du Pakete via {% data variables.product.prodname_actions %} herunterlädst, wenn du dich bei {% data variables.product.prodname_registry %} mit `GITHUB_TOKEN` anmeldest.

||Gehostet|Selbst-gehostet|
|-|-|-|
|Zugriff mithilfe von `GITHUB_TOKEN`|Kostenlos|Kostenlos|
|Zugreifen mithilfe eines {% data variables.product.pat_generic %}|Kostenlos|$|

Die Speichernutzung wird mit Build-Artefakten geteilt, die von {% data variables.product.prodname_actions %} für Repositorys im Besitz deines Kontos erstellt wurden. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions).

{% data variables.product.prodname_dotcom %} belastet die Nutzung auf das Konto, welches das Repository besitzt, in dem das Paket veröffentlicht wird. Wenn die Nutzung deines Kontos diese Limits übersteigt und du ein Ausgabenlimit von mehr als 0 USD festgelegt hast, bezahlst du 0,008 USD pro GB Speicher und Tag und 0,50 USD pro GB Datenübertragung.

Wenn deine Organisation beispielsweise {% data variables.product.prodname_team %} verwendet, unbegrenzte Ausgaben erlaubt, 150 GB Speicher verwendet und 50 GB Datenübertragung nach Außen während eines Monats verbraucht, würde die Organisation Überzüge von 148 GB für die Speicherung und 40 GB für die Datenübertragung für diesen Monat haben. Die Speicherüberschreitung würde 0,008 USD pro GB und Tag oder ca. 37 USD für einen Monat mit 31 Tagen kosten. Die Überschreitung für die Datenübertragung würde 0,50 USD pro GB oder 20 USD kosten.

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

Am Ende jedes Monates rundet {% data variables.product.prodname_dotcom %} deine Datenübertragungen auf das nächste GB auf.

{% data variables.product.prodname_dotcom %} berechnet deinen Speicherverbrauch für jeden Monat auf Stundenbasis pro GB während dieses Monats. Wenn du z. B. im März 10 Tage lang 3 GB Speicher und 21 Tage lang 12 GB verwendet hast, berechnet sich die Speichernutzung wie folgt:

- 3 GB x 10 Tage x (24 Stunden pro Tag) = 720 GB-Stunden
- 12 GB x 21 Tage x (24 Stunden pro Tag) = 6,048 GB-Stunden
- 720 GB-Stunden + 6.048 GB-Stunden = 6.768 GB-Stunden
- 6,768 GB-Stunden / (744 Stunden pro Monat) = 9.0967 GB-Monate

Am Ende des Monats rundet {% data variables.product.prodname_dotcom %} deine Speichernutzung auf das nächste MB. Daher würde deine Speichernutzung im März 9,097 GB betragen.

Du kannst diese Berechnung auch mitten in einem Abrechnungszeitraum verwenden, um den Gesamtverbrauch für den Monat abzuschätzen. Wenn deine Organisation beispielsweise {% data variables.product.prodname_team %} verwendet, das 2 GB kostenlosen Speicher bereitstellt, und du an den ersten 5 Tagen im April 0 GB und an den folgenden 10 Tagen 1,5 GB verbrauchst und planst, 3 GB an den letzten 15 Tagen des Abrechnungszeitraums zu nutzen, sieht deine projizierte Speichernutzung für den Monat wie folgt aus:

- 0 GB × 5 Tage × (24 Stunden pro Tag) = 0 GB-Stunden
- 0,5 GB × 10 Tage × (24 Stunden pro Tag) = 120 GB-Stunden
- 3 GB × 15 Tage × (24 Stunden pro Tag) = 1.080 GB-Stunden
- 0 GB-Stunden + 120 GB-Stunden + 1.080 GB-Stunden = 1.200 GB-Stunden
- 1\.200 GB-Stunden / (744 Stunden pro Monat) = 1,6 GB-Monate

Die projizierte Speichernutzung von 1,6 GB für den Monat würde dein Limit von 2 GB nicht überschreiten, obwohl deine tatsächliche Speichermenge kurz 2 GB überschritten hat.

Deine {% data variables.product.prodname_registry %}-Nutzung teilt das bestehende Rechnungsdatum, die Zahlungsmethode und die Quittung. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## Über Ausgabenlimits

{% data reusables.package_registry.packages-spending-limit-detailed %}

Um eine Überschreitung deines Ausgabenlimits zu verhindern, überprüft {% data variables.product.prodname_dotcom %} deinen Speicherverbrauch fortlaufend über den ganzen Monat, indem es deinen aktuellen Verbrauch betrachtet und berechnet, wie hoch dein projizierter Verbrauch am Ende des Monats sein wird, wenn vor diesem Zeitpunkt keine Änderungen vorgenommen werden. Wenn dein projizierter monatlicher Verbrauch zu irgendeinem Zeitpunkt während des Abrechnungszeitraums dein Ausgabenlimit überschreitet, werden {% data variables.product.prodname_registry %} und {% data variables.product.prodname_actions %} deaktiviert, um Überschreitungen zu verhindern.

Du solltest ein Ausgabenlimit festlegen, das deinen maximalen projizierten Speicherverbrauch zu einem bestimmten Zeitpunkt im Abrechnungszeitraum abdeckt. Stelle dir beispielsweise vor, du hast eine Organisation, die {% data variables.product.prodname_team %} verwendet, und legst ein Ausgabenlimit von 50 USD fest. {% data variables.product.prodname_team %} bietet 2 GB kostenlosen Speicher. Für den darüber hinaus gehenden Speicherbedarf berechnet {% data variables.product.prodname_dotcom %} 0,008 USD pro GB pro Tag oder etwa 0,25 USD pro GB für einen Monat mit 31 Tagen. Das bedeutet, dass das von dir festgelegte Ausgabenlimit von 50 USD für zusätzliche 200 GB Speicher in diesem Zeitraum ausreicht. Wenn du am zehnten Tag des Abrechnungszeitraums 202 GB Speicher erreichst, führt der nächste Push eines Pakets oder {% data variables.product.prodname_actions %}-Artefakts zu einem Fehler, da du die maximale Speichermenge erreicht hast, die mit deinem Ausgabenlimit in diesem Abrechnungszeitraum bezahlt werden kann, auch wenn dein durchschnittlicher Verbrauch für diesen Zeitraum unter 202 GB liegt.

Um das Erreichen deines Ausgabenlimits im aktuellen Abrechnungszeitraum zu vermeiden, kannst du einen Teil deines aktuellen Speicherverbrauchs löschen, um projizierten Verbrauch für den Rest des Monats freizugeben. Diese Methode ist besonders zu Beginn eines Abrechnungszeitraums effektiv. Je näher du dem Ende eines Abrechnungszeitraums kommst, desto geringer sind die Auswirkung dieser Methode auf den projizierten monatliche Verbrauch.

Weitere Informationen zum Verwalten und Ändern des Ausgabenlimits deines Kontos findest du unter [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages).

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
