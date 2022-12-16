---
title: Fehlerbehebung von erforderlichen Statuschecks
intro: Du kannst nach häufig auftretenden Fehlern suchen und Probleme mit erforderlichen Statusüberprüfungen beheben.
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/troubleshooting-required-status-checks
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks
shortTitle: Required status checks
ms.openlocfilehash: 6e99f8ebf0275d065c640bb7b4c7b60462f51ec0
ms.sourcegitcommit: 84a9475bf99a37021746349a51ce814516928516
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135806'
---
Wenn du eine Prüfung und einen Status mit dem gleichen Namen hast und diesen Namen als erforderlichen Statuscheck auswählst, sind sowohl die Prüfung als auch der Status erforderlich. Weitere Informationen findest du unter [Überprüfungen](/rest/reference/checks).

Nachdem du die erforderlichen Statusüberprüfungen aktiviert hast, muss dein Branch vor dem Zusammenführen mit dem Basisbranch auf dem neuesten Stand gebracht werden. Dadurch wird sichergestellt, dass dein Branch mit dem neuesten Code aus dem Basisbranch getestet wurde. Wenn dein Branch veraltet ist, musst du den Basisbranch in deinen Branch zusammenführen. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging).

{% note %}

**Hinweis:** Du kannst deinen Branch auch mit dem Basisbranch unter Verwendung von Git-Rebase auf dem neuesten Stand bringen. Weitere Informationen findest du unter [Informationen zu Git-Rebase](/github/getting-started-with-github/about-git-rebase).

{% endnote %}

Du kannst lokale Änderungen erst dann an einen geschützten Branch übertragen, wenn alle erforderlichen Statuschecks bestanden sind. Ansonsten wird eine Fehlermeldung ähnlich der folgenden ausgegeben.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Required status check "ci-build" is failing
```
{% note %}

**Hinweis:** Pull Requests, die auf dem neuesten Stand sind und die erforderlichen Statuschecks bestehen, können lokal gemergt und an den geschützten Branch gepusht werden. Dies kann ohne Statuschecks erfolgen, die auf dem Merge-Commit selbst ausgeführt werden.

{% endnote %}

## Konflikte zwischen dem Head-Commit und dem Test-Merge-Commit

Manchmal werden sich die Ergebnisse der Statuschecks für den Test-Merge-Commit und Head-Commit widersprechen. Wenn der Test-Merge-Commit über einen Status verfügt, muss er übergeben werden. Anderenfalls muss der Status des Head-Commit bestanden sein, bevor du den Branch zusammenführen kannst. Weitere Informationen zu Test-Merge-Commits findest du unter [Pulls](/rest/reference/pulls#get-a-pull-request).

![Branch mit widersprüchlichen Merge-Commits](/assets/images/help/repository/req-status-check-conflicting-merge-commits.png)

## Handling übersprungenen, jedoch Überprüfung nötig

{% note %}

**Hinweis:** Wenn ein Workflow aufgrund von [Pfadfilterung](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore), [Branchfilterung](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) oder einer [Commitnachricht](/actions/managing-workflow-runs/skipping-workflow-runs) übersprungen wird, verbleiben diesem Workflow zugeordnete Überprüfungen im Status „Ausstehend“. Ein Pull Request, bei dem diese Prüfungen erfolgreich sein müssen, wird vom Mergen ausgeschlossen.

Wenn ein Auftrag in einem Workflow aufgrund einer bedingten Bedingung übersprungen wird, meldet er seinen Status als „Erfolg“. Weitere Informationen findest du unter [Überspringen von Workflowausführungen](/actions/managing-workflow-runs/skipping-workflow-runs) und [Verwenden von Bedingungen zum Steuern der Auftragsausführung](/actions/using-jobs/using-conditions-to-control-job-execution).

{% endnote %}

### Beispiel

Das folgende Beispiel zeigt einen Workflow, der einen „erfolgreichen“ Abschlussstatus für den Auftrag `build` erfordert, aber der Workflow wird übersprungen, wenn der Pull Request keine Dateien im Verzeichnis `scripts` ändert.

```yaml
name: ci
on:
  pull_request:
    paths:
      - 'scripts/**'
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
    - uses: {% data reusables.actions.action-checkout %}
    - name: Use Node.js {% raw %}${{ matrix.node-version }}{% endraw %}
      uses: {% data reusables.actions.action-setup-node %}
      with:
        node-version: {% raw %}${{ matrix.node-version }}{% endraw %}
        cache: 'npm'
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

Aufgrund der [Pfadfilterung](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) wird ein Pull Request, der nur eine Datei im Stammverzeichnis des Repositorys ändert, diesen Workflow nicht auslösen und für das Mergen blockiert. Der folgende Status wird für den Pull Request angezeigt:

![Erforderliche Überprüfung übersprungen, aber Status ist „Ausstehend“](/assets/images/help/repository/PR-required-check-skipped.png)

Du kannst dieses Problem beheben, indem du einen generischen Workflow mit demselben Namen erstellst, der in jedem Fall, der dem folgenden Workflow ähnelt, TRUE zurückgibt:

```yaml
name: ci
on:
  pull_request:
    paths-ignore:
      - 'scripts/**'
      - 'middleware/**'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: 'echo "No build required"'
```
Jetzt werden die Überprüfungen immer übergeben, wenn jemand einen Pull Request sendet, der die im ersten Workflow aufgeführten `paths`-Dateien nicht ändert.

![Überprüfungen übersprungen, jedoch aufgrund des generischen Workflows übergeben](/assets/images/help/repository/PR-required-check-passed-using-generic.png)

{% note %}

**Hinweise:**
* Stelle sicher, dass der Schlüssel `name` und der erforderliche Auftragsname in beiden Workflowdateien identisch sind. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions).
* Im obigen Beispiel wird {% data variables.product.prodname_actions %} verwendet, diese Problemumgehung gilt jedoch auch für andere CI/CD-Anbieter, die mit {% data variables.product.company_short %} integriert sind.

{% endnote %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## Erforderliche Statusüberprüfungen aus unerwarteten Quellen

Es ist auch möglich, dass ein geschützter Branch eine Statusüberprüfung aus einer bestimmten {% data variables.product.prodname_github_app %} erfordert. Wenn eine Meldung wie die folgende angezeigt wird, solltest du überprüfen, ob die im Merge-Feld aufgeführte Überprüfung von der erwarteten App festgelegt wurde.

```
Required status check "build" was not set by the expected {% data variables.product.prodname_github_app %}.
```
{% endif %}
