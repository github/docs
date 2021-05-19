---
title: CI システムで CodeQL コードスキャンを実行する
shortTitle: CI での実行
intro: '{% data variables.product.prodname_codeql_runner %} を使用して、、サードパーティの継続的インテグレーションシステムで {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を実行できます。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->
<!--UI-LINK: When GitHub Enterprise Server doesn't have GitHub Actions set up, the Security > Code scanning alerts view links to this article.-->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning %}

### 既存の CI システムで {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} を使用する

{% data variables.product.prodname_actions %} 以外の継続的インテグレーションまたは継続的デリバリ/デプロイメント (CI/CD) システムを使用している場合、{% data variables.product.prodname_dotcom %} の {% data variables.product.prodname_codeql %} 解析を実行して、その結果を {% data variables.product.prodname_dotcom %} にアップロードできます。 これを実行するには、{% data variables.product.prodname_codeql_runner %} を使用します。

### {% data variables.product.prodname_codeql_runner %} について

{% data reusables.code-scanning.about-code-scanning %}詳細については、「[{% data variables.product.prodname_code_scanning %} について](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning)」を参照してください。

{% data variables.product.prodname_codeql_runner %} を使用して、サードパーティ継続的インテグレーション (CI) システムで処理しているコード上で {% data variables.product.prodname_code_scanning %} を実行できます。 また、{% data variables.product.prodname_actions %} を使用して、{% data variables.product.product_name %} 上で {% data variables.product.prodname_code_scanning %} を実行することもできます。 詳細については、「[リポジトリに対する {% data variables.product.prodname_code_scanning %} をセットアップする](/github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository)」を参照してください。

{% data variables.product.prodname_codeql_runner %} は、{% data variables.product.prodname_dotcom %} リポジトリのチェックアウト中に {% data variables.product.prodname_codeql %} 解析を実行するコマンドラインツールです。 サードパーティーのシステムにランナーを追加し、ランナーを呼び出してコードを解析し、その結果を {% data variables.product.product_name %} にアップロードします。 この結果は、リポジトリの {% data variables.product.prodname_code_scanning %} アラートとして表示されます。

{% note %}

**ノート:**
* The {% data variables.product.prodname_codeql_runner %} is available to customers with an {% data variables.product.prodname_advanced_security %} license.
* The {% data variables.product.prodname_codeql_runner %} shouldn't be confused with the {% data variables.product.prodname_codeql %} CLI. The {% data variables.product.prodname_codeql %} CLI is an interactive command-line interface that lets you create {% data variables.product.prodname_codeql %} databases for security research and run {% data variables.product.prodname_codeql %} queries. For more information, see "[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)."
{% endnote %}

### {% data variables.product.prodname_codeql_runner %} をダウンロードする

{% data variables.product.prodname_codeql_runner %} は、https://github.com/github/codeql-action/releases からダウンロードできます。 一部のオペレーティングシステムでは、ダウンロードしたファイルの実行前に、その権限を変更する必要があります。

Linuxの場合:

```shell
chmod +x codeql-runner-linux
```

macOS:

```shell
chmod +x codeql-runner-macos
sudo xattr -d com.apple.quarantine codeql-runner-macos
```

On Windows, the `codeql-runner-win.exe` file usually requires no change to permissions.

### {% data variables.product.prodname_codeql_runner %} を CI システムに追加する

Once you download the {% data variables.product.prodname_codeql_runner %} and verify that it can be executed, you should make the runner available to each CI server that you intend to use for {% data variables.product.prodname_code_scanning %}. For example, you might configure each server to copy the runner from a central, internal location. Alternatively, you could use the REST API to get the runner directly from {% data variables.product.prodname_dotcom %}, for example:

```shell
wget https://github.com/github/codeql-action/releases/latest/download/codeql-runner-linux
chmod +x codeql-runner-linux
```

これに加えて、各 CI サーバーは以下の条件も満たす必要があります。

