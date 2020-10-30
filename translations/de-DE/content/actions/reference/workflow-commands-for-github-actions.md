---
title: Workflow-Befehle für GitHub-Aktionen
shortTitle: Workflow-Befehle
intro: Du kannst Workflow-Befehle verwenden, wenn Du Shell-Befehle in einem Workflow oder im Code einer Aktion ausführst.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Informationen zu Workflow-Befehlen

Aktionen können mit dem Runner-Rechner kommunizieren, um Umgebungsvariablen zu setzen, Werte zur Verwendung in anderen Aktionen auszugeben, Debug-Meldungen zu den Ausgabeprotokollen zuzufügen und für andere Zwecke.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
Most workflow commands use the `echo` command in a specific format, while others are invoked by writing to a file. For more information, see ["Environment files".](#environment-files)
{% else %}
Workflow-Befehle verwenden den Befehl `echo` in einem bestimmten Format.
{% endif %}

``` bash
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% note %}

**Hinweis:** Bei Workflow-Befehl und Parameternamen wird nicht zwischen Groß- und Kleinschreibung unterschieden.

{% endnote %}

{% warning %}

**Warnung:** Wenn Du die Kommandozeile verwendest, lass bei Workflow-Befehlen die doppelten Anführungszeichen (`"`) weg.

{% endwarning %}

### Workflow-Befehle verwenden, um auf Funktionen des Toolkits zuzugreifen

Das [actions/toolkit](https://github.com/actions/toolkit) enthält eine Reihe von Funktionen, die als Workflow-Befehle ausgeführt werden können. Verwende die Syntax `::`, um die Workflow-Befehle in Deiner YAML-Datei auszuführen. Diese Befehle werden dann über `stdout` an den Runner gesandt. For example, instead of using code to set an output, as below:

```javascript
core.setOutput('SELECTED_COLOR', 'green');
```

You can use the `set-output` command in your workflow to set the same value:

{% raw %}
``` yaml
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

Die folgende Tabelle zeigt, welche Toolkit-Funktionen innerhalb eines Workflows verfügbar sind:

| Toolkit-Funktion                                                                                                                                                                    | Äquivalenter Workflow-Befehl                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `core.addPath`                                                                                                                                                                      |                                                         |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Accessible using environment file `GITHUB_PATH`{% else %} `add-path` {% endif %} |                                                         |
|                                                                                                                                                                                     |                                                         |
| `core.debug`                                                                                                                                                                        | `debug`                                                 |
| `core.error`                                                                                                                                                                        | `error`                                                 |
| `core.endGroup`                                                                                                                                                                     | `endgroup`                                              |
| `core.exportVariable`                                                                                                                                                               |                                                         |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Accessible using environment file `GITHUB_ENV`{% else %} `set-env` {% endif %}   |                                                         |
|                                                                                                                                                                                     |                                                         |
| `core.getInput`                                                                                                                                                                     | Zugänglich durch Umgebungsvariable `INPUT_{NAME}`       |
| `core.getState`                                                                                                                                                                     | Zugänglich durch Umgebungsvariable `STATE_{NAME}`       |
| `core.isDebug`                                                                                                                                                                      | Zugänglich durch Umgebungsvariable `RUNNER_DEBUG`       |
| `core.saveState`                                                                                                                                                                    | `save-state`                                            |
| `core.setFailed`                                                                                                                                                                    | Wird als Abkürzung für `::error` und `exit 1` verwendet |
| `core.setOutput`                                                                                                                                                                    | `set-output`                                            |
| `core.setSecret`                                                                                                                                                                    | `add-mask`                                              |
| `core.startGroup`                                                                                                                                                                   | `Gruppe`                                                |
| `core.warning`                                                                                                                                                                      | `warning file`                                          |

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### Setting an environment variable

`::set-env name={name}::{value}`

Erstellt oder aktualisiert eine Umgebungsvariable für alle Aktionen, die als nächstes in einem Auftrag ausgeführt werden. Die Aktion, die die Umgebungsvariable erstellt oder aktualisiert, kann nicht auf den neuen Wert zugreifen; alle nachfolgenden Aktionen in einem Auftrag haben dagegen Zugriff auf den neuen Wert. Bei Umgebungsvariablen wird die Groß- und Kleinschreibung berücksichtigt. Sie können auch Satzzeichen enthalten.

#### Beispiel

``` bash
echo "::set-env name=action_state::yellow"
```
{% endif %}

### Setting an output parameter

`::set-output name={name}::{value}`

Legt den Ausgabeparameter einer Aktion fest.

Optional kannst Du auch Ausgabeparameter in der Metadaten-Datei einer Aktion deklarieren. Weitere Informationen findest Du unter „[Metadaten-Syntax für {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)“.

#### Beispiel

``` bash
echo "::set-output name=action_fruit::strawberry"
```

{% if currentVersion ver_lt "enterprise-server@2.23" %}
### Adding a system path

`::add-path::{path}`

Fügt für alle nachfolgenden Aktionen im aktuellen Auftrag vor der Systemvariablen `PATH` ein Verzeichnis hinzu. Die gerade ausgeführte Aktion kann nicht auf die neue Pfadvariable zugreifen.

#### Beispiel

``` bash
echo "::add-path::/path/to/dir"
```
{% endif %}

### Setting a debug message

`::debug::{message}`

Gibt eine Debugging-Meldung im Protokoll aus. Sie müssen ein Geheimnis mit dem Namen `ACTIONS_STEP_DEBUG` und dem Wert `true` erstellen, um die durch diesen Befehl festgelegten Debugging-Meldungen im Protokoll zu sehen. For more information, see "[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging)."

#### Beispiel

``` bash
echo "::debug::Set the Octocat variable"
```

### Setting a warning message

`::warning file={name},line={line},col={col}::{message}`

Erstellt eine Warnmeldung und fügt die Mitteilung in das Protokoll ein. Optional können Sie einen Dateinamen (`file`), eine Zeilennummer (`line`) und eine Spaltennummer (`col`) angeben, bei der die Warnung angezeigt wurde.

#### Beispiel

``` bash
echo "::warning file=app.js,line=1,col=5::Missing semicolon"
```

### Setting an error message

`::error file={name},line={line},col={col}::{message}`

Erstellt eine Fehlermeldung und fügt die Mitteilung in das Protokoll ein. Optional können Sie einen Dateinamen (`file`), eine Zeilennummer (`line`) und eine Spaltennummer (`col`) angeben, bei der die Warnung angezeigt wurde.

#### Beispiel

``` bash
echo "::error file=app.js,line=10,col=15::Something went wrong"
```

### Masking a value in log

`::add-mask::{value}`

Das Maskieren eines Werts verhindert, dass ein String oder eine Variable im Protokoll ausgegeben werden. Jedes maskierte Wort, getrennt durch Leerzeichen, wird durch das Zeichen `*` ersetzt. Sie können eine Umgebungsvariable oder einen String für den Wert (`value`) der Maske verwenden.

#### Beispiel für das Maskieren eines Strings

Wenn Sie `"Mona The Octocat"` im Protokoll ausgeben, sehen Sie `"***"`.

```bash
echo "::add-mask::Mona The Octocat"
```

#### Beispiel für das Maskieren einer Umgebungsvariablen

Wenn Sie die Variable `MY_NAME` oder den Wert `"Mona The Octocat"` im Protokoll ausgeben, sehen Sie `"***"` statt `"Mona The Octocat"`.

```bash
MY_NAME="Mona The Octocat"
echo "::add-mask::$MY_NAME"
```

### Stopping and starting workflow commands

`::stop-commands::{endtoken}`

Stops processing any workflow commands. This special command allows you to log anything without accidentally running a workflow command. Sie können beispielsweise die Protokollierung anhalten, um ein vollständiges Skript mit Kommentaren auszugeben.

#### Beispiel zum Anhalten von Workflow-Befehlen

``` bash
echo "::stop-commands::pause-logging"
```

To start workflow commands, pass the token that you used to stop workflow commands.

`::{endtoken}::`

#### Beispiel zum Starten von Workflow-Befehlen

``` bash
echo "::pause-logging::"
```

### Werte an die „Pre-“ (Vor-) und „Post-“ (Nach-)Aktionen senden

Mit dem Befehl `save-state` kannst Du Umgebungsvariablen für den Datenaustausch mit der `pre:`- oder `post:`-Aktionen Deines Workflows erzeugen. Zum Beispiel kannst Du mit der `pre:`-Aktion eine Datei erstellen, den Datei-Speicherort an die `main:`-Aktion übergeben und dann mit der `post:`-Aktion die Datei löschen. Alternativ kannst Du eine Datei mit der `main:`-Aktion erstellen, den Dateipfad an die `post:`-Aktion übergeben und ebenfalls mit der `post:`-Aktion die Datei löschen.

Wenn Du mehrere `pre:`- oder `post:`-Aktionen hast, kannst Du auf den gespeicherten Wert nur in der Aktion zugreifen, in der `save-state` verwendet wurde. Weitere Informationen zur `post:`-Aktion findest Du unter „[Metadaten-Syntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#post)“.

Der Befehl `save-state` kann nur innerhalb einer Aktion ausgeführt werden und ist für YAML Dateien nicht verfügbar. Der gespeicherte Wert wird als Umgebungswert mit dem Präfix `STATE_` gespeichert.

Dieses Beispiel verwendet JavaScript, um den Befehl `save-state` auszuführen. Die resultierende Umgebungsvariable heißt `STATE_processID` und hat den Wert `12345`:

``` javascript
console.log('::save-state name=processID::12345')
```

Die Variable `STATE_processID` ist dann exklusiv für das Bereinigungsskript verfügbar, das unter der `main`-Aktion ausgeführt wird. Dieses Beispiel läuft in `main` und verwendet JavaScript, um den Wert anzuzeigen, der der `STATE_processID` Umgebungsvariable zugewiesen wurde:

``` javascript
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
## Environment Files

During the execution of a workflow, the runner generates temporary files that can be used to perform certain actions. The path to these files are exposed via environment variables. You will need to use UTF-8 encoding when writing to these files to ensure proper processing of the commands. Multiple commands can be written to the same file, separated by newlines.

{% warning %}

**Warning:** Powershell does not use UTF-8 by default. Make sure you write files using the correct encoding. For example, you need to set UTF-8 encoding when you set the path:

```
steps:
  - run: echo "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

{% endwarning %}

### Setting an environment variable

`echo "{name}={value}" >> $GITHUB_ENV`

Erstellt oder aktualisiert eine Umgebungsvariable für alle Aktionen, die als nächstes in einem Auftrag ausgeführt werden. Die Aktion, die die Umgebungsvariable erstellt oder aktualisiert, kann nicht auf den neuen Wert zugreifen; alle nachfolgenden Aktionen in einem Auftrag haben dagegen Zugriff auf den neuen Wert. Bei Umgebungsvariablen wird die Groß- und Kleinschreibung berücksichtigt. Sie können auch Satzzeichen enthalten.

#### Beispiel

```bash
echo "action_state=yellow" >> $GITHUB_ENV
```

Running `$action_state` in a future step will now return `yellow`

#### Multline strings
For multiline strings, you may use a delimiter with the following syntax.

```
{name}<<{delimiter}
{value}
{delimiter}
```

#### Beispiel
In this example, we use `EOF` as a delimiter and set the `JSON_RESPONSE` environment variable to the value of the curl response.
```
steps:
  - name: Set the value
    id: step_one
    run: |
        echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
        curl https://httpbin.org/json >> $GITHUB_ENV
        echo 'EOF' >> $GITHUB_ENV
```

### Adding a system path

`echo "{path}" >> $GITHUB_PATH`

Fügt für alle nachfolgenden Aktionen im aktuellen Auftrag vor der Systemvariablen `PATH` ein Verzeichnis hinzu. Die gerade ausgeführte Aktion kann nicht auf die neue Pfadvariable zugreifen.

#### Beispiel

``` bash
echo "/path/to/dir" >> $GITHUB_PATH
```
{% endif %}
