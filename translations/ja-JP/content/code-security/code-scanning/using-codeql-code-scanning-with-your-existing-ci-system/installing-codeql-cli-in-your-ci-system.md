---
title: CIシステムへのCodeQL CLIのインストール
shortTitle: CodeQL CLIのインストール
intro: 'サードパーティの継続的インテグレーションシステムに{% data variables.product.prodname_codeql_cli %}をインストールし、{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}を実行するために使用できます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghae: next
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
---

{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %}のための{% data variables.product.prodname_codeql_cli %}の利用について

{% data variables.product.prodname_codeql_cli %} を使用して、サードパーティ継続的インテグレーション (CI) システムで処理しているコード上で {% data variables.product.prodname_code_scanning %} を実行できます。 {% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

{% data reusables.code-scanning.what-is-codeql-cli %}

あるいは、{% data variables.product.prodname_actions %}を使って{% data variables.product.product_name %}内で{% data variables.product.prodname_code_scanning %}を実行することもできます。 Actionsを使った{% data variables.product.prodname_code_scanning %}に関する情報については「[リポジトリでの{% data variables.product.prodname_code_scanning %}のセットアップ](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。 CIシステムでのオプションの概要については「[CIシステムでのCodeQL {% data variables.product.prodname_code_scanning %}について](/code-security/secure-coding/about-codeql-code-scanning-in-your-ci-system)」を参照してください。

{% data reusables.code-scanning.licensing-note %}

## {% data variables.product.prodname_codeql_cli %} をダウンロードする

https://github.com/github/codeql-action/releases から{% data variables.product.prodname_codeql %}バンドルをダウンロードしてください。 このバンドルには以下が含まれます。

- {% data variables.product.prodname_codeql_cli %}製品
- https://github.com/github/codeql からのクエリとライブラリの互換性のあるバージョン
- バンドルに含まれるすべてのクエリのプリコンパイル済みバージョン

{% data variables.product.prodname_codeql %}バンドルは互換性を保証し、{% data variables.product.prodname_codeql_cli %}を個別にダウンロードし、{% data variables.product.prodname_codeql %}クエリをチェックアウトするのに比べてはるかに優れたパフォーマンスが得られるので、常にこのバンドルを利用すべきです。 特定の1つのプラットフォームでのみCLIを実行するなら、適切な`codeql-bundle-PLATFORM.tar.gz`ファイルをダウンロードしてください。 あるいは、サポートされているすべてのプラットフォームのCLIが含まれている`codeql-bundle.tar.gz`をダウンロードできます。

{% data reusables.code-scanning.beta-codeql-packs-cli %}

## CIシステムでの{% data variables.product.prodname_codeql_cli %}のセットアップ

CodeQL {% data variables.product.prodname_code_scanning %}分析を実行したいすべてのCIサーバーで、{% data variables.product.prodname_codeql_cli %}バンドルの完全な内容が利用できるようにしなければなりません。 たとえば、内部的な中央の場所からバンドルをコピーして展開するよう、各サーバーを設定することになるでしょう。 あるいはREST APIを使ってバンドルを{% data variables.product.prodname_dotcom %}から直接取得し、クエリに対する最新の改善を活用できるようにすることもできます。 {% data variables.product.prodname_codeql_cli %}のアップデートは、2-3週ごとにリリースされます。 例:

```shell
$ wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-bundle-linux64.tar.gz
$ tar -xvzf ../codeql-bundle-linux64.tar.gz
```

{% data variables.product.prodname_codeql_cli %}バンドルを展開したら、サーバー上で`codeql`の実行可能ファイルを実行できます。

- `/<extraction-root>/codeql/codeql`を実行。ここで`<extraction-root>`は{% data variables.product.prodname_codeql_cli %}バンドルを展開したフォルダー。
- `/<extraction-root>/codeql`を`PATH`に追加して、`codeql`とするだけで実行できるようにする。

## {% data variables.product.prodname_codeql_cli %}のセットアップのテスト

{% data variables.product.prodname_codeql_cli %}バンドルを展開したら、CLIがデータベースを作成して分析できるよう正しくセットアップされたことを、以下のコマンドを実行して確認できます。

- `/<extraction-root>/codeql`が`PATH`上にあるなら`codeql resolve qlpacks`
- そうでない場合は`/<extraction-root>/codeql/codeql resolve qlpacks`

**成功した出力からの抜粋:**
```
codeql-cpp (/<extraction-root>/codeql/qlpacks/codeql-cpp)
codeql-cpp-examples (/<extraction-root>/codeql/qlpacks/codeql-cpp-examples)
codeql-cpp-upgrades (/<extraction-root>/codeql/qlpacks/codeql-cpp-upgrades)
codeql-csharp (/<extraction-root>/codeql/qlpacks/codeql-csharp)
codeql-csharp-examples (/<extraction-root>/codeql/qlpacks/codeql-csharp-examples)
codeql-csharp-upgrades (/<extraction-root>/codeql/qlpacks/codeql-csharp-upgrades)
codeql-go (/<extraction-root>/codeql/qlpacks/codeql-go)
codeql-go-examples (/<extraction-root>/codeql/qlpacks/codeql-go-examples)
codeql-go-upgrades (/<extraction-root>/codeql/qlpacks/codeql-go-upgrades)
codeql-java (/<extraction-root>/codeql/qlpacks/codeql-java)
codeql-java-examples (/<extraction-root>/codeql/qlpacks/codeql-java-examples)
codeql-java-upgrades (/<extraction-root>/codeql/qlpacks/codeql-java-upgrades)
codeql-javascript (/<extraction-root>/codeql/qlpacks/codeql-javascript)
codeql-javascript-examples (/<extraction-root>/codeql/qlpacks/codeql-javascript-examples)
codeql-javascript-upgrades (/<extraction-root>/codeql/qlpacks/codeql-javascript-upgrades)
codeql-python (/<extraction-root>/codeql/qlpacks/codeql-python)
codeql-python-examples (/<extraction-root>/codeql/qlpacks/codeql-python-examples)
codeql-python-upgrades (/<extraction-root>/codeql/qlpacks/codeql-python-upgrades)
...
```

出力が期待した言語を含んでいるか、そしてqlpackファイルのディレクトリの場所が正しいかもチェックする必要があります。 `github/codeql`.をチェックアウトして使っているのでなければ、この場所は展開された{% data variables.product.prodname_codeql_cli %}バンドル内であるべきで、これは上では`<extraction root>`で示されています。 {% data variables.product.prodname_codeql_cli %}が期待された言語のqlpackの場所を知ることができないなら、{% data variables.product.prodname_codeql_cli %}のスタンドアローンのコピーではなく{% data variables.product.prodname_codeql %}バンドルをダウンロードしたかを確認してください。

## {% data variables.product.product_name %}での認証のためのトークンの生成

それぞれのCIサーバーには、結果を{% data variables.product.product_name %}にアップロードするために使う{% data variables.product.prodname_github_app %}もしくは{% data variables.product.prodname_codeql_cli %}のための個人アクセストークンが必要です。 アクセストークンもしくは`security_events`書き込み権限を持つ{% data variables.product.prodname_github_app %}を使わなければなりません。 CIサーバーが既に{% data variables.product.product_name %}からのリポジトリのチェックアウトのためのこのスコープを持つトークンを使っているなら、{% data variables.product.prodname_codeql_cli %}に同じトークンを使わせることができるかもしれません。 そうでない場合は、`security_events`書き込み権限を持つ新しいトークンを作成し、これをCIシステムのシークレットストアに追加しなければなりません。 詳細は「[{% data variables.product.prodname_github_apps %} をビルドする](/developers/apps/building-github-apps)」および「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。

## 次のステップ

これでCIシステムで{% data variables.product.prodname_codeql %}分析を実行し、結果を生成し、それらを{% data variables.product.product_name %}にアップロードする準備ができました。結果はそこでブランチもしくはPull Requestとマッチさせられ、{% data variables.product.prodname_code_scanning %}アラートとして表示されます。 詳細な情報については「[CIシステムでの{% data variables.product.prodname_codeql_cli %}の設定](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/configuring-codeql-cli-in-your-ci-system)」を参照してください。
