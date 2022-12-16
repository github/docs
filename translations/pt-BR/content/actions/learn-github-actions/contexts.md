---
title: Contextos
shortTitle: Contexts
intro: Você pode acessar as informações de contexto nos fluxos de trabalho e nas ações.
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
  ghec: '*'
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3f73082600ce3bf300ce4565c2bdbc826eb357ca
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191931'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Sobre os contextos

Os contextos são uma forma de acessar informações sobre execuções de fluxo de trabalho, ambientes dos executores, trabalhos e etapas. Cada contexto é um objeto que contém propriedades, que podem ser strings ou outros objetos.

{% data reusables.actions.context-contents %} Por exemplo, o contexto `matrix` só é preenchido para trabalhos em uma [matriz](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix).

Você pode acessar contextos usando a sintaxe da expressão. Para obter mais informações, confira "[Expressões](/actions/learn-github-actions/expressions)".

{% raw %} `${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| Nome do contexto | Tipo | Descrição |
|---------------|------|-------------|
| `github` | `object` | Informações sobre a execução do fluxo de trabalho. Para obter mais informações, confira [Contexto `github`](#github-context). |
| `env` | `object` | Contém variáveis de ambiente definidas em um fluxo de trabalho, trabalho ou etapa. Para obter mais informações, confira [Contexto `env`](#env-context). |
| `job` | `object` | Informações sobre o trabalho atualmente em execução. Para obter mais informações, confira [Contexto `job`](#job-context). |
{%- ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} | `jobs` | `object` | Somente para fluxos de trabalho reutilizáveis, contém saídas de trabalhos do fluxo de trabalho reutilizável. Para obter mais informações, confira [Contexto `jobs`](#jobs-context). |{% endif %} | `steps` | `object` | Informações sobre as etapas que foram executadas no trabalho atual. Para obter mais informações, confira [Contexto `steps`](#steps-context). | | `runner` | `object` | Informações sobre o executor do trabalho atual. Para obter mais informações, confira [Contexto `runner`](#runner-context). | | `secrets` | `object` | Contém nomes e valores de segredos que estão disponíveis para a execução de um fluxo de trabalho. Para obter mais informações, confira [Contexto `secrets`](#secrets-context). | | `strategy` | `object` | Informações sobre a estratégia de execução da matriz para o trabalho atual. Para obter mais informações, confira [Contexto `strategy`](#strategy-context). | | `matrix` | `object` | Contém as propriedades da matriz definidas no fluxo de trabalho que se aplicam ao trabalho atual. Para obter mais informações, confira [Contexto `matrix`](#matrix-context). | | `needs` | `object` | Contém as saídas de todos os trabalhos que são definidos como uma dependência do trabalho atual. Para obter mais informações, confira [Contexto `needs`](#needs-context). | {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `inputs` | `object` | Contém as entradas de um fluxo de trabalho reutilizável {% ifversion actions-unified-inputs %}ou acionado manualmente {% endif %}. Para obter mais informações, confira [Contexto `inputs`](#inputs-context). |{% endif %}

Como parte de uma expressão, você pode acessar informações de contexto usando uma das duas sintaxes.

- Sintaxe de índice: `github['sha']`
- Sintaxe de desreferência de propriedade: `github.sha`

Para usar a sintaxe de desreferência de propriedade, o nome da propriedade deve começar com uma letra `_` ou e conter apenas caracteres alfanuméricos, `-` ou `_`.

Se você tentar desreferenciar uma propriedade inexistente, ela será avaliada como uma cadeia de caracteres vazia.

### Determinar quando usar contextos

{% data reusables.actions.using-context-or-environment-variables %}

### Disponibilidade do contexto

Contextos diferentes estão disponíveis durante a execução de um fluxo de trabalho. Por exemplo, o contexto `secrets` só pode ser usado em alguns lugares de um trabalho.

Além disso, algumas funções só podem ser utilizadas em determinados lugares. Por exemplo, a função `hashFiles` não está disponível em todos os lugares.

A tabela a seguir indica onde cada contexto e função especial pode ser utilizado dentro de um fluxo de trabalho. A menos que esteja listado abaixo, uma função pode ser usada em qualquer lugar.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

| Chave de fluxo de trabalho | Contexto | Funções especiais |
| ---- | ------- | ----------------- |
{%- ifversion actions-run-name %} | <code>run-name</code> | <code>github, inputs</code> | | {%- endif %} | <code>concurrency</code> | <code>github, inputs</code> | | | <code>env</code> | <code>github, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> | | | <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> | | <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs,{% ifversion actions-reusable-workflow-matrix %} strategy, matrix,{% endif %} secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> | | | <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-reusable-workflow-matrix %}, strategy, matrix{% endif %}{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> | | {% else %}
| Caminho | Contexto | Funções especiais |
| ---- | ------- | ----------------- |
| <code>concurrency</code> | <code>github</code> | |
| <code>env</code> | <code>github, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env</code> | |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> | |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> | |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> | |
{% endif %}

### Exemplo: imprimir informações de contexto no registro

Você pode imprimir o conteúdo de contextos no registro para depuração. A [função `toJSON`](/actions/learn-github-actions/expressions#tojson) é necessária para imprimir objetos JSON no log.

{% data reusables.actions.github-context-warning %}

{% raw %}
```yaml{:copy}
name: Context testing
on: push

