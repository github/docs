---
title: 保护您的仓库
intro: '您可以使用许多 {% data variables.product.prodname_dotcom %} 功能来帮助保护仓库的安全。'
permissions: Repository administrators and organization owners can configure repository security settings.
redirect_from:
  - /github/administering-a-repository/about-securing-your-repository
  - /github/code-security/getting-started/about-securing-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
  - Advanced Security
shortTitle: 保护您的仓库
---

## 简介
本指南向您展示如何配置仓库的安全功能。 您必须是仓库管理员或组织所有者才能配置仓库的安全设置。

您的安全需求是仓库独有的，因此您可能不需要启用仓库的每个功能。 更多信息请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

{% data reusables.advanced-security.security-feature-availability %}

## 管理对仓库的访问

保护仓库的第一步是设置谁可以查看和修改您的代码。 更多信息请参阅“[管理仓库设置](/github/administering-a-repository/managing-repository-settings)”。

从仓库主页点击 **{% octicon "gear" aria-label="The Settings gear" %}设置**，然后向下滚动到“危险区”。

- 要更改谁可以查看您的仓库，请点击 **Change visibility（更改可见性）**。 更多信息请参阅“[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)”。{% ifversion fpt or ghec %}
- 要更改谁可以访问您的仓库并调整权限，请点击 **Manage access（管理访问）**。 更多信息请参阅“[管理有权访问仓库的团队和人员](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)”。{% endif %}

{% ifversion fpt or ghes > 3.0 or ghae or ghec %}
## 设置安全策略

1. 从仓库的主页点击 **{% octicon "shield" aria-label="The shield symbol" %} Security（安全性）**。
2. 点击 **Security policy（安全策略）**。
3. 单击 **Start setup（开始设置）**。
4. 添加关于项目受支持版本以及如何报告漏洞的信息。

更多信息请参阅“[添加安全政策到仓库](/code-security/getting-started/adding-a-security-policy-to-your-repository)”。

{% endif %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## 管理依赖关系图

{% ifversion fpt or ghec %}
The dependency graph is automatically generated for all public repositories, and you can choose to enable it for private repositories. It interprets manifest and lock files in a repository to identify dependencies.

1. 从仓库的主页点击 **{% octicon "gear" aria-label="The Settings gear" %} Settings（设置）**。
2. 点击 **Security & analysis（安全和分析）**。
3. 在依赖关系图旁边，单击 **Enable（启用）**或 **Disable（禁用）**。
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

更多信息请参阅“[探索仓库的依赖项](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。

{% endif %}

{% ifversion fpt or ghes or ghae-issue-4864 or ghec %}
## 管理 {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.prodname_dependabot_alerts %} are generated when {% data variables.product.prodname_dotcom %} identifies a dependency in the dependency graph with a vulnerability. {% ifversion fpt or ghec %}You can enable {% data variables.product.prodname_dependabot_alerts %} for any repository.{% endif %}

{% ifversion fpt or ghec %}
1. 单击您的个人资料照片，然后单击 **Settings（设置）**。
2. 点击 **Security & analysis（安全和分析）**。
3. 单击 {% data variables.product.prodname_dependabot_alerts %} 旁边的 **Enable all（全部启用）**。
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}
{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

更多信息请参阅“[关于漏洞依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}”和“[管理用户帐户的安全性和分析设置](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account){% endif %}”。

{% endif %}

{% ifversion fpt or ghes > 3.1 or ghae-issue-4864 or ghec %}
## 管理依赖项审查

依赖项审查可让您在合并到仓库之前在拉取请求中显示依赖关系的变化。 更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。

Dependency review is a {% data variables.product.prodname_GH_advanced_security %} feature. {% ifversion fpt or ghec %}Dependency review is already enabled for all public repositories. {% ifversion fpt %}Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} can additionally enable dependency review for private and internal repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review). {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}To enable dependency review for a {% ifversion ghec %}private or internal {% endif %}repository, ensure that the dependency graph is enabled and enable {% data variables.product.prodname_GH_advanced_security %}.

