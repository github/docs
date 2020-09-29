---
title: サービスフックのトラブルシューティング
intro: ペイロードが配信されない場合、以下の一般的な問題をチェックしてください。
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks/
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
  - /enterprise/admin/user-management/troubleshooting-service-hooks
versions:
  enterprise-server: '*'
---

### デリバリーについての情報を入手

任意のリポジトリのすべてのサービスフックのデリバリに対する最後のレスポンスに関する情報を調べることができます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 調べるリポジトリを開ける。
3. ナビゲーションサイドバーで **Hooks** のリンクをクリックする。 ![フックのサイドバー](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 問題が発生しているサービスフックで、**Latest Delivery** へのリンクをクリックする。 ![フックの詳細](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. [**Remote Calls**] (リモート呼び出し) の下に、リモートサーバーへの POST の際に使われたヘッダと、リモートサーバーがあなたの環境に返信したレスポンスを見ることができます。

### ペイロードの表示

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 調べるリポジトリを開ける。
3. ナビゲーションサイドバーで **Hooks** のリンクをクリックする。 ![フックのサイドバー](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 問題が発生しているサービスフックで、**Latest Delivery** へのリンクをクリックする。
5. Click **Delivery**. ![ペイロードの表示](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

### 過去のデリバリーの表示

デリバリーは 15 日間保存されます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 調べるリポジトリを開ける。
3. ナビゲーションサイドバーで **Hooks** のリンクをクリックする。 ![フックのサイドバー](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. 問題が発生しているサービスフックで、**Latest Delivery** へのリンクをクリックする。
5. その特定のフックに対する他のデリバリーを見るには、[**More for this Hook ID**] をクリックします。 ![デリバリーをさらに表示](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
