---
ms.openlocfilehash: c7eea7975ef49a5a6e3deed2ade3cb6bb5543ac0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145105858"
---
Lorsque vous sélectionnez l’option **Écraser et fusionner** sur une demande de tirage dans {% data variables.product.product_location %}, les commits de la demande de tirage sont écrasés dans un seul commit. Au lieu de voir tous les commits individuels d’un contributeur à partir d’une branche de rubrique, les commits sont regroupés dans un seul commit et fusionnés dans la branche par défaut. Les demandes de tirage avec des commits écrasés sont fusionnées à l’aide de l’[option de transfert rapide](https://git-scm.com/docs/git-merge#_fast_forward_merge).

Pour écraser et fusionner des demandes de tirage, vous devez avoir des [autorisations en écriture](/articles/repository-permission-levels-for-an-organization/) dans le dépôt, et le dépôt doit [autoriser la fusion par écrasement](/articles/configuring-commit-squashing-for-pull-requests/).

![commit-squashing-diagram](/assets/images/help/pull_requests/commit-squashing-diagram.png)

Vous pouvez utiliser l’option Écraser et fusionner pour créer un historique Git plus épuré dans votre dépôt. Les commits en cours sont utiles quand vous utilisez une branche de fonctionnalités, mais ils ne sont pas nécessairement importants à garder dans l’historique Git. Si vous écrasez ces commits dans un seul commit lors de la fusion dans la branche par défaut, vous pouvez garder les modifications d’origine avec un historique Git clair.
