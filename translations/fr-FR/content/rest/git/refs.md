---
title: Références Git
shortTitle: References
intro: 'Utilisez l’API REST pour interagir avec les références de votre base de données Git sur {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: c248685d867fff1835018f0b3021536a8a968168
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192896'
---
## À propos des références Git

Une référence Git (`git ref`) est un fichier qui contient un hachage SHA-1 de validation Git. Lorsque vous faites référence à une validation Git, vous pouvez utiliser la référence Git, qui est un nom facile à mémoriser, plutôt que le hachage. La référence Git peut être réécrite pour pointer vers une nouvelle validation. Une branche est une référence Git qui stocke le nouveau hachage de validation Git. Ces points de terminaison vous permettent de lire et d’écrire des [références](https://git-scm.com/book/en/v2/Git-Internals-Git-References) à votre base de données Git sur {% data variables.product.product_name %}.
