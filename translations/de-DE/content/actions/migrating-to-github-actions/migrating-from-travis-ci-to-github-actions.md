---
title: Migrieren von Travis CI zu GitHub Actions
intro: "{% data variables.product.prodname_actions %} und Travis\_CI haben mehrere Ähnlichkeiten, was die Migration zu {% data variables.product.prodname_actions %} relativ einfach macht."
redirect_from:
  - /actions/learn-github-actions/migrating-from-travis-ci-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Travis CI
  - Migration
  - CI
  - CD
shortTitle: Migrate from Travis CI
ms.openlocfilehash: 00da8dc259ef4de197faffd8db654dd536c1c237
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178991'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Diese Anleitung unterstützt dich bei der Migration von Travis CI zu {% data variables.product.prodname_actions %}. Sie vergleicht die jeweiligen Konzepte und die jeweilige Syntax, beschreibt die Ähnlichkeiten und veranschaulicht die unterschiedlichen Ansätze für gängige Aufgaben.

## Vorbereitung

Vor Beginn der Migration zu {% data variables.product.prodname_actions %} ist es hilfreich, sich mit deren Funktionsweise vertraut zu machen:

- Ein kurzes Beispiel, das einen {% data variables.product.prodname_actions %}-Auftrag veranschaulicht, findest du im [Schnellstart für {% data variables.product.prodname_actions %}](/actions/quickstart).
- Informationen zu den wesentlichen {% data variables.product.prodname_actions %}-Konzepten findest du in der [Einführung in GitHub Actions](/actions/learn-github-actions/introduction-to-github-actions).

## Vergleichen der Auftragsausführung

Damit du steuern kannst, wann CI-Aufgaben ausgeführt werden, verwendet ein {% data variables.product.prodname_actions %}-_Workflow_ _Aufträge_, die standardmäßig parallel ausgeführt werden. Jeder Auftrag enthält _Schritte_, die in einer festgelegten Abfolge ausgeführt werden. Wenn du Setup- und Bereinigungsaktionen für einen Auftrag ausführen musst, kannst du dafür Schritte im jeweiligen Auftrag definieren.

## Wichtige Ähnlichkeiten

{% data variables.product.prodname_actions %} und Travis CI weisen bestimmte gemeinsame Ähnlichkeiten auf, deren Verständnis im Voraus helfen kann, den Migrationsprozess reibungslos zu gestalten.

### Verwenden der YAML-Syntax

Travis CI und {% data variables.product.prodname_actions %} verwenden YAML zum Erstellen von Aufträgen und Workflows. Diese Dateien werden im Code-Repository gespeichert. Weitere Informationen zur Verwendung von YAML in {% data variables.product.prodname_actions %} findest du unter [Erstellen einer Workflow-Datei](/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow).

### Benutzerdefinierte Umgebungsvariablen

Mit Travis CI kannst du Umgebungsvariablen festlegen und phasenübergreifend verwenden. Ebenso bietet {% data variables.product.prodname_actions %} die Möglichkeit, Umgebungsvariablen für einen Schritt, einen Auftrag oder einen Workflow zu definieren. Weitere Informationen findest du unter [Umgebungsvariablen](/actions/reference/environment-variables).

### Standardumgebungsvariablen

