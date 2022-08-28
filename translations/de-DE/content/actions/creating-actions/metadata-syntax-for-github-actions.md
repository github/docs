---
title: Metadaten-Syntax für GitHub-Aktionen
shortTitle: Metadaten-Syntax
intro: 'Du kannst Aktionen erstellen, um Aufgaben in Ihrem Repository zu erledigen. Für Aktionen ist eine Metadaten-Datei erforderlich, welche die YAML-Syntax verwendet.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/metadata-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions
  - /actions/building-actions/metadata-syntax-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: reference
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Informationen zur YAML-Syntax für {% data variables.product.prodname_actions %}

Für Docker- und JavaScript-Aktionen ist eine Metadatendatei erforderlich. Der Dateiname für die Metadaten muss entweder `action.yml` oder `action.yaml` sein. Die Daten in der Metadaten-Datei definieren die Eingaben, Ausgaben und der Haupteinstiegspunkt für die Aktion.

Aktionsmetadatendateien verwenden die YAML-Syntax. Wenn Sie bislang noch nicht mit YAML gearbeitet haben, lesen Sie den Artikel „[Learn YAML in five minutes](https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes)“.

### `name`

**Required** (Erforderlich): Der Name Deiner Aktion. {% data variables.product.prodname_dotcom %} zeigt den `name` auf der Registerkarte **Actions** an, damit Du die Aktionen in jedem Auftrag visuell identifizieren kannst.

### `Autor`

**Optional**: Der Name des Autors der Aktion.

### `Beschreibung`

**Erforderlich** Eine kurze Beschreibung der Aktion.

### `inputs`

**Optional**: Mit Eingabeparametern können Sie die Daten angeben, welche die Aktion während der Laufzeit erwartet. {% data variables.product.prodname_dotcom %} speichert Eingabeparameter als Umgebungsvariablen. Eingabe-IDs in Großbuchstaben werden während der Laufzeit in Kleinbuchstaben umgewandelt. Sie sollten Eingabe-IDs in Kleinbuchstaben verwenden.

#### Beispiel

In diesem Beispiel werden zwei Eingaben konfiguriert: „numOctocats“ und „octocatEyeColor“. Die Eingabe „numOctocats“ ist nicht erforderlich und entspricht standardmäßig dem Wert „1“. Die Eingabe „octocatEyeColor“ ist erforderlich und weist keinen Standardwert auf. Workflow-Dateien, die diese Aktion einsetzen, müssen das Stichwort `with` verwenden, um für „octocatEyeColor“ einen Eingabewert festzulegen. Weitere Informationen zur `with`-Syntax findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepswith)“.

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

Wenn Du eine Eingabe für eine Aktion in einer Workflow-Datei angibst oder einen Standardeingabewert verwendest, erstellt {% data variables.product.prodname_dotcom %} eine Umgebungsvariable für die Eingabe mit dem Namen `INPUT_<NAME_DER_VARIABLEN>`. Die erstellte Umgebungsvariable wandelt Eingabenamen in Großbuchstaben um und ersetzt Leerzeichen durch `_`-Zeichen.

For example, if a workflow defined the `numOctocats` and `octocatEyeColor` inputs, the action code could read the values of the inputs using the `INPUT_NUMOCTOCATS` and `INPUT_OCTOCATEYECOLOR` environment variables.

#### `inputs.<input_id>`

**Erforderlich** Ein Kennzeichner, der die Eingabe identifiziert, als `string`. Der Wert von `<input_id>` ist eine Übersicht zu den Metadaten der Eingabe. Die `<input_id>` muss im Objekt `inputs` als ein eindeutiger Kennzeichner vorhanden sein. Die `<input_id>` muss mit einem Buchstaben oder `_` beginnen und darf nur alphanumerische Zeichen, `-` oder `_` enthalten.

#### `inputs.<input_id>.description`

**Erforderlich** Eine Beschreibung des Eingabeparameters als `String`.

#### `inputs.<input_id>.required`

**Erforderlich**: Ein `boolescher` Wert, um anzugeben, ob für die Aktion der Eingabeparameter erforderlich ist. Legen Sie den Wert `true` fest, wenn der Parameter erforderlich ist.

