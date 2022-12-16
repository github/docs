---
ms.openlocfilehash: 68778a5aac47ae812ce7fca5219ce8f7e416b1af
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145066415"
---
{% data variables.product.product_name %} normalise une valeur de votre {% ifversion ghec or ghae %}fournisseur d’identité{% elsif ghes %}fournisseur d’authentification externe{% endif %} pour déterminer le nom d’utilisateur pour chaque nouveau compte personnel {% ifversion ghae %}sur {% data variables.product.product_name %}{% elsif ghec %}dans votre entreprise sur {% data variables.product.product_location %}{% elsif ghes %}sur {% data variables.product.product_location %}{% endif %}.
