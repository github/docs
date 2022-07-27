---
title: コンテナで CodeQL Code scanningを実行する
shortTitle: 'コンテナで {% data variables.product.prodname_code_scanning_capc %}'
intro: 'すべてのプロセスが同じコンテナで動作するようにすることで、{% data variables.product.prodname_code_scanning %} を実行できます。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Actions
  - Repositories
  - Containers
  - Java
---


{% data reusables.code-scanning.beta %}

## コンテナ化されたビルドで {% data variables.product.prodname_code_scanning %} を使用することについて

コンパイル言語用に {% data variables.product.prodname_code_scanning %} をセットアップし、コンテナ化された環境でコードをビルドしようとすると、解析が失敗し、"No source code was seen during the build." というエラーメッセージが出る場合があります。 これは、コードがコンパイルされているので {% data variables.product.prodname_codeql %} がコードをモニターできなかったことを示しています。

{% data variables.product.prodname_codeql %}は、コードをビルドするコンテナ内で実行しなければなりません。 これは、{% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}、{% data variables.product.prodname_codeql_runner %}{% endif %}、{% data variables.product.prodname_actions %}のいずれを使っていても当てはまります。 {% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}あるいは{% data variables.product.prodname_codeql_runner %}{% endif %}については、詳しい情報は「[CIシステムへの{% data variables.product.prodname_codeql_cli %}のインストール](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」{% ifversion codeql-runner-supported %}あるいは「[CIシステムでの{% data variables.product.prodname_codeql_runner %}の実行](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)」{% endif %}を参照してください。 {% data variables.product.prodname_actions %} を使用している場合は、同じコンテナですべてのアクションを実行するようワークフローを設定します。 詳しい情報については「[ワークフローの例](#example-workflow)」を参照してください。

## 依存関係

使用しているコンテナで特定の依存関係がない場合 (たとえば、Git は PATH 変数にインストールされ、追加されている必要がある)、{% data variables.product.prodname_code_scanning %} を実行する上で困難が生じる場合があります。 依存関係の問題が生じた場合は、{% data variables.product.prodname_dotcom %} の仮想環境に通常含まれているソフトウェアのリストを確認してください。 詳しい情報については、次の場所にある特定のバージョンの `readme` ファイルを参照してください。

* Linux: https://github.com/actions/virtual-environments/tree/main/images/linux
* macOS: https://github.com/actions/virtual-environments/tree/main/images/macos
* Windows: https://github.com/actions/virtual-environments/tree/main/images/win

## ワークフローの例

{% ifversion ghes or ghae %}
{% note %}

**ノート:** この記事は、{% data variables.product.product_name %}のこのバージョンにおける初期リリースに含まれる、このバージョンのCodeQLアクション及び関連するCodeQL CLIバンドルで利用できる機能について説明しています。 Enterpriseでさらに最近のバージョンのCodeQLアクションを使っているなら、最新機能に関する情報については[{% data variables.product.prodname_ghe_cloud %}の記事](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container)を参照してください。{% ifversion not ghae %}最新バージョンの利用に関する情報については「[アプライアンスでのCode scanningの設定](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)」を参照してください。{% endif %}

{% endnote %}
{% endif %}

このサンプルワークフローでは、{% data variables.product.prodname_actions %} を使用して、コンテナ化された環境において {% data variables.product.prodname_codeql %} 解析を実行します。 `container.image` の値で、使用するコンテナを指定します。 この例では、イメージ名は `codeql-container` で、`f0f91db` のタグが付いています。 詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)」を参照してください。

``` yaml
name: "{% data variables.product.prodname_codeql %}"

on: 
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '15 5 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      security-events: write
      actions: read

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # アクションが実行されるコンテナを指定
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: {% data reusables.actions.action-codeql-action-analyze %}
```
