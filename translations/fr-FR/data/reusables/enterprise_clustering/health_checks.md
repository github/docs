---
ms.openlocfilehash: da828b3b969dfc24b1f71400f336cccfa1f4d004
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145108525"
---
Configurez l’équilibreur de charge de manière à vérifier l’une des URL suivantes :
 - `https://HOSTNAME/status` si le protocole HTTPS est activé (par défaut)
 - `http://HOSTNAME/status` si le protocole HTTPS est désactivé

La vérification retourne le code d’état `200` (OK) si le nœud est sain et disponible pour les requêtes de l’utilisateur final.
