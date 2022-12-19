---
title: 과제 재사용
intro: 다른 조직의 클래스룸을 포함하여 둘 이상의 클래스룸에서 기존 과제를 다시 사용할 수 있습니다.
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can reuse assignments from a classroom. {% data reusables.classroom.classroom-admins-link %}'
shortTitle: Reuse an assignment
ms.openlocfilehash: 4c1c9048847affef95d5c904b188e68d2c183b43
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066916'
---
## 과제 재사용 정보

다른 조직의 클래스룸을 포함하여 액세스할 수 있는 다른 모든 클래스룸에서 기존 개인 과제 또는 그룹 과제를 다시 사용할 수 있습니다. 클래스룸에서 한 번에 여러 과제를 다시 사용할 수도 있습니다. 과제를 다시 사용하도록 선택하면 {% data variables.product.prodname_classroom %}이 선택한 클래스룸에 과제를 복사합니다. 과제에서 템플릿 리포지토리를 사용하고 다른 조직의 클래스룸에서 다시 사용하도록 선택한 경우 {% data variables.product.prodname_classroom %}은 대상 조직에 리포지토리 및 해당 콘텐츠의 복사본을 만듭니다.

복사된 과제에는 이름, 원본 리포지토리, 자동 채점 테스트 및 기본 설정 편집기와 같은 과제 세부 정보가 포함됩니다. 과제를 복사한 후 편집하여 변경할 수 있습니다. 기본 설정 편집기를 변경할 수 없습니다. 

## 과제 다시 사용

1. {% data variables.product.prodname_classroom_with_url %}에 로그인합니다.
1. 다시 사용할 과제가 있는 클래스룸으로 이동합니다.

   ![조직의 클래스룸에 있는 클래스룸](/assets/images/help/classroom/click-classroom-in-list.png)

1. 과제 목록에서 다시 사용할 과제를 클릭합니다.

   ![클래스룸에 대한 과제 목록의 과제](/assets/images/help/classroom/click-assignment-in-list.png)

1. 페이지 오른쪽 위에 있는 **{% octicon "pencil" aria-label="The pencil icon" %} 편집** 드롭다운 메뉴를 선택한 다음, **{% octicon "sync" aria-label="The sync icon" %} 과제 재사용** 을 클릭합니다.

   ![과제 재사용 단추](/assets/images/help/classroom/reuse-assignment-button.png)

1. “과제 재사용” 모달에서 **조직 선택** 드롭다운 메뉴를 사용하여 과제를 두려는 조직을 선택합니다.  그런 다음, **클래스룸 선택** 드롭다운 메뉴를 사용하여 과제를 복사할 해당 조직 내의 클래스룸을 선택합니다.

   ![과제 재사용 모달](/assets/images/help/classroom/reuse-assignment-modal.png)

1. **과제 만들기** 를 클릭합니다.
1. 과제가 선택한 클래스룸에 복사되고 확인 메시지가 표시됩니다. 템플릿 리포지토리에서 할당을 다시 사용하도록 선택한 경우 복사 프로세스를 완료하는 데 몇 분 정도 걸릴 수 있으며 완료된 메시지를 보려면 페이지를 새로 고쳐야 할 수 있습니다.

   ![재사용된 할당에 대한 완료된 메시지](/assets/images/help/classroom/reuse-assignment-completed-message.png)

## 클래스룸에서 여러 과제 다시 사용

1. {% data variables.product.prodname_classroom_with_url %}에 로그인합니다.
2. 클래스룸 이름 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 드롭다운 메뉴를 선택한 다음, **할당 재사용** 을 클릭합니다.
   
   ![드롭다운이 강조 표시된 클래스룸 개요 페이지의 스크린샷](/assets/images/help/classroom/classroom-reuse-assignment-modal.png)

3. “과제 재사용” 모달에서 **조직 선택** 드롭다운 메뉴를 사용하여 과제를 두려는 조직을 선택합니다.  그런 다음, **클래스룸 선택** 드롭다운 메뉴를 사용하여 과제를 복사할 해당 조직 내의 클래스룸을 선택합니다.
   
   ![과제 재사용 모달의 스크린샷](/assets/images/help/classroom/reuse-multiple-assignments-modal.png)

4. 각 과제 왼쪽에서 다시 사용할 과제를 선택합니다.

   ![선택한 여러 과제의 스크린샷](/assets/images/help/classroom/multiple-assignments-selected.png)

5. **과제 만들기** 를 클릭합니다.
6. 과제는 선택한 클래스룸으로 복사됩니다. 템플릿 리포지토리에서 과제를 다시 사용하도록 선택한 경우 복사 프로세스를 완료하는 데 몇 분 정도 걸릴 수 있습니다.
