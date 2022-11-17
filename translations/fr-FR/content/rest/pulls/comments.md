---
title: Commentaires de revues de demande de tirage
shortTitle: Review comments
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6d49aa3d5bca7f74a21c1cce32cecd38abe9366d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067729'
---
## À propos de l’API Pull request review comments

Les commentaires de révision de demande de tirage sont des commentaires sur une partie de la différence unifiée effectuée pendant une révision de demande de tirage. Les commentaires de commit et les commentaires de problème sont différents des commentaires de révision de demande de tirage. Vous appliquez des commentaires de commit directement à un commit et vous appliquez des commentaires de problème sans référencer une partie de la différence unifiée. Pour plus d’informations, consultez « [Créer un commentaire de commit](/rest/reference/commits#create-a-commit-comment) » et « [Créer un commentaire de problème](/rest/reference/issues#create-an-issue-comment) ».

### Types de médias personnalisés pour les commentaires de révision de demande de tirage

Il s’agit des types de médias pris en charge pour les commentaires de révision de demande de tirage.

    application/vnd.github.VERSION.raw+json
    application/vnd.github.VERSION.text+json
    application/vnd.github.VERSION.html+json
    application/vnd.github.VERSION.full+json

Pour plus d’informations, consultez « [Types de médias personnalisés](/rest/overview/media-types) ».
