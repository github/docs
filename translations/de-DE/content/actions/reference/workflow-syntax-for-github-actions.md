---
title: Workflow-Syntax für GitHub Actions
shortTitle: Syntax für Workflows
intro: Ein Workflow ist ein konfigurierbarer automatisierter Prozess, der aus einem oder mehreren Jobs besteht. Du musst eine YAML-Datei erstellen, um Deine Workflow-Konfiguration zu definieren.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Informationen zur YAML-Syntax für Workflows

Workflow-Dateien verwenden die YAML-Syntax und müssen die Dateierweiterung `.yml` oder `.yaml` aufweisen. {% data reusables.actions.learn-more-about-yaml %}

Workflow-Dateien müssen im Verzeichnis `.github/workflows` im Repository gespeichert werden.

### `name`

Name des Workflows. {% data variables.product.prodname_dotcom %} zeigt die Namen Deiner Workflows auf der Aktionen-Seite Deines Repositorys an. Wenn Du `name`weglässt, setzt {% data variables.product.prodname_dotcom %} den Pfad der Workflow-Datei relativ zum Stammverzeichnis des Repositorys.

### `on`

**Required**. The name of the {% data variables.product.prodname_dotcom %} event that triggers the workflow. Sie können einen `string` für ein einzelnes Ereignis, ein `array` mit Ereignissen, ein `array` mit Ereignis-`types` oder eine Ereigniskonfigurations-`map` festlegen, mit der ein Workflow geplant oder die Ausführung eines Workflows auf bestimmte Dateien, Tags oder Branch-Änderungen beschränkt wird. Eine Liste der verfügbaren Ereignisse finden Sie unter „[Ereignisse, die Workflows auslösen](/articles/events-that-trigger-workflows)“.

{% data reusables.github-actions.actions-on-examples %}

### `on.<event_name>.types`

Legt die Aktivitätstypen fest, die die Ausführung eines Workflows auslösen. Die meisten GitHub-Ereignisse werden von mehreren Aktivitätstypen ausgelöst.  Beispielsweise wird das Ereignis für die Veröffentlichungsressource ausgelöst, wenn eine Veröffentlichung veröffentlicht (`published`), erstellt (`created`), bearbeitet (`edited`), gelöscht (`deleted`), vorab veröffentlicht (`prereleased`) oder ihre Veröffentlichung zurückgezogen (`unpublished`) wird. Mit dem Stichwort `types` grenzt Du die Aktivitäten ein, die die Ausführung des Workflows auslösen. Wird ein Webhook-Ereignis nur von einem einzigen Aktivitätstyp ausgelöst, ist das Stichwort `types` nicht erforderlich.

Du kannst ein Array mit Ereignis-`types` benutzen. Weitere Informationen zu den einzelnen Ereignissen und den zugehörigen Aktivitätstypen findest Du unter „[Ereignisse, die Workflows auslösen](/articles/events-that-trigger-workflows#webhook-events)“.

```yaml
# Workflow bei Pull-Request-Aktivität auslösen
on:
  release:
    # Gib das Stichwort "types" nur dann an, wenn die Aktivitätstypen, die den Workflow auslösen, eingegrenzt werden sollen.
    types: [published, created, edited]
```

### `on.<push|pull_request>.<branches|tags>`

Wenn Sie die Ereignisse `push` und `pull_request` verwenden, können Sie einen Workflow so konfigurieren, dass er auf bestimmten Branches oder Tags ausgeführt wird. Für ein `pull_request`-Ereignis werden nur Branches und Tags auf der Basis ausgewertet. Wenn Du nur `tags` oder nur `branches` definierst, wird der Workflow bei Ereignissen, die sich auf die nicht definierte Git-Ref auswirken, nicht ausgeführt.

Die Schlüsselwörter `branches`, `branches-ignore`, `tags` und `tags-ignore` akzeptieren Glob-Muster, bei denen mithilfe der Platzhalterzeichen `*` und `**` mehrere passende Branch- oder Tag-Namen gefunden werden. Weitere Informationen findest Du auf dem „[Spickzettel zu Filtermustern](#filter-pattern-cheat-sheet)“.

#### Beispiel mit Branches und Tags

Die in `branches` und `tags` definierten Muster werden anhand des Namens des Git-Ref ausgewertet. Wenn Du das Muster `mona/octocat` in `branches` definierst, passt beispielsweise die Git-Ref `refs/heads/mona/octocat`. Zu dem Muster `releases/**` passt die Git-Ref `refs/heads/releases/10`.

```yaml
on:
  push:
    # Sequence of patterns matched against refs/heads
    branches:    
      # Push events on main branch
      - main
      # Push events to branches matching refs/heads/mona/octocat
      - 'mona/octocat'
      # Push events to branches matching refs/heads/releases/10
      - 'releases/**'
    # Sequence of patterns matched against refs/tags
    tags:        
      - v1             # Push events to v1 tag
      - v1.*           # Push events to v1.0, v1.1, and v1.9 tags
```

#### Beispiel zum Ignorieren von Branches und Tags

Wenn ein Muster mit dem Muster `branches-ignore` oder `tags-ignore` übereinstimmt, wird der Workflow nicht ausgeführt. Die in `branches-ignore` und `tags-ignore` definierten Muster werden anhand des Namens der Git-Ref ausgewertet. Wenn Du das Muster `mona/octocat` in `branches` definierst, passt beispielsweise die Git-Ref `refs/heads/mona/octocat`. Das Muster `releases/**-alpha` in `branches` passt zu der Git-Ref `refs/releases/beta/3-alpha`.

```yaml
on:
  push:
    # Folge von Mustern zum Abgleich mit refs/heads
    branches-ignore:
      # Push-Ereignisse zu Branches, die zu refs/heads/mona/octocat passen
      - 'mona/octocat'
      # Push-Ereignisse zu Branches, die zu refs/heads/releases/beta/3-alpha passen
      - 'releases/**-alpha'
    # Folge von Mustern zum Abgleich mit refs/tags
    tags-ignore:
      - v1.*           # Push-Ereignisse zu den Tags v1.0, v1.1 und v1.9
```

#### Branches und Tags ausschließen

Es stehen zwei Arten von Filtern zur Verfügung, mit denen Du die Ausführung eines Workflows bei Push-Vorgängen und Pull-Requests an Tags und Branches unterbinden kannst.
- `branches` oder `branches-ignore` - Du kannst die beiden Filter `branches` und `branches-ignore` nicht gleichzeitig für dasselbe Ereignis in einem Workflow verwenden. Mit dem Filter `branches` kannst Du die Branches auf positive Übereinstimmungen filtern und Branches ausschließen. Nutze den Filter `branches-ignore`, wenn Du lediglich Branch-Namen ausschließen musst.
- `tags` oder `tags-ignore` - Du kannst die beiden Filter `tags` und den Filter `tags-ignore` nicht gleichzeitig für dasselbe Ereignis in einem Workflow verwenden. Mit dem Filter `tags` kannst Du die Tags auf positive Übereinstimmungen filtern und Tags ausschließen. Nutze den Filter `branches-ignore`, wenn Du lediglich Tag-Namen ausschließen musst.

#### Beispiel mit positiven und negativen Mustern

Mit dem Zeichen `!` kannst Du `tags` und `branches` ausschließen. Die Reihenfolge, in der Du die Muster definierst, ist entscheidend.
  - Wenn eine Übereinstimmung mit einem negativen Muster (mit vorangestelltem `!`) nach einem positiven Abgleich vorliegt, wird die Git-Ref ausgeschlossen.
  - Ein übereinstimmendes positives Muster nach einem negativen Abgleich schließt die Git-Ref wieder ein.

Der folgende Workflow wird bei Push-Vorgängen an `releases/10` oder `releases/beta/mona` ausgeführt, nicht jedoch bei Push-Vorgängen an `releases/10-alpha` oder `releases/beta/3-alpha`, da das negative Muster `!releases/**-alpha` nach dem positiven Muster steht.

```yaml
on:
  push:
    branches:    
    - 'releases/**'
    - '!releases/**-alpha'
```

### `on.<push|pull_request>.paths`

Bei den Ereignissen `push` und `pull_request` kannst Du einen Workflows zur Ausführung konfigurieren, wenn mindestens eine Datei nicht zu den `paths-ignore` passt oder mindestens eine geänderte Datei zu den konfigurierten `paths` passt. Bei Push-Vorgängen zu Tags werden Pfadfilter nicht ausgewertet.

Unter den Schlüsselwörtern `paths-ignore` und `paths` kannst Du Glob-Muster nutzen, so dass mithilfe der Platzhalterzeichens `*` und `**` mehrere Pfadnamen passen. Weitere Informationen findest Du auf dem „[Spickzettel zu Filtermustern](#filter-pattern-cheat-sheet)“.

#### Beispiel zum Ignorieren von Pfaden

When all the path names match patterns in `paths-ignore`, the workflow will not run. {% data variables.product.prodname_dotcom %} wertet die in `paths-ignore` definierten Muster anhand des Pfadnamens aus. Ein Workflow mit dem nachfolgenden Pfadfilter wird nur bei `push`-Ereignissen ausgeführt, bei denen sich mindestens eine Datei außerhalb des Verzeichnisses `docs` im Root des Repositorys befindet.

```yaml
on:
  push:
    paths-ignore:
    - 'docs/**'
```

#### Beispiel mit eingeschlossenen Pfaden

Wenn mindestens ein Pfad zu einem Muster im Filter `paths` passt, wird der Workflow ausgeführt. Soll bei jedem Push-Vorgang einer JavaScript-Datei ein Build ausgelöst werden, gibst Du ein Muster mit Platzhalterzeichen an.

```yaml
on:
  push:
    paths:
    - '**.js'
```

#### Pfade ausschließen

Pfade können mit zwei Arten von Filtern ausgeschlossen werden. Du kannst nicht beide Filter gleichzeitig für dasselbe Ereignis in einem Workflow nutzen.
- `paths-ignore` - Verwende den Filter `paths-ignore`, wenn Du lediglich Pfadnamen ausschließen musst.
- `paths` - Mit dem Filter `paths` kannst Du die Pfade auf positive Übereinstimmungen filtern und Pfade ausschließen.

#### Beispiel mit positiven und negativen Mustern

Mit dem Zeichen `!` kannst Du `paths` ausschließen. Die Reihenfolge, in der Sie Muster definieren, ist entscheidend:
  - Wenn nach einem positiven Abgleich ein negatives Muster (mit vorangestelltem `!`) passt, wird der Pfad ausgeschlossen.
  - Ein passendes positives Muster nach einem negativen Abgleich schließt den Pfad wieder ein.

Dieses Beispiel wird stets ausgeführt, wenn das `push`-Ereignis eine Datei im Verzeichnis `sub-project` oder in einem Unterverzeichnis davon umfasst, jedoch nur dann, wenn sich die Datei nicht im Verzeichnis `sub-project/docs` befindet. Ein Push-Vorgang, mit dem beispielsweise die Datei `sub-project/index.js` oder `sub-project/src/index.js` geändert wird, löst eine Ausführung des Workflows aus, aber ein Push-Vorgang, mit dem lediglich `sub-project/docs/readme.md` geändert wird, tut dies nicht.

```yaml
on:
  push:
    paths:
    - 'sub-project/**'
    - '!sub-project/docs/**'
```

#### Git-Diff-Vergleiche

{% note %}

**Hinweis:** Wenn der Push-Vorgang mehr als 1.000 Commits umfasst oder wenn {% data variables.product.prodname_dotcom %} die Diff wegen Zeitüberschreitung nicht erzeugt (zu große Diffs), wird der Workflow in jedem Fall ausgeführt.

{% endnote %}

Zur Ermittlung, ob ein Workflow ausgeführt werden soll, wertet der Filter die geänderten Dateien anhand der Liste `paths-ignore` oder `paths` aus. Wurden keine Dateien geändert, wird der Workflow nicht ausgeführt.

{% data variables.product.prodname_dotcom %} erzeugt die Liste der geänderten Dateien mithilfe von „Two-Dot-Diffs“ (Vergleiche mittels 2 Punkt-Syntax „..“) für Push-Vorgänge und „Three-Dot-Diffs“ (Vergleiche mittels 3 Punkt-Syntax „...“) für Pull-Requests:
- **Pull Requests:** Three-Dot-Diffs ziehen den Vergleich zwischen der jüngsten Version des Themen-Branches und jenem Commit, bei welchem der Themen-Branch zuletzt mit dem Basis-Branch synchronisiert wurde.
- **Push-Vorgänge an bestehende Branches:** Eine Two-Dot-Diff vergleicht die Kopf- und Basis-SHAs direkt miteinander.
- **Push-Vorgänge an neue Branches:** Ein Two-Dot-Diff wird mit dem übergeordneten Element des Vorgängers des tiefsten gepushten Commits durchgeführt.

Weitere Informationen findest Du unter „[Informationen zum Vergleich von Branches in Pull-Requests](/articles/about-comparing-branches-in-pull-requests)“.

### `on.schedule`

{% data reusables.repositories.actions-scheduled-workflow-example %}

Weitere Informationen zur Cron-Syntax findest Du unter „[Ereignisse, die Workflows auslösen](/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events)“.

### `env`

A `map` of environment variables that are available to the steps of all jobs in the workflow. You can also set environment variables that are only available to the steps of a single job or to a single step. For more information, see [`jobs.<job_id>.env`](#jobsjob_idenv) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

#### Beispiel

```yaml
env:
  SERVER: production
```

### `defaults`

Eine `map` der Standardeinstellungen, die für alle Jobs im Workflow gelten. Du kannst auch Standardeinstellungen festlegen, die nur für einen Job verfügbar sind. Weitere Informationen findest Du unter [`jobs.<job_id>.defaults`](#jobsjob_iddefaults).

{% data reusables.github-actions.defaults-override %}

### `defaults.run`

Du kannst Standardeinstellungen der Optionen `shell` und `working-directory` (Arbeitsverzeichnis) für alle [`run`](#jobsjob_idstepsrun)-Schritte in einem Workflow angeben. Du kannst auch Standardeinstellungen für `run` festlegen, die nur für einen Job verfügbar sind. Weitere Informationen findest Du unter [`jobs.<job_id>.defaults.run`](#jobsjob_iddefaultsrun). In diesem Schlüsselwort kannst Du keine Kontexte oder Ausdrücke verwenden.

{% data reusables.github-actions.defaults-override %}

#### Beispiel

```yaml
defaults:
  run:
    shell: bash
    working-directory: scripts
```

### `jobs`

Ein Workflow-Lauf besteht aus mindestens einem Job. Die Aufträge werden standardmäßig parallel ausgeführt. Sollen Jobs sequenziell ausgeführt werden, kannst Du mit dem Schlüsselwort `jobs.<job_id>.needs` eine Abhängigkeit von anderen Jobs definieren.

Each job runs in a runner environment specified by `runs-on`.

Innerhalb der Nutzungsbeschränkungen des Workflows kannst Du unbegrenzt viele Jobs ausführen. For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.

Wenn Du den eindeutigen Bezeichner eines Jobs finden musst, der in einem Workflowlauf ausgeführt wird, kannst Du die API von {% data variables.product.prodname_dotcom %} verwenden. For more information, see "[Workflow Jobs](/rest/reference/actions#workflow-jobs)."

### `jobs.<job_id>`

Jedem Auftrag muss eine ID zugewiesen sein. Das Stichwort `job_id` ist ein String, und der Wert umfasst eine Zuordnung der Konfigurationsdaten für den Auftrag. Sie müssen `<job_id>` durch einen eindeutigen String für das `jobs`-Objekt ersetzen. Die `<job_id>` muss mit einem Buchstaben oder einem Unterstrich (`_`) beginnen und darf nur alphanumerische Zeichen, Bindestriche (`-`) und Unterstriche (`_`) enthalten.

#### Beispiel

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```

### `jobs.<job_id>.name`

Name des Auftrags, der auf {% data variables.product.prodname_dotcom %} angezeigt wird.

### `jobs.<job_id>.needs`

Liste mit allen Aufträgen, die erfolgreich abgeschlossen sein müssen, bevor dieser Auftrag ausgeführt wird. Hier ist ein String oder ein Array mit Strings zulässig. If a job fails, all jobs that need it are skipped unless the jobs use a conditional expression that causes the job to continue.

#### Example requiring dependent jobs to be successful

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

In diesem Beispiel muss `job1` erfolgreich abgeschlossen werden, bevor `job2` beginnt, und `job3` wartet ab, bis sowohl `job1` als auch `job2` abgeschlossen sind.

Die Aufträge in diesem Beispiel werden sequenziell ausgeführt:

1. `job1`
2. `job2`
3. `job3`

#### Example not requiring dependent jobs to be successful

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: always()
    needs: [job1, job2]
```

In this example, `job3` uses the `always()` conditional expression so that it always runs after `job1` and `job2` have completed, regardless of whether they were successful. For more information, see "[Context and expression syntax](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)."

### `jobs.<job_id>.runs-on`

**Required**. The type of machine to run the job on. Die Maschine kann entweder ein {% data variables.product.prodname_dotcom %}-gehosteter oder ein selbst-gehosteter Runner sein.

{% if currentVersion == "github-ae@latest" %}
#### {% data variables.actions.hosted_runner %}s

If you use an {% data variables.actions.hosted_runner %}, each job runs in a fresh instance of a virtual environment specified by `runs-on`.

##### Beispiel

```yaml
runs-on: [AE-runner-for-CI]
```

For more information, see "[About {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/about-ae-hosted-runners)."

{% else %}
{% data reusables.actions.enterprise-github-hosted-runners %}

#### {% data variables.product.prodname_dotcom %}-gehostete Runner

Wenn Du einen {% data variables.product.prodname_dotcom %}-gehosteten Runner verwendest, läuft jeder Job in einer frischen Instanz einer virtuellen Umgebung, die mit `runs-on` angegeben wurde.

Verfügbare Arten von {% data variables.product.prodname_dotcom %}-gehostete Runnern sind:

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.macos-runner-preview %}

##### Beispiel

```yaml
Runs-on: ubuntu-latest
```

Weitere Informationen findest Du unter "[Virtuelle Umgebungen für {% data variables.product.prodname_dotcom %}-gehostete Runner](/github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."
{% endif %}

#### Selbst-gehostete Runner

{% data reusables.actions.ae-self-hosted-runners-notice %}

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

##### Beispiel

```yaml
runs-on: [self-hosted, linux]
```

Weitere Informationen findest Du unter „[Informationen zu selbst-gehosteten Runnern](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)“ und „[Selbst-gehostete Runner in einem Workflow verwenden](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)“.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### `jobs.<job_id>.environment`

The environment that the job references. All environment protection rules must pass before a job referencing the environment is sent to a runner. For more information, see "[Environments](/actions/reference/environments)."

You can provide the environment as only the environment `name`, or as an environment object with the `name` and `url`. The URL maps to `environment_url` in the deployments API. For more information about the deployments API, see "[Deployments](/rest/reference/repos#deployments)."

##### Example using a single environment name

```yaml
environment: staging_environment
```

##### Example using environment name and URL

```yaml
environment:
  name: production_environment
  url: https://github.com
```

The URL can be an expression and can use any context except for the `secrets` context. For more information about expressions, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)."

#### Beispiel
{% raw %}
```yaml
environment:
  name: production_environment
  url: ${{ steps.step_name.outputs.url_output }}
```
{% endraw %}
{% endif %}

### `jobs.<job_id>.outputs`

Eine `map` der Ausgaben eines Jobs. Ausgaben eines Jobs stehen allen nachgelagerten Jobs zur Verfügung, die von diesem Job abhängen. Weitere Informationen zur Definition von Abhängigkeiten zwischen Jobs findest Du unter [`Jobs.<job_id>.needs`](#jobsjob_idneeds).

Ausgaben von Jobs sind Zeichenketten und wenn sie Ausdrücke enthalten, werden diese am Ende jedes Jobs auf dem Runner ausgewertet. Ausgaben, die Geheimnisse enthalten, werden auf dem Runnder zensiert und nicht an {% data variables.product.prodname_actions %} gesendet.

Um Jobausgaben in einem abhängigen Job zu verwenden, kannst Du den Kontext `needs` verwenden. Weitere Informationen findest Du unter "[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#needs-context)".

#### Beispiel

{% raw %}
```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # Die Ausgabe eines Schrittes der Ausgabe eines Jobs zuordnen
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
    - id: step1
      run: echo "::set-output name=test::hello"
    - id: step2
      run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
    - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}

### `jobs.<job_id>.env`

Eine `map` mit Umgebungsvariablen, die für alle Schritte im Auftrag verfügbar sind. Darüber hinaus können Sie Umgebungsvariablen für den gesamten Workflow oder für einen einzelnen Schritt festlegen. For more information, see [`env`](#env) and [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

#### Beispiel

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

### `jobs.<job_id>.defaults`

Eine `map` mit Standardeinstellungen, die für alle Schritte im Job gelten. Du kannst auch Standardeinstellungen für den gesamten Workflow festlegen. Weitere Informationen findest Du unter [`Standardwerte`](#defaults).

{% data reusables.github-actions.defaults-override %}

### `jobs.<job_id>.defaults.run`

Standards für `shell` und `working-directory` (Arbeitsverzeichnis) bereitstellen, die für alle `run`-Schritte des Jobs gelten. Kontext und Ausdruck sind in diesem Abschnitt nicht zulässig.

Du kannst Standardeinstellungen der Optionen `shell` und `working-directory` (Arbeitsverzeichnis) für alle [`run`](#jobsjob_idstepsrun)-Schritte in einem Job angeben. Du kannst auch Standardeinstellungen für  `run` für den gesamten Workflow festlegen. Weitere Informationen findest Du unter [`jobs.defaults.run`](#defaultsrun). In diesem Schlüsselwort kannst Du keine Kontexte oder Ausdrücke verwenden.

{% data reusables.github-actions.defaults-override %}

#### Beispiel

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```

### `jobs.<job_id>.if`

Mit der `if`-Bedingung geben Sie an, dass ein Auftrag nur dann ausgeführt werden soll, wenn eine bestimmte Bedingung erfüllt ist. Du kannst eine Bedingung mit jedem unterstützten Kontext und Ausdruck erstellen.

{% data reusables.github-actions.expression-syntax-if %} Weitere Informationen findest Du unter „[Kontext- und Ausdruckssyntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)“.

### `jobs.<job_id>.steps`

Ein Auftrag enthält eine Sequenz von Aufgaben, sogenannten `steps`. Mit Schritten können Befehle oder Einrichtungsaufgaben ausgeführt werden, und außerdem Aktionen, die sich in Ihrem Repository oder in einem öffentlichen Repository befinden oder in einer Docker Registry veröffentlicht sind. Nicht alle Schritte führen eine Aktion aus, doch alle Aktionen werden als Schritt ausgeführt. Jeder Schritt wird in einem eigenen Prozess in der Runner-Umgebung ausgeführt. Er hat Zugriff auf den Arbeitsbereich und das Dateisystem. Da die Schritte jeweils in einem eigenen Prozess ausgeführt werden, werden Änderungen an den Umgebungsvariablen nicht von Schritt zu Schritt beibehalten. {% data variables.product.prodname_dotcom %} umfasst integrierte Schritte zum Einrichten und Ausführen eines Jobs.

Innerhalb der Nutzungsbeschränkungen des Workflows kannst Du unbegrenzt viele Schritte ausführen. For more information, see "[Usage limits and billing](/actions/reference/usage-limits-billing-and-administration)" for {% data variables.product.prodname_dotcom %}-hosted runners and "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" for self-hosted runner usage limits.

#### Beispiel

{% raw %}
```yaml
name: Greeting from Mona

on: push

jobs:
  my-job:
    name: My Job
    runs-on: ubuntu-latest
    steps:
    - name: Print a greeting
      env:
        MY_VAR: Hi there! My name is
        FIRST_NAME: Mona
        MIDDLE_NAME: The
        LAST_NAME: Octocat
      run: |
        echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.
```
{% endraw %}

### `jobs.<job_id>.steps[*].id`

Eindeutige Kennung für den Schritt. Anhand der `id` können Sie in Kontexten auf den Schritt verweisen. Weitere Informationen findest Du unter „[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)“.

### `jobs.<job_id>.steps[*].if`

Mit der Bedingung `if` gibst Du an, dass ein Schritt nur dann ausgeführt werden soll, wenn eine bestimmte Bedingung erfüllt ist. Du kannst eine Bedingung mit jedem unterstützten Kontext und Ausdruck erstellen.

{% data reusables.github-actions.expression-syntax-if %} Weitere Informationen findest Du unter „[Kontext- und Ausdruckssyntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)“.

#### Beispiel für die Verwendung von Kontexten

 Dieser Schritt wird nur ausgeführt, wenn der Ereignistyp ein `pull_request` ist und die Ereignisaktion `unassigned` ist.

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### Beispiel für die Verwendung von Statusprüffunktionen

`my backup step` wird nur dann ausgeführt, wenn der vorherige Schritt eines Auftrags fehlschlägt. Weitere Informationen findest Du unter „[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#job-status-check-functions)“.

```yaml
steps:
  - name: My first step
    uses: monacorp/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

### `jobs.<job_id>.steps[*].name`

Name Deines Schritts, der auf {% data variables.product.prodname_dotcom %} angezeigt wird.

### `jobs.<job_id>.steps[*].uses`

Wählt eine Aktion aus, die als Teil eines Schritts im Auftrag ausgeführt wird. Eine Aktion ist eine wiederverwendbare Code-Einheit. Sie können eine Aktion verwenden, die im selben Repository wie der Workflow, in einem öffentlichen Repository oder in einem [veröffentlichten Docker-Container-Image](https://hub.docker.com/) definiert ist.

Es wird dringend empfohlen, die verwendete Version der Aktion zu nennen (Git-Ref, SHA oder Docker-Tag-Nummer angeben). Wenn Sie keine Version angeben, könnten damit die Workflows gestört werden, oder es wird ein unerwartetes Verhalten hervorgerufen, wenn der Inhaber der Aktion eine Aktualisierung veröffentlicht.
- Am besten in Hinblick auf Stabilität und Sicherheit ist es, die Commit-SHA einer freigegebenen Version einer Aktion zu verwenden.
- Wenn Du Dich auf die Hauptversion der Aktion beziehst, kannst Du kritische Fehlerbehebungen und Sicherheits-Patches erhalten und gleichzeitig die Kompatibilität wahren. Außerdem ist damit sichergestellt, dass der Workflow weiterhin problemlos arbeiteten sollte.
- Using the default branch of an action may be convenient, but if someone releases a new major version with a breaking change, your workflow could break.

Für einige Aktionen sind Eingaben erforderlich, die Du mit dem Schlüsselwort [`with`](#jobsjob_idstepswith) festlegen musst. Die erforderlichen Eingaben finden Sie in der README-Datei der Aktion.

Aktionen sind entweder JavaScript-Dateien oder Docker-Container. Bei Docker-Containern als Aktion mmusst Du den Job in einer Linux-Umgebung ausführen. Weitere Details findest Du unter [`runs-on`](#jobsjob_idruns-on).

#### Beispiel mit versionierten Aktionen

```yaml
steps:    
  # Reference a specific commit
  - uses: actions/setup-node@c46424eee26de4078d34105d3de3cc4992202b1e
  # Reference the major version of a release
  - uses: actions/setup-node@v1
  # Reference a minor version of a release
  - uses: actions/setup-node@v1.2
  # Reference a branch
  - uses: actions/setup-node@main
```

#### Beispiel mit einer öffentlichen Aktion

`{owner}/{repo}@{ref}`

Du kannst einen bestimmten Branch, eine bestimmte Ref oder eine bestimmte SHA in einem öffentlichen Repository auf {% data variables.product.prodname_dotcom %} heranziehen.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # Uses the default branch of a public repository
        uses: actions/heroku@1.0.0
      - name: My second step
        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1
```

#### Beispiel mit einer öffentlichen Aktion in einem Unterverzeichnis

`{owner}/{repo}/{path}@{ref}`

Ein Unterverzeichnis in einem öffentlichen Repository auf {% data variables.product.prodname_dotcom %} in einem bestimmten Branch, einer bestimmten Ref oder einer bestimmten SHA.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### Beispiel mit einer Aktion im selben Repository wie der Workflow

`./path/to/dir`

Der Pfad zum Verzeichnis, in dem sich die Aktion im Workflow-Repository befindet. Du musst Dein Repository auschecken, bevor Du die Aktion verwendest.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### Beispiel mit einer Docker Hub-Aktion

`docker://{image}:{tag}`

Ein Docker-Image, das auf [Docker Hub](https://hub.docker.com/) veröffentlicht ist.

```yaml
jobs:
  my_first_job:
    Schritte:
      - Name: Mein erster Schritt
        verwendet: docker://alpine:3.8
```

{% if currentVersion == "free-pro-team@latest" %}
##### Example using the {% data variables.product.prodname_github_container_registry %}

`docker://{host}/{image}:{tag}`

A Docker image in the {% data variables.product.prodname_github_container_registry %}.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
##### Beispiel mit einer Aktion in einer öffentlichen Docker Registry

`docker://{host}/{image}:{tag}`

Ein Docker-Image in einer öffentlichen Registry. This example uses the Google Container Registry at `gcr.io`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### Example using action inside a different private repository than the workflow

Your workflow must checkout the private repository and reference the action locally.

{% raw %}
```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: actions/checkout@v2
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: ${{ secrets.GITHUB_TOKEN }}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```
{% endraw %}

### `jobs.<job_id>.steps[*].run`

Führt Befehlszeilen-Programme über die Betriebssystem-Shell aus. Wenn Du keinen `name` angibst, wird standardmäßig der im Befehl `run` angegebene Text als Name für den Schritt übernommen.

Befehle greifen standardmäßig auf Shells zurück, für die keine Anmeldung erforderlich ist. Du kannst für die Ausführung von Befehlen eine andere Shell auswählen und die Shell anpassen. Weitere Informationen findest Du unter „[Bestimmte Shell verwenden](#using-a-specific-shell)“.

Jedes Schlüsselwort `run` stellt einen neuen Prozess und eine neue Shell in der Runnerumgebung dar. Wenn Du mehrzeilige Befehle angibst, werden alle Zeilen in derselben Shell ausgeführt. Ein Beispiel:

* Einzeiliger Befehl:

  ```yaml
  - name: Install Dependencies
    run: npm install
  ```

* Mehrzeiliger Befehl:

  ```yaml
  - name: Clean install dependencies and build
    run: |
      npm ci
      npm run build
  ```

Mit dem Schlüsselwort`working-directory` gibst Du das Arbeitsverzeichnis an, in dem der Befehl ausgeführt werden soll.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

#### Bestimmte Shell verwenden

Du kannst die Einstellungen zur Standard-Shell im Betriebssystem des Läufers mit dem Schlüsselwort `shell` überschreiben. Sie können die integrierten `shell`-Stichwörter verwenden oder eine benutzerdefinierte Reihe von Shell-Optionen definieren.

| Unterstützte Plattform | Parameter `shell` | Beschreibung                                                                                                                                                                                                                                                                                               | Intern ausgeführter Befehl                      |
| ---------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| Alle                   | `bash`            | Die standardmäßige Shell für alle Plattformen außer Windows mit einem Fallback zu `sh`. Wenn eine Bash-Shell für Windows angegeben wird, wird die in Git für Windows enthaltene Bash-Shell verwendet.                                                                                                      | `bash --noprofile --norc -eo pipefail {0}`      |
| Alle                   | `pwsh`            | Der PowerShell Core. {% data variables.product.prodname_dotcom %} hängt die Erweiterung `.ps1` an Deinen Skriptnamen an.                                                                                                                                                                                   | `pwsh -command ". '{0}'"`                       |
| Alle                   | `python`          | Führt den Befehl Python aus.                                                                                                                                                                                                                                                                               | `python {0}`                                    |
| Linux / macOS          | `sh`              | Das Fallback-Verhalten für alle Betriebssystem-Plattformen außer Windows, falls keine Shell angegeben ist und `bash` nicht im Pfad gefunden wird.                                                                                                                                                          | `sh -e {0}`                                     |
| Windows                | `cmd`             | {% data variables.product.prodname_dotcom %} hängt die Erweiterung `.cmd` an Deinen Skriptnamen an und ersetzt `{0}`.                                                                                                                                                                                      | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows                | `pwsh`            | Dies ist die standardmäßig für Windows verwendete Shell. Der PowerShell Core. {% data variables.product.prodname_dotcom %} hängt die Erweiterung `.ps1` an Deinen Skriptnamen an. If your self-hosted Windows runner does not have _PowerShell Core_ installed, then _PowerShell Desktop_ is used instead. | `pwsh -command ". '{0}'"`.                      |
| Windows                | `powershell`      | The PowerShell Desktop. {% data variables.product.prodname_dotcom %} hängt die Erweiterung `.ps1` an Deinen Skriptnamen an.                                                                                                                                                                                | `powershell -command ". '{0}'"`.                |

#### Beispiel zur Ausführung eines Skripts mittels Bash

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### Beispiel zur Ausführung eines Skripts mittels `cmd` von Windows

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### Beispiel zur Ausführung eines Skripts mittels PowerShell Core

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### Example: Using PowerShell Desktop to run a script

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### Beispiel zur Ausführung eines Python-Skripts

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### Benutzerdefinierte Shell

Mit `command […options] {0} [..more_options]` können Sie einen Vorlagen-String für den `shell`-Wert festlegen. {% data variables.product.prodname_dotcom %} interpretiert das erste Wort im String, nach dem ein „Whitespace“ (Zwischenraum-Zeichen) steht, als Befehl, und der Dateiname für das temporäre Skript wird in `{0}` eingefügt.

Ein Beispiel:

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

The command used, `perl` in this example, must be installed on the runner.


{% if currentVersion == "github-ae@latest" %}For instructions on how to make sure your {% data variables.actions.hosted_runner %} has the required software installed, see "[Creating custom images](/actions/using-github-hosted-runners/creating-custom-images)."
{% else %}
For information about the software included on GitHub-hosted runners, see "[Specifications for GitHub-hosted runners](/actions/reference/specifications-for-github-hosted-runners#supported-software)."
{% endif %}

#### Exit-Codes und Voreinstellung für Fehleraktionen

Für integrierte Shell-Schlüsselwörter gelten die folgenden Standards, die durch auf {% data variables.product.prodname_dotcom %} gehostete Runner ausgeführt werden. Beachte diese Richtlinien beim Ausführen von Shell-Skripts.

- `bash`/`sh`:
  - Fail-fast behavior using `set -eo pipefail`: Default for `bash` and built-in `shell`. Dies ist außerdem der Standard, wenn Du eine Option für eine Plattform außer Windows angibst.
  - Wenn Du auf Fail-Fast verzichtest und stattdessen die volle Kontrolle übernehmen möchtest, stelle einen Vorlagen-String für die Shell-Optionen bereit. Beispiel: `bash {0}`.
  - sh-ähnliche Shells liefern beim Beenden als ihren eigenen Exit-Code den Exit-Code des letzten Befehls, der im Skript ausgeführt wurde. Dies ist auch das Standardverhalten für Aktionen. Der Runner meldet den Status des Schritts gemäß diesem Exit-Code als Fehler/Erfolg.

- `powershell`/`pwsh`
  - Fail-Fast-Verhalten, soweit möglich. Bei `pwsh` und der integrierten Shell `powershell` setzen wir `$ErrorActionPreference = 'stop'` vor den Inhalt des Skripts.
  - An Powershell-Skripte hängen wir `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` an, sodass der Status der Aktionen den letzten Exit-Code im Skript wiedergibt.
  - Die Benutzer können jederzeit auf die integrierte Shell verzichten und eine benutzerdefinierte Shell-Option angeben, beispielsweise `pwsh -File {0}` oder `powershell -Command "& '{0}'"`, je nach Bedarf.

- `cmd`
  - Wenn Du das Fail-Fast-Verhalten uneingeschränkt nutzen möchtest, hast Du anscheinend keine andere Wahl, als Dein Skript so zu schreiben, dass jeder Fehlercode geprüft und eine entsprechende Reaktion eingeleitet wird. Dieses Verhalten kann nicht standardmäßig bereitgestellt werden; Du musst es explizit in Dein Skript schreiben.
  - `cmd.exe` will exit with the error level of the last program it executed, and it will return the error code to the runner. Dieses Verhalten ist intern mit dem vorherigen Standardverhalten von `sh` und `pwsh` konsistent und ist der Standard für `cmd.exe`, weshalb dieses Verhalten unverändert bleibt.

### `jobs.<job_id>.steps[*].with`

Eine `map` der Eingabeparameter, die in der Aktion definiert sind. Jeder Eingabeparameter ist ein Schlüssel-Wert-Paar. Eingabeparameter werden als Umgebungsvariablen festgelegt. Die Variable erhält das Präfix `INPUT_` und wird in Großbuchstaben umgewandelt.

#### Beispiel

Definiert die drei Eingabeparameter (`first_name`, `middle_name` und `last_name`), die in der Aktion `hello_world` definiert sind. Diese Eingabevariablen sind für die Aktion `hello-world` als Umgebungsvariablen `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME` und `INPUT_LAST_NAME` zugänglich.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/hello_world@main
        with:
          first_name: Mona
          middle_name: The
          last_name: Octocat      
```

### `jobs.<job_id>.steps[*].with.args`

Ein `string`, der die Eingaben für einen Docker-Container definiert. Beim Start des Containers übergibt {% data variables.product.prodname_dotcom %} die `args`-Anweisung an den `ENTRYPOINT` des Containers. Ein `array of strings` wird von diesem Parameter nicht unterstützt.

#### Beispiel

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: monacorp/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

Die `args`-Anweisungen werden anstelle der `CMD`-Anweisung in einem `Dockerfile` verwendet. Falls Sie `CMD` in Ihrem `Dockerfile` verwenden, sollten Sie sich an die nach Präferenz angeordneten Richtlinien halten:

1. Dokumentiere die erforderlichen Argumente in der README der Aktion und lasse sie in der `CMD`-Anweisung weg.
1. Verwenden Sie Standardwerte, die die Verwendung der Aktion ohne Angabe von `args` erlauben.
1. Wenn die Aktion einen Schalter `--help` oder Ähnliches anbietet, verwende diesen als Standard, um eine selbstständige Dokumentation der Aktion herbeizuführen.

### `jobs.<job_id>.steps[*].with.entrypoint`

Überschreibt den Docker-`ENTRYPOINT` im `Dockerfile` oder legt ihn fest, sofern er noch nicht angegeben wurde. Im Gegensatz zur Docker `ENTRYPOINT`-Anweisung, die eine Shell- und eine ausführbare Form aufweist, akzeptiert das Stichwort `entrypoint` nur einen einzigen Schritt, der die entsprechende ausführbare Datei definiert.

#### Beispiel

```yaml
steps:
  - name: Run a custom command
    uses: monacorp/action-name@main
    with:
      entrypoint: /a/different/executable
```

The `entrypoint` keyword is meant to be used with Docker container actions, but you can also use it with JavaScript actions that don't define any inputs.

### `jobs.<job_id>.steps[*].env`

Legt Umgebungsvariablen für Schritte fest, die in der Runner-Umgebung verwendet werden sollen. Darüber hinaus können Sie Umgebungsvariablen für den gesamten Workflow oder für einen Auftrag festlegen. Weitere Informationen finden Sie unter [`env`](#env) und [`jobs.<job_id>.env`](#jobsjob_idenv).

{% data reusables.repositories.actions-env-var-note %}

Die erwarteten Umgebungsvariablen können durch öffentliche Aktionen in der README-Datei angegeben werden. Wenn Du ein Geheimnis in einer Umgebungsvariable festlegst, musst Du dieses Geheimnis mit dem Kontext `secrets` angeben. Weitere Informationen findest Du unter „[Umgebungsvariablen verwenden](/actions/automating-your-workflow-with-github-actions/using-environment-variables)“ und „[Kontext- und Ausdruckssyntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)“.

#### Beispiel

{% raw %}
```yaml
steps:
  - name: My first action
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      FIRST_NAME: Mona
      LAST_NAME: Octocat
```
{% endraw %}

### `jobs.<job_id>.steps[*].continue-on-error`

Verhindert das Fehlschlagen eines Auftrags, wenn ein Schritt fehlschlägt. Leg `true` fest, damit ein Auftrag auch dann erfolgreich abgeschlossen werden kann, wenn dieser Schritt fehlschlägt.

### `jobs.<job_id>.steps[*].timeout-minutes`

Maximaler Zeitraum in Minuten für die Ausführung des Schritts, bevor der Prozess abgebrochen wird.

### `jobs.<job_id>.timeout-minutes`

Die maximale Anzahl von Minuten, die ein Job ausgeführt wird, bevor {% data variables.product.prodname_dotcom %} automatisch abbricht. Standard: 360

### `jobs.<job_id>.strategy`

Mit einer Strategie wird eine Build-Matrix für die Aufträge erstellt. You can define different variations to run each job in.

### `jobs.<job_id>.strategy.matrix`

Du kannst eine Matrix aus verschiedenen Job-Konfigurationen definieren. Mit einer Matrix kannst Du mehrere Jobs erstellen, indem Du in einer einzigen Jobdefinition Variablen substituierst. Zum Beispiel kannst Du eine Matrix verwenden, um Jobs für mehrere unterstützte Versionen einer Programmiersprache, eines Betriebssystems oder eines Tools zu erstellen. Eine Matrix verwendet die Job-Konfiguration mehrfach und erstellt einen Job für jeden Eintrag in der Matrix, die Du konfigurierst.

{% data reusables.github-actions.usage-matrix-limits %}

Jede Option, die Du in der `Matrix` definierst, hat einen Schlüssel und einen Wert. Die Schlüssel, die Du definierst, werden zu Eigenschaften im Kontext `Matrix` und Du kannst diese Eigenschaften in anderen Bereichen Ihrer Workflow-Datei referenzieren. Wenn Du zum Beispiel den Schlüssel `os` definierst, der ein Array von Betriebssystemen enthält, kannst Du die Eigenschaft `matrix.os` als Wert für das Schlüsselwort `runs-on` verwenden, um einen Job für jedes Betriebssystem zu erstellen. Weitere Informationen findest Du unter „[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)“.

Die Reihenfolge, in der Du eine `Matrix` definierst, ist wichtig. Die erste Option, die Du definierst, ist der erste Job, der im Workflow ausgeführt wird.

#### Beispiel für die Ausführung mit mehreren Versionen von Node.js

Zum Erstellen einer Matrix geben Sie ein Array für die Konfigurationsoptionen an. Wenn der Runner beispielsweise die Node.js-Versionen 6, 8 und 10 unterstützt, kannst Du ein Array dieser Versionen in der `matrix` festlegen.

Dieses Beispiel erzeugt eine Matrix von drei Jobs, indem der Schlüssel `node` auf ein Array von drei Node.js-Versionen gesetzt wird. Um die Matrix zu verwenden, setzt das Beispiel die Kontexteigenschaft `matrix.node` als Wert des Eingabeparameters `node-version` der Aktion `setup-node`. Daher werden drei Jobs ausgeführt, die jeweils eine andere Version von Node.js verwenden.

{% raw %}
```yaml
strategy:
  matrix:
    node: [6, 8, 10]
steps:
  # Konfiguriert die auf GitHub-gehosteten Runnern genutzte Node-Version
  - uses: actions/setup-node@v1
    with:
      # Die zu konfigurierenden Version von Node.js
      node-version: ${{ matrix.node }}
```
{% endraw %}

Die Aktion `setup-node` ist das empfohlene Mittel zur Konfiguration einer Node.js-Version, wenn {% data variables.product.prodname_dotcom %}-gehostete Runner verwendet werden. Weitere Informationen findest Du in der Aktion [`setup-node`](https://github.com/actions/setup-node).

#### Beispiel für die Ausführung mit mehreren Betriebssystemen

Du kannst eine Matrix erstellen, um Workflows auf mehreren Runner-Betriebssystemen auszuführen. Du kannst auch mehrere Matrix-Konfigurationen angeben. Dieses Beispiel erstellt eine Matrix von 6 Jobs:

- 2 Betriebssysteme im Array `os` angegeben
- 3 Node.js Versionen im Array `node` angegeben

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [ubuntu-16.04, ubuntu-18.04]
    node: [6, 8, 10]
steps:
  - uses: actions/setup-node@v1
    with:
      node-version: ${{ matrix.node }}
```
{% endraw %}

{% if currentVersion == "github-ae@latest" %}To find supported configuration options for {% data variables.actions.hosted_runner %}s, see "[Software specifications](/actions/using-github-hosted-runners/about-ae-hosted-runners#software-specifications)."
{% else %}To find supported configuration options for {% data variables.product.prodname_dotcom %}-hosted runners, see "[Virtual environments for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners)."
{% endif %}

#### Beispiel mit kombinierten zusätzlichen Werten

Sie können zusätzliche Konfigurationsoptionen hinzufügen, um einen bereits vorhandenen Matrixauftrag zu erstellen. Wenn Du beispielsweise eine bestimmte Version von `npm` verwenden willst, wenn der Auftrag mit `windows-latest` und Version 4 von `node` ausgeführt wird, kannst Du `include` verwenden, um diese zusätzliche Option anzugeben.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [4, 6, 8, 10]
    include:
      # bezieht eine neue Variable npm mit dem Wert 2 ein
      # und zwar fuer das zum Betriebssystem und zur Version passende Matrix-Bein
      - os: windows-latest
        node: 4
        npm: 2
```
{% endraw %}

#### Beispiel zum Einbeziehen neuer Kombinationen

Du kannst `include` verwenden, um neue Jobs zu einer Build-Matrix hinzuzufügen. Alle Include-Konfigurationen, die nicht passen, werden zur Matrix hinzugefügt. Wenn Du beispielsweise `node` Version 12 verwenden willst, um auf mehreren Betriebssystemen zu bauen, aber Du willst einen zusätzlichen experimentellen Job mit Node Version 13 auf Ubuntu, kannst Du `include` verwenden, um diesen zusätzlichen Job anzugeben.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    node: [12]
    os: [macos-latest, windows-latest, ubuntu-18.04]
    include:
      - node: 13
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

#### Beispiel zum Ausschließen von Konfigurationen aus einer Matrix

Mit der Option `exclude` können Sie bestimmte in der Build-Matrix definierte Konfigurationen entfernen. Durch die Verwendung von `exclude` wird ein durch die Build-Matrix definierter Auftrag entfernt. Die Anzahl der Aufträge ist das Kreuzprodukt der Anzahl der Betriebssysteme (`os`), die in den von Ihnen bereitgestellten Arrays enthalten sind, abzüglich etwaiger Subtraktionen (`exclude`).

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
strategy:
  matrix:
    os: [macos-latest, windows-latest, ubuntu-18.04]
    node: [4, 6, 8, 10]
    exclude:
      # Schliesst Node 4 auf macOS aus
      - os: macos-latest
        node: 4
```
{% endraw %}

{% note %}

**Hinweis:** Alle Kombinationen von `include` werden nach `exclude` verarbeitet. So kannst Du zuvor ausgeschlossene Kombinationen mit `include` wieder hinzufügen.

{% endnote %}

##### Using environment variables in a matrix

You can add custom environment variables for each test combination by using the `include` key. You can then refer to the custom environment variables in a later step.

{% data reusables.github-actions.matrix-variable-example %}

### `jobs.<job_id>.strategy.fail-fast`

Wenn diese Option auf `true` gesetzt ist, bricht {% data variables.product.prodname_dotcom %} alle laufenden Jobs ab, sobald ein Job der `matrix` fehlschlägt. Standard: `true`

### `jobs.<job_id>.strategy.max-parallel`

Maximale Anzahl der Aufträge, die gleichzeitig ausgeführt werden können, wenn eine `matrix`-Auftragsstrategie herangezogen wird. Standardmäßig führt {% data variables.product.prodname_dotcom %} so viele Aufträge wie möglich parallel aus, je nach der Anzahl der verfügbaren Runner auf von {% data variables.product.prodname_dotcom %} gehosteten virtuellen Maschinen.

```yaml
strategy:
  max-parallel: 2
```

### `jobs.<job_id>.continue-on-error`

Verhindert, dass ein Workflow scheitert, wenn ein Job scheitert. Setze es auf `true` um einen Workflow-Lauf fortzusetzen, wenn dieser Job scheitert.

#### Beispiel zum Verhindern, dass ein bestimmter scheiternder Job in der Matrix einen Workflow-Lauf scheitern lässt

Du kannst zulassen, dass bestimmte Jobs in einer Jobmatrix scheitert, ohne dass der Workflow-Lauf scheitert. Das gilt beispielsweise, wenn Du nur einem experimentellen Job, bei dem `node` auf `13` gesetzt wurde, das Scheitern erlauben willst, ohne dass dadurch der Workflow-Lauf scheitert.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [11, 12]
    os: [macos-latest, ubuntu-18.04]
    experimental: [false]
    include:
      - node: 13
        os: ubuntu-18.04
        experimental: true
```
{% endraw %}

### `jobs.<job_id>.container`

Container, in dem alle Schritte eines Auftrags ausgeführt werden, für die kein Container explizit angegeben ist. Wenn ein Schritt sowohl Skript- als auch Container-Aktionen umfasst, werden die Container-Aktionen als nebengeordnete Container in demselben Netzwerk mit denselben Volume-Mounts ausgeführt.

Wenn Sie keinen `container` festlegen, werden alle Schritte direkt auf dem Host ausgeführt, der mit `runs-on` angegeben wird, außer wenn ein Schritt auf eine Aktion verweist, die für die Ausführung in einem Container konfiguriert ist.

#### Beispiel

```yaml
jobs:
  my_job:
    container:
      image: node:10.16-jessie
      env:
        NODE_ENV: development
      ports:
        - 80
      volumes:
        - my_docker_volume:/volume_mount
      options: --cpus 1
```

Wenn Sie nur ein Container-Image angeben, können Sie das Stichwort `image` weglassen.

```yaml
jobs:
  my_job:
    container: node:10.16-jessie
```

### `jobs.<job_id>.container.image`

Docker-Image, das beim Ausführen der Aktion als Container herangezogen wird. The value can be the Docker Hub image name or a {% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}public{% endif %} registry name.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

### `jobs.<job_id>.container.credentials`

{% data reusables.actions.registry-credentials %}

#### Beispiel

{% raw %}
```yaml
container:
  image: ghcr.io/owner/image
  credentials:
     username: ${{ github.actor }}
     password: ${{ secrets.ghcr_token }}
```
{% endraw %}
{% endif %}

### `jobs.<job_id>.container.env`

Legt eine `map` mit Umgebungsvariablen im Container fest.

### `jobs.<job_id>.container.ports`

Legt ein `array` mit Ports fest, die im Container offengelegt werden.

### `jobs.<job_id>.container.volumes`

Legt ein `array` mit Volumes für den Container fest. Mithilfe von Volumes können Sie Daten zwischen Diensten oder anderen Schritten in einem Auftrag austauschen. Sie können benannte Docker-Volumes, anonyme Docker-Volumes oder Bind-Mounts auf dem Host angegeben.

Für ein Volume geben Sie den Quell- und Zielpfad an:

`<source>:<destinationPath>`.

`<source>` bezeichnet einen Volume-Namen oder einen absoluten Pfad auf der Hostmaschine und `<destinationPath>` einen absoluten Pfad im Container.

#### Beispiel

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.container.options`

Zusätzliche Optionen für die Docker-Containerressource. Eine Liste der Optionen finden Sie unter „[Optionen für `docker create`](https://docs.docker.com/engine/reference/commandline/create/#options)“.

### `jobs.<job_id>.services`

{% data reusables.github-actions.docker-container-os-support %}

Wird zum Betrieb von Servicecontainern für einen Job in einem Workflow verwendet. Servicecontainer sind nützlich, um Datenbanken oder Cache-Dienste wie Redis zu erstellen. Der Runner erstellt automatisch ein Docker-Netzwerk und verwaltet den Lebenszyklus der Service-Container.

Wenn Du Deinen Job so konfigurieren, dass er in einem Container läuft, oder wenn Dein Schritt Containeraktionen verwendet, brauchst Du keine Ports zuordnen, um auf den Dienst oder die Aktion zuzugreifen. Docker öffnet automatisch alle Ports zwischen Containern im selben benutzerdefinierten Bridge-Netzwerk des Dockers. Du kannst den Servicecontainer direkt mit seinem Hostnamen referenzieren. Der Hostname wird automatisch dem Namen des Labels zugeordnet, den Du für den Dienst im Workflow konfigurierst.

Wenn Du den Job so konfigurierst, dass er direkt auf der Runner-Maschine läuft und Dein Schritt keine Container-Aktion verwendet, musst Du alle erforderlichen Ports des Docker-Servicecontainers dem Docker-Host (der Runner-Maschine) zuordnen. Du kannst auf den Servicecontainer über localhost und den zugeordneten Port zugreifen.

Weitere Informationen über die Unterschiede zwischen Netzwerk-Servicecontainern finden Sie unter „[Informationen zu Servicecontainern](/actions/automating-your-workflow-with-github-actions/about-service-containers)“.

#### Beispiel für die Verwendung von „localhost“

Dieses Beispiel erzeugt zwei Dienste: nginx und redis. Wenn Du den Port des Docker-Hosts angibst, aber nicht den des Containers, dann wird der Container-Port zufällig einem freien Port zugewiesen. {% data variables.product.prodname_dotcom %} setzt den zugewiesenen Containerport im Kontext {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %} . In diesem Beispiel kannst Du über die Kontexte {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} und {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} auf die Ports des Servicecontainers zugreifen.

```yaml
services:
  nginx:
    image: nginx
    # Port 8080 des Docker-Hosts dem Port 80 des nginx-Containers zuordnen
    ports:
      - 8080:80
  redis:
    image: redis
    # TCP-Port 6379 des Docker-Hosts einem freien Port des Redis-Containers zufällig zuordnen
    ports:
      - 6379/tcp
```

### `jobs.<job_id>.services.<service_id>.image`

Docker-Image, das beim Ausführen der Aktion als Dienstcontainer herangezogen wird. The value can be the Docker Hub image name or a {% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}public{% endif %} registry name.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

### `jobs.<job_id>.services.<service_id>.credentials`

{% data reusables.actions.registry-credentials %}

#### Beispiel

{% raw %}
```yaml
services:
  myservice1: 
    image: ghcr.io/owner/myservice1
    credentials:
      username: ${{ github.actor }}
      password: ${{ secrets.ghcr_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```
{% endraw %}
{% endif %}

### `jobs.<job_id>.services.<service_id>.env`

Legt eine `map` mit Umgebungsvariablen im Servicecontainer fest.

### `jobs.<job_id>.services.<service_id>.ports`

Legt ein `array` mit Ports fest, die im Dienstcontainer offengelegt werden.

### `jobs.<job_id>.services.<service_id>.volumes`

Legt ein `array` mit Volumes für den Dienstcontainer fest. Mithilfe von Volumes können Sie Daten zwischen Diensten oder anderen Schritten in einem Auftrag austauschen. Sie können benannte Docker-Volumes, anonyme Docker-Volumes oder Bind-Mounts auf dem Host angegeben.

Für ein Volume geben Sie den Quell- und Zielpfad an:

`<source>:<destinationPath>`.

`<source>` bezeichnet einen Volume-Namen oder einen absoluten Pfad auf der Hostmaschine und `<destinationPath>` einen absoluten Pfad im Container.

#### Beispiel

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

Zusätzliche Optionen für die Docker-Containerressource. Eine Liste der Optionen finden Sie unter „[Optionen für `docker create`](https://docs.docker.com/engine/reference/commandline/create/#options)“.

### Merkzettel zu Filtermustern

Die Pfad-, Branch- und Tag-Filter können bestimmte Sonderzeichen umfassen.

- `*`Steht für kein Zeichen oder mehrere Zeichen, nicht jedoch für den Schrägstrich (`/`). Zum Beispiel passt `Okto*` auf `Oktocat`.
- `**`: Steht für kein Zeichen oder mehrere beliebige Zeichen.
- `?`: Steht für kein Zeichen oder ein einzelnes Zeichen. Zum Beispiel passt `Oktoc?t` auf `Oktocat`.
- `+`: Matches one or more of the preceding character.
- `[]` Steht für irgend ein Zeichen, das in den Klammern aufgelistet ist oder das in einen in den Klammern enthalten Bereich fällt. Mögliche Bereiche sind ausschließlich `a-z`, `A-Z` und `0-9`. For example, the range`[0-9a-z]` matches any digit or lowercase letter. Zum Beispiel passt `[CB]at` sowohl zu `Cat` als auch zu `Bat` und `[1-2]00` passt sowohl zu `100` als auch zu `200`.
- `!`: Am Anfang eines Musters stehend negiert es das Muster in sein Gegenteil. Es hat keine besondere Bedeutung, wenn es nicht das erste Zeichen ist.

Die Zeichen `*`, `[` und `!` sind Sonderzeichen in YAML. Wenn ein Muster mit `*`, `[` oder `!` beginnen soll, schließen Sie das Muster in Anführungszeichen ein.

```yaml
# Gueltig
- '**/README.md'

# Ungueltig - verursacht einen Parserfehler,
# der verhindert, dass der Workflow laeuft.
- **/README.md
```

Weitere Informationen zur Syntax für Branch-, Tag- und Pfadfilter finden Sie unter „[`on.<push|pull_request>.<branches|tags>`](#onpushpull_requestbranchestags)“ und „[`on.<push|pull_request>.paths`](#onpushpull_requestpaths)“.

#### Muster für den Abgleich von Branches und Tags

| Muster                                                 | Beschreibung                                                                                                                                                                                                  | Beispiele für Übereinstimmungen                                                                                       |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `feature/*`                                            | Das Platzhalterzeichen `*` steht für ein beliebiges Zeichen, nicht jedoch für den Schrägstrich (`/`).                                                                                                         | `feature/my-branch`<br/><br/>`feature/your-branch`                                                        |
| `feature/**`                                           | Das Platzhalterzeichen `**` steht für ein beliebiges Zeichen, also auch für den Schrägstrich (`/`), in Branch- und Tag-Namen.                                                                                 | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octcat` | Abgleich mit dem exakten Branch- oder Tag-Namen.                                                                                                                                                              | `main`<br/><br/>`releases/mona-the-octocat`                                                               |
| `'*'`                                                  | Abgleich mit allen Branch- und Tag-Namen, die keinen Schrägstrich (`/`) enthalten. Das Zeichen `*` ist ein Sonderzeichen in YAML. Wenn ein Muster mit `*` beginnen soll, sind Anführungszeichen erforderlich. | `main`<br/><br/>`releases`                                                                                |
| `'**'`                                                 | Abgleich mit allen Branch- und Tag-Namen. Dies ist das Standardverhalten, wenn Sie keinen `branches`- oder `tags`-Filter angeben.                                                                             | `all/the/branches`<br/><br/>`every/tag`                                                                   |
| `'*feature'`                                           | Das Zeichen `*` ist ein Sonderzeichen in YAML. Wenn ein Muster mit `*` beginnen soll, sind Anführungszeichen erforderlich.                                                                                    | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature`                                   |
| `v2*`                                                  | Abgleich mit Branch- und Tag-Namen, die mit `v2` beginnen.                                                                                                                                                    | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9`                                                          |
| `v[12].[0-9]+.[0-9]+`                                  | Matches all semantic versioning branches and tags with major version 1 or 2                                                                                                                                   | `v1.10.1`<br/><br/>`v2.0.0`                                                                               |

#### Muster für den Abgleich von Dateinamen

Pfadmuster müssen mit dem gesamten Pfad übereinstimmen und mit dem Root des Repositorys beginnen.

| Muster                                                                  | Beschreibung der Übereinstimmungen                                                                                                                                                                                                   | Beispiele für Übereinstimmungen                                                                                          |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `'*'`                                                                   | Das Platzhalterzeichen `*` steht für ein beliebiges Zeichen, nicht jedoch für den Schrägstrich (`/`). Das Zeichen `*` ist ein Sonderzeichen in YAML. Wenn ein Muster mit `*` beginnen soll, sind Anführungszeichen erforderlich.     | `README.md`<br/><br/>`server.rb`                                                                             |
| `'*.jsx?'`                                                              | Das Zeichen `?` steht für null Instanzen oder genau eine Instanz des vorangegangenen Zeichens.                                                                                                                                       | `page.js`<br/><br/>`page.jsx`                                                                                |
| `'**'`                                                                  | Das Platzhalterzeichen `**` steht für ein beliebiges Zeichen, auch für den Schrägstrich (`/`). Dies ist das Standardverhalten, wenn Sie keinen `path`-Filter angeben.                                                                | `all/the/files.md`                                                                                                       |
| `'*.js'`                                                                | Das Platzhalterzeichen `*` steht für ein beliebiges Zeichen, nicht jedoch für den Schrägstrich (`/`). Abgleich mit allen `.js`-Dateien im Root des Repositorys.                                                                      | `app.js`<br/><br/>`index.js`                                                                                 |
| `'**.js'`                                                               | Abgleich mit allen `.js`-Dateien im Repository.                                                                                                                                                                                      | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js`                                       |
| `docs/*`                                                                | Alle Dateien im Root des Verzeichnisses `docs` im Root des Repositorys.                                                                                                                                                              | `docs/README.md`<br/><br/>`docs/file.txt`                                                                    |
| `docs/**`                                                               | Beliebige Dateien im Verzeichnis `docs` im Root des Repositorys.                                                                                                                                                                     | `docs/README.md`<br/><br/>`docs/mona/octocat.txt`                                                            |
| `docs/**/*.md`                                                          | Eine Datei mit dem Suffix `.md` an beliebiger Stelle im Verzeichnis `docs`.                                                                                                                                                          | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`          |
| `'**/docs/**'`                                                          | Beliebige Dateien im Verzeichnis `docs` an beliebiger Stelle im Repository.                                                                                                                                                          | `/docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`            |
| `'**/README.md'`                                                        | Eine Datei mit dem Namen „README.md“ an beliebiger Stelle im Repository.                                                                                                                                                             | `README.md`<br/><br/>`js/README.md`                                                                          |
| `'**/*src/**'`                                                          | Eine beliebige Datei in einem Ordner mit dem Suffix `src` an beliebiger Stelle im Repository.                                                                                                                                        | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`                                                              |
| `'**/*-post.md'`                                                        | Eine Datei mit dem Suffix `-post.md` an beliebiger Stelle im Repository.                                                                                                                                                             | `my-post.md`<br/><br/>`path/their-post.md`                                                                   |
| `'**/migrate-*.sql'`                                                    | Eine Datei mit dem Präfix `migrate-` und dem Suffix `.sql` an beliebiger Stelle im Repository.                                                                                                                                       | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql`             |
| `*.md`<br/><br/>`!README.md`                                | Ein Ausrufezeichen (`!`) vor einem Muster negiert das Muster. Wenn eine Datei sowohl mit einem Muster übereinstimmt als auch mit einem negativen Muster, das später in der Datei definiert ist, wird die Datei nicht berücksichtigt. | `hello.md`<br/><br/>_Does not match_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | Die Muster werden sequenziell geprüft. Wenn ein Muster ein vorangegangenes Muster negiert, werden die Dateipfade wieder berücksichtigt.                                                                                              | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`                                            |
