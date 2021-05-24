---
title: 使用しているアイデンティティプロバイダ外のユーザのためのビルトイン認証の許可
intro: LDAP、SAML、CASを使うアイデンティティプロバイダへのアクセスを持たないユーザを認証するために、ビルトイン認証を設定できます。
redirect_from:
  - /enterprise/admin/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /enterprise/admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
  - /admin/authentication/allowing-built-in-authentication-for-users-outside-your-identity-provider
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
---
### 使用しているアイデンティティプロバイダ外のユーザのためのビルトイン認証について

契約業者やマシンのユーザなど、特定のアカウントを使用中のアイデンティティプロバイダ（IdP）に追加できない場合、外部のユーザのためのビルトイン認証を使うことができます。 また、アイデンティティプロバイダが利用できない場合にフォールバックアカウントにアクセスするためにビルトイン認証を使うこともできます。

ビルトイン認証が設定され、ユーザがSAMLもしくはCASでの認証に成功したなら、そのユーザはユーザ名とパスワードでの認証をすることはできません。 ユーザがLDAPでの認証に成功したなら、それ以降クレデンシャルは内部的なものとは見なされません。

特定のIdPに対するビルトイン認証は、デフォルトで無効化されています。

{% warning %}

**警告：**ビルトイン認証を無効化した場合、インスタンスへアクセスできなくなったユーザを個別にサスペンドしなければなりません。 詳しい情報については[ユーザのサスペンドとサスペンドの解除](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)を参照してください。

{% endwarning %}

### アイデンティティプロバイダ外のユーザのためのビルトイン認証の設定

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. アイデンティティプロバイダを選択してください。 ![アイデンティティプロバイダの選択オプション](/assets/images/enterprise/management-console/identity-provider-select.gif)
5. **Allow creation of accounts with built-in authentication（ビルトイン認証でのアカウントの作成の許可）**を選択してください。 ![ビルトイン認証のオプションの選択](/assets/images/enterprise/management-console/built-in-auth-identity-provider-select.png)
6. 警告を読んで、**Ok**をクリックしてください。

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### 使用しているアイデンティティプロバイダ外のユーザをインスタンスで認証するために招待する

ユーザが招待を受け付けると、ユーザはIdPを通じてサインインするのではなく、ユーザ名とパスワードを使ってサインインできます。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

### 参考リンク

- /enterprise/{{ page.version }}/admin/guides/user-management/using-ldap
- [SAMLの利用](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-saml)
- [CASの利用](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-cas)
