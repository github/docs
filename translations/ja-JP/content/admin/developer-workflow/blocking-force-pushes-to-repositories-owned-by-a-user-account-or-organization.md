---
title: ユーザアカウントもしくはOrganizationが所有するリポジトリへのフォースプッシュのブロック
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-for-a-user-account/
  - /enterprise/admin/articles/blocking-force-pushes-for-an-organization/
  - /enterprise/admin/articles/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization
intro: ユーザアカウントもしくはOrganizationが所有するリポジトリのすべてのブランチ、あるいはデフォルトブランチのみに対してフォースプッシュ（`git push --force`）をブロックできます。
versions:
  enterprise-server: '*'
---

リポジトリは、所属するユーザアカウントもしくはOrganizationからフォースプッシュの設定を引き継ぎます。 そしてそれぞれのOrganization及びユーザアカウントは、フォースプッシュの設定をアプライアンス全体のフォースプッシュの設定から引き継ぎます。

引き継がれたデフォルトの設定は、ユーザアカウントもしくはOrganizationの設定をすることで上書きできます。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user-or-org %}
{% data reusables.enterprise_site_admin_settings.click-user-or-org %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. [Repository default settings（リポジトリのデフォルト設定）] の下の [Force pushes（フォースプッシュ）] セクションで、以下から選択してください。
    - [**Block（ブロック）**] ですべてのブランチへのフォースプッシュがブロックされます。
    - [**Block to the default branch（デフォルトブランチへのブロック）**] でデフォルトブランチへのフォースプッシュのみがブロックされます。 ![フォースプッシュのブロック](/assets/images/enterprise/site-admin-settings/user/user-block-force-pushes.png)
6. **Enforce on all repositories（すべてのリポジトリに対して強制）**を選択して、リポジトリ固有の設定を上書きすることもできます。 こうしてもアプライアンス全体のポリシーは上書き**されない**ことに注意してください。 ![Block force pushes](/assets/images/enterprise/site-admin-settings/user/user-block-all-force-pushes.png) この変更はすぐに有効になります。 後で考えが変わった場合には、フォースプッシュを再度許可することもできます。

### 参考リンク

- [リポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository)
- [アプライアンスでのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)
