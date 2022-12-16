---
title: Wiederverwenden von Workflows
shortTitle: Reuse workflows
intro: 'Hier erfährst du, wie du beim Erstellen eines Workflows Duplizierungen vermeiden kannst, indem du bereits vorhandene Workflows erneut verwendest.'
redirect_from:
  - /actions/learn-github-actions/reusing-workflows
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Workflows
ms.openlocfilehash: 2053b2bfd653a1f6633ab5d568e5b2fdb75d7335
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191926'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.reusable-workflows-enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

Damit du nicht zwischen Workflows kopieren musst, kannst du Workflows wiederverwendbar machen. Du und alle anderen, die Zugriff auf den wiederverwendbaren Workflow haben, können diesen dann in einem anderen Workflow aufrufen.

Durch das Wiederverwenden von Workflows wird Duplizierung vermieden. Dies vereinfacht die Wartung von Workflows und ermöglicht ein schnelleres Erstellen neuer Workflows, da auf der Arbeit anderer aufgebaut werden kann, genau wie bei Aktionen. Die Wiederverwendung von Workflows fördert auch die Nutzung bewährter Methoden, da sie dich dabei unterstützt, gut strukturierte Workflows zu verwenden, die bereits getestet wurden und sich als effektiv erwiesen haben. Deine Organisation kann eine Bibliothek mit wiederverwendbaren Workflows erstellen, die zentral verwaltet werden kann.

Das folgende Diagramm zeigt eine laufende Workflowausführung, die einen wiederverwendbaren Workflow verwendet.

* Nachdem jeder der drei Buildaufträge auf der linken Seite des Diagramms erfolgreich abgeschlossen wurde, wird ein abhängiger Auftrag namens „Deploy“ ausgeführt.
* Im „Deploy“-Auftrag wird ein wiederverwendbarer Workflow aufgerufen, der drei Aufträge enthält: „Staging“, „Review“ und „Production“.
* Der Bereitstellungsauftrag „Production“ wird erst ausgeführt, wenn der Auftrag „Staging“ erfolgreich abgeschlossen wurde.
* Wenn ein Auftrag auf eine Umgebung abzielt, zeigt die Workflowausführung eine Statusleiste an, die die Anzahl der Schritte im Auftrag anzeigt. Im folgenden Diagramm enthält der Auftrag „Production“ acht Schritte, wobei Schritt 6 derzeit verarbeitet wird.
* Die Nutzung eines wiederverwendbaren Workflows für das Ausführen von Bereitstellungsaufträgen ermöglicht dir das Ausführen dieser Aufträge für jeden Build, ohne dass du Code in Workflows duplizieren musst.

![Diagramm mit einem wiederverwendbaren Workflow für die Bereitstellung](/assets/images/help/images/reusable-workflows-ci-cd.png)

Ein Workflow, in dem ein anderer Workflow verwendet wird, wird als aufrufender Workflow bezeichnet. Der wiederverwendbare Workflow ist ein aufgerufener Workflow. In einem aufrufenden Workflow können mehrere aufgerufene Workflows verwendet werden. Auf jeden aufgerufenen Workflow wird in nur jeweils einer Zeile verwiesen. Dies führt dazu, dass die Datei mit dem aufrufenden Workflow möglicherweise nur ein paar wenige Zeilen YAML-Code enthält, beim Ausführen jedoch viele Tasks ausführt. Wenn du einen Workflow wiederverwendest, wird der gesamte aufgerufene Workflow verwendet, als wäre er Teil des aufrufenden Workflows.

Wenn du einen Workflow aus einem anderen Repository wiederverwendest, werden alle Aktionen im aufgerufenen Workflow ausgeführt, als wären sie Teil des aufrufenden Workflows. Wenn im aufgerufenen Workflow `actions/checkout` verwendet wird, überprüft die Aktion beispielsweise den Inhalt des Repositorys, in dem der aufrufende Workflow gehostet wird, nicht den des Repositorys des aufgerufenen Workflows.

