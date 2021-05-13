---
title: Über die Abrechnung für GitHub Actions
intro: 'Wenn Du {% data variables.product.prodname_actions %} über die in Deinem Konto definierten Kontingente für Speicher oder Minuten verwenden möchtest, wird Dir die zusätzliche Nutzung in Rechnung gestellt.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
---

### Informationen zur Abrechnung für {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %}

{% data reusables.github-actions.actions-spending-limit-brief %} For more information, see "[About spending limits](#about-spending-limits)."

If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_actions %} usage beyond the amounts including with your account. For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

Minuten werden jeden Monat zurückgesetzt, während Speichernutzung dies nicht tut.

| Produkt                                                              | Speicher | Minuten (pro Monat) |
| -------------------------------------------------------------------- | -------- | ------------------- |
| {% data variables.product.prodname_free_user %}                    | 500 MB   | 2.000               |
| {% data variables.product.prodname_pro %}                            | 1 GB     | 3.000               |
| {% data variables.product.prodname_free_team %} für Organisationen | 500 MB   | 2.000               |
| {% data variables.product.prodname_team %}                           | 2 GB     | 3.000               |
| {% data variables.product.prodname_ghe_cloud %}                    | 50 GB    | 50.000              |

Aufträge, die auf Windows- oder MacOS-Läufern auf {% data variables.product.prodname_dotcom %} laufen, verbrauchen doppelt respektive 10-mal mehr Minuten gegenüber Aufträgen auf Linux-Läufern. Beispielsweise würde die Verwendung von 1.000 Windows-Minuten 2.000 der Minuten verbrauchen, die in Deinem Konto enthalten sind. Die Verwendung von 1.000 macOS-Minuten würde 10.000 Minuten in Deinem Konto verbrauchen.

| Betriebssystem | Multiplikator für Minuten |
| -------------- | ------------------------- |
| Linux          | 1                         |
| macOS          | 10                        |
| Windows        | 2                         |

Der Speicher, der von einem Repository verbraucht wird, ist der gesamte Speicher, der von {% data variables.product.prodname_actions %}-Artefakten und {% data variables.product.prodname_registry %} verwendet wird. Deine Speicherkosten sind die Gesamtnutzung für alle Repositorys, die Deinem Konto gehören. Weitere Informationen zur Preisgestaltung für {% data variables.product.prodname_registry %} findest du unter „[Über die Abrechnung für {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

 Wenn die Nutzung Deines Kontos diese Limits übersteigt und Du ein Ausgabenlimit über 0 $ gesetzt hast, zahlst Du 0.25 USD pro GB Speicherplatz pro Monat und für die Minutennutzung je nach Betriebssystem, das vom {% data variables.product.prodname_dotcom %}-gehosteten Läufer verwendet wird. {% data variables.product.prodname_dotcom %} rundet die von jedem Auftrag verwendeten Minuten auf die nächste Minute auf.

{% note %}

**Hinweis:** Minuten-Multiplikatoren gelten nicht für die unten angezeigten Minutentarife.

{% endnote %}

| Betriebssystem | Minutentarif |
| -------------- | ------------ |
| Linux          | 0.008 $      |
| macOS          | 0.08 $       |
| Windows        | 0.016 $      |

Die Anzahl der Aufträge, die Du gleichzeitig über alle Repositories in Deinem Benutzer- oder Organisationskonto ausführen kannst, hängt von Deinem GitHub-Plan ab. For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.

### Minuten- und Speicherausgaben berechnen

Am Ende des Monats berechnet {% data variables.product.prodname_dotcom %} die Minuten- und Speicherkosten, die über den in Deinem Konto enthaltenen Kontingent liegen. Wenn Deine Organisation beispielsweise {% data variables.product.prodname_team %} verwendet und unbegrenzte Ausgaben zulässt, würde der Verbrauch von 15.000 Minuten die gesamten Speicher- und Minutenkosten um 56 $ überschreiten, abhängig von den Betriebssystemen, die zur Ausführung der Aufträge verwendet werden.

- 5.000 (3.000 Linux und 2.000 Windows) Minuten = 56 $ (24 $ + 32 $).
  - 3,000 Linux minutes at $0.008 per minute = $24.
  - 2.000 Windows Minuten zu je 0.016 $ = 32 $.

Am Ende jedes Monates wird {% data variables.product.prodname_dotcom %} Deine Datenübertragung auf das nächste GB aufrunden.

{% data variables.product.prodname_dotcom %} berechnet Deinen Speicherverbrauch für jeden Monat auf Stundenbasis während dieses Monats. Wenn Du beispielsweise 3 GB Speicher während 10 Tagen im März und 12 GB Speicher für 21 Tage im März verwendest, wäre Deine Speichernutzung wie folgt:

- 3 GB x 10 Tage x (24 Stunden pro Tag) = 720 GB-Stunden
- 12 GB x 21 Tage x (24 Stunden pro Tag) = 6,048 GB-Stunden
- 720 GB-Stunden + 6,048 GB-Stunden = 6,768 GB-Stunden
- 6,768 GB-Stunden / (744 Stunden pro Monat) = 9.0967 GB-Monate

Am Ende jedes Monates wird {% data variables.product.prodname_dotcom %} Deine Speichernutzung auf das nächste MB aufrunden. Deshalb wäre Deine Speichernutzung für März 9,097 GB.

Deine {% data variables.product.prodname_actions %}-Nutzung teilt das bestehende Rechnungsdatum, die Zahlungsmethode und die Quittung. {% data reusables.dotcom_billing.view-all-subscriptions %}

### Über Ausgabenlimits

{% data reusables.github-actions.actions-spending-limit-detailed %}

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions)."

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
