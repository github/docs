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
ms.openlocfilehash: 750a3a9ad87ff9aa709b84a98f548d85d53072ee
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091456'
---
サブスクリプションを理解し、登録を解除するかどうかを決定するのに役立つ情報については、「[サブスクリプションの表示](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions)」を参照してください。

{% note %}

**注:** 登録を解除する代わりに、リポジトリを無視するオプションがあります。 リポジトリを無視した場合、通知は届きません。 @mentioned されても通知されなくなるため、リポジトリを無視することはお勧めしません。 {% ifversion fpt or ghec %}不正使用の発生により、リポジトリを無視したい場合は、{% data variables.contact.contact_support %} に問い合わせてサポートを受けてください。 {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## サブスクライブ解除の方法を選択する

リポジトリをすばやくウォッチ解除 (または登録解除) するには、[github.com/watching](https://github.com/watching) に移動して、フォローしているすべてのリポジトリを表示します。 詳細については、「[リポジトリのウォッチ解除](#unwatching-repositories)」を参照してください

複数の通知のサブスクライブ解除を同時に行うには、インボックスまたはプランページを使用します。 これらのオプションはどちらも、[Watched repositories] ページよりもサブスクリプションに関するより多くのコンテキストを提供しています。

### インボックスからサブスクライブ解除する利点

インボックスの通知をサブスクライブ解除する場合、他にも複数のトリアージオプションがあり、カスタムフィルタとディスカッションタイプで通知をフィルタ処理できます。 詳細については、「[受信トレイからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)」を参照してください。

### サブスクリプションページからサブスクライブ解除する利点

プランページで通知のサブスクライブを解除すると、サブスクライブしている通知がさらに表示され、[Most recently subscribed] または [Least recently subscribed] で並べ替えることができます。

サブスクリプション ページには、受信トレイで **完了** としてマークした通知を含む、現在サブスクライブしているすべての通知が表示されます。

サブスクリプションは、リポジトリと通知を受信する理由でのみフィルタできます。

## インボックスの通知からサブスクライブ解除する

インボックスの通知をサブスクライブ解除すると、通知は自動的にインボックスから削除されます。

{% data reusables.notifications.access_notifications %}
1. 通知インボックスから、サブスクライブ解除する通知を選択します。
2. **[登録解除]** をクリックします。
  ![メイン受信トレイの [登録解除] オプション](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## サブスクリプションページで通知をサブスクライブ解除する

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、リポジトリ リストの下にある [通知の管理] ドロップダウンを使用して、 **[サブスクリプション]** をクリックします。
  ![[通知の管理] ドロップダウン メニュー オプション](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. サブスクライブ解除する通知を選択します。 右上の **[登録解除]** をクリックします。
  ![[サブスクリプション] ページ](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## リポジトリのウォッチを解除する

リポジトリのウォッチを解除すると、会話に参加したり @mentioned されたりしない限り、そのリポジトリからの今後の更新から登録解除されます。

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、リポジトリ リストの下にある [通知の管理] ドロップダウンを使用して、 **[Watched repositories]\(監視対象のリポジトリ\)** をクリックします。

  ![[Manage notifications] ドロップダウンメニューオプション](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Watch しているリポジトリのページで、Watchしているリポジトリを評価した後、次のいずれかを選択します。
   
   - リポジトリの Watch 解除
   - リポジトリのすべての通知を無視
   - 有効にした場合は、通知を受信するイベントの種類をカスタマイズします ({% data reusables.notifications-v2.custom-notification-types %})
   
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. 必要に応じて、特定のユーザーまたは組織が所有するすべてのリポジトリから登録を解除するには、 **[すべてのウォッチを解除]** ドロップダウンを選択し、登録を解除するリポジトリがある組織をクリックします。 すべてのリポジトリの監視を解除するボタンは、10 個を超えるリポジトリですべてのアクティビティまたはカスタム通知をウォッチしている場合にのみ使用できます。

   ![[すべてのウォッチを解除] ボタンのスクリーンショット。](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - **[ウォッチ解除]** をクリックして、選択したユーザーまたは組織が所有するリポジトリのウォッチを解除することを確認するか、 **[キャンセル]** をクリックして取り消します。

   ![すべての確認ダイアログのウォッチを解除したスクリーンショット。](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
