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
shortTitle: Secure your repository
ms.openlocfilehash: 46addd796d3eee772dcc14da7604f7a375ac14b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526684'
---
## 简介
本指南向您展示如何配置仓库的安全功能。 您必须是仓库管理员或组织所有者才能配置仓库的安全设置。

您的安全需求是仓库独有的，因此您可能不需要启用仓库的每个功能。 有关详细信息，请参阅“[{% data variables.product.prodname_dotcom %} 安全功能](/code-security/getting-started/github-security-features)”。

{% data reusables.advanced-security.security-feature-availability %}

## 管理对仓库的访问

保护仓库的第一步是设置谁可以查看和修改您的代码。 有关详细信息，请参阅“[管理存储库设置](/github/administering-a-repository/managing-repository-settings)”。

从存储库的主页中，单击“{% octicon "gear" aria-label="The Settings gear" %}设置”，然后向下滚动到“危险区域”。

- 要更改谁可以查看存储库，请单击“更改可见性”。 有关详细信息，请参阅“[设置存储库可见性](/github/administering-a-repository/setting-repository-visibility)”。{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
- 要更改谁可以访问存储库并调整权限，请单击“管理访问权限”。 有关详细信息，请参阅“[管理有权访问存储库的团队和人员](/github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository)”。{% endif %}

## 设置安全策略

1. 从存储库的主页中，单击“{% octicon "shield" aria-label="The shield symbol" %} 安全性”。
2. 单击“安全策略”。
3. 单击“开始设置”。
4. 添加关于项目受支持版本以及如何报告漏洞的信息。

有关详细信息，请参阅“[向存储库添加安全策略](/code-security/getting-started/adding-a-security-policy-to-your-repository)”。

## 管理依赖关系图

{% ifversion fpt or ghec %} 依赖项关系图自动为所有公共存储库生成，你可以选择为专用存储库启用它。 它解释存储库中的清单和锁定文件以识别依赖项。

1. 从存储库的主页中，单击“{% octicon "gear" aria-label="The Settings gear" %} 设置”。
2. 单击“安全性和分析”。
3. 在依赖项关系图旁边，单击“启用”或“禁用” 。
{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

有关详细信息，请参阅“[探索存储库的依赖项](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)”。

## 管理 {% data variables.product.prodname_dependabot_alerts %}

当 {% data variables.product.prodname_dotcom %} 在依赖关系图中标识具有漏洞的依赖项时，将生成 {% data variables.product.prodname_dependabot_alerts %} 。 {% ifversion fpt or ghec %}您可以为任何存储库启用 {% data variables.product.prodname_dependabot_alerts %}。{% endif %}

{% ifversion fpt or ghec %}
1. 单击你的个人资料照片，然后单击“设置”。
2. 单击“安全性和分析”。
3. 单击 {% data variables.product.prodname_dependabot_alerts %} 旁边的“全部启用”。
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %} {% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies){% ifversion fpt or ghec %}”和“[管理个人帐户的安全和分析设置](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account){% endif %}”。

## 管理依赖项审查

依赖项审查可让您在合并到仓库之前在拉取请求中显示依赖关系的变化。 有关详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)”。

依赖项审查是一项 {% data variables.product.prodname_GH_advanced_security %} 功能。 {% ifversion fpt or ghec %} 已为所有公共存储库启用了依赖项审查。 {% ifversion fpt %}将 {% data variables.product.prodname_ghe_cloud %} 与 {% data variables.product.prodname_advanced_security %} 一起使用的组织还可以对私有和内部存储库启用依赖项审查。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#managing-dependency-review)。 {% endif %}{% endif %}{% ifversion ghec or ghes or ghae %}要为 {% ifversion ghec %}私有或内部 {% endif %}存储库启用依赖项审查，请确保已启用依赖项关系图并启用 {% data variables.product.prodname_GH_advanced_security %}。 

1. 从存储库的主页中，单击“{% octicon "gear" aria-label="The Settings gear" %}设置”。
2. 单击“安全性和分析”。
3. {% ifversion ghec %}如果尚未启用依赖项关系图，请单击“启用”。{% elsif ghes or ghae %}检查是否已为企业配置依赖项关系图。{% endif %}
4. 如果尚未启用 {% data variables.product.prodname_GH_advanced_security %}，请单击“启用”。

{% endif %}


