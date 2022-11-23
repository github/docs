---
title: Verwenden von Workflowausführungsprotokollen
intro: 'Du kannst Protokolle für jeden Auftrag in einer Workflowausführung anzeigen, durchsuchen und herunterladen.'
redirect_from:
  - /actions/managing-workflow-runs/using-workflow-run-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ef8d0a7f1708b8c23705a04496b3d78737aec450
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147521522'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Auf der Workflow-Lauf-Seite können sie sehen, ob ein Workflow-Lauf ausgeführt wird oder abgeschlossen ist. Du musst mit einem {% data variables.product.prodname_dotcom %}-Konto angemeldet sein, um Workflow-Informationen anzuzeigen, auch für öffentliche Repositories. Weitere Informationen findest du unter „[Zugriffsberechtigungen für GitHub](/articles/access-permissions-on-github)“.

Wenn der Lauf abgeschlossen ist, kannst du sehen, ob das Ergebnis erfolgreich, fehlerhaft, abgebrochen oder neutral war. Wenn der Lauf fehlgeschlagen ist, kannst du die Build-Protokolle anzeigen und durchsuchen, um den Fehler zu diagnostizieren und den Workflow erneut auszuführen. Du kannst auch abrechenbare Auftragsausführungsminuten anzeigen oder Protokolle und Buildartefakte herunterladen.

{% data variables.product.prodname_actions %} verwenden die Checks API, um Status, Ergebnisse und Protokolle für einen Workflow auszugeben. {% data variables.product.prodname_dotcom %} erstellt eine neue Prüfsuite für jeden Workflow-Lauf. Die Prüfsuite enthält einen Prüflauf für jeden Auftrag im Workflow, und jeder Auftrag enthält Schritte. {% data variables.product.prodname_actions %} werden als Schritt in einem Workflow ausgeführt. Weitere Informationen zur Überprüfungs-API findest du unter „[Überprüfungen](/rest/reference/checks)“.

{% data reusables.actions.invalid-workflow-files %}

## Protokolle zur Fehlerdiagnose anzeigen

Wenn dein Workflow-Lauf fehlschlägt, kannst du sehen, welcher Schritt den Fehler verursacht hat, und die Build-Protokolle des fehlgeschlagenen Schrittes zur Fehlerbehebung überprüfen. Du siehst, wie lange es gedauert hat, bis jeder Schritt ausgeführt wurde. Du kannst außerdem einen Permalink in eine bestimmte Zeile in der Protokolldatei kopieren, um ihn mit deinem Team zu teilen. {% data reusables.repositories.permissions-statement-read %}

Neben den in der Workflowdatei konfigurierten Schritten fügt {% data variables.product.prodname_dotcom %} jedem Auftrag zwei weitere Schritte hinzu, um die Auftragsausführung einzurichten und abzuschließen. Diese Schritte werden in der Workflowausführung mit den Namen „Auftrag einrichten“ und „Auftrag abschließen“ protokolliert.

Bei Aufträgen, die auf {% data variables.product.prodname_dotcom %}-gehosteten Runnern ausgeführt werden, werden mit „Auftrag einrichten“ Details zum Runner-Image aufgezeichnet. Zudem wird ein Link zu der Liste der vorinstallierten Tools bereitgestellt, die auf dem Runnercomputer vorhanden waren.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %} {% data reusables.repositories.view-failed-job-results %} {% data reusables.repositories.view-specific-line %}

## Protokolle durchsuchen

Du kannst die Build-Protokolle für einen bestimmten Schritt durchsuchen. Beim Durchsuchen von Protokollen werden nur eingeblendete Schritte in die Ergebnisse einbezogen. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. Gib oben rechts in der Protokollausgabe eine Suchanfrage in das Suchfeld **Protokolle durchsuchen** ein.
![Suchfeld zum Durchsuchen von Protokollen](/assets/images/help/repository/search-log-box-updated-2.png)

## Herunterladen von Protokollen

Du kannst die Protokolldateien aus deiner Workflowausführung löschen. Außerdem kannst du Artefakte eines Workflows herunterladen. Weitere Informationen findest du unter [Speichern von Workflowdaten mithilfe von Artefakten](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts). {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. Klicke oben rechts auf {% octicon "gear" aria-label="The gear icon" %}, und wähle **Protokollarchiv herunterladen** aus.
  
  ![Dropdownmenü zum Herunterladen von Protokollen](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  

  {% ifversion re-run-jobs %}

  {% note %}

  **Hinweis**: Wenn du das Protokollarchiv für einen Workflow herunterlädst, der teilweise erneut ausgeführt wurde, enthält das Archiv nur die Aufträge, die erneut ausgeführt wurden. Zum Abrufen einer vollständigen Menge von Protokollen, die über einen Workflow ausgeführt wurden, musst du die Protokollarchive für die vorherigen Ausführungsversuche herunterladen, bei denen die anderen Aufträge ausgeführt wurden.

  {% endnote %}

  {% endif %}

## Logs löschen

Du kannst die Protokolldateien aus deiner Workflowausführung löschen. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Klicke oben rechts auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
    
    ![Kebab-horizontal icon](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    
2. Zum Löschen der Protokolldateien klicke auf die Schaltfläche **Alle Protokolle löschen**, und überprüfe die Bestätigungsaufforderung. 
  
  ![Alle Protokolle löschen](/assets/images/help/repository/delete-all-logs-updated-2.png)
  
Nach dem Löschen von Protokollen wird die Schaltfläche **Alle Protokolle löschen** entfernt, um darauf hinzuweisen, dass keine Protokolldateien mehr in der Workflowausführung vorhanden sind.

## Anzeigen von Protokollen mit {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

Verwende den Unterbefehl `run view`, um das Protokoll für einen bestimmten Auftrag anzuzeigen. Ersetze `run-id` durch die ID der Ausführung, für die du Protokolle anzeigen möchtest. {% data variables.product.prodname_cli %} gibt ein interaktives Menü zurück, in dem du einen Auftrag aus der Ausführung auswählen kannst. Wenn du `run-id` nicht angibst, gibt {% data variables.product.prodname_cli %} nacheinander zwei interaktive Menüs zurück: das erste zum Auswählen einer kürzlich erfolgten Ausführung und das zweite zum Auswählen eines Auftrags aus der Ausführung.

```shell
gh run view <em>run-id</em> --log
```

Du kannst auch das Flag `--job` verwenden, um eine Auftrags-ID anzugeben. Ersetze `job-id` durch die ID des Auftrags, für den du Protokolle anzeigen möchtest.

```shell
gh run view --job <em>job-id</em> --log
```

Du kannst `grep` verwenden, um das Protokoll zu durchsuchen. Mit diesem Befehl können beispielsweise alle Protokolleinträge zurückgegeben werden, die das Wort `error`enthalten.

```shell
gh run view --job <em>job-id</em> --log | grep error
```

Zum Filtern der Protokolle nach fehlgeschlagenen Schritten verwende `--log-failed` anstelle von `--log`.

```shell
gh run view --job <em>job-id</em> --log-failed
```
