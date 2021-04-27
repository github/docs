---
title: インボックスからの通知を管理する
intro: 'インボックスを使用して、メール{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} とモバイル{% endif %} 間で通知をすばやくトリアージして同期します。'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - notifications
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### インボックスについて

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)」を参照してください。
{% endif %}

インボックスへアクセスするには、任意のページの右上で、{% octicon "bell" aria-label="The notifications bell" %} をクリックします。

  ![未読メッセージを示す通知](/assets/images/help/notifications/notifications_general_existence_indicator.png)

インボックスには、登録を解除していないか、**Done** とマークされていないすべての通知が表示されます。ワークフローに対して最適な形になるよう、フィルタを使用してインボックスをカスタマイズし、すべてまたは未読の通知を表示して、通知をグループ化することで概要をすばやく確認できます。

  ![インボックスビュー](/assets/images/help/notifications-v2/inbox-view.png)

デフォルトでは、インボックスに既読と未読の通知が表示されます。 未読の通知のみを表示するには、[**Unread**] をクリックするか、`is:unread` クエリを使用します。

  ![未読のインボックスイビュー](/assets/images/help/notifications-v2/unread-inbox-view.png)

### トリアージオプション

インボックスからの通知をトリアージする場合のオプションは次のとおりです。

| トリアージオプション   | 説明                                                                                                                                                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Save         | 後で確認するために、通知を保存します。 通知を保存するには、通知の右側にある {% octicon "bookmark" aria-label="The bookmark icon" %} をクリックします。 <br> <br> 保存済の通知は無期限に保持され、サイドバーの [**Saved**] をクリックするか、`is:saved` クエリで表示できます。 5か月以上前に保存した通知の保存を解除すると、通知は1日以内にインボックスから消えます。 |
| 完了           | 通知を完了済としてマークし、受信トレイから通知を削除します。 サイドバーの [**Done**] をクリックするか、`is:done` クエリを使用すると、完了した通知をすべて表示できます。 **完了済**としてマークされている通知は、5か月間保持されます。                                                                                                              |
| サブスクライブ解除します | @メンションされるか、参加している Team が@メンションされるか、またはレビューがリクエストされるまで、インボックスから通知を自動的に削除し、会話からサブスクライブ解除します。                                                                                                                                                     |
| Read         | 通知を既読としてマークします。 インボックスで既読の通知のみを表示するには、`is:read` クエリを使用します。 このクエリには、**完了**としてマークされた通知は含まれません。                                                                                                                                                   |
| Unread       | 通知を未読としてマークします。 インボックスで未読の通知のみを表示するには、`is:unread` クエリを使用します。                                                                                                                                                                                   |

