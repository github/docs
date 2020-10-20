---
title: 使用 LDAP
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication/
  - /enterprise/admin/articles/about-ldap-authentication/
  - /enterprise/admin/articles/viewing-ldap-users/
  - /enterprise/admin/hidden/enabling-ldap-sync/
  - /enterprise/admin/hidden/ldap-sync/
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
intro: '使用 LDAP，您可以向 {% data variables.product.prodname_ghe_server %} 验证现有帐户的身份和集中管理仓库权限。 LDAP 是一种用于访问和维护目录信息服务的流行应用程序协议，是将第三方软件与大型公司用户目录相集成时使用的最常见协议之一。'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### 支持的 LDAP 服务

{% data variables.product.prodname_ghe_server %} 可与下列 LDAP 服务集成：

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

### 使用 LDAP 时的用户名考量因素

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### 在 {% data variables.product.product_location_enterprise %} 上配置 LDAP

在您配置 LDAP 后，用户将能够使用他们的 LDAP 凭据登录您的实例。 在用户首次登录时，他们个人资料中的姓名、电子邮件地址和 SSH 密钥将使用您的目录中的 LDAP 属性进行设置。

当您通过 {% data variables.enterprise.management_console %} 为用户配置 LDAP 访问权限时，在用户首次登录您的实例前，用户许可不可用。 但是，如果您使用站点管理员设置手动创建帐户，用户许可将立即可用。

{% warning %}

