---
title: 控制对较大运行器的访问
shortTitle: 'Control access to {% data variables.actions.hosted_runner %}s'
intro: '可以使用策略来限制对已添加到组织或企业的 {% data variables.actions.hosted_runner %} 的访问。'
product: '{% data reusables.gated-features.hosted-runners %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: actions-hosted-runners
type: tutorial
ms.openlocfilehash: d19e875ae8ee4556e635540f47625fa5a9874918
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189903'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于运行器组

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}有关详细信息，请参阅 [{% data variables.product.prodname_ghe_cloud %} 文档](/enterprise-cloud@latest/actions/using-github-hosted-runners/controlling-access-to-larger-runners)。{% endif %}

### {% data variables.actions.hosted_runner %} 的默认组

有权访问 {% data variables.actions.hosted_runner %} 的组织和企业将自动收到一个名为“默认较大运行器”的默认运行器组，其中包含 4 个不同大小的运行器。 该组中的运行器已预先配置并可供立即使用。 若要使用该组中的运行器，需要将与所选运行器对应的标签添加到工作流文件。 请参阅下表中的标签。 有关如何使用标签的详细信息，请参阅“[在运行器上运行作业](/actions/using-github-hosted-runners/using-larger-runners#running-jobs-on-your-runner)”。


#### 默认运行器

|说明 | Label | 映像 |
| ------- | ------- | ------ |
| 4 核 Ubuntu 运行器 | `ubuntu-latest-4-cores` | Ubuntu - 最新 |
| 8 核 Ubuntu 运行器 | `ubuntu-latest-8-cores` | Ubuntu - 最新 |
| 16 核 Ubuntu 运行器 | `ubuntu-latest-16-cores` | Ubuntu - 最新 |
| 8 核 Windows 运行器 | `windows-latest-8-cores` | Windows Server - 最新 |

默认 {% data variables.actions.hosted_runner %} 组是在计费实体级别创建的。 如果你的组织是企业帐户的一部分，则该组将在企业级别进行管理。 如果你的组织不属于企业，则该组在组织级别进行管理。 

在工作流中使用这些运行器之前，不会针对这些运行器向你收费。 使用这些运行器后，将正常计费。 有关计费的详细信息，请参阅“[使用 {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners#understanding-billing)”。

企业级别 {% data variables.actions.hosted_runner %} 组的默认访问权限设置为自动与企业中的所有组织共享，但并非与所有存储库共享。 组织管理员将需要单独与每个存储库共享默认 {% data variables.actions.hosted_runner %} 组。 对于组织级别的 {% data variables.actions.hosted_runner %} 组，默认访问权限设置为自动与所有存储库共享该组。 有关如何更改访问策略以及去何处查看默认 {% data variables.actions.hosted_runner %} 组的详细信息，请参阅“[更改运行器组的访问策略](#changing-the-access-policy-of-a-runner-group)”。

{% ifversion ghec or ghes or ghae %}

## 为组织创建运行器组

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-organization %}

## 为企业创建运行器组

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## 更改运行器组的访问策略

{% data reusables.actions.hosted-runner-security-admonition %} {% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## 更改运行器组的名称

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## 将运行器移动到组

{% data reusables.actions.moving-a-runner-to-a-group %}

## 移除运行器组

{% data reusables.actions.removing-a-runner-group %}

{% endif %}
