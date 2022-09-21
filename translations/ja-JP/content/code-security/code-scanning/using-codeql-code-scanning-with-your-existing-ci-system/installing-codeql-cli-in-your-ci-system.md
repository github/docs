---
title: CIシステムへのCodeQL CLIのインストール
shortTitle: Install CodeQL CLI
intro: 'サードパーティの継続的インテグレーションシステムに{% data variables.product.prodname_codeql_cli %}をインストールし、{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}を実行するために使用できます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
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
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
redirect_from:
  - /code-security/secure-coding/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-cli-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/installing-codeql-cli-in-your-ci-system
ms.openlocfilehash: 3d7c7dc3451b844b33fe0b14fd07f9a18ec81b10
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884543'
---
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %}のための{% data variables.product.prodname_codeql_cli %}の利用について

{% data variables.product.prodname_codeql_cli %} を使用すると、サードパーティの継続的インテグレーション (CI) システム内で処理するコードに {% data variables.product.prodname_code_scanning %} を実行できます。 {% data reusables.code-scanning.about-code-scanning %} 詳細については、「[{% data variables.product.prodname_codeql %} による{% data variables.product.prodname_code_scanning %}について](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)」を参照してください。 {% data variables.product.prodname_codeql %} 解析を実行するための推奨仕様 (RAM、CPU コア、ディスク) については、「[{% data variables.product.prodname_codeql %} を実行するための推奨ハードウェア リソース](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/recommended-hardware-resources-for-running-codeql)」を参照してください。

{% data reusables.code-scanning.what-is-codeql-cli %}

あるいは、{% data variables.product.prodname_actions %}を使って{% data variables.product.product_name %}内で{% data variables.product.prodname_code_scanning %}を実行することもできます。 アクションを使用した {% data variables.product.prodname_code_scanning %} の詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。 CI システムのオプションの概要については、「[CI システムの CodeQL {% data variables.product.prodname_code_scanning %} について](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)」を参照してください。

{% data reusables.code-scanning.licensing-note %}

## {% data variables.product.prodname_codeql_cli %} のダウンロード

{% data variables.product.prodname_codeql %} バンドルを https://github.com/github/codeql-action/releases からダウンロードする必要があります。 このバンドルには次のものが含まれています。

- {% data variables.product.prodname_codeql_cli %}製品
- https://github.com/github/codeql からのクエリとライブラリの互換性のあるバージョン
- バンドルに含まれるすべてのクエリのプリコンパイル済みバージョン

{% ifversion ghes or ghae %}

{% note %} {% data variables.product.product_name %}{% ifversion ghes %} {{ allVersions[currentVersion].currentRelease }}{% endif %} の場合は、{% data variables.product.prodname_codeql_cli %} バージョン {% data variables.product.codeql_cli_ghes_recommended_version %} をお勧めします。
{% endnote %}

{% endif %}

{% data variables.product.prodname_codeql %}バンドルは互換性を保証し、{% data variables.product.prodname_codeql_cli %}を個別にダウンロードし、{% data variables.product.prodname_codeql %}クエリをチェックアウトするのに比べてはるかに優れたパフォーマンスが得られるので、常にこのバンドルを利用すべきです。 1 つの特定のプラットフォームでのみ CLI を実行する場合は、適切な `codeql-bundle-PLATFORM.tar.gz` ファイルをダウンロードします。 または、サポートされているすべてのプラットフォーム用の CLI を含む `codeql-bundle.tar.gz` をダウンロードすることもできます。

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## CIシステムでの{% data variables.product.prodname_codeql_cli %}のセットアップ

