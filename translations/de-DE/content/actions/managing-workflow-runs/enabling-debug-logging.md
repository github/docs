---
title: Debug-Protokollierung aktivieren
intro: 'Wenn die Workflow-Logs nicht genügend Details zur Diagnose enthalten, warum ein Workflow, ein Job oder ein Schritt nicht wie erwartet abläuft, können Sie die zusätzliche Debug-Protokollierung aktivieren.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Diese zusätzlichen Protokolle werden aktiviert, indem Geheimnisse im Repository, die den Workflow enthalten, gesetzt werden, sodass die gleichen Berechtigungsanforderungen gelten:

- {% data reusables.github-actions.permissions-statement-secrets-repository %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
- {% data reusables.github-actions.permissions-statement-secrets-environment %}
{% endif %}
- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

Weitere Informationen zum Festlegen von Geheimnissen finden Sie unter "[Erstellen und Verwenden verschlüsselter Geheimnisse](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

### Diagnose-Protokollierung des Runners aktivieren

Die Runner-Diagnoseprotokollierung stellt zusätzliche Protokolldateien bereit, die Informationen darüber enthalten, wie ein Läufer einen Auftrag ausführt. In das Protokollarchiv werden zwei weitere Protokolldateien aufgenommen:

* das Runner-Prozessprotokoll mit Informationen zur Koordinierung und Einrichtung von Runnern für die Ausführung von Aufträgen
* das Worker-Prozessprotokoll, in dem die Ausführung eines Auftrags protokolliert wird

1. Zum Aktivieren der Runner-Diagnoseprotokollierung legen Sie das folgende Geheimnis im Repository fest, in dem sich der Workflow befindet: `ACTIONS_RUNNER_DEBUG` auf `true`.

1. Sollen die Runner-Diagnoseprotokolle heruntergeladen werden, laden Sie das Protokollarchiv des Workflow-Laufs herunter. Die Runner-Diagnoseprotokolle befinden sich im Ordner `runner-diagnostic-logs`. For more information on downloading logs, see "[Downloading logs](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)."

### Debug-Schrittprotokollierung aktivieren

Bei der Debug-Schrittprotokollierung werden ausführlichere Protokolle während und nach der Ausführung eines Auftrags erstellt.

1. Zum Aktivieren der Debug-Schrittprotokollierung legen Sie das folgende Geheimnis im Repository fest, in dem sich der Workflow befindet: `ACTIONS_STEP_DEBUG` auf `true`.

1. Sobald Sie das Geheimnis festgelegt haben, werden weitere Debug-Ereignisse in den Schrittprotokollen aufgeführt. Weitere Informationen finden Sie unter [„Protokolle zur Fehlerdiagnose anzeigen“](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures).
