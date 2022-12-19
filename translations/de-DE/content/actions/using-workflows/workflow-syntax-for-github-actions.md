---
title: Workflowsyntax für GitHub Actions
shortTitle: Workflow syntax
intro: 'Ein Workflow ist ein konfigurierbarer automatisierter Prozess, der aus mindestens einem Jobs besteht. Du musst eine YAML-Datei erstellen, um deine Workflowkonfiguration zu definieren.'
redirect_from:
  - /articles/workflow-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions
  - /actions/reference/workflow-syntax-for-github-actions
  - /actions/learn-github-actions/workflow-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: ca5a79fbaeeafa474283cbabd67108cb22b6f985
ms.sourcegitcommit: 4f08a208a0d2e13dc109678750a962ea2f67e1ba
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148192048'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zur YAML-Syntax für Workflows

Workflowdateien verwenden die YAML-Syntax und müssen entweder die Dateierweiterung `.yml` oder `.yaml` aufweisen. {% data reusables.actions.learn-more-about-yaml %}

Du musst Workflowdateien im `.github/workflows`-Verzeichnis deines Repositorys speichern.

## `name`

Der Name deines Workflows. {% data variables.product.prodname_dotcom %} zeigt die Namen deiner Workflows auf der Registerkarte „Aktionen“ deines Repositorys an. Wenn du `name` weglässt, verwendet {% data variables.product.prodname_dotcom %} hierfür den Workflowdateipfad relativ zum Stammverzeichnis des Repositorys.

{% ifversion actions-run-name %}
## `run-name`

Der vom Workflow aus generierte Name für Workflowausführungen. {% data variables.product.prodname_dotcom %} zeigt den Namen der Workflowausführung in der Liste der Workflowausführungen auf der Registerkarte „Aktionen“ deines Repositorys an. Wenn `run-name` weggelassen wird oder nur aus Leerzeichen besteht, werden ereignisspezifische Informationen für die Workflowausführung für den Namen der Ausführung verwendet. Beispielsweise wird er für einen Workflow, der von einem `push`- oder `pull_request`-Ereignis ausgelöst wird, als Commitnachricht festgelegt.

