---
title: 更改身份验证方法
intro: '您可以随时更改 {% data variables.product.prodname_ghe_server %} 对您现有的帐户进行身份验证的方法。'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: 更改身份验证方法
---

在您更改身份验证方法时，{% data variables.product.product_location %} 上的用户帐户将保留，只要他们的用户名没有发生变化，用户就可以继续登录原来的帐户。

如果新的身份验证方法更改了用户名，将创建新帐户。 作为管理员，您可以通过站点管理员设置或使用[用户管理 API](/rest/reference/enterprise-admin#update-the-username-for-a-user)重命名用户。

您应当考虑的其他问题包括：

* **密码**：如果您为实例改为使用内置身份验证方法，则在更改完成后，用户必须[设置密码](/enterprise/user/articles/how-can-i-reset-my-password/)。

* **站点管理员**：管理权限[在您使用 SAML 时由您的身份提供程序控制](/enterprise/admin/guides/user-management/using-saml/#saml-attributes)，而[在您使用 LDAP 时则通过组成员关系进行控制](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)。

* **团队成员关系**：只有 LDAP 可以让您从目录服务器[控制团队成员关系](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)。

* **用户挂起**：当您使用 LDAP 进行身份验证时，可以通过_受限制的组_控制 {% data variables.product.prodname_ghe_server %} 的访问权限。 在切换到 LDAP 后，如果配置受限制的组，那么不属于其中任何一个组的现有用户将被挂起。 在用户登录或下一次 LDAP 同步期间将发生挂起。

* **组成员关系**：当您使用 LDAP 进行身份验证时，系统将根据受限制组的成员关系和 Active Directory 中的帐户状态自动[挂起和取消挂起](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users)用户。

* **Git 身份验证**：SAML 和 CAS 仅支持使用[个人访问令牌](/articles/creating-an-access-token-for-command-line-use)通过 HTTP 或 HTTPS 进行的 Git 身份验证。 不支持通过 HTTP 或 HTTPS 进行的密码身份验证。 LDAP 默认支持基于密码的 Git 身份验证，不过，我们建议您[禁用这种方法](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations)，并强制通过个人访问令牌或 SSH 密钥进行身份验证。

* **API 身份验证**：SAML 和 CAS 仅支持使用[个人访问令牌](/articles/creating-an-access-token-for-command-line-use)进行的 API 身份验证。 不支持基本身份验证。

* **双重身份验证**：{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **对您的身份提供程序覆盖范围外的用户进行内置身份验证**：您可以邀请用户在 {% data variables.product.product_location %} 中进行身份验证，无需将他们添加到您的身份提供程序中。 更多信息请参阅“[允许对身份提供程序覆盖范围以外的用户进行内置身份验证](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider)”。
