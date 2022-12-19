---
title: Erneutes Ausführen von Workflows und Jobs
intro: 'Du kannst eine Workflowausführung{% ifversion re-run-jobs %}, alle fehlgeschlagenen Aufträge in einer Workflowausführung oder bestimmte Aufträge in einer Workflowausführung{% endif %} bis zu 30 Tage nach der ersten Ausführung erneut ausführen.'
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 086a57b238b4a11e38013997dfcb85418a6961bd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147419721'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zum erneuten Ausführen von Workflows und Jobs

Bei der erneuten Ausführung von Workflows{% ifversion re-run-jobs %} oder Aufträgen in einem Workflow{% endif %} wird dasselbe `GITHUB_SHA`- (Commit-SHA) und `GITHUB_REF`-Element (Git-Ref) des ursprünglichen Ereignisses verwendet, das die Workflowausführung ausgelöst hat. {% ifversion actions-stable-actor-ids %}Der Workflow verwendet die Berechtigungen des Akteurs, der den Workflow ursprünglich ausgelöst hat, nicht die Berechtigungen des Akteurs, der die Neuausführung initiiert hat. {% endif %}Du kannst einen Workflow{% ifversion re-run-jobs %} oder Aufträge in einem Workflow{% endif %} für bis zu 30 Tage nach der ersten Ausführung erneut ausführen.{% ifversion re-run-jobs %} Du kannst Aufträge in einem Workflow nicht erneut ausführen, nachdem die zugehörigen Protokolle ihre Aufbewahrungsgrenzen überschritten haben. Weitere Informationen findest du unter [Nutzungseinschränkungen, Abrechnung und Verwaltung](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy).{% endif %} {% ifversion debug-reruns %} Wenn du einen Workflow oder Aufträge in einem Workflow erneut ausführst, kannst du die Debugprotokollierung für die erneute Ausführung aktivieren. Dadurch werden die Runnerdiagnoseprotokollierung und die schrittweise Debugprotokollierung für die erneute Ausführung aktiviert. Weitere Informationen zur Debugprotokollierung findest du unter [Aktivieren der Debugprotokollierung](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging).{% endif %}

## Erneutes Ausführen aller Aufträge in einem Workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
1. Verwende in der oberen rechten Ecke des Workflows das Dropdownmenü **Aufträge erneut ausführen**, und wähle **Alle Aufträge erneut ausführen** aus.

   Wenn bei keinem Auftrag ein Fehler aufgetreten ist, wird das Dropdownmenü **Aufträge erneut ausführen** nicht angezeigt. Klicke stattdessen auf **Alle Aufträge erneut ausführen**.
    ![Dropdownmenü zum erneuten Durchführen der Prüfungen](/assets/images/help/repository/rerun-checks-drop-down.png) {% endif %} {% ifversion ghes < 3.5 or ghae %}
