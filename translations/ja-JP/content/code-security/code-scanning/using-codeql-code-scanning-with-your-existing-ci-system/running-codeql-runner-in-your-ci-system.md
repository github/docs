---
title: CIシステムでのCodeQLランナーの実行
shortTitle: Run CodeQL runner
intro: '{% data variables.product.prodname_codeql_runner %} を使用して、、サードパーティの継続的インテグレーションシステムで {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を実行できます。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
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
ms.openlocfilehash: c4803ff75aa157bc89dc2bfa776c03b3a1cf305a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146178680'
---
<!--UI-LINK: When GitHub Enterprise Server <=3.0 doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% ifversion codeql-runner-supported %}

{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_codeql_runner %} について

{% data variables.product.prodname_codeql_runner %}は、サードパーティの継続的インテグレーション（CI）システム内で処理しているコードに対して{% data variables.product.prodname_code_scanning %}を実行するのに利用できるツールです。 {% data reusables.code-scanning.about-code-scanning %} 詳細については、「[{% data variables.product.prodname_codeql %} による{% data variables.product.prodname_code_scanning %}について](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)」を参照してください。

多くの場合、CIシステム内で{% data variables.product.prodname_codeql_cli %}を直接使って{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}をセットアップするのが容易です。 

あるいは、{% data variables.product.prodname_actions %}を使って{% data variables.product.product_name %}内で{% data variables.product.prodname_code_scanning %}を実行することもできます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

{% data variables.product.prodname_codeql_runner %} は、{% data variables.product.prodname_dotcom %} リポジトリのチェックアウト中に {% data variables.product.prodname_codeql %} 解析を実行するコマンドラインツールです。 サードパーティーのシステムにランナーを追加し、ランナーを呼び出してコードを解析し、その結果を {% data variables.product.product_name %} にアップロードします。 この結果は、リポジトリの {% data variables.product.prodname_code_scanning %} アラートとして表示されます。

{% note %}

