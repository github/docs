---
title: コンテナで CodeQL Code scanningを実行する
shortTitle: '{% data variables.product.prodname_code_scanning_capc %} in a container'
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
ms.openlocfilehash: 60dac8a7f71af067c5cfaba5f48d123a3068f704
ms.sourcegitcommit: aa488e9e641139f9056885b1479c8801e9906131
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148162808'
---
{% data reusables.code-scanning.beta %}

## コンテナ化されたビルドで {% data variables.product.prodname_code_scanning %} を使用することについて

コンパイル言語用に {% data variables.product.prodname_code_scanning %} をセットアップし、コンテナ化された環境でコードをビルドしようとすると、解析が失敗し、"No source code was seen during the build." というエラーメッセージが出る場合があります。 これは、コードがコンパイルされているので {% data variables.product.prodname_codeql %} がコードをモニターできなかったことを示しています。

{% data variables.product.prodname_codeql %}は、コードをビルドするコンテナ内で実行しなければなりません。 これは、{% data variables.product.prodname_codeql_cli %}{% ifversion codeql-runner-supported %}、{% data variables.code-scanning.codeql_runner %}、{% endif %}または {% data variables.product.prodname_actions %} のいずれを使っていても当てはまります。 {% data variables.product.prodname_codeql_cli %} {% ifversion codeql-runner-supported %}または {% data variables.code-scanning.codeql_runner %}{% endif %}の場合、詳しくは、「[CI システムに {% data variables.product.prodname_codeql_cli %} をインストールする](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system)」{% ifversion codeql-runner-supported %}または「[CI システムで {% data variables.code-scanning.codeql_runner %} を実行する](/code-security/secure-coding/running-codeql-runner-in-your-ci-system)」{% endif %}をご覧ください。 {% data variables.product.prodname_actions %} を使用している場合は、同じコンテナですべてのアクションを実行するようワークフローを設定します。 詳しくは、「[ワークフローの例](#example-workflow)」をご覧ください。

{% note %}

**メモ:** {% data reusables.code-scanning.non-glibc-linux-support %}

{% endnote %}

## 依存関係

使用しているコンテナで特定の依存関係がない場合 (たとえば、Git は PATH 変数にインストールされ、追加されている必要がある)、{% data variables.product.prodname_code_scanning %} を実行する上で困難が生じる場合があります。 依存関係の問題が生じた場合は、{% data variables.product.prodname_dotcom %} のランナー イメージに通常含まれているソフトウェアのリストを確認してください。 詳しくは、次の場所にある特定のバージョンの `readme` ファイルをご覧ください。

* Linux: https://github.com/actions/runner-images/tree/main/images/linux
* macOS: https://github.com/actions/runner-images/tree/main/images/macos
* Windows: https://github.com/actions/runner-images/tree/main/images/win

## ワークフローの例

{% ifversion ghes or ghae %} {% note %}

**メモ:** この記事では、このバージョンの {% data variables.product.product_name %} の初期リリースに含まれる CodeQL アクションのバージョンおよび関連する CodeQL CLI バンドルで使用できる機能について説明します。 企業で CodeQL アクションのより新しいバージョンを使っている場合、最新機能について詳しくは、[{% data variables.product.prodname_ghe_cloud %} に関する記事](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container)をご覧ください。{% ifversion not ghae %}最新バージョンの使用については、「[アプライアンスのコード スキャンの構成](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)」をご覧ください。{% endif %}

{% endnote %} {% endif %}

このサンプルワークフローでは、{% data variables.product.prodname_actions %} を使用して、コンテナ化された環境において {% data variables.product.prodname_codeql %} 解析を実行します。 使用するコンテナーを識別する `container.image` の値。 この例では、イメージは、`f0f91db` のタグを持つ、`codeql-container` という名前です。 詳細については、[{% data variables.product.prodname_actions %} のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idcontainer)に関するページを参照してください。

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

    # Specify the container in which actions will run
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
