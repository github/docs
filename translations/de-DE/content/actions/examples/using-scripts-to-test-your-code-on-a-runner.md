---
title: Verwenden von Skripts zum Testen deines Codes auf einem Runner
shortTitle: Using scripts to test your code on a runner
intro: 'Verwenden wesentlicher {% data variables.product.prodname_actions %}-Features für Continuous Integration (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: f313a294bc2515564787268112f064b72d339d32
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '146749528'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht über das Beispiel

{% data reusables.actions.example-workflow-intro-ci %} Wenn dieser Workflow ausgelöst wird, wird automatisch ein Skript ausgeführt, das überprüft, ob die {% data variables.product.prodname_dotcom %}-Docs-Website fehlerhafte Links aufweist.

{% data reusables.actions.example-diagram-intro %}

![Übersichtsdiagramm der Workflowschritte](/assets/images/help/images/overview-actions-using-scripts-ci-example.png)

## In diesem Beispiel verwendete Features

{% data reusables.actions.example-table-intro %}

| **Feature**  | **Implementierung** |
| --- | --- | 
{% data reusables.actions.push-table-entry %} {% data reusables.actions.pull-request-table-entry %} {% data reusables.actions.workflow-dispatch-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.concurrency-table-entry %} | Ausführen des Jobs abhängig vom Repository auf verschiedenen Runnern: | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)| {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Verwendung einer Drittanbieteraktion: | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)| | Ausführen eines Skripts auf dem Runner: | Verwenden von `./script/rendered-content-link-checker.mjs` |

## Beispielworkflow

