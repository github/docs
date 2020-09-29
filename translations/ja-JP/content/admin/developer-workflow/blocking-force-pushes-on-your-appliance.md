---
title: アプライアンス上でのフォースプッシュのブロック
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-on-your-appliance/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-on-your-appliance
intro: 'サイト管理者は誰でも、{% data variables.product.prodname_ghe_server %} アプライアンス上のすべてのフォースプッシュ (`git push --force`) をブロックできます。'
versions:
  enterprise-server: '*'
---

それぞれのリポジトリは、所属するユーザアカウントもしくはOraganizationの設定から、デフォルトのフォースプッシュの設定を引き継ぎます。 同様に、それぞれのOrganization及びユーザアカウントは、デフォルトのフォースプッシュの設定をアプライアンス全体のフォースプッシュの設定から引き継ぎます。 アプライアンスのフォースプッシュの設定を変更すれば、すべてのユーザあるいはOrganizationが所有するすべてのリポジトリが変更されます。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. [Force pushes] の下のドロップダウンメニューから、[**Allow**]、[**Block**]、[**Block to the default branch**] のいずれかをクリックしてください。 ![フォースプッシュのドロップダウン](/assets/images/enterprise/site-admin-settings/force-pushes-dropdown.png)
5. [**Enforce on all repositories（すべてのリポジトリに強制）**] を選択して、フォースプッシュに関する Organization およびリポジトリレベルの設定をオーバーライドすることもできます。

### 参考リンク

- [ユーザーアカウントもしくはOrganizationが所有するリポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)
- [リポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)
