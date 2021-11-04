---
title: CodeQL ワークフローのトラブルシューティング
shortTitle: CodeQLワークフローのトラブルシューティング
intro: '{% data variables.product.prodname_code_scanning %} で問題が生じている場合、ここに掲載されている問題解決のためのヒントを使ってトラブルを解決できます。'
product: '{% data reusables.gated-features.code-scanning %}'
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
---

<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

## デバッグ用の詳細なログを生成する

詳細なログ出力を生成するため、ステップのデバッグロギングを有効化することができます。 詳しい情報については、「[デバッグログの有効化](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)」を参照してください。

## コンパイル言語の自動ビルドの失敗

プロジェクト内のコンパイル言語のコードの自動ビルドが失敗した場合は、次のトラブルシューティングのステップを試してください。

- {% data variables.product.prodname_code_scanning %} ワークフローから `autobuild` ステップを削除し、特定のビルドステップを追加します。 ワークフローの編集に関する詳しい情報は、「[{% data variables.product.prodname_code_scanning %} を設定する](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。 `autobuild` ステップの置き換えに関する詳細は、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

- ワークフローが解析する言語を明示的に指定していない場合、{% data variables.product.prodname_codeql %} はコードベースでサポートされている言語を暗黙的に検出します。 この設定では、コンパイル型言語である C/C++、C#、Java のうち、{% data variables.product.prodname_codeql %} はソースファイルの数が最も多い言語のみを解析します。 ワークフローを編集し、解析する言語を指定したビルドマトリクスを追加してください。 デフォルトの CodeQL 解析では、こうしたマトリクスを使用しています。

  以下はワークフローからの抜粋で、まず言語を指定するジョブ戦略におけるマトリクスの使用法を示し、次に「Initialize {% data variables.product.prodname_codeql %}」のステップで各言語を参照しています。

  ```yaml
  jobs:
    analyze:{% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}
      permissions:
        security-events: write
        actions: read{% endif %}
      ...
      strategy:
        fail-fast: false
        matrix:
          language: ['csharp', 'cpp', 'javascript']

      steps:
      ...
        - name: Initialize {% data variables.product.prodname_codeql %}
          uses: github/codeql-action/init@v1
          with:
            languages: {% raw %}${{ matrix.language }}{% endraw %}
  ```

  ワークフローの編集に関する詳しい情報については、「[コードスキャンを設定する](/code-security/secure-coding/configuring-code-scanning)」を参照してください。

## ビルド中にコードが見つからない

ワークフローでエラー `No source code was seen during the build` または `The process '/opt/hostedtoolcache/CodeQL/0.0.0-20200630/x64/codeql/codeql' failed with exit code 32` が発生した場合、{% data variables.product.prodname_codeql %} がコードを監視できなかったことを示しています。 このようなエラーが発生する理由として、次のようなものがあります。

1. 自動言語検出により、サポートされている言語が特定されたが、リポジトリにその言語の分析可能なコードがない。 一般的な例としては、言語検出サービスが `.h` や `.gyp` ファイルなどの特定のプログラミング言語に関連付けられたファイルを見つけたが、対応する実行可能コードがリポジトリに存在しない場合です。 この問題を解決するには、`language` マトリクスにある言語のリストを更新し、解析する言語を手動で定義します。 たとえば、次の設定では Go と JavaScript のみを分析します。

  ```yaml
  strategy:
    fail-fast: false
    matrix:
      # Override automatic language detection by changing the list below.
      # Supported options are listed in a comment in the default workflow.
      language: ['go', 'javascript']
  ```

   詳しい情報については、上記「[コンパイル言語の自動ビルドの失敗](#automatic-build-for-a-compiled-language-fails)」にあるワークフローの抜粋を参照してください。
1. {% data variables.product.prodname_code_scanning %} ワークフローはコンパイルされた言語（C、C++、C#、または Java）を分析しているが、コードはコンパイルされていない。 デフォルトでは、{% data variables.product.prodname_codeql %} 分析ワークフローには `autobuild` ステップが含まれていますが、このステップはベスト エフォートプロセスを表しており、特定のビルド環境によっては、コードのビルドに失敗する可能性があります。 `autobuild` ステップを削除し、ビルドステップを手動で含めない場合も、コンパイルが失敗する可能性があります。  ビルドステップの指定に関する詳細は、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。
1. ワークフローはコンパイルされた言語（C、C++、C#、または Java）を分析しているが、パフォーマンスを向上させるためにビルドの一部がキャッシュされている（Gradle や Bazel などのビルドシステムで発生する可能性が最も高い）。 {% data variables.product.prodname_codeql %} はコンパイラのアクティビティを監視してリポジトリ内のデータフローを理解するため、{% data variables.product.prodname_codeql %} は分析を実行するために完全なビルドを実行する必要があります。
1. ワークフローはコンパイルされた言語（C、C++、C＃、または Java）を分析しているが、ワークフローの `init` ステップと `analyze` ステップの間でコンパイルが行われていない。 {% data variables.product.prodname_codeql %} では、コンパイラのアクティビティを監視して分析を実行するために、これらの 2 つのステップ間でビルドを行う必要があります。
1. コンパイルされたコード（C、C++、C#、または Java）は正常にコンパイルされたが、{% data variables.product.prodname_codeql %} がコンパイラの呼び出しを検出できない。 一般的な原因は次のようなものです。

   * ビルドプロセスを {% data variables.product.prodname_codeql %} とは別のコンテナで実行している。 詳しい情報については、「[コンテナで CodeQL コードスキャンを実行する](/code-security/secure-coding/running-codeql-code-scanning-in-a-container)」を参照してください。
   * デーモンプロセスを使用して、GitHub Actions の外部で分散ビルドシステムによりビルドしている。
   * {% data variables.product.prodname_codeql %} は、使用されているコンパイラを認識していない。

  .NET Framework プロジェクト、および .NET Core 2 をターゲットとする `dotnet build` または `msbuild` を使用する C# プロジェクトでは、コードをビルドするときに、ワークフローの `run` ステップで `/p:UseSharedCompilation=false` を指定する必要があります。 .NET Core 3.0 以降では、`UseSharedCompilation` フラグは必要ありません。

  たとえば、次の C# に対する設定では、最初のビルドステップ中にフラグが渡されます。

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false 
   ```

  特定のコンパイラまたは設定で別の問題が発生した場合は、{% data variables.contact.contact_support %} までお問い合わせください。

ビルドステップの指定に関する詳細は、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

{% ifversion fpt or ghes > 3.1  or ghae-next or ghec %}
## Lines of code scanned are lower than expected

For compiled languages like C/C++, C#, Go, and Java, {% data variables.product.prodname_codeql %} only scans files that are built during the analysis. Therefore the number of lines of code scanned will be lower than expected if some of the source code isn't compiled correctly. This can happen for several reasons:

1. The {% data variables.product.prodname_codeql %} `autobuild` feature uses heuristics to build the code in a repository. However, sometimes this approach results in an incomplete analysis of a repository. For example, when multiple `build.sh` commands exist in a single repository, the analysis may not be complete since the `autobuild` step will only execute one of the commands, and therefore some source files may not be compiled.
1. Some compilers do not work with {% data variables.product.prodname_codeql %} and can cause issues while analyzing the code. For example, Project Lombok uses non-public compiler APIs to modify compiler behavior. The assumptions used in these compiler modifications are not valid for {% data variables.product.prodname_codeql %}'s Java extractor, so the code cannot be analyzed.

If your {% data variables.product.prodname_codeql %} analysis scans fewer lines of code than expected, there are several approaches you can try to make sure all the necessary source files are compiled.

### Replace the `autobuild` step

Replace the `autobuild` step with the same build commands you would use in production. This makes sure that {% data variables.product.prodname_codeql %} knows exactly how to compile all of the source files you want to scan. 詳しい情報については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

### Inspect the copy of the source files in the {% data variables.product.prodname_codeql %} database
You may be able to understand why some source files haven't been analyzed by inspecting the copy of the source code included with the {% data variables.product.prodname_codeql %} database. To obtain the database from your Actions workflow, add an `upload-artifact` action after the analysis step in your code scanning workflow:
```
- uses: actions/upload-artifact@v2
  with:
    name: codeql-database
    path: ../codeql-database
```
This uploads the database as an actions artifact that you can download to your local machine. For more information, see "[Storing workflow artifacts](/actions/guides/storing-workflow-data-as-artifacts)."

The artifact will contain an archived copy of the source files scanned by {% data variables.product.prodname_codeql %} called _src.zip_. If you compare the source code files in the repository and the files in _src.zip_, you can see which types of file are missing. Once you know what types of file are not being analyzed, it is easier to understand how you may need to change the workflow for {% data variables.product.prodname_codeql %} analysis.

## Extraction errors in the database

The {% data variables.product.prodname_codeql %} team constantly works on critical extraction errors to make sure that all source files can be scanned. However, the {% data variables.product.prodname_codeql %} extractors do occasionally generate errors during database creation. {% data variables.product.prodname_codeql %} provides information about extraction errors and warnings generated during database creation in a log file. The extraction diagnostics information gives an indication of overall database health. Most extractor errors do not significantly impact the analysis. A small number of extractor errors is healthy and typically indicates a good state of analysis.

However, if you see extractor errors in the overwhelming majority of files that were compiled during database creation, you should look into the errors in more detail to try to understand why some source files weren't extracted properly.

{% else %}
## リポジトリの一部が `autobuild` を使用して分析されない

{% data variables.product.prodname_codeql %} の `autobuild` 機能は、ヒューリスティックスを使用してリポジトリにコードをビルドしますが、このアプローチでは、リポジトリの分析が不完全になることがあります。 たとえば、単一のリポジトリに複数の `build.sh` コマンドが存在する場合、`autobuild` ステップはコマンドの 1 つしか実行しないため、分析が完了しない場合があります。 これを解決するには、`autobuild` ステップを、分析するすべてのソースコードをビルドするビルドステップに置き換えます。 詳しい情報については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。
{% endif %}


## ビルドに時間がかかりすぎる

{% data variables.product.prodname_codeql %} 分析でのビルドの実行に時間がかかりすぎる場合は、ビルド時間を短縮するための方法がいくつかあります。

### メモリまたはコアを増やす

セルフホストランナーを使用して {% data variables.product.prodname_codeql %} 解析を実行している場合、ランナーのメモリやコア数を増やすことができます。

### マトリックスビルドを使用して分析を並列化する

デフォルトの {% data variables.product.prodname_codeql_workflow %} は言語のビルドマトリクスを使用しており、これにより各言語の解析が並列で実行される場合があります。 「Initialize CodeQL」ステップで解析する言語を直接指定している場合、各言語の解析は順次行われます。 複数の言語で解析を高速化するには、マトリクスを使用するようワークフローを変更してください。 詳しい情報については、上記「[コンパイル言語の自動ビルドの失敗](#automatic-build-for-a-compiled-language-fails)」にあるワークフローの抜粋を参照してください。

### 1 つのワークフローで分析されるコードの量を減らす

一般的に、分析時間は分析されるコードの量に比例します。 たとえば、テストコードを除外したり、一度にコードのサブセットのみを分析する複数のワークフローに分析を分割したりするなど、一度に分析されるコードの量を減らすことで、分析時間を短縮できます。

Java、C、C++、C# などのコンパイルされた言語の場合、{% data variables.product.prodname_codeql %} はワークフローの実行中に作成されたすべてのコードを分析します。 分析するコードの量を制限するには、`run` ブロックで独自のビルドステップを指定して、分析するコードのみをビルドします。 独自のビルドステップの指定と、`pull_request` および `push` イベントの `paths` または `paths-ignore` フィルタの使用を組み合わせて、特定のコードが変更されたときにのみワークフローが実行されるようにすることができます。 詳細については、「[{% data variables.product.prodname_actions %}のワークフロー構文](/actions/reference/workflow-syntax-for-github-actions#onpushpull_requestpaths)」を参照してください。

指定のビルドなしで {% data variables.product.prodname_codeql %} が分析する Go、JavaScript、Python、TypeScript などのインタプリタ言語の場合、追加の設定オプションを指定して分析するコードの量を制限できます。 詳しい情報については、「[スキャンするディレクトリを指定する](/code-security/secure-coding/configuring-code-scanning#specifying-directories-to-scan)」を参照してください。

上記のように分析を複数のワークフローに分割する場合でも、リポジトリ内のすべてのコードを分析する `schedule` で実行されるワークフローを少なくとも 1 つ用意することをお勧めします。 {% data variables.product.prodname_codeql %} はコンポーネント間のデータフローを分析するため、一部の複雑なセキュリティ動作は完全なビルドでのみ検出される場合があります。

### `schedule` イベント中にのみ実行する

それでも分析が遅すぎるために、`push` または `pull_request` イベント中に実行できない場合は、`schedule` イベントでのみ分析をトリガーすることをお勧めします。 詳しい情報については、「[イベント](/actions/learn-github-actions/introduction-to-github-actions#events)」を参照してください。

{% ifversion fpt or ghec %}
## 分析プラットフォーム間で結果が異なる

Pythonで書かれたコードを分析しているなら、{% data variables.product.prodname_codeql_workflow %}をLinux、macOS、Windowsのいずれで実行しているかによって、異なる結果が得られるかもしれません。

GitHubがホストするLinuxを使用したランナーでは、{% data variables.product.prodname_codeql_workflow %}はPythonの依存関係をインストールして分析しようとし、それによってより多くの結果につながることがあります。 自動インストールを無効にするには、ワークフローの"Initialize CodeQL"ステップに`setup-python-dependencies: false`を追加してください。 Pythonの依存関係の分析の設定に関する詳しい情報については「[Pythonの依存関係の分析](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)」を参照してください。

{% endif %}

## エラー: 「サーバーエラー」

サーバーエラーにより {% data variables.product.prodname_code_scanning %} のワークフローが実行できない場合は、ワークフローを再実行してください。 問題が解決しない場合は、{% data variables.contact.contact_support %} にお問い合わせください。

## エラー:「ディスク不足」または「メモリ不足」

On very large projects, {% data variables.product.prodname_codeql %} may run out of disk or memory on the runner.
{% ifversion fpt or ghec %}ホストされた{% data variables.product.prodname_actions %}ランナーでこの問題が生じた場合は、弊社が問題を調査できるよう{% data variables.contact.contact_support %}に連絡してください。
{% else %}この問題が生じたら、ランナー上のメモリを増やしてみてください。{% endif %}

{% ifversion fpt or ghec %}
## {% data variables.product.prodname_dependabot %}を使用している際のError: 403 "Resource not accessible by integration"

{% data variables.product.prodname_dependabot %}は、ワークフローの実行をトリガーする際に信頼できないと見なされ、ワークフローは読み取りのみのスコープで実行されます。 ブランチに対する{% data variables.product.prodname_code_scanning %}の結果をアップロードするには、通常`security_events: write`スコープが必要になります。 ただし、`pull_request`イベントがアクションの実行をトリガーした際には、{% data variables.product.prodname_code_scanning %}初音に結果のアップロードを許可します。 これが、{% data variables.product.prodname_dependabot %}ブランチでは`push`イベントの代わりに`pull_request`イベントを使うことをおすすめする理由です。

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

### デフォルトブランチで分析が引き続き失敗する

{% data variables.product.prodname_codeql_workflow %}がデフォルトブランチに対するコミットで依然として失敗するなら、以下を確認してください。
- {% data variables.product.prodname_dependabot %}がそのコミットを作成したか
- コミットを含むPull Requestが`@dependabot squash and merge`を使ってマージされたかどうか

この種のマージコミットは{% data variables.product.prodname_dependabot %}によって作成されるので、このコミットで実行されるワークフローは読み取りのみの権限を持つことになります。 {% data variables.product.prodname_code_scanning %}と{% data variables.product.prodname_dependabot %}のセキュリティ更新またはバージョン更新をリポジトリで有効化した場合は、{% data variables.product.prodname_dependabot %}の`@dependabot squash and merge`コマンドは使わないことをおすすめします。 その代わりに、リポジトリで自動マージを有効化できます。 これは、すべての必須レビューが満たされ、ステータスチェックをパスしたら、Pyll Requestは自動的にマージされるということです。 自動マージの有効化に関する詳しい情報については「[Pull Requestの自動マージ](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request#enabling-auto-merge)」を参照してください。
{% endif %}

## Warning: "git checkout HEAD^2 is no longer necessary"

古い{% data variables.product.prodname_codeql %}ワークフローを使っていると、"Initialize {% data variables.product.prodname_codeql %}"アクションからの出力に以下の警告が含まれていることがあります。

```
Warning: 1 issue was detected with this workflow: git checkout HEAD^2 is no longer 
necessary. Please remove this step as Code Scanning recommends analyzing the merge 
commit for best results.
```

これは、以下の行を{% data variables.product.prodname_codeql %}ワークフローから削除することによって修正してください。 これらの行は、初期バージョンの{% data variables.product.prodname_codeql %}ワークフロー中の`Analyze`ジョブの`steps`セクションに含まれています。

```yaml
        with:
          # これがPull Requestであればheadをチェックアウトできるよう、
          # 少なくとも直接の親をフェッチしなければならない。
          fetch-depth: 2

      # この実行がPull Requestのイベントでトリガされたのなら、
      # マージコミットの代わりにPull Requestのheadをチェックアウトする。
      - run: git checkout HEAD^2
        if: {% raw %}${{ github.event_name == 'pull_request' }}{% endraw %}
```

ワークフローの修正された`steps`セクションは以下のようになります。

```yaml
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      # {% data variables.product.prodname_codeql %}ツールをスキャンニングのために初期化。
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: github/codeql-action/init@v1

      ...
```

{% data variables.product.prodname_codeql %} ワークフローファイルの編集に関する詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を編集する](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。
