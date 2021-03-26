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
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 環境変数について

{% data variables.product.prodname_dotcom %}は、ワークフローの実行におけるどのステップでも使用できる、デフォルトの環境変数を設定します。 環境変数では、大文字小文字は区別されます。 アクションあるいはステップ内で実行されるコマンドは、環境変数を作成、読み取り、変更することができます。

カスタムの環境変数を設定するには、ワークフローファイル中でその変数を指定しなければなりません。 [`jobs.<job_id>.steps[*].env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv)、[`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv)、[`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env)といったキーワードを使って、ステップ、ジョブ、あるいはワークフロー全体の環境変数を定義できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom %}のワークフロー構文](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)」を参照してください。

```yaml
jobs:
  weekday_job:
    runs-on: ubuntu-latest
    env:
      DAY_OF_WEEK: Mon
    steps:
      - name: "Hello world when it's Monday"
        if: env.DAY_OF_WEEK == 'Mon'
        run: echo "Hello $FIRST_NAME $middle_name $Last_Name, today is Monday!"
        env:
          FIRST_NAME: Mona
          middle_name: The
          Last_Name: Octocat
```

環境変数の値をワークフローファイル内で使うには、[`env`コンテキスト](/actions/reference/context-and-expression-syntax-for-github-actions#env-context)を使わなければなりません。 環境変数の値をランナー内で使いたいなら、ランナーのオペレーティングシステムで環境変数を読む通常の方法が使えます。

ワークフローファイルの`run`キーを使って環境変数をランナーのオペレーティングシステム内から読む場合（上の例のように）、ジョブがランナーに送られた後に変数はランナーのオペレーティングシステム内で置き換えられます。 ワークフローファイルの他の部分では、環境変数を読むために`env`コンテキストを使わなければなりません。これは、ワークフローのキー（`if`など）で、ワークフローがランナーに送られる前に変数が置き換えられなければならないためです。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} `GITHUB_ENV` 環境ファイル {% else %} `set-env` ワークフローコマンド {% endif %} を使用して、ワークフローの次の手順で使用できる環境変数を設定することもできます。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} 環境ファイル {% else %} `set-env` コマンド {% endif %} は、アクションによって直接使用することも、`run` キーワードを使用してワークフローファイルのシェルコマンドとして使用することもできます。 詳しい情報については「[{% data variables.product.prodname_actions %}のワークフローコマンド](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)」を参照してください。

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
| `GITHUB_REF`         | ワークフローをトリガーしたブランチまたはタグref。 たとえば、`refs/heads/feature-branch-1`です。 イベントタイプのブランチもタグも利用できない場合、この変数は存在しません。                                                                                                                                                                          |
| `GITHUB_HEAD_REF`    | Pull Requestのイベントに対してのみ設定されます。 headブランチの名前です。                                                                                                                                                                                                                                   |
| `GITHUB_BASE_REF`    | Pull Requestのイベントに対してのみ設定されます。 ベースブランチの名前です。                                                                                                                                                                                                                                    |
| `GITHUB_SERVER_URL`  | {% data variables.product.product_name %} サーバーの URL を返します。 For example: `https://{% data variables.product.product_url %}`.                                                                                                                                                     |
| `GITHUB_API_URL`     | API URL を返します。 For example: `{% data variables.product.api_url_code %}`.                                                                                                                                                                                                        |
| `GITHUB_GRAPHQL_URL` | グラフ QL API の URL を返します。 For example: `{% data variables.product.graphql_url_code %}`.                                                                                                                                                                                           |

{% tip %}

**ノート:** ワークフローの実行のURLをジョブの中から使う必要がある場合は、`$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`というようにこれらの環境変数を組み合わせることができます。

{% endtip %}

#### デフォルトの環境変数を使う場合とコンテキストを使う場合の判断

{% data reusables.github-actions.using-context-or-environment-variables %}

### 環境変数の命名規則

{% note %}

**ノート:** {% data variables.product.prodname_dotcom %}は環境変数のプレフィックスの`GITHUB_`を、{% data variables.product.prodname_dotcom %}の内部的な利用のために予約しています。 `GITHUB_`プレフィックスを使用して環境変数またはシークレットを設定すると、エラーになります。

{% endnote %}

ファイルシステム上の場所を指すように設定した新しい環境変数がある場合は、`_PATH`サフィックスを指定する必要があります。 デフォルトの変数`HOME`と`GITHUB_WORKSPACE`は、「home」および「workspace」という言葉で最初から場所であることがわかっているため、この規則の例外です。
