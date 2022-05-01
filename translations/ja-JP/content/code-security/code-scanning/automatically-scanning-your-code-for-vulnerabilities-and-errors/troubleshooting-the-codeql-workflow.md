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


{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.not-available %}

{% ifversion ghes or ghae %}
{% note %}

**ノート:** この記事は、{% data variables.product.product_name %}のこのバージョンにおける初期リリースに含まれる、このバージョンのCodeQLアクション及び関連するCodeQL CLIバンドルで利用できる機能について説明しています。 Enterpriseでさらに新しいバージョンのCodeQLアクションを使用しているなら、最新の機能に関する情報については[{% data variables.product.prodname_ghe_cloud %}の記事](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow)を参照してください。 {% ifversion not ghae %} 最新バージョンの利用に関する詳しい情報については「[アプライアンスのコードスキャンニングの設定](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)」を参照してください。{% endif %}

{% endnote %}
{% endif %}

## デバッグ用の詳細なログを生成する

詳細なログ出力を生成するため、ステップのデバッグロギングを有効化することができます。 詳しい情報については、「[デバッグログの有効化](/actions/managing-workflow-runs/enabling-debug-logging#enabling-step-debug-logging)」を参照してください。

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5601 %}

## {% data variables.product.prodname_codeql %}のデバッグ成果物の作成

デバッグ設定フラグを設定すれば、{% data variables.product.prodname_codeql %}のデバッグに役立つ成果物を取得できます。 {% data variables.product.prodname_codeql %}ワークフローファイルの`init`ステップを修正して、`debug: true`と設定してください。

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

デバッグ成果物は、`debug-artifacts`という名前の成果物としてワークフローの実行にアップロードされます。 このデータには、{% data variables.product.prodname_codeql %}ログ、{% data variables.product.prodname_codeql %}データベース（群）、ワークフローが生成したSARIFファイル（群）が含まれます。

これらの成果物は、{% data variables.product.prodname_codeql %} Code scanningの問題のデバッグに役立ちます。 GitHubのサポートに連絡すると、このデータを求められることがあります。

{% endif %}

## コンパイル言語の自動ビルドの失敗

プロジェクト内のコンパイル言語のコードの自動ビルドが失敗した場合は、次のトラブルシューティングのステップを試してください。

