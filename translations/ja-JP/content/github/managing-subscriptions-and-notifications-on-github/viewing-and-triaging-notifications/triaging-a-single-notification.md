---
title: 単一の通知をトリアージする
intro: 単一の通知を確認して調査する場合、詳細な通知ビュー用に最適化されたいくつかのトリアージオプションがあります。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification
---

### 単一の通知を保存する

単一の通知を保存して後で確認するには、通知の右側にある {% octicon "bookmark" aria-label="The bookmark icon" %} をクリックします。 一度に保存できる通知は 1 つだけです。

保存した通知は無期限に保持され、サイドバーの [**Saved**] をクリックするか、`is:saved` クエリで表示できます。 5か月以上前に保存した通知の保存を解除すると、通知は1日以内にインボックスから消えます。

  ![トリアージの保存オプション](/assets/images/help/notifications-v2/save-triaging-option.png)

### 通知を調査する

インボックスから個々の通知をクリックすると、通知の元となった会話に移動します。 ページの上部で、次のことができます。
- 個々の通知を完了としてマークする
- 今後の通知をサブスクライブ解除する
- 通知を既読としてマークする
- 後で確認するために通知を保存する
- 通知インボックスに戻る

トリアージオプションの詳細については、「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)」を参照してください。

### Issue またはプルリクエストの今後の更新の受信タイミングをカスタマイズする

特定の Issue またはプルリクエストの今後の通知の受信方法を選択できます。

1. Issue またはプルリクエストの右側の列の [Notifications] の横にある [**Customize**] をクリックします。

  ![[Notifications] の下のカスタマイズオプション](/assets/images/help/notifications-v2/customize-notifications-for-specific-thread.png)

2. [**Custom**] を選択し、このスレッドの更新通知を受信するタイミングを選択します。 たとえば、プルリクエストがマージ、クローズ、または再オープンされたときに更新を受信するように選択できます。 スレッドに参加するか、ユーザー名が @メンションされているか、メンバーである Team が @メンションされている場合は、再度サブスクライブされます。

  ![通知をカスタマイズするオプション](/assets/images/help/notifications-v2/custom-options-for-customizing-notification-thread-updates.png)

3. [**Save**] をクリックします。
