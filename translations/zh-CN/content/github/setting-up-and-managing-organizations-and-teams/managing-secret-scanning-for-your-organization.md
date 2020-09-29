---
title: 管理组织的密码扫描
intro: '您可以控制 {% data variables.product.product_name %} 要扫描组织中哪些仓库的密码。'
permissions: '组织所有者可以管理组织中仓库的 {% data variables.product.prodname_secret_scanning %}。'
versions:
  free-pro-team: '*'
---
 
{% data reusables.secret-scanning.beta %}

### 关于 {% data variables.product.prodname_secret_scanning %} 的管理

{% data variables.product.prodname_secret_scanning_caps %} 可以帮助您减轻密码泄露对组织仓库的影响。 更多信息请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/about-secret-scanning)”。

您可以管理 {% data variables.product.prodname_dotcom %} 如何扫描组织中现有仓库的密码。 您还可以默认对成员在组织中创建的任何新仓库启用或禁用 {% data variables.product.prodname_secret_scanning %}。

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% note %}

**注**：{% data variables.product.prodname_secret_scanning_caps %} 默认为您组织中的公共仓库启用，不能被禁用。 更多信息请参阅“[关于公共仓库的密码扫描](/github/administering-a-repository/about-secret-scanning#about-secret-scanning-for-public-repositories)”。

{% endnote %}

### 对现有私有仓库启用或禁用 {% data variables.product.prodname_secret_scanning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. 在“Secret scanning（密码扫描）”右侧，单击 **Disable all（全部禁用）**或 **Enable all（全部启用）**。 ![密码扫描的"Enable all（全部启用）"或"Disable all（全部禁用）"按钮](/assets/images/help/organizations/security-and-analysis-disable-or-enable-secret-scanning.png)
6. （可选）默认为您的组织中新的私有仓库启用 {% data variables.product.prodname_secret_scanning %}。 ![新仓库的"Enable by default（默认启用）"选项](/assets/images/help/organizations/security-and-analysis-secret-scanning-enable-by-default.png)
7. 单击 **Disable secret scanning（禁用密码扫描）**或 **Enable secret scanning（启用密码扫描）**以对组织中的所有仓库禁用或启用该功能。 ![禁用或启用 {% data variables.product.prodname_secret_scanning %} 的按钮 ](/assets/images/help/organizations/security-and-analysis-enable-secret-scanning.png)

### 对新的私有仓库启用或禁用 {% data variables.product.prodname_secret_scanning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security-and-analysis %}
5. 在“Secret scanning（密码扫描）”右侧，默认为组织中的新私有仓库启用或禁用该功能。 ![用于对新仓库启用或禁用功能的复选框](/assets/images/help/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox.png)
