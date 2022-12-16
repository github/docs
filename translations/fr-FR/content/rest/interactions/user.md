---
title: Interactions utilisateur
shortTitle: User
allowTitleToDifferFromFilename: true
intro: 'L’API Interactions utilisateur vous permet de restreindre temporairement le type d’utilisateur qui peut commenter, ouvrir des problèmes ou créer des demandes de tirage sur vos référentiels publics.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e61096e6f09a9c17608e67846c138142c527c314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066897'
---
## À propos de l’API Interactions utilisateur

L’API Interactions utilisateur vous permet de restreindre temporairement le type d’utilisateur qui peut commenter, ouvrir des problèmes ou créer des demandes de tirage sur vos référentiels publics. {% data reusables.interactions.interactions-detail %} Voici plus d’informations sur les types d’utilisateurs {% data variables.product.product_name %} :

* {% data reusables.interactions.existing-user-limit-definition %} à partir de l’interaction avec vos référentiels.
* {% data reusables.interactions.contributor-user-limit-definition %} à partir de l’interaction avec vos référentiels.
* {% data reusables.interactions.collaborator-user-limit-definition %} à partir de l’interaction avec vos référentiels.

La définition de la limite d’interaction au niveau de l’utilisateur remplace toutes les limites d’interaction définies pour les référentiels individuels appartenant à l’utilisateur. Pour définir des limites d’interaction différentes pour les référentiels individuels appartenant à l’utilisateur, utilisez plutôt des points de terminaison d’interaction de [référentiel](#repository).
