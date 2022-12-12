---
title: 컨텍스트
shortTitle: Contexts
intro: 워크플로 및 작업에서 컨텍스트 정보에 액세스할 수 있습니다.
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
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191936'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 컨텍스트 정보

컨텍스트는 워크플로 실행, 실행기 환경, 작업 및 단계에 대한 정보에 액세스하는 방법입니다. 각 컨텍스트는 문자열 또는 다른 개체일 수 있는 속성을 포함하는 개체입니다.

{% data reusables.actions.context-contents %} 예를 들어 `matrix` 컨텍스트는 [행렬](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)의 작업에 대해서만 채워집니다.

식 구문을 사용하여 컨텍스트에 액세스할 수 있습니다. 자세한 내용은 “[언어 식](/actions/learn-github-actions/expressions)”을 참조하세요.

{% raw %} `${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| 컨텍스트 이름 | 형식 | 설명 |
|---------------|------|-------------|
| `github` | `object` | 워크플로 실행에 대한 정보입니다. 자세한 내용은 [`github`컨텍스트](#github-context)를 참조하세요. |
| `env` | `object` | 워크플로, 작업 또는 단계에 설정된 환경 변수를 포함합니다. 자세한 내용은 [`env`컨텍스트](#env-context)를 참조하세요. |
| `job` | `object` | 현재 실행 중인 작업에 대한 정보입니다. 자세한 내용은 [`job`컨텍스트](#job-context)를 참조하세요. |
{%- ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} | `jobs` | `object` | 재사용 가능한 워크플로의 경우에만 에는 재사용 가능한 워크플로의 작업 출력이 포함됩니다. 자세한 내용은 [`jobs`컨텍스트](#jobs-context)를 참조하세요. |{% endif %} | `steps` | `object` | 현재 작업에서 실행된 단계에 대한 정보입니다. 자세한 내용은 [`steps`컨텍스트](#steps-context)를 참조하세요. | | `runner` | `object` | 현재 작업을 실행하는 실행기 정보입니다. 자세한 내용은 [`runner`컨텍스트](#runner-context)를 참조하세요. | | `secrets` | `object` | 워크플로 실행에 사용할 수 있는 비밀의 이름과 값을 포함합니다. 자세한 내용은 [`secrets`컨텍스트](#secrets-context)를 참조하세요. | | `strategy` | `object` | 현재 작업에 대한 행렬 실행 전략에 대한 정보입니다. 자세한 내용은 [`strategy`컨텍스트](#strategy-context)를 참조하세요. | | `matrix` | `object` | 현재 작업에 적용되는 워크플로에 정의된 행렬 속성을 포함합니다. 자세한 내용은 [`matrix`컨텍스트](#matrix-context)를 참조하세요. | | `needs` | `object` | 현재 작업의 종속성으로 정의된 모든 작업의 출력을 포함합니다. 자세한 내용은 [`needs`컨텍스트](#needs-context)를 참조하세요. | {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `inputs` | `object` | 재사용 가능한 {% ifversion actions-unified-inputs %} 또는 수동으로 트리거된 {% endif %}워크플로의 입력을 포함합니다. 자세한 내용은 [`inputs`컨텍스트](#inputs-context)를 참조하세요. |{% endif %}

식의 일부로 두 구문 중 하나를 사용하여 컨텍스트 정보에 액세스할 수 있습니다.

- 인덱스 구문: `github['sha']`
- 속성 역참조 구문: `github.sha`

속성 역참조 구문을 사용하려면 속성 이름이 문자 또는 `_`로 시작하거나 영숫자 문자, `-` 또는 `_`만 포함해야 합니다.

존재하지 않는 속성을 역참조하려고 하면 빈 문자열로 평가됩니다.

### 컨텍스트를 사용할 시기 결정

{% data reusables.actions.using-context-or-environment-variables %}

### 컨텍스트 가용성

워크플로 실행 전체에서 다양한 컨텍스트를 사용할 수 있습니다. 예를 들어 `secrets` 컨텍스트는 작업 내의 특정 위치에서만 사용할 수 있습니다.

또한 일부 함수는 특정 위치에서만 사용할 수 있습니다. 예를 들어 `hashFiles` 함수는 아무 데서도 사용할 수 없습니다.

다음 표는 워크플로 내에서 각 컨텍스트 및 특수 함수를 사용할 수 있는 위치를 나타냅니다. 아래에 나열되어 있지 않은 함수는 어디에서나 사용할 수 있습니다.

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

| 워크플로 키 | Context | 특수 함수 |
| ---- | ------- | ----------------- |
{%- ifversion actions-run-name %} | <code>run-name</code> | <code>github, inputs</code> | | {%- endif %} | <code>concurrency</code> | <code>github, inputs</code> | | | <code>env</code> | <code>github, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> | | | <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> | | <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs,{% ifversion actions-reusable-workflow-matrix %} strategy, matrix,{% endif %} secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> | | | <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-reusable-workflow-matrix %}, strategy, matrix{% endif %}{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> | | {% else %}
| 경로 | Context | 특수 함수 |
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

### 예: 로그에 컨텍스트 정보 출력

디버깅을 위해 컨텍스트의 콘텐츠를 로그에 출력할 수 있습니다. [`toJSON` 함수](/actions/learn-github-actions/expressions#tojson)는 JSON 개체를 로그에 출력하는 데 필요합니다.

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

## `github` 컨텍스트

`github` 컨텍스트에는 워크플로 실행 및 실행을 트리거한 이벤트에 대한 정보가 포함됩니다. 환경 변수에서 대부분의 `github` 컨텍스트 데이터를 읽을 수도 있습니다. 환경 변수에 대한 자세한 내용은 [환경 변수 사용](/actions/automating-your-workflow-with-github-actions/using-environment-variables)을 참조하세요.

{% data reusables.actions.github-context-warning %} {% data reusables.actions.context-injection-warning %}

| 속성 이름 | Type | 설명 |
|---------------|------|-------------|
| `github` | `object` | 워크플로의 모든 작업 또는 단계 중에 사용할 수 있는 최상위 컨텍스트입니다. 이 개체에는 아래에 나열된 모든 속성이 포함됩니다. |
| `github.action` | `string` | 현재 실행 중인 작업의 이름 또는 단계의 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)입니다. {% data variables.product.prodname_dotcom %}는 특수 문자를 제거하고 현재 단계에서 스크립트를 실행할 때 `id` 없이 `__run` 이름을 사용합니다. 동일한 작업에서 동일한 동작을 두 번 이상 사용하는 경우 이름 앞에 밑줄이 있는 시퀀스 번호가 있는 접미사가 포함됩니다. 예를 들어 실행하는 첫 번째 스크립트에는 이름이 `__run`으로 지정되고 두 번째 스크립트의 이름은 `__run_2`로 지정됩니다. 마찬가지로 두 번째 `actions/checkout` 호출은 `actionscheckout2`입니다. |
| `github.action_path` | `string` | 작업이 있는 경로입니다. 이 속성은 복합 작업에서만 지원됩니다. 이 경로를 사용하여 작업과 동일한 리포지토리에 있는 파일에 액세스할 수 있습니다. |
| `github.action_ref` | `string` | 작업을 실행하는 단계의 경우 실행 중인 작업의 참조입니다. 예: `v2`. |
| `github.action_repository` | `string` | 작업을 실행하는 단계의 경우 작업의 소유자 및 리포지토리 이름입니다. 예: `actions/checkout`. |
| `github.action_status` | `string` | 복합 작업의 경우 복합 작업의 현재 결과입니다. |
| `github.actor` | `string` | {% ifversion actions-stable-actor-ids %}초기 워크플로 실행을 트리거한 사용자의 사용자 이름입니다. 워크플로 실행이 다시 실행인 경우 이 값은 `github.triggering_actor`와 다를 수 있습니다. 모든 워크플로 다시 실행은 다시 실행을 시작한 행위자(`github.triggering_actor`)가 다른 권한을 갖고 있더라도 `github.actor`의 권한을 사용합니다.{% else %}워크플로 실행을 시작한 사용자의 사용자 이름입니다.{% endif %} |
| `github.api_url` | `string` | {% data variables.product.prodname_dotcom %} REST API의 URL입니다. |
| `github.base_ref` | `string` | 워크플로 실행에서 끌어오기 요청의 `base_ref` 또는 대상 분기입니다. 이 속성은 워크플로 실행을 트리거하는 이벤트가 `pull_request` 또는 `pull_request_target`인 경우에만 사용할 수 있습니다. |
| `github.env` | `string` | 실행기에서 워크플로 명령의 환경 변수를 설정하는 파일의 경로입니다. 이 파일은 현재 단계에 고유하며 작업의 각 단계에 대해 다른 파일입니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 명령](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable)”을 참조하세요. |
| `github.event` | `object` | 전체 이벤트 웹후크 페이로드입니다. 이 컨텍스트를 사용하여 이벤트의 개별 속성에 액세스할 수 있습니다. 이 개체는 워크플로 실행을 트리거한 이벤트의 웹후크 페이로드와 동일하며 각 이벤트에 대해 다릅니다. 각 {% data variables.product.prodname_actions %} 이벤트에 대한 웹후크는 “[워크플로를 트리거하는 이벤트](/articles/events-that-trigger-workflows/)”에 연결됩니다. 예를 들어 [`push` 이벤트](/actions/using-workflows/events-that-trigger-workflows#push)에 의해 트리거되는 워크플로 실행의 경우 이 개체에는 [푸시 웹후크 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push)의 내용이 포함됩니다. |
| `github.event_name` | `string` | 워크플로 실행을 트리거한 이벤트의 이름입니다. |
| `github.event_path` | `string` | 전체 이벤트 웹후크 페이로드가 포함된 실행기에서 파일의 경로입니다. |
| `github.graphql_url` | `string` | {% data variables.product.prodname_dotcom %} GraphQL API의 URL입니다. |
| `github.head_ref` | `string` | 워크플로 실행에서 끌어오기 요청의 `head_ref` 또는 소스 분기입니다. 이 속성은 워크플로 실행을 트리거하는 이벤트가 `pull_request` 또는 `pull_request_target`인 경우에만 사용할 수 있습니다. |
| `github.job` | `string` | 현재 작업의 [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)입니다. <br /> 참고: 이 컨텍스트 속성은 Actions 실행기에서 설정되며 작업의 실행 `steps` 내에서만 사용할 수 있습니다. 그렇지 않으면 이 속성의 값이 `null`이 됩니다. |
| `github.ref` | `string` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `boolean` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `github.path` | `string` | 워크플로 명령에서 시스템 `PATH` 변수를 설정하는 파일에 대한 실행기의 경로입니다. 이 파일은 현재 단계에 고유하며 작업의 각 단계에 대해 다른 파일입니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 명령](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path)”을 참조하세요. | | `github.repository` | `string` | 소유자 및 리포지토리 이름입니다. 예: `Codertocat/Hello-World`. | | `github.repository_owner` | `string` | 리포지토리 소유자의 이름입니다. 예: `Codertocat`. | | `github.repositoryUrl` | `string` | 리포지토리에 대한 Git URL입니다. 예: `git://github.com/codertocat/hello-world.git`. | | `github.retention_days` | `string` | 워크플로 실행 로그 및 아티팩트가 유지되는 일 수입니다. | | `github.run_id` | `string` | {% data reusables.actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.actions.run_number_description %} | {%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %} | `github.run_attempt` | `string` | 리포지토리에서 실행되는 특정 워크플로의 각 시도에 대한 고유 번호입니다. 이 숫자는 워크플로의 실행의 첫 시도 시 1부터 시작하며 다시 실행할 때마다 증가합니다. | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.secret_source` | `string` | 워크플로에 사용되는 비밀의 원본입니다. 가능한 값은 `None`, `Actions`, `Dependabot` 및 `Codespaces`입니다. | {%- endif %} | `github.server_url` | `string` | GitHub 서버의 URL입니다. 예: `https://github.com` | | `github.sha` | `string` | {% data reusables.actions.github_sha_description %} | | `github.token` | `string` | 리포지토리에 설치된 GitHub 앱을 대신하여 인증할 토큰입니다. 기능적으로 `GITHUB_TOKEN` 비밀과 동일합니다. 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요.  <br /> 참고: 이 컨텍스트 속성은 Actions 실행기에서 설정되며 작업의 실행 `steps` 내에서만 사용할 수 있습니다. 그렇지 않으면 이 속성의 값이 `null`이 됩니다. |{% ifversion actions-stable-actor-ids %} | `github.triggering_actor` | `string` | 워크플로 실행을 시작한 사용자의 사용자 이름입니다. 워크플로 실행이 다시 실행인 경우 이 값은 `github.actor`와 다를 수 있습니다. 다시 실행을 시작하는 행위자(`github.triggering_actor`)가 다른 권한을 갖고 있더라도 모든 워크플로 다시 실행은 `github.actor`의 권한을 사용합니다. |{% endif %} | `github.workflow` | `string` | 워크플로의 이름입니다. 워크플로 파일이 `name`을 지정하지 않으면 이 속성의 값은 리포지토리에 있는 워크플로 파일의 전체 경로입니다. | | `github.workspace` | `string` | 단계에 대한 실행기의 기본 작업 디렉터리 및 [`checkout`](https://github.com/actions/checkout) 작업을 사용할 때 리포지토리의 기본 위치입니다. |

