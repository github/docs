---
title: 単一の通知をトリアージする
intro: 単一の通知を確認して調査する場合、詳細な通知ビュー用に最適化されたいくつかのトリアージオプションがあります。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/triaging-a-single-notification
shortTitle: Triage a notification
ms.openlocfilehash: c81cc30449dd1b37a58df0b91a036fbd629d8ae3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145115917'
---
## 単一の通知を保存する

単一の通知を保存して後で確認するには、通知の右側にある {% octicon "bookmark" aria-label="The bookmark icon" %} をクリックします。 一度に保存できる通知は 1 つだけです。

保存された通知は無期限に保持され、サイド バーで **[保存済み]** をクリックするか、または `is:saved` クエリを使用して表示できます。 5か月以上前に保存した通知の保存を解除すると、通知は1日以内にインボックスから消えます。

  ![トリアージの保存オプション](/assets/images/help/notifications-v2/save-triaging-option.png)

## 通知を調査する

インボックスから個々の通知をクリックすると、通知の元となった会話に移動します。 ページの上部で、次のことができます。
- 個々の通知を完了としてマークする
- 今後の通知をサブスクライブ解除する
- 通知を既読としてマークする
- 後で確認するために通知を保存する
- 通知インボックスに戻る

トリアージ オプションについて詳しくは、「[インボックスからの通知を管理する](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options)」を参照してください。

## Issue またはプルリクエストの今後の更新の受信タイミングをカスタマイズする

特定の Issue またはプルリクエストの今後の通知の受信方法を選択できます。

1. issue か pull request の右側の列の [通知] の横にある **[カスタマイズ]** をクリックします。

  ![[通知] の下の [カスタマイズ] オプション](/assets/images/help/notifications-v2/customize-notifications-for-specific-thread.png)

2. **[カスタム]** を選び、このスレッドの更新通知を受信するタイミングを選びます。 たとえば、プルリクエストがマージ、クローズ、または再オープンされたときに更新を受信するように選択できます。 スレッドに参加するか、ユーザー名が @mentioned されているか、メンバーになっている Team が @mentioned されている場合は、再度サブスクライブされます。

  ![通知をカスタマイズするオプション](/assets/images/help/notifications-v2/custom-options-for-customizing-notification-thread-updates.png)

3. **[保存]** をクリックします。
