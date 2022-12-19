---
title: 为企业引入 GitHub Actions
shortTitle: Introduce Actions
intro: '您可以计划如何在企业中推出 {% data variables.product.prodname_actions %}。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: ddd394e589b3866e80ba024f99bd2394d1743299
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191860'
---
## 关于企业的 {% data variables.product.prodname_actions %}

{% data reusables.actions.about-actions %} 借助 {% data variables.product.prodname_actions %}，您的企业可以自动化、自定义和执行软件开发工作流程，如测试和部署。 有关详细信息，请参阅“[关于企业的 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)”。

![在自托管运行器上运行的作业的示意图](/assets/images/help/images/actions-enterprise-overview.png)

在为大型企业引入 {% data variables.product.prodname_actions %} 之前，首先需要规划采用情况，并决定企业将如何使用 {% data variables.product.prodname_actions %} 来最好地支持您的独特需求。

## 管理和符合性

您应制定一个计划来管理企业对 {% data variables.product.prodname_actions %} 的使用，并履行合规性义务。

确定允许开发人员使用的操作 {% ifversion actions-workflow-policy %}和可重用工作流 {% endif %}。 {% ifversion ghes %}首先，确定是否允许从实例外部访问操作{% ifversion actions-workflow-policy %}和可重用工作流 {% endif %}。 {% data reusables.actions.access-actions-on-dotcom %} 有关详细信息，请参阅“[关于在企业中使用操作](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)”。

