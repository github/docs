---
title: Git blobs
shortTitle: Blobs
allowTitleToDifferFromFilename: true
intro: 'Utilisez l’API REST pour interagir avec un blob (binary large object) Git, type d’objet utilisé pour stocker le contenu de chaque fichier dans un dépôt.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b29c69d2635e20720d23aad62c7aa88984cff984
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192720'
---
## À propos des blobs Git

Un blob (binary large object) Git est le type d’objet utilisé pour stocker le contenu de chaque fichier dans un dépôt. Le hachage SHA-1 du fichier est calculé et stocké dans l’objet blob. Ces points de terminaison vous permettent de lire et d’écrire des [objets blob](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects) dans votre base de données Git sur {% data variables.product.product_name %}. Les blobs tirent parti de [ces types de médias personnalisés](#custom-media-types-for-blobs). Plus d’informations sur l’utilisation des types de médias dans l’API sont disponibles [ici](/rest/overview/media-types).

### Types de médias personnalisés pour les blobs

Il s’agit des types de médias pris en charge pour les blobs.

    application/json
    application/vnd.github.raw

Pour plus d’informations, consultez « [Types de médias](/rest/overview/media-types) ».
