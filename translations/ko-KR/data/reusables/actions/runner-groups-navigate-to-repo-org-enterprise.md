---
ms.openlocfilehash: c1f0ddf259431616bbada45e736385bb45ba3d75
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147764104"
---
{% ifversion fpt %}
1. 실행기 그룹이 있는 리포지토리 또는 조직의 기본 페이지로 이동합니다.
2. {% octicon "gear" aria-label="The Settings gear" %} **설정** 을 클릭합니다.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. 실행기 그룹이 있는 위치로 이동합니다.
   * **조직에서**: 기본 페이지로 이동한 다음 {% octicon "gear" aria-label="The Settings gear" %} **설정** 을 클릭합니다.
   * **엔터프라이즈 수준 그룹을 사용하는 경우**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. “실행기 그룹” 설정으로 이동합니다.
   * **조직에서**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **엔터프라이즈 수준 그룹을 사용하는 경우**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
