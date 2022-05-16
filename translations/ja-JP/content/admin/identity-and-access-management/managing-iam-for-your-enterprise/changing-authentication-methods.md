---
title: 認証方式の変更
intro: '{% data variables.product.prodname_ghe_server %} が既存のアカウントを認証する方法は、いつでも変更できます。'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Change authentication methods
---

{% data variables.product.product_location %}のユーザアカウントは、認証方式を変更しても保存され、ユーザはユーザ名が変更されない限り、同じアカウントにログインし続けることができます。

新しい認証方式でユーザ名が変更される場合、新しいアカウントが作成されます。 管理者は、サイトアドミン設定または[ユーザ管理 API](/rest/reference/enterprise-admin#update-the-username-for-a-user) を使用してユーザ名を変更できます。

他に考慮しなければならない問題には以下があります。

* **パスワード：**インスタンスでビルトイン認証を使うように切り替えた場合、変更の完了後にユーザは[パスワードを設定](/enterprise/user/articles/how-can-i-reset-my-password/)しなければなりません。

* **サイト管理者:** 管理者権限は、[SAML を使う場合はアイデンティティプロバイダによって制御され](/enterprise/admin/guides/user-management/using-saml/#saml-attributes)、[LDAP を使う場合はグループのメンバーシップによって制御されます](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)。

* **Team メンバーシップ: **LDAP のみが、ディレクトリサーバからの[Team メンバーシップの制御](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)が可能です。

* **ユーザの一時停止:** 認証に LDAP を使う場合、{% data variables.product.prodname_ghe_server %} へのアクセスは_制限グループ_経由で制御できます。 LDAPに切り替えた後、制限グループが設定されているなら、既存のユーザでこれらのグループのいずれかに属してないユーザは一時停止されます。 一時停止は、ユーザがログインするか、次のLDAP Syncの間に生じます。

* **グループのメンバーシップ：**認証にLDAPを使う場合、ユーザは自動的に制限グループのメンバーシップとActive Directoryのアカウントのステータスに基づいて[サスペンドあるいはサスペンド解除](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)されます。

* **Git認証：**SAML及びCASは、[個人アクセストークン](/articles/creating-an-access-token-for-command-line-use)を使ったHTTPあるいはHTTPS経由でのGIt認証のみをサポートしています。 HTTPあるいはHTTPS経由でのパスワード認証はサポートされていません。 LDAPは、パスワードベースのGit認証をデフォルトでサポートしていますが、[その方法は無効化して](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations)個人アクセストークンあるいはSSHキーでの認証を強制することをおすすめします。

* **API認証：**SAML及びCASは、[個人アクセストークン](/articles/creating-an-access-token-for-command-line-use)を使ったAPI認証のみをサポートしています。 Basic認証はサポートされていません。

* **2 要素認証:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Fallback authentication for users with no account on your external authentication provider:** You can invite users to authenticate to {% data variables.product.product_location %} without adding them to your identity provider. For more information, see "[Allowing built-in authentication for users outside your provider](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)."