jobs:
  dump_contexts_to_log:
    runs-on: ubuntu-latest
    steps:
      - name: Dump GitHub context
        id: github_context_step
        run: echo '${{ toJSON(github) }}'
      - name: Dump job context
        run: echo '${{ toJSON(job) }}'
      - name: Dump steps context
        run: echo '${{ toJSON(steps) }}'
      - name: Dump runner context
        run: echo '${{ toJSON(runner) }}'
      - name: Dump strategy context
        run: echo '${{ toJSON(strategy) }}'
      - name: Dump matrix context
        run: echo '${{ toJSON(matrix) }}'
```
{% endraw %}

## Contexto `github`

O contexto `github` contém informações sobre a execução de fluxo de trabalho e sobre o evento que a disparou. Leia também a maioria dos dados de contexto `github` em variáveis de ambiente. Para obter mais informações sobre as variáveis de ambiente, confira "[Como usar as variáveis de ambiente](/actions/automating-your-workflow-with-github-actions/using-environment-variables)".

{% data reusables.actions.github-context-warning %} {% data reusables.actions.context-injection-warning %}

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `github` | `object` | Contexto de nível mais alto disponível em qualquer trabalho ou etapa de um fluxo de trabalho. Este objeto contém todas as propriedades listadas abaixo. |
| `github.action` | `string` | O nome da ação atualmente em execução ou a [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) de uma etapa. O {% data variables.product.prodname_dotcom %} remove caracteres especiais ou usa o nome `__run` quando a etapa atual executa um script sem uma `id`. Se você usar a mesma ação mais de uma vez no mesmo trabalho, o nome incluirá um sufixo com o número da sequência com o sublinhado antes dele. Por exemplo, o primeiro script que você executar terá o nome `__run`, e o segundo script será chamado `__run_2`. Da mesma forma, a segunda invocação de `actions/checkout` será `actionscheckout2`. |
| `github.action_path` | `string` | O caminho onde uma ação está localizada. Esta propriedade só é compatível com ações compostas. Você pode usar este caminho para acessar arquivos localizados no mesmo repositório da ação. |
| `github.action_ref` | `string` | Para uma etapa executando uma ação, este é o ref da ação que está sendo executada. Por exemplo, `v2`. |
| `github.action_repository` | `string` | Para uma etpa que executa uma ação, este é o nome do proprietário e do repositório da ação. Por exemplo, `actions/checkout`. |
| `github.action_status` | `string` | Para uma ação composta, o resultado atual da ação composta. |
| `github.actor` | `string` | {% ifversion actions-stable-actor-ids %}O nome do usuário que disparou a execução inicial do fluxo de trabalho. Se a execução do fluxo de trabalho for executada novamente, esse valor poderá ser diferente de `github.triggering_actor`. Qualquer nova execução de fluxo de trabalho usará os privilégios de `github.actor`, mesmo que o ator que inicie a nova execução (`github.triggering_actor`) tenha privilégios diferentes.{% else %}O nome do usuário que iniciou a execução do fluxo de trabalho.{% endif %} |
| `github.api_url` | `string` | A URL da API REST de {% data variables.product.prodname_dotcom %}. |
| `github.base_ref` | `string` | A `base_ref` ou o branch de destino da solicitação de pull em uma execução de fluxo de trabalho. Essa propriedade só fica disponível quando o evento que dispara a execução de fluxo de trabalho é `pull_request` ou `pull_request_target`. |
| `github.env` | `string` | Caminho no executor para o arquivo que define variáveis de ambiente dos comandos do fluxo de trabalho. Este arquivo é único para a etapa atual e é um arquivo diferente para cada etapa de um trabalho. Para obter mais informações, confira "[Comandos do fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable)". |
| `github.event` | `object` | Carga de evento de webhook completa. Você pode acessar as propriedades individuais do evento usando este contexto. Este objeto é idêntico à carga do webhook do evento que acionou a execução do fluxo de trabalho e é diferente para cada evento. Os webhooks para cada evento do {% data variables.product.prodname_actions %} estão vinculados em "[Eventos que disparam fluxos de trabalho](/articles/events-that-trigger-workflows/)". Por exemplo, para uma execução de fluxo de trabalho disparada pelo [evento `push`](/actions/using-workflows/events-that-trigger-workflows#push), esse objeto contém o conteúdo da [carga do webhook por push](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push). |
| `github.event_name` | `string` | Nome do evento que acionou a execução do fluxo de trabalho. |
| `github.event_path` | `string` | O caminho para o arquivo no executor que contém a carga completa do webhook do evento. |
| `github.graphql_url` | `string` | A URL da API do GraphQL de {% data variables.product.prodname_dotcom %}. |
| `github.head_ref` | `string` | A `head_ref` ou o branch de origem da solicitação de pull em uma execução de fluxo de trabalho. Essa propriedade só fica disponível quando o evento que dispara a execução de fluxo de trabalho é `pull_request` ou `pull_request_target`. |
| `github.job` | `string` | A [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) do trabalho atual. <br /> Observação: essa propriedade de contexto é definida pelo executor de Ações e só está disponível na execução `steps` de um trabalho. Caso contrário, o valor dessa propriedade será `null`. |
| `github.ref` | `string` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `boolean` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `github.path` | `string` | Caminho no executor para o arquivo que define as variáveis do sistema `PATH` de comandos de fluxo de trabalho. Este arquivo é único para a etapa atual e é um arquivo diferente para cada etapa de um trabalho. Para obter mais informações, confira "[Comandos do fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path)". | | `github.repository` | `string` | O nome do proprietário e do repositório. Por exemplo, `Codertocat/Hello-World`. | | `github.repository_owner` | `string` | O nome do proprietário do repositório. Por exemplo, `Codertocat`. | | `github.repositoryUrl` | `string` | A URL do Git para o repositório. Por exemplo, `git://github.com/codertocat/hello-world.git`. | | `github.retention_days` | `string` | O número de dias em que os logs e os artefatos da execução de fluxo de trabalho são mantidos. | | `github.run_id` | `string` | {% data reusables.actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.actions.run_number_description %} | {%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %} | `github.run_attempt` | `string` | Um número exclusivo para cada tentativa de uma execução de fluxo de trabalho específico em um repositório. Este número começa em 1 para a primeira tentativa de execução do fluxo de trabalho e aumenta a cada nova execução. | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.secret_source` | `string` | A origem de um segredo usado em um fluxo de trabalho. Os valores possíveis são `None`, `Actions`, `Dependabot` ou `Codespaces`. | {%- endif %} | `github.server_url` | `string` | A URL do servidor do GitHub. Por exemplo: `https://github.com`. | | `github.sha` | `string` | {% data reusables.actions.github_sha_description %} | | `github.token` | `string` | Um token de autenticação em nome do Aplicativo GitHub instalado em seu repositório. Isso é funcionalmente equivalente ao segredo `GITHUB_TOKEN`. Para obter mais informações, confira "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)".  <br /> Observação: essa propriedade de contexto é definida pelo executor de Ações e só está disponível na execução `steps` de um trabalho. Caso contrário, o valor dessa propriedade será `null`. |{% ifversion actions-stable-actor-ids %} | `github.triggering_actor` | `string` | O nome do usuário que iniciou a execução do fluxo de trabalho. Se a execução do fluxo de trabalho for executada novamente, esse valor poderá ser diferente de `github.actor`. Qualquer nova execução de fluxo de trabalho usará os privilégios de `github.actor`, mesmo que o ator que inicie a nova execução (`github.triggering_actor`) tenha privilégios diferentes. |{% endif %} | `github.workflow` | `string` | O nome do fluxo de trabalho. Se o arquivo de fluxo de trabalho não especificar um `name`, o valor dessa propriedade será o caminho completo do arquivo de fluxo de trabalho no repositório. | | `github.workspace` | `string` | O diretório de trabalho padrão no executor para etapas, e o local padrão do repositório quando a ação [`checkout`](https://github.com/actions/checkout) é usada. |

