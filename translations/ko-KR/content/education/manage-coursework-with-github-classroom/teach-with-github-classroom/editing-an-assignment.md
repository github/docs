---
title: 과제 편집
intro: 과정에서 기존 과제를 편집할 수 있습니다.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can edit assignments for that classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Edit an assignment
ms.openlocfilehash: 65814debd3fb5bf64ea83b04bef6349b7755b77f
ms.sourcegitcommit: 82b1242de02ecc4bdec02a5b6d11568fb2deb1aa
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179858'
---
## 할당 편집 정보

과제를 만든 후 과제의 여러 측면을 편집하여 자신과 학생의 요구에 더 잘 맞을 수 있습니다. 할당을 만든 후에는 할당 유형(개인 또는 그룹) 또는 온라인 IDE(통합 개발 환경)를 변경할 수 없습니다. 자세한 내용은 "[개별 할당 만들기](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)" 및 "[그룹 할당 만들기"를 참조하세요](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment).

## 기존 할당 편집

1. {% data variables.product.prodname_classroom_with_url %}에 로그인합니다.
1. 클래스룸으로 이동합니다.

    ![교실 이름이 강조 표시된 GitHub Education의 교실 타일 스크린샷](/assets/images/help/classroom/classroom-card.png)

1. {% octicon "repo" aria-label="The repo icon" %} **할당** 탭에서 편집하려는 과제 옆에 있는 {% octicon "pencil" aria-label="The pencil icon" %}을 클릭합니다.

    {% note %}
    
    **참고:** 과제 페이지에서 과제를 편집할 수도 있습니다. 과제의 페이지에 액세스하려면 할당 탭에서 **할당** 이름을 클릭합니다.
    
    {% endnote %}

    ![편집 아이콘에 중점을 둔 과제 스크린샷](/assets/images/help/classroom/edit-assignment.png)

1. "과제 제목"에서 텍스트 필드를 클릭한 다음 기존 텍스트를 삭제하고 새 과제 제목을 입력합니다.

    !["과제 제목" 텍스트 필드에 중점을 둔 과제 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-title.png)

1. 필요에 따라 각 학생의 과제 리포지토리에 대한 기본 접두사를 편집하려면 {% octicon "pencil" aria-label="The pencil icon" %}을 클릭합니다.

    {% note %}

    **참고:** 할당의 제목 또는 기본 리포지토리 접두사를 편집해도 기존 할당 리포지토리의 이름은 변경되지 않습니다.

    {% endnote %}

    ![학생 리포지토리 접두사 편집 아이콘에 중점을 둔 과제 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-repository-prefix-icon.png)

    그런 다음, "사용자 지정 리포지토리 접두사" 아래에 새 접두사를 입력합니다.

    !["사용자 지정 리포지토리 접두사" 텍스트 필드에 중점을 둔 할당 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-repository-prefix.png)

1. "최종 기한(선택 사항)"에서 텍스트 필드를 클릭한 다음 날짜 선택기를 사용하여 최종 기한을 다시 할당합니다. 새 마감일은 과거일 수 없으며 마감일을 재할당하면 모든 학생의 마감일이 업데이트됩니다.

    !["최종 기한(선택 사항)" 필드에 중점을 둔 과제 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-deadline.png)

1. 할당 상태를 변경하려면 **할당 상태** 드롭다운 메뉴를 선택한 다음 **활성** 또는 **비활성** 을 클릭합니다.

    {% note %}
  
    **참고:** 비활성 과제는 학생이 수락할 수 없습니다. 더 이상 학생이 과제를 수락하지 않거나 과제 기한이 지나면 과제 상태를 비활성 상태로 변경해야 합니다.
  
    {% endnote %}

    !["과제 상태" 드롭다운 메뉴가 강조 표시된 과제 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-status-dropdown.png)

1.  "리포지토리 표시 유형"에서 표시 유형을 선택합니다. 프라이빗 리포지토리를 사용하는 경우 학생 또는 팀만 제공한 피드백을 볼 수 있습니다.

    {% note %}
    
    **참고:** 할당 리포지토리의 표시 유형을 변경해도 기존 할당 리포지토리의 표시 여부가 소급적으로 변경되지는 않습니다.
    
    {% endnote %}

    !["리포지토리 표시 유형" 라디오 단추가 강조 표시된 할당 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-repository-visibility.png)

1.  필요에 따라 **학생에게 리포지토리에 대한 관리자 액세스 권한 부여를** 선택하거나 선택 취소합니다. 리포지토리에 대한 관리자 권한에 대한 자세한 내용은 "[리포지토리 정보](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)" 및 "[조직의 리포지토리 역할"을](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) 참조하세요.

    {% note %}

    **참고:** 과제를 만든 후 학생 관리자 액세스 권한을 부여하거나 취소해도 기존 과제 리포지토리에 대한 사용 권한은 소급하여 변경되지 않습니다.

    {% endnote %}

    !["학생 관리자에게 리포지토리에 대한 액세스 권한 부여" 확인란이 강조 표시된 과제 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-admin-access.png)

1. 과제에 대한 템플릿 리포지토리를 설정하거나 변경하려면 "학생에게 시작 코드를 제공할 템플릿 리포지토리 추가" 섹션에서 **리포지토리 선택** 드롭다운 메뉴를 선택합니다.
       - 템플릿 리포지토리를 선택하려면 텍스트 필드에 리포지토리 이름을 입력한 다음 검색 결과에서 리포지토리를 클릭합니다.
       - 템플릿 리포지토리를 제거하려면 텍스트 필드의 텍스트를 삭제합니다.

    {% note %}

    **참고:** 기본적으로 과제는 교실 명단에 있는 각 학생에 대한 빈 리포지토리를 만듭니다.

    {% endnote %}

    !["리포지토리 선택" 드롭다운에 중점을 둔 할당 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-template-repository.png)

1. 새 자동 채점 테스트를 추가하려면 "자동 채점 테스트 추가" 섹션에서 **테스트 추가** 드롭다운 메뉴를 선택한 다음 표시되는 옵션에서 채점 메서드를 클릭합니다. 자세한 내용은 “[자동 채점 사용](/education/manage-coursework-with-github-classroom/use-autograding)”을 참조하세요.
    
    !["테스트 추가" 드롭다운에 중점을 둔 과제 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-add-test.png)

    또한 {% octicon "pencil" aria-label="The pencil icon" %} 또는 {% octicon "trash" aria-label="The trash icon" %}을 사용하여 기존 자동 채점 테스트를 편집하거나 삭제할 수 있습니다.

    ![테스트 편집 및 삭제 아이콘에 중점을 둔 할당 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-edit-test.png)

1.  피드백 끌어오기 요청을 켜거나 끄려면 **피드백 끌어오기 요청 사용을** 선택하거나 선택 취소합니다.

    {% note %}
    
    **참고:** 할당에 대한 피드백 끌어오기 요청을 사용하거나 사용하지 않도록 설정하면 기존 할당 리포지토리에 대한 피드백 끌어오기 요청을 만들거나 삭제하지 않습니다.
    
    {% endnote %}

    !["피드백 끌어오기 요청 사용" 확인란이 강조 표시된 과제 편집기의 스크린샷](/assets/images/help/classroom/edit-assignment-feedback.png)

{% data reusables.classroom.update-assignment %}

## 추가 참고 자료

- "[개별 할당 만들기](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-an-individual-assignment)"
- "[그룹 할당 만들기](/education/manage-coursework-with-github-classroom/teach-with-github-classroom/create-a-group-assignment)"
