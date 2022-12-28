---
ms.openlocfilehash: 7193be487b701029df5604b7253f683b5675c086
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145103465"
---
### Recherche en fonction de l’utilisateur

Le qualificateur `actor` peut délimiter l’étendue des événements en fonction de l’auteur de l’action. Par exemple :

  * `actor:octocat` recherche tous les événements effectués par `octocat`.
  * `actor:octocat actor:hubot` trouve tous les événements effectués à la fois par `octocat` et `hubot`.
  * `-actor:hubot` exclut tous les événements effectués par `hubot`.

Notez que vous pouvez uniquement utiliser un nom d’utilisateur {% data variables.product.product_name %}, et non le nom réel d’une personne.
