---
title: Contenu d’un dépôt
allowTitleToDifferFromFilename: true
shortTitle: Contents
intro: 'Ces points de terminaison d’API vous permettent de créer, de modifier et de supprimer du contenu codé en Base64 dans un dépôt.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: fd3619faeb8ccaeaa70e8a2be050881b4a169b64
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181297'
---
## À propos de l’API de contenu du référentiel

Pour demander le format brut ou le rendu HTML (lorsqu’il est pris en charge), utilisez des types multimédias personnalisés pour le contenu du référentiel.

### Types de média personnalisés pour le contenu du référentiel

[README](/rest/reference/repos#get-a-repository-readme), [fichiers](/rest/reference/repos#get-repository-content) et [symlinks](/rest/reference/repos#get-repository-content) prennent en charge les types de médias personnalisés suivants :

    application/vnd.github.raw
    application/vnd.github.html

Utilisez le type de média `.raw` pour récupérer le contenu du fichier.

Pour les fichiers de balisage, comme Markdown ou AsciiDoc, vous pouvez récupérer le code HTML rendu à l’aide du type de média `.html`. Les langages de balisage sont rendus au format HTML à l’aide de notre [bibliothèque de balisage](https://github.com/github/markup) open source.

[Tous les objets](/rest/reference/repos#get-repository-content) prennent en charge le type de média personnalisé suivant :

    application/vnd.github.object

Utilisez le paramètre de type de média `object` pour récupérer le contenu dans un format d’objet cohérent, quel que soit le type de contenu. Par exemple, au lieu d’un tableau d’objets pour un répertoire, la réponse est un objet avec un attribut `entries` contenant le tableau d’objets.

Vous pouvez en apprendre davantage sur l’utilisation de types de médias dans l’API [ici](/rest/overview/media-types).
