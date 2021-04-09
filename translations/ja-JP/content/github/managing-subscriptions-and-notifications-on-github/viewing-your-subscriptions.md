---
title: サブスクリプションを表示する
intro: '通知の送信元と通知のボリュームを把握するため、定期的にサブスクリプションを確認し、リポジトリを Watch することをお勧めします。'
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
  github-ae: '*'
topics:
  - notifications
---

{% data variables.product.product_name %} で進行中のアクティビティのサブスクリプションの通知を受け取ります。 会話をサブスクライブする理由はたくさんあります。 詳しい情報については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)」を参照してください。

健全な通知ワークフローの一環として、サブスクリプションの監査とサブスクライブ解除をお勧めします。 サブスクライブ解除に関する詳しい情報については、「[サブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)」を参照してください。

### 通知過多の理由を診断する

インボックスの通知が多すぎて管理できない場合は、サブスクリプションが多すぎないか確認したり、通知設定を変更して、サブスクリプションと受信する通知の種類を減らしたりすることを検討してください。 たとえば、設定を無効にして、チームまたはリポジトリに参加するたびにすべてのリポジトリとすべての Team ディスカッションを自動的に監視することを検討できます。

![自動 Watch](/assets/images/help/notifications-v2/automatic-watching-example.png)

詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)」を参照してください。

リポジトリのサブスクリプションの概要を確認するには、「[Watch しているリポジトリを確認する](#reviewing-repositories-that-youre-watching)」を参照してください。
{% if currentVersion == "free-pro-team@latest" %}
{% tip %}

**参考:** [Watch ページ](https://github.com/watching)または {% data variables.product.prodname_dotcom_the_website %} の任意のリポジトリページにある [**Watch/Unwatch**] ドロップダウンリストの [**Custom**] オプションを使用して、通知するイベントの種類を選択できます。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)」を参照してください。

{% endtip %}
{% endif %}

過去に Watch することを選択したリポジトリが忘れらていることが多くあります。 「Watched repositories」ページから、リポジトリから素早く Watch 解除することができます。 サブスクライブ解除する方法について詳しくは、{% data variables.product.prodname_blog %} の「[Watch 解除の推奨](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)」および「[サブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)」を参照してください。 トリアージワークフローを作成して、受信する通知を支援することもできます。 トリアージワークフローのガイダンスについては、「[通知をトリアージするためのにワークフローをカスタマイズする](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)」を参照してください。

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
2. Watch しているリポジトリを評価し、それらの更新がまだ関連していて有用であるかどうかを判断します。 リポジトリを Watch すると、そのリポジトリのすべての会話が通知されます。
{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
  ![Watch対象の通知ページ](/assets/images/help/notifications-v2/watched-notifications.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
  ![Watch対象の通知ページ](/assets/images/help/notifications-v2/watched-notifications-custom.png)
{% endif %}

  {% tip %}

  **参考:** リポジトリを Watch する代わりに、リポジトリ内のリリースについて、Issue、プルリクエスト、リリースまたはディスカッション (リポジトリで有効になっている場合){% if currentVersion == "free-pro-team@latest" %}、または{% else %}リポジトリ内のリリースの場合{% endif %}、これらのオプションの任意の組み合わせが更新された場合にのみ通知を受信するか、リポジトリを完全に Watch 解除するかを検討してください。

  リポジトリを Watch 解除しても、@メンションされたときやスレッドに参加しているときには通知を受信することができます。 特定のイベントタイプの通知を受信するように設定すると、リポジトリにこれらのイベントタイプが更新された場合、スレッドに参加している場合、または参加している自分または Team が @メンションされた場合にのみ通知されます。

  {% endtip %}
