---
title: 通知をトリアージするためのワークフローをカスタマイズする
intro: これらのワークフロー例を調整してカスタマイズし、通知をトリアージするための理想的なワークフローを作成することができます。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/customizing-a-workflow-for-triaging-your-notifications
shortTitle: Triage your notifications
ms.openlocfilehash: 9e5771dff52408a1b6967a3792eb36eefebefd72
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145115926'
---
## インボックスのトリアージを開始する

インボックスのトリアージを開始する前に、最重要の更新を最初に見つけて対応するか、削除またはトリアージが簡単な煩わしい更新をインボックスからクリアするかを検討してください。

通知の量に応じて、さまざまな時点で両方のアプローチを組み合わせて使用することを決定できます。

最も重要な通知を検索して応答するワークフローの例については、「[最も優先度の高い通知を確認する](#checking-your-highest-notification-priorities)」をご覧ください。

簡単に削除またはトリアージできる通知を削除するワークフローの例については、「[最も重要度の低い通知を消去する](#clearing-your-least-important-notifications)」をご覧ください。

## 最も優先度の高い通知を確認する

一番最初に確認する通知の種類を選択し、通知の確認時間を選択します。 「誰をブロックするか」ということを検討します。

たとえば、毎日の計画を行う午前中に、次の順序で通知を確認できます。
  - レビューがリクエストされているプルリクエスト。 (`reason:review-requested` でフィルター)
  - ユーザー名が @mentioned されているイベント、直接メンションとも呼ばれます。 (`reason:mention` でフィルター)
  - メンバーになっている Team が @mentioned されているイベント、チーム メンションとも呼ばれます。 (`reason:team-mention` でフィルター)
  - 特定のリポジトリの CI ワークフローエラー。 (`reason:ci-activity` と `repo:owner/repo-name` でフィルターし、通知設定でワークフロー エラーの CI アクティビティ通知を有効にしていることを確実にします)

  {% tip %}

  **ヒント:** 最も優先度の高いものをすばやく確認するには、確認している優先度の順にカスタム フィルターを設定します。 詳細については、「[受信トレイからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters)」を参照してください。

  {% endtip %}

## 進行中の通知の更新をフォローアップする

通知をフォローアップするには、「今はブロックされていないが、ブロックされていたもの」ということを検討します。 フォローアップ通知の優先順位を選択します。

たとえば、次の順序でフォローアップすることを決定できます。
  - 割り当てられた Issue およびプルリクエスト。 可能な Issue またはプルリクエストをすぐにクローズして、更新を追加します。 必要に応じて、後で確認するために通知を保存します。
  - 保存済インボックスの通知、特に未読の更新を確認します。 スレッドが関連しなくなった場合は、{% octicon "bookmark" aria-label="The bookmark icon" %} の選択を解除し、保存したインボックスから通知を削除して保存を解除します。

## 優先度の低い通知を管理する

優先度の高い通知をトリアージした後、参加通知などの残りの通知を確認します。 次の質問を考慮してください。
  - この通知をサブスクライブ解除できますか？ この通知は完了し、**完了** としてマークする準備ができましたか?
  {% tip %}

  **ヒント:** 通知をサブスクライブ解除すると、スレッドへ参加するか、@mentioned されているか、参加しているチームが @mentioned されない限り、新しい更新を受け取ることはありません。 通知を **完了** としてマークすると、通知はメインのインボックス ビューから削除され、`is:read` クエリで表示できます。 詳細については、「[受信トレイからの通知の管理](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)」を参照してください。

  {% endtip %}
  - この Issue やプルリクエストがクローズまたは再オープンされたとき、またはプルリクエストがマージされたときに、今後も更新を受け取りますか？ これらのオプションについて詳しくは、「[単一の通知をトリアージする](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request)」をご覧ください。
  - 今後このような通知を受け取らないようにしますか？ その場合は、サブスクライブ解除を検討してください。 詳しくは、「[GitHub におけるアクティビティのサブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」をご覧ください。

## 最も重要度の低い通知を消去する

トリアージしてインボックスから削除する際に最も速くて簡単な通知の種類を選択します。理想的としては、一度に複数の通知をトリアージします。

たとえば、次の順序で通知をクリアすることができます。
  - サブスクライブ解除できる参加通知。
  - 保持またはフォローアップに関連しないリポジトリの更新。

インボックス内の複数の通知を同時に管理する方法について詳しくは、「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time)」をご覧ください。

可能な場合、通知設定を変更するか、これらの更新のサブスクライブ解除することを検討することもできます。 詳しくは、「[通知の構成](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)」または「[GitHub におけるアクティビティのサブスクリプションを管理する](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github)」をご覧ください。
