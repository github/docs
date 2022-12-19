---
title: リポジトリへのプッシュに対するメール通知について
intro: 誰かがリポジトリにプッシュしたときに、特定のメールアドレスにメール通知を自動的に送信するように設定できます。
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository
  - /articles/receiving-email-notifications-for-pushes-to-a-repository
  - /articles/about-email-notifications-for-pushes-to-your-repository
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Email notifications for pushes
ms.openlocfilehash: ee12b8f8270921abd1fe70c748449e46fd472e2c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132169'
---
{% data reusables.notifications.outbound_email_tip %}

リポジトリへのプッシュに対する各メール通知は、新しいコミットとそれらのコミットだけを含む diff へのリンクのリストを含みます。 このメール通知には以下が含まれます:

- コミットが行われたリポジトリの名前
- コミットが行われたブランチ
- {% data variables.product.product_name %} 内での diff へのリンクを含むコミットの SHA1
- コミットの作者
- コミットが作成された日付
- コミットの一部として変更されたファイル群
- コミットメッセージ

リポジトリへのプッシュに対して受け取るメール通知はフィルタリングできます。 詳細については、「[通知の設定](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)」を参照してください。

## リポジトリへのプッシュに対するメール通知の有効化

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-notifications %}
5. 最大で 2 個まで、通知の送信先にしたいメールアドレスを空白で区切って入力します。 2 つを超える数のアカウントにメールを送信させたい場合は、メールアドレスの 1 つをグループメールアドレスにしてください。
![メール アドレスのテキストボックス](/assets/images/help/settings/email_services_addresses.png)
1. 独自のサーバーを運用している場合は、**Approved ヘッダー** でメールの整合性を確認できます。 **Approved ヘッダー** は、このフィールドに入力するトークンまたはシークレットであり、メールで送信されます。 メールの `Approved` ヘッダーがトークンと一致する場合、そのメールは {% data variables.product.product_name %} からのものであると信頼できます。
![メールの Approved ヘッダーのテキストボックス](/assets/images/help/settings/email_services_approved_header.png)
7. **[通知の設定]** をクリックします。
![[通知の設定] ボタン](/assets/images/help/settings/setup_notifications_settings.png)

## 参考資料
- 「[通知について](/github/managing-subscriptions-and-notifications-on-github/about-notifications)」

