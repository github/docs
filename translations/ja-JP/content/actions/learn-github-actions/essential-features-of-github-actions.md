---
title: GitHub Actions の重要な機能
shortTitle: 重要な機能
intro: '{% data variables.product.prodname_actions %} は、堅牢で動的な自動化の構築ができるように設計されています。 このガイドでは、環境変数、カスタマイズされたスクリプトなどを含む {% data variables.product.prodname_actions %} ワークフローを作成する方法を説明します。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: overview
topics:
  - 基本
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### 概要

{% data variables.product.prodname_actions %} を使用すると、アプリケーションと Team の固有のニーズに合わせてワークフローをカスタマイズできます。 このガイドでは、変数の使用、スクリプトの実行、ジョブ間でのデータと成果物の共有など、いくつかの重要なカスタマイズ手法について説明します。

### ワークフローで変数を使用する

{% data variables.product.prodname_actions %} には、ワークフロー実行ごとのデフォルトの環境変数が含まれています。 カスタム環境変数を使用する必要がある場合は、YAML ワークフローファイルでこれらを設定できます。 この例は、`POSTGRES_HOST` および `POSTGRES_PORT` という名前のカスタム変数の作成方法を示しています。 これらの変数は、`node client.js` スクリプトで使用できます。

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

詳しい情報については、「[環境変数の利用](/actions/configuring-and-managing-workflows/using-environment-variables)」を参照してください。

### ワークフローにスクリプトを追加する

アクションを使用してスクリプトとシェルコマンドを実行し、割り当てられたランナーで実行できます。 この例では、アクションが `run` キーワードを使用して、ランナーで `npm install -g bats` を実行する方法を示しています。

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

詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun)」を参照してください。

### ジョブ間でデータを共有する

ジョブが同じワークフロー内の別のジョブと共有するファイルを生成する場合、または後で参照できるようにファイルを保存する場合は、それらを_成果物_として {% data variables.product.prodname_dotcom %} に保存できます。 成果物とは、コードをビルドしてテストするときに作成されるファイルのことです。 たとえば、成果物には、バイナリまたパッケージファイル、テスト結果、スクリーンショット、ログファイルなどがあります。 成果物は、それが作成されたワークフロー実行に関連付けられており、別のジョブで使用できます。

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
        uses: actions/upload-artifact@v2
        with:
          name: output-log-file
          path: output.log
```

別のワークフロー実行から成果物をダウンロードするには、`actions/download-artifact` アクションを使用できます。 たとえば、`output-log-file` という名前の成果物をダウンロードできます。

```yaml
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: actions/download-artifact@v2
        with:
          name: output-log-file
```

成果物に関する詳しい情報については「[成果物を利用してワークフローのデータを永続化する](/actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts)」を参照してください。

### 次のステップ

{% data variables.product.prodname_actions %} について詳しくは、「[複雑なワークフローを管理する](/actions/learn-github-actions/managing-complex-workflows)」を参照してください。