**警告**：在 {% data variables.product.product_location_enterprise %} 上配置 LDAP 之前，请确保您的 LDAP 服务支持分页结果。

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. 在“Authentication”下，选择 **LDAP**。 ![选择 LDAP](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![选中 LDAP 内置身份验证复选框](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. 添加您的配置设置。

### LDAP 属性
使用以下属性完成 {% data variables.product.product_location_enterprise %} 的 LDAP 配置。

| 属性名称                                             | 类型 | 描述                                                                                                                                                                                                          |
| ------------------------------------------------ | -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Host`                                           | 必选 | LDAP 主机，例如 `ldap.example.com` 或 `10.0.0.30`。 如果主机名只能在您的内部网络中使用，您需要先配置 {% data variables.product.product_location_enterprise %} 的 DNS，以便它可以使用您的内部域名服务器解析主机名。                                               |
| `端口`                                             | 必选 | 主机的 LDAP 服务侦听的端口。 示例包括：389 和 636（适用于 LDAPS）。                                                                                                                                                                |
| `Encryption`                                     | 必选 | 用于确保与 LDAP 服务器之间的通信安全的加密方法。 示例包括明文（无加密）、SSL/LDAPS（从一开始就加密）和 StartTLS（在连接后升级为加密通信）。                                                                                                                          |
| `Domain search user`                             | 可选 | 执行用户查询，在其他用户登录时对其进行身份验证的 LDAP 用户。 这一般是一个专为第三方集成创建的服务帐户。 使用完全限定名称，例如 `cn=Administrator,cn=Users,dc=Example,dc=com`。 对于 Active Directory，您还可为域搜索用户使用 `[DOMAIN]\[USERNAME]` 语法（例如 `WINDOWS\Administrator`）。  |
| `Domain search password`                         | 可选 | 域搜索用户的密码。                                                                                                                                                                                                   |
| `Administrators group`                           | 可选 | 登录您的设备后，此组中的用户将被升级为站点管理员。 如果您不配置 LDAP 管理员组，则登录您的设备的第一个 LDAP 用户帐户将被自动升级为站点管理员。                                                                                                                               |
| `Domain base`                                    | 必选 | 您想要搜索用户和组的 LDAP 子树的完全限定 `Distinguished Name` (DN)。 您可以添加任意数量的组；不过，每个组和它所包含的用户都必须在相同的基础域中定义。 如果您指定受限的用户组，那么只有属于这些组的用户将在作用域内。 我们建议您将 LDAP 目录树的顶级指定为您的基础域，并使用受限的用户组来控制权限。                                      |
| `Restricted user groups`                         | 可选 | 如果指定，将仅允许这些组中的用户登录。 您只需要指定组的常用名 (CN)，您可以添加任意数量的组。 如果未指定组，则指定基础域作用域中的*所有*用户都将可以登录您的 {% data variables.product.prodname_ghe_server %} 实例。                                                                   |
| `User ID`                                        | 必选 | 标识尝试身份验证的 LDAP 用户的 LDAP 属性。 建立映射后，用户可以更改他们的 {% data variables.product.prodname_ghe_server %} 用户名。 对于大多数 Active Directory 安装来说，此字段应为 `sAMAccountName`，但对其他 LDAP 解决方案（例如 OpenLDAP）来说，可能是 `uid`。 默认值为 `uid`。 |
| `Profile name`                                   | 可选 | 将在用户的 {% data variables.product.prodname_ghe_server %} 个人资料页面上显示的姓名。 除非启用 LDAP 同步，否则用户可以更改他们的个人资料姓名。                                                                                                      |
| `Emails`                                         | 可选 | 用户的 {% data variables.product.prodname_ghe_server %} 帐户的电子邮件地址。                                                                                                                                           |
| `SSH keys`                                       | 可选 | 连接到用户的 {% data variables.product.prodname_ghe_server %} 帐户的 SSH 公钥。 密钥必须采用 OpenSSH 格式。                                                                                                                    |
| `GPG keys`                                       | 可选 | 连接到用户的 {% data variables.product.prodname_ghe_server %} 帐户的 GPG 密钥。                                                                                                                                       |
| `Disable LDAP authentication for Git operations` | 可选 | 如果选择，将[禁止](#disabling-password-authentication-for-git-operations)用户使用 LDAP 密码对 Git 操作进行身份验证。                                                                                                                |
| `Enable LDAP certificate verification`           | 可选 | 如果选择，将[启用](#enabling-ldap-certificate-verification) LDAP 证书验证。                                                                                                                                              |
| `Synchronization`                                | 可选 | 如果选择，将[启用](#enabling-ldap-sync) LDAP 同步。                                                                                                                                                                    |

#### 为 Git 操作禁用密码身份验证

在您的 LDAP 设置中选择 **Disable username and password authentication for Git operations**，为 Git 权限强制使用个人访问令牌或 SSH 密钥，这样有助于防止您的服务器被 LDAP 身份验证请求过载。 我们建议使用此设置，因为响应慢的 LDAP 服务器是性能问题和故障的常见来源，尤其是在遇到轮询导致的大量请求时。

![为 Git 禁用 LDAP 密码身份验证的复选框](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

选择此选项时，如果用户通过命令行尝试为 Git 操作使用密码，他们将收到一条错误消息，内容为 `Password authentication is not allowed for Git operations. You must use a personal access token.`

#### 启用 LDAP 证书验证

在您的 LDAP 设置中选择 **Enable LDAP certificate verification**，验证您用于 TLS 的 LDAP 服务器证书。

![LDAP 证书验证复选框](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

选择此选项时，将对证书进行验证，以确保：
- 如果证书至少包含一个使用者可选名称 (SAN)，则其中的一个 SAN 将匹配 LDAP 主机名。 否则，常用名 (CN) 将匹配 LDAP 主机名。
- 证书不会过期。
- 证书由受信任的证书颁发机构 (CA) 签名。

#### 启用 LDAP 同步

{% note %}

要启用 LDAP 同步，请在您的 LDAP 设置中选择 **Synchronize Emails（同步电子邮件）**、**Synchronize SSH Keys（同步 SSH 密钥）**或 **Synchronize GPG Keys（同步 GPG 密钥）**。

{% endnote %}

借助 LDAP 同步，您可以将 {% data variables.product.prodname_ghe_server %} 用户和团队成员关系与建立的 LDAP 组同步。 这样，您可以在 LDAP 服务器中为用户建立基于角色的权限控制，而不用在 {% data variables.product.prodname_ghe_server %} 中手动建立。 更多信息请参阅“[创建团队](/enterprise/{{ currentVersion }}/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)”。

要启用 LDAP 同步，请在您的 LDAP 设置中选择 **Synchronize Emails（同步电子邮件）**、**Synchronize SSH Keys（同步 SSH 密钥）**或 **Synchronize GPG Keys（同步 GPG 密钥）**。

![Synchronization 复选框](/assets/images/enterprise/management-console/ldap-synchronize.png)

启用 LDAP 同步后，某个同步作业将以指定的时间间隔运行，在每个用户帐户上执行以下操作：

- 如果您已允许对您的身份提供程序覆盖范围以外的用户进行内置身份验证，并且该用户使用内置身份验证，请前进到下一个用户。
- 如果用户没有 LDAP 映射，请尝试将用户映射到目录中的 LDAP 条目。 如果用户无法映射到 LDAP 条目，请挂起该用户并前进到下一个用户。
- 如果存在 LDAP 映射但目录中相应的 LDAP 条目缺失，请挂起该用户并前进到下一个用户。
- 如果相应的 LDAP 条目已被标记为禁用并且该用户尚未被挂起，请挂起该用户并前进到下一个用户。
- 如果相应的 LDAP 条目未被标记为禁用，用户已被挂起，并且已在 Admin Center 中启用 _Reactivate suspended users_，请取消挂起该用户。
- 如果相应的 LDAP 条目包括 `name` 属性，请更新用户的个人资料姓名。
- 如果相应的 LDAP 条目位于管理员组中，请将该用户升级为站点管理员。
- 如果相应的 LDAP 条目不位于管理员组中，请将该用户降级为普通帐户。
- 如果为电子邮件定义了一个 LDAP 用户字段，请将该用户的电子邮件设置与 LDAP 条目同步。 将第一个 LDAP `mail` 条目设为主电子邮件。
- 如果为 SSH 公钥定义了一个 LDAP 用户字段，请将该用户的 SSH 公钥与 LDAP 条目同步。
- 如果为 GPG 密钥定义了一个 LDAP 用户字段，请将该用户的 GPG 密钥与 LDAP 条目同步。

{% note %}

**注**：只有您使用 Active Directory，`userAccountControl` 属性显示并使用 `ACCOUNTDISABLE` 标记时，才可以将 LDAP 条目标记为禁用。

{% endnote %}

某个同步作业也将以指定的时间间隔运行，在已经映射到 LDAP 组的每个团队上执行以下操作：

- 如果已移除团队的相应 LDAP 组，请移除团队中的所有成员。
- 如果已从 LDAP 组中移除 LDAP 成员条目，请从团队中移除相应的用户。 如果用户因此失去了任何仓库的访问权限，请删除用户在这些仓库中的任何私有分叉。
- 如果已向 LDAP 组中添加 LDAP 成员条目，请将相应的用户添加到团队中。 如果用户因此重新获得了任何仓库的访问权限，请恢复过去 90 天内因为用户失去访问权限而被删除的仓库中的任何私有分叉。

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**安全警告：**

启用 LDAP 同步后，站点管理员和组织所有者可以搜索要映射团队的目标组的 LDAP 目录。

这样有可能将敏感的组织信息披露给合同工或其他没有权限的用户，包括：

- 对*域搜索用户*可见的特定 LDAP 组的存在性。
- 具有 {% data variables.product.prodname_ghe_server %} 用户帐户的 LDAP 组的成员，如果创建与该 LDAP 组同步的团队，此信息将被披露。

如果不需要披露此类信息，您的公司或组织应在管理员控制台中限制配置的*域搜索用户*的权限。 如果无法进行此类限制，请联系 {% data variables.contact.contact_ent_support %}。

{% endwarning %}

#### 支持的 LDAP 组对象类

{% data variables.product.prodname_ghe_server %} 支持下列 LDAP 组对象类。 可以嵌套组。

- `组`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

### 查看和创建 LDAP 用户

您可以查看具有您的实例访问权限的 LDAP 用户的完整列表和配置新用户。

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. 在左侧边栏中，单击 **LDAP users**。 ![LDAP users 选项卡](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. 要搜索用户，请输入完整或部分用户名，然后单击 **Search**。 现有用户将显示在搜索结果中。 如果用户不存在，请单击 **Create** 以配置新用户帐户。 ![LDAP 搜索](/assets/images/enterprise/site-admin-settings/ldap-users-search.png)

### 更新 LDAP 帐户

除非[启用 LDAP 同步](#enabling-ldap-sync)，否则 LDAP 帐户的变更将不会自动与 {% data variables.product.prodname_ghe_server %} 同步。

* 要使用新的 LDAP 管理员组，必须在 {% data variables.product.prodname_ghe_server %} 上手动升级和降级用户，以反映 LDAP 中的变更。
* 要在 LDAP 管理员组中添加或移除 LDAP 帐户，请[在 {% data variables.product.prodname_ghe_server %} 上升级或降级帐户](/enterprise/{{ currentVersion }}/admin/guides/user-management/promoting-or-demoting-a-site-administrator)。
* 要移除 LDAP 帐户，请[挂起 {% data variables.product.prodname_ghe_server %} 帐户](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)。

#### 手动同步 LDAP 帐户

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. 在“LDAP”下，单击 **Sync now**，使用您的 LDAP 服务器中的数据手动更新帐户。 ![LDAP Sync now 按钮](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

您也可以[使用 API 触发手动同步](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap)。

### 撤销 {% data variables.product.product_location_enterprise %} 的权限

如果[启用 LDAP 同步](#enabling-ldap-sync)，移除用户的 LDAP 凭据将在下一次同步操作后挂起他们的帐户。

如果**未**启用 LDAP 同步，您必须在移除 LDAP 凭据后手动挂起 {% data variables.product.prodname_ghe_server %} 帐户。 更多信息请参阅“[挂起和取消挂起用户](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)”。
