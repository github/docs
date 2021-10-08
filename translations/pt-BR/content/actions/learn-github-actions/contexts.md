---
title: Contextos
shortTitle: Contextos
intro: You can access context information in workflows and actions.
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/contexts-and-expression-syntax-for-github-actions
  - /github/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/contexts-and-expression-syntax-for-github-actions
  - /actions/reference/context-and-expression-syntax-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
miniTocMaxHeadingLevel: 3
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

## About contexts

{% data reusables.github-actions.context-injection-warning %}

Os contextos são uma forma de acessar informações sobre execuções de fluxo de trabalho, ambientes dos executores, trabalhos e etapas. Contextos usam a sintaxe de expressão. For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

{% raw %}
`${{ <context> }}`
{% endraw %}

| Nome do contexto | Tipo     | Descrição                                                                                                                                                                                                                                         |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`         | `objeto` | Informações sobre a execução do fluxo de trabalho. Para obter mais informações, consulte [contexto `github`](#github-context).                                                                                                                    |
| `env`            | `objeto` | Contém variáveis de ambiente definidas em um fluxo de trabalho, trabalho ou etapa. Para obter mais informações, consulte o contexto [`env`](#env-context).                                                                                        |
| `trabalho`       | `objeto` | Tem informações sobre o trabalho em execução no momento. Para obter mais informações, consulte [contexto `trabalho`](#job-context).                                                                                                               |
| `steps`          | `objeto` | Informações sobre as etapas que foram executadas neste trabalho. Para obter mais informações, consulte [contexto `etapas`](#steps-context).                                                                                                       |
| `runner`         | `objeto` | Informações sobre o executor do trabalho atual. Para obter mais informações, consulte [`runner` context](#runner-context).                                                                                                                        |
| `secrets`        | `objeto` | Habilita o acesso a segredos. Para obter mais informações sobre segredos, consulte "[Criar e usar segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".                             |
| `strategy`       | `objeto` | Habilita acesso aos parâmetros de estratégia configurados e informações sobre o trabalho atual. Parâmetros de estratégia incluem `fail-fast`, `job-index`, `job-total` e `max-parallel`.                                                          |
| `matrix`         | `objeto` | Habilita acesso aos parâmetros de matriz configurados para o trabalho atual. Por exemplo, se você configurar uma criação de matriz com as versões `os` e `node`, o objeto de contexto `matrix` inclui as versões `os` e `node` do trabalho atual. |
| `needs`          | `objeto` | Permite o acesso às saídas de todos os trabalhos definidos como uma dependência do trabalho atual. Para obter mais informações, consulte o contexto [`needs`](#needs-context).                                                                    |

Como parte de uma expressão, você pode acessar as informações de contexto usando uma das duas sintaxes:
- Sintaxe de índice: `github['sha']`;
- Sintaxe de propriedade de desreferência: `github.sha`

Para usar a sintaxe de propriedade de desreferência, o nome da propriedade deve:
- começar com `a-Z` ou `_`;
- ser seguido por `a-Z` `0-9` `-` ou `_`.

### Determinar quando usar contextos

{% data reusables.github-actions.using-context-or-environment-variables %}

### Contexto `github`

O contexto `github` context contém informações sobre a execução do fluxo de trabalho e sobre o evento que a acionou. Você pode ler a maioria dos dados de contexto `github` em variáveis de ambiente. Para obter mais informações sobre as variáveis de ambiente, consulte "[Usando variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

{% data reusables.github-actions.github-context-warning %}
{% data reusables.github-actions.context-injection-warning %}

| Nome da propriedade       | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`                  | `objeto` | Contexto de nível mais alto disponível em qualquer trabalho ou etapa de um fluxo de trabalho.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `github.action`           | `string` | O nome da ação atualmente em execução. O {% data variables.product.prodname_dotcom %} remove os caracteres especiais ou usa o nome `executar` quando a etapa atual executa um script.  Se você usar a mesma ação mais de uma vez no mesmo trabalho, o nome incluirá um sufixo com o número de sequência.  Por exemplo, o primeiro script que você executa será denominado `run1`, e o segundo script será denominado `run2`. Da mesma forma, a segunda invocação de `actions/checkout` será `actionscheckout2`. |
| `github.action_path`      | `string` | O caminho onde está localizada a sua ação. Você pode usar esse caminho para acessar facilmente os arquivos localizados no mesmo repositório que sua ação. This attribute is only supported in composite actions.                                                                                                                                                                                                                                                                                                |
| `github.actor`            | `string` | Login do usuário que iniciou a execução do fluxo de trabalho.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `github.base_ref`         | `string` | `base_ref` ou branch alvo da pull request em uma execução de fluxo de trabalho. Esta propriedade só está disponível quando o evento que aciona a execução de um fluxo de trabalho for `pull_request` ou `pull_request_target`.                                                                                                                                                                                                                                                                                  |
| `github.event`            | `objeto` | Carga de evento de webhook completa. Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/articles/events-that-trigger-workflows/)". Você pode acessar as propriedades individuais do evento usando este contexto.                                                                                                                                                                                                                                                                  |
| `github.event_name`       | `string` | Nome do evento que acionou a execução do fluxo de trabalho.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `github.event_path`       | `string` | O caminho para a carga completa do evento do webhook no executor.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.head_ref`         | `string` | `head_ref` ou branch de origem da pull request em uma execução de fluxo de trabalho. Esta propriedade só está disponível quando o evento que aciona a execução de um fluxo de trabalho for `pull_request` ou `pull_request_target`.                                                                                                                                                                                                                                                                             |
| `github.job`              | `string` | O [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) do trabalho atual.                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.ref`              | `string` | Branch ou ref tag que acionou a execução do fluxo de trabalho. For branches this is the format  `refs/heads/<branch_name>`, and for tags it is `refs/tags/<tag_name>`.                                                                                                                                                                                                                                                                                                                              |
| `github.repository`       | `string` | Nome do repositório e o proprietário. Por exemplo, `Codertocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `github.repository_owner` | `string` | O nome do proprietário do repositório. Por exemplo, `Codertocat`.                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `github.run_id`           | `string` | {% data reusables.github-actions.run_id_description %}
| `github.run_number`       | `string` | {% data reusables.github-actions.run_number_description %}
| `github.sha`              | `string` | Commit SHA que acionou a execução do fluxo de trabalho.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `github.token`            | `string` | Um token para fazer a autenticação em nome do aplicativo GitHub instalado no seu repositório. Isso é funcionalmente equivalente ao segredo `GITHUB_TOKEN`. Para obter mais informações, consulte "[Permissões para o GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)".                                                                                                                                                                                |
| `github.workflow`         | `string` | Nome do fluxo de trabalho. Se o fluxo de trabalho não determina um `name` (nome), o valor desta propriedade é o caminho completo do arquivo do fluxo de trabalho no repositório.                                                                                                                                                                                                                                                                                                                                |
| `github.workspace`        | `string` | O diretório-padrão de trabalho para etapas e a localização-padrão do repositório ao usar a ação [`checkout-`](https://github.com/actions/checkout).                                                                                                                                                                                                                                                                                                                                                             |

### Contexto `env`

O contexto `env` contém variáveis de ambiente que foram definidas em um fluxo de trabalho, trabalho ou etapa. Para obter mais informações sobre como configurar variáveis de ambiente em seu fluxo de trabalho, consulte "[Sintaxe do fluxo de trabalho para {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)".

A sintaxe de contexto `env` permite que você use o valor de uma variável de ambiente no seu arquivo de fluxo de trabalho. Você pode usar o contexto `env` no valor de qualquer chave em uma **etapa**, exceto para as chaves `id` e `uses`. Para obter mais informações sobre a sintaxe da etapa, consulte "[Sintaxe do fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)".

Se você desejar usar o valor de uma variável de ambiente dentro de um executor, use o método normal do sistema operacional do executor para ler as variáveis de ambiente.

| Nome da propriedade    | Tipo     | Descrição                                                                                                         |
| ---------------------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| `env`                  | `objeto` | Esse contexto altera cada etapa em um trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho. |
| `env.<env_name>` | `string` | O valor de uma variável de ambiente específica.                                                                   |

### Contexto `trabalho`

O contexto `job` (trabalho) contém informações sobre o trabalho atualmente em execução.

| Nome da propriedade                       | Tipo     | Descrição                                                                                                                                                                                                                                                                    |
| ----------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `trabalho`                                | `objeto` | Esse contexto altera cada trabalho em uma execução de fluxo de trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho.                                                                                                                                   |
| `job.container`                           | `objeto` | Informações sobre o contêiner do trabalho. Para obter mais informações sobre contêineres, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)".                  |
| `job.container.id`                        | `string` | Identificação do contêiner.                                                                                                                                                                                                                                                  |
| `job.container.network`                   | `string` | Identificação da rede do contêiner. O executor cria a rede usada por todos os contêineres em um trabalho.                                                                                                                                                                    |
| `job.services`                            | `objeto` | Contêineres de serviços criados para um trabalho. Para obter mais informações sobre contêineres de serviço, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)". |
| `job.services.<service id>.id`      | `string` | Identificação do contêiner de serviço.                                                                                                                                                                                                                                       |
| `job.services.<service id>.network` | `string` | Identificação da rede do contêiner de serviço. O executor cria a rede usada por todos os contêineres em um trabalho.                                                                                                                                                         |
| `job.services.<service id>.ports`   | `objeto` | As portas expostas do contêiner de serviço.                                                                                                                                                                                                                                  |
| `job.status`                              | `string` | Status atual do trabalho. Possíveis valores são `success`, `failure` ou `cancelled`.                                                                                                                                                                                         |

### Contexto `etapas`

O contexto `steps` (etapas) contém informações sobre as etapas já executadas do trabalho atual.

| Nome da propriedade                                 | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `steps`                                             | `objeto` | Esse contexto altera cada etapa em um trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho.                                                                                                                                                                                                                                                            |
| `steps.<step id>.outputs`                     | `objeto` | Conjunto de saídas definidas para a etapa. Para obter mais informações, consulte "[Sintaxe de metadados para o {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs)".                                                                                                                                                        |
| `steps.<step id>.conclusion`                  | `string` | O resultado de uma etapa concluída após [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) ser aplicado. Os valores possíveis são: `sucesso`, `falha`, `cancelado`ou `ignorado`. Quando ocorre uma falha na etapa de `continue-on-error`, o `resultado` será `falha`, mas a conclusão `final` será `sucesso`.     |
| `steps.<step id>.outcome`                     | `string` | O resultado de uma etapa concluída antes de [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) ser aplicado. Os valores possíveis são: `sucesso`, `falha`, `cancelado`ou `ignorado`. Quando ocorre uma falha na etapa de `continue-on-error`, o `resultado` será `falha`, mas a conclusão `final` será `sucesso`. |
| `steps.<step id>.outputs.<output name>` | `string` | Valor de uma saída específica.                                                                                                                                                                                                                                                                                                                                               |

### Contexto do `executor`

O contexto do `executor` contém informações sobre o executor que está executando o trabalho atual.

| Nome da propriedade | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runner.os`         | `string` | {% data reusables.actions.runner-os-description %}
| `runner.temp`       | `string` | {% data reusables.actions.runner-temp-directory-description %}
| `runner.tool_cache` | `string` | {% ifversion ghae %}Para instruções instruções sobre como ter certeza de que o seu {% data variables.actions.hosted_runner %} tem o software necessário instalado, consulte "[Criar imagens personalizadas](/actions/using-github-hosted-runners/creating-custom-images)". {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}

