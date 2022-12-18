---
title: Schnellstart für GitHub Actions
intro: 'Probiere die Features von {% data variables.product.prodname_actions %} in fünf Minuten oder weniger aus.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /actions/getting-started-with-github-actions/starting-with-preconfigured-workflow-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Fundamentals
shortTitle: Quickstart
ms.openlocfilehash: 164aef041c509264c9e8440d5339bce3cf4aaaca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146139457'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Du benötigst nur ein {% data variables.product.prodname_dotcom %}-Repository, um einen {% data variables.product.prodname_actions %}-Workflow zu erstellen und auszuführen. Im Rahmen dieser Anleitung fügst du einen Workflow hinzu, der einige der wesentlichen Features von {% data variables.product.prodname_actions %} veranschaulicht. 

Im folgenden Beispiel wird gezeigt, wie {% data variables.product.prodname_actions %}-Aufträge automatisch ausgelöst werden können, wo sie ausgeführt werden und wie sie mit dem Code in deinem Repository interagieren können.

## Erstellen deines ersten Workflows

1. Erstelle ein `.github/workflows`-Verzeichnis in deinem Repository auf {% data variables.product.prodname_dotcom %}, wenn dieses Verzeichnis noch nicht vorhanden ist.
2. Erstelle im Verzeichnis `.github/workflows` eine Datei namens `github-actions-demo.yml`. Weitere Informationen findest du unter [Erstellen neuer Dateien](/github/managing-files-in-a-repository/creating-new-files).
3. Kopiere die folgenden YAML-Inhalte in die `github-actions-demo.yml`-Datei: {% raw %}
    ```yaml{:copy}
    name: GitHub Actions Demo
    on: [push]
    jobs:
      Explore-GitHub-Actions:
        runs-on: ubuntu-latest
        steps:
          - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
          - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
          - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."{% endraw %}
          - name: Check out repository code
            uses: {% data reusables.actions.action-checkout %}{% raw %}
          - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
          - run: echo "🖥️ The workflow is now ready to test your code on the runner."
          - name: List files in the repository
            run: |
              ls ${{ github.workspace }}
          - run: echo "🍏 This job's status is ${{ job.status }}."

    ```
    {% endraw %}
3. Scrolle auf der Seite nach unten, und klicke auf **Neuen Branch für diesen Commit erstellen und Pull Request starten**. Klicke dann zum Erstellen eines Pull Requests auf **Neue Datei vorschlagen**.
    ![Workflowdatei committen](/assets/images/help/repository/actions-quickstart-commit-new-file.png)

Durch das Committen der Workflowdatei in einen Branch in deinem Repository wird das `push`-Ereignis ausgelöst, und dein Workflow wird ausgeführt.

## Anzeigen der Workflowergebnisse

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Klicke in der linken Seitenleiste auf den Workflow, den du sehen willst.

   ![Workflow-Liste in der linken Seitenleiste](/assets/images/help/repository/actions-quickstart-workflow-sidebar.png)
1. Klicke in der Liste der Workflowausführungen auf den Namens der Ausführung, die du anzeigen möchtest.

   ![Name der Workflow-Ausführung](/assets/images/help/repository/actions-quickstart-run-name.png)
1. Wähle unter **Aufträge** den Auftrag **Explore-GitHub-Actions** aus.

   ![Suchen eines Auftrags](/assets/images/help/repository/actions-quickstart-job.png)
1. Das Protokoll zeigt, wie die einzelnen Schritte ausgeführt wurden. Erweitere einen beliebigen Schritt, um die zugehörigen Details anzuzeigen.

   ![Ergebnisse eines Beispielworkflows](/assets/images/help/repository/actions-quickstart-logs.png)
   
   Beispielsweise wird die Liste der Dateien in deinem Repository angezeigt: ![Beispielaktionsdetails](/assets/images/help/repository/actions-quickstart-log-detail.png)
   
## Weitere Startworkflows

{% data reusables.actions.workflow-template-overview %}

## Komplexere Beispiele
{% data reusables.actions.link-to-example-library %}

## Nächste Schritte

Der soeben hinzugefügte Beispielworkflow wird jedes Mal ausgeführt, wenn Code an den Branch gepusht wird. Es wird angezeigt, wie {% data variables.product.prodname_actions %} den Inhalt deines Repositorys verwenden kann. {% data variables.product.prodname_actions %} bietet noch viele weitere Möglichkeiten:

- Dein Repository kann mehrere Workflows enthalten, die unterschiedliche Aufträge basierend auf verschiedenen Ereignissen auslösen. 
- Du kannst einen Workflow zum Installieren von Softwaretest-Apps verwenden und mit diesen Apps automatisch deinen Code in den {% data variables.product.prodname_dotcom %}-Runnern testen. 

{% data variables.product.prodname_actions %} kann dir dabei helfen, nahezu alle Aspekte deines Anwendungsentwicklungsprozesses zu automatisieren. Wollen Sie loslegen? Hier findest du einige hilfreiche Ressourcen für deine nächsten Schritte mit {% data variables.product.prodname_actions %}:

- Ein ausführliches Tutorial findest du unter [Informationen zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions).
