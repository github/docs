---
title: ユーザによる匿名 Git 読み取りアクセスの変更を禁止する
intro: 'リポジトリ管理者があるリポジトリ{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.14" %}あるいはすべてのリポジトリ{% endif %}への匿名 Git 読み取りアクセスを変更することを禁止できます。'
redirect_from:
  - /enterprise/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access-to-a-repository/
  - /enterprise/admin/user-management/preventing-users-from-changing-anonymous-git-read-access
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

リポジトリ管理者が特定のリポジトリへの匿名Git読み取りアクセスを変更できないようにするために、リポジトリのアクセス設定をロックできます。 リポジトリのGit読み取りアクセス設定をロックすると、サイト管理者だけがこの設定を変更できるようになります。

リポジトリ管理者は、パブリックリポジトリがフォークでなければ、匿名Git読み取りアクセスを変更できます。 詳しい情報については[管理者にパブリックリポジトリの匿名Git読み取りアクセスの有効化を許可する](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)を参照してください。

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

### ユーザによるリポジトリへの匿名 Git 読み取りアクセスの変更の禁止

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. "Danger Zone（危険区域）"の下で**Prevent repository admins from enabling anonymous Git read access（リポジトリ管理者による匿名Git読み取りアクセスの有効化の禁止）**を選択してください。 ![リポジトリをロックして匿名Git読み取りアクセス設定を変更できなくするチェックボックスを選択してください。](/assets/images/enterprise/site-admin-settings/lock-repo-from-changing-anonymous-git-read-access.png)

### ユーザによるすべてのリポジトリへの匿名 Git 読み取りアクセスの変更を禁止する

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
3. [Anonymous Git read access（匿名 Git 読み取りアクセス）] の下で、この設定が有効化されていることを確認し、[**Prevent repository admins from changing anonymous Git read access（リポジトリ管理者による匿名 Git 読み取りアクセスの変更の禁止）**] を選択してください。 ![リポジトリをグローバルにロックして匿名 Git 読み取りアクセス設定を変更できなくするチェックボックスを選択してください。](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