{% data reusables.actions.example-docs-engineering-intro %} [`link-check-all.yml`](https://github.com/github/docs/blob/main/.github/workflows/link-check-all.yml).

{% data reusables.actions.note-understanding-example %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:100%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'

# **What it does**: Renders the content of every page and check all internal links.
# **Why we have it**: To make sure all links connect correctly.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  push:
    branches:
      - main
  pull_request:

permissions:
  contents: read
  # Needed for the 'trilom/file-changes-action' action
  pull-requests: read

# This allows a subsequently queued workflow run to interrupt previous runs
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

jobs:
  check-links:
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    steps:
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}

      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm

      - name: Install
        run: npm ci

      # Creates file "${{ env.HOME }}/files.json", among others
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'

      # For verification
      - name: Show files changed
        run: cat $HOME/files.json

      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json

      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</tr>
</td>
</tbody>
</table>

## Grundlegendes zum Beispiel

{% data reusables.actions.example-explanation-table-intro %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:60%"><b>Code</b></th>
    <th style="width:40%"><b>Erklärung</b></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: 'Link Checker: All English'
```
</td>
<td>

{% data reusables.actions.explanation-name-key %}
</td>
</tr>
<tr>
<td>

```yaml{:copy}
on:
```
</td>
<td>

Mit dem `on`-Schlüsselwort kannst du die bei Ausführung des Workflows ausgelösten Ereignisse definieren. Du kannst hier mehrere Ereignisse definieren. Weitere Informationen findest du unter [Auslösen eines Workflows](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  workflow_dispatch:
```
</td>
<td>

Füge das `workflow_dispatch`-Ereignis hinzu, wenn du diesen Workflow manuell auf der Benutzeroberfläche ausführen möchtest. Weitere Informationen findest du unter [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  push:
    branches:
      - main
```
</td>
<td>

Füge das `push`-Ereignis hinzu, sodass der Workflow jedes Mal automatisch ausgeführt wird, wenn ein Commit an einen Branch mit dem Namen `main` gepusht wird. Weitere Informationen findest du unter [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  pull_request:
```
</td>
<td>

Füge das `pull_request`-Ereignis hinzu, sodass der Workflow jedes Mal automatisch ausgeführt wird, wenn ein Pull Request erstellt oder aktualisiert wird. Weitere Informationen findest du unter [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  pull-requests: read
```
</td>
<td>

Ändert die für `GITHUB_TOKEN` gewährten Standardberechtigungen. Dies variiert je nach den Anforderungen deines Workflows. Weitere Informationen findest du unter [Zuweisen von Berechtigungen zu Aufträgen](/actions/using-jobs/assigning-permissions-to-jobs).
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
concurrency:
  group: '${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'
```
{% endraw %}
</td>
<td>

Erstellt eine Parallelitätsgruppe für bestimmte Ereignisse und verwendet den `||`-Operator zum Definieren von Fallbackwerten. Weitere Informationen findest du unter [Verwenden von Parallelität](/actions/using-jobs/using-concurrency).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  cancel-in-progress: true
```
</td>
<td>

Bricht alle derzeit ausgeführten Aufträge oder Workflows in derselben Parallelitätsgruppe ab.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
jobs:
```
</td>
<td>

Gruppiert alle in der Workflowdatei ausgeführten Aufträge.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
  check-links:
```
</td>
<td>

Definiert einen Auftrag mit der ID `check-links`, die innerhalb des `jobs`-Schlüssels gespeichert ist.
</td>
</tr>
<tr>
<td>

{% raw %}
```yaml{:copy}
    runs-on: ${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}
```
{% endraw %}
</td>
<td>

Konfiguriert den Auftrag abhängig von dem Repository, das den Workflow ausführt, zur Ausführung auf einem von {% data variables.product.prodname_dotcom %} gehosteten oder selbstgehosteten Runner. In diesem Beispiel wird der Auftrag auf einem selbstgehosteten Runner ausgeführt, wenn das Repository mit `docs-internal` benannt ist und sich innerhalb der `github`-Organisation befindet. Wenn das Repository nicht mit diesem Pfad übereinstimmt, wird er auf einem von {% data variables.product.prodname_dotcom %} gehosteten `ubuntu-latest`-Runner ausgeführt. Weitere Informationen zu diesen Optionen findest du unter [Auswählen des Runners für einen Auftrag](/actions/using-jobs/choosing-the-runner-for-a-job).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Gruppiert alle Schritte, die als Teil des `check-links`-Auftrags ausgeführt werden. Jeder Auftrag in einem Workflow verfügt über einen eigenen `steps`-Abschnitt.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}
```
</td>
<td>

Das `uses`-Schlüsselwort weist den Auftrag an, die Aktion mit dem Namen `actions/checkout` abzurufen. Mit dieser Aktion wird dein Repository ausgecheckt und in den Runner heruntergeladen. Dadurch kannst du Aktionen für deinen Code ausführen (z. B. Testtools). Du musst die Auscheckaktion jedes Mal verwenden, wenn dein Workflow mit dem Code des Repositorys ausgeführt wird, oder du eine im Repository definierte Aktion verwendest.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
```
</td>
<td>

In diesem Schritt wird mit der `actions/setup-node`-Aktion die angegebene Version des Node.js-Softwarepakets auf dem Runner installiert. Dadurch erhältst du Zugriff auf den `npm`-Befehl.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Install
        run: npm ci
```
</td>
<td>

Mit dem `run`-Schlüsselwort wird der Auftrag angewiesen, einen Befehl im Runner auszuführen. In diesem Fall werden mit `npm ci` die npm-Softwarepakete für das Projekt installiert.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'
```
</td>
<td>

Sammelt mit der `trilom/file-changes-action`-Aktion alle geänderten Dateien. Dieses Beispiel wird mit `a6ca26c14274c33b15e6499323aac178af06ad4b`-SHA einer bestimmten Version der Aktion angeheftet.
</td>
</tr>

<tr>
<td>

```yaml{:copy}
      - name: Show files changed
        run: cat $HOME/files.json
```
</td>
<td>

Listet den Inhalt von `files.json` auf. Dies ist im Protokoll der Workflowausführung sichtbar und kann für das Debuggen nützlich sein.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json
```
</td>
<td>

In diesem Schritt wird mit dem `run`-Befehl ein Skript ausgeführt, das im Repository unter `script/rendered-content-link-checker.mjs` gespeichert ist, und alle zur Ausführung erforderlichen Parameter werden übergeben.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```
</td>
<td>

In diesem Schritt wird auch mit dem `run`-Befehl ein Skript ausgeführt, das im Repository unter `script/rendered-content-link-checker.mjs` gespeichert ist, und ein anderer Satz von Parametern übergeben.
</tr>

</tbody>
</table>

## Nächste Schritte

{% data reusables.actions.learning-actions %}
