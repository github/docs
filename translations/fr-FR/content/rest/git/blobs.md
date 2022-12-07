---
title: Git blobs
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'L’API Git blobs vous permet de créer et d’obtenir un blob (binary large object) Git, le type d’objet utilisé pour stocker le contenu de chaque fichier dans un référentiel.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 3b7cac6d268fb4c7e786651a7281ca5ce4241ec5
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181244'
---
## À propos de l’API Git blobs

Un blob (binary large object) Git est le type d’objet utilisé pour stocker le contenu de chaque fichier dans un dépôt. Le hachage SHA-1 du fichier est calculé et stocké dans l’objet blob. Ces points de terminaison vous permettent de lire et d’écrire des [objets blob](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) dans votre base de données Git sur {% data variables.product.product_name %}. Les blobs tirent parti de [ces types de médias personnalisés](#custom-media-types-for-blobs). Plus d’informations sur l’utilisation des types de médias dans l’API sont disponibles [ici](/rest/overview/media-types).

### Types de médias personnalisés pour les blobs

Il s’agit des types de médias pris en charge pour les blobs.

    application/json
    application/vnd.github.raw

Pour plus d’informations, consultez « [Types de médias](/rest/overview/media-types) ».
