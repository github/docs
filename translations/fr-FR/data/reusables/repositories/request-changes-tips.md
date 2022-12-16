---
ms.openlocfilehash: e4a946e027ffef0f6e52a55d3591eb0a00556625
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145086769"
---
{% tip %}

**Conseils** :
- Si les révisions requises sont activées et qu’un collaborateur avec un accès _en écriture_, _administrateur_ ou _propriétaire_ au dépôt envoie une révision demandant des modifications, la demande de tirage ne peut pas être fusionnée tant que le même collaborateur n’a pas soumis une autre révision qui approuve les modifications dans la demande de tirage.
- Les propriétaires et administrateurs du dépôt peuvent fusionner une demande de tirage, même si celle-ci n’a pas reçu de révision d’approbation, ou si un réviseur qui a demandé des modifications a quitté l’organisation ou n’est pas disponible.
- Si les révisions requises et l’abandon des révisions obsolètes sont activés et qu’un commit de modification du code est poussé vers la branche d’une demande de tirage approuvée, l’approbation est rejetée. La demande de tirage doit être de nouveau révisée et approuvée avant de pouvoir être fusionnée.
- Lorsque plusieurs demandes de tirage ouvertes ont chacune une branche de tête (head) pointant vers le même commit, vous ne pouvez pas les fusionner si une ou les deux ont une révision en attente ou rejetée.
- Si votre dépôt demande l’approbation des révisions des personnes avec des autorisations d’écriture ou d’administrateur, toutes les approbations des personnes avec ces autorisations sont marquées d’une coche verte, tandis que les approbations des personnes sans ces autorisations sont marquées d’une coche grise. Les approbations avec une coche grise n’affectent pas si la demande de tirage peut être fusionnée ou non.
- Les auteurs de demandes de tirage ne peuvent pas approuver leurs propres demandes de tirage.

{% endtip %}
