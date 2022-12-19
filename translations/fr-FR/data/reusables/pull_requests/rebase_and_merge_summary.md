---
ms.openlocfilehash: 371057b7fbe8e92b564e8729b11442bdbf2c1a56
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882794"
---
Quand vous sélectionnez l’option **Rebase et fusion** sur une demande de tirage (pull request) sur {% data variables.product.product_location %}, toutes les validations (commits) de la branche de rubrique (ou branche principale) sont ajoutées individuellement à la branche de base sans validation de fusion. Ainsi, le comportement de rebasage et de fusion ressemble à une [fusion rapide](https://git-scm.com/docs/git-merge#_fast_forward_merge) en conservant un historique de projet linéaire. Toutefois, le rebasage permet de réécrire l’historique des validations (commits) sur la branche de base avec de nouvelles validations.

Le comportement de rebasage et de fusion sur {% data variables.product.product_name %} s’écarte légèrement de `git rebase`. Les opérations de rebasage et de fusion sur {% data variables.product.prodname_dotcom %} mettent toujours à jour les informations du commiter et créent de nouveaux SHA de commit, tandis que `git rebase` en dehors de {% data variables.product.prodname_dotcom %} ne modifie pas les informations du commiter quand le rebasage se produit au-dessus d’une validation (commit) ancêtre. Pour plus d’informations sur `git rebase`, consultez « [Rebasage Git](https://git-scm.com/docs/git-rebase) » dans la documentation Git.

Pour rebaser et fusionner des demandes de tirage (pull requests), vous devez disposer [d’autorisations d’écriture](/articles/repository-permission-levels-for-an-organization/) dans le référentiel, et le référentiel doit [autoriser la fusion de rebasage](/articles/configuring-commit-rebasing-for-pull-requests/).

Pour obtenir une représentation visuelle de `git rebase`, consultez le chapitre [« Création de branche Git – Rebasage » du manuel _Pro Git_](https://git-scm.com/book/en/Git-Branching-Rebasing).