1. Verwende in der oberen rechten Ecke des Workflows das Dropdownmenü **Aufträge erneut ausführen**, und wähle **Alle Aufträge erneut ausführen** aus.
    ![Dropdownmenü zum erneuten Ausführen der Prüfungen](/assets/images/help/repository/rerun-checks-drop-down-updated.png) {% endif %} {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Um einen Workflow erneut auszuführen, bei dem ein Fehler aufgetreten ist, verwende den Unterbefehl `run rerun`. Ersetze `run-id` durch die ID der fehlerhaften Ausführung, die du erneut ausführen möchtest.  Wenn du keine `run-id` angibst, gibt {% data variables.product.prodname_cli %} ein interaktives Menü zurück, wo du eine der letzten fehlerhaften Ausführungen auswählen kannst.

```shell
gh run rerun <em>run-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --debug
```

{% endif %}

Um den Fortschritt der Workflowausführung anzuzeigen, verwende den Unterbefehl `run watch`, und wähle die Ausführung in der interaktiven Liste aus.

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## Erneutes Ausführen fehlerhafter Aufträge in einem Workflow

Wenn bei Aufträgen in einer Workflowausführung Fehler aufgetreten sind, kannst du dich auf das erneute Ausführen der entsprechenden Aufträge beschränken. Wenn du fehlerhafte Aufträge in einem Workflow erneut ausführst, beginnt für alle fehlerhaften Aufträge und die von ihnen abhängigen Objekte eine neue Workflowausführung. Alle Ausgaben für erfolgreiche Aufträge in der vorherigen Workflowausführung werden für die erneute Ausführung verwendet. Alle Artefakte, die in der ersten Ausführung erstellt wurden, sind in der erneuten Ausführung verfügbar. Alle in der vorherigen Ausführung übergebenen Umgebungsschutzregeln werden automatisch in der erneuten Ausführung übergeben.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Verwende in der oberen rechten Ecke des Workflows das Dropdownmenü **Aufträge erneut ausführen**, und wähle **Fehlerhafte Aufträge erneut ausführen** aus.
    ![Dropdownmenü zum erneuten Ausführen fehlgeschlagener Aufträge](/assets/images/help/repository/rerun-failed-jobs-drop-down.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Um fehlerhafte Aufträge in einer Workflowausführung erneut auszuführen, verwende den Unterbefehl `run rerun` mit dem Flag `--failed`. Ersetze `run-id` durch die ID der Ausführung, für die fehlerhafte Aufträge neu ausgeführt werden sollen. Wenn du keine `run-id` angibst, gibt {% data variables.product.prodname_cli %} ein interaktives Menü zurück, wo du eine der letzten fehlerhaften Ausführungen auswählen kannst.

```shell
gh run rerun <em>run-id</em> --failed
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --failed --debug
```

{% endif %} {% endcli %}

## Erneutes Ausführen eines bestimmten Auftrags in einem Workflow

Wenn du einen bestimmten Auftrag in einem Workflow erneut ausführst, wird eine neue Workflowausführung für den Auftrag und alle abhängigen Objekte gestartet. Alle Ausgaben für andere Aufträge in der vorherigen Workflowausführung werden für die erneute Ausführung verwendet. Alle Artefakte, die in der ersten Ausführung erstellt wurden, sind in der erneuten Ausführung verfügbar. Alle in der vorherigen Ausführung übergebenen Umgebungsschutzregeln werden automatisch in der erneuten Ausführung übergeben.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Klicke neben dem Auftrag, den du erneut ausführen möchtest, auf {% octicon "sync" aria-label="The re-run icon" %}.
   ![Ausgewählten Auftrag erneut ausführen](/assets/images/help/repository/re-run-selected-job.png)

   Klicke alternativ auf einen Auftrag, um das Protokoll anzuzeigen. Klicke im Protokoll auf {% octicon "sync" aria-label="The re-run icon" %}.
   ![Ausgewählten Auftrag erneut ausführen](/assets/images/help/repository/re-run-single-job-from-log.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Um einen bestimmten Auftrag in einer Workflowausführung erneut auszuführen, verwende den Unterbefehl `run rerun` mit dem Flag `--job`. Ersetze `job-id` durch die ID des Auftrags, den du erneut ausführen möchtest.

```shell
gh run rerun --job <em>job-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job <em>job-id</em> --debug
```

{% endif %} {% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## Erneutes Ausführen von Workflows und Aufträgen mit wiederverwendbaren Workflows

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
## Überprüfen vorheriger Workflowausführungen

Du kannst die Ergebnisse deiner vorherigen Versuche zum Ausführen eines Workflows anzeigen. Du kannst auch frühere Workflowausführungen mithilfe der API anzeigen. Weitere Informationen findest du unter [Abrufen einer Workflowausführung](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {%- ifversion re-run-jobs %}
1. Alle vorherigen Ausführungsversuche werden im Dropdownmenü **Neueste** angezeigt.
   ![Vorherige Ausführungsversuche](/assets/images/help/repository/previous-run-attempts.png) {%- else %}
1. Alle vorherigen Ausführungsversuche werden im linken Bereich angezeigt.
    ![Workflow erneut ausführen](/assets/images/help/settings/actions-review-workflow-rerun.png) {%- endif %}
1. Klicke auf einen Eintrag, um die Ergebnisse anzuzeigen.

{% endif %}
