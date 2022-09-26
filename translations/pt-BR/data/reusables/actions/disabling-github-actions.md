---
ms.openlocfilehash: 3812d31ab730736a7af4ae38c347325f28aeffba
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147875693"
---
Por padrão, {% ifversion ghes or ghae %}depois que o {% data variables.product.prodname_actions %} estiver habilitado no {% data variables.product.product_location %}, ele{% elsif fpt or ghec %}{% data variables.product.prodname_actions %}{% endif %} ficará habilitado em todos os repositórios e em todas as organizações. Você pode optar por desabilitar o {% data variables.product.prodname_actions %} ou limitá-lo às ações {% ifversion actions-workflow-policy %}e aos fluxos de trabalho reutilizáveis{% endif %} da sua {% ifversion ghec or ghes or ghae %}empresa{% else %}organização{% endif %}.
