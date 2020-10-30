---
title: 为 GitHub Enterprise Server 上易受攻击的依赖项启用安全警报
intro: '您可以将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_ghe_cloud %}，并为实例仓库中易受攻击的依赖项启用安全警报。'
permissions: '{% data variables.product.prodname_ghe_server %} 的站点管理员（同时也是已连接 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户的所有者）可以为 {% data variables.product.prodname_ghe_server %} 上的漏洞依赖项启用安全警报。'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
versions:
  enterprise-server: '*'
---

### About alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}

{% data reusables.repositories.tracks-vulnerabilities %} For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."

您可以将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_dotcom_the_website %}，然后将漏洞数据同步到实例，并在包含易受攻击的依赖项的仓库中生成安全警报。

将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_dotcom_the_website %} 并为易受攻击的依赖项启用安全警报后，每个小时都会将漏洞数据从 {% data variables.product.prodname_dotcom_the_website %} 同步到您的实例一次。 您还可以随时选择手动同步漏洞数据。 代码和关于代码的信息不会从 {% data variables.product.product_location_enterprise %} 上传到 {% data variables.product.prodname_dotcom_the_website %}。

当 {% data variables.product.product_location_enterprise %} 接收到有关漏洞的信息时，它将识别实例中使用受影响版本依赖项的仓库，并向这些仓库中具有管理员访问权限的所有者和人员发送安全警报。 您可以自定义接收安全警报的方式。 For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)."

### 为 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项启用安全警报

为 {% data variables.product.product_location_enterprise %} 上易受攻击的依赖项启用安全警报前，必须将 {% data variables.product.product_location_enterprise %} 连接到 {% data variables.product.prodname_dotcom_the_website %}。 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)”。

{% if currentVersion ver_gt "enterprise-server@2.20" %} We recommend configuring security alerts without notifications for the first few days to avoid an overload of emails. After a few days, you can enable notifications to receive security alerts as usual.{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
2. 在管理 shell 中，为 {% data variables.product.product_location_enterprise %} 上易受攻击的依赖项启用安全警报：
 ``` shell
$ ghe-dep-graph-enable
```
3. 返回到 {% data variables.product.prodname_ghe_server %}。
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. Under "Repositories can be scanned for vulnerabilities", use the drop-down menu and select **Enabled without notifications**. Optionally, to enable alerts with notifications, select **Enabled with notifications**.{% else %}
5. 在“Repositories can be scanned for vulnerabilities”下，使用下拉菜单，然后选择 **Enabled**。
{% endif %}
   ![用于启用扫描仓库有无漏洞的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### 查看 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项

您可以查看 {% data variables.product.product_location_enterprise %} 中的所有漏洞，然后手动同步 {% data variables.product.prodname_dotcom_the_website %} 中的漏洞数据，以更新列表。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 在左侧边栏中，单击 **Vulnerabilities**。 ![站点管理员边栏中的 Vulnerabilities 选项卡](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. 要同步漏洞数据，请单击 **Sync Vulnerabilities now**。 ![Sync vulnerabilities now 按钮](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
