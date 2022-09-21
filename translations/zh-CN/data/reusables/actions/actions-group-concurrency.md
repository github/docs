---
ms.openlocfilehash: a0c8b24bacdd41e32d9b8bdd0d8850e7a6ada557
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098580"
---
当并发作业或工作流排队时，如果存储库中使用同一并发组的其他作业或工作流正在运行，则排队的作业或工作流将为 `pending`。 在并发组中任何先前挂起的作业或工作流程都将被取消。 若还要取消同一并发组中任何当前正在运行的作业或工作流，请指定 `cancel-in-progress: true`。

### 示例：使用并发和默认行为

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

### 示例：使用并发取消任何当前作业或运行

{% raw %}
```yaml
concurrency: 
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### 示例：使用回退值

如果使用仅为特定事件定义的属性生成组名称，则可以使用回退值。 例如，`github.head_ref` 仅对 `pull_request` 事件定义。 如果工作流响应除了 `pull_request` 事件之外的其他事件，你将需要提供回退以避免语法错误。 以下并发组仅取消针对 `pull_request` 事件正在进行的作业或运行；如果 `github.head_ref` 未定义，并发组将回退到运行 ID，该 ID 保证是唯一的，并且是为该运行定义的。

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### 示例：仅取消针对当前工作流正在进行的作业或运行

 如果在同一个存储库中有多个工作流，则并发组名称在工作流中必须是唯一的，以避免从其他工作流取消正在进行的作业或运行。 否则，无论工作流如何，任何先前进行中或挂起的作业都将被取消。

要仅取消同一工作流的正在进行的运行，可以使用 `github.workflow` 属性来生成并发组：

{% raw %}
```yaml
concurrency: 
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

