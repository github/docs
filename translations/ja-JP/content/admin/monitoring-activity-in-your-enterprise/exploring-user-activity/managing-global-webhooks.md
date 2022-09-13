---
title: グローバルwebhookの管理
shortTitle: Manage global webhooks
intro: Enterprise 内でイベントが発生したときに外部の Web サーバーに通知するように、グローバル Webhook を構成できます。
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
ms.openlocfilehash: 751a6dc55b9d1aded22a8225f4bf7d058aa32b77
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120222'
---
## グローバルwebhookについて

グローバル Webhook を使用して、企業内で発生したイベントを外部の Web サーバーに通知できます。 Webhook のペイロードを受信した後、企業のユーザーや組織の管理の監視、応答、またはルールの適用を行うアプリケーションまたはコードを実行するように、サーバーを構成できます。 詳細については、「[Webhook](/developers/webhooks-and-events/webhooks)」を参照してください。

たとえば、誰かが企業内のリポジトリや組織を作成、削除、または変更したときに Webhook を送信するように、{% data variables.product.product_location %} を構成できます。 Webhook を受信した後でタスクを自動的に実行するようにサーバーを構成できます。

![グローバル webhook のリスト](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## グローバルwebhookの追加

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. **[Webhook の追加]** を選択します。
  ![管理センターの [Webhook] ページの [Webhook の追加] ボタン](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. ペイロードの受信に使用する URL を入力します。
  ![ペイロードの URL を入力するフィールド](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. 必要に応じて、 **[コンテンツ タイプ]** ドロップダウン メニューを使用して、ペイロードの形式をクリックします。
  ![コンテンツ タイプのオプションの一覧が表示されるドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. 必要に応じて、 **[シークレット]** フィールドに、`secret` キーとして使用する文字列を入力します。
  ![シークレット キーとして使う文字列を入力するフィールド](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. オプションとして、ペイロードの URL が HTTPS で、ペイロードを配信するときに {% data variables.product.prodname_ghe_server %} で SSL 証明書が検証されないようにしたい場合は、 **[SSL の検証を無効にする]** を選択します。 SSL の検証に関する情報を読んでから、 **[Webhook が安全ではないかもしれないことを理解しました]** をクリックします。
  ![SSL の検証を無効にするチェック ボックス](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **警告:** SSL の検証は、フックのペイロードが安全に配信されることを保証するのに役立ちます。 SSL 検証を無効化することはおすすめしません。

  {% endwarning %}
10. この Webhook をすべてのイベントまたは選択したイベントのどちらでトリガーするかを決めます。
  ![ペイロードをすべてのイベントまたは選択したイベントで受け取るオプションのラジオ ボタン](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - すべてのイベントの場合は、 **[すべて送信する]** を選択します。
    - 特定のイベントを選択するには、 **[個別のイベントを選択する]** を選択します。
11. 個別のイベントを選択する場合は、Webhook をトリガーするイベントを選択します。
      {% ifversion ghec %} ![個々のグローバル Webhook イベントのチェック ボックス](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png) {% elsif ghes or ghae %} ![個々のグローバル Webhook イベントのチェック ボックス](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png) {% endif %}
12. **[アクティブ]** チェック ボックスがオンになっていることを確認します。
  ![選択された [アクティブ] チェック ボックス](/assets/images/help/business-accounts/webhook-active.png)
13. **[Webhook の追加]** を選択します。

## グローバルwebhookの編集

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. 編集する Webhook の横の **[編集]** をクリックします。
  ![Webhook の隣の [編集] ボタン](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. webhookの設定の更新。
7. **[Webhook の更新]** をクリックします。

## グローバルwebhookの削除

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. 削除する Webhook の横の **[削除]** をクリックします。
  ![Webhook の隣の [削除] ボタン](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Webhook の削除に関する情報を読んでから、 **[はい、Webhook を削除します]** をクリックします。
  ![Webhook の削除を確認する警告情報とボタンが含まれるポップアップ ボックス](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## 最近のデリバリとレスポンスの表示

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. webhook のリストで、デリバリを見たい webhook をクリックします。
  ![各 Webhook を表示するリンクのある Webhook の一覧](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. [Recent deliveries（最近のデリバリ）] の下で、詳細を表示したいデリバリをクリックしてください。
  ![詳細を表示するリンクがある Webhook の最近の配信の一覧](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
