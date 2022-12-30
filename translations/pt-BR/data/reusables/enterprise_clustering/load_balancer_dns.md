---
ms.openlocfilehash: 37edbef15e16094672ca7be6dbfbc28390b37bca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146332317"
---
Buscas de DNS para o nome de host {% data variables.product.prodname_ghe_server %} devem se resolver para o balanceador de carga. Recomendamos que você ative o isolamento de subdomínio. Se o isolamento do subdomínio estiver ativado, um registro de curinga adicional (`*.HOSTNAME`) também será resolvido para o balanceador de carga. Para obter mais informações, confira "[Como habilitar o isolamento de subdomínio](/enterprise/admin/guides/installation/enabling-subdomain-isolation/)".
