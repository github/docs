---
title: サブスクリプションを表示する
intro: 通知の送信元と通知のボリュームを把握するため、定期的にサブスクリプションを確認し、リポジトリを Watch することをお勧めします。
redirect_from:
  - /articles/subscribing-to-conversations/
  - /articles/unsubscribing-from-conversations/
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories/
  - /articles/unwatching-repositories/
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories/
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

{% data variables.product.product_name %} で進行中のアクティビティのサブスクリプションの通知を受け取ります。 There are many reasons you can be subscribed to a conversation. 詳しい情報については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)」を参照してください。

We recommend auditing and unsubscribing from your subscriptions as a part of a healthy notifications workflow. For more information about your options for unsubscribing, see "[Managing subscriptions](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

### 通知過多の理由を診断する

When your inbox has too many notifications to manage, consider whether you have oversubscribed or how you can change your notification settings to reduce the subscriptions you have and the types of notifications you're receiving. For example, you may consider disabling the settings to automatically watch all repositories and all team discussions whenever you've joined a team or repository.

![自動 Watch](/assets/images/help/notifications-v2/automatic-watching-example.png)

詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)」を参照してください。

To see an overview of your repository subscriptions, see "[Reviewing repositories that you're watching](#reviewing-repositories-that-youre-watching)." Many people forget about repositories that they've chosen to watch in the past. From the "Watched repositories" page you can quickly unwatch repositories. For more information on ways to unsubscribe, see "[Managing subscriptions](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)."

### サブスクリプションのリストを確認する

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、通知元のリポジトリリストの下にある [Manage notifications] ドロップダウンを使用して、[**Subscriptions**] をクリックします。 ![[Manage notifications] ドロップダウンメニューオプション](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. フィルタとソートを使用して、サブスクリプションのリストを絞り込み、通知の受信を希望しない会話のサブスクリプションを解除します。

  ![サブスクリプションページ](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**参考:**
- 忘れている可能性のあるサブスクリプションを確認するには、[least recently subscribed] でソートします。

- 引き続き通知が受信可能なリポジトリのリストを確認するには、[filter by repository] ドロップダウンメニューのリポジトリリストを参照します。

{% endtip %}

### Watch しているリポジトリを確認する

1. 左側のサイドバーの、リポジトリリストの下にある [Manage notifications] ドロップダウンメニューを使用して、[**Watched repositories**] をクリックします。 ![[Manage notifications] ドロップダウンメニューオプション](/assets/images/help/notifications-v2/manage-notifications-options.png)

3. Watch しているリポジトリを評価し、それらの更新がまだ関連していて有用であるかどうかを判断します。 リポジトリを Watch すると、そのリポジトリのすべての会話が通知されます。

  ![Watch対象の通知ページ](/assets/images/help/notifications-v2/watched-notifications.png)

  {% tip %}

  **ヒント:** リポジトリを Watch する代わりに、リポジトリのリリースのみを Watch するか、リポジトリを完全に Watch 解除することを検討してください。 リポジトリを Watch 解除しても、@メンションされたときやスレッドに参加しているときには通知を受信することができます。 リポジトリのリリースのみを Watch する場合は、新しいリリースがあるとき、スレッドに参加しているとき、または自分または参加している Team が@メンションされたときにのみ通知されます。

  {% endtip %}

### 個々のリポジトリの Watch 設定を行う

リポジトリごとに Watch するどうかを選択できます。 また、新しいリリースのみの通知を受け取るか、リポジトリごとに無視するかどうかを選択することもできます。

{% data reusables.repositories.navigate-to-repo %}
2. 右上隅の [Watch] ドロップダウンメニューをクリックして、Watch オプションを選択します。 ![リポジトリのドロップダウンメニューの Watch オプション](/assets/images/help/notifications-v2/watch-repository-options.png)
