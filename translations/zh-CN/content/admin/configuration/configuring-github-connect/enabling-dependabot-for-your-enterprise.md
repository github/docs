---
title: 为企业启用 Dependabot
intro: '可以通过启用 {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} 和 {% data variables.product.prodname_dependabot_updates %}{% endif %} 让 {% data variables.location.product_location %} 的用户查找并修复其代码依赖项中的漏洞。'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
ms.openlocfilehash: 009b6199e0212c531caaf48b220342853d656248
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135669'
---
## 关于 {% data variables.product.product_name %} 的 {% data variables.product.prodname_dependabot %}

{% data variables.product.prodname_dependabot %} 有助于 {% data variables.location.product_location %} 的用户查找和修复其依赖项中的漏洞。{% ifversion ghes %}可启用 {% data variables.product.prodname_dependabot_alerts %} 以通知用户漏洞依赖项，启用 {% data variables.product.prodname_dependabot_updates %} 以修复漏洞并将依赖项更新到最新版本。

{% data variables.product.prodname_dependabot %} 只是可用于增强 {% data variables.location.product_location %} 供应链安全性的众多功能之一。 有关其他功能的详细信息，请参阅“[关于企业的供应链安全性](/admin/code-security/managing-supply-chain-security-for-your-enterprise/about-supply-chain-security-for-your-enterprise)”。

### 关于 {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

使用 {% data variables.product.prodname_dependabot_alerts %}，{% data variables.product.prodname_dotcom %} 可识别存储库中不安全的依赖项，并使用来自 {% data variables.product.prodname_advisory_database %} 和依赖项关系图服务的数据在 {% data variables.location.product_location %} 上创建警报。

{% data reusables.repositories.tracks-vulnerabilities %}

为企业启用 {% data variables.product.prodname_dependabot_alerts %} 后，漏洞数据会每小时一次从 {% data variables.product.prodname_advisory_database %} 同步到你的实例。 仅同步 {% data variables.product.company_short %} 审核的公告。 {% data reusables.security-advisory.link-browsing-advisory-db %} 

您还可以随时选择手动同步漏洞数据。 有关详细信息，请参阅“[查看企业的漏洞数据](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)”。

{% note %}

注意：启用 {% data variables.product.prodname_dependabot_alerts %} 时，不会将来自 {% data variables.location.product_location %} 的代码或有关代码的信息上传到 {% data variables.product.prodname_dotcom_the_website %}。 

{% endnote %}

当 {% data variables.location.product_location %} 接收到有关漏洞的信息时，它将识别 {% data variables.location.product_location %} 中使用受影响依赖项版本的存储库，并生成 {% data variables.product.prodname_dependabot_alerts %}。 可选择是否自动通知用户有关新的 {% data variables.product.prodname_dependabot_alerts %}。 

对于启用了 {% data variables.product.prodname_dependabot_alerts %} 的存储库，扫描会在任何推送到包含清单文件或锁定文件的默认分支时触发。 此外，当向 {% data variables.location.product_location %} 添加新漏洞记录时，{% data variables.product.product_name %} 会扫描 {% data variables.location.product_location %} 上的所有现有存储库并对任何易受攻击的存储库生成警报。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。

{% ifversion ghes %}
### 关于 {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

启用 {% data variables.product.prodname_dependabot_alerts %} 之后，可选择启用 {% data variables.product.prodname_dependabot_updates %}。 为 {% data variables.location.product_location %} 启用 {% data variables.product.prodname_dependabot_updates %} 之后，用户可以配置存储库，以便它们的依赖项自动进行更新并保持安全。 

{% note %} 

注意：{% data variables.product.product_name %} 上的 {% data variables.product.prodname_dependabot_updates %} 需要带自托管运行器的 {% data variables.product.prodname_actions %}。

{% endnote %}

默认情况下，{% data variables.product.prodname_dependabot %} 使用的 {% data variables.product.prodname_actions %} 运行器需要访问 Internet，以便从上游包管理器下载更新的包。 对于由 {% data variables.product.prodname_github_connect %} 提供支持的 {% data variables.product.prodname_dependabot_updates %}，Internet 访问权限为运行器提供了一个令牌，允许访问托管在 {% data variables.product.prodname_dotcom_the_website %} 上的依赖项和公告。

