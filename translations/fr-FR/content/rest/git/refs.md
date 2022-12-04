---
title: Références Git
shortTitle: References
intro: 'L’API de références Git vous permet de lire et d’écrire des références à votre base de données Git sur {% data variables.product.product_name %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 60f76710e14a754f9508f0919c94b9fbe57d21e1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147093053'
---
## À propos de l’API de références Git

Une référence Git (`git ref`) est un fichier qui contient un hachage SHA-1 de validation Git. Lorsque vous faites référence à une validation Git, vous pouvez utiliser la référence Git, qui est un nom facile à mémoriser, plutôt que le hachage. La référence Git peut être réécrite pour pointer vers une nouvelle validation. Une branche est une référence Git qui stocke le nouveau hachage de validation Git. Ces points de terminaison vous permettent de lire et d’écrire des [références](https://git-scm.com/book/en/v1/Git-Internals-Git-References) à votre base de données Git sur {% data variables.product.product_name %}.
