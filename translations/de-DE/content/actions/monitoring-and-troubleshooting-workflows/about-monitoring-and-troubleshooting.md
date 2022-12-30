---
title: Informationen zu Überwachung und Problembehandlung
intro: 'Du kannst Tools in {% data variables.product.prodname_actions %} zum Überwachen und Debuggen deiner Workflows verwenden.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d9158cd9bba6d003a583e78459240aa6790a1154
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062042'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Überwachen deiner Workflows 

{% ifversion github-runner-dashboard %}
### Überwachen deiner aktuellen Aufträge in deiner Organisation oder deinem Unternehmen

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### Verwenden des Visualisierungsdiagramms

Jede Workflowausführung generiert ein Echtzeitdiagramm, das den Ausführungsfortschritt veranschaulicht. Du kannst dieses Diagramm verwenden, um Workflows zu überwachen und zu debuggen. Beispiel:

   ![Workflowdiagramm](/assets/images/help/images/workflow-graph.png)

Weitere Informationen findest du unter [Verwenden des Visualisierungsdiagramms](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph). 

### Hinzufügen eines Badges für den Workflowstatus

{% data reusables.repositories.actions-workflow-status-badge-intro %}

Weitere Informationen findest du unter [Hinzufügen eines Workflowstatusbadges](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge).

{% ifversion fpt or ghec %}
### Anzeigen der Ausführungszeit für einen Auftrag

Um zu ermitteln, wie lange ein Auftrag ausgeführt wurde, kannst du seine Ausführungszeit anzeigen. Beispiel:

   ![Link mit Details zu Ausführung und abrechenbarer Zeit](/assets/images/help/repository/view-run-billable-time.png)

Weitere Informationen findest du unter [Anzeigen der Auftragsausführungszeit](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time).
{% endif %}

### Anzeigen des Ausführungsverlaufs eines Workflows

Du kannst den Status der einzelnen Aufgaben und Schritte in einem Workflow anzeigen. Beispiel:

   ![Name der Workflow-Ausführung](/assets/images/help/repository/run-name.png)

Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history).

## Problembehandlung für deine Workflows

### Verwenden von Workflowausführungsprotokollen

Jede Workflowausführung generiert Aktivitätsprotokolle, die du anzeigen, durchsuchen und herunterladen kannst. Beispiel:

   ![Ergebnisse des Super-Linter-Workflows](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

Weitere Informationen findest du unter [Verwenden von Workflowausführungsprotokollen](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs).

### Aktivieren der Debugprotokollierung

Wenn die Workflow-Logs nicht genügend Details zur Diagnose enthalten, warum ein Workflow, ein Job oder ein Schritt nicht wie erwartet abläuft, kannst du die zusätzliche Debug-Protokollierung aktivieren. Weitere Informationen findest du unter [Aktivieren der Debugprotokollierung](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging).

## Überwachen und Behandeln von Problemen mit selbstgehosteten Runnern

Wenn du selbstgehostete Runner verwendest, kannst du ihre Aktivitäten einsehen und häufige Probleme diagnostizieren. 

Weitere Informationen findest du unter [Überwachen von und Behandeln von Problemen mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners).
