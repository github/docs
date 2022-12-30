---
ms.openlocfilehash: 32ab126dadd891784d769bd869cf563c6783aedc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067270"
---
키 | 형식 | 설명
----|------|-------------
`action`|`string` | 실행된 동작. 다음 중 하나일 수 있습니다. <ul><li> `created` - 새 검사 실행이 생성되었습니다.</li><li> `completed` - 검사 실행의 `status`가 `completed`입니다.</li><li> `rerequested` - 누군가가 끌어오기 요청 UI에서 검사 실행을 다시 실행하도록 요청했습니다. GitHub UI에 대한 자세한 내용은 “[상태 검사 정보](/articles/about-status-checks#checks)”를 참조하세요. `rerequested` 작업을 받은 경우 [새 검사 실행을 만들어야](/rest/reference/checks#create-a-check-run) 합니다. 누군가가 검사를 다시 실행하도록 요청한 {% data variables.product.prodname_github_app %}만 `rerequested` 페이로드를 받게 됩니다.</li><li> `requested_action` - 누군가가 앱에서 제공한 작업이 수행되도록 요청했습니다. 누군가가 작업을 수행하도록 요청한 {% data variables.product.prodname_github_app %}만 `requested_action` 페이로드를 받게 됩니다. 검사 실행 및 요청된 작업에 대한 자세한 내용은 “[검사 실행 및 요청된 작업](/rest/reference/checks#check-runs-and-requested-actions)”을 참조하세요.</li></ul>
`check_run`|`object` | [check_run](/rest/reference/checks#get-a-check-run)입니다.
`check_run[status]`|`string` | 검사 실행의 현재 상태입니다. `queued`, `in_progress` 또는 `completed`일 수 있습니다.
`check_run[conclusion]`|`string` | 완료된 검사 실행의 결과입니다. `success`, `failure`, `neutral`, `cancelled`, `timed_out`, `action_required` 또는 `stale` 중 하나일 수 있습니다. 검사 실행이 `completed` 상태가 될 때까지 이 값은 `null`입니다.
`check_run[name]`|`string` | 검사 실행의 이름입니다.
`check_run[check_suite][id]`|`integer` | 이 검사 실행이 속해 있는 검사 도구 모음의 ID입니다.
`check_run[check_suite][pull_requests]`|`array`| 이 검사 도구 모음과 일치하는 끌어오기 요청의 배열입니다. 동일한 `head_branch`가 있는 경우 끌어오기 요청이 검사 도구 모음과 일치합니다.<br/><br/>**참고:**<ul><li>후속 푸시가 PR에 수행된 경우 검사 도구 모음의 `head_sha`가 끌어오기 요청의 `sha`와 다를 수 있습니다.</li><li>검사 도구 모음의 `head_branch`가 포크된 리포지토리에 있으면 `null`이 되고 `pull_requests` 배열이 비어 있습니다.</li></ul>
`check_run[check_suite][deployment]`|`object`| 리포지토리 환경에 대한 배포입니다. 검사 실행이 환경을 참조하는 {% data variables.product.prodname_actions %} 워크플로 작업에서 생성된 경우에만 채워집니다.
`requested_action`|`object` | 사용자가 요청한 작업입니다.
`requested_action[identifier]`|`string` | 사용자가 요청한 작업의 통합자 참조입니다.