### Exemplo de conteúdo do contexto `github`

O contexto a seguir foi obtido de uma execução de fluxo de trabalho disparada pelo evento `push`. O objeto `event` deste exemplo foi truncado porque é idêntico ao conteúdo da [carga do webhook `push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push).

{% data reusables.actions.context-example-note %}

```json
{
  "token": "***",
  "job": "dump_contexts_to_log",
  "ref": "refs/heads/my_branch",
  "sha": "c27d339ee6075c1f744c5d4b200f7901aad2c369",
  "repository": "octocat/hello-world",
  "repository_owner": "octocat",
  "repositoryUrl": "git://github.com/octocat/hello-world.git",
  "run_id": "1536140711",
  "run_number": "314",
  "retention_days": "90",
  "run_attempt": "1",
  "actor": "octocat",
  "workflow": "Context testing",
  "head_ref": "",
  "base_ref": "",
  "event_name": "push",
  "event": {
    ...
  },
  "server_url": "https://github.com",
  "api_url": "https://api.github.com",
  "graphql_url": "https://api.github.com/graphql",
  "ref_name": "my_branch",
  "ref_protected": false,
  "ref_type": "branch",
  "secret_source": "Actions",
  "workspace": "/home/runner/work/hello-world/hello-world",
  "action": "github_step",
  "event_path": "/home/runner/work/_temp/_github_workflow/event.json",
  "action_repository": "",
  "action_ref": "",
  "path": "/home/runner/work/_temp/_runner_file_commands/add_path_b037e7b5-1c88-48e2-bf78-eaaab5e02602",
  "env": "/home/runner/work/_temp/_runner_file_commands/set_env_b037e7b5-1c88-48e2-bf78-eaaab5e02602"
}
```

### Exemplo de uso do contexto `github`

Este exemplo de fluxo de trabalho usa o contexto `github.event_name` para executar um trabalho somente se a execução de fluxo de trabalho foi disparada pelo evento `pull_request`.

```yaml{:copy}
name: Run CI
on: [push, pull_request]

jobs:
  normal_ci:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run normal CI
        run: ./run-tests

  pull_request_ci:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Run PR CI
        run: ./run-additional-pr-ci
```

## Contexto `env`

O contexto `env` contém variáveis de ambiente que foram definidas em um fluxo de trabalho, um trabalho ou uma etapa. Para obter mais informações sobre como definir variáveis de ambiente no fluxo de trabalho, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)".

A sintaxe de contexto `env` permite que você use o valor de uma variável de ambiente no arquivo de fluxo de trabalho. Use o contexto `env` no valor de qualquer chave em uma etapa, exceto nas chaves `id` e `uses`. Para obter mais informações sobre a sintaxe da etapa, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)".

Se você desejar usar o valor de uma variável de ambiente dentro de um executor, use o método normal do sistema operacional do executor para ler as variáveis de ambiente.

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `env` | `object` | Esse contexto altera cada etapa em um trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho. Este objeto contém as propriedades listadas abaixo. |
| `env.<env_name>` | `string` | O valor de uma variável de ambiente específica. |

### Exemplo de conteúdo do contexto `env`

O conteúdo do contexto `env` é um mapeamento de nomes de variáveis de ambiente para os respectivos valores. O conteúdo do contexto pode mudar dependendo de onde é usado na execução do fluxo de trabalho.

```json
{
  "first_name": "Mona",
  "super_duper_var": "totally_awesome"
}
```

### Exemplo de uso do contexto `env`

Este exemplo de fluxo de trabalho mostra como o contexto `env` pode ser configurado no fluxo de trabalho, no trabalho e nos níveis de etapas, além de mostrar como usar o contexto em etapas.

{% data reusables.repositories.actions-env-var-note %}

{% raw %}
```yaml{:copy}
name: Hi Mascot
on: push
env:
  mascot: Mona
  super_duper_var: totally_awesome

jobs:
  windows_job:
    runs-on: windows-latest
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Mona
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Octocat
        env:
          mascot: Octocat
  linux_job:
    runs-on: ubuntu-latest
    env:
      mascot: Tux
    steps:
      - run: echo 'Hi ${{ env.mascot }}'  # Hi Tux
```
{% endraw %}

## Contexto `job`

O contexto `job` contém informações sobre o trabalho atualmente em execução.

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `job` | `object` | Esse contexto altera cada trabalho em uma execução de fluxo de trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho. Este objeto contém todas as propriedades listadas abaixo. |
| `job.container` | `object` | Informações sobre o contêiner do trabalho. Para obter mais informações sobre contêineres, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)". |
| `job.container.id` | `string` | O ID do contêiner. |
| `job.container.network` | `string` | O ID da rede do contêiner. O executor cria a rede usada por todos os contêineres em um trabalho. |
| `job.services` | `object` | Contêineres de serviços criados para um trabalho. Para obter mais informações sobre contêineres de serviço, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)". |
| `job.services.<service_id>.id` | `string` | O ID do contêiner de serviço. |
| `job.services.<service_id>.network` | `string` | O ID da rede de contêiner de serviço. O executor cria a rede usada por todos os contêineres em um trabalho. |
| `job.services.<service_id>.ports` | `object` | As portas expostas do contêiner de serviço. |
| `job.status` | `string` | O estado atual do trabalho. Os valores possíveis são `success`, `failure`, ou `cancelled`. |

### Exemplo de conteúdo do contexto `job`

Este exemplo de contexto `job` usa um contêiner de serviço do PostgreSQL com as portas mapeadas. Se nenhum contêiner ou contêiner de serviço for usado em um trabalho, o contexto `job` só conterá a propriedade `status`.

```json
{
  "status": "success",
  "container": {
    "network": "github_network_53269bd575974817b43f4733536b200c"
  },
  "services": {
    "postgres": {
      "id": "60972d9aa486605e66b0dad4abb638dc3d9116f566579e418166eedb8abb9105",
      "ports": {
        "5432": "49153"
      },
      "network": "github_network_53269bd575974817b43f4733536b200c"
    }
  }
}
```

### Exemplo de uso do contexto `job`

Este exemplo de fluxo de trabalho configura um contêiner de serviço do PostgreSQL e mapeia automaticamente a porta 5432 do recipiente de serviço com uma porta disponível escolhida aleatoriamente no host. O contexto `job` é usado para acessar o número da porta atribuída no host.

```yaml{:copy}
name: PostgreSQL Service Example
on: push
jobs:
  postgres-job:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres
        options: --health-cmd pg_isready --health-interval 10s --health-timeout 5s --health-retries 5
        ports:
          # Maps TCP port 5432 in the service container to a randomly chosen available port on the host.
          - 5432

    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: pg_isready -h localhost -p {% raw %}${{ job.services.postgres.ports[5432] }}{% endraw %}
      - run: ./run-tests
```

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

## Contexto `jobs`

O contexto `jobs` só está disponível em fluxos de trabalho reutilizáveis e só pode ser usado para definir as saídas de um fluxo de trabalho reutilizável. Para obter mais informações, confira "[Como reutilizar fluxos de trabalho](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)".

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `jobs` | `object` | Isso só está disponível em fluxos de trabalho reutilizáveis e só pode ser usado para definir as saídas de um fluxo de trabalho reutilizável. Este objeto contém todas as propriedades listadas abaixo.
| `jobs.<job_id>.result` | `string` | O resultado de um trabalho no fluxo de trabalho reutilizável. Os valores possíveis são `success`, `failure`, `cancelled` ou `skipped`. |
| `jobs.<job_id>.outputs` | `object` | O conjunto de saídas de um trabalho em um fluxo de trabalho reutilizável. |
| `jobs.<job_id>.outputs.<output_name>` | `string` | O valor de uma saída específica para um trabalho em um fluxo de trabalho reutilizável. |

### Exemplo de conteúdo do contexto `jobs`

O contexto `jobs` deste exemplo contém o resultado e as saídas de um trabalho de uma execução de fluxo de trabalho reutilizável.

```json
{
  "example_job": {
    "result": "success",
    "outputs": {
      "output1": "hello",
      "output2": "world"
    }
  }
}
```

### Exemplo de uso do contexto `jobs`

Este exemplo de fluxo de trabalho reutilizável usa o contexto `jobs` para definir saídas para o fluxo de trabalho reutilizável. Observe como as saídas fluem das etapas para o trabalho e, em seguida, para o gatilho `workflow_call`. Para obter mais informações, confira "[Como reutilizar fluxos de trabalho](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)".

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

{% endif %}

## Contexto `steps`

O contexto `steps` contém informações sobre as etapas do trabalho atual que têm uma [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) especificada e que já foram executadas.

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `steps` | `object` | Esse contexto altera cada etapa em um trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho. Este objeto contém todas as propriedades listadas abaixo. |
| `steps.<step_id>.outputs` | `object` | Conjunto de saídas definidas para a etapa. Para obter mais informações, confira "[Sintaxe de metadados do {% data variables.product.prodname_actions %}](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)". |
| `steps.<step_id>.conclusion` | `string` | O resultado de uma etapa concluída após a aplicação de [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Os valores possíveis são `success`, `failure`, `cancelled` ou `skipped`. Quando uma etapa `continue-on-error` falha, o `outcome` é `failure`, mas a `conclusion` final é `success`. |
| `steps.<step_id>.outcome` | `string` | O resultado de uma etapa concluída antes da aplicação de [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error). Os valores possíveis são `success`, `failure`, `cancelled` ou `skipped`. Quando uma etapa `continue-on-error` falha, o `outcome` é `failure`, mas a `conclusion` final é `success`. |
| `steps.<step_id>.outputs.<output_name>` | `string` | Valor de uma saída específica. |

### Exemplo de conteúdo do contexto `steps`

Este exemplo de contexto `steps` mostra duas etapas anteriores que tinham uma [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) especificada. A primeira etapa tinha a `id` chamada `checkout`, e a segunda, `generate_number`. A etapa `generate_number` tinha uma saída chamada `random_number`.

```json
{
  "checkout": {
    "outputs": {},
    "outcome": "success",
    "conclusion": "success"
  },
  "generate_number": {
    "outputs": {
      "random_number": "1"
    },
    "outcome": "success",
    "conclusion": "success"
  }
}
```

### Exemplo de uso do contexto `steps`

Este exemplo de fluxo de trabalho gera um número aleatório como saída em uma etapa, e uma etapa posterior usa o contexto `steps` para ler o valor dessa saída.

```yaml{:copy}
name: Generate random failure
on: push
jobs:
  randomly-failing-job:
    runs-on: ubuntu-latest
    steps:
      - id: checkout
        uses: {% data reusables.actions.action-checkout %}
      - name: Generate 0 or 1
        id: generate_number
{%- ifversion actions-save-state-set-output-envs %}
        run:  echo "random_number=$(($RANDOM % 2))" >> $GITHUB_OUTPUT
{%- else %}
        run:  echo "::set-output name=random_number::$(($RANDOM % 2))"
{%- endif %}
      - name: Pass or fail
        run: |
          if [[ {% raw %}${{ steps.generate_number.outputs.random_number }}{% endraw %} == 0 ]]; then exit 0; else exit 1; fi
```

## Contexto `runner`

O contexto `runner` contém informações sobre o executor que está executando o trabalho atual.

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `runner` | `object` | Esse contexto altera cada trabalho em uma execução de fluxo de trabalho. Este objeto contém todas as propriedades listadas abaixo. |
| `runner.name` | `string` | {% data reusables.actions.runner-name-description %} |
| `runner.os` | `string` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch` | `string` | {% data reusables.actions.runner-arch-description %} |{% endif %}
| `runner.temp` | `string` | {% data reusables.actions.runner-temp-directory-description %} |
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}|
| `runner.debug` | `string` | {% data reusables.actions.runner-debug-description %} |

