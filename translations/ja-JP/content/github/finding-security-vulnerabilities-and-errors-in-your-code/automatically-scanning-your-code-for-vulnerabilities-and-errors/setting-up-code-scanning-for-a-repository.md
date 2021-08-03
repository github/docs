---
title: リポジトリに対するコードスキャンをセットアップする
shortTitle: コードスキャンを設定する
intro: 'リポジトリにワークフローを追加することにより、{% data variables.product.prodname_code_scanning %} をセットアップできます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
versions:
  enterprise-server: '2.22'
topics:
  - Security
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
---
<!--See /content/code-security/secure-coding for the latest version of this article -->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### {% data variables.product.prodname_code_scanning %} のセットアップ用オプション

{% data variables.product.prodname_code_scanning %} アラートの生成方法、および使用するツールを、リポジトリレベルで決定できます。 {% data variables.product.product_name %} は、{% data variables.product.prodname_codeql %} 解析のために完全に統合されたサポートを提供すると共に、サードパーティーのツールを使用した解析もサポートします。 詳しい情報については、「[{% data variables.product.prodname_codeql %} について](/github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning#about-codeql)」を参照してください。

{% data reusables.code-scanning.enabling-options %}

### アクションを使用して {% data variables.product.prodname_code_scanning %} をセットアップする

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. To the right of "{% data variables.product.prodname_code_scanning_capc %} alerts", click **Set up {% data variables.product.prodname_code_scanning %}**. ![セキュリティの概要にある、[{% data variables.product.prodname_code_scanning_capc %}] の右側の [{% data variables.product.prodname_code_scanning %}] ボタン](/assets/images/help/security/overview-set-up-code-scanning.png)
4. [Get started with {% data variables.product.prodname_code_scanning %}] で、{% data variables.product.prodname_codeql_workflow %} またはサードパーティーのワークフローの [**Set up this workflow**] をクリックします。 ![[Get started with {% data variables.product.prodname_code_scanning %}] のヘッディングの下にある [Set up this workflow] ボタン](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)
5. {% data variables.product.prodname_code_scanning %} がコードをスキャンする方法をカスタマイズするため、ワークフローを編集します。

   通常は、何も変更せずに {% data variables.product.prodname_codeql_workflow %} をコミットできます。 ただし、サードパーティのワークフローは、その多くで追加設定が必要なため、コミットする前にワークフローのコメントをお読みください。

   詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)」を参照してください。
