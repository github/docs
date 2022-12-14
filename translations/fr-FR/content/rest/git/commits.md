---
title: Validations Git
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'Utilisez l’API REST pour interagir avec les objets de commit de votre base de données Git sur {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 07813929bac1dc0ff6093b302449f1f7beb905c0
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192624'
---
## À propos des commits Git

Une validation Git est un instantané de la hiérarchie ([arborescence Git](/rest/reference/git#trees)) et du contenu des fichiers ([objet blob Git](/rest/reference/git#blobs)) dans un référentiel Git. Ces points de terminaison vous permettent de lire et d’écrire des [objets de validation](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects#_git_commit_objects) dans votre base de données Git sur {% data variables.product.product_name %}.
