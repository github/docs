---
title: 이슈 이벤트 유형
intro: '이슈 이벤트 API 및 타임라인 API의 경우 각 이벤트 유형, {% data variables.product.prodname_dotcom %}에 대한 트리거 작업 및 각 이벤트의 고유한 속성에 대해 알아봅니다.'
redirect_from:
  - /v3/issues/issue-event-types
  - /developers/webhooks-and-events/issue-event-types
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Events
ms.openlocfilehash: 0120c358012c385555991820516b44199d0f34f8
ms.sourcegitcommit: 42536e8cb82d50b98cdaee038f09c6aeb0d037c6
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/07/2022
ms.locfileid: '148012061'
---
이슈 이벤트는 이슈 및 끌어오기 요청의 활동에 의해 트리거되며 [이슈 이벤트 API](/rest/reference/issues#events) 및 [타임라인 이벤트 API](/rest/reference/issues#timeline)에서 사용할 수 있습니다. 각 이벤트 유형은 이슈 이벤트 또는 타임라인 이벤트 API에서 이벤트를 사용할 수 있는지 여부를 지정합니다.

GitHub REST API는 모든 끌어오기 요청을 이슈로 간주하지만 모든 이슈가 끌어오기 요청인 것은 아닙니다. 이러한 이유로 이슈 이벤트 및 타임라인 이벤트 엔드포인트는 응답에서 문제 및 끌어오기 요청을 모두 반환할 수 있습니다. 끌어오기 요청에는 `issue` 개체의 `pull_request` 속성이 있습니다. 끌어오기 요청은 이슈이므로 리포지토리에서 이슈 및 끌어오기 요청 번호가 겹치지 않습니다. 예를 들어 리포지토리에서 첫 번째 이슈를 열면 이 번호는 1이 됩니다. 그런 다음 끌어오기 요청을 열면 이 번호는 2가 됩니다. 각 이벤트 유형은 이벤트가 끌어오기 요청, 이슈 또는 둘 다에서 발생하는지 여부를 지정합니다.

## 이슈 이벤트 개체 공통 속성

이슈 이벤트는 타임라인 이벤트 API에서만 사용할 수 있는 이벤트를 제외하고 모두 개체 구조가 동일합니다. 일부 이벤트에는 이벤트 리소스에 대한 추가 컨텍스트를 제공하는 추가 속성도 포함됩니다. 이 개체 형식과 다른 속성에 대한 자세한 내용은 특정 이벤트를 참조하세요.

{% data reusables.issue-events.issue-event-common-properties %}

## added_to_project

이슈 또는 끌어오기 요청이 프로젝트 보드에 추가되었습니다. {% data reusables.projects.disabled-projects %}

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## 할당됨

이슈 또는 끌어오기 요청이 사용자에게 할당되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X**  |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## automatic_base_change_failed

GitHub에서 끌어오기 요청의 기본 분기를 자동으로 변경하려고 시도하지 못했습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** |  |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## automatic_base_change_succeeded

GitHub에서 끌어오기 요청의 기본 분기를 자동으로 변경하려고 시도했습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## base_ref_changed

끌어오기 요청의 기본 참조 분기가 변경되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## closed

이슈 또는 끌어오기 요청이 닫혔습니다. `commit_id`가 있는 경우 “closes/fixes” 구문을 사용하여 이슈를 닫은 커밋을 식별합니다. 구문에 대한 자세한 내용은 “[이슈에 끌어오기 요청 연결](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)”을 참조하세요.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 댓글이 추가됨

이슈 또는 끌어오기 요청에 주석이 추가되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> |  | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.timeline_events_object_properties %}

Name | 형식 | 설명
-----|------|--------------
`url` | `string` | 이슈 주석을 검색하는 REST API URL입니다.
`html_url` | `string` | 이슈 주석의 HTML URL입니다.
`issue_url` | `string` | 이슈의 HTML URL입니다.
`id` | `integer` | 이벤트의 고유한 식별자입니다.
`node_id` | `string` | 이벤트의 [전역 노드 ID](/graphql/guides/using-global-node-ids)입니다.
`user` | `object` | 이 이슈에 대해 댓글을 달았던 사람입니다.
`created_at` | `string` | 주석이 추가된 시점을 나타내는 타임스탬프입니다.
`updated_at` | `string` | 주석이 업데이트되지 않은 경우 주석이 업데이트 또는 생성된 시점을 나타내는 타임스탬프입니다.
`author_association` | `string` | 사용자가 이슈의 리포지토리에 있는 권한입니다. 예를 들어 리포지토리 소유자가 주석을 만든 경우 값은 `"OWNER"`입니다.
`body` | `string` | 주석 본문 텍스트입니다.
`event` | `string` | 이벤트 값은 `"commented"`입니다.
`actor` | `object` | 이벤트를 생성한 사람입니다.

