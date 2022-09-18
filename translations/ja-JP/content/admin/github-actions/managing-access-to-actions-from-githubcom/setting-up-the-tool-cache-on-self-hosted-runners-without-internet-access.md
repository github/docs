---
title: インターネットにアクセスできないセルフホストランナーにツールキャッシュを設定する
intro: インターネットにアクセスできないセルフホステッド ランナー上の `actions/setup` アクションを使用するには、最初にワークフローのランナーのツール キャッシュにデータを入力する必要があります。
redirect_from:
  - /enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
  - /admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access
versions:
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Actions
  - Enterprise
  - Networking
  - Storage
shortTitle: Tool cache for offline runners
ms.openlocfilehash: fe1b070880db8353064f1be5a26b0a63a5e92cf5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529297'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 含まれているセットアップアクションとランナーツールキャッシュについて

{% data reusables.actions.enterprise-no-internet-actions %}

{% data variables.product.prodname_dotcom %} が作成した公式のアクションのほとんどは、{% data variables.product.product_name %} に自動的にバンドルされます。 ただし、インターネットにアクセスできないセルフホステッド ランナーでは、`setup-node` などの付属の `actions/setup-LANGUAGE` アクションを使用する前に、いくつかの構成が必要です。

`actions/setup-LANGUAGE` アクションは通常、必要な環境バイナリをランナーのツール キャッシュにダウンロードするためにインターネット アクセスが必要です。 インターネットにアクセスできないセルフホストのランナーはバイナリをダウンロードできないため、ランナーのツールキャッシュに手動でデータを入力する必要があります。

{% data variables.product.prodname_dotcom_the_website %} で {% data variables.product.prodname_actions %} ワークフローを実行してランナーツールキャッシュにデータを入力できます。このワークフローは、{% data variables.product.prodname_dotcom %} ホストランナーのツールキャッシュをアーティファクトとしてアップロードし、インターネットで切断されたセルフホストランナーで転送および抽出できます。

{% note %}

**注:** {% data variables.product.prodname_dotcom %} ホステッド ランナーのツール キャッシュは、同じオペレーティング システムとアーキテクチャを含むセルフホステッド ランナーにのみ使用できます。 たとえば、`ubuntu-22.04` {% data variables.product.prodname_dotcom %} ホステッド ランナーを使用してツール キャッシュを生成している場合、セルフホステッド ランナーは 64 ビットの Ubuntu 22.04 マシンである必要があります。 {% data variables.product.prodname_dotcom %} ホステッド ランナーについて詳しくは、「[{% data variables.product.prodname_dotcom %} ホステッド ランナーについて](/free-pro-team@latest/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)」を参照してください。

{% endnote %}

## 前提条件

* セルフホストランナーに必要な開発環境を決定します。 次の例は、Node.js バージョン 10 および 12 を使用して、`setup-node` アクションのツール キャッシュにデータを入力する方法を示しています。
* ワークフロー実行に使用できる {% data variables.product.prodname_dotcom_the_website %} のリポジトリへのアクセス。
* セルフホストのランナーのファイルシステムにアクセスして、ツールのキャッシュフォルダーにデータを入力します。

## セルフホストランナーのツールキャッシュに入力する

1. {% data variables.product.prodname_dotcom_the_website %} で、{% data variables.product.prodname_actions %} ワークフローの実行に使用できるリポジトリに移動します。
1. {% data variables.product.prodname_dotcom %} ホステッド ランナーのツール キャッシュを含む成果物をアップロードする、リポジトリの `.github/workflows` フォルダーに新しいワークフロー ファイルを作成します。

   次の例は、Node.js バージョン 10 および 12 で `setup-node` アクションを使用して、Ubuntu 22.04 環境のツール キャッシュをアップロードするワークフローを示しています。

   ```yaml
   name: Upload Node.js 10 and 12 tool cache
   on: push
   jobs:
     upload_tool_cache:
       runs-on: ubuntu-22.04
       steps:
         - name: Clear any existing tool cache
           run: |
             mv "{% raw %}${{ runner.tool_cache }}" "${{ runner.tool_cache }}.old"{% endraw %}
             mkdir -p "{% raw %}${{ runner.tool_cache }}{% endraw %}"
         - name: Setup Node 10
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 10.x
         - name: Setup Node 12
           uses: {% data reusables.actions.action-setup-node %}
           with:
             node-version: 12.x
         - name: Archive tool cache
           run: |
             cd "{% raw %}${{ runner.tool_cache }}{% endraw %}"
             tar -czf tool_cache.tar.gz *
         - name: Upload tool cache artifact
           uses: {% data reusables.actions.action-upload-artifact %}
           with:
             path: {% raw %}${{runner.tool_cache}}/tool_cache.tar.gz{% endraw %}
   ```
1. ワークフロー実行からツールキャッシュアーティファクトをダウンロードします。 成果物のダウンロード手順については、「[ワークフローの成果物をダウンロードする](/actions/managing-workflow-runs/downloading-workflow-artifacts)」を参照してください。
1. ツールキャッシュアーティファクトをセルフホストランナーに転送し、ローカルツールキャッシュディレクトリに抽出します。 既定のツール キャッシュ ディレクトリは `RUNNER_DIR/_work/_tool` です。 ランナーでまだジョブが処理されていない場合は、`_work/_tool` ディレクトリを作成する必要がある場合があります。

    上記の例でアップロードされたツールキャッシュアーティファクトを抽出した後、次の例のようなセルフホストランナーのディレクトリ構造を作成する必要があります。

    ```
    RUNNER_DIR
    ├── ...
    └── _work
        ├── ...
        └── _tool
            └── node
                ├── 10.22.0
                │   └── ...
                └── 12.18.3
                    └── ...
    ```

インターネットにアクセスできないセルフホステッド ランナーで、`setup-node` アクションを使用できるようになりました。 問題が発生した場合は、ワークフローに適切なツールキャッシュを設定していることを確認してください。 たとえば、`setup-python` アクションを使用する必要がある場合は、使用する Python 環境をツール キャッシュに入力する必要があります。