{% ifversion fpt or ghec or ghes > 3.2 %}

## 管理 {% data variables.product.prodname_dependabot_security_updates %}

对于任何使用 {% data variables.product.prodname_dependabot_alerts %} 的仓库，您可以启用 {% data variables.product.prodname_dependabot_security_updates %} 在检测到漏洞时提出带有安全更新的拉取请求。

1. 从存储库的主页中，单击“{% octicon "gear" aria-label="The Settings gear" %}设置”。
2. 单击“安全性和分析”。
3. 在 {% data variables.product.prodname_dependabot_security_updates %} 旁边，单击“启用”。

有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/about-dependabot-security-updates)”和“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/configuring-dependabot-security-updates)”。

## 管理 {% data variables.product.prodname_dependabot_version_updates %}

您可以让 {% data variables.product.prodname_dependabot %} 自动提出拉取请求以保持依赖项的更新。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/about-dependabot-version-updates)”。

{% ifversion dependabot-settings-update-37 %}
1. 从存储库的主页中，单击“{% octicon "gear" aria-label="The Settings gear" %} 设置”。
2. 单击“安全性和分析”。
3. 在 {% data variables.product.prodname_dependabot_version_updates %} 旁，单击“启用”以创建基本 dependabot.yml 配置文件。
4. 指定要更新文件并将文件提交到存储库的依赖项。 有关详细信息，请参阅“[配置 Dependabot 版本更新](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#enabling-dependabot-version-updates)”。

{% else %} 要启用 {% data variables.product.prodname_dependabot_version_updates %}，必须创建 dependabot.yml 配置文件。 有关详细信息，请参阅“[配置 {% data variables.product.prodname_dependabot %} 版本更新](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-dependabot-version-updates)”。
{% endif %}

{% endif %}

## 配置 {% data variables.product.prodname_code_scanning %}

您可以设置 {% data variables.product.prodname_code_scanning %} 使用 {% data variables.product.prodname_codeql_workflow %} 或第三方工具自动识别仓库中存储的代码中的漏洞和错误。 有关详细信息，请参阅“[为存储库设置 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”。

{% data variables.product.prodname_code_scanning_capc %} 适用于{% ifversion fpt or ghec %}所有公共存储库，以及属于具有许可证的企业一部分的组织所拥有的私有存储库{% else %}组织拥有的仓库（如果您的企业使用 {% endif %}{% data variables.product.prodname_GH_advanced_security %}）。

## 配置 {% data variables.product.prodname_secret_scanning %}

{% data variables.product.prodname_secret_scanning_caps %} 可{% ifversion fpt or ghec %}对所有公共存储库启用，并且可用于属于具有许可证的企业一部分的组织所拥有的私有存储库{% else %}组织拥有的仓库（如果您的企业使用 {% endif %}{% data variables.product.prodname_GH_advanced_security %}）。 {% ifversion fpt %}有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/code-security/getting-started/securing-your-repository#configuring-secret-scanning)。{% else %}可能已为存储库启用 {% data variables.product.prodname_secret_scanning_caps %}，具体取决于组织的设置。

1. 从存储库的主页中，单击“{% octicon "gear" aria-label="The Settings gear" %}设置”。
2. 单击“安全性和分析”。
3. 如果尚未启用 {% data variables.product.prodname_GH_advanced_security %}，请单击“启用”。
4. 在 {% data variables.product.prodname_secret_scanning_caps %} 旁边，单击“启用”。 {% endif %}

## 后续步骤
您可以查看和管理来自安全功能的警报，以解决代码中的依赖项和漏洞。 有关详细信息，请参阅{% ifversion fpt or ghes or ghec %}“[查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”、{% endif %} {% ifversion fpt or ghec or ghes > 3.2 %}“[管理用于依赖项更新的拉取请求](/code-security/supply-chain-security/managing-pull-requests-for-dependency-updates)”、{% endif %}“[管理存储库的 {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”和“[管理来自 {% data variables.product.prodname_secret_scanning %} 的警报](/code-security/secret-security/managing-alerts-from-secret-scanning)”。

{% ifversion fpt or ghec %}如果您存在安全漏洞，您可以创建安全通告，以私下讨论和修复该漏洞。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)”和“[创建安全通告](/code-security/security-advisories/creating-a-security-advisory)”。
{% endif %}
