---
title: Von Jenkins zu GitHub-Aktionen migrieren
intro: '{% data variables.product.prodname_actions %} und Jenkins haben mehrere Ähnlichkeiten, was die Migration zu {% data variables.product.prodname_actions %} relativ einfach macht.'
redirect_from:
  - /actions/learn-github-actions/migrating-from-jenkins-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
topics:
  - Jenkins
  - Migration
  - CI
  - CD
shortTitle: Migrate from Jenkins
ms.openlocfilehash: a0b54ede4d19d97bf750122b72e245b7c6033ad9
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193320'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Einführung

Jenkins und {% data variables.product.prodname_actions %} ermöglichen es Dir, Workflows zu erstellen, die automatisch Code bauen, testen, publizieren, freigeben und bereitstellen. Jenkins und {% data variables.product.prodname_actions %} haben einige Ähnlichkeiten in der Workflow-Konfiguration:

- Jenkins erstellt Workflows mit _deklarativen Pipelines_, die den Workflowdateien in {% data variables.product.prodname_actions %} ähneln.
- Jenkins verwendet _Phasen_, um eine Reihe von Schritten auszuführen, während {% data variables.product.prodname_actions %} Aufträge verwendet, um Schritte oder einzelne Befehle zu gruppieren.
- Jenkins und {% data variables.product.prodname_actions %} unterstützen Container-basierte Builds. Weitere Informationen findest du unter [Erstellen einer Docker-Containeraktion](/articles/creating-a-docker-container-action).
- Schritte oder Aufgaben können wiederverwendet und in der Community gemeinsam genutzt werden.

Weitere Informationen findest du unter [Kernkonzepte für {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions).

## Wichtige Unterschiede

- Jenkins hat zwei Arten von Syntax zur Erzeugung von Pipelines: Deklarative Pipeline und „Scripted“ (Skript-basierte) Pipeline. {% data variables.product.prodname_actions %} verwendet YAML, um Workflows und Konfigurationsdateien zu erstellen. Weitere Informationen findest du unter [Workflowsyntax für GitHub Actions](/actions/reference/workflow-syntax-for-github-actions).
- Die Deployments von Jenkins ist üblicherweise selbst-gehosted, wobei die Benutzer die Server in ihren eigenen Rechenzentren betreuen. {% data variables.product.prodname_actions %} bieten einen hybriden Cloud-Ansatz, indem sie ihre eigenen Runner betreiben, die du zum Ausführen von Jobs verwenden kannst, während sie auch selbst-gehostete Läufer unterstützen. Weitere Informationen findest du unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners).

## Funktionaltäten im Vergleich

### Deine Builds verteilen

Mit Jenkins kannst Du Builds an einen einzelnen Build-Agenten senden oder sie über mehrere Agenten verteilen. Du kannst diese Agenten auch nach verschiedenen Attributen klassifizieren, wie zum Beispiel Arten von Betriebssystemen.

