---
ms.openlocfilehash: 31301d6de4160cc4a94b864a72232dd32cefd1cb
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 08/30/2022
ms.locfileid: "145089182"
---
{% ifversion fpt %}
1. 자체 호스팅 실행기 그룹이 있는 리포지토리 또는 조직의 기본 페이지로 이동합니다.
2. {% octicon "gear" aria-label="The Settings gear" %} **설정** 을 클릭합니다.
{% data reusables.organizations.settings-sidebar-actions-runner-groups %} {% elsif ghec or ghes or ghae %}
1. 자체 호스팅 실행기 그룹이 있는 위치로 이동합니다.
   * **조직에서**: 기본 페이지로 이동한 다음 {% octicon "gear" aria-label="The Settings gear" %} **설정** 을 클릭합니다.
   * **엔터프라이즈 수준 그룹을 사용하는 경우**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
2. “실행기 그룹” 설정으로 이동합니다.
   * **조직에서**:

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runner-groups spaces=5 %}
   * **엔터프라이즈 수준 그룹을 사용하는 경우**:

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runner-groups-tab spaces=5 %} {% endif %}
