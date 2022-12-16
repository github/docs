---
title: Stratégies de branche de déploiement
allowTitleToDifferFromFilename: true
shortTitle: Deployment branch policies
intro: L’API de stratégies de branche de déploiement vous permet de gérer les stratégies de branche de déploiement personnalisées.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 109bf81019d62e4c654ba6da4fa71f8fd359ceb4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108653'
---
## À propos de l’API de stratégies de branche de déploiement

L’API de stratégies de branche de déploiement vous permet de spécifier des modèles de noms personnalisés auxquels les branches doivent correspondre afin de les déployer dans un environnement. La propriété `deployment_branch_policy.custom_branch_policies` de l’environnement doit être définie sur `true` pour utiliser ces points de terminaison. Pour mettre à jour `deployment_branch_policy` dans un environnement, consultez « [Créer ou mettre à jour un environnement](/rest/deployments/environments#create-or-update-an-environment) ». 

Pour plus d’informations sur la restriction des déploiements d’environnement pour certaines branches, consultez « [Utilisation d’environnements pour le déploiement](/actions/deployment/targeting-different-environments/using-environments-for-deployment#deployment-branches) ».
