---
title: Migrar do Jenkins para o GitHub Actions
intro: 'O {% data variables.product.prodname_actions %} e o Jenkins compartilham múltiplas semelhanças, o que torna a migração para {% data variables.product.prodname_actions %} relativamente simples.'
redirect_from:
  - /actions/migrating-to-github-actions/migrating-from-jenkins-to-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: 'tutorial'
topics:
  - 'Jenkins'
  - 'Migração'
  - 'CI'
  - 'CD'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Introdução

O Jenkins e o {% data variables.product.prodname_actions %} permitem criar fluxos de trabalho que criam, testam, publicam, lançam e implementam código automaticamente. O Jenkins e o {% data variables.product.prodname_actions %} compartilham algumas semelhanças em termos de configuração do fluxo de trabalho:

- O Jenkins cria fluxos de trabalho usando _Declarative Pipelines_, que são semelhantes aos arquivos do fluxo de trabalho {% data variables.product.prodname_actions %}.
- O Jenkins usa _stages_ para executar uma coleção de etapas, enquanto o {% data variables.product.prodname_actions %} usa trabalhos para agrupar uma ou mais etapas ou comandos individuais.
- O Jenkins e o {% data variables.product.prodname_actions %} são compatíveis com criações baseadas em contêineres. Para obter mais informações, consulte "[Criar uma ação de contêiner do Docker](/articles/creating-a-docker-container-action)".
- É possível reutilizar e compartilhar novamente etapas ou tarefas com a comunidade.

Para obter mais informações, consulte "[Conceitos básicos para {% data variables.product.prodname_actions %}](/actions/getting-started-with-github-actions/core-concepts-for-github-actions)".

### Principais diferenças

- O Jenkins tem dois tipos de sintaxe para a criação de pipelines: Declarative Pipeline e Scripted Pipeline. O {% data variables.product.prodname_actions %} usa o YAML para criar fluxos de trabalho e arquivos de configuração. Para obter mais informações, consulte "[Sintaxe do fluxo de trabalho para o GitHub Actions](/actions/reference/workflow-syntax-for-github-actions)".
- As implementações do Jenkins são tipicamente auto-hospedadas, com usuários mantendo os servidores em seus próprios centros de dados. O {% data variables.product.prodname_actions %} oferece uma abordagem de nuvem híbrida, hospedando seus próprios executores que você pode usar para executar trabalhos, ao mesmo tempo em que também oferece suporte aos executores auto-hospedados. Para obter mais informações, consulte [Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners).

### Comparar recursos

#### Distribuir suas criações

O Jenkins permite que se envie criações para um único agente de criação, ou você pode distribuí-las entre vários agentes. Você também pode classificar esses agentes de acordo com vários atributos, como, por exemplo, tipos de sistema operacional.

De modo similar, o {% data variables.product.prodname_actions %} pode enviar trabalhos para executores hospedados em {% data variables.product.prodname_dotcom %} ou executores auto-hospedados, e você pode usar as etiquetas para classificar os executores de acordo com vários atributos. A tabela a seguir compara como o conceito de criação distribuída é implementado tanto para o Jenkins e quanto para o {% data variables.product.prodname_actions %}.

