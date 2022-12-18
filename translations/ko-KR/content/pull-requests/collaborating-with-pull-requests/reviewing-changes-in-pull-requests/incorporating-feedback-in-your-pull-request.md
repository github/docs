---
title: 끌어오기 요청에 피드백 통합
intro: 검토자가 끌어오기 요청에서 변경 내용을 제안하면 변경 내용을 끌어오기 요청에 자동으로 통합하거나 이슈를 열어 범위를 벗어난 제안을 추적할 수 있습니다.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
  - /articles/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/incorporating-feedback-in-your-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Incorporate feedback
ms.openlocfilehash: b94c7ddc682b1e53077770877140eb2a218a19de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145139520'
---
## 제안된 변경 내용 적용

다른 사용자가 끌어오기 요청에 대한 특정 변경 내용을 제안할 수 있습니다. 리포지토리에 대한 쓰기 권한이 있는 경우 끌어오기 요청에서 직접 이러한 제안된 변경 내용을 적용할 수 있습니다. 포크에서 끌어오기 요청이 만들어졌고 작성자가 유지 관리자의 편집을 허용한 경우, 업스트림 리포지토리에 대한 쓰기 권한이 있으면 제안된 변경 내용을 적용할 수도 있습니다. 자세한 내용은 “[끌어오기 요청에 대한 주석 추가](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)” 및 “[포크에서 만든 끌어오기 요청 분기에 대한 변경 허용](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)”을 참조하세요.

둘 이상의 제안된 변경 내용을 단일 커밋에 신속하게 통합하려면 제안된 변경 내용을 배치로 적용할 수도 있습니다. 하나의 제안된 변경 내용 또는 제안된 변경 내용의 배치를 적용하면 끌어오기 요청의 비교 분기에 단일 커밋이 만들어집니다.

커밋에 포함된 변경 내용을 제안한 각 사용자는 커밋의 공동 작성자가 됩니다. 제안된 변경 내용을 적용하는 사람은 공동 작성자이자 커밋한 사람이 됩니다. Git의 커밋 용어에 대한 자세한 내용은 [Pro Git](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History) 설명서 사이트에서 “_Git 기본 사항 - 커밋 기록 보기_”를 참조하세요.

{% data reusables.repositories.sidebar-pr %}
2. 끌어오기 요청 목록에서, 제안된 변경 내용을 적용하려는 끌어오기 요청을 클릭합니다.
3. 적용하려는 첫 번째 제안된 변경 내용으로 이동합니다.
    - 자체 커밋에서 변경 내용을 적용하려면 **제안 커밋** 을 클릭합니다.
  ![제안 커밋 단추](/assets/images/help/pull_requests/commit-suggestion-button.png)
    - 변경 내용의 배치에 제안을 추가하려면 **배치에 제안 추가** 를 클릭합니다. 단일 커밋에 포함하려는 제안된 변경 내용을 계속 추가합니다. 제안된 변경 내용 추가를 마쳤으면 **제안 커밋** 을 클릭합니다.
  ![배치에 제안 추가 단추](/assets/images/help/pull_requests/add-suggestion-to-batch.png)
4. 커밋 메시지 필드에, 파일에 대한 변경 내용을 설명하는 짧고 의미 있는 커밋 메시지를 입력합니다.
![커밋 메시지 필드](/assets/images/help/pull_requests/suggested-change-commit-message-field.png)
5. **변경 내용 커밋** 을 클릭합니다.
![변경 내용 커밋 단추](/assets/images/help/pull_requests/commit-changes-button.png)

## 검토 다시 요청

{% data reusables.pull_requests.re-request-review %}

## 범위를 벗어난 제안에 대한 이슈 열기

누군가가 끌어오기 요청의 변경 내용을 제안하는데 변경 내용이 끌어오기 요청의 범위를 벗어난 경우, 새 이슈를 열어 피드백을 추적할 수 있습니다. 자세한 내용은 “[주석에서 이슈 열기](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)”를 참조하세요.

## 추가 참고 자료

- “[끌어오기 요청 검토 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)”
- “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”
- “[끌어오기 요청에 대한 주석 추가](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)”
- “[끌어오기 요청 검토 요청하기](/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)”
- “[주석에서 이슈 열기](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)”
