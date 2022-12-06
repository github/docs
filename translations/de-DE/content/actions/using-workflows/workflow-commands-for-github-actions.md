---
title: Workflow commands for GitHub Actions (Workflowbefehle für GitHub Actions)
shortTitle: Workflow commands
intro: 'Du kannst Workflow-Befehle verwenden, wenn du Shell-Befehle in einem Workflow oder im Code einer Aktion ausführst.'
defaultTool: bash
redirect_from:
  - /articles/development-tools-for-github-actions
  - /github/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/development-tools-for-github-actions
  - /actions/reference/development-tools-for-github-actions
  - /actions/reference/logging-commands-for-github-actions
  - /actions/reference/workflow-commands-for-github-actions
  - /actions/learn-github-actions/workflow-commands-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b34a96bb62a885031584f3da017fd86b7469a277
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160832'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Workflow-Befehlen

Aktionen können mit dem Runner-Rechner kommunizieren, um Umgebungsvariablen zu setzen, Werte zur Verwendung in anderen Aktionen auszugeben, Debug-Meldungen zu den Ausgabeprotokollen zuzufügen und für andere Zwecke.

Die meisten Workflowbefehle verwenden den Befehl `echo` in einem spezifischen Format, während andere durch Schreiben in eine Datei aufgerufen werden. Weitere Informationen findest du unter [Umgebungsdateien](#environment-files).

### Beispiel

{% bash %}

```bash{:copy}
echo "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::workflow-command parameter1={data},parameter2={data}::{command value}"
```

{% endpowershell %}

{% note %}

**Hinweis:** Bei Workflowbefehls- und Parameternamen wird nicht zwischen Groß- und Kleinschreibung unterschieden.

{% endnote %}

{% warning %}

**Warnung:** Wenn du die Eingabeaufforderung verwendest, lasse doppelte Anführungszeichen (`"`) bei Verwendung von Workflowbefehlen aus.

{% endwarning %}

## Workflow-Befehle verwenden, um auf Funktionen des Toolkits zuzugreifen

Die [Aktionen/Toolkit](https://github.com/actions/toolkit) enthält eine Reihe von Funktionen, die als Workflowbefehle ausgeführt werden können. Verwende die Syntax `::`, um die Workflowbefehle in deiner YAML-Datei auszuführen. Diese Befehle werden dann über `stdout` an den Runner gesendet.

{%- ifversion actions-save-state-set-output-envs %} Anstatt beispielsweise eine Fehleranmerkung über den Code zu erstellen, kannst du wie folgt vorgehen:

```javascript{:copy}
core.error('Missing semicolon', {file: 'app.js', startLine: 1})
```

### Beispiel: Erstellen einer Anmerkung zu einem Fehler

Du kannst den Befehl `error` in deinem Workflow verwenden, um dieselbe Fehleranmerkung zu erstellen:

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: echo "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Create annotation for build error
        run: Write-Output "::error file=app.js,line=1::Missing semicolon"
```
{% endraw %}

{% endpowershell %} {%- else %} Anstatt beispielsweise eine Ausgabe über den Code festzulegen, kannst du wie folgt vorgehen:

```javascript{:copy}
core.setOutput('SELECTED_COLOR', 'green');
```

### Beispiel: Festlegen eines Werts

Du kannst den Befehl `set-output` in deinem Workflow verwenden, um denselben Wert festzulegen:

{% bash %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: echo '::set-output name=SELECTED_COLOR::green'
        id: random-color-generator
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
      - name: Set selected color
        run: Write-Output "::set-output name=SELECTED_COLOR::green"
        id: random-color-generator
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %}

{% endif %}

Die folgende Tabelle zeigt, welche Toolkit-Funktionen innerhalb eines Workflows verfügbar sind:

| Toolkit-Funktion | Äquivalenter Workflow-Befehl |
| ----------------- |  ------------- |
| `core.addPath`    | Barrierefrei mithilfe der Umgebungsdatei `GITHUB_PATH` |
| `core.debug`      | `debug` |
| `core.notice`     | `notice` |
| `core.error`      | `error` |
| `core.endGroup`   | `endgroup` |
| `core.exportVariable` | Barrierefrei mithilfe der Umgebungsdatei `GITHUB_ENV` |
| `core.getInput`   | Barrierefrei mithilfe der Umgebungsvariablen `INPUT_{NAME}` |
| `core.getState`   | Barrierefrei mithilfe der Umgebungsvariablen `STATE_{NAME}` |
| `core.isDebug`    |  Barrierefrei mithilfe der Umgebungsvariablen `RUNNER_DEBUG` |
{%- ifversion actions-job-summaries %} | `core.summary` | Barrierefrei mithilfe der Umgebungsdatei `GITHUB_STEP_SUMMARY` | {%- endif %} | `core.saveState`  | {% ifversion actions-save-state-set-output-envs %}Barrierefrei mithilfe der Umgebungsdatei `GITHUB_STATE`{% else %}`save-state`{% endif %} | | `core.setCommandEcho` | `echo` | | `core.setFailed`  | Wird als Abkürzung für `::error` und `exit 1` verwendet | | `core.setOutput`  | {% ifversion actions-save-state-set-output-envs %}Barrierefrei mithilfe der Umgebungsdatei `GITHUB_OUTPUT`{% else %}`set-output`{% endif %} | | `core.setSecret`  | `add-mask` | | `core.startGroup` | `group` | | `core.warning`    | `warning` |

{% ifversion actions-save-state-set-output-envs %}{% else %}
## Festlegen eines Ausgabeparameters

Legt den Ausgabeparameter einer Aktion fest.

```{:copy}
::set-output name={name}::{value}
```

Optional kannst du auch Ausgabeparameter in der Metadaten-Datei einer Aktion deklarieren. Weitere Informationen findest du unter [Metadatensyntax für {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions).

Du kannst mehrzeilige Zeichenfolgen zum Festlegen eines Ausgabeparameters umgehen, indem du eine Umgebungsvariable erstellst und sie in einem Workflowbefehl verwendest. Weitere Informationen findest du unter [Festlegen einer Umgebungsvariablen](#setting-an-environment-variable).

### Beispiel: Festlegen eines Ausgabeparameters

{% bash %}

```bash{:copy}
echo "::set-output name=action_fruit::strawberry"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::set-output name=action_fruit::strawberry"
```

{% endpowershell %} {% endif %}

## Festlegen einer Debugmeldung

Gibt eine Debugging-Meldung im Protokoll aus. Du musst einen Geheimschlüssel `ACTIONS_STEP_DEBUG` mit dem Wert `true` erstellen, um die Debugmeldungen anzuzeigen, die in diesem Befehl im Protokoll festgelegt sind. Weitere Informationen findest du unter [Aktivieren der Debugprotokollierung](/actions/managing-workflow-runs/enabling-debug-logging).

```{:copy}
::debug::{message}
```

### Beispiel: Festlegen einer Debugmeldung

{% bash %}

```bash{:copy}
echo "::debug::Set the Octocat variable"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::debug::Set the Octocat variable"
```

{% endpowershell %}

## Festlegen einer Benachrichtigung

Erstellt eine Benachrichtigung und fügt diese in das Protokoll ein. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::notice file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Beispiel: Festlegen einer Benachrichtigung

{% bash %}

```bash{:copy}
echo "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::notice file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Festlegen einer Warnmeldung

Erstellt eine Warnmeldung und fügt die Mitteilung in das Protokoll ein. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::warning file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Beispiel: Festlegen einer Warnmeldung

{% bash %}

```bash{:copy}
echo "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::warning file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Festlegen einer Fehlermeldung

Erstellt eine Fehlermeldung und fügt die Mitteilung in das Protokoll ein. {% data reusables.actions.message-annotation-explanation %}

```{:copy}
::error file={name},line={line},endLine={endLine},title={title}::{message}
```

{% data reusables.actions.message-parameters %}

### Beispiel: Festlegen einer Fehlermeldung

{% bash %}

```bash{:copy}
echo "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::error file=app.js,line=1,col=5,endColumn=7::Missing semicolon"
```

{% endpowershell %}

## Gruppieren von Protokollzeilen

Erstellt eine erweiterbare Gruppe im Protokoll. Verwende den Befehl `group`, um eine Gruppe zu erstellen und `title` festzulegen. Alles, was du im Protokoll zwischen den `group` Befehlen `endgroup` einfügst, wird in einem erweiterbaren Eintrag im Protokoll geschachtelt.

```{:copy}
::group::{title}
::endgroup::
```

### Beispiel: Gruppieren von Protokollzeilen

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    steps:
      - name: Group of log lines
        run: |
            echo "::group::My title"
            echo "Inside group"
            echo "::endgroup::"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    steps:
      - name: Group of log lines
        run: |
            Write-Output "::group::My title"
            Write-Output "Inside group"
            Write-Output "::endgroup::"
```

{% endpowershell %}

![Faltbare Gruppe im Workflowausführungsprotokoll](/assets/images/actions-log-group.png)

## Maskieren eines Werts im Protokoll

```{:copy}
::add-mask::{value}
```

Das Maskieren eines Werts verhindert, dass ein String oder eine Variable im Protokoll ausgegeben werden. Jedes maskierte Wort, getrennt durch Leerzeichen, wird durch das Zeichen `*` ersetzt. Du kannst eine Umgebungsvariable oder Zeichenfolge für den Wert `value` der Maske verwenden. Wenn du einen Wert maskierst, wird er als geheim behandelt und auf dem Runner bearbeitet. Wenn du beispielsweise einen Wert maskierst, kannst du diesen Wert nicht als Ausgabe festlegen.

### Beispiel: Maskieren einer Zeichenfolge

Wenn du im Protokoll `"Mona The Octocat"` einfügst, wird `"***"` angezeigt.

{% bash %}

```bash{:copy}
echo "::add-mask::Mona The Octocat"
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
Write-Output "::add-mask::Mona The Octocat"
```

{% endpowershell %}

{% warning %}

**Warnung:** Stelle sicher, dass du das Geheimnis mit „add-mask“ registrierst, bevor es in den Buildprotokollen ausgegeben oder in anderen Workflowbefehlen verwendet wird.

{% endwarning %}

### Beispiel: Maskieren einer Umgebungsvariablen

Wenn du die Variable `MY_NAME` oder den Wert `"Mona The Octocat"` im Protokoll einfügst, wird `"***"` anstelle von `"Mona The Octocat"` angezeigt.

{% bash %}

```yaml{:copy}
jobs:
  bash-example:
    runs-on: ubuntu-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: bash-version
        run: echo "::add-mask::$MY_NAME"
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  powershell-example:
    runs-on: windows-latest
    env:
      MY_NAME: "Mona The Octocat"
    steps:
      - name: powershell-version
        run: Write-Output "::add-mask::$env:MY_NAME"
```

{% endpowershell %}

## Beenden und Starten von Workflowbefehlen

Beendet die Verarbeitung von Workflowbefehlen. Mit diesem speziellen Befehl kannst du alles protokollieren, ohne versehentlich einen Workflowbefehl auszuführen. Du kannst beispielsweise die Protokollierung anhalten, um ein vollständiges Skript mit Kommentaren auszugeben.

```{:copy}
::stop-commands::{endtoken}
```

Um die Verarbeitung von Workflowbefehlen zu beenden, übergib ein eindeutiges Token an `stop-commands`. Um die Verarbeitung von Workflowbefehlen fortzusetzen, übergib dasselbe Token, das du zum Beenden von Workflowbefehlen verwendet hast.

{% warning %}

**Warnung:** Stelle sicher, dass das verwendete Token zufällig generiert und für jede Ausführung eindeutig ist.

{% endwarning %}

```{:copy}
::{endtoken}::
```

### Beispiel: Beenden und Starten von Workflowbefehlen

{% bash %}

{% raw %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: Disable workflow commands
        run: |
          echo '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          stopMarker=$(uuidgen)
          echo "::stop-commands::$stopMarker"
          echo '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          echo "::$stopMarker::"
          echo '::warning:: This is a warning again, because stop-commands has been turned off.'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: Disable workflow commands
        run: |
          Write-Output '::warning:: This is a warning message, to demonstrate that commands are being processed.'
          $stopMarker = New-Guid
          Write-Output "::stop-commands::$stopMarker"
          Write-Output '::warning:: This will NOT be rendered as a warning, because stop-commands has been invoked.'
          Write-Output "::$stopMarker::"
          Write-Output '::warning:: This is a warning again, because stop-commands has been turned off.'
```

{% endraw %}

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %}{% else %}
## Echo von Befehlsausgaben

Aktiviert oder deaktiviert das Echo von Workflowbefehlen. Wenn du beispielsweise den Befehl `set-output` in einem Workflow verwendest, wird ein Ausgabeparameter festgelegt, aber das Protokoll des Workflows zeigt den Befehl nicht selbst an. Wenn du das Echo von Befehlen aktivierst, zeigt das Protokoll den Befehl an, z. B. `::set-output name={name}::{value}`.

```{:copy}
::echo::on
::echo::off
```

Das Echo von Befehlen ist standardmäßig deaktiviert. Wenn Fehler beim Verarbeiten eines Workflowbefehls auftreten, wird dieser als Echo zurückgegeben.

Die Befehle `add-mask`, `debug`, `warning` und `error` unterstützen das Echo nicht, da ihre Ausgaben bereits im Protokoll enthalten sind.

Du kannst das Echo von Befehlen auch global aktivieren, indem du die schrittweise Debugprotokollierung mithilfe des geheimen Schlüssels `ACTIONS_STEP_DEBUG` aktivierst. Weitere Informationen findest du unter [Aktivieren der Debugprotokollierung](/actions/managing-workflow-runs/enabling-debug-logging). Im Gegensatz dazu kannst du das Echo von Befehlen mit dem Workflowbefehl `echo` auf einer detaillierteren Ebene aktivieren, anstatt es für jeden Workflow in einem Repository zu aktivieren.

### Beispiel: Umschalten des Echos von Befehlen

{% bash %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: ubuntu-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          echo '::set-output name=action_echo::disabled'
          echo '::echo::on'
          echo '::set-output name=action_echo::enabled'
          echo '::echo::off'
          echo '::set-output name=action_echo::disabled'
```

{% endbash %}

{% powershell %}

```yaml{:copy}
jobs:
  workflow-command-job:
    runs-on: windows-latest
    steps:
      - name: toggle workflow command echoing
        run: |
          write-output "::set-output name=action_echo::disabled"
          write-output "::echo::on"
          write-output "::set-output name=action_echo::enabled"
          write-output "::echo::off"
          write-output "::set-output name=action_echo::disabled"
```

{% endpowershell %}

Im obigen Beispiel werden die folgenden Zeilen im Protokoll ausgegeben:

```{:copy}
::set-output name=action_echo::enabled
::echo::off
```

Nur die zweiten Workflowbefehle `set-output` und `echo` sind im Protokoll enthalten, da das Befehlsecho nur für deren Ausführung aktiviert war. Auch wenn nicht immer ein Echo erzeugt wird, wird der Ausgabeparameter in jedem Fall festgelegt.
 
{% endif %}

## Werte an die „Pre-“ (Vor-) und „Post-“ (Nach-)Aktionen senden

{% ifversion actions-save-state-set-output-envs %}Du kannst Umgebungsvariablen für die gemeinsame Nutzung mit den Aktionen `pre:` oder `post:` deines Workflows erstellen, indem du in die Datei unter `GITHUB_STATE` schreibst{% else %}Du kannst den Befehl `save-state` verwenden, um Umgebungsvariablen für die gemeinsame Nutzung mit den Aktionen `pre:` oder `post:` deines Workflows zu erstellen{% endif %}. Du kannst beispielsweise eine Datei mit der Aktion `pre:` erstellen, den Dateispeicherort an die Aktion `main:` übergeben und dann die Aktion `post:` verwenden, um die Datei zu löschen. Alternativ kannst du eine Datei mit der Aktion `main:` erstellen, den Dateispeicherort an die Aktion `post:` übergeben und auch die Aktion `post:` verwenden, um die Datei zu löschen.

Wenn mehrere Aktionen `pre:` oder `post:` vorhanden sind, kannst du nur auf den gespeicherten Wert in der Aktion zugreifen, in der {% ifversion actions-save-state-set-output-envs %}der Wert in `GITHUB_STATE` geschrieben wurde{% else %}`save-state` verwendet wurde{% endif %}. Weitere Informationen zur Aktion `post:` findest du unter [Metadatensyntax für {% data variables.product.prodname_actions %}](/actions/creating-actions/metadata-syntax-for-github-actions#runspost).

{% ifversion actions-save-state-set-output-envs %}Die Datei `GITHUB_STATE` ist nur innerhalb einer Aktion verfügbar{% else %}Der Befehl `save-state` kann nur innerhalb einer Aktion ausgeführt werden und ist nicht für YAML-Dateien verfügbar{% endif %}. Der gespeicherte Wert wird als Umgebungswert mit dem Präfix `STATE_` gespeichert.

{% ifversion actions-save-state-set-output-envs %} In diesem Beispiel wird JavaScript verwendet, um in die Datei `GITHUB_STATE` zu schreiben. Die resultierende Umgebungsvariable wird `STATE_processID` genannt und hat den Wert `12345`:

```javascript{:copy}
import * as fs from 'fs'
import * as os from 'os'

fs.appendFileSync(process.env.GITHUB_STATE, `processID=12345${os.EOL}`, {
  encoding: 'utf8'
})
```

{% else %} In diesem Beispiel wird JavaScript zum Ausführen des Befehls `save-state` verwendet. Die resultierende Umgebungsvariable wird `STATE_processID` genannt und hat den Wert `12345`:

```javascript{:copy}
console.log('::save-state name=processID::12345')
```
{% endif %}

Die Variable `STATE_processID` ist dann ausschließlich für das unter der Aktion `main` ausgeführte Bereinigungsskript verfügbar. Dieses Beispiel läuft in `main` und verwendet JavaScript, um den Wert anzuzeigen, der der Umgebungsvariable `STATE_processID` zugewiesen wurde:

```javascript{:copy}
console.log("The running PID from the main action is: " +  process.env.STATE_processID);
```

## Umgebungsdateien

Während der Ausführung eines Workflows generiert der Runner temporäre Dateien, die zum Ausführen bestimmter Aktionen verwendet werden können. Der Pfad zu diesen Dateien wird über Umgebungsvariablen verfügbar gemacht. Du musst UTF-8-Codierung verwenden, wenn du in diese Dateien schreibst, um die ordnungsgemäße Verarbeitung der Befehle sicherzustellen. Mehrere Befehle können in dieselbe Datei geschrieben werden, getrennt durch Zeilenvorschubzeichen.

Die meisten Befehle in den folgenden Beispielen verwenden doppelte Anführungszeichen zum Wiedergeben von Zeichenfolgen, die versuchen, Zeichen wie `$` für Shellvariablennamen zu interpolieren. Um literale Werte in Zeichenfolgen in Anführungszeichen immer zu verwenden, kannst du stattdessen einzelne Anführungszeichen verwenden.

{% powershell %}

{% note %}

**Hinweis:** PowerShell-Versionen 5.1 und niedriger (`shell: powershell`) verwenden standardmäßig kein UTF-8, sodass du die UTF-8-Codierung angeben musst. Beispiel:

```yaml{:copy}
jobs:
  legacy-powershell-example:
    runs-on: windows-latest
    steps:
      - shell: powershell
        run: |
          "mypath" | Out-File -FilePath $env:GITHUB_PATH -Encoding utf8 -Append
```

PowerShell Core-Versionen 6 und höher (`shell: pwsh`) verwenden standardmäßig UTF-8. Beispiel:

```yaml{:copy}
jobs:
  powershell-core-example:
    runs-on: windows-latest
    steps:
      - shell: pwsh
        run: |
          "mypath" >> $env:GITHUB_PATH
```

{% endnote %}

{% endpowershell %}

## Festlegen einer Umgebungsvariablen

{% bash %}

```bash{:copy}
echo "{environment_variable_name}={value}" >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

- Bei Verwendung von PowerShell-Version 6 und höher:

  ```pwsh{:copy}
  "{environment_variable_name}={value}" >> $env:GITHUB_ENV
  ```

- Bei Verwendung von PowerShell-Version 5.1 und niedriger:

  ```powershell{:copy}
  "{environment_variable_name}={value}" | Out-File -FilePath $env:GITHUB_ENV -Encoding utf8 -Append
  ```

{% endpowershell %}

Du kannst eine Umgebungsvariable für alle nachfolgenden Schritte in einem Workflowauftrag verfügbar machen, indem du die Umgebungsvariable definierst oder aktualisierst und diese in die Umgebungsdatei `GITHUB_ENV` schreibst. Der Schritt, der die Umgebungsvariable erstellt oder aktualisiert, hat keinen Zugriff auf den neuen Wert, aber alle nachfolgenden Schritte in einem Auftrag haben Zugriff. Bei Namen von Umgebungsvariablen wird die Groß- und Kleinschreibung berücksichtigt. Du kannst darin auch Satzzeichen verwenden. Weitere Informationen findest du unter [Umgebungsvariablen](/actions/learn-github-actions/environment-variables).

### Beispiel

{% bash %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> $GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      echo "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %}
```yaml{:copy}
steps:
  - name: Set the value
    id: step_one
    run: |
      "action_state=yellow" >> $env:GITHUB_ENV
  - name: Use the value
    id: step_two
    run: |
      Write-Output "${{ env.action_state }}" # This will output 'yellow'
```
{% endraw %}

{% endpowershell %}

### Mehrzeilige Zeichenfolgen

Bei mehrzeiligen Zeichenfolgen kannst du ein Trennzeichen mit der folgenden Syntax verwenden.

```{:copy}
{name}<<{delimiter}
{value}
{delimiter}
```

{% warning %}

**Warnung:** Stelle sicher, dass das verwendete Trennzeichen zufällig generiert und für jede Ausführung eindeutig ist. Weitere Informationen findest du unter [Grundlegendes zum Risiko von Skripteinschleusungen](/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections).

{% endwarning %}

#### Beispiel

In diesem Beispiel wird `EOF` als Trennzeichen verwendet und die Umgebungsvariable `JSON_RESPONSE` auf den Wert der Antwort `curl` festgelegt.

{% bash %}

```yaml{:copy}
steps:
  - name: Set the value in bash
    id: step_one
    run: |
      echo 'JSON_RESPONSE<<EOF' >> $GITHUB_ENV
      curl https://example.com >> $GITHUB_ENV
      echo 'EOF' >> $GITHUB_ENV
```

{% endbash %}

{% powershell %}

```yaml{:copy}
steps:
  - name: Set the value in pwsh
    id: step_one
    run: |
      "JSON_RESPONSE<<EOF" >> $env:GITHUB_ENV
      (Invoke-WebRequest -Uri "https://example.com").Content >> $env:GITHUB_ENV
      "EOF" >> $env:GITHUB_ENV
    shell: pwsh
```

{% endpowershell %}

{% ifversion actions-save-state-set-output-envs %}
## Festlegen eines Ausgabeparameters

Legt den Ausgabeparameter eines Schritts fest. Beachte, dass für den Schritt eine `id` definiert werden muss, um später den Ausgabewert abzurufen.

{% bash %}

```bash{:copy}
echo "{name}={value}" >> $GITHUB_OUTPUT
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{name}=value" >> $env:GITHUB_OUTPUT
```

{% endpowershell %}

### Beispiel

{% bash %}

Dieses Beispiel zeigt, wie man den Ausgabeparameter `SELECTED_COLOR` festlegt und ihn später abruft:

{% raw %}
```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: echo "SELECTED_COLOR=green" >> $GITHUB_OUTPUT
      - name: Get color
        run: echo "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endbash %}

{% powershell %}

{% raw %} Dieses Beispiel zeigt, wie man den Ausgabeparameter `SELECTED_COLOR` festlegt und ihn später abruft:

```yaml{:copy}
      - name: Set color
        id: random-color-generator
        run: |
            "SELECTED_COLOR=green" >> $env:GITHUB_OUTPUT
      - name: Get color
        run: Write-Output "The selected color is ${{ steps.random-color-generator.outputs.SELECTED_COLOR }}"
```
{% endraw %}

{% endpowershell %} {% endif %}

{% ifversion actions-job-summaries %}

## Hinzufügen einer Auftragszusammenfassung

{% bash %}

```bash{:copy}
echo "{markdown content}" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"{markdown content}" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

Du kannst ein benutzerdefiniertes Markdown für die einzelnen Aufträge festlegen, sodass sie auf der Zusammenfassungsseite einer Workflowausführung angezeigt werden. Du kannst Auftragszusammenfassungen verwenden, um eindeutige Inhalte (z. B. Zusammenfassungen von Testergebnissen) anzuzeigen und zu gruppieren, damit Personen, die das Ergebnis einer Workflowausführung anzeigen, nicht in die Protokolle wechseln müssen, um wichtige ausführungsbezogene Informationen (z. B. Fehler) anzuzeigen.

Auftragszusammenfassungen unterstützen [{% data variables.product.prodname_dotcom %}-Markdown](https://github.github.com/gfm/), und du kannst der `GITHUB_STEP_SUMMARY`-Umgebungsdatei eigenen Markdowninhalt für einen Schritt hinzufügen. `GITHUB_STEP_SUMMARY` ist für jeden Schritt in einem Auftrag eindeutig. Weitere Informationen zu der Pro-Schritt-Datei, auf die `GITHUB_STEP_SUMMARY` verweist, findest du unter „[Umgebungsdateien](#environment-files)“.

Bei Abschluss eines Auftrags werden die Zusammenfassungen für alle Schritte in einem Auftrag in einer einzelnen Auftragszusammenfassung gruppiert und auf der Zusammenfassungsseite der Workflowausführung angezeigt. Wenn für mehrere Aufträge Zusammenfassungen generiert werden, werden diese nach Auftragsabschlusszeit sortiert.

### Beispiel

{% bash %}

```bash{:copy}
echo "### Hello world! :rocket:" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```pwsh{:copy}
"### Hello world! :rocket:" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

![Beispiel für eine Markdownzusammenfassung](/assets/images/actions-job-summary-simple-example.png)

### Mehrzeiliger Markdowninhalt

Für mehrzeiligen Markdowninhalt kannst du mit `>>` kontinuierlich Inhalte für den aktuellen Schritt anfügen. Bei jedem Anfügevorgang wird automatisch ein Zeilenvorschubzeichen hinzugefügt.

#### Beispiel

{% bash %}

```yaml
- name: Generate list using Markdown
  run: |
    echo "This is the lead in sentence for the list" >> $GITHUB_STEP_SUMMARY
    echo "" >> $GITHUB_STEP_SUMMARY # this is a blank line
    echo "- Lets add a bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- Lets add a second bullet point" >> $GITHUB_STEP_SUMMARY
    echo "- How about a third one?" >> $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Generate list using Markdown
  run: |
    "This is the lead in sentence for the list" >> $env:GITHUB_STEP_SUMMARY
    "" >> $env:GITHUB_STEP_SUMMARY # this is a blank line
    "- Lets add a bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- Lets add a second bullet point" >> $env:GITHUB_STEP_SUMMARY
    "- How about a third one?" >> $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Überschreiben von Auftragszusammenfassungen

Zum Löschen aller Inhalte für den aktuellen Schritt kannst du mit `>` alle zuvor hinzugefügten Inhalte überschreiben.

#### Beispiel

{% bash %}

```yaml
- name: Overwrite Markdown
  run: |
    echo "Adding some Markdown content" >> $GITHUB_STEP_SUMMARY
    echo "There was an error, we need to clear the previous Markdown with some new content." > $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Overwrite Markdown
  run: |
    "Adding some Markdown content" >> $env:GITHUB_STEP_SUMMARY
    "There was an error, we need to clear the previous Markdown with some new content." > $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

### Entfernen von Auftragszusammenfassungen

Zum vollständigen Entfernen einer Zusammenfassung für den aktuellen Schritt kannst du die Datei löschen, auf die `GITHUB_STEP_SUMMARY` verweist.

#### Beispiel

{% bash %}

```yaml
- name: Delete all summary content
  run: |
    echo "Adding Markdown content that we want to remove before the step ends" >> $GITHUB_STEP_SUMMARY
    rm $GITHUB_STEP_SUMMARY
```

{% endbash %}

{% powershell %}

```yaml
- name: Delete all summary content
  run: |
    "Adding Markdown content that we want to remove before the step ends" >> $env:GITHUB_STEP_SUMMARY
    rm $env:GITHUB_STEP_SUMMARY
```

{% endpowershell %}

Nachdem ein Schritt abgeschlossen wurde, werden Auftragszusammenfassungen hochgeladen, und zuvor hochgeladene Markdowninhalte können durch nachfolgende Schritte nicht geändert werden. Alle Geheimnisse, die versehentlich hinzugefügt wurden, werden von Zusammenfassungen automatisch maskiert. Wenn eine Auftragszusammenfassung vertrauliche Informationen enthält, die gelöscht werden müssen, kannst du die gesamte Workflowausführung löschen, um alle zugehörigen Auftragszusammenfassungen zu entfernen. Weitere Informationen findest du unter „[Löschen einer Workflowausführung](/actions/managing-workflow-runs/deleting-a-workflow-run)“.

### Schrittisolierung und Grenzwerte

Auftragszusammenfassungen werden zwischen Schritten isoliert und jeder Schritt ist auf eine maximale Größe von 1 MiB beschränkt. Die Isolation wird zwischen Schritten erzwungen, damit das Markdownrendering für nachfolgende Schritte nicht durch potenziell fehlerhaftes Markdown unterbrochen werden kann. Wenn für einen Schritt Inhalte von mehr als 1 MiB hinzugefügt werden, schlägt der Upload für den Schritt fehl, und es wird eine Fehleranmerkung erstellt. Uploadfehler bei Auftragszusammenfassungen wirken sich nicht auf den Gesamtstatus eines Schritts oder Auftrags aus. Pro Auftrag werden maximal 20 Auftragszusammenfassungen aus Schritten angezeigt.

{% endif %}

## Hinzufügen eines Systempfads

Stellt ein Verzeichnis der Systemvariable `PATH` vor und stellt es automatisch für alle nachfolgenden Aktionen im aktuellen Auftrag zur Verfügung. Die aktuell ausgeführte Aktion kann nicht auf die aktualisierte Pfadvariable zugreifen. Um die aktuell definierten Pfade für deinen Auftrag anzuzeigen, kannst du in einem Schritt oder einer Aktion `echo "$PATH"` verwenden.

{% bash %}

```bash{:copy}
echo "{path}" >> $GITHUB_PATH
```
{% endbash %}

{% powershell %}

```pwsh{:copy}
"{path}" >> $env:GITHUB_PATH
```

{% endpowershell %}

### Beispiel

{% bash %}

In diesem Beispiel wird veranschaulicht, wie du das Benutzerverzeichnis `$HOME/.local/bin` zu `PATH` hinzufügst:

```bash{:copy}
echo "$HOME/.local/bin" >> $GITHUB_PATH
```

{% endbash %}

{% powershell %}

In diesem Beispiel wird veranschaulicht, wie du das Benutzerverzeichnis `$env:HOMEPATH/.local/bin` zu `PATH` hinzufügst:

```pwsh{:copy}
"$env:HOMEPATH/.local/bin" >> $env:GITHUB_PATH
```

{% endpowershell %}