### `github` 컨텍스트의 예제 콘텐츠

다음 예제 컨텍스트는 `push` 이벤트에 의해 트리거되는 워크플로 실행의 컨텍스트입니다. 이 예제의 `event` 개체는 [웹후크 페이로드`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push)의 내용과 동일하기 때문에 잘렸습니다.

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

### `github` 컨텍스트의 사용 예제

이 예제 워크플로는 `pull_request` 이벤트에 의해 워크플로 실행이 트리거된 경우에만 `github.event_name` 컨텍스트를 사용하여 작업을 실행합니다.

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

## `env` 컨텍스트

`env` 컨텍스트에는 워크플로, 작업 또는 단계에서 설정된 환경 변수가 포함됩니다. 워크플로에서 환경 변수를 설정하는 방법에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)”을 참조하세요.

`env` 컨텍스트 구문을 사용하면 워크플로 파일에서 환경 변수의 값을 사용할 수 있습니다. 단계의 모든 키 값에서 `env` 컨텍스트를 사용할 수 있습니다. 단, `id` 키와 `uses` 키는 제외됩니다. 단계 구문에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)”을 참조하세요.

실행기 내의 환경 변수 값을 사용하려면 실행기 운영 체제의 일반 메서드를 사용하여 환경 변수를 읽습니다.

| 속성 이름 | Type | 설명 |
|---------------|------|-------------|
| `env` | `object` | 이 컨텍스트는 작업의 각 단계에 따라 변경됩니다. 작업의 모든 단계에서 이 컨텍스트에 액세스할 수 있습니다. 이 개체에는 아래에 나열된 속성이 포함되어 있습니다. |
| `env.<env_name>` | `string` | 특정 환경 변수의 값입니다. |

### `env` 컨텍스트의 예제 콘텐츠

`env` 컨텍스트의 콘텐츠는 환경 변수 이름을 해당 값에 매핑하는 것입니다. 컨텍스트의 내용은 워크플로 실행에서 사용되는 위치에 따라 변경됩니다.

```json
{
  "first_name": "Mona",
  "super_duper_var": "totally_awesome"
}
```

### `env` 컨텍스트의 사용 예제

이 예제 워크플로는 워크플로, 작업 및 단계 수준에서 `env` 컨텍스트를 구성할 수 있는 방법과 단계에서 컨텍스트를 사용하는 방법을 보여줍니다.

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

## `job` 컨텍스트

`job` 컨텍스트에는 현재 실행 중인 작업에 대한 정보가 포함됩니다.

| 속성 이름 | Type | 설명 |
|---------------|------|-------------|
| `job` | `object` | 이 컨텍스트는 워크플로 실행의 각 작업에 대해 변경됩니다. 작업의 모든 단계에서 이 컨텍스트에 액세스할 수 있습니다. 이 개체에는 아래에 나열된 모든 속성이 포함됩니다. |
| `job.container` | `object` | 작업의 컨테이너에 대한 정보입니다. 컨테이너에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)”을 참조하세요. |
| `job.container.id` | `string` | 컨테이너의 ID입니다. |
| `job.container.network` | `string` | 컨테이너 네트워크의 ID입니다. 실행기는 작업의 모든 컨테이너에서 사용하는 네트워크를 만듭니다. |
| `job.services` | `object` | 작업에 대해 만든 서비스 컨테이너입니다. 서비스 컨테이너에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)”을 참조하세요. |
| `job.services.<service_id>.id` | `string` | 서비스 컨테이너의 ID입니다. |
| `job.services.<service_id>.network` | `string` | 서비스 컨테이너 네트워크의 ID입니다. 실행기는 작업의 모든 컨테이너에서 사용하는 네트워크를 만듭니다. |
| `job.services.<service_id>.ports` | `object` | 서비스 컨테이너의 노출된 포트입니다. |
| `job.status` | `string` | 작업의 현재 상태 가능한 값은 `success`, `failure` 또는 `cancelled`입니다. |

### `job` 컨텍스트의 예제 콘텐츠

이 예제 `job` 컨텍스트는 매핑된 포트가 있는 PostgreSQL 서비스 컨테이너를 사용합니다. 작업에 사용되는 컨테이너 또는 서비스 컨테이너가 없는 경우 `job` 컨텍스트에는 `status` 속성만 포함됩니다.

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

### `job` 컨텍스트의 사용 예제

이 예제 워크플로는 PostgreSQL 서비스 컨테이너를 구성하고 서비스 컨테이너의 포트 5432를 호스트에서 임의로 선택된 사용 가능한 포트에 자동으로 매핑합니다. `job` 컨텍스트는 호스트에 할당된 포트 수에 액세스하는 데 사용됩니다.

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

## `jobs` 컨텍스트

`jobs` 컨텍스트는 재사용 가능한 워크플로에서만 사용할 수 있으며 재사용 가능한 워크플로에 대한 출력을 설정하는 데만 사용할 수 있습니다. 자세한 내용은 “[워크플로 다시 사용](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)”을 참조하세요.

| 속성 이름 | Type | Description |
|---------------|------|-------------|
| `jobs` | `object` | 이는 재사용 가능한 워크플로에서만 사용할 수 있으며 재사용 가능한 워크플로에 대한 출력을 설정하는 데만 사용할 수 있습니다. 이 개체에는 아래에 나열된 모든 속성이 포함됩니다.
| `jobs.<job_id>.result` | `string` | 재사용 가능한 워크플로의 작업 결과입니다. 가능한 값은 `success`, `failure`, `cancelled` 및 `skipped`입니다. |
| `jobs.<job_id>.outputs` | `object` | 재사용 가능한 워크플로 작업의 출력 집합입니다. |
| `jobs.<job_id>.outputs.<output_name>` | `string` | 재사용 가능한 워크플로의 작업에 대한 특정 출력 값입니다. |

### `jobs` 컨텍스트의 예제 콘텐츠

이 `jobs` 컨텍스트 예제는 재사용 가능한 워크플로 실행의 작업 결과와 출력을 포함합니다.

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

### `jobs` 컨텍스트의 사용 예제

이 재사용 가능한 워크플로 예제는 `jobs` 컨텍스트를 사용하여 재사용 가능한 워크플로에 대한 출력을 설정합니다. 출력이 단계에서, 작업으로, 그 다음에는 `workflow_call` 트리거로 이동하는 방식을 확인합니다. 자세한 내용은 “[워크플로 다시 사용](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)”을 참조하세요.

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

## `steps` 컨텍스트

`steps` 컨텍스트에는 지정되어 있고 이미 실행된 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) 가 있는 현재 작업의 단계에 대한 정보가 포함됩니다.

| 속성 이름 | Type | 설명 |
|---------------|------|-------------|
| `steps` | `object` | 이 컨텍스트는 작업의 각 단계에 따라 변경됩니다. 작업의 모든 단계에서 이 컨텍스트에 액세스할 수 있습니다. 이 개체에는 아래에 나열된 모든 속성이 포함됩니다. |
| `steps.<step_id>.outputs` | `object` | 단계에 대해 정의된 출력 집합입니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 메타데이터 구문](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)”을 참조하세요. |
| `steps.<step_id>.conclusion` | `string` | [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error)가 적용된 후 완료된 단계의 결과입니다. 가능한 값은 `success`, `failure`, `cancelled` 및 `skipped`입니다. `continue-on-error` 단계가 실패하면 `outcome`은 `failure`이지만 최종 `conclusion`은 `success`입니다. |
| `steps.<step_id>.outcome` | `string` | [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error)가 적용되기 전 완료된 단계의 결과입니다. 가능한 값은 `success`, `failure`, `cancelled` 및 `skipped`입니다. `continue-on-error` 단계가 실패하면 `outcome`은 `failure`이지만 최종 `conclusion`은 `success`입니다. |
| `steps.<step_id>.outputs.<output_name>` | `string` | 특정 출력의 값입니다. |

### `steps` 컨텍스트의 예제 콘텐츠

이 예제 `steps` 컨텍스트는 지정된 [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)가 있는 두 개의 이전 단계를 보여줍니다. 첫 번째 단계에는 `checkout`이라는 `id`가, 두 번째 단계에는 `generate_number`가 있습니다. `generate_number` 단계에는 이름이 `random_number`인 출력이 있습니다.

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

### `steps` 컨텍스트의 사용 예제

이 예제 워크플로는 한 단계에서 난수를 출력으로 생성하고, 이후 단계에서는 `steps` 컨텍스트를 사용하여 해당 출력의 값을 읽습니다.

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

## `runner` 컨텍스트

`runner` 컨텍스트에는 현재 작업을 실행하는 실행기 정보가 포함됩니다.

| 속성 이름 | Type | 설명 |
|---------------|------|-------------|
| `runner` | `object` | 이 컨텍스트는 워크플로 실행의 각 작업에 대해 변경됩니다. 이 개체에는 아래에 나열된 모든 속성이 포함됩니다. |
| `runner.name` | `string` | {% data reusables.actions.runner-name-description %} |
| `runner.os` | `string` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch` | `string` | {% data reusables.actions.runner-arch-description %} |{% endif %}
| `runner.temp` | `string` | {% data reusables.actions.runner-temp-directory-description %} |
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}|
| `runner.debug` | `string` | {% data reusables.actions.runner-debug-description %} |

