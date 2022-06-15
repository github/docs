---
title: Dependabotアラートの表示と更新
intro: '{% data variables.product.product_name %} がプロジェクト内の脆弱性のある依存関係を発見した場合は、それらをリポジトリの [Dependabot alerts] タブで確認できます。 その後、プロジェクトを更新してこの脆弱性を解決することができます。'
redirect_from:
  - /articles/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/viewing-and-updating-vulnerable-dependencies-in-your-repository
permissions: 'Repository administrators and organization owners can view and update dependencies, as well as users and teams with explicit access.'
shortTitle: Dependabotアラートの表示
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

リポジトリの{% data variables.product.prodname_dependabot_alerts %}タブには、オープン及びクローズされたすべての{% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes > 3.2 %}及び対応する{% data variables.product.prodname_dependabot_security_updates %}{% endif %}がリストされます。 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}アラートはパッケージ、エコシステム、マニフェストでフィルタリングできます。 You can {% endif %} sort the list of alerts, and you can click into specific alerts for more details. {% ifversion dependabot-bulk-alerts %}You can also dismiss or reopen alerts, either one by one or by selecting multiple alerts at once.{% else %}You can also dismiss or reopen alerts. {% endif %} 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。

{% ifversion fpt or ghec or ghes > 3.2 %}
{% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用するリポジトリの自動セキュリティ更新を有効にすることができます。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## リポジトリ内の脆弱性のある依存関係の更新について

コードベースが既知の脆弱性のある依存関係を使用していることを検出すると、{% data variables.product.product_name %} は {% data variables.product.prodname_dependabot_alerts %} を生成します。 {% data variables.product.prodname_dependabot_security_updates %} が有効になっているリポジトリの場合、{% data variables.product.product_name %} がデフォルトのブランチで脆弱性のある依存関係を検出すると、{% data variables.product.prodname_dependabot %} はそれを修正するためのプルリクエストを作成します。 プルリクエストは、脆弱性を回避するために必要最低限の安全なバージョンに依存関係をアップグレードします。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}{% data variables.product.prodname_dependabot_alerts %}は、{% data variables.product.prodname_dependabot_alerts %}タブ内のドロップダウンメニューで、あるいは検索バーで`key:value`ペアとしてフィルタを入力することで、ソートとフィルタリングできます。 利用できるフィルタはリポジトリ（たとえば`repo:my-repository`）、パッケージ（たとえば`package:django`）、エコシステム（たとえば`ecosystem:npm`）、マニフェスト（たとえば`manifest:webwolf/pom.xml`）、ステータス（たとえば`is:open`）、アドバイザリがパッチを持っているか（たとえば`has: patch`）です。

それぞれの{% data variables.product.prodname_dependabot %}アラートは一意の数値識別子を持っており、{% data variables.product.prodname_dependabot_alerts %}タブにはすべての検出された脆弱性に対するアラートがリストされます。 旧来の{% data variables.product.prodname_dependabot_alerts %}は依存関係で脆弱性をグループ化し、依存関係ごとに1つのアラートを生成しました。 旧来の{% data variables.product.prodname_dependabot %}アラートにアクセスすると、そのパッケージでフィルタされた{% data variables.product.prodname_dependabot_alerts %}タブにリダイレクトされます。 {% endif %}
{% endif %}

{% ifversion dependabot-alerts-vulnerable-calls %}
## 脆弱性のある関数の呼び出しの検出について

{% data reusables.dependabot.vulnerable-calls-beta %}

{% data variables.product.prodname_dependabot %}が、リポジトリが脆弱性のある依存関係を使っていることを知らせてきた場合、どの機能が脆弱性を持っているかを判断し、それらを使っているかどうかをチェックしなければなりません。 この情報が得られたら、依存関係のセキュアなバージョンへのアップグレードの必要性の緊急度が判断できます。

サポートされている言語については、{% data variables.product.prodname_dependabot %}は自動的に脆弱性のある関数を使っているかを自動的に検出し、影響されているアラートに"Vulnerable call（脆弱性のある呼び出し）" というラベルを追加します。 {% data variables.product.prodname_dependabot_alerts %}ビュー内のこの情報を使って、修復作業をより効率的にトリアージして優先順位付けできます。

{% note %}

