---
title: 关于易受攻击的依赖项的警报
intro: '当我们检测到影响仓库的漏洞时，{% data variables.product.product_name %} 将会发送 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}。'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
topics:
  - 安全
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

### 关于易受攻击的依赖项

{% data reusables.repositories.a-vulnerability-is %}

当代码依赖于具有安全漏洞的包时，这种易受攻击的依赖项可能会导致项目或使用它的人遇到一系列问题。

### 有漏洞依赖项的检测

 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %} 在以下情况下检测有漏洞的依赖项并发送 {% data variables.product.prodname_dependabot_alerts %}{% else %}{% data variables.product.product_name %}检测有漏洞的依赖项并发送安全警报{% endif %}：

{% if currentVersion == "free-pro-team@latest" %}
- 新漏洞添加到 {% data variables.product.prodname_advisory_database %}。 更多信息请参阅“[浏览 {% data variables.product.prodname_advisory_database %} 中的安全漏洞](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)”。{% else %}
- 新公告数据每小时从 {% data variables.product.prodname_dotcom_the_website %} 同步到 {% data variables.product.prodname_ghe_server %}。 有关公告数据的更多信息，请参阅“<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">浏览 {% data variables.product.prodname_advisory_database %} 中的安全漏洞</a>”。{% endif %}
- 仓库的依赖关系图发生更改。 例如，当参与者推送提交以更改所依赖的包或版本时{% if currentVersion == "free-pro-team@latest" %}，或者当某个依赖项的代码发生更改时{% endif %}。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”。

{% data reusables.repositories.dependency-review %}

有关 {% data variables.product.product_name %} 可以检测到漏洞和依赖项的生态系统列表，请参阅“[支持的包生态系统](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)”。

{% note %}

**注：**保持清单和锁定文件为最新状态非常重要。 如果依赖关系图不能准确反映您当前的依赖项和版本，则可能错过有关您使用的有漏洞依赖项的警报。 您还可以收到不再使用的依赖项的警报。

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" % %}
### 有漏洞依赖项的 {% data variables.product.prodname_dependabot %} 警报
{% else %}
### 对有漏洞的依赖项发出安全警报
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom %} 默认会检测_公共_仓库中有漏洞的依赖项并生成 {% data variables.product.prodname_dependabot_alerts %}。 私有仓库的所有者或具有管理员权限的人员可以通过为其仓库启用依赖关系图和 {% data variables.product.prodname_dependabot_alerts %} 来启用 {% data variables.product.prodname_dependabot_alerts %}。

您也可以为用户帐户或组织拥有的所有仓库启用或禁用 {% data variables.product.prodname_dependabot_alerts %}。 For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

For information about permission requirements for actions related to {% data variables.product.prodname_dependabot_alerts %}, see "[Repository permission levels for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)."

{% data variables.product.product_name %} 将立即开始生成依赖关系图，并在发现任何有漏洞的依赖项后立即生成警报。 依赖关系图通常在几分钟之内填充，但对于依赖项很多的仓库，可能需要更长时间。 更多信息请参阅“[管理私有仓库的数据使用设置](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)”。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
当 {% data variables.product.product_name %} 发现易受攻击的依赖项时，我们会生成 {% data variables.product.prodname_dependabot %} 警报，并显示在仓库的 Security（安全）选项卡上。 该警报包括指向项目中受影响的文件的链接，以及有关修复的版本的信息。 {% data variables.product.product_name %} 还根据受影响仓库的管理员的通知首选项向他们通知新的警报。 更多信息请参阅“[为易受攻击的依赖项配置通知](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)”。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
对于已启用 {% data variables.product.prodname_dependabot_security_updates %} 的仓库，警报中还包含一个拉取请求链接，用于将清单或锁定文件更新到能解决该漏洞的最小版本。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
当 {% data variables.product.product_name %} 发现有漏洞的依赖项时， 我们会发送 {% if page.version == 'dotcom' %}{% data variables.product.prodname_dependabot_short %}{% else %}安全{% endif %} 警报给受影响仓库的维护员，其中包含该漏洞的详细说明、项目中受影响文件的链接以及有关修复版本的信息。
{% endif %}

{% warning %}

**注**：{% data variables.product.product_name %} 的安全功能并不要求捕获所有漏洞。 虽然我们一直在努力更新漏洞数据库，生成包含最新信息的警报，但我们无法捕获一切或在保证的时间范围内向您警示已知的漏洞。 这些功能不是要替代人工检查每个依赖项的潜在漏洞或任何其他问题，并且我们建议在必要时咨询安全服务或全面检查漏洞。

{% endwarning %}

### 访问 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}安全{% endif %}警报

您可以在{% if currentVersion == "free-pro-team@latest" %} 仓库的 Security（安全）选项卡或{% endif %} 仓库的依赖关系图{% if currentVersion == "free-pro-team@latest" %} 中查看影响特定项目的所有警报。更多信息请参阅“[查看和更新仓库中的漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
默认情况下，我们会向对受影响仓库具有管理员权限的人员通知新 {% data variables.product.prodname_dependabot_alerts %}。{% endif %} {% if currentversion == "free proteam@latest" %}{% data variables.product.product_name %} 永远不公开披露任何仓库中已经发现的漏洞。 您也可以将 {% data variables.product.prodname_dependabot_alerts %} 设为对操作您拥有或具有管理员权限的仓库的其他人或团队可见。 更多信息请参阅“[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)”。
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
默认情况下，我们会向具有受影响仓库管理员权限的人员发送安全警报。 {% data variables.product.product_name %} 从不公开披露在任何仓库中发现的漏洞。
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}{% if enterpriseServersions contains currentversion and currentver_lt "enterprise-server@2 1" %} 更多信息请参阅“[选择通知的递送方式](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)”。{% endif %}{% if currentversion == "free-proteam@latest" or currentversion ver_gt "enterprise-server@2. 0" %} 解更多信息请参阅“[配置漏洞依赖项的通知](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
您还可以查看与 {% data variables.product.prodname_advisory_database %} 中的特定漏洞对应的 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[浏览 {% data variables.product.prodname_advisory_database %} 中的安全漏洞](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database#viewing-your-vulnerable-repositories)”。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 延伸阅读

- "[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[查看和更新仓库中的漏洞依赖项](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[了解 {% data variables.product.product_name %} 如何使用和保护数据](/categories/understanding-how-github-uses-and-protects-your-data)"{% endif %}