利用可能なキーボードショートカットについて詳しくは、「[キーボードショートカット](/github/getting-started-with-github/keyboard-shortcuts#notifications)」を参照してください。

トリアージオプションを選択する前に、まず通知の詳細をプレビューして調査することができます。 詳しい情報については、「[単一の通知をトリアージする](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)」を参照してください。

### 複数の通知を同時にトリアージする

複数の通知を同時にトリアージするには、関連する通知を選択し、{% octicon "kebab-horizontal" aria-label="The edit icon" %} ドロップダウンを使用してトリアージオプションを選択します。

![トリアージオプションと選択した通知を含むドロップダウンメニュー](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

### デフォルト通知フィルタ

デフォルトでは、インボックスには、割り当てられたとき、スレッドに参加したとき、プルリクエストの確認をリクエストされたとき、ユーザ名が直接 @メンションされたとき、またはメンバーになっている Team が @メンションされたときのフィルタがあります。

  ![デフォルトのカスタムフィルタ](/assets/images/help/notifications-v2/default-filters.png)

### カスタムフィルタでインボックスをカスタマイズする

独自のカスタムフィルタを 15 個まで追加できます。

{% data reusables.notifications.access_notifications %}
2. フィルタ設定を開くには、左側のサイドバーの [Filters] の横にある {% octicon "gear" aria-label="The Gear icon" %} をクリックします。

  {% tip %}

  **ヒント:** インボックスビューでクエリを作成し、[**Save**] をクリックすると、カスタムフィルタの設定が開き、フィルタのインボックスの結果をすばやくプレビューできます。

  {% endtip %}

3. フィルタの名前とフィルタクエリを追加します。 たとえば、特定のリポジトリの通知のみを表示するには、`repo:octocat/open-source-project-name reason:participating` クエリを使用してフィルタを作成できます。 ネイティブの絵文字キーボードを使用して、絵文字を追加することもできます。 サポートされている検索クエリのリストについては、「[カスタムフィルタでサポートされているクエリ](#supported-queries-for-custom-filters)」を参照してください。

  ![カスタムフィルタの例](/assets/images/help/notifications-v2/custom-filter-example.png)

4. ** Create（作成）**をクリックしてください。

### カスタムフィルタの制限

カスタムフィルタは現在、以下をサポートしていません。
  - プルリクエストや Issue のタイトルの検索を含む、インボックスでの全文検索。
  - `is:issue`、`is:pr`、および `is:pull-request` クエリフィルタの区別。 これらのクエリは、Issue とプルリクエストの両方を検索結果として表示します。
  - 15 個以上のカスタムフィルタの作成。
  - デフォルトのフィルタまたはその順序の変更。
  - `NOT` または `-QUALIFIER` を使用した [exclusion](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results) の検索。

### カスタムフィルタでサポートされているクエリ

使用できるフィルタの種類は次のとおりです。
  - `repo:` を使用したリポジトリによるフィルタ
  - `is:` を使用したディスカッションタイプによるフィルタ
  - `reason:` を使用した通知理由でのフィルタ{% if currentVersion == "free-pro-team@latest" %}
  - `author:` を使用した通知作者によるフィルタ
  - `org:` を使用したOrganization によるフィルタ{% endif %}

#### サポートされている `repo:` クエリ

`repo:` フィルタを追加するには、リポジトリの所有者をクエリの `repo:owner/repository` に含める必要があります。 オーナーは、通知をトリガーする {% data variables.product.prodname_dotcom %} アセットを所有する Organization またはユーザです。 例えば、 `repo:octo-org/octo-repo` は、Organization 内の octo-repo リポジトリでトリガーされた通知を表示します。

#### サポートされている `is:` クエリ

{% data variables.product.product_name %} での特定のアクティビティの通知をフィルタするには、`is` クエリを使用できます。 たとえば、リポジトリの招待の更新のみを表示するには、`is:repository-invitation`{% if currentVersion != "github-ae@latest" %} を使用し、{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}セキュリティ{% endif %}アラートのみを表示するには、`is:repository-vulnerability-alert`を使用します。{% endif %}

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`{% if currentVersion != "github-ae@latest" %}
- `is:repository-vulnerability-alert`
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% if currentVersion == "free-pro-team@latest" %}
- `is:discussions`{% endif %}

{% if currentVersion != "github-ae@latest" %}
-
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %} セキュリティアラート{% endif %}からの通知を減らす方法については、「[脆弱性のある依存関係の通知を設定する](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)」を参照してください。
{% endif %}

`is:` クエリを使用して、通知がトリアージされた方法を記述することもできます。

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

#### サポートされている `reason:` クエリ

更新を受信した理由で通知をフィルタするには、`reason:` クエリを使用できます。 たとえば、自分 (または自分が所属する Team) がプルリクエストのレビューをリクエストされたときに通知を表示するには、`reason:review-requested` を使用します。 詳しい情報については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)」を参照してください。

| クエリ                       | 説明                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| `reason:assign`           | 割り当てられている Issue またはプルリクエストに更新があるとき。                                                          |
| `reason:author`           | プルリクエストまたは Issue を開くと、更新または新しいコメントがあったとき。                                                    |
| `reason:comment`          | Issue、プルリクエスト、または Team ディスカッションにコメントしたとき。                                                    |
| `reason:participating`    | Issue、プルリクエスト、Team ディスカッションについてコメントしたり、@メンションされているとき。                                        |
| `reason:invitation`       | Team、Organization、またはリポジトリに招待されたとき。                                                          |
| `reason:manual`           | まだサブスクライブしていない Issue またはプルリクエストで [**Subscribe**] をクリックしたとき。                                  |
| `reason:mention`          | 直接@メンションされたとき。                                                                               |
| `reason:review-requested` | 自分または参加している Team が、プルリクエストを確認するようにリクエストされているとき。{% if currentVersion != "github-ae@latest" %}
| `reason:security-alert`   | リポジトリに対してセキュリティアラートが発行されたとき。{% endif %}
| `reason:state-change`     | プルリクエストまたは Issue の状態が変更されたとき。 たとえば、Issue がクローズされたり、プルリクエストがマージされた場合です。                       |
| `reason:team-mention`     | メンバーになっている Team が@メンションされたとき。                                                                |
| `reason:ci-activity`      | リポジトリに、新しいワークフロー実行ステータスなどの CI 更新があるとき。                                                       |

{% if currentVersion == "free-pro-team@latest" %}
#### サポートされている `author:` クエリ

ユーザごとに通知をフィルタするには、`author:` クエリを使用できます。 作者は、通知されるスレッド（Issue、プルリクエスト、Gist、ディスカッションなど）の元の作者です。 たとえば、Octocat ユーザによって作成されたスレッドの通知を表示するには、`author:octocat` を使用します。

#### サポートされている `org:` クエリ

Organization ごとに通知をフィルタするには、`org:` クエリを使用できます。 クエリで指定する必要のある Organization は、{% data variables.product.prodname_dotcom %} で通知されているリポジトリの Organization です。 このクエリは、複数の Organization に属していて、特定の Organization の通知を表示する場合に便利です。

例えば、octo-org の Organization からの通知を表示するには、 `org:octo-org` を使用します。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### {% data variables.product.prodname_dependabot %}カスタムフィルタ

{% if currentVersion == "free-pro-team@latest" %}
ー
{% data variables.product.prodname_dependabot %} を使用して依存関係を最新の状態に保つには、次のカスタムフィルタを使用して保存します。
- `is:repository_vulnerability_alert` は {% data variables.product.prodname_dependabot_alerts %} の通知を表示します。
- `reason:security_alert` は {% data variables.product.prodname_dependabot_alerts %} とセキュリティアップデートのプルリクエストの通知を表示します。
- `author:app/dependabot` は {% data variables.product.prodname_dependabot %} によって生成された通知を表示します。 これには、{% data variables.product.prodname_dependabot_alerts %}、セキュリティアップデートのプルリクエスト、およびバージョン更新のプルリクエストが含まれます。
ー

{% data variables.product.prodname_dependabot %} の詳細については、「[脆弱性のある依存関係の管理について](/github/managing-security-vulnerabilities/about-managing-vulnerable-dependencies)」を参照してください。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
ー
{% data variables.product.prodname_dependabot %} を使用して依存関係を最新の状態に保つには、`is:repository_vulnerability_alert` カスタムフィルタを使用して保存し、{% data variables.product.prodname_dependabot_alerts %} の通知を表示できます。
ー

{% data variables.product.prodname_dependabot %} の詳細については、「[脆弱性のある依存関係のアラートについて](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
{% endif %}

{% endif %}
