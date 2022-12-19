---
title: Schließen inaktiver Issues
intro: 'Du kannst {% data variables.product.prodname_actions %} verwenden, um Issues zu kommentieren oder zu schließen, die für einen bestimmten Zeitraum inaktiv waren.'
redirect_from:
  - /actions/guides/closing-inactive-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - Project management
ms.openlocfilehash: 7d0cab4c1ef7ac5fda67a0487b50817adfb5dfd8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063610'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

In diesem Tutorial erfährst du, wie du die [Aktion `actions/stale`](https://github.com/marketplace/actions/close-stale-issues) verwendest, um Issues, die für einen bestimmten Zeitraum inaktiv waren, zu kommentieren und zu schließen. Du kannst beispielsweise kommentieren, wenn ein Problem 30 Tage lang inaktiv war, um Teilnehmer dazu zu veranlassen, aktiv zu werden. Wenn sich dann nach 14 Tagen nichts getan hat, kannst du das Problem schließen.

In diesem Tutorial erstellst du zunächst eine Workflowdatei, die die [`actions/stale`-Aktion](https://github.com/marketplace/actions/close-stale-issues) verwendet. Im Anschluss passt du den Workflow an deine Anforderungen an.

## Erstellen des Workflows

1. {% data reusables.actions.choose-repo %}
2. {% data reusables.actions.make-workflow-file %}
3. Kopiere den folgenden YAML-Inhalt in deine Workflowdatei.

    ```yaml{:copy}
    name: Close inactive issues
    on:
      schedule:
        - cron: "30 1 * * *"

    jobs:
      close-issues:
        runs-on: ubuntu-latest
        permissions:
          issues: write
          pull-requests: write
        steps:
          - uses: {% data reusables.actions.action-stale %}
            with:
              days-before-issue-stale: 30
              days-before-issue-close: 14
              stale-issue-label: "stale"
              stale-issue-message: "This issue is stale because it has been open for 30 days with no activity."
              close-issue-message: "This issue was closed because it has been inactive for 14 days since being marked as stale."
              days-before-pr-stale: -1
              days-before-pr-close: -1
              repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
    ```

4. Passe die Parameter in deiner Workflowdatei an:
   - Ändere den Wert für `on.schedule`, um festzulegen, wann dieser Workflow ausgeführt werden soll. Im obigen Beispiel wird der Workflow täglich um 1:30 Uhr (UTC) ausgeführt. Weitere Informationen zu geplanten Workflows findest du unter [Geplante Ereignisse](/actions/reference/events-that-trigger-workflows#scheduled-events).
   - Ändere den Wert für `days-before-issue-stale` in die Anzahl von Tagen ohne Aktivität, nach der die Aktion `actions/stale` ein Issue beschriften soll. Wenn diese Aktion niemals Issues beschriften soll, lege diesen Wert auf `-1` fest.
   - Ändere den Wert für `days-before-issue-close` in die Anzahl von Tagen ohne Aktivität, nach der die Aktion `actions/stale` ein Issue schließen soll. Wenn diese Aktion niemals Issues schließen soll, lege diesen Wert auf `-1` fest.
   - Ändere den Wert für `stale-issue-label` in die Bezeichnung, die auf Issues angewendet werden soll, die für den durch `days-before-issue-stale` angegebenen Zeitraum inaktiv waren.
   - Ändere den Wert für `stale-issue-message` in den Kommentar, der Issues hinzugefügt werden soll, die durch die Aktion `actions/stale` beschriftet werden.
   - Ändere den Wert für `close-issue-message` in den Kommentar, der Issues hinzugefügt werden soll, die durch die Aktion `actions/stale` geschlossen werden.
5. {% data reusables.actions.commit-workflow %}

## Erwartete Ergebnisse

Basierend auf dem Parameter `schedule` (z. B. jeden Tag um 1:30 Uhr UTC), sucht dein Workflow nach Issues, die für den angegebenen Zeitraum inaktiv waren, und fügt den angegebenen Kommentar und die angegebene Bezeichnung hinzu. Darüber hinaus schließt dein Workflow alle zuvor beschrifteten Probleme, wenn für den angegebenen Zeitraum keine weitere Aktivität stattgefunden hat.

{% data reusables.actions.schedule-delay %}

Du kannst den Verlauf der Workflowausführungen anzeigen, um zu ermitteln, ob dieser Workflow regelmäßig ausgeführt wird. Weitere Informationen findest du unter [Aufrufen des Workflowausführungsverlaufs](/actions/managing-workflow-runs/viewing-workflow-run-history).

Dieser Workflow beschriftet und/oder schließt immer nur 30 Probleme gleichzeitig, um die Überschreitung einer Ratenbegrenzung zu vermeiden. Dies kann mithilfe der Einstellung `operations-per-run` konfiguriert werden. Weitere Informationen findest du in der [Dokumentation zur Aktion `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).

## Nächste Schritte

- Informationen zu weiteren Möglichkeiten mit der Aktion `actions/stale` (etwa Schließen inaktiver Pull Requests, Ignorieren von Issues mit bestimmten Bezeichnungen oder Meilensteinen oder Beschränken der Überprüfung von Issues auf Issues mit bestimmten Bezeichnungen) findest du in der [Dokumentation zur Aktion `actions/stale`](https://github.com/marketplace/actions/close-stale-issues).
- [Durchsuche GitHub](https://github.com/search?q=%22uses%3A+actions%2Fstale%22&type=code) nach Beispielen für Workflows, die diese Aktion verwenden.
