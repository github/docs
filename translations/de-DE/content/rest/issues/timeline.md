---
title: Zeitachsenereignisse
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: 'Die API für Zeitachsenereignisse kann verschiedene Arten von Ereignissen zurückgeben, die durch Zeitachsenaktivität in Issues und Pull Requests ausgelöst werden.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061874'
---
## Informationen zur API für Zeitachsenereignisse

Die API für Zeitachsenereignisse kann verschiedene Arten von Ereignissen zurückgeben, die durch Zeitachsenaktivität in Issues und Pull Requests ausgelöst werden. Weitere Informationen zu den spezifischen Ereignissen, die du über die Issue-Ereignis-API erhalten kannst, findest du unter [Issue-Ereignistypen](/developers/webhooks-and-events/issue-event-types). For more information about the specific events that you can receive from the Issue Events API, see "<a href="/developers/webhooks-and-events/issue-event-types">Issue event types</a>." Weitere Informationen findest du unter [GitHub-Ereignis-API](/developers/webhooks-and-events/github-event-types).

Du kannst diese API verwenden, um Informationen zu Issues und Pull Requests anzuzeigen oder um zu bestimmen, wer über Issuekommentare benachrichtigt werden soll.

{% data reusables.pull_requests.issues-pr-shared-api %}