CodeQL {% data variables.product.prodname_code_scanning %}分析を実行したいすべてのCIサーバーで、{% data variables.product.prodname_codeql_cli %}バンドルの完全な内容が利用できるようにしなければなりません。 たとえば、内部的な中央の場所からバンドルをコピーして展開するよう、各サーバーを設定することになるでしょう。 あるいはREST APIを使ってバンドルを{% data variables.product.prodname_dotcom %}から直接取得し、クエリに対する最新の改善を活用できるようにすることもできます。 {% data variables.product.prodname_codeql_cli %}のアップデートは、2-3週ごとにリリースされます。 次に例を示します。

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ./codeql-bundle-linux64.tar.gz
```

{% data variables.product.prodname_codeql_cli %}バンドルを抽出したら、サーバー上で `codeql` の実行可能ファイルを実行できます。

- `/<extraction-root>/codeql/codeql` を実行すると、`<extraction-root>` は、{% data variables.product.prodname_codeql_cli %} バンドルを抽出したフォルダーになります。
- `/<extraction-root>/codeql` を `PATH` に追加すると、実行可能ファイルを `codeql` として実行することができます。

## {% data variables.product.prodname_codeql_cli %}のセットアップのテスト

{% data variables.product.prodname_codeql_cli %}バンドルを展開したら、CLIがデータベースを作成して分析できるよう正しくセットアップされたことを、以下のコマンドを実行して確認できます。

- `/<extraction-root>/codeql` が `PATH` にある場合は、`codeql resolve qlpacks`。
- それ以外の場合は `/<extraction-root>/codeql/codeql resolve qlpacks`。

**成功した出力からの抜粋:**
```
codeql/cpp-all (/<extraction-root>/qlpacks/codeql/cpp-all/<version>)
codeql/cpp-examples (/<extraction-root>/qlpacks/codeql/cpp-examples/<version>)
codeql/cpp-queries (/<extraction-root>/qlpacks/codeql/cpp-queries/<version>)
codeql/csharp-all (/<extraction-root>/qlpacks/codeql/charp-all/<version>)
codeql/csharp-examples (/<extraction-root>/qlpacks/codeql/charp-examples/<version>)
codeql/csharp-queries (/<extraction-root>/qlpacks/codeql/charp-queries/<version>)
codeql/java-all (/<extraction-root>/qlpacks/codeql/java-all/<version>)
codeql/java-examples (/<extraction-root>/qlpacks/codeql/java-examples/<version>)
codeql/java-queries (/<extraction-root>/qlpacks/codeql/java-queries/<version>)
codeql/javascript-all (/<extraction-root>/qlpacks/codeql/javascript-all/<version>)
codeql/javascript-examples (/<extraction-root>/qlpacks/codeql/javascript-examples/<version>)
codeql/javascript-queries (/<extraction-root>/qlpacks/codeql/javascript-queries/<version>)
codeql/python-all (/<extraction-root>/qlpacks/codeql/python-all/<version>)
codeql/python-examples (/<extraction-root>/qlpacks/codeql/python-examples/<version>)
codeql/python-queries (/<extraction-root>/qlpacks/codeql/python-queries/<version>)
codeql/ruby-all (/<extraction-root>/qlpacks/codeql/ruby-all/<version>)
codeql/ruby-examples (/<extraction-root>/qlpacks/codeql/ruby-examples/<version>)
codeql/ruby-queries (/<extraction-root>/qlpacks/codeql/ruby-queries/<version>)
...
```

出力が期待した言語を含んでいるか、そしてqlpackファイルのディレクトリの場所が正しいかもチェックする必要があります。 この場所は、`github/codeql` のチェックアウトを使用していない限り、上記の `<extraction root>` のように、抽出された {% data variables.product.prodname_codeql_cli %} バンドル内にある必要があります。 {% data variables.product.prodname_codeql_cli %}が期待された言語のqlpackの場所を知ることができないなら、{% data variables.product.prodname_codeql_cli %}のスタンドアローンのコピーではなく{% data variables.product.prodname_codeql %}バンドルをダウンロードしたかを確認してください。

## {% data variables.product.product_name %}での認証のためのトークンの生成

それぞれのCIサーバーには、結果を{% data variables.product.product_name %}にアップロードするために使う{% data variables.product.prodname_github_app %}もしくは{% data variables.product.prodname_codeql_cli %}のための個人アクセストークンが必要です。 アクセス トークン、または`security_events` 書き込みアクセス許可がある {% data variables.product.prodname_github_app %} を使用する必要があります。 CIサーバーが既に{% data variables.product.product_name %}からのリポジトリのチェックアウトのためのこのスコープを持つトークンを使っているなら、{% data variables.product.prodname_codeql_cli %}に同じトークンを使わせることができるかもしれません。 それ以外の場合は、`security_events` 書き込みアクセス許可を持つ新しいトークンを作成し、これを CI システムのシークレット ストアに追加します。 詳細については、「[{% data variables.product.prodname_github_apps %} を構築する](/developers/apps/building-github-apps)」および「[個人アクセストークンを使用する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

## 次の手順

これでCIシステムで{% data variables.product.prodname_codeql %}分析を実行し、結果を生成し、それらを{% data variables.product.product_name %}にアップロードする準備ができました。結果はそこでブランチもしくはPull Requestとマッチさせられ、{% data variables.product.prodname_code_scanning %}アラートとして表示されます。 詳細については、「[CI システムでの {% data variables.product.prodname_codeql_cli %} の構成](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)」を参照してください。