## 커밋

끌어오기 요청의 `HEAD` 분기에 커밋이 추가되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> |  | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.timeline_events_object_properties %}

Name | 형식 | 설명
-----|------|--------------
`sha` | `string` | 끌어오기 요청에서 커밋의 SHA입니다.
`node_id` | `string` | 이벤트의 [전역 노드 ID](/graphql/guides/using-global-node-ids)입니다.
`url` | `string` | 주석을 검색하는 REST API URL입니다.
`html_url` | `string` | 커밋의 HTML URL입니다.
`author` | `object` | 커밋을 작성한 사람입니다.
`committer` | `object` | 작성자를 대신하여 커밋을 커밋한 사람입니다.
`tree` | `object` | 커밋의 Git 트리입니다.
`message` | `string` | 커밋 메시지입니다.
`parents` | `array of objects` | 부모 커밋 목록입니다.
`verification` | `object` | 커밋의 서명을 확인하는 결과입니다. 자세한 내용은 “[서명 확인 정보](/rest/reference/git#get-a-commit)”를 참조하세요.
`event` | `string` | 이벤트 값은 `"committed"`입니다.

## 연결됨

이슈 또는 끌어오기 요청이 다른 이슈 또는 끌어오기 요청에 연결되었습니다. 자세한 내용은 “[이슈에 끌어오기 요청 연결](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”을 참조하세요.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## convert_to_draft

끌어오기 요청이 초안으로 변환되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## converted_note_to_issue

이 이슈는 프로젝트 보드의 메모를 이슈로 변환하여 생성되었습니다. {% data reusables.projects.disabled-projects %}

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## converted_to_discussion

이 문제는 종결되어 토론으로 변환되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|-----|-----|-----|
| <ul><li>문제</li></ul> | **X** | |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 상호 참조됨

이슈 또는 끌어오기 요청이 다른 이슈 또는 끌어오기 요청에서 참조되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> |  | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.timeline_events_object_properties %}

Name | 형식 | 설명
-----|------|--------------
`actor` | `object` | 이벤트를 생성한 사람입니다.
`created_at` | `string` | 상호 참조가 추가된 시기를 나타내는 타임스탬프입니다.
`updated_at` | `string` | 상호 참조가 업데이트되지 않은 경우 상호 참조가 업데이트되거나 생성된 시기를 나타내는 타임스탬프입니다.
`source` | `object` | 상호 참조를 추가한 이슈 또는 끌어오기 요청입니다.
`source[type]` | `string` | 이 값은 끌어오기 요청이 형식 이슈이므로 항상 `"issue"`입니다. 이슈 또는 끌어오기 요청에 의해 트리거되는 상호 참조 이벤트만 타임라인 이벤트 API에서 반환됩니다. 이벤트를 트리거한 이슈가 끌어오기 요청인지 확인하려면 `source[issue][pull_request]` 개체가 있는지 확인할 수 있습니다.
`source[issue]` | `object` | 상호 참조를 추가한 `issue` 개체입니다.
`event` | `string` | 이벤트 값은 `"cross-referenced"`입니다.

## demilestoned

마일스톤에서 이슈 또는 끌어오기 요청이 제거되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | 마일스톤 개체입니다.
`milestone[title]` | `string` | 마일스톤의 제목입니다.

## 배포됨

끌어오기 요청이 배포되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## deployment_environment_changed

끌어오기 요청 배포 환경이 변경되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** |  |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 연결 끊김

이슈 또는 끌어오기 요청이 다른 이슈 또는 끌어오기 요청에서 연결 해제되었습니다. 자세한 내용은 “[이슈에 끌어오기 요청 연결](/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue)”을 참조하세요.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_deleted

끌어오기 요청의 `HEAD` 분기가 삭제되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## head_ref_restored

끌어오기 요청의 `HEAD` 분기가 마지막으로 알려진 커밋으로 복원되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

## head_ref_force_pushed

끌어오기 요청의 HEAD 분기가 강제로 푸시되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 레이블 지정됨

이슈 또는 끌어오기 요청에 레이블이 추가되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## 잠김

이슈 또는 끌어오기 요청이 잠겼습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | 제공된 경우 이슈 또는 끌어오기 요청 대화가 잠긴 이유입니다.

## mentioned

`actor`가 이슈 또는 끌어오기 요청 본문에서 `@mentioned`되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## marked_as_duplicate

쓰기 권한이 있는 사용자는 이슈를 다른 이슈의 중복으로 표시하거나 끌어오기 요청을 다른 끌어오기 요청의 중복으로 표시했습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 병합

끌어오기 요청이 병합되었습니다. `commit_id` 특성은 병합된 `HEAD` 커밋의 SHA1입니다. `commit_repository`는 항상 기본 리포지토리와 동일합니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 마일스톤

이슈 또는 끌어오기 요청이 마일스톤에 추가되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} `milestone` | `object` | 마일스톤 개체입니다.
`milestone[title]` | `string` | 마일스톤의 제목입니다.

