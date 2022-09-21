---
ms.openlocfilehash: bca2838e65fedf0ec5d512a21891b594dc90c1f6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147521528"
---
使用 `jobs.<job_id>.runs-on` 定义要运行作业的计算机类型。 {% ifversion fpt or ghec %}计算机可以是 {% data variables.product.prodname_dotcom %} 托管的运行器，也可以是自托管运行器。{% endif %}可以将 `runs-on` 作为单个字符串或字符串数组提供。 如果指定字符串数组，则工作流将在自托管运行器上运行，其标签与所有指定的 `runs-on` 值匹配（如果可用）。 如果要在多台计算机上运行工作流，请使用 [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)。


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
