---
title: Umgebungsvariablen
intro: '{% data variables.product.prodname_dotcom %} legt Standardumgebungsvariablen für jede {% data variables.product.prodname_actions %}-Workflowausführung fest. Du kannst auch benutzerdefinierte Umgebungsvariablen in deiner Workflowdatei festlegen.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 578b85facbb8fc6a7ff45f0d56a460eb3e2ab217
ms.sourcegitcommit: 99eb4456062aea31ca381977396417cf92e5798d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179540'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Informationen zu Umgebungsvariablen

Du kannst Umgebungsvariablen verwenden, um Informationen zu speichern, auf die du in deinem Workflow verweisen möchtest. Der Verweis auf Umgebungsvariablen erfolgt innerhalb eines Workflowschritts oder einer Aktion, und die Variablen werden auf dem Runnercomputer interpoliert, auf dem der Workflow ausgeführt wird. Mit Befehlen, die in Aktionen oder Workflowschritten ausgeführt werden, können Umgebungsvariablen erstellt, ausgelesen oder geändert werden.

Du kannst deine eigenen benutzerdefinierten Umgebungsvariablen festlegen oder die Standardumgebungsvariablen verwenden, die {% data variables.product.prodname_dotcom %} automatisch festlegt, aber auch alle anderen Umgebungsvariablen, die in der Arbeitsumgebung auf dem Runner festgelegt sind. Bei Umgebungsvariablen wird die Groß-/Kleinschreibung berücksichtigt. 

Damit du eine benutzerdefinierte Umgebungsvariable festlegen kannst, musst du diese in der Workflowdatei definieren. Der Geltungsbereich einer benutzerdefinierten Umgebungsvariable ist auf das Element beschränkt, in dem sie definiert wird. Du kannst Umgebungsvariablen definieren, die für Folgendes gelten:

