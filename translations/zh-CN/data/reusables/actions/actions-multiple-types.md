---
ms.openlocfilehash: 4c39c079fb88a8a1b86ed9359ebe55be268389bb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098579"
---
如果为事件指定活动类型或筛选器，并且针对多个事件指定工作流触发器，则必须单独配置每个事件。 必须为所有事件附加冒号 (`:`)，包括没有配置的事件。

例如，具有以下 `on` 值的工作流将在以下情况下运行：

- 创建标签
- 推送到存储库中的 `main` 分支
- 推送到启用了 {% data variables.product.prodname_pages %} 的分支

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
