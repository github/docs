---
title: 为 GitHub Enterprise Server 上易受攻击的依赖项启用警报
intro: '您可以将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_ghe_cloud %}，并为实例仓库中易受攻击的依赖项启用{% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}安全{% endif %}警报。'
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
permissions: '{% data variables.product.prodname_ghe_server %} 的站点管理员（同时也是已连接 {% data variables.product.prodname_ghe_cloud %} 组织或企业帐户的所有者）可以为 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项启用 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}安全{% endif %}警报。'
versions:
  enterprise-server: '*'
---

### 关于 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项的警报

{% data reusables.repositories.tracks-vulnerabilities %} 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。

您可以将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_dotcom_the_website %}，然后将漏洞数据同步到您的实例，并在包含漏洞依赖项的仓库中生成 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}安全{% endif %}警报。

将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_dotcom_the_website %} 并为易受攻击的依赖项启用 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}安全{% endif %}警报后，每个小时都会将漏洞数据从 {% data variables.product.prodname_dotcom_the_website %} 同步到您的实例一次。 您还可以随时选择手动同步漏洞数据。 代码和关于代码的信息不会从 {% data variables.product.product_location %} 上传到 {% data variables.product.prodname_dotcom_the_website %}。

{% if currentVersion ver_gt "enterprise-server@2.21" %}当 {% data variables.product.product_location %} 接收到有关漏洞的信息时，它将识别实例中使用受影响依赖项版本的仓库，并生成 {% data variables.product.prodname_dependabot_short %} 警报。 您可以自定义接收 {% data variables.product.prodname_dependabot_short %} 警报的方式。 更多信息请参阅“[为易受攻击的依赖项配置通知](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-github-dependabot-alerts)”。
{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}当 {% data variables.product.product_location %} 接收到有关漏洞的信息时，它将识别实例中使用受影响依赖项版本的仓库，并生成安全警报。 您可以自定义接收安全警报的方式。 更多信息请参阅“[为易受攻击的依赖项配置通知](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies/#configuring-notifications-for-security-alerts)”。
{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.21" %}当 {% data variables.product.product_location %} 接收到有关漏洞的信息时，它将识别实例中使用受影响依赖项版本的仓库，并生成安全警报。 您可以自定义接收安全警报的方式。 更多信息请参阅“[选择通知的递送方式](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications#choosing-the-delivery-method-for-security-alerts-for-vulnerable-dependencies)”。
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### 对 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项启用 {% data variables.product.prodname_dependabot_short %} 警报
{% else %}
### 为 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项启用安全警报
{% endif %}

对 {% data variables.product.product_location %} 上易受攻击的依赖项启用 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}安全{% endif %}警报之前，必须将 {% data variables.product.product_location %} 连接到 {% data variables.product.prodname_dotcom_the_website %}。 更多信息请参阅“[将 {% data variables.product.prodname_ghe_server %} 连接到 {% data variables.product.prodname_ghe_cloud %}](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)”。

{% if currentVersion ver_gt "enterprise-server@2.20" %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}我们建议配置前几天的 {% data variables.product.prodname_dependabot_short %} 警报不发通知，以避免电子邮件过载。 几天后，您可以开启通知，像往常一样接收 {% data variables.product.prodname_dependabot_short %} 警报。{% endif %}

{% if currentVersion == "enterprise-server@2.21" %}我们建议配置前几天的安全警报不发通知，以避免电子邮件过载。 几天后，您可以启用通知，像平常一样接收安全警报。{% endif %}

{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %}
1. 在管理 shell 中，对 {% data variables.product.product_location %} 上易受攻击的依赖项启用 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}安全{% endif %}警报。
 ``` shell
$ ghe-dep-graph-enable
```
   {% note %}

   **注**：有关启用通过 SSH 访问管理 shell 的更多信息，请参阅“[访问管理 shell (SSH)](/enterprise/{{ currentVersion }}/admin/configuration/accessing-the-administrative-shell-ssh)”。

   {% endnote %}

3. 返回到

{% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% if currentVersion ver_gt "enterprise-server@2.20" %}
5. 在“Repositories can be scanned for vulnerabilities（可扫描仓库漏洞）”下，使用下拉菜单，并选择 **Enabled without notifications（启用但不发通知）**。 （可选）要启用包含通知的警报，请选择 **Enabled with notifications（启用并发通知）**。{% else %}
5. 在“Repositories can be scanned for vulnerabilities”下，使用下拉菜单，然后选择 **Enabled**。
{% endif %}
   ![用于启用扫描仓库有无漏洞的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png)

### 查看 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项

您可以查看 {% data variables.product.product_location %} 中的所有漏洞，然后手动同步 {% data variables.product.prodname_dotcom_the_website %} 中的漏洞数据，以更新列表。

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. 在左侧边栏中，单击 **Vulnerabilities**。 ![站点管理员边栏中的 Vulnerabilities 选项卡](/assets/images/enterprise/business-accounts/vulnerabilities-tab.png)
3. 要同步漏洞数据，请单击 **Sync Vulnerabilities now**。 ![Sync vulnerabilities now 按钮](/assets/images/enterprise/site-admin-settings/sync-vulnerabilities-button.png)
