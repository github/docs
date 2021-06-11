---
title: 关于易受攻击的依赖项的警报
intro: '当我们检测到影响仓库的漏洞时，{% data variables.product.product_name %} 将会发送 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}。'
versions:
  enterprise-server: <=2.22
topics:
  - Security
redirect_from:
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
---

<!--See /content/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies for the current version of this article -->

### 关于易受攻击的依赖项

{% data reusables.repositories.a-vulnerability-is %}

当代码依赖于具有安全漏洞的包时，这种易受攻击的依赖项可能会导致项目或使用它的人遇到一系列问题。

### 有漏洞依赖项的检测

 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %} 在以下情况下检测有漏洞的依赖项并发送 {% data variables.product.prodname_dependabot_alerts %}{% else %}{% data variables.product.product_name %}检测有漏洞的依赖项并发送安全警报{% endif %}：

- 新公告数据每小时从 {% data variables.product.prodname_dotcom_the_website %} 同步到 {% data variables.product.prodname_ghe_server %}。 {% data reusables.security-advisory.link-browsing-advisory-db %}
- 仓库的依赖关系图发生更改。 例如，当贡献者推送提交以更改其所依赖的包或版本时。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。

{% data reusables.repositories.dependency-review %}

有关 {% data variables.product.product_name %} 可以检测到漏洞和依赖项的生态系统列表，请参阅“[支持的包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

{% note %}

**注：**保持清单和锁定文件为最新状态非常重要。 如果依赖关系图不能准确反映您当前的依赖项和版本，则可能错过有关您使用的有漏洞依赖项的警报。 您还可以收到不再使用的依赖项的警报。

{% endnote %}

{% if currentVersion ver_gt "enterprise-server@2.21" % %}
### 有漏洞依赖项的 {% data variables.product.prodname_dependabot %} 警报
{% else %}
### 对有漏洞的依赖项发出安全警报
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
当 {% data variables.product.product_name %} 发现易受攻击的依赖项时，我们会生成 {% data variables.product.prodname_dependabot %} 警报，并显示在仓库的 Security（安全）选项卡上。 该警报包括指向项目中受影响的文件的链接，以及有关修复的版本的信息。 {% data variables.product.product_name %} 还根据受影响仓库的管理员的通知首选项向他们通知新的警报。 更多信息请参阅“[为易受攻击的依赖项配置通知](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)”。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
当 {% data variables.product.product_name %} 发现有漏洞的依赖项时， 我们会发送安全警报给受影响仓库的维护员，其中包含该漏洞的详细说明、项目中受影响文件的链接以及有关修复版本的信息。
{% endif %}

{% warning %}

**注**：{% data variables.product.product_name %} 的安全功能并不要求捕获所有漏洞。 虽然我们一直在努力更新漏洞数据库，生成包含最新信息的警报，但我们无法捕获一切或在保证的时间范围内向您警示已知的漏洞。 这些功能不是要替代人工检查每个依赖项的潜在漏洞或任何其他问题，并且我们建议在必要时咨询安全服务或全面检查漏洞。

{% endwarning %}

### 访问 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}安全{% endif %}警报

您可以在仓库的依赖关系图中看到影响特定项目的所有警报。

{% if currentVersion ver_gt "enterprise-server@2.21" %}
默认情况下，我们会向受影响仓库中具有管理员权限的人员通知有关新的 {% data variables.product.prodname_dependabot_alerts %}。{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
默认情况下，我们会向具有受影响仓库管理员权限的人员发送安全警报。 {% data variables.product.product_name %} 从不公开披露在任何仓库中发现的漏洞。
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %} 更多信息请参阅“[选择通知的递送方式](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)”。{% endif %}{% if currentVersion ver_gt "enterprise-server@2.20" %}更多信息请参阅“[配置漏洞依赖项的通知](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)”。{% endif %}
