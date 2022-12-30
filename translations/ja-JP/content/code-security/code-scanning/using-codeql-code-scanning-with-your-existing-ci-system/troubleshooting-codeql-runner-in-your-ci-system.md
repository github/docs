---
title: CIシステムでのCodeQLランナーのトラブルシューティング
shortTitle: Troubleshoot CodeQL runner
intro: '{% data variables.code-scanning.codeql_runner %}で問題が生じている場合、ここに掲載されているヒントを使ってトラブルシューティングを行ってください。'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/troubleshooting-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/troubleshooting-codeql-runner-in-your-ci-system
versions:
  feature: codeql-runner-supported
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Troubleshooting
  - Integration
  - CI
ms.openlocfilehash: b241e0c01b463a46a1eb3b47b68ba0283a94609d
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161167'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

## `init` コマンドの所要時間が長すぎる

{% data variables.code-scanning.codeql_runner %}を使ってコードを構築して分析するには、{% data variables.product.prodname_codeql %} CLI と {% data variables.product.prodname_codeql %} ライブラリを含む {% data variables.product.prodname_codeql %} バンドルへのアクセス権が必要です。

お使いのマシンで {% data variables.code-scanning.codeql_runner %} を初めて使うときは、`init` コマンドを実行すると、マシンに {% data variables.product.prodname_codeql %} バンドルがダウンロードされます。 ダウンロードには数分かかります。
{% data variables.product.prodname_codeql %} バンドルは、実行の合間にキャッシュされるため、同じマシンで {% data variables.code-scanning.codeql_runner %}を使っても、{% data variables.product.prodname_codeql %} バンドルがもう一度ダウンロードされることはありません。

この自動ダウンロードを回避するには、{% data variables.product.prodname_codeql %} バンドルをコンピューターに手動でダウンロードし、`init` コマンドの `--codeql-path` フラグを使用してパスを指定します。

## ビルド中にコードが見つからない

{% data variables.code-scanning.codeql_runner %}の `analyze` コマンドが失敗して、`No source code was seen during the build` というエラーが発生した場合、これは {% data variables.product.prodname_codeql %} によるコードの監視を行うことができなかったことを示しています。 このようなエラーが発生する理由として、次のようなものがあります。

1. 自動言語検出により、サポートされている言語が特定されたが、リポジトリにその言語の分析可能なコードがない。 一般的な例としては、言語検出サービスが `.h` ファイルや `.gyp` ファイルなどの特定のプログラミング言語に関連付けられたファイルを見つけたが、対応する実行可能コードがリポジトリに存在しない場合です。 この問題を解決するには、`init` コマンドの `--languages` フラグを使用して、分析する言語を手動で定義できます。 詳しくは、「[CI システムでの {% data variables.code-scanning.codeql_runner %}の構成](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)」を参照してください。

1. `autobuild` コマンドを使用せずにコンパイル済み言語を分析していて、`init` ステップの後にビルド ステップを自分で実行します。 ビルドを機能させるには、{% data variables.code-scanning.codeql_runner %}によるビルド プロセスの監視が可能となるように、環境を設定する必要があります。 `init` コマンドは、必要な環境変数をエクスポートする方法についての説明を生成するので、それをコピーして `init` コマンドの実行後にスクリプトを実行できます。
   - macOS および Linux:
     ```shell
      $ . codeql-runner/codeql-env.sh
     ```
   - Windows では、コマンド シェル (`cmd`) またはバッチ ファイル (`.bat`) を使用します。
     ```shell
     > call codeql-runner\codeql-env.bat
     ```
   - Windows で、PowerShell を使用する場合:
     ```shell
     > cat codeql-runner\codeql-env.sh | Invoke-Expression
     ```

   環境変数もファイル `codeql-runner/codeql-env.json` に格納されます。 このファイルには、環境変数キーを値にマッピングする単一の JSON オブジェクトが含まれています。 `init` コマンドで生成されたスクリプトを実行できない場合、JSON 形式のデータを代わりに使用できます。

   {% note %}

   **注:** `init` コマンドの `--temp-dir` フラグを使用して一時ファイルのカスタム ディレクトリを指定した場合、`codeql-env` ファイルへのパスが異なる場合があります。

   {% endnote %}

1. `autobuild` コマンドを使用せずに macOS でコンパイル済み言語を分析していて、`init` ステップの後にビルド ステップを自分で実行します。 SIP (システム整合性保護) が有効になっている場合、解析は失敗することがあります。OSX の最近のバージョンでは、SIP はデフォルトで有効になっています。 修正するには、ビルド コマンドの前に `$CODEQL_RUNNER` 環境変数を付ける必要があります。 
   たとえば、ビルド コマンドが `cmd arg1 arg2` である場合は、`$CODEQL_RUNNER cmd arg1 arg2` を実行する必要があります。

1. コードがコンテナまたは別のマシンでビルドされている。 コンテナー化されたビルドを使うか、ビルドを別のマシンに委託している場合は、{% data variables.code-scanning.codeql_runner %}を、コンテナーで、またはビルド タスクが実行されているマシンで実行してください。 詳細については、「[Running CodeQL code scanning in a container](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)」(コンテナーでの CodeQL コード スキャンの実行) を参照してください。