{%- comment %} A propriedade `runner.workspace` não está documentada intencionalmente. É uma propriedade antecipada do Actions que, no momento, não é relevante para os usuários, em comparação com `github.workspace`. É mantido por uma questão de compatibilidade.
| `runner.workspace` | `string` | | {%- endcomment %}

### Exemplo de conteúdo do contexto `runner`

O contexto de exemplo a seguir é de um executor do Linux hospedado em {% data variables.product.prodname_dotcom %}.

```json
{
  "os": "Linux",
  "arch": "X64",
  "name": "GitHub Actions 2",
  "tool_cache": "/opt/hostedtoolcache",
  "temp": "/home/runner/work/_temp"
  {%- comment %}
  # The `runner.workspace` property is purposefully not documented. It is an early Actions property that now isn't relevant for users, compared to `github.workspace`. It is kept around for compatibility.
  "workspace": "/home/runner/work/hello-world"
  {%- endcomment %}
}
```

### Exemplo de uso do contexto `runner`

Este exemplo de fluxo de trabalho usa o contexto `runner` para definir o caminho para o diretório temporário e gravar registros e se, o fluxo de trabalho falhar, ele carregará os logs como artefatos.

```yaml{:copy}
name: Build
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build with logs
        run: |
          mkdir {% raw %}${{ runner.temp }}{% endraw %}/build_logs
          ./build.sh --log-path {% raw %}${{ runner.temp }}{% endraw %}/build_logs
      - name: Upload logs on fail
        if: {% raw %}${{ failure() }}{% endraw %}
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build failure logs
          path: {% raw %}${{ runner.temp }}{% endraw %}/build_logs
```

