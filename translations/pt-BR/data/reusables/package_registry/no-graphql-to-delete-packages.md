---
ms.openlocfilehash: deca3a28d17f3716b20a84281ad843c47bdbbee2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147705060"
---
{% ifversion fpt or ghec %} A API do GraphQL do {% data variables.product.prodname_registry %} não dá suporte a contêineres ou a imagens do Docker que usam o namespace de pacote `https://ghcr.io/OWNER/PACKAGE-NAME` ou imagens npm que usam o namespace de pacote `https://npm.pkg.github.com/OWNER/PACKAGE-NAME`.{% endif %}