**ノート:** ベータリリースの間、この機能は2022年4月14日*以降*に生成された新規のPythonアドバイザリと、過去のPythonのアドバイザリの一部に対してのみ有効です。 {% data variables.product.prodname_dotcom %}は、さらなる過去のPythonアドバイザリにさかのぼってデータを加えていっています。これは、随時追加されていっています。 脆弱性のある呼び出しは、{% data variables.product.prodname_dependabot_alerts %}ページ上でのみハイライトされます。

{% endnote %}

!["Vulnerable call"ラベルの付いたアラート表示のスクリーンショット](/assets/images/help/repository/dependabot-alerts-vulnerable-call-label.png)

検索フィールドで`has:vulnerable-calls`フィルタを使い、少なくとも1つの脆弱性のある関数の呼び出しを{% data variables.product.prodname_dependabot %}が検出したところでだけアラートを表示するよう、ビューをフィルタリングできます。

脆弱性のある呼び出しが検出されたアラートについては、アラートの詳細ページに追加情報が表示されます。

- 関数が使用されている場所を示す1つ以上のコードブロック。
- 関数自体をリストしているアノテーション。関数が呼ばれている行へのリンク付きで。

!["Vulnerable call"ラベルの付いたアラートのアラート詳細ページを表示しているスクリーンショット](/assets/images/help/repository/review-calls-to-vulnerable-functions.png)

For more information, see "[Reviewing and fixing alerts](#reviewing-and-fixing-alerts)" below.

{% endif %}

