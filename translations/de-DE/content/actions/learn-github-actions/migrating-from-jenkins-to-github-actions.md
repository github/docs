---
title: Von Jenkins zu GitHub-Aktionen migrieren
intro: '{% data variables.product.prodname_actions %} und Jenkins haben mehrere Ähnlichkeiten, was die Migration zu {% data variables.product.prodname_actions %} relativ einfach macht.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-jenkins-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Einführung

Jenkins und {% data variables.product.prodname_actions %} ermöglichen es Dir, Workflows zu erstellen, die automatisch Code bauen, testen, publizieren, freigeben und bereitstellen. Jenkins und {% data variables.product.prodname_actions %} haben einige Ähnlichkeiten in der Workflow-Konfiguration:

- Jenkins erstellt Workflows mit _Deklarativen Pipelines_, die den Workflow-Dateien in {% data variables.product.prodname_actions %} ähnlich sind.
- Jenkins verwendet _„Stages“ (Phasen)_, um eine Gruppe von Schritten auszuführen, während {% data variables.product.prodname_actions %} Jobs verwenden, um einen oder mehrere Schritte oder einzelne Befehle zu gruppieren.
- Jenkins und {% data variables.product.prodname_actions %} unterstützen Container-basierte Builds. Weitere Informationen finden Sie unter „[Eine Docker-Container-Aktion erstellen](/articles/creating-a-docker-container-action)“.
- Schritte oder Aufgaben können wiederverwendet und in der Community gemeinsam genutzt werden.

Weitere Informationen findest Du unter „[Kernkonzepte für {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)“.

### Wesentliche Unterschiede

- Jenkins hat zwei Arten von Syntax zur Erzeugung von Pipelines: Deklarative Pipeline und „Scripted“ (Skript-basierte) Pipeline. {% data variables.product.prodname_actions %} verwendet YAML, um Workflows und Konfigurationsdateien zu erstellen. Weitere Informationen findest Du unter „[Workflow-Syntax für GitHub-Aktionen](/actions/reference/workflow-syntax-for-github-actions)."
- Die Deployments von Jenkins ist üblicherweise selbst-gehosted, wobei die Benutzer die Server in ihren eigenen Rechenzentren betreuen. {% data variables.product.prodname_actions %} bieten einen hybriden Cloud-Ansatz, indem sie ihre eigenen Runner betreiben, die du zum Ausführen von Jobs verwenden kannst, während sie auch selbst-gehostete Läufer unterstützen. Weitere Informationen findest Du unter [Informationen zu selbst-gehosteten Runnnern](/actions/hosting-your-own-runners/about-self-hosted-runners).

### Funktionaltäten im Vergleich

#### Deine Builds verteilen

Mit Jenkins kannst Du Builds an einen einzelnen Build-Agenten senden oder sie über mehrere Agenten verteilen. Du kannst diese Agenten auch nach verschiedenen Attributen klassifizieren, wie zum Beispiel Arten von Betriebssystemen.

Similarly, {% data variables.product.prodname_actions %} can send jobs to {% data variables.product.prodname_dotcom %}-hosted or self-hosted runners, and you can use labels to classify runners according to various attributes. Die folgende Tabelle vergleicht, wie das Konzept für verteilte Builds sowohl bei Jenkins als auch bei {% data variables.product.prodname_actions %} umgesetzt ist.

| Jenkins                                                                 | {% data variables.product.prodname_actions %}
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Agenten`](https://wiki.jenkins.io/display/JENKINS/Distributed+builds) | [`Runner`](/actions/learn-github-actions/introduction-to-github-actions#runners)  <br> [`selbst-gehostete Runner`](/actions/hosting-your-own-runners/about-self-hosted-runners) |

#### Sektionen verwenden, um Pipelines zu organisieren

Jenkins teilt seine Deklarative Pipelines in mehrere Sektionen auf. Similarly, {% data variables.product.prodname_actions %} organizes its workflows into separate sections. Die folgende Tabelle vergleicht Sektionen bei Jenkins mit dem Workflow bei {% data variables.product.prodname_actions %}.

| Anweisungen in Jenkins                                          | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)   | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`Beitrag`](https://jenkins.io/doc/book/pipeline/syntax/#post)  |                                                                                                                                                                                                                                                                                                        |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`jobs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs)                                                                                                                                                                                                |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)                                                                                                                                                                |


### Anweisungen verwenden

Jenkins verwendet Anweisungen um _Deklarative Pipelines_ zu verwalten. Diese Anweisungen definieren die Merkmale Deines Workflows und die Art und weise, wie dieser ausgeführt wird. Die folgende Tabelle zeigt, wie diese Anweisungen den Konzepten innerhalb von {% data variables.product.prodname_actions %} entsprechen.

| Anweisungen in Jenkins                                                                     | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                  | [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv)                                                                                                                                                                                                                                                                                                 |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                       | [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)                                                                                    |
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                    | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                        | [`on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\|pull_request>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths) |
| [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers) | [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Cron-Syntax in Jenkins](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)         | [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`Phase`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                              | [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname)                                                                                                                                                                                                                                                                                                       |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                              | [Specifications for {% data variables.product.prodname_dotcom %}-hosted runners](/actions/reference/specifications-for-github-hosted-runners/#supported-software)                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input)                              | [`inputs`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                | [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |


### Sequenzielle „Stages“ (Phasen) verwenden

#### Parallele Verarbeitungvon Jobs

Jenkins kann die `Phasen` und `Schritte` parallel ausführen, wohingegen {% data variables.product.prodname_actions %} derzeit nur Jobs parallel ausführen.

| Jenkins Parallel                                                    | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

#### Build-Matrix

Sowohl {% data variables.product.prodname_actions %} als auch Jenkins lassen Dich eine Build-Matrix verwenden, um verschiedene Systemkombinationen zu definieren.

| Jenkins                                                                  | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)       | [`strategy/matrix`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`context`](/actions/reference/context-and-expression-syntax-for-github-actions) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)   | [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context)                                                                                            |
| [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) |                                                                                                                                                                                                 |

#### Schritte verwenden, um „Tasks“ (Aufgaben) auszuführen

Jenkins gruppiert `„Steps“ (Schritte)` zusammen in `„Stages“ (Phasen)`. Jeder dieser Schritte kann unter anderem ein Skript, eine Funktion oder ein Befehl sein. In ähnlicher Weise verwenden {% data variables.product.prodname_actions %} `Jobs`, um bestimmte Gruppen von `Schritten` auszuführen.

| Jenkins-Schritte                                                | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`script`](https://jenkins.io/doc/book/pipeline/syntax/#script) | [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps) |

### Beispiele für häufige Aufgaben

#### Zeitplanung einer Pipeline mit `cron`

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
    - cron:  '*/15 * * * 1-5'
  ```

</td>
</tr>
</table>

#### Umgebungsvariablen in einer Pipeline konfigurieren

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

#### Aus „Upstream“ (vorgelagerten) Projekten bauen

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
        threshold: hudson.model.Result.SUCCESS)
      }
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

#### Mit mehreren Betriebssystemen bauen

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

{% raw %}
  ```yaml
  name: demo-workflow
  on:
    push:
  jobs:
    test:
      runs-on: ${{ matrix.os }}
      strategy:
        fail-fast: false
        matrix:
          os: [macos-latest, ubuntu-latest]
      steps:
        - uses: actions/checkout@v1
        - uses: actions/setup-node@v1
          with:
            node-version: 12
        - run: npm install -g bats
        - run: bats tests
          working-directory: scripts/myapp
  ```
{% endraw %}

</td>
</tr>
</table>
