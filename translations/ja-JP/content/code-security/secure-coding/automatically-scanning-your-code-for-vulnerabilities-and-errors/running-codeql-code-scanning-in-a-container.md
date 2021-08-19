---
title: コンテナで CodeQL コードスキャンを実行する
shortTitle: 'コンテナで {% data variables.product.prodname_code_scanning_capc %}'
intro: 'すべてのプロセスが同じコンテナで動作するようにすることで、{% data variables.product.prodname_code_scanning %} を実行できます。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container
  - /code-security/secure-coding/running-codeql-code-scanning-in-a-container
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
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

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}

### コンテナ化されたビルドで {% data variables.product.prodname_code_scanning %} を使用することについて

コンパイル言語用に {% data variables.product.prodname_code_scanning %} をセットアップし、コンテナ化された環境でコードをビルドしようとすると、解析が失敗し、"No source code was seen during the build." というエラーメッセージが出る場合があります。 これは、コードがコンパイルされているので {% data variables.product.prodname_codeql %} がコードをモニターできなかったことを示しています。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
You must run {% data variables.product.prodname_codeql %} inside the container in which you build your code. This applies whether you are using the {% data variables.product.prodname_codeql_cli %}, the {% data variables.product.prodname_codeql_runner %}, or {% data variables.product.prodname_actions %}. For the {% data variables.product.prodname_codeql_cli %} or the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_codeql_cli %} in your CI system](/code-security/secure-coding/running-codeql-cli-in-your-ci-system)" or "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)" for more information. {% data variables.product.prodname_actions %} を使用している場合は、同じコンテナですべてのアクションを実行するようワークフローを設定します。 詳しい情報については「[ワークフローの例](#example-workflow)」を参照してください。
{% else %}
You must run {% data variables.product.prodname_codeql %} inside the container in which you build your code. This applies whether you are using the {% data variables.product.prodname_codeql_runner %} or {% data variables.product.prodname_actions %}. For the {% data variables.product.prodname_codeql_runner %}, see "[Running {% data variables.product.prodname_codeql_runner %} in your CI system](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)" for more information. {% data variables.product.prodname_actions %} を使用している場合は、同じコンテナですべてのアクションを実行するようワークフローを設定します。 詳しい情報については「[ワークフローの例](#example-workflow)」を参照してください。
{% endif %}

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
    - cron: '15 5 * * 3'

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
