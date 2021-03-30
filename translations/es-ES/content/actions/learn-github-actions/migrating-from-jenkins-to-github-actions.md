---
title: Migrar de Jenkins a GitHub Actions
intro: '{% data variables.product.prodname_actions %} y Jenkins comparten varias similaridades, lo cual hace que migrar a {% data variables.product.prodname_actions %} sea relativamente sencillo.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-jenkins-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Jenkins'
  - 'Migración'
  - 'CI'
  - 'DC'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introducción

Tanto Jenkins como {% data variables.product.prodname_actions %} te permiten crear flujos de trabajo que compilan, prueban, publican, lanzan y despliegan código automáticamente. Jenkins y {% data variables.product.prodname_actions %} comparten algunas similaridades en la configuración del flujo de trabajo:

- Jenkins crea flujos de trabajo utilizando _Mapas Declarativos_, los cuales son similares a los archivos de flujo de trabajo de {% data variables.product.prodname_actions %}.
- Jenkins utiliza _etapas_ para ejecutar un conjunto de pasos, mientras que {% data variables.product.prodname_actions %} utiliza jobs para agrupar uno o mas pasos o comandos individuales.
- Jenkins y {% data variables.product.prodname_actions %} son compatibles con compilaciones basadas en el contenedor. Para obtener más información, consulta "[Crear una acción de contenedor Docker](/articles/creating-a-docker-container-action)".
- Los pasos o tareas pueden reutilizarse y compartirse con la comunidad.

Para obtener más información, consulta la sección "[Conceptos esenciales para {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

### Diferencias clave

- Jenkins tiene dos tipos de sintaxis para crear mapas: Mapa Declarativo y Mapa de Script. {% data variables.product.prodname_actions %} utiliza YAML para crear flujos de trabajo y archivos de configuración. Para obtener más información, consultala sección "[Sintaxis de flujo de trabajo para GitHub Actions](/actions/reference/workflow-syntax-for-github-actions)".
- Los despliegues de jenkins son típicamente auto-hospedados y los usuarios mantienen los servidores en sus propios centros de datos. {% data variables.product.prodname_actions %} ofrece un acercamiento híbrido en la nube, hospedando sus propios ejecutores que puedes utilizar para ejecutar jobs, mientras que también son compatibles con ejecutores auto-hospedados. Para obtener más información, consulta la sección [Acerca de los ejecutores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners).

### Comparación de capacidades

#### Distribuir tus compilaciones

Jenkis te permite enviar compilaciones a un agente de compilación sencilla, o puedes distribuirlas a través de varios agentes. También puedes clasificar estos agentes de acuerdo con diversos atributos, tales como los tipos de sistema operativo.

De forma similar, las {% data variables.product.prodname_actions %} pueden enviar jobs a los ejecutores auto-hospedados u hospedados en {% data variables.product.prodname_dotcom %}, y puedes utilizar etiquetas para clasificar los ejecutores de acuerdo con diversos atributos. La siguiente tabla compara cómo se implementa el concepto de compilación distribuido tanto para Jenkins como para {% data variables.product.prodname_actions %}.

