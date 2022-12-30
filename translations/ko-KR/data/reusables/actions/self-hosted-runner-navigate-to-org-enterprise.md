---
ms.openlocfilehash: 48dc95869bae901bf79df320e83b65979dedfd65
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763750"
---
{% ifversion fpt %}
1. 자체 호스트 실행기를 등록한 조직의 기본 페이지로 이동합니다.
2. {% octicon "gear" aria-label="The Settings gear" %} **설정** 을 클릭합니다.
{% data reusables.organizations.settings-sidebar-actions-runners %} {% elsif ghec or ghes or ghae %}
1. 실행기를 등록한 위치로 이동합니다.
   * **조직에서**: 기본 페이지로 이동한 다음 {% octicon "gear" aria-label="The Settings gear" %} **설정** 을 클릭합니다.
   * **엔터프라이즈 수준 실행기를 사용하는 경우**:

{% indented_data_reference reusables.enterprise-accounts.access-enterprise spaces=5 %}
1. {% data variables.product.prodname_actions %} 설정으로 이동합니다.
   * **조직에서**: 

{% indented_data_reference reusables.actions.settings-ui.settings-actions-runners spaces=5 %}
   * **엔터프라이즈 수준 실행기를 사용하는 경우**: 

{% indented_data_reference reusables.enterprise-accounts.policies-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-tab spaces=5 %} {% indented_data_reference reusables.enterprise-accounts.actions-runners-tab spaces=5 %} {% endif %}
