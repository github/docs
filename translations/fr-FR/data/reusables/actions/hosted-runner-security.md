---
ms.openlocfilehash: 39b050df26b1192db1f0d539b2bd789f90c022d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147763914"
---
Nous vous recommandons d’utiliser uniquement des {% data variables.actions.hosted_runner %}s avec des dépôts privés :
- Les duplications (forks) de votre dépôt peuvent exécuter du code potentiellement dangereux sur votre {% data variables.actions.hosted_runner %} en créant une demande de tirage qui exécute le code dans un workflow.
- Vous pourriez vous exposer à des coûts inattendus si vous autorisez les dépôts dupliqués à exécuter des travaux sur vos {% data variables.actions.hosted_runner %}s.