{%- comment %} `runner.workspace` 속성은 일부러 설명하지 않습니다. `github.workspace`와 달리 현재 사용자와 관련이 없는 초기 Actions 속성이며 호환성을 위해 유지됩니다.
| `runner.workspace` | `string` | | {%- endcomment %}

### `runner` 컨텍스트의 예제 콘텐츠

다음 예제 컨텍스트는 Linux {% data variables.product.prodname_dotcom %}에서 호스트된 실행기에서 가져옵니다.

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

### `runner` 컨텍스트의 사용 예제

이 예제 워크플로는 `runner` 컨텍스트를 사용하여 임시 디렉터리의 경로를 설정하여 로그를 작성하고, 워크플로가 실패하면 해당 로그를 아티팩트로 업로드합니다.

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

## `secrets` 컨텍스트

`secrets` 컨텍스트는 워크플로 실행에 사용할 수 있는 비밀의 이름과 값을 포함합니다. `secrets` 보안상의 이유로 복합 작업에 컨텍스트를 사용할 수 없습니다. 복합 작업에 비밀을 전달하려면 명시적으로 입력으로 수행해야 합니다. 비밀에 대한 자세한 내용은 “[암호화된 비밀](/actions/security-guides/encrypted-secrets)”을 참조하세요.

`GITHUB_TOKEN`은 모든 워크플로 실행에 대해 자동으로 만들어지고 항상 `secrets` 컨텍스트에 포함되는 비밀입니다. 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요.

