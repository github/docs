---
title: Validations Git
shortTitle: Commits
allowTitleToDifferFromFilename: true
intro: 'L’API de validation Git vous permet de lire et d’écrire des objets de validation dans votre base de données Git sur {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 2b0f1e07134b67be6c00f8bf1c65d9ccf0c2aac5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063481'
---
## À propos de l’API Validations Git

Une validation Git est un instantané de la hiérarchie ([arborescence Git](/rest/reference/git#trees)) et du contenu des fichiers ([objet blob Git](/rest/reference/git#blobs)) dans un référentiel Git. Ces points de terminaison vous permettent de lire et d’écrire des [objets de validation](https://git-scm.com/book/en/v1/Git-Internals-Git-Objects#Commit-Objects) dans votre base de données Git sur {% data variables.product.product_name %}.