| Jenkins                                                                 | {% data variables.product.prodname_actions %}
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`agentes`](https://wiki.jenkins.io/display/JENKINS/Distributed+builds) | [`executores`](/actions/learn-github-actions/introduction-to-github-actions#runners) <br> [`executores auto-hospedados`](/actions/hosting-your-own-runners/about-self-hosted-runners) |

#### Usar seções para organizar pipelines

O Jenkins divide seus Declarative Pipelines em múltiplas seções. De forma similar, o {% data variables.product.prodname_actions %} organiza seus fluxos de trabalho em seções separadas. A tabela abaixo compara as seções do Jenkins com o fluxo de trabalho {% data variables.product.prodname_actions %}.

| Diretivas do Jenkins                                            | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`agente`](https://jenkins.io/doc/book/pipeline/syntax/#agent)  | [`jobs.<job_id>.runs-on`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on) <br> [`jobs.<job_id>.container`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idcontainer) |
| [`post`](https://jenkins.io/doc/book/pipeline/syntax/#post)     |                                                                                                                                                                                                                                                                                                        |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#stages) | [`jobs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobs)                                                                                                                                                                                                |
| [`steps`](https://jenkins.io/doc/book/pipeline/syntax/#steps)   | [`jobs.<job_id>.steps`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)                                                                                                                                                                |

### Usar diretivas

O Jenkins usa diretivas para gerenciar os _Declarative Pipelines_. Essas diretivas definem as características do seu fluxo de trabalho e como ele será executado. A tabela abaixo demonstra como estas diretivas são mapeadas com conceitos dentro do {% data variables.product.prodname_actions %}.

| Diretivas do Jenkins                                                                                                                                                                                                                                                                                                                                                                                                                                                             | {% data variables.product.prodname_actions %}
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`ambiente`](https://jenkins.io/doc/book/pipeline/syntax/#environment)                                                                                                                                                                                                                                                                                                                                                                                                           | [`jobs.<job_id>.env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) <br> [`jobs.<job_id>.steps[*].env`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv)                                                                                                                                                                                                                                                                                              |
| [`options`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                                                                                                                                                                                                                                                                                                                                                                                                             | [`jobs.<job_id>.strategy`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy) <br> [`jobs.<job_id>.strategy.fail-fast`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast) <br> [`jobs.<job_id>.timeout-minutes`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes)                                                                                    |
| [`parâmetros`](https://jenkins.io/doc/book/pipeline/syntax/#parameters)                                                                                                                                                                                                                                                                                                                                                                                                          | [`entradas`](/actions/creating-actions/metadata-syntax-for-github-actions#inputs) <br> [`saídas`](/actions/creating-actions/metadata-syntax-for-github-actions#outputs)                                                                                                                                                                                                                                                                                                                                                                                                       |
| [`gatilhos`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                                                                                                                                                                                                                                                                                                                                                                                                              | [`em`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#on) <br> [`on.<event_name>.types`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onevent_nametypes) <br> [<code>on.<push\|pull_request>.<branches\|tags></code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestbranchestags) <br> [<code>on.<push\|pull_request>.paths</code>](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpaths) |
| [`aciona { upstreamprojects() }`](https://jenkins.io/doc/book/pipeline/syntax/#triggers)                                                                                                                                                                                                                                                                                                                                                                                         | [`jobs.<job_id>.needs`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Sintaxe cron do Jenkins](https://jenkins.io/doc/book/pipeline/syntax/#cron-syntax)                                                                                                                                                                                                                                                                                                                                                                                              | [`on.schedule`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#onschedule)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [`stage`](https://jenkins.io/doc/book/pipeline/syntax/#stage)                                                                                                                                                                                                                                                                                                                                                                                                                    | [`jobs.<job_id>`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_id) <br> [`jobs.<job_id>.name`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idname)                                                                                                                                                                                                                                                                                                       |
| [`tools`](https://jenkins.io/doc/book/pipeline/syntax/#tools)                                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| {% if currentVersion == "github-ae@latest" %}Para obter instruções sobre como ter certeza de que o {% data variables.actions.hosted_runner %} tem o software necessário instalado, consulte "[Criar imagens personalizadas](/actions/using-github-hosted-runners/creating-custom-images)".{% else %}[Especificações para executores hospedados em {% data variables.product.prodname_dotcom %}](/actions/reference/specifications-for-github-hosted-runners/#supported-software) | {% endif %}
| [`entrada`](https://jenkins.io/doc/book/pipeline/syntax/#input)                                                                                                                                                                                                                                                                                                                                                                                                                  | [`inputs`](/actions/automating-your-workflow-with-github-actions/metadata-syntax-for-github-actions#inputs)                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [`quando`](https://jenkins.io/doc/book/pipeline/syntax/#when)                                                                                                                                                                                                                                                                                                                                                                                                                    | [`jobs.<job_id>.if`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idif)                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Usar estágios sequenciais

#### Processamento paralelo do trabalho

O Jenkins pode executar os `stages` e as `etapas` em paralelo, enquanto o {% data variables.product.prodname_actions %} está executando os trabalhos em paralelo.

| Jenkins em paralelo                                                 | {% data variables.product.prodname_actions %}
| ------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`paralelo`](https://jenkins.io/doc/book/pipeline/syntax/#parallel) | [`jobs.<job_id>.strategy.max-parallel`](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel) |

#### Criar matriz

Tanto o {% data variables.product.prodname_actions %} quanto o Jenkins permitem que você use uma matriz de criação para definir várias combinações de sistema.

| Jenkins                                                                | {% data variables.product.prodname_actions %}
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`eixo`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-axes)     | [`estratégia/matriz`](/actions/learn-github-actions/managing-complex-workflows/#using-a-build-matrix) <br> [`contexto`](/actions/reference/context-and-expression-syntax-for-github-actions) |
| [`stages`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) | [`steps-context`](/actions/reference/context-and-expression-syntax-for-github-actions#steps-context)                                                                                               |
| [`exclui`](https://jenkins.io/doc/book/pipeline/syntax/#matrix-stages) |                                                                                                                                                                                                    |

#### Usar passos para executar tarefas

O Jenkins agrupa as `etapas` em `stages`. Cada uma dessas etapas pode ser um script, função ou comando, entre outros. Da mesma forma, o {% data variables.product.prodname_actions %} usa `trabalhos` para executar grupos específicos de `etapas`.

| Etapas do Jenkins                                               | {% data variables.product.prodname_actions %}
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`script`](https://jenkins.io/doc/book/pipeline/syntax/#script) | [`jobs.<job_id>.steps`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idsteps) |

### Exemplos de tarefas comuns

#### Agendar um pipeline para ser executado com `cron`

<table>
<tr>
<th>
Pipeline do Jenkins
</th>
<th>
Fluxo de trabalho do {% data variables.product.prodname_actions %}
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

#### Configurar variáveis de ambiente em um pipeline

<table>
<tr>
<th>
Pipeline do Jenkins
</th>
<th>
Fluxo de trabalho do {% data variables.product.prodname_actions %}
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

#### Criar projetos projetos de upstream

<table>
<tr>
<th>
Pipeline do Jenkins
</th>
<th>
Fluxo de trabalho do {% data variables.product.prodname_actions %}
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

#### Criar com vários sistemas operacionais

<table>
<tr>
<th>
Pipeline do Jenkins
</th>
<th>
Fluxo de trabalho do {% data variables.product.prodname_actions %}
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
