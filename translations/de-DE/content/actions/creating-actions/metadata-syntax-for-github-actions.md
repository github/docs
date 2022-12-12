---
title: Metadatensyntax für GitHub Actions
shortTitle: Metadata syntax
intro: 'Du kannst Aktionen erstellen, um Aufgaben in deinem Repository auszuführen. Für Aktionen ist eine Metadatendatei erforderlich, die die YAML-Syntax verwendet.'
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 9bde653dd7f8b4d04831afa38d29db7300255f57
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107413'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zur YAML-Syntax für {% data variables.product.prodname_actions %}

Alle Aktionen erfordern eine Metadatendatei. Der Name der Metadatendatei muss entweder `action.yml` oder `action.yaml` lauten. Die Daten in der Metadaten-Datei definieren die Eingaben, Ausgaben und Laufzeitkonfiguration für die Aktion.

Metadaten-Dateien der Aktionen verwenden die YAML-Syntax. Lies [YAML in fünf Minuten](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes), wenn du noch keine Erfahrung mit YAML hast.

## `name`

**Erforderlich** Der Name deiner Aktion. {% data variables.product.prodname_dotcom %} zeigt `name` auf der Registerkarte **Aktionen** an, damit Aktionen in jedem Auftrag erkennbar sind.

## `author`

**Optional** Der Name des Autors der Aktion

## `description`

**Erforderlich** Eine kurze Beschreibung der Aktion

## `inputs`

**Optional** Mit Eingabeparametern kannst du die Daten angeben, die die Aktion während der Laufzeit erwartet. {% data variables.product.prodname_dotcom %} speichert Eingabeparameter als Umgebungsvariablen. Eingabe-IDs in Großbuchstaben werden während der Laufzeit in Kleinbuchstaben umgewandelt. Du solltest Eingabe-IDs in Kleinbuchstaben verwenden.

### Beispiel: Angeben von Eingaben

In diesem Beispiel werden zwei Eingaben konfiguriert: „numOctocats“ und „octocatEyeColor“. Die Eingabe „numOctocats“ ist nicht erforderlich und hat standardmäßig den Wert ‚1‘. Die Eingabe „octocatEyeColor“ ist erforderlich und hat keinen Standardwert. Workflowdateien, die diese Aktion nutzen, müssen das Schlüsselwort `with` verwenden, um für „octocatEyeColor“ einen Eingabewert festzulegen. Weitere Informationen zur `with`-Syntax findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith).

```yaml
inputs:
  numOctocats:
    description: 'Number of Octocats'
    required: false
    default: '1'
  octocatEyeColor:
    description: 'Eye color of the Octocats'
    required: true
```

Wenn du eine Eingabe in einer Workflowdatei angibst oder einen Standardeingabewert verwenden, erstellt {% data variables.product.prodname_dotcom %} eine Umgebungsvariable für die Eingabe mit dem Namen `INPUT_<VARIABLE_NAME>`. Die erstellte Umgebungsvariable konvertiert Eingabenamen in Großbuchstaben und ersetzt Leerzeichen durch `_`-Zeichen.

Wenn es sich um eine [zusammengesetzte](/actions/creating-actions/creating-a-composite-action) Aktion handelt, wird `INPUT_<VARIABLE_NAME>` nicht automatisch erstellt. Wenn die Konvertierung nicht stattfindet, kannst du diese Eingaben manuell ändern.

