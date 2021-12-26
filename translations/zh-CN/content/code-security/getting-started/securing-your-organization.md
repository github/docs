---
title: 保护您的组织
intro: '您可以使用许多 {% data variables.product.prodname_dotcom %} 功能来帮助保护组织的安全。'
permissions: Organization owners can configure organization security settings.
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
---

### 简介
本指南向您展示如何配置一个组织的安全功能。 组织的安全需求是独一无二的，您可能不需要启用每个安全功能。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

某些安全功能仅适用于{% if currentVersion == "free-pro-team@latest" %}公共仓库，以及由{% else %}您具有 {% endif %} {% data variables.product.prodname_advanced_security %} 许可的组织拥有的仓库。 {% data reusables.advanced-security.more-info-ghas %}

### 管理对组织的访问

您可以使用权限级别来控制人们在您的组织中可以采取哪些操作。 更多信息请参阅“[组织的权限级别](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)”。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@next" %}

### 创建默认安全策略

您可以创建默认安全策略，该策略将显示在组织中任何没有自己的安全策略的公共仓库中。 更多信息请参阅“[创建默认社区健康文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### 管理 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图

默认情况下，{% data variables.product.prodname_dotcom %} 会检测公共仓库中的漏洞，并生成 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图。 您可以为组织拥有的所有仓库启用或禁用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图。

1. 单击您的个人资料照片，然后单击 **Organizations（组织）**。
2. 单击组织旁边的 **Settings（设置）** 。
3. 点击 **Security & analysis（安全和分析）**。
4. 单击您要管理的功能旁边的 **Enable all（全部启用）**或 **Disable all（全部禁用）**。
5. （可选）选择 **Automatically enable for new repositories（自动对新仓库启用）**。

更多信息请参阅“[关于漏洞依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”、“[探索仓库的依赖关系](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”和“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" %}

### 管理依赖项审查

依赖项审查可让您在合并到仓库之前在拉取请求中显示依赖关系的变化。 依赖项审查适用于所有公共仓库以及由具有 {% data variables.product.prodname_advanced_security %} 许可的组织所拥有并且启用了依赖关系图的私有仓库。 更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### 管理 {% data variables.product.prodname_dependabot_security_updates %}

对于任何使用 {% data variables.product.prodname_dependabot_alerts %} 的仓库，您可以启用 {% data variables.product.prodname_dependabot_security_updates %} 在检测到漏洞时提出带有安全更新的拉取请求。 您也可以为组织的所有仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}。

1. 单击您的个人资料照片，然后单击 **Organizations（组织）**。
2. 单击组织旁边的 **Settings（设置）** 。
3. 点击 **Security & analysis（安全和分析）**。
4. 单击 {% data variables.product.prodname_dependabot_security_updates %} 旁边的 **Enable all（全部启用）**或 **Disable all（全部禁用）**。
5. （可选）选择 **Automatically enable for new repositories（自动对新仓库启用）**。

更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)”和“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

### 管理 {% data variables.product.prodname_dependabot_version_updates %}

您可以让 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以保持依赖项的更新。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)“。

要启用 {% data variables.product.prodname_dependabot_version_updates %}，您必须创建 *dependabot.yml* 配置文件。 更多信息请参阅“[启用和禁用版本更新](/code-security/supply-chain-security/enabling-and-disabling-version-updates)”。

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### 管理 {% data variables.product.prodname_GH_advanced_security %}

如果您的组织属于具有 {% data variables.product.prodname_advanced_security %} 许可的企业，您可以启用或禁用 {% data variables.product.prodname_advanced_security %} 功能。

1. 单击您的个人资料照片，然后单击 **Organizations（组织）**。
2. 单击组织旁边的 **Settings（设置）** 。
3. 点击 **Security & analysis（安全和分析）**。
4. 单击 {% data variables.product.prodname_GH_advanced_security %} 旁边的 **Enable all（全部启用）**或 **Disable all（全部禁用）**。
5. （可选）选择 **Automatically enable for new private repositories（自动对新私有仓库启用）**。

更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”和“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

### 配置 {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} 可用于{% if currentVersion == "free-pro-team@latest" %}公共仓库，以及具有{% else %}您有{% endif %} {% data variables.product.prodname_advanced_security %} 许可的组织拥有的私有仓库。

您可以对已启用 {% data variables.product.prodname_advanced_security %} 的所有仓库启用或禁用 {% data variables.product.prodname_secret_scanning %}。

1. 单击您的个人资料照片，然后单击 **Organizations（组织）**。
2. 单击组织旁边的 **Settings（设置）** 。
3. 点击 **Security & analysis（安全和分析）**。
4. 单击 {% data variables.product.prodname_secret_scanning_caps %} 旁边的 **Enable all（全部启用）**或 **Disable all（全部禁用）**（仅限 {% data variables.product.prodname_GH_advanced_security %} 仓库）。
5. （可选）选择**自动对添加到 {% data variables.product.prodname_advanced_security %} 的私有仓库启用**。

更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% endif %}

### 后续步骤
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" %}您可以在安全概览中查看、过滤以及排序由您的组织拥有的仓库的安全警报。 更多信息请参阅“[探索安全警报](/code-security/security-overview/exploring-security-alerts)”。{% endif %}

您可以查看和管理来自安全功能的警报，以解决代码中的依赖项和漏洞。 更多信息请参阅 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}“[查看和更新仓库中的漏洞依赖项](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository)”、{% endif %} {% if currentVersion == "free-pro-team@latest" %}“[管理用于依赖项更新的拉取请求](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)”、{% endif %}“[管理仓库的 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”和“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

{% if currentVersion == "free-pro-team@latest" %}如果您存在安全漏洞，您可以创建安全通告，以私下讨论和修复该漏洞。 更多信息请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)”和“[创建安全通告](/code-security/security-advisories/creating-a-security-advisory)”。
{% endif %}
