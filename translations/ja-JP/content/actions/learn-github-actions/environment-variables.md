---
title: 環境変数
intro: '{% data variables.product.prodname_dotcom %}はそれぞれの{% data variables.product.prodname_actions %}ワークフローの実行に対してデフォルトの環境変数を設定します。 ワークフローファイル中でカスタムの環境変数を設定することもできます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 環境変数について

{% data variables.product.prodname_dotcom %}は、ワークフローの実行におけるどのステップでも使用できる、デフォルトの環境変数を設定します。 環境変数では、大文字小文字は区別されます。 アクションあるいはステップ内で実行されるコマンドは、環境変数を作成、読み取り、変更することができます。

カスタムの環境変数を設定するには、ワークフローファイル中でその変数を指定しなければなりません。 [`jobs.<job_id>.steps[*].env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv)、[`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv)、[`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)といったキーワードを使って、ステップ、ジョブ、あるいはワークフロー全体の環境変数を定義できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %}のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)」を参照してください。

{% raw %}
```yaml
jobs:
  weekday_job:
    runs-on: ubuntu-latest
    env:
      DAY_OF_WEEK: Mon
    steps:
      - name: "Hello world when it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Mon' }}
        run: echo "Hello $FIRST_NAME $middle_name $Last_Name, today is Monday!"
        env:
          FIRST_NAME: Mona
          middle_name: The
          Last_Name: Octocat
```
{% endraw %}

環境変数の値をワークフローファイル内で使うには、[`env`コンテキスト](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)を使わなければなりません。 環境変数の値をランナー内で使いたいなら、ランナーのオペレーティングシステムで環境変数を読む通常の方法が使えます。

ワークフローファイルの`run`キーを使って環境変数をランナーのオペレーティングシステム内から読む場合（上の例のように）、ジョブがランナーに送られた後に変数はランナーのオペレーティングシステム内で置き換えられます。 ワークフローファイルの他の部分では、環境変数を読むために`env`コンテキストを使わなければなりません。これは、ワークフローのキー（`if`など）で、ワークフローがランナーに送られる前に変数が置き換えられなければならないためです。

You can also use the {% ifversion fpt or ghes > 2.22 or ghae %}`GITHUB_ENV` environment file{% else %} `set-env` workflow command{% endif %} to set an environment variable that the following steps in a job can use. The {% ifversion fpt or ghes > 2.22 or ghae %}environment file{% else %} `set-env` command{% endif %} can be used directly by an action or as a shell command in a workflow file using the `run` keyword. 詳しい情報については「[{% data variables.product.prodname_actions %}のワークフローコマンド](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)」を参照してください。

## デフォルトの環境変数

アクションでは、ファイルシステムにアクセスするとき、ハードコードされたファイルパスを使うのではなく環境変数を使用することを強くお勧めします。 {% data variables.product.prodname_dotcom %}は、すべてのランナー環境でアクションが使用する環境変数を設定します。

| 環境変数                 | 説明                                                                                                                                                                                                                                                                                                         |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                 | 常に`true`に設定されます。                                                                                                                                                                                                                                                                                           |
| `GITHUB_WORKFLOW`    | ワークフローの名前。                                                                                                                                                                                                                                                                                                 |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}
| `GITHUB_JOB`         | 現在のジョブの [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id)。                                                                                                                                                                                                                        |
| `GITHUB_ACTION`      | アクションの一意の識別子 (`id`)。                                                                                                                                                                                                                                                                                       |
| `GITHUB_ACTION_PATH` | アクションが置かれているパス。 このパスを使用して、アクションと同じリポジトリにあるファイルにアクセスできます。 This variable is only supported in composite actions.                                                                                                                                                                                             |
| `GITHUB_ACTIONS`     | {% data variables.product.prodname_actions %}がワークフローを実行しているときは常に`true`に設定されます。 この変数は、テストがローカルで実行されているときと、{% data variables.product.prodname_actions %}によって実行されているときを区別するために利用できます。                                                                                                                         |
| `GITHUB_ACTOR`       | ワークフローを開始するユーザまたはアプリの名前。 `octocat`などです。                                                                                                                                                                                                                                                                    |
| `GITHUB_REPOSITORY`  | 所有者およびリポジトリの名前。 `octocat/Hello-World`などです。                                                                                                                                                                                                                                                                 |
| `GITHUB_EVENT_NAME`  | ワークフローをトリガーしたwebhookイベントの名前。                                                                                                                                                                                                                                                                               |
| `GITHUB_EVENT_PATH`  | 完了したwebhookイベントペイロードのファイルのパス。 `/github/workflow/event.json`などです。                                                                                                                                                                                                                                           |
| `GITHUB_WORKSPACE`   | The {% data variables.product.prodname_dotcom %} workspace directory path, initially empty. たとえば、`/home/runner/work/my-repo-name/my-repo-name`となります。 The [actions/checkout](https://github.com/actions/checkout) action will check out files, by default a copy of your repository, within this directory. |
| `GITHUB_SHA`         | ワークフローをトリガーしたコミットSHA。 たとえば、`ffac537e6cbbf934b08745a378932722df287a53`です。                                                                                                                                                                                                                                   |
| `GITHUB_REF`         | ワークフローをトリガーしたブランチまたはタグref。 たとえば、`refs/heads/feature-branch-1`です。 イベントタイプのブランチもタグも利用できない場合、変数は存在しません。                                                                                                                                                                                                       |
| `GITHUB_HEAD_REF`    | Pull Requestのイベントに対してのみ設定されます。 headブランチの名前です。                                                                                                                                                                                                                                                              |
| `GITHUB_BASE_REF`    | Pull Requestのイベントに対してのみ設定されます。 ベースブランチの名前です。                                                                                                                                                                                                                                                               |
| `GITHUB_SERVER_URL`  | {% data variables.product.product_name %} サーバーの URL を返します。 For example: `https://{% data variables.product.product_url %}`.                                                                                                                                                                                |
| `GITHUB_API_URL`     | API URL を返します。 For example: `{% data variables.product.api_url_code %}`.                                                                                                                                                                                                                                   |
| `GITHUB_GRAPHQL_URL` | グラフ QL API の URL を返します。 For example: `{% data variables.product.graphql_url_code %}`.                                                                                                                                                                                                                      |
| `RUNNER_NAME`        | {% data reusables.actions.runner-name-description %}
| `RUNNER_OS`          | {% data reusables.actions.runner-os-description %}
| `RUNNER_TEMP`        | {% data reusables.actions.runner-temp-directory-description %}
{% ifversion not ghae %}| `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %}{% endif %}

{% tip %}

**ノート:** ワークフローの実行のURLをジョブの中から使う必要がある場合は、`$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`というようにこれらの環境変数を組み合わせることができます。

{% endtip %}

### デフォルトの環境変数を使う場合とコンテキストを使う場合の判断

{% data reusables.github-actions.using-context-or-environment-variables %}

## 環境変数の命名規則

カスタム環境変数を設定する場合、接頭辞の `GITHUB_` が付いた上記のデフォルトの環境変数名を使用することはできません。 これらのデフォルトの環境変数のいずれかの値をオーバーライドしようとすると、割り当ては無視されます。

ファイルシステム上の場所を指すように設定した新しい環境変数がある場合は、`_PATH`サフィックスを指定する必要があります。 デフォルトの変数`HOME`と`GITHUB_WORKSPACE`は、「home」および「workspace」という言葉で最初から場所であることがわかっているため、この規則の例外です。
