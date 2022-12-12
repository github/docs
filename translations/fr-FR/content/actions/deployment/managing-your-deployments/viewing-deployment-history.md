---
title: Consultation de l’historique de déploiement
intro: Voir les déploiements présents et passés de votre dépôt.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: View deployment history
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
ms.openlocfilehash: 2941d8de6af3b7505a3c05a6b15436d32becea9b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145087317'
---
Vous pouvez fournir des déploiements via {% data variables.product.prodname_actions %} et les environnements, ou avec l’API REST et les applications tierces. {% ifversion fpt or ghae ghes > 3.0 or ghec %}Pour plus d’informations sur l’utilisation d’environnements à déployer avec {% data variables.product.prodname_actions %}, consultez « [Utilisation d’environnements pour le déploiement](/actions/deployment/using-environments-for-deployment) ». {% endif %}Pour plus d’informations sur les déploiements avec l’API REST, consultez « [Dépôts](/rest/reference/repos#deployments) ».

Pour afficher les déploiements actuels et passés, cliquez sur **Environnements** sur la page d’accueil de votre dépôt.
{% ifversion ghae %} ![Environnements](/assets/images/enterprise/2.22/environments-sidebar.png){% else %} ![Environnements](/assets/images/environments-sidebar.png){% endif %}

La page des déploiements affiche le dernier déploiement actif de chaque environnement pour votre dépôt. Si le déploiement inclut une URL d’environnement, un bouton **Afficher le déploiement** qui renvoie à l’URL s’affiche en regard du déploiement.

Le journal d’activité affiche l’historique de déploiement de vos environnements. Par défaut, seul le déploiement le plus récent d’un environnement a l’état `Active`. Tous les déploiements précédemment actifs ont l’état `Inactive`. Pour plus d’informations sur l’inactivation automatique des déploiements, consultez « [Déploiements inactifs](/rest/reference/deployments#inactive-deployments) ».

Vous pouvez également utiliser l’API REST pour obtenir des informations sur les déploiements. Pour plus d’informations, consultez « [Dépôts](/rest/reference/repos#deployments) ».
