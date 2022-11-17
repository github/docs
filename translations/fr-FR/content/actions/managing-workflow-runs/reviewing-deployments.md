---
title: Révision des déploiements
intro: Vous pouvez approuver ou rejeter des travaux en attente de passage en revue.
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 6a01d89c0ad5355bd5e6774b1bdf5f19dd471df2
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718100'
---
## À propos des révisions requises dans les workflows

Les travaux qui font référence à un environnement configuré avec les réviseurs requis attendent une approbation avant de démarrer. Lorsqu’un travail est en attente d’approbation, il est à l’état « En attente ». Si un travail n’est pas approuvé dans les 30 jours, l’exécution du workflow est automatiquement annulée.

Pour plus d’informations sur les environnements et les approbations nécessaires, consultez « [Utilisation d’environnements pour le déploiement](/actions/deployment/using-environments-for-deployment) ». Pour plus d’informations sur la façon de passer en revue les déploiements avec l’API REST, consultez « [Exécutions de workflow](/rest/reference/actions#workflow-runs) ».

## Approbation ou rejet d’un travail

1. Accédez à l’exécution du workflow qui nécessite une révision. Pour plus d’informations sur l’accès à l’exécution d’un workflow, consultez « [Affichage de l’historique des exécutions de workflow](/actions/managing-workflow-runs/viewing-workflow-run-history) ».
2. Cliquez sur **Réviser les déploiements**. 
   ![Réviser les déploiements](/assets/images/actions-review-deployments.png)
3. Sélectionnez le ou les environnements de travail à approuver ou à rejeter. Si vous le souhaitez, laissez un commentaire.
   ![Approuver des déploiements](/assets/images/actions-approve-deployments.png)
4. Approuver ou rejeter :
   - Pour approuver le travail, cliquez sur **Approuver et déployer**. Une fois qu’un travail a été approuvé (et que toutes les autres règles de protection de l'environnement ont été respectées), le travail peut commencer. À ce stade, le travail peut accéder à tous les secrets stockés dans l’environnement.
   - Pour rejeter le travail, cliquez sur **Rejeter**. Si un travail est rejeté, le workflow échoue.
