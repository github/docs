---
title: 企业自托管运行器入门
shortTitle: Self-hosted runners
intro: '可以为企业配置运行程序计算机，使开发人员可以使用 {% data variables.product.prodname_actions %} 启动自动化工作流。'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
permissions: 'Enterprise owners can configure policies for {% data variables.product.prodname_actions %} and add self-hosted runners to the enterprise.'
type: quick_start
topics:
  - Actions
  - Enterprise
  - Fundamentals
ms.openlocfilehash: e369c7bf3a9da15cd4e0ee43f54815e89ab4b45a
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106619'
---
## 关于 {% data variables.product.prodname_actions %} 的自托管运行器

{% data reusables.actions.about-actions-for-enterprises %} 有关详细信息，请参阅“[关于企业的 {% data variables.product.prodname_actions %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)”。

借助 {% data variables.product.prodname_actions %}，开发人员可以编写和合并称为操作的单个任务，以创建自定义工作流。 {% ifversion ghes or ghae %}若要为 {% ifversion ghae %}your enterprise{% elsif ghes %} {% data variables.location.product_location %}{% endif %} 启用 {% data variables.product.prodname_actions %}，你必须托管至少一台计算机来执行作业。{% endif %} {% ifversion ghec %}你可以托管自己的运行器计算机来执行作业，并且此{% elsif ghes or ghae %}此{% endif %} 计算机称为自托管运行器。 {% data reusables.actions.self-hosted-runner-locations %} {% data reusables.actions.self-hosted-runner-architecture %} {% ifversion ghec %}所有{% elsif ghes or ghae %}自托管{% endif %}运行器可以运行 Linux、Windows 或 macOS。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners)。

{% ifversion ghec %}

或者，可以使用 {% data variables.product.company_short %} 托管的运行器计算机。 {% data variables.product.company_short %} 托管的运行器不在本指南的范围内。 有关详细信息，请参阅“[关于 {% data variables.product.company_short %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)”。

{% endif %}

本指南介绍如何对企业中 {% data variables.product.prodname_actions %} 的自托管运行器应用集中式管理方法。 在本指南中，你将完成以下任务。

1. 配置有限策略以限制可在企业内运行的操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}
1. 为企业部署自托管运行器
1. 创建一个组，用于管理对企业可用的运行器的访问
1. （可选）进一步限制存储库可以使用运行器
1. （可选）生成自定义工具以自动缩放自托管运行器

你还将找到有关如何监视和保护自托管运行器、{% ifversion ghes or ghae %}如何从 {% data variables.product.prodname_dotcom_the_website %} 访问操作{% endif %}以及如何在运行器计算机上自定义软件的其他信息。

完成本指南后，{% ifversion ghec or ghae %}企业成员{% elsif ghes %} {% data variables.location.product_location %}{% endif %} 的用户将能够在自托管运行器计算机上通过 {% data variables.product.prodname_actions %} 运行工作流作业。

## 先决条件

{% data reusables.actions.self-hosted-runners-prerequisites %}

- 企业必须拥有至少一个组织。 有关详细信息，请参阅“[关于组织](/organizations/collaborating-with-groups-in-organizations/about-organizations)”和“[从头开始创建新组织](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”。

## 1. 为 {% data variables.product.prodname_actions %} 配置策略

首先，为所有组织启用 {% data variables.product.prodname_actions %}，并配置策略以限制可以在 {% ifversion ghec or ghae%}企业内的 {% data variables.location.product_location %}{% endif %}上 {% data variables.product.product_name %}{% elsif ghes %}上运行的操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}。 （可选）组织所有者可以进一步为每个组织限制这些策略。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %}
1. 在“策略”下，选择“为所有组织启用”。
   
   ![针对 {% data variables.product.prodname_actions %} 的“为所有组织启用”策略的屏幕截图](/assets/images/help/settings/actions-policy-enable-for-all-organizations.png)
1. 选择“{% data reusables.actions.policy-label-for-select-actions-workflows %}”和“允许 GitHub 创建的操作”，以允许本地操作{% ifversion actions-workflow-policy %} 和可重用工作流{% endif %}以及 {% data variables.product.company_short %} 创建的操作。

   {% ifversion actions-workflow-policy %} ![针对 {% data variables.product.prodname_actions %} 的“允许所选操作”和“允许 {% data variables.product.company_short %} 创建的操作”的屏幕截图](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github-with-workflows.png) {%- else %} ![针对 {% data variables.product.prodname_actions %} 的“允许所选操作”和“允许 {% data variables.product.company_short %} 创建的操作”的屏幕截图](/assets/images/help/settings/actions-policy-allow-select-actions-and-actions-from-github.png) {%- endif %}
1. 单击“ **保存**”。

