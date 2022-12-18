---
title: Migrieren von GitLab CI/CD zu GitHub Actions
intro: '{% data variables.product.prodname_actions %} und GitLab-CI/CD-Vorgänge weisen deutliche Ähnlichkeiten hinsichtlich der Konfiguration auf, was die Migration zu {% data variables.product.prodname_actions %} relativ einfach macht.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-gitlab-cicd-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - GitLab
  - Migration
  - CI
  - CD
shortTitle: Migrate from GitLab CI/CD
ms.openlocfilehash: d0d5f2cae928f95b1a614826f270342f376db0de
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146178983'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Sowohl GitLab CI/CD als auch {% data variables.product.prodname_actions %} erlauben es Ihnen, Workflows zu erstellen, mit denen Code automatisch erstellt, getestet, veröffentlicht, freigegeben und bereitgestellt wird. GitLab CI/CD und {% data variables.product.prodname_actions %} haben einige Ähnlichkeiten in der Workflow-Konfiguration:

- Workflow-Konfigurationsdateien werden in YAML geschrieben und im Code-Repository gespeichert.
- Workflows umfassen einen oder mehrere Jobs.
- Jobs beinhalten einen oder mehrere Schritte oder einzelne Befehle.
- Aufträge können entweder auf verwalteten oder auf selbstgehosteten Computern ausgeführt werden.

Es gibt einige Unterschiede, und in diesem Leitfaden kannst du dich mit den wichtigsten Unterschieden vertraut machen, damit du deinen Workflow zu {% data variables.product.prodname_actions %} migrieren kannst.

## Aufträge

Aufträge in GitLab CI/CD sind Aufträgen in {% data variables.product.prodname_actions %} sehr ähnlich. In beiden Systemen haben Jobs folgende Merkmale:

* Aufträge enthalten eine Reihe von Schritten oder Skripts, die sequenziell ausgeführt werden.
* Aufträge können auf separaten Computern oder in separaten Containern ausgeführt werden.
* Jobs werden standardmäßig parallel ausgeführt, können aber so konfiguriert werden, dass sie sequentiell laufen.

Du kannst ein Skript oder einen Shellbefehl in einem Auftrag ausführen. In GitLab CI/CD werden Skriptschritte mithilfe des Schlüssels `script` angegeben. In {% data variables.product.prodname_actions %} sind alle Skripts mit dem Schlüssel `run` spezifiziert.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
job1:
  variables:
    GIT_CHECKOUT: "true"
  script:
    - echo "Run your script here"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  job1:
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: echo "Run your script here"
```

</td>
</tr>
</table>

## Runner

Runner sind Computer, auf denen die Aufträge ausgeführt werden. Sowohl GitLab CI/CD als auch {% data variables.product.prodname_actions %} bieten verwaltete und selbstgehostete Varianten von Runnern an. In GitLab CI/CD werden `tags` dazu verwendet, Aufträge auf verschiedenen Plattformen auszuführen, während sie in {% data variables.product.prodname_actions %} mit dem Schlüssel `runs-on` ausgeführt werden.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job: tags:
    - linux script:
    - echo "Hello, $USER!"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
windows_job:
  runs-on: windows-latest
  steps:
    - run: echo Hello, %USERNAME%!

linux_job:
  runs-on: ubuntu-latest
  steps:
    - run: echo "Hello, $USER!"
```
{% endraw %}
</td>
</tr>
</table>

Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idruns-on).

## Docker-Images

Sowohl GitLab CI/CD als auch {% data variables.product.prodname_actions %} unterstützen die Ausführung von Aufträgen in einem Docker-Image. In GitLab CI/CD werden Docker-Images mit einem `image`-Schlüssel definiert, während sie in {% data variables.product.prodname_actions %} mit dem Schlüssel `container` definiert werden.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
my_job:
  image: node:10.16-jessie
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```
{% endraw %}
</td>
</tr>
</table>

Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer).

## Bedingungs- und Ausdruckssyntax

In GitLab CI/CD wird anhand von `rules` festgestellt, ob ein Auftrag für eine bestimmte Bedingung ausgeführt wird. Von {% data variables.product.prodname_actions %} wird mithilfe des Schlüsselworts `if` sichergestellt, dass ein Auftrag nur dann ausgeführt wird, wenn eine Bedingung erfüllt wird.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
deploy_prod:
  stage: deploy
  script:
    - echo "Deploy to production server"
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  deploy_prod:
    if: contains( github.ref, 'master')
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploy to production server"
```
{% endraw %}
</td>
</tr>
</table>

Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

## Abhängigkeiten zwischen Jobs

Sowohl mit GitLab CI/CD als auch mit {% data variables.product.prodname_actions %} kannst du Abhängigkeiten für einen Job festlegen. In beiden Systemen werden Aufträge standardmäßig parallel ausgeführt, aber Auftragsabhängigkeiten in {% data variables.product.prodname_actions %} können explizit mit dem Schlüssel `needs` angegeben werden. In GitLab CI/CD existiert auch ein Konzept von `stages`. Hier werden Aufträge in einer Phase gleichzeitig ausgeführt, aber die nächste Phase beginnt erst dann, wenn alle Aufträge aus der vorherigen Phase abgeschlossen sind. Dieses Szenario kannst du in {% data variables.product.prodname_actions %} mit dem Schlüssel `needs` nachbilden.

