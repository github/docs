---
title: События временной шкалы
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: 'API событий временной шкалы может возвращать различные типы событий, активированных действиями временной шкалы в проблемах и запросах на вытягивание.'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061877'
---
## Сведения об API событий временной шкалы

API событий временной шкалы может возвращать различные типы событий, активированных действиями временной шкалы в проблемах и запросах на вытягивание. Дополнительные сведения о конкретных событиях, которые можно получить из API событий проблем, см. в разделе [Типы событий проблемы](/developers/webhooks-and-events/issue-event-types). Также доступен API событий для действий GitHub вне проблем и запросов на вытягивание. Дополнительные сведения см. в разделе [API событий GitHub](/developers/webhooks-and-events/github-event-types).

Этот API можно использовать для отображения сведений о проблемах и запросах на вытягивание или определения того, кто должен получать уведомления о комментариях к проблеме.

{% data reusables.pull_requests.issues-pr-shared-api %}
