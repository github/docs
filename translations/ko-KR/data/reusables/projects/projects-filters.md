---
ms.openlocfilehash: 9106c4a2e538e62d23cd0aa2e417758376f6ffcd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: "148158855"
---
- 여러 값의 일치 항목을 필터링하려면(OR 쿼리) 값을 쉼표로 구분합니다. 예를 들어 `label:"good first issue",bug`는 `good first issue` 또는 `bug`라는 레이블이 지정된 이슈를 모두 나열합니다.
- 특정 값 없음을 필터링하려면 필터 앞에 `-`를 배치합니다. 예를 들어 `-label:"bug"`는 레이블 `bug`가 없는 항목만 표시합니다.
- 모든 값 없음을 필터링하려면 `no:` 다음에 필드 이름을 입력합니다. 예를 들어 `no:assignee`는 담당자가 없는 항목만 표시합니다.
- 상태별로 필터링하려면 `is:`를 입력합니다. 예를 들어 `is: issue` 또는 `is:open`입니다.
- 여러 필터를 쉼표로 구분합니다. 예를 들어 `status:"In progress" -label:"bug" no:assignee`는 상태가 `In progress`이고, `bug` 레이블이 없으며, 담당자가 없는 항목만 표시됩니다.
- 반복 필드의 이전, 현재 또는 다음 반복을 필터링하려면 `@previous`, `@current` 또는 `@next`를 사용합니다. 예: `iteration:@current`.
- 뷰어에 할당된 항목을 필터링하려면 `@me`를 사용합니다. 예: `assignee:@me`. 이 보기를 사용하는 모든 사용자에게 자신에게 할당된 항목이 표시됩니다.
- 항목이 마지막으로 업데이트된 시점을 기준으로 필터링하려면 일 수 뒤에 를 사용합니다 `last-updated:` . 이 필터는 `{number}days` 단위로만(또는 `1day` 하루 동안) 지원합니다. 예를 들어 `last-updated:7days` 은 7일 이상 전에 마지막으로 업데이트된 항목만 표시합니다.
- 날짜 및 숫자 필드를 필터링하려면 `>`, `>=`, `<`, `<=` 및 `..` 범위 쿼리를 사용합니다. 예: `target:2022-03-01..2022-03-15` 자세한 내용은 “[검색 구문 이해](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)”를 참조하세요. {% ifversion projects-v2-tasklists %}
- 지정된 문제로 추적된 문제를 필터링하려면 를 사용하고 `tracked-by:"<OWNER>/<REPO>#<ISSUE NUMBER>"` 를 리포지토리 소유자, `<REPO>` 리포지토리 이름 및 `<ISSUE NUMBER>` 문제 번호로 바꿉 `<OWNER>` 다. {% endif %}
