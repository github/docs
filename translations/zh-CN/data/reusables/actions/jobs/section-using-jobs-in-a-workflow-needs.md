---
ms.openlocfilehash: ec9ff0fb1eb8f9fd06d4da13716b3e8e31a758e5
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145883575"
---
使用 `jobs.<job_id>.needs` 标识运行此作业之前必须成功完成的所有作业。 它可以是一个字符串，也可以是字符串数组。 如果某个作业失败，则所有需要它的作业都会被跳过，除非这些作业使用让该作业继续的条件表达式。 如果运行包含一系列相互需要的作业，则故障将从故障点开始，应用于依赖项链中的所有作业。

#### 示例：要求成功的依赖项作业 

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

在此示例中，`job1` 必须在 `job2` 开始之前成功完成，并且 `job3` 等待 `job1` 和 `job2` 完成。

此示例中的作业按顺序运行：

1. `job1`
2. `job2`
3. `job3`

#### 示例：不要求成功的依赖项作业

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

在此示例中，`job3` 使用 `always()` 条件表达式，确保始终在 `job1` 和 `job2` 完成（无论是否成功）后运行。 有关详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions#status-check-functions)”。