| Jenkins                                                                | {% data variables.product.prodname_actions %}
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`agents`](https://wiki.jenkins.io/display/JENKINS/Distributed+builds) | [`runners`](/actions/learn-github-actions/introduction-to-github-actions#runners) <br> [`self-hosted runners`](/actions/hosting-your-own-runners/about-self-hosted-runners) |

#### Utilizar secciones para organizar mapas

Jenkins divide sus Mapas Declarativos en varias secciones. De forma similar, las {% data variables.product.prodname_actions %} organizan sus flujos de trabajo en secciones separadas. En esta tabla se comparan las secciones de Jenkins con el flujo de trabajo de {% data variables.product.prodname_actions %}.

| Directivas de Jenkins                                           | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`agent`](https://jenkins.io/doc/book/pipeline/syntax/#agent)   | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)     |                                                                                                                                                                                                                                                                                                        |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`Trabajos`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs)                                                                                                                                                                                            |
| [`pasos`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)                                                                                                                                                                |

### Utilizar directivas

Jenkins utiliza directivas para administrar los _Mapas Declarativos_. Estas directivas definen las características de tu flujo de trabajo y la manera en que se ejecuta. La tabla siguiente demuestra cómo dichas directivas mapean los conceptos en {% data variables.product.prodname_actions %}.

| Directivas de Jenkins                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`environment`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                                                                                                                                                                                                                                                                                                                                                                                                                                 | [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps[*].env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv)                                                                                                                                                                                                                                                                                              |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                                                                                                                                                                                                                                                                                                                                                                                                                                      | [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)                                                                                    |
| [`parameters`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                                                                                                                                                                                                                                                                                                                                                                                                                                   | [`inputs`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`outputs`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)                                                                                                                                                                                                                                                                                                                                                                                                        |
| [`triggers`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                                                                                                                                                                                                                                                                                                                                                                                                                                       | [`on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\|pull_request>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths) |
| [`triggers { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                                                                                                                                                                                                                                                                                                                                                                                                                | [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Sintaxis de Jenkins cron](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)                                                                                                                                                                                                                                                                                                                                                                                                                      | [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`stage`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                                                                                                                                                                                                                                                                                                                                                                                                                                             | [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname)                                                                                                                                                                                                                                                                                                       |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| {% if currentVersion == "github-ae@latest" %}Para obtener instrucciones sobre cómo asegurarte de que tu {% data variables.actions.hosted_runner %} tiene instalado el software necesario, consulta la sección "[Crear imágenes personalizadas](/actions/using-github-hosted-runners/creating-custom-images)".{% else %}[Especificaciones para los ejecutores hospedados en {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) | {% endif %}
| [`input`](https://jenkins.io/doc/book/pipeline/syntax/#input)                                                                                                                                                                                                                                                                                                                                                                                                                                             | [`inputs (entrada)`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [`when`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                                                                                                                                                                                                                                                                                                                                                                                                                               | [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Utilizar etapas secuenciales

#### Proceso paralelo de jobs

Jenkins puede ejecutar las `stages` y `steps` en paralelo, mientras que, actualmente, {% data variables.product.prodname_actions %} solo ejecuta jobs en paralelo.

| Jenkins en Paralelo                                                 | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`parallel`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

#### Matriz de compilaciones

Tanto {% data variables.product.prodname_actions %} como Jenkins te permiten utilizar una matriz de compilaciones para definir diversas combinaciones de sistema.

| Jenkins                                                                  | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`axis`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)       | [`strategy/matrix`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`context`](/actions/reference/context-and-expression-syntax-for-github-actions) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages)   | [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context)                                                                                            |
| [`excludes`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) |                                                                                                                                                                                                 |

#### Utilizar pasos para ejecutar tareas

Jenkins agrupa los `steps` en `stages`. Cada uno de estos pasos puede ser un script, función, o comando, entre otros. De manera similar, {% data variables.product.prodname_actions %} utiliza `jobs` para ejecutar grupos específicos de `steps`.

| Pasos de Jenkins                                                | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`script`](https://jenkins.io/doc/book/pipeline/syntax/#script) | [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps) |

### Ejemplos de tareas comunes

#### Programar un mapa para ejecutarse con `cron`

<table>
<tr>
<th>
Mapa de Jenkins
</th>
<th>
Flujo de trabajo de {% data variables.product.prodname_actions %}
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

#### Configurar variables de ambiente en un mapa

<table>
<tr>
<th>
Mapa de Jenkins
</th>
<th>
Flujo de trabajo de {% data variables.product.prodname_actions %}
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

#### Compilar desde proyectos ascendentes

<table>
<tr>
<th>
Mapa de Jenkins
</th>
<th>
Flujo de trabajo de {% data variables.product.prodname_actions %}
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

#### Compilar con sistemas operativos múltiples

<table>
<tr>
<th>
Mapa de Jenkins
</th>
<th>
Flujo de trabajo de {% data variables.product.prodname_actions %}
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