{% data reusables.actions.secrets-redaction-warning %}

| 속성 이름 | Type | 설명 |
|---------------|------|-------------|
| `secrets` | `object` | 이 컨텍스트는 워크플로 실행의 각 작업에 대해 동일합니다. 작업의 모든 단계에서 이 컨텍스트에 액세스할 수 있습니다. 이 개체에는 아래에 나열된 모든 속성이 포함됩니다. |
| `secrets.GITHUB_TOKEN` | `string` | 각 워크플로 실행에 대해 자동으로 생성된 토큰입니다. 자세한 내용은 “[자동 토큰 인증](/actions/security-guides/automatic-token-authentication)”을 참조하세요. |
| `secrets.<secret_name>` | `string` | 특정 비밀의 값입니다. |

### `secrets` 컨텍스트의 예제 콘텐츠

`secrets` 컨텍스트의 다음 예제 콘텐츠는 자동 `GITHUB_TOKEN` 및 워크플로 실행에 사용할 수 있는 두 개의 다른 비밀을 보여 줍니다.

```json
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### `secrets` 컨텍스트의 사용 예제

{% data reusables.actions.github_token-input-example %}

## `strategy` 컨텍스트

행렬이 있는 워크플로의 경우 `strategy` 컨텍스트에는 현재 작업에 대한 행렬 실행 전략에 대한 정보가 포함됩니다.

| 속성 이름 | Type | 설명 |
|---------------|------|-------------|
| `strategy` | `object` | 이 컨텍스트는 워크플로 실행의 각 작업에 대해 변경됩니다. 워크플로의 모든 작업 또는 단계에서 이 컨텍스트에 액세스할 수 있습니다. 이 개체에는 아래에 나열된 모든 속성이 포함됩니다. |
| `strategy.fail-fast` | `boolean` | `true`인 경우 행렬의 작업이 실패하면 진행 중인 모든 작업이 취소됩니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast)”을 참조하세요. |
| `strategy.job-index` | `number` | 행렬의 현재 작업의 인덱스입니다. **참고:** 이 숫자는 0부터 시작합니다. 행렬의 첫 번째 작업 인덱스는 `0`입니다. |
| `strategy.job-total` | `number` | 행렬의 총 작업 수입니다. **참고:** 이 숫자는 0부터 시작하지 **않습니다**. 예를 들어 네 개의 작업이 있는 행렬의 경우 `job-total`의 값은 `4`입니다. |
| `strategy.max-parallel` | `number` | `matrix` 작업 전략을 사용할 때 동시에 실행할 수 있는 최대 작업 수입니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel)”을 참조하세요. |

### `strategy` 컨텍스트의 예제 콘텐츠

`strategy` 컨텍스트의 다음 예제 콘텐츠는 4개의 작업이 있는 행렬에서 가져온 것이며 최종 작업에서 가져옵니다. 0부터 시작하는 `job-index` 숫자와 0부터 시작하지 않는 `job-total` 사이의 차이를 확인합니다.

```json
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### `strategy` 컨텍스트의 사용 예제

