---
title: 클래스룸 관리
intro: '{% data variables.product.prodname_classroom %}을 사용하여 가르치는 각 과정에 대해 교실을 만들고 관리할 수 있습니다.'
permissions: 'Organization owners who are admins for a classroom can manage the classroom for an organization. {% data reusables.classroom.classroom-admins-link %}'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/archive-a-classroom
  - /education/manage-coursework-with-github-classroom/manage-classrooms
ms.openlocfilehash: 74d9a205f1083598c3c6277cd5862e56c628ffeb
ms.sourcegitcommit: 04329ee7464efbb558d77d06664e8578cd154d87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/15/2022
ms.locfileid: '148046502'
---
## 클래스룸 정보

{% data reusables.classroom.about-classrooms %}

![교실](/assets/images/help/classroom/classroom-hero.png)

## 클래스룸 관리 정보

{% data variables.product.prodname_classroom %}은 {% data variables.product.product_name %}의 조직 계정을 사용하여 만든 각 클래스룸에 대한 권한, 관리 및 보안을 관리합니다. 각 조직에는 여러 개의 클래스룸이 있을 수 있습니다.

클래스룸을 만든 후 {% data variables.product.prodname_classroom %}은 TA(보조 교사) 및 관리자를 클래스룸에 초대하라는 메시지를 표시합니다. 각 클래스룸에는 한 명 이상의 관리자가 있을 수 있습니다. 관리자는 교사, TA 또는 {% data variables.product.prodname_classroom %}에서 클래스룸을 제어하려는 다른 과정 관리자일 수 있습니다.

조직 소유자로 {% data variables.product.product_name %}의 개인 계정을 조직에 초대하고 클래스룸의 URL을 공유하여 TA 및 관리자를 클래스룸으로 초대합니다. 조직 소유자는 조직의 모든 클래스룸을 관리할 수 있습니다. 자세한 내용은 "[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)" 및 "[조직에 조인하도록 사용자 초대](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)"를 참조하세요.

클래스룸 사용을 마치면 클래스룸을 보관하고 나중에 클래스룸, 명단 및 과제를 참조하거나 더 이상 클래스룸이 필요하지 않은 경우 클래스룸을 삭제할 수 있습니다. 

{% data reusables.classroom.reuse-assignment-link %}

## 클래스룸 명단 정보

각 클래스룸에는 명단이 있습니다. 명단은 해당 과정에 참여하는 학생의 식별자 목록입니다.

과제에 대한 URL을 학생과 처음 공유하는 경우 학생은 개인 계정으로 {% data variables.product.product_name %}에 로그인하여 개인 계정을 클래스룸의 식별자에 연결해야 합니다. 학생이 개인 계정을 연결하면 명단에서 연결된 개인 계정을 볼 수 있습니다. 학생이 과제를 수락하거나 제출하는 시점도 확인할 수 있습니다.

![클래스룸 명단](/assets/images/help/classroom/roster-hero.png)

## 필수 조건

{% data variables.product.prodname_classroom %}에서 클래스룸을 관리하려면 {% data variables.product.product_name %}에 조직 계정이 있어야 합니다. 자세한 내용은 "[{% data variables.product.company_short %} 계정 유형](/github/getting-started-with-github/types-of-github-accounts#organization-accounts)" 및 "[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)"를 참조하세요.

조직 계정의 클래스룸을 관리하려면 조직의 {% data variables.product.prodname_classroom %}에 대한 OAuth 앱에 권한을 부여해야 합니다. 자세한 내용은 “[OAuth 앱 권한 부여](/github/authenticating-to-github/authorizing-oauth-apps)”를 참조하세요.

## 클래스룸 만들기

{% data reusables.classroom.sign-into-github-classroom %}
1. **새 클래스룸** 을 클릭합니다.
  !["새 클래스룸" 단추](/assets/images/help/classroom/click-new-classroom-button.png) {% data reusables.classroom.guide-create-new-classroom %}

클래스룸을 만든 후에는 학생을 위한 과제 만들기를 시작할 수 있습니다. 자세한 내용은 "[Git 및 {% data variables.product.company_short %} 시작 과제 사용](/education/manage-coursework-with-github-classroom/use-the-git-and-github-starter-assignment)", "[개별 과제 만들기](/education/manage-coursework-with-github-classroom/create-an-individual-assignment)", "[그룹 과제 만들기](/education/manage-coursework-with-github-classroom/create-a-group-assignment)" 또는 "[과제 다시 사용](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/reuse-an-assignment)"을 참조하세요.

## 클래스룸 명단 만들기

해당 과정에 참여하는 학생 명단을 만들 수 있습니다.

해당 과정에 이미 명단이 있는 경우 명단에서 학생을 업데이트하거나 명단을 삭제할 수 있습니다. 자세한 내용은 "[클래스룸 명단에 학생 추가](#adding-students-to-the-roster-for-your-classroom)" 또는 "[클래스룸 명단 삭제](#deleting-a-roster-for-a-classroom)"를 참조하세요.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. {% 데이터 variables.product.prodname_classroom %}을(를) LMS에 연결하고 명단을 가져오려면 LMS 관리자가 먼저 LMS 인스턴스를 등록한 다음 LMS 과정을 교실에 연결해야 합니다. 연결되면 **[가져오기]** 단추를 클릭하여 LMS 코스에서 명단을 가져올 수 있습니다. 자세한 내용은 "[학습 관리 시스템 과정을 교실에 연결"을](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom) 참조하세요.
   
   {% note %}

  **참고:** {% data reusables.classroom.google-classroom-note %}

  {% endnote %}

