---
title: CIシステムでのCodeQLランナーのトラブルシューティング
shortTitle: Troubleshoot CodeQL runner
intro: '{% data variables.product.prodname_codeql_runner %} で問題が生じている場合、ここに掲載されているヒントを使ってトラブルを解決できます。'
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
ms.openlocfilehash: bd641d59d56a0d0b6ce518d3d2ef41494413b8df
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116054'
---
{% data reusables.code-scanning.deprecation-codeql-runner %} {% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

## `init` コマンドの所要時間が長すぎる

{% data variables.product.prodname_codeql_runner %} は、コードのビルドと解析を行う前に、{% data variables.product.prodname_codeql %} CLI と {% data variables.product.prodname_codeql %} ライブラリを含んでいる {% data variables.product.prodname_codeql %} バンドルへのアクセス権が必要です。

お使いのコンピューターで {% data variables.product.prodname_codeql_runner %} を初めて使用する際、`init` コマンドは {% data variables.product.prodname_codeql %} バンドルをコンピューターにダウンロードします。 ダウンロードには数分かかります。
{% data variables.product.prodname_codeql %} バンドルは次の実行の前にキャッシュされるので、{% data variables.product.prodname_codeql_runner %} を同じマシンで再度使用する際は、{% data variables.product.prodname_codeql %} バンドルを再ダウンロードすることはありません。

この自動ダウンロードを回避するには、{% data variables.product.prodname_codeql %} バンドルをコンピューターに手動でダウンロードし、`init` コマンドの `--codeql-path` フラグを使用してパスを指定します。

## ビルド中にコードが見つからない

{% data variables.product.prodname_codeql_runner %} の `analyze` コマンドがエラー `No source code was seen during the build` で失敗した場合は、{% data variables.product.prodname_codeql %} がコードを監視できなかったことを示します。 このようなエラーが発生する理由として、次のようなものがあります。

1. 自動言語検出により、サポートされている言語が特定されたが、リポジトリにその言語の分析可能なコードがない。 一般的な例としては、言語検出サービスが `.h` ファイルや `.gyp` ファイルなどの特定のプログラミング言語に関連付けられたファイルを見つけたが、対応する実行可能コードがリポジトリに存在しない場合です。 この問題を解決するには、`init` コマンドの `--languages` フラグを使用して、分析する言語を手動で定義できます。 詳細については、「[CI システムでの {% data variables.product.prodname_codeql_runner %} の構成](/code-security/secure-coding/configuring-codeql-runner-in-your-ci-system)」を参照してください。

1. `autobuild` コマンドを使用せずにコンパイル済み言語を分析していて、`init` ステップの後にビルド ステップを自分で実行します。 ビルドが機能するには、{% data variables.product.prodname_codeql_runner %} がビルドのプロセスをモニターできるように環境をセットアップする必要があります。 `init` コマンドは、必要な環境変数をエクスポートする方法についての説明を生成するので、それをコピーして `init` コマンドの実行後にスクリプトを実行できます。
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

1. コードがコンテナまたは別のマシンでビルドされている。 コンテナ化されたビルドを使用しているか、ビルドを別のマシンに委託している場合は、必ず {% data variables.product.prodname_codeql_runner %} をコンテナまたはビルドタスクを実行するマシンで実行してください。 詳細については、「[Running CodeQL code scanning in a container](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)」(コンテナーでの CodeQL コード スキャンの実行) を参照してください。
