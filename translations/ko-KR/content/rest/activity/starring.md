---
title: 별 지정
intro: 별 지정 API를 사용하면 리포지토리에 책갈피를 지정할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064252'
---
## 별 지정 API 정보

별 지정 API를 사용하면 리포지토리에 책갈피를 지정할 수 있습니다. 별은 리포지토리 옆에 표시되어 대략적인 수준의 관심을 표시합니다. 별은 알림 또는 작업 피드에 영향을 미치지 않습니다. 자세한 내용은 "[별을 사용하여 리포지토리 저장](/get-started/exploring-projects-on-github/saving-repositories-with-stars)"을 참조하세요.

### 별 지정 vs. 감시

2012년 8월에 {% data variables.product.prodname_dotcom %}에서 [감시 방식을 변경](https://github.com/blog/1204-notifications-stars)했습니다. 많은 API 클라이언트 애플리케이션에서 이 데이터에 액세스하기 위해 원래 “watcher” 엔드포인트를 사용할 수 있습니다. 이제 대신 “star” 엔드포인트를 사용할 수 있습니다(아래 설명 참조). 자세한 내용은 [Watcher API 변경 게시물](https://developer.github.com/changes/2012-09-05-watcher-api/) 및 “[리포지토리 감시 API](/rest/reference/activity#watching)”를 참조하세요.

### 별 지정을 위한 사용자 지정 미디어 유형

별 지정 REST API에 대해 지원되는 하나의 사용자 지정 미디어 유형이 있습니다. 이 사용자 지정 미디어 유형을 사용하면 별이 만들어진 시간을 나타내는 `starred_at` 타임스탬프 속성이 포함된 응답을 수신하게 됩니다. 응답에는 사용자 지정 미디어 유형이 포함되지 않을 때 반환되는 리소스가 포함된 두 번째 속성도 있습니다. 리소스를 포함하는 속성은 `user` 또는 `repo`입니다.

    application/vnd.github.star+json

미디어 유형에 대한 자세한 내용은 “[사용자 지정 미디어 유형](/rest/overview/media-types)”을 참조하세요.
