---
title: 토론 범주 관리
intro: 토론을 분류하여 커뮤니티 구성원을 위해 대화를 구성할 수 있으며 각 범주에 대한 형식을 선택할 수 있습니다.
permissions: Repository administrators and people with write or greater access to a repository can manage categories for discussions in the repository. Repository administrators and people with write or greater access to the source repository for organization discussions can manage categories for discussions in the organization.
versions:
  feature: discussions
shortTitle: Manage categories
redirect_from:
  - /discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository
ms.openlocfilehash: 5579b1e03b29ad37d394caf24745353025fd9e61
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099094'
---
## 토론 범주 정보

{% data reusables.discussions.about-discussions %} {% data reusables.discussions.about-categories-and-formats %}

{% data reusables.discussions.about-announcement-format %}

각 범주에는 고유한 이름과 이모지 페어링이 있어야 하며 해당 용도를 설명하는 자세한 설명이 함께 제공될 수 있습니다. 범주는 유지 관리자가 대화를 제출하는 방법을 구성하는 데 도움이 되고 Q&A 또는 더 많은 개방형 대화인 범주를 구분할 수 있도록 사용자 지정할 수 있습니다. {% data reusables.discussions.repository-category-limit %} 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)”를 참조하세요.

## 기본 범주

| 범주 | 목적 | 형식 |
| :- | :- | :- |
| 📣 알림 | 프로젝트 유지 관리자가 제공하는 업데이트 및 뉴스 | 알림 |
| #️⃣ 일반 | 프로젝트와 관련된 모든 내용 | 개방형 토론 |
|💡 아이디어 | 프로젝트를 변경하거나 개선하는 아이디어 | 개방형 토론 |
| 🗳 설문 조사 | 커뮤니티가 투표하고 토론할 수 있는 여러 옵션이 있는 설문 조사 | 설문 조사 |
| 🙏 Q&A | 커뮤니티가 질문/답변 형식으로 답변할 수 있는 질문 | 질문 및 답변 |
| 🙌 표시 및 말하기 | 프로젝트와 관련된 생성, 실험 또는 테스트 | 개방형 토론 |

## 범주 만들기

1. {% 데이터 variables.location.product_location %}에서 범주를 만들 리포지토리 또는 조직의 기본 페이지로 이동합니다.
{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.edit-categories %}
1. **새 범주** 를 클릭합니다.
  ![리포지토리에 대한 토론 범주 목록 위의 “새 범주” 단추](/assets/images/help/discussions/click-new-category-button.png)
1. 범주에 대한 이모지, 제목, 설명 및 토론 형식을 편집합니다. 토론 형식에 대한 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)”를 참조하세요.
  ![새 범주에 대한 이모지, 제목, 설명 및 토론 형식](/assets/images/help/discussions/edit-category-details.png)
1. **만들기** 를 클릭합니다.
  ![새 범주의 “만들기” 버튼](/assets/images/help/discussions/new-category-click-create-button.png)

## 범주 편집

범주를 편집하여 범주의 이모지, 제목, 설명 및 토론 형식을 변경할 수 있습니다.

1. {% 데이터 variables.location.product_location %}에서 범주를 편집하려는 리포지토리 또는 조직의 기본 페이지로 이동합니다.
{% data reusables.discussions.discussions-tab %}
1. 목록의 범주 오른쪽에 있는 {% octicon "pencil" aria-label="The pencil icon" %}을 클릭합니다.
  ![리포지토리의 범주 목록에서 범주 오른쪽에 있는 편집 단추](/assets/images/help/discussions/click-edit-for-category.png)
1. {% data reusables.discussions.edit-category-details %} ![기존 범주에 대한 이모지, 제목, 설명 및 토론 형식 편집](/assets/images/help/discussions/edit-existing-category-details.png)
1. **변경 내용 저장** 을 클릭합니다.
  ![기존 범주에 대한 “변경 내용 저장” 단추](/assets/images/help/discussions/existing-category-click-save-changes-button.png)

## 범주 삭제

범주를 삭제하면 {% data variables.product.product_name %}가 삭제된 범주의 모든 토론을 선택한 기존 범주로 이동합니다.

1. {% 데이터 variables.location.product_location %}에서 범주를 삭제하려는 리포지토리 또는 조직의 기본 페이지로 이동합니다.
{% data reusables.discussions.discussions-tab %}
1. 목록의 범주 오른쪽에 있는 {% octicon "trash" aria-label="The trash icon" %}을 클릭합니다.
  ![리포지토리의 범주 목록에서 범주 오른쪽에 있는 휴지통 단추](/assets/images/help/discussions/click-delete-for-category.png)
1. 드롭다운 메뉴를 사용하고 삭제할 범주의 모든 토론에 대해 새 범주를 선택합니다.
  ![기존 범주를 삭제할 때 새 범주를 선택하기 위한 드롭다운 메뉴](/assets/images/help/discussions/choose-new-category.png)
1. **삭제 및 이동** 을 클릭합니다.
  ![기존 범주를 삭제할 때 새 범주를 선택하기 위한 드롭다운 메뉴](/assets/images/help/discussions/click-delete-and-move-button.png)
