---
ms.openlocfilehash: 27c764ba249fba171877221492b486d59bde7230
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098614"
---
工作流程触发器是导致工作流程运行的事件。 这些事件可以是：

- 工作流程存储库中发生的事件
- 在 {% data variables.product.product_name %} 之外发生并在 {% data variables.product.product_name %} 上触发 `repository_dispatch` 事件的事件
- 预定时间
- 手动

例如，您可以将工作流程配置为在推送到存储库的默认分支、创建发行版或打开议题时运行。
