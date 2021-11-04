---
title: CIシステムでのCodeQLランナーの実行
shortTitle: CodeQLランナーの実行
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
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->
<!--UI-LINK: When GitHub Enterprise Server <=3.0 doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.deprecation-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_codeql_runner %} について

{% data variables.product.prodname_codeql_runner %}は、サードパーティの継続的インテグレーション（CI）システム内で処理しているコードに対して{% data variables.product.prodname_code_scanning %}を実行するのに利用できるツールです。 {% data reusables.code-scanning.about-code-scanning %} For information, see "[About {% data variables.product.prodname_code_scanning %} with {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)."

{% ifversion fpt or ghes > 3.0 or ghae-next or ghec %}
多くの場合、CIシステム内で{% data variables.product.prodname_codeql_cli %}を直接使って{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}をセットアップするのが容易です。
{% endif %}

あるいは、{% data variables.product.prodname_actions %}を使って{% data variables.product.product_name %}内で{% data variables.product.prodname_code_scanning %}を実行することもできます。 詳細については、「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)」を参照してください。

{% data variables.product.prodname_codeql_runner %} は、{% data variables.product.prodname_dotcom %} リポジトリのチェックアウト中に {% data variables.product.prodname_codeql %} 解析を実行するコマンドラインツールです。 サードパーティーのシステムにランナーを追加し、ランナーを呼び出してコードを解析し、その結果を {% data variables.product.product_name %} にアップロードします。 この結果は、リポジトリの {% data variables.product.prodname_code_scanning %} アラートとして表示されます。

{% note %}

