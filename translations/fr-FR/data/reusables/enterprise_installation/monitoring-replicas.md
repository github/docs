---
ms.openlocfilehash: e3bbac236dce195487aada32132e9b78e27500ea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145102369"
---
Vous pouvez monitorer la disponibilité de {% data variables.product.prodname_ghe_server %} en vérifiant le code d’état retourné pour l’URL `https://HOSTNAME/status`. Une appliance qui peut servir le trafic utilisateur retourne le code d’état `200` (OK). Une appliance peut retourner `503` (Service indisponible) pour les raisons suivantes :
 - L’appliance est un réplica passif, par exemple, le réplica dans une configuration de haute disponibilité à deux nœuds.
 - L’appliance est en mode maintenance.
 - L’appliance fait partie d’une configuration de géoréplication, mais est un réplica inactif.

Vous pouvez également utiliser le tableau de bord de vue d’ensemble de la réplication, disponible sur :

`https://HOSTNAME/setup/replication`