可以配置其他策略来限制 {% data variables.location.product_location %} 的 {% ifversion ghec or ghae %}企业成员{% elsif ghes %} 的用户可用的操作{% endif %}。 有关详细信息，请参阅“[在企业中强制实施有关 {% data variables.product.prodname_actions %} 的策略](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#allowing-select-actions-to-run)”。

## 2. 为企业部署自托管运行器

接下来，向企业添加自托管运行器。 {% data variables.product.product_name %} 将指导你在运行器计算机上安装必要的软件。 部署运行器后，可以验证运行器计算机与 {%ifversion ghec or ghae %}企业{% elsif ghes %}{% data variables.location.product_location %}{% endif %} 之间的连接。

### 添加自托管运行器

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

## 3. 使用组管理对自托管运行器的访问

可以创建运行器组来管理对添加到企业的运行器的访问。 你将使用该组选择哪些组织可以在运行器上通过 {% data variables.product.prodname_actions %} 执行作业。

{% data variables.product.product_name %} 会将所有新运行器添加到一个组。 运行器一次可以位于一个组中。 默认情况下，{% data variables.product.product_name %} 将新运行器添加到“默认”组。

{% data reusables.actions.runner-groups-add-to-enterprise-first-steps %}
1. 要选择组织访问策略，请在“组织访问权限”下选择“组织访问”下拉列表，然后单击“选定的组织” 。
1. 在具有组织访问策略的下拉列表右侧，单击 {% octicon "gear" aria-label="The Gear icon" %}。
1. 选择要授予运行器组访问权限的组织。
{%- ifversion ghec or ghes %}
1. （可选）要允许所选组织中的公共存储库使用组中的运行器，请选择“允许公共存储库”。

   {% warning %}

   **警告**：

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)。

   {% endwarning %} {%- endif %} {% data reusables.actions.create-runner-group %} {%- ifversion ghec or ghes > 3.3 or ghae > 3.3 %}
1. 单击“运行器”选项卡。
1. 在运行器列表中，单击在上一部分中部署的运行器。
1. 单击 **“编辑”** 。
1. 单击“运行器组 {% octicon "gear" aria-label="The Gear icon" %}”。
1. 在运行器组列表中，单击之前创建的组的名称。
1. 单击“保存”，以将运行器移动到该组。
{%- elsif ghes < 3.4 or ghae %}
1. 在“默认”右侧，单击组中的运行器数量以显示运行器。
1. 选择已部署的运行器。
1. 在“运行器组”右侧，选择“移动到组”下拉列表，然后单击之前创建的组。
{%- endif %}

现在，你已部署了一个可在指定的组织内通过 {% data variables.product.prodname_actions %} 运行作业的自托管运行器。

## 4. 进一步限制对自托管运行器的访问

（可选）组织所有者可以进一步限制所创建的运行器组的访问策略。 例如，组织所有者只能允许组织中的某些存储库使用运行器组。

有关详细信息，请参阅“[使用组管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。

## 5. 自动缩放自托管运行器

（可选）可以生成自定义工具，以自动缩放 {% ifversion ghec or ghae %}你的企业{% elsif ghes %}{% data variables.location.product_location %}{% endif %} 的自托管运行器。 例如，你的工具可以响应来自 {% data variables.location.product_location %} 的 Webhook 事件，以自动缩放运行器计算机群集。 有关详细信息，请参阅“[使用自托管运行器进行自动缩放](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)。”

## 后续步骤

- 可以监视自托管运行器并排查常见问题。 有关详细信息，请参阅“[对自托管运行器进行监视和故障排除](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”。

- {% data variables.product.company_short %} 建议查看有关自托管运行器计算机的安全注意事项。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的安全强化](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)。”

- {% ifversion ghec %}如果你使用 {% data variables.product.prodname_ghe_server %} 或 {% data variables.product.prodname_ghe_managed %}，那么你{% elsif ghes or ghae %}你{% endif %}可以将包含操作的 {% data variables.product.prodname_dotcom_the_website %} 上的存储库手动同步到 {% ifversion ghes or ghae %}{% data variables.product.product_name %}{% elsif ghec %}{% data variables.product.prodname_ghe_server %} 或 {% data variables.product.prodname_ghe_managed %}{% endif %} 上的企业。 或者，你可以允许企业成员使用 {% data variables.product.prodname_github_connect %} 自动访问 {% data variables.product.prodname_dotcom_the_website %} 中的操作。 有关详细信息，请参阅以下内容。

   {%- ifversion ghes or ghae %}
   - [手动同步 {% data variables.product.prodname_dotcom_the_website %} 中的操作](/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)
   - [使用 {% data variables.product.prodname_github_connect %} 启用对 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) {%- elsif ghec %}
   - [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) 或 [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) 文档中的“手动同步 {% data variables.product.prodname_dotcom_the_website %} 中的操作”
   - [{% data variables.product.prodname_ghe_server %}](/enterprise-server@latest/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) 或 [{% data variables.product.prodname_ghe_managed %}](/github-ae@latest//admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect) 文档中的“使用 {% data variables.product.prodname_github_connect %} 启用对 {% data variables.product.prodname_dotcom_the_website %} 操作的自动访问”{%- endif %}

- 可以自定义在自托管运行器计算机上可用的软件，或将运行器配置为运行类似于 {% data variables.product.company_short %} 托管的运行器的软件，{% ifversion ghes or ghae %}以供使用 {% data variables.product.prodname_dotcom_the_website %}{% endif %} 的客户使用。 支持运行器计算机使用 {% data variables.product.prodname_actions %} 的软件是开源软件。 有关详细信息，请参阅 [`actions/runner`](https://github.com/actions/runner) 和 [`actions/runner-images`](https://github.com/actions/runner-images) 存储库。

## 延伸阅读

- [将自托管运行器应用程序配置为服务](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service)
- [在工作流中使用自托管运行器](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)