**注釈:**
{% ifversion fpt or ghec %}
* {% data variables.product.prodname_codeql_runner %}は{% data variables.product.prodname_codeql %} CLIを使ってコードを分析するので、同じライセンス条件を持ちます。 {% data variables.product.prodname_dotcom_the_website %}上で管理されるパブリックリポジトリでの使用は無料であり、{% data variables.product.prodname_advanced_security %}ライセンスを持つお客様が所有するプライベートリポジトリ上で使用できます。 詳細については「[{% data variables.product.product_name %} {% data variables.product.prodname_codeql %}の利用規約](https://securitylab.github.com/tools/codeql/license)」及び「[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)」を参照してください。
{% else %}
* {% data variables.product.prodname_codeql_runner %}は{% data variables.product.prodname_advanced_security %}ライセンスを持つお客様にご利用いただけます。
{% endif %}
{% ifversion ghes < 3.1 or ghae %}
* {% data variables.product.prodname_codeql_runner %}は{% data variables.product.prodname_codeql %} CLIと混同しないでください。 {% data variables.product.prodname_codeql %} CLIは、セキュリティの研究のために{% data variables.product.prodname_codeql %}データベースを作成し、{% data variables.product.prodname_codeql %}クエリを実行できるようにしてくれるコマンドラインインターフェースです。 詳細は「[{% data variables.product.prodname_codeql_cli %}](https://codeql.github.com/docs/codeql-cli/)」を参照してください。
{% endif %}
{% endnote %}

## {% data variables.product.prodname_codeql_runner %} をダウンロードする

{% data variables.product.prodname_codeql_runner %}は、https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases からダウンロードできます。 一部のオペレーティングシステムでは、ダウンロードしたファイルの実行前に、その権限を変更する必要があります。

Linuxの場合:

```shell
chmod +x codeql-runner-linux
```

macOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

Windowsでは、通常`codeql-runner-win.exe`ファイルの権限変更は必要ありません。

## {% data variables.product.prodname_codeql_runner %} を CI システムに追加する

{% data variables.product.prodname_codeql_runner %}をダウンロードし、実行できることを確認したら、{% data variables.product.prodname_code_scanning %}に使用するそれぞれのCIサーバーでランナーを利用できるようにしなければなりません。 たとえば、内部的な中央の場所からランナーをコピーするよう、各サーバーを設定することになるでしょう。 あるいは、REST API を使用して {% data variables.product.prodname_dotcom %}から直接ランナーを取得することもできます。例:

```shell
wget https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

これに加えて、各 CI サーバーは以下の条件も満たす必要があります。

- {% data variables.product.prodname_codeql_runner %} が使用するための {% data variables.product.prodname_github_app %} または個人アクセストークン。 `repo` スコープのあるアクセストークン、または `security_events` の書き込み権限、ならびに `metadata` および `contents` の読み取り権限を持つ {% data variables.product.prodname_github_app %} を使用する必要があります。 詳細は「[{% data variables.product.prodname_github_apps %} をビルドする](/developers/apps/building-github-apps)」および「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
- {% data variables.product.prodname_codeql_runner %} のリリースに伴う {% data variables.product.prodname_codeql %} バンドルへのアクセス。 このパッケージには、{% data variables.product.prodname_codeql %} 解析に必要なクエリとライブラリ、さらにランナーによって内部的に使用される {% data variables.product.prodname_codeql %} CLI が含まれています。 詳細は「[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)」を参照してください。

{% data variables.product.prodname_codeql %} バンドルにアクセスを与えるオプションは次の通りです。

1. CI サーバーに https://{% ifversion fpt or ghec %}github.com{% else %}<em>HOSTNAME</em>{% endif %}/github/codeql-action へのアクセスを許可し、{% data variables.product.prodname_codeql_runner %} がバンドルを自動的にダウンロードできるようにする。
1. バンドルを手動でダウンロード/展開し、他の中央リソースに保存して、 <nobr>`--codeql-path`</nobr> フラグで、呼び出しにおいて {% data variables.product.prodname_codeql_runner %} を初期化するバンドルの場所を指定します。

## {% data variables.product.prodname_codeql_runner %} を呼び出す

解析するリポジトリのチェックアウトの場所から、{% data variables.product.prodname_codeql_runner %} を呼び出す必要があります。 主なコマンドは次の 2 つです。

1. `init` は、ランナーを初期化し、解析する各言語に {% data variables.product.prodname_codeql %} データベースを作成するために必要です。 このデータベースは、続くコマンドにより展開、解析されます。
1. `analyze` は、{% data variables.product.prodname_codeql %} データベースを展開、解析し、結果を {% data variables.product.product_name %} にアップロードするために必要です。

どちらのコマンドにおいても、{% data variables.product.product_name %} の URL、リポジトリの *OWNER/NAME*、および認証に使用する{% data variables.product.prodname_github_apps %}または個人アクセストークンを指定する必要があります。 CIサーバーが`github/codeql-action`リポジトリからCodeQLバンドルを直接ダウンロードできないなら、CodeQLバンドルの場所を指定する必要もあります。

将来の解析のため {% data variables.product.prodname_codeql_runner %} が CodeQL バンドルを保存する場所を  <nobr>`--tools-dir`</nobr>  フラグで設定できます。また、解析中に一時ファイルを保存する場所を、`--temp-dir` で設定できます。 <nobr>`--temp-dir`</nobr>.

ランナーのコマンドラインリファレンスを表示するには、`-h` フラグを使用します。 たとえば、動作するすべてのコマンドを一覧表示するには `codeql-runner-OS -h` と入力し、`init` コマンド実行時に使用できるすべてのコマンドを一覧表示するには `codeql-runner-OS init -h` と入力します (`OS` 変数は使用している実行ファイルによります)。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を CI システムで設定する](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system#codeql-runner-command-reference)」を参照してください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

### 基本的な例

この例では、`{% data variables.command_line.git_url_example %}` にホストされている `octo-org/example-repo` リポジトリに対し、Linux CI サーバーで {% data variables.product.prodname_codeql %} 解析を実行します。 このリポジトリには、{% data variables.product.prodname_codeql %} により直接解析でき、ビルドされていない言語 (Go、JavaScript、Python、TypeScript) のみが含まれているため、プロセスは非常に単純です。

この例では、サーバーは`github/codeql-action`リポジトリから直接{% data variables.product.prodname_codeql %}バンドルをダウンロードできるので、`--codeql-path`フラグを使う必要はありません。

1. 解析するリポジトリをチェックアウトします。
1. リポジトリがチェックアウトされるディレクトリに移動します。
1. {% data variables.product.prodname_codeql_runner %} を初期化し、検出された言語用の {% data variables.product.prodname_codeql %} データベースを作成します。

{% ifversion ghes < 3.1 %}
   ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
   ```
{% else %}
    ```shell
    $ echo "$TOKEN" | /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth-stdin
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```
{% endif %}

{% data reusables.code-scanning.codeql-runner-analyze-example %}

### コンパイル型言語の例

この例は前の例と似ていますが、今回のリポジトリには C/C++、C#、または Java のコードがあります。 これらの言語用に {% data variables.product.prodname_codeql %} データベースを作成するには、CLI でビルドをモニターする必要があります。 初期化プロセスの最後に、ランナーはコードをビルドする前に環境をセットアップするために必要なコマンドを報告します。 通常の CI ビルドプロセスを呼び出す前にこのコマンドを実行してから、`analyze` コマンドを実行する必要があります。

1. 解析するリポジトリをチェックアウトします。
1. リポジトリがチェックアウトされるディレクトリに移動します。
1. {% data variables.product.prodname_codeql_runner %} を初期化し、検出された言語用の {% data variables.product.prodname_codeql %} データベースを作成します。
{% ifversion ghes < 3.1 %}
 ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
 ```
{% else %}
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
{% endif %}
1. `init` アクションによって生成されたスクリプトを入手し、ビルドを監視する環境をセットアップします。 次のコードには、先頭にドットとスペースがあることに注意してください。

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. コードをビルドします。 macOS では、build コマンドのプレフィックスに環境変数 `$CODEQL_RUNNER` を付ける必要があります。 詳しい情報については「[CIシステムでの{% data variables.product.prodname_codeql_runner %}のトラブルシューティング](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system#no-code-found-during-the-build)」を参照してください。

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**注釈:** コンテナ化されたビルドを使用している場合、ビルドタスクを行うコンテナで {% data variables.product.prodname_codeql_runner %} を実行する必要があります。

{% endnote %}

## 参考リンク

- 「[CI システムで {% data variables.product.prodname_codeql_runner %} を設定する](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)」
- 「[CI システムにおける {% data variables.product.prodname_codeql_runner %} のトラブルシューティング](/code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system)」
