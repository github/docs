---
title: Tirages
intro: 'L’API Tirages vous permet de lister, d’afficher, de modifier, de créer et même de fusionner des demandes de tirage.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b140c41062e4fea4c1cb1299b23de774963913af
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181300'
---
## À propos de l’API Demandes de tirage

L’API Demandes de tirage vous permet de répertorier, d’afficher, de modifier, de créer et même de fusionner des demandes de tirage. Les commentaires sur les demandes de tirage peuvent être gérés via l’[API Commentaires de problème](/rest/reference/issues#comments).

Chaque demande de tirage est un problème, mais chaque problème n’est pas une demande de tirage. Pour cette raison, les actions « partagées » pour les deux fonctionnalités, comme la manipulation d’attributions, d’étiquettes et de jalons, sont fournies dans l’[API Problèmes](/rest/reference/issues).

### Types de médias personnalisés pour les demandes de tirage

Il s’agit des types de médias pris en charge pour les demandes de tirage.

    application/vnd.github.raw+json
    application/vnd.github.text+json
    application/vnd.github.html+json
    application/vnd.github.full+json
    application/vnd.github.diff
    application/vnd.github.patch

Pour plus d’informations, consultez « [Types de médias personnalisés](/rest/overview/media-types) ».

Si une version différentielle est endommagée, contactez le {% data variables.contact.contact_support %}. Incluez le nom du référentiel et l’ID de demande de tirage dans votre message.

### Relations de liaison

Les demandes de tirage ont ces relations de liaison possibles :

Nom | Description
-----|-----------|
`self`| Emplacement de l’API de cette demande de tirage.
`html`| Emplacement HTML de cette demande de tirage.
`issue`| Emplacement de l’API du [problème](/rest/reference/issues) de cette demande de tirage.
`comments`| Emplacement de l’API des [commentaires de problème](/rest/reference/issues#comments) de cette demande de tirage.
`review_comments`| Emplacement de l’API des [commentaires de révision](/rest/reference/pulls#comments) de cette demande de tirage.
`review_comment`| [Modèle d’URL](/rest#hypermedia) permettant de construire l’emplacement de l’API pour un [commentaire de révision](/rest/reference/pulls#comments) dans le référentiel de cette demande de tirage.
`commits`|Emplacement de l’API des [validations](#list-commits-on-a-pull-request) de cette demande de tirage.
`statuses`| Emplacement de l’API des [états de validation](/rest/reference/commits#commit-statuses) de cette demande de tirage, qui sont les états de sa branche `head`.