Wenn ein wiederverwendbarer Workflow durch einen aufrufenden Workflow ausgelöst wird, wird der Kontext `github` immer dem aufrufenden Workflow zugeordnet. Dem aufgerufenen Workflow wird automatisch Zugriff auf `github.token` und `secrets.GITHUB_TOKEN` gewährt. Weitere Informationen zum Kontext `github` findest du unter [Syntax für Kontexte und Ausdrücke für GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#github-context).

Du kannst die wiederverwendeten Workflows, auf die in deinen {% data variables.product.prodname_actions %}-Workflows verwiesen wird, im Abhängigkeitsdiagramm des Repositorys, in dem deine Workflows sich befinden, als Abhängigkeiten anzeigen. Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

### Wiederverwendbare Workflows und Starterworkflows

Mit Starterworkflows können alle Personen in deiner Organisation, die über die entsprechenden Berechtigungen verfügen, Workflows schneller und leichter erstellen. Wenn sie einen neuen Workflow erstellen, können sie einen Starterworkflow auswählen und sich so das Schreiben des Workflows ganz oder teilweise sparen. In einem Starterworkflow kann auch auf wiederverwendbare Workflows verwiesen werden, damit Benutzer*innen leicht von der Wiederverwendung zentral verwalteten Workflowcodes profitieren können. Wenn du beim Verweisen auf den wiederverwendbaren Workflow einen Commit-SHA verwendest, kannst du sicherstellen, dass Personen, die diesen Workflow wiederverwenden, immer denselben YAML-Code nutzen. Wenn du über ein Tag oder einen Branch auf einen wiederverwendbaren Workflow verweist, musst du jedoch sicherstellen, dass diese Version des Workflows vertrauenswürdig ist. Weitere Informationen findest du unter [Sicherheitshärtung für {% data variables.product.prodname_actions %}](/actions/security-guides/security-hardening-for-github-actions#reusing-third-party-workflows).

Weitere Informationen findest du unter [Erstellen von Starterworkflows für deine Organisation](/actions/learn-github-actions/creating-starter-workflows-for-your-organization).

## Zugriff auf wiederverwendbare Workflows

Ein wiederverwendbarer Workflow kann von einem anderen Workflow verwendet werden, wenn {% ifversion ghes or ghec or ghae %}eine{% else %}eine{% endif %} der folgenden Aussagen zutrifft:

* Beide Workflows befinden sich im selben Repository.
* Der aufgerufene Workflow befindet sich in einem öffentlichen Repository{% ifversion actions-workflow-policy %}, und {% ifversion ghec %}dein Unternehmen{% else %}deine Organisation{% endif %} gestattet die Nutzung öffentlicher wiederverwendbarer Workflows{% endif %}.{% ifversion ghes or ghec or ghae %}
* Der aufgerufene Workflow befindet sich in einem internen Repository, und die Einstellungen für dieses Repository ermöglichen den Zugriff darauf. Weitere Informationen findest du unter {% ifversion internal-actions %}[Freigeben von Aktionen und Workflows für dein Unternehmen](/actions/creating-actions/sharing-actions-and-workflows-with-your-enterprise){% else %}[Verwalten von {% data variables.product.prodname_actions %}-Einstellungen für ein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository){% endif %}.{% endif %}

## Verwenden von Runnern

{% ifversion fpt or ghes or ghec %}

### Verwenden von auf GitHub gehosteten Runnern

Die Zuweisung von auf {% data variables.product.prodname_dotcom %} gehosteten Runnern wird immer nur mit dem Kontext des aufrufenden Workflows ausgewertet. Die Abrechnung für auf {% data variables.product.prodname_dotcom %} gehostete Runner wird immer dem aufrufenden Workflow zugeordnet. Der aufrufende Workflow kann auf {% data variables.product.prodname_dotcom %} gehostete Runner nicht über das aufgerufene Repository verwenden. Weitere Informationen findest du unter [Informationen zu auf {% data variables.product.prodname_dotcom %} gehosteten Runnern](/actions/using-github-hosted-runners/about-github-hosted-runners).

### Verwenden von selbstgehosteten Runnern

{% endif %}

Aufgerufene Workflows, die demselben Benutzer bzw. derselben Benutzerin oder derselben Organisation{% ifversion ghes or ghec or ghae %} oder demselben Unternehmen{% endif %} gehören wie der aufrufende Workflow, können über den Kontext des aufrufenden Workflows auf selbstgehostete Runner zugreifen. Dies bedeutet, dass ein aufgerufener Workflow auf selbstgehostete Runner zugreifen kann, auf die Folgendes zutrifft:
* Du befindest dich im Repository des aufrufenden Workflows.
* Du gehörst zur selben Organisation{% ifversion ghes or ghec or ghae %} oder zum selben Unternehmen{% endif %} wie das Repository des aufrufenden Workflows, und der Runner wurde für das aufrufende Repository verfügbar gemacht.

## Einschränkungen

{% ifversion nested-reusable-workflow %}
* Du kannst bis zu vier Workflowebenen verbinden. Weitere Informationen findest du unter [Schachteln wiederverwendbarer Workflows](#nesting-reusable-workflows).
{% else %}
* In wiederverwendbaren Workflows können keine anderen wiederverwendbaren Workflows aufgerufen werden.
{% endif %}
* In einem privaten Repository gespeicherte wiederverwendbare Workflows können nur von Workflows innerhalb desselben Repositorys verwendet werden.
* Alle Umgebungsvariablen, die in einem `env`-Kontext festgelegt werden, der im aufrufenden Workflow auf Workflowebene definiert ist, werden nicht an den aufgerufenen Workflow übergeben. Weitere Informationen zum Kontext `env` findest du unter [Syntax für Kontext und Ausdrücke bei GitHub Actions](/actions/reference/context-and-expression-syntax-for-github-actions#env-context).{% ifversion actions-reusable-workflow-matrix %}{% else %}
* Die Eigenschaft `strategy` wird nicht in Aufträgen unterstützt, in denen ein wiederverwendbarer Workflow aufgerufen wird.{% endif %}

## Erstellen eines wiederverwendbaren Workflows

Wiederverwendbare Workflows sind Dateien mit YAML-Code, die anderen Workflowdateien sehr ähneln. Wie andere Workflowdateien auch, findest du wiederverwendbare Workflows im Verzeichnis `.github/workflows` eines Repositorys. Unterverzeichnisse des Verzeichnisses `workflows` werden nicht unterstützt.

Damit ein Workflow wiederverwendbar ist, müssen die Werte für `on` `workflow_call` beinhalten:

```yaml
on:
  workflow_call:
```

### Verwenden von Eingaben und Geheimnissen in einem wiederverwendbaren Workflow

Du kannst Eingaben und Geheimnisse definieren, die vom aufrufenden Workflow übergeben und im aufgerufenen Workflow verwendet werden können. Für die Verwendung einer Eingabe oder eines Geheimnisses in einem wiederverwendbaren Workflow sind drei Schritte erforderlich.

1. Verwende im wiederverwendbaren Workflow die Schlüsselwörter `inputs` und `secrets`, um Eingaben oder Geheimnisse zu definieren, die von einem aufrufenden Workflow übergeben werden.
   {% raw %}
   ```yaml
   on:
     workflow_call:
       inputs:
         config-path:
           required: true
           type: string
       secrets:
         envPAT:
           required: true
   ```
   {% endraw %} Ausführliche Informationen zur Syntax zum Definieren von Eingaben und Geheimnissen findest du unter [`on.workflow_call.inputs`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callinputs) und [`on.workflow_call.secrets`](/actions/reference/workflow-syntax-for-github-actions#onworkflow_callsecrets).
   {% ifversion actions-inherit-secrets-reusable-workflows %}
1. Verweise im wiederverwendbaren Workflow auf die Eingabe oder das Geheimnis, die bzw. das du im vorherigen Schritt im Schlüssel `on` definiert hast.

   {% note %}

   **Hinweis**: Wenn die Geheimnisse durch Verwendung von `secrets: inherit` im aufrufenden Workflow geerbt werden, kannst du auch dann auf sie verweisen, wenn sie im `on`-Schlüssel nicht explizit definiert sind. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit).

   {% endnote %} {%- else %}
1. Verweise im wiederverwendbaren Workflow auf die Eingabe oder das Geheimnis, die bzw. das du im vorherigen Schritt im Schlüssel `on` definiert hast.
   {%- endif %}

   {% raw %}
   ```yaml
   jobs:
     reusable_workflow_job:
       runs-on: ubuntu-latest
       environment: production
       steps:
       - uses: actions/labeler@v4
         with:
           repo-token: ${{ secrets.envPAT }}
           configuration-path: ${{ inputs.config-path }}
   ```
   {% endraw %} Im obigen Beispiel ist `envPAT` ein Umgebungsgeheimnis, das der Umgebung `production` hinzugefügt wurde. Daher wird im Auftrag auf diese Umgebung verwiesen.

   {% note %}

   **Hinweis**: Umgebungsgeheimnisse sind verschlüsselte Zeichenfolgen, die in einer von Ihnen für ein Repository definierten Umgebung gespeichert sind. Umgebungsgeheimnisse sind nur für Workflowaufträge verfügbar, die auf die entsprechende Umgebung verweisen. Weitere Informationen findest du unter [Verwenden von Umgebungen für die Bereitstellung](/actions/deployment/targeting-different-environments/using-environments-for-deployment#environment-secrets).

   {% endnote %}

1. Übergib die Eingabe oder das Geheimnis aus dem aufrufenden Workflow.

{% indented_data_reference reusables.actions.pass-inputs-to-reusable-workflows spaces=3 %}

### Beispiel für einen wiederverwendbaren Workflow

In dieser Datei namens `workflow-B.yml` mit einem wiederverwendbaren Workflow (wir verweisen später im [Beispiel für einen aufrufenden Workflow](#example-caller-workflow) darauf) werden eine Eingabezeichenfolge und ein Geheimnis aus dem aufrufenden Workflow abgerufen und in einer Aktion verwendet.

{% raw %}
```yaml{:copy}
name: Reusable workflow example

on:
  workflow_call:
    inputs:
      config-path:
        required: true
        type: string
    secrets:
      token:
        required: true

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v4
      with:
        repo-token: ${{ secrets.token }}
        configuration-path: ${{ inputs.config-path }}
```
{% endraw %}

## Aufrufen eines wiederverwendbaren Workflows

Zum Aufrufen eines wiederverwendbaren Workflows wird das Schlüsselwort `uses` verwendet. Anders als bei der Verwendung von Aktionen in einem Workflow werden wiederverwendbare Workflows direkt in einem Auftrag aufgerufen und nicht in Auftragsschritten.

[`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)

Zum Verweisen auf Dateien mit wiederverwendbaren Workflows wird {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}eine der folgenden Syntaxoptionen verwendet:{% else %}die folgende Syntax verwendet:{% endif %}

{% data reusables.actions.reusable-workflow-calling-syntax %}

Du kannst mehrere Workflows aufrufen, indem du jeweils in einem eigenen Auftrag auf diese verweist.

{% data reusables.actions.uses-keyword-example %}

### Übergeben von Eingaben und Geheimnissen an einen wiederverwendbaren Workflow

{% data reusables.actions.pass-inputs-to-reusable-workflows%}

{% ifversion actions-reusable-workflow-matrix %}
### Verwenden einer Matrixstrategie mit einem wiederverwendbaren Workflow

Aufträge, die die Matrixstrategie verwenden, können einen wiederverwendbaren Workflow aufrufen.

Mithilfe einer Matrixstrategie kannst du Variablen in einer Auftragsdefinition verwenden, um automatisch mehrere Auftragsausführungen zu erstellen, die auf Kombinationen dieser Variablen basieren. Beispielsweise kannst du eine Matrixstrategie verwenden, um verschiedene Eingaben an einen wiederverwendbaren Workflow zu übergeben. Weitere Informationen zu Matrizen findest du unter [Verwenden einer Matrix für deine Aufträge](/actions/using-jobs/using-a-matrix-for-your-jobs).

Der folgende Beispielauftrag ruft einen wiederverwendbaren Workflow auf und verweist auf den Matrixkontext, indem die Variable `target` mit den Werten `[dev, stage, prod]` definiert wird. Er führt drei Aufträge aus, einen für jeden Wert in der Variablen.

{% raw %}
```yaml{:copy}
jobs:
  ReuseableMatrixJobForDeployment:
    strategy:
      matrix:
        target: [dev, stage, prod]
    uses: octocat/octo-repo/.github/workflows/deployment.yml@main
    with:
      target: ${{ matrix.target }}
```
{% endraw %} {% endif %}

### Unterstützte Schlüsselwörter für Aufträge, in denen ein wiederverwendbarer Workflow aufgerufen wird

Beim Aufrufen eines wiederverwendbaren Workflows kannst du in dem Auftrag, der den Aufruf enthält, nur die folgenden Schlüsselwörter verwenden:

* [`jobs.<job_id>.name`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idname)
* [`jobs.<job_id>.uses`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_iduses)
* [`jobs.<job_id>.with`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwith)
* [`jobs.<job_id>.with.<input_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idwithinput_id)
* [`jobs.<job_id>.secrets`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecrets)
* [`jobs.<job_id>.secrets.<secret_id>`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsecretssecret_id) {%- ifversion actions-inherit-secrets-reusable-workflows %}
* [`jobs.<job_id>.secrets.inherit`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit) {%- endif %} {%- ifversion actions-reusable-workflow-matrix %}
* [`jobs.<job_id>.strategy`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategy) {%- endif %}
* [`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)
* [`jobs.<job_id>.if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif)
* [`jobs.<job_id>.permissions`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idpermissions)
* [`jobs.<job_id>.concurrency`](/actions/reference/workflow-syntax-for-github-actions#concurrency)

   {% note %}

   **Hinweis:**

   * Wenn im aufrufenden Auftrag `jobs.<job_id>.permissions` nicht angegeben ist, verfügt der aufgerufene Workflow über die Standardberechtigungen für `GITHUB_TOKEN`. Weitere Informationen findest du unter [Authentifizierung in einem Workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token).
   * Die vom aufrufenden Workflow übergebenen `GITHUB_TOKEN`-Berechtigungen können im aufgerufenen Workflow nur eingeschränkt werden (und nicht erweitert).

   {% endnote %}

### Beispiel für einen aufrufenden Workflow

In dieser Workflowdatei werden zwei Workflowdateien aufgerufen. Der zweiten davon (`workflow-B.yml`, im [Beispiel für einen wiederverwendbaren Workflow](#example-reusable-workflow) zu sehen) werden eine Eingabe (`config-path`) und ein Geheimnis (`token`) übergeben.

{% raw %}
```yaml{:copy}
name: Call a reusable workflow

on:
  pull_request:
    branches:
      - main

jobs:
  call-workflow:
    uses: octo-org/example-repo/.github/workflows/workflow-A.yml@v1

  call-workflow-passing-data:
    permissions:
      contents: read
      pull-requests: write
    uses: octo-org/example-repo/.github/workflows/workflow-B.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

{% ifversion nested-reusable-workflow %}
## Schachteln wiederverwendbarer Workflows

Du kannst maximal vier Workflowebenen verbinden – also den Workflow auf oberster Ebene und bis zu drei Ebenen wiederverwendbarer Workflows. Beispiel: _caller-workflow.yml_ → _called-workflow-1.yml_ → _called-workflow-2.yml_ → _called-workflow-3.yml_. Schleifen in der Workflowstruktur sind nicht zulässig.

Aus einem wiederverwendbaren Workflow kannst du einen anderen wiederverwendbaren Workflow aufrufen.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:

jobs:
  call-another-reusable:
    uses: octo-org/example-repo/.github/workflows/another-reusable.yml@v1
```
{% endraw %}

### Übergeben von Geheimnissen an geschachtelte Workflows

Du kannst `jobs.<job_id>.secrets` in einem aufrufenden Workflow verwenden, um benannte Geheimnisse an einen direkt aufgerufenen Workflow zu übergeben. Alternativ kannst du mit `jobs.<job_id>.secrets.inherit` alle Geheimnisse des aufrufenden Workflows an einen direkt aufgerufenen Workflow übergeben. Weitere Informationen findest du im obigen Abschnitt [Übergeben von Eingaben und Geheimnissen an einen wiederverwendbaren Workflow](/actions/using-workflows/reusing-workflows#passing-inputs-and-secrets-to-a-reusable-workflow) und im Referenzartikel [Workflowsyntax für GitHub Actions](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsecretsinherit). Geheimnisse werden nur an einen direkt aufgerufenen Workflow übergeben. In der Workflowkette A > B > C erhält Workflow C nur dann Geheimnisse von A, wenn sie von A an B und dann von B an C übergeben werden.

Im folgenden Beispiel übergibt Workflow A über das Schlüsselwort `inherit` alle Geheimnisse an Workflow B. Workflow B übergibt jedoch nur ein Geheimnis an Workflow C. Alle übrigen Geheimnisse, die an Workflow B übergeben werden, sind für Workflow C nicht verfügbar.

{% raw %}
```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit # pass all secrets
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
    secrets:
      envPAT: ${{ secrets.envPAT }} # pass just this secret
```
{% endraw %}

### Zugriff und Berechtigungen

Ein Workflow, der geschachtelte wiederverwendbare Workflows enthält, schlägt fehl, wenn einer der geschachtelten Workflows für den anfänglichen aufrufenden Workflow nicht zugänglich ist. Weitere Informationen findest du unter [Zugriff auf wiederverwendbare Workflows](/actions/using-workflows/reusing-workflows#access-to-reusable-workflows).

`GITHUB_TOKEN`-Berechtigungen müssen in geschachtelten Workflows identisch oder restriktiver sein. In der Workflowkette A > B > C gilt beispielsweise Folgendes: Wenn Workflow A über die Tokenberechtigung `package: read` verfügt, können B und C nicht die Berechtigung `package: write` aufweisen. Weitere Informationen findest du unter [Automatische Tokenauthentifizierung](/actions/security-guides/automatic-token-authentication).

Informationen dazu, wie du mithilfe der API ermitteln kannst, welche Workflowdateien an einer bestimmten Workflowausführung beteiligt waren, findest du unter [Überwachen der verwendeten Workflows](#monitoring-which-workflows-are-being-used).
{% endif %}

## Verwenden von Ausgaben eines wiederverwendbaren Workflows

Ein wiederverwendbarer Workflow generiert möglicherweise Daten, die du im aufrufenden Workflow verwenden möchtest. Damit du diese Ausgaben verwenden kannst, musst du sie als Ausgaben des wiederverwendbaren Workflows angeben.{% ifversion actions-reusable-workflow-matrix %}

Wenn ein wiederverwendbarer Workflow, der eine Ausgabe festlegt, mit einer Matrixstrategie ausgeführt wird, enthält die Ausgabe den Ausgabewert des letzten erfolgreich abgeschlossenen wiederverwendbaren Workflows der Matrix, der einen tatsächlichen Wert festlegt.
Das bedeutet, wenn der letzte erfolgreich abgeschlossene wiederverwendbare Workflow eine leere Zeichenfolge als Ausgabe festlegt und der vorletzte erfolgreich abgeschlossene wiederverwendbare Workflow einen tatsächlichen Wert als Ausgabe festlegt, enthält die Ausgabe den Wert des vorletzten abgeschlossenen wiederverwendbaren Workflows.{% endif %}

Der folgende wiederverwendbare Workflow besteht aus einem Auftrag mit zwei Schritten. In jedem dieser Schritte wird ein einzelnes Wort als Ausgabe festgelegt: erst „hello“ und dann „world“. Im Abschnitt `outputs` des Auftrags werden diese Schrittausgaben den Auftragsausgaben `output1` und `output2` zugeordnet. Im Abschnitt `on.workflow_call.outputs` werden dann zwei Ausgaben für den Workflow selbst definiert, eine namens `firstword`, die `output1` zugeordnet wird, und eine namens `secondword`, die `output2` zugeordnet wird.

{% raw %}
```yaml{:copy}
name: Reusable workflow

on:
  workflow_call:
    # Map the workflow outputs to job outputs
    outputs:
      firstword:
        description: "The first output string"
        value: ${{ jobs.example_job.outputs.output1 }}
      secondword:
        description: "The second output string"
        value: ${{ jobs.example_job.outputs.output2 }}

jobs:
  example_job:
    name: Generate output
    runs-on: ubuntu-latest
    # Map the job outputs to step outputs
    outputs:
      output1: ${{ steps.step1.outputs.firstword }}
      output2: ${{ steps.step2.outputs.secondword }}
    steps:
      - id: step1{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "firstword=hello" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=firstword::hello"
{%- endif %}{% raw %}
      - id: step2{% endraw %}
{%- ifversion actions-save-state-set-output-envs %}
        run: echo "secondword=world" >> $GITHUB_OUTPUT
{%- else %}
        run: echo "::set-output name=secondword::world"
{%- endif %}{% raw %}
```
{% endraw %}

Nun können die Ausgaben im aufrufenden Workflow genau so verwendet werden wie die Ausgaben eines Auftrags im selben Workflow. Zum Verweisen auf die Ausgaben werden die auf Workflowebene im wiederverwendbaren Workflow definierten Namen `firstword` und `secondword` verwendet. In diesem Workflow wird in `job1` der wiederverwendbare Workflow aufgerufen, und in `job2` werden die Ausgaben des wiederverwendbaren Workflows („hello world“) in der Standardausgabe im Workflowprotokoll ausgegeben.

{% raw %}
```yaml{:copy}
name: Call a reusable workflow and use its outputs

on:
  workflow_dispatch:

jobs:
  job1:
    uses: octo-org/example-repo/.github/workflows/called-workflow.yml@v1

  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{ needs.job1.outputs.firstword }} ${{ needs.job1.outputs.secondword }}
```
{% endraw %}

Weitere Informationen zur Verwendung von Auftragsausgaben findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idoutputs).

## Überwachen der verwendeten Workflows

Du kannst die {% data variables.product.prodname_dotcom %}-REST-API verwenden, um zu überwachen, wie wiederverwendbare Workflows verwendet werden. Die Überwachungsprotokollaktion `prepared_workflow_job` wird ausgelöst, wenn ein Workflowauftrag gestartet wird. Zu den erfassten Daten gehören:
* `repo`: Dies ist die Organisation bzw. das Repository, in der bzw. dem der Workflowauftrag sich befindet. Bei einem Auftrag, in dem ein anderer Workflow aufgerufen wird, ist dies die Organisation bzw. das Repository des aufrufenden Workflows.
* `@timestamp`: Dies sind das Datum und die Uhrzeit des Starts des Auftrags im Unix-Epochenformat.
* `job_name`: Dies ist der Name des ausgeführten Auftrags.
{% ifversion nested-reusable-workflow %}
* `calling_workflow_refs` : Ein Array von Dateipfaden für alle Aufruferworkflows, die an diesem Workflowauftrag beteiligt sind. Die Elemente im Array befinden sich nicht in der Reihenfolge, in der sie aufgerufen wurden, sondern in umgekehrter. In der Workflowkette „A > B > C“ wäre das Array beispielsweise beim Anzeigen der Protokolle für einen Auftrag in Workflow C `["octo-org/octo-repo/.github/workflows/B.yml", "octo-org/octo-repo/.github/workflows/A.yml"]`.
* `calling_workflow_shas` – ein Array von SHAs für alle Aufruferworkflows, die an diesem Workflowauftrag beteiligt sind. Das Array enthält die gleiche Anzahl von Elementen in derselben Reihenfolge wie das `calling_workflow_refs`-Array. {% endif %}
* `job_workflow_ref`: Dies ist die verwendete Workflowdatei im Format `{owner}/{repo}/{path}/{filename}@{ref}`. Bei einem Auftrag, in dem ein anderer Workflow aufgerufen wird, wird hiermit der aufgerufene Workflow angegeben.

Informationen zur Verwendung der REST-API zum Abfragen des Überwachungsprotokolls für eine Organisation findest du unter [Organisationen](/rest/reference/orgs#get-the-audit-log-for-an-organization).

{% note %}

**Hinweis**: Überwachungsdaten für `prepared_workflow_job` können nur mithilfe der REST-API angezeigt werden. Sie werden weder in der Weboberfläche von {% data variables.product.prodname_dotcom %} angezeigt noch sind sie in den exportierten Überwachungsdaten im JSON- oder CSV-Format enthalten.

{% endnote %}

{% ifversion partial-reruns-with-reusable %}

## Erneutes Ausführen von Workflows und Aufträgen mit wiederverwendbaren Workflows

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

## Nächste Schritte

Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [Ereignisse, die Workflows auslösen](/actions/learn-github-actions/events-that-trigger-workflows).

{% ifversion restrict-groups-to-workflows %}Du kannst Bereitstellungen standardisieren, indem du eine selbstgehostete Runnergruppe erstellst, die nur einen bestimmten wiederverwendbaren Workflow ausführen kann. Weitere Informationen findest du unter [Verwalten des Zugriffs auf selbstgehostete Runner mithilfe von Gruppen](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}
