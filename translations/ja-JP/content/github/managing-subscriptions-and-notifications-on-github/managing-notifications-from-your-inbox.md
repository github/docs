---
title: インボックスからの通知を管理する
intro: 'Use your inbox to quickly triage and sync your notifications across email{% if currentVersion == "free-pro-team@latest" %} and mobile{% endif %}.'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### インボックスについて

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.notifications-v2.notifications-inbox-required-setting %} For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)."
{% endif %}

To access your notifications inbox, in the upper-right corner of any page, click {% octicon "bell" aria-label="The notifications bell" %}.

  ![未読メッセージを示す通知](/assets/images/help/notifications/notifications_general_existence_indicator.png)

インボックスには、登録を解除していないか、**Done** とマークされていないすべての通知が表示されます。ワークフローに対して最適な形になるよう、フィルタを使用してインボックスをカスタマイズし、すべてまたは未読の通知を表示して、通知をグループ化することで概要をすばやく確認できます。

  ![inbox view](/assets/images/help/notifications-v2/inbox-view.png)

By default, your inbox will show read and unread notifications. To only see unread notifications, click **Unread** or use the `is:unread` query.

  ![unread inbox view](/assets/images/help/notifications-v2/unread-inbox-view.png)

### トリアージオプション

You have several options for triaging notifications from your inbox.

| トリアージオプション   | 説明                                                                                                                                                                                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Save         | 後で確認するために、通知を保存します。 通知を保存するには、通知の右側にある {% octicon "bookmark" aria-label="The bookmark icon" %} をクリックします。 <br> <br> 保存済の通知は無期限に保持され、サイドバーの [**Saved**] をクリックするか、`is:saved` クエリで表示できます。 5か月以上前に保存した通知の保存を解除すると、通知は1日以内にインボックスから消えます。 |
| 完了           | 通知を完了済としてマークし、受信トレイから通知を削除します。 サイドバーの [**Done**] をクリックするか、`is:done` クエリを使用すると、完了した通知をすべて表示できます。 **完了済**としてマークされている通知は、5か月間保持されます。                                                                                                              |
| サブスクライブ解除します | @メンションされるか、参加している Team が@メンションされるか、またはレビューがリクエストされるまで、インボックスから通知を自動的に削除し、会話からサブスクライブ解除します。                                                                                                                                                     |
| Read         | 通知を既読としてマークします。 インボックスで既読の通知のみを表示するには、`is:read` クエリを使用します。 このクエリには、**完了**としてマークされた通知は含まれません。                                                                                                                                                   |
| Unread       | 通知を未読としてマークします。 インボックスで未読の通知のみを表示するには、`is:unread` クエリを使用します。                                                                                                                                                                                   |

利用可能なキーボードショートカットについて詳しくは、「[キーボードショートカット](/github/getting-started-with-github/keyboard-shortcuts#notifications)」を参照してください。

Before choosing a triage option, you can preview your notification's details first and investigate. For more information, see "[Triaging a single notification](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)."

### 複数の通知を同時にトリアージする

複数の通知を同時にトリアージするには、関連する通知を選択し、{% octicon "kebab-horizontal" aria-label="The edit icon" %} ドロップダウンを使用してトリアージオプションを選択します。

![Drop-down menu with triage options and selected notifications](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

### デフォルト通知フィルタ

By default, your inbox has filters for when you are assigned, participating in a thread, requested to review a pull request, or when your username is @mentioned directly or a team you're a member of is @mentioned.

  ![Default custom filters](/assets/images/help/notifications-v2/default-filters.png)

### カスタムフィルタでインボックスをカスタマイズする

You can add up to 15 of your own custom filters.

{% data reusables.notifications.access_notifications %}
2. フィルタ設定を開くには、左側のサイドバーの [Filters] の横にある {% octicon "gear" aria-label="The Gear icon" %} をクリックします。

  {% tip %}

  **ヒント:** インボックスビューでクエリを作成し、[**Save**] をクリックすると、カスタムフィルタの設定が開き、フィルタのインボックスの結果をすばやくプレビューできます。

  {% endtip %}

3. フィルタの名前とフィルタクエリを追加します。 たとえば、特定のリポジトリの通知のみを表示するには、`repo:octocat/open-source-project-name reason:participating` クエリを使用してフィルタを作成できます。 ネイティブの絵文字キーボードを使用して、絵文字を追加することもできます。 サポートされている検索クエリのリストについては、「[カスタムフィルタでサポートされているクエリ](#supported-queries-for-custom-filters)」を参照してください。

  ![カスタムフィルタの例](/assets/images/help/notifications-v2/custom-filter-example.png)

4. ** Create（作成）**をクリックしてください。

### カスタムフィルタの制限

Custom filters do not currently support:
  - プルリクエストや Issue のタイトルの検索を含む、インボックスでの全文検索。
  - `is:issue`、`is:pr`、および `is:pull-request` クエリフィルタの区別。 これらのクエリは、Issue とプルリクエストの両方を検索結果として表示します。
  - 15 個以上のカスタムフィルタの作成。
  - デフォルトのフィルタまたはその順序の変更。

### カスタムフィルタでサポートされているクエリ

There are three types of filters that you can use:
  - `repo:` を使用したリポジトリによるフィルタ
  - `is:` を使用したディスカッションタイプによるフィルタ
  - `reason:` を使用した通知理由によるフィルタ

To add a `repo:` filter, you must include the owner of the repository in the query. For example, `repo:atom/atom` represents the Atom repository owned by the Atom organization.

#### サポートされている `reason:` クエリ

To filter notifications by why you've received an update, you can use the `reason:` query. For example, to see notifications when you (or a team you're on) is requested to review a pull request, use `reason:review-requested`. 詳しい情報については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)」を参照してください。

| クエリ                       | 説明                                                                     |
| ------------------------- | ---------------------------------------------------------------------- |
| `reason:assign`           | 割り当てられている Issue またはプルリクエストに更新があるとき。                                    |
| `reason:author`           | プルリクエストまたは Issue を開くと、更新または新しいコメントがあったとき。                              |
| `reason:comment`          | Issue、プルリクエスト、または Team ディスカッションにコメントしたとき。                              |
| `reason:participating`    | Issue、プルリクエスト、Team ディスカッションについてコメントしたり、@メンションされているとき。                  |
| `reason:invitation`       | Team、Organization、またはリポジトリに招待されたとき。                                    |
| `reason:manual`           | まだサブスクライブしていない Issue またはプルリクエストで [**Subscribe**] をクリックしたとき。            |
| `reason:mention`          | 直接@メンションされたとき。                                                         |
| `reason:review-requested` | 自分または自分が参加している Team が、プルリクエストのレビューをリクエストされたとき。                         |
| `reason:security-alert`   | リポジトリに対してセキュリティアラートが発行されたとき。                                           |
| `reason:state-change`     | プルリクエストまたは Issue の状態が変更されたとき。 たとえば、Issue がクローズされたり、プルリクエストがマージされた場合です。 |
| `reason:team-mention`     | メンバーになっている Team が@メンションされたとき。                                          |
| `reason:ci-activity`      | リポジトリに、新しいワークフロー実行ステータスなどの CI 更新があるとき。                                 |

#### サポートされている `is:` クエリ

{% data variables.product.product_name %} での特定のアクティビティの通知をフィルタするには、`is` クエリを使用できます。 For example, to only see repository invitation updates, use `is:repository-invitation`, and to only see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %} security{% endif %} alerts, use `is:repository-vulnerability-alert`.

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`
- `is:repository-advisory`
- `is:team-discussion`

You can also use the `is:` query to describe how the notification was triaged.

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`
