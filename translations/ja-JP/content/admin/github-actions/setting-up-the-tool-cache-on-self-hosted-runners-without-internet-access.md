---
title: インターネットにアクセスできないセルフホストランナーにツールキャッシュを設定する
intro: 'インターネットにアクセスできないセルフホストランナー上の `actions/setup` アクションを使用するには、最初にワークフローのランナーのツールキャッシュにデータを入力する必要があります。'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 含まれているセットアップアクションとランナーツールキャッシュについて

{% data reusables.actions.enterprise-no-internet-actions %}

ほとんどの公式の {% data variables.product.prodname_dotcom %} 作成のアクションは自動的に {% data variables.product.prodname_ghe_server %} にバンドルされます。 ただし、インターネットにアクセスできないセルフホストランナーは、`setup-node` などの含まれている `actions/setup-LANGUAGE` アクションを使用する前に、いくつかの設定が必要になります。

`actions/setup-LANGUAGE` アクションは通常、必要な環境バイナリをランナーのツールキャッシュにダウンロードするためにインターネットアクセスが必要です。 インターネットにアクセスできないセルフホストのランナーはバイナリをダウンロードできないため、ランナーのツールキャッシュに手動でデータを入力する必要があります。

{% data variables.product.prodname_dotcom_the_website %} で {% data variables.product.prodname_actions %} ワークフローを実行してランナーツールキャッシュにデータを入力できます。このワークフローは、{% data variables.product.prodname_dotcom %} ホストランナーのツールキャッシュをアーティファクトとしてアップロードし、インターネットで切断されたセルフホストランナーで転送および抽出できます。

{% note %}

**注釈:** {% data variables.product.prodname_dotcom %} ホストランナーのツールキャッシュは、同じオペレーティングシステムとアーキテクチャを含むセルフホストランナーにのみ使用できます。 たとえば、`ubuntu-18.04` {% data variables.product.prodname_dotcom %} ホストランナーを使用してツールキャッシュを生成している場合、セルフホストランナーは 64 ビットの Ubuntu18.04 マシンである必要があります。 サポートされている {% data variables.product.prodname_dotcom %} ホストランナーに関する詳しい情報については、「<a href="/actions/reference/virtual-environments-for-github-hosted-runners#supported-runners-and-hardware-resources" class="dotcom-only">GitHub ホストランナーの仮想環境</a>」を参照してください。

{% endnote %}

### 必要な環境

* セルフホストランナーに必要な開発環境を決定します。 次の例は、Node.js バージョン 10 および 12 を使用して、`setup-node` アクションのツールキャッシュにデータを入力する方法を示しています。
* ワークフロー実行に使用できる {% data variables.product.prodname_dotcom_the_website %} のリポジトリへのアクセス。
* セルフホストのランナーのファイルシステムにアクセスして、ツールのキャッシュフォルダーにデータを入力します。

### セルフホストランナーのツールキャッシュに入力する

1. {% data variables.product.prodname_dotcom_the_website %} で、{% data variables.product.prodname_actions %} ワークフローの実行に使用できるリポジトリに移動します。
1. {% data variables.product.prodname_dotcom %} ホストランナーのツールキャッシュを含むアーティファクトをアップロードする、リポジトリの `.github/workflows` フォルダに新しいワークフローファイルを作成します。

   次の例は、Node.js バージョン 10 および 12 で `setup-node` アクションを使用して、Ubuntu18.04 環境のツールキャッシュをアップロードするワークフローを示しています。

   {% raw %}
   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-18.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"
             mkdir -p "${{ runner.tool_cache }}"
         - name: Setup Node 10
           uses: actions/setup-node@v1
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: actions/setup-node@v1
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "${{ runner.tool_cache }}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: actions/upload-artifact@v2
           with:
             path: ${{runner.tool_cache}}/tool_cache.tar.gz
   ```
   {% endraw %}
1. ワークフロー実行からツールキャッシュアーティファクトをダウンロードします。 アーティファクトのダウンロード手順については、「[ワークフローアーティファクトをダウンロードする](/actions/managing-workflow-runs/downloading-workflow-artifacts)」を参照してください。
1. ツールキャッシュアーティファクトをセルフホストランナーに転送し、ローカルツールキャッシュディレクトリに抽出します。 デフォルトのツールキャッシュディレクトリは `RUNNER_DIR/_work/_tool` です。 ランナーがまだジョブを処理していない場合は、`_work/_tool` ディレクトリを作成する必要がある場合があります。

    上記の例でアップロードされたツールキャッシュアーティファクトを抽出した後、次の例のようなセルフホストランナーのディレクトリ構造を作成する必要があります。

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

これで、インターネットにアクセスできないセルフホストランナーが `setup-node` アクションを使用できるようになります。 問題が発生した場合は、ワークフローに適切なツールキャッシュを設定していることを確認してください。 たとえば、`setup-python` アクションを使用する必要がある場合は、使用する Python 環境をツールキャッシュに入力する必要があります。