- {% data variables.product.prodname_codeql_runner %} が使用するための {% data variables.product.prodname_github_app %} または個人アクセストークン。 `repo` スコープのあるアクセストークン、または `security_events` の書き込み権限、ならびに `metadata` および `contents` の読み取り権限を持つ {% data variables.product.prodname_github_app %} を使用する必要があります。 詳細は「[{% data variables.product.prodname_github_apps %} をビルドする](/developers/apps/building-github-apps)」および「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
- {% data variables.product.prodname_codeql_runner %} のリリースに伴う {% data variables.product.prodname_codeql %} バンドルへのアクセス。 このパッケージには、{% data variables.product.prodname_codeql %} 解析に必要なクエリとライブラリ、さらにランナーによって内部的に使用される {% data variables.product.prodname_codeql %} CLI が含まれています。 詳細は「[{% data variables.product.prodname_codeql %} CLI](https://codeql.github.com/docs/codeql-cli/)」を参照してください。

{% data variables.product.prodname_codeql %} バンドルにアクセスを与えるオプションは次の通りです。

1. CI サーバーに https://github.com/github/codeql-action へのアクセスを許可し、{% data variables.product.prodname_codeql_runner %} がバンドルを自動的にダウンロードできるようにする。
1. {% data variables.product.product_name %} に `github/codeql-action` リポジトリをミラーする。   <nobr>`--codeql-path`</nobr> フラグを指定してない限り、ランナーは {% data variables.product.prodname_dotcom_the_website %} のこの場所にバンドルがあるかどうか自動的に確認します。
1. バンドルを手動でダウンロード/展開し、他の中央リソースに保存して、 <nobr>`--codeql-path`</nobr> フラグで、呼び出しにおいて {% data variables.product.prodname_codeql_runner %} を初期化するバンドルの場所を指定します。

### {% data variables.product.prodname_codeql_runner %} を呼び出す

解析するリポジトリのチェックアウトの場所から、{% data variables.product.prodname_codeql_runner %} を呼び出す必要があります。 主なコマンドは次の 2 つです。

1. `init` は、ランナーを初期化し、解析する各言語に {% data variables.product.prodname_codeql %} データベースを作成するために必要です。 このデータベースは、続くコマンドにより展開、解析されます。
1. `analyze` は、{% data variables.product.prodname_codeql %} データベースを展開、解析し、結果を {% data variables.product.product_name %} にアップロードするために必要です。

For both commands, you must specify the URL of {% data variables.product.product_name %}, the repository *OWNER/NAME*, and the {% data variables.product.prodname_github_apps %} or personal access token to use for authentication. You also need to specify the location of the CodeQL bundle, unless the CI server has access to download it directly from the `github/codeql-action` repository.

将来の解析のため {% data variables.product.prodname_codeql_runner %} が CodeQL バンドルを保存する場所を  <nobr>`--tools-dir`</nobr>  フラグで設定できます。また、解析中に一時ファイルを保存する場所を、`--temp-dir` で設定できます。 <nobr>`--temp-dir`</nobr>.

ランナーのコマンドラインリファレンスを表示するには、`-h` フラグを使用します。 たとえば、動作するすべてのコマンドを一覧表示するには `codeql-runner-OS -h` と入力し、`init` コマンド実行時に使用できるすべてのコマンドを一覧表示するには `codeql-runner-OS init -h` と入力します (`OS` 変数は使用している実行ファイルによります)。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を CI システムで設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system#codeql-runner-command-reference)」を参照してください。

{% data reusables.code-scanning.upload-sarif-alert-limit %}

#### 基本的な例

この例では、`{% data variables.command_line.git_url_example %}` にホストされている `octo-org/example-repo` リポジトリに対し、Linux CI サーバーで {% data variables.product.prodname_codeql %} 解析を実行します。 このリポジトリには、{% data variables.product.prodname_codeql %} により直接解析でき、ビルドされていない言語 (Go、JavaScript、Python、TypeScript) のみが含まれているため、プロセスは非常に単純です。

In this example, the server has access to download the {% data variables.product.prodname_codeql %} bundle directly from the `github/codeql-action` repository, so there is no need to use the `--codeql-path` flag.

1. 解析するリポジトリをチェックアウトします。
1. リポジトリがチェックアウトされるディレクトリに移動します。
1. {% data variables.product.prodname_codeql_runner %} を初期化し、検出された言語用の {% data variables.product.prodname_codeql %} データベースを作成します。

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo/codeql-runner
    > ...
    > Created CodeQL database at /srv/checkout/example-repo/codeql-runner/codeql_databases/javascript.
    ```

{% data reusables.code-scanning.codeql-runner-analyze-example %}

#### コンパイル型言語の例

この例は前の例と似ていますが、今回のリポジトリには C/C++、C#、または Java のコードがあります。 これらの言語用に {% data variables.product.prodname_codeql %} データベースを作成するには、CLI でビルドをモニターする必要があります。 初期化プロセスの最後に、ランナーはコードをビルドする前に環境をセットアップするために必要なコマンドを報告します。 通常の CI ビルドプロセスを呼び出す前にこのコマンドを実行してから、`analyze` コマンドを実行する必要があります。

1. 解析するリポジトリをチェックアウトします。
1. リポジトリがチェックアウトされるディレクトリに移動します。
1. {% data variables.product.prodname_codeql_runner %} を初期化し、検出された言語用の {% data variables.product.prodname_codeql %} データベースを作成します。

    ```shell
    $ /path/to-runner/codeql-runner-linux init --repository octo-org/example-repo-2
        --github-url {% data variables.command_line.git_url_example %} --github-auth TOKEN
    > Cleaning temp directory /srv/checkout/example-repo-2/codeql-runner
    > ...
    > CodeQL environment output to "/srv/checkout/example-repo-2/codeql-runner/codeql-env.json"
      and "/srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      Please export these variables to future processes so that CodeQL can monitor the build, for example by running 
      ". /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh".
      ```

1. `init` アクションによって生成されたスクリプトを入手し、ビルドを監視する環境をセットアップします。 次のコードには、先頭にドットとスペースがあることに注意してください。

    ```shell
    $ . /srv/checkout/example-repo-2/codeql-runner/codeql-env.sh
    ```

1. コードをビルドします。 macOS では、build コマンドのプレフィックスに環境変数 `$CODEQL_RUNNER` を付ける必要があります。 詳しい情報については、「[CI システムにおせるコードスキャンのトラブルシューティング](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system#no-code-found-during-the-build)」を参照してください。

{% data reusables.code-scanning.codeql-runner-analyze-example %}

{% note %}

**注釈:** コンテナ化されたビルドを使用している場合、ビルドタスクを行うコンテナで {% data variables.product.prodname_codeql_runner %} を実行する必要があります。

{% endnote %}

### 参考リンク

- 「[CI システムで {% data variables.product.prodname_code_scanning %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system)」
- 「[CI システムにおける {% data variables.product.prodname_code_scanning %} のトラブルシューティング](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system)」