이 예제 워크플로에서는 `strategy.job-index` 속성을 사용하여 행렬의 각 작업에 대한 로그 파일의 고유한 이름을 설정합니다.

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

## `matrix` 컨텍스트

행렬이 있는 워크플로의 경우 `matrix` 컨텍스트에는 현재 작업에 적용되는 워크플로 파일에 정의된 행렬 속성이 포함됩니다. 예를 들어 `os` 및 `node` 키와 함께 행렬을 구성하는 경우 `matrix` 컨텍스트 개체에는 현재 작업에 사용되는 값과 함께 `os` 및 `node` 속성이 포함됩니다.

`matrix` 컨텍스트에는 표준 속성이 없으며 워크플로 파일에 정의된 속성만 있습니다.

| 속성 이름 | Type | 설명 |
|---------------|------|-------------|
| `matrix` | `object` | 이 컨텍스트는 행렬의 작업 및 워크플로 실행의 각 작업에 대한 변경 내용에 대해서만 사용할 수 있습니다. 워크플로의 모든 작업 또는 단계에서 이 컨텍스트에 액세스할 수 있습니다. 이 개체에는 아래에 나열된 속성이 포함되어 있습니다. |
| `matrix.<property_name>` | `string` | 행렬 속성의 값입니다. |

### `matrix` 컨텍스트의 예제 콘텐츠

