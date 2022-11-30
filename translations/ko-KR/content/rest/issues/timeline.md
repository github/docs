---
title: 타임라인 이벤트
allowTitleToDifferFromFilename: true
shortTitle: Timeline
intro: 타임라인 이벤트 API는 이슈 및 끌어오기 요청의 타임라인 작업에 의해 트리거되는 다양한 유형의 이벤트를 반환할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061876'
---
## 타임라인 이벤트 API 정보

타임라인 이벤트 API는 이슈 및 끌어오기 요청의 타임라인 작업에 의해 트리거되는 다양한 유형의 이벤트를 반환할 수 있습니다. 문제 이벤트 API에서 받을 수 있는 특정 이벤트에 대한 자세한 내용은 “[문제 이벤트 유형](/developers/webhooks-and-events/issue-event-types)”을 참조하세요. 문제 및 끌어오기 요청 이외의 GitHub 작업용 이벤트 API도 사용할 수 있습니다. 자세한 내용은 “[GitHub 이벤트 API](/developers/webhooks-and-events/github-event-types)”를 참조하세요.

이 API를 사용하여 문제 및 끌어오기 요청에 대한 정보를 표시하거나 문제 댓글에 대한 알림을 받아야 하는 사용자를 결정할 수 있습니다.

{% data reusables.pull_requests.issues-pr-shared-api %}