#### `inputs.<input_id>.default`

**Optional**: Ein `String`, der den Standardwert darstellt. Der Standardwert wird verwendet, wenn ein Eingabeparameter in einer Workflow-Datei nicht angegeben ist.

#### `inputs.<input_id>.deprecationMessage`

**Optional** If the input parameter is used, this `string` is logged as a warning message. You can use this warning to notify users that the input is deprecated and mention any alternatives.

### `outputs`

**Optional**: Ausgabeparameter erlauben Dir, Daten zu deklarieren, die eine Aktion setzt. Aktionen, die in einem Workflow später ausgeführt werden, können die Ausgabedaten der zuvor ausgeführten Aktionen verwenden.  Wenn beispielsweise eine Aktion vorliegt, die zwei Eingaben addiert hat (x + y = z), kann die Aktion die Summe (z) für andere Aktionen ausgeben, damit sie als Eingabe verwendet wird.

Auch wenn Du in der Metadaten-Datei Deiner Aktion keine Ausgabe deklarierst, kannst Du dennoch Ausgaben festlegen und in einem Workflow verwenden. Weitere Informationen zum Festlegen von Ausgaben in einer Aktion findest Du unter "[Workflow-Befehle für {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-output-parameter)."

#### Beispiel

```yaml
outputs:
  sum: # ID der Ausgabe
    description: 'Die Summe der Eingaben'
```

#### `outputs.<output_id>`

**Erforderlich** Ein Kennzeichner, der die Ausgabe identifiziert, als `String`. Der Wert von `<output_id>` ist eine Übersicht zu den Metadaten der Ausgabe. Die `<output_id>` muss im Objekt `outputs` als ein eindeutiger Kennzeichner vorhanden sein. Die `<output_id>` muss mit einem Buchstaben oder `_` beginnen und darf nur alphanumerische Zeichen, `-` oder `_` enthalten.

#### `outputs.<output_id>.description`

**Erforderlich** Eine Beschreibung des Ausgabeparameters als `String`.

### `outputs` for composite run steps actions

**Optional** `outputs` use the same parameters as `outputs.<output_id>` and `outputs.<output_id>.description` (see "[`outputs` for {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)"), but also includes the `value` token.

#### Beispiel

{% raw %}
```yaml
outputs:
  random-number:
    description: "Random number"
    value: ${{ steps.random-number-generator.outputs.random-id }}
runs:
  using: "composite"
  steps:
    - id: random-number-generator
      run: echo "::set-output name=random-id::$(echo $RANDOM)"
      shell: bash
```
{% endraw %}

#### `outputs.<output_id>.value`

**Required** The value that the output parameter will be mapped to. You can set this to a `string` or an expression with context. For example, you can use the `steps` context to set the `value` of an output to the output value of a step.

For more information on how to use context and expression syntax, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

### `runs` for JavaScript actions

**Erforderlich** Konfiguriert den Pfad zum Code der Aktion und zu der Anwendung, die den Code ausführen soll.

#### Beispiel für die Verwendung von Node.js

```yaml
runs:
  using: 'node12'
  main: 'main.js'
```

#### `runs.using`

