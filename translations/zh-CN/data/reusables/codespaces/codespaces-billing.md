---
ms.openlocfilehash: 845c770a8a03c57a4c10a84d28fd4d3d78282042
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "147111120"
---
{% data variables.product.prodname_codespaces %} 根据其计算和存储使用情况按美元计费。

### 计算计算使用情况
计算使用情况定义为 {% data variables.product.prodname_github_codespaces %} 实例处于活动状态的运行时间总分钟数。 计算使用情况通过将所有 codespace 使用的实际分钟数相加来计算。 这些总数每天报告给计费服务，并按月计费。

运行时间通过停止 codespace 进行控制，可在开发人员指定的非活动期之后手动或自动完成。 有关详细信息，请参阅[关闭或停止 codespace](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)。

### 计算存储使用情况
出于 {% data variables.product.prodname_github_codespaces %} 计费目的，这包括你帐户中所有 codespace 使用的所有存储空间。 这包括 codespace 使用的所有文件，例如克隆的存储库、配置文件和扩展等。 这些总数每天报告给计费服务，并按月计费。 到月底，{% data variables.product.prodname_dotcom %} 会将您的存储量舍入到最接近的 MB。 
