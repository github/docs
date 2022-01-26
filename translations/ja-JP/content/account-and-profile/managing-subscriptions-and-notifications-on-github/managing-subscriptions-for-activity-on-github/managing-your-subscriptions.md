---
title: サブスクリプションを管理する
intro: 通知を効率的に管理するにあたって、サブスクライブ解除するにはいくつかの方法があります。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions
shortTitle: Manage your subscriptions
---

サブスクリプションを理解し、サブスクライブ解除するかどうかを決めるため、「[サブスクリプションを表示する](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)」を参照してください。

{% note %}

**注釈:** サブスクライブ解除する代わりに、リポジトリを無視するオプションがあります。 リポジトリを無視した場合、通知は届きません。 あなたが @メンションされても通知されなくなるため、リポジトリを無視することはおすすめしません。 {% ifversion fpt or ghec %}不正使用の発生により、リポジトリを無視する場合は、{% data variables.contact.contact_support %} 問い合わせてサポートを受けてください。 {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## サブスクライブ解除の方法を選択する

To unwatch (or unsubscribe from) repositories quickly, navigate to [github.com/watching](https://github.com/watching) to see all the repositories you're following. For more information, see "[Unwatching repositories](#unwatching-repositories)."

複数の通知のサブスクライブ解除を同時に行うには、インボックスまたはプランページを使用します。 これらのオプションはどちらも、[Watched repositories] ページよりもサブスクリプションに関するより多くのコンテキストを提供しています。

### インボックスからサブスクライブ解除する利点

インボックスの通知をサブスクライブ解除する場合、他にも複数のトリアージオプションがあり、カスタムフィルタとディスカッションタイプで通知をフィルタ処理できます。 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)」を参照してください。

### サブスクリプションページからサブスクライブ解除する利点

プランページで通知のサブスクライブを解除すると、サブスクライブしている通知がさらに表示され、[Most recently subscribed] または [Least recently subscribed] で並べ替えることができます。

プランページには、インボックスで [**Done**] としてマークした通知を含む、現在サブスクライブしているすべての通知が表示されます。

サブスクリプションは、リポジトリと通知を受信する理由でのみフィルタできます。

## インボックスの通知からサブスクライブ解除する

インボックスの通知をサブスクライブ解除すると、通知は自動的にインボックスから削除されます。

{% data reusables.notifications.access_notifications %}
1. 通知インボックスから、サブスクライブ解除する通知を選択します。
2. Click **Unsubscribe.** ![メインインボックスの [Unsubcribe] オプション](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## サブスクリプションページで通知をサブスクライブ解除する

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、リポジトリリストの下にある [Manage notifications] ドロップダウンを使用して、[**Subscriptions**] をクリックします。 ![[Manage notifications] ドロップダウンメニューオプション](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. サブスクライブ解除する通知を選択します。 右上にある [**Unsubscribe**] をクリックします。 ![サブスクリプションページ](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## Unwatching repositories

リポジトリを Watch 解除すると、会話に参加したり@メンションされたりしない限り、そのリポジトリからの今後の更新をサブスクライブ解除します。

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、リポジトリリストの下にある [Manage notifications] ドロップダウンを使用して、[**Watched repositories**] をクリックします。

  ![[Manage notifications] ドロップダウンメニューオプション](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Watch しているリポジトリのページで、Watchしているリポジトリを評価した後、次のいずれかを選択します。
   {%- ifversion fpt or ghes > 3.0 or ghae or ghec %}
   - リポジトリの Watch 解除
   - Ignore all notifications for a repository
   - If enabled, customize the types of event you receive notifications for ({% data reusables.notifications-v2.custom-notification-types %})
   {%- else %}
   - リポジトリの Watch 解除
   - Only watch releases for a repository
   - Ignore all notifications for a repository
   {%- endif %}
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. Optionally, to unsubscribe from all repositories owned by a given user or organization, select the **Unwatch all** dropdown and click the organization whose repositories you'd like to unsubscribe from. The button to unwatch all repositories is only available if you are watching all activity or custom notifications on over 10 repositories.

   ![Screenshot of the Unwatch All button.](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - Click **Unwatch** to confirm that you want to unwatch the repositories owned by the selected user or organization, or click **Cancel** to cancel.

   ![Screenshot of the unwatch all confirmation dialogue.](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