- {% data variables.product.prodname_code_scanning %} ワークフローから `autobuild` ステップを削除し、特定のビルドステップを追加します。 ワークフローの編集に関する詳しい情報は、「[{% data variables.product.prodname_code_scanning %} を設定する](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。 `autobuild` ステップの置き換えに関する詳細は、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

- ワークフローが解析する言語を明示的に指定していない場合、{% data variables.product.prodname_codeql %} はコードベースでサポートされている言語を暗黙的に検出します。 この設定では、コンパイル型言語である C/C++、C#、Java のうち、{% data variables.product.prodname_codeql %} はソースファイルの数が最も多い言語のみを解析します。 ワークフローを編集し、解析する言語を指定したマトリクスを追加してください。 デフォルトの CodeQL 解析では、こうしたマトリクスを使用しています。

  以下はワークフローからの抜粋で、まず言語を指定するジョブ戦略におけるマトリクスの使用法を示し、次に「Initialize {% data variables.product.prodname_codeql %}」のステップで各言語を参照しています。

  ```yaml
  jobs:
    analyze:{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
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
          uses: {% data reusables.actions.action-codeql-action-init %}
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
      # 以下のリストを変更して、言語の自動検出をオーバーライド
      # サポートされているオプションは、デフォルトのワークフローのコメントにリストされている
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

  .NET Framework プロジェクト、および`dotnet build` または `msbuild` を使用する C# プロジェクトでは、コードをビルドするときに、ワークフローの `run` ステップで `/p:UseSharedCompilation=false` を指定する必要があります。

  たとえば、次の C# に対する設定では、最初のビルドステップ中にフラグが渡されます。

   ``` yaml
   - run: |
       dotnet build /p:UseSharedCompilation=false
   ```

  特定のコンパイラまたは設定で別の問題が発生した場合は、{% data variables.contact.contact_support %} までお問い合わせください。

ビルドステップの指定に関する詳細は、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

{% ifversion fpt or ghes > 3.1  or ghae or ghec %}
## スキャンされたコードの行数が期待よりも少ない

C/C++、C#、Go、Javaなどのコンパイル言語については、{% data variables.product.prodname_codeql %}は分析の際にビルドされるファイルだけをスキャンします。 したがって、正しくコンパイルされなかったソースコードがある場合、スキャンされるコードの行数は期待よりも少なくなります。 これが生じるにはいくつかの理由があります。

1. {% data variables.product.prodname_codeql %}の`autobuild`機能が、リポジトリ中のコードをビルドするのにヒューリスティックスを使う。 しかし、このアプローチではリポジトリの分析が不完全に終わることがあります。 たとえば単一のリポジトリ中に複数の`build.sh`コマンドがある場合、`autobuild`ステップがそれらのコマンドの1つだけを実行するため、コンパイルされないソースファイルがでてくることによって、分析が完全ではなくなるかもしれません。
1. {% data variables.product.prodname_codeql %}では動作しないコンパイラがあり、コードの分析の際に問題が生じることがあります。 たとえばProject Lombokは非公開のコンパイラAPIを使ってコンパイラの動作を変更しています。 これらのコンパイラの変更で使われている推定は{% data variables.product.prodname_codeql %}のJava extractorでは有効ではないため、コードは分析できません。

{% data variables.product.prodname_codeql %}分析が期待よりも少ないコードの行数しかスキャンしない場合、必要なソースファイルが確実にすべてコンパイルされるようにするために試せる方法がいくつかあります。

### `autobuild`ステップの置き換え

`autobuild`ステップを本番環境で使っているのと同じビルドコマンドで置き換えてください。 こうすることで、スキャンしたいすべてのソースファイルをコンパイルする正確な方法を{% data variables.product.prodname_codeql %}が知ることができます。 詳しい情報については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。

### {% data variables.product.prodname_codeql %}コードベース中にあるソースファイルのコピーの検査
{% data variables.product.prodname_codeql %}データベース中に含まれているソースコードのコピーを調べることで、分析されなかったソースファイルがあるのはなぜなのかを知ることができるかもしれません。 Actionsワークフローからデータベースを取得するには、{% data variables.product.prodname_codeql %}ワークフローファイルの`init`ステップを修正し、`debug: true`を設定してください。

```yaml
- name: Initialize CodeQL
  uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    debug: true
```

これで、データベースがアクションの成果物としてアップロードされ、ローカルマシンにダウンロードできるようになります。 詳しい情報については「[ワークフローの成果物の保存](/actions/guides/storing-workflow-data-as-artifacts)」を参照してください。

成果物には、{% data variables.product.prodname_codeql %}によってスキャンされたソースのアーカイブされたコピーが_src.zip_という名前で含まれます。 リポジトリ中のソースコードファイルと_src.zip_中のファイルを比較すれば、どういった種類のファイルが欠けているかが分かります。 分析されなかったファイルの種類が分かれば、{% data variables.product.prodname_codeql %}分析のためのワークフローをどのように変更しなければならないかは簡単に理解できるようになります。

## 生成されたコードで見つかったアラート

{% data reusables.code-scanning.alerts-found-in-generated-code %}


## データベース中の抽出エラー

{% data variables.product.prodname_codeql %}チームは、すべてのそー祖ファイルが確実にスキャンできるようにするため、重要な抽出エラーに取り組んでいます。 とはいえ、{% data variables.product.prodname_codeql %}の抽出部は、データベースの生成時にエラーを生成する事があります。 {% data variables.product.prodname_codeql %}は、データベースの生成の間に生成された抽出エラーと警告に関する情報を、ログファイル中に提供します。 抽出の診断情報は、全体的なデータベースの健全性を示します。 ほとんどの抽出部のエラーは、分析に大きな影響を与えません。 少数の抽出部のエラーは健全なもので、通常は良好な分析状況を示します。

ただし、データベースの生成の間にコンパイルされたファイルの大部分で抽出部のエラーが出ているなら、エラーの詳細をみていくつかのソースファイルが正しく抽出されなかった理由を利用しようとしてみるべきです。

{% else %}
## リポジトリの一部が `autobuild` を使用して分析されない

{% data variables.product.prodname_codeql %} の `autobuild` 機能は、ヒューリスティックスを使用してリポジトリにコードをビルドしますが、このアプローチでは、リポジトリの分析が不完全になることがあります。 たとえば、単一のリポジトリに複数の `build.sh` コマンドが存在する場合、`autobuild` ステップはコマンドの 1 つしか実行しないため、分析が完了しない場合があります。 これを解決するには、`autobuild` ステップを、分析するすべてのソースコードをビルドするビルドステップに置き換えます。 詳しい情報については、「[コンパイル型言語の {% data variables.product.prodname_codeql %} ワークフローを設定する](/code-security/secure-coding/configuring-the-codeql-workflow-for-compiled-languages#adding-build-steps-for-a-compiled-language)」を参照してください。
{% endif %}


## ビルドに時間がかかりすぎる

{% data variables.product.prodname_codeql %} 分析でのビルドの実行に時間がかかりすぎる場合は、ビルド時間を短縮するための方法がいくつかあります。

### メモリまたはコアを増やす

セルフホストランナーを使用して {% data variables.product.prodname_codeql %} 解析を実行している場合、ランナーのメモリやコア数を増やすことができます。

### マトリックスビルドを使用して分析を並列化する

デフォルトの {% data variables.product.prodname_codeql_workflow %} は言語のマトリクスを使用しており、これにより各言語の解析が並列で実行される場合があります。 「Initialize CodeQL」ステップで解析する言語を直接指定している場合、各言語の解析は順次行われます。 複数の言語で解析を高速化するには、マトリクスを使用するようワークフローを変更してください。 詳しい情報については、上記「[コンパイル言語の自動ビルドの失敗](#automatic-build-for-a-compiled-language-fails)」にあるワークフローの抜粋を参照してください。

### 1 つのワークフローで分析されるコードの量を減らす

一般的に、分析時間は分析されるコードの量に比例します。 たとえば、テストコードを除外したり、一度にコードのサブセットのみを分析する複数のワークフローに分析を分割したりするなど、一度に分析されるコードの量を減らすことで、分析時間を短縮できます。

{% data reusables.code-scanning.alerts-found-in-generated-code %}

上記のように分析を複数のワークフローに分割する場合でも、リポジトリ内のすべてのコードを分析する `schedule` で実行されるワークフローを少なくとも 1 つ用意することをお勧めします。 {% data variables.product.prodname_codeql %} はコンポーネント間のデータフローを分析するため、一部の複雑なセキュリティ動作は完全なビルドでのみ検出される場合があります。

### `schedule` イベント中にのみ実行する

それでも分析が遅すぎるために、`push` または `pull_request` イベント中に実行できない場合は、`schedule` イベントでのみ分析をトリガーすることをお勧めします。 詳しい情報については、「[イベント](/actions/learn-github-actions/introduction-to-github-actions#events)」を参照してください。

### ワークフローが実行するクエリスイートの確認

デフォルトでは、各言語で3つの主なクエリスイートがあります。 CodeQLデータベースの構築を最適化し、それでもそのプロセスが長くなりすぎるのであれば、実行するクエリ数を減らすことができます。 デフォルトのクエリスイートは自動的に実行されます。これには、最も誤判定結果の比率が低く、最も高速なセキュリティクエリが含まれます。

デフォルトのクエリに加えて、追加のクエリもしくはクエリスイートを実行することもできます。 実行する追加のクエリスイートもしくは追加のクエリをワークフローが定義しているかは、`queries`要素を使って確認してください。 追加のクエリスイートもしくはクエリを無効化して、試してみることができます。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を設定する](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)」を参照してください。

{% if codeql-ml-queries %}
{% note %}

**ノート:** JavaScriptに対して`security-extended`もしくは`security-and-quality`クエリスイートを実行する場合、クエリの中には実験的な技術を使っているものがあります。 詳しい情報については「[Code scanningアラートについて](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)」を参照してください。
{% endnote %}
{% endif %}

{% ifversion fpt or ghec %}
## 分析プラットフォーム間で異なる結果

Pythonで書かれたコードを分析しているなら、{% data variables.product.prodname_codeql_workflow %}をLinux、macOS、Windowsのいずれで実行しているかによって、異なる結果が得られるかもしれません。

GitHubがホストするLinuxを使用したランナーでは、{% data variables.product.prodname_codeql_workflow %}はPythonの依存関係をインストールして分析しようとし、それによってより多くの結果につながることがあります。 自動インストールを無効にするには、ワークフローの"Initialize CodeQL"ステップに`setup-python-dependencies: false`を追加してください。 Pythonの依存関係の分析の設定に関する詳しい情報については「[Pythonの依存関係の分析](/code-security/secure-coding/configuring-code-scanning#analyzing-python-dependencies)」を参照してください。

{% endif %}

## エラー: 「サーバーエラー」

サーバーエラーにより {% data variables.product.prodname_code_scanning %} のワークフローが実行できない場合は、ワークフローを再実行してください。 問題が解決しない場合は、{% data variables.contact.contact_support %} にお問い合わせください。

## エラー:「ディスク不足」または「メモリ不足」

非常に大きなプロジェクトでは、{% data variables.product.prodname_codeql %}がランナーのディスクあるいはメモリを使い切ってしまうことがあります。
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
        uses: {% data reusables.actions.action-checkout %}

      # {% data variables.product.prodname_codeql %} ツールをスキャンニングのために初期化。.
      - name: Initialize {% data variables.product.prodname_codeql %}
        uses: {% data reusables.actions.action-codeql-action-init %}

      ...
```

{% data variables.product.prodname_codeql %} ワークフローファイルの編集に関する詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を編集する](/code-security/secure-coding/configuring-code-scanning#editing-a-code-scanning-workflow)」を参照してください。
