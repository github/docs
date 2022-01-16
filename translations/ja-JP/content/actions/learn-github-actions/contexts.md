---
title: コンテキスト
shortTitle: コンテキスト
intro: You can access context information in workflows and actions.
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
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About contexts

{% data reusables.github-actions.context-injection-warning %}

コンテキストは、ワークフローの実行、ランナーの環境、ジョブ、ステップに関する情報にアクセスする方法です。 コンテキストは式の構文を使用します。 For more information, see "[Expressions](/actions/learn-github-actions/expressions)."

{% raw %}
`${{ <context> }}`
{% endraw %}

| コンテキスト名    | 種類       | 説明                                                                                                                                                                     |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`   | `オブジェクト` | ワークフロー実行に関する情報。 詳しい情報については、「[`github` コンテキスト](#github-context)」を参照してください。                                                                                              |
| `env`      | `オブジェクト` | ワークフロー、ジョブ、ステップで設定された環境変数が含まれます。 詳しい情報については、[`env` コンテキスト](#env-context)を参照してください。                                                                                     |
| `ジョブ`      | `オブジェクト` | 現在実行中のジョブに関する情報。 詳しい情報については、「[`job` コンテキスト](#job-context)」を参照してください。                                                                                                   |
| `steps`    | `オブジェクト` | このジョブで実行されているステップに関する情報。 詳しい情報については、「[`steps` コンテキスト](#steps-context)」を参照してください。                                                                                       |
| `runner`   | `オブジェクト` | 現在のジョブを実行しているランナーに関する情報。 詳しい情報については[`runner`コンテキスト](#runner-context)を参照してください。                                                                                         |
| `secrets`  | `オブジェクト` | シークレットへのアクセスを有効にします。 シークレットに関する詳しい情報については、「[暗号化されたシークレットの作成と利用](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)」を参照してください。 |
| `strategy` | `オブジェクト` | 現在のジョブに関して設定されたstrategyパラメータおよび情報にアクセスできます。 strategyパラメータには、`fail-fast`、`job-index`、`job-total`、`max-parallel`があります。                                                   |
| `matrix`   | `オブジェクト` | 現在のジョブに対して決定したmatrixパラメータにアクセスできます。 例えば、`os`および`node` バージョンでマトリックスビルドを設定した場合、`matrix`コンテキストオブジェクトには現在のジョブの`os`および`node`バージョンが含まれます。                                    |
| `needs`    | `オブジェクト` | 現在のジョブの依存関係として定義されたすべてのジョブの出力へのアクセスを可能にします。 詳しい情報については[`needs`コンテキスト](#needs-context)を参照してください。                                                                        |
{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4757 %}| `inputs` | `object` | Enables access to the inputs of reusable workflow. For more information, see [`inputs` context](#inputs-context). |{% endif %}

式の一部として、次の 2 つの構文のうちいずれかを使用してコンテキストにアクセスすることができます。
- インデックス構文: `github['sha']`
- プロパティ参照外しの構文: `github.sha`

プロパティ参照外しの構文を使用するには、プロパティ名に次の条件が必要です。
- `a-Z` または `_` で始まる。
- `a-Z` 、`0-9`、 `-`、または`_`が続く。

### コンテキストを使用する場合の判断

{% data reusables.github-actions.using-context-or-environment-variables %}

### `github` コンテキスト

`github` コンテキストは、ワークフローの実行および、その実行をトリガーしたイベントの情報を含みます。 ほとんどの `github` コンテキストデータは、環境変数で読み取ることができます。 環境変数に関する詳しい情報については、「[環境変数の利用](/actions/automating-your-workflow-with-github-actions/using-environment-variables)」を参照してください。

{% data reusables.github-actions.github-context-warning %}
{% data reusables.github-actions.context-injection-warning %}

| プロパティ名               | 種類       | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `github`             | `オブジェクト` | ワークフローのあらゆるジョブやステップにおいて使用できる最上位のコンテキスト。                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `github.action`      | `string` | 現在実行中のアクションの名前。 {% data variables.product.prodname_dotcom %} removes special characters or uses the name `__run` when the current step runs a script.  If you use the same action more than once in the same job, the name will include a suffix with the sequence number with underscore before it.  For example, the first script you run will have the name `__run`, and the second script will be named `__run_2`. 同様に、`actions/checkout`の2回目の呼び出しは`actionscheckout2`となります。 |
| `github.action_path` | `string` | アクションが置かれているパス。 このパスを使用して、アクションと同じリポジトリにあるファイルに簡単にアクセスできます。 This attribute is only supported in composite actions.                                                                                                                                                                                                                                                                                                                                                              |
| `github.actor`       | `string` | ワークフローの実行を開始したユーザのログイン。                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `github.base_ref`    | `string` | ワークフローの実行における `base_ref` またはPull Requestのターゲットブランチ。 このプロパティは、ワークフローの実行をトリガーするイベントが `pull_request` または `pull_request_target` のいずれかである場合にのみ使用できます。                                                                                                                                                                                                                                                                                                                                |
| `github.event`       | `オブジェクト` | webhook ペイロードの完全なイベント。 詳しい情報については、「[ワークフローをトリガーするイベント](/articles/events-that-trigger-workflows/)」を参照してください。 このコンテキストを使用して、イベントの個々のプロパティにアクセスできます。                                                                                                                                                                                                                                                                                                                               |
| `github.event_name`  | `string` | ワークフローの実行をトリガーしたイベントの名前。                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `github.event_path`  | `string` | ランナー上の完全なイベントwebhookペイロードへのパス。                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `github.head_ref`    | `string` | ワークフローの実行における `head_ref` またはPull Requestのソースブランチ。 このプロパティは、ワークフローの実行をトリガーするイベントが `pull_request` または `pull_request_target` のいずれかである場合にのみ使用できます。                                                                                                                                                                                                                                                                                                                                  |
| `github.job`         | `string` | 現在のジョブの[`job_id`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。                                                                                                                                                                                                                                                                                                                                                                                            |
| `github.ref`         | `string` | ワークフローの実行をトリガーしたブランチまたはタグ ref。 For branches this is the format  `refs/heads/<branch_name>`, and for tags it is `refs/tags/<tag_name>`.                                                                                                                                                                                                                                                                                                                              |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5338 %}
| `github.ref_name` | `string` | {% data reusables.actions.ref_name-description %} | | `github.ref_protected` | `string` | {% data reusables.actions.ref_protected-description %} | | `github.ref_type` | `string` | {% data reusables.actions.ref_type-description %}
{%- endif %}
| `github.repository` | `string` | The owner and repository name. `Codertocat/Hello-World`などです。 | | `github.repository_owner` | `string` | The repository owner's name. たとえば`Codertocat`。 | | `github.run_id` | `string` | {% data reusables.github-actions.run_id_description %} | | `github.run_number` | `string` | {% data reusables.github-actions.run_number_description %} | | `github.run_attempt` | `string` | A unique number for each attempt of a particular workflow run in a repository. This number begins at 1 for the workflow run's first attempt, and increments with each re-run. | | `github.server_url` | `string` | Returns the URL of the GitHub server. たとえば、`https://github.com` などです。 | | `github.sha` | `string` | The commit SHA that triggered the workflow run. | | `github.token` | `string` | A token to authenticate on behalf of the GitHub App installed on your repository. これは機能的に`GITHUB_TOKEN`シークレットに等価です。 詳しい情報については「[GITHUB_TOKENでの認証](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)」を参照してください。 | | `github.workflow` | `string` | The name of the workflow. ワークフローファイルで `name` を指定していない場合、このプロパティの値は、リポジトリ内にあるワークフローファイルのフルパスになります。 | | `github.workspace` | `string` | The default working directory for steps and the default location of your repository when using the [`checkout`](https://github.com/actions/checkout) action. |

