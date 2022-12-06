---
title: Verwenden der GitHub CLI auf einem Runner
shortTitle: Use the GitHub CLI on a runner
intro: 'Verwenden erweiterter {% data variables.product.prodname_actions %}-Features für Continuous Integration (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: e0787d09cd194de0038d259c1aff777cc91a4a6a
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111585'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht über das Beispiel

{% data reusables.actions.example-workflow-intro-ci %} Wenn dieser Workflow ausgelöst wird, wird automatisch ein Skript ausgeführt, das überprüft, ob die {% data variables.product.prodname_dotcom %}-Docs-Website fehlerhafte Links aufweist. Wenn fehlerhafte Links gefunden werden, verwendet der Workflow die {% data variables.product.prodname_dotcom %} CLI, um ein {% data variables.product.prodname_dotcom %}-Issue mit den Details zu erstellen.

{% data reusables.actions.example-diagram-intro %}

![Übersichtsdiagramm der Workflowschritte](/assets/images/help/images/overview-actions-using-cli-ci-example.png)

## In diesem Beispiel verwendete Features

{% data reusables.actions.example-table-intro %}

| **Feature**  | **Implementierung** |
| --- | --- |
{% data reusables.actions.cron-table-entry %} {% data reusables.actions.permissions-table-entry %} {% data reusables.actions.if-conditions-table-entry %} {% data reusables.actions.secrets-table-entry %} {% data reusables.actions.checkout-action-table-entry %} {% data reusables.actions.setup-node-table-entry %} | Verwendung einer Drittanbieteraktion: | [`peter-evans/create-issue-from-file`](https://github.com/peter-evans/create-issue-from-file)| | Ausführen von Shellbefehlen auf dem Runner: | [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) | | Ausführen eines Skripts auf dem Runner: | Verwenden von `script/check-english-links.js` | | Erzeugen einer Ausgabedatei: | Weiterreichen der Ausgabe mit dem `>`-Operator | | Prüfen auf vorhandene Issues mit {% data variables.product.prodname_cli %}: | [`gh issue list`](https://cli.github.com/manual/gh_issue_list) | | Kommentar zu einem Issue mithilfe von {% data variables.product.prodname_cli %}: | [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) |

## Beispielworkflow

{% data reusables.actions.example-docs-engineering-intro %} [`check-all-english-links.yml`](https://github.com/github/docs/blob/6e01c0653836c10d7e092a17566a2c88b10504ce/.github/workflows/check-all-english-links.yml).

{% data reusables.actions.note-understanding-example %}

<table style="table-layout: fixed;">
<thead>
  <tr>
    <th style="width:70%"></th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```yaml{:copy}
name: Check all English links

# **What it does**: This script once a day checks all English links and reports in issues.
# **Why we have it**: We want to know if any links break.
# **Who does it impact**: Docs content.

on:
  workflow_dispatch:
  schedule:
    - cron: '40 19 * * *' # once a day at 19:40 UTC / 11:40 PST

permissions:
  contents: read
  issues: write

jobs:
  check_all_english_links:
    name: Check all links
    if: github.repository == 'github/docs-internal'
    runs-on: ubuntu-latest
    env:
      GITHUB_TOKEN: {% raw %}${{ secrets.DOCUBOT_READORG_REPO_WORKFLOW_SCOPES }}{% endraw %}
      FIRST_RESPONDER_PROJECT: Docs content first responder
      REPORT_AUTHOR: docubot
      REPORT_LABEL: broken link report
      REPORT_REPOSITORY: github/docs-content
    steps:
      - name: Check out repo's default branch
        uses: {% data reusables.actions.action-checkout %}
      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm
      - name: npm ci
        run: npm ci
      - name: npm run build
        run: npm run build
      - name: Run script
        run: |
          script/check-english-links.js > broken_links.md

      # check-english-links.js returns 0 if no links are broken, and 1 if any links
      # are broken. When an Actions step's exit code is 1, the action run's job status
      # is failure and the run ends. The following steps create an issue for the
      # broken link report only if any links are broken, so {% raw %}`if: ${{ failure() }}`{% endraw %}
      # ensures the steps run despite the previous step's failure of the job.

      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "title=$(head -1 broken_links.md)" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
{%- endif %}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Create issue from file
        id: broken-link-report
        uses: peter-evans/create-issue-from-file@b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e
        with:
          token: {% raw %}${{ env.GITHUB_TOKEN }}{% endraw %}

          title: {% raw %}${{ steps.check.outputs.title }}{% endraw %}
          content-filepath: ./broken_links.md
          repository: {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}
          labels: {% raw %}${{ env.REPORT_LABEL }}{% endraw %}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Close and/or comment on old issues
        env:
          {% raw %}NEW_REPORT_URL: 'https://github.com/${{ env.REPORT_REPOSITORY }}/issues/${{ steps.broken-link-report.outputs.issue-number }}'{% endraw %}
        run: |
          gh alias set list-reports "issue list \
                                       --repo {% raw %}${{ env.REPORT_REPOSITORY }} \{% endraw %}
                                       --author {% raw %}${{ env.REPORT_AUTHOR }} \{% endraw %}
                                       --label {% raw %}'${{ env.REPORT_LABEL }}'"{% endraw %}

          # Link to the previous report from the new report that triggered this
          # workflow run.

          previous_report_url=$(gh list-reports \
                                  --state all \
                                  --limit 2 \
                                  --json url \
                                  --jq '.[].url' \
                                  | grep -v {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} | head -1)

          gh issue comment {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} --body "⬅️ [Previous report]($previous_report_url)"

          # If an old report is open and assigned to someone, link to the newer
          # report without closing the old report.

          for issue_url in $(gh list-reports \
                                  --json assignees,url \
                                  --jq '.[] | select (.assignees != []) | .url'); do
            if [ "$issue_url" != {% raw %}"${{ env.NEW_REPORT_URL }}"{% endraw %} ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }}{% endraw %})"
            fi
          done

          # Link to the newer report from any older report that is still open,
          # then close the older report and remove it from the first responder's
          # project board.

          for issue_url in $(gh list-reports \
                                  --search 'no:assignee' \
                                  --json url \
                                  --jq '.[].url'); do
            if [ "$issue_url" != {% raw %}"${{ env.NEW_REPORT_URL }}"{% endraw %} ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }})"{% endraw %}
              gh issue close $issue_url
              gh issue edit $issue_url --remove-project "{% raw %}${{ env.FIRST_RESPONDER_PROJECT }}"{% endraw %}
            fi
          done
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
name: Check all English links
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
  workflow_dispatch:
  schedule:
    - cron: '40 20 * * *' # once a day at 20:40 UTC / 12:40 PST
```
</td>
<td>

Definiert `workflow_dispatch` und `scheduled` als Trigger für den Workflow:

* Mit `workflow_dispatch` kannst du diesen Workflow manuell von der Benutzeroberfläche aus ausführen. Weitere Informationen findest du unter [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
* Mit dem `schedule`-Ereignis kannst du mithilfe der `cron`-Syntax ein reguläres Intervall definieren, um den Workflow automatisch auszulösen. Weitere Informationen findest du unter [`schedule`](/actions/reference/events-that-trigger-workflows#schedule).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
permissions:
  contents: read
  issues: write
```
</td>
<td>

Ändert die für `GITHUB_TOKEN` gewährten Standardberechtigungen. Dies variiert je nach den Anforderungen deines Workflows. Weitere Informationen findest du unter [Zuweisen von Berechtigungen zu Aufträgen](/actions/using-jobs/assigning-permissions-to-jobs).
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
  check_all_english_links:
    name: Check all links
```
</td>
<td>

Definiert einen Auftrag mit der ID `check_all_english_links` und dem Namen `Check all links`, die innerhalb des `jobs`-Schlüssels gespeichert sind.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
if: github.repository == 'github/docs-internal'
```
</td>
<td>

Führe den `check_all_english_links`-Auftrag nur aus, wenn das Repository `docs-internal` heißt und sich innerhalb der Organisation `github` befindet. Andernfalls wird der Auftrag als _übersprungen_ markiert.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
runs-on: ubuntu-latest
```
</td>
<td>

Konfiguriert den Auftrag, der auf einem Ubuntu Linux-Runner ausgeführt werden soll. Dies bedeutet, dass der Auftrag auf einer neuen, von {% data variables.product.prodname_dotcom %} gehosteten VM ausgeführt wird. Syntaxbeispiele mit anderen Runnern findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}.](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on)
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    env:
      GITHUB_TOKEN: {% raw %}${{ secrets.DOCUBOT_READORG_REPO_WORKFLOW_SCOPES }}{% endraw %}
      REPORT_AUTHOR: docubot
      REPORT_LABEL: broken link report
      REPORT_REPOSITORY: github/docs-content
```
</td>
<td>

Erstellt benutzerdefinierte Umgebungsvariablen und definiert die integrierte `GITHUB_TOKEN`-Variable neu, um ein benutzerdefiniertes [Geheimnis](/actions/security-guides/encrypted-secrets) zu verwenden. Auf diese Variablen wird später im Workflow verwiesen.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
    steps:
```
</td>
<td>

Gruppiert alle Schritte, die als Teil des `check_all_english_links`-Auftrags ausgeführt werden. Jeder Auftrag im Workflow verfügt über einen eigenen `steps`-Abschnitt.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Check out repo's default branch
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
      - name: Setup Node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.8.x
          cache: npm
```
</td>
<td>

In diesem Schritt wird mit der `actions/setup-node`-Aktion die angegebene Version des `node`-Softwarepakets auf dem Runner installiert. Dadurch erhältst du Zugriff auf den `npm`-Befehl.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run the "npm ci" command
        run: npm ci
      - name: Run the "npm run build" command
        run: npm run build
```
</td>
<td>

Mit dem `run`-Schlüsselwort wird der Auftrag angewiesen, einen Befehl im Runner auszuführen. In diesem Fall werden die Befehle `npm ci` und `npm run build` als separate Schritte zum Installieren und Erstellen der Node.js-Anwendung im Repository ausgeführt.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - name: Run script
        run: |
          script/check-english-links.js > broken_links.md
```
</td>
<td>

Dieser `run`-Befehl führt ein Skript aus, das im Repository unter `script/check-english-links.js` gespeichert ist, und reicht die Ausgabe an eine Datei namens `broken_links.md` weiter.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Get title for issue
        id: check
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "title=$(head -1 broken_links.md)" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=title::$(head -1 broken_links.md)"
{%- endif %}
```
</td>
<td>

Wenn das `check-english-links.js`-Skript fehlerhafte Verknüpfungen erkennt und einen Nicht-Null (0)-Status (Fehler) zurückgibt, lege mit einem [Workflowbefehl](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) eine Ausgabe fest, die den Wert der ersten Zeile der `broken_links.md`-Datei hat (wird im nächsten Schritt verwendet).
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Create issue from file
        id: broken-link-report
        uses: peter-evans/create-issue-from-file@b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e
        with:
          token: {% raw %}${{ env.GITHUB_TOKEN }}{% endraw %}

          title: {% raw %}${{ steps.check.outputs.title }}{% endraw %}
          content-filepath: ./broken_links.md
          repository: {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}
          labels: {% raw %}${{ env.REPORT_LABEL }}{% endraw %}
```
</td>
<td>

Erstellt mit der `peter-evans/create-issue-from-file`-Aktion ein neues {% data variables.product.prodname_dotcom %}-Issue. Dieses Beispiel wird mit `b4f9ee0a9d4abbfc6986601d9b1a4f8f8e74c77e`-SHA einer bestimmten Version der Aktion angeheftet.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
      - if: {% raw %}${{ failure() }}{% endraw %}
        name: Close and/or comment on old issues
        env:
          NEW_REPORT_URL: 'https://github.com/{% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %}/issues/{% raw %}${{ steps.broken-link-report.outputs.issue-number }}{% endraw %}'
        run: |
          gh alias set list-reports "issue list \
                                       --repo {% raw %}${{ env.REPORT_REPOSITORY }}{% endraw %} \
                                       --author {% raw %}${{ env.REPORT_AUTHOR }}{% endraw %} \
                                       --label '{% raw %}${{ env.REPORT_LABEL }}{% endraw %}'"
          previous_report_url=$(gh list-reports \
                                  --state all \
                                  --limit 2 \
                                  --json url \
                                  --jq '.[].url' \
                                  | grep -v {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} | head -1)

          gh issue comment {% raw %}${{ env.NEW_REPORT_URL }}{% endraw %} --body "⬅️ [Previous report]($previous_report_url)"
```
</td>
<td>

Sucht mit [`gh issue list`](https://cli.github.com/manual/gh_issue_list) das zuvor erstellte Issue aus früheren Ausführungen. Dies erhält zur einfacheren Verarbeitung in späteren Schritten den [Alias](https://cli.github.com/manual/gh_alias_set) `gh list-reports`. Um die Issue-URL abzurufen, verarbeitet der `jq`-Ausdruck die resultierende JSON-Ausgabe.

Dann wird mit [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) dem neuen Issue ein Kommentar hinzugefügt, der die Verknüpfung mit dem vorherigen herstellt.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
          for issue_url in $(gh list-reports \
                                  --json assignees,url \
                                  --jq '.[] | select (.assignees != []) | .url'); do
            if [ "$issue_url" != "${{ env.NEW_REPORT_URL }}" ]; then
              gh issue comment $issue_url --body "➡️ [Newer report](${{ env.NEW_REPORT_URL }})"
            fi
          done
```
</td>
<td>

Wenn ein Issue aus einer vorherigen Ausführung geöffnet und jemandem zugewiesen ist, füge mit [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) einen Kommentar mit einem Link zum neuen Issue hinzu.
</td>
</tr>
<tr>
<td>

```yaml{:copy}
          for issue_url in $(gh list-reports \
                                  --search 'no:assignee' \
                                  --json url \
                                  --jq '.[].url'); do
            if [ "$issue_url" != "{% raw %}${{ env.NEW_REPORT_URL }}{% endraw %}" ]; then
              gh issue comment $issue_url --body "➡️ [Newer report]({% raw %}${{ env.NEW_REPORT_URL }}{% endraw %})"
              gh issue close $issue_url
              gh issue edit $issue_url --remove-project "{% raw %}${{ env.FIRST_RESPONDER_PROJECT }}{% endraw %}"
            fi
          done
```
</td>
<td>

Wenn ein Issue aus einer vorherigen Ausführung geöffnet und niemandem zugewiesen ist, dann:

* Füge mit [`gh issue comment`](https://cli.github.com/manual/gh_issue_comment) einen Kommentar mit einem Link zum neuen Issue hinzu.
* Schließe das alte Issue mit [`gh issue close`](https://cli.github.com/manual/gh_issue_close).
* Bearbeite das alte Issue mit [`gh issue edit`](https://cli.github.com/manual/gh_issue_edit), um es aus einem bestimmten {% data variables.product.prodname_dotcom %}-Projektboard zu entfernen.
</td>
</tr>
</tbody>
</table>

## Nächste Schritte

{% data reusables.actions.learning-actions %}
