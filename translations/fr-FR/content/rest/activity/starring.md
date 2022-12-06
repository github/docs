---
title: Attribution d’étoiles
intro: L’API d’attribution d’étoiles vous permet de marquer un dépôt.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 267d87a4120bba3dbfd080bcfe3e59b1ee3ec6d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064249'
---
## À propos de l’API d’attribution d’étoiles

L’API d’attribution d’étoiles vous permet de marquer un dépôt. Les étoiles apparaissent en regard des dépôt pour indiquer un niveau approximatif d’intérêt. Les étoiles n’ont aucun effet sur les notifications ou le flux d’activité. Pour plus d’informations, consultez « [Enregistrement de dépôts avec des étoiles](/get-started/exploring-projects-on-github/saving-repositories-with-stars) ».

### Attribution d’étoiles et observation

En août 2012, nous avons [changé la façon dont fonctionne l’observation](https://github.com/blog/1204-notifications-stars) sur {% data variables.product.prodname_dotcom %}. De nombreuses applications clientes d’API peuvent utiliser les points de terminaison « observateur » d’origine pour accéder à ces données. Vous pouvez maintenant commencer à utiliser les points de terminaison « étoile » à la place (décrits ci-dessous). Pour plus d’informations, consultez le [billet Modification de l’API Observateur](https://developer.github.com/changes/2012-09-05-watcher-api/) et l’[API d’observation de dépôt](/rest/reference/activity#watching).

### Types de médias personnalisés pour l’attribution d’étoile

Il existe un type de média personnalisé pris en charge pour l’API REST d’attribution d’étoile. Lorsque vous utilisez ce type de média personnalisé, vous recevrez une réponse avec la propriété de timestamp `starred_at` qui indique l’heure de création de l’étoile. La réponse a également une deuxième propriété qui inclut la ressource retournée lorsque le type de média personnalisé n’est pas inclus. La propriété contenant la ressource sera `user` ou `repo`.

    application/vnd.github.star+json

Pour plus d’informations sur les types de médias, consultez « [Types de médias personnalisés](/rest/overview/media-types) ».