### `env`コンテキスト

`env`コンテキストには、ワークフロー、ジョブ、ステップで設定された環境変数が含まれます。 ワークフローでの環境変数の設定に関する詳しい情報については「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)」を参照してください。

`env`の構文で、ワークフローファイル中の環境変数の値を利用できます。 `id`及び`uses`キーを除く、**step**中の任意のキーの値で`env`コンテキストを利用できます。 ステップの構文に関する詳しい情報については「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps)」を参照してください。

ランナー中で環境変数の値を使いたい場合は、ランナーのオペレーティングシステムで環境変数を読み取る通常の方法を使ってください。

| プロパティ名                 | 種類       | 説明                                                             |
| ---------------------- | -------- | -------------------------------------------------------------- |
| `env`                  | `オブジェクト` | このコンテキストは、ジョブのステップごとに異なります。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。 |
| `env.<env_name>` | `string` | 特定の環境変数の値。                                                     |

### `job` コンテキスト

`job` コンテキストは、現在実行中のジョブに関する情報を含みます。

| プロパティ名                                    | 種類       | 説明                                                                                                                                                                                  |
| ----------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ジョブ`                                     | `オブジェクト` | このコンテキストは、実行しているジョブごとに異なります。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。                                                                                                                     |
| `job.container`                           | `オブジェクト` | ジョブのコンテナに関する情報。 コンテナに関する詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions#jobsjob_idcontainer)」を参照してください。          |
| `job.container.id`                        | `string` | コンテナの ID。                                                                                                                                                                           |
| `job.container.network`                   | `string` | コンテナネットワークの ID。 runner は、コンテナ内のすべてのジョブに使用されるネットワークを作成します。                                                                                                                           |
| `job.services`                            | `オブジェクト` | ジョブのために作成されたサービスコンテナ。 サービスコンテナに関する詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/articles/workflow-syntax-for-github-actions#jobsjob_idservices)」を参照してください。 |
| `job.services.<service id>.id`      | `string` | サービスコンテナの ID。                                                                                                                                                                       |
| `job.services.<service id>.network` | `string` | サービスコンテナネットワークの ID。 runner は、コンテナ内のすべてのジョブに使用されるネットワークを作成します。                                                                                                                       |
| `job.services.<service id>.ports`   | `オブジェクト` | サービスコンテナの公開ポート。                                                                                                                                                                     |
| `job.status`                              | `string` | ジョブの現在の状態。 `success`、`failure`、`cancelled` のいずれかの値をとります。                                                                                                                            |

### `steps` コンテキスト

`steps` コンテキストは、すでに実行中のジョブ内のステップに関する情報を含みます。

| プロパティ名                                              | 種類       | 説明                                                                                                                                                                                                                                                                                 |
| --------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `steps`                                             | `オブジェクト` | このコンテキストは、ジョブのステップごとに異なります。 このコンテキストには、ジョブのあらゆるステップからアクセスできます。                                                                                                                                                                                                                     |
| `steps.<step id>.outputs`                     | `オブジェクト` | ステップに定義された出力のセット。 詳しい情報については、「[{% data variables.product.prodname_actions %} のメタデータ構文](/articles/metadata-syntax-for-github-actions#outputs)」を参照してください。                                                                                                                            |
| `steps.<step id>.conclusion`                  | `string` | [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error)が適用された後に完了したステップの結果。 `success`、`failure`、`cancelled`、`skipped`のいずれかの値をとります。 `continue-on-error`のステップが失敗すると、`outcome`は`failure`になりますが、最終的な`conclusion`は`success`になります。 |
| `steps.<step id>.outcome`                     | `string` | [`continue-on-error`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error)が適用される前の完了したステップの結果。 `success`、`failure`、`cancelled`、`skipped`のいずれかの値をとります。 `continue-on-error`のステップが失敗すると、`outcome`は`failure`になりますが、最終的な`conclusion`は`success`になります。 |
| `steps.<step id>.outputs.<output name>` | `string` | 特定の出力の値。                                                                                                                                                                                                                                                                           |

### `runner`コンテキスト

`runner`コンテキストには、現在のジョブを実行しているランナーに関する情報が含まれています。

| プロパティ名              | 種類       | 説明                                                                                                                                                              |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runner.name`       | `string` | {% data reusables.actions.runner-name-description %}
| `runner.os`         | `string` | {% data reusables.actions.runner-os-description %} |{% if actions-runner-arch-envvars %}
| `runner.arch`       | `string` | {% data reusables.actions.runner-arch-description %} 
{% endif %}
| `runner.temp`       | `string` | {% data reusables.actions.runner-temp-directory-description %}
| `runner.tool_cache` | `string` | {% ifversion ghae %}{% data reusables.actions.self-hosted-runners-software %} {% else %} {% data reusables.actions.runner-tool-cache-description %} {% endif %}

