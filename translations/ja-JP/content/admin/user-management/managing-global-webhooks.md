---
title: グローバルwebhookの管理
intro: 'Site administrators can view, add, edit, and delete global webhooks to track events for the enterprise.'
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### グローバルwebhookについて

You can use global webhooks to automatically monitor, respond to, or enforce rules for user and organization management for your enterprise. たとえば以下のような場合に動作するようにwebhookを設定できます:
- ユーザアカウントが作成または削除される
- An organization is created or deleted
- コラボレータがリポジトリに追加、またはリポジトリから削除される
- A repository is forked

![グローバル webhook のリスト](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

### グローバルwebhookの追加

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. **Add webhook（webhookの追加）**をクリックしてください。 ![Admin center の webhook ページ上の webhook 追加ボタン](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. ペイロードの受信に使用する URL を入力します。 ![ペイロード URL を入力するフィールド](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. **Content type（コンテントタイプ）**ドロップダウンメニューを使ってペイロードの形式をクリックすることもできます。 ![コンテンツタイプのオプションが並ぶドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. **Secret（秘密）**フィールドに、`secret`キーとして使う文字列を入力することもできます。 ![シークレットキーとして使う文字列を入力するフィールド](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. ペイロードのデリバリ時に {% data variables.product.prodname_ghe_server %} に SSL 証明書を検証してほしくない場合、**Disable SSL verification**] をクリックします。 SSLの検証に関する情報を読んで、 **I understand my webhooks may not be secure（webhookがセキュアではないかもしれないことを理解しました）**をクリックしてください。 ![SSLの検証を無効化するボタン](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **警告:** SSL 検証は、フックのペイロードがセキュアにデリバリされることを保証するのに役立ちます。 SSL 検証を無効化することはおすすめしません。

  {% endwarning %}
10. webhook をすべてのイベントあるいは選択されたイベントに対して動作させるかを決めます。 ![ペイロードをすべてのイベントあるいは選択されたイベントで受け取る選択肢のラジオボタン](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - すべてのイベントの場合は [**Send me everything**] を選択します。
    - 特定のイベントを選択するには [**Let me select individual events**] を選択します。
11. 個々のイベントを選択することにした場合、この webhook が Organization のアクティビティで呼ばれるのか、ユーザのアクティビティで呼ばれるのかを選択します。 ![Organization とユーザイベントのチェックボックス](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
12. **Active（アクティブ）**チェックボックスが選択されていることを確認してください（デフォルトで選択されています）。 ![選択されたアクティブチェックボックス](/assets/images/enterprise/site-admin-settings/add-global-webhook-active-checkbox.png)
13. **Add webhook（webhookの追加）**をクリックしてください。

### グローバルwebhookの編集

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 編集したいwebhookの隣の**Edit（編集）**をクリックしてください。 ![webhook の隣の編集ボタン](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. webhookの設定の更新。
7. **Update webhook（webhookの更新）**をクリックしてください。

### グローバルwebhookの削除

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. 削除したいwebhookの隣の**Delete（削除）**をクリックしてください。 ![webhook の隣の削除ボタン](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. webhookの削除に関する情報を読んで、**Yes, delete webhook（はい、webhookを削除します）**をクリックしてください。 ![警告情報のポップアップボックスとwebhookの削除ボタン](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

### 最近のデリバリとレスポンスの表示

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. webhook のリストで、デリバリを見たい webhook をクリックします。 ![各 webhook の表示リンクを持つ webhook のリスト](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. [Recent deliveries（最近のデリバリ）] の下で、詳細を表示したいデリバリをクリックしてください。 ![詳細表示へのリンクを持つ最近のwebhookのデリバリリスト](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