6. [**Start commit**] ドロップダウンを使用して、コミットメッセージを入力します。 ![コミットを開始する](/assets/images/help/repository/start-commit-commit-new-file.png)
7. デフォルトブランチに直接コミットするか、新しいブランチを作成してプルリクエストを開始するかを選択します。 ![コミット先を選択する](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. [**Commit new file**] または [**Propose new file**] をクリックします。

デフォルトの {% data variables.product.prodname_codeql_workflow %} では、{% data variables.product.prodname_code_scanning %} は、デフォルトブランチまたは保護されたブランチに変更をプッシュするたび、あるいはデフォルトブランチにプルリクエストを生成するたびに、コードを解析するよう設定されています。 その結果として、{% data variables.product.prodname_code_scanning %} が開始されます。

### {% data variables.product.prodname_code_scanning %} の一括セットアップ
You can set up {% data variables.product.prodname_code_scanning %} in many repositories at once using a script. 複数のリポジトリに {% data variables.product.prodname_actions %} ワークフローを追加するためのプルリクエストを発行するスクリプトの例が、[`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) リポジトリにあります。

### {% data variables.product.prodname_code_scanning %} からログ出力を表示する

After setting up {% data variables.product.prodname_code_scanning %} for your repository, you can watch the output of the actions as they run.

{% data reusables.repositories.actions-tab %}

  {% data variables.product.prodname_code_scanning %} ワークフローを実行するためのエントリを含むリストが表示されます。 エントリのテキストは、コミットメッセージに付けるタイトルです。

  ![{% data variables.product.prodname_code_scanning %} ワークフローを表示しているアクションのリスト](/assets/images/help/repository/code-scanning-actions-list.png)

1. {% data variables.product.prodname_code_scanning %} ワークフローのエントリをクリックします。

1. 左側のジョブ名をクリックします。 ここでは例として、[**Analyze (言語)**] をクリックします。

  ![{% data variables.product.prodname_code_scanning %} ワークフローからのログ出力](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. このワークフローの実行時にアクションから出力されるログを確認します。

1. すべてのジョブが完了すると、確認されたすべての {% data variables.product.prodname_code_scanning %} アラートの詳細を表示できます。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

{% note %}

**注釈:** {% data variables.product.prodname_code_scanning %} ワークフローを追加するためのプルリクエストをリポジトリに発行すると、そのプルリクエストからのアラートは、そのプルリクエストがマージされるまで {% data variables.product.prodname_code_scanning_capc %} ページに直接表示されません。 アラートが見つかった場合は、プルリクエストがマージされる前に、{% data variables.product.prodname_code_scanning_capc %} ページのバナーにある [**_(数字)_ alerts found**] をクリックしてそのアラートを表示できます。

  ![[n alerts found] のリンクをクリック](/assets/images/enterprise/3.1/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

### プルリクエストのチェックを理解する

Each {% data variables.product.prodname_code_scanning %} workflow you set to run on pull requests always has at least two entries listed in the checks section of a pull request. ワークフローの解析ジョブごとに 1 つのエントリがあり、最後のエントリは解析結果です。

{% data variables.product.prodname_code_scanning %} 解析チェックの名前は、「ツール名 / ジョブ名 (トリガー)」という形式になります。 たとえば、C++ のコードの {% data variables.product.prodname_codeql %} 解析には、「{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)」のエントリがあります。 {% data variables.product.prodname_code_scanning %} 解析エントリで [**Details**] をクリックして、ログのデータを表示できます。 これにより、解析ジョブが失敗した場合に問題をデバッグできます。 たとえば、コンパイル型言語の {% data variables.product.prodname_code_scanning %} 解析では、アクションがコードをビルドできなかった場合に解析ジョブが失敗します。

  ![{% data variables.product.prodname_code_scanning %} プルリクエストのチェック](/assets/images/help/repository/code-scanning-pr-checks.png)

{% data variables.product.prodname_code_scanning %} ジョブが完了すると、
{% data variables.product.prodname_dotcom %} はプルリクエストにより追加されたアラートがないか確認し、チェックのリストに「{% data variables.product.prodname_code_scanning_capc %} の結果 / ツール名」のエントリを追加します。 {% data variables.product.prodname_code_scanning %} が 1 回でも実行された後は、[**Details**] をクリックして解析結果を表示できます。 プルリクエストを使用してリポジトリに {% data variables.product.prodname_code_scanning %} を追加した場合、「{% data variables.product.prodname_code_scanning_capc %} 結果 / ツール名」チェックの [**Details**] をクリックすると最初は「Missing analysis」のメッセージが表示されます。

  ![コミットメッセージの解析がありません](/assets/images/help/repository/code-scanning-missing-analysis.png)

#### 「missing analysis」のメッセージが出る理由

プルリクエストのコードを解析した後、{% data variables.product.prodname_code_scanning %} はトピックブランチ (プルリクエストを作成するために使用したブランチ) の解析と、ベースブランチ (プルリクエストをマージするブランチ) の解析を比較する必要があります。 これにより、{% data variables.product.prodname_code_scanning %} はプルリクエストにより新しく発生したアラートはどれか、ベースブランチに既に存在していたアラートはどれか、また既存のアラートがプルリクエストの変更により修正されたかを測定できます。 始めにプルリクエストを使用してリポジトリに {% data variables.product.prodname_code_scanning %} を追加した段階では、ベースブランチはまだ解析されていないので、こうした情報を測定できません。 この場合、プルリクエストの結果チェックをくりっくすると、「Missing analysis for base commit SHA-HASH (ベースコミット SHA-HASH の解析がありません)」というメッセージが表示されます。

この他にも、プルリクエストのベースブランチに対する直近のコミットで解析結果がないことがあります。 たとえば、次のような場合です。

* プルリクエストがデフォルトブランチ以外のブランチに発行され、このブランチが解析されていない。

  ブランチがスキャン済みかを確認するには、{% data variables.product.prodname_code_scanning_capc %} ページに移動し、[**Branch**] ドロップダウンをクリックして該当するブランチを選択します。

  ![[Branch] ドロップダウンメニューからブランチを選択](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-dropdown.png)

  この状況における解決策は、そのブランチの {% data variables.product.prodname_code_scanning %} ワークフローにある `on:push` と `on:pull_request` にベースブランチの名前を追加してから、スキャンするオープンなプルリクエストを更新するよう変更することです。

* プルリクエストのベースブランチへの直近のコミットが現在解析中で、解析がまだ利用できない。

  数分待ってからプルリクエストに変更をプッシュして、{% data variables.product.prodname_code_scanning %} を再トリガーします。

* ベースブランチの直近のコミットを解析中にエラーが発生し、そのコミットの解析ができない。

  ちょっとした変更をベースブランチにマージして、この最新のコミットで {% data variables.product.prodname_code_scanning %} をトリガーしてから、プルリクエストに変更をプッシュして {% data variables.product.prodname_code_scanning %} を再トリガーします。

### 次のステップ

After setting up {% data variables.product.prodname_code_scanning %}, and allowing its actions to complete, you can:

- リポジトリに対して生成された {% data variables.product.prodname_code_scanning %} アラートをすべて表示する。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)」を参照してください。
- {% data variables.product.prodname_code_scanning %} をセットアップ後にサブミットしたプルリクエストに対して生成されたアラートを表示する。 詳しい情報については、「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/github/finding-security-vulnerabilities-and-errors-in-your-code/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。
- 実行完了の通知を設定する。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)」を参照してください。
- {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} の初期セットアップで発生した問題を調査する。 詳しい情報については、「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-the-codeql-workflow)」を参照してください。
- {% data variables.product.prodname_code_scanning %} がリポジトリ内のコードをスキャンする方法をカスタマイズする。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を設定する](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)」を参照してください。
