---
title: 通知をトリアージするためのワークフローをカスタマイズする
intro: 'これらのワークフロー例を調整してカスタマイズし、通知をトリアージするための理想的なワークフローを作成することができます。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
---

### インボックスのトリアージを開始する

Before you start triaging your inbox, consider whether you prefer to first find and respond to the most important updates or to clear your inbox of distracting updates that are easy to remove or triage.

You may decide to use a combination of both approaches at various times depending on the volume of notifications you have.

For an example workflow of finding and responding to the most important notifications, see "[Checking your highest notification priorities](#checking-your-highest-notification-priorities)."

For an example workflow of removing notifications that are easy to remove or triage, see "[Clearing your least important notifications](#clearing-your-least-important-notifications)."

### 最も優先度の高い通知を確認する

Choose which type of notifications are most urgent to review and pick a time to review them that's best for you. You might consider the question "Who am I blocking?"

For example, you may decide to check your notifications in this order in the morning during your daily planning time:
  - レビューがリクエストされているプルリクエスト。 (`reason:review-requested` でフィルタ)
  - ユーザ名が@メンション（直接メンション）されているイベント。 (`reason:mention` でフィルタ)
  - メンバーになっている Team が@メンション（Team メンション）されているイベント。 (`reason:team-mention` でフィルタ)
  - 特定のリポジトリの CI ワークフローエラー。 （`reason:ci-activity` および `repo:owner/repo-name` でフィルタ。通知設定でワークフローエラーの CI アクティビティ通知が有効になっていることを確認してください）

  {% tip %}

  **ヒント:** 最も優先度の高いものをすばやく確認するには、確認している優先度の順にカスタムフィルタを設定します。 詳しい情報については「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)」を参照してください。

  {% endtip %}

### 進行中の通知の更新をフォローアップする

To follow-up on notifications, you might consider the question "What was I blocked on that I'm no longer blocked on?" Choose your follow-up notification priorities.

For example, you may decide to follow up in this order:
  - 割り当てられた Issue およびプルリクエスト。 可能な Issue またはプルリクエストをすぐにクローズして、更新を追加します。 必要に応じて、後で確認するために通知を保存します。
  - 保存済インボックスの通知、特に未読の更新を確認します。 スレッドが不要になった場合は、{% octicon "bookmark" aria-label="The bookmark icon" %} をオフにして、通知を保存済インボックスから削除し、保存を解除します。

### 優先度の低い通知を管理する

After triaging the higher priority notifications, review the remaining notifications, such as participating notifications. Consider these questions:
  - この通知をサブスクライブ解除できますか？ この通知は完了していて、**Done**としてマークしても大丈夫ですか？
  {% tip %}

  **ヒント:** 通知をサブスクライブ解除すると、スレッドへ参加するか、@メンションされているか、参加しているチームが@メンションされない限り、新しい更新を受け取ることはありません。 通知を**完了**としてマークすると、通知はメインのインボックスビューから削除され、`is:read` クエリで表示できます。 詳しい情報については「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)」を参照してください。

  {% endtip %}
  - この Issue やプルリクエストがクローズまたは再オープンされたとき、またはプルリクエストがマージされたときに、今後も更新を受け取りますか？ これらのオプションに関する詳しい情報については、「[単一の通知をトリアージする](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)」を参照してください。
  - 今後このような通知を受け取らないようにしますか？ その場合は、サブスクライブ解除を検討してください。 詳しい情報については、「[GitHub におけるアクティビティのサブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」を参照してください。

### 最も重要度の低い通知を消去する

Choose which type of notifications are quickest and easiest for you to triage and remove from your inbox, ideally triaging multiple notifications at once.

たとえば、次の順序で通知をクリアすることができます。
  - サブスクライブ解除できる参加通知。
  - 保持またはフォローアップに関連しないリポジトリの更新。

For more information on managing multiple notifications in your inbox at the same time, see "[Managing notifications from your inbox](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)."

You may also consider changing your notification settings or unsubscribing from these updates if possible. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)" or "[Managing subscriptions for activity on GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)."