### `needs`コンテキスト

`needs`コンテキストは、現在のジョブの依存関係として定義されたすべてのジョブからの出力を含みます。 ジョブの依存関係の定義に関する詳しい情報については「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds)」を参照してください。

| プロパティ名                                             | 種類       | 説明                                                                          |
| -------------------------------------------------- | -------- | --------------------------------------------------------------------------- |
| `needs.<job id>`                             | `オブジェクト` | 現在のジョブが依存している1つのジョブ。                                                        |
| `needs.<job id>.outputs`                     | `オブジェクト` | 現在のジョブが依存しているジョブの出力の集合。                                                     |
| `needs.<job id>.outputs.<output name>` | `string` | 現在のジョブが依存しているジョブの特定の出力の値。                                                   |
| `needs.<job id>.result`                      | `string` | 現在のジョブが依存しているジョブの結果。 `success`、`failure`、`cancelled`、`skipped`のいずれかの値をとります。 |

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-4757 %}
### `inputs` context

The `inputs` context contains information about the inputs of reusable workflow. The inputs are defined in [`workflow_call` event configuration](/actions/learn-github-actions/events-that-trigger-workflows#workflow-reuse-events). These inputs are passed from [`jobs.<job_id>.with`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idwith) in an external workflow.

For more information, see "[Reusing workflows](/actions/learn-github-actions/reusing-workflows)".

| プロパティ名                | 種類                                | 説明                                                                                                                |
| --------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `inputs`              | `オブジェクト`                          | This context is only available when it is [a reusable workflow](/actions/learn-github-actions/reusing-workflows). |
| `inputs.<name>` | `string` or `number` or `boolean` | Each input value passed from an external workflow.                                                                |
{% endif %}

#### コンテキスト情報をログに出力するサンプル

各コンテキストでアクセスできる情報を調べるには、次の例のようにワークフローファイルを使用します。

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

## Context availability

Different contexts are available throughout a workflow run. For example, the `secrets` context may only be used at certain places within a job.

In addition, some functions may only be used in certain places. For example, the `hashFiles` function is not available everywhere.

The following table indicates where each context and special function can be used within a workflow. Unless listed below, a function can be used anywhere. |{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
| パス                         | コンテキスト                     | Special functions          |
| -------------------------- | -------------------------- | -------------------------- |
| <code>concurrency</code>  | <code>github, inputs</code>  |                            |
| <code>env</code>  | <code>github, secrets, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.concurrency</code>  | <code>github, needs, strategy, matrix, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container</code>  | <code>github, needs, strategy, matrix, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.credentials</code>  | <code>github, needs, strategy, matrix, env, secrets, inputs</code>  |                            |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.defaults.run</code> | <code>github, needs, strategy, matrix, env, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.env</code> | <code>github, needs, strategy, matrix, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.environment.url</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.if</code> | <code>github, needs, inputs</code> | <code>always, cancelled, success, failure</code> |
| <code>jobs.&lt;job_id&gt;.name</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.secrets.&lt;secrets_id&gt;</code> | <code>github, needs, secrets</code> |                            |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps, inputs</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps, inputs</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix, inputs</code> |                            |
| <code>jobs.&lt;job_id&gt;.with.&lt;with_id&gt;</code> | <code>github, needs</code> |                            |
| <code>on.workflow_call.inputs.&lt;inputs_id&gt;.default</code> | <code>github</code> |                            |
| <code>on.workflow_call.outputs.&lt;output_id&gt;.value</code> | <code>github, jobs, inputs</code> |                            |
{% else %}
| パス                          | コンテキスト                      | Special functions           |
| --------------------------- | --------------------------- | --------------------------- |
| <code>concurrency</code>  | <code>github</code>  |                             |
| <code>env</code>  | <code>github, secrets</code>  |                             |
| <code>jobs.&lt;job_id&gt;.concurrency</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.container</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.container.credentials</code>  | <code>github, needs, strategy, matrix, env, secrets</code>  |                             |
| <code>jobs.&lt;job_id&gt;.container.env.&lt;env_id&gt;</code>  | <code>github, needs, strategy, matrix, job, runner, env, secrets</code>  |                             |
| <code>jobs.&lt;job_id&gt;.continue-on-error</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.defaults.run</code>  | <code>github, needs, strategy, matrix, env</code>  |                             |
| <code>jobs.&lt;job_id&gt;.env</code>  | <code>github, needs, strategy, matrix, secrets</code>  |                             |
| <code>jobs.&lt;job_id&gt;.environment</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.environment.url</code>  | <code>github, needs, strategy, matrix, job, runner, env, steps</code>  |                             |
| <code>jobs.&lt;job_id&gt;.if</code>  | <code>github, needs</code>  | <code>always, cancelled, success, failure</code>  |
| <code>jobs.&lt;job_id&gt;.name</code>  | <code>github, needs, strategy, matrix</code>  |                             |
| <code>jobs.&lt;job_id&gt;.outputs.&lt;output_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> |                             |
| <code>jobs.&lt;job_id&gt;.runs-on</code> | <code>github, needs, strategy, matrix</code> |                             |
| <code>jobs.&lt;job_id&gt;.services</code> | <code>github, needs, strategy, matrix</code> |                             |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.credentials</code> | <code>github, needs, strategy, matrix, env, secrets</code> |                             |
| <code>jobs.&lt;job_id&gt;.services.&lt;service_id&gt;.env.&lt;env_id&gt;</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets</code> |                             |
| <code>jobs.&lt;job_id&gt;.steps.continue-on-error</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.env</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.if</code> | <code>github, needs, strategy, matrix, job, runner, env, steps</code> | <code>always, cancelled, success, failure, hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.name</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.run</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.timeout-minutes</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.with</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.steps.working-directory</code> | <code>github, needs, strategy, matrix, job, runner, env, secrets, steps</code> | <code>hashFiles</code> |
| <code>jobs.&lt;job_id&gt;.strategy</code> | <code>github, needs</code> |                             |
| <code>jobs.&lt;job_id&gt;.timeout-minutes</code> | <code>github, needs, strategy, matrix</code> |                             |
{% endif %}