Nachfolgend ein Beispiel für die Syntax in jedem System. Die Workflows beginnen mit zwei Aufträgen namens `build_a` und `build_b`, die parallel ausgeführt werden. Nach Abschluss dieser Aufträge wird ein weiterer Auftrag ausgeführt, der mit der Bezeichnung `test_ab` benannt ist. Schließlich wird, nach Abschluss von `test_ab`, der Auftrag `deploy_ab` ausgeführt.

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
stages:
  - build
  - test
  - deploy

build_a: stage: build script:
    - echo "This job will run first."

build_b: stage: build script:
    - echo "This job will run first, in parallel with build_a."

test_ab: stage: test script:
    - echo "This job will run after build_a and build_b have finished."

deploy_ab: stage: deploy script:
    - echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build_a:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."

  build_b:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first, in parallel with build_a"

  test_ab:
    runs-on: ubuntu-latest
    needs: [build_a,build_b]
    steps:
      - run: echo "This job will run after build_a and build_b have finished"

  deploy_ab:
    runs-on: ubuntu-latest
    needs: [test_ab]
    steps:
      - run: echo "This job will run after test_ab is complete"
```
{% endraw %}
</td>
</tr>
</table>

Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds).

## Planen von Workflows

Sowohl GitLab CI/CD als auch {% data variables.product.prodname_actions %} ermöglichen es Ihnen, Workflows in einem bestimmten Intervall auszuführen. In GitLab CI/CD werden Pipelinepläne mit der Benutzeroberfläche konfiguriert, während du in {% data variables.product.prodname_actions %} einen Workflow in einem geplanten Intervall mit dem Schlüssel „on“ auslösen kannst.

Weitere Informationen findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows#scheduled-events).

## Variablen und Geheimnisse

GitLab CI/CD und {% data variables.product.prodname_actions %} unterstützen das Festlegen von Umgebungsvariablen in der Pipeline- oder Workflowkonfigurationsdatei und das Erstellen von Geheimnissen mithilfe der Benutzeroberfläche von GitLab oder {% data variables.product.product_name %}.

Weitere Informationen findest du unter [Umgebungsvariablen](/actions/reference/environment-variables) und [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets).

## Zwischenspeicherung

GitLab CI/CD und {% data variables.product.prodname_actions %} stellen in der Konfigurationsdatei eine Methode zum manuellen Zwischenspeichern von Workflowdateien bereit.

{% ifversion actions-caching %}

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
image: node:latest

cache: key: $CI_COMMIT_REF_SLUG paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async: script:
    - node ./specs/start.js ./specs/async.spec.js
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  test_async:
    runs-on: ubuntu-latest
    steps:
    - name: Cache node modules
      uses: {% data reusables.actions.action-cache %}
      with:
        path: ~/.npm
        key: {% raw %}v1-npm-deps-${{ hashFiles('**/package-lock.json') }}{% endraw %}
        restore-keys: v1-npm-deps-
```

</td>
</tr>
</table>

{% else %}

{% data reusables.actions.caching-availability %}

{% endif %}

## Artifacts

Sowohl von GitLab CI/CD als auch von {% data variables.product.prodname_actions %} können Dateien und Verzeichnisse hochgeladen werden, die von einem Auftrag als Artefakte erstellt wurden. In {% data variables.product.prodname_actions %} können Artefakte dazu verwendet werden, Daten über mehrere Aufträge hinweg beizubehalten.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table>
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
script:
artifacts:
  paths:
    - math-homework.txt
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- name: Upload math result for job 1
  uses: {% data reusables.actions.action-upload-artifact %}
  with:
    name: homework
    path: math-homework.txt
```

</td>
</tr>
</table>

Weitere Informationen findest du unter [Speichern von Workflowdaten als Artefakte](/actions/guides/storing-workflow-data-as-artifacts).

## Datenbanken und Dienstcontainer

Mit beiden Systemen kannst du zusätzliche Container für Datenbanken, Zwischenspeicherung im Cache oder andere Abhängigkeiten einbinden.

In GitLab CI/CD wird ein Container für den Auftrag mit dem Schlüssel `image` angegeben, während von {% data variables.product.prodname_actions %} der Schlüssel `container` verwendet wird. In beiden Systemen werden zusätzliche Dienstcontainer mit dem Schlüssel `services` angegeben.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table class="d-block">
<tr>
<th>
GitLab CI/CD
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
container-job:
  variables:
    POSTGRES_PASSWORD: postgres
    # The hostname used to communicate with the
    # PostgreSQL service container
    POSTGRES_HOST: postgres
    # The default PostgreSQL port
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # Performs a clean installation of all dependencies
    # in the `package.json` file
    - npm ci
    # Runs a script that creates a PostgreSQL client,
    # populates the client with data, and retrieves data
    - node client.js
  tags:
    - docker
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie

    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres

    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}

      # Performs a clean installation of all dependencies
      # in the `package.json` file
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # Runs a script that creates a PostgreSQL client,
        # populates the client with data, and retrieves data
        run: node client.js
        env:
          # The hostname used to communicate with the
          # PostgreSQL service container
          POSTGRES_HOST: postgres
          # The default PostgreSQL port
          POSTGRES_PORT: 5432
```

</td>
</tr>
</table>

Weitere Informationen findest du unter [Informationen zu Dienstcontainern](/actions/guides/about-service-containers).
