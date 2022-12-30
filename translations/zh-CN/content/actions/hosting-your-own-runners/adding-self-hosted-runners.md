---
title: 添加自托管的运行器
intro: 可以将自承载运行程序添加到存储库、组织或企业。
redirect_from:
  - /github/automating-your-workflow-with-github-actions/adding-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Add self-hosted runners
ms.openlocfilehash: c58fbc6ac67fe1466458888eb0c55f58483dac6c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108176'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

可以将自承载运行程序添加到存储库、组织或企业。

如果您是组织或企业管理员，您可能希望在组织或企业级别添加自托管的运行器。 此方法使运行器可用于组织或企业中的多个仓库，还允许您在一个位置管理运行器。

有关自托管运行器支持的操作系统或将自托管运行器与代理服务器结合使用的信息，请参阅“[关于自托管运行器](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)。”

{% ifversion not ghae %} {% warning %}

警告：{% data reusables.actions.self-hosted-runner-security %}

有关详细信息，请参阅[关于自承载运行器](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)。

{% endwarning %} {% endif %}

{% ifversion fpt or ghec or ghes %}

您可以设置自动化以扩展自托管运行器的数量。 有关详细信息，请参阅“[使用自托管运行器进行自动缩放](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)。”

{% endif %}

## 先决条件

{% data reusables.actions.self-hosted-runners-prerequisites %}

## 添加自托管的运行器到仓库

您可以将自托管的运行器添加到单个仓库中。 要将自托管的运行器添加到用户仓库，您必须是仓库所有者。 对于组织仓库，您必须是组织所有者或拥有该仓库管理员的权限。 有关如何使用 REST API 添加自托管运行器的信息，请参阅“[自托管运行器](/rest/reference/actions#self-hosted-runners)。”

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. 点击“新自托管运行器”。
{% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.settings-sidebar-actions-runners %}
1. 在{% ifversion ghes or ghae or ghec %}“运行器”{% else %}“自托管运行器”{% endif %}下，单击“添加运行器”。
{% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

有关详细信息，请参阅“[监视和排查自托管运行器问题](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)。”

## 添加自托管的运行器到组织

您可以在组织级别添加自托管的运行器，其中它们可被用于处理组织中的多个仓库的作业。 要将自托管的运行器添加到组织，您必须是组织所有者。 有关如何使用 REST API 添加自托管运行器的信息，请参阅“[自托管运行器](/rest/reference/actions#self-hosted-runners)。”

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% ifversion actions-hosted-runners %}1. 单击“新建运行器”，然后单击“新自托管运行器” 。{% else %}1. 单击“新建运行器”。{% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% elsif ghae or ghes < 3.4 %} {% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. 在{% ifversion ghes or ghae %}“运行器”下，单击“新建”，然后单击“新建运行器”。 {% endif %} {% data reusables.actions.self-hosted-runner-configure %} {% endif %} {% data reusables.actions.self-hosted-runner-check-installation-success %}

有关详细信息，请参阅“[监视和排查自托管运行器问题](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)。”

{% data reusables.actions.self-hosted-runner-public-repo-access %}

## 添加自托管运行器到企业

{% ifversion fpt %}如果您使用 {% data variables.product.prodname_ghe_cloud %}，则{% elsif ghec or ghes or ghae %}您{% endif %} 可以将自托管运行器添加到企业，在那里可以将它们分配给多个组织。 然后，组织管理员能够控制哪些仓库可以使用它。 {% ifversion fpt %} 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/actions/hosting-your-own-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-an-enterprise)。{% endif %}

{% ifversion ghec or ghes or ghae %} 新运行器将分配到默认组。 您可以在注册运行器后修改运行器组。 有关详细信息，请参阅“[管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)。”

{% ifversion ghec or ghes > 3.3 or ghae > 3.3 %}

要将自托管的运行器添加到企业，您必须是组织所有者。 有关如何使用 REST API 添加自托管运行器的信息，请参阅 [{% data variables.product.prodname_actions %} REST API](/rest/reference/actions#self-hosted-runners) 中的企业终结点。

{% endif %}

{% data reusables.actions.self-hosted-runner-add-to-enterprise %}

{% data reusables.actions.self-hosted-runner-check-installation-success %}

有关详细信息，请参阅“[监视和排查自托管运行器问题](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)。”

{% data reusables.actions.self-hosted-runner-public-repo-access %}

### 让企业运行器可用于仓库

在默认情况下，企业的“默认”自托管运行器组的运行器可用于企业中的所有组织，但不可用于每个组织中的所有仓库。

要让企业级自托管运行器组可用于组织仓库，您可能需要更改组织对运行器组的继承设置，使运行器可用于组织中的仓库。

有关更改运行器组访问设置的详细信息，请参阅“[使用组管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)。”
{% endif %}

{% ifversion ghec or ghes or ghae %}

## 延伸阅读

- [开始为企业使用自托管运行器](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)

{% endif %}
