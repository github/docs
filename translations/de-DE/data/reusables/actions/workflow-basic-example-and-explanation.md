---
ms.openlocfilehash: 53dbd22ad351ec7a1abc92107b366ecd8c71a3a9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064538"
---
## Erstellen eines Beispielworkflows

In {% data variables.product.prodname_actions %} werden Workflows mithilfe der YAML-Syntax definiert.  Die einzelnen Workflows werden in deinem Coderepository jeweils als separate YAML-Datei in einem Verzeichnis mit dem Namen `.github/workflows` gespeichert.

Du kannst in deinem Repository einen Beispielworkflow erstellen, der immer dann automatisch eine Reihe von Befehlen auslöst, wenn Code per Push übertragen wird. In diesem Workflow checkt {% data variables.product.prodname_actions %} den per Push übertragenen Code aus, installiert das Testframework [bats](https://www.npmjs.com/package/bats) und führt einen einfachen Befehl aus, um die bats-Version auszugeben: `bats -v`.

1. Erstelle in deinem Repository das Verzeichnis `.github/workflows/`, um die Workflowdateien zu speichern.
1. Erstelle im Verzeichnis `.github/workflows/` eine neue Datei mit dem Namen `learn-github-actions.yml`, und füge den folgenden Code hinzu:

   ```yaml
   name: learn-github-actions
   on: [push]
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - uses: {% data reusables.actions.action-checkout %}
         - uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: '14'
         - run: npm install -g bats
         - run: bats -v
   ```
1. Führe für diese Änderungen einen Commit aus, und übertrage sie per Push in dein {% data variables.product.prodname_dotcom %}-Repository.

Die neue {% data variables.product.prodname_actions %}-Workflowdatei ist jetzt in deinem Repository installiert und wird immer dann automatisch ausgeführt, wenn eine Änderung per Push in dein Repository übertragen wird. Informationen zum Ausführungsverlauf eines Workflows findest du unter [Anzeigen der Aktivität einer Workflowausführung](#viewing-the-activity-for-a-workflow-run).

## Grundlegendes zu Workflowdateien

In diesem Abschnitt wird anhand der einzelnen Zeilen des Einführungsbeispiels erläutert, wie du mithilfe der YAML-Syntax eine Workflowdatei erstellst.

<table>
<tr>
<td>

  ```yaml
  name: learn-github-actions
  ```
</td>
<td>
  <em>Optional</em>: Name des Workflows, der auf der Registerkarte „Aktionen“ im {% data variables.product.prodname_dotcom %}-Repository angezeigt wird.
</td>
</tr>
<tr>
<td>

  ```yaml
  on: [push]
  ```
</td>
<td>
Gibt den Trigger für diesen Workflow an. In diesem Beispiel wird das Ereignis <code>push</code> verwendet. Daher wird immer dann eine Workflowausführung ausgelöst, wenn eine Änderung per Push in das Repository übertragen oder ein Pull Request gemergt wird.  Dies wird durch einen Push an jeden beliebigen Branch ausgelöst. Unter <a href="/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore">Workflowsyntax für {% data variables.product.prodname_actions %}</a> findest du Syntaxbeispiele, die nur bei Pushes an bestimmte Branches, Pfade oder Tags ausgeführt werden.
</td>
</tr>
<tr>
<td>

  ```yaml
  jobs:
  ```
</td>
<td>
Gruppiert alle Aufträge, die im Workflow <code>learn-github-actions</code> ausgeführt werden.
</td>
</tr>
<tr>
<td>

  ```yaml
  check-bats-version:
  ```
</td>
<td>
Definiert einen Auftrag mit dem Namen <code>check-bats-version</code>. Die Eigenschaften des Auftrags werden durch die untergeordneten Schlüssel definiert.
</td>
</tr>
<tr>
<td>

  ```yaml
    runs-on: ubuntu-latest
  ```
</td>
<td>
Konfiguriert den Auftrag, der für die neueste Version eines Ubuntu Linux-Runners ausgeführt werden soll. Dies bedeutet, dass der Auftrag auf einer neuen, von GitHub gehosteten VM ausgeführt wird. Syntaxbeispiele mit anderen Runnern findest du unter <a href="/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on">Workflowsyntax für {% data variables.product.prodname_actions %}.</a>
</td>
</tr>
<tr>
<td>

  ```yaml
    steps:
  ```
</td>
<td>
Gruppiert alle Schritte, die im Auftrag <code>check-bats-version</code> ausgeführt werden. Alle Elemente in diesem Abschnitt stellen separate Aktionen oder Shellskripts dar.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-checkout %}
  ```
</td>
<td>
Das <code>uses</code>-Schlüsselwort gibt an, dass mit diesem Schritt <code>v3</code> der Aktion <code>actions/checkout</code> ausgeführt wird. Mit dieser Aktion wird dein Repository in den Runner ausgecheckt. Dadurch kannst du Skripts oder andere Aktionen für deinen Code ausführen (z. B. Build- und Testtools). Verwende die Auscheckaktion bei jeder Ausführung deines Workflows für den Code des Repositorys.
</td>
</tr>
<tr>
<td>

  ```yaml
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
  ```
</td>
<td>
In diesem Schritt wird mit der Aktion <code>{% data reusables.actions.action-setup-node %}</code> die angegebene Node.js-Version installiert (in diesem Beispiel v14). Dadurch werden die Befehle <code>node</code> und <code>npm</code> dem <code>PATH</code>-Element hinzugefügt.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: npm install -g bats
  ```
</td>
<td>
Mit dem <code>run</code>-Schlüsselwort wird der Auftrag angewiesen, einen Befehl im Runner auszuführen. In diesem Fall installierst du das Softwaretestpaket <code>bats</code> mithilfe von <code>npm</code>.
</td>
</tr>
<tr>
<td>

  ```yaml
      - run: bats -v
  ```
</td>
<td>
Zuletzt führst du den <code>bats</code>-Befehl mit einem Parameter aus, der die Softwareversion ausgibt.
</td>
</tr>
</table>

### Visualisieren der Workflowdatei

Im folgenden Diagramm siehst du die zuvor erstellte Workflowdatei und die hierarchische Organisation der {% data variables.product.prodname_actions %}-Komponenten. In jedem Schritt wird eine einzelne Aktion oder ein einzelnes Shellskript ausgeführt. In den Schritten 1 und 2 werden Aktionen ausgeführt, in den Schritten 3 und 4 Shellskripts. Weitere vordefinierte Aktionen für deine Workflows findest du unter [Suchen und Anpassen von Aktionen](/actions/learn-github-actions/finding-and-customizing-actions).

![Übersicht über Workflow](/assets/images/help/images/overview-actions-event.png)

## Anzeigen der Aktivität für eine Workflowausführung

Wenn dein Workflow ausgelöst wird, wird eine _Workflowausführung_ erstellt, die den Workflow ausführt. Nachdem eine Workflowausführung gestartet wurde, wird auf {% data variables.product.prodname_dotcom %} eine grafische Darstellung des Ausführungsfortschritts sowie der Aktivitäten der einzelnen Schritte dargestellt.

{% data reusables.repositories.navigate-to-repo %}
1. Klicke unter dem Repositorynamen auf **Aktionen**.

   ![Navigieren zum Repository](/assets/images/help/images/learn-github-actions-repository.png)
1. Klicke in der linken Seitenleiste auf den Workflow, den du sehen willst.

   ![Screenshot der Workflowergebnisse](/assets/images/help/images/learn-github-actions-workflow.png)
1. Klicke unter „Workflow runs" (Workflow-Ausführungen) auf den Namens des Ausführung, die du sehen willst.

   ![Screenshot der Workflowausführungen](/assets/images/help/images/learn-github-actions-run.png)
1. Wähle unter **Aufträge** oder im Visualisierungsdiagramm den Auftrag aus, den du anzeigen möchtest.

   ![Auswählen des Auftrags](/assets/images/help/images/overview-actions-result-navigate.png)
1. Zeige die Ergebnisse der einzelnen Schritte an.

   ![Screenshot der Details zur Workflowausführung](/assets/images/help/images/overview-actions-result-updated-2.png)
