---
title: Troubleshooting the CodeQL workflow
shortTitle: Troubleshooting CodeQL
intro: 'If you''re having problems with {% data variables.product.prodname_code_scanning %}, you can troubleshoot by using these tips for resolving issues.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

### コンパイル言語の自動ビルドの失敗

プロジェクト内のコンパイル言語のコードの自動ビルドが失敗した場合は、次のトラブルシューティングのステップを試してください。

- {% data variables.product.prodname_code_scanning %} ワークフローから `autobuild` ステップを削除し、特定のビルドステップを追加します。 ワークフローの編集に関する詳しい情報は、「[{% data variables.product.prodname_code_scanning %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。 For more information about replacing the `autobuild` step, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

- If your workflow doesn't explicitly specify the languages to analyze, {% data variables.product.prodname_codeql %} implicitly detects the supported languages in your code base. In this configuration, out of the compiled languages C/C++, C#, and Java, {% data variables.product.prodname_codeql %} only analyzes the language with the most source files. Edit the workflow and add a build matrix specifying the languages you want to analyze. The default CodeQL analysis workflow uses such a matrix.

  The following extracts from a workflow show how you can use a matrix within the job strategy to specify languages, and then reference each language within the "Initialize {% data variables.product.prodname_codeql %}" step:

  ```yaml
  jobs:
    analyze:
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

  For more information about editing the workflow, see "[Configuring code scanning](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)."

### ビルド中にコードが見つからない

If your workflow fails with an error `No source code was seen during the build` or `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32`, this indicates that {% data variables.product.prodname_codeql %} was unable to monitor your code. このようなエラーが発生する理由として、次のようなものがあります。

1. 自動言語検出により、サポートされている言語が特定されたが、リポジトリにその言語の分析可能なコードがない。 一般的な例としては、言語検出サービスが `.h` や `.gyp` ファイルなどの特定のプログラミング言語に関連付けられたファイルを見つけたが、対応する実行可能コードがリポジトリに存在しない場合です。 To solve the problem, you can manually define the languages you want to analyze by updating the list of languages in the `language` matrix. たとえば、次の設定では Go と JavaScript のみを分析します。

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below
      # Supported options are:
      # ['csharp', 'cpp', 'go', 'java', 'javascript', 'python']
      language: ['go', 'javascript']
  ```
For more information, see the workflow extract in "[Automatic build for a compiled language fails](#automatic-build-for-a-compiled-language-fails)" above.
1. {% data variables.product.prodname_code_scanning %} ワークフローはコンパイルされた言語（C、C++、C#、または Java）を分析しているが、コードはコンパイルされていない。 デフォルトでは、{% data variables.product.prodname_codeql %} 分析ワークフローには `autobuild` ステップが含まれていますが、このステップはベスト エフォートプロセスを表しており、特定のビルド環境によっては、コードのビルドに失敗する可能性があります。 `autobuild` ステップを削除し、ビルドステップを手動で含めない場合も、コンパイルが失敗する可能性があります。  For more information about specifying build steps, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."
1. ワークフローはコンパイルされた言語（C、C++、C#、または Java）を分析しているが、パフォーマンスを向上させるためにビルドの一部がキャッシュされている（Gradle や Bazel などのビルドシステムで発生する可能性が最も高い）。 {% data variables.product.prodname_codeql %} はコンパイラのアクティビティを監視してリポジトリ内のデータフローを理解するため、{% data variables.product.prodname_codeql %} は分析を実行するために完全なビルドを実行する必要があります。
1. ワークフローはコンパイルされた言語（C、C++、C＃、または Java）を分析しているが、ワークフローの `init` ステップと `analyze` ステップの間でコンパイルが行われていない。 {% data variables.product.prodname_codeql %} では、コンパイラのアクティビティを監視して分析を実行するために、これらの 2 つのステップ間でビルドを行う必要があります。
1. コンパイルされたコード（C、C++、C#、または Java）は正常にコンパイルされたが、{% data variables.product.prodname_codeql %} がコンパイラの呼び出しを検出できない。 The most common causes are:

   * Running your build process in a separate container to {% data variables.product.prodname_codeql %}. For more information, see "[Running CodeQL code scanning in a container](/github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-a-container)."
   * Building using a distributed build system external to GitHub Actions, using a daemon process.
   * {% data variables.product.prodname_codeql %} isn't aware of the specific compiler you are using.

  For .NET Framework projects, and for C# projects using either `dotnet build` or `msbuild` that target .NET Core 2, you should specify `/p:UseSharedCompilation=false` in your workflow's `run` step, when you build your code. .NET Core 3.0 以降では、`UseSharedCompilation` フラグは必要ありません。

  For example, the following configuration for C# will pass the flag during the first build step.

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false 
   ```

  特定のコンパイラまたは設定で別の問題が発生した場合は、{% data variables.contact.contact_support %} までお問い合わせください。

For more information about specifying build steps, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

### リポジトリの一部が `autobuild` を使用して分析されない

{% data variables.product.prodname_codeql %} の `autobuild` 機能は、ヒューリスティックスを使用してリポジトリにコードをビルドしますが、このアプローチでは、リポジトリの分析が不完全になることがあります。 たとえば、単一のリポジトリに複数の `build.sh` コマンドが存在する場合、`autobuild` ステップはコマンドの 1 つしか実行しないため、分析が完了しない場合があります。 これを解決するには、`autobuild` ステップを、分析するすべてのソースコードをビルドするビルドステップに置き換えます。 For more information, see "[Configuring the {% data variables.product.prodname_codeql %} workflow for compiled languages](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)."

### エラー: 「サーバーエラー」

サーバーエラーにより {% data variables.product.prodname_code_scanning %} のワークフローが実行できない場合は、ワークフローを再実行してください。 問題が解決しない場合は、{% data variables.contact.contact_support %} にお問い合わせください。

### エラー:「ディスク不足」または「メモリ不足」
On very large projects,

{% data variables.product.prodname_codeql %} may run out of disk or memory on the runner.
{% if currentVersion == "free-pro-team@latest" %}If you encounter this issue on a hosted {% data variables.product.prodname_actions %} runner, contact {% data variables.contact.contact_support %} so that we can investigate the problem.
{% else %}If you encounter this issue, try increasing the memory on the runner.{% endif %}

### ビルドに時間がかかりすぎる

{% data variables.product.prodname_codeql %} 分析でのビルドの実行に時間がかかりすぎる場合は、ビルド時間を短縮するための方法がいくつかあります。

#### Increase the memory or cores

If you use self-hosted runners to run {% data variables.product.prodname_codeql %} analysis, you can increase the memory or the number of cores on those runners.

#### マトリックスビルドを使用して分析を並列化する

The default {% data variables.product.prodname_codeql_workflow %} uses a build matrix of languages, which causes the analysis of each language to run in parallel. If you have specified the languages you want to analyze directly in the "Initialize CodeQL" step, analysis of each language will happen sequentially. To speed up analysis of multiple languages, modify your workflow to use a matrix. For more information, see the workflow extract in "[Automatic build for a compiled language fails](#automatic-build-for-a-compiled-language-fails)" above.

#### 1 つのワークフローで分析されるコードの量を減らす

一般的に、分析時間は分析されるコードの量に比例します。 たとえば、テストコードを除外したり、一度にコードのサブセットのみを分析する複数のワークフローに分析を分割したりするなど、一度に分析されるコードの量を減らすことで、分析時間を短縮できます。

Java、C、C++、C# などのコンパイルされた言語の場合、{% data variables.product.prodname_codeql %} はワークフローの実行中に作成されたすべてのコードを分析します。 分析するコードの量を制限するには、`run` ブロックで独自のビルドステップを指定して、分析するコードのみをビルドします。 独自のビルドステップの指定と、`pull_request` および `push` イベントの `paths` または `paths-ignore` フィルタの使用を組み合わせて、特定のコードが変更されたときにのみワークフローが実行されるようにすることができます。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)」を参照してください。

指定のビルドなしで {% data variables.product.prodname_codeql %} が分析する Go、JavaScript、Python、TypeScript などのインタプリタ言語の場合、追加の設定オプションを指定して分析するコードの量を制限できます。 詳しい情報については、「[スキャンするディレクトリを指定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#specifying-directories-to-scan)」を参照してください。

上記のように分析を複数のワークフローに分割する場合でも、リポジトリ内のすべてのコードを分析する `schedule` で実行されるワークフローを少なくとも 1 つ用意することをお勧めします。 {% data variables.product.prodname_codeql %} はコンポーネント間のデータフローを分析するため、一部の複雑なセキュリティ動作は完全なビルドでのみ検出される場合があります。

#### `schedule` イベント中にのみ実行する

それでも分析が遅すぎるために、`push` または `pull_request` イベント中に実行できない場合は、`schedule` イベントでのみ分析をトリガーすることをお勧めします。 For more information, see "[Events](/actions/learn-github-actions/introduction-to-github-actions#events)."

{% if currentVersion == "free-pro-team@latest" %}
### Results differ between analysis platforms

If you are analyzing code written in Python, you may see different results depending on whether you run the {% data variables.product.prodname_codeql_workflow %} on Linux, macOS, or Windows.

On GitHub-hosted runners that use Linux, the {% data variables.product.prodname_codeql_workflow %} tries to install and analyze Python dependencies, which could lead to more results. To disable the auto-install, add `setup-python-dependencies: false` to the "Initialize CodeQL" step of the workflow. For more information about configuring the analysis of Python dependencies, see "[Analyzing Python dependencies](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning#analyzing-python-dependencies)."

{% endif %}
