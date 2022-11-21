---
title: 프로필을 프라이빗으로 설정
intro: 개인 프로필은 제한된 정보만 표시하고 일부 활동을 숨깁니다.
versions:
  fpt: '*'
topics:
  - Profiles
shortTitle: Set profile to private
ms.openlocfilehash: c00718c84d99de95a9ca1352f32954279906451d
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008671'
---
## 프라이빗 프로필 정보

프로필 페이지의 일부를 숨기려면 프로필을 프라이빗으로 설정할 수 있습니다. 또한 {% data variables.product.prodname_dotcom_the_website %}의 다양한 소셜 기능에서 작업을 숨깁니다. 프라이빗 프로필은 모든 사용자의 정보를 숨기며 현재, 지정된 사용자가 작업을 볼 수 있도록 허용하는 옵션은 없습니다.

프로필을 프라이빗으로 만든 후에도 자신의 프로필을 방문할 때 모든 정보를 볼 수 있습니다.

프라이빗 프로필은 [{% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)에서 스폰서쉽을 받을 수 없습니다. {% data variables.product.prodname_sponsors %}에 적합하려면 프로필이 프라이빗일 수 없습니다.

## 프라이빗 프로필과 퍼블릭 프로필 간의 차이점

프로필이 프라이빗인 경우 프로필 페이지에서 다음 콘텐츠가 숨겨집니다.

- 성과 내역 및 하이라이트
- 작업 개요 및 작업 피드
- 기여 그래프
- 팔로워 및 팔로잉 수
- 팔로우 및 스폰서 단추
- 조직 멤버 자격
- 별, 프로젝트, 패키지 및 스폰서 탭

{% note %}

**참고**: 프로필이 프라이빗인 경우 추가 정보, 소개 및 프로필 사진과 같은 일부 선택적 필드가 여전히 공개적으로 표시됩니다.

{% endnote %}

## 작업에 대한 보고 변경

프로필을 프라이빗으로 설정하면 과거 작업이 제거되거나 숨겨지지 않습니다. 이 설정은 프라이빗 설정을 사용하도록 설정한 경우에만 작업에 적용됩니다.

프로필이 프라이빗인 경우 {% data variables.product.prodname_dotcom_the_website %} 작업이 다음 위치에 표시되지 않습니다.

- 다른 사용자를 위한 작업 피드
- 토론 순위표
- [추세](https://github.com/trending) 페이지

{% note %}

**참고**: 퍼블릭 리포지토리에 대한 작업은 여전히 해당 리포지토리를 보는 모든 사용자에게 공개적으로 표시되며, 일부 작업 데이터는 {% data variables.product.prodname_dotcom %} API를 통해 계속 사용할 수 있습니다.

{% endnote %}

## 프로필의 개인 정보 설정 변경

{% data reusables.user-settings.access_settings %}
1. "기여 및 작업"에서 **프로필을 프라이빗으로 설정 및 작업 숨기기** 옆의 확인란을 선택합니다.
{% data reusables.user-settings.update-preferences %}
