---
title: Von Azure-Pipelines zu GitHub-Aktionen migrieren
intro: '{% data variables.product.prodname_actions %} und Azure-Pipelines haben mehrere Ähnlichkeiten in der Konfiguration, was die Migration zu {% data variables.product.prodname_actions %} relativ einfach macht.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-azure-pipelines-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Azure-Pipelines'
  - 'Migration'
  - 'CI'
  - 'CD'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Einführung

Azure-Pipelines und {% data variables.product.prodname_actions %} ermöglichen es Dir, Workflows zu erstellen, die automatisch Code bauen, testen, publizieren, freigeben und bereitstellen. Azure-Pipelines und {% data variables.product.prodname_actions %} haben einige Ähnlichkeiten in der Workflow-Konfiguration:

- Workflow-Konfigurationsdateien werden in YAML geschrieben und im Code-Repository gespeichert.
- Workflows umfassen einen oder mehrere Jobs.
- Jobs beinhalten einen oder mehrere Schritte oder einzelne Befehle.
- Schritte oder Aufgaben können wiederverwendet und in der Community gemeinsam genutzt werden.

Weitere Informationen findest Du unter „[Kernkonzepte für {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)“.

### Wesentliche Unterschiede

Bei der Migration von Azure-Pipelines sollten die folgenden Unterschiede beachtet werden:

- Azure Pipelines unterstützt einen veralteten _klassischen Editor_, mit dem Du Deine CI-Konfiguration in einem GUI-Editor definieren kannst, anstatt die Pipeline-Definition in einer YAML-Datei zu erstellen. {% data variables.product.prodname_actions %} verwendet YAML-Dateien, um Workflows zu definieren, und unterstützt keinen grafischen Editor.
- Azure Pipelines erlaubt Dir, einige Strukturen in Job-Definitionen zu weglassen. Wenn Du zum Beispiel nur einen einzigen Job hast, brauchst Du den Job an sich nicht zu definieren, sondern nur seine Schritte. {% data variables.product.prodname_actions %} erfordert eine explizite Konfiguration und die YAML-Struktur kann nicht weggelassen werden.
- Azure Pipelines unterstützt _„stages“ (Phasen)_ die in der YAML-Datei definiert sind, welche verwendet werden kann, um Workflows für die Bereitstellung zu erstellen. {% data variables.product.prodname_actions %} erfordert, die Phasen in separate YAML-Workflowdateien zu aufzuteilen.
- Bei Azure-Pipelines können lokale Build-Agenten nach Funktionalität ausgewählt werden. Bei {% data variables.product.prodname_actions %} können selbst-gehostete Runner nach Labels ausgewählt werden.

### Jobs und Schritte migrieren

Jobs und Schritte in Azure-Pipelines sind sehr ähnlich zu Jobs und Schritten in {% data variables.product.prodname_actions %}. In beiden Systemen haben Jobs folgende Merkmale:

* Jobs enthalten eine Reihe von Schritten, die nacheinander ausgeführt werden.
* Jobs laufen auf separaten virtuellen Maschinen oder in separaten Containern.
* Jobs werden standardmäßig parallel ausgeführt, können aber so konfiguriert werden, dass sie sequentiell laufen.

### Skriptschritte migrieren

Du kannst in einem Workflow ein Skript oder einen Shell-Befehl als Schritt ausführen. In Azure-Pipelines können Skriptschritte mit dem Schlüssel `script`, `bash`, `powershell` oder `pwsh` festgelegt werden. Skripte können auch als Eingabe für den [Bash-Task](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/bash?view=azure-devops) oder den [PowerShell-Task](https://docs.microsoft.com/azure/devops/pipelines/tasks/utility/powershell?view=azure-devops) angegeben werden.

In {% data variables.product.prodname_actions %} sind alle Skripte mit dem Schlüssel `run` spezifiziert. Um eine bestimmte Shell auszuwählen, kannst Du den Schlüssel `shell` angeben, wenn Du das Skript zur Verfügung stellst. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)“.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table class="d-block">
<tr>
<th>
Azure-Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: scripts
    pool:
      vmImage: 'windows-latest'
    steps:
      - script: echo "This step runs in the default shell"
      - bash: echo "This step runs in bash"
      - pwsh: Write-Host "This step runs in PowerShell Core"
      - task: PowerShell@2
        inputs:
          script: Write-Host "This step runs in PowerShell"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  scripts:
    runs-on: windows-latest
    steps:
      - run: echo "This step runs in the default shell"
      - run: echo "This step runs in bash"
        shell: bash
      - run: Write-Host "This step runs in PowerShell Core"
        shell: pwsh
      - run: Write-Host "This step runs in PowerShell"
        shell: powershell
```
{% endraw %}
</td>
</tr>
</table>

### Unterschiede in der Behandlung von Skriptfehlern

In Azure-Pipelines können Skripte dazu konfiguriert werden, fehlzuschlagen, wenn irgendeine Ausgabe an `stderr` gesendet wird. {% data variables.product.prodname_actions %} unterstützt diese Konfiguration nicht.

{% data variables.product.prodname_actions %} konfiguriert Shells zum "schnellen Scheitern" wann immer möglich , was das Skript sofort beendet, wenn einer der Befehle in einem Skript mit einem Fehlercode endet. Im Gegensatz dazu erfordern Azure-Pipelines explizite Konfiguration, um bei einem Fehler sofort abzubrechen. Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#exit-codes-and-error-action-preference)“.

### Unterschiede in der Standard-Shell unter Windows

In Azure-Pipelines ist die Standard-Shell für Skripte auf Windows-Plattformen die Command-Shell (_cmd.exe_). In {% data variables.product.prodname_actions %} ist die Standard-Shell für Skripte auf Windows-Plattformen die PowerShell. PowerShell hat mehrere Unterschiede in internen Befehlen, Auswertung von Variablen und Flusssteuerung.

Wenn Du einen einfachen Befehl ausführst, kannst Du in PowerShell möglicherweise ein Skript der Command Shell ohne Änderungen laufen lassen. Aber in den meisten Fällen musst Du entweder Dein Skript zur Syntax der PowerShell aktualisieren oder {% data variables.product.prodname_actions %} anweisen, das Skript mit der Command Shell statt mit PowerShell auszuführen. Dies kannst Du tun, indem Du unter `shell` den Wert `cmd` angibst.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table class="d-block">
<tr>
<th>
Azure-Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: run_command
    pool:
      vmImage: 'windows-latest'
    steps:
      - script: echo "This step runs in CMD on Windows by default"
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  run_command:
    runs-on: windows-latest
    steps:
      - run: echo "This step runs in PowerShell on Windows by default"
      - run: echo "This step runs in CMD on Windows explicitly"
        shell: cmd
```
{% endraw %}
</td>
</tr>
</table>

Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#using-a-specific-shell)“.

### Syntax für Bedingungen und Ausdrücke migrieren

Sowohl Azure-Pipelines als auch {% data variables.product.prodname_actions %} können Schritte bedingt ausführen. In Azure-Pipelines werden bedingte Ausdrücke mit dem Schlüssel `condition` angegeben. In {% data variables.product.prodname_actions %} werden bedingte Ausdrücke mit dem Schlüssel `if` angegeben.

Azure-Pipelines verwenden Funktionen innerhalb von Ausdrücken, um Schritte bedingt auszuführen. Im Gegensatz dazu verwenden {% data variables.product.prodname_actions %} eine Infix-Notation. Zum Beispiel musst Du die Funktion `eq` in Azure-Pipelines durch den Operator `==` in {% data variables.product.prodname_actions %} ersetzen.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table class="d-block">
<tr>
<th>
Azure-Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: conditional
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - script: echo "This step runs with str equals 'ABC' and num equals 123"
        condition: and(eq(variables.str, 'ABC'), eq(variables.num, 123))
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  conditional:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This step runs with str equals 'ABC' and num equals 123"
        if: ${{ env.str == 'ABC' && env.num == 123 }}
```
{% endraw %}
</td>
</tr>
</table>

Weitere Informationen findest Du unter „[Kontext- und Ausdrucks-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions)“.

### Abhängigkeiten zwischen Jobs

Sowohl bei Azure-Pipelines als auch bei {% data variables.product.prodname_actions %} kannst Du Abhängigkeiten für einen Job festlegen. In beiden Systemen laufen Jobs standardmäßig parallel, aber Jobabhängigkeiten können explizit angegeben werden. In Azure-Pipelines erfolgt dies mit dem Schlüssel `dependsOn`. In {% data variables.product.prodname_actions %}wird dies mit dem Schlüssel `needs` getan.

Nachfolgend ein Beispiel für die Syntax in jedem System. Die Workflows starten einen ersten Job namens `initial` und wenn dieser Job beendet ist, laufen zwei Jobs namens `fanout1` und `fanout2`. Schließlich, wenn diese Jobs abgeschlossen sind, läuft der Job `fanin`.

<table class="d-block">
<tr>
<th>
Azure-Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: initial
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - script: echo "This job will be run first."
  - job: fanout1
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: initial
    steps:
      - script: echo "This job will run after the initial job, in parallel with fanout2."
  - job: fanout2
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: initial
    steps:
      - script: echo "This job will run after the initial job, in parallel with fanout1."
  - job: fanin:
    pool:
      vmImage: 'ubuntu-latest'
    dependsOn: [fanout1, fanout2]
    steps:
      - script: echo "This job will run after fanout1 and fanout2 have finished."
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  initial:
    runs-on: ubuntu-latest
    steps:
      - run: echo "This job will be run first."
  fanout1:
    runs-on: ubuntu-latest
    needs: initial
    steps:
      - run: echo "This job will run after the initial job, in parallel with fanout2."
  fanout2:
    runs-on: ubuntu-latest
    needs: initial
    steps:
      - run: echo "This job will run after the initial job, in parallel with fanout1."
  fanin:
    runs-on: ubuntu-latest
    needs: [fanout1, fanout2]
    steps:
      - run: echo "This job will run after fanout1 and fanout2 have finished."
```
{% endraw %}
</td>
</tr>
</table>

Weitere Informationen findest Du unter „[Workflow-Syntax für {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)“.

### „Tasks“ (Aufgaben) zu Aktionen migrieren

Azure-Pipelines verwenden _tasks_. Das sind Anwendungskomponenten, die in mehreren Workflows wiederverwendet werden können. {% data variables.product.prodname_actions %} verwenden _Aktionen_, Diese können verwendet werden, um Aufgaben auszuführen und Ihren Workflow anzupassen. In beiden Systemen kannst Du den Namen der zu ausführenden Aufgabe oder Aktion sowie alle erforderlichen Eingaben als Schlüssel/Wert-Paare angeben.

Nachfolgend ein Beispiel für die Syntax in jedem System:

<table>
<tr>
<th>
Azure-Pipelines
</th>
<th>
{% data variables.product.prodname_actions %}
</th>
</tr>
<tr>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  - job: run_python
    pool:
      vmImage: 'ubuntu-latest'
    steps:
      - task: UsePythonVersion@0
        inputs:
          versionSpec: '3.7'
          architecture: 'x64'
      - script: python script.py
```
{% endraw %}
</td>
<td class="d-table-cell v-align-top">
{% raw %}
```yaml
jobs:
  run_python:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/setup-python@v2
        with:
          python-version: '3.7'
          architecture: 'x64'
      - run: python script.py
```
{% endraw %}
</td>
</tr>
</table>

Aktionen zur Verwendung in Deinem Workflow findest du entweder auf dem [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) oder Du kannst eigene Aktionen erstellen. For more information, see "[Creating actions](/actions/creating-actions)."
