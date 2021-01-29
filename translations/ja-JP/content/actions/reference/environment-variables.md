---
title: 環境変数
intro: '{% data variables.product.prodname_dotcom %}はそれぞれの{% data variables.product.prodname_actions %}ワークフローの実行に対してデフォルトの環境変数を設定します。 ワークフローファイル中でカスタムの環境変数を設定することもできます。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 環境変数について

{% data variables.product.prodname_dotcom %}は、ワークフローの実行におけるどのステップでも使用できる、デフォルトの環境変数を設定します。 環境変数では、大文字小文字は区別されます。 アクションあるいはステップ内で実行されるコマンドは、環境変数を作成、読み取り、変更することができます。

カスタムの環境変数を設定するには、ワークフローファイル中でその変数を指定しなければなりません。 You can define environment variables for a step, job, or entire workflow using the [`jobs.<job_id>.steps[*].env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv), [`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv), and [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) keywords. 詳しい情報については、「[{% data variables.product.prodname_dotcom %}のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)」を参照してください。

```yaml
steps:
  - name: Hello world
    run: echo Hello world $FIRST_NAME $middle_name $Last_Name!
    env:
      FIRST_NAME: Mona
      middle_name: The
      Last_Name: Octocat
```

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} `GITHUB_ENV` 環境ファイル {% else %} `set-env` ワークフローコマンド {% endif %} を使用して、ワークフローの次の手順で使用できる環境変数を設定することもできます。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} 環境ファイル {% else %} `set-env` コマンド {% endif %} は、アクションによって直接使用することも、`run` キーワードを使用してワークフローファイルのシェルコマンドとして使用することもできます。 詳しい情報については「[{% data variables.product.prodname_actions %}のワークフローコマンド](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)」を参照してください。

### デフォルトの環境変数

アクションでは、ファイルシステムにアクセスするとき、ハードコードされたファイルパスを使うのではなく環境変数を使用することを強くお勧めします。 {% data variables.product.prodname_dotcom %}は、すべてのランナー環境でアクションが使用する環境変数を設定します。

| 環境変数                 | 説明                                                                                                                                                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                 | 常に`true`に設定されます。                                                                                                                                                                                                                                                                |
| `GITHUB_WORKFLOW`    | ワークフローの名前。                                                                                                                                                                                                                                                                      |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}
| `GITHUB_ACTION`      | アクションの一意の識別子 (`id`)。                                                                                                                                                                                                                                                            |
| `GITHUB_ACTIONS`     | {% data variables.product.prodname_actions %}がワークフローを実行しているときは常に`true`に設定されます。 この変数は、テストがローカルで実行されているときと、{% data variables.product.prodname_actions %}によって実行されているときを区別するために利用できます。                                                                                              |
| `GITHUB_ACTOR`       | ワークフローを開始するユーザまたはアプリの名前。 `octocat`などです。                                                                                                                                                                                                                                         |
| `GITHUB_REPOSITORY`  | 所有者およびリポジトリの名前。 `octocat/Hello-World`などです。                                                                                                                                                                                                                                      |
| `GITHUB_EVENT_NAME`  | ワークフローをトリガーしたwebhookイベントの名前。                                                                                                                                                                                                                                                    |
| `GITHUB_EVENT_PATH`  | 完了したwebhookイベントペイロードのファイルのパス。 `/github/workflow/event.json`などです。                                                                                                                                                                                                                |
| `GITHUB_WORKSPACE`   | {% data variables.product.prodname_dotcom %}ワークスペースディレクトリのパス。 ワークフローで [actions/checkout](https://github.com/actions/checkout) アクションを使用する場合、ワークスペースディレクトリはリポジトリのコピーです。 `actions/checkout`アクションを使用していない場合、ディレクトリは空となります。 たとえば、`/home/runner/work/my-repo-name/my-repo-name`となります。 |
| `GITHUB_SHA`         | ワークフローをトリガーしたコミットSHA。 たとえば、`ffac537e6cbbf934b08745a378932722df287a53`です。                                                                                                                                                                                                        |
| `GITHUB_REF`         | ワークフローをトリガーしたブランチまたはタグref。 たとえば、`refs/heads/feature-branch-1`です。 イベントタイプのブランチもタグも利用できない場合、変数は存在しません。                                                                                                                                                                            |
| `GITHUB_HEAD_REF`    | Only set for pull request events. The name of the head branch.                                                                                                                                                                                                                  |
| `GITHUB_BASE_REF`    | Only set for pull request events. The name of the base branch.                                                                                                                                                                                                                  |
| `GITHUB_SERVER_URL`  | {% data variables.product.product_name %} サーバーの URL を返します。 For example: `https://github.com`.                                                                                                                                                                                   |
| `GITHUB_API_URL`     | API URL を返します。 For example: `https://api.github.com`.                                                                                                                                                                                                                           |
| `GITHUB_GRAPHQL_URL` | グラフ QL API の URL を返します。 For example: `https://api.github.com/graphql`.                                                                                                                                                                                                          |

{% tip %}

**Note:** If you need to use a workflow run's URL from within a job, you can combine these environment variables: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`

{% endtip %}

#### Determining when to use default environment variables or contexts

{% data reusables.github-actions.using-context-or-environment-variables %}

### 環境変数の命名規則

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} reserves the `GITHUB_` environment variable prefix for internal use by {% data variables.product.prodname_dotcom %}. `GITHUB_`プレフィックスを使用して環境変数またはシークレットを設定すると、エラーになります。

{% endnote %}

ファイルシステム上の場所を指すように設定した新しい環境変数がある場合は、`_PATH`サフィックスを指定する必要があります。 デフォルトの変数`HOME`と`GITHUB_WORKSPACE`は、「home」および「workspace」という言葉で最初から場所であることがわかっているため、この規則の例外です。
