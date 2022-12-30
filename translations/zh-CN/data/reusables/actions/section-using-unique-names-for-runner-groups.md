---
ms.openlocfilehash: ec6ab3ed5541819ee7578b34ce61fc11de31b51f
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120904"
---

{% ifversion target-runner-groups %}{% ifversion ghec or ghae or ghes %}
## 对运行器组使用唯一名称

{% data variables.product.prodname_actions %} 要求运行器组名称在组织级别必须唯一。 这意味着组织将无法再创建与企业中的运行器组同名的运行器组。 此外，用户将在与企业中的组共享相同名称的任何运行器组上看到警告横幅，建议重命名组织组。

为了避免混淆，如果组织和企业中存在重复的运行器组，工作流将失败。 若要解决此问题，可以重命名组织或企业中的某个运行器组，也可以更新工作流文件以向运行器组名称添加前缀：

- `org/` 或 `organization/`
- `ent/` 或 `enterprise/`

### 示例：使用前缀区分运行器组

例如，如果组织中有一个名为 `my-group` 的运行器组，企业中有另一个名为 `my-group` 的运行器组，则可以更新工作流文件以使用 `org/my-group` 或 `ent/my-group` 来区分这两者。

使用 `org/`：

```yaml
runs-on:
  group: org/my-group
  labels: [ self-hosted, label-1 ]
```

使用 `ent/`：

```yaml
runs-on:
  group: ent/my-group
  labels: [ self-hosted, label-1 ]
```

{% endif %}

{% endif %}
