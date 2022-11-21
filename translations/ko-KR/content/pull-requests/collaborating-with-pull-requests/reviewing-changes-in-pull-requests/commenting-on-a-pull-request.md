---
title: 끌어오기 요청에 대한 주석 추가
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
  - /articles/adding-commit-comments
  - /articles/commenting-on-the-diff-of-a-pull-request
  - /articles/commenting-on-differences-between-files
  - /articles/commenting-on-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request
intro: 리포지토리에서 끌어오기 요청을 연 후 협력자 또는 팀 구성원은 지정된 두 분기 간의 파일 비교에 대해 주석을 달거나 프로젝트 전체에 대한 일반적인 주석을 남길 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Comment on a PR
ms.openlocfilehash: eb1b80fa6088bc083f0b2006a2c894a820cd6c10
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578958'
---
## 끌어오기 요청 주석 설명

끌어오기 요청의 **대화** 탭에 주석을 달고 일반적인 주석, 질문 또는 제안을 남길 수 있습니다. 끌어오기 요청 작성자가 주석에서 직접 적용할 수 있는 변경 내용을 제안할 수도 있습니다.

![끌어오기 요청 대화](/assets/images/help/pull_requests/conversation.png)

끌어오기 요청의 **파일 변경 탭** 에 있는 파일의 특정 섹션에 대해 개별 줄 주석 형식 또는 [끌어오기 요청 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)의 일부로 주석을 달 수도 있습니다. 줄 주석을 추가하는 것은 구현에 대한 질문을 논의하거나 작성자에게 피드백을 제공하는 좋은 방법입니다.

끌어오기 요청 검토에 줄 주석을 추가하는 방법에 대한 자세한 내용은 “[끌어오기 요청에서 제안된 변경 내용 검토](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)”를 참조하세요.

{% note %}

**참고:** 메일을 통해 끌어오기 요청에 회신하면 주석이 **대화** 탭에 추가되고 끌어오기 요청에 포함되지 않습니다.

{% endnote %}

기존 줄 주석에 회신하려면 **대화** 탭 또는 **변경된 파일** 탭의 주석으로 이동하여 아래에 추가 줄 주석을 추가해야 합니다.

{% tip %}

**팁:**
- 끌어오기 요청 주석은 @mentions, 이모지, 참조와 같은 {% data variables.product.product_name %}에 대한 일반 주석과 동일한 [형식 지정](/categories/writing-on-github)을 지원합니다.
- **변경된 파일** 탭에서 끌어오기 요청의 주석에 대한 반응을 추가할 수 있습니다.

{% endtip %}

## 끌어오기 요청에 줄 주석 추가

{% data reusables.repositories.sidebar-pr %}
2. 끌어오기 요청 목록에서 줄 주석을 남기려는 끌어오기 요청을 클릭합니다.
{% data reusables.repositories.changed-files %} {% data reusables.repositories.start-line-comment %} {% data reusables.repositories.type-line-comment %} {% data reusables.repositories.suggest-changes %}
5. 완료되면 **단일 주석 추가** 를 클릭합니다.
  ![인라인 주석 창](/assets/images/help/commits/inline-comment.png)

끌어오기 요청 또는 리포지토리를 보는 모든 사용자는 주석 알림을 받게 됩니다.

{% data reusables.pull_requests.resolving-conversations %}

## 추가 참고 자료

- “[GitHub에 쓰기](/github/writing-on-github)” {% ifversion fpt or ghec %}- “[남용 또는 스팸 신고](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)” {% endif %}
