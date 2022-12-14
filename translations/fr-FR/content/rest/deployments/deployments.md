---
title: Déploiements
intro: L’API Déploiements vous permet de créer et de supprimer des déploiements et des environnements de déploiement.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 59567f92afddb8941005146a3fa92fd20549fa61
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147687051'
---
## À propos de l’API Deployments

Les déploiements sont des demandes de déploiement d’une référence spécifique (branche, SHA, étiquette). GitHub distribue un [événement `deployment`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) que les services externes peuvent écouter et auquel ils peuvent réagir pendant la création de déploiements. Les déploiements permettent aux développeurs et aux organisations de créer des outils faiblement couplés autour des déploiements, sans avoir à se soucier des détails pour implémenter la fourniture de différents types d’applications (par exemple, web, natif).

Les états de déploiement permettent aux services externes de marquer les déploiements avec un état `error`, `failure`, `pending`, `in_progress`, `queued` ou `success` que les systèmes qui écoutent les [événements `deployment_status`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status) peuvent consommer.

Les états de déploiement peuvent également comprendre des éléments facultatifs `description` et `log_url`, qui sont fortement recommandés, car ils rendent les états de déploiement plus utiles. `log_url` est l’URL complète de la sortie du déploiement, et `description` est un résumé de ce qui s’est passé avec le déploiement.

GitHub distribue des événements `deployment` et `deployment_status` quand des déploiements et des états de déploiement sont créés. Ces événements permettent aux intégrations tierces de recevoir des demandes de déploiement et d’y répondre, ainsi que de mettre à jour l’état d’un déploiement au fur et à mesure de sa progression.

Voici ci-dessous un diagramme de séquence simple pour comprendre le fonctionnement de ces interactions.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

N’oubliez pas que GitHub n’accède jamais réellement à vos serveurs. Il appartient à votre intégration tierce d’interagir avec les événements de déploiement. Plusieurs systèmes peuvent écouter les événements de déploiement et c’est à chacun de ces systèmes de décider s’il doit pousser le code sur vos serveurs, générer le code natif, etc.

Notez que l’[étendue OAuth](/developers/apps/scopes-for-oauth-apps) `repo_deployment` accorde un accès ciblé aux déploiements et aux états de déploiement **sans** accorder l’accès au code du dépôt, tandis que les étendues {% ifversion not ghae %}`public_repo` et{% endif %}`repo` accordent également une autorisation sur le code.

### Déploiements inactifs

Quand vous définissez l’état d’un déploiement sur `success`, tous les déploiements d’environnement précédents non temporaires et hors production dans le même dépôt avec le même nom d’environnement deviennent `inactive`. Pour éviter cela, vous pouvez définir `auto_inactive` sur `false` pendant la création de l’état de déploiement.

Vous pouvez indiquer qu’un environnement temporaire n’existe plus en définissant son `state` sur `inactive`.  La définition de `state` sur `inactive` affiche le déploiement comme `destroyed` dans {% data variables.product.prodname_dotcom %} et en supprime l’accès.
