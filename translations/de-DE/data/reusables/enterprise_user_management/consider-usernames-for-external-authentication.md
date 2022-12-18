---
ms.openlocfilehash: 68778a5aac47ae812ce7fca5219ce8f7e416b1af
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067644"
---
{% data variables.product.product_name %} normalisiert einen Wert deines {% ifversion ghec or ghae %}IdP{% elsif ghes %}externen Authentifizierungsanbieters{% endif %}, um den Benutzernamen jedes neuen persönlichen Kontos festzulegen, {% ifversion ghae %}der auf {% data variables.product.product_name %}{% elsif ghec %}in deinem Unternehmen auf {% data variables.product.product_location %}{% elsif ghes %}auf {% data variables.product.product_location %}{% endif %}.
