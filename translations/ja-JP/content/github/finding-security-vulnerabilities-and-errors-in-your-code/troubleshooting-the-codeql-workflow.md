---
title: CodeQL ワークフローのトラブルシューティング
shortTitle: CodeQL のトラブルシューティング
intro: '{% data variables.product.prodname_code_scanning %} で問題が生じている場合、ここに掲載されている問題解決のためのヒントを使ってトラブルを解決できます。'
product: '{% data reusables.gated-features.code-scanning %}'
versions:
  enterprise-server: '2.22'
topics:
  - Security
---

<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

### デバッグ用の詳細なログを生成する

詳細なログ出力を生成するため、ステップのデバッグロギングを有効化することができます。 詳しい情報については、「[デバッグログの有効化](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)」を参照してください。

### コンパイル言語の自動ビルドの失敗

プロジェクト内のコンパイル言語のコードの自動ビルドが失敗した場合は、次のトラブルシューティングのステップを試してください。

- {% data variables.product.prodname_code_scanning %} ワークフローから `autobuild` ステップを削除し、特定のビルドステップを追加します。 ワークフローの編集に関する詳しい情報は、「[{% data variables.product.prodname_code_scanning %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。 `autobuild` ステップの置き換えに関する詳細は、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

- ワークフローが解析する言語を明示的に指定していない場合、{% data variables.product.prodname_codeql %} はコードベースでサポートされている言語を暗黙的に検出します。 この設定では、コンパイル型言語である C/C++、C#、Java のうち、{% data variables.product.prodname_codeql %} はソースファイルの数が最も多い言語のみを解析します。 ワークフローを編集し、解析する言語を指定したビルドマトリクスを追加してください。 デフォルトの CodeQL 解析では、こうしたマトリクスを使用しています。

  以下はワークフローからの抜粋で、まず言語を指定するジョブ戦略におけるマトリクスの使用法を示し、次に「Initialize {% data variables.product.prodname_codeql %}」のステップで各言語を参照しています。

  ```yaml
  jobs:
    analyze:{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
      permissions:
        security-events: write
        actions: read{% endif %}
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      ...

      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1
        with:
          languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  ワークフローの編集に関する詳しい情報については、「[コードスキャンを設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)」を参照してください。

### ビルド中にコードが見つからない

ワークフローでエラー `No source code was seen during the build` または `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32` が発生した場合、{% data variables.product.prodname_codeql %} がコードを監視できなかったことを示しています。 このようなエラーが発生する理由として、次のようなものがあります。

1. 自動言語検出により、サポートされている言語が特定されたが、リポジトリにその言語の分析可能なコードがない。 一般的な例としては、言語検出サービスが `.h` や `.gyp` ファイルなどの特定のプログラミング言語に関連付けられたファイルを見つけたが、対応する実行可能コードがリポジトリに存在しない場合です。 この問題を解決するには、`language` マトリクスにある言語のリストを更新し、解析する言語を手動で定義します。 たとえば、次の設定では Go と JavaScript のみを分析します。

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below
      # Supported options are:
      # ['csharp', 'cpp', 'go', 'java', 'javascript', 'python']
      language: ['go', 'javascript']
  ```
詳しい情報については、上記「[コンパイル言語の自動ビルドの失敗](#automatic-build-for-a-compiled-language-fails)」にあるワークフローの抜粋を参照してください。
1. {% data variables.product.prodname_code_scanning %} ワークフローはコンパイルされた言語（C、C++、C#、または Java）を分析しているが、コードはコンパイルされていない。 デフォルトでは、{% data variables.product.prodname_codeql %} 分析ワークフローには `autobuild` ステップが含まれていますが、このステップはベスト エフォートプロセスを表しており、特定のビルド環境によっては、コードのビルドに失敗する可能性があります。 `autobuild` ステップを削除し、ビルドステップを手動で含めない場合も、コンパイルが失敗する可能性があります。  ビルドステップの指定に関する詳細は、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。
1. ワークフローはコンパイルされた言語（C、C++、C#、または Java）を分析しているが、パフォーマンスを向上させるためにビルドの一部がキャッシュされている（Gradle や Bazel などのビルドシステムで発生する可能性が最も高い）。 {% data variables.product.prodname_codeql %} はコンパイラのアクティビティを監視してリポジトリ内のデータフローを理解するため、{% data variables.product.prodname_codeql %} は分析を実行するために完全なビルドを実行する必要があります。
1. ワークフローはコンパイルされた言語（C、C++、C＃、または Java）を分析しているが、ワークフローの `init` ステップと `analyze` ステップの間でコンパイルが行われていない。 {% data variables.product.prodname_codeql %} では、コンパイラのアクティビティを監視して分析を実行するために、これらの 2 つのステップ間でビルドを行う必要があります。
1. コンパイルされたコード（C、C++、C#、または Java）は正常にコンパイルされたが、{% data variables.product.prodname_codeql %} がコンパイラの呼び出しを検出できない。 一般的な原因は次のようなものです。

   * ビルドプロセスを {% data variables.product.prodname_codeql %} とは別のコンテナで実行している。 詳しい情報については、「[コンテナで CodeQL コードスキャンを実行する](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container)」を参照してください。
   * デーモンプロセスを使用して、GitHub Actions の外部で分散ビルドシステムによりビルドしている。
   * {% data variables.product.prodname_codeql %} は、使用されているコンパイラを認識していない。

  .NET Framework プロジェクト、および .NET Core 2 をターゲットとする `dotnet build` または `msbuild` を使用する C# プロジェクトでは、コードをビルドするときに、ワークフローの `run` ステップで `/p:UseSharedCompilation=false` を指定する必要があります。 .NET Core 3.0 以降では、`UseSharedCompilation` フラグは必要ありません。

  たとえば、次の C# に対する設定では、最初のビルドステップ中にフラグが渡されます。

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false 
   ```

  特定のコンパイラまたは設定で別の問題が発生した場合は、{% data variables.contact.contact_support %} までお問い合わせください。

ビルドステップの指定に関する詳細は、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

### リポジトリの一部が `autobuild` を使用して分析されない

{% data variables.product.prodname_codeql %} の `autobuild` 機能は、ヒューリスティックスを使用してリポジトリにコードをビルドしますが、このアプローチでは、リポジトリの分析が不完全になることがあります。 たとえば、単一のリポジトリに複数の `build.sh` コマンドが存在する場合、`autobuild` ステップはコマンドの 1 つしか実行しないため、分析が完了しない場合があります。 これを解決するには、`autobuild` ステップを、分析するすべてのソースコードをビルドするビルドステップに置き換えます。 詳しい情報については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

### ビルドに時間がかかりすぎる

{% data variables.product.prodname_codeql %} 分析でのビルドの実行に時間がかかりすぎる場合は、ビルド時間を短縮するための方法がいくつかあります。

#### メモリまたはコアを増やす

セルフホストランナーを使用して {% data variables.product.prodname_codeql %} 解析を実行している場合、ランナーのメモリやコア数を増やすことができます。

#### マトリックスビルドを使用して分析を並列化する

デフォルトの {% data variables.product.prodname_codeql_workflow %} は言語のビルドマトリクスを使用しており、これにより各言語の解析が並列で実行される場合があります。 「Initialize CodeQL」ステップで解析する言語を直接指定している場合、各言語の解析は順次行われます。 複数の言語で解析を高速化するには、マトリクスを使用するようワークフローを変更してください。 詳しい情報については、上記「[コンパイル言語の自動ビルドの失敗](#automatic-build-for-a-compiled-language-fails)」にあるワークフローの抜粋を参照してください。

#### 1 つのワークフローで分析されるコードの量を減らす

一般的に、分析時間は分析されるコードの量に比例します。 たとえば、テストコードを除外したり、一度にコードのサブセットのみを分析する複数のワークフローに分析を分割したりするなど、一度に分析されるコードの量を減らすことで、分析時間を短縮できます。

Java、C、C++、C# などのコンパイルされた言語の場合、{% data variables.product.prodname_codeql %} はワークフローの実行中に作成されたすべてのコードを分析します。 分析するコードの量を制限するには、`run` ブロックで独自のビルドステップを指定して、分析するコードのみをビルドします。 独自のビルドステップの指定と、`pull_request` および `push` イベントの `paths` または `paths-ignore` フィルタの使用を組み合わせて、特定のコードが変更されたときにのみワークフローが実行されるようにすることができます。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)」を参照してください。

指定のビルドなしで {% data variables.product.prodname_codeql %} が分析する Go、JavaScript、Python、TypeScript などのインタプリタ言語の場合、追加の設定オプションを指定して分析するコードの量を制限できます。 詳しい情報については、「[スキャンするディレクトリを指定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#specifying-directories-to-scan)」を参照してください。

上記のように分析を複数のワークフローに分割する場合でも、リポジトリ内のすべてのコードを分析する `schedule` で実行されるワークフローを少なくとも 1 つ用意することをお勧めします。 {% data variables.product.prodname_codeql %} はコンポーネント間のデータフローを分析するため、一部の複雑なセキュリティ動作は完全なビルドでのみ検出される場合があります。

#### `schedule` イベント中にのみ実行する

それでも分析が遅すぎるために、`push` または `pull_request` イベント中に実行できない場合は、`schedule` イベントでのみ分析をトリガーすることをお勧めします。 詳しい情報については、「[イベント](/actions/learn-github-actions/introduction-to-github-actions#events)」を参照してください。

### エラー: 「サーバーエラー」

サーバーエラーにより {% data variables.product.prodname_code_scanning %} のワークフローが実行できない場合は、ワークフローを再実行してください。 問題が解決しない場合は、{% data variables.contact.contact_support %} にお問い合わせください。

### エラー:「ディスク不足」または「メモリ不足」

On very large projects, {% data variables.product.prodname_codeql %} may run out of disk or memory on the hosted {% data variables.product.prodname_actions %} runner. この問題が発生した場合は、ランナーのメモリを増やしてみてください。

### Warning: "git checkout HEAD^2 is no longer necessary"

If you're using an old {% data variables.product.prodname_codeql %} workflow you may get the following warning in the output from the "Initialize {% data variables.product.prodname_codeql %}" action:

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

Fix this by removing the following lines from the {% data variables.product.prodname_codeql %} workflow. These lines were included in the `steps` section of the `Analyze` job in initial versions of the {% data variables.product.prodname_codeql %} workflow.

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

The revised `steps` section of the workflow will look like this:

```yaml
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      # Initializes the {% data variables.product.prodname_codeql %} tools for scanning.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1

      ...
```

{% data variables.product.prodname_codeql %} ワークフローファイルの編集に関する詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を編集する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。