* Den gesamten Workflow, indem du in der Workflowdatei auf der obersten Ebene [`env`](/actions/using-workflows/workflow-syntax-for-github-actions#env) verwendest
* Den Inhalt eines Auftrags in einem Workflow, indem du [`jobs.<job_id>.env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv) verwendest
* Einen bestimmten Schritt innerhalb eines Auftrags, indem du [`jobs.<job_id>.steps[*].env`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsenv) verwendest

{% raw %}
```yaml
name: Greeting on variable day

on:
  workflow_dispatch

env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

Im obigen Beispiel siehst du drei benutzerdefinierte Umgebungsvariablen, die in einem `echo`-Befehl verwendet werden: `$DAY_OF_WEEK`, `$Greeting` und `$First_Name`. Die Werte für diese Umgebungsvariablen werden auf Workflow-, Auftrags- und Schrittebene festgelegt, und ihr Geltungsbereich wird entsprechend beschränkt. 

Da die Interpolation der Umgebungsvariablen nach dem Senden eines Workflowauftrags an einen Runnercomputer durchgeführt wird, musst du die richtige Syntax für die auf dem Runner verwendete Shell verwenden. In diesem Beispiel ist im Workflow `ubuntu-latest` angegeben. Auf Linux-Runnern wird standardmäßig die Bash-Shell verwendet. Daher musst du in diesem Fall die Syntax `$NAME` verwenden. Wenn im Workflow ein Windows-Runner angegeben ist, verwende die Syntax für PowerShell: `$env:NAME`. Weitere Informationen zu Shells findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsshell).

{% note %}

**Hinweis**: Du kannst alle für einen Workflowschritt verfügbaren Umgebungsvariablen auflisten, indem du in einem Schritt <span style="white-space: nowrap;">`run: env`</span> verwendest und dann die Ausgabe für diesen Schritt untersuchst.

{% endnote %}

## Verwenden von Kontexten für den Zugriff auf die Werte von Umgebungsvariablen

Neben Umgebungsvariablen kannst du mit {% data variables.product.prodname_actions %} mithilfe von Kontexten auch Werte festlegen und lesen. Umgebungsvariablen und Kontexte sind für verschiedene Stellen im Workflow vorgesehen.

Umgebungsvariablen werden immer auf dem VM-Runner interpoliert. Teile eines Workflows werden jedoch von {% data variables.product.prodname_actions %} verarbeitet und nicht an den Runner gesendet. In diesen Teilen einer Workflowdatei können keine Umgebungsvariablen verwendet werden. Stattdessen kannst du Kontexte verwenden. Eine `if`-Bedingung, mit der entschieden wird, ob ein Auftrag oder Schritt an den Runner gesendet wird, wird beispielsweise immer von {% data variables.product.prodname_actions %} verarbeitet. In `if`-Bedingungsanweisungen kannst du Kontexte verwenden, um auf die Werte von Umgebungsvariablen zuzugreifen.

{% raw %}
```yaml
env:
  DAY_OF_WEEK: Monday

jobs:
  greeting_job:
    runs-on: ubuntu-latest
    env:
      Greeting: Hello
    steps:
      - name: "Say Hello Mona it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Monday' }}
        run: echo "$Greeting $First_Name. Today is $DAY_OF_WEEK!"
        env:
          First_Name: Mona
```
{% endraw %}

In dieser abgewandelten Version des ersten Beispiels wurde eine `if`-Bedingung ergänzt. Der Workflowschritt wird jetzt nur ausgeführt, wenn `DAYS_OF_WEEK` auf „Monday“ festgelegt ist. In der `if`-Bedingungsanweisung wird auf diesen Wert über den [Kontext `env`](/actions/learn-github-actions/contexts#env-context) zugegriffen.

{% note %}

**Hinweis**: Kontexte werden in der Regel mit einem Dollarzeichen und geschweiften Klammern gekennzeichnet, z. B. {% raw %}`${{ context.property }}`{% endraw %}. In einer `if`-Bedingung sind {% raw %}`${{` und `}}`{% endraw %} optional. Wenn du diese Zeichen verwendest, müssen sie jedoch die gesamte Vergleichsanweisung umschließen, wie oben zu sehen. 

{% endnote %}

Oft wirst du entweder den Kontext `env` oder `github` verwenden, um auf Werte von Umgebungsvariablen in Teilen des Workflows zuzugreifen, die verarbeitet werden, bevor Aufträge an Runner gesendet werden. 


| Kontext | Anwendungsfall | Beispiel |
| --- | --- | --- |
| `env` | Verweisen auf benutzerdefinierte Umgebungsvariablen, die im Workflow definiert sind | <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span> |
| `github` | Verweisen auf Informationen zur Workflowausführung und zu dem Ereignis, durch das die Ausführung ausgelöst wurde | <span style="white-space: nowrap;">{% raw %}`${{ github.repository }}`{% endraw %}</span> |


 
Es gibt noch viele weitere Kontexte, die du für verschiedene Zwecke in deinen Workflows verwenden kannst. Weitere Informationen findest du unter [Kontexte](/actions/learn-github-actions/contexts). Ausführliche Informationen dazu, wo du bestimmte Kontexte innerhalb eines Workflows verwenden kannst, findest du unter [Kontextverfügbarkeit](/actions/learn-github-actions/contexts#context-availability).

### Andere Arten von Variablen

An den meisten Stellen in einem Workflow sind die einzigen Arten von Variablen, die du verwenden kannst, entweder Umgebungsvariablen (z. B. `$MY_VARIABLE`) oder die entsprechende Kontexteigenschaft (z. B. <span style="white-space: nowrap;">{% raw %}`${{ env.MY_VARIABLE }}`{% endraw %}</span>). Es gelten folgende Ausnahmen:

* Eingaben für die Ereignisse `workflow_call` und `workflow_dispatch`, bei denen Werte an einen Workflow übergeben werden können. Weitere Informationen findest du unter [`on.workflow_call.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_callinputs) und [`on.workflow_dispatch.inputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_dispatchinputs).
* Auftragsausgaben, bei denen Werte zwischen Aufträgen in einem Workflow übergeben werden können. Weitere Informationen findest du unter [`jobs.<job_id>.outputs`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs).
* Die Variablen in einem Formatausdruck, bei denen Teile einer Zeichenfolge ersetzt werden können. Weitere Informationen findest du unter [`format`](/actions/learn-github-actions/expressions#format).

## Namens-Konventionen für Umgebungsvariablen

Wenn du eine benutzerdefinierte Umgebungsvariable festlegst, kannst du nicht die Namen von Standardumgebungsvariablen verwenden. Eine vollständige Liste dieser Variablen findest du weiter unten unter [Standardumgebungsvariablen](#default-environment-variables). Wenn du versuchst, den Wert einer dieser Standardumgebungsvariablen zu überschreiben, wird diese Zuweisung ignoriert.

Alle neuen, von Ihnen festgelegten Umgebungsvariablen, die auf einen Ort im Dateisystem verweisen, müssen über die Endung `_PATH` verfügen. Die Standardumgebungsvariablen `GITHUB_ENV` und `GITHUB_WORKSPACE` sind Ausnahmen von dieser Konvention.

## Standardumgebungsvariablen

Die von {% data variables.product.prodname_dotcom %} festgelegten Standardumgebungsvariablen sind in jedem Schritt eines Workflows verfügbar. 

Es wird dringend empfohlen, dass Aktionen Umgebungsvariablen verwenden, um auf das Dateisystem zuzugreifen, anstatt hartcodierte Dateipfade zu verwenden. {% data variables.product.prodname_dotcom %} legt Umgebungsvariablen für Aktionen fest, die in allen Runner-Umgebungen verwendet werden sollen.

| Umgebungsvariable | BESCHREIBUNG |
| ---------------------|------------ |
| `CI` | Immer auf `true` festgelegt. |
| `GITHUB_ACTION` | Name der aktuell ausgeführten Aktion oder der [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)-Wert eines Schritts. Ein Beispiel für eine Aktion wäre `__repo-owner_name-of-action-repo`.<br><br>{% data variables.product.prodname_dotcom %} entfernt Sonderzeichen und verwendet den Namen `__run`, wenn der aktuelle Schritt ein Skript ohne `id` ausführt. Wenn du ein Skript oder eine Aktion in einem Auftrag mehrmals verwendest, enthält der Name ein Suffix, das aus einem Unterstrich, gefolgt von einer laufenden Nummer, besteht. So lautet z. B. der Name des ersten Skripts, das du ausführst, `__run` und der des zweiten `__run_2`. Analog dazu erhält der zweite Aufruf von `actions/checkout` den Namen `actionscheckout2`. |
| `GITHUB_ACTION_PATH` | Pfad einer Aktion. Diese Eigenschaft wird nur in zusammengesetzten Aktionen unterstützt. Mit diesem Pfad kannst du auf Dateien zugreifen, die sich im selben Repository wie die Aktion befinden. Beispiel: `/home/runner/work/_actions/repo-owner/name-of-action-repo/v1`. |
| `GITHUB_ACTION_REPOSITORY` | Bei einem Schritt, in dem eine Aktion ausgeführt wird, gibt diese Eigenschaft den Namen des Besitzers bzw. der Besitzerin und des Repositorys der Aktion an. Beispiel: `actions/checkout`. |
| `GITHUB_ACTIONS` | Wenn {% data variables.product.prodname_actions %} den Workflow ausführt, ist der Wert dieser Variable immer auf `true` festgelegt. Du kannst diese Variable verwenden, um zu differenzieren, wann Tests lokal oder von {% data variables.product.prodname_actions %} durchgeführt werden.
| `GITHUB_ACTOR` | Name der Person oder App, die den Workflow initiiert hat. Beispiel: `octocat`. |
| `GITHUB_API_URL` | Gibt die API-URL zurück. Beispiel: `{% data variables.product.api_url_code %}`.
| `GITHUB_BASE_REF` | Name des Basisverweises oder Zielbranchs des Pull Requests in einer Workflowausführung. Diese Variable wird nur festgelegt, wenn das Ereignis, durch das eine Workflowausführung ausgelöst wird, entweder `pull_request` oder `pull_request_target` ist. Beispiel: `main`. |
| `GITHUB_ENV` | Pfad auf dem Runner zu der Datei, in der Umgebungsvariablen aus Workflowbefehlen festgelegt sind. Diese Datei ist für den aktuellen Schritt eindeutig und ändert sich bei jedem Schritt in einem Auftrag. Beispiel: `/home/runner/work/_temp/_runner_file_commands/set_env_87406d6e-4979-4d42-98e1-3dab1f48b13a`. Weitere Informationen findest du unter [Workflowbefehle für {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable). | 
| `GITHUB_EVENT_NAME` | Der Name des Ereignisses, das den Workflow ausgelöst hat. Beispiel: `workflow_dispatch`. |
| `GITHUB_EVENT_PATH` | Pfad zu der Datei auf dem Runner, die die vollständigen Webhook-Nutzdaten für das Ereignis enthält. Beispiel: `/github/workflow/event.json`. |
| `GITHUB_GRAPHQL_URL` | Gibt die GraphQL-API-URL zurück. Beispiel: `{% data variables.product.graphql_url_code %}`.
| `GITHUB_HEAD_REF` | Der Verweis auf den Hauptbranch oder der Quellbranch des Pull Requests in einer Workflowausführung. Diese Eigenschaft wird nur festgelegt, wenn das Ereignis, durch das eine Workflowausführung ausgelöst wird, entweder `pull_request` oder `pull_request_target` ist. Beispiel: `feature-branch-1`. |
| `GITHUB_JOB` | Die [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) des aktuellen Auftrags. Beispiel: `greeting_job`. |
| `GITHUB_PATH` | Pfad auf dem Runner zu der Datei, in der die `PATH`-Systemvariablen aus Workflowbefehlen festgelegt sind. Diese Datei ist für den aktuellen Schritt eindeutig und ändert sich bei jedem Schritt in einem Auftrag.  Beispiel: `/home/runner/work/_temp/_runner_file_commands/add_path_899b9445-ad4a-400c-aa89-249f18632cf5`. Weitere Informationen findest du unter [Workflowbefehle für {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path). |
| `GITHUB_REF` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} | | `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} | | `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `GITHUB_REPOSITORY` | Der Name des Besitzers und des Repositorys. Beispiel: `octocat/Hello-World`. | | `GITHUB_REPOSITORY_OWNER` | Der Name des Besitzers bzw. der Besitzerin des Repositorys. Beispiel: `octocat`. | | `GITHUB_RETENTION_DAYS` | Anzahl der Tage, für die Protokolle und Artefakte von Workflowausführungen aufbewahrt werden. Beispiel: `90`. | | `GITHUB_RUN_ATTEMPT` | Eine eindeutige Nummer für jeden Versuch einer bestimmten Workflowausführung in einem Repository. Diese Nummer beginnt bei 1 für den ersten Versuch der Workflowausführung und erhöht sich mit jeder weiteren Ausführung um 1. Beispiel: `3`. | | `GITHUB_RUN_ID` | {% data reusables.actions.run_id_description %} Ein Beispiel wäre `1658821493`. | | `GITHUB_RUN_NUMBER` | {% data reusables.actions.run_number_description %} Ein Beispiel wäre `3`. | | `GITHUB_SERVER_URL`| Die URL des {% data variables.product.product_name %}-Servers. Beispiel: `https://{% data variables.product.product_url %}`.
| `GITHUB_SHA` | {% data reusables.actions.github_sha_description %} | {%- ifversion actions-job-summaries %} | `GITHUB_STEP_SUMMARY` | Der Pfad auf dem Runner zu der Datei, die Auftragszusammenfassungen von Workflowbefehlen enthält. Diese Datei ist für den aktuellen Schritt eindeutig und ändert sich bei jedem Schritt in einem Auftrag. Beispiel: `/home/rob/runner/_layout/_work/_temp/_runner_file_commands/step_summary_1cb22d7f-5663-41a8-9ffc-13472605c76c`. Weitere Informationen findest du unter [Workflowbefehle für {% data variables.product.prodname_actions %}](/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary). | {%- endif %} | `GITHUB_WORKFLOW` | Der Name des Workflows. Beispiel: `My test workflow`. Wird in der Workflowdatei kein Wert für `name` festgelegt, entspricht der Wert dieser Variable dem vollständigen Pfad der Workflowdatei im Repository. | | `GITHUB_WORKSPACE` | Das Standardarbeitsverzeichnis auf dem Runner für die Schritte und der Standardspeicherort deines Repositorys beim Verwenden der Aktion [`checkout`](https://github.com/actions/checkout) Beispiel: `/home/runner/work/my-repo-name/my-repo-name`. | {%- ifversion actions-runner-arch-envvars %} | `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %} | {%- endif %} | `RUNNER_DEBUG` | {% data reusables.actions.runner-debug-description %} | | `RUNNER_NAME` | {% data reusables.actions.runner-name-description %} Zum Beispiel `Hosted Agent` | | `RUNNER_OS` | {% data reusables.actions.runner-os-description %} Zum Beispiel `Windows` | | `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %} Zum Beispiel `D:\a\_temp` | {%- ifversion not ghae %} | `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %} Zum Beispiel `C:\hostedtoolcache\windows` | {%- endif %}

{% note %}

**Hinweis:** 

* Wenn du die URL einer Workflowausführung in einem Auftrag verwenden musst, kannst du diese Umgebungsvariablen kombinieren: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`.
* Die meisten Standardumgebungsvariablen verfügen über eine entsprechende Kontexteigenschaft mit einem ähnlichen Namen. So kann beispielsweise der Wert der Umgebungsvariable `GITHUB_REF` während der Workflowverarbeitung mit der Kontexteigenschaft {% raw %}`${{ github.ref }}`{% endraw %} gelesen werden.

{% endnote %}

## Erkennen des Betriebssystems

Mithilfe der Standardumgebungsvariable `RUNNER_OS` und der entsprechenden Kontexteigenschaft <span style="white-space: nowrap;">{% raw %}`${{ runner.os }}`{% endraw %}</span> kannst du eine einzelne Workflowdatei erstellen, die für verschiedene Betriebssysteme verwendet werden kann. Beispielsweise könnte der folgende Workflow erfolgreich ausgeführt werden, wenn du das Betriebssystem von `macos-latest` in `windows-latest` änderst, ohne dass die Syntax der Umgebungsvariablen angepasst werden muss, die je nachdem, welche Shell auf dem Runner verwendet wird, unterschiedlich ist.

{% raw %}
```yaml
jobs:
  if-Windows-else:
    runs-on: macos-latest
    steps:
      - name: condition 1
        if: runner.os == 'Windows'
        run: echo "The operating system on the runner is $env:RUNNER_OS."
      - name: condition 2
        if: runner.os != 'Windows'
        run: echo "The operating system on the runner is not Windows, it's $RUNNER_OS."
```
{% endraw %}

In diesem Beispiel wird mit den beiden `if`-Anweisungen die Eigenschaft `os` des Kontexts `runner` überprüft, um das Betriebssystem des Runners zu ermitteln. Die `if`-Bedingungen werden von {% data variables.product.prodname_actions %} verarbeitet, und nur Schritte, in denen das Ergebnis der Überprüfung `true` lautet, werden an den Runner gesendet. Hier ist immer das Ergebnis einer Überprüfung `true` und das der anderen `false`, sodass nur einer dieser Schritte an den Runner gesendet wird. Sobald der Auftrag an den Runner gesendet wird, wird der Schritt ausgeführt, und die Umgebungsvariable im `echo`-Befehl wird mit der richtigen Syntax interpoliert (`$env:NAME` für PowerShell unter Windows und `$NAME` für Bash und sh unter Linux bzw. macOS). In diesem Beispiel bedeutet die Anweisung `runs-on: macos-latest`, dass der zweite Schritt ausgeführt wird.

## Übergeben von Werten zwischen Schritten und Aufträgen in einem Workflow

 Wenn ein Wert in einem Schritt eines Auftrags generiert wird, kannst du diesen in darauffolgenden Schritten desselben Auftrags verwenden, indem du den Wert einer bereits vorhandenen oder neuen Umgebungsvariable zuweist und diese dann in die `GITHUB_ENV`-Umgebungsdatei schreibst. Die Umgebungsdatei kann direkt von einer Aktion oder über einen Shellbefehl in der Workflowdatei mit dem Schlüsselwort `run` verwendet werden. Weitere Informationen findest du unter [Workflowbefehle für {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable). 
 
 Wenn du einen Wert von einem Schritt in einem Auftrag in einem bestimmten Workflow an einen Schritt in einem anderen Auftrag in diesem Workflow übergeben möchtest, kannst du den Wert als Auftragsausgabe definieren. Dann kannst du in einem Schritt in einem anderen Auftrag auf diese Auftragsausgabe verweisen. Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs). 
 
