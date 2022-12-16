---
title: Ausführen von Skripts vor oder nach einem Auftrag
intro: Skripts können direkt vor oder nach einem Auftrag automatisch auf einem selbstgehosteten Runner ausgeführt werden.
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: Run a script before or after a job
ms.openlocfilehash: 11b2f63cd70c5276f0626a6016593553d1bedd0c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067650'
---
{% note %}

**Hinweis**: Dieses Feature befindet sich derzeit in der Betaversion und wird ggf. noch geändert.

{% endnote %}

## Informationen zu Skripts vor und nach einem Auftrag

Du kannst Skripts automatisch auf einem selbstgehosteten Runner ausführen, entweder vor einer Auftragsausführung oder nach Abschluss der Ausführung eines Auftrags. Diese Skripts können verwendet werden, um die Anforderungen des Auftrags zu unterstützen (z. B. das Erstellen oder Bereinigen einer Runnerumgebung oder das Bereinigen von Verzeichnissen). Du kannst diese Skripts auch verwenden, um Telemetriedaten dazu nachzuverfolgen, wie deine Runner verwendet werden.

Die benutzerdefinierten Skripts werden automatisch ausgelöst, wenn eine bestimmte Umgebungsvariable für den Runner festgelegt wird. Die Umgebungsvariable muss den absoluten Pfad zum Skript enthalten. Weitere Informationen findest du im Folgenden unter [Auslösen der Skripts](#triggering-the-scripts).

Die folgenden Skriptsprachen werden unterstützt:

- **Bash**: Verwendet `bash` und kann auf `sh` zurückgreifen. Wird ausgeführt, indem `-e {pathtofile}` ausgeführt wird.
- **PowerShell**: Verwendet `pwsh` und kann auf `powershell` zurückgreifen. Wird ausgeführt, indem `-command \". '{pathtofile}'\"` ausgeführt wird.

## Schreiben der Skripts

Deine benutzerdefinierten Skripts können die folgenden Features verwenden:

- **Umgebungsvariablen**: Skripts haben Zugriff auf die Standardumgebungsvariablen. Die vollständigen Webhook-Ereignisnutzdaten findest du in `GITHUB_EVENT_PATH`. Weitere Informationen findest du unter [Umgebungsvariablen](/actions/learn-github-actions/environment-variables#default-environment-variables).
- **Workflowbefehle**: Skripts können Workflowbefehle verwenden. Weitere Informationen findest du unter [Workflowbefehle für {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions). Ausnahmen sind `save-state` und `set-output`, die von diesen Skripts nicht unterstützt werden. Skripts können auch Umgebungsdateien verwenden. Weitere Informationen findest du unter [Umgebungsdateien](/actions/using-workflows/workflow-commands-for-github-actions#environment-files).

{% note %}

**Hinweis**: Vermeide die Verwendung deiner Skripts zum Ausgeben vertraulicher Informationen in die Konsole, da jede Person mit Lesezugriff auf das Repository möglicherweise die Ausgabe in den Benutzeroberflächenprotokollen anzeigen kann.

{% endnote %}

### Behandeln von Exitcodes

Bei Skripts vor Aufträgen gibt der Exitcode `0` an, dass das Skript erfolgreich abgeschlossen wurde, und der Auftrag wird dann ausgeführt. Wenn ein anderer Exitcode vorhanden ist, wird der Auftrag nicht ausgeführt und als fehlerhaft markiert. Um die Ergebnisse deiner Skripts vor Aufträgen anzuzeigen, überprüfe die Protokolle auf `Set up runner`-Einträge. Weitere Informationen zum Überprüfen der Protokolle findest du unter [Anzeigen von Protokollen zum Diagnostizieren von Fehlern](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures).

Die [`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error)-Einstellung wird für die Verwendung durch diese Skripts nicht unterstützt.

## Auslösen der Skripts

Die benutzerdefinierten Skripts müssen sich auf dem Runner befinden, sollten aber nicht im Anwendungsverzeichnis `actions-runner` gespeichert werden. Die Skripts werden im Sicherheitskontext des Dienstkontos ausgeführt, das den Runnerdienst ausführt.

{% note %}

**Hinweis**: Die ausgelösten Skripts werden synchron verarbeitet, sodass sie die Auftragsausführung während ihrer Ausführung blockieren.

{% endnote %}

Die Skripts werden automatisch ausgeführt, wenn der Runner über die folgenden Umgebungsvariablen verfügt, die einen absoluten Pfad zum Skript enthalten:
- `ACTIONS_RUNNER_HOOK_JOB_STARTED`: Das in dieser Umgebungsvariablen definierte Skript wird ausgelöst, wenn einem Runner ein Auftrag zugewiesen wurde, aber bevor die Ausführung des Auftrags gestartet wird.
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`: Das in dieser Umgebungsvariablen definierte Skript wird ausgelöst, nachdem der Auftrag die Verarbeitung abgeschlossen hat.

Um diese Umgebungsvariablen festzulegen, kannst du sie entweder dem Betriebssystem oder einer Datei namens `.env` hinzufügen, die sich im selbstgehosteten Anwendungsverzeichnis des Runners befindet. Der folgende `.env`-Eintrag bewirkt beispielsweise, dass der Runner vor jedem Auftrag automatisch ein Skript namens `cleanup_script.sh` ausführt:

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## Problembehandlung


### Keine Timeouteinstellung

Es ist derzeit keine Timeouteinstellung für Skripts verfügbar, die von `ACTIONS_RUNNER_HOOK_JOB_STARTED` oder `ACTIONS_RUNNER_HOOK_JOB_COMPLETED` ausgeführt werden. Du könntest daher in Erwägung ziehen, deinem Skript Timeoutverarbeitung hinzuzufügen.

### Überprüfen des Workflowausführungsprotokolls

Um zu bestätigen, dass deine Skripts ausgeführt werden, kannst du die Protokolle für diesen Auftrag überprüfen. Die Skripts werden in separaten Schritten für `Set up runner` oder `Complete runner` aufgeführt, je nachdem, welche Umgebungsvariable das Skript auslöst. Weitere Informationen zum Überprüfen der Protokolle findest du unter [Anzeigen von Protokollen zum Diagnostizieren von Fehlern](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures).
