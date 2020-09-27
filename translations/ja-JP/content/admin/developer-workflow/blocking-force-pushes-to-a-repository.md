---
title: リポジトリへのフォースプッシュをブロックする
redirect_from:
  - /enterprise/admin/articles/blocking-force-pushes-to-a-repository/
  - /enterprise/admin/articles/block-force-pushes/
  - /enterprise/admin/developer-workflow/blocking-force-pushes-to-a-repository
intro: リポジトリのすべてのブランチ、あるいはデフォルトブランチに対するフォースプッシュ（`git push --force`）をブロックできます。
versions:
  enterprise-server: '*'
---

{{ site.data.reusables.enterprise_site_admin_settings.override-policy }}

{{ site.data.reusables.enterprise_site_admin_settings.sign-in }}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.repository-search }}
{{ site.data.reusables.enterprise_site_admin_settings.click-repo }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-top-tab }}
{{ site.data.reusables.enterprise_site_admin_settings.admin-tab }}
4. [**Push and Pull**] の下で [**Block**] または [**Block to the default branch**] を選択してください。 ![フォースプッシュのブロック](/assets/images/enterprise/site-admin-settings/repo/repo-block-force-pushes.png)

変更はすぐに有効になります。 後で考えが変わった場合には、フォースプッシュを再度許可することも簡単にできます。

## 参考リンク

- [ユーザーアカウントもしくはOrganizationが所有するリポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)
- [アプライアンスでのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/blocking-force-pushes-on-your-appliance)
