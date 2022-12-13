---
title: 使用机密扫描保护推送
intro: '可以使用 {% data variables.product.prodname_secret_scanning %} 通过启用推送保护，防止将支持的机密推送到 {% ifversion secret-scanning-enterprise-level %}企业、{% endif %} 组织{% ifversion secret-scanning-enterprise-level %}、{% endif %} 或存储库中。'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: secret-scanning-push-protection
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable push protection
ms.openlocfilehash: 518013033ac5d87fd8428d1c99d5f633a3bc2e65
ms.sourcegitcommit: fc8b57e068b6922b45318029e22ceb3d6c1c3087
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184494'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %} {% data reusables.secret-scanning.push-protection-beta %}

## 关于机密的推送保护

截至目前，{% data variables.product.prodname_secret_scanning_GHAS %} 在推送后检查机密，并向用户提醒公开的机密。 {% data reusables.secret-scanning.push-protection-overview %}

如果参与者绕过机密的推送保护块，{% data variables.product.prodname_dotcom %}：
- 在存储库的“安全”选项卡中创建一个警报，状态如下表所述。
- 将绕过事件添加到审核日志。{% ifversion secret-scanning-push-protection-email %}
- 向监管存储库的组织所有者、安全管理员和存储库管理员发送一封电子邮件警报，其中包含指向机密的链接以及允许使用该机密的原因。{% endif %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

有关推送保护支持的机密和服务提供商的信息，请参阅“[{% data variables.product.prodname_secret_scanning_caps %} 模式](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-push-protection)”。

## 启用 {% data variables.product.prodname_secret_scanning %} 作为推送保护

若要使用 {% data variables.product.prodname_secret_scanning %} 作为推送保护，{% ifversion secret-scanning-enterprise-level %}企业、{% endif %} 组织{% ifversion secret-scanning-enterprise-level %}、{% endif %} 或存储库需要同时启用 {% data variables.product.prodname_GH_advanced_security %} 和 {% data variables.product.prodname_secret_scanning %}。 有关详细信息，请参阅 {% ifversion secret-scanning-enterprise-level %}“[管理企业的安全性和分析设置](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)”{% endif %}“[管理组织的安全性和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”“[管理存储库的安全性和分析设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”和“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”。

组织所有者、安全管理员和存储库管理员可以通过 UI 和 API 为 {% data variables.product.prodname_secret_scanning %} 启用推送保护。 有关详细信息，请参阅“[存储库](/rest/reference/repos#update-a-repository)”，并展开 REST API 文档中的“`security_and_analysis` 对象的属性”部分。

{% ifversion secret-scanning-enterprise-level %}
### 启用 {% data variables.product.prodname_secret_scanning %} 作为企业的推送保护
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. 在左侧边栏中，单击“代码安全性和分析”。 {% data reusables.advanced-security.secret-scanning-push-protection-enterprise %} {% endif %}

### 启用 {% data variables.product.prodname_secret_scanning %} 作为组织的推送保护

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-org %}

### 启用 {% data variables.product.prodname_secret_scanning %} 作为存储库的推送保护

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% data reusables.repositories.navigate-to-ghas-settings %} {% data reusables.advanced-security.secret-scanning-push-protection-repo %}

## 使用机密扫描作为命令行的推送保护

{% data reusables.secret-scanning.push-protection-command-line-choice %}

在命令行上，每次最多显示 5 个检测到的机密。 如果存储库中已检测到特定机密并且警报已存在，则 {% data variables.product.prodname_dotcom %} 不会阻止该机密。 

{% ifversion push-protection-custom-link-orgs %} 

组织管理员可以提供在阻止推送时显示的自定义链接。 此自定义链接可以包含特定于组织的资源和建议，例如有关使用建议机密保管库或者要联系谁来了解与所阻止的机密相关的问题的指示。

![显示当用户尝试将机密推送到存储库时推送被阻止的屏幕截图](/assets/images/help/repository/secret-scanning-push-protection-with-custom-link.png)

{% else %}

![显示当用户尝试将机密推送到存储库时推送被阻止的屏幕截图](/assets/images/help/repository/secret-scanning-push-protection-with-link.png)

{% endif %}

{% data reusables.secret-scanning.push-protection-remove-secret %} 有关修正被阻止机密的详细信息，请参阅“[推送受推送保护阻止的分支](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-on-the-command-line)”。

如果确认机密是真实的，并且你打算稍后修补它，你应该致力于尽快修补机密。 例如，你可以撤销该机密，并从存储库的提交历史记录中删除机密。 必须撤销已公开的真实机密，以避免未经授权的访问。 在撤销机密之前，可以考虑先轮换机密。 有关详细信息，请参阅“[从存储库中删除敏感数据](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)”。

{% data reusables.secret-scanning.push-protection-multiple-branch-note %}

{% ifversion ghes < 3.6 or ghae < 3.6 %}

{% tip %}

提示：在 {% data variables.product.product_name %} 版本 3.6 或更高版本中，可以使用 {% data variables.product.prodname_secret_scanning %} 作为 Web UI 和命令行的推送保护。

{% endtip %}

{% endif %}

### 允许推送被阻止的机密

如果 {% data variables.product.prodname_dotcom %} 阻止了一个你认为可以安全推送的机密，则可以允许该机密并指定允许的原因。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

1. 当推送被阻止时，请访问 {% data variables.product.prodname_dotcom %} 返回的 URL。
  ![显示窗体的屏幕截图，其中包含取消阻止机密推送的选项](/assets/images/help/repository/secret-scanning-unblock-form.png) {% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}
1. 单击“允许我推送此机密”。
2. 在三个小时内在命令行上重新尝试推送。 如果三小时内未推送，则需要重复此过程。

{% ifversion secret-scanning-push-protection-web-ui %}
## 使用机密扫描作为 Web UI 的推送保护

{% data reusables.secret-scanning.push-protection-web-ui-choice %}

{% data variables.product.prodname_dotcom %} 在 Web UI 中一次只显示一个检测到的秘密。 如果存储库中已检测到特定机密并且警报已存在，则 {% data variables.product.prodname_dotcom %} 不会阻止该机密。

{% ifversion push-protection-custom-link-orgs %} 

组织管理员可以提供在阻止推送时显示的自定义链接。 此自定义链接可以包含特定于组织的资源和建议。 例如，自定义链接可以指向自述文件，其中包含有关组织的机密保管库、向哪些团队和个人呈报问或是组织对于处理机密和重写提交历史记录的已批准策略的信息。
{% endif %}

可以使用 Web UI 从文件中删除机密。 删除机密后，页面顶部的横幅将发生更改，并告知你现在可以提交更改。

  ![屏幕截图显示修复机密后允许在 Web UI 中提交](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-allowed.png)

### 绕过机密的推送保护

{% data reusables.secret-scanning.push-protection-remove-secret %} 有关修正被阻止机密的详细信息，请参阅“[推送受推送保护阻止的分支](/code-security/secret-scanning/pushing-a-branch-blocked-by-push-protection#resolving-a-blocked-push-in-the-web-ui)”。 

如果确认机密是真实的，并且你打算稍后修补它，你应该致力于尽快修补机密。 有关详细信息，请参阅“[从存储库中删除敏感数据](/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository)”。

如果 {% data variables.product.prodname_dotcom %} 阻止了一个你认为可以安全推送的机密，则可以允许该机密并指定允许的原因。

{% data reusables.secret-scanning.push-protection-allow-secrets-alerts %}

{% data reusables.secret-scanning.push-protection-allow-email %}

如果确认机密是真实的，并且你打算稍后修补它，你应该致力于尽快修补机密。

1. 在 {% data variables.product.prodname_dotcom %} 阻止提交时显示在页面顶部的横幅中，单击“绕过保护”。
{% data reusables.secret-scanning.push-protection-choose-allow-secret-options %}

  ![显示窗体的屏幕截图，其中包含取消阻止机密推送的选项](/assets/images/help/repository/secret-scanning-push-protection-web-ui-allow-secret-options.png)

1. 单击“允许机密”。


{% endif %}
