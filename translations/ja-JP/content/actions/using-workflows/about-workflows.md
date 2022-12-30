---
title: ワークフローについて
shortTitle: About workflows
intro: 'トリガー、構文、高度な機能など、概要の {% data variables.product.prodname_actions %} ワークフローを取得します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/learn-github-actions/managing-complex-workflows
  - /actions/using-workflows/advanced-workflow-features
topics:
  - Workflows
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: cb0b834604d49432d34cec48b0c9f27e37161804
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180512'
---
## ワークフローについて

{% data reusables.actions.about-workflows-long %}

## ワークフローの基本

ワークフローには、次の基本的なコンポーネントが含まれている必要があります。

1. ワークフローをトリガーする 1 つ以上の _イベント_ 。
1. 1 つ以上の _ジョブ_。それぞれが _ランナー_ マシンで実行され、一連の 1 つ以上の _ステップ_ が実行されます。
1. 各ステップは、ユーザーが定義したスクリプトか、アクションを実行でき、ワークフローを簡略化できる再利用可能な拡張機能です。

これらの基本的なコンポーネントについて詳しくは、「[GitHub Actions を理解する](/actions/learn-github-actions/understanding-github-actions#the-components-of-github-actions)」をご覧ください。

![ワークフローの概要](/assets/images/help/images/overview-actions-simple.png)

## ワークフローのトリガー

{% data reusables.actions.about-triggers %}

詳しくは、「[ワークフローのトリガー](/actions/using-workflows/triggering-a-workflow)」をご覧ください。イベントの完全な一覧については、「[ワークフローをトリガーするイベント](/actions/using-workflows/events-that-trigger-workflows)」をご覧ください。

## ワークフロー構文

ワークフローは YAML を使って定義されます。 ワークフローを作成するための YAML 構文の完全なリファレンスについては、「[GitHub Actions のワークフロー構文](/actions/using-workflows/workflow-syntax-for-github-actions#about-yaml-syntax-for-workflows)」をご覧ください。


{% data reusables.actions.workflow-basic-example-and-explanation %}

ワークフロー実行の再実行、取り消し、削除など、ワークフロー実行の管理について詳しくは、「[ワークフロー実行を管理する](/actions/managing-workflow-runs)」をご覧ください。

## スターター ワークフローを使用する

{% data reusables.actions.workflow-template-overview %}

スターター ワークフローの使用と作成について詳しくは、「[スターター ワークフローの使用](/actions/using-workflows/using-starter-workflows)」と「[Organization のスターター ワークフローを作成する](/actions/using-workflows/creating-starter-workflows-for-your-organization)」をご覧ください。

## 高度なワークフロー機能

このセクションでは、より複雑なワークフローの作成に役立つ {% data variables.product.prodname_actions %} のいくつかの高度な機能について簡単に説明します。

### シークレットの保存

ワークフローでパスワードや証明書などの機密データを使用する場合は、これらを {% data variables.product.prodname_dotcom %} に _シークレット_ として保存し、それらをワークフロー内で環境変数として使用できます。 つまり、機密性の高い値をワークフローの YAML ソースに直接埋め込むことなく、ワークフローを作成して共有できます。

この例のジョブでは、既存のシークレットを環境変数として参照し、それをパラメーターとしてサンプル コマンドに送信する方法を示します。

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

詳細については、「[暗号化されたシークレット](/actions/security-guides/encrypted-secrets)」を参照してください。

### 依存ジョブを作成する

デフォルトでは、ワークフロー内のジョブはすべて同時並行で実行されます。 別のジョブが完了した後でのみ実行する必要があるジョブがある場合は、`needs` キーワードを使ってこの依存関係を作成できます。 ジョブの 1 つが失敗すると、依存するすべてのジョブがスキップされます。ただし、ジョブを続ける必要がある場合は、`if` 条件ステートメントを使ってこれを定義できます。

この例では、`setup`、`build`、`test` ジョブが連続して実行され、`build` と `test` は、それらに先行するジョブの正常な完了に依存します。

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

詳しくは、「[前提条件のジョブを定義する](/actions/using-jobs/using-jobs-in-a-workflow#defining-prerequisite-jobs)」をご覧ください。

### マトリックスを使用する

{% data reusables.actions.jobs.about-matrix-strategy %}マトリックスは、配列としてビルド オプションを受け取る `strategy` キーワードを使って作成します。 たとえば、このマトリックスは、異なるバージョンの Node.js を使って、ジョブを複数回実行します。

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [12, 14, 16]
    steps:
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: {% raw %}${{ matrix.node }}{% endraw %}
```

詳しくは、「[ジョブにマトリックスを使用する](/actions/using-jobs/using-a-matrix-for-your-jobs)」をご覧ください。

{% ifversion actions-caching %}
### 依存関係のキャッシング

ジョブで依存関係を定期的に再利用する場合は、これらのファイルをキャッシュしてパフォーマンスを向上させることを検討できます。 キャッシュが作成されると、同じリポジトリ内のすべてのワークフローで使用できるようになります。

この例では、` ~/.npm` ディレクトリをキャッシュする方法を示します。

```yaml
jobs:
  example-job:
    steps:
      - name: Cache node modules
        uses: {% data reusables.actions.action-cache %}
        env:
          cache-name: cache-node-modules
        with:
          path: ~/.npm
          key: {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}{% endraw %}
          restore-keys: |
            {% raw %}${{ runner.os }}-build-${{ env.cache-name }}-{% endraw %}
```

詳細については、「[ワークフローを高速化するための依存関係のキャッシュ](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)」を参照してください。
{% endif %}

### データベースとサービスコンテナの利用

ジョブにデータベースまたはキャッシュ サービスが必要な場合は、[`services`](/actions/using-jobs/running-jobs-in-a-container) キーワードを使って一時コンテナーを作成し、サービスをホストすることができます。作成されたコンテナーは、そのジョブ内のすべてのステップで利用でき、ジョブが完了すると削除されます。 この例では、ジョブで `services` を使って `postgres` コンテナーを作成した後、`node` を使ってサービスに接続する方法を示します。

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
        uses: {% data reusables.actions.action-checkout %}
      - name: Install dependencies
        run: npm ci
      - name: Connect to PostgreSQL
        run: node client.js
        env:
          POSTGRES_HOST: postgres
          POSTGRES_PORT: 5432
```

詳しくは、「[コンテナー化されたサービスを使用する](/actions/using-containerized-services)」をご覧ください。

### ラベルを使用してワークフローを転送する

特定のタイプのランナーがジョブを処理するようにしたい場合は、ラベルを使用してジョブの実行場所を制御できます。 セルフホステッド ランナーには、既定のラベル `self-hosted` 以外のラベルを割り当てることができます。 その後、これらのラベルを YAML ワークフローで参照して、ジョブが予測可能な方法でルーティングされるようにすることができます。{% ifversion not ghae %}{% data variables.product.prodname_dotcom %} ホステッド ランナーには、定義済みのラベルが割り当てられます。{% endif %}

この例は、ワークフローがラベルを使用して必要なランナーを指定する方法を示しています。

```yaml
jobs:
  example-job:
    runs-on: [self-hosted, linux, x64, gpu]
```

ワークフローは、`runs-on` 配列内のすべてのラベルを持つランナーでのみ実行されます。 ジョブは、指定されたラベルを持つアイドル状態のセルフホステッド ランナーに優先的に移動します。 {% ifversion fpt or ghec %}使用できるものがなく、指定されたラベルを持つ {% data variables.product.prodname_dotcom %} ホステッド ランナーが存在する場合、ジョブは {% data variables.product.prodname_dotcom %} ホステッド ランナーに移動します。{% endif %}

セルフホステッド ランナーのラベルについて詳しくは、「[セルフホスト ランナーとのラベルの利用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)」をご覧ください。

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} ホステッド ランナーのラベルについて詳しくは、「[サポートされているランナーとハードウェア リソース](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)」をご覧ください。
{% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### ワークフローの再利用
{% data reusables.actions.reusable-workflows %} {% endif %}

### 環境の使用

保護ルールとシークレットを使って環境を構成し、ワークフローでのジョブの実行を制御できます。 ワークフロー中の各ジョブは、1つの環境を参照できます。 その環境を参照するジョブがランナーに送信される前に、その環境に設定された保護ルールはパスしなければなりません。 詳細については、「[デプロイに環境を使用する](/actions/deployment/using-environments-for-deployment)」を参照してください。
