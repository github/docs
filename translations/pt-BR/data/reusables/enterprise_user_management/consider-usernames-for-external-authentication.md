---
ms.openlocfilehash: 68778a5aac47ae812ce7fca5219ce8f7e416b1af
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065267"
---
{% data variables.product.product_name %} normaliza um valor do seu {% ifversion ghec or ghae %}IdP{% elsif ghes %}provedor de autenticação externo{% endif %} para determinar o nome de usuário de cada conta pessoal nova {% ifversion ghae %}de {% data variables.product.product_name %}{% elsif ghec %}na sua empresa em {% data variables.product.product_location %}{% elsif ghes %}on {% data variables.product.product_location %}{% endif %}.
