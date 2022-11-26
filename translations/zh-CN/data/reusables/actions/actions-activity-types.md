---
ms.openlocfilehash: 03c7480afe114a1f9fa676f6872be9081289295a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146688931"
---
某些事件具有活动类型，可让你更好地控制工作流的运行时间。 使用 `on.<event_name>.types` 定义将触发工作流运行的事件活动类型。

例如，`issue_comment` 事件具有 `created`、`edited` 和 `deleted` 活动类型。 如果工作流在 `label` 事件上触发，则每当创建、编辑或删除标签时，它都会运行。 如果为 `created` 事件指定 `label` 活动类型，则工作流将在创建标签时运行，但不会在编辑或删除标签时运行。

```yaml
on:
  label:
    types:
      - created
```

如果指定多个活动类型，则只需要发生其中一种事件活动类型就可触发工作流。 如果触发工作流的多个事件活动类型同时发生，则将触发多个工作流运行。 例如，创建或标记问题时，会触发以下工作流。 如果创建了一个带两个标签的问题，则将启动三个工作流运行：一个用于创建问题的事件，另外两个用于两个标记问题的事件。

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

有关每个事件及其活动类型的详细信息，请参阅“[触发工作流的事件](/actions/using-workflows/events-that-trigger-workflows)”。
