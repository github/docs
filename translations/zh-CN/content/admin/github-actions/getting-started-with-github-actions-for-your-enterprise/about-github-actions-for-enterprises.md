---
title: About GitHub Actions for enterprises
shortTitle: About GitHub Actions
intro: '{% data variables.product.prodname_actions %} 可通过自动化企业的软件开发周期来提高开发人员生产力。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 682e5c4bc4b17105df59c4e5474bf46ec11fe211
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160742'
---
## 关于企业的 {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions-for-enterprises %}

| 任务 | 更多信息 |
| ---- | ---------------- |
| 自动测试和生成应用程序 | [关于持续集成](/actions/automating-builds-and-tests/about-continuous-integration) | 
| 部署应用程序 | [关于持续部署](/actions/deployment/about-deployments/about-continuous-deployment) |
| 自动且安全地将代码打包到项目和容器中 | [关于使用 {% data variables.product.prodname_actions %} 进行打包](/actions/publishing-packages/about-packaging-with-github-actions) |
| 自动执行项目管理任务 | [使用 {% data variables.product.prodname_actions %} 进行项目管理](/actions/managing-issues-and-pull-requests/using-github-actions-for-project-management)” |

{% data variables.product.prodname_actions %} 帮助团队更快地大规模执行工作。 当大型存储库开始使用 {% data variables.product.prodname_actions %} 时，团队每天合并的拉取请求明显增多，拉取请求的合并速度明显加快。 有关详细信息，请参阅 Octoverse 状态中的“[更快地编写和发送代码](https://octoverse.github.com/2021/writing-code-faster/#scale-through-automation)”。

你可以创建自己独特的自动化，也可以使用和调整由行业领导者和开源社区构建的 10,000 多个操作的生态系统中的工作流。 {% ifversion ghec %}有关详细信息，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions)”。{% else %}你可以限制开发人员使用存在于 {% data variables.location.product_location %} 上的操作，或者可以允许开发人员访问 {% data variables.product.prodname_dotcom_the_website %} 上的操作。 有关详细信息，请参阅“[关于在企业中使用操作](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)”。{% endif %}

{% data variables.product.prodname_actions %} 对开发人员友好，因为它直接集成到熟悉的 {% data variables.product.product_name %} 体验中。

{% ifversion ghec %}你可以享受由 {% data variables.product.company_short %} 维护和升级的 {% data variables.product.company_short %} 托管的运行器带来的便利，或者{% else %}你{% endif %}可以通过使用自承载运行器来控制自己的专用 CI/CD 基础结构。 使用自承载运行器可以确定完成生成、测试和部署的确切环境和资源，而无需将软件开发周期公开到 Internet 上。 有关详细信息，请参阅{% ifversion ghec %}“[关于 {% data variables.product.company_short %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)”和{% endif %}“[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。

{% data variables.product.prodname_actions %} 提供的功能使你可以更好地控制部署。 例如，可以使用环境来要求对作业进行审批、限制哪些分支可以触发工作流或限制对机密的访问。{% ifversion ghec or ghes > 3.4 %} 如果工作流需要从支持 OpenID Connect (OIDC) 的云提供商访问资源，则可以将工作流配置为直接向云提供商进行身份验证。 OIDC 提供安全优势，例如无需将凭据存储为长期机密。 有关详细信息，请参阅“[关于使用 OpenID Connect 进行安全强化](/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)。”{% endif %}

{% data variables.product.prodname_actions %} 还包括用于管理企业软件开发周期和履行合规性义务的工具。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)”。

## 关于 {% data variables.product.prodname_actions %} 入门

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

{% ifversion ghes %} {% data reusables.actions.ghes-actions-not-enabled-by-default %} 完成规划后，可以按照有关启用 {% data variables.product.prodname_actions %} 的说明进行操作。 例如，你可能需要升级 {% data variables.location.product_location %} 的 CPU 和内存资源。 更多信息请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)”。

{% else %} 完成规划后，可以按照有关 {% data variables.product.prodname_actions %} 入门的说明进行操作。 有关详细信息，请参阅{% ifversion ghec %}“[{% data variables.product.prodname_ghe_cloud %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud)”。{% elsif ghae %}“[{% data variables.product.prodname_ghe_managed %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-ae)”。{% endif %} {% endif %}

## 延伸阅读

- [了解 {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions){% ifversion ghec %}
- [关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions){% endif %}
