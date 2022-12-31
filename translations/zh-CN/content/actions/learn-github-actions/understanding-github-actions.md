---
title: 了解 GitHub Actions
shortTitle: Understanding GitHub Actions
intro: '学习 {% data variables.product.prodname_actions %} 的基础知识，包括核心概念和基本术语。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: 439aa7fb77fb68c5f66da00a0de666d809b82fde
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: '146139447'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## <a name="overview"></a>概述

{% data reusables.actions.about-actions %}  您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

{% data variables.product.prodname_actions %} 不仅仅是 DevOps，还允许您在存储库中发生其他事件时运行工作流程。 例如，您可以运行工作流程，以便在有人在您的存储库中创建新问题时自动添加相应的标签。

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} 提供 Linux、Windows 和 macOS 虚拟机来运行工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

{% elsif ghes or ghae %}

您必须托管自己的 Linux、Windows 或 macOS 虚拟机才能运行 {% data variables.product.product_location %} 工作流程。 {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

若要详细了解如何将 {% data variables.product.prodname_actions %} 引入企业，请参阅“[将 {% data variables.product.prodname_actions %} 引入企业](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise)”。

{% endif %}

## <a name="the-components-of--data-variablesproductprodname_actions-"></a>{% data variables.product.prodname_actions %} 的组件

可配置 {% data variables.product.prodname_actions %} 工作流，使其在存储库中发生事件（例如打开拉取请求或创建问题）时触发 。  工作流包含一个或多个可按顺序或并行运行的作业。  每个作业都将在其自己的虚拟机运行器中或在容器中运行，并具有一个或多个步骤，用于运行定义的脚本或运行动作。动作是一个可重用的扩展，可简化工作流  。

![工作流概述](/assets/images/help/images/overview-actions-simple.png)

### <a name="workflows"></a>工作流

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}可在一个工作流中引用另一个工作流，详见“[重用工作流](/actions/learn-github-actions/reusing-workflows)”。{% endif %}

有关工作流的详细信息，请参阅“[使用工作流](/actions/using-workflows)”。

### <a name="events"></a>事件

事件是存储库中触发工作流程运行的特定活动。 例如，当有人创建拉取请求、打开议题或将提交推送到存储库时，活动可能源自 {% data variables.product.prodname_dotcom %}。  还可通过[发布到 REST API](/rest/reference/repos#create-a-repository-dispatch-event) 触发按计划运行的工作流，或者手动触发。

有关可用于触发工作流的事件的完整列表，请参阅[触发工作流的事件](/actions/reference/events-that-trigger-workflows)。

### <a name="jobs"></a>作业

作业是工作流中在同一运行器上执行的一组步骤。  每个步骤要么是一个将要执行的 shell 脚本，要么是一个将要运行的动作。  步骤按顺序执行，并且相互依赖。  由于每个步骤都在同一运行器上执行，因此您可以将数据从一个步骤共享到另一个步骤。  例如，可以有一个生成应用程序的步骤，后跟一个测试已生成应用程序的步骤。

您可以配置作业与其他作业的依赖关系；默认情况下，作业没有依赖关系，并且彼此并行运行。  当一个作业依赖于另一个作业时，它将等待从属作业完成，然后才能运行。  例如，对于没有依赖关系的不同体系结构，您可能有多个生成作业，以及一个依赖于这些作业的打包作业。  生成作业将并行运行，当它们全部成功完成后，打包作业将运行。

有关作业的详细信息，请参阅“[使用作业](/actions/using-jobs)”。

### <a name="actions"></a>操作

操作是用于 {% data variables.product.prodname_actions %} 平台的自定义应用程序，它执行复杂但经常重复的任务。  使用操作可帮助减少在工作流程文件中编写的重复代码量。  操作可以从 {% data variables.product.prodname_dotcom %} 拉取 git 存储库，为您的构建环境设置正确的工具链，或设置对云提供商的身份验证。

您可以编写自己的操作，也可以在 {% data variables.product.prodname_marketplace %} 中找到要在工作流程中使用的操作。

{% data reusables.actions.internal-actions-summary %}

有关详细信息，请参阅“[创建操作](/actions/creating-actions)”。

### <a name="runners"></a>运行程序

{% data reusables.actions.about-runners %} 每个运行器一次可以运行一个作业。 {% ifversion ghes or ghae %} 您必须为 {% data variables.product.product_name %} 托管自己的运行器。 {% elsif fpt or ghec %}{% data variables.product.company_short %} 提供 Ubuntu Linux、Microsoft Windows 和 macOS 运行器来运行您的工作流程；每个工作流程运行都在新预配的全新虚拟机中执行。 如果需要其他操作系统或特定硬件配置，可托管自己的运行器。{% endif %}有关{% ifversion fpt or ghec %}自托管运行器{% endif %}的详细信息，请参阅“[托管自己的运行器](/actions/hosting-your-own-runners)”。

{% data reusables.actions.workflow-basic-example-and-explanation %}

## <a name="more-complex-examples"></a>更复杂的示例
{% data reusables.actions.link-to-example-library %}

## <a name="next-steps"></a>后续步骤

- 若要继续了解 {% data variables.product.prodname_actions %}，请参阅“[查找和自定义操作](/actions/learn-github-actions/finding-and-customizing-actions)”。
{% ifversion fpt or ghec or ghes %}
- 若要了解 {% data variables.product.prodname_actions %} 的计费工作原理，请参阅“[关于 {% data variables.product.prodname_actions %} 的计费](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions)”。
{% endif %}

## <a name="contacting-support"></a>联系支持部门

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## <a name="further-reading"></a>延伸阅读

- “[关于 {% data variables.product.prodname_actions %} 企业版](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)”{% endif %}
