---
title: 管理者がパブリックリポジトリへの匿名Git読み取りアクセスを有効化できるようにする
intro: 'カスタムのツールのインスタンス上での動作をシンプルにし、認証の必要性をバイパスするために、リポジトリ管理者が{% data variables.product.product_location_enterprise %}上のパブリックリポジトリに匿名Git読み取りアクセスを有効化することを許可できます。'
redirect_from:
  - /enterprise/admin/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.disclaimer-for-git-read-access %}

プライベートモードが有効化されている場合、リポジトリ管理者に{% data variables.product.product_location_enterprise %}上のパブリックリポジトリへの匿名Git読み取りアクセスの有効化を許可できます。 プライベートモードに関する詳しい情報については[プライベートモードの有効化](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-private-mode/)を参照してください。

匿名Git読み取りアクセスを許可すると、インスタンス上のカスタムツールが認証をバイパスできるようになります。 あなたもしくはリポジトリ管理者がこのアクセス設定をリポジトリで有効化すると、認証を受けていない Git の操作 (そして {% data variables.product.prodname_ghe_server %} へのネットワークアクセスができる人はだれでも) は、認証なしでリポジトリに読み取りアクセスできることになります。

{% data variables.product.product_location_enterprise %}のすべてのリポジトリまたは特定のリポジトリについて、匿名Gitアクセスの設定をリポジトリ管理者が変更できないようにすることもできます。 詳細は「[ユーザによる匿名Git読み取りアクセスの変更を禁止する](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access)」を参照してください。

{% data reusables.enterprise_site_admin_settings.list-of-repos-with-anonymous-git-read-access-enabled %}

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.options-tab %}
4. [Anonymous Git read access（匿名 Git 読み取りアクセス）] の下で、ドロップダウンメニューを使って [**Enabled（有効化）**] をクリックしてください。 ![[Enabled] と [Disabled] のメニューオプションが表示されている [Anonymous Git read access] ドロップダウンメニュー](/assets/images/enterprise/site-admin-settings/enable-anonymous-git-read-access.png)
3. インスタンスのすべてのリポジトリでリポジトリ管理者が匿名 Git 読み取りアクセス設定を変更するのを避けるために、[**Prevent repository admins from changing anonymous Git read access（リポジトリ管理者による匿名Git読み取りアクセスの変更の回避）**] を選択することもできます。 ![インスタンス上のすべてのリポジトリへの匿名Git読み取りアクセス設定をリポジトリ管理者が変更するのを避けるための選択チェックボックス](/assets/images/enterprise/site-admin-settings/globally-lock-repos-from-changing-anonymous-git-read-access.png)

### 特定のリポジトリでの匿名Git読み取りアクセスの有効化

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.repository-search %}
{% data reusables.enterprise_site_admin_settings.click-repo %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
6. "Danger Zone（危険区域）"の下で、"Enable Anonymous Git read access（匿名Git読み取りアクセスの有効化）"の隣の**Enable（有効化）**をクリックしてください。 ![リポジトリのサイト管理設定の危険地域内の "匿名 Git 読み取りアクセスの有効化" の下の "有効化" ボタン ](/assets/images/enterprise/site-admin-settings/site-admin-enable-anonymous-git-read-access.png)
7. 変更を確認します。 確定するには、[**Yes, enable anonymous Git read access**] をクリックします。 ![ポップアップウィンドウの [Confirm anonymous Git read access] 設定](/assets/images/enterprise/site-admin-settings/confirm-anonymous-git-read-access-for-specific-repo-as-site-admin.png)
8. このリポジトリの設定をリポジトリ管理者が変更するのを避けるために、[**Prevent repository admins from changing anonymous Git read access（リポジトリ管理者による匿名Git読み取りアクセスの変更の回避）**] を選択することもできます。 ![このリポジトリへの匿名Git読み取りアクセス設定をリポジトリ管理者が変更するのを避けるための選択チェックボックス](/assets/images/enterprise/site-admin-settings/lock_anonymous_git_access_for_specific_repo.png)