Travis CI und {% data variables.product.prodname_actions %} enthalten Standardumgebungsvariablen, die du in YAML-Dateien verwenden kannst. Für {% data variables.product.prodname_actions %} sind diese in [Standardumgebungsvariablen](/actions/reference/environment-variables#default-environment-variables) aufgelistet.

### Parallele Verarbeitungvon Jobs

Travis CI kann `stages` verwenden, um Aufträge parallel auszuführen. Genauso führt {% data variables.product.prodname_actions %} `jobs` parallel aus. Weitere Informationen findest du unter [Erstellen abhängiger Aufträge](/actions/learn-github-actions/managing-complex-workflows#creating-dependent-jobs).

### Statusbadges

Travis CI und {% data variables.product.prodname_actions %} unterstützen Statusbadges, mit denen du angeben kannst, ob ein Build erfolgreich durchgeführt wurde oder fehlgeschlagen ist.
Weitere Informationen findest du unter [Hinzufügen eines Workflowstatusbadge zum Repository](/actions/managing-workflow-runs/adding-a-workflow-status-badge).

### Verwenden einer Matrix

Travis CI und {% data variables.product.prodname_actions %} unterstützen eine Matrix, damit du Tests mit mehreren Kombinationen von Betriebssystemen und Softwarepaketen durchführen kannst. Weitere Informationen findest du unter [Verwenden einer Matrix für deine Aufträge](/actions/using-jobs/using-a-matrix-for-your-jobs).

Nachfolgend findest du einen exemplarischen Vergleich für die Syntax in jedem System:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
matrix:
  include:
    - rvm: 2.5
    - rvm: 2.6.3
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  build:
    strategy:
      matrix:
        ruby: [2.5, 2.6.3]
```
{% endraw %}
</td>
</tr>
</table>

### Festlegen von bestimmten Branchen als Ziel

Travis CI um {% data variables.product.prodname_actions %} bieten die Möglichkeit, einen bestimmten Branch als Ziel für CI festzulegen. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore).

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
branches:
  only:
    - main
    - 'mona/octocat'
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
on:
  push:
    branches:
      - main
      - 'mona/octocat'
```
{% endraw %}
</td>
</tr>
</table>

### Auschecken von Untermodulen

Travis CI und {% data variables.product.prodname_actions %} bieten die Möglichkeit, zu steuern, ob Untermodule im Repositoryklon enthalten sind.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
git:
  submodules: false
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
- uses: {% data reusables.actions.action-checkout %}
  with:
    submodules: false
```

</td>
</tr>
</table>

### Verwenden von Umgebungsvariablen in einer Matrix

Travis CI und {% data variables.product.prodname_actions %} können benutzerdefinierte Umgebungsvariablen zu einer Testmatrix hinzufügen, sodass du in einem späteren Schritt auf die Variable verweisen kannst.

In {% data variables.product.prodname_actions %} kannst du den `include`-Schlüssel verwenden, um einer Matrix benutzerdefinierte Umgebungsvariablen hinzuzufügen. {% data reusables.actions.matrix-variable-example %}

## Wichtige Features in {% data variables.product.prodname_actions %}

Berücksichtige beim Migrieren von Travis CI die folgenden wichtigen Features in {% data variables.product.prodname_actions %}:

### Speichern von Geheimnissen

{% data variables.product.prodname_actions %} bietet die Möglichkeit, Geheimnisse zu speichern und in Aufträgen darauf zu verweisen. {% data variables.product.prodname_actions %}-Organisationen können einschränken, welche Repositories auf Organisationsgeheimnisse zugreifen dürfen. Umgebungsschutzregeln können eine manuelle Genehmigung für einen Workflow vorschreiben, um auf Umgebungsgeheimnisse zugreifen zu können. Weitere Informationen findest du unter [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets).

### Gemeinsame Verwendung von Dateien in Aufträgen und Workflows

{% data variables.product.prodname_actions %} umfasst eine integrierte Unterstützung für die Speicherung von Artefakten, sodass du Dateien in den Aufträgen eines Workflows gemeinsam verwenden kannst. Du kannst die resultierenden Dateien auch speichern und für andere Workflows verwenden. Weitere Informationen findest du unter [Freigeben von Daten zwischen Aufträgen](/actions/learn-github-actions/essential-features-of-github-actions#sharing-data-between-jobs).

### Deinen eigenen Runner hosten

Wenn für Aufträge bestimmte Hardware oder Software erforderlich ist, bietet {% data variables.product.prodname_actions %} die Möglichkeit, einen eigenen Runner zu hosten, an den die Aufträge zur Verarbeitung gesendet werden. {% data variables.product.prodname_actions %} bietet auch die Möglichkeit, über Richtlinien zu steuern, wie der Zugriff auf diese Runner erfolgt und wie Zugriff auf Organisations- oder Repositoryebene gewährt wird. Weitere Informationen findest du unter [Hosten eigener Runner](/actions/hosting-your-own-runners).

{% ifversion fpt or ghec %}

### Gleichzeitige Aufträge und Ausführungszeit

Die gleichzeitigen Aufträge und Workflowausführungszeiten in {% data variables.product.prodname_actions %} können je nach {% data variables.product.company_short %}-Plan variieren. Weitere Informationen findest du unter [Nutzungseinschränkung, Abrechnung und Verwaltung](/actions/reference/usage-limits-billing-and-administration).

{% endif %}

### Verwenden verschiedener Sprachen in {% data variables.product.prodname_actions %}

Bei Verwendung verschiedener Sprachen in {% data variables.product.prodname_actions %} kannst du einen Schritt im Auftrag erstellen, um Sprachabhängigkeiten einzurichten. Weitere Informationen zur Verwendung einer bestimmten Sprache findest du in der betreffenden Anleitung:
  - [Erstellen und Testen eines Node.js-Projekts](/actions/guides/building-and-testing-nodejs)
  - [Erstellen und Testen eines Python-Projekts](/actions/guides/building-and-testing-python)
  - [Erstellen und Testen eines PowerShell-Projekts](/actions/guides/building-and-testing-powershell)
  - [Erstellen und Testen von Java mit Maven](/actions/guides/building-and-testing-java-with-maven)
  - [Erstellen und Testen von Java mit Gradle](/actions/guides/building-and-testing-java-with-gradle)
  - [Erstellen und Testen von Java mit Ant](/actions/guides/building-and-testing-java-with-ant)

## Ausführung von Skripts

{% data variables.product.prodname_actions %} kann `run`-Schritte zum Ausführen von Skripts oder Shellbefehlen verwenden. Um eine bestimmte Shell zu verwenden, kannst du den `shell`-Typ angeben, wenn der Pfad zum Skript angegeben wird. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun).

Zum Beispiel:

```yaml
steps:
  - name: Run build script
    run: ./.github/scripts/build.sh
    shell: bash
```

## Fehlerbehandlung in {% data variables.product.prodname_actions %}

Bei der Migration zu {% data variables.product.prodname_actions %} gibt es verschiedene Ansätze für die Fehlerbehandlung, die du kennen solltest.

### Fehlerbehandlung für Skripts

{% data variables.product.prodname_actions %} beendet einen Auftrag sofort, wenn einer der Schritte einen Fehlercode zurückgibt. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference).

### Fehlerbehandlung für Aufträge

{% data variables.product.prodname_actions %} verwendet `if`-Bedingungen für die situationsabhängige Ausführung von Aufträgen oder Schritten. Du kannst beispielsweise einen Schritt ausführen, wenn ein anderer Schritt zu einem Fehler (`failure()`) führt. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#example-using-status-check-functions).  Du kannst auch [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) verwenden, um zu verhindern, dass eine Workflowausführung beendet wird, wenn ein Auftrag fehlschlägt.

## Migrieren der Syntax für Bedingungen und Ausdrücke

Um Aufträge mit Bedingungsausdrücken auszuführen, verwenden Travis CI und {% data variables.product.prodname_actions %} eine ähnliche `if`-Bedingungssyntax. {% data variables.product.prodname_actions %} bietet die Möglichkeit, die `if`-Bedingung zu verwenden, damit ein Auftrag oder ein Schritt nur ausgeführt wird, wenn eine bestimmte Bedingung erfüllt ist. Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

In diesem Beispiel wird veranschaulicht, wie eine `if`-Bedingung steuern kann, ob ein Schritt ausgeführt wird:

```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: env.str == 'ABC' && env.num == 123
```

## Migrieren von Phasen in Schritte

Wenn Travis CI _Phasen_ zum Ausführen von _Schritten_ verwendet, umfasst {% data variables.product.prodname_actions %} _Schritte_, die _Aktionen_ ausführen. Du findest vordefinierte Aktionen im [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions), oder du kannst eigene Aktionen erstellen. Weitere Informationen findest du unter [Erstellen von Aktionen](/actions/building-actions).

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: python
python:
  - "3.7"

Skript:
  - python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-setup-python %}
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```

</td>
</tr>
</table>

## Abhängigkeiten „cachen“ (zwischenspeichern)

Travis CI und {% data variables.product.prodname_actions %} bieten die Möglichkeit, Abhängigkeiten manuell zwischenzuspeichern, um sie später wiederzuverwenden.

{% ifversion actions-caching %}

In diesem Beispiel wird die Cachesyntax für die einzelnen Systeme veranschaulicht.

<table>
<tr>
<th>
Travis CI
</th>
<th>
GitHub-Aktionen
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
language: node_js
cache: npm
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">

```yaml
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

## Beispiele für häufige Aufgaben

In diesem Abschnitt wird verglichen, wie {% data variables.product.prodname_actions %} und Travis CI häufige Aufgaben ausführen.

### Konfigurieren von Umgebungsvariablen

Du kannst benutzerdefinierte Umgebungsvariablen in einem {% data variables.product.prodname_actions %}-Auftrag erstellen. Zum Beispiel:

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}-Workflow
</th>
</tr>
<tr>
<td>

```yaml
env:
  - MAVEN_PATH="/usr/local/maven"
```

</td>
<td>

```yaml
jobs:
  maven-build:
    env:
      MAVEN_PATH: '/usr/local/maven'
```

</td>
</tr>
</table>

### Erstellen mit Node.js

<table>
<tr>
<th>
Travis CI
</th>
<th>
{% data variables.product.prodname_actions %}-Workflow
</th>
</tr>
<tr>
<td>
{% raw %}
```yaml
install:
  - npm install
script:
  - npm run build
  - npm test
```
{% endraw %}
</td>
<td>

```yaml
name: Node.js CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Use Node.js
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '12.x'
      - run: npm install
      - run: npm run build
      - run: npm test
```

</td>
</tr>
</table>

## Nächste Schritte

Weitere Informationen zu den Hauptfeatures von {% data variables.product.prodname_actions %} findest du unter [Kennenlernen von {% data variables.product.prodname_actions %}](/actions/learn-github-actions).
