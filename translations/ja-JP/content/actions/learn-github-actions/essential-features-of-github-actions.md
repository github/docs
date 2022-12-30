---
title: GitHub Actions の重要な機能
shortTitle: Essential features
intro: '{% data variables.product.prodname_actions %} は、堅牢で動的な自動化の構築ができるように設計されています。 このガイドでは、環境変数、カスタマイズされたスクリプトなどを含む {% data variables.product.prodname_actions %} ワークフローを作成する方法を説明します。'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: 46a6a33928d9ff4587707972fc26de86c59f9ac6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069004'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

{% data variables.product.prodname_actions %} を使用すると、アプリケーションと Team の固有のニーズに合わせてワークフローをカスタマイズできます。 このガイドでは、変数の使用、スクリプトの実行、ジョブ間でのデータと成果物の共有など、いくつかの重要なカスタマイズ手法について説明します。

##  ワークフローで変数を使用する

{% data variables.product.prodname_actions %} には、ワークフロー実行ごとのデフォルトの環境変数が含まれています。 カスタム環境変数を使用する必要がある場合は、YAML ワークフローファイルでこれらを設定できます。 この例では、`POSTGRES_HOST` と `POSTGRES_PORT` という名前のカスタム変数を作成する方法を示します。 その後、これらの変数は `node client.js` スクリプトで使用できます。

```yaml
jobs:
  example-job:
      steps:
        - name: Connect to PostgreSQL
          run: node client.js
          env:
            POSTGRES_HOST: postgres
            POSTGRES_PORT: 5432
```

詳細については、[環境変数の使用](/actions/configuring-and-managing-workflows/using-environment-variables)に関する記事を参照してください。

## ワークフローにスクリプトを追加する

アクションを使用してスクリプトとシェルコマンドを実行し、割り当てられたランナーで実行できます。 この例では、アクションで `run` キーワードを使用してランナーで `npm install -g bats` を実行する方法を示します。

```yaml
jobs:
  example-job:
    steps:
      - run: npm install -g bats
```

たとえば、スクリプトをアクションとして実行するには、スクリプトをリポジトリに保存し、パスとシェルタイプを指定します。

```yaml
jobs:
  example-job:
    steps:
      - name: Run build script
        run: ./.github/scripts/build.sh
        shell: bash
```

詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)に関するページを参照してください。

## ジョブ間でデータを共有する

同じワークフロー内の別のジョブと共有するファイルがジョブによって生成される場合、または後で参照できるようにファイルを保存する場合は、それらを _アーティファクト_ として {% data variables.product.prodname_dotcom %} に保存できます。 成果物とは、コードをビルドしてテストするときに作成されるファイルのことです。 たとえば、成果物には、バイナリまたパッケージファイル、テスト結果、スクリーンショット、ログファイルなどがあります。 成果物は、それが作成されたワークフロー実行に関連付けられており、別のジョブで使用できます。 {% data reusables.actions.reusable-workflow-artifacts %}

たとえば、ファイルを作成し、それを成果物としてアップロードできます。

```yaml
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: output-log-file
          path: output.log
```

別のワークフローの実行からアーティファクトをダウンロードするには、`actions/download-artifact` アクションを使用します。 たとえば、`output-log-file` という名前のアーティファクトをダウンロードできます。

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: output-log-file
```

同じワークフローの実行からアーティファクトをダウンロードするには、アップロード ジョブが完了するまで開始されないように、ダウンロード ジョブで `needs: upload-job-name` を指定する必要があります。

アーティファクトの詳細については、[Persisting workflow data using artifacts](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts) (アーティファクトを使用したワークフロー データの永続化) を参照してください。

## 次の手順

{% data variables.product.prodname_actions %} についてさらに学ぶには、「[複雑なワークフローを管理する](/actions/learn-github-actions/managing-complex-workflows)」を参照してください。
