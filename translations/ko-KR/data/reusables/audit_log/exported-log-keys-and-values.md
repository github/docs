---
ms.openlocfilehash: 52ffa15d88eb667d35b6e92b4e5adfa3146e9e56
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145113671"
---
로그를 내보낸 후 결과 파일에 다음 키와 값이 표시됩니다.

| 키 | 예제 값
|------------|-------------
| `action` | team.create
| `actor` | octocat
| `user` | codertocat
| `actor_location.country_code` | US
| `org` | octo-org
| `repo` | octo-org/documentation
| `created_at` | 1429548104000(타임스탬프는 Epoch 이후의 시간을 밀리초 단위로 표시합니다.)
| `data.email` | octocat@nowhere.com
| `data.hook_id` | 245
| `data.events` | ["issues", "issue_comment", "pull_request", "pull_request_review_comment"]
| `data.events_were` | ["push", "pull_request", "issues"]
| `data.target_login` | octocat
| `data.old_user` | hubot
| `data.team` | octo-org/엔지니어링
