---
title: Interactions de l’organisation
shortTitle: Organization
intro: 'L’API Interactions de l’organisation permet aux propriétaires d’organisations de restreindre temporairement le type d’utilisateur pouvant commenter, ouvrir des problèmes ou créer des demandes de tirage dans les référentiels publics de l’organisation.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f06bfbe50c7fa43d03329d69bba8816e4559565a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062465'
---
## À propos de l’API Interactions de l’organisation

L’API Interactions de l’organisation permet aux propriétaires d’organisations de restreindre temporairement le type d’utilisateur pouvant commenter, ouvrir des problèmes ou créer des demandes de tirage dans les référentiels publics de l’organisation. {% data reusables.interactions.interactions-detail %} Voici plus d’informations sur les types d’utilisateurs {% data variables.product.product_name %} :

* {% data reusables.interactions.existing-user-limit-definition %} dans l’organisation.
* {% data reusables.interactions.contributor-user-limit-definition %} dans l’organisation.
* {% data reusables.interactions.collaborator-user-limit-definition %} dans l’organisation.

La définition de la limite d’interaction au niveau de l’organisation remplace toutes les limites d’interaction définies pour les référentiels individuels appartenant à l’organisation. Pour définir des limites d’interaction différentes pour les référentiels individuels appartenant à l’organisation, utilisez plutôt des points de terminaison d’interaction de [référentiel](#repository).
