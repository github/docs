---
title: 'Nutzungseinschränkungen, Abrechnung und Verwaltung'
intro: 'Es gibt Nutzungsbeschränkungen für {% data variables.product.prodname_actions %}-Workflows. Nutzungsgebühren gelten für Repositorys, die über die Menge der kostenlosen Minuten und den Speicher für ein Repository hinausgehen.'
redirect_from:
  - /actions/getting-started-with-github-actions/usage-and-billing-information-for-github-actions
  - /actions/reference/usage-limits-billing-and-administration
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Billing
shortTitle: Workflow billing & limits
ms.openlocfilehash: 5abd041d41ab2227aa87c383f39c94876544718c
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191854'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zur Abrechnung für {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} Weitere Informationen findest du unter „[Grundlegendes zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}“.{% elsif ghes or ghec %}“ und „[Informationen zu {% data variables.product.prodname_actions %} für Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)“.{% endif %}

{% ifversion fpt or ghec %} {% data reusables.actions.actions-billing %} Weitere Informationen findest du unter „[Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)“.
{% else %} Die Nutzung von GitHub Actions ist kostenlos für {% data variables.product.prodname_ghe_server %}-Instanzen, die selbstgehostete Runner verwenden. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners)“.
{% endif %}


{% ifversion fpt or ghec %}

## Verfügbarkeit

{% data variables.product.prodname_actions %} ist für alle {% data variables.product.prodname_dotcom %}-Produkte verfügbar. {% data variables.product.prodname_actions %} ist jedoch nicht für private Repositorys verfügbar, die sich im Besitz von Konten mit Legacy-Repositoryplänen befinden. {% data reusables.gated-features.more-info %}

{% endif %}

## Usage limits (Nutzungseinschränkungen)

{% ifversion fpt or ghec %} Bei Verwendung von {% data variables.product.prodname_dotcom %}-gehosteten Runnern gelten für die Nutzung von {% data variables.product.prodname_actions %} einige Einschränkungen. Die Einschränkungen können sich jederzeit ändern.

{% note %}

**Hinweis:** Für selbstgehostete Runner gelten andere Nutzungseinschränkungen. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)“.

{% endnote %}

- **Auftragsausführungszeit**: Jeder Auftrag in einem Workflow kann bis zu sechs Stunden lang ausgeführt werden. Wenn ein Auftrag dieses Limit erreicht, wird der Auftrag beendet und kann nicht abgeschlossen werden.
{% data reusables.actions.usage-workflow-run-time %} {% data reusables.actions.usage-api-requests %}
- **Gleichzeitige Aufträge:** Die Anzahl der Aufträge, die du in deinem Konto gleichzeitig ausführen kannst, hängt von deinem GitHub-Plan und dem verwendeten Runnertyp ab. Bei Überschreitung werden alle zusätzlichen Aufträge in die Warteschlange gestellt.

  **Von {% data variables.product.prodname_dotcom %} gehostete Standardrunner**

  | GitHub Plan | Total parallele Aufträge | Maximal parallele macOS-Aufträge |
  |---|---|---|
  | Kostenlos | 20 | 5 |
  | Vorteil | 40 | 5 |
  | Team | 60 | 5 |
  | Enterprise | 180 | 50 |

  **Von {% data variables.product.prodname_dotcom %} gehostete {% data variables.actions.hosted_runner %}**

  | GitHub Plan | Total parallele Aufträge | Maximal parallele macOS-Aufträge |
  |---|---|---|
  | All | 500 | – |

  {% note %}

  **Hinweis:** Bei Bedarf können Kunden in Enterprise-Plänen einen höheren Grenzwert für gleichzeitige Aufträge anfordern. Weitere Informationen erhältst du von {% data variables.contact.contact_ent_support %} oder deinem bzw deiner Vertriebsmitarbeiter*in.

  {% endnote %}
  
- **Auftragsmatrix:** {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

{% else %} Nutzungseinschränkungen gelten für selbstgehostete Runner. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)“.
{% endif %}

{% ifversion fpt or ghec %}
## Nutzungsrichtlinie

Neben den Nutzungseinschränkungen musst du auch sicherstellen, dass du {% data variables.product.prodname_actions %} im Rahmen der [GitHub-Nutzungsbedingungen](/free-pro-team@latest/github/site-policy/github-terms-of-service/) verwendest. Weitere Informationen zu {% data variables.product.prodname_actions %}-spezifischen Bedingungen findest du in den [GitHub-Bedingungen für zusätzliche Produkte](/free-pro-team@latest/github/site-policy/github-additional-product-terms#a-actions-usage).
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghec %}
## Abrechnung für wiederverwendbare Workflows

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Bei Wiederverwendung eines Workflows wird die Abrechnung immer dem Workflow der aufrufenden Funktion zugeordnet. Die Zuweisung von {% data variables.product.prodname_dotcom %}-gehosteten Runnern wird immer nur im Kontext der aufrufenden Funktion ausgewertet. Die aufrufende Funktion kann keine {% data variables.product.prodname_dotcom %}-gehosteten Runner über das aufgerufene Repository verwenden. 

Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows).
{% endif %}

## Aufbewahrungsrichtlinie für Artefakte und Protokolle

Du kannst die Standardaufbewahrungsdauer für Artefakte und Protokolle für dein Repository, deine Organisation oder dein Unternehmenskonto anpassen.

{% data reusables.actions.about-artifact-log-retention %}

Weitere Informationen findest du unter

- „[Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository)“
- „[Konfigurieren des Aufbewahrungszeitraums für {% data variables.product.prodname_actions %}-Artefakte und -Protokolle in deiner Organisation](/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization)“
- „[Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)“

## {% data variables.product.prodname_actions %} für dein Repository oder deine Organisation deaktivieren oder beschränken

{% data reusables.actions.disabling-github-actions %}

Weitere Informationen findest du unter
- „[Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)“
- „[Deaktivieren oder Beschränken von {% data variables.product.prodname_actions %} für dein Repository oder deine Organisation](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)“
- „[Erzwingen von Richtlinien für {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-artifact-and-log-retention-in-your-enterprise)“

## Deaktivieren und Aktivieren von Workflows

Du kannst einzelne Workflows in deinem Repository für {% data variables.product.prodname_dotcom %} aktivieren und deaktivieren.

{% data reusables.actions.scheduled-workflows-disabled %}

Weitere Informationen findest du unter „[Deaktivieren und Aktivieren eines Workflows](/actions/managing-workflow-runs/disabling-and-enabling-a-workflow)“.