Um auf die Umgebungsvariable in einer Docker-Containeraktion zuzugreifen, musst du die Eingabe mithilfe des Schlüsselworts `args` in der Metadatendatei für die Aktion übergeben. Weitere Informationen zur Metadatendatei für Docker-Containeraktionen findest du unter [Erstellen einer Docker-Containeraktion](/articles/creating-a-docker-container-action#creating-an-action-metadata-file).

Wenn ein Workflow beispielsweise die Eingaben `numOctocats` und `octocatEyeColor` definiert hat, kann der Aktionscode die Werte der Eingaben mithilfe der Umgebungsvariablen `INPUT_NUMOCTOCATS` und `INPUT_OCTOCATEYECOLOR` lesen.

### `inputs.<input_id>`

**Erforderlich** Ein `string`-Bezeichner, der der Eingabe zugeordnet werden soll. Der Wert von `<input_id>` entspricht einer Zuordnung der Metadaten der Eingabe. `<input_id>` muss ein eindeutiger Bezeichner innerhalb des `inputs`-Objekts sein. `<input_id>` muss mit einem Buchstaben oder `_` beginnen und darf nur alphanumerische Zeichen, `-` oder `_` enthalten.

### `inputs.<input_id>.description`

**Erforderlich** Eine `string`-Beschreibung des Eingabeparameters

### `inputs.<input_id>.required`

**Optional** Ein `boolean`-Wert, der angibt, ob die Aktion den Eingabeparameter benötigt. Dieser ist auf `true` festgelegt, wenn der Parameter erforderlich ist.

### `inputs.<input_id>.default`

**Optional** Ein `string`-Wert, der den Standardwert darstellt. Der Standardwert wird verwendet, wenn ein Eingabeparameter in einer Workflow-Datei nicht angegeben ist.

### `inputs.<input_id>.deprecationMessage`

**Optional** Wenn der Eingabeparameter verwendet wird, wird dieser `string`-Wert als Warnmeldung protokolliert. Du kannst diese Warnung verwenden, um Benutzer*innen darüber zu informieren, dass die Eingabe veraltet ist, und mögliche Alternativen erwähnen.

## `outputs` für Docker-Containeraktionen und JavaScript-Aktionen

**Optional** Ausgabeparameter ermöglichen es Ihnen, Daten zu deklarieren, die eine Aktion festlegt. Aktionen, die in einem Workflow später ausgeführt werden, können die Ausgabedaten der zuvor ausgeführten Aktionen verwenden.  Wenn beispielsweise eine Aktion vorliegt, die zwei Eingaben addiert hat (x + y = z), kann die Aktion die Summe (z) für andere Aktionen ausgeben, damit sie dort als Eingabe verwendet wird.

{% data reusables.actions.output-limitations %}

Auch wenn du in der Metadaten-Datei deiner Aktion keine Ausgabe deklarierst, kannst du dennoch Ausgaben festlegen und in einem Workflow verwenden. Weitere Informationen zum Festlegen von Ausgaben in einer Aktion findest du unter [Workflowbefehle für {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter).

### Beispiel: Deklarieren von Ausgaben für Docker-Containeraktionen und JavaScript-Aktionen

```yaml
outputs:
  sum: # id of the output
    description: 'The sum of the inputs'
```

### `outputs.<output_id>`

**Erforderlich** Ein `string`-Bezeichner, der der Ausgabe zugeordnet werden soll. Der Wert von `<output_id>` entspricht einer Zuordnung der Metadaten der Ausgabe. `<output_id>` muss ein eindeutiger Bezeichner innerhalb des `outputs`-Objekts sein. `<output_id>` muss mit einem Buchstaben oder `_` beginnen und darf nur alphanumerische Zeichen, `-` oder `_` enthalten.

### `outputs.<output_id>.description`

**Erforderlich** Eine `string`-Beschreibung des Ausgabeparameters

## `outputs` für zusammengesetzte Aktionen

**Optional** `outputs` verwendet die gleichen Parameter wie `outputs.<output_id>` und `outputs.<output_id>.description` ([`outputs` für Docker-Containeraktionen und JavaScript-Aktionen](#outputs-for-docker-container-and-javascript-actions)), enthält jedoch das Token `value`.

{% data reusables.actions.output-limitations %}

### Beispiel: Deklarieren von Ausgaben für zusammengesetzte Aktionen

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
      run: echo "random-id=$(echo $RANDOM)" >> $GITHUB_OUTPUT
{%- else %}
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
{%- endif %}{% raw %}
      shell: bash
```
{% endraw %}

### `outputs.<output_id>.value`

**Erforderlich** Der Wert, dem der Ausgabeparameter zugeordnet wird. Du kannst diesen auf `string` oder einen Ausdruck mit Kontext festlegen. Du kannst beispielsweise den `steps`-Kontext verwenden, um das `value`-Element einer Ausgabe auf den Ausgabewert eines Schritts festzulegen.

Weitere Informationen zur Verwendung der Kontextsyntax findest du unter [Kontexte](/actions/learn-github-actions/contexts).

## `runs`

**Erforderlich** Gibt an, ob es sich um eine JavaScript-Aktion, eine zusammengesetzte Aktion oder eine Docker-Containeraktion handelt und wie die Aktion ausgeführt wird

## `runs` für JavaScript-Aktionen

**Erforderlich** Konfiguriert den Pfad zum Code der Aktion und die Runtime, die zum Ausführen des Codes verwendet wird

### Beispiel: Verwendung von Node.js {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}v16{% else %}v12{% endif %}

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'main.js'
```

### `runs.using`

**Erforderlich** Die Runtime, mit der der in [`main`](#runsmain) angegebene Code ausgeführt wird.

- Verwende `node12` für Node.js v12.{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
- Verwende `node16` für Node.js 16.{% endif %}

### `runs.main`

**Erforderlich** Die Datei, die deinen Aktionscode enthält. Die in [`using`](#runsusing) angegebene Runtime führt diese Datei aus.

### `runs.pre`

**Optional** Ermöglicht es Ihnen, ein Skript am Anfang eines Auftrags auszuführen, bevor die Aktion `main:` beginnt. Du kannst beispielsweise mit `pre:` ein erforderliches Setupskript ausführen. Die mit der [`using`](#runsusing)-Syntax angegebene Runtime führt diese Datei aus. Die Aktion `pre:` wird standardmäßig immer ausgeführt. Du kannst dies jedoch mit [`runs.pre-if`](#runspre-if) außer Kraft setzen.

In diesem Beispiel führt die Aktion `pre:` ein Skript mit dem Namen `setup.js` aus:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

### `runs.pre-if`

**Optional** Ermöglicht es Ihnen, Bedingungen für die Ausführung der Aktion `pre:` zu definieren. Die Aktion `pre:` wird nur ausgeführt, wenn die Bedingungen in `pre-if` erfüllt sind. Wenn keine festgelegt sind, wird `pre-if` standardmäßig auf `always()` festgelegt. In `pre-if` vergleichen die entsprechenden Funktionen den Status mit dem des Auftrags, nicht mit dem Status der Aktion.

Beachte, dass der `step`-Kontext nicht verfügbar ist, da noch keine Schritte ausgeführt wurden.

In diesem Beispiel kann `cleanup.js` nur mit Linux-basierten Runnern ausgeführt werden.

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

### `runs.post`

**Optional** Ermöglicht es Ihnen, ein Skript am Ende eines Auftrags auszuführen, sobald die Aktion `main:` abgeschlossen wurde. Du kannst beispielsweise `post:` verwenden, um bestimmte Prozesse zu beenden oder nicht benötigte Dateien zu entfernen. Die mit der [`using`](#runsusing)-Syntax angegebene Runtime führt diese Datei aus.

In diesem Beispiel führt die Aktion `post:` ein Skript mit dem Namen `cleanup.js` aus:

```yaml
runs:
  using: {% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}'node16'{% else %}'node12'{% endif %}
  main: 'index.js'
  post: 'cleanup.js'
```

Die Aktion `post:` wird standardmäßig immer ausgeführt. Du kannst dies jedoch mit `post-if` außer Kraft setzen.

### `runs.post-if`

**Optional** Ermöglicht es Ihnen, Bedingungen für die Ausführung der Aktion `post:` zu definieren. Die Aktion `post:` wird nur ausgeführt, wenn die Bedingungen in `post-if` erfüllt sind. Wenn keine festgelegt sind, wird `post-if` standardmäßig auf `always()` festgelegt. In `post-if` vergleichen die entsprechenden Funktionen den Status mit dem des Auftrags, nicht mit dem Status der Aktion.

`cleanup.js` kann beispielsweise nur mit Linux-basierten Runnern ausgeführt werden:

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

## `runs` für zusammengesetzte Aktionen

**Erforderlich** Konfiguriert den Pfad zur zusammengesetzten Aktion

### `runs.using`

**Erforderlich** Du musst diesen Wert auf `'composite'` festlegen.

### `runs.steps`

**Erforderlich** Die Schritte, die in dieser Aktion ausgeführt werden sollen. Dabei kann es sich um `run`- oder `uses`-Schritte handeln.

#### `runs.steps[*].run`

**Optional** Der Befehl, den du ausführen möchtest. Dieser kann inline oder mit einem Skript in deinem Aktionsrepository angegeben werden:

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

Alternativ kannst du auch `$GITHUB_ACTION_PATH` verwenden:

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

Weitere Informationen findest du unter [`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context).

#### `runs.steps[*].shell`

**Optional** Die Shell, in der der Befehl ausgeführt werden soll. Du kannst eine der [hier](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsshell) aufgeführten Shells verwenden. Erforderlich, wenn `run` festgelegt ist.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}
#### `runs.steps[*].if`

**Optional** Du kannst die `if`-Bedingung verwenden, um zu verhindern, dass ein Schritt ausgeführt wird – es sei denn, eine Bedingung ist erfüllt. Du kannst eine Bedingung mit jedem unterstützten Kontext und Ausdruck erstellen.

{% data reusables.actions.expression-syntax-if %} Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions).

**Beispiel: Verwenden von Kontexten**

 Dieser Schritt wird nur ausgeführt, wenn der Ereignistyp `pull_request` und die Ereignisaktion `unassigned` lautet.

 ```yaml
steps:
  - run: echo This event is a pull request that had an assignee removed.
    if: {% raw %}${{ github.event_name == 'pull_request' && github.event.action == 'unassigned' }}{% endraw %}
```

**Beispiel: Verwenden von Funktionen zur Statusüberprüfung**

`my backup step` wird nur ausgeführt, wenn der vorherige Schritt einer zusammengesetzten Aktion nicht erfolgreich war. Weitere Informationen findest du unter [Ausdrücke](/actions/learn-github-actions/expressions#status-check-functions).

```yaml
steps:
  - name: My first step
    uses: octo-org/action-name@main
  - name: My backup step
    if: {% raw %}${{ failure() }}{% endraw %}
    uses: actions/heroku@1.0.0
```
{% endif %}

#### `runs.steps[*].name`

**Optional** Der Name des zusammengesetzten Schritts

#### `runs.steps[*].id`

**Optional** Ein eindeutiger Bezeichner für den Schritt. Du kannst mit `id` auf den Schritt in Kontexten verweisen. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts).

#### `runs.steps[*].env`

**Optional** Legt `map` für Umgebungsvariablen fest, die nur für diesen Schritt vorgesehen sind. Wenn du die im Workflow gespeicherte Umgebungsvariable ändern möchtest, verwende `echo "{name}={value}" >> $GITHUB_ENV` in einem zusammengesetzten Schritt.

#### `runs.steps[*].working-directory`

**Optional** Gibt das Arbeitsverzeichnis an, in dem der Befehl ausgeführt wird

#### `runs.steps[*].uses`

**Optional** Wählt eine Aktion aus, die als Teil eines Schritts in deinem Auftrag ausgeführt werden soll. Eine Aktion ist eine wiederverwendbare Code-Einheit. Du kannst eine Aktion verwenden, die im selben Repository wie der Workflow, in einem öffentlichen Repository oder in einem [veröffentlichten Docker-Containerimage](https://hub.docker.com/) definiert ist.

Es wird dringend empfohlen, die verwendete Version der Aktion zu nennen (Git-Ref, SHA oder Docker-Tag-Nummer angeben). Wenn du keine Version angibst, könnten damit die Workflows gestört werden, oder es wird ein unerwartetes Verhalten hervorgerufen, wenn der bzw. die Besitzer*in der Aktion eine Aktualisierung veröffentlicht.
- Am besten in Hinblick auf Stabilität und Sicherheit ist es, die Commit-SHA einer freigegebenen Version einer Aktion zu verwenden.
- Wenn du dich auf die Hauptversion der Aktion beziehst, kannst du kritische Fehlerbehebungen und Sicherheitspatches erhalten und gleichzeitig die Kompatibilität wahren. Außerdem ist damit sichergestellt, dass der Workflow weiterhin problemlos arbeiteten sollte.
- Die Verwendung des Standardbranches einer Aktion ist zwar auf den ersten Blick praktisch, doch wenn eine neue Hauptversion mit einem Breaking Change veröffentlicht wird, könnte der Workflow unterbrochen werden.

Einige Aktionen erfordern Eingaben, die du mit dem Schlüsselwort [`with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepswith) festlegen musst. Die erforderlichen Eingaben findest du in der README-Datei der Aktion.

```yaml
runs:
  using: "composite"
  steps:
    # Reference a specific commit
    - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
    # Reference the major version of a release
    - uses: {% data reusables.actions.action-checkout %}
    # Reference a specific version
    - uses: {% data reusables.actions.action-checkout %}.2.0
    # Reference a branch
    - uses: actions/checkout@main
    # References a subdirectory in a public GitHub repository at a specific branch, ref, or SHA
    - uses: actions/aws/ec2@main
    # References a local action
    - uses: ./.github/actions/my-action
    # References a docker public registry action
    - uses: docker://gcr.io/cloud-builders/gradle
    # Reference a docker image published on docker hub
    - uses: docker://alpine:3.8
```

#### `runs.steps[*].with`

**Optional** Eine `map` der Eingabeparameter, die durch die Aktion definiert werden. Jeder Eingabeparameter ist ein Schlüssel-Wert-Paar. Weitere Informationen findest du unter [Beispiel: Angeben von Eingaben](#example-specifying-inputs).

```yaml
runs:
  using: "composite"
  steps:
    - name: My first step
      uses: actions/hello_world@main
      with:
        first_name: Mona
        middle_name: The
        last_name: Octocat
```

{% ifversion ghes > 3.5 or ghae > 3.5 %}

#### `runs.steps[*].continue-on-error`

**Optional** Verhindert, dass bei der Aktion ein Fehler auftritt, wenn bei einem Schritt ein Fehler auftritt. Lege dies auf `true` fest, damit die Aktion erfolgreich abgeschlossen werden kann, wenn bei diesem Schritt ein Fehler auftritt.

{% endif %}

## `runs` für Docker-Containeraktionen

**Erforderlich** Konfiguriert das Image, das für die Docker-Containeraktion verwendet wird

### Beispiel: Verwenden eines Dockerfiles in deinem Repository

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

### Beispiel: Verwenden des öffentlichen Docker-Registrierungscontainers

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

### `runs.using`

**Erforderlich** Du musst diesen Wert auf `'docker'` festlegen.

### `runs.pre-entrypoint`

**Optional** Ermöglicht es Ihnen, ein Skript auszuführen, bevor die Aktion `entrypoint` beginnt. Du kannst beispielsweise mit `pre-entrypoint:` ein erforderliches Setupskript ausführen. {% data variables.product.prodname_actions %} verwendet `docker run`, um diese Aktion zu starten, und führt das Skript in einem neuen Container aus, der das gleiche Basisimage verwendet. Das bedeutet, dass sich der Laufzeitstatus vom `entrypoint`-Hauptcontainer unterscheidet, und auf alle benötigten Status muss entweder im Arbeitsbereich `HOME` oder als `STATE_`-Variable zugegriffen werden. Die Aktion `pre-entrypoint:` wird standardmäßig immer ausgeführt. Du kannst dies jedoch mit [`runs.pre-if`](#runspre-if) außer Kraft setzen.

Die mit der [`using`](#runsusing)-Syntax angegebene Runtime führt diese Datei aus.

In diesem Beispiel führt die Aktion `pre-entrypoint:` ein Skript mit dem Namen `setup.sh` aus:

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

### `runs.image`

**Erforderlich** Docker-Image, das beim Ausführen der Aktion als Container herangezogen wird. Der Wert kann der Name des Docker-Basisimages sein, ein lokales `Dockerfile` in deinem Repository oder ein öffentliches Image in Docker Hub oder einer anderen Registrierung. Damit du lokal auf ein `Dockerfile` in deinem Repository verweisen kannst, muss die Datei `Dockerfile` heißen, und du musst einen relativen Pfad zu deiner Metadatendatei für die Aktion verwenden. Die `docker`-Anwendung führt diese Datei aus.

### `runs.env`

**Optional** Gibt eine Schlüssel-Wert-Zuordnung der Umgebungsvariablen an, die in der Containerumgebung festgelegt werden sollen.

### `runs.entrypoint`

**Optional** Überschreibt `ENTRYPOINT` für Docker in `Dockerfile` oder legt einen Einstiegspunkt fest, falls noch keiner vorhanden ist. Verwende `entrypoint`, wenn `ENTRYPOINT` in `Dockerfile` nicht angegeben ist oder du die `ENTRYPOINT`-Anweisung außer Kraft setzen möchtest. Wenn du `entrypoint` auslässt, werden die Befehle ausgeführt, die du in der Docker-Anweisung `ENTRYPOINT` angibst. Für die Docker-Anweisung `ENTRYPOINT` gibt es ein _Shellformat_ und ein _Ausführungsformat_. In der Docker-Dokumentation zu `ENTRYPOINT` wird das _Ausführungsformat_ der `ENTRYPOINT`-Anweisung empfohlen.

Weitere Informationen zur Ausführung von `entrypoint` findest du unter[Dockerfile-Unterstützung für {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint).

### `runs.post-entrypoint`

**Optional** Ermöglicht es Ihnen, ein Bereinigungsskript auszuführen, sobald die Aktion `runs.entrypoint` abgeschlossen ist. {% data variables.product.prodname_actions %} verwendet `docker run`, um diese Aktion zu starten. Da {% data variables.product.prodname_actions %} das Skript in einem neuen Container mit dem gleichen Basisimage ausführt, unterscheidet sich der Laufzeitstatus vom `entrypoint`-Hauptcontainer. Du kannst auf jeden benötigten Status im Arbeitsbereich `HOME` oder als `STATE_`-Variable zugreifen. Die Aktion `post-entrypoint:` wird standardmäßig immer ausgeführt. Du kannst dies jedoch mit [`runs.post-if`](#runspost-if) außer Kraft setzen.

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

### `runs.args`

**Optional** Ein Array aus Zeichenfolgen, die die Eingaben für einen Docker-Container definieren. Eingaben können hartcodierte Strings enthalten. {% data variables.product.prodname_dotcom %} übergibt `args` beim Start des Containers an dessen `ENTRYPOINT`.

Die `args`-Elemente werden anstelle der `CMD`-Anweisung in `Dockerfile` verwendet. Wenn du `CMD` in `Dockerfile` verwendest, befolge diese Hinweise (nach Präferenz sortiert):

{% data reusables.actions.dockerfile-guidelines %}

Wenn du Umgebungsvariablen an eine Aktion übergeben musst, stelle sicher, dass deine Aktion eine Kommando-Shell ausführt, damit die Variablen ausgewertet werden. Wenn dein `entrypoint`-Attribut beispielsweise auf `"sh -c"` festgelegt ist, wird `args` in einer Befehlsshell ausgeführt. Wenn `Dockerfile` jedoch `ENTRYPOINT` für die Ausführung dieses Befehls (`"sh -c"`) verwendet, wird `args` in einer Befehlsshell ausgeführt.

Weitere Informationen zur Verwendung der `CMD`-Anweisung mit {% data variables.product.prodname_actions %} findest du unter [Dockerfile-Unterstützung für {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd).

#### Beispiel: Definieren von Argumenten für den Docker-Container

{% raw %}
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.greeting }}
    - 'foo'
    - 'bar'
```
{% endraw %}

## `branding`

**Optional:** Du kannst ein farbiges [Feather](https://feathericons.com/)-Symbol verwenden, um einen personalisierten Badge für deine Aktion zu erstellen. Badges werden neben dem Aktionsnamen in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) angezeigt.

### Beispiel: Konfigurieren des Brandings für eine Aktion

```yaml
branding:
  icon: 'award'
  color: 'green'
```

### `branding.color`

Die Hintergrundfarbe des Badges Optionen: `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple` oder `gray-dark`

### `branding.icon`

Der Name des zu verwendenden [Feather-Symbols](https://feathericons.com/) (Version 4.28.0). Markensymbole sowie die folgenden Symbole werden ausgelassen:

<table>
<tr>
<td>Kaffee</td>
<td>Spalten</td>
<td>divide-circle</td>
<td>divide-square</td>
</tr>
<tr>
<td>divide</td>
<td>frown</td>
<td>Hexagon</td>
<td>Schlüssel</td>
</tr>
<tr>
<td>meh</td>
<td>mouse-pointer</td>
<td>smile</td>
<td>Tool</td>
</tr>
<tr>
<td>x-octagon</td>
<td></td>
<td></td>
<td></td>
</tr>
</table>

Hier findest du eine vollständige Liste aller derzeit unterstützten Symbole:

<!--
  This table should match the icon list in `app/models/repository_actions/icons.rb` in the internal github repo.
  To support a new icon, update `app/models/repository_actions/icons.rb` and add the svg to `/static/images/icons/feather` in the internal github repo.
-->

<table>
<tr>
<td>activity</td>
<td>airplay</td>
<td>alert-circle</td>
<td>alert-octagon</td>
</tr>
<tr>
<td>alert-triangle</td>
<td>align-center</td>
<td>align-justify</td>
<td>align-left</td>
</tr>
<tr>
<td>align-right</td>
<td>Anker</td>
<td>aperture</td>
<td>archive</td>
</tr>
<tr>
<td>arrow-down-circle</td>
<td>arrow-down-left</td>
<td>arrow-down-right</td>
<td>arrow-down</td>
</tr>
<tr>
<td>arrow-left-circle</td>
<td>arrow-left</td>
<td>arrow-right-circle</td>
<td>arrow-right</td>
</tr>
<tr>
<td>arrow-up-circle</td>
<td>arrow-up-left</td>
<td>arrow-up-right</td>
<td>Pfeil-hoch</td>
</tr>
<tr>
<td>at-sign</td>
<td>award</td>
<td>bar-chart-2</td>
<td>bar-chart</td>
</tr>
<tr>
<td>battery-charging</td>
<td>battery</td>
<td>bell-off</td>
<td>Glocke</td>
</tr>
<tr>
<td>Bluetooth</td>
<td>fett</td>
<td>book-open</td>
<td>book (Buch)</td>
</tr>
<tr>
<td>Lesezeichen (bookmark)</td>
<td>box</td>
<td>briefcase</td>
<td>Kalender</td>
</tr>
<tr>
<td>camera-off</td>
<td>Kamera</td>
<td>Umwandlung</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>Häkchen</td>
<td>chevron-down</td>
<td>chevron-left</td>
</tr>
<tr>
<td>chevron-right</td>
<td>chevron-up</td>
<td>chevrons-down</td>
<td>chevrons-left</td>
</tr>
<tr>
<td>chevrons-right</td>
<td>chevrons-up</td>
<td>circle</td>
<td>Zwischenablage</td>
</tr>
<tr>
<td>clock</td>
<td>cloud-drizzle</td>
<td>cloud-lightning</td>
<td>cloud-off</td>
</tr>
<tr>
<td>cloud-rain</td>
<td>cloud-snow</td>
<td>cloud</td>
<td>code</td>
</tr>
<tr>
<td>command</td>
<td>compass</td>
<td>copy</td>
<td>corner-down-left</td>
</tr>
<tr>
<td>corner-down-right</td>
<td>corner-left-down</td>
<td>corner-left-up</td>
<td>corner-right-down</td>
</tr>
<tr>
<td>corner-right-up</td>
<td>corner-up-left</td>
<td>corner-up-right</td>
<td>cpu</td>
</tr>
<tr>
<td>credit-card</td>
<td>crop</td>
<td>crosshair</td>
<td>database</td>
</tr>
<tr>
<td>delete</td>
<td>disc</td>
<td>dollar-sign</td>
<td>download-cloud</td>
</tr>
<tr>
<td>Download verfügbar ist</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>Bearbeiten</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>Fast-Forward</td>
<td>feather</td>
<td>file-minus</td>
<td>file-plus</td>
</tr>
<tr>
<td>file-text</td>
<td>file</td>
<td>film</td>
<td>filter</td>
</tr>
<tr>
<td>Flag</td>
<td>folder-minus</td>
<td>folder-plus</td>
<td>folder</td>
</tr>
<tr>
<td>gift</td>
<td>git-branch</td>
<td>  git-commit</td>
<td>git-merge</td>
</tr>
<tr>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
<td>hard-drive</td>
</tr>
<tr>
<td>hash</td>
<td>headphones</td>
<td>herzlich</td>
<td>help-circle</td>
</tr>
<tr>
<td>home</td>
<td>image</td>
<td>inbox</td>
<td>info</td>
</tr>
<tr>
<td>kursiv</td>
<td>Ebenen</td>
<td>Layout</td>
<td>life-buoy</td>
</tr>
<tr>
<td>link-2</td>
<td>link</td>
<td>list</td>
<td>loader</td>
</tr>
<tr>
<td>Sperre</td>
<td>log-in</td>
<td>log-out</td>
<td>mail</td>
</tr>
<tr>
<td>map-pin</td>
<td>Karte</td>
<td>maximize-2</td>
<td>maximize</td>
</tr>
<tr>
<td>Menü</td>
<td>message-circle</td>
<td>message-square</td>
<td>mic-off</td>
</tr>
<tr>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
<td>minus-circle</td>
</tr>
<tr>
<td>minus-square</td>
<td>minus</td>
<td>Überwachen</td>
<td>moon</td>
</tr>
<tr>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>Verschieben</td>
<td>music</td>
</tr>
<tr>
<td>navigation-2</td>
<td>navigation</td>
<td>octagon</td>
<td>Paket</td>
</tr>
<tr>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
<td>Prozent</td>
</tr>
<tr>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
<td>phone-missed</td>
</tr>
<tr>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
<td>pie-chart</td>
</tr>
<tr>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
<td>plus-square</td>
</tr>
<tr>
<td>plus</td>
<td>pocket</td>
<td>power</td>
<td>printer</td>
</tr>
<tr>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
<td>wiederholen</td>
</tr>
<tr>
<td>rewind</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
<td>rss</td>
</tr>
<tr>
<td>Speichern</td>
<td>scissors</td>
<td>search</td>
<td>Send</td>
</tr>
<tr>
<td>server</td>
<td>settings</td>
<td>share-2</td>
<td>Freigeben</td>
</tr>
<tr>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
<td>shopping-cart</td>
</tr>
<tr>
<td>Shuffle</td>
<td>sidebar</td>
<td>skip-back</td>
<td>skip-forward</td>
</tr>
<tr>
<td>slash</td>
<td>Schieberegler</td>
<td>smartphone</td>
<td>Lautsprecher</td>
</tr>
<tr>
<td>square</td>
<td>Sternchen</td>
<td>stop-circle</td>
<td>sun</td>
</tr>
<tr>
<td>sunrise</td>
<td>Sonnenuntergang</td>
<td>Tablet</td>
<td>das Tag</td>
</tr>
<tr>
<td>target</td>
<td>terminal</td>
<td>thermometer</td>
<td>thumbs-down</td>
</tr>
<tr>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
<td>trash-2</td>
</tr>
<tr>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
<td>Dreieck</td>
</tr>
<tr>
<td>LKW</td>
<td>tv</td>
<td>type</td>
<td>Regenschirm</td>
</tr>
<tr>
<td>Unterstrichen</td>
<td>Entsperren</td>
<td>upload-cloud</td>
<td>upload</td>
</tr>
<tr>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
<td>user-x</td>
</tr>
<tr>
<td>user</td>
<td>users</td>
<td>video-off</td>
<td>video</td>
</tr>
<tr>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
<td>volume-x</td>
</tr>
<tr>
<td>Volume</td>
<td>watch</td>
<td>wifi-off</td>
<td>wifi</td>
</tr>
<tr>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
<td>x</td>
</tr>
<tr>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
<td>zoom-out</td>
</tr>
</table>
