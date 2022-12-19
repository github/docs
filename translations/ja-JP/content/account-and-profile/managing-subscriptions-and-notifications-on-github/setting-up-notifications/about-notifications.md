---
title: 通知について
intro: '通知では、サブスクライブしている {% data variables.product.product_location %} のアクティビティに関する最新情報をお知らせします。 通知受信トレイを使用して、更新情報のカスタマイズ、トリアージ、管理を行うことができます。'
redirect_from:
  - /articles/notifications
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: 87034df88eb94c1d880806f01cb8748ed555a284
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147432025'
---
## 通知とサブスクリプション

サブスクリプションを通じて、{% data variables.product.product_location %} の特定のアクティビティに関する継続的な更新を受信することを選択できます。 通知では、サブスクライブしている特定のアクティビティについての更新を受信します。

### サブスクリプション オプション

サブスクライブできる通知は次のとおりです。
- 特定の Issue、プルリクエスト、または Gist の会話。
- リポジトリまたは Team ディスカッション内のすべてのアクティビティ。
- {% data variables.product.prodname_actions %} で設定されたリポジトリ内のワークフローのステータスなどの CI アクティビティ。 
- リポジトリ {% data reusables.notifications-v2.custom-notification-types %} (有効な場合)。

フォークを除き、あなたがプッシュアクセスを持つすべてのリポジトリを自動的にWatchすることもできます。 **[ウォッチ]** をクリックすると、手動でアクセスできる他のリポジトリをウォッチできます。

会話に関心がなくなった場合は、今後受信する通知の種類を、サブスクライブ解除、Watch 解除、またはカスタマイズできます。 たとえば、特定のリポジトリからの通知を受信しない場合は、 **[登録を解除]** をクリックします。 詳しくは、「[サブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)」をご覧ください。

### デフォルトのサブスクリプション

一般に、次の場合、デフォルトで会話に自動的にサブスクライブされます。
- 通知設定で、参加しているリポジトリまたは Team の自動 Watch を無効にしていない場合。 既定では、この設定は有効になっています。
- Issue あるいはプルリクエストが割り当てられている場合。
- プルリクエストや Issue をオープンしたり、Team ディスカッションの投稿を作成したりした場合。
- スレッドにコメントした場合。
- **[ウォッチ]** または **[サブスクライブ]** をクリックして、手動でスレッドにサブスクライブした場合。
- ユーザー名が @mentioned された場合。
- Issue のクローズやプルリクエストのマージなどにより、スレッドの状態を変更した場合。
- メンバーになっているチームが @mentioned された場合。

既定では、作成したすべてのリポジトリと、パーソナル アカウントが所有するすべてのリポジトリは、自動的にウォッチされます。

自動的にサブスクライブしている会話からサブスクライブ解除するには、通知設定を変更するか、{% data variables.product.product_location %} のアクティビティを直接登録解除するか、またはウォッチを解除します。 詳しくは、「[サブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)」をご覧ください。

## 通知とサブスクリプションをカスタマイズする

通知は、[https://github.com/notifications](https://github.com/notifications) {% ifversion fpt or ghes or ghec %}と {% data variables.product.prodname_mobile %} アプリ内{% endif %}の通知受信トレイと、電子メール、またはこれらのオプションの組み合わせを使用して表示するように選択できます。

通知設定で、受信する更新の種類と更新の送信先をカスタマイズできます。 詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)」を参照してください。

サブスクリプションを管理しやすい状態に保つには、サブスクリプションと Watch したリポジトリを確認し、必要に応じてサブスクライブ解除します。 詳細については、「[GitHub におけるアクティビティのサブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」を参照してください。

特定のプルリクエストやプルリクエストの更新の受信方法をカスタマイズするには、Issue またはプルリクエスト内で設定できます。 詳細については、「[単一の通知をトリアージする](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)」を参照してください。

{% ifversion fpt or ghes or ghec %}プッシュ通知は、{% data variables.product.prodname_mobile %} アプリでカスタマイズしてスケジュールできます。 詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-mobile)」を参照してください。
{% endif %}

## 通知の受信理由

インボックスにはデフォルトのフィルタが設定されています。これは、通知をフォローアップする必要がある最も一般的な理由です。 インボックス フィルターの詳細については、「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)」を参照してください。

インボックスには、通知を受信する `reasons` がラベルとして表示されます。

![インボックスの理由ラベル](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

通知をサブスクライブしている理由でインボックスをフィルタできます。 たとえば、レビューを要求された pull request のみを表示するには、`review-requested` クエリ フィルタを使用できます。

![レビューをリクエストした理由で通知をフィルタ](/assets/images/help/notifications-v2/review-requested-reason.png)

通知をメール送信するように設定していて、自分宛ではない通知を受信していると思われる場合は、正しい受信者を示すメールヘッダを使用したトラブルシューティングを検討してください。 詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)」を参照してください。

## インボックスからの通知をトリアージする

通知を効率よく管理するために、次のオプションを使用してインボックスをトリアージできます。
- **[完了]** でインボックスから通知を削除します。 サイドバーで **[完了]** をクリックするか、`is:done` クエリを使用して、**完了** 通知をすべて 1 か所で確認できます。
- 通知を既読または未読としてマークします。
- 後で確認するために、通知を **保存** します。 **保存した** 通知にはインボックスでフラグが付けられます。 **[保存済み]** をクリックするか、`is:saved` クエリを使用して、**保存済み** の通知をすべてサイドバーで 1 か所で確認できます。
- 指定した通知と会話からの今後の更新を、自動的にサブスクライブ解除します。 サブスクライブ解除すると、インボックスから通知も削除されます。 会話をサブスクライブ解除しても、誰かがユーザ名または更新を受信している Team にメンションした場合、この会話からの通知をまた受信するようになります。

インボックスから複数の通知を一括でトリアージすることもできます。 詳細については、「[受信トレイからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)」を参照してください。

## 通知のインボックスをカスタマイズする

{% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} または {% data variables.product.prodname_mobile %}{% endif %} のインボックスの通知のグループにフォーカスするために、カスタム フィルターを作成できます。 たとえば、自分がコントリビュートしているオープンソースプロジェクトのカスタムフィルタを作成し、自分がメンションされているリポジトリの通知のみを表示することができます。 詳細については、「[受信トレイからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)」を参照してください。 トリアージ ワークフローをカスタマイズする方法のその他の例については、「[通知をトリアージするためのワークフローをカスタマイズする](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)」を参照してください。

## 通知の保持ポリシー

**[保存済み]** としてマークされていない通知は、5 か月間保持されます。 **[保存済み]** としてマークされた通知は無期限に保持されます。 5か月以上前に保存した通知の保存を解除すると、通知は1日以内にインボックスから消えます。

## フィードバックとサポート

通知に対するフィードバックや機能の要求がある場合は、[{% data variables.product.prodname_github_community %} ディスカッション](https://github.com/orgs/community/discussions/categories/general)を使用してください。
