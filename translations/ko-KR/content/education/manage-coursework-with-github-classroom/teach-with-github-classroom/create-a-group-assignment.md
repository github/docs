---
title: 그룹 과제 만들기
intro: 과정에 참가하는 학생 팀을 위한 공동 작업 과제를 만들 수 있습니다.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can create and manage group assignments for a classroom. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/create-group-assignments
  - /education/manage-coursework-with-github-classroom/create-a-group-assignment
ms.openlocfilehash: ef1db8e95be1e35ae747f5a42d1105205980af32
ms.sourcegitcommit: 04329ee7464efbb558d77d06664e8578cd154d87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/15/2022
ms.locfileid: '148046494'
---
## 그룹 과제 정보

{% data reusables.classroom.assignments-group-definition %} 학생은 전문 개발자 팀처럼 리포지토리에서 그룹 과제를 함께 작업할 수 있습니다.

그룹 과제를 수락한 학생은 새 팀을 만들거나 기존 팀에 참가할 수 있습니다. {% data variables.product.prodname_classroom %}은 과제를 수행하는 팀은 하나의 집합으로 저장합니다. 과제를 만들 때 특정 과제에 대한 팀 집합의 이름을 지정할 수 있으며, 이후 과제에서 이 팀 집합을 다시 사용할 수 있습니다.

{% data reusables.classroom.classroom-creates-group-repositories %}

{% data reusables.classroom.about-assignments %}

하나의 과제에 포함할 수 있는 팀 수와 각 팀이 가질 수 있는 구성원 수를 결정할 수 있습니다. 학생이 과제를 위해 생성하는 각 팀은 {% data variables.product.product_name %}의 조직 내 팀이 됩니다. 팀의 표시 여부는 비밀입니다. {% data variables.product.product_name %}에서 만든 팀은 {% data variables.product.prodname_classroom %}에 표시되지 않습니다. 자세한 내용은 “[팀 정보](/organizations/organizing-members-into-teams/about-teams)”를 참조하세요.

그룹 과제를 만드는 비디오 데모는 "[{% data variables.product.prodname_classroom %} 설정 기본 사항](/education/manage-coursework-with-github-classroom/basics-of-setting-up-github-classroom)"을 참조하세요.

{% data reusables.classroom.reuse-assignment-link %}

## 필수 조건

{% data reusables.classroom.assignments-classroom-prerequisite %}

## 과제 만들기

{% data reusables.classroom.assignments-guide-create-the-assignment %}

## 과제의 기본 사항 설정

과제 이름을 지정하고, 마감일 할당 여부를 결정하고, 팀을 정의하고, 과제 리포지토리의 표시 유형을 선택합니다.

