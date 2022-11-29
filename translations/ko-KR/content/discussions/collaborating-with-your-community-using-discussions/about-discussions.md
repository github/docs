---
title: 토론 정보
intro: '{% data variables.product.product_name %}에서 토론을 사용하여 질문하거나 답변하고, 정보를 공유하고, 발표하고, 프로젝트에 대한 대화를 수행하거나 참여합니다.'
versions:
  feature: discussions
ms.openlocfilehash: 4ac74c35b34310b62595bd5ac9a5588a7ef3476a
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886952'
---
## {% data variables.product.prodname_discussions %} 정보

{% data variables.product.prodname_discussions %}를 사용하면 프로젝트의 커뮤니티에서 프로젝트의 리포지토리 또는 조직 내에서 대화를 만들고 참여할 수 있습니다. 토론은 프로젝트의 유지 관리자, 기여자 및 방문자가 타사 도구 없이 중앙 위치에서 다음 목표를 수집하고 달성할 수 있도록 합니다.

- 공지 사항 및 정보 공유, 피드백 수집, 계획 및 의사 결정
- 질문하기, 질문에 대해 토론하고 질문에 답변, 토론을 답변됨으로 표시
- 커뮤니티 의견을 측정하는 설문 조사 만들기
- 방문자와 Contributor가 목표, 개발, 관리 및 워크플로에 대해 논의할 수 있도록 권장하는 분위기 조성

![리포지토리에 대한 토론 탭](/assets/images/help/discussions/hero.png)

리포지토리 토론을 사용하여 리포지토리와 관련된 토픽에 대해 토론할 수 있습니다. 프로젝트가 여러 리포지토리에 걸쳐 있는 경우 조직 토론을 사용하여 조직의 단일 리포지토리와 관련이 없는 토픽에 대해 토론할 수 있습니다.

이슈 또는 끌어오기 요청을 닫는 것처럼 토론은 닫을 필요가 없습니다.

리포지토리 관리자 또는 프로젝트 유지 관리자가 리포지토리에 대해 {% data variables.product.prodname_discussions %}를 사용하도록 설정하는 경우 리포지토리에 액세스하는 모든 사용자가 리포지토리에 대한 토론을 만들고 참여할 수 있습니다. 조직 소유자가 조직에 대해 {% data variables.product.prodname_discussions %}를 활성화하는 경우 원본 리포지토리를 볼 수 있는 사람은 누구나 조직 토론을 만들 수 있습니다.

리포지토리 관리자 및 프로젝트 유지 관리자는 리포지토리에서 토론 및 토론 범주를 관리하고 토론을 고정하여 토론이 더욱 눈에 띄도록 만들 수 있습니다. 중재자와 협력자는 의견을 답변으로 표시하고, 토론을 잠그고, 이슈를 토론으로 변환할 수 있습니다. 마찬가지로 조직 토론의 경우 원본 리포지토리에서 사용자의 역할은 사용자가 조직 토론과 상호 작용하는 방법을 결정합니다. 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.

토론 관리에 대한 자세한 내용은 "[토론 관리](/discussions/managing-discussions-for-your-community/managing-discussions)"를 참조하세요.

## 설문 조사 정보

설문 조사 범주에서 설문 조사를 만들어 새 아이디어 및 프로젝트 방향에 대한 관심을 측정할 수 있습니다. 리포지토리에 대한 읽기 권한이 있는 사용자는 누구나 설문 조사를 만들고, 투표하고, 결과를 볼 수 있습니다.{% ifversion fpt or ghec %} 로그아웃한 사용자는 퍼블릭 리포지토리에서 설문 조사 결과를 볼 수 있습니다.{% endif %}

설문 조사에는 질문과 적어도 두 가지 옵션이 필요합니다. 최대 8개의 옵션을 추가할 수 있으며 옵션은 최대 128자를 포함할 수 있습니다. 

유권자는 투표를 변경할 수 없습니다. 설문 조사를 편집하면 이미 캐스팅된 모든 투표가 다시 설정됩니다.

설문 조사를 만드는 방법은 "[설문 조사 만들기](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll)"를 참조하세요.

## 토론 조직 정보

범주 및 레이블을 사용하여 토론을 구성할 수 있습니다.

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

질문/답변 형식의 토론의 경우 토론 내의 개별 의견을 토론의 답변으로 표시할 수 있습니다. {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

자세한 내용은 “[토론 범주 관리](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)”를 참조하세요.

{% data reusables.discussions.you-can-label-discussions %}

## {% data variables.product.prodname_discussions %}에 대한 모범 사례

커뮤니티 구성원 또는 유지 관리자가 토론을 시작하여 질문을 하거나 커뮤니티에 영향을 주는 정보에 대해 논의합니다. 자세한 내용은 “[토론을 사용하여 유지 관리자와 공동 작업](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions)”을 참조하세요.

토론에 참여하여 질문하고 질문에 답변하고, 피드백을 제공하고, 프로젝트 커뮤니티에 참여합니다. 자세한 내용은 “[토론에 참여](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)”를 참조하세요.

커뮤니티의 구성원 간에 중요하고 유용하거나 모범적인 대화를 포함하는 토론을 추천할 수 있습니다. 자세한 내용은 “[토론 관리](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)”를 참조하세요.

{% data reusables.discussions.you-can-convert-an-issue %} 자세한 내용은 “[토론 조정](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)”을 참조하세요.

## 피드백 공유

{% data variables.product.prodname_discussions %}에 대한 피드백을 {% data variables.product.company_short %}와 공유할 수 있습니다. 대화에 참여하려면 [{% data variables.product.prodname_github_community %} 토론](https://github.com/orgs/community/discussions/categories/discussions)을 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %} 쓰기 및 서식 지정 정보](/github/writing-on-github/about-writing-and-formatting-on-github)”
- “[토론 검색](/search-github/searching-on-github/searching-discussions)”
- “[알림 정보](/github/managing-subscriptions-and-notifications-on-github/about-notifications)”
- “[댓글 및 대화 조정](/communities/moderating-comments-and-conversations)”{% ifversion fpt or ghec %}
- “[{% data variables.product.prodname_dotcom %}에서 안전 유지 관리](/communities/maintaining-your-safety-on-github)”{% endif %}
