---
title: Informationen zur Abrechnung für GitHub Actions
intro: 'Wenn du {% data variables.product.prodname_actions %} über den in deinem Konto definierten Kontingenten für Speicher oder Minuten verwenden möchtest, wird dir die zusätzliche Nutzung in Rechnung gestellt.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
ms.openlocfilehash: fcc8f84b8a11b214ca66e8a3851a1afc9df6213a
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191886'
---
## Informationen zur Abrechnung für {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %} Weitere Informationen findest du unter [Informationen zu Ausgabenlimits](#about-spending-limits).

{% ifversion ghec %} Wenn du {% data variables.product.prodname_enterprise %} über ein Microsoft Enterprise Agreement erworben hast, kannst du deine Azure-Abonnement-ID mit deinem Unternehmenskonto verbinden, um die Nutzung von {% data variables.product.prodname_actions %} über die im Konto enthaltenen Beträge hinaus zu aktivieren und zu bezahlen. Weitere Informationen findest du unter [Verbinden eines Azure-Abonnements mit deinem Unternehmen](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

Die Minuten werden jeden Monat zurückgesetzt, die Speichernutzung wird hingegen nicht zurückgesetzt.

### Enthaltener Speicher und enthaltene Minuten

{% ifversion actions-hosted-runners %} {% note %}

**Hinweis**: Berechtigungsminuten können nicht für Windows- und Ubuntu-Runner mit mehr als 2 Kernen verwendet werden. Diese Runner werden immer in Rechnung gestellt, auch in öffentlichen Repositorys. Weitere Informationen findest du unter [Minutentarife für Runner](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates).

{% endnote %} {% endif %}

|Produkt | Storage | Minuten (pro Monat)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 MB | 2\.000 |
| {% data variables.product.prodname_pro %} | 1 GB | 3,000 |
| {% data variables.product.prodname_free_team %} für Organsationen | 500 MB | 2\.000 |
| {% data variables.product.prodname_team %} | 2 GB | 3,000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 GB | 50.000 |

Aufträge, die auf Windows- oder MacOS-Läufern auf {% data variables.product.prodname_dotcom %} laufen, verbrauchen doppelt respektive 10-mal mehr Minuten gegenüber Aufträgen auf Linux-Läufern. 1.000 Windows-Minuten würden beispielsweise 2.000 der Minuten verbrauchen, die in deinem Konto enthalten sind. 1.000 macOS-Minuten würden hingegen 10.000 der in deinem Konto enthaltenen Minuten verbrauchen.

### Minutenmultiplikatoren

| Betriebssystem | Minutenmultiplikator |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

Der Speicher, der von einem Repository verbraucht wird, ist der gesamte Speicher, der von {% data variables.product.prodname_actions %}-Artefakten und {% data variables.product.prodname_registry %} verwendet wird. Deine Speicherkosten setzen sich aus den Nutzungskosten aller Repositorys zusammen, die sich im Besitz deines Kontos befinden. Weitere Informationen zu den Preisen für {% data variables.product.prodname_registry %} findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages).

 Wenn die Nutzung deines Kontos diese Limits übersteigt und du ein Ausgabenlimit über 0 USD festgelegt hast, zahlst du 0,008 USD pro GB Speicherplatz pro Tag und pro Minute, je nach dem vom {% data variables.product.prodname_dotcom %}-gehosteten Runner verwendeten Betriebssystem. {% data variables.product.prodname_dotcom %} rundet die von jedem Auftrag verwendeten Minuten und Teilminuten auf die nächste ganze Minute auf.

{% note %}

**Hinweis:** Die Minutenmultiplikatoren gelten nicht für die unten aufgeführten Minutentarife.

{% endnote %}

### Minutentarife

{% data reusables.billing.billing-standard-runners %} {%- ifversion actions-hosted-runners %} {% data reusables.billing.billing-hosted-runners %} {%- endif %}

- Die Anzahl der Aufträge, die du gleichzeitig über alle Repositories in deinem Benutzer- oder Organisationskonto ausführen kannst, hängt von deinem GitHub-Plan ab. Weitere Informationen findest du unter [Nutzungslimits und Abrechnung](/actions/reference/usage-limits-billing-and-administration) für auf {% data variables.product.prodname_dotcom %} gehostete Runner und unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits) (Nutzungslimits für selbstgehostete Runner).
- {% data reusables.user-settings.context_switcher %} {% ifversion actions-hosted-runners %} 
- Für {% data variables.actions.hosted_runner %} fallen keine zusätzlichen Kosten für Konfigurationen an, die einem {% data variables.actions.hosted_runner %} öffentliche statische IP-Adressen zuweisen. Weitere Informationen zu {% data variables.actions.hosted_runner %}n findest du unter [Verwenden von {% data variables.actions.hosted_runner %}n](/actions/using-github-hosted-runners/using-larger-runners).
- Berechtigungsminuten können nicht für {% data variables.actions.hosted_runner %} verwendet werden.
- {% data variables.actions.hosted_runner %} sind für öffentliche Repositorys nicht kostenfrei.
{% endif %}

## Minuten- und Speicherausgaben berechnen

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

Am Ende des Monats berechnet {% data variables.product.prodname_dotcom %} die Minuten- und Speicherkosten, die über den in deinem Konto enthaltenen Kontingent liegen.

### Beispiel für die Kostenberechnung von Minuten

Wenn deine Organisation beispielsweise {% data variables.product.prodname_team %} verwendet und unbegrenzte Ausgaben zulässt, würde der Verbrauch von 5.000 Minuten abhängig von den für die Ausführung von Aufträgen verwendeten Betriebssystemen die gesamten Speicher- und Minutenkosten um 56 USD überschreiten.

- 5\.000 Minuten (3.000 Linux und 2.000 Windows) = 56 USD (24 USD + 32 USD).
  - 3\.000 Linux-Minuten zu 0,008 USD pro Minute = 24 USD.
  - 2\.000 Windows-Minuten zu 0,016 USD pro Minute = 32 USD.

{% data variables.product.prodname_dotcom %} berechnet deinen Speicherverbrauch für jeden Monat auf Stundenbasis während dieses Monats.

### Beispiel für die Berechnung der Speicherkosten

Wenn du z. B. im März 10 Tage lang 3 GB Speicher und 21 Tage lang 12 GB verwendet hast, berechnet sich die Speichernutzung wie folgt:

- 3 GB x 10 Tage x (24 Stunden pro Tag) = 720 GB-Stunden
- 12 GB x 21 Tage x (24 Stunden pro Tag) = 6,048 GB-Stunden
- 720 GB-Stunden + 6,048 GB-Stunden = 6,768 GB-Stunden
- 6,768 GB-Stunden / (744 Stunden pro Monat) = 9.0967 GB-Monate

Am Ende des Monats rundet {% data variables.product.prodname_dotcom %} deine Speichernutzung auf das nächste MB. Daher würde deine Speichernutzung im März 9,097 GB betragen.

Deine {% data variables.product.prodname_actions %}-Nutzung teilt das bestehende Rechnungsdatum, die Zahlungsmethode und die Quittung. {% data reusables.dotcom_billing.view-all-subscriptions %}

## Über Ausgabenlimits

{% data reusables.actions.actions-spending-limit-detailed %}

Informationen zum Verwalten und Ändern des Ausgabenlimits deines Kontos findest du unter [Verwalten deines Ausgabenlimits für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions).

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