- [과제 이름 지정](#naming-an-assignment)
- [과제 마감일 할당](#assigning-a-deadline-for-an-assignment)
- [과제 유형 선택](#choosing-an-assignment-type)
- [과제를 수행할 팀 정의](#defining-teams-for-an-assignment)
- [과제 리포지토리의 표시 유형 선택](#choosing-a-visibility-for-assignment-repositories)

### 과제 이름 지정

그룹 과제의 경우 {% data variables.product.prodname_classroom %}은 리포지토리 접두사 및 팀 이름을 기준으로 리포지토리의 이름을 지정합니다. 기본적으로 리포지토리 접두사는 과제 제목입니다. 예를 들어 과제 이름을 "assignment-1"로 지정했고 {% data variables.product.product_name %}에서 팀의 이름이 "student-team"이면, 팀의 구성원에 대한 과제 리포지토리의 이름은 `assignment-1-student-team`이 됩니다.

{% data reusables.classroom.assignments-type-a-title %}

### 과제 마감일 할당

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### 과제 유형 선택

"개별 또는 그룹 과제"에서 드롭다운 메뉴를 선택하고 **그룹 과제** 를 클릭합니다. 과제를 만든 후에는 과제 유형을 변경할 수 없습니다. 개별 할당을 만들고 싶다면 “[개별 할당 만들기](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)”를 참조하세요.

### 과제를 수행할 팀 정의

클래스룸에 대한 그룹 과제를 이미 만들었다면 새 과제에 팀 집합을 다시 사용할 수 있습니다. 학생이 과제를 위해 만든 팀을 이용해 새 집합을 만들려면 집합의 이름을 입력합니다. 필요한 경우 팀 구성원의 최대 수와 총 팀 수를 입력합니다.

{% tip %}

**팁**:

- 집합 이름에 팀 집합 세부 정보를 포함하는 것이 좋습니다. 예를 들어 하나의 과제에 팀 집합을 사용하려는 경우에는 과제의 이름을 집합의 이름으로 지정하세요. 한 학기 또는 과정 전체에서 집합을 다시 사용하려면 학기 또는 과정의 이름을 집합 이름으로 지정하세요.

- 특정 팀에 학생을 할당하려면 학생에게 팀의 이름을 지정하고 구성원 목록을 제공하세요.

{% endtip %}

![그룹 과제에 참여하는 팀의 매개 변수](/assets/images/help/classroom/assignments-define-teams.png)

### 과제 리포지토리의 표시 유형 선택

{% data reusables.classroom.assignments-guide-choose-visibility %}

{% data reusables.classroom.assignments-guide-click-continue-after-basics %}

## 시작 코드 추가 및 개발 환경 구성

{% data reusables.classroom.assignments-guide-intro-for-environment %}

- [템플릿 리포지토리 선택](#choosing-a-template-repository)
- [IDE(통합 개발 환경) 선택](#choosing-an-integrated-development-environment-ide)

### 템플릿 리포지토리 선택

기본적으로 새 과제는 학생이 만드는 각 팀에 대해 빈 리포지토리를 만듭니다. {% data reusables.classroom.you-can-choose-a-template-repository %} 

{% data reusables.classroom.assignments-guide-choose-template-repository %}

### IDE(통합 개발 환경) 선택

{% data reusables.classroom.about-online-ides %} 자세한 내용은 “[IDE와 {% data variables.product.prodname_classroom %} 통합](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide)”을 참조하세요.

{% data reusables.classroom.classroom-codespaces-link %}

{% data reusables.classroom.assignments-guide-choose-an-online-ide %}

{% data reusables.classroom.assignments-guide-click-continue-after-starter-code-and-feedback %}

## 사용자 의견 제공

필요하다면 자동으로 과제를 채점하고 팀과 각 제출을 논의할 공간을 만들 수 있습니다.

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

과제에 대한 **팀** 탭에서 작업 중이거나 과제를 제출한 팀을 볼 수 있습니다. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Group assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-group-hero.png">
</div>

## 학생의 진행 상황 모니터링
과제 개요 페이지에는 과제 수락 및 팀 진행 상황 관련 정보가 표시됩니다. 과제 구성에 따라 다른 요약 정보가 표시될 수 있습니다.

- **총 팀**: 생성된 팀의 수입니다.
- **명단에 있는 학생**: 클래스룸 명단에 있는 학생 수입니다.
- **팀에 없는 학생**: 클래스룸 명단에 있지만 아직 팀에 합류하지 않은 학생의 수입니다.
-  **수락한 팀**: 이 과제를 수락한 팀의 수입니다.
-  **과제 제출**: 과제를 제출한 팀 수입니다. 제출은 과제 마감일에 트리거됩니다.
-  **통과한 팀**: 현재 이 과제에 대한 자동 채점 테스트를 통과한 팀 수입니다.

## 다음 단계

- 과제를 만들고 학생이 팀을 구성하면, 팀 구성원은 Git 및 {% data variables.product.product_name %}의 기능을 사용하여 과제 작업을 시작할 수 있습니다. 학생은 리포지토리를 복제하고, 커밋을 푸시하고, 분기를 관리하고, 끌어오기 요청을 만들어 검토하고, 병합 충돌을 해결하고, 이슈가 있는 변경 내용을 논의할 수 있습니다. 사용자와 팀 모두 리포지토리에 대한 커밋 기록을 검토할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_dotcom %} 시작](/github/getting-started-with-github)", "[리포지토리](/repositories)", "[Git 사용](/github/getting-started-with-github/using-git)" 및 "[문제 및 끌어오기 요청에 대한 공동 작업](/github/collaborating-with-issues-and-pull-requests)"과 {% data variables.product.prodname_learning %}에서 제공하는 [병합 충돌 해결](https://github.com/skills/resolve-merge-conflicts)에 관한 무료 과정을 참조하세요.

- 팀이 과제를 완료하면 리포지토리의 파일을 검토하거나 리포지토리의 기록 및 시각화를 검토하여 팀의 공동 작업 방식을 더 잘 이해할 수 있습니다. 자세한 내용은 “[그래프를 사용하여 리포지토리 데이터 시각화](/github/visualizing-repository-data-with-graphs)”를 참조하세요.

- 끌어오기 요청의 개별 커밋 또는 줄에 주석을 달아 과제에 대한 피드백을 제공할 수 있습니다. 자세한 내용은 “[끌어오기 요청에 주석 달기](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request)” 및 “[코드에서 이슈 열기](/github/managing-your-work-on-github/opening-an-issue-from-code)”를 참조하세요. 일반적인 오류에 대한 피드백을 제공하기 위해 저장된 회신을 만드는 방법에 대한 자세한 내용은 “[저장된 회신 정보](/github/writing-on-github/about-saved-replies)”를 참조하세요.

## 추가 참고 자료

- [교사용 {% data variables.product.prodname_global_campus %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)
- "[학습 관리 시스템 과정을 교실에 연결](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)"
- {% data variables.product.prodname_education %} 커뮤니티의 [그룹 과제에서 기존 팀을 사용하나요?](https://education.github.community/t/using-existing-teams-in-group-assignments/6999)
