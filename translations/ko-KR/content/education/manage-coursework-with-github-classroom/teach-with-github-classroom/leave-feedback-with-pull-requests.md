---
title: 끌어오기 요청을 사용하여 피드백 남기기
intro: 각 과제에 대한 리포지토리 내의 특별한 끌어오기 요청에 학생에 대한 피드백을 남길 수 있습니다.
permissions: People with read permissions to a repository can leave feedback in a pull request for the repository.
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/leaving-feedback-in-github
  - /education/manage-coursework-with-github-classroom/leave-feedback-with-pull-requests
shortTitle: Pull requests
ms.openlocfilehash: 6315904aaaa02acc66249039e99a402b455a8871
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119532'
---
## 과제에 대한 피드백 끌어오기 요청 정보

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

과제에 대한 피드백에 대한 끌어오기 요청을 사용하도록 설정하면 {% data variables.product.prodname_classroom %}은 각 학생 또는 팀의 과제 리포지토리에 **피드백** 이라는 특수 끌어오기 요청을 만듭니다. 끌어오기 요청은 학생이 과제 리포지토리의 기본 분기에 푸시한 모든 커밋을 자동으로 표시합니다.

## 필수 조건

피드백 끌어오기 요청을 만들고 액세스하려면 과제를 만들 때 피드백 끌어오기 요청을 사용하도록 설정해야 합니다. {% data reusables.classroom.for-more-information-about-assignment-creation %}

## 과제에 대한 끌어오기 요청에 피드백 남기기

{% data reusables.classroom.sign-into-github-classroom %}
1. 클래스룸 목록에서 검토할 과제가 있는 클래스룸을 클릭합니다.
  ![조직 클래스룸 목록에 있는 클래스룸](/assets/images/help/classroom/click-classroom-in-list.png) {% data reusables.classroom.click-assignment-in-list %}
1. 제출 오른쪽에서 **검토** 를 클릭합니다.
  ![과제 제출 목록에 있는 과제 검토 단추](/assets/images/help/classroom/assignments-click-review-button.png)
1. 끌어오기 요청을 검토합니다. 자세한 내용은 “[끌어오기 요청에 대한 주석 처리](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)”를 참조하세요.

## 추가 참고 자료

- "[IDE와 {% data variables.product.prodname_classroom %} 통합"](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)