## moved_columns_in_project

프로젝트 보드의 열 간에 이슈 또는 끌어오기 요청이 이동되었습니다. {% data reusables.projects.disabled-projects %}

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %} `previous_column_name` | `string` | 이슈를 이동해 온 열의 이름입니다.

## pinned

이슈가 고정되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## ready_for_review

초안 끌어오기 요청이 검토할 준비가 된 것으로 표시되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 참조됨

커밋 메시지에서 이슈가 참조되었습니다. `commit_id` 특성은 발생 위치의 커밋 SHA1이며 commit_repository는 해당 커밋이 푸시된 위치입니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## removed_from_project

개체 보드에서 이슈 또는 끌어오기 요청이 제거되었습니다. {% data reusables.projects.disabled-projects %}

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.pre-release-program.starfox-preview %} {% data reusables.pre-release-program.api-preview-warning %}

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.project-card-properties %}

## 이름이 변경됨

이슈 또는 끌어오기 요청 제목이 변경되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} `rename` | `object` | 이름 세부 정보입니다.
`rename[from]` | `string` | 이전 이름입니다.
`rename[to]` | `string` | 새 이름입니다.

## 재개

이슈 또는 끌어오기 요청이 다시 열렸습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## review_dismissed

끌어오기 요청 검토가 해제되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-dismissed-properties %}

## review_requested

끌어오기 요청이 요청되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## review_request_removed

끌어오기 요청 검토 요청이 제거되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.review-request-properties %}

## 검토됨

끌어오기 요청이 검토되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>끌어오기 요청</li></ul> |  | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.timeline_events_object_properties %}

Name | 형식 | 설명
-----|------|--------------
`id` | `integer` | 이벤트의 고유한 식별자입니다.
`node_id` | `string` | 이벤트의 [전역 노드 ID](/graphql/guides/using-global-node-ids)입니다.
`user` | `object` | 이 이슈에 대해 댓글을 달았던 사람입니다.
`body` | `string` | 검토 요약 텍스트입니다.
`commit_id` | `string` | 검토 시 끌어오기 요청 내 최신 커밋 SHA입니다.
`submitted_at` | `string` | 검토가 제출된 시점을 나타내는 타임스탬프입니다.
`state` | `string` | 제출된 검토의 상태입니다. `commented`는 `changes_requested`, `approved` 중 하나일 수 있습니다.
`html_url` | `string` | 검토의 HTML URL입니다.
`pull_request_url` | `string` | 끌어오기 요청을 검색하는 REST API URL입니다.
`author_association` | `string` | 사용자가 이슈의 리포지토리에 있는 권한입니다. 예를 들어 리포지토리 소유자가 주석을 만든 경우 값은 `"OWNER"`입니다.
`_links` | `object` | `html_url` 및 `pull_request_url`입니다.
`event` | `string` | 이벤트 값은 `"reviewed"`입니다.

## subscribed

이슈 또는 끌어오기 요청에 대한 알림을 받기 위해 구독한 사람입니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 전송됨

이슈가 다른 리포지토리로 전송되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 할당되지 않음

사용자가 이슈에서 할당 취소되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.assignee-properties %}

## 레이블이 지정되지 않음

레이블이 이슈에서 제거되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} {% data reusables.issue-events.label-properties %}

## 잠금 해제됨

이슈가 잠금 해제되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %} `lock_reason` | `string` | 제공된 경우 이슈 또는 끌어오기 요청 대화가 잠긴 이유입니다.

## unmarked_as_duplicate

이전에 사용자가 다른 이슈의 중복으로 표시한 이슈는 더 이상 중복된 것으로 간주되지 않거나 사용자가 이전에 다른 끌어오기 요청의 중복으로 표시한 끌어오기 요청은 더 이상 중복으로 간주되지 않습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 고정 해제됨

이 이슈는 고정되지 않았습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

## 구독 취소됨

이슈 또는 끌어오기 요청에 대한 알림을 받지 못한 사람입니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> |  | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

{% ifversion fpt or ghec %}
## user_blocked

조직 소유자가 조직에서 사용자를 차단했습니다. [이슈에 대해 차단된 사용자의 설명 중 하나를 통해](/communities/maintaining-your-safety-on-github/blocking-a-user-from-your-organization#blocking-a-user-in-a-comment) 수행되었습니다.

### 가용성

|문제 유형 | 이슈 이벤트 API | 타임라인 이벤트 API|
|:----------|:----------------:|:-----------------:|
| <ul><li>문제</li><li>끌어오기 요청</li></ul> | **X** | **X** |

### 이벤트 개체 속성

{% data reusables.issue-events.issue-event-common-properties %}

{% endif %}
