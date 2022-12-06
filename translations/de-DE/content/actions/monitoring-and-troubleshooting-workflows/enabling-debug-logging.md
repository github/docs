---
title: Aktivieren der Debugprotokollierung
intro: 'Wenn die Workflow-Logs nicht genügend Details zur Diagnose enthalten, warum ein Workflow, ein Job oder ein Schritt nicht wie erwartet abläuft, kannst du die zusätzliche Debug-Protokollierung aktivieren.'
redirect_from:
  - /actions/managing-workflow-runs/enabling-debug-logging
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: a2a7f6ff009782c636fd7b9e453bba869d6c799d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179383'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Diese zusätzlichen Protokolle werden aktiviert, wenn in dem Repository, das den Workflow enthält, Geheimnisse festgelegt werden. Somit gelten die gleichen Berechtigungsvoraussetzungen:

- {% data reusables.actions.permissions-statement-secrets-repository %}
- {% data reusables.actions.permissions-statement-secrets-environment %}
- {% data reusables.actions.permissions-statement-secrets-organization %}
- {% data reusables.actions.permissions-statement-secrets-api %}

Weitere Informationen findest du unter [Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets).

{% ifversion debug-reruns %}

Darüber hinaus kann jeder, der Zugriff auf die Ausführung eines Workflows hat, die Runnerdiagnoseprotokollierung und die schrittweise Debugprotokollierung für einen Workflow erneut ausführen. Weitere Informationen findest Du unter [Erneutes Ausführen von Workflows und Jobs](/actions/managing-workflow-runs/re-running-workflows-and-jobs).

 {% endif %}

## Diagnose-Protokollierung des Runners aktivieren

Die Runner-Diagnoseprotokollierung bietet zusätzliche Protokolldateien mit Informationen zur Ausführung eines Auftrags durch einen Runner. In das Protokollarchiv werden zwei weitere Protokolldateien aufgenommen:

* das Runner-Prozessprotokoll mit Informationen zur Koordinierung und Einrichtung von Runnern für die Ausführung von Aufträgen
* das Worker-Prozessprotokoll, in dem die Ausführung eines Auftrags protokolliert wird

1. Für die Aktivierung der Runner-Diagnoseprotokollierung muss in dem Repository, das den Workflow enthält, das Geheimnis `ACTIONS_RUNNER_DEBUG` auf `true` festgelegt werden.

1. Sollen die Runner-Diagnoseprotokolle heruntergeladen werden, lade das Protokollarchiv des Workflow-Laufs herunter. Die Runner-Diagnoseprotokolle befinden sich im Ordner `runner-diagnostic-logs`. Weitere Informationen zum Herunterladen von Protokollen findest du unter [Herunterladen von Protokollen](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs).

## Debug-Schrittprotokollierung aktivieren

Bei der Debug-Schrittprotokollierung werden ausführlichere Protokolle während und nach der Ausführung eines Auftrags erstellt.

1. Zum Aktivieren der Debug-Schrittprotokollierung muss in dem Repository, das den Workflow enthält, das Geheimnis `ACTIONS_STEP_DEBUG` auf `true` festgelegt werden.

1. Sobald du das Geheimnis festgelegt hast, werden weitere Debug-Ereignisse in den Schrittprotokollen aufgeführt. Weitere Informationen findest du unter [Protokolle zur Fehlerdiagnose anzeigen](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures).
