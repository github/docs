---
title: 关于适用于企业的 GitHub
intro: '企业可以使用 {% data variables.product.prodname_dotcom %} 的企业产品来改善其整个软件开发生命周期。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: dbba8a55fd0ac20c97039de05aa629dea7048626
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192647'
---
## 关于适用于企业的 {% data variables.product.prodname_dotcom %}

{% data variables.product.prodname_dotcom %} 是完整的开发人员平台，可用于生成、缩放和交付安全软件。 企业使用我们的产品套件来支持整个软件开发生命周期，加快开发速度并提高代码质量。

开发人员可以使用问题和项目来规划和跟踪其工作，在存储库中存储源代码并对其进行版本控制。 他们可以在云托管的开发环境 ({% data variables.product.prodname_github_codespaces %}) 中编写代码，然后通过拉取请求查看彼此的代码更改，使用代码安全功能将机密和漏洞排除在代码库之外。 最后，可以使用 {% data variables.product.prodname_actions %} 自动执行生成、测试和部署管道，并使用 {% data variables.product.prodname_registry %} 托管软件包。

采用 {% data variables.product.prodname_enterprise %} 可让企业获得较高的投资回报率 (ROI)。 例如，他们的开发人员每天可节省 45 分钟时间，入职培训时间减少了 40%。 有关详细信息，请参阅 [{% data variables.product.prodname_enterprise %} 的总体经济效益](https://resources.github.com/forrester/)。

为了简化软件开发生命周期中所有阶段的管理，我们提供具有可见性和管理功能的单一点，器名为企业帐户。 使用企业帐户，可以管理计费和设置、强制实施策略并审核有权访问企业资源的人员。 有关详细信息，请参阅[关于企业帐户](/admin/overview/about-enterprise-accounts)。

（可选）可以使用 {% data variables.product.prodname_GH_advanced_security %} 添加额外的代码安全功能，并使用 {% data variables.contact.premium_support %} 添加增强的支持选项。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} documentation.{% else %} 中的“[关于 {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)”和“[关于 {% data variables.contact.premium_support %}]({% ifversion ghae %}/enterprise-cloud@latest{% endif %}/support/learning-about-github-support/about-github-premium-support){% ifversion ghae %}”。{% endif %}

## 关于部署选项

购买 {% data variables.product.prodname_enterprise %} 时，可以访问 {% data variables.product.prodname_ghe_cloud %} 和 {% data variables.product.prodname_ghe_server %}。 {% data variables.product.prodname_ghe_cloud %} 是 {% data variables.product.prodname_dotcom_the_website %} 上的一组高级功能，而 {% data variables.product.prodname_ghe_server %} 是自承载平台。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_server %} 文档中的“[关于 {% data variables.product.prodname_ghe_server %}]({% ifversion not ghes %}/enterprise-server@latest{% endif %}/admin/overview/about-github-enterprise-server){% ifversion not ghes %}”。{% else %}."{% endif %}

对于 {% data variables.product.prodname_ghe_cloud %}，可以允许开发人员创建和管理自己的个人帐户，也可以使用 {% data variables.product.prodname_emus %} 来创建和管理开发人员的用户帐户。 有关详细信息，请参阅“[关于企业身份验证](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)”。

{% data variables.product.prodname_ghe_managed %} 对于具有严格的安全性和合规性要求的选定客户而言，可用性有限。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_managed %} 文档中的“[关于 {% data variables.product.prodname_ghe_managed %}](/github-ae@latest/admin/overview/about-github-ae){% ifversion not ghae %}”。{% else %}."{% endif %}

即使使用 {% data variables.product.prodname_ghe_server %} 或 {% data variables.product.prodname_ghe_managed %}，也可以通过启用 {% data variables.product.prodname_github_connect %} 来利用 {% data variables.product.prodname_dotcom_the_website %} 的强大功能，从而配置其他功能和工作流，例如将 {% data variables.product.prodname_dependabot_alerts %} 用于不安全的依赖项。{% ifversion ghec %}

- {% data variables.product.prodname_ghe_server %} 文档中的“[关于 {% data variables.product.prodname_github_connect %}](/enterprise-server@latest/admin/configuration/configuring-github-connect/about-github-connect)”
- {% data variables.product.prodname_ghe_managed %} 文档中的“[关于 {% data variables.product.prodname_github_connect %}](/github-ae@latest/admin/configuration/configuring-github-connect/about-github-connect)”{% else %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)”。{% endif %}

## 延伸阅读

- {% data variables.product.company_short %} 资源中的[比较 {% data variables.product.prodname_dotcom %} 和其他 DevOps 解决方案](https://resources.github.com/devops/tools/compare/)