In ähnlicher Weise kann {% data variables.product.prodname_actions %} Aufträge an von {% data variables.product.prodname_dotcom %} gehostete oder an selbstgehostete Runner senden, und du kannst Bezeichnungen verwenden, um die Runner nach verschiedenen Attributen zu klassifizieren. Weitere Informationen findest du unter [Grundlegendes zu {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions#runners) sowie unter [Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners/about-self-hosted-runners).

### Sektionen verwenden, um Pipelines zu organisieren

Jenkins teilt seine Deklarative Pipelines in mehrere Sektionen auf. In ähnlicher Weise strukturiert {% data variables.product.prodname_actions %} seine Workflows in separaten Sektionen. Die folgende Tabelle vergleicht Sektionen bei Jenkins mit dem Workflow bei {% data variables.product.prodname_actions %}.

| Anweisungen in Jenkins | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)   | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)     |  |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`jobs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs) |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## using-Direktiven

Jenkins verwendet Anweisungen, um _deklarative Pipelines_ zu verwalten. Diese Anweisungen definieren die Merkmale Deines Workflows und die Art und weise, wie dieser ausgeführt wird. Die folgende Tabelle zeigt, wie diese Anweisungen den Konzepten innerhalb von {% data variables.product.prodname_actions %} entsprechen.

| Anweisungen in Jenkins | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                  | [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps[*].env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv) |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                       | [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes) |
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                    | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions) |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                        | [`on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore) <br> [<code>on.<pull_request\>.<branches\></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore) |
| [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers) | [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds) |
| [Cron-Syntax in Jenkins](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)            | [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule) |
| [`stage`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                              | [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname) |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                              | {% ifversion ghae %} Die Befehlszeilentools, die in `PATH` für deine Systeme mit selbstgehosteten Runnern verfügbar sind. {% data reusables.actions.self-hosted-runners-software %}{% else %}[Spezifikationen für in {% data variables.product.prodname_dotcom %} gehostete Runner](/actions/reference/specifications-for-github-hosted-runners/#supported-software) |{% endif %}
| [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input)                              | [`inputs`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs) |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                | [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif) |

## Sequenzielle „Stages“ (Phasen) verwenden

### Parallele Verarbeitungvon Jobs

Jenkins kann Phasen (`stages`) und Schritte (`steps`) parallel ausführen. Im Gegensatz dazu führt {% data variables.product.prodname_actions %} derzeit nur Aufträge parallel aus.

| Jenkins Parallel | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

### Matrix

Sowohl {% data variables.product.prodname_actions %} als auch Jenkins ermöglicht die Verwendung einer Matrix, um verschiedene Systemkombinationen zu definieren.

| Jenkins       | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)       | [`strategy/matrix`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`context`](/actions/reference/context-and-expression-syntax-for-github-actions) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)   | [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context) |
| [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) |  |

### Schritte verwenden, um „Tasks“ (Aufgaben) auszuführen

Jenkins gruppiert Schritte (`steps`) in Phasen (`stages`). Jeder dieser Schritte kann unter anderem ein Skript, eine Funktion oder ein Befehl sein. In ähnlicher Weise verwendet {% data variables.product.prodname_actions %} Aufträge (`jobs`), um bestimmte Gruppen von Schritten (`steps`) auszuführen.

| Jenkins       | {% data variables.product.prodname_actions %} |
| ------------- | ------------- |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps) | [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps) |

## Beispiele für häufige Aufgaben

### Auszuführende Pipeline mit `cron` planen

<table>
<tr>
<th>
Jenkins-Pipeline
</th>
<th>
{% data variables.product.prodname_actions %}-Workflow
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  triggers {
    cron('H/15 * * * 1-5')
  }
}
```

</td>
<td>

```yaml
on:
  schedule:
    - cron: '*/15 * * * 1-5'
```

</td>
</tr>
</table>

### Umgebungsvariablen in einer Pipeline konfigurieren

<table>
<tr>
<th>
Jenkins-Pipeline
</th>
<th>
{% data variables.product.prodname_actions %}-Workflow
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent any
  environment {
    MAVEN_PATH = '/usr/local/maven'
  }
}
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

### Aus „Upstream“ (vorgelagerten) Projekten bauen

<table>
<tr>
<th>
Jenkins-Pipeline
</th>
<th>
{% data variables.product.prodname_actions %}-Workflow
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  triggers {
    upstream(
      upstreamProjects: 'job1,job2',
      threshold: hudson.model.Result.SUCCESS
    )
  }
}
```

</td>
<td>

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

</td>
</tr>
</table>

### Mit mehreren Betriebssystemen bauen

<table>
<tr>
<th>
Jenkins-Pipeline
</th>
<th>
{% data variables.product.prodname_actions %}-Workflow
</th>
</tr>
<tr>
<td>

```yaml
pipeline {
  agent none
  stages {
    stage('Run Tests') {
      matrix {
        axes {
          axis {
            name: 'PLATFORM'
            values: 'macos', 'linux'
          }
        }
        agent { label "${PLATFORM}" }
        stages {
          stage('test') {
            tools { nodejs "node-12" }
            steps {
              dir("scripts/myapp") {
                sh(script: "npm install -g bats")
                sh(script: "bats tests")
              }
            }
          }
        }
      }
    }
  }
}
```

</td>
<td>

```yaml
name: demo-workflow
on:
  push:
jobs:
  test:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      fail-fast: false
      matrix:
        os: [macos-latest, ubuntu-latest]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 12
      - run: npm install -g bats
      - run: bats tests
        working-directory: scripts/myapp
```

</td>
</tr>
</table>
