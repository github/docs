---
ms.openlocfilehash: 0734336906d60a230cc3295722758d6e48629a6d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879491"
---
如果依赖于使用专用存储库的分支，你可以配置策略来控制用户如何在 `pull_request` 事件上运行工作流。 仅适用于专用{% ifversion ghec or ghes or ghae %}和内部{% endif %}存储库，你可以为{% ifversion ghec %}各个企业、{% elsif ghes or ghae %}你的企业、{% endif %}组织或存储库配置这些策略设置。
