---
title: Git 및 GitHub 시작 할당 사용
intro: 'Git 및 {% data variables.product.company_short %} 시작 과제를 사용하여 학생들에게 Git 및 {% data variables.product.company_short %} 기본 사항에 대한 개요를 제공할 수 있습니다.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can use Git & {% data variables.product.company_short %} starter assignments. {% data reusables.classroom.classroom-admins-link %}'
redirect_from:
  - /education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment
shortTitle: Starter assignment
ms.openlocfilehash: fa4c3e648efee4e73a9ab3fc9e2d99897a09c9f3
ms.sourcegitcommit: bafb4fe4c8c086a510eafee6e54a2d172fd3a01b
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/16/2022
ms.locfileid: '148046573'
---
Git & {% data variables.product.company_short %} 시작 할당은 Git 및 {% data variables.product.company_short %}의 기본 사항을 요약하고 특정 항목에 대해 자세히 알아볼 수 있는 리소스에 학생을 연결하는 미리 만들어진 과정입니다.

## 필수 조건

{% data reusables.classroom.assignments-classroom-prerequisite %}

## 시작 과제 만들기

### 클래스룸에 기존 과제가 없는 경우

1. {% data variables.product.prodname_classroom_with_url %}에 로그인합니다.
2. 클래스룸으로 이동합니다.
3. {% octicon "repo" aria-label="The repo icon" %} **할당** 탭에서 **시작 할당 사용** 을 클릭합니다.

<div class="procedural-image-wrapper">
  <img alt="Creating your first assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-create-first-assignment.png">
</div>

### 클래스룸에 이미 기존 과제가 있는 경우

1. {% data variables.product.prodname_classroom_with_url %}에 로그인합니다.
2. 클래스룸으로 이동합니다.
3. {% octicon "repo" aria-label="The repo icon" %} **할당** 탭에서 파란색 배너의 링크를 클릭합니다.

<div class="procedural-image-wrapper">
  <img alt="The 'New assignment' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-new-starter-assignment-button.png">
</div>

## 과제의 기본 사항 설정

시작 과정을 조직으로 가져오고, 과제 이름을 지정하고, 마감일을 할당할지 여부를 결정하고, 과제 리포지토리의 가시성을 선택합니다.

- [필수 구성 요소](#prerequisites)
- [시작 과제 만들기](#creating-the-starter-assignment)
  - [클래스룸에 기존 과제가 없는 경우](#if-there-are-no-existing-assignments-in-the-classroom)
  - [클래스룸에 이미 기존 과제가 있는 경우](#if-there-already-are-existing-assignments-in-the-classroom)
- [과제의 기본 사항 설정](#setting-up-the-basics-for-an-assignment)
  - [과제 가져오기](#importing-the-assignment)
  - [과제 이름 지정](#naming-the-assignment)
  - [과제 마감일 할당](#assigning-a-deadline-for-an-assignment)
  - [과제 리포지토리의 표시 유형 선택](#choosing-a-visibility-for-assignment-repositories)
- [과제에 학생 초대](#inviting-students-to-an-assignment)
- [다음 단계](#next-steps)
- [추가 참고 자료](#further-reading)

### 과제 가져오기

먼저 Git & {% data variables.product.product_name %} 시작 할당을 조직으로 가져와야 합니다.

<div class="procedural-image-wrapper">
  <img alt="The `Import the assignment` button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-import-starter-assignment.png">
</div>

### 과제 이름 지정

개별 과제의 경우 {% data variables.product.prodname_classroom %}에서 리포지토리 접두사 및 학생의 {% data variables.product.product_name %} 사용자 이름으로 리포지토리 이름을 지정합니다. 기본적으로 리포지토리 접두사는 과제 제목입니다. 예를 들어 과제 이름을 “assignment-1”로 지정하고 {% data variables.product.product_name %}에서 학생의 사용자 이름이 @octocat이면 @octocat에 대한 과제 리포지토리의 이름은 `assignment-1-octocat`가 됩니다.

{% data reusables.classroom.assignments-type-a-title %}

### 과제 마감일 할당

{% data reusables.classroom.assignments-guide-assign-a-deadline %}

### 과제 리포지토리의 표시 유형 선택

할당에 대한 리포지토리는 퍼블릭 또는 프라이빗일 수 있습니다. 프라이빗 리포지토리를 사용하는 경우 학생만 제공한 피드백을 볼 수 있습니다. "리포지토리 표시 유형"에서 표시 유형을 선택합니다.

작업이 완료되면 **계속** 을 클릭합니다. {% data variables.product.prodname_classroom %}이 할당을 만들고 할당 페이지로 이동됩니다.

<div class="procedural-image-wrapper">
  <img alt="'Continue' button" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignments-click-continue-button.png">
</div>

## 과제에 학생 초대

{% data reusables.classroom.assignments-guide-invite-students-to-assignment %}

과제에 대한 **모든 학생** 탭에서 학생이 클래스룸에 참가했으며 과제를 수락하거나 제출했는지 확인할 수 있습니다. {% data reusables.classroom.assignments-to-prevent-submission %}

<div class="procedural-image-wrapper">
  <img alt="Individual assignment" class="procedural-image-wrapper" src="/assets/images/help/classroom/assignment-individual-hero.png">
</div>

Git & {% data variables.product.company_short %} 시작 과제는 그룹이 아닌 개별 학생에게만 제공됩니다. 과제를 만들면 학생이 과제에 대한 작업을 시작할 수 있습니다.

## 다음 단계

- 과정에 맞게 추가 과제를 사용자 지정합니다. 자세한 내용은 "[개별 과제 만들기](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)", "[그룹 과제 만들기"](/education/manage-coursework-with-github-classroom/create-a-group-assignment) 및 [과제 재사용](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)을 참조하세요.

## 추가 참고 자료

- “[교사용 {% data variables.product.prodname_global_campus %}](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers)”
- "[학습 관리 시스템 과정을 교실에 연결](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom)"