使用 {% data variables.product.prodname_dependabot_updates %}，{% data variables.product.company_short %} 将自动创建拉取请求，以两种方式更新依赖项。

- **{% data variables.product.prodname_dependabot_version_updates %}** ：用户将 {% data variables.product.prodname_dependabot %} 配置文件添加到存储库，启用 {% data variables.product.prodname_dependabot %} 在发布跟踪依赖项的新版本时创建拉取请求。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)”。
- **{% data variables.product.prodname_dependabot_security_updates %}** ：当 {% data variables.product.prodname_dotcom %} 检测到存储库的依赖项关系图的依赖项之一存在漏洞时，用户切换存储库设置以启用 {% data variables.product.prodname_dependabot %} 来创建拉取请求。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)”和“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)”。
{% endif %}

## 启用 {% data variables.product.prodname_dependabot_alerts %}

在启用 {% data variables.product.prodname_dependabot_alerts %} 之前：
- 必须启用 {% data variables.product.prodname_github_connect %}。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)”。{% ifversion ghes %}
- 您必须启用依赖关系图。 有关详细信息，请参阅“[为企业启用依赖项关系图](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)”。{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %} {%- ifversion dependabot-updates-github-connect %}
1. 在“{% data variables.product.prodname_dependabot %}”下，在“用户可以接收开放源代码依赖项的漏洞警报”右侧，选择下拉菜单并单击“启用但不通知”。 （可选）要启用警报和通知，请单击“启用并通知”。

   ![用于启用扫描存储库有无漏洞的下拉菜单屏幕截图](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. 在“可扫描存储库有无漏洞”下，使用下拉菜单，并单击“启用但不通知”。 （可选）要启用警报和通知，请单击“启用并通知”。
   ![用于启用扫描存储库有无漏洞的下拉菜单](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png) {%- endif %} {% tip %}

   提示：我们建议将 {% data variables.product.prodname_dependabot_alerts %} 配置为在前几天发出警报但不通知，以避免电子邮件过载。 几天后，可以启用通知，像往常一样接收 {% data variables.product.prodname_dependabot_alerts %}。

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## 启用 {% data variables.product.prodname_dependabot_updates %}

为企业启用 {% data variables.product.prodname_dependabot_alerts %} 之后，可启用 {% data variables.product.prodname_dependabot_updates %}。

{% ifversion ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} 有关详细信息，请参阅“[GitHub Enterprise Server 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”。

如果企业使用聚类分析，{% data variables.product.product_name %} 上不支持 {% data variables.product.prodname_dependabot_updates %}。
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. 在“安全”下，选择 {% data variables.product.prodname_dependabot_security_updates %}。

   ![用于启用或禁用 {% data variables.product.prodname_dependabot_security_updates %} 的复选框屏幕截图](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. 单击“访问实例”。
1. 配置专用自托管运行器以创建将更新依赖项的拉取请求。 这是必需的，因为工作流使用特定的运行程序标签。 有关详细信息，请参阅“[为企业中的 {% data variables.product.prodname_dependabot_updates %} 管理自托管运行器](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)”。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. 在“{% data variables.product.prodname_dependabot %}”下，在“用户可以轻松升级到非易受攻击的开源代码依赖项”右侧，单击“启用”。

   ![用于启用更新易受攻击的依赖项下拉菜单屏幕截图](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %} {% ifversion ghes %}

启用 {% data variables.product.prodname_dependabot_alerts %} 时，还应考虑为 {% data variables.product.prodname_dependabot_security_updates %} 设置 {% data variables.product.prodname_actions %}。 此功能使开发人员可以修复其依赖项中的漏洞。 有关详细信息，请参阅“[为企业中的 {% data variables.product.prodname_dependabot_updates %} 管理自托管运行器](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)”。

如果需要增强安全性，建议将 {% data variables.product.prodname_dependabot %} 配置为使用专用注册表。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_dependabot %} 的加密机密](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot)”。

{% endif %}
