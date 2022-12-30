---
ms.openlocfilehash: 67fd6cd7e895b7e121c0972702473305fc560b24
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147116195"
---
키 | 형식 | 설명
----|------|-------------
`action`|`string` | 실행된 동작. 다음 값 중 하나일 수 있습니다.<ul><li>`completed` - 확인 도구 모음의 모든 확인 실행이 완료되었습니다.</li><li>`requested` - 새 코드가 앱의 리포지토리에 푸시될 때 발생합니다. `requested` 작업 이벤트를 받은 경우 [새 검사 실행을 만들어야](/rest/reference/checks#create-a-check-run) 합니다.</li><li>`rerequested` - 누군가가 끌어오기 요청 UI에서 전체 검사 도구 모음을 다시 실행하도록 요청할 때 발생합니다. `rerequested` 작업 이벤트를 받은 경우 [새 검사 실행을 만들어야](/rest/reference/checks#create-a-check-run) 합니다. GitHub UI에 대한 자세한 내용은 “[상태 검사 정보](/articles/about-status-checks#checks)”를 참조하세요.</li></ul>
`check_suite`|`object` | [check_suite](/rest/reference/checks#suites).
`check_suite[head_branch]`|`string` | 변경 내용이 있는 헤드 분기 이름입니다.
`check_suite[head_sha]`|`string` | 이 검사 도구 모음에 대한 가장 최근 커밋의 SHA입니다.
`check_suite[status]`|`string` | 검사 도구 모음의 일부인 모든 검사 실행에 대한 요약 상태입니다. `queued`, `requested`, `in_progress` 또는 `completed`일 수 있습니다.
`check_suite[conclusion]`|`string`| 검사 도구 모음의 일부인 모든 검사 실행에 대한 요약 결론입니다. `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` 또는 `stale` 중 하나일 수 있습니다. 검사 실행이 `completed` 상태가 될 때까지 이 값은 `null`입니다.
`check_suite[url]`|`string` | Check Suite API 리소스를 가리키는 URL입니다.
`check_suite[pull_requests]`|`array`| 이 확인 도구 모음과 일치하는 끌어오기 요청의 배열입니다. 동일한 `head_branch`가 있는 경우 끌어오기 요청이 검사 도구 모음과 일치합니다.<br/><br/>**참고:**<ul><li>후속 푸시가 PR에 수행된 경우 검사 도구 모음의 `head_sha`가 끌어오기 요청의 `sha`와 다를 수 있습니다.</li><li>검사 도구 모음의 `head_branch`가 포크된 리포지토리에 있으면 `null`이 되고 `pull_requests` 배열이 비어 있습니다.</li></ul>
