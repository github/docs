---
title: Événements de chronologie
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: L’API Événements de chronologie peut retourner différents types d’événements déclenchés par l’activité de chronologie dans les problèmes et les demandes de tirage.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: a9872cc5b4013a83f57c84753a19af6c9207ecde
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061873'
---
## À propos de l’API Événements de chronologie

L’API Événements de chronologie peut retourner différents types d’événements déclenchés par l’activité de chronologie dans les problèmes et les demandes de tirage. Pour plus d’informations sur les événements spécifiques que vous pouvez recevoir à partir de l’API Événements de problème, consultez « [Types d’événements de problème](/developers/webhooks-and-events/issue-event-types) ». Une API d’événements pour une activité GitHub en dehors des problèmes et demandes de tirage est également disponible. Pour plus d’informations, consultez l’[API Événements GitHub](/developers/webhooks-and-events/github-event-types).

Vous pouvez utiliser cette API pour afficher des informations sur les problèmes et la demande de tirage ou déterminer qui doit être informé des commentaires de problème.

{% data reusables.pull_requests.issues-pr-shared-api %}
