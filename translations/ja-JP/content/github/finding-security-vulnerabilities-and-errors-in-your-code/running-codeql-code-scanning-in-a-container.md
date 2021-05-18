---
title: コンテナで CodeQL コードスキャンを実行する
shortTitle: 'コンテナで {% data variables.product.prodname_code_scanning_capc %}'
intro: 'すべてのプロセスが同じコンテナで動作するようにすることで、{% data variables.product.prodname_code_scanning %} を実行できます。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}

### コンテナ化されたビルドで {% data variables.product.prodname_code_scanning %} を使用することについて

コンパイル言語用に {% data variables.product.prodname_code_scanning %} をセットアップし、コンテナ化された環境でコードをビルドしようとすると、解析が失敗し、"No source code was seen during the build." というエラーメッセージが出る場合があります。 これは、コードがコンパイルされているので {% data variables.product.prodname_codeql %} がコードをモニターできなかったことを示しています。

{% data variables.product.prodname_codeql %} は、コードをビルドしたのと同じコンテナで実行する必要があります。 これは、使用しているのが {% data variables.product.prodname_codeql_runner %} であれ {% data variables.product.prodname_actions %} であれ同様です。 {% data variables.product.prodname_codeql_runner %} を使用している場合は、コードをビルドするコンテナで実行します。 {% data variables.product.prodname_codeql_runner %} に関する詳しい情報については、「[CI システムで {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を実行する](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system)」を参照してください。 {% data variables.product.prodname_actions %} を使用している場合は、同じコンテナですべてのアクションを実行するようワークフローを設定します。 詳しい情報については「[ワークフローの例](#example-workflow)」を参照してください。

### 依存関係

使用しているコンテナで特定の依存関係がない場合 (たとえば、Git は PATH 変数にインストールされ、追加されている必要がある)、{% data variables.product.prodname_code_scanning %} を実行する上で困難が生じる場合があります。 依存関係の問題が生じた場合は、{% data variables.product.prodname_dotcom %} の仮想環境に通常含まれているソフトウェアのリストを確認してください。 詳しい情報については、次の場所にある特定のバージョンの `readme` ファイルを参照してください。

* Linux: https://github.com/actions/virtual-environments/tree/main/images/linux
* macOS: https://github.com/actions/virtual-environments/tree/main/images/macos
* Windows: https://github.com/actions/virtual-environments/tree/main/images/win

### ワークフローの例

このサンプルワークフローでは、{% data variables.product.prodname_actions %} を使用して、コンテナ化された環境において {% data variables.product.prodname_codeql %} 解析を実行します。 `container.image` の値で、使用するコンテナを指定します。 この例では、イメージ名は `codeql-container` で、`f0f91db` のタグが付いています。 詳しい情報については、「[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)」を参照してください。

``` yaml
name: "{% data variables.product.prodname_codeql %}"

on: 
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: '45 15 * * 2'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      security-events: write
      actions: read{% endif %}

    strategy:
      fail-fast: false
      matrix:
        language: [java]

    # Specify the container in which actions will run
    container:
      image: codeql-container:f0f91db

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
      - name: Build
        run: |
          ./configure
          make
      - name: Perform {% data variables.product.prodname_codeql %} Analysis
        uses: github/codeql-action/analyze@v1
```
