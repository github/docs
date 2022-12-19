---
title: コンテキスト
shortTitle: Contexts
intro: ワークフローとアクションでコンテキスト情報にアクセスできます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191935'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## コンテキストについて

コンテキストは、ワークフローの実行、ランナーの環境、ジョブ、ステップに関する情報にアクセスする方法です。 各コンテキストは、プロパティを含むオブジェクトであり、文字列またはその他のオブジェクトにすることができます。

{% data reusables.actions.context-contents %} たとえば、`matrix` コンテキストは[マトリックス](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)内のジョブに対してのみ設定されます。

式構文を使用してコンテキストにアクセスできます。 詳細については、「[式](/actions/learn-github-actions/expressions)」を参照してください。

{% raw %} `${{ <context> }}`
{% endraw %}

{% data reusables.actions.context-injection-warning %}

| コンテキスト名 | 型 | 説明 |
|---------------|------|-------------|
| `github` | `object` | ワークフロー実行に関する情報。 詳しくは、「[`github` コンテキスト](#github-context)」を参照してください。 |
| `env` | `object` | ワークフロー、ジョブ、ステップで設定された環境変数が含まれます。 詳しくは、「[`env` コンテキスト](#env-context)」を参照してください。 |
| `job` | `object` | 現在実行中のジョブに関する情報。 詳しくは、「[`job` コンテキスト](#job-context)」を参照してください。 |
{%- ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} | `jobs` | `object` | 再利用可能なワークフローの場合のみ、再利用可能なワークフローからのジョブの出力が含まれます。 詳しくは、「[`jobs` コンテキスト](#jobs-context)」を参照してください。 |{% endif %} | `steps` | `object` | 現在のジョブで実行されているステップに関する情報。 詳しくは、「[`steps` コンテキスト](#steps-context)」を参照してください。 | | `runner` | `object` | 現在のジョブを実行しているランナーに関する情報。 詳しくは、「[`runner` コンテキスト](#runner-context)」を参照してください。 | | `secrets` | `object` | ワークフロー実行に使うことができるシークレットの名前と値が含まれます。 詳しくは、「[`secrets` コンテキスト](#secrets-context)」を参照してください。 | | `strategy` | `object` | 現在のジョブのマトリックス実行戦略に関する情報。 詳しくは、「[`strategy` コンテキスト](#strategy-context)」を参照してください。 | | `matrix` | `object` | 現在のジョブに適用されるワークフロー内に定義されているマトリックス プロパティが含まれます。 詳しくは、「[`matrix` コンテキスト](#matrix-context)」を参照してください。 | | `needs` | `object` | 現在のジョブの依存関係として定義されているすべてのジョブの出力が含まれます。 詳しくは、「[`needs` コンテキスト](#needs-context)」を参照してください。 | {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `inputs` | `object` | 再利用可能な {% ifversion actions-unified-inputs %} または手動でトリガーされた{% endif %}ワークフローの入力が含まれます。 詳しくは、「[`inputs` コンテキスト](#inputs-context)」を参照してください。 |{% endif %}

式の一部として、2 つの構文のいずれかを使用してコンテキスト情報にアクセスできます。

- インデックス構文: `github['sha']`
- プロパティ逆参照構文: `github.sha`

プロパティ逆参照構文を使うには、プロパティ名が文字または `_` で始まっていて、英数字、`-`、または `_` のみを含んでいる必要があります。

存在しないプロパティを逆参照しようとすると、空の文字列として評価されます。

### コンテキストを使用する場合の判断

{% data reusables.actions.using-context-or-environment-variables %}

### コンテキストの可用性

ワークフローの実行を通して、さまざまなコンテキストを使用できます。 たとえば、`secrets` コンテキストはジョブ内の特定の場所でのみ使用できます。

また、一部の関数は特定の場所でのみ使用できます。 たとえば、`hashFiles` 関数はどこにも使用できません。

次の表は、ワークフロー内で各コンテキストと特殊関数を使用できる場所を示しています。 以下に一覧表示されている場合を除き、任意の場所で関数を使用できます。

{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %}

| ワークフロー キー | Context | 特殊な関数 |
| ---- | ------- | ----------------- |
{%- ifversion actions-run-name %} | <code>run-name</code> | <code>github, inputs</code> | | {%- endif %} | <code>concurrency</code> | <code>github, inputs</code> | | | <code>env</code> | <code>github, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.concurrency</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> | | | <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> | | <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | | | <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs,{% ifversion actions-reusable-workflow-matrix %} strategy, matrix,{% endif %} secrets{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> | | | <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> | | <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> | | | <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> | | | <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs{% ifversion actions-reusable-workflow-matrix %}, strategy, matrix{% endif %}{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github{% ifversion actions-unified-inputs %}, inputs{% endif %}</code> | | | <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> | | {% else %}
| パス | Context | 特殊な関数 |
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

### 例: ログへのコンテキスト情報の出力

デバッグのためにコンテキストの内容をログに出力できます。 JSON オブジェクトをログに整形出力するには、[`toJSON` 関数](/actions/learn-github-actions/expressions#tojson)が必要です。

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

## `github` コンテキスト

`github` コンテキストには、ワークフローの実行とその実行をトリガーしたイベントの情報が含まれます。 ほとんどの `github` コンテキスト データは環境変数で読み取ることができます。 環境変数について詳しくは、[環境変数の使用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)に関するページを参照してください。

{% data reusables.actions.github-context-warning %} {% data reusables.actions.context-injection-warning %}

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `github` | `object` | ワークフローのあらゆるジョブやステップにおいて使用できる最上位のコンテキスト。 このオブジェクトには、以下に一覧表示されているすべてのプロパティが含まれています。 |
| `github.action` | `string` | 現在実行中のアクションの名前、またはステップの [`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid)。 {% data variables.product.prodname_dotcom %} では特殊文字を削除し、現在のステップで `id` なしでスクリプトを実行するときに `__run` という名前を使用します。 同じジョブで同じアクションを複数回使う場合、名前には、前にアンダースコアが付いたシーケンス番号で構成されるサフィックスが含まれます。 たとえば、実行する最初のスクリプトの名前は `__run` で、2 番目のスクリプトの名前は `__run_2` となります。 同様に、`actions/checkout` の 2 番目の呼び出しは `actionscheckout2` になります。 |
| `github.action_path` | `string` | アクションが置かれているパス。 このプロパティは、複合アクションでのみサポートされます。 このパスを使用して、アクションと同じリポジトリにあるファイルにアクセスできます。 |
| `github.action_ref` | `string` | アクションを実行するステップの場合、これは実行中のアクションの参照です。 たとえば、`v2` のようにします。 |
| `github.action_repository` | `string` | アクションを実行するステップの場合、これはアクションの所有者とリポジトリの名前です。 たとえば、`actions/checkout` のようにします。 |
| `github.action_status` | `string` | 複合アクションの場合は、複合アクションの現在の結果。 |
| `github.actor` | `string` | {% ifversion actions-stable-actor-ids %}ワークフローの実行を最初にトリガーしたユーザーのユーザー名。 ワークフローの実行が再実行である場合、この値は `github.triggering_actor` と異なることがあります。 ワークフローのすべての再実行では、再実行を開始したアクター (`github.triggering_actor`) が異なる特権を持っている場合であっても、`github.actor` の特権が使われます。{% else %}ワークフローの実行を開始したユーザーのユーザー名。{% endif %} |
| `github.api_url` | `string` | {% data variables.product.prodname_dotcom %} REST API の URL。 |
| `github.base_ref` | `string` | ワークフローの実行における `base_ref` または pull request のターゲット ブランチ。 このプロパティは、ワークフローの実行をトリガーしたイベントが `pull_request` または `pull_request_target` の場合にのみ使用できます。 |
| `github.env` | `string` | ワークフロー コマンドから環境変数を設定するファイルへのランナーのパス。 このファイルは現在のステップに固有であり、ジョブ内のステップごとに異なるファイルです。 詳細については、「[{% data variables.product.prodname_actions %} のワークフロー コマンド](/actions/learn-github-actions/workflow-commands-for-github-actions#setting-an-environment-variable)」を参照してください。 |
| `github.event` | `object` | webhook ペイロードの完全なイベント。 このコンテキストを使用して、イベントの個々のプロパティにアクセスできます。 このオブジェクトは、ワークフロー実行をトリガーしたイベントの Webhook ペイロードと同じであり、イベントごとに異なります。 各 {% data variables.product.prodname_actions %} イベントの Webhook は、「[ワークフローをトリガーするイベント](/articles/events-that-trigger-workflows/)」にリンクされています。 たとえば、[`push` イベント](/actions/using-workflows/events-that-trigger-workflows#push)によってトリガーされるワークフロー実行の場合、このオブジェクトには[プッシュ Webhook ペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push)の内容が含まれます。 |
| `github.event_name` | `string` | ワークフローの実行をトリガーしたイベントの名前。 |
| `github.event_path` | `string` | 完全なイベント Webhook ペイロードを含むランナー上のファイルへのパス。 |
| `github.graphql_url` | `string` | {% data variables.product.prodname_dotcom %} GraphQL API の URL。 |
| `github.head_ref` | `string` | ワークフローの実行における `head_ref` または pull request のソース ブランチ。 このプロパティは、ワークフローの実行をトリガーしたイベントが `pull_request` または `pull_request_target` の場合にのみ使用できます。 |
| `github.job` | `string` | 現在のジョブの [`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。 <br /> 注: このコンテキスト プロパティは Actions ランナーによって設定され、ジョブの実行 `steps` 内でのみ使用できます。 それ以外の場合、このプロパティの値は `null` になります。 |
| `github.ref` | `string` | {% data reusables.actions.ref-description %} |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `boolean` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %} | {%- endif %} | `github.path` | `string` | ワークフロー コマンドからシステム `PATH` 変数を設定するファイルへのランナーのパス。 このファイルは現在のステップに固有であり、ジョブ内のステップごとに異なるファイルです。 詳細については、「[{% data variables.product.prodname_actions %} のワークフロー コマンド](/actions/learn-github-actions/workflow-commands-for-github-actions#adding-a-system-path)」を参照してください。 | | `github.repository` | `string` | 所有者とリポジトリの名前。 たとえば、`Codertocat/Hello-World` のようにします。 | | `github.repository_owner` | `string` | リポジトリ所有者の名前。 たとえば、`Codertocat` のようにします。 | | `github.repositoryUrl` | `string` | リポジトリへの Git URL。 たとえば、`git://github.com/codertocat/hello-world.git` のようにします。 | | `github.retention_days` | `string` | ワークフロー実行ログと成果物が保持される日数。 | | `github.run_id` | `string` | {% data reusables.actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.actions.run_number_description %} | {%- ifversion fpt or ghec or ghes > 3.5 or ghae > 3.4 %} | `github.run_attempt` | `string` | リポジトリ内の特定のワークフロー実行の試行ごとに一意の番号。 この番号は、ワークフロー実行の最初の試行時に 1 で始まり、再実行ごとに増加します。 | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | `github.secret_source` | `string` | ワークフロー内で使われるシークレットのソース。 指定できる値は、`None`、`Actions`、`Dependabot`、および `Codespaces` です。 | {%- endif %} | `github.server_url` | `string` | GitHub サーバーの URL。 (例: `https://github.com`)。 | | `github.sha` | `string` | {% data reusables.actions.github_sha_description %} | | `github.token` | `string` | リポジトリにインストールされている GitHub アプリに代わって認証するトークン。 これは、機能的には `GITHUB_TOKEN` シークレットと同等です。 詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。  <br /> 注: このコンテキスト プロパティは Actions ランナーによって設定され、ジョブの実行 `steps` 内でのみ使用できます。 それ以外の場合、このプロパティの値は `null` になります。 |{% ifversion actions-stable-actor-ids %} | `github.triggering_actor` | `string` |ワークフローの実行を開始したユーザーのユーザー名。 ワークフローの実行が再実行である場合、この値は `github.actor` と異なることがあります。 ワークフローのすべての再実行では、再実行を開始したアクター (`github.triggering_actor`) が異なる特権を持っている場合であっても、`github.actor` の特権が使われます。 |{% endif %} | `github.workflow` | `string` | ワークフローの名前。 ワークフロー ファイルで `name` を指定していない場合、このプロパティの値は、リポジトリ内にあるワークフロー ファイルの完全なパスになります。 | | `github.workspace` | `string` | ステップのランナー上の既定の作業ディレクトリと、[`checkout`](https://github.com/actions/checkout) アクションを使用するときのリポジトリの既定の場所。 |

### `github` コンテキストの内容の例

次のコンテキスト例は、`push` イベントによってトリガーされるワークフロー実行のものです。 この例の `event` オブジェクトは、[`push` Webhook ペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push)の内容と同じであるため、切り捨てられています。

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

### `github` コンテキストの使用例

このワークフロー例では、ワークフロー実行が `github.event_name` イベントによってトリガーされた場合にのみ、`pull_request` コンテキストを使用してジョブを実行します。

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

## `env` コンテキスト

`env` コンテキストには、ワークフロー、ジョブ、またはステップで設定された環境変数が含まれます。 ワークフローでの環境変数の設定について詳しくは、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)」を参照してください。

`env` コンテキスト構文では、ワークフロー ファイルで環境変数の値を使用できます。 `env` コンテキストは、ステップ内の任意のキーの値で使用できます。ただし、`id` と `uses` キーは除きます。 ステップ構文について詳しくは、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)」を参照してください。

ランナー中で環境変数の値を使いたい場合は、ランナーのオペレーティングシステムで環境変数を読み取る通常の方法を使ってください。

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `env` | `object` | このコンテキストは、ジョブのステップごとに異なります。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。 このオブジェクトには、以下に一覧表示されているプロパティが含まれています。 |
| `env.<env_name>` | `string` | 特定の環境変数の値。 |

### `env` コンテキストの内容の例

`env` コンテキストの内容は、環境変数の名前とその値へのマッピングです。 コンテキストの内容は、ワークフローの実行で使用される場所に応じて変わる場合があります。

```json
{
  "first_name": "Mona",
  "super_duper_var": "totally_awesome"
}
```

### `env` コンテキストの使用例

このワークフロー例では、ワークフロー、ジョブ、ステップ レベルで `env` コンテキストを構成する方法と、ステップでそのコンテキストを使用する方法を示します。

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

## `job` コンテキスト

`job` コンテキストには、現在実行中のジョブに関する情報が含まれます。

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `job` | `object` | このコンテキストは、実行しているジョブごとに異なります。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。 このオブジェクトには、以下に一覧表示されているすべてのプロパティが含まれています。 |
| `job.container` | `object` | ジョブのコンテナに関する情報。 コンテナーについて詳しくは、「[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)」を参照してください。 |
| `job.container.id` | `string` | コンテナーの ID。 |
| `job.container.network` | `string` | コンテナー ネットワークの ID。 ランナーは、コンテナ内のすべてのジョブに使用されるネットワークを作成します。 |
| `job.services` | `object` | ジョブのために作成されたサービスコンテナ。 サービス コンテナーについて詳しくは、「[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)」を参照してください。 |
| `job.services.<service_id>.id` | `string` | サービス コンテナーの ID。 |
| `job.services.<service_id>.network` | `string` | サービス コンテナー ネットワークの ID。 ランナーは、コンテナ内のすべてのジョブに使用されるネットワークを作成します。 |
| `job.services.<service_id>.ports` | `object` | サービスコンテナの公開ポート。 |
| `job.status` | `string` | ジョブの現在の状態。 設定可能な値は、`success`、`failure`、または `cancelled` です。 |

### `job` コンテキストの内容の例

この `job` コンテキストの例では、マップされたポートを持つ PostgreSQL サービス コンテナーを使用します。 ジョブで使用されるコンテナーまたはサービス コンテナーがない場合、`job` コンテキストには `status` プロパティのみが含まれます。

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

### `job` コンテキストの使用例

このワークフロー例では、PostgreSQL サービス コンテナーを構成し、サービス コンテナー内のポート 5432 をホスト上でランダムに選ばれた使用可能なポートに自動的にマップします。 `job` コンテキストは、ホストで割り当てられた番号のポートにアクセスするために使用されます。

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

## `jobs` コンテキスト

`jobs` コンテキストは、再利用可能なワークフローでのみ使うことができ、再利用可能なワークフローに出力を設定するためにのみ使うことができます。 詳細については、「[ワークフローの再利用](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)」を参照してください。

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `jobs` | `object` | これは、再利用可能なワークフローでのみ使うことができ、再利用可能なワークフローに出力を設定するためにのみ使うことができます。 このオブジェクトには、以下に一覧表示されているすべてのプロパティが含まれています。
| `jobs.<job_id>.result` | `string` | 再利用可能なワークフロー内のジョブの結果。 指定できる値は、`success`、`failure`、`cancelled`、および `skipped` です。 |
| `jobs.<job_id>.outputs` | `object` | 再利用可能なワークフロー内のジョブの出力セット。 |
| `jobs.<job_id>.outputs.<output_name>` | `string` | 再利用可能なワークフロー内のジョブの特定の出力値。 |

### `jobs` コンテキストの内容の例

この `jobs` コンテキストの例には、再利用可能なワークフローの実行からのジョブの結果と出力が含まれています。

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

### `jobs` コンテキストの使用例

この再利用可能なワークフローの例では、`jobs` コンテキストを使って、再利用可能なワークフローの出力を設定します。 出力のフローが、ステップからジョブへ、その後 `workflow_call` トリガーへ向かっていることに注意してください。 詳細については、「[ワークフローの再利用](/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow)」を参照してください。

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

## `steps` コンテキスト

`steps` コンテキストには、[`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) が指定されていて、既に実行されている現在のジョブのステップに関する情報が含まれています。

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `steps` | `object` | このコンテキストは、ジョブのステップごとに異なります。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。 このオブジェクトには、以下に一覧表示されているすべてのプロパティが含まれています。 |
| `steps.<step_id>.outputs` | `object` | ステップに定義された出力のセット。 詳細については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/articles/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)」を参照してください。 |
| `steps.<step_id>.conclusion` | `string` | [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) の適用後の完了したステップの結果。 指定できる値は、`success`、`failure`、`cancelled`、および `skipped` です。 `continue-on-error` ステップが失敗した場合、`outcome` は `failure` になりますが、最終的な `conclusion` は `success` になります。 |
| `steps.<step_id>.outcome` | `string` | [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error) の適用前の完了したステップの結果。 指定できる値は、`success`、`failure`、`cancelled`、および `skipped` です。 `continue-on-error` ステップが失敗した場合、`outcome` は `failure` になりますが、最終的な `conclusion` は `success` になります。 |
| `steps.<step_id>.outputs.<output_name>` | `string` | 特定の出力の値。 |

### `steps` コンテキストの内容の例

この `steps` コンテキストの例は、[`id`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsid) が指定された 2 つの前のステップを示しています。 最初のステップの `id`は `checkout` という名前で、2 番目は `generate_number` です。 `generate_number` ステップの出力は `random_number` という名前です。

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

### `steps` コンテキストの使用例

このワークフロー例では、1 つのステップで出力として乱数を生成し、後のステップでは `steps` コンテキストを使用してその出力の値を読み取ります。

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

## `runner` コンテキスト

`runner` コンテキストには、現在のジョブを実行しているランナーに関する情報が含まれています。

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `runner` | `object` | このコンテキストは、実行しているジョブごとに異なります。 このオブジェクトには、以下に一覧表示されているすべてのプロパティが含まれています。 |
| `runner.name` | `string` | {% data reusables.actions.runner-name-description %} |
| `runner.os` | `string` | {% data reusables.actions.runner-os-description %} |{% ifversion actions-runner-arch-envvars %}
| `runner.arch` | `string` | {% data reusables.actions.runner-arch-description %} |{% endif %}
| `runner.temp` | `string` | {% data reusables.actions.runner-temp-directory-description %} |
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}|
| `runner.debug` | `string` | {% data reusables.actions.runner-debug-description %} |

{%- comment %} `runner.workspace` プロパティは意図的に文書化されていません。 `github.workspace` と比較すると、これはユーザーには現在関連していない初期の Actions プロパティです。 互換性のために保持されます。
| `runner.workspace` | `string` | | {%- endcomment %}

### `runner` コンテキストの内容の例

次のコンテキスト例は、Linux {% data variables.product.prodname_dotcom %} ホスト ランナーからのものです。

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

### `runner` コンテキストの使用例

このワークフロー例では、`runner` コンテキストを使用して、ログを書き込む一時ディレクトリへのパスを設定し、ワークフローが失敗した場合は、それらのログを成果物としてアップロードします。

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

## `secrets` コンテキスト

`secrets` コンテキストには、ワークフロー実行で使用できるシークレットの名前と値が含まれています。 セキュリティ上の理由から、複合アクションに `secrets` コンテキストは使用できません。 複合アクションにシークレットを渡すには、入力として明示的に行う必要があります。 シークレットについて詳しくは、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

`GITHUB_TOKEN` は、すべてのワークフロー実行に対して自動的に作成されるシークレットであり、常に `secrets` コンテキストに含まれます。 詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。

{% data reusables.actions.secrets-redaction-warning %}

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `secrets` | `object` | このコンテキストは、ワークフロー実行のジョブごとに同じです。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。 このオブジェクトには、以下に一覧表示されているすべてのプロパティが含まれています。 |
| `secrets.GITHUB_TOKEN` | `string` | ワークフロー実行ごとに自動的に作成されたトークン。 詳しくは、「[自動トークン認証](/actions/security-guides/automatic-token-authentication)」を参照してください。 |
| `secrets.<secret_name>` | `string` | 特定のシークレットの値。 |

### `secrets` コンテキストの内容の例

次の `secrets` コンテキストの内容の例は、自動 `GITHUB_TOKEN` と、ワークフロー実行で使用できる他の 2 つのシークレットを示しています。

```json
{
  "github_token": "***",
  "NPM_TOKEN": "***",
  "SUPERSECRET": "***"
}
```

### `secrets` コンテキストの使用例

{% data reusables.actions.github_token-input-example %}

## `strategy` コンテキスト

マトリックスを含むワークフローの場合、`strategy` コンテキストには現在のジョブのマトリックス実行戦略に関する情報が含まれます。

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `strategy` | `object` | このコンテキストは、実行しているジョブごとに異なります。 このコンテキストには、ワークフロー内の任意のジョブまたはステップからアクセスできます。 このオブジェクトには、以下に一覧表示されているすべてのプロパティが含まれています。 |
| `strategy.fail-fast` | `boolean` | `true` の場合、マトリックス内のジョブが失敗すると、進行中のすべてのジョブが取り消されます。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategyfail-fast)に関するページを参照してください。 |
| `strategy.job-index` | `number` | マトリックス内の現在のジョブのインデックス。 **注:** この数値は 0 から始まる数値です。 マトリックス内の最初のジョブのインデックスは `0` です。 |
| `strategy.job-total` | `number` | マトリックス内のジョブの合計数。 **注:** この数値は 0 から始まる数値では **ありません**。 たとえば、4 つのジョブを含むマトリックスの場合、`job-total` の値は `4` になります。 |
| `strategy.max-parallel` | `number` | `matrix` ジョブ戦略を使用するときに、同時に実行できるジョブの最大数。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel)に関するページを参照してください。 |

### `strategy` コンテキストの内容の例

次の `strategy` コンテキストの内容の例は、4 つのジョブを含むマトリックスからのものであり、最終的なジョブから取得されたものです。 0 から始まる `job-index` 数値と、0 から始まらない `job-total` との違いに注意してください。

```json
{
  "fail-fast": true,
  "job-index": 3,
  "job-total": 4,
  "max-parallel": 4
}
```

### `strategy` コンテキストの使用例

このワークフロー例では `strategy.job-index` プロパティを使用して、マトリックス内の各ジョブのログ ファイルの一意の名前を設定します。

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

## `matrix` コンテキスト

マトリックスを含むワークフローの場合、`matrix` コンテキストには、現在のジョブに適用されるワークフロー ファイルで定義されているマトリックス プロパティが含まれます。 たとえば、`os` と `node` キーを使用してマトリックスを構成する場合、`matrix` コンテキスト オブジェクトには、現在のジョブで使用されている値を持つ `os` と `node` プロパティが含まれます。

`matrix` コンテキストには標準プロパティはなく、ワークフロー ファイルで定義されているもののみとなります。

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `matrix` | `object` | このコンテキストは、マトリックス内のジョブに対してのみ使用でき、ワークフロー実行のジョブごとに変わります。 このコンテキストには、ワークフロー内の任意のジョブまたはステップからアクセスできます。 このオブジェクトには、以下に一覧表示されているプロパティが含まれています。 |
| `matrix.<property_name>` | `string` | マトリックス プロパティの値。 |

### `matrix` コンテキストの内容の例

次の `matrix` コンテキストの内容の例は、ワークフローで定義された `os` と `node` マトリックス プロパティを持つマトリックス内のジョブからのものです。 そのジョブでは、`ubuntu-latest`OS と Node.js バージョン`16`のマトリックスの組み合わせが実行されています。

```json
{
  "os": "ubuntu-latest",
  "node": 16
}
```

### `matrix` コンテキストの使用例

このワークフロー例では、`os` と `node` キーを使用してマトリックスを作成します。 `matrix.os` プロパティを使って各ジョブのランナーの種類が設定され、`matrix.node` プロパティを使用して各ジョブの Node.js バージョンが設定されます。

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

## `needs` コンテキスト

`needs` コンテキストには、現在のジョブの直接依存関係として定義されたすべてのジョブからの出力が含まれます。 これには、暗黙的な依存ジョブ (たとえば、依存ジョブの依存ジョブ) は含まれないことに注意してください。 ジョブの依存関係の定義について詳しくは、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idneeds)」を参照してください。

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `needs` | `object` | このコンテキストは、依存ジョブを持つワークフロー実行に対してのみ設定され、ワークフロー実行のジョブごとに変わります。 このコンテキストには、ワークフロー内の任意のジョブまたはステップからアクセスできます。 このオブジェクトには、以下に一覧表示されているすべてのプロパティが含まれています。 |
| `needs.<job_id>` | `object` | 現在のジョブが依存している1つのジョブ。 |
| `needs.<job_id>.outputs` | `object` | 現在のジョブが依存しているジョブの出力の集合。 |
| `needs.<job_id>.outputs.<output name>` | `string` | 現在のジョブが依存しているジョブの特定の出力の値。 |
| `needs.<job_id>.result` | `string` | 現在のジョブが依存しているジョブの結果。 指定できる値は、`success`、`failure`、`cancelled`、および `skipped` です。 |

### `needs` コンテキストの内容の例

`needs` コンテキストの次の内容の例は、現在のジョブが依存している 2 つのジョブの情報を示しています。

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

### `needs` コンテキストの使用例

このワークフロー例には 3 つのジョブがあります。つまり、ビルドを実行する `build` ジョブ、`build` ジョブを必要とする `deploy` ジョブ、`build` と `deploy` ジョブの両方を必要とし、ワークフローにエラーがある場合にのみ実行される `debug` ジョブです。 また、`deploy` ジョブでは `needs` コンテキストを使用して `build` ジョブからの出力にアクセスします。

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
## `inputs` コンテキスト

`inputs` コンテキストには、アクション{% ifversion actions-unified-inputs %}、{% else %}または{% endif %}再利用可能なワークフロー{% ifversion actions-unified-inputs %}、または手動でトリガーされたワークフロー{% endif %}に渡される入力プロパティが含まれています。 {% ifversion actions-unified-inputs %}再利用可能なワークフローの場合、{% else %}{% endif %}入力の名前と種類は、再利用可能なワークフローの [`workflow_call` イベント構成](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events)で定義され、再利用可能なワークフローを呼び出す外部ワークフローの [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) から入力値が渡されます。 {% ifversion actions-unified-inputs %}手動でトリガーされたワークフローの場合、入力はワークフローの [`workflow_dispatch` イベント構成](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch)で定義されています。{% endif %}

`inputs` コンテキストには標準プロパティはなく、ワークフロー ファイルで定義されているもののみとなります。

{% data reusables.actions.reusable-workflows-enterprise-beta %}

| プロパティ名 | Type | 説明 |
|---------------|------|-------------|
| `inputs` | `object` | このコンテキストは、[再利用可能なワークフロー](/actions/learn-github-actions/reusing-workflows){% ifversion actions-unified-inputs %}または [`workflow_dispatch` イベント](/actions/learn-github-actions/events-that-trigger-workflows#workflow_dispatch)によってトリガーされたワークフロー{% endif %}でのみ使用できます。 このコンテキストには、ワークフロー内の任意のジョブまたはステップからアクセスできます。 このオブジェクトには、以下に一覧表示されているプロパティが含まれています。 |
| `inputs.<name>` | `string` または `number` または `boolean` | 外部ワークフローから渡される各入力値。 |

### `inputs` コンテキストの内容の例

次の `inputs` コンテキストの内容の例は、`build_id`、`deploy_target`、`perform_deploy` の各入力が定義されているワークフローのものです。

```json
{
  "build_id": 123456768,
  "deploy_target": "deployment_sys_1a",
  "perform_deploy": true
}
```

### 再利用可能なワークフローでの `inputs` コンテキストの使用例

この再利用可能なワークフローの例では、`inputs` コンテキストを使って、呼び出し元ワークフローから再利用可能なワークフローに渡された `build_id`、`deploy_target`、`perform_deploy` 入力の値を取得しています。

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
### 手動でトリガーされたワークフローでの `inputs` コンテキストの使用例

`workflow_dispatch` イベントによってトリガーされたこのワークフローの例では、`inputs` コンテキストを使って、ワークフローに渡された `build_id`、`deploy_target`、`perform_deploy` 入力の値を取得しています。

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
