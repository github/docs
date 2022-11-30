---
title: リポジトリに対するコードスキャンをセットアップする
shortTitle: コードスキャンを設定する
intro: 'リポジトリにワークフローを追加することにより、{% data variables.product.prodname_code_scanning %} をセットアップできます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Security
---
<!--For this article in earlier GHES versions, see /content/github/finding-security-vulnerabilities-and-errors-in-your-code-->

{% data reusables.code-scanning.beta %}
{% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

### {% data variables.product.prodname_code_scanning %} のセットアップ用オプション

{% data variables.product.prodname_code_scanning %} アラートの生成方法、および使用するツールを、リポジトリレベルで決定できます。 {% data variables.product.product_name %} は、{% data variables.product.prodname_codeql %} 解析のために完全に統合されたサポートを提供すると共に、サードパーティーのツールを使用した解析もサポートします。 詳しい情報については「[{% data variables.product.prodname_codeql %}について](/code-security/secure-coding/about-code-scanning#about-codeql)」を参照してください。

{% data reusables.code-scanning.enabling-options %}

### アクションを使用して {% data variables.product.prodname_code_scanning %} をセットアップする

{% if currentVersion == "free-pro-team@latest" %}アクションを使用して {% data variables.product.prodname_code_scanning %} を実行すると、分数を消費します。 詳しい情報については、「[{% data variables.product.prodname_actions %}の支払いについて](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions)」を参照してください。{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. To the right of "{% data variables.product.prodname_code_scanning_capc %} alerts", click **Set up {% data variables.product.prodname_code_scanning %}**. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}If {% data variables.product.prodname_code_scanning %} is missing, you need to ask an organization owner or repository administrator to enable {% data variables.product.prodname_GH_advanced_security %}. 詳しい情報については、「[Organization のセキュリティおよび分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」または「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。{% endif %} ![セキュリティの概要にある、[{% data variables.product.prodname_code_scanning_capc %}] の右側の [{% data variables.product.prodname_code_scanning %}] ボタン](/assets/images/help/security/overview-set-up-code-scanning.png)
4. [Get started with {% data variables.product.prodname_code_scanning %}] で、{% data variables.product.prodname_codeql_workflow %} またはサードパーティーのワークフローの [**Set up this workflow**] をクリックします。 !["Set up this workflow" button under "Get started with {% data variables.product.prodname_code_scanning %}" heading](/assets/images/help/repository/code-scanning-set-up-this-workflow.png){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}Workflows are only displayed if they are relevant for the programming languages detected in the repository. The {% data variables.product.prodname_codeql_workflow %} is always displayed, but the "Set up this workflow" button is only enabled if {% data variables.product.prodname_codeql %} analysis supports the languages present in the repository.{% endif %}
5. {% data variables.product.prodname_code_scanning %} がコードをスキャンする方法をカスタマイズするため、ワークフローを編集します。

   通常は、何も変更せずに {% data variables.product.prodname_codeql_workflow %} をコミットできます。 ただし、サードパーティのワークフローは、その多くで追加設定が必要なため、コミットする前にワークフローのコメントをお読みください。

   詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を設定する](/code-security/secure-coding/configuring-code-scanning)」を参照してください。
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

1. すべてのジョブが完了すると、確認されたすべての {% data variables.product.prodname_code_scanning %} アラートの詳細を表示できます。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

{% note %}

**注釈:** {% data variables.product.prodname_code_scanning %} ワークフローを追加するためのプルリクエストをリポジトリに発行すると、そのプルリクエストからのアラートは、そのプルリクエストがマージされるまで {% data variables.product.prodname_code_scanning_capc %} ページに直接表示されません。 アラートが見つかった場合は、プルリクエストがマージされる前に、{% data variables.product.prodname_code_scanning_capc %} ページのバナーにある [**_(数字)_ alerts found**] をクリックしてそのアラートを表示できます。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
  ![[n alerts found] のリンクをクリック](/assets/images/help/repository/code-scanning-alerts-found-link.png)
{% else %}
  ![[n alerts found] のリンクをクリック](/assets/images/enterprise/3.1/help/repository/code-scanning-alerts-found-link.png)
{% endif %}

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

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1"%}
  ![[Branch] ドロップダウンメニューからブランチを選択](/assets/images/help/repository/code-scanning-branch-dropdown.png)
{% else %}
  ![[Branch] ドロップダウンメニューからブランチを選択](/assets/images/enterprise/3.1/help/repository/code-scanning-branch-dropdown.png)
{% endif %}

  この状況における解決策は、そのブランチの {% data variables.product.prodname_code_scanning %} ワークフローにある `on:push` と `on:pull_request` にベースブランチの名前を追加してから、スキャンするオープンなプルリクエストを更新するよう変更することです。

* プルリクエストのベースブランチへの直近のコミットが現在解析中で、解析がまだ利用できない。

  数分待ってからプルリクエストに変更をプッシュして、{% data variables.product.prodname_code_scanning %} を再トリガーします。

* ベースブランチの直近のコミットを解析中にエラーが発生し、そのコミットの解析ができない。

  ちょっとした変更をベースブランチにマージして、この最新のコミットで {% data variables.product.prodname_code_scanning %} をトリガーしてから、プルリクエストに変更をプッシュして {% data variables.product.prodname_code_scanning %} を再トリガーします。

### 次のステップ

After setting up {% data variables.product.prodname_code_scanning %}, and allowing its actions to complete, you can:

- リポジトリに対して生成された {% data variables.product.prodname_code_scanning %} アラートをすべて表示する。 詳しい情報については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートを管理する](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。
- {% data variables.product.prodname_code_scanning %} をセットアップ後にサブミットしたプルリクエストに対して生成されたアラートを表示する。 詳しい情報については、「[プルリクエストで {% data variables.product.prodname_code_scanning %} アラートをトリガーする](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。
- 実行完了の通知を設定する。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)」を参照してください。
- {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} の初期セットアップで発生した問題を調査する。 詳しい情報については、「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/code-security/secure-coding/troubleshooting-the-codeql-workflow)」を参照してください。
- {% data variables.product.prodname_code_scanning %} がリポジトリ内のコードをスキャンする方法をカスタマイズする。 詳しい情報については、「[{% data variables.product.prodname_code_scanning %} を設定する](/code-security/secure-coding/configuring-code-scanning)」を参照してください。