1. 从仓库的主页点击 **{% octicon "gear" aria-label="The Settings gear" %} Settings（设置）**。
2. 点击 **Security & analysis（安全和分析）**。
3. {% ifversion ghec %}If dependency graph is not already enabled, click **Enable**.{% elsif ghes or ghae %}Check that dependency graph is configured for your enterprise.{% endif %}
4. 如果 {% data variables.product.prodname_GH_advanced_security %} 尚未启用，请点击 **Enable（启用）**。

{% endif %}

{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}

## 管理 {% data variables.product.prodname_dependabot_security_updates %}

对于任何使用 {% data variables.product.prodname_dependabot_alerts %} 的仓库，您可以启用 {% data variables.product.prodname_dependabot_security_updates %} 在检测到漏洞时提出带有安全更新的拉取请求。

1. 从仓库的主页点击 **{% octicon "gear" aria-label="The Settings gear" %} Settings（设置）**。
2. 点击 **Security & analysis（安全和分析）**。
3. 在 {% data variables.product.prodname_dependabot_security_updates %} 旁边，单击 **Enable（启用）**。

更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)”和“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)”。

## 管理 {% data variables.product.prodname_dependabot_version_updates %}

您可以让 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以保持依赖项的更新。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)“。

要启用 {% data variables.product.prodname_dependabot_version_updates %}，您必须创建 *dependabot.yml* 配置文件。 For more information, see "[Enabling and disabling {% data variables.product.prodname_dependabot %} version updates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)."

{% endif %}

## 配置 {% data variables.product.prodname_code_scanning %}

您可以设置 {% data variables.product.prodname_code_scanning %} 使用 {% data variables.product.prodname_codeql_workflow %} 或第三方工具自动识别仓库中存储的代码中的漏洞和错误。 更多信息请参阅“[为仓库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% data variables.product.prodname_code_scanning_capc %} is available {% ifversion fpt or ghec %}for all public repositories, and for private repositories owned by organizations that are part of an enterprise with a license for {% else %}for organization-owned repositories if your enterprise uses {% endif %}{% data variables.product.prodname_GH_advanced_security %}.

## 配置 {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} is {% ifversion fpt or ghec %}enabled for all public repositories and is available for private repositories owned by organizations that are part of an enterprise with a license for {% else %}available for organization-owned repositories if your enterprise uses {% endif %}{% data variables.product.prodname_GH_advanced_security %}. {% ifversion fpt %}For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning).{% else %}{% data variables.product.prodname_secret_scanning_caps %} may already be enabled for your repository, depending upon your organization's settings.

1. 从仓库的主页点击 **{% octicon "gear" aria-label="The Settings gear" %} Settings（设置）**。
2. 点击 **Security & analysis（安全和分析）**。
3. 如果 {% data variables.product.prodname_GH_advanced_security %} 尚未启用，请点击 **Enable（启用）**。
4. 在 {% data variables.product.prodname_secret_scanning_caps %} 旁边，单击 **Enable（启用）**。
{% endif %}

## 后续步骤
您可以查看和管理来自安全功能的警报，以解决代码中的依赖项和漏洞。 For more information, see {% ifversion fpt or ghes or ghec %} "[Viewing and updating vulnerable dependencies in your repository](/code-security/supply-chain-security/viewing-and-updating-vulnerable-dependencies-in-your-repository),"{% endif %} {% ifversion fpt or ghec or ghes > 3.2 %}"[Managing pull requests for dependency updates](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)," {% endif %}"[Managing {% data variables.product.prodname_code_scanning %} for your repository](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)," and "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/managing-alerts-from-secret-scanning)."

{% ifversion fpt or ghec %}If you have a security vulnerability, you can create a security advisory to privately discuss and fix the vulnerability. 更多信息请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)”和“[创建安全通告](/code-security/security-advisories/creating-a-security-advisory)”。
{% endif %}