## Viewing {% data variables.product.prodname_dependabot_alerts %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. あるいは、アラートをフィルタリングするには、**Repository（リポジトリ）**、**Package（パッケージ）**、**Ecosystem（エコシステム）**、**Manifest（マニフェスト）**ドロップダウンメニューを選択し、続いて適用したいフィルタをクリックしてください。 検索バーにフィルタを入力することもできます。 たとえば`ecosystem:npm`あるいは`has:patch`といったようにです。 To sort alerts, select the **Sort** dropdown menu then click the option that you would like to sort by.{% ifversion dependabot-bulk-alerts %} ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %}
![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
2. Click the alert that you would like to view.{% ifversion dependabot-bulk-alerts %} ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %}
![Alert selected in list of alerts](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 表示したいアラートをクリックします。 ![アラートリストで選択されたアラート](/assets/images/help/graphs/click-alert-in-alerts-list.png)
{% endif %}

## Reviewing and fixing alerts

すべての依存関係がセキュリティの弱点を確実に持たないようにすることが重要です。 {% data variables.product.prodname_dependabot %}が脆弱性を依存関係に見つけた場合、プロジェクトの露出のレベルを評価し、アプリケーションをセキュアにするための修復ステップを決定しなければなりません。

パッチされたバージョンが利用できるなら、{% data variables.product.prodname_dependabot %} Pull Requestを生成し、{% data variables.product.prodname_dependabot %}アラートから直接その依存関係を更新できます。 {% data variables.product.prodname_dependabot_security_updates %}を有効にしているなら、Pull RequestはDependabotアラートとリンクされるかもしれません。

パッチが適用されたバージョンが利用できない場合、あるいはセキュアなバージョンへ更新できない場合、{% data variables.product.prodname_dependabot %}は次のステップを判断するための役に立つ追加情報を共有します。 {% data variables.product.prodname_dependabot %}アラートを見るためにクリックしていくと、影響される関数を含む依存関係に対するセキュリティアドバイザリの完全な詳細を見ることができます。 そして、自分のコードが影響を受けた関数を呼び出しているかをチェックできます。 この情報は、リスクレベルをさらに評価し、回避策を決めたり、あるいはそのセキュリティ脆弱性が示すリスクを受け入れることができるかどうかを決めるための役に立ちます。

{% ifversion dependabot-alerts-vulnerable-calls %}

サポートされている言語では、{% data variables.product.prodname_dependabot %}は脆弱性のある関数の呼び出しを検出してくれます。 "Vulnerable call（脆弱性のある呼び出し）"というラベルの付いたアラートを見ると、関数名とそれを呼び出しているコードへのリンクを含む詳細が含まれています。 多くの場合、それ以上調べることなくこの情報に基づいて判断を下すことができるでしょう。

{% endif %}

### 脆弱性のある依存関係の修復

1. アラートの詳細を表示させます。 For more information, see "[Viewing {% data variables.product.prodname_dependabot_alerts %}](#viewing-dependabot-alerts)" (above).
{% ifversion fpt or ghec or ghes > 3.2 %}
1. {% data variables.product.prodname_dependabot_security_updates %}を有効にしているなら、その依存関係を修復するPull Requestへのリンクがあるかもしれません。 あるいは、アラートの詳細ページの上部にある**Create {% data variables.product.prodname_dependabot %} security update**をクリックして、Pull Requestを作成することもできます。 ![{% data variables.product.prodname_dependabot %} セキュリティアップデートボタンを作成](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. あるいは、{% data variables.product.prodname_dependabot_security_updates %}を使っていないなら、ページにある情報を使ってアップグレードすべき依存関係のバージョンを判断し、セキュアなバージョンへ依存関係を更新するためのPull Requestを作成できます。
{% elsif ghes < 3.3 or ghae %}
1. ページ上のこの情報を使って、アップグレードすべき依存関係のバージョンを判断し、セキュアなバージョンへのマニフェストもしくはロックファイルへのPull Requestを作成できます。
{% endif %}
1. 依存関係を更新して脆弱性を解決する準備ができたら、プルリクエストをマージしてください。

{% ifversion fpt or ghec or ghes > 3.2 %}
   Each pull request raised by {% data variables.product.prodname_dependabot %} includes information on commands you can use to control {% data variables.product.prodname_dependabot %}. For more information, see "[Managing pull requests for dependency updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)."
{% endif %}

## {% data variables.product.prodname_dependabot_alerts %}の却下

{% tip %}

**Tip:** You can only dismiss open alerts.
{% endtip %}

依存関係のアップグレードのための広汎な作業をスケジュールしていたり、アラートを修正する必要はないと判断したりした場合、アラートを却下できます。 すでに評価済みのアラートを却下すると、新しいアラートが現れたときにトリアージしやすくなります。

1. アラートの詳細を表示させます。 For more information, see "[Viewing vulnerable dependencies](#viewing-dependabot-alerts)" (above).
1. Select the "Dismiss" dropdown, and click a reason for dismissing the alert.{% ifversion reopen-dependabot-alerts %} Unfixed dismissed alerts can be reopened later.{% endif %} ![[Dismiss] ドロップダウンでアラートを却下する理由を選択する](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)
{% ifversion dependabot-bulk-alerts %}

### 複数のアラートを一度に却下する

1. View the open {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Viewing {% data variables.product.prodname_dependabot_alerts %}](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)".
2. Optionally, filter the list of alerts by selecting a dropdown menu, then clicking the filter that you would like to apply. 検索バーにフィルタを入力することもできます。
3. To the left of each alert title, select the alerts that you want to dismiss. ![Screenshot of open alerts with checkboxes emphasized](/assets/images/help/graphs/select-multiple-alerts.png)
4. Optionally, at the top of the list of alerts, select all alerts on the page. ![Screenshot of all open alerts selected](/assets/images/help/graphs/select-all-alerts.png)
5. Select the "Dismiss alerts" dropdown, and click a reason for dismissing the alerts. ![Screenshot of open alerts page with "Dismiss alerts" drop-down emphasized](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## クローズされたアラートの表示と更新

{% tip %}

**Tip:** You can only reopen alerts that have been previously dismissed. Closed alerts that have already been fixed cannot be reopened.
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. To just view closed alerts, click **Closed**.{% ifversion dependabot-bulk-alerts %} ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png){% else %}
![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png){% endif %}
1. Click the alert that you would like to view or update.{% ifversion dependabot-bulk-alerts %} ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png){% else %}
![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png){% endif %}
2. あるいはアラートが却下されていて、再度オープンしたい場合は、**Reopen（再オープン）**をクリックしてください。 Alerts that have already been fixed cannot be reopened. !["Reopen"ボタンを表示しているスクリーンショット](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### Reopening multiple alerts at once

1. View the closed {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[Viewing and updating closed alerts](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)" (above).
2. To the left of each alert title, select the alerts that you want to reopen. ![Screenshot of closed alerts with checkboxes emphasized](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. Optionally, at the top of the list of alerts, select all closed alerts on the page. ![Screenshot of closed alerts with all alerts selected](/assets/images/help/graphs/select-all-closed-alerts.png)
4. Click **Reopen** to reopen the alerts. Alerts that have already been fixed cannot be reopened. ![Screenshot of closed alerts with "Reopen" button emphasized](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}
