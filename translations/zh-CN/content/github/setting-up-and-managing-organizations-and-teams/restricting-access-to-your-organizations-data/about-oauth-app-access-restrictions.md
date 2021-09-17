---
title: 关于 OAuth App 访问限制
intro: '组织可通过启用 {% data variables.product.prodname_oauth_app %} 访问限制，选择哪些 {% data variables.product.prodname_oauth_app %} 可以访问其仓库及其他资源。'
redirect_from:
  - /articles/about-third-party-application-restrictions/
  - /articles/about-oauth-app-access-restrictions
  - /github/setting-up-and-managing-organizations-and-teams/about-oauth-app-access-restrictions
versions:
  free-pro-team: '*'
topics:
  - 组织
  - 团队
---
当 {% data variables.product.prodname_oauth_app %} 访问限制启用后，组织成员无法授权 {% data variables.product.prodname_oauth_app %} 访问组织资源。 组织成员可以申请所有者批准他们想使用的 {% data variables.product.prodname_oauth_app %}，并且组织所有者会收到待处理申请的通知。

{% data reusables.organizations.oauth_app_restrictions_default %}

{% tip %}

**提示**：当组织尚未设置 {% data variables.product.prodname_oauth_app %} 访问限制时，组织成员授权的任何 {% data variables.product.prodname_oauth_app %} 也可访问组织的私有资源。

{% endtip %}

### 设置 {% data variables.product.prodname_oauth_app %} 访问限制

当组织所有者第一次设置 {% data variables.product.prodname_oauth_app %} 访问限制时：

- **组织拥有的应用程序**会自动获得对组织资源的访问权限。
- **{% data variables.product.prodname_oauth_app %}** 会立即失去对组织资源的访问权限。
- **2014 年 2 月之前创建的 SSH 密钥**会立即失去对组织资源（包括用户和部署密钥）的访问权限。
- **{% data variables.product.prodname_oauth_app %} 在 2017 年 2 月期间或以后创建的 SSH 密钥**会立即失去对组织资源的访问权限。
- **来自私有组织仓库的挂钩**不再发送到未批准的 {% data variables.product.prodname_oauth_app %}。
- 对私有组织资源的 **API 访问**不适用于未批准的 {% data variables.product.prodname_oauth_app %}。 此外，也没有在公共资源资源上执行创建、更新或删除操作的权限。
- **用户创建的挂钩和 2014 年 5 月之前创建的挂钩**不受影响。
- **组织拥有的仓库的私有复刻**需遵守组织的访问限制。

### 解决 SSH 访问失败

当 2014 年 2 月之前创建的 SSH 密钥因 {% data variables.product.prodname_oauth_app %} 访问限制启用而失去对组织的访问权限时，后续 SSH 访问尝试就会失败。 用户将会收到错误消息，将他们导向至可以批准密钥或在其位置上传可信密钥的 URL。

### Web 挂钩

当 {% data variables.product.prodname_oauth_app %} 在限制启用后被授予对组织的访问权限时，该 {% data variables.product.prodname_oauth_app %} 创建的任何原有 web 挂钩会继续分发。

当组织从之前批准的 {% data variables.product.prodname_oauth_app %} 删除访问权限时，该应用程序创建的任何原有 web 挂钩不再分发（这些挂钩将被禁用，但不会删除）。

### 重新启用访问限制

如果组织禁用 {% data variables.product.prodname_oauth_app %} 访问应用程序限制，后来又重新启用它们，则之前批准的 {% data variables.product.prodname_oauth_app %} 会被自动授予访问组织资源的权限。

### 延伸阅读

- "[为组织启用 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/enabling-oauth-app-access-restrictions-for-your-organization)"
- "[为组织审批 {% data variables.product.prodname_oauth_app %}](/articles/approving-oauth-apps-for-your-organization)"
- "[审查组织安装的集成](/articles/reviewing-your-organization-s-installed-integrations)"
- "[拒绝访问以前为组织批准的 {% data variables.product.prodname_oauth_app %}](/articles/denying-access-to-a-previously-approved-oauth-app-for-your-organization)"
- "[为组织禁用 {% data variables.product.prodname_oauth_app %} 访问限制](/articles/disabling-oauth-app-access-restrictions-for-your-organization)"
- "[请求组织对 {% data variables.product.prodname_oauth_app %} 的审批](/articles/requesting-organization-approval-for-oauth-apps)"
- "[授权 {% data variables.product.prodname_oauth_app %}](/articles/authorizing-oauth-apps)"
