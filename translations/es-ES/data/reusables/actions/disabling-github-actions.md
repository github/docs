---
ms.openlocfilehash: 3812d31ab730736a7af4ae38c347325f28aeffba
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879431"
---
De manera predeterminada, {% ifversion ghes or ghae %}después {% data variables.product.prodname_actions %} está habilitado en {% data variables.product.product_location %}, se{% elsif fpt or ghec %}{% data variables.product.prodname_actions %}{% endif %} habilita en todos los repositorios y organizaciones. Puedes optar por deshabilitar {% data variables.product.prodname_actions %} o limitarlo a acciones {% ifversion actions-workflow-policy %}y flujos de trabajo reutilizables{% endif %} en la {% ifversion ghec or ghes or ghae %}empresa{% else %}organización{% endif %}.
