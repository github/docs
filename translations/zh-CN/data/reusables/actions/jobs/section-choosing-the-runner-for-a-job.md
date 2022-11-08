---
ms.openlocfilehash: 89c3ed1592c000322cf4f0d6915e355bc81014ed
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120914"
---
使用 `jobs.<job_id>.runs-on` 定义要运行作业的计算机类型。 

{% ifversion fpt or ghec %}- 目标计算机可以是 [{% data variables.product.prodname_dotcom %} 托管的运行器](#choosing-github-hosted-runners)、[{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group) 或 [自托管运行器](#choosing-self-hosted-runners)。{% else %}
- 目标计算机可以是[运行器](#choosing-self-hosted-runners)。{% endif %} {% ifversion target-runner-groups %}- 你可以根据分配给运行器的标签、其组成员身份或两者的组合来定位运行器。{% else %}
- 可以根据分配给运行器的标签来定位运行器。{% endif %}
- 可以将 `runs-on` 作为单个字符串或字符串数组提供。 
- 如果指定字符串数组，工作流将在与所有指定 `runs-on` 值匹配的任何运行器上执行。 
- 如果要在多台计算机上运行工作流，请使用 [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)。

{% ifversion fpt or ghec or ghes %} {% data reusables.actions.enterprise-github-hosted-runners %}

### 选择 {% data variables.product.prodname_dotcom %} 托管的运行器

如果使用 {% data variables.product.prodname_dotcom %} 托管的运行器，每个作业将在 `runs-on` 指定的运行器映像的新实例中运行。

可用的 {% data variables.product.prodname_dotcom %} 托管的运行器类型包括：

{% data reusables.actions.supported-github-runners %}

#### 示例：指定操作系统

```yaml
runs-on: ubuntu-latest
```

有关详细信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 托管的运行器](/actions/using-github-hosted-runners/about-github-hosted-runners)”。
{% endif %}

{% ifversion fpt or ghec or ghes %}
### 选择自托管运行器
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### 示例：使用标签进行运行器选择

```yaml
runs-on: [self-hosted, linux]
```

有关详细信息，请参阅“[关于自托管运行器](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)”和“[在工作流中使用自托管运行器](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)”。

{% ifversion target-runner-groups %}

### 在组中选择运行器

可以使用 `runs-on` 定位运行器组，以便作业将在属于该组的任何运行器上执行。 若要进行更精细的控制，还可以将运行器组与标签组合在一起。

运行器组只能将 [{% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners) 或[自托管运行器](/actions/hosting-your-own-runners)作为成员。

#### 示例：使用组控制作业的运行位置

{% data reusables.actions.jobs.example-runs-on-groups %}

#### 示例：组合组和标签

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endif %}