`matrix` 컨텍스트의 다음 예제 콘텐츠는 워크플로에 정의된 `os` 행렬 속성과 `node` 행렬 속성이 있는 행렬의 작업에서 가져옵니다. 작업은 `ubuntu-latest` OS와 Node.js 버전 `16`의 매트릭스 조합을 실행합니다.

```json
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### `matrix` 컨텍스트의 사용 예제

이 예제 워크플로는 `os` 및 `node` 키와 함께 행렬을 만듭니다. `matrix.os` 속성을 사용하여 각 작업에 대한 실행기 유형을 설정하고, `matrix.node` 속성을 사용하여 각 작업에 대한 Node.js 버전을 설정합니다.

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

## `needs` 컨텍스트

컨텍스트에는 `needs` 현재 작업의 직접 종속성으로 정의된 모든 작업의 출력이 포함됩니다. 여기에는 암시적으로 종속된 작업(예: 종속 작업의 종속 작업)이 포함되지 않습니다. 작업 종속성 정의에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)”을 참조하세요.

| 속성 이름 | Type | 설명 |
|---------------|------|-------------|
| `needs` | `object` | 이 컨텍스트는 종속 작업이 있는 워크플로 실행과 워크플로 실행의 각 작업에 대한 변경 내용에 대해서만 채워집니다. 워크플로의 모든 작업 또는 단계에서 이 컨텍스트에 액세스할 수 있습니다. 이 개체에는 아래에 나열된 모든 속성이 포함됩니다. |
| `needs.<job_id>` | `object` | 현재 작업이 의존하는 단일 작업입니다. |
| `needs.<job_id>.outputs` | `object` | 현재 작업이 의존하는 작업의 출력 집합입니다. |
| `needs.<job_id>.outputs.<output name>` | `string` | 현재 작업이 의존하는 작업에 대한 특정 출력의 값입니다. |
| `needs.<job_id>.result` | `string` | 현재 작업이 의존하는 작업의 결과입니다. 가능한 값은 `success`, `failure`, `cancelled` 및 `skipped`입니다. |

### `needs` 컨텍스트의 예제 콘텐츠

`needs` 컨텍스트의 다음 예제 콘텐츠는 현재 작업이 의존하는 두 가지 작업에 대한 정보를 보여 줍니다.

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

### `needs` 컨텍스트의 사용 예제

이 예제 워크플로에는 세 가지 작업, 즉 빌드를 수행하는 `build` 작업, `build` 작업이 필요한 `deploy` 작업, `build` 및 `deploy` 작업이 모두 필요하고 워크플로에 오류가 있는 경우에만 실행되는 `debug` 작업이 있습니다. 또한 `deploy` 작업은 `needs` 컨텍스트를 사용하여 `build` 작업의 출력에 액세스합니다.

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
## `inputs` 컨텍스트

컨텍스트에는 `inputs` 작업{% ifversion actions-unified-inputs %}, {% else %} 또는{% endif %}에서 재사용 가능한 워크플로{% ifversion actions-unified-inputs %}에 전달되거나 수동으로 트리거된 워크플로{% endif %}에 전달되는 입력 속성이 포함됩니다. {% ifversion actions-unified-inputs %}재사용 가능한 워크플로의 경우 {% else %}{% endif %} 입력 이름 및 형식은 재사용 가능한 워크플로의 [이벤트 구성`workflow_call`](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)에 정의되며, 입력 값은 재사용 가능한 워크플로를 호출하는 외부 워크플로의 [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith)에서 전달됩니다. {% ifversion actions-unified-inputs %}수동으로 트리거된 워크플로의 경우 입력은 워크플로의 [`workflow_dispatch` 이벤트 구성](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch)에 정의됩니다.{% endif %}

`inputs` 컨텍스트에는 표준 속성이 없으며 워크플로 파일에 정의된 속성만 있습니다.

{% data reusables.actions.reusable-workflows-enterprise-beta %}

| 속성 이름 | Type | Description |
|---------------|------|-------------|
| `inputs` | `object` | 이 컨텍스트는 [재사용 가능한 워크플로](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %} 또는 [`workflow_dispatch` 이벤트](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch){% endif %}에 의해 트리거된 워크플로에서만 사용할 수 있습니다. 워크플로의 모든 작업 또는 단계에서 이 컨텍스트에 액세스할 수 있습니다. 이 개체에는 아래에 나열된 속성이 포함되어 있습니다. |
| `inputs.<name>` | `string` 또는 `number` 또는 `boolean` | 외부 워크플로에서 전달된 각 입력 값입니다. |

### `inputs` 컨텍스트의 예제 콘텐츠

`inputs` 컨텍스트의 다음 예제 콘텐츠는 `build_id`, `deploy_target` 및 `perform_deploy` 입력을 정의한 워크플로에서 가져온 것입니다.

```json
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### 재사용 가능한 워크플로의 `inputs` 컨텍스트 사용 예제

이 예제에서 재사용 가능한 워크플로는 `inputs` 컨텍스트를 사용하여 호출자 워크플로에서 재사용 가능한 워크플로에 전달된 `build_id`, `deploy_target` 및 `perform_deploy` 입력의 값을 가져옵니다.

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
### 수동으로 트리거된 워크플로의 `inputs` 컨텍스트 사용 예제

`workflow_dispatch` 이벤트에서 트리거된 이 예제 워크플로는 `inputs` 컨텍스트를 사용하여 워크플로에 전달된 `build_id`, `deploy_target` 및 `perform_deploy` 입력의 값을 가져옵니다.

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
