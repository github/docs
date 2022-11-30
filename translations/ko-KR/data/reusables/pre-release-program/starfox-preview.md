---
ms.openlocfilehash: 3557e85680e20919fbe049cfe30ccacc93d9c17c
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879811"
---
{% note %}

**참고:** 프로젝트 카드 세부 정보는 이제 프로젝트 관련 문제 및 타임라인 이벤트에 대한 REST API 응답에 표시됩니다. 이제 개발자가 이 기능을 미리 볼 수 있습니다. 자세한 내용은 [블로그 게시물](https://developer.github.com/changes/2018-09-05-project-card-events)을 참조하세요.

`project_card` 특성을 받으려면 리포지토리에 대해 프로젝트 보드를 [활성화](/articles/disabling-project-boards-in-a-repository)해야 하며 `Accept` 헤더에 사용자 지정 [미디어 형식](/rest/overview/media-types)을 제공해야 합니다.

```
application/vnd.github.starfox-preview+json
```

{% endnote %}
