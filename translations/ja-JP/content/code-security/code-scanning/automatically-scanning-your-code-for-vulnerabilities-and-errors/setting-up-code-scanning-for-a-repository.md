---
title: リポジトリに対するCode scanningをセットアップする
shortTitle: Set up code scanning
intro: 'リポジトリにワークフローを追加することにより、{% data variables.product.prodname_code_scanning %} をセットアップできます。'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'If you have write permissions to a repository, you can set up or configure {% data variables.product.prodname_code_scanning %} for that repository.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/enabling-code-scanning-for-a-repository
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/setting-up-code-scanning-for-a-repository
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Actions
  - Repositories
ms.openlocfilehash: 8abfb992c3369242501350be20cf8e465ce090fa
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/11/2022
ms.locfileid: '148161135'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning-actions %}

## {% data variables.product.prodname_code_scanning %} のセットアップ用オプション

{% data variables.product.prodname_code_scanning %} アラートの生成方法、および使用するツールを、リポジトリレベルで決定できます。 {% data variables.product.product_name %} は、{% data variables.product.prodname_codeql %} 解析のために完全に統合されたサポートを提供すると共に、サードパーティーのツールを使用した解析もサポートします。 詳細については、「[{% data variables.product.prodname_code_scanning %} について](/code-security/secure-coding/about-code-scanning#about-tools-for-code-scanning)」を参照してください。

{% data reusables.code-scanning.enabling-options %}

{% ifversion fpt or ghes > 3.4 or ghae > 3.4 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

{% ifversion ghes or ghae %} {% note %}

**注釈:** CodeQL 分析を使用する場合は、この記事で、このバージョンの {% data variables.product.product_name %} の初期リリースに含まれる CodeQL アクションのバージョンと関連する CodeQL CLI バンドルで使用できる機能について説明していることに注意してください。 企業でより新しいバージョンの CodeQL アクションを使用している場合は、最新の機能の詳細について [{% data variables.product.prodname_ghe_cloud %} の記事](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)を参照してください。 {% ifversion not ghae %}最新バージョンの使用については、「[Configuring code scanning for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)」(アプライアンスのコード スキャニングの構成) を参照してください。{% endif %}

{% endnote %} {% endif %}

{% ifversion ghae %}
## 前提条件

リポジトリに{% data variables.product.prodname_code_scanning %} をセットアップする前に、リポジトリで使用可能なセルフホスト {% data variables.product.prodname_actions %} ランナーが少なくとも 1 つ存在することを確認する必要があります。

セルフホスト ランナーを追加できるのは、企業の所有者、組織、リポジトリの管理者です。 詳細については、「[セルフホスト ランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」および「[セルフホスト ランナーの追加](/actions/hosting-your-own-runners/adding-self-hosted-runners)」を参照してください。
{% endif %}

{% ifversion fpt or ghec %}
## スターター ワークフローを使用した{% data variables.product.prodname_code_scanning %} のセットアップ

{% data reusables.advanced-security.starter-workflows-beta %}

{% ifversion ghes or ghae %} {% note %}

**メモ:** この記事では、このバージョンの {% data variables.product.product_name %} の初期リリースに含まれる CodeQL アクションのバージョンおよび関連する CodeQL CLI バンドルで使用できる機能について説明します。 企業でより新しいバージョンの CodeQL アクションを使用している場合は、最新の機能の詳細について [{% data variables.product.prodname_ghe_cloud %} の記事](/enterprise-cloud@latest/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository)を参照してください。 {% ifversion not ghae %}最新バージョンの使用については、「[Configuring code scanning for your appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance#configuring-codeql-analysis-on-a-server-without-internet-access)」(アプライアンスのコード スキャニングの構成) を参照してください。{% endif %}

{% endnote %} {% endif %}

{% data reusables.advanced-security.starter-workflow-overview %} {% data variables.product.prodname_code_scanning_capc %} スターター ワークフローは、{% data variables.product.prodname_code_scanning %} が有効になっている場合にのみ、リポジトリで使用できます。

{% data reusables.code-scanning.billing %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. リポジトリに少なくとも 1 つのワークフローが既にセットアップされ、実行されている場合は、 **[新しいワークフロー]** をクリックしてステップ 5 に進みます。 現在、リポジトリ用に設定されているワークフローがない場合は、次のステップに進みます。
   ![[新しいワークフロー] ボタンのスクリーンショット](/assets/images/help/security/actions-new-workflow-button.png)
1. [セキュリティ] カテゴリまで下にスクロールし、設定するワークフローの下にある **[設定]** をクリックするか、 **[すべて表示]** をクリックして使用可能なすべてのセキュリティ ワークフローを表示します。
   ![[アクション] ワークフローの [セキュリティ] セクションのスクリーンショット](/assets/images/help/security/actions-workflows-security-section.png)
1. ワークフロー ページの右側のウィンドウで、 **[ドキュメント]** をクリックし、画面の指示に従ってワークフローをニーズに合わせて調整します。
   ![スターター ワークフローの [ドキュメント] タブのスクリーンショット](/assets/images/help/security/actions-workflows-documentation.png) 詳細については、「[スターター ワークフローの使用](/actions/using-workflows/using-starter-workflows#using-starter-workflows)」と「[{% data variables.product.prodname_code_scanning %} の設定](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning)」を参照してください。

{% endif %}

## {% data variables.product.prodname_code_scanning %} の手動セットアップ

{% ifversion fpt %}

書き込みアクセス権を持つすべてのパブリック リポジトリで {% data variables.product.prodname_code_scanning %} をセットアップできます。

{% endif %}

{% data reusables.code-scanning.billing %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %}
1. [{% data variables.product.prodname_code_scanning_capc %} アラート] の右側にある **[{% data variables.product.prodname_code_scanning %} のセットアップ]** をクリックします。{% ifversion ghec or ghes or ghae %} {% data variables.product.prodname_code_scanning %} が見つからない場合は、Organization の所有者またはリポジトリ管理者に {% data variables.product.prodname_GH_advanced_security %} を有効にするよう依頼する必要があります。{% endif %}詳細については、[Organization のセキュリティと分析の設定の管理](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)に関するページまたは「[リポジトリのセキュリティと分析設定を管理する](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。
 ![セキュリティの概要にある、[{% data variables.product.prodname_code_scanning_capc %}] の右側の [{% data variables.product.prodname_code_scanning %} のセットアップ] ボタン](/assets/images/help/security/overview-set-up-code-scanning.png)
4. [{% data variables.product.prodname_code_scanning %} の使用を開始する] で、{% data variables.code-scanning.codeql_workflow %}またはサードパーティ ワークフローに対して **[このワークフローを設定する]** をクリックします。
 ![[{% data variables.product.prodname_code_scanning %} の使用を開始する] という見出しの下にある [このワークフローを設定します] ボタン](/assets/images/help/repository/code-scanning-set-up-this-workflow.png)ワークフローは、それがリポジトリで検出されたプログラミング言語に関連する場合にのみ表示されます。 {% data variables.code-scanning.codeql_workflow %}は常に表示されますが、[このワークフローを設定する] ボタンは、{% data variables.product.prodname_codeql %} 分析がリポジトリ内に存在する言語をサポートしている場合にのみ有効になります。
5. {% data variables.product.prodname_code_scanning %} がコードをスキャンする方法をカスタマイズするため、ワークフローを編集します。

   通常は、何も変更せずに {% data variables.code-scanning.codeql_workflow %}をコミットてきます。 ただし、サード パーティのワークフローの多くでは、追加の構成が必要になるので、コミットする前にワークフローのコメントを読んでください。

   詳細については、「[{% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/configuring-code-scanning)」を参照してください。
6. **[Start commit](コミットの開始)** ドロップダウンを使用し、コミット メッセージを入力します。
 ![コミットを開始する](/assets/images/help/repository/start-commit-commit-new-file.png)
7. 既定のブランチに直接コミットするか、新しいブランチを作成して pull request を開始するかを選択します。
 ![コミット先を選択する](/assets/images/help/repository/start-commit-choose-where-to-commit.png)
8. **[Commit new file] (新しいファイルをコミットする)** または **[Propose new file] (新しいファイルを提案する)** をクリックします。

既定の {% data variables.code-scanning.codeql_workflow %}では、{% data variables.product.prodname_code_scanning %} は、既定のブランチまたは保護されたブランチに変更をプッシュするたび、あるいは既定のブランチに pull request を生成するたびに、コードを解析するよう設定されています。 その結果として、{% data variables.product.prodname_code_scanning %} が開始されます。

コード スキャンの `on:pull_request` と `on:push` トリガーは、それぞれ異なる目的に役立ちます。 詳細については、「[pull request のスキャン](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-pull-requests)」と「[プッシュ時のスキャン](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#scanning-on-push)」を参照してください。
## {% data variables.product.prodname_code_scanning %} の一括セットアップ

スクリプトを使用して、{% data variables.product.prodname_code_scanning %} を多くのリポジトリで一括でセットアップできます。 スクリプトを使用して、{% data variables.product.prodname_actions %} ワークフローを複数のリポジトリに追加する pull request を発生させる場合は、[`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs) リポジトリで PowerShell を使用する例を、または、PowerShell を持たず代わりに NodeJS を使用したいチームの場合は [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) を参照してください。

## {% data variables.product.prodname_code_scanning %} からログ出力を表示する

リポジトリで{% data variables.product.prodname_code_scanning %}をセットアップしたら、アクションが実行されるとその出力を見ることができます。

{% data reusables.repositories.actions-tab %}

  {% data variables.product.prodname_code_scanning %} ワークフローを実行するためのエントリを含むリストが表示されます。 エントリのテキストは、コミットメッセージに付けるタイトルです。

  ![{% data variables.product.prodname_code_scanning %} ワークフローを表示しているアクションのリスト](/assets/images/help/repository/code-scanning-actions-list.png)

1. {% data variables.product.prodname_code_scanning %} ワークフローのエントリをクリックします。

1. 左側のジョブ名をクリックします。 たとえば、 **[分析 (言語)]** です。

  ![{% data variables.product.prodname_code_scanning %} ワークフローからのログ出力](/assets/images/help/repository/code-scanning-logging-analyze-action.png)

1. このワークフローの実行時にアクションから出力されるログを確認します。

1. すべてのジョブが完了すると、確認されたすべての {% data variables.product.prodname_code_scanning %} アラートの詳細を表示できます。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository#viewing-the-alerts-for-a-repository)」を参照してください。

{% note %}

**注釈:** {% data variables.product.prodname_code_scanning %} ワークフローを追加するための pull request をリポジトリに発行すると、その pull request からのアラートは、その pull request がマージされるまで {% data variables.product.prodname_code_scanning_capc %} ページに直接表示されません。 アラートが見つかった場合は、pull request がマージされる前に、{% data variables.product.prodname_code_scanning_capc %} ページのバナーにある **[_n_ のアラートを検出]** リンクをクリックして表示できます。

![[n alerts found]\(n 件のアラートが見つかりました\) リンクをクリックします](/assets/images/help/repository/code-scanning-alerts-found-link.png)

{% endnote %}

## Pull Requestのチェックを理解する

プルリクエストで実行するよう設定した各 {% data variables.product.prodname_code_scanning %} ワークフローでは、プルリクエストのチェックセクションに常に最低 2 つのエントリが表示されています。 ワークフローの解析ジョブごとに 1 つのエントリがあり、最後のエントリは解析結果です。

{% data variables.product.prodname_code_scanning %} 解析チェックの名前は、「ツール名 / ジョブ名 (トリガー)」という形式になります。 たとえば、C++ のコードの {% data variables.product.prodname_codeql %} 解析には、「{% data variables.product.prodname_codeql %} / Analyze (cpp) (pull_request)」のエントリがあります。 {% data variables.product.prodname_code_scanning %} 分析エントリで **[詳細]** をクリックして、ログのデータを表示できます。 これにより、解析ジョブが失敗した場合に問題をデバッグできます。 たとえば、コンパイル型言語の {% data variables.product.prodname_code_scanning %} 解析では、アクションがコードをビルドできなかった場合に解析ジョブが失敗します。

  ![{% data variables.product.prodname_code_scanning %} プルリクエストのチェック](/assets/images/help/repository/code-scanning-pr-checks.png)

{% data variables.product.prodname_code_scanning %} ジョブが完了すると、
{% data variables.product.prodname_dotcom %} はプルリクエストにより追加されたアラートがないか確認し、チェックのリストに「{% data variables.product.prodname_code_scanning_capc %} の結果 / ツール名」のエントリを追加します。 {% data variables.product.prodname_code_scanning %} が 1 回でも実行された後は、 **[詳細]** をクリックして分析結果を表示できます。

{% ifversion ghes < 3.5 or ghae %}pull request を使用してリポジトリに {% data variables.product.prodname_code_scanning %} を追加した場合、"{% data variables.product.prodname_code_scanning_capc %} の結果/ツール名" チェックの **[詳細]** をクリックすると、最初は "分析が見つかりません" というメッセージが表示されます。

  ![コミット メッセージの分析が見つかりません](/assets/images/enterprise/3.4/repository/code-scanning-analysis-not-found.png)

テーブルには、1 つ以上のカテゴリが一覧表示されます。 各カテゴリは、同じツールとコミットに対して、異なる言語またはコードの別の部分で実行される特定の分析に関連しています。 このテーブルは、各カテゴリについて、{% data variables.product.prodname_code_scanning %} が比較を試みた 2 つの分析を表し、pull request で導入または修正されたアラートを特定します。

たとえば、上のスクリーンショットでは、{% data variables.product.prodname_code_scanning %} は pull request のマージ コミットの分析を検出しましたが、メイン ブランチの先頭の分析は検出しませんでした。

### 「分析が見つかりません」のメッセージが出る理由


プルリクエストのコードを解析した後、{% data variables.product.prodname_code_scanning %} はトピックブランチ (プルリクエストを作成するために使用したブランチ) の解析と、ベースブランチ (プルリクエストをマージするブランチ) の解析を比較する必要があります。 これにより、{% data variables.product.prodname_code_scanning %} はプルリクエストにより新しく発生したアラートはどれか、ベースブランチに既に存在していたアラートはどれか、また既存のアラートがプルリクエストの変更により修正されたかを測定できます。 始めにプルリクエストを使用してリポジトリに {% data variables.product.prodname_code_scanning %} を追加した段階では、ベースブランチはまだ解析されていないので、こうした情報を測定できません。 この場合、pull request の結果チェックをクリックすると、"分析が見つかりません" いうメッセージが表示されます。

この他にも、プルリクエストのベースブランチに対する直近のコミットで解析結果がないことがあります。 これには以下が含まれます。

* プルリクエストがデフォルトブランチ以外のブランチに発行され、このブランチが解析されていない。

  ブランチがスキャン済みかを確認するには、{% data variables.product.prodname_code_scanning_capc %} ページに移動し、 **[ブランチ]** ドロップダウンをクリックして該当するブランチを選択します。

  ![[Branch] ドロップダウンメニューからブランチを選択](/assets/images/help/repository/code-scanning-branch-dropdown.png)

  この状況における解決策は、そのブランチの {% data variables.product.prodname_code_scanning %} ワークフローにある `on:push` と `on:pull_request` の指定にベースブランチの名前を追加してから、スキャンするオープンな pull request を更新するよう変更することです。

* プルリクエストのベースブランチへの直近のコミットが現在解析中で、解析がまだ利用できない。

  数分待ってからプルリクエストに変更をプッシュして、{% data variables.product.prodname_code_scanning %} を再トリガーします。

* ベースブランチの直近のコミットを解析中にエラーが発生し、そのコミットの解析ができない。

  ちょっとした変更をベースブランチにマージして、この最新のコミットで {% data variables.product.prodname_code_scanning %} をトリガーしてから、プルリクエストに変更をプッシュして {% data variables.product.prodname_code_scanning %} を再トリガーします。

{% endif %}

## 次の手順

{% data variables.product.prodname_code_scanning %} をセットアップし、そのアクションを完了できるようにした後は、次のことができます。

- リポジトリに対して生成された {% data variables.product.prodname_code_scanning %} アラートをすべて表示する。 詳細については、「[リポジトリの {% data variables.product.prodname_code_scanning %} アラートの管理](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)」を参照してください。
- {% data variables.product.prodname_code_scanning %} をセットアップ後にサブミットしたプルリクエストに対して生成されたアラートを表示する。 詳細については、「[pull request の {% data variables.product.prodname_code_scanning %} アラートのトリアージ](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)」を参照してください。
- 実行完了の通知を設定する。 詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)」を参照してください。
- {% data variables.product.prodname_code_scanning %}分析が生成したログを表示する。 詳細については、「[{% data variables.product.prodname_code_scanning %} ログの表示](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/viewing-code-scanning-logs)」を参照してください。
- {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} の初期セットアップで発生した問題を調査する。 詳細については、「[{% data variables.product.prodname_codeql %} ワークフローのトラブルシューティング](/code-security/secure-coding/troubleshooting-the-codeql-workflow)」を参照してください。
- {% data variables.product.prodname_code_scanning %} がリポジトリ内のコードをスキャンする方法をカスタマイズする。 詳細については、「[{% data variables.product.prodname_code_scanning %} の設定](/code-security/secure-coding/configuring-code-scanning)」を参照してください。
