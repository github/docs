---
ms.openlocfilehash: 67b4dd3749936efb6a7eef53fc38543c3c8a6451
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876122"
---
使用 `on.<event_name>.types` 定义将触发工作流运行的活动类型。 大多数 GitHub 事件由多种活动触发。  例如，当标签为 `created`、`edited` 或 `deleted` 时会触发 `label`。 通过 `types` 关键词可缩小触发工作流运行的活动类型的范围。 如果只有一种活动类型可触发 Webhook 事件，则不需要 `types` 关键字。

可以使用事件 `types` 的数组。 有关每个事件及其活动类型的详细信息，请参阅“[触发工作流的事件](/actions/using-workflows/events-that-trigger-workflows#available-events)”。

```yaml
on:
  label:
    types: [created, edited]
```
