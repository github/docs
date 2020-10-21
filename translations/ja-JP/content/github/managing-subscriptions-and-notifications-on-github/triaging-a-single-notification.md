---
title: 単一の通知をトリアージする
intro: '単一の通知を確認して調査する場合、詳細な通知ビュー用に最適化されたいくつかのトリアージオプションがあります。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
---

### 単一の通知を保存する

単一の通知を保存して後で確認するには、通知の右側にある {% octicon "bookmark" aria-label="The bookmark icon" %} をクリックします。 You can only save one notification at a time.

Saved notifications are kept indefinitely and can be viewed by clicking **Saved** in the sidebar or with the `is:saved` query. 5か月以上前に保存した通知の保存を解除すると、通知は1日以内にインボックスから消えます。

  ![Save triaging option](/assets/images/help/notifications-v2/save-triaging-option.png)

### 通知を調査する

インボックスから個々の通知をクリックすると、通知の元となった会話に移動します。 ページの上部で、次のことができます。
- 個々の通知を完了としてマークする
- 今後の通知をサブスクライブ解除する
- 通知を既読としてマークする
- 後で確認するために通知を保存する
- 通知インボックスに戻る

For more information about your triage options, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)."

### Issue またはプルリクエストの今後の更新の受信タイミングをカスタマイズする

特定の Issue またはプルリクエストの今後の通知の受信方法を選択できます。

1. Issue またはプルリクエストの右側の列の [Notifications] の横にある [**Customize**] をクリックします。

  ![Customize option under "Notifications"](/assets/images/help/notifications-v2/customize-notifications-for-specific-thread.png)

2. Select **Custom** and choose when you'd like to receive a notification update for this thread. For example, you can choose to receive an update when the pull request has been merged, closed, or reopened. You will be subscribed again if you participate in the thread, your username is @mentioned, or a team you're a member of is @mentioned.

  ![Options for customizing notifications](/assets/images/help/notifications-v2/custom-options-for-customizing-notification-thread-updates.png)

3. [**Save**] をクリックします。
