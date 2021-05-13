---
title: 通知をトリアージするためのワークフローをカスタマイズする
intro: これらのワークフロー例を調整してカスタマイズし、通知をトリアージするための理想的なワークフローを作成することができます。
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.21'
  github-ae: '*'
topics:
  - Notifications
---

### インボックスのトリアージを開始する

インボックスのトリアージを開始する前に、最重要の更新を最初に見つけて対応するか、削除またはトリアージが簡単な煩わしい更新をインボックスからクリアするかを検討してください。

通知の量に応じて、さまざまな時点で両方のアプローチを組み合わせて使用することを決定できます。

最も重要な通知を見つけて対応するワークフローの例については、「[最優先の通知を確認する](#checking-your-highest-notification-priorities)」を参照してください。

削除またはトリアージが簡単な通知を削除するワークフローの例については、「[最も重要度の低い通知を消去する](#clearing-your-least-important-notifications)」を参照してください。

### 最も優先度の高い通知を確認する

一番最初に確認する通知の種類を選択し、通知の確認時間を選択します。 「誰をブロックするか」ということを検討します。

たとえば、毎日の計画を行う午前中に、次の順序で通知を確認できます。
  - レビューがリクエストされているプルリクエスト。 (`reason:review-requested` でフィルタ)
  - ユーザ名が@メンション（直接メンション）されているイベント。 (`reason:mention` でフィルタ)
  - メンバーになっている Team が@メンション（Team メンション）されているイベント。 (`reason:team-mention` でフィルタ)
  - 特定のリポジトリの CI ワークフローエラー。 （`reason:ci-activity` および `repo:owner/repo-name` でフィルタ。通知設定でワークフローエラーの CI アクティビティ通知が有効になっていることを確認してください）

  {% tip %}

  **ヒント:** 最も優先度の高いものをすばやく確認するには、確認している優先度の順にカスタムフィルタを設定します。 詳しい情報については「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)」を参照してください。

  {% endtip %}

### 進行中の通知の更新をフォローアップする

通知をフォローアップするには、「今はブロックされていないが、ブロックされていたもの」ということを検討します。 フォローアップ通知の優先順位を選択します。

たとえば、次の順序でフォローアップすることを決定できます。
  - 割り当てられた Issue およびプルリクエスト。 可能な Issue またはプルリクエストをすぐにクローズして、更新を追加します。 必要に応じて、後で確認するために通知を保存します。
  - 保存済インボックスの通知、特に未読の更新を確認します。 スレッドが不要になった場合は、{% octicon "bookmark" aria-label="The bookmark icon" %} をオフにして、通知を保存済インボックスから削除し、保存を解除します。

### 優先度の低い通知を管理する

優先度の高い通知をトリアージした後、参加通知などの残りの通知を確認します。 次の質問を検討してください。
  - この通知をサブスクライブ解除できますか？ この通知は完了していて、**Done**としてマークしても大丈夫ですか？
  {% tip %}

  **ヒント:** 通知をサブスクライブ解除すると、スレッドへ参加するか、@メンションされているか、参加しているチームが@メンションされない限り、新しい更新を受け取ることはありません。 通知を**完了**としてマークすると、通知はメインのインボックスビューから削除され、`is:read` クエリで表示できます。 詳しい情報については「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)」を参照してください。

  {% endtip %}
  - この Issue やプルリクエストがクローズまたは再オープンされたとき、またはプルリクエストがマージされたときに、今後も更新を受け取りますか？ これらのオプションに関する詳しい情報については、「[単一の通知をトリアージする](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)」を参照してください。
  - 今後このような通知を受け取らないようにしますか？ その場合は、サブスクライブ解除を検討してください。 詳しい情報については、「[GitHub におけるアクティビティのサブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」を参照してください。

### 最も重要度の低い通知を消去する

トリアージしてインボックスから削除する際に最も速くて簡単な通知の種類を選択します。理想的としては、一度に複数の通知をトリアージします。

たとえば、次の順序で通知をクリアすることができます。
  - サブスクライブ解除できる参加通知。
  - 保持またはフォローアップに関連しないリポジトリの更新。

インボックス内の複数の通知を同時に管理する方法の詳細については、「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)」を参照してください。

可能な場合、通知設定を変更するか、これらの更新のサブスクライブ解除することを検討することもできます。 詳しい情報については、「[通知を設定する](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)」または「[GitHub におけるアクティビティのサブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」を参照してください。
