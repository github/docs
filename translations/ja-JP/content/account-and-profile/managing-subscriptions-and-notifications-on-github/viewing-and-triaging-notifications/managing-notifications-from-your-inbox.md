---
title: インボックスからの通知を管理する
intro: 'インボックスを使って、メール{% ifversion fpt or ghes or ghec %}とモバイル{% endif %}で通知をすばやくトリアージして同期します。'
redirect_from:
  - /articles/marking-notifications-as-read
  - /articles/saving-notifications-for-later
  - /github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: Manage from your inbox
ms.openlocfilehash: d3e0d5eb5e7cf3e544ab601651951178402e4150
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106806'
---
## インボックスについて

{% ifversion fpt or ghes or ghec %} {% data reusables.notifications-v2.notifications-inbox-required-setting %} 詳細については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)」を参照してください。
{% endif %}

インボックスへアクセスするには、任意のページの右上で、{% octicon "bell" aria-label="The notifications bell" %} をクリックします。

  ![未読メッセージを示す通知](/assets/images/help/notifications/notifications_general_existence_indicator.png)

受信トレイには、サブスクライブ解除していない、または **[完了]** としてマークしていないすべての通知が表示されます。 フィルターを使用してワークフローに最適な受信トレイをカスタマイズしたり、すべての通知を表示したり、未読の通知だけを表示したり、通知をグループ化して簡単に概要を確認したりできます。

  ![インボックスビュー](/assets/images/help/notifications-v2/inbox-view.png)

デフォルトでは、インボックスに既読と未読の通知が表示されます。 未読の通知のみを表示するには、 **[未読]** をクリックするか、`is:unread` クエリを使用します。

  ![未読のインボックスイビュー](/assets/images/help/notifications-v2/unread-inbox-view.png)

## トリアージオプション

インボックスからの通知をトリアージする場合のオプションは次のとおりです。

| トリアージオプション | 説明 |
|-----------------|-------------|
| 保存            | 後で確認するために、通知を保存します。 通知を保存するには、通知の右側にある {% octicon "bookmark" aria-label="The bookmark icon" %} をクリックします。 <br> <br> 保存された通知は無期限に保持され、サイド バーで **[保存済み]** をクリックするか、または `is:saved` クエリを使用して表示できます。 5か月以上前に保存した通知の保存を解除すると、通知は1日以内にインボックスから消えます。 |
| 完了            | 通知を完了済としてマークし、受信トレイから通知を削除します。 完了した通知をすべて表示するには、サイド バーで **[完了]** をクリックするか、または `is:done` クエリを使用します。 **[完了]** としてマークされた通知は、5 か月間保存されます。
| サブスクライブ解除     | @mentioned されるか、参加している Team が @mentioned されるか、またはレビューが要求されるまで、受信トレイから通知を自動的に削除し、会話からサブスクライブ解除します。
| Read            | 通知を既読としてマークします。 受信トレイで既読の通知のみを表示するには、`is:read` クエリを使用します。 このクエリには、 **[完了]** としてマークされている通知は含まれません。
| Unread          | 通知を未読としてマークします。 受信トレイで未読の通知のみを表示するには、`is:unread` クエリを使用します。 |

