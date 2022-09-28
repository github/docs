---
title: サブスクリプションを表示する
intro: 通知の送信元と通知のボリュームを把握するため、定期的にサブスクリプションを確認し、リポジトリを Watch することをお勧めします。
redirect_from:
  - /articles/subscribing-to-conversations
  - /articles/unsubscribing-from-conversations
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories
  - /articles/unwatching-repositories
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
  - /github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: View subscriptions
ms.openlocfilehash: 34faad79004d34f5beb14e8992b9aff4e6a3ab39
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145117238'
---
{% data variables.product.product_name %} で進行中のアクティビティのサブスクリプションの通知を受け取ります。 会話をサブスクライブする理由はたくさんあります。 詳細については、「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions)」を参照してください。

健全な通知ワークフローの一環として、サブスクリプションの監査とサブスクライブ解除をお勧めします。 登録解除のオプションの詳細については、「[サブスクリプションの管理」を](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)参照してください。

## 通知過多の理由を診断する

インボックスの通知が多すぎて管理できない場合は、サブスクリプションが多すぎないか確認したり、通知設定を変更して、サブスクリプションと受信する通知の種類を減らしたりすることを検討してください。 たとえば、設定を無効にして、チームまたはリポジトリに参加するたびにすべてのリポジトリとすべての Team ディスカッションを自動的に監視することを検討できます。

![自動 Watch](/assets/images/help/notifications-v2/automatic-watching-example.png)

詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching)」を参照してください。

リポジトリのサブスクリプションの概要を確認するには、「[Watch しているリポジトリを確認する](#reviewing-repositories-that-youre-watching)」を参照してください。 {% tip %}

**ヒント:** 通知するイベントの種類を選択するには、**監視ページ** の **[Watch/Watch 解除]** ドロップダウン リストの [[カスタム]](https://github.com/watching) オプションを使用するか、{% data variables.product.product_name %} の任意のリポジトリ ページを使用します。 詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)」を参照してください。

{% endtip %}

過去に Watch することを選択したリポジトリが忘れらていることが多くあります。 「Watched repositories」ページから、リポジトリから素早く Watch 解除することができます。 サブスクライブ解除する方法について詳しくは、{% data variables.product.prodname_blog %} の「[Watch 解除の推奨](https://github.blog/changelog/2020-11-10-unwatch-recommendations/)」および「[サブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)」を参照してください。 トリアージワークフローを作成して、受信する通知を支援することもできます。 トリアージ ワークフローのガイダンスについては、「[通知をトリアージするためのワークフローのカスタマイズ](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)」を参照してください。

## サブスクリプションのリストを確認する

{% data reusables.notifications.access_notifications %}
1. 左側のサイドバーの、通知元のリポジトリリストの下にある [通知の管理] ドロップダウンを使用して、 **[サブスクリプション]** をクリックします。
  ![[通知の管理] ドロップダウン メニュー オプション](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. フィルタとソートを使用して、サブスクリプションのリストを絞り込み、通知の受信を希望しない会話のサブスクリプションを解除します。

  ![サブスクリプションページ](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**ヒント:**
- 忘れている可能性のあるサブスクリプションを確認するには、[least recently subscribed] でソートします。

- 引き続き通知が受信可能なリポジトリのリストを確認するには、[filter by repository] ドロップダウンメニューのリポジトリリストを参照します。

{% endtip %}

## Watch しているリポジトリを確認する

1. 左側のサイドバーの、リポジトリ リストの下にある [通知の管理] ドロップダウン メニューを使用して、 **[Watched repositories]** をクリックします。
  ![[通知の管理] ドロップダウン メニュー オプション](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Watch しているリポジトリを評価し、それらの更新がまだ関連していて有用であるかどうかを判断します。 リポジトリを Watch すると、そのリポジトリのすべての会話が通知されます。
![Watch 対象の通知ページ](/assets/images/help/notifications-v2/watched-notifications-custom.png)

  {% tip %}

  **ヒント:** リポジトリを監視する代わりに、{% data reusables.notifications-v2.custom-notification-types %} (リポジトリで有効になっている場合) の更新がある場合、またはこれらのオプションの任意の組み合わせがある場合にのみ通知を受信するか、リポジトリの監視を完全に解除することを検討してください。
  
  リポジトリの Watch を解除しても、@mentioned されたときやスレッドに参加しているときには通知を受信することができます。 特定のイベント タイプの通知を受信するように設定すると、リポジトリにこれらのイベント タイプが更新された場合、スレッドに参加している場合、または参加している自分またはチームが @mentioned された場合にのみ通知されます。

  {% endtip %}
