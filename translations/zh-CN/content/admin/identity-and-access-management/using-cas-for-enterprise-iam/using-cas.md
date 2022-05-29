---
title: 使用 CAS
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication
  - /enterprise/admin/articles/about-cas-authentication
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-cas
intro: '如果您使用中央身份验证服务 (CAS) 集中访问多个 Web 应用程序，则可以通过为实例配置 CAS 身份验证来集成 {% data variables.product.product_name %}。'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## 关于 {% data variables.product.product_name %} 的 CAS 身份验证

CAS 是一种单点登录 (SSO) 协议，可将身份验证集中到多个 Web 应用程序。 更多信息请参阅维基百科上的“[中央身份验证服务](https://en.wikipedia.org/wiki/Central_Authentication_Service)”。

配置 CAS 后，使用 {% data variables.product.product_location %} 的人员必须使用个人访问令牌对通过 HTTP 的 API 或 Git 请求进行身份验证。 CAS 凭据不能用于对这些请求进行身份验证。 更多信息请参阅“[创建个人访问令牌](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

如果您配置 CAS，则在您的身份提供程序 (IdP) 上拥有帐户的用户在登录到 {% data variables.product.product_location %} 之前不会使用用户许可证。

{% data reusables.enterprise_user_management.built-in-authentication %}

## 使用 CAS 时的用户名考量因素

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} 更多信息请参阅“[外部身份验证的用户名注意事项](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)”。

## CAS 属性

以下属性可用。

| 属性名称  | 类型 | 描述                                                      |
| ----- | -- | ------------------------------------------------------- |
| `用户名` | 必选 | {% data variables.product.prodname_ghe_server %} 用户名。 |

## 配置 CAS

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. 选择 **CAS**。

   ![选择 CAS 进行身份验证的屏幕截图](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![CAS 的回退内置身份验证选项的屏幕截图](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. 在 **Server URL** 字段中，输入您的 CAS 服务器的完整 URL。 如果您的 CAS 服务器使用无法由 {% data variables.product.prodname_ghe_server %} 验证的证书，您可以使用 `ghe-ssl-ca-certificate-install` 命令将其作为可信证书安装。 更多信息请参阅“[命令行实用程序](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install)”。
