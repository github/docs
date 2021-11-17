---
title: 保护您的组织
intro: '您可以使用许多 {% data variables.product.prodname_dotcom %} 功能来帮助保护组织的安全。'
permissions: Organization owners can configure organization security settings.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: 保护您的组织
---

## 简介
本指南向您展示如何配置一个组织的安全功能。 组织的安全需求是独一无二的，您可能不需要启用每个安全功能。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

某些安全功能仅适用于{% ifversion fpt or ghec %}公共仓库，以及由{% else %}您具有 {% endif %} {% data variables.product.prodname_advanced_security %} 许可的组织拥有的仓库。 {% data reusables.advanced-security.more-info-ghas %}

## 管理对组织的访问

You can use roles to control what actions people can take in your organization. {% if security-managers %}For example, you can assign the security manager role to a team to give them the ability to manage security settings across your organization, as well as read access to all repositories.{% endif %} For more information, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."

{% ifversion fpt or ghes > 3.0 or ghec %}

## 创建默认安全策略

您可以创建默认安全策略，该策略将显示在组织中任何没有自己的安全策略的公共仓库中。 更多信息请参阅“[创建默认社区健康文件](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”。

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae-issue-4864 or ghec %}
## 管理 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图

{% ifversion fpt or ghec %}默认情况下，{% data variables.product.prodname_dotcom %} 会检测公共仓库中的漏洞，并生成 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图。 您可以为组织拥有的所有私有仓库启用或禁用 {% data variables.product.prodname_dependabot_alerts %} 和依赖关系图。

1. 单击您的个人资料照片，然后单击 **Organizations（组织）**。
2. 单击组织旁边的 **Settings（设置）** 。
3. 点击 **Security & analysis（安全和分析）**。
4. 单击您要管理的功能旁边的 **Enable all（全部启用）**或 **Disable all（全部禁用）**。
5. （可选）选择 **Automatically enable for new repositories（自动对新仓库启用）**。
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}
{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

更多信息请参阅“[关于漏洞依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”、“[探索仓库的依赖关系](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”和“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。
{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}

## 管理依赖项审查

依赖项审查可让您在合并到仓库之前在拉取请求中显示依赖关系的变化。
{% ifversion fpt or ghec %}依赖项审查在所有公共仓库中可用。 For private and internal repositories you require a license for {% data variables.product.prodname_advanced_security %}. To enable dependency review for an organization, enable the dependency graph and enable {% data variables.product.prodname_advanced_security %}.
{% elsif ghes or ghae %}Dependency review is available when dependency graph is enabled for {% data variables.product.product_location %} and you enable {% data variables.product.prodname_advanced_security %} for the organization (see below).{% endif %}
更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。

{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## 管理 {% data variables.product.prodname_dependabot_security_updates %}

对于任何使用 {% data variables.product.prodname_dependabot_alerts %} 的仓库，您可以启用 {% data variables.product.prodname_dependabot_security_updates %} 在检测到漏洞时提出带有安全更新的拉取请求。 您也可以为组织的所有仓库启用或禁用 {% data variables.product.prodname_dependabot_security_updates %}。

1. 单击您的个人资料照片，然后单击 **Organizations（组织）**。
2. 单击组织旁边的 **Settings（设置）** 。
3. 点击 **Security & analysis（安全和分析）**。
4. 单击 {% data variables.product.prodname_dependabot_security_updates %} 旁边的 **Enable all（全部启用）**或 **Disable all（全部禁用）**。
5. （可选）选择 **Automatically enable for new repositories（自动对新仓库启用）**。

更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)”和“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

## 管理 {% data variables.product.prodname_dependabot_version_updates %}

您可以让 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以保持依赖项的更新。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)“。

要启用 {% data variables.product.prodname_dependabot_version_updates %}，您必须创建 *dependabot.yml* 配置文件。 For more information, see "[Enabling and disabling {% data variables.product.prodname_dependabot %} version updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)."

{% endif %}

{% ifversion fpt or ghes > 2.22 or ghae or ghec %}
## 管理 {% data variables.product.prodname_GH_advanced_security %}

{% ifversion fpt or ghes > 2.22 or ghec %}
如果您的组织属于具有 {% data variables.product.prodname_advanced_security %} 许可的企业，您可以启用或禁用 {% data variables.product.prodname_advanced_security %} 功能。
{% elsif ghae %}
您可以启用或禁用 {% data variables.product.prodname_advanced_security %} 功能。
{% endif %}

1. 单击您的个人资料照片，然后单击 **Organizations（组织）**。
2. 单击组织旁边的 **Settings（设置）** 。
3. 点击 **Security & analysis（安全和分析）**。
4. 单击 {% data variables.product.prodname_GH_advanced_security %} 旁边的 **Enable all（全部启用）**或 **Disable all（全部禁用）**。
5. （可选）选择 **Automatically enable for new private repositories（自动对新私有仓库启用）**。

更多信息请参阅“[关于 {% data variables.product.prodname_GH_advanced_security %}](/github/getting-started-with-github/about-github-advanced-security)”和“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

## 配置 {% data variables.product.prodname_secret_scanning %}
{% data variables.product.prodname_secret_scanning_caps %} 可用于{% ifversion fpt or ghec %}公共仓库，以及具有{% else %}您有{% endif %} {% data variables.product.prodname_advanced_security %} 许可的组织拥有的私有仓库。

您可以对已启用 {% data variables.product.prodname_advanced_security %} 的所有仓库启用或禁用 {% data variables.product.prodname_secret_scanning %}。

1. 单击您的个人资料照片，然后单击 **Organizations（组织）**。
2. 单击组织旁边的 **Settings（设置）** 。
3. 点击 **Security & analysis（安全和分析）**。
4. 单击 {% data variables.product.prodname_secret_scanning_caps %} 旁边的 **Enable all（全部启用）**或 **Disable all（全部禁用）**（仅限 {% data variables.product.prodname_GH_advanced_security %} 仓库）。
5. （可选）选择**自动对添加到 {% data variables.product.prodname_advanced_security %} 的私有仓库启用**。

更多信息请参阅“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% endif %}

## 后续步骤
{% ifversion fpt or ghes > 3.1 or ghec %}You can view, filter, and sort security alerts for repositories owned by your organization in the security overview. For more information, see "[About the security overview](/code-security/security-overview/about-the-security-overview)."{% endif %}

您可以查看和管理来自安全功能的警报，以解决代码中的依赖项和漏洞。 For more information, see {% ifversion fpt or ghes > 2.22 or ghec %} "[Viewing and updating vulnerable dependencies in your repository](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),"{% endif %} {% ifversion fpt or ghec or ghes > 3.2 %}"[Managing pull requests for dependency updates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Managing {% data variables.product.prodname_code_scanning %} for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," and "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. 更多信息请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)”和“[创建安全通告](/code-security/security-advisories/creating-a-security-advisory)”。
{% endif %}
