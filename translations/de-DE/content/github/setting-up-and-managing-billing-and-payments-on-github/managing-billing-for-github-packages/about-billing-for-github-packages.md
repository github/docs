---
title: Informationen zur Abrechnung für GitHub Packages
intro: 'Wenn Du {% data variables.product.prodname_registry %} über die in Deinem Konto definierten Kontingente für Speicher oder Datenübertragung verwenden möchtest, wird Dir die zusätzliche Nutzung in Rechnung gestellt.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - Billing
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
---
### Informationen zur Abrechnung für {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} For more information, see "[About spending limits](#about-spending-limits)."

{% note %}

**Billing update for container image storage:** During the beta phase of the {% data variables.product.prodname_container_registry %}, Docker image storage and bandwidth are free for both the previous `docker.pkg.github.com` and current `ghcr.io` hosting services. For more information, see "[Introduction to {% data variables.product.prodname_registry %}](/packages/learn-github-packages/introduction-to-github-packages)."

{% endnote %}

If you purchased {% data variables.product.prodname_enterprise %} through a Microsoft Enterprise Agreement, you can connect your Azure Subscription ID to your enterprise account to enable and pay for {% data variables.product.prodname_registry %} usage beyond the amounts including with your account. For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."

Die Datenübertragung wird jeden Monat zurückgesetzt, während Speichernutzung dies nicht tut.

| Produkt                                                              | Speicher | Datenübertragung (pro Monat) |
| -------------------------------------------------------------------- | -------- | ---------------------------- |
| {% data variables.product.prodname_free_user %}                    | 500 MB   | 1 GB                         |
| {% data variables.product.prodname_pro %}                            | 2 GB     | 10 GB                        |
| {% data variables.product.prodname_free_team %} für Organisationen | 500 MB   | 1 GB                         |
| {% data variables.product.prodname_team %}                           | 2 GB     | 10 GB                        |
| {% data variables.product.prodname_ghe_cloud %}                    | 50 GB    | 100 GB                       |

Alle Daten, welche nach Auslösung durch {% data variables.product.prodname_actions %} nach Außen übertragen werden und alle Daten, die von irgendeiner Quelle nach Innen übertragen werden, sind kostenlos. Wir stellen fest, dass Du Pakete via {% data variables.product.prodname_actions %} herunterlädst, wenn Du dich bei {% data variables.product.prodname_registry %} mit einem `GITHUB_TOKEN` anmeldest.

|                                        | Gehostet  | Selbst-gehostet |
| -------------------------------------- | --------- | --------------- |
| Zugriff via `GITHUB_TOKEN`             | Kostenlos | Kostenlos       |
| Zugriff via persönlichen Zugriffstoken | Kostenlos | $               |

Die Speichernutzung wird mit Build-Artefakten geteilt, die von {% data variables.product.prodname_actions %} für Repositorys im Besitz Deines Kontos erstellt wurden. Weitere Informationen findest Du unter „[Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions).“

{% data variables.product.prodname_dotcom %} belastet die Nutzung auf das Konto, welches das Repository besitzt, in dem das Paket veröffentlicht wird. Wenn die Nutzung Deines Kontos diese Limits übersteigt und Du ein Ausgabenlimit über 0 $ gesetzt hast, zahlst Du 0,25 USD pro GB Speicher und 0,50 USD pro GB Datenübertragung.

Wenn Deine Organisation beispielsweise {% data variables.product.prodname_team %} verwendet, unbegrenzte Ausgaben erlaubt, 150 GB Speicher verwendet und 50 GB Datenübertragung nach Außen während eines Monats verbraucht, würde die Organisation Überzüge von 148 GB für die Speicherung und 40 GB für die Datenübertragung für diesen Monat haben. Die Speicher-Übernutzung würde 0,25 USD pro GB oder 37 USD total kosten. Die Überschreitung der Datenübertragung würde 0,50 USD pro GB oder 20 USD total kosten.

Am Ende jedes Monates wird {% data variables.product.prodname_dotcom %} Deine Datenübertragung auf das nächste GB aufrunden.

{% data variables.product.prodname_dotcom %} berechnet Deinen Speicherverbrauch für jeden Monat auf Stundenbasis während dieses Monats. Wenn Du beispielsweise 3 GB Speicher während 10 Tagen im März und 12 GB Speicher für 21 Tage im März verwendest, wäre Deine Speichernutzung wie folgt:

- 3 GB x 10 Tage x (24 Stunden pro Tag) = 720 GB-Stunden
- 12 GB x 21 Tage x (24 Stunden pro Tag) = 6,048 GB-Stunden
- 720 GB-Stunden + 6,048 GB-Stunden = 6,768 GB-Stunden
- 6,768 GB-Stunden / (744 Stunden pro Monat) = 9.0967 GB-Monate

Am Ende jedes Monates wird {% data variables.product.prodname_dotcom %} Deine Speichernutzung auf das nächste MB aufrunden. Deshalb wäre Deine Speichernutzung für März 9,097 GB.

Deine {% data variables.product.prodname_registry %}-Nutzung teilt das bestehende Rechnungsdatum, die Zahlungsmethode und die Quittung. {% data reusables.dotcom_billing.view-all-subscriptions %}

### Über Ausgabenlimits

{% data reusables.package_registry.packages-spending-limit-detailed %}

For information on managing and changing your account's spending limit, see "[Managing your spending limit for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-packages)."

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
