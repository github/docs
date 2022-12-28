---
ms.openlocfilehash: dcc6cf1e8adf15c4997d4d62cd34bde99f7d37cd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145109724"
---
# 학습 트랙(학습 경로라고도 함)

학습 트랙은 특정 주제를 마스터하는 데 도움이 되는 문서 모음입니다. 학습 트랙은 제품별로 정의됩니다. 예제는 https://docs.github.com/en/actions/guides을 참조하세요.

## 작동 방식

제품에 대한 학습 트랙 데이터는 다음 두 위치에 정의됩니다.

1. 학습 트랙 이름의 간단한 배열은 제품 가이드 인덱스 페이지의 프런트매터에 정의되어 있습니다.

    예를 들어 `content/actions/guides/index.md`에서는 다음과 같습니다.
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. 각 트랙에 대한 추가 데이터는 `data` 디렉터리의 **제품** 에 대해 명명된 YAML 파일에 정의됩니다.

    예를 들어 `data/learning-tracks/actions.yml`에서 콘텐츠 파일의 `learningTracks` 배열의 각 항목은 추가 데이터(예: `title`, `description` 및 `guides` 링크 배열)로 표시됩니다.

    **버전당** YAML의 학습 트랙 1개는 제품 가이드 페이지의 맨 위에 표시되도록 설정하는 `featured_track: true`를 통해 “추천” 학습 트랙으로 지정해야 합니다. 이 속성이 없으면 테스트가 실패합니다.

    `featured_track` 속성은 간단한 부울(즉, `featured_track: true`)일 수도 있고 버전 관리 문(예: `featured_track: '{% ifversion fpt %}true{% else %}false{% endif %}'`)이 포함된 문자열일 수도 있습니다. 버전 관리 기능을 사용하는 경우 YML 파일당 여러 `featured_track`이 있지만 현재 지원되는 각 버전에서 하나만 렌더링해야 합니다. 각 버전에 대해 추천 링크가 두 개 이상 있거나 없는 경우 테스트는 실패합니다.

## 버전 관리

학습 트랙에 대한 버전 관리는 페이지 렌더링 시간에 처리됩니다. 코드는 `page.render()`에서 호출되여 [`lib/learning-tracks.js`](lib/learning-tracks.js)에 실시간으로 표시됩니다. 그런 다음 `components/guides`에서 처리된 학습 트랙을 렌더링합니다.

유동 조건부를 가이드의 YAML 파일에서 버전 관리하는 데 사용할 필요가 **없습니다** . 현재 버전에 적용되는 학습 트랙 가이드만 자동으로 렌더링됩니다. 현재 버전에 포함된 가이드가 트랙에 없으면 학습 트랙 섹션이 전혀 렌더링되지 않습니다.

제품의 학습 트랙 YML 데이터 내에서 명시적 버전 관리도 지원됩니다. 형식 및 허용되는 값은 [프론트매터 버전 속성](/content#versions)과 동일합니다.

예를 들면 다음과 같습니다.

```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  featured_track: true
  versions:
    ghes: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```

`versions` 속성이 포함되지 않은 경우 모든 버전에서 트랙을 사용할 수 있다고 가정합니다.

## 스키마 적용

[`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js)에 표시되고 [`tests/content/lint-files.js`](tests/content/lint-files.js)에서 실행되는 학습 트랙 YAML의 유효성을 검사하기 위한 스키마입니다.