## Contexto `secrets`

O contexto `secrets` contém nomes e os valores de segredos que estão disponíveis para a execução de um fluxo de trabalho. O contexto `secrets` não está disponível para ações compostas por motivos de segurança. Para aprovar um segredo para uma ação composta, é necessário fazê-lo explicitamente como uma entrada. Para obter mais informações sobre segredos, confira "[Segredos criptografados](/actions/security-guides/encrypted-secrets)".

`GITHUB_TOKEN` é um segredo que é criado automaticamente para cada execução de fluxo de trabalho e é sempre incluído no contexto `secrets`. Para obter mais informações, confira "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)".

{% data reusables.actions.secrets-redaction-warning %}

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `secrets` | `object` | Esse contexto é o mesmo para cada trabalho em uma execução do fluxo de trabalho. Você pode acessar esse contexto em qualquer etapa de um trabalho. Este objeto contém todas as propriedades listadas abaixo. |
| `secrets.GITHUB_TOKEN` | `string` | Token criado automaticamente para cada execução do fluxo de trabalho. Para obter mais informações, confira "[Autenticação automática de token](/actions/security-guides/automatic-token-authentication)". |
| `secrets.<secret_name>` | `string` | O valor de um segredo específico. |

### Exemplo de conteúdo do contexto `secrets`

