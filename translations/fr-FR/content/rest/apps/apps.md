---
title: Applications GitHub
allowTitleToDifferFromFilename: true
intro: 'L’API {% data variables.product.prodname_github_apps %} vous permet de récupérer des informations sur {% data variables.product.prodname_github_apps %}.'
topics:
  - API
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: b9bb851837d7a5c61a74917eacf2154e7f29bc71
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146769188'
---
## À propos de l’API {% data variables.product.prodname_github_apps %}

{% data reusables.apps.general-apps-restrictions %}

Cette page répertorie les points de terminaison auxquels vous pouvez accéder lors de l’authentification en tant qu’application GitHub. Pour en savoir plus, consultez « [Authentification en tant qu’application GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) ».

Lorsqu’elle est authentifiée en tant qu’application GitHub, l’API GitHub Apps vous permet d’obtenir des informations générales sur une application GitHub, ainsi que des informations spécifiques sur les installations d’une application.

Vous pouvez accéder aux points de terminaison de l’API REST lors de l’authentification en tant qu’application GitHub. Ces points de terminaison affichent un texte indiquant « Fonctionne avec GitHub Apps ». Vous pouvez également accéder à ces points de terminaison lors de l’authentification en tant qu’utilisateur.

Un sous-ensemble de points de terminaison de l’API REST nécessitent une authentification en tant qu’installation d’application GitHub. Pour obtenir la liste de ces points de terminaison, consultez [Installations](/rest/reference/apps#installations).
