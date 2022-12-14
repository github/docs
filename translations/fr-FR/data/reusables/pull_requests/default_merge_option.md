---
ms.openlocfilehash: 592835351230fe7a5587c0212811899ab496e84d
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147872779"
---
Quand vous cliquez sur l’option par défaut **Fusionner la demande de tirage** sur une demande de tirage sur {% data variables.product.product_location %}, tous les commits de la branche de fonctionnalité sont ajoutés à la branche de base dans un commit de fusion. La demande de tirage est fusionnée en utilisant [l’option `--no-ff`](https://git-scm.com/docs/git-merge#_fast_forward_merge).

Pour fusionner les demandes de tirage, vous devez avoir des [autorisations d’écriture](/articles/repository-permission-levels-for-an-organization/) sur le dépôt.

![standard-merge-commit-diagram](/assets/images/help/pull_requests/standard-merge-commit-diagram.png)
