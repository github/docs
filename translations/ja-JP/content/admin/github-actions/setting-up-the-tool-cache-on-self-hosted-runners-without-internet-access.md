---
title: Setting up the tool cache on self-hosted runners without internet access
intro: 'To use the the included `actions/setup` actions on self-hosted runners without internet access, you must first populate the runner''s tool cache for your workflows.'
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### About the included setup actions and the runner tool cache

{% data reusables.actions.enterprise-no-internet-actions %}

ほとんどの公式の {% data variables.product.prodname_dotcom %} 作成のアクションは自動的に {% data variables.product.prodname_ghe_server %} にバンドルされます。 However, self-hosted runners without internet access  will require some configuration before they can use the included `actions/setup-LANGUAGE` actions, such as `setup-node`.

The `actions/setup-LANGUAGE` actions normally need internet access to download the required environment binaries into the runner's tool cache. Self-hosted runners without internet access can't download the binaries, so you must manually populate the tool cache on the runner.

{% data variables.product.prodname_dotcom_the_website %} で {% data variables.product.prodname_actions %} ワークフローを実行してランナーツールキャッシュにデータを入力できます。このワークフローは、{% data variables.product.prodname_dotcom %} ホストランナーのツールキャッシュをアーティファクトとしてアップロードし、インターネットで切断されたセルフホストランナーで転送および抽出できます。

{% note %}

**注釈:** {% data variables.product.prodname_dotcom %} ホストランナーのツールキャッシュは、同じオペレーティングシステムとアーキテクチャを含むセルフホストランナーにのみ使用できます。 たとえば、`ubuntu-18.04` {% data variables.product.prodname_dotcom %} ホストランナーを使用してツールキャッシュを生成している場合、セルフホストランナーは 64 ビットの Ubuntu18.04 マシンである必要があります。 サポートされている {% data variables.product.prodname_dotcom %} ホストランナーに関する詳しい情報については、「<a href="/actions/reference/virtual-environments-for-github-hosted-runners#supported-runners-and-hardware-resources" class="dotcom-only">GitHub ホストランナーの仮想環境</a>」を参照してください。

{% endnote %}

### 必要な環境

* Determine which development environments your self-hosted runners will need. The following example demonstrates how to populate a tool cache for the `setup-node` action, using Node.js versions 10 and 12.
* ワークフロー実行に使用できる {% data variables.product.prodname_dotcom_the_website %} のリポジトリへのアクセス。
* Access to your self-hosted runner's file system to populate the tool cache folder.

### Populating the tool cache for a self-hosted runner

1. On {% data variables.product.prodname_dotcom_the_website %}, navigate to a repository that you can use to run a {% data variables.product.prodname_actions %} workflow.
1. {% data variables.product.prodname_dotcom %} ホストランナーのツールキャッシュを含むアーティファクトをアップロードする、リポジトリの `.github/workflows` フォルダに新しいワークフローファイルを作成します。

   The following example demonstrates a workflow that uploads the tool cache for an Ubuntu 18.04 environment, using the `setup-node` action with Node.js versions 10 and 12.

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
1. Download the tool cache artifact from the workflow run. アーティファクトのダウンロード手順については、「[ワークフローアーティファクトをダウンロードする](/actions/managing-workflow-runs/downloading-workflow-artifacts)」を参照してください。
1. Transfer the tool cache artifact to your self hosted runner and extract it to the local tool cache directory. The default tool cache directory is `RUNNER_DIR/_work/_tool`. If the runner hasn't processed any jobs yet, you might need to create the `_work/_tool` directories.

    After extracting the tool cache artifact uploaded in the above example, you should have a directory structure on your self-hosted runner that is similar to the following example:

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

Your self-hosted runner without internet access should now be able to use the `setup-node` action. If you are having problems, make sure that you have populated the correct tool cache for your workflows. For example, if you need to use the `setup-python` action, you will need to populate the tool cache with the Python environment you want to use.
