---
title: 토론을 사용하여 유지 관리자와 공동 작업
shortTitle: Collaborating with maintainers
intro: '토론의 프로젝트 유지 관리자와 소통함으로써 {% data variables.product.product_name %}에서 프로젝트의 목표, 계획, 상태 및 커뮤니티에 기여할 수 있습니다.'
permissions: 'People with read access to a repository can start and participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can start and participate in discussions and polls in the organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
ms.openlocfilehash: f090088d55e946e67c1f0b5d790deca9fd794a90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410253'
---
## {% data variables.product.prodname_discussions %}를 사용하여 유지 관리자와의 공동 작업 정보

{% data reusables.discussions.about-discussions %} 프로젝트를 사용하거나 프로젝트에 기여하는 경우 토론을 시작하여 제안을 하고 계획, 질문, 아이디어 및 피드백에 대해 유지 관리자 및 커뮤니티 구성원과 소통할 수 있습니다. 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요.

{% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.about-announcement-format %} 

리포지토리 관리자와 프로젝트 유지 관리자는 해당 리포지토리에서 토론을 삭제할 수 있습니다. 마찬가지로 조직의 토론을 위한 원본 리포지토리의 관리자 및 유지 관리자는 해당 조직에서 토론을 삭제할 수 있습니다. 자세한 내용은 “[토론 관리](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)”를 참조하세요.

{% data reusables.discussions.github-recognizes-members %} 이러한 구성원은 프로젝트 토론에 가장 유용한 contributor 목록에 표시됩니다. 프로젝트가 성장함에 따라 커뮤니티의 활성 구성원에게 더 높은 액세스 권한을 부여할 수 있습니다. 자세한 내용은 “[상위 contributor에게 더 높은 권한 부여](/discussions/guides/granting-higher-permissions-to-top-contributors)”를 참조하세요.

![프로젝트에 대한 토론에 가장 도움이 되는 contributor](/assets/images/help/discussions/most-helpful.png)

토론 참여에 대한 자세한 내용은 “[토론 참여](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion)”를 참조하세요.

## 필수 조건

리포지토리 토론에서 유지 관리자와 협업하려면 리포지토리 관리자 또는 프로젝트 유지 관리자가 리포지토리에 대해 {% data variables.product.prodname_discussions %}을 사용하도록 설정해야 합니다. 자세한 내용은 “[리포지토리에 {% data variables.product.prodname_discussions %} 사용 또는 사용 안 함](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository)”을 참조하세요.

조직 토론에서 유지 관리자와 협업하려면 조직에서 {% data variables.product.prodname_discussions %}을 사용하도록 설정해야 합니다. 자세한 내용은 “[조직에 대해 {% data variables.product.prodname_discussions %} 사용 또는 사용 안 함](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization)”을 참조하세요.

## 토론 시작

{% data reusables.discussions.starting-a-discussion %}

## 설문 조사 시작

{% data reusables.discussions.starting-a-poll %}

## 토론 목록 필터링

리포지토리 또는 조직에서 토론을 검색하고 토론 목록을 필터링할 수 있습니다. 자세한 내용은 “[토론 검색](/search-github/searching-on-github/searching-discussions)”을 참조하세요.

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. **모든 토론 검색** 필드에 검색 쿼리를 입력합니다. 필요에 따라 검색 필드 오른쪽에 있는 단추를 클릭하여 결과를 추가로 필터링합니다.
  ![토론 필터링을 위한 검색 창 및 단추](/assets/images/help/discussions/search-and-filter-controls.png)
1. 토론 목록에서 보려는 토론을 클릭합니다.
  ![토론 검색 결과](/assets/images/help/discussions/search-result.png)

## 이슈를 토론으로 변환

{% data reusables.discussions.you-can-convert-an-issue %} 자세한 내용은 “[토론 조정](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)”을 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %}의 쓰기 및 서식 지정 정보](/github/writing-on-github/about-writing-and-formatting-on-github)”{%- ifversion fpt or ghec %}
- “[{% data variables.product.prodname_dotcom %}에서 안전 유지 관리](/communities/maintaining-your-safety-on-github)”{%- endif %}