**Erforderlich** Die Anwendung, welche den in [`main`](#runsmain) angegebenen Code ausführen soll.

#### `runs.main`

**Erforderlich** Die Datei, die den Code Deiner Aktion enthält. Die in [`using`](#runsusing) angegebene Anwendung führt diese Datei aus.

#### `pre`

**Optional** Erlaubt es Dir, ein Skript am Anfang eines Jobs auszuführen, bevor die `main:`-Aktion startet. Du kannst `pre:` zum Beispiel verwenden, um mit einem Setup-Skript die Voraussetzungen zu schaffen. Die mit der Syntax [`using`](#runsusing) angegebene Anwendung wird diese Datei ausführen. Die `pre:`-Aktion wird normalerweise immer ausgeführt, aber Du kannst dies mit [`pre-if`](#pre-if) ändern.

In diesem Beispiel führt die `pre:`-Aktion ein Skript namens `setup.js` aus:

```yaml
runs:
  using: 'node12'
  pre: 'setup.js'
  main: 'index.js'
  post: 'cleanup.js'
```

#### `pre-if`

**Optional** Erlaubt Dir, Bedingungen für die Ausführung der `pre:`-Aktion festzulegen. Die `pre:`-Aktion läuft nur, wenn die Bedingungen in `pre-if` erfüllt sind. Wenn `pre-if` nicht definiert ist, gilt `always()` als Standardwert. Beachte, dass der `step`-Kontext nicht verfügbar ist, da noch keine Schritte ausgeführt wurden.

In diesem Beispiel läuft `cleanup.js` nur auf Linux-basierten Runnern:

```yaml
  pre: 'cleanup.js'
  pre-if: runner.os == 'linux'
```

#### `Beitrag`

**Optional** Erlaubt es Dir, ein Skript am Ende eines Jobs auszuführen, sobald die `main:`-Aktion abgeschlossen ist. Zum Beispiel kannst Du `post:` verwenden, um bestimmte Prozesse zu beenden oder unnötige Dateien zu entfernen. Die mit der Syntax [`using`](#runsusing) angegebene Anwendung wird diese Datei ausführen.

In diesem Beispiel führt die `post:`-Aktion ein Skript namens `cleanup.js` aus:

```yaml
runs:
  using: 'node12'
  main: 'index.js'
  post: 'cleanup.js'
```

Die `post:`-Aktion wird normalerweise immer ausgeführt, aber Du kannst dies mit `post-if` ändern.

#### `post-if`

**Optional** Erlaubt Dir, Bedingungen für die Ausführung der `post:`-Aktion festzulegen. Die `post:`-Aktion läuft nur, wenn die Bedingungen in `post-if` erfüllt sind. Wenn `post-if` nicht definiert ist, gilt `always()` als Standardwert.

In diesem Beispiel läuft `cleanup.js` nur auf Linux-basierten Runnern:

```yaml
  post: 'cleanup.js'
  post-if: runner.os == 'linux'
```

### `runs` for composite run steps actions

**Required** Configures the path to the composite action, and the application used to execute the code.

#### `runs.using`

**Required** To use a composite run steps action, set this to `"composite"`.

#### `runs.steps`

**Required** The run steps that you plan to run in this action.

##### `runs.steps[*].run`

**Required** The command you want to run. This can be inline or a script in your action repository:

{% raw %}
```yaml
runs:
  using: "composite"
  steps:
    - run: ${{ github.action_path }}/test/script.sh
      shell: bash
```
{% endraw %}

Alternatively, you can use `$GITHUB_ACTION_PATH`:

```yaml
runs:
  using: "composite"
  steps:
    - run: $GITHUB_ACTION_PATH/script.sh
      shell: bash
```

For more information, see "[`github context`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)".

##### `runs.steps[*].shell`

**Required** The shell where you want to run the command. You can use any of the shells listed [here](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell).

##### `runs.steps[*].name`

**Optional** The name of the composite run step.

##### `runs.steps[*].id`

**Optional** A unique identifier for the step. Anhand der `id` können Sie in Kontexten auf den Schritt verweisen. Weitere Informationen findest Du unter "[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)".

##### `runs.steps[*].env`

**Optional**  Sets a `map` of environment variables for only that step. If you want to modify the environment variable stored in the workflow, use {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}`echo "{name}={value}" >> $GITHUB_ENV`{% else %}`echo "::set-env name={name}::{value}"`{% endif %} in a composite run step.

##### `runs.steps[*].working-directory`

**Optional**  Specifies the working directory where the command is run.

### `runs` for Docker actions

**Erforderlich** Konfiguriert das Image, welches für die Docker-Aktion verwendet wird.

#### Beispiel für die Nutzung eines Dockerfiles in Deinem Repository

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

#### Beispiel zur Nutzung des öffentlichen Docker-Registry-Containers

```yaml
runs:
  using: 'docker'
  image: 'docker://debian:stretch-slim'
```

#### `runs.using`

**Erforderlich** Du musst diesen Wert auf `'docker'` setzen.

#### `pre-entrypoint`

**Optional** Erlaubt Dir, ein Skript auszuführen, bevor die Aktion `entrypoint` beginnt. Du kannst `pre-entrypoint:` zum Beispiel verwenden, um mit einem Setup-Skript die Voraussetzungen zu schaffen. {% data variables.product.prodname_actions %} verwendet `docker run`, um diese Aktion zu starten, und führt das Skript in einem neuen Container aus, der das gleiche Basis-Image verwendet. Das bedeutet, dass sich der Laufzeitstatus vom Container des Haupt-`entrypoint` unterscheidet, und alle benötigten Zustände müssen entweder im Arbeitsbereich, `HOME`, oder als `STATE_`-Variable verwendet werden. Die `pre-entrypoint:`-Aktion wird normalerweise immer ausgeführt, aber Du kannst dies mit [`pre-if`](#pre-if) ändern.

Die mit der Syntax [`using`](#runsusing) angegebene Anwendung wird diese Datei ausführen.

In diesem Beispiel führt die `pre-entrypoint:`-Aktion ein Skript namens `setup.sh` aus:

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  pre-entrypoint: 'setup.sh'
  entrypoint: 'main.sh'
```

#### `runs.image`

**Erforderlich** Das Docker-Image, das als Container zum Ausführen der Aktion verwendet werden soll. Der Wert kann der Name des Docker-Basis-Images sein, eine lokale `Dockerdatei` in Deinem Repository, oder ein öffentliches Image im Docker-Hub oder in einer anderen Registry. To reference a `Dockerfile` local to your repository, the file must be named `Dockerfile` and you must use a path relative to your action metadata file. Die `Docker`-Anwendung wird diese Datei ausführen.

#### `runs.env`

**Optional** Gibt eine Schlüssel-Wert-Zuordnung von Umgebungsvariablen an, die in der Containerumgebung festgelegt werden sollen.

#### `runs.entrypoint`

**Optional** Überschreibt den `ENTRYPOINT` des Dockers in der `Dockerdatei`oder setzt ihn, falls nicht bereits angegeben. Verwende `Entrypoint`, wenn die `Dockerdatei` gibt keinen `Entrypoint` angibt, oder wenn Du die Anweisung `Entrypoint` überschreiben willst. Wenn Du `Entrypoint` weglässt, werden jene Befehle ausgeführt, welche Du in der Anweisung `Entrypoint` des Dockers angibst. Für die Docker-Anweisung `ENTRYPOINT` gibt es sowohl eine _shell_-Form als auch eine _exec_-Form. Die Docker-Dokumentation für `ENTRYPOINT` empfiehlt die _exec_-Form der `ENTRYPOINT`-Anweisung.

Weitere Informationen dazu, wie die `Entrypoint` ausgeführt wird, findest Du unter "[Dockerdatei-Unterstützung für {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#entrypoint)."

#### `post-entrypoint`

**Optional** Erlaubt Dir, ein Aufräumskript auszuführen, sobald die Aktion `runs.entrypoint` abgeschlossen ist. {% data variables.product.prodname_actions %} verwendet `docker run` um diese Aktion zu starten. Da {% data variables.product.prodname_actions %} das Skript in einem neuen Container mit dem glaichen Basis-Image ausführt, unterscheidet sich der Laufzeitstatus vom Container des Haupt-`entrypoint`. Du kannst auf jeden benötigten Zustand, entweder im Arbeitsbereich, `HOME`, oder als `STATE_`-Variable zugreifen. Die `post-entrypoint:`-Aktion wird normalerweise immer ausgeführt, aber Du kannst dies mit [`post-if`](#post-if) ändern.

```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - 'bzz'
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'
```

#### `runs.args`

**Optional** Ein Array von Strings, welche die Eingaben für einen Docker-Container definieren. Eingaben können hartcodierte Strings enthalten. Beim Start des Containers übergibt {% data variables.product.prodname_dotcom %} die `args`-Anweisung an den `ENTRYPOINT` des Containers.

Die `args`-Anweisungen werden anstelle der `CMD`-Anweisung in einem `Dockerfile` verwendet. Falls Sie `CMD` in Ihrem `Dockerfile` verwenden, sollten Sie sich an die nach Präferenz angeordneten Richtlinien halten:

{% data reusables.github-actions.dockerfile-guidelines %}

Wenn Du Umgebungsvariablen an eine Aktion übergeben musst, stelle sicher, dass Deine Aktion eine Kommando-Shell ausführt, damit die Variablen ausgewertet werden. Wenn z. B. Dein `Entrypoint`-Attribut auf `"sh -c"` gesetzt ist, werden die `args` an eine Kommando-Shell übergeben. Oder wenn Deine `Dockerdatei` einen `Entrypoint` verwendet, um denselben Befehl (`"sh -c"`) auszuführen, werden die `args` ebenfalls an eine Kommando-Shell übergeben.

Weitere Informationen zur Verwendung der Anweisung `CMD` mit {% data variables.product.prodname_actions %}findest Du unter "[Dockerdate-Unterstützung für {% data variables.product.prodname_actions %}](/actions/creating-actions/dockerfile-support-for-github-actions/#cmd)."

##### Beispiel

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

### `branding`

Du kannst mit einer Farbe und [Feder](https://feathericons.com/) ein Badge zu erstellen, um Deine Aktion zu personalisieren und von anderen zu unterscheiden. Badges werden neben Deinem Aktionsnamen in [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) angezeigt.

#### Beispiel

```yaml
branding:
  icon: 'award'  
  color: 'green'
```

#### `branding.color`

Die Hintergrundfarbe des Badges. Kann eine der folgenden sein: `white`, `yellow`, `blue`, `green`, `orange`, `red`, `purple` oder `gray-dark`.

#### `branding.icon`

Der Name des zu verwendenden [Federsymbols](https://feathericons.com/).

<table>
<tr>
<td>Aktivität</td>
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
<td>anchor</td>
<td>aperture</td>
<td>archivieren</td>
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
<td>arrow-up</td>
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
<td>bell</td>
</tr>
<tr>
<td>bluetooth</td>
<td>bold</td>
<td>book-open</td>
<td>book</td>
</tr>
<tr>
<td>bookmark</td>
<td>box</td>
<td>briefcase</td>
<td>calendar</td>
</tr>
<tr>
<td>camera-off</td>
<td>camera</td>
<td>cast</td>
<td>check-circle</td>
</tr>
<tr>
<td>check-square</td>
<td>check</td>
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
<td>clipboard</td>
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
<td>Code</td>
</tr>
<tr>
<td>Befehl</td>
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
<td>download</td>
<td>droplet</td>
<td>edit-2</td>
<td>edit-3</td>
</tr>
<tr>
<td>edit</td>
<td>external-link</td>
<td>eye-off</td>
<td>eye</td>
</tr>
<tr>
<td>facebook</td>
<td>Fast-Forward</td>
<td>feather</td>
<td>file-minus</td>
</tr>
<tr>
<td>file-plus</td>
<td>file-text</td>
<td>Datei</td>
<td>film</td>
</tr>
<tr>
<td>filter</td>
<td>Flag</td>
<td>folder-minus</td>
<td>folder-plus</td>
</tr>
<tr>
<td>folder</td>
<td>gift</td>
<td>git-branch</td>
<td>git-commit</td>
</tr>
<tr>
<td>git-merge</td>
<td>git-pull-request</td>
<td>globe</td>
<td>grid</td>
</tr>
<tr>
<td>hard-drive</td>
<td>Hash</td>
<td>headphones</td>
<td>heart</td>
</tr>
<tr>
<td>help-circle</td>
<td>home</td>
<td>image</td>
<td>inbox</td>
</tr>
<tr>
<td>info</td>
<td>italic</td>
<td>layers</td>
<td>layout</td>
</tr>
<tr>
<td>life-buoy</td>
<td>link-2</td>
<td>link</td>
<td>list</td>
</tr>
<tr>
<td>loader</td>
<td>lock</td>
<td>log-in</td>
<td>log-out</td>
</tr>
<tr>
<td>mail</td>
<td>map-pin</td>
<td>map</td>
<td>maximize-2</td>
</tr>
<tr>
<td>maximize</td>
<td>menu</td>
<td>message-circle</td>
<td>message-square</td>
</tr>
<tr>
<td>mic-off</td>
<td>mic</td>
<td>minimize-2</td>
<td>minimize</td>
</tr>
<tr>
<td>minus-circle</td>
<td>minus-square</td>
<td>minus</td>
<td>monitor</td>
</tr>
<tr>
<td>moon</td>
<td>more-horizontal</td>
<td>more-vertical</td>
<td>move</td>
</tr>
<tr>
<td>music</td>
<td>navigation-2</td>
<td>navigation</td>
<td>octagon</td>
</tr>
<tr>
<td>paketieren</td>
<td>paperclip</td>
<td>pause-circle</td>
<td>pause</td>
</tr>
<tr>
<td>percent</td>
<td>phone-call</td>
<td>phone-forwarded</td>
<td>phone-incoming</td>
</tr>
<tr>
<td>phone-missed</td>
<td>phone-off</td>
<td>phone-outgoing</td>
<td>phone</td>
</tr>
<tr>
<td>pie-chart</td>
<td>play-circle</td>
<td>play</td>
<td>plus-circle</td>
</tr>
<tr>
<td>plus-square</td>
<td>plus</td>
<td>pocket</td>
<td>power</td>
</tr>
<tr>
<td>printer</td>
<td>radio</td>
<td>refresh-ccw</td>
<td>refresh-cw</td>
</tr>
<tr>
<td>repeat</td>
<td>zurücksetzen</td>
<td>rotate-ccw</td>
<td>rotate-cw</td>
</tr>
<tr>
<td>rss</td>
<td>save</td>
<td>scissors</td>
<td>search</td>
</tr>
<tr>
<td>send</td>
<td>server</td>
<td>settings</td>
<td>share-2</td>
</tr>
<tr>
<td>share</td>
<td>shield-off</td>
<td>shield</td>
<td>shopping-bag</td>
</tr>
<tr>
<td>shopping-cart</td>
<td>shuffle</td>
<td>Seitenleiste</td>
<td>skip-back</td>
</tr>
<tr>
<td>skip-forward</td>
<td>slash</td>
<td>sliders</td>
<td>smartphone</td>
</tr>
<tr>
<td>speaker</td>
<td>square</td>
<td>Stern</td>
<td>stop-circle</td>
</tr>
<tr>
<td>sun</td>
<td>sunrise</td>
<td>sunset</td>
<td>tablet</td>
</tr>
<tr>
<td>Tag</td>
<td>target</td>
<td>terminal</td>
<td>thermometer</td>
</tr>
<tr>
<td>thumbs-down</td>
<td>thumbs-up</td>
<td>toggle-left</td>
<td>toggle-right</td>
</tr>
<tr>
<td>trash-2</td>
<td>trash</td>
<td>trending-down</td>
<td>trending-up</td>
</tr>
<tr>
<td>triangle</td>
<td>truck</td>
<td>tv</td>
<td>type</td>
</tr>
<tr>
<td>umbrella</td>
<td>underline</td>
<td>unlock</td>
<td>upload-cloud</td>
</tr>
<tr>
<td>hochladen</td>
<td>user-check</td>
<td>user-minus</td>
<td>user-plus</td>
</tr>
<tr>
<td>user-x</td>
<td>Benutzer</td>
<td>benutzer</td>
<td>video-off</td>
</tr>
<tr>
<td>video</td>
<td>voicemail</td>
<td>volume-1</td>
<td>volume-2</td>
</tr>
<tr>
<td>volume-x</td>
<td>volume</td>
<td>beobachten</td>
<td>wifi-off</td>
</tr>
<tr>
<td>wifi</td>
<td>wind</td>
<td>x-circle</td>
<td>x-square</td>
</tr>
<tr>
<td>x</td>
<td>zap-off</td>
<td>zap</td>
<td>zoom-in</td>
</tr>
<tr>
<td>zoom-out</td>
<td></td>
<td></td>
<td></td>
</table>
