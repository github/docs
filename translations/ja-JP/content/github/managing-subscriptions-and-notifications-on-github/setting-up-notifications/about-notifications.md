---
title: 通知について
intro: '通知では、サブスクライブしている {% data variables.product.product_name %} のアクティビティに関する最新情報をお知らせします。 通知インボックスを使用して、更新をカスタマイズ、トリアージ、および管理できます。'
redirect_from:
  - /articles/notifications/
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.mobile.ghes-release-phase %}
{% endif %}

### 通知とサブスクリプション

サブスクリプションを通じて、{% data variables.product.product_name %} の特定のアクティビティに関する継続的な更新を受信するかを選択できます。 通知では、サブスクライブしている特定のアクティビティについての更新を受信します。

#### サブスクリプションのオプション

サブスクライブできる通知は次のとおりです。
- 特定の Issue、プルリクエスト、または Gist の会話。
- リポジトリまたは Team ディスカッション内のすべてのアクティビティ。
- {% data variables.product.prodname_actions %} で設定されたリポジトリ内のワークフローのステータスなどの CI アクティビティ。 {% if currentVersion == "free-pro-team@latest" or  currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}
- Repository {% data reusables.notifications-v2.custom-notification-types %} (if enabled). {% elsif currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
- Releases in a repository.{% endif %}

フォークを除き、あなたがプッシュアクセスを持つすべてのリポジトリを自動的にWatchすることもできます。 [**Watch**] をクリックすると、手動でアクセスできる他のリポジトリを Watch できます。

会話に関心がなくなった場合は、今後受信する通知の種類を、サブスクライブ解除、Watch 解除、またはカスタマイズできます。 たとえば、特定のリポジトリからの通知を受信しない場合は、[**Unsubscribe**] をクリックします。 詳しい情報については、「[サブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)」を参照してください。

#### デフォルトのサブスクリプション

一般に、次の場合、デフォルトで会話に自動的にサブスクライブされます。
- 通知設定で、参加しているリポジトリまたは Team の自動 Watch を無効にしていない場合。 このオプションはデフォルトで有効になっています。
- Issue あるいはプルリクエストが割り当てられている場合。
- プルリクエストや Issue をオープンしたり、Team ディスカッションの投稿を作成したりした場合。
- スレッドにコメントした場合。
- [**Watch**] または [**Subscribe**] をクリックして、手動でスレッドをサブスクライブした場合。
- ユーザ名が@メンションされていた場合。
- Issue のクローズやプルリクエストのマージなどにより、スレッドの状態を変更した場合。
- メンバーになっている Team が@メンションされていた場合。

デフォルトで、作成したすべてのリポジトリと、ユーザアカウントが所有するすべてのリポジトリは、自動的に Watch されます。

自動的にサブスクライブしている会話をサブスクライブ解除するには、通知設定を変更するか、{% data variables.product.product_name %} のアクティビティを直接サブスクライブ解除または Watch 解除します。 詳しい情報については、「[サブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions)」を参照してください。

### 通知とサブスクリプションをカスタマイズする

[https://github.com/notifications](https://github.com/notifications){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} の通知インボックスと {% data variables.product.prodname_mobile %} アプリケーション{% endif %}、メール、またはこれらのオプションの組み合わせから通知を表示できます。

通知設定で、受信する更新の種類と更新の送信先をカスタマイズできます。 詳しい情報については「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)」を参照してください。

サブスクリプションを管理しやすい状態に保つには、サブスクリプションと Watch したリポジトリを確認し、必要に応じてサブスクライブ解除します。 詳しい情報については、「[GitHub におけるアクティビティのサブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」を参照してください。

特定のプルリクエストやプルリクエストの更新の受信方法をカスタマイズするには、Issue またはプルリクエスト内で設定できます。 詳しい情報については、「[単一の通知をトリアージする](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22"%}
You can customize and schedule push notifications in the {% data variables.product.prodname_mobile %} app. 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-for-mobile)」を参照してください。
{% endif %}

### 通知の受信理由

インボックスにはデフォルトのフィルタが設定されています。これは、通知をフォローアップする必要がある最も一般的な理由です。 インボックスフィルタに関する詳しい情報については「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters)」を参照してください。

インボックスには、通知の受信 `reasons`（理由）がラベルとして表示されます。

![インボックスの理由ラベル](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

通知をサブスクライブしている理由でインボックスをフィルタできます。 たとえば、レビューがリクエストされたプルリクエストのみを表示するには、`review-requested` クエリフィルタを使用できます。

![レビューをリクエストした理由で通知をフィルタ](/assets/images/help/notifications-v2/review-requested-reason.png)

通知をメール送信するように設定していて、自分宛ではない通知を受信していると思われる場合は、正しい受信者を示すメールヘッダを使用したトラブルシューティングを検討してください。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)」を参照してください。

### インボックスからの通知をトリアージする

通知を効率よく管理するために、次のオプションを使用してインボックスをトリアージできます。
- [**Done**] でインボックスから通知を削除します。 サイドバーの [**Done**] をクリックするか、クエリ `is:done` を使用すると、 **完了済**の通知をすべて1か所で確認できます。
- 通知を既読または未読としてマークします。
- 後で確認するために、通知を**保存**します。 **保存済**の通知には、受信トレイでフラグが付けられます。 サイドバーの [**Saved**] をクリックするか、クエリ `is:saved` を使用すると、 **保存済**の通知をすべて1か所で確認できます。
- 指定した通知と会話からの今後の更新を、自動的にサブスクライブ解除します。 サブスクライブ解除すると、インボックスから通知も削除されます。 会話をサブスクライブ解除しても、誰かがユーザ名または更新を受信している Team にメンションした場合、この会話からの通知をまた受信するようになります。

インボックスから複数の通知を一括でトリアージすることもできます。 詳しい情報については「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)」を参照してください。

### 通知のインボックスをカスタマイズする

{% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "2.22" %} または {% data variables.product.prodname_mobile %}{% endif %}のインボックスにある通知のグループにフォーカスするために、カスタムフィルタを作成できます。 たとえば、自分がコントリビュートしているオープンソースプロジェクトのカスタムフィルタを作成し、自分がメンションされているリポジトリの通知のみを表示することができます。 詳しい情報については「[インボックスからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox)」を参照してください。 トリアージしているワークフローをカスタマイズする方法のその他の例については、「[通知をトリアージするためのワークフローをカスタマイズする](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications)」を参照してください。

### 通知の保持ポリシー

**保存済**としてマークされていない通知は、5か月間保持されます。 **保存済**としてマークされている通知は、無期限に保持されます。 5か月以上前に保存した通知の保存を解除すると、通知は1日以内にインボックスから消えます。

### フィードバックとサポート

通知に関するフィードバックまたは機能のリクエストがある場合は、[通知のフィードバックフォーム](https://support.github.com/contact/feedback?contact%5Bcategory%5D=notifications&contact%5Bsubject%5D=Product+feedback)を使用してください。