然后，{% else %}首先{% endif %}确定是否允许第三方操作 {% ifversion actions-workflow-policy %}和并非由 {% data variables.product.company_short %} 创建的可重用工作流{% endif %}。 可以配置允许在存储库、组织和企业级别运行的操作 {% ifversion actions-workflow-policy %}和可重用工作流 {% endif %}，并且可以选择仅允许由 {% data variables.product.company_short %} 创建的操作。 如果确实允许第三方操作 {% ifversion actions-workflow-policy %}和可重用工作流{% endif %}，则可以将允许的操作限制为由经过验证的创建者创建的操作，或者某个列表中的特定操作{% ifversion actions-workflow-policy %} 和可重用工作流{% endif %}。 有关详细信息，请参阅“[管理存储库的 {% data variables.product.prodname_actions %} 设置](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#managing-github-actions-permissions-for-your-repository)”、“[为组织禁用或限制 {% data variables.product.prodname_actions %}](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#managing-github-actions-permissions-for-your-organization)”和“[在企业中强制实施 {% data variables.product.prodname_actions %}](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-to-restrict-the-use-of-github-actions-in-your-enterprise)”。

{% ifversion actions-workflow-policy %} ![{% data variables.product.prodname_actions %} 策略](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png) {%- else %} ![{% data variables.product.prodname_actions %} 策略屏幕截图](/assets/images/help/organizations/enterprise-actions-policy.png) {%- endif %}

{% ifversion ghec or ghes > 3.4 %} 考虑将 OpenID Connect (OIDC) 与可重用的工作流相结合，以在存储库、组织或企业中实施一致的部署。 为此，可以基于可重用工作流程在云角色上定义信任条件。 有关详细信息，请参阅“[将 OpenID Connect 与可重用工作流结合使用](/actions/deployment/security-hardening-your-deployments/using-openid-connect-with-reusable-workflows)”。
{% endif %}

您可以在企业的审核日志中访问与 {% data variables.product.prodname_actions %} 相关的活动信息。 如果业务需要保留此信息的时间超过保留审核日志数据的时间，请规划如何导出此数据并存储在 {% data variables.product.prodname_dotcom %} 之外。 有关详细信息，请参阅{% ifversion ghec %}“[为企业导出审核日志活动](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/exporting-audit-log-activity-for-your-enterprise)”和“[为企业流式传输审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)”。{% else %}{% ifversion audit-log-streaming %}“[为企业流式传输审核日志](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)”和{% endif %}“[日志转发](/admin/monitoring-activity-in-your-enterprise/exploring-user-activity/log-forwarding)”。{% endif %}

![审核日志条目](/assets/images/help/repository/audit-log-entries.png)

## 安全性

您应该规划 {% data variables.product.prodname_actions %} 的安全强化方法。

### 加强单个工作流程和存储库的安全性

制定计划，为在企业中使用 {% data variables.product.prodname_actions %} 功能的用户强制实施良好的安全实践。 有关这些做法的详细信息，请参阅“[{% data variables.product.prodname_actions %} 的安全强化](/actions/security-guides/security-hardening-for-github-actions)”。

您还可以鼓励重用已评估过安全性的工作流程。 有关详细信息，请参阅“[内包](#innersourcing)”。

### 保护对机密和部署资源的访问

您应该计划将要存储机密的位置。 我们建议将机密存储在 {% data variables.product.prodname_dotcom %} 中，但您可以选择将机密存储在云提供商中。

在 {% data variables.product.prodname_dotcom %} 中，您可以在存储库或组织级别存储机密。 存储库级别的机密可限于某些环境中的工作流程，例如生产或测试。 有关详细信息，请参阅“[加密机密](/actions/security-guides/encrypted-secrets)”。

![机密列表的屏幕截图](/assets/images/help/settings/actions-org-secrets-list.png) 你应该考虑为敏感环境添加手动批准保护，以便必须先批准工作流，然后才能访问环境的机密。 有关详细信息，请参阅“[使用环境进行部署](/actions/deployment/targeting-different-environments/using-environments-for-deployment)”。

### 第三方操作的安全注意事项

从 {% data variables.product.prodname_dotcom %} 上的第三方存储库获取操作存在重大风险。 如果允许任何第三方操作，则应创建内部准则，鼓励团队遵循最佳做法，例如将操作固定到完整提交 SHA。 有关详细信息，请参阅“[使用第三方操作](/actions/security-guides/security-hardening-for-github-actions#using-third-party-actions)”。

## 内包

想一想您的企业如何使用 {% data variables.product.prodname_actions %} 的功能来实现内包自动化。 内包是一种将开源方法的优势融入内部软件开发周期的方法。 有关详细信息，请参阅 {% data variables.product.company_short %} 资源中的[内部资源简介](https://resources.github.com/whitepapers/introduction-to-innersource/)。

{% data reusables.actions.internal-actions-summary %}

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.reusable-workflows-enterprise-beta %} 通过使用可重用工作流，团队可以从一个工作流调用另一个工作流，避免重复。 可重用的工作流程通过帮助团队使用设计良好且经过测试的工作流程来促进最佳实践。 有关详细信息，请参阅“[重用工作流](/actions/learn-github-actions/reusing-workflows)”。
{% endif %}

要为开发人员构建新工作流程提供起点，可以使用入门工作流程。 这不仅为开发人员节省了时间，而且促进了整个企业的一致性和最佳实践。 有关详细信息，请参阅“[为组织创建入门工作流](/actions/learn-github-actions/creating-starter-workflows-for-your-organization)”。

{% ifversion not internal-actions %} 每当工作流开发人员想要使用存储在私有存储库中的操作时，他们必须将工作流配置为先克隆存储库。 要减少必须克隆的存储库的数量，请考虑将常用操作分组到单个存储库中。 有关详细信息，请参阅“[关于自定义操作](/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action)”。
{% endif %}

## 管理资源

您应规划如何管理使用 {% data variables.product.prodname_actions %} 所需的资源。

{% ifversion ghes %}
### 硬件要求

你可能需要升级 CPU 和内存资源，以便 {% data variables.location.product_location %}处理来自 {% data variables.product.prodname_actions %} 的负载，而不会造成性能损失。 有关详细信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)”。
{% endif %}

### 运行程序

{% data variables.product.prodname_actions %} 工作流程需要运行器。{% ifversion ghec %} 您可以选择使用 {% data variables.product.prodname_dotcom %} 托管的运行器或自托管的运行器。 {% data variables.product.prodname_dotcom %} 托管的运行器很方便，因为它们由 {% data variables.product.company_short %} 管理，后者为您处理维护和升级。 但是，如果需要运行将访问防火墙后面的资源的工作流程，或者希望更好地控制运行器计算机的资源、配置或地理位置，则可能需要考虑自托管运行器。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)”和“[关于自托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。{% else %}需要在自己的计算机上安装 {% data variables.product.prodname_actions %} 自托管运行器应用程序来托管自己的运行器。 有关详细信息，请参阅“[关于子托管运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)”。{% endif %}

{% ifversion ghec %}如果您使用的是自托管运行器，则必须决定是要使用物理机、虚拟机还是容器。{% else %}决定是要将物理机、虚拟机还是容器用于自托管运行器。{% endif %} 物理机将保留以前作业的残余部分，虚拟机也会保留，除非您为每个作业使用新映像或在每次作业运行后清理计算机。 如果选择容器，则应注意，运行器自动更新将关闭容器，这可能会导致工作流程失败。 您应该通过阻止自动更新或跳过命令来终止容器来为此提出解决方案。

您还必须决定在何处添加每个运行器。 您可以将自托管运行器添加到单个存储库，也可以使运行器可供整个组织或整个企业使用。 在组织或企业级别添加运行器允许共享运行器，这可能会减小运行器基础结构的大小。 您可以使用策略，通过将运行者组分配给特定存储库或组织，在组织和企业级别限制对自托管运行器的访问。 有关详细信息，请参阅“[添加自托管运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”和“[使用组管理对自托管运行器的访问权限](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”。

{% ifversion ghec or ghes %} 应考虑使用自动缩放来自动增加或减少可用的自托管运行器的数量。 有关详细信息，请参阅“[使用自托管运行器进行自动缩放](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)。”
{% endif %}

最后，您应该考虑对自托管运行器进行安全强化。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的安全强化](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)”。

### 存储

{% data reusables.actions.about-artifacts %} 有关详细信息，请参阅“[将工作流数据存储为工件](/actions/advanced-guides/storing-workflow-data-as-artifacts)”。 

{% ifversion actions-caching %}{% data variables.product.prodname_actions %} 还有一个缓存系统，可用于缓存依赖项来加快工作流运行速度。 有关详细信息，请参阅“[缓存依赖项以加快工作流](/actions/using-workflows/caching-dependencies-to-speed-up-workflows)”。{% endif %}

{% ifversion ghes %} 必须为工作流项目{% ifversion actions-caching %}、缓存、{% endif %} 和其他工作流日志配置外部 Blob 存储。 确定您的企业将使用哪个受支持的存储提供商。 有关详细信息，请参阅“[{% data variables.product.product_name %} 的 {% data variables.product.prodname_actions %} 入门](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements)”。
{% endif %}

{% ifversion ghec or ghes %}

可以使用 {% data variables.product.prodname_actions %} 的策略设置来自定义工作流工件的存储{% ifversion actions-caching %}、缓存、{% endif %} 和日志保留。 有关详细信息，请参阅“[在企业中强制实施 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)”。

{% endif %}

{% ifversion ghec %} 某些存储包含在订阅中，但额外的存储将影响计费。 您应该为此费用做好计划。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”。
{% endif %}

## 跟踪用法

您应考虑制定计划来跟踪企业对 {% data variables.product.prodname_actions %} 的使用，例如工作流程的运行频率、这些运行中有多少次通过和失败，以及哪些存储库正在使用哪些工作流程。

{% ifversion ghec %} 可以通过计费设置查看企业中每个组织的 {% data variables.product.prodname_actions %} 的存储和数据传输使用情况的基本详细信息。 有关详细信息，请参阅“[查看 {% data variables.product.prodname_actions %} 使用情况](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage#viewing-github-actions-usage-for-your-enterprise-account)”。

有关更详细的使用数据，{% else %}您{% endif %} 可以使用 web 挂钩订阅有关工作流程作业和工作流程运行的信息。 有关详细信息，请参阅“[关于 Webhook](/developers/webhooks-and-events/webhooks/about-webhooks)”。

制定一个计划，说明您的企业如何将信息从这些 web 挂钩传递到数据归档系统中。 您可以考虑使用开源工具“CEDAR.GitHub.Collector”来收集和处理来自 {% data variables.product.prodname_dotcom %} 的 web 挂钩数据。 有关详细信息，请参阅[`Microsoft/CEDAR.GitHub.Collector`存储库](https://github.com/microsoft/CEDAR.GitHub.Collector/)。

您还应该规划如何让您的团队从存档系统获取所需的数据。
