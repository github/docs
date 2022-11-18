---
title: 개별 과제 만들기
intro: 과정에서 학생이 개별적으로 완료할 수 있도록 과제를 만들 수 있습니다.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage individual assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/creating-an-individual-assignment
  - /education/manage-coursework-with-github-classroom/create-an-individual-assignment
shortTitle: Individual assignment
ms.openlocfilehash: c6e0d5dd39181545e1bb913360b1f46cb2b19d6e
ms.sourcegitcommit: 04329ee7464efbb558d77d06664e8578cd154d87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/15/2022
ms.locfileid: '148046486'
---
## 개별 과제 정보

{% data reusables.classroom.assignments-individual-definition %}

{% data reusables.classroom.classroom-creates-individual-repositories %}

{% data reusables.classroom.about-assignments %}

개별 과제를 만드는 비디오 데모는 “[{% data variables.product.prodname_classroom %} 설정 기본 사항](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)”을 참조하세요.

{% data reusables.classroom.reuse-assignment-link %}

## 필수 조건

{% data reusables.classroom.assignments-classroom-prerequisite %}

## 과제 만들기

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## 과제의 기본 사항 설정

과제 이름을 지정하고, 마감일을 할당할지 여부를 결정하고, 과제 리포지토리의 표시 유형을 선택합니다.

- [과제 이름 지정](#naming-an-assignment)
- [과제 마감일 할당](#assigning-a-deadline-for-an-assignment)
- [과제 유형 선택](#choosing-an-assignment-type)
- [과제 리포지토리의 표시 유형 선택](#choosing-a-visibility-for-assignment-repositories)

### 과제 이름 지정

개별 과제의 경우 {% data variables.product.prodname_classroom %}에서 리포지토리 접두사 및 학생의 {% data variables.product.product_name %} 사용자 이름으로 리포지토리 이름을 지정합니다. 기본적으로 리포지토리 접두사는 과제 제목입니다. 예를 들어 과제 이름을 “assignment-1”로 지정하고 {% data variables.product.product_name %}에서 학생의 사용자 이름이 @octocat이면 @octocat에 대한 과제 리포지토리의 이름은 `assignment-1-octocat`가 됩니다.

{% data reusables.classroom.assignments-type-a-title %}

### 과제 마감일 할당

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### 과제 유형 선택

“개별 또는 그룹 과제”에서 드롭다운 메뉴를 선택하고 **개별 과제** 를 클릭합니다. 과제를 만든 후에는 과제 유형을 변경할 수 없습니다. 그룹 과제를 만들려면 “[그룹 과제 만들기](/education/manage-coursework-with-github-classroom/create-a-group-assignment)”를 참조하세요.

### 과제 리포지토리의 표시 유형 선택

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## 시작 코드 추가 및 개발 환경 구성

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [템플릿 리포지토리 선택](#choosing-a-template-repository)
- [IDE(통합 개발 환경) 선택](#choosing-an-integrated-development-environment-ide)

### 템플릿 리포지토리 선택

기본적으로 새 과제는 클래스룸 명단에 있는 각 학생에 대한 빈 리포지토리를 만듭니다. {% data reusables.classroom.you-can-choose-a-template-repository %}

{% data reusables.classroom.assignments-guide-choose-template-repository %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

### IDE(통합 개발 환경) 선택

{% data reusables.classroom.about-online-ides %} 자세한 내용은 “[IDE와 {% data variables.product.prodname_classroom %} 통합](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)”을 참조하세요.

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

## 과제에 대한 피드백 제공

필요에 따라 자동으로 과제를 채점하고 학생과 각 제출을 논의할 공간을 만들 수 있습니다.

- [자동으로 과제 테스트](#testing-assignments-automatically)
- [피드백에 대한 끌어오기 요청 만들기](#creating-a-pull-request-for-feedback)

### 자동으로 과제 테스트

{% data reusables.classroom.assignments-guide-using-autograding %}

### 피드백에 대한 끌어오기 요청 만들기

{% data reusables.classroom.you-can-create-a-pull-request-for-feedback %}

{% data reusables.classroom.assignments-guide-create-review-pull-request %}

{% data reusables.classroom.assignments-guide-click-create-assignment-button %}

## 과제에 학생 초대

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

과제에 대한 **클래스룸 명단** 탭에서 학생이 클래스룸에 참가했으며 과제를 수락하거나 제출했는지 확인할 수 있습니다. 이 탭에서 학생의 {% data variables.product.prodname_dotcom %} 별칭을 관련 명단 식별자에 연결하고 그 반대로 연결할 수도 있습니다. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

## 학생의 진행 상황 모니터링
과제 개요 페이지에서는 과제 수락 및 학생 진행 상황에 대한 개요를 제공합니다. 과제 구성에 따라 다른 요약 정보가 표시될 수 있습니다.

- **명단에 있는 학생**: 클래스룸 명단에 있는 학생 수입니다.
- **추가된 학생**: 과제를 수락했으며 명단 식별자와 연결되지 않은 {% data variables.product.prodname_dotcom %} 계정 수입니다.
-  **수락한 학생**: 이 과제를 수락한 계정 수입니다.
-  **과제 제출**: 과제를 제출한 학생 수입니다. 제출은 과제 마감일에 트리거됩니다.
-  **통과한 학생**: 현재 이 과제에 대한 자동 채점 테스트를 통과한 학생 수입니다.

## 다음 단계

- 과제를 만들면 학생이 Git 및 {% data variables.product.product_name %}의 기능을 사용하여 과제 작업을 시작할 수 있습니다. 학생은 리포지토리를 복제하고, 커밋을 푸시하고, 분기를 관리하고, 끌어오기 요청을 만들어 검토하고, 병합 충돌을 해결하고, 이슈가 있는 변경 내용을 논의할 수 있습니다. 사용자와 학생 모두 리포지토리에 대한 커밋 기록을 검토할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 시작](/github/getting-started-with-github)”, “[리포지토리](/repositories)”, “[이슈 및 끌어오기 요청으로 협업](/github/collaborating-with-issues-and-pull-requests)”을 참조하세요.

- 학생이 과제를 완료하면 리포지토리의 파일을 검토하거나 리포지토리의 기록 및 시각화를 검토하여 학생의 작업을 더 잘 이해할 수 있습니다. 자세한 내용은 “[그래프를 사용하여 리포지토리 데이터 시각화](/github/visualizing-repository-data-with-graphs)”를 참조하세요.

- 끌어오기 요청의 개별 커밋 또는 줄에 주석을 달아 과제에 대한 피드백을 제공할 수 있습니다. 자세한 내용은 “[끌어오기 요청에 주석 달기](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)” 및 “[코드에서 이슈 열기](/github/managing-your-work-on-github/opening-an-issue-from-code)”를 참조하세요. 일반적인 오류에 대한 피드백을 제공하기 위해 저장된 회신을 만드는 방법에 대한 자세한 내용은 “[저장된 회신 정보](/github/writing-on-github/about-saved-replies)”를 참조하세요.

## 추가 참고 자료

- “[교사용 {% data variables.product.prodname_global_campus %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)”
- “[{% data variables.product.prodname_classroom %}에 학습 관리 시스템 연결](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)”
