---
ms.openlocfilehash: 68778a5aac47ae812ce7fca5219ce8f7e416b1af
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: "145069361"
---
{% data variables.product.product_name %} normaliza un valor de tu {% ifversion ghec or ghae %}IdP{% elsif ghes %}proveedor de autenticación externo{% endif %} para determinar el nombre de usuario de cada nueva cuenta personal {% ifversion ghae %}en {% data variables.product.product_name %}{% elsif ghec %}en tu empresa en {% data variables.product.product_location %}{% elsif ghes %}en {% data variables.product.product_location %}{% endif %}.
