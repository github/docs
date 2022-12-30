---
ms.openlocfilehash: ab6a2179820f4517ec815e953fa1194be97f5a31
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180821"
---
启用 {% data variables.product.prodname_actions %} 时，工作流能够运行位于存储库中的操作{% ifversion actions-workflow-policy %}和可重用工作流{% endif %}，以及任何其他{% ifversion fpt %}公共{% elsif ghec or ghes %}公共或内部{% elsif ghae %}内部{% endif %}存储库。