### Contexto `needs`

O contexto `needs` contém saídas de todos os trabalhos definidos como uma dependência do trabalho atual. Para obter mais informações sobre a definição de dependências de tarefas, consulte "[Sintaxe de fluxo de trabalho para o {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)".

| Nome da propriedade                                | Tipo     | Descrição                                                                                                                            |
| -------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `needs.<job id>`                             | `objeto` | Um único trabalho do qual o trabalho atual depende.                                                                                  |
| `needs.<job id>.outputs`                     | `objeto` | O conjunto de saídas de um trabalho do qual o trabalho atual depende.                                                                |
| `needs.<job id>.outputs.<output name>` | `string` | O valor de uma saída específica para um trabalho do qual o trabalho atual depende.                                                   |
| `needs.<job id>.result`                      | `string` | O resultado de um trabalho do qual depende o trabalho atual. Os valores possíveis são: `sucesso`, `falha`, `cancelado`ou `ignorado`. |

#### Exemplo de impressão de informações de contexto no arquivo de log

Para inspecionar as informações acessíveis em cada contexto, você pode usar este exemplo de arquivo de fluxo de trabalho.

{% data reusables.github-actions.github-context-warning %}

**.github/workflows/main.yml**
{% raw %}
```yaml
on: push

jobs:
  one:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJSON(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJSON(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJSON(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJSON(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJSON(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJSON(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```
{% endraw %}

## Disponibilidade do contexto

Contextos diferentes estão disponíveis durante a execução de um fluxo de trabalho. Por exemplo, o contexto de `segredos` só pode ser usado em certos lugares dentro de um trabalho.

Além disso, algumas funções só podem ser utilizadas em determinados lugares. Por exemplo, a função `hashFiles` não está disponível em qualquer lugar.

A tabela a seguir indica onde cada contexto e função especial pode ser utilizado dentro de um fluxo de trabalho. A menos que esteja listado abaixo, uma função pode ser usada em qualquer lugar.

| Caminho                    | Contexto                   | Funções especiais          |
| -------------------------- | -------------------------- | -------------------------- |
| <code>concorrência</code>  | <code>github</code>  |                            |
| <code>env</code>  | <code>github, secrets</code>  |                            |
| <code>jobs.&lt;job_id&gt;.concurrency</code>  | <code>github, needs, strategy, matrix</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container</code>  | <code>github, needs, strategy, matrix</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.credentials</code>  | <code>github, needs, strategy, matrix, env, secrets</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> |                            |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> |                            |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> |                            |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> |                            |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> |                            |
