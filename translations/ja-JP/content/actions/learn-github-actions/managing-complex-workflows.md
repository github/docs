---
title: 複雑なワークフローを管理する
shortTitle: 複雑なワークフローを管理する
intro: 'This guide shows you how to use the advanced features of {% data variables.product.prodname_actions %}, with secret management, dependent jobs, caching, build matrices,{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %} environments,{% endif %} and labels.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'how_to'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 概要

この記事では、より複雑なワークフローの作成に役立つ {% data variables.product.prodname_actions %} の高度な機能の一部について説明します。

### シークレットを保存する

ワークフローでパスワードや証明書などの機密データを使用する場合は、これらを {% data variables.product.prodname_dotcom %} に _secrets_ として保存すると、ワークフローで環境変数として使用できます。 これは、YAML ワークフローに直接機密値を埋め込むことなく、ワークフローを作成して共有できることを示しています。

この例では、既存のシークレットを環境変数として参照し、それをパラメータとしてサンプルコマンドに送信する方法を示しています。

{% raw %}
```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Retrieve secret
        env:
          super_secret: ${{ secrets.SUPERSECRET }}
        run: |
          example-command "$super_secret"
```
{% endraw %}

詳しい情報については「[暗号化されたシークレットの作成と保存](/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)」を参照してください。

### 依存ジョブを作成する

デフォルトでは、ワークフロー内のジョブはすべて同時並行で実行されます。 したがって、別のジョブが完了した後にのみ実行する必要があるジョブがある場合は、`needs` キーワードを使用してこの依存関係を作成できます。 ジョブのうちの 1 つが失敗すると、依存するすべてのジョブがスキップされます。ただし、ジョブを続行する必要がある場合は、[`if`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idif) 条件ステートメントを使用してこれを定義できます。

この例では、`setup`、`build`、および `test` ジョブが連続して実行され、`build` と `test` は、それらに先行するジョブが正常に完了したかどうかに依存します。

```yaml
jobs:
  setup:
    runs-on: ubuntu-latest
    steps:
      - run: ./setup_server.sh
  build:
    needs: setup
    runs-on: ubuntu-latest
    steps:
      - run: ./build_server.sh
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: ./test_server.sh
```

詳しい情報については、[`jobs.<job_id>.needs`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idneeds) を参照してください。

### ビルドマトリックスを使用する

ワークフローでオペレーティングシステム、プラットフォーム、および言語の複数の組み合わせにわたってテストを実行する場合は、ビルドマトリックスを使用できます。 ビルドマトリックスは、ビルドオプションを配列として受け取る `strategy` キーワードを使用して作成されます。 たとえば、このビルドマトリックスは、異なるバージョンの Node.js を使用して、ジョブを複数回実行します。

{% raw %}
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [6, 8, 10]
    steps:
      - uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node }}
```
{% endraw %}

詳しい情報については、[`jobs.<job_id>.strategy.matrix`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix) を参照してください。

### 依存関係のキャッシング

{% data variables.product.prodname_dotcom %} ホストランナーは各ジョブの新しい環境として開始されるため、ジョブが依存関係を定期的に再利用する場合は、これらのファイルをキャッシュしてパフォーマンスを向上させることを検討できます。 キャッシュが作成されると、同じリポジトリ内のすべてのワークフローで使用できるようになります。

この例は、`~/.npm` ディレクトリをキャッシュする方法を示しています。

{% raw %}
```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: actions/cache@v2
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-build-${{ env.cache-name }}-
```
{% endraw %}

詳しい情報については、「<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">ワークフローを高速化するための依存関係のキャッシュ</a>」を参照してください。

### データベースとサービスコンテナの利用

ジョブにデータベースまたはキャッシュサービスが必要な場合は、[`services`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idservices) キーワードを使用して、サービスをホストするための一時コンテナを作成できます。 この例は、ジョブが `services` を使用して `postgres` コンテナを作成し、`node` を使用してサービスに接続する方法を示しています。

```yaml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie
    services:
      postgres:
        image: postgres
    steps:
      - name: Check out repository code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

詳しい情報については、「[データベースおよびサービスコンテナを使用する](/actions/configuring-and-managing-workflows/using-databases-and-service-containers)」を参照してください。

### ラベルを使用してワークフローを転送する

この機能は、特定のセルフホストランナーにジョブを割り当てるのに役立ちます。 特定のタイプのランナーがジョブを処理することを確認したい場合は、ラベルを使用してジョブの実行場所を制御できます。 セルフホストランナーにラベルを割り当ててから、YAML ワークフローでこれらのラベルを参照して、ジョブが予測可能な方法で転送されるようにすることができます。

この例は、ワークフローがラベルを使用して必要なランナーを指定する方法を示しています。

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

詳しい情報については、「[セルフホストランナーでのラベルの利用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
### Using environments

You can configure environments with protection rules and secrets. Each job in a workflow can reference a single environment. Any protection rules configured for the environment must pass before a job referencing the environment is sent to a runner. For more information, see "[Environments](/actions/reference/environments)."
{% endif %}

### ワークフロー テンプレートの使用

{% data reusables.actions.workflow-template-overview %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. リポジトリに既存のワークフローが既に存在する場合: 左上隅にある [**New workflow（新しいワークフロー）**] をクリックします。 ![新規ワークフローの選択](/assets/images/help/repository/actions-new-workflow.png)
1. 使いたいテンプレート名の下で、**Set up this workflow（このワークフローをセットアップする）**をクリックしてください。 ![このワークフローを設定します](/assets/images/help/settings/actions-create-starter-workflow.png)

### 次のステップ

{% data variables.product.prodname_actions %} について詳しくは、「[Organization とワークフローを共有する](/actions/learn-github-actions/sharing-workflows-with-your-organization)」を参照してください。
