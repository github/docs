---
ms.openlocfilehash: dd25f74bf039724130494c7bd4d55e44760f620b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145098449"
---
使用 `jobs.<job_id>` 为作业提供唯一标识符。 键 `job_id` 是一个字符串，其值是作业配置数据的映射。 必须将 `<job_id>` 替换为对于 `jobs` 对象的唯一字符串。 `<job_id>` 必须以字母或 `_` 开头，并且只能包含字母数字字符、`-` 或 `_`。

#### 示例：创建作业

在此示例中，已创建两个作业，其 `job_id` 值为 `my_first_job` 和 `my_second_job`。

```yaml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```