Dieser Wert kann Ausdrücke enthalten und auf die Kontexte [`github`](/actions/learn-github-actions/contexts#github-context) und [`inputs`](/actions/learn-github-actions/contexts#inputs-context) verweisen.

### Beispiel

{% raw %}
```yaml
run-name: Deploy to ${{ inputs.deploy_target }} by @${{ github.actor }}
```
{% endraw %} {% endif %}

## `on`

{% data reusables.actions.workflows.section-triggering-a-workflow %}

### `on.<event_name>.types`

{% data reusables.actions.workflows.section-triggering-a-workflow-types %}

### `on.<pull_request|pull_request_target>.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-branches %}

### `on.push.<branches|tags|branches-ignore|tags-ignore>`

{% data reusables.actions.workflows.section-run-on-specific-branches-or-tags %}

### `on.<push|pull_request|pull_request_target>.<paths|paths-ignore>`

{% data reusables.actions.workflows.section-triggering-a-workflow-paths %}

### `on.schedule`

{% data reusables.actions.workflows.section-triggering-a-workflow-schedule %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `on.workflow_call`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Verwende `on.workflow_call`, um die Eingaben und Ausgaben für einen wiederverwendbaren Workflow zu definieren. Du kannst dem aufgerufenen Workflow auch die verfügbaren Geheimnisse zuordnen. Weitere Informationen zu wiederverwendbaren Workflows findest du unter [Wiederverwenden von Workflows](/actions/using-workflows/reusing-workflows).

### `on.workflow_call.inputs`

Wenn du das Schlüsselwort `workflow_call` verwendest, kannst du optional Eingaben angeben, die vom Aufruferworkflow an den aufgerufenen Workflow übergeben werden. Weitere Informationen zum Schlüsselwort `workflow_call` findest du unter [Ereignisse, die Workflows auslösen](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events).

Zusätzlich zu den verfügbaren Standardeingabeparametern erfordert `on.workflow_call.inputs` auch einen `type`-Parameter. Weitere Informationen findest du unter [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype).

Wenn kein `default`-Parameter festgelegt ist, entspricht der Standardwert der Eingabe `false` für einen booleschen Wert, `0` für eine Zahl und `""` für eine Zeichenfolge.

Innerhalb des aufgerufenen Workflows kannst du den `inputs`-Kontext verwenden, um auf eine Eingabe zu verweisen.

Wenn ein Aufruferworkflow eine Eingabe übergibt, die nicht im aufgerufenen Workflow angegeben ist, führt dies zu einem Fehler.

#### Beispiel

{% raw %}
```yaml
on:
  workflow_call:
    inputs:
      username:
        description: 'A username passed from the caller workflow'
        default: 'john-doe'
        required: false
        type: string

jobs:
  print-username:
    runs-on: ubuntu-latest

    steps:
      - name: Print the input name to STDOUT
        run: echo The username is ${{ inputs.username }}
```
{% endraw %}

Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows).

#### `on.workflow_call.inputs.<input_id>.type`

Diese Angabe ist erforderlich, wenn die Eingabe für das Schlüsselwort `on.workflow_call` definiert ist. Der Wert dieses Parameters ist eine Zeichenfolge, die den Datentyp der Eingabe angibt. Dies muss `boolean`, `number` oder `string` entsprechen.

### `on.workflow_call.outputs`

Hierbei handelt es sich um eine Zuordnung der Ausgaben für einen aufgerufenen Workflow. Die Ausgaben des aufgerufenen Workflows sind für alle Downstreamaufträge im Aufruferworkflow verfügbar. Jede Ausgabe verfügt über einen Bezeichner, eine optionale `description,` und einen `value.`. Der `value` muss auf den Wert einer Ausgabe aus einem Auftrag innerhalb des aufgerufenen Workflows festgelegt werden.

Im folgenden Beispiel werden zwei Ausgaben für diesen wiederverwendbaren Workflow definiert: `workflow_output1` und `workflow_output2`. Diese werden den Ausgaben namens `job_output1` und `job_output2` zugeordnet, die beide von einem Auftrag namens `my_job` stammen.

#### Beispiel

{% raw %}
```yaml
on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      workflow_output1:
        description: "The first job output"
        value: ${{ jobs.my_job.outputs.job_output1 }}
      workflow_output2:
        description: "The second job output"
        value: ${{ jobs.my_job.outputs.job_output2 }}
```
{% endraw %}

Weitere Informationen zum Verweisen auf eine Auftragsausgabe findest du unter [`jobs.<job_id>.outputs`](#jobsjob_idoutputs). Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows).

### `on.workflow_call.secrets`

Dies ist eine Zuordnung der Geheimnisse, die im aufgerufenen Workflow verwendet werden können.

Innerhalb des aufgerufenen Workflows kannst du den `secrets`-Kontext verwenden, um auf ein Geheimnis zu verweisen.

Wenn ein Aufruferworkflow ein Geheimnis übergibt, das nicht im aufgerufenen Workflow angegeben ist, führt dies zu einem Fehler.

#### Beispiel

{% raw %}
```yaml
on:
  workflow_call:
    secrets:
      access-token:
        description: 'A token passed from the caller workflow'
        required: false

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest

    steps:
      - name: Pass the received secret to an action
        uses: ./.github/actions/my-action
        with:
          token: ${{ secrets.access-token }}
```
{% endraw %}

#### `on.workflow_call.secrets.<secret_id>`

Dies ist ein Zeichenfolgenbezeichner, der dem Geheimnis zugeordnet werden soll.

#### `on.workflow_call.secrets.<secret_id>.required`

Dies ist ein boolescher Wert, der angibt, ob das Geheimnis angegeben werden muss.
{% endif %}

## `on.workflow_run.<branches|branches-ignore>`

{% data reusables.actions.workflows.section-specifying-branches %}

## `on.workflow_dispatch.inputs`

{% data reusables.actions.workflow-dispatch-inputs %}

## `permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs %}

## `env`

Dies ist eine `map` von Umgebungsvariablen, die für die Schritte aller Aufträge im Workflow verfügbar sind. Du kannst auch Umgebungsvariablen festlegen, die nur für die Schritte eines einzelnen Auftrags oder für einen einzelnen Schritt verfügbar sind. Weitere Informationen findest du unter [`jobs.<job_id>.env`](#jobsjob_idenv) und [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

Variablen in der `env`-Zuordnung können nicht in Bezug auf andere Variablen in der Zuordnung definiert werden.

{% data reusables.repositories.actions-env-var-note %}

### Beispiel

```yaml
env:
  SERVER: production
```

## `defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults %}

### `defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-run %}

## `concurrency`

{% data reusables.actions.jobs.section-using-concurrency %}

## `jobs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow %}

### `jobs.<job_id>`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-id %}

### `jobs.<job_id>.name`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-name %}

### `jobs.<job_id>.permissions`

{% data reusables.actions.jobs.section-assigning-permissions-to-jobs-specific %}

## `jobs.<job_id>.needs`

{% data reusables.actions.jobs.section-using-jobs-in-a-workflow-needs %}

## `jobs.<job_id>.if`

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

## `jobs.<job_id>.runs-on`

{% data reusables.actions.jobs.section-choosing-the-runner-for-a-job %}

## `jobs.<job_id>.environment`

{% data reusables.actions.jobs.section-using-environments-for-jobs %}

## `jobs.<job_id>.concurrency`

{% data reusables.actions.jobs.section-using-concurrency-jobs %}

## `jobs.<job_id>.outputs`

{% data reusables.actions.jobs.section-defining-outputs-for-jobs %}

## `jobs.<job_id>.env`

Dies ist eine `map` von Umgebungsvariablen, die für alle Schritte im Auftrag verfügbar sind. Darüber hinaus kannst du Umgebungsvariablen für den gesamten Workflow oder für einen einzelnen Schritt festlegen. Weitere Informationen findest du unter [`env`](#env) und [`jobs.<job_id>.steps[*].env`](#jobsjob_idstepsenv).

{% data reusables.repositories.actions-env-var-note %}

### Beispiel

```yaml
jobs:
  job1:
    env:
      FIRST_NAME: Mona
```

## `jobs.<job_id>.defaults`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job %}

### `jobs.<job_id>.defaults.run`

{% data reusables.actions.jobs.setting-default-values-for-jobs-defaults-job-run %}

## `jobs.<job_id>.steps`

Ein Auftrag enthält eine Sequenz von Aufgaben (als `steps` bezeichnet). Mit Schritten können Befehle oder Einrichtungsaufgaben ausgeführt werden, und außerdem Aktionen, die sich in deinem Repository oder in einem öffentlichen Repository befinden oder in einer Docker Registry veröffentlicht sind. Nicht alle Schritte führen Aktionen aus, doch alle Aktionen werden als Schritt ausgeführt. Jeder Schritt wird in einem eigenen Prozess in der Runner-Umgebung ausgeführt. Er hat Zugriff auf den Arbeitsbereich und das Dateisystem. Da die Schritte jeweils in einem eigenen Prozess laufen, werden Änderungen an den Umgebungsvariablen nicht von einem Schritt zum nächsten beibehalten. {% data variables.product.prodname_dotcom %} umfasst integrierte Schritte zum Einrichten und Ausführen eines Jobs.

Innerhalb der Nutzungsbeschränkungen des Workflows kannst du unbegrenzt viele Schritte ausführen. Weitere Informationen findest du unter {% ifversion fpt or ghec or ghes %}[Nutzungseinschränkungen und Abrechnung](/actions/reference/usage-limits-billing-and-administration) für auf {% data variables.product.prodname_dotcom %} gehostete Runner und unter {% endif %}[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %} für Nutzungseinschränkungen für selbstgehostete Runner.{% elsif ghae %}.{% endif %}

### Beispiel

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

Eine eindeutige Kennung für den Schritt. Du kannst mit `id` auf den Schritt in Kontexten verweisen. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts).

### `jobs.<job_id>.steps[*].if`

Du kannst die `if`-Bedingung verwenden, um zu verhindern, dass ein Schritt ausgeführt wird – es sei denn, eine Bedingung ist erfüllt. {% data reusables.actions.if-supported-contexts %}

{% data reusables.actions.expression-syntax-if %} Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

#### Beispiel: Verwenden von Kontexten

 Dieser Schritt wird nur ausgeführt, wenn der Ereignistyp `pull_request` und die Ereignisaktion `unassigned` lautet.

 ```yaml
steps:
  - name: My first step
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
    run: echo This event is a pull request that had an assignee removed.
```

#### Beispiel: Verwenden von Funktionen zur Statusüberprüfung

`my backup step` wird nur ausgeführt, wenn beim vorherigen Schritt eines Auftrags ein Fehler auftritt. Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions#status-check-functions).

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```

#### Beispiel: Verwenden von Geheimnissen

Auf Geheimnisse kann nicht direkt in `if:`-Bedingungen verwiesen werden. Erwäge stattdessen, Geheimnisse als Umgebungsvariablen auf Auftragsebene festzulegen, und verweise dann auf die Umgebungsvariablen, um Schritte im Auftrag bedingt auszuführen.

Wenn kein Geheimnis festgelegt wurde, ist der Rückgabewert eines Ausdrucks, der auf das Geheimnis verweist (z. B. {% raw %}`${{ secrets.SuperSecret }}`{% endraw %} im Beispiel), eine leere Zeichenfolge.

{% raw %}
```yaml
name: Run a step if a secret has been set
on: push
jobs:
  my-jobname:
    runs-on: ubuntu-latest
    env:
      super_secret: ${{ secrets.SuperSecret }}
    steps:
      - if: ${{ env.super_secret != '' }}
        run: echo 'This step will only run if the secret has a value set.'
      - if: ${{ env.super_secret == '' }}
        run: echo 'This step will only run if the secret does not have a value set.'
```
{% endraw %}

Weitere Informationen findest du unter [Kontextverfügbarkeit](/actions/learn-github-actions/contexts#context-availability) und [Verschlüsselte Geheimnisse](/actions/security-guides/encrypted-secrets).

### `jobs.<job_id>.steps[*].name`

Name deines Schritts, der auf {% data variables.product.prodname_dotcom %} angezeigt wird.

### `jobs.<job_id>.steps[*].uses`

Wählt eine Aktion aus, die als Teil eines Schritts im Job ausgeführt wird. Eine Aktion ist eine wiederverwendbare Code-Einheit. Du kannst eine Aktion verwenden, die im selben Repository wie der Workflow, in einem öffentlichen Repository oder in einem [veröffentlichten Docker-Containerimage](https://hub.docker.com/) definiert ist.

Es wird dringend empfohlen, dass du die Version der verwendeten Aktion einschließt, indem du Git-ref, SHA oder ein Docker-Tag angibst. Wenn du keine Version angibst, könnten damit die Workflows gestört werden, oder es wird ein unerwartetes Verhalten hervorgerufen, wenn der bzw. die Besitzer*in der Aktion eine Aktualisierung veröffentlicht.
- Am besten in Hinblick auf Stabilität und Sicherheit ist es, die Commit-SHA einer freigegebenen Version einer Aktion zu verwenden.
- Wenn die Aktion Hauptversionstags veröffentlicht, kannst du kritische Fehlerbehebungen und Sicherheitspatches erhalten und gleichzeitig die Kompatibilität wahren. Hinweis: Dieses Verhalten liegt im Ermessen des Autors der Aktion.
- Die Verwendung des Standardbranches einer Aktion ist zwar auf den ersten Blick praktisch, doch wenn eine neue Hauptversion mit einem Breaking Change veröffentlicht wird, könnte der Workflow unterbrochen werden.

Einige Aktionen erfordern Eingaben, die du mit dem Schlüsselwort [`with`](#jobsjob_idstepswith) festlegen musst. Die erforderlichen Eingaben findest du in der README-Datei der Aktion.

Aktionen sind entweder JavaScript-Dateien oder Docker-Container. Bei Docker-Containern als Aktion musst du den Auftrag in einer Linux-Umgebung ausführen. Weitere Informationen findest du unter [`runs-on`](#jobsjob_idruns-on).

#### Beispiel: Verwenden versionierter Aktionen

```yaml
steps:
  # Reference a specific commit
  - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
  # Reference the major version of a release
  - uses: {% data reusables.actions.action-checkout %}
  # Reference a specific version
  - uses: {% data reusables.actions.action-checkout %}.2.0
  # Reference a branch
  - uses: actions/checkout@main
```

#### Beispiel: Verwenden einer öffentlichen Aktion

`{owner}/{repo}@{ref}`

Du kannst einen Branch, einen Verweis oder einen SHA-Wert in einem öffentlichen {% data variables.product.prodname_dotcom %}-Repository angeben.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        # Uses the default branch of a public repository
        uses: actions/heroku@main
      - name: My second step
        # Uses a specific version tag of a public repository
        uses: actions/aws@v2.0.1
```

#### Beispiel: Verwenden einer öffentlichen Aktion in einem Unterverzeichnis

`{owner}/{repo}/{path}@{ref}`

Ein Unterverzeichnis in einem öffentlichen Repository auf {% data variables.product.prodname_dotcom %} in einem bestimmten Branch, einer bestimmten Ref oder einer bestimmten SHA.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: actions/aws/ec2@main
```

#### Beispiel: Verwenden einer Aktion im selben Repository wie der Workflow

`./path/to/dir`

Der Pfad zum Verzeichnis, das die Aktion im Repository deines Workflows enthält. Du musst dein Repository auschecken, bevor du die Aktion verwendest.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Use local my-action
        uses: ./.github/actions/my-action
```

#### Beispiel: Verwenden einer Docker Hub-Aktion

`docker://{image}:{tag}`

Dies ist ein Docker-Image, das in [Docker Hub](https://hub.docker.com/) veröffentlicht wurde.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://alpine:3.8
```

{% ifversion fpt or ghec %}
#### Beispiel: Verwenden der {% data variables.product.prodname_registry %}-{% data variables.product.prodname_container_registry %}

`docker://{host}/{image}:{tag}`

Dies ist ein Docker-Image in der {% data variables.product.prodname_registry %}-{% data variables.product.prodname_container_registry %}.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://ghcr.io/OWNER/IMAGE_NAME
```
{% endif %}
#### Beispiel: Verwenden einer Aktion in einer öffentlichen Docker-Registrierung

`docker://{host}/{image}:{tag}`

Ein Docker-Image in einer öffentlichen Registry. Dieses Beispiel verwendet die Google Container Registry unter `gcr.io`.

```yaml
jobs:
  my_first_job:
    steps:
      - name: My first step
        uses: docker://gcr.io/cloud-builders/gradle
```

#### Beispiel: Verwenden einer Aktion innerhalb eines anderen privaten Repositorys als dem Workflow

Dein Workflow muss das private Repository auschecken und lokal auf die Aktion verweisen. Generiere ein {% data variables.product.pat_generic %}, und füge das Token als verschlüsseltes Geheimnis hinzu. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) und [Verschlüsselte Geheimnisse](/actions/reference/encrypted-secrets).

Ersetze `PERSONAL_ACCESS_TOKEN` im Beispiel durch den Namen deines Geheimnisses.

```yaml
jobs:
  my_first_job:
    steps:
      - name: Check out repository
        uses: {% data reusables.actions.action-checkout %}
        with:
          repository: octocat/my-private-repo
          ref: v1.0
          token: {% raw %}${{ secrets.PERSONAL_ACCESS_TOKEN }}{% endraw %}
          path: ./.github/actions/my-private-repo
      - name: Run my action
        uses: ./.github/actions/my-private-repo/my-action
```

### `jobs.<job_id>.steps[*].run`

Führt Befehlszeilen-Programme über die Betriebssystem-Shell aus. Wenn du keinen `name` angibst, wird standardmäßig der im `run`-Befehl angegebene Text als Schrittname verwendet.

Befehle greifen standardmäßig auf Shells zurück, für die keine Anmeldung erforderlich ist. Du kannst für die Ausführung von Befehlen eine andere Shell auswählen und die Shell anpassen. Weitere Informationen findest du unter [`jobs.<job_id>.steps[*].shell`](#jobsjob_idstepsshell).

Jedes `run`-Schlüsselwort stellt einen neuen Prozess und eine neue Shell in der Runnerumgebung dar. Wenn du mehrzeilige Befehle angibst, werden alle Zeilen in derselben Shell ausgeführt. Beispiel:

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

Mithilfe des `working-directory`-Schlüsselworts kannst du das Arbeitsverzeichnis angeben, in dem der Befehl ausgeführt werden soll.

```yaml
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

### `jobs.<job_id>.steps[*].shell`

Du kannst die Standardshelleinstellungen im Betriebssystem des Runners mithilfe des Schlüsselworts `shell` überschreiben. Du hast die Möglichkeit, integrierte `shell`-Schlüsselworte zu verwenden oder eine benutzerdefinierte Shelloptionen zu definieren. Der intern ausgeführte Shellbefehl führt eine temporäre Datei aus, die die im Schlüsselwort `run` angegebenen Befehle enthält.

| Unterstützte Plattform | `shell`-Parameter | BESCHREIBUNG | Intern ausgeführter Befehl |
|--------------------|-------------------|-------------|------------------------|
| Linux/macOS | unspecified | Die Standardshell auf Nicht-Windows-Plattformen. Beachte, dass dadurch ein anderer Befehl ausgeführt wird, wenn `bash` explizit angegeben wird. Wenn `bash` nicht im Pfad gefunden wird, wird es als `sh` behandelt. | `bash -e {0}` |
| Alle | `bash` | Dies ist die Standardshell auf Nicht-Windows-Plattformen mit einem Fallback zu `sh`. Wenn eine Bash-Shell für Windows angegeben wird, wird die in Git für Windows enthaltene Bash-Shell verwendet. | `bash --noprofile --norc -eo pipefail {0}` |
| All | `pwsh` | Der PowerShell Core. {% data variables.product.prodname_dotcom %} fügt die Erweiterung `.ps1` an deinen Skriptnamen an. | `pwsh -command ". '{0}'"` |
| All | `python` | Führt den Befehl Python aus. | `python {0}` |
| Linux/macOS | `sh` | Dies ist das Fallbackverhalten für Nicht-Windows-Plattformen, falls keine Shell bereitgestellt ist und `bash` nicht im Pfad gefunden wird. | `sh -e {0}` |
| Windows | `cmd` | {% data variables.product.prodname_dotcom %} fügt die Erweiterung `.cmd` an deinen Skriptnamen an und ersetzt `{0}`. | `%ComSpec% /D /E:ON /V:OFF /S /C "CALL "{0}""`. |
| Windows | `pwsh` | Dies ist die standardmäßig für Windows verwendete Shell. Der PowerShell Core. {% data variables.product.prodname_dotcom %} fügt die Erweiterung `.ps1` an deinen Skriptnamen an. Wenn in deinem selbstgehosteten Windows-Runner _PowerShell Core_ nicht installiert ist, wird stattdessen  _PowerShell Desktop_ verwendet.| `pwsh -command ". '{0}'"`. |
| Windows | `powershell` | PowerShell Desktop. {% data variables.product.prodname_dotcom %} fügt die Erweiterung `.ps1` an deinen Skriptnamen an. | `powershell -command ". '{0}'"`. |

#### Beispiel: Ausführen eines Skripts mithilfe von Bash

```yaml
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

#### Beispiel: Ausführen eines Skripts mithilfe der `cmd` unter Windows

```yaml
steps:
  - name: Display the path
    run: echo %PATH%
    shell: cmd
```

#### Beispiel: Ausführen eines Skripts mithilfe von PowerShell Core

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: pwsh
```

#### Beispiel: Verwenden von PowerShell Desktop zum Ausführen eines Skripts

```yaml
steps:
  - name: Display the path
    run: echo ${env:PATH}
    shell: powershell
```

#### Beispiel: Ausführen eines Python-Skripts

```yaml
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

#### Benutzerdefinierte Shell

Du kannst den `shell`-Wert mithilfe von `command […options] {0} [..more_options]` auf eine Vorlagenzeichenfolge festlegen. {% data variables.product.prodname_dotcom %} interpretiert das erste durch ein Leerzeichen getrennte Wort in der Zeichenfolge als den Befehl und fügt den Dateinamen für das temporäre Skript bei `{0}` ein.

Beispiel:

```yaml
steps:
  - name: Display the environment variables and their values
    run: |
      print %ENV
    shell: perl {0}
```

Der in diesem Beispiel verwendete Befehl `perl` muss im Runner installiert werden.

{% ifversion ghae %} {% data reusables.actions.self-hosted-runners-software %} {% elsif fpt or ghec %} Unter [Spezifikationen zu auf GitHub gehosteten Runnern](/actions/reference/specifications-for-github-hosted-runners#supported-software) findest du Informationen zur Software, die in den auf GitHub gehosteten Runnern enthalten ist.
{% endif %}

#### Exit-Codes und Voreinstellung für Fehleraktionen

Für integrierte Shell-Schlüsselwörter gelten die folgenden Standards, die durch auf {% data variables.product.prodname_dotcom %} gehostete Runner ausgeführt werden. Beachte diese Richtlinien beim Ausführen von Shell-Skripts.

- `bash`/`sh`:
  - Fail-Fast-Verhalten mit `set -eo pipefail`: Diese Option wird festgelegt, wenn `shell: bash` explizit angegeben wird. Sie wird standardmäßig nicht angewendet.
  - Du kannst die volle Kontrolle über Shellparameter übernehmen, indem du einen Vorlagen-String für die Shelloptionen bereitstellst. Beispiel: `bash {0}`.
  - sh-ähnliche Shells liefern beim Beenden als ihren eigenen Exit-Code den Exit-Code des letzten Befehls, der im Skript ausgeführt wurde. Dies ist auch das Standardverhalten für Aktionen. Der Runner meldet den Status des Schritts gemäß diesem Exit-Code als Fehler/Erfolg.

- `powershell`/`pwsh`
  - Fail-Fast-Verhalten, soweit möglich. Bei den integrierten Shells `pwsh` und `powershell` wird den Skriptinhalten `$ErrorActionPreference = 'stop'` vorangestellt.
  - PowerShell-Skripts wird `if ((Test-Path -LiteralPath variable:\LASTEXITCODE)) { exit $LASTEXITCODE }` angefügt, damit Aktionsstatus den letzten Exitcode des Skripts widerspiegeln.
  - Benutzer*innen haben immer die Möglichkeit, die integrierte Shell nicht zu verwenden und stattdessen eine benutzerdefinierte Shelloption wie `pwsh -File {0}` oder `powershell -Command "& '{0}'"` (je nach Bedarf) bereitzustellen.

- `cmd`
  - Wenn du das Fail-Fast-Verhalten uneingeschränkt nutzen möchtest, hast du anscheinend keine andere Wahl, als dein Skript so zu schreiben, dass jeder Fehlercode geprüft und eine entsprechende Reaktion eingeleitet wird. Dieses Verhalten kann nicht standardmäßig bereitgestellt werden. Du musst es explizit in dein Skript schreiben.
  - `cmd.exe` wird mit der Fehlerstufe des zuletzt ausgeführten Programms beendet, und dieser Fehlercode wird an den Runner zurückgegeben. Dieses Verhalten ist intern mit dem vorherigen `sh`- und `pwsh`-Standardverhalten konsistent und entspricht dem `cmd.exe`-Standard, sodass dieses Verhalten intakt bleibt.

### `jobs.<job_id>.steps[*].with`

Dies ist eine `map` der Eingabeparameter, die durch die Aktion definiert werden. Jeder Eingabeparameter ist ein Schlüssel-Wert-Paar. Eingabeparameter werden als Umgebungsvariablen festgelegt. Die Variable wird mit dem Präfix `INPUT_` versehen und in Großbuchstaben konvertiert.

#### Beispiel

Die drei Eingabeparameter (`first_name`, `middle_name` und `last_name`) werden durch die `hello_world`-Aktion definiert. Diese Eingabevariablen sind für die `hello-world`-Aktion über die Umgebungsvariablen `INPUT_FIRST_NAME`, `INPUT_MIDDLE_NAME` und `INPUT_LAST_NAME` zugänglich.

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

Dies ist ein `string`, der die Eingaben für einen Docker-Container definiert. {% data variables.product.prodname_dotcom %} übergibt `args` beim Start des Containers an dessen `ENTRYPOINT`. Ein `array of strings` wird von diesem Parameter nicht unterstützt.

#### Beispiel

{% raw %}
```yaml
steps:
  - name: Explain why this job ran
    uses: octo-org/action-name@main
    with:
      entrypoint: /bin/echo
      args: The ${{ github.event_name }} event triggered this step.
```
{% endraw %}

Die `args`-Elemente werden anstelle der `CMD`-Anweisung in `Dockerfile` verwendet. Wenn du `CMD` in `Dockerfile` verwendest, befolge diese Hinweise (nach Präferenz sortiert):

1. Dokumentiere die erforderlichen Argumente in der README-Datei der Aktion, und lasse sie in der `CMD`-Anweisung weg.
1. Verwende Standardwerte, die die Verwendung der Aktion ohne die Angabe von `args` ermöglichen.
1. Wenn die Aktion ein `--help`-Flag oder etwas ähnliches verfügbar macht, verwende dies als Standard, damit die Aktion selbstdokumentierend wird.

### `jobs.<job_id>.steps[*].with.entrypoint`

Hiermit wird `ENTRYPOINT` für Docker in `Dockerfile` überschrieben oder ein Einstiegspunkt festgelegt, falls noch keiner vorhanden ist. Im Gegensatz zur Docker-Anweisung `ENTRYPOINT` mit einer Shell und einem Ausführungsformat, akzeptiert das Schlüsselwort `entrypoint` nur eine einzelne Zeichenfolge, die die ausführbare Datei definiert, die ausgeführt werden soll.

#### Beispiel

```yaml
steps:
  - name: Run a custom command
    uses: octo-org/action-name@main
    with:
      entrypoint: /a/different/executable
```

Das Schlüsselwort `entrypoint` ist für die Verwendung mit Docker-Containeraktionen vorgesehen, du kannst es jedoch auch mit JavaScript-Aktionen verwenden, die keine Eingaben definieren.

### `jobs.<job_id>.steps[*].env`

Legt Umgebungsvariablen für Schritte fest, die in der Runner-Umgebung verwendet werden sollen. Darüber hinaus kannst du Umgebungsvariablen für den gesamten Workflow oder für einen Auftrag festlegen. Weitere Informationen findest du unter [`env`](#env) und [`jobs.<job_id>.env`](#jobsjob_idenv).

{% data reusables.repositories.actions-env-var-note %}

Die erwarteten Umgebungsvariablen können durch öffentliche Aktionen in der README-Datei angegeben werden. Wenn du ein Geheimnis in einer Umgebungsvariablen festlegst, musst du Geheimnisse mithilfe des `secrets`-Kontexts angeben. Weitere Informationen findest du unter [Verwenden von Umgebungsvariablen](/actions/automating-your-workflow-with-github-actions/using-environment-variables) und [Kontexte](/actions/learn-github-actions/contexts).

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

Verhindert das Fehlschlagen eines Auftrags, wenn ein Schritt fehlschlägt. Lege dies auf `true` fest, damit ein Auftrag erfolgreich abgeschlossen werden kann, wenn bei diesem Schritt ein Fehler auftritt.

### `jobs.<job_id>.steps[*].timeout-minutes`

Maximaler Zeitraum in Minuten für die Ausführung des Schritts, bevor der Prozess abgebrochen wird.

## `jobs.<job_id>.timeout-minutes`

Die maximale Anzahl von Minuten, die ein Job ausgeführt wird, bevor {% data variables.product.prodname_dotcom %} automatisch abbricht. Standard: 360

Sollte das Timeout das Zeitlimit für die Auftragsausführung für den Runner überschreitet, wird der Auftrag abgebrochen, wenn stattdessen das Zeitlimit für die Ausführung erreicht wird. Weitere Informationen zu Zeitlimits für die Auftragsausführung findest du unter {% ifversion fpt or ghec or ghes %}[Nutzungseinschränkungen und Abrechnung](/actions/reference/usage-limits-billing-and-administration#usage-limits) für auf {% data variables.product.prodname_dotcom %} gehostete Runner und unter {% endif %}[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits){% ifversion fpt or ghec or ghes %} für Nutzungseinschränkungen für selbstgehostete Runner.{% elsif ghae %}.{% endif %}

{% note %}

**Hinweis:** {% data reusables.actions.github-token-expiration %} Für selbstgehostete Runner kann das Token der begrenzende Faktor sein, wenn das Auftragstimeout mehr als 24 Stunden beträgt. Weitere Informationen zu `GITHUB_TOKEN` findest du unter [Informationen zum `GITHUB_TOKEN`-Geheimnis](/actions/security-guides/automatic-token-authentication#about-the-github_token-secret).

{% endnote %}

## `jobs.<job_id>.strategy`

Mithilfe von `jobs.<job_id>.strategy` kannst du eine Matrixstrategie für deine Aufträge verwenden. {% data reusables.actions.jobs.about-matrix-strategy %} Weitere Informationen findest du unter [Verwenden einer Matrix für deine Aufträge](/actions/using-jobs/using-a-matrix-for-your-jobs).

### `jobs.<job_id>.strategy.matrix`

{% data reusables.actions.jobs.using-matrix-strategy %}

#### Beispiel: Verwenden einer Matrix mit einer einzelnen Dimension

{% data reusables.actions.jobs.single-dimension-matrix %}

#### Beispiel: Verwenden einer Matrix mit mehreren Dimensionen

{% data reusables.actions.jobs.multi-dimension-matrix %}

#### Beispiel: Erstellen von Matrizen mithilfe von Kontexten

{% data reusables.actions.jobs.matrix-from-context %}

### `jobs.<job_id>.strategy.matrix.include`

{% data reusables.actions.jobs.matrix-include %}

#### Beispiel: Erweitern von Konfigurationen

{% data reusables.actions.jobs.matrix-expand-with-include %}

#### Beispiel: Hinzufügen von Konfigurationen

{% data reusables.actions.jobs.matrix-add-with-include %}

### `jobs.<job_id>.strategy.matrix.exclude`

{% data reusables.actions.jobs.matrix-exclude %}

### `jobs.<job_id>.strategy.fail-fast`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

### `jobs.<job_id>.strategy.max-parallel`

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}

## `jobs.<job_id>.continue-on-error`

Verhindert, dass ein Workflow scheitert, wenn ein Job scheitert. Lege dies auf `true` fest, damit eine Workflowausführung erfolgreich abgeschlossen werden kann, wenn bei diesem Auftrag ein Fehler auftritt.

### Beispiel: Verhindern, dass ein bestimmter fehlgeschlagener Matrixauftrag zu einem Fehler bei einer Workflowausführung führt

Du kannst zulassen, dass bestimmte Jobs in einer Jobmatrix scheitert, ohne dass der Workflow-Lauf scheitert. Dies gilt beispielsweise, wenn du festlegen möchtest, dass nur bei einem experimentellen Auftrag, für den `node` auf `15` festgelegt ist, ein Fehler auftreten darf, ohne dass dadurch ein Fehler bei der Workflowausführung auftritt.

{% raw %}
```yaml
runs-on: ${{ matrix.os }}
continue-on-error: ${{ matrix.experimental }}
strategy:
  fail-fast: false
  matrix:
    node: [13, 14]
    os: [macos-latest, ubuntu-latest]
    experimental: [false]
    include:
      - node: 15
        os: ubuntu-latest
        experimental: true
```
{% endraw %}

## `jobs.<job_id>.container`

{% data reusables.actions.docker-container-os-support %}

{% data reusables.actions.jobs.section-running-jobs-in-a-container %}

### `jobs.<job_id>.container.image`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-image %}

### `jobs.<job_id>.container.credentials`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-credentials %}

### `jobs.<job_id>.container.env`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-env %}

### `jobs.<job_id>.container.ports`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-ports %}

### `jobs.<job_id>.container.volumes`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-volumes %}

### `jobs.<job_id>.container.options`

{% data reusables.actions.jobs.section-running-jobs-in-a-container-options %}

## `jobs.<job_id>.services`

{% data reusables.actions.docker-container-os-support %}

Wird zum Betrieb von Servicecontainern für einen Job in einem Workflow verwendet. Servicecontainer sind nützlich, um Datenbanken oder Cache-Dienste wie Redis zu erstellen. Der Runner erstellt automatisch ein Docker-Netzwerk und verwaltet den Lebenszyklus der Service-Container.

Wenn du deinen Auftrag so konfigurierst, dass er in einem Container ausgeführt wird, oder wenn dein Schritt Containeraktionen verwendet, brauchst du keine Ports zuzuordnen, um auf den Dienst oder die Aktion zuzugreifen. Docker öffnet automatisch alle Ports zwischen Containern im selben benutzerdefinierten Bridge-Netzwerk des Dockers. Du kannst den Servicecontainer direkt mit seinem Hostnamen referenzieren. Der Hostname wird automatisch dem Namen der Bezeichnung zugeordnet, die du für den Dienst im Workflow konfigurierst.

Wenn du den Auftrag so konfigurierst, dass er direkt auf dem Runnercomputer ausgeführt wird und dein Schritt keine Containeraktion verwendet, musst du alle erforderlichen Ports des Docker-Servicecontainers dem Docker-Host (dem Runnercomputer) zuordnen. Du kannst auf den Servicecontainer über localhost und den zugeordneten Port zugreifen.

Weitere Informationen zu den Unterschieden zwischen Netzwerkdienstcontainern findest du unter [Informationen zu Dienstcontainern](/actions/automating-your-workflow-with-github-actions/about-service-containers).

### Beispiel: Verwenden des Localhosts

Dieses Beispiel erzeugt zwei Dienste: nginx und redis. Wenn du den Port des Docker-Hosts angibst, aber nicht den des Containers, dann wird der Containerport einem beliebigen freien Port zugewiesen. {% data variables.product.prodname_dotcom %} legt den zugewiesenen Containerport im {% raw %}`${{job.services.<service_name>.ports}}`{% endraw %}-Kontext fest. In diesem Beispiel kannst du mithilfe der Kontexte {% raw %}`${{ job.services.nginx.ports['8080'] }}`{% endraw %} und {% raw %}`${{ job.services.redis.ports['6379'] }}`{% endraw %} auf die Dienstcontainerports zugreifen.

```yaml
services:
  nginx:
    image: nginx
    # Map port 8080 on the Docker host to port 80 on the nginx container
    ports:
      - 8080:80
  redis:
    image: redis
    # Map TCP port 6379 on Docker host to a random free port on the Redis container
    ports:
      - 6379/tcp
```

### `jobs.<job_id>.services.<service_id>.image`

Docker-Image, das beim Ausführen der Aktion als Dienstcontainer herangezogen wird. Der Wert kann der Name des Docker Hub-Images oder ein Registrierungsname sein.

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
      password: ${{ secrets.github_token }}
  myservice2:
    image: dockerhub_org/myservice2
    credentials:
      username: ${{ secrets.DOCKER_USER }}
      password: ${{ secrets.DOCKER_PASSWORD }}
```
{% endraw %}

### `jobs.<job_id>.services.<service_id>.env`

Hiermit wird eine `map` von Umgebungsvariablen im Dienstcontainer festgelegt.

### `jobs.<job_id>.services.<service_id>.ports`

Hiermit wird ein `array` von Ports festgelegt, die auf dem Dienstcontainer verfügbar gemacht werden sollen.

### `jobs.<job_id>.services.<service_id>.volumes`

Hiermit wird ein `array` von Volumes festgelegt, die der Dienstcontainer verwenden soll. Mithilfe von Volumes kannst du Daten zwischen Diensten oder anderen Schritten in einem Auftrag austauschen. Du kannst benannte Docker-Volumes, anonyme Docker-Volumes oder Bind-Mounts auf dem Host angegeben.

Um ein Volume festzulegen, gibst du den Quell- und Zielpfad an:

`<source>:<destinationPath>`.

`<source>` ist ein Volumename oder ein absoluter Pfad auf dem Hostcomputer, und `<destinationPath>` ist ein absoluter Pfad im Container.

#### Beispiel

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```

### `jobs.<job_id>.services.<service_id>.options`

Zusätzliche Optionen für die Docker-Container-Ressource. Eine Liste der Optionen findest du unter [`docker create`-Optionen](https://docs.docker.com/engine/reference/commandline/create/#options).

{% warning %}

**Warnung**: Die `--network`-Option wird nicht unterstützt.

{% endwarning %}

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
## `jobs.<job_id>.uses`

{% data reusables.actions.reusable-workflows-enterprise-beta %}

Dies ist der Speicherort und die Version einer wiederverwendbaren Workflowdatei, die als Auftrag ausgeführt werden soll. {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}Verwende eine der folgenden Syntaxen:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

### Beispiel

{% data reusables.actions.uses-keyword-example %}

Weitere Informationen findest du unter [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows).

### `jobs.<job_id>.with`

Wenn ein Auftrag zum Aufrufen eines wiederverwendbaren Workflows verwendet wird, kannst du mit `with` eine Zuordnung von Eingaben bereitstellen, die an den aufgerufenen Workflow übergeben werden.

Alle Eingaben, die du übergibst, müssen den im aufgerufenen Workflow definierten Eingabespezifikationen entsprechen.

Im Gegensatz zu [`jobs.<job_id>.steps[*].with`](#jobsjob_idstepswith) sind die mit `jobs.<job_id>.with` übergebenen Eingaben nicht als Umgebungsvariablen im aufgerufenen Workflow verfügbar. Stattdessen kannst du mithilfe des `inputs`-Kontexts auf die Eingaben verweisen.

#### Beispiel

```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    with:
      username: mona
```

### `jobs.<job_id>.with.<input_id>`

Dies ist ein aus einem Zeichenfolgenbezeichner für die Eingabe und dem Wert für die Eingabe bestehendes Paar. Der Bezeichner muss mit dem Namen der Eingabe übereinstimmen, die von [`on.workflow_call.inputs.<inputs_id>`](/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_id) im aufgerufenen Workflow definiert wird. Der Datentyp des Werts muss mit dem Typ übereinstimmen, der von [`on.workflow_call.inputs.<input_id>.type`](#onworkflow_callinputsinput_idtype) im aufgerufenen Workflow definiert wird.

Zulässiger Ausdruckskontext: `github` und `needs`.

### `jobs.<job_id>.secrets`

Wenn ein Auftrag zum Aufrufen eines wiederverwendbaren Workflows verwendet wird, kannst du mit `secrets` eine Zuordnung von Geheimnissen bereitstellen, die an den aufgerufenen Workflow übergeben werden.

Alle Geheimnisse, die du übergibst, müssen mit den Namen übereinstimmen, die im aufgerufenen Workflow definiert sind.

#### Beispiel

{% raw %}
```yaml
jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@main
    secrets:
      access-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
```
{% endraw %}

{% ifversion actions-inherit-secrets-reusable-workflows %}

### `jobs.<job_id>.secrets.inherit`

Verwende das Schlüsselwort `inherit`, um alle Geheimnisse des aufrufenden Workflows an den aufgerufenen Workflow zu übergeben. Dazu gehören alle Geheimnisse, auf die der aufrufende Workflow Zugriff hat, nämlich die Geheimnisse von Organisation, Repository und Umgebung. Das Schlüsselwort `inherit` kann verwendet werden, um Geheimnisse zwischen Repositorys innerhalb derselben Organisation oder zwischen Organisationen innerhalb desselben Unternehmens zu übergeben.

#### Beispiel

{% raw %}

```yaml
on:
  workflow_dispatch:

jobs:
  pass-secrets-to-workflow:
    uses: ./.github/workflows/called-workflow.yml
    secrets: inherit
```

```yaml
on:
  workflow_call:

jobs:
  pass-secret-to-action:
    runs-on: ubuntu-latest
    steps:
      - name: Use a repo or org secret from the calling workflow.
        run: echo ${{ secrets.CALLING_WORKFLOW_SECRET }}
```

{% endraw %}

{%endif%}

### `jobs.<job_id>.secrets.<secret_id>`

Dies ist ein aus einem Zeichenfolgenbezeichner für das Geheimnis und dem Wert für das Geheimnis bestehendes Paar. Der Bezeichner muss mit dem Namen eines Geheimnisses übereinstimmen, das von [`on.workflow_call.secrets.<secret_id>`](#onworkflow_callsecretssecret_id) im aufgerufenen Workflow definiert wird.

Zulässiger Ausdruckskontext: `github`, `needs` und `secrets`.
{% endif %}

## Spickzettel für Filtermuster

In Pfad-, Branch- und Tagfiltern kannst du Sonderzeichen benutzen.

- `*`: Gleicht null oder mehr Zeichen ab, nicht jedoch das `/`-Zeichen. Beispielsweise entspricht `Octo*``Octocat`.
- `**`: Gleicht null oder mehr beliebige Zeichen ab.
- `?`: Gleicht null oder eines der vorherigen Zeichen ab.
- `+`: Gleicht eines oder mehrere der vorherigen Zeichen ab.
- `[]`: Gleicht ein Zeichen ab, das in Klammern aufgelistet oder in Bereichen enthalten ist. Bereiche können nur `a-z`, `A-Z` und `0-9` enthalten. Beispielsweise stimmt der Bereich `[0-9a-z]` mit einer beliebigen Zahl oder einem Kleinbuchstaben überein. `[CB]at` stimmt beispielsweise mit `Cat` oder `Bat` überein, und `[1-2]00` stimmt mit `100` und `200` überein.
- `!`: Wenn dies am Anfang eines Musters steht, negiert es vorherige positive Muster ins Gegenteil. Es hat keine besondere Bedeutung, wenn es nicht das erste Zeichen ist.

Die Zeichen `*`, `[` und `!` sind Sonderzeichen in YAML. Wenn du ein Muster mit `*`, `[` oder `!` beginnst, musst du das Muster in Anführungszeichen einschließen. Wenn du eine [Ablaufsequenz](https://yaml.org/spec/1.2.2/#flow-sequences) mit einem Muster verwendest, das `[` und/oder `]` enthält, muss das Muster zudem in Anführungszeichen gesetzt werden.

```yaml
# Valid
branches:
  - '**/README.md'

# Invalid - creates a parse error that
# prevents your workflow from running.
branches:
  - **/README.md

# Valid
branches: [ main, 'release/v[0-9].[0-9]' ]

# Invalid - creates a parse error
branches: [ main, release/v[0-9].[0-9] ]
```

Weitere Informationen zur Syntax der Branch-, Tag- und Pfadfilter findest du unter [`on.<push>.<branches|tags>`](#onpushbranchestagsbranches-ignoretags-ignore), [`on.<pull_request>.<branches|tags>`](#onpull_requestpull_request_targetbranchesbranches-ignore) und [`on.<push|pull_request>.paths`](#onpushpull_requestpull_request_targetpathspaths-ignore).

### Muster für den Abgleich von Branches und Tags

| Muster | BESCHREIBUNG | Beispiele für Übereinstimmungen |
|---------|------------------------|---------|
| `feature/*` | Das Platzhalterzeichen `*` gleicht ein beliebiges Zeichen ab, nicht jedoch den Schrägstrich (`/`). |  `feature/my-branch`<br/><br/>`feature/your-branch` |
| `feature/**` | Das Platzhalterzeichen `**` gleicht ein beliebiges Zeichen ab, einschließlich des Schrägstrichs (`/`) in Branch- und Tagnamen. | `feature/beta-a/my-branch`<br/><br/>`feature/your-branch`<br/><br/>`feature/mona/the/octocat` |
| `main`<br/><br/>`releases/mona-the-octocat` | Abgleich mit dem exakten Branch- oder Tag-Namen. | `main`<br/><br/>`releases/mona-the-octocat` |
| `'*'` | Dies gleicht alle Branch- und Tagnamen ab, die keinen Schrägstrich (`/`) enthalten. Das `*`-Zeichen ist ein Sonderzeichen in YAML. Wenn du ein Muster mit `*` beginnst, musst du Anführungszeichen verwenden. | `main`<br/><br/>`releases` |
| `'**'` | Abgleich mit allen Branch- und Tag-Namen. Dies ist das Standardverhalten, wenn du keinen `branches`- oder `tags`-Filter verwendest. | `all/the/branches`<br/><br/>`every/tag` |
| `'*feature'` | Das `*`-Zeichen ist ein Sonderzeichen in YAML. Wenn du ein Muster mit `*` beginnst, musst du Anführungszeichen verwenden. | `mona-feature`<br/><br/>`feature`<br/><br/>`ver-10-feature` |
| `v2*` | Dies gleicht Branch- und Tagnamen ab, die mit `v2` beginnen. | `v2`<br/><br/>`v2.0`<br/><br/>`v2.9` |
| `v[12].[0-9]+.[0-9]+` | Dies gleicht alle Branches und Tags für die semantische Versionierung mit den Hauptversionen 1 oder 2 ab. | `v1.10.1`<br/><br/>`v2.0.0` |

### Muster für den Abgleich von Dateinamen

Pfadmuster müssen mit dem gesamten Pfad übereinstimmen und mit dem Root des Repositorys beginnen.

| Muster | Beschreibung der Übereinstimmungen | Beispiele für Übereinstimmungen |
|---------|------------------------|-----------------|
| `'*'` | Das Platzhalterzeichen `*` gleicht ein beliebiges Zeichen ab, nicht jedoch den Schrägstrich (`/`). Das `*`-Zeichen ist ein Sonderzeichen in YAML. Wenn du ein Muster mit `*` beginnst, musst du Anführungszeichen verwenden. | `README.md`<br/><br/>`server.rb` |
| `'*.jsx?'` | Das `?`-Zeichen gleicht null oder mehrere der vorherigen Zeichen ab. | `page.js`<br/><br/>`page.jsx` |
| `'**'` | Das Platzhalterzeichen `**` gleicht ein beliebiges Zeichen einschließlich Schrägstrich (`/`) ab. Dies ist das Standardverhalten, wenn du keinen `path`-Filter verwendest. | `all/the/files.md` |
| `'*.js'` | Das Platzhalterzeichen `*` gleicht ein beliebiges Zeichen ab, nicht jedoch den Schrägstrich (`/`). Dies gleicht alle `.js`-Dateien im Stamm des Repositorys ab. | `app.js`<br/><br/>`index.js`
| `'**.js'` | Dies gleicht alle `.js`-Dateien im Repository ab. | `index.js`<br/><br/>`js/index.js`<br/><br/>`src/js/app.js` |
| `docs/*`  | Dies gleicht alle Dateien im Stamm des `docs`-Verzeichnisses im Stamm des Repositorys ab. | `docs/README.md`<br/><br/>`docs/file.txt` |
| `docs/**` | Dies gleicht beliebige Dateien im `/docs`-Verzeichnis im Stamm des Repositorys ab. | `docs/README.md`<br/><br/>`docs/mona/octocat.txt` |
| `docs/**/*.md` | Dies gleicht eine Datei mit einem `.md`-Suffix an einer beliebigen Stelle im `docs`-Verzeichnis ab. | `docs/README.md`<br/><br/>`docs/mona/hello-world.md`<br/><br/>`docs/a/markdown/file.md`
| `'**/docs/**'`   | Dies gleicht alle Dateien in einem `docs`-Verzeichnis an einer beliebigen Stelle im Repository ab. | `docs/hello.md`<br/><br/>`dir/docs/my-file.txt`<br/><br/>`space/docs/plan/space.doc`
| `'**/README.md'` | Eine Datei mit dem Namen „README.md“ an beliebiger Stelle im Repository. | `README.md`<br/><br/>`js/README.md`
| `'**/*src/**'` | Dies gleicht eine beliebige Datei in einem Ordner mit einem `src`-Suffix an einer beliebigen Stelle im Repository ab. | `a/src/app.js`<br/><br/>`my-src/code/js/app.js`
| `'**/*-post.md'` | Dies gleicht eine Datei mit dem Suffix `-post.md` an einer beliebigen Stelle im Repository ab. | `my-post.md`<br/><br/>`path/their-post.md` |
| `'**/migrate-*.sql'` | Dies gleicht eine Datei mit dem Präfix `migrate-` und dem Suffix `.sql` an einer beliebigen Stelle im Repository ab. | `migrate-10909.sql`<br/><br/>`db/migrate-v1.0.sql`<br/><br/>`db/sept/migrate-v1.sql` |
| `*.md`<br/><br/>`!README.md` | Durch die Verwendung eines Ausrufezeichens (`!`) vor einem Muster wird dieses negiert. Wenn eine Datei sowohl mit einem Muster übereinstimmt als auch mit einem negativen Muster, das später in der Datei definiert ist, wird die Datei nicht berücksichtigt. | `hello.md`<br/><br/>_Stimmt nicht überein mit_<br/><br/>`README.md`<br/><br/>`docs/hello.md` |
| `*.md`<br/><br/>`!README.md`<br/><br/>`README*` | Die Muster werden sequenziell geprüft. Wenn ein Muster ein vorangegangenes Muster negiert, werden die Dateipfade wieder berücksichtigt. | `hello.md`<br/><br/>`README.md`<br/><br/>`README.doc`|