2. 명단의 학생 식별자를 제공합니다.
     - 학생 식별자가 포함된 파일을 업로드하여 명단을 가져오려면 **CSV 또는 텍스트 파일 업로드** 를 클릭합니다.
     - 명단을 수동으로 만들려면 학생 식별자를 입력합니다.
       ![학생 식별자를 입력하기 위한 텍스트 필드 및 "CSV 또는 텍스트 파일 업로드" 단추](/assets/images/help/classroom/type-or-upload-student-identifiers.png)
3. **명단 만들기** 를 클릭합니다.
  !["명단 만들기" 단추](/assets/images/help/classroom/click-create-roster-button.png)

## 클래스룸 명단에 학생 추가

학생을 명단에 추가하려면 클래스룸에 기존 명단이 있어야 합니다. 명단을 만드는 방법에 대한 자세한 내용은 "[클래스룸 명단 만들기](#creating-a-roster-for-your-classroom)"를 참조하세요.

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. "클래스룸 명단" 오른쪽에서 **학생 업데이트** 를 클릭합니다. 교실을 LMS 과정에 이미 연결한 경우 대신 **동기화 단추가** 표시됩니다. 
  ![학생 목록 위의 "클래스룸 명단" 제목 오른쪽에 있는 "학생 업데이트" 단추](/assets/images/help/classroom/click-update-students-button.png)
1. 지침에 따라 명단에 학생을 추가합니다.
    - LMS에서 학생을 가져오려면 LMS 관리자가 먼저 LMS 인스턴스를 등록한 다음 LMS 과정을 교실에 연결해야 합니다. 연결되면 **동기화** 단추를 클릭할 수 있습니다. 자세한 내용은 "[학습 관리 시스템 과정을 교실에 연결"을](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/connect-a-learning-management-system-course-to-a-classroom) 참조하세요.
        {% note %}

        **참고:** {% data reusables.classroom.google-classroom-note %}

        {% endnote %}
    - 학생을 수동으로 추가하려면 "수동으로 학생 추가"에서 **CSV 또는 텍스트 파일 업로드** 를 클릭하거나 학생의 식별자를 입력한 다음, **명단 항목 추가** 를 클릭합니다.
      ![클래스룸에 학생을 추가하는 방법을 선택하는 모달](/assets/images/help/classroom/classroom-add-students-to-your-roster.png)

## 클래스룸 이름 바꾸기

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. "클래스룸 이름"에서 클래스룸의 새 이름을 입력합니다.
  ![클래스룸 이름을 입력하기 위한 "클래스룸 이름" 아래의 텍스트 필드](/assets/images/help/classroom/settings-type-classroom-name.png)
1. **클래스룸 이름 바꾸기** 를 클릭합니다.
  !["클래스룸 이름 바꾸기" 단추](/assets/images/help/classroom/settings-click-rename-classroom-button.png)

## 클래스룸 보관 또는 보관 취소

{% data variables.product.prodname_classroom %}에서 더 이상 사용하지 않는 클래스룸을 보관할 수 있습니다. 클래스룸을 보관할 때는 클래스룸에 대한 새 과제를 만들거나 기존 과제를 편집할 수 없습니다. 학생은 보관된 클래스룸에서 과제에 대한 초대를 수락할 수 없습니다.

{% data reusables.classroom.sign-into-github-classroom %}
1. 클래스룸 이름 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 드롭다운 메뉴를 선택한 다음, **보관** 을 클릭합니다.
  ![가로 케밥 아이콘 및 "보관" 메뉴 항목의 드롭다운 메뉴](/assets/images/help/classroom/use-drop-down-then-click-archive.png)
1. 클래스룸 보관을 취소하려면 클래스룸 이름 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 드롭다운 메뉴를 선택한 다음, **보관 취소** 를 클릭합니다.
  ![가로 케밥 아이콘 및 "보관 취소" 메뉴 항목의 드롭다운 메뉴](/assets/images/help/classroom/use-drop-down-then-click-unarchive.png)

## 클래스룸 명단 삭제

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. "이 명단 삭제"에서 **명단 삭제** 를 클릭합니다.
  ![클래스룸의 "학생" 탭에 있는 "이 명단 삭제" 아래의 "명단 삭제" 단추](/assets/images/help/classroom/students-click-delete-roster-button.png)
1. 경고를 읽은 다음, **명단 삭제** 를 클릭합니다.
  ![클래스룸의 "학생" 탭에 있는 "이 명단 삭제" 아래의 "명단 삭제" 단추](/assets/images/help/classroom/students-click-delete-roster-button-in-modal.png)

## 클래스룸 삭제

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. "이 클래스룸 삭제"의 오른쪽에서 **클래스룸 삭제** 를 클릭합니다.
  !["리포지토리 삭제" 단추](/assets/images/help/classroom/click-delete-classroom-button.png)
1. **경고를 읽습니다**.
1. 올바른 클래스룸을 삭제하고 있는지 확인하려면 삭제할 클래스룸의 이름을 입력합니다.
  ![경고 및 클래스룸 이름에 대한 텍스트 필드가 있는 클래스룸 삭제 모달](/assets/images/help/classroom/delete-classroom-modal-with-warning.png)
1. **클래스룸 삭제** 를 클릭합니다.
  !["클래스룸 삭제" 단추](/assets/images/help/classroom/delete-classroom-click-delete-classroom-button.png)
