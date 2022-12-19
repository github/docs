---
title: タイムラインイベント
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: タイムラインイベント API は、issue と pull request でのタイムラインアクティビティによってトリガーされるさまざまな種類のイベントを返します。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061875'
---
## タイムラインイベント API について

タイムラインイベント API は、issue と pull request でのタイムラインアクティビティによってトリガーされるさまざまな種類のイベントを返します。 issue イベント API から受け取れる特定のイベントについて詳しくは、「[issue イベントの種類](/developers/webhooks-and-events/issue-event-types)」を参照してください。 For more information about the specific events that you can receive from the Issue Events API, see "<a href="/developers/webhooks-and-events/issue-event-types">Issue event types</a>." 詳しくは、「[GitHub イベント API](/developers/webhooks-and-events/github-event-types)」を参照してください。

この API を使用すると、Issue およびプルリクエストに関する情報を表示したり、Issue コメントを通知する相手を決定したりできます。

{% data reusables.pull_requests.issues-pr-shared-api %}
