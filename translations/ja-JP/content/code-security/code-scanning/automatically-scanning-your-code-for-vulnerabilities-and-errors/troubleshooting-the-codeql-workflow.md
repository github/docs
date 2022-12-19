---
title: CodeQL ワークフローのトラブルシューティング
shortTitle: Troubleshoot CodeQL workflow
intro: '{% data variables.product.prodname_code_scanning %} で問題が生じている場合、ここに掲載されている問題解決のためのヒントを使ってトラブルを解決できます。'
product: '{% data reusables.gated-features.code-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/troubleshooting-the-codeql-workflow
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow
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
  - Troubleshooting
  - Repositories
  - Pull requests
  - C/C++
  - C#
  - Java
ms.openlocfilehash: 4cbf57959776fee375eef2ea08778bf4c66b6324
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161192'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %} {% note %}

**メモ:** この記事では、このバージョンの {% data variables.product.product_name %} の初期リリースに含まれる CodeQL アクションのバージョンおよび関連する CodeQL CLI バンドルで使用できる機能について説明します。 企業でより新しいバージョンの CodeQL アクションを使用している場合は、最新の機能の詳細について [{% data variables.product.prodname_ghe_cloud %} の記事](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow)を参照してください。 {% ifversion not ghae %}最新バージョンの使用については、「[Configuring code scanning for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)」(アプライアンスのコード スキャニングの構成) を参照してください。{% endif %}

{% endnote %} {% endif %}

## デバッグ用の詳細なログを生成する

詳細なログ出力を生成するため、ステップのデバッグロギングを有効化することができます。 詳細については、「[Enabling debug logging](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)」(デバッグ ログの有効化) を参照してください。

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

## {% data variables.product.prodname_codeql %} デバッグ成果物の作成

{% data variables.product.prodname_codeql %} のデバッグに役立つ成果物を取得できます。
デバッグ成果物は、`debug-artifacts` という名前の成果物としてワークフローの実行にアップロードされます。 このデータには、{% data variables.product.prodname_codeql %} ログ、{% data variables.product.prodname_codeql %} データベース、およびワークフローで生成されたすべての SARIF ファイルが含まれています。

これらの成果物は、{% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %}に関する問題をデバッグするのに役立ちます。 GitHub サポートに問い合わせた場合、このデータを要求される場合があります。

{% endif %}

{% ifversion codeql-action-debug-logging %}

### デバッグ ログが有効な状態でのジョブの再実行による、{% data variables.product.prodname_codeql %} デバッグ成果物の作成

デバッグ ログを有効にし、ジョブを再実行することで、{% data variables.product.prodname_codeql %} デバッグ成果物を作成できます。 {% data variables.product.prodname_actions %} のワークフローとジョブの再実行について詳しくは、「[ワークフローとジョブの再実行](/actions/managing-workflow-runs/re-running-workflows-and-jobs)」を参照してください。

必ず **[デバッグ ログの有効化]** を選ぶ必要があります。 このオプションにより、実行でランナー診断ログとステップ デバッグ ログが有効になります。 これで、`debug-artifacts` をダウンロードしてさらに調査できるようになります。 ジョブを再実行して {% data variables.product.prodname_codeql %} デバッグ成果物を作成するときに、ワークフロー ファイルを変更する必要はありません。

{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}

### ワークフロー フラグを使用した {% data variables.product.prodname_codeql %} デバッグ成果物の作成

ワークフローでフラグを使用して {% data variables.product.prodname_codeql %} デバッグ成果物を作成できます。 このためには、{% data variables.code-scanning.codeql_workflow %} ファイルの `init` ステップを変更して `debug: true` を設定する必要があります。

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

{% endif %}

## コンパイル言語の自動ビルドの失敗

プロジェクト内のコンパイル言語のコードの自動ビルドが失敗した場合は、次のトラブルシューティングのステップを試してください。

- {% data variables.product.prodname_code_scanning %} ワークフローから `autobuild` ステップを削除し、特定のビルド ステップを追加します。 ワークフローの編集の詳細については、「[{% data variables.product.prodname_code_scanning %} の構成](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。 `autobuild` ステップの置き換えの詳細については、「[コンパイル言語用の {% data variables.product.prodname_codeql %} ワークフローの構成 を参照してください](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」。

- ワークフローが解析する言語を明示的に指定していない場合、{% data variables.product.prodname_codeql %} はコードベースでサポートされている言語を暗黙的に検出します。 この構成では、コンパイル言語である C/C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %}Java のうち、ソース ファイルが最も多い言語のみが {% data variables.product.prodname_codeql %} によって分析されます。 ワークフローを編集し、解析する言語を指定するマトリックスを追加してください。 デフォルトの CodeQL 解析では、こうしたマトリクスを使用しています。

  以下はワークフローからの抜粋で、まず言語を指定するジョブ戦略におけるマトリクスの使用法を示し、次に「Initialize {% data variables.product.prodname_codeql %}」のステップで各言語を参照しています。

  ```yaml
  jobs:
    analyze:
      permissions:
        security-events: write
        actions: read
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: {% data reusables.actions.action-codeql-action-init %}
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  ワークフローの編集の詳細については、「[Configuring code scanning](/code-security/secure-coding/configuring-code-scanning)」(コード スキャンの構成) を参照してください。

## ビルド中にコードが見つからない

ワークフローがエラー `No source code was seen during the build` または `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32` で失敗した場合は、{% data variables.product.prodname_codeql %} でコードを監視できなかったことを示します。 このようなエラーが発生する理由として、次のようなものがあります。

1. リポジトリには、{% data variables.product.prodname_codeql %} でサポートされている言語で記述されたソースコードが含まれていない場合があります。 サポートされている言語の一覧を確認し、その場合は {% data variables.product.prodname_codeql %} ワークフローを削除します。 詳細については、「[CodeQL によるコード スキャンについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql)」を参照してください。

1. 自動言語検出により、サポートされている言語が特定されたが、リポジトリにその言語の分析可能なコードがない。 一般的な例としては、言語検出サービスが `.h` ファイルや `.gyp` ファイルなどの特定のプログラミング言語に関連付けられたファイルを見つけたが、対応する実行可能コードがリポジトリに存在しない場合です。 この問題を解決するには、`language` マトリクスにある言語のリストを更新し、解析する言語を手動で定義します。 たとえば、次の設定では Go と JavaScript のみを分析します。

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   詳細については、前述の「[Automatic build for a compiled language fails](#automatic-build-for-a-compiled-language-fails)」(コンパイル言語の自動ビルドが失敗する) のワークフロー抽出を参照してください。

1. {% data variables.product.prodname_code_scanning %} ワークフローでコンパイル言語 (C、C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %} または Java) が分析されているが、コードはコンパイルされていない。 デフォルトでは、{% data variables.product.prodname_codeql %} 分析ワークフローには `autobuild` ステップが含まれていますが、このステップはベスト エフォートプロセスを表しており、特定のビルド環境によっては、コードのビルドに失敗する可能性があります。 `autobuild` ステップを削除し、ビルド ステップを手動で含めない場合も、コンパイルが失敗する可能性があります。  ビルド ステップの指定の詳細については、「[コンパイル言語用の {% data variables.product.prodname_codeql %} ワークフローの構成 を参照してください](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」。
1. ワークフローでコンパイル言語 (C、C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %} または Java) が分析されているが、パフォーマンスを向上させるためにビルドの一部がキャッシュされている (Gradle や Bazel などのビルド システムで発生する可能性が最も高い)。 {% data variables.product.prodname_codeql %} はコンパイラのアクティビティを監視してリポジトリ内のデータフローを理解するため、{% data variables.product.prodname_codeql %} は分析を実行するために完全なビルドを実行する必要があります。
1. ワークフローでコンパイル言語 (C、C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %} または Java) が分析されているが、ワークフローの `init` と `analyze` ステップの間でコンパイルが行われていない。 {% data variables.product.prodname_codeql %} では、コンパイラのアクティビティを監視して分析を実行するために、これらの 2 つのステップ間でビルドを行う必要があります。
1. コンパイル済みコード (C、C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %}または Java) は正常にコンパイルされたが、{% data variables.product.prodname_codeql %} でコンパイラの呼び出しを検出できない。 最も一般的な原因を次に示します。

   - ビルドプロセスを {% data variables.product.prodname_codeql %} とは別のコンテナで実行している。 詳細については、「[Running CodeQL code scanning in a container](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)」(コンテナーでの CodeQL コード スキャンの実行) を参照してください。
   - デーモンプロセスを使用して、GitHub Actions の外部で分散ビルドシステムによりビルドしている。
   - {% data variables.product.prodname_codeql %} は、使用されているコンパイラを認識していない。

  .NET Framework プロジェクトの場合、および `dotnet build` または `msbuild` を使用する C# プロジェクトの場合は、コードをビルドするときにワークフローの `run` ステップで `/p:UseSharedCompilation=false` を指定する必要があります。
  
  たとえば、次の C# に対する設定では、最初のビルドステップ中にフラグが渡されます。

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  特定のコンパイラまたは設定で別の問題が発生した場合は、{% data variables.contact.contact_support %} までお問い合わせください。

ビルド ステップの指定の詳細については、「[コンパイル言語用の {% data variables.product.prodname_codeql %} ワークフローの構成 を参照してください](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」。

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}

## スキャンされたコード行が想定よりも少ない

C/C++、C#、Go、Java などのコンパイル言語の場合、{% data variables.product.prodname_codeql %} では、分析中にビルドされたファイルのみがスキャンされます。 そのため、一部のソース コードが正しくコンパイルされていない場合、スキャンされるコード行の数は想定よりも少なくなります。 これは、いくつかの理由で発生します。

1. {% data variables.product.prodname_codeql %} の `autobuild` 機能では、ヒューリスティックを使用してリポジトリにコードがビルドされます。 ただし、このアプローチではリポジトリの分析が不完全になることがあります。 たとえば、1 つのリポジトリに複数の `build.sh` コマンドが存在する場合、`autobuild` ステップで実行されるコマンドは 1 つのみであるため、一部のソース ファイルがコンパイルされない可能性があります。したがって、分析が完了しない可能性があります。
1. 一部のコンパイラは {% data variables.product.prodname_codeql %} で動作せず、コードの分析中に問題が発生する可能性があります。 たとえば、Project Lombok では、パブリックでないコンパイラ API を使用してコンパイラの動作が変更されます。 これらのコンパイラの変更で用いられる想定は、{% data variables.product.prodname_codeql %} の Java 抽出子では有効ではないため、コードを分析することができません。

{% data variables.product.prodname_codeql %} 分析でスキャンされるコード行が想定よりも少ない場合は、必要なすべてのソース ファイルがコンパイルされるようにいくつかのアプローチを試すことができます。

### `autobuild` ステップを置き換える

`autobuild` ステップを、運用環境で使用するのと同じビルド コマンドに置き換えます。 これにより、{% data variables.product.prodname_codeql %} では、スキャンするすべてのソース ファイルをコンパイルする方法を正確に認識できます。
詳細については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローの構成](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

### {% data variables.product.prodname_codeql %} データベース内のソース ファイルのコピーを調べる

{% data variables.product.prodname_codeql %} データベースに含まれるソース コードのコピーを調べることで、一部のソース ファイルが分析されていない理由を理解できる場合があります。 Actions ワークフローからデータベースを取得するには、{% data variables.product.prodname_codeql %} ワークフロー ファイルの `init` ステップを変更し、`debug: true` を設定します。

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

これにより、ローカル コンピューターにダウンロードできるアクション成果物としてデータベースがアップロードされます。 詳細については、「[Storing workflow artifacts](/actions/guides/storing-workflow-data-as-artifacts)」(ワークフロー成果物の格納) を参照してください。

成果物には、{% data variables.product.prodname_codeql %} によってスキャンされたソース ファイルのアーカイブされたコピー (_src.zip_ と呼ばれる) が含まれます。 リポジトリ内のソース コード ファイルと _src.zip_ 内のファイルを比較すると、不足しているファイルの種類を確認できます。 分析されていないファイルの種類がわかったら、{% data variables.product.prodname_codeql %} 分析のワークフローをどのように変更する必要があるかを容易に理解できます。

## 生成されたコードで検出されたアラート

{% data reusables.code-scanning.alerts-found-in-generated-code %}

## データベースの抽出エラー

{% data variables.product.prodname_codeql %} チームは、すべてのソース ファイルを確実にスキャンできるように、重大な抽出エラーに常に対処しています。 ただし、{% data variables.product.prodname_codeql %} 抽出子では、データベースの作成時にエラーが発生することがあります。 {% data variables.product.prodname_codeql %} では、データベースの作成時にログ ファイル内に生成された抽出エラーおよび警告に関する情報が提供されます。
抽出診断情報は、データベースの全体的な正常性を示します。 ほとんどの抽出エラーは、分析に大きな影響を及ぼすことはありません。 少数の抽出エラーは正常であり、通常は良好な分析状態を示します。

ただし、データベースの作成時にコンパイルされたファイルの大部分に抽出エラーが生じる場合は、エラーを詳しく調べて、一部のソース ファイルが正しく抽出されなかった原因を特定する必要があります。

{% else %}

## リポジトリの一部が `autobuild` を使用して分析されない

{% data variables.product.prodname_codeql %} の `autobuild` 機能では、ヒューリスティックスを使用してリポジトリにコードがビルドされますが、このアプローチではリポジトリの分析が不完全になることがあります。 たとえば、単一のリポジトリに複数の`build.sh` コマンドが存在する場合、`autobuild` ステップで実行されるコマンドは 1 つのみであるため、分析が完了しない場合があります。 これを解決するには、`autobuild` ステップを、分析するすべてのソース コードをビルドするビルド ステップに置き換えます。 詳細については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローの構成](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。
{% endif %}

## ビルドに時間がかかりすぎる

{% data variables.product.prodname_codeql %} 分析でのビルドの実行に時間がかかりすぎる場合は、ビルド時間を短縮するための方法がいくつかあります。

### メモリまたはコアを増やす

セルフホストランナーを使用して {% data variables.product.prodname_codeql %} 解析を実行している場合、ランナーのメモリやコア数を増やすことができます。

### マトリックスビルドを使用して分析を並列化する

既定の {% data variables.code-scanning.codeql_workflow %}では、言語のマトリックスを使います。これにより、各言語の解析が並列で実行されます。 「Initialize CodeQL」ステップで解析する言語を直接指定している場合、各言語の解析は順次行われます。 複数の言語で解析を高速化するには、マトリクスを使用するようワークフローを変更してください。 詳細については、前述の「[Automatic build for a compiled language fails](#automatic-build-for-a-compiled-language-fails)」(コンパイル言語の自動ビルドが失敗する) のワークフロー抽出を参照してください。

### 1 つのワークフローで分析されるコードの量を減らす

通常、分析時間は、分析対象のコードの量に比例します。 たとえば、テストコードを除外したり、一度にコードのサブセットのみを分析する複数のワークフローに分析を分割したりするなど、一度に分析されるコードの量を減らすことで、分析時間を短縮できます。

{% data reusables.code-scanning.alerts-found-in-generated-code %}

上記のように分析を複数のワークフローに分割する場合でも、リポジトリ内のすべてのコードを分析する `schedule` で実行されるワークフローを少なくとも 1 つ用意することをお勧めします。 {% data variables.product.prodname_codeql %} はコンポーネント間のデータフローを分析するため、一部の複雑なセキュリティ動作は完全なビルドでのみ検出される場合があります。

### `schedule` イベント中にのみ実行する

`push` イベント中または `pull_request` イベント中の分析の実行に引き続き時間がかかりすぎる場合は、`schedule` イベントでのみ分析をトリガーすることをお勧めします。 詳細については、「[イベント](/actions/learn-github-actions/introduction-to-github-actions#events)」を参照してください。

### ワークフローが実行されているクエリ スイートを確認する

既定では、言語ごとに 3 つの主要なクエリ スイートを使用できます。 CodeQL データベースのビルドを最適化してもプロセスに時間がかかりすぎる場合は、実行するクエリの数を減らすことができます。 既定のクエリ スイートは自動的に実行されます。これには、誤検知結果の割合が最も低い最速のセキュリティ クエリが含まれています。

既定のクエリに加えて、追加のクエリまたはクエリ スイートを実行している可能性があります。 ワークフローで、`queries` 要素を使用して実行する追加のクエリ スイートまたは追加のクエリが定義されているかどうかを確認します。 追加のクエリ スイートまたはクエリを無効にして試験を行うことができます。 詳細については、「[{% data variables.product.prodname_code_scanning %} の設定](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)」を参照してください。

{% ifversion codeql-ml-queries %} {% note %}

**メモ:** JavaScript で `security-extended` または `security-and-quality` クエリ スイートを実行する場合、一部のクエリでは試験的なテクノロジが使用されます。 詳細については、「[About code scanning alerts](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)」(コード スキャン アラートについて) を参照してください。
{% endnote %} {% endif %}

{% ifversion fpt or ghec %}

## 分析プラットフォーム間で異なる結果

Pythonで書かれたコードを分析している場合は、{% data variables.code-scanning.codeql_workflow %}を Linux、macOS、Windows のどれで実行するかによって、表示される結果が異なることがあります。

Linux が使用されている Github ホステッド ランナーの場合、{% data variables.code-scanning.codeql_workflow %}によって、Python 依存関係のインストールと分析が試行されて、さらに多くの結果が得られることがあります。 自動インストールを無効にするには、ワークフローの "Initialize CodeQL" ステップに `setup-python-dependencies: false` を追加します。 Python 依存関係の分析を構成する方法の詳細については、「[Analyzing Python dependencies](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)」(Python 依存関係の分析) を参照してください。

{% endif %}

## エラー: "サーバー エラー"

サーバーエラーにより {% data variables.product.prodname_code_scanning %} のワークフローが実行できない場合は、ワークフローを再実行してください。 問題が解決しない場合は、{% data variables.contact.contact_support %} にお問い合わせください。

## エラー: "Out of disk (ディスク不足)" または "メモリ不足"

非常に大規模なプロジェクトでは、{% data variables.product.prodname_codeql %} でランナーのディスクまたはメモリが不足する場合があります。
{% ifversion fpt or ghec %}ホストされた {% data variables.product.prodname_actions %} ランナーでこの問題が生じた場合は、弊社が問題を調査できるよう {% data variables.contact.contact_support %}に連絡してください。
{% else %}この問題が生じたら、ランナー上のメモリを増やしてみてください。{% endif %}

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_dependabot %}を使用している際のError: 403 "Resource not accessible by integration"

{% data variables.product.prodname_dependabot %}は、ワークフローの実行をトリガーする際に信頼できないと見なされ、ワークフローは読み取りのみのスコープで実行されます。 ブランチに対する{% data variables.product.prodname_code_scanning %}の結果をアップロードするには、通常 `security_events: write` スコープが必要になります。 ただし、`pull_request` イベントによってアクションの実行がトリガーされると、{% data variables.product.prodname_code_scanning %}で常に結果のアップロードが許可されます。 そのため、{% data variables.product.prodname_dependabot %} ブランチでは `push` イベントの代わりに `pull_request` イベントを使用することをお勧めします。

シンプルなアプローチは、このブランチ群に対してオープンされたPull Requestとともに、デフォルトブランチやその他の重要な長時間実行されるブランチに対するプッシュで実行することです。

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
```

別のアプローチは、{% data variables.product.prodname_dependabot %}ブランチを除くすべてのプッシュに対して実行することです。

```yaml
on:
  push:
    branches-ignore:
      - 'dependabot/**'
  pull_request:
```

### 既定のブランチでも分析が失敗する

{% data variables.code-scanning.codeql_workflow %}が、既定のブランチに作成されたコミットでそれでも失敗する場合は、次を確認する必要があります。

- {% data variables.product.prodname_dependabot %}がそのコミットを作成したか
- コミットを含む pull 要求が `@dependabot squash and merge` を使用してマージされたかどうか

この種のマージコミットは{% data variables.product.prodname_dependabot %}によって作成されるので、このコミットで実行されるワークフローは読み取りのみの権限を持つことになります。 {% data variables.product.prodname_code_scanning %}と {% data variables.product.prodname_dependabot %} のセキュリティ更新またはバージョン更新をリポジトリで有効化した場合は、{% data variables.product.prodname_dependabot %} の `@dependabot squash and merge` コマンドは使用しないことをお勧めします。 代わりに、リポジトリで自動マージを有効にすることができます。 つまり、必要なすべてのレビューが満足され、状態チェックに合格すると、pull request は自動的にマージされます。 自動マージの有効化の詳細については、「[Automatically merging a pull request](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)」(pull 要求の自動マージ) を参照してください。
{% endif %}

## エラー: ".ql ファイル、.qls ファイル、ディレクトリ、またはクエリ パック仕様ではありません"

このエラーは、CodeQL が、ワークフローで要求されている場所で、指定されたクエリ、クエリ スイート、またはクエリ パックを見つけることができない場合に表示されます。 一般に、このエラーには 2 つの理由があります。

- ワークフローに入力ミスがあります。
- ワークフローでパスにより参照されているリソースが、名前を変更、削除、または新しい場所に移動されました。

リソースの場所を確認した後、正しい場所を指定するようにワークフローを更新できます。

## 警告: "git checkout HEAD^2 is no longer necessary (git checkout HEAD^2 は不要になりました)"

古い{% data variables.product.prodname_codeql %}ワークフローを使っていると、"Initialize {% data variables.product.prodname_codeql %}"アクションからの出力に以下の警告が含まれていることがあります。

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

これは、以下の行を{% data variables.product.prodname_codeql %}ワークフローから削除することによって修正してください。 これらの行は、初期バージョンの {% data variables.product.prodname_codeql %} ワークフロー内の `Analyze` ジョブの `steps` セクションに含まれています。

```yaml
        with:
          # We must fetch at least the immediate parents so that if this is
          # a pull request then we can checkout the head.
          fetch-depth: 2

      # If this run was triggered by a pull request event, then checkout
      # the head of the pull request instead of the merge commit.
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

ワークフローの変更された `steps` セクションは次のようになります。

```yaml
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

{% data variables.product.prodname_codeql %} ワークフロー ファイルの編集の詳細については、「[{% data variables.product.prodname_code_scanning %} の構成](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。
