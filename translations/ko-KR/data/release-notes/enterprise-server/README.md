---
ms.openlocfilehash: bf7a1cdb9c8b1300ef8ba8ab2dd427a9b5d28128
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193462"
---
# GitHub Enterprise Server에 대한 릴리스 정보

https://docs.github.com/en/enterprise-server@latest/admin/release-notes 에서 렌더링됩니다.

## 사용되지 않는 GitHub Enterprise Server 릴리스에 릴리스 정보 추가

[이 문제 템플릿](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md)에 따라 GitHub Enterprise Server 릴리스가 사용되지 않는 동안 Docs Engineering은 버전 릴리스 정보를 사용하여 YAML 파일을 에서 `github/docs-internal`제거합니다.

관련자가 사용되지 않는 릴리스 정보에 대한 업데이트를 요청하는 경우 다음 단계를 완료하여 메모를 업데이트할 수 있습니다.

1. 장기 실행 분기를 확인하고 PR을 만들어 해당 분기 <code>enterprise-<em>VERSION</em>-release</code> 에서 사용되지 않는 버전의 릴리스 정보를 업데이트합니다.
2. #docs 엔지니어링에 문의하여 Azure에 저장된 콘텐츠의 재스크래핑 및 업데이트를 요청합니다. [사용 중단 검사 목록](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md)의 콘텐츠 다시 스크래핑에 대한 섹션을 참조하세요.

## 작동 방식

### 자리 표시자 콘텐츠 파일

콘텐츠 파일은 `content/admin/release-notes.md`에 있습니다. `layout: release-notes` 특수 프런트매터 속성이 있으며 Markdown 콘텐츠는 없습니다. 릴리스 정보 원본은 YAML 데이터에서 제공됩니다.

### YAML 원본

릴리스 정보에 대한 원본 데이터는 이 디렉터리(`data/release-notes/enterprise-server`)에 있습니다.

디렉터리 이름은 GHES 릴리스 번호(마침표 대신 하이픈 포함)로 지정됩니다.

각 디렉터리의 YAML 파일 이름은 패치 번호로 지정됩니다. 일부 패치 파일 이름은 릴리스 후보라는 의미로 `-rc<num>.yml`로 끝날 수 있습니다. 릴리스 후보 파일도 YAML 데이터의 `release_candidate: true`가 필요합니다.

사용되지 않는 GHES 버전(참조 `lib/enterprise-server-releases.js`)의 릴리스 정보는 사이트에서 제거되지 **않으며** 항상 현재 지원되는 버전과 함께 표시됩니다.

패치 파일은 선택적인 `deprecated: true` 속성에 의해 개별적으로 더 이상 사용되지 않을 수 있습니다(즉, 문서 사이트에서 숨겨짐).

### 미들웨어 처리

YAML 데이터는 `middleware/contextualizers/ghes-release-notes.js`에 의해 처리되고 정렬되어 `context` 개체에 추가됩니다.

### 레이아웃

`context` 개체 데이터는 `components/release-notes`에 의해 렌더링됩니다.

릴리스 정보 페이지에는 `stylesheets/release-notes.scss`의 CSS가 포함된 사용자 지정 디자인이 있습니다.

### 스키마

YAML 데이터가 `tests/helpers/schemas/release-notes-schema.js`에 있는지 유효성을 검사하는 스키마입니다. 필수 및 선택적 속성을 확인하려면 스키마 파일을 참조하세요.

스키마는 `tests/linting/lint-files.js`의 테스트에 의해 실행됩니다. 데이터가 유효성 검사를 통과하지 못하면 테스트가 실패합니다.
