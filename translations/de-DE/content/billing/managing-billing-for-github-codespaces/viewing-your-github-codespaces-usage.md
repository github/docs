---
title: Anzeigen deiner GitHub Codespaces-Nutzung
shortTitle: Viewing your usage
intro: 'Du kannst die Compute- und Speichernutzung von {% data variables.product.prodname_github_codespaces %} anzeigen.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/viewing-your-codespaces-usage
ms.openlocfilehash: c3024840f48bda68470b9ab12693f4a79daddb48
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107149'
---
## Anzeigen der {% data variables.product.prodname_github_codespaces %}-Nutzung deiner Organisation

Organisationsbesitzer*innen und Abrechnungsmanager*innen können die Nutzung von {% data variables.product.prodname_github_codespaces %} für eine Organisation anzeigen. Für Organisationen, die von einem Unternehmenskonto verwaltet werden, können die Organisationsbesitzer die {% data variables.product.prodname_github_codespaces %}-Nutzung auf der Abrechnungsseite der Organisation anzeigen, und Unternehmensadministratoren können die Nutzung für das gesamte Unternehmen anzeigen.

{% data reusables.organizations.billing-settings %}
1. Zeige unter {% data variables.product.prodname_codespaces %} die Details der Computestunden und des Speichers an, die bisher in diesem Monat verwendet wurden.

   ![Details zur Minutennutzung](/assets/images/help/billing/codespaces-compute-storage.png)

   Du kannst auch dein aktuelles Ausgabenlimit einsehen und aktualisieren. Weitere Informationen findest du unter [Verwalten von Ausgabenlimits für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces).

   {% note %}

   **Hinweise**: 
   * Die hier gezeigten Kosten sind die kumulierten Kosten innerhalb des aktuellen monatlichen Abrechnungszeitraums. Die auf dieser Seite angezeigten verbrauchsabhängigen Kosten für {% data variables.product.prodname_github_codespaces %} werden zu Beginn eines jeden monatlichen Abrechnungszeitraums auf 0 zurückgesetzt. Ausstehende Kosten aus den Vormonaten werden nicht ausgewiesen.
   * Die Zahlen auf dieser Seite werden stündlich aktualisiert.

   {% endnote %}

{% data reusables.dotcom_billing.actions-packages-report-download-org-account %} Die für diesen Bericht verwendeten Daten werden täglich aktualisiert. 
1. Filtere den Bericht, um nur Zeilen anzuzeigen, die „Codespaces“ im Feld `Product` erwähnen.

   ![Ein Nutzungsbericht, der nach Codespaces gefiltert ist](/assets/images/help/codespaces/CSV-usage-report.png)

{% ifversion ghec %}
## Anzeigen der {% data variables.product.prodname_codespaces %}-Nutzung für dein Unternehmenskonto

Unternehmensbesitzer und Abrechnungsmanager können die {% data variables.product.prodname_github_codespaces %}-Nutzung für ein Unternehmenskonto einsehen.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Unter „{% data variables.product.prodname_codespaces %}-Nutzung“ kannst du die Nutzungsdetails für jede Organisation in deinem Unternehmenskonto anzeigen.
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %} {% endif %}

## Weitere Informationsquellen

- [Auflisten der Codespaces in deiner Organisation](/codespaces/managing-codespaces-for-your-organization/listing-the-codespaces-in-your-organization)
