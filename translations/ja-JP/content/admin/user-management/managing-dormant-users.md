---
title: 休眠ユーザの管理
redirect_from:
  - /enterprise/admin/articles/dormant-users/
  - /enterprise/admin/articles/viewing-dormant-users/
  - /enterprise/admin/articles/determining-whether-a-user-account-is-dormant/
  - /enterprise/admin/user-management/managing-dormant-users
intro: 少なくとも 1 か月の間活動のなかったユーザアカウントは、休眠していると見なされます。 You may choose to suspend dormant users to free up user licenses.
versions:
  enterprise-server: '*'
---

「活動」には以下のことが含まれますが、以下に限定はされません:
- {% data variables.product.prodname_ghe_server %} へのサインイン。
- Issue やプルリクエストへのコメント。
- リポジトリの作成、削除、Watch、スター付け。
- Pushing commits.{% if currentVersion ver_gt "enterprise-server@2.21" %}
- Accessing resources by using a personal access token or SSH key.{% endif %}

### 休眠ユーザの表示

サスペンドされておらず、サイト管理者でもないすべての休眠ユーザのリストを表示できます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 左のサイドバーで**Dormant users（休眠ユーザ）**をクリックしてください。 ![休眠ユーザタブ](/assets/images/enterprise/site-admin-settings/dormant-users-tab.png)
4. このリスト中のすべての休眠ユーザをサスペンドするには、ページの上部で**Suspend all（全員をサスペンド）**をクリックしてください。 ![全員をサスペンドボタン](/assets/images/enterprise/site-admin-settings/suspend-all.png)

### ユーザアカウントが休眠状態かの判断

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
5. **User info（ユーザ情報）**セクションで"Dormant（休眠）"という語の付いた赤い点は、そのユーザアカウントが休眠状態であることを示し、"Active（アクティブ）"という語の付いた緑の点はそのユーザアカウントがアクティブであることを示します。 ![休眠ユーザアカウント](/assets/images/enterprise/stafftools/dormant-user.png) ![アクティブなユーザアカウント](/assets/images/enterprise/stafftools/active-user.png)

### 休眠の閾値の設定

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% if currentVersion ver_gt "enterprise-server@2.21" %}
{% data reusables.enterprise-accounts.policies-tab %}
{% else %}
{% data reusables.enterprise-accounts.settings-tab %}
{% endif %}
{% data reusables.enterprise-accounts.options-tab %}
4. [Dormancy threshold] の下で、ドロップダウンメニューを使って、希望する休眠閾値をクリックします。 ![休眠の閾値のドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/dormancy-threshold-menu.png)