使用可能なキーボード ショートカットについては、「[キーボード ショートカット](/github/getting-started-with-github/keyboard-shortcuts#notifications)」を参照してください。

トリアージオプションを選択する前に、まず通知の詳細をプレビューして調査することができます。 詳細については、「[単一の通知をトリアージする](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification)」を参照してください。

## 複数の通知を同時にトリアージする

複数の通知を同時にトリアージするには、関連する通知を選択し、{% octicon "kebab-horizontal" aria-label="The edit icon" %} ドロップダウンを使用してトリアージ オプションを選択します。

![トリアージオプションと選択した通知を含むドロップダウンメニュー](/assets/images/help/notifications-v2/triage-multiple-notifications-together.png)

## デフォルト通知フィルタ

既定では、受信トレイには、割り当てられたとき、スレッドに参加したとき、Pull Request のレビューを要求されたとき、ユーザー名が直接 @mentioned されたとき、またはメンバーになっている Team が @mentioned されたときのフィルターがあります。

  ![デフォルトのカスタムフィルタ](/assets/images/help/notifications-v2/default-filters.png)

## カスタムフィルタでインボックスをカスタマイズする

独自のカスタムフィルタを 15 個まで追加できます。

{% data reusables.notifications.access_notifications %}
2. フィルター設定を開くには、左側のサイドバーの [フィルター] の横にある {% octicon "gear" aria-label="The Gear icon" %} をクリックします。

  {% tip %}

  **ヒント:** 受信トレイ ビューでクエリを作成し、 **[保存]** をクリックすると、カスタム フィルターの設定が開き、フィルターの受信トレイの結果をすばやくプレビューできます。

  {% endtip %}

3. フィルタの名前とフィルタクエリを追加します。 たとえば、特定のリポジトリの通知のみを表示するには、クエリ `repo:octocat/open-source-project-name reason:participating`を使用してフィルターを作成します。 ネイティブの絵文字キーボードを使用して、絵文字を追加することもできます。 サポートされている検索クエリの一覧については、「[カスタム フィルターでサポートされているクエリ](#supported-queries-for-custom-filters)」を参照してください。

  ![カスタムフィルタの例](/assets/images/help/notifications-v2/custom-filter-example.png)

4. **Create** をクリックしてください。

## カスタムフィルタの制限

カスタムフィルタは現在、以下をサポートしていません。
  - プルリクエストや Issue のタイトルの検索を含む、インボックスでの全文検索。
  - `is:issue`、`is:pr`、および `is:pull-request` クエリ フィルターの区別。 これらのクエリは、Issue とプルリクエストの両方を検索結果として表示します。
  - 15 個以上のカスタムフィルタの作成。
  - デフォルトのフィルタまたはその順序の変更。
  - `NOT` または `-QUALIFIER` を使用した[除外](/github/searching-for-information-on-github/understanding-the-search-syntax#exclude-certain-results)の検索。

## カスタムフィルタでサポートされているクエリ

使用できるフィルタの種類は次のとおりです。
  - リポジトリによるフィルター (`repo:` を使用)
  - ディスカッションの種類によるフィルター (`is:` を使用)
  - 通知理由によるフィルター (`reason:` を使用){% ifversion fpt or ghec %}
  - 通知作成者によるフィルター (`author:` を使用)
  - Organization によるフィルター (`org:` を使用){% endif %}

### サポートされている `repo:` クエリ

`repo:` フィルターを追加するには、リポジトリの所有者をクエリに含める必要があります: `repo:owner/repository`。 オーナーは、通知をトリガーする {% data variables.product.prodname_dotcom %} アセットを所有する Organization またはユーザです。 たとえば、`repo:octo-org/octo-repo` は、Organization 内の octo-repo リポジトリでトリガーされた通知を表示します。

### サポートされている `is:` クエリ

{% data variables.location.product_location %} で特定のアクティビティについて通知をフィルター処理するには、`is` クエリを使います。 たとえば、リポジトリの招待の更新のみを表示するには、`is:repository-invitation` を使用します。{% ifversion not ghae %}また、{% data variables.product.prodname_dependabot_alerts %}のみを表示するには、`is:repository-vulnerability-alert` を使用します。{% endif %}

- `is:check-suite`
- `is:commit`
- `is:gist`
- `is:issue-or-pull-request`
- `is:release`
- `is:repository-invitation`
- `is:repository-vulnerability-alert`{% ifversion fpt or ghec %}
- `is:repository-advisory`{% endif %}
- `is:team-discussion`{% ifversion fpt or ghec %}
- `is:discussion`{% endif %}

{% data variables.product.prodname_dependabot_alerts %}の通知からノイズを減らす方法については、「[{% data variables.product.prodname_dependabot_alerts %}に対する通知の設定](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)」をご覧ください。

`is:` クエリを使用して、通知がトリアージされた方法を記述することもできます。

- `is:saved`
- `is:done`
- `is:unread`
- `is:read`

### サポートされている `reason:` クエリ

更新を受信した理由で通知をフィルター処理するには、`reason:` クエリを使用します。 たとえば、自分 (または自分が所属する Team) が Pull Request のレビューを要求されたときに通知を表示するには、`reason:review-requested` を使用します。 詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#reasons-for-receiving-notifications)」を参照してください。

| クエリ | 説明 |
|-----------------|-------------|
| `reason:assign` | 割り当てられている Issue またはプルリクエストに更新があるとき。
| `reason:author` | プルリクエストまたは Issue を開くと、更新または新しいコメントがあったとき。
| `reason:comment`| Issue、プルリクエスト、または Team ディスカッションにコメントしたとき。
| `reason:participating` | Issue、Pull Request、Team ディスカッションについてコメントしたとき、または @mentioned されたとき。
| `reason:invitation` | Team、Organization、またはリポジトリに招待されたとき。
| `reason:manual` | まだサブスクライブしていない Issue または Pull Request で **[サブスクライブ]** をクリックしたとき。
| `reason:mention` | 直接 @mentioned されたとき。
| `reason:review-requested` | 自分または自分が参加している Team が、プルリクエストのレビューをリクエストされたとき。
| `reason:security-alert` | リポジトリに対してセキュリティアラートが発行されたとき。
| `reason:state-change`  | プルリクエストまたは Issue の状態が変更されたとき。 たとえば、Issue がクローズされたり、プルリクエストがマージされた場合です。
| `reason:team-mention` | メンバーになっている Team が @mentioned されたとき。
| `reason:ci-activity` | リポジトリに、新しいワークフロー実行ステータスなどの CI 更新があるとき。

{% ifversion fpt or ghec %}
### サポートされている `author:` クエリ

ユーザーごとに通知をフィルター処理するには、`author:` クエリを使用します。 作者は、通知されるスレッド（Issue、プルリクエスト、Gist、ディスカッションなど）の元の作者です。 たとえば、Octocat ユーザーによって作成されたスレッドの通知を表示するには、`author:octocat` を使用します。

### サポートされている `org:` クエリ

Organization ごとに通知をフィルター処理するには、`org` クエリを使用します。 クエリで指定する必要のある Organization は、{% data variables.product.prodname_dotcom %} で通知されているリポジトリの Organization です。 このクエリは、複数の Organization に属していて、特定の Organization の通知を表示する場合に便利です。

たとえば、octo-org の Organization からの通知を表示するには、`org:octo-org` を使用します。 

{% endif %}

## {% data variables.product.prodname_dependabot %}カスタムフィルタ

{% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot %} を使って依存関係を最新の状態に保つには、次のカスタム フィルターを使って保存します。
- `is:repository_vulnerability_alert`: {% data variables.product.prodname_dependabot_alerts %}の通知を表示します。
- `reason:security_alert`: {% data variables.product.prodname_dependabot_alerts %}とセキュリティ更新プログラムの Pull Request の通知を表示します。
- `author:app/dependabot`: {% data variables.product.prodname_dependabot %} によって生成される通知を表示します。 これには、{% data variables.product.prodname_dependabot_alerts %}、セキュリティアップデートのプルリクエスト、およびバージョン更新のプルリクエストが含まれます。

{% data variables.product.prodname_dependabot %} の詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」を参照してください。
{% endif %}

{% ifversion ghae %}

{% data variables.product.prodname_dependabot %} を使って安全ではない依存関係についての通知を受け取る場合は、次のカスタム フィルターを使って保存することで、{% data variables.product.prodname_dependabot_alerts %}の通知を表示できます。
- `is:repository_vulnerability_alert` 
- `reason:security_alert`

{% data variables.product.prodname_dependabot %} の詳細については、「[{% data variables.product.prodname_dependabot_alerts %}について](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)」を参照してください。
{% endif %}