**注:** {% ifversion fpt or ghec %}
* {% data variables.product.prodname_codeql_runner %}は{% data variables.product.prodname_codeql %} CLIを使ってコードを分析するので、同じライセンス条件を持ちます。 {% data variables.product.prodname_dotcom_the_website %}上で管理されるパブリックリポジトリでの使用は無料であり、{% data variables.product.prodname_advanced_security %}ライセンスを持つお客様が所有するプライベートリポジトリ上で使用できます。 詳細については、「[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %} の使用条件](https://securitylab.github.com/tools/codeql/license)」および「[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)」を参照してください。
{% else %}
* {% data variables.product.prodname_codeql_runner %}は{% data variables.product.prodname_advanced_security %}ライセンスを持つお客様にご利用いただけます。
{% endif %} {% ifversion ghae %}
* {% data variables.product.prodname_codeql_runner %}は{% data variables.product.prodname_codeql %} CLIと混同しないでください。 {% data variables.product.prodname_codeql %} CLIは、セキュリティの研究のために{% data variables.product.prodname_codeql %}データベースを作成し、{% data variables.product.prodname_codeql %}クエリを実行できるようにしてくれるコマンドラインインターフェースです。
詳細については、「[{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/)」を参照してください。
{% endif %} {% endnote %}

## {% data variables.product.prodname_codeql_runner %} をダウンロードする

https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases から {% data variables.product.prodname_codeql_runner %} をダウンロードすることができます。 一部のオペレーティングシステムでは、ダウンロードしたファイルの実行前に、その権限を変更する必要があります。

Linux の場合:

```shell
chmod +x codeql-runner-linux
```

macOS の場合:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

Windows では、通常、`codeql-runner-win.exe` ファイルの権限変更は必要はありません。

## {% data variables.product.prodname_codeql_runner %} を CI システムに追加する

{% data variables.product.prodname_codeql_runner %}をダウンロードし、実行できることを確認したら、{% data variables.product.prodname_code_scanning %}に使用するそれぞれのCIサーバーでランナーを利用できるようにしなければなりません。 たとえば、内部的な中央の場所からランナーをコピーするよう、各サーバーを設定することになるでしょう。 あるいは、REST API を使用して {% data variables.product.prodname_dotcom %}から直接ランナーを取得することもできます。例: 

```shell
wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

これに加えて、各 CI サーバーは以下の条件も満たす必要があります。

- {% data variables.product.prodname_codeql_runner %} が使用するための {% data variables.product.prodname_github_app %} または個人アクセストークン。 `repo` スコープがあるアクセス トークン、または `security_events` 書き込み権限、および `metadata` と `contents` の読み取り権限を持つ {% data variables.product.prodname_github_app %} を使用する必要があります。 詳細については、「[{% data variables.product.prodname_github_apps %} を構築する](/developers/apps/building-github-apps)」および「[個人アクセストークンを使用する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
- {% data variables.product.prodname_codeql_runner %} のリリースに伴う {% data variables.product.prodname_codeql %} バンドルへのアクセス。 このパッケージには、{% data variables.product.prodname_codeql %} 解析に必要なクエリとライブラリ、さらにランナーによって内部的に使用される {% data variables.product.prodname_codeql %} CLI が含まれています。 詳細については、「[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)」を参照してください。

{% data variables.product.prodname_codeql %} バンドルにアクセスを与えるオプションは次の通りです。

1. CI サーバーに https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action へのアクセスを許可し、{% data variables.product.prodname_codeql_runner %} がバンドルを自動的にダウンロードできるようにします。
1. バンドルを手動でダウンロードおよび展開し、他の中央リソースと共に格納し、<nobr>`--codeql-path`</nobr> フラグを使用して、{% data variables.product.prodname_codeql_runner %} を初期化する呼び出しでバンドルの場所を指定します。

## {% data variables.product.prodname_codeql_runner %} を呼び出す

解析するリポジトリのチェックアウトの場所から、{% data variables.product.prodname_codeql_runner %} を呼び出す必要があります。 主なコマンドは次の 2 つです。

1. `init` は、ランナーを初期化し、解析する言語ごとに {% data variables.product.prodname_codeql %} データベースを作成するために必要です。 このデータベースは、続くコマンドにより展開、解析されます。
1. `analyze` は、{% data variables.product.prodname_codeql %} データベースを展開し、解析し、結果を {% data variables.product.product_name %} にアップロードするために必要です。

どちらのコマンドでも、{% data variables.product.product_name %} の URL、リポジトリの *OWNER/NAME*、および認証に使用する{% data variables.product.prodname_github_apps %} または個人用アクセス トークンを指定する必要があります。 CI サーバーで `github/codeql-action` リポジトリから直接 CodeQL バンドルをダウンロードできる場合を除き、そのバンドルの場所を指定する必要もあります。

<nobr>`--tools-dir`</nobr> フラグを使用して、{% data variables.product.prodname_codeql_runner %} が今後の分析のためにサーバーに CodeQL バンドルを格納する場所を構成し、<nobr>`--temp-dir`</nobr> を使用して、分析時に一時ファイルを格納する場所を構成できます。

ランナーのコマンドライン リファレンスを表示するには、`-h` フラグを使用します。 たとえば、すべてのコマンドを一覧表示するには、`codeql-runner-OS -h` を実行します。または、`init` コマンドで使用できるすべてのフラグを一覧表示するには、`codeql-runner-OS init -h` を実行します (ここで `OS` は、使用している実行可能ファイルによって異なります)。 詳細については、「[CI システムでの {% data variables.product.prodname_code_scanning %} の構成](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference)」を参照してください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### 基本的な例

この例では、`{% data variables.command_line.git_url_example %}` でホストされている `octo-org/example-repo` リポジトリに対して、Linux CI サーバーで {% data variables.product.prodname_codeql %} 解析を実行します。 このリポジトリには、{% data variables.product.prodname_codeql %} により直接解析でき、ビルドされていない言語 (Go、JavaScript、Python、TypeScript) のみが含まれているため、プロセスは非常に単純です。

この例では、サーバーで `github/codeql-action` リポジトリから直接 {% data variables.product.prodname_codeql %} バンドルをダウンロードできるので、`--codeql-path` フラグを使う必要はありません。

1. 解析するリポジトリをチェックアウトします。
1. リポジトリがチェックアウトされるディレクトリに移動します。
1. {% data variables.product.prodname_codeql_runner %} を初期化し、検出された言語用の {% data variables.product.prodname_codeql %} データベースを作成します。

    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### コンパイル型言語の例

この例は前の例と似ていますが、今回のリポジトリには C/C++、C#、または Java のコードがあります。 これらの言語用に {% data variables.product.prodname_codeql %} データベースを作成するには、CLI でビルドをモニターする必要があります。 初期化プロセスの最後に、ランナーはコードをビルドする前に環境をセットアップするために必要なコマンドを報告します。 通常の CI ビルド プロセスを呼び出す前にこのコマンドを実行してから、`analyze` コマンドを実行する必要があります。

1. 解析するリポジトリをチェックアウトします。
1. リポジトリがチェックアウトされるディレクトリに移動します。
1. {% data variables.product.prodname_codeql_runner %} を初期化し、検出された言語用の {% data variables.product.prodname_codeql %} データベースを作成します。
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
    ```
1. `init` アクションによって生成されたスクリプトを入手し、ビルドを監視する環境を設定します。 次のコードには、先頭にドットとスペースがあることに注意してください。

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. コードをビルドする。 macOS では、ビルド コマンドの前に環境変数 `$CODEQL_RUNNER` を付ける必要があります。 詳細については、「[CI システムでの {% data variables.product.prodname_codeql_runner %} のトラブルシューティング](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build)」を参照してください。

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**注:** コンテナー化されたビルドを使用している場合、ビルド タスクを行うコンテナーで {% data variables.product.prodname_codeql_runner %} を実行する必要があります。

{% endnote %}

## 参考資料

- [CI システムでの {% data variables.product.prodname_codeql_runner %} の構成](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)
- [CI システムでの {% data variables.product.prodname_codeql_runner %} のトラブルシューティング](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)

{% else %}

## {% data variables.product.prodname_codeql_runner %} について

{% data variables.product.prodname_codeql_runner %} は非推奨となりました。 [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) バージョン 2.7.6 には完全な機能パリティがあります。

{% data variables.product.prodname_codeql_cli %} への移行については、「[CodeQL ランナーから CodeQL CLI への移行](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)」を参照してください。

## 参考資料

- GitHub ブログの [CodeQL ランナーの廃止](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/)

{% endif %}
