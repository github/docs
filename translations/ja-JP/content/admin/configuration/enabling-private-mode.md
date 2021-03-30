---
title: プライベートモードの有効化
intro: 'プライベートモードでは、{% data variables.product.prodname_ghe_server %} はインストールにアクセスするすべてのユーザーにサインインを求めます。'
redirect_from:
  - /enterprise/admin/articles/private-mode/
  - /enterprise/admin/guides/installation/security/
  - /enterprise/admin/guides/installation/securing-your-instance/
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
versions:
  enterprise-server: '*'
topics:
  - enterprise
---

{% data variables.product.product_location %}がインターネット経由でパブリックにアクセス可能になっている場合、プライベートモードを有効化しなければなりません。 プライベートモードでは、ユーザは`git://`経由でリポジトリを匿名クローンすることはできません。 ビルトイン認証も有効化されている場合、新しいユーザがインスタンスにアカウントを作成するには管理者が招待しなければなりません。 詳しい情報については"[ビルトイン認証の利用](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-built-in-authentication)"を参照してください。

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

プライベートモードを有効にすると、認証されていない Git 操作 (および {% data variables.product.product_location %} へのネットワークアクセス権を所有する人) に、匿名 Git 読み取りアクセスを有効にしたインスタンスで、パブリックリポジトリのコードの読み取りを許可できます。 詳しい情報については[管理者にパブリックリポジトリの匿名Git読み取りアクセスの有効化を許可する](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)を参照してください。

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
4. **Private mode（プライベートモード）**を選択してください。 ![プライベートモードを有効にするためのチェックボックス](/assets/images/enterprise/management-console/private-mode-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
