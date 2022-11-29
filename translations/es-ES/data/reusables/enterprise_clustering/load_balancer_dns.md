---
ms.openlocfilehash: 37edbef15e16094672ca7be6dbfbc28390b37bca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332324"
---
Las búsquedas DNS para el nombre del host de {% data variables.product.prodname_ghe_server %} se deben resolver con el balanceador de carga. Es recomendable que habilites el aislamiento de subdominio. Si el aislamiento de subdominios está habilitado, un registro comodín adicional (`*.HOSTNAME`) también se debería resolver en el equilibrador de carga. Para más información, vea "[Habilitación del aislamiento de subdominios](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)".