O exemplo de conteúdo do contexto `secrets` mostra o `GITHUB_TOKEN` automático, assim como outros dois segredos disponíveis para a execução de fluxo de trabalho.

```json
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### Exemplo de uso do contexto `secrets`

{% data reusables.actions.github_token-input-example %}

## Contexto `strategy`

Para fluxos de trabalho com uma matriz, o contexto `strategy` contém informações sobre a estratégia de execução da matriz para o trabalho atual.

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `strategy` | `object` | Esse contexto altera cada trabalho em uma execução de fluxo de trabalho. Você pode acessar este contexto a partir de qualquer trabalho ou etapa em um fluxo de trabalho. Este objeto contém todas as propriedades listadas abaixo. |
| `strategy.fail-fast` | `boolean` | Quando `true`, todos os trabalhos em andamento são cancelados em caso de falha em qualquer trabalho em uma matriz. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast)". |
| `strategy.job-index` | `number` | O índice do trabalho atual na matriz. **Observação:** esse número é um número baseado em zero. O primeiro índice do trabalho na matriz é `0`. |
| `strategy.job-total` | `number` | O número total de trabalhos na matriz. **Observação:** esse número **não é** um número baseado em zero. Por exemplo, para uma matriz com quatro trabalhos, o valor de `job-total` é `4`. |
| `strategy.max-parallel` | `number` | O número máximo de trabalhos que podem ser executados simultaneamente quando uma estratégia de trabalho `matrix` é usada. Para obter mais informações, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel)". |

### Exemplo de conteúdo do contexto `strategy`

O exemplo de conteúdo a seguir do contexto `strategy` é de uma matriz com quatro trabalhos e foi obtida do trabalho final. Observe a diferença entre o número `job-index` baseado em zero e `job-total`, que não é baseado em zero.

```json
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### Exemplo de uso do contexto `strategy`

Este exemplo de fluxo de trabalho usa a propriedade `strategy.job-index` para definir um nome exclusivo para um arquivo de log para cada trabalho em uma matriz.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        test-group: [1, 2]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: npm test > test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
      - name: Upload logs
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: Build log for job {% raw %}${{ strategy.job-index }}{% endraw %}
          path: test-job-{% raw %}${{ strategy.job-index }}{% endraw %}.txt
```

## Contexto `matrix`

Para fluxos de trabalho com uma matriz, o contexto `matrix` contém as propriedades definidas no arquivo de fluxo de trabalho que se aplicam ao trabalho atual. Por exemplo, se você configurar uma matriz com as chaves `os` e `node`, o objeto de contexto `matrix` incluirá as propriedades `os` e `node` com os valores que estão sendo usados para o trabalho atual.

Não há propriedades padrão no contexto `matrix`, apenas aquelas que são definidas no arquivo de fluxo de trabalho.

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `matrix` | `object` | Esse contexto só está disponível para trabalhos em uma matriz e em alterações para cada trabalho na execução de um fluxo de trabalho. Você pode acessar este contexto a partir de qualquer trabalho ou etapa em um fluxo de trabalho. Este objeto contém as propriedades listadas abaixo. |
| `matrix.<property_name>` | `string` | O valor da propriedade de uma matriz. |

### Exemplo de conteúdo do contexto `matrix`

O exemplo a seguir do contexto `matrix` é de um trabalho em uma matriz que tem as propriedades de matriz `os` e `node` definidas no fluxo de trabalho. O trabalho executa a combinação de matriz de um sistema operacional `ubuntu-latest` e o Node.js versão `16`.

```json
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### Exemplo de uso do contexto `matrix`

Este exemplo de fluxo de trabalho cria uma matriz com as chaves `os` e `node`. Ele usa a propriedade `matrix.os` para definir o tipo de executor de cada trabalho e a propriedade `matrix.node` para definir a versão do Node.js de cada trabalho.

```yaml{:copy}
name: Test matrix
on: push

jobs:
  build:
    runs-on: {% raw %}${{ matrix.os }}{% endraw %}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest]
        node: [14, 16]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
```

## Contexto `needs`

O contexto `needs` contém as saídas de todos os trabalhos definidos como uma dependência direta do trabalho atual. Observe que isso não inclui trabalhos implicitamente dependentes (por exemplo, trabalhos dependentes de outro dependente). Para obter mais informações sobre como definir as dependências do trabalho, confira "[Sintaxe de fluxo de trabalho do {% data variables.product.prodname_actions %}](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)".

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `needs` | `object` | Esse contexto só é preenchido para execuções de fluxo de trabalho com funções dependentes e as alterações para cada trabalho em uma execução de fluxo de trabalho. Você pode acessar este contexto a partir de qualquer trabalho ou etapa em um fluxo de trabalho. Este objeto contém todas as propriedades listadas abaixo. |
| `needs.<job_id>` | `object` | Um único trabalho do qual o trabalho atual depende. |
| `needs.<job_id>.outputs` | `object` | O conjunto de saídas de um trabalho do qual o trabalho atual depende. |
| `needs.<job_id>.outputs.<output name>` | `string` | O valor de uma saída específica para um trabalho do qual o trabalho atual depende. |
| `needs.<job_id>.result` | `string` | O resultado de um trabalho do qual depende o trabalho atual. Os valores possíveis são `success`, `failure`, `cancelled` ou `skipped`. |

### Exemplo de conteúdo do contexto `needs`

