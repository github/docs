---
title: CI システムにおける CodeQL コードスキャンのトラブルシューティング
shortTitle: CI におけるトラブルシューティング
intro: '{% data variables.product.prodname_codeql_runner %} で問題が生じている場合、ここに掲載されているヒントを使ってトラブルを解決できます。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta-codeql-runner %}
{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

### `init` コマンドに時間がかかりすぎる

{% data variables.product.prodname_codeql_runner %} は、コードのビルドと解析を行う前に、{% data variables.product.prodname_codeql %} CLI と {% data variables.product.prodname_codeql %} ライブラリを含んでいる {% data variables.product.prodname_codeql %} バンドルへのアクセス権が必要です。

お使いのマシンで {% data variables.product.prodname_codeql_runner %} を初めて使用する際、`init` コマンドは {% data variables.product.prodname_codeql %} バンドルをマシンにダウンロードします。 ダウンロードには数分かかります。
{% data variables.product.prodname_codeql %} バンドルは次の実行の前にキャッシュされるので、{% data variables.product.prodname_codeql_runner %} を同じマシンで再度使用する際は、{% data variables.product.prodname_codeql %} バンドルを再ダウンロードすることはありません。

この自動ダウンロードを回避するには、{% data variables.product.prodname_codeql %} バンドルをマシンに手動でダウンロードし、`init` コマンドの `--codeql-path` フラグでパスを指定します。

### ビルド中にコードが見つからない

{% data variables.product.prodname_codeql_runner %} の `analyze` コマンドで、`No source code was seen during the build` というエラーが出て失敗する場合、{% data variables.product.prodname_codeql %} がコードをモニターできなかったことを示しています。 このようなエラーが発生する理由として、次のようなものがあります。

1. 自動言語検出により、サポートされている言語が特定されたが、リポジトリにその言語の分析可能なコードがない。 一般的な例としては、言語検出サービスが `.h` や `.gyp` ファイルなどの特定のプログラミング言語に関連付けられたファイルを見つけたが、対応する実行可能コードがリポジトリに存在しない場合です。 この問題を解決するには、`init` コマンドの `--languages` フラグを使用して、解析する言語を手動で定義できます。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を CI システムで設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-codeql-code-scanning-in-your-ci-system)」を参照してください。

1. コンパイル型言語を `autobuild` コマンドを使用せずに解析し、`init` ステップの後に自分でビルドステップを実行している。 ビルドが機能するには、{% data variables.product.prodname_codeql_runner %} がコードをモニターできるように環境をセットアップする必要があります。 `init` コマンドは、必要な環境をエクスポートする方法についての説明を生成するので、それをコピーして`init` コマンドの実行後にスクリプトを実行できます。
   - macOS および Linux:
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - Windows で、コマンドシェル (`cmd`) またはバッチファイル (`.bat`) を使用する場合:
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - Windows で、PowerShell を使用する場合:
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   環境変数は、`codeql-runner/codeql-env.json` にも保存されています。 このファイルには、環境変数キーを値にマッピングする単一の JSON オブジェクトが含まれています。 `init` コマンドで生成されたスクリプトを実行できない場合、JSON フォーマットのデータを代わりに使用できます。

   {% note %}

   **注釈:** `init` コマンドの`--temp-dir` フラグで一時ファイルのカスタムディレクトリを指定している場合、`codeql-env` ファイルへのパスが異なることがあります。

   {% endnote %}

1. macOS でコンパイル型言語を `autobuild` コマンドを使用せずに解析し、`init` ステップの後に自分でビルドステップを実行している。 SIP (システム整合性保護) が有効になっている場合、解析は失敗することがあります。OSX の最近のバージョンでは、SIP はデフォルトで有効になっています。 この問題を解決するには、ビルドコマンドの前に `$CODEQL_RUNNER` の環境変数を付けてください。 たとえばビルドコマンドが `cmd arg1 arg2` の場合、`$CODEQL_RUNNER cmd arg1 arg2` を実行します。

1. コードがコンテナまたは別のマシンでビルドされている。 コンテナ化されたビルドを使用しているか、ビルドを別のマシンに委託している場合は、必ず {% data variables.product.prodname_codeql_runner %} をコンテナまたはビルドタスクを実行するマシンで実行してください。 詳しい情報については、「[コンテナで CodeQL コードスキャンを実行する](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container)」を参照してください。
