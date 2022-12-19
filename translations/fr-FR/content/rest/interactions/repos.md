---
title: Interactions de référentiel
shortTitle: Repository
intro: 'L’API d’interactions de référentiel permet aux personnes disposant d’un accès propriétaire ou administrateur de restreindre temporairement le type d’utilisateur qui peut commenter, ouvrir des problèmes ou créer des demandes de tirage dans un référentiel public.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1d7d0137ddc2334bb08e17a0c8d7069c13d982d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064665'
---
## À propos de l’API d’interactions de référentiel

L’API d’interactions de référentiel permet aux personnes disposant d’un accès propriétaire ou administrateur de restreindre temporairement le type d’utilisateur qui peut commenter, ouvrir des problèmes ou créer des demandes de tirage dans un référentiel public. {% data reusables.interactions.interactions-detail %} Voici plus d’informations sur les types d’utilisateurs {% data variables.product.product_name %} :

* {% data reusables.interactions.existing-user-limit-definition %} dans le référentiel.
* {% data reusables.interactions.contributor-user-limit-definition %} dans le référentiel.
* {% data reusables.interactions.collaborator-user-limit-definition %} dans le référentiel.

Si une limite d’interaction est activée pour l’utilisateur ou l’organisation propriétaire du référentiel, la limite ne peut pas être modifiée pour le référentiel individuel. Utilisez plutôt des points de terminaison d’interaction [utilisateur](#user) ou d’[organisation](#organization) pour modifier la limite d’interaction.
