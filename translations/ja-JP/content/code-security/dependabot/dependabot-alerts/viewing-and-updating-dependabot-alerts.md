---
title: Dependabotアラートの表示と更新
intro: '{% data variables.product.product_name %} がプロジェクト内の安全ではない依存関係を発見した場合は、詳細をリポジトリのDependabot alertsタブで確認できます。 その後、プロジェクトを更新してこのアラートを解決もしくは却下できます。'
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

リポジトリの{% data variables.product.prodname_dependabot_alerts %}タブには、オープン及びクローズされたすべての{% data variables.product.prodname_dependabot_alerts %}{% ifversion fpt or ghec or ghes > 3.2 %}及び対応する{% data variables.product.prodname_dependabot_security_updates %}{% endif %}がリストされます。 {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}アラートはパッケージ、エコシステム、マニフェストでフィルタリングできます。 また、{% endif %}アラートのリストはソートでき、特定のアラートをクリックして詳細を見ていくことができます。 {% ifversion dependabot-bulk-alerts %}アラートを1つずつ、あるいは複数のアラートをまとめて選択して、却下したり再オープンしたりできます。{% else %}アラートを却下したり再オープンしたりもできます。 {% endif %} 詳しい情報については、「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。

{% ifversion fpt or ghec or ghes > 3.2 %}
{% data variables.product.prodname_dependabot_alerts %} と依存関係グラフを使用するリポジトリの自動セキュリティ更新を有効にすることができます。 詳しい情報については、「[{% data variables.product.prodname_dependabot_security_updates %} について](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)」を参照してください。
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## リポジトリ内の脆弱性のある依存関係の更新について

コードベースが既知のセキュリティリスクのある依存関係を使用していることを検出すると、{% data variables.product.product_name %} は {% data variables.product.prodname_dependabot_alerts %} を生成します。 {% data variables.product.prodname_dependabot_security_updates %} が有効になっているリポジトリの場合、{% data variables.product.product_name %} がデフォルトのブランチで脆弱性のある依存関係を検出すると、{% data variables.product.prodname_dependabot %} はそれを修正するためのプルリクエストを作成します。 プルリクエストは、脆弱性を回避するために必要最低限の安全なバージョンに依存関係をアップグレードします。

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}{% data variables.product.prodname_dependabot_alerts %}は、{% data variables.product.prodname_dependabot_alerts %}タブ内のドロップダウンメニューで、あるいは検索バーで`key:value`ペアとしてフィルタを入力することで、ソートとフィルタリングできます。 利用可能なフィルタは、リポジトリ（たとえば`repo:my-repository`）、パッケージ（たとえば`package:django`）、エコシステム（たとえば`ecosystem:npm`）、マニフェスト（たとえば`manifest:webwolf/pom.xml`）、状態（たとえば`is:open`）、アドバイザリがパッチを持っているか（たとえば`has: patch`）です。{% ifversion dependabot-alerts-development-label %}たとえば`scope:development`あるいは`scope:runtime`というように、`scope`を使って依存関係のスコープデータでアラートをフィルタすることもできます。 `scope:development`を指定すると、アラートのリストは実働ではなく開発の間に使われた依存関係だけを表示します。{% endif %}

それぞれの{% data variables.product.prodname_dependabot %}アラートは一意の数値識別子を持っており、{% data variables.product.prodname_dependabot_alerts %}タブにはすべての検出された脆弱性に対するアラートがリストされます。 旧来の{% data variables.product.prodname_dependabot_alerts %}は依存関係で脆弱性をグループ化し、依存関係ごとに1つのアラートを生成しました。 旧来の{% data variables.product.prodname_dependabot %}アラートにアクセスすると、そのパッケージでフィルタされた{% data variables.product.prodname_dependabot_alerts %}タブにリダイレクトされます。 {% endif %}
{% endif %}

{% ifversion dependabot-alerts-development-label %}
## 依存関係のスコープに対してサポートされているエコシステムとマニフェスト

