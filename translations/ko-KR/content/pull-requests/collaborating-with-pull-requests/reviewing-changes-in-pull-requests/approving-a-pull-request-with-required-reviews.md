---
title: 필수 검토를 사용하여 끌어오기 요청 승인
intro: '리포지토리에 검토가 필요한 경우 병합하기 전에 끌어오기 요청에 리포지토리에 쓰기 또는 관리자 권한이 있는 사용자에게서 받은 특정 수의 승인 검토가 있어야 합니다. '
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
  - /articles/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-issues-and-pull-requests/approving-a-pull-request-with-required-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/approving-a-pull-request-with-required-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Required reviews
ms.openlocfilehash: 4554ac9e9b9d0c0f184e0b6b60e732806d2f4a17
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145139575'
---
필수 검토에 대한 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”를 참조하세요.

승인하기 전에 끌어오기 요청에 대한 주석을 추가하거나, 변경 내용을 승인하거나, 개선 사항을 요청할 수 있습니다. 자세한 내용은 “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”를 참조하세요.

{% data reusables.search.requested_reviews_search %}

{% tip %}

**팁**: 승인한 끌어오기 요청이 크게 변경된 경우 검토를 해제할 수 있습니다. 끌어오기 요청은 병합되기 전에 새 검토가 필요합니다. 자세한 내용은 “[끌어오기 요청 검토 해제](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)”를 참조하세요.

{% endtip %}

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
4. 끌어오기 요청의 변경 내용을 검토하고 필요에 따라 [특정 줄에 주석을 추가](/articles/reviewing-proposed-changes-in-a-pull-request/#starting-a-review)합니다.
{% data reusables.repositories.review-changes %} {% data reusables.repositories.review-summary-comment %}
7. **Approve**(승인)를 선택하여 끌어오기 요청에 제안된 변경 내용 병합을 승인합니다.
{% data reusables.repositories.submit-review %}

{% data reusables.repositories.request-changes-tips %}

## 추가 참고 자료

- “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”
- “[끌어오기 요청에 대한 주석 추가](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)”
