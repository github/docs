---
title: コントリビューションデータの再構築
intro: 既存のコミットをユーザアカウントにリンクするために、コントリビューションデータの再構築が必要になることがあります。
redirect_from:
  - /enterprise/admin/articles/rebuilding-contributions-data/
  - /enterprise/admin/user-management/rebuilding-contributions-data
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

コミットは、{% data variables.product.prodname_enterprise %}にプッシュされるたびに、プッシュのメールアドレスとユーザのメールアドレスが同じ場合は、ユーザアカウントに関連付けられます。 しかし、ユーザが新規メールアドレスの登録や新規アカウントの作成をした場合、既存のコミットは、遡及的には関連付けられ*ません*。

1. ユーザのプロフィールページにアクセスします。
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. ページ左にある、**Admin** をクリックする。 ![[Admin] タブ](/assets/images/enterprise/site-admin-settings/admin-tab.png)
4. **Contributions data** で、**Rebuild** をクリックする。 ![[Rebuild] ボタン](/assets/images/enterprise/site-admin-settings/rebuild-button.png)

{% data variables.product.prodname_enterprise %} は、コミットをユーザアカウントに再度リンクするためのバックグラウンドジョブを開始します。
  ![待ち行列に入っている再構築ジョブ](/assets/images/enterprise/site-admin-settings/rebuild-jobs.png)
