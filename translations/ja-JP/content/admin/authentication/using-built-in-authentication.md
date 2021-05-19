---
title: ビルトイン認証の利用
intro: 'デフォルトの認証方式を使用する場合、すべての認証の詳細は {% data variables.product.product_location %} に保存されます。 LDAP、SAML、CASのような確立された認証プロバイダをすでに持っているのでなければ、ビルトイン認証がデフォルトの方式になります。'
redirect_from:
  - /enterprise/admin/user-management/using-built-in-authentication
  - /enterprise/admin/authentication/using-built-in-authentication
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
---

サインインおよびサインアウトページでユーザに表示されるカスタムメッセージを作成できます。 詳しい情報については「[インスタンス上でのユーザメッセージをカスタマイズする](/enterprise/admin/user-management/customizing-user-messages-on-your-instance)」を参照してください。

### ビルトイン認証の設定

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
4. **Built in authentication（ビルトイン認証）**を選択してください。 ![ビルトイン認証のオプションの選択](/assets/images/enterprise/management-console/built-in-auth-select.png)

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### アカウントの作成とユーザの追加

インスタンスが作成できたら、自分自身の管理者アカウントを作成し、それを使ってユーザをプロビジョニングします。

1. `http(s)://[hostname]/join`の"Create Admin Account（管理者アカウントの作成）"ページで、ユーザ名、パスワード、メールアドレスを選択し、**Create an account（アカウントの作成）**をクリックしてください。 ![[Create Admin Account]](/assets/images/enterprise/site-admin-settings/create-first-admin-acct.png)
{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}
