---
ms.openlocfilehash: 78f03188cb76fd34ffd5670585758bb8c9c2a47d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145115004"
---
# GitHub AE 릴리스 정보

여기서 렌더링됩니다. https://docs.github.com/en/github-ae@latest/admin/release-notes

## 작동 방식

### 자리 표시자 콘텐츠 파일

콘텐츠 파일은 `content/admin/release-notes.md`에 있습니다. `layout: release-notes` 특수 프런트매터 속성이 있으며 Markdown 콘텐츠는 없습니다. 릴리스 정보 원본은 YAML 데이터에서 제공됩니다.

### YAML 원본

릴리스 정보에 대한 원본 데이터는 이 디렉터리(`data/release-notes/github-ae`)에 있습니다.

디렉터리 이름은 월로 지정됩니다. YAML 파일의 이름은 주간 릴리스의 데이터로 지정됩니다.

`currentWeek`라는 부울 속성은 각 YAML 파일에서 설정해야 합니다. 두 개 이상 파일에서 동시에 이 속성을 true로 설정할 수는 없습니다.

패치 파일은 선택적인 `deprecated: true` 속성에 의해 개별적으로 더 이상 사용되지 않을 수 있습니다(즉, 문서 사이트에서 숨겨짐).

### 미들웨어 처리

YAML 데이터는 `middleware/contextualizers/release-notes.js`에 의해 처리되고 정렬되어 `context` 개체에 추가됩니다.

### 레이아웃

`context` 개체 데이터는 `components/release-notes`에 의해 렌더링됩니다.

릴리스 정보 페이지에는 `stylesheets/release-notes.scss`의 CSS가 포함된 사용자 지정 디자인이 있습니다.

### 스키마

YAML 데이터가 `tests/helpers/schemas/ghae-release-notes-schema.js`에 있는지 유효성을 검사하는 스키마입니다. 필수 및 선택적 속성을 확인하려면 스키마 파일을 참조하세요.

스키마는 `tests/linting/lint-files.js`의 테스트에 의해 실행됩니다. 데이터가 유효성 검사를 통과하지 못하면 테스트가 실패합니다.