O exemplo de conteúdo a seguir do contexto `needs` mostra informações de dois trabalhos dos quais o trabalho atual depende.

```json
{
  "build": {
    "result": "success",
    "outputs": {
      "build_id": "ABC123"
    }
  },
  "deploy": {
    "result": "failure",
    "outputs": {}
  }
}
```

### Exemplo de uso do contexto `needs`

Este exemplo de fluxo de trabalho tem três trabalhos: um trabalho `build` que faz um build, um trabalho `deploy` que exige o trabalho `build` e um trabalho `debug` que exige os trabalhos `build` e `deploy` e que será executado somente se houver uma falha no fluxo de trabalho. O trabalho `deploy` também usa o contexto `needs` para acessar uma saída do trabalho `build`.

```yaml{:copy}
name: Build and deploy
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    outputs:
      build_id: {% raw %}${{ steps.build_step.outputs.build_id }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        id: build_step
        run: |
          ./build
{%- ifversion actions-save-state-set-output-envs %}
          echo "build_id=$BUILD_ID" >> $GITHUB_OUTPUT
{%- else %}
          echo "::set-output name=build_id::$BUILD_ID"
{%- endif %}
  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./deploy --build {% raw %}${{ needs.build.outputs.build_id }}{% endraw %}
  debug:
    needs: [build, deploy]
    runs-on: ubuntu-latest
    if: {% raw %}${{ failure() }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - run: ./debug
```

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
## Contexto `inputs`

O contexto `inputs` contém propriedades de entrada aprovadas para uma ação{% ifversion actions-unified-inputs %},{% else %} ou{% endif %} para um fluxo de trabalho reutilizável{% ifversion actions-unified-inputs %} ou para um fluxo de trabalho disparado manualmente{% endif %}. {% ifversion actions-unified-inputs %}Para fluxos de trabalho reutilizáveis, os{% else %}Os{% endif %} nomes e tipos de entrada são definidos na [configuração de evento de `workflow_call`](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events) de um fluxo de trabalho reutilizável e os valores de entrada são passados via [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) em um fluxo de trabalho externo que chama o fluxo de trabalho reutilizável. {% ifversion actions-unified-inputs %}Para fluxos de trabalho disparados manualmente, as entradas são definidas na [configuração de evento de `workflow_dispatch`](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch) de um fluxo de trabalho.{% endif %}

Não há propriedades padrão no contexto `inputs`, apenas aquelas que são definidas no arquivo de fluxo de trabalho.

{% data reusables.actions.reusable-workflows-enterprise-beta %}

| Nome da propriedade | Type | Descrição |
|---------------|------|-------------|
| `inputs` | `object` | Esse contexto só está disponível em um [fluxo de trabalho reutilizável](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %} ou em um fluxo de trabalho disparado pelo [evento de `workflow_dispatch`](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch){% endif %}. Você pode acessar este contexto a partir de qualquer trabalho ou etapa em um fluxo de trabalho. Este objeto contém as propriedades listadas abaixo. |
| `inputs.<name>` | `string` ou `number` ou `boolean` | Cada valor de entrada é passado de um fluxo de trabalho externo. |

### Exemplo de conteúdo do contexto `inputs`

O conteúdo de exemplo a seguir do contexto `inputs` é de um fluxo de trabalho que definiu as entradas `build_id`, `deploy_target` e `perform_deploy`.

```json
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### Exemplo de uso do contexto `inputs` em um fluxo de trabalho reutilizável

Este exemplo de fluxo de trabalho reutilizável usa o contexto `inputs` para obter os valores e as entradas `build_id`, `deploy_target` e `perform_deploy` que foram transmitidas para o fluxo de trabalho reutilizável do fluxo de trabalho chamador.

{% raw %}
```yaml{:copy}
name: Reusable deploy workflow
on:
  workflow_call:
    inputs:
      build_id:
        required: true
        type: number
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %}

{% ifversion actions-unified-inputs %}
### Exemplo de uso do contexto `inputs` em um fluxo de trabalho acionado manualmente

Este exemplo de fluxo de trabalho disparado por um evento de `workflow_dispatch` usa o contexto `inputs` para obter os valores de entrada de `build_id`, `deploy_target` e `perform_deploy` que foram passadas para o fluxo de trabalho.

{% raw %}
```yaml{:copy}
on:
  workflow_dispatch:
    inputs:
      build_id:
        required: true
        type: string
      deploy_target:
        required: true
        type: string
      perform_deploy:
        required: true
        type: boolean

jobs:
  deploy:
    runs-on: ubuntu-latest
    if: ${{ inputs.perform_deploy }}
    steps:
      - name: Deploy build to target
        run: deploy --build ${{ inputs.build_id }} --target ${{ inputs.deploy_target }}
```
{% endraw %} {% endif %}

{% endif %}