<!-- TODO: for now we'd have this table and heading as they are, but we're planning to replace this with at a later date a new heading containing all the available filters in one or more tables -->
{% data reusables.dependabot.dependabot-alerts-dependency-scope %}

開発時の依存関係としてリストされているパッケージに対するアラートは、{% data variables.product.prodname_dependabot_alerts %}のページ上で`Development`ラベルでマークされており、`scope`フィルタでフィルタリングすることもできます。 ![アラートのリスト内の"Development"を表示しているスクリーンショット](/assets/images/help/repository/dependabot-alerts-development-label.png)

開発スコープのパッケージに対するアラートの詳細ページには、`Development`ラベルを含むTags"セクションが表示されます。 ![アラートの詳細ページ内の"Tags"セクションを表示しているスクリーンショット](/assets/images/help/repository/dependabot-alerts-tags-section.png)

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

詳しい情報については、下の「[アラートのレビューと修正](#reviewing-and-fixing-alerts)」を参照してください。

{% endif %}

## {% data variables.product.prodname_dependabot_alerts %}の表示

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5638 %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. あるいは、アラートをフィルタリングするには、**Repository（リポジトリ）**、**Package（パッケージ）**、**Ecosystem（エコシステム）**、**Manifest（マニフェスト）**ドロップダウンメニューを選択し、続いて適用したいフィルタをクリックしてください。 検索バーにフィルタを入力することもできます。 たとえば`ecosystem:npm`{% ifversion ghes < 3.7 or ghae-issue-5638 %}もしくは`has:patch`{% endif %}{% ifversion dependabot-alerts-development-label %}、`has:patch`、`scope:development`{% endif %}。 アラートをソートするには**Sort（ソート）**ドロップダウンメニューを選択し、ソートに使いたい選択肢をクリックしてください。

   アラートのラベルをクリックして、その種類のアラートだけを表示させることもできます。{% ifversion dependabot-alerts-development-label %}たとえば、アラートのリスト内の`Development`ラベルをクリックすれば、実働ではなく開発で使われている依存関係に関係するアラートだけが表示されます。 サポートされているエコシステムのリストに関する情報については「[依存関係スコープでサポートされているエコシステムとマニフェスト](#supported-ecosystems-and-manifests-for-dependency-scope)」を参照してください。

{% endif %}
{%- ifversion dependabot-bulk-alerts %}
  ![{% data variables.product.prodname_dependabot_alerts %}タブ中のフィルタ及びソートメニューのスクリーンショット](/assets/images/help/graphs/dependabot-alerts-filters-checkbox.png){% else %}
   ![Screenshot of the filter and sort menus in the {% data variables.product.prodname_dependabot_alerts %} tab](/assets/images/enterprise/3.5/dependabot/dependabot-alerts-filters.png){% endif %}
1. 表示したいアラートをクリックしてください。{% ifversion dependabot-bulk-alerts %} ![Alert selected in list of alerts](/assets/images/help/graphs/click-alert-in-alerts-list-checkbox.png){% else %}
![Alert selected in list of alerts](/assets/images/enterprise/3.5/dependabot/click-alert-in-alerts-list-ungrouped.png){% endif %}

{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. 表示したいアラートをクリックします。 ![アラートリストで選択されたアラート](/assets/images/help/graphs/click-alert-in-alerts-list.png)
{% endif %}

## アラートのレビューと修正

すべての依存関係がセキュリティの弱点を確実に持たないようにすることが重要です。 {% data variables.product.prodname_dependabot %}が脆弱性{% ifversion GH-advisory-db-supports-malware %}もしくはマルウェア{% endif %}を依存関係に見つけた場合、プロジェクトの露出のレベルを評価し、アプリケーションをセキュアにするための修復ステップを決定しなければなりません。

依存関係のパッチされたバージョンが利用できるなら、{% data variables.product.prodname_dependabot %} Pull Requestを生成し、{% data variables.product.prodname_dependabot %}アラートから直接その依存関係を更新できます。 {% data variables.product.prodname_dependabot_security_updates %}を有効にしているなら、Pull RequestはDependabotアラートとリンクされるかもしれません。

パッチが適用されたバージョンが利用できない場合、あるいはセキュアなバージョンへ更新できない場合、{% data variables.product.prodname_dependabot %}は次のステップを判断するための役に立つ追加情報を共有します。 {% data variables.product.prodname_dependabot %}アラートを見るためにクリックしていくと、影響される関数を含む依存関係に対するセキュリティアドバイザリの完全な詳細を見ることができます。 そして、自分のコードが影響を受けた関数を呼び出しているかをチェックできます。 この情報は、リスクレベルをさらに評価し、回避策を決めたり、あるいはそのセキュリティアドバイザリが示すリスクを受け入れることができるかどうかを決めるための役に立ちます。

{% ifversion dependabot-alerts-vulnerable-calls %}

サポートされている言語では、{% data variables.product.prodname_dependabot %}は脆弱性のある関数の呼び出しを検出してくれます。 "Vulnerable call（脆弱性のある呼び出し）"というラベルの付いたアラートを見ると、関数名とそれを呼び出しているコードへのリンクを含む詳細が含まれています。 多くの場合、それ以上調べることなくこの情報に基づいて判断を下すことができるでしょう。

{% endif %}

### 脆弱性のある依存関係の修復

1. アラートの詳細を表示させます。 詳しい情報については上の「[{% data variables.product.prodname_dependabot_alerts %}の表示](#viewing-dependabot-alerts)」を参照してください。
{% ifversion fpt or ghec or ghes > 3.2 %}
1. {% data variables.product.prodname_dependabot_security_updates %}を有効にしているなら、その依存関係を修復するPull Requestへのリンクがあるかもしれません。 あるいは、アラートの詳細ページの上部にある**Create {% data variables.product.prodname_dependabot %} security update**をクリックして、Pull Requestを作成することもできます。 ![{% data variables.product.prodname_dependabot %}のセキュリティアップデートの作成ボタン](/assets/images/help/repository/create-dependabot-security-update-button-ungrouped.png)
1. あるいは、{% data variables.product.prodname_dependabot_security_updates %}を使っていないなら、ページにある情報を使ってアップグレードすべき依存関係のバージョンを判断し、セキュアなバージョンへ依存関係を更新するためのPull Requestを作成できます。
{% elsif ghes < 3.3 or ghae %}
1. ページ上のこの情報を使って、アップグレードすべき依存関係のバージョンを判断し、セキュアなバージョンへのマニフェストもしくはロックファイルへのPull Requestを作成できます。
{% endif %}
1. 依存関係を更新して脆弱性を解決する準備ができたら、プルリクエストをマージしてください。

{% ifversion fpt or ghec or ghes > 3.2 %}
   {% data variables.product.prodname_dependabot %}が発行したそれぞれのPull Requestには、{% data variables.product.prodname_dependabot %}の制御に利用できるコマンドに関する情報が含まれています。 詳しい情報については「[依存関係の更新のためのPull Requestの管理](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-pull-requests-for-dependency-updates#managing-dependabot-pull-requests-with-comment-commands)」を参照してください。
{% endif %}

## {% data variables.product.prodname_dependabot_alerts %}の却下

{% tip %}

**参考:** 却下できるのはオープンなアラートのみです。
{% endtip %}

依存関係のアップグレードのための広汎な作業をスケジュールしていたり、アラートを修正する必要はないと判断したりした場合、アラートを却下できます。 すでに評価済みのアラートを却下すると、新しいアラートが現れたときにトリアージしやすくなります。

1. アラートの詳細を表示させます。 詳しい情報については上の「[脆弱性のある依存関係の表示](#viewing-dependabot-alerts)」を参照してください。
1. "Dismiss（却下）"ドロップダウンを選択し、アラートを却下する理由をクリックしてください。{% ifversion reopen-dependabot-alerts %}却下された未修正のアラートは、後で再度オープンできます。{% endif %} ![[Dismiss] ドロップダウンでアラートを却下する理由を選択する](/assets/images/help/repository/dependabot-alert-dismiss-drop-down-ungrouped.png)
{% ifversion dependabot-bulk-alerts %}

### 複数のアラートを一度に却下する

1. オープンな{% data variables.product.prodname_dependabot_alerts %}を表示させます。 詳しい情報については「[{% data variables.product.prodname_dependabot_alerts %}の表示](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts)」を参照してください。
2. あるいは、ドロップダウンメニューを選択し、適用したいフィルタをクリックして、アラートのリストをフィルタリングしてください。 検索バーにフィルタを入力することもできます。
3. それぞれのアラートのタイトルの左で、却下したいアラートを選択してください。 ![チェックボックスが強調されたオープンなアラートのスクリーンショット](/assets/images/help/graphs/select-multiple-alerts.png)
4. あるいは、アラートのリストの上部で、ページ上のアラートをすべて選択してください。 ![すべてのオープンなアラートが選択されたスクリーンショット](/assets/images/help/graphs/select-all-alerts.png)
5. "Dismiss alerts（アラートを却下）"ドロップダウンを選択し、アラートを却下する理由をクリックしてください。 !["Dismiss alerts"ドロップダウンが強調されたオープンなアラートページのスクリーンショット](/assets/images/help/graphs/dismiss-multiple-alerts.png)

{% endif %}

{% ifversion reopen-dependabot-alerts %}

## クローズされたアラートの表示と更新

{% tip %}

**参考:** 再オープンできるアラートは、以前に却下したものだけです。 既に修復済みのクローズされたアラートは、再オープンできません。
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-dependabot-alerts %}
1. クローズされたアラートを表示だけするなら、**Closed（クローズ済み）**をクリックしてください。{% ifversion dependabot-bulk-alerts %} ![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed-checkbox.png){% else %}
![Screenshot showing the "Closed" option](/assets/images/help/repository/dependabot-alerts-closed.png){% endif %}
1. 表示もしくは更新したいアラートをクリックしてください。{% ifversion dependabot-bulk-alerts %} ![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert-checkbox.png){% else %}
![Screenshot showing a highlighted dependabot alert](/assets/images/help/repository/dependabot-alerts-select-closed-alert.png){% endif %}
2. あるいはアラートが却下されていて、再度オープンしたい場合は、**Reopen（再オープン）**をクリックしてください。 既に修正済みのアラートは再オープンできません。 !["Reopen"ボタンを表示しているスクリーンショット](/assets/images/help/repository/reopen-dismissed-alert.png)

{% endif %}

{% ifversion dependabot-bulk-alerts %}

### 複数のアラートを一度に再オープンする

1. クローズされた{% data variables.product.prodname_dependabot_alerts %}を表示してください。 詳しい情報については上の「[クローズされたアラートの表示と更新](/en/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-and-updating-closed-alerts)」を参照してください。
2. それぞれのアラートのタイトルの左で、再オープンしたいアラートを選択してください。 ![チェックボックスが強調されたクローズ済みアラートのスクリーンショット](/assets/images/help/repository/dependabot-alerts-open-checkbox.png)
3. あるいは、アラートのリストの上部で、ページ上のクローズされたアラートをすべて選択してください。 ![すべてのアラートが選択されたクローズ済みアラートのスクリーンショット](/assets/images/help/graphs/select-all-closed-alerts.png)
4. ** Reopen（再オープン）**をクリックして、アラートを再オープンしてください。 既に修正済みのアラートは再オープンできません。 !["Reopen"ボタンが強調されたクローズ済みアラートのスクリーンショット](/assets/images/help/graphs/reopen-multiple-alerts.png)

{% endif %}
