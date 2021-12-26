---
title: 保护您的仓库
intro: '您可以使用许多 {% data variables.product.prodname_dotcom %} 功能来帮助保护仓库的安全。'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

### 简介
本指南向您展示如何配置仓库的安全功能。 您必须是仓库管理员或组织所有者才能配置仓库的安全设置。

您的安全需求是仓库独有的，因此您可能不需要启用仓库的每个功能。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

某些安全功能仅适用于{% if currentVersion == "free-pro-team@latest" %}公共仓库，以及由{% else %}您具有 {% endif %} {% data variables.product.prodname_advanced_security %} 许可的组织拥有的仓库。 {% data reusables.advanced-security.more-info-ghas %}

### 管理对仓库的访问

保护仓库的第一步是设置谁可以查看和修改您的代码。 更多信息请参阅“[管理仓库设置](/github/administering-a-repository/managing-repository-settings)”。

从仓库主页点击 **{% octicon "gear" aria-label="The Settings gear" %}设置**，然后向下滚动到“危险区”。

- 要更改谁可以查看您的仓库，请点击 **Change visibility（更改可见性）**。 更多信息请参阅“[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)”。{% if currentVersion == "free-pro-team@latest" %}
- 要更改谁可以访问您的仓库并调整权限，请点击 **Manage access（管理访问）**。 更多信息请参阅“[管理有权访问仓库的团队和人员](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)”。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
### 设置安全策略

1. 从仓库的主页点击 **{% octicon "shield" aria-label="The shield symbol" %} Security（安全性）**。
2. 点击 **Security policy（安全策略）**。
3. 单击 **Start setup（开始设置）**。
4. 添加关于项目受支持版本以及如何报告漏洞的信息。

更多信息请参阅“[添加安全政策到仓库](/code-security/getting-started/adding-a-security-policy-to-your-repository)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### 管理依赖关系图

依赖关系图对 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} 所有公共仓库自动生成，您也可以选择对私有仓库{% else %} 所有仓库{% endif %} 启用。

1. 从仓库的主页点击 **{% octicon "gear" aria-label="The Settings gear" %} Settings（设置）**。
2. 点击 **Security & analysis（安全和分析）**。
3. 在依赖关系图旁边，单击 **Enable（启用）**或 **Disable（禁用）**。

更多信息请参阅“[探索仓库的依赖项](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### 管理 {% data variables.product.prodname_dependabot_alerts %}

默认情况下，{% data variables.product.prodname_dotcom %} 会检测公共仓库中的漏洞，并生成 {% data variables.product.prodname_dependabot_alerts %}。 也可对私有仓库启用 {% data variables.product.prodname_dependabot_alerts %}。

1. 单击您的个人资料照片，然后单击 **Settings（设置）**。
2. 点击 **Security & analysis（安全和分析）**。
3. 单击 {% data variables.product.prodname_dependabot_alerts %} 旁边的 **Enable all（全部启用）**。

更多信息请参阅“[关于漏洞依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% if currentVersion == "free-pro-team@latest" %}”和“[管理用户帐户的安全性和分析设置](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account){% endif %}”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}
### 管理依赖项审查

依赖项审查可让您在合并到仓库之前在拉取请求中显示依赖关系的变化。 依赖项审查适用于所有公共仓库以及由具有 {% data variables.product.prodname_advanced_security %} 许可的组织所拥有并且启用了依赖关系图的私有仓库。 更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### 管理 {% data variables.product.prodname_dependabot_security_updates %}

对于任何使用 {% data variables.product.prodname_dependabot_alerts %} 的仓库，您可以启用 {% data variables.product.prodname_dependabot_security_updates %} 在检测到漏洞时提出带有安全更新的拉取请求。

1. 从仓库的主页点击 **{% octicon "gear" aria-label="The Settings gear" %} Settings（设置）**。
2. 点击 **Security & analysis（安全和分析）**。
3. 在 {% data variables.product.prodname_dependabot_security_updates %} 旁边，单击 **Enable（启用）**。

更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)”和“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)”。

### 管理 {% data variables.product.prodname_dependabot_version_updates %}

您可以让 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以保持依赖项的更新。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)“。

要启用 {% data variables.product.prodname_dependabot_version_updates %}，您必须创建 *dependabot.yml* 配置文件。 更多信息请参阅“[启用和禁用版本更新](/code-security/supply-chain-security/enabling-and-disabling-version-updates)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### 配置 {% data variables.product.prodname_code_scanning %}

{% data variables.product.prodname_code_scanning_capc %} 可用于{% if currentVersion == "free-pro-team@latest" %}所有公共仓库，以及具有{% else %}您有{% endif %} {% data variables.product.prodname_advanced_security %} 许可的组织拥有的私有仓库。

您可以设置 {% data variables.product.prodname_code_scanning %} 使用 {% data variables.product.prodname_codeql_workflow %} 或第三方工具自动识别仓库中存储的代码中的漏洞和错误。 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

### 配置 {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} 可用于{% if currentVersion == "free-pro-team@latest" %}所有公共仓库，以及具有{% else %}您有{% endif %} {% data variables.product.prodname_advanced_security %} 许可的组织拥有的私有仓库。

根据您的组织设置，默认情况下您的仓库可以启用{% data variables.product.prodname_secret_scanning_caps %}。

1. 从仓库的主页点击 **{% octicon "gear" aria-label="The Settings gear" %} Settings（设置）**。
2. 点击 **Security & analysis（安全和分析）**。
3. 如果 {% data variables.product.prodname_GH_advanced_security %} 尚未启用，请点击 **Enable（启用）**。
4. 在 {% data variables.product.prodname_secret_scanning_caps %} 旁边，单击 **Enable（启用）**。

{% endif %}

### 后续步骤
您可以查看和管理来自安全功能的警报，以解决代码中的依赖项和漏洞。 更多信息请参阅 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}“[查看和更新仓库中的漏洞依赖项](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository)”、{% endif %} {% if currentVersion == "free-pro-team@latest" %}“[管理用于依赖项更新的拉取请求](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)”、{% endif %}“[管理仓库的 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”和“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

{% if currentVersion == "free-pro-team@latest" %}如果您存在安全漏洞，您可以创建安全通告，以私下讨论和修复该漏洞。 更多信息请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)”和“[创建安全通告](/code-security/security-advisories/creating-a-security-advisory)”。
{% endif %}
