---
title: Étiquettes Git
shortTitle: Tags
allowTitleToDifferFromFilename: true
intro: 'Utilisez l’API REST pour interagir avec les objets d’étiquette de votre base de données Git sur {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0d0a10afabf100cb34a0061585b87b17d5afc416
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192888'
---
## À propos des étiquettes Git

Une étiquette Git est similaire à une [référence Git](/rest/reference/git#refs), mais la validation Git vers laquelle elle pointe ne change jamais. Les étiquettes Git sont utiles lorsque vous souhaitez pointer vers des mises en production spécifiques. Ces points de terminaison vous permettent de lire et d’écrire des [objets étiquettes](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags) dans votre base de données Git sur {% data variables.product.product_name %}. L’API prend uniquement en charge les [objets d’étiquettes annotées](https://git-scm.com/book/en/v2/Git-Internals-Git-References#_tags), et non les étiquettes légères.
