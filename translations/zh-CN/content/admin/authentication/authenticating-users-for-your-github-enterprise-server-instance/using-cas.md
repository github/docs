---
title: 使用 CAS
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication/
  - /enterprise/admin/articles/about-cas-authentication/
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
intro: 'CAS 是一种适用于多种网络应用程序的单点登录 (SSO) 协议。 在登录之前，CAS 用户帐户不会占用{% if currentVersion ver_gt "enterprise-server@2.16" %}用户许可{% else %}席位{% endif %}。'
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### 使用 CAS 时的用户名考量因素

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

### CAS 属性

以下属性可用。

| 属性名称  | 类型 | 描述                                                      |
| ----- | -- | ------------------------------------------------------- |
| `用户名` | 必选 | {% data variables.product.prodname_ghe_server %} 用户名。 |

### 配置 CAS
{% warning %}

**警告**：请注意，在 {% data variables.product.product_location %} 上配置 CAS 之前，用户将无法使用他们的 CAS 用户名和密码通过 HTTP/HTTPS 对 API 请求或 Git 操作进行身份验证。 相反，他们将需要[创建访问令牌](/enterprise/{{ currentVersion }}/user/articles/creating-an-access-token-for-command-line-use)。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. 选择 **CAS**。 ![选择 CAS](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![选中 CAS 内置身份验证复选框](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. 在 **Server URL** 字段中，输入您的 CAS 服务器的完整 URL。 如果您的 CAS 服务器使用无法由 {% data variables.product.prodname_ghe_server %} 验证的证书，您可以使用 `ghe-ssl-ca-certificate-install` 命令将其作为可信证书安装。
