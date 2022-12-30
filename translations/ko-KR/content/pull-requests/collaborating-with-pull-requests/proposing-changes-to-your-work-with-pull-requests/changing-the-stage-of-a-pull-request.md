---
title: 끌어오기 요청의 스테이지 변경
intro: 초안 끌어오기 요청을 검토를 위해 준비로 표시하거나 끌어오기 요청을 초안으로 변환할 수 있습니다.
permissions: People with write permissions to a repository and pull request authors can change the stage of a pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
  - /articles/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Change the state
ms.openlocfilehash: 5ef2845e57518c4b66f13a804919f7bdea327040
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883297'
---
## 검토 준비로 끌어오기 요청 표시

{% data reusables.pull_requests.mark-ready-review %}

{% tip %}

**팁**: {% data variables.product.prodname_cli %}를 사용하여 끌어오기 요청을 검토 준비가 되었다고 표시할 수도 있습니다. 자세한 내용은 {% data variables.product.prodname_cli %} 설명서의 “[`gh pr ready`](https://cli.github.com/manual/gh_pr_ready)”를 참조하세요.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. “끌어오기 요청” 목록에서 검토할 준비가 되었다고 표시하려는 끌어오기 요청을 클릭합니다.
3. 병합 상자에서 **검토 준비** 를 클릭합니다.
  ![검토 준비 단추](/assets/images/help/pull_requests/ready-for-review-button.png)

## 끌어오기 요청을 초안으로 변환

언제든지 끌어오기 요청을 초안으로 변환할 수 있습니다. 예를 들어 실수로 초안 대신 끌어오기 요청을 열거나 처리해야 하는 끌어오기 요청에 대한 피드백을 받은 경우 끌어오기 요청을 초안으로 변환하여 추가 변경이 필요함을 나타낼 수 있습니다. 끌어오기 요청을 다시 검토할 준비가 되었다고 표시할 때까지 아무도 끌어오기 요청을 병합할 수 없습니다. 끌어오기 요청을 초안으로 변환할 때 끌어오기 요청에 대한 알림을 이미 구독한 사용자는 구독이 취소되지 않습니다.

{% data reusables.repositories.sidebar-pr %}
2. “끌어오기 요청” 목록에서 초안으로 변환하려는 끌어오기 요청을 클릭합니다.
3. 오른쪽 사이드바의 “검토자”에서 **초안으로 변환** 을 클릭합니다.
  ![초안으로 변환 링크](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. **초안으로 변환** 을 클릭합니다.
  ![초안 확인으로 변환](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

## 추가 참고 자료

- “[끌어오기 요청 정보](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)”
