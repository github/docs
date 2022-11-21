---
ms.openlocfilehash: 224ce401421d3af0e9afa5976695c95ed219a7b5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109178"
---
## {% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.prodname_copilot %} 설정 구성

활성 {% data variables.product.prodname_copilot %} 평가판 또는 구독이 있으면 [{% data variables.product.prodname_copilot %}](https://github.com/settings/copilot) 설정의 {% data variables.product.prodname_dotcom %}에서 개인 계정에 대한 {% data variables.product.prodname_copilot %} 설정을 조정할 수 있습니다. 설정은 {% data variables.product.prodname_copilot %}을 사용하는 모든 위치에 적용됩니다. {% data variables.product.prodname_copilot %}에서 제공하는 제안 및 {% data variables.product.company_short %}에서 원격 분석 데이터를 사용하는 방법을 구성할 수 있습니다.

## 중복 검색 사용 또는 사용 안 함

{% data variables.product.prodname_copilot %}에는 {% data variables.product.prodname_dotcom %}에서 퍼블릭 코드와 일치하는 코드 제안을 검색하는 필터가 포함되어 있습니다. 필터를 사용하거나 사용하지 않도록 선택할 수 있습니다. 필터를 사용하도록 설정하면 {% data variables.product.prodname_copilot %}은 {% data variables.product.prodname_dotcom %}의 퍼블릭 코드에 대해 약 150자의 주변 코드로 코드 제안을 확인합니다. 일치하거나 거의 일치하는 경우 제안이 표시되지 않습니다.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. **공용 코드와 일치하는 제안** 에서 드롭다운 메뉴를 선택한 다음, 공용 코드와 일치하는 제안을 허용하려면 **허용** 을 클릭하고 공용 코드와 일치하는 제안을 차단하려면 **차단** 을 클릭합니다.
  ![중복 검색 옵션의 스크린샷](/assets/images/help/copilot/duplication-detection.png) {% data reusables.copilot.save-settings %}

## 원격 분석 사용 또는 사용 안 함

사용자 설정을 조정하여 코드 조각을 GitHub에서 수집 및 보존하고 Microsoft 및 OpenAI와 추가로 처리 및 공유할지 여부를 선택할 수 있습니다. 원격 분석 설정에 따라 {% data variables.product.prodname_copilot %}이 수집할 수 있는 데이터에 대한 자세한 내용은 “[{% data variables.product.company_short %} 추가 제품 및 기능 사용 약관](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)” 및 [{% data variables.product.prodname_copilot %} 개인 정보 FAQ](https://github.com/features/copilot/#faq-privacy)를 참조하세요.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.copilot-settings %}
1. {% data variables.product.prodname_dotcom %}가 원격 분석 데이터를 사용하도록 허용하거나 금지하려면 **{% data variables.product.prodname_dotcom %}가 제품 개선을 위해 내 코드 조각을 사용하도록 허용** 을 선택하거나 선택 취소합니다.
  ![원격 분석 옵션의 스크린샷](/assets/images/help/copilot/telemetry-option.png) {% data reusables.copilot.save-settings %}

## 추가 참고 자료

- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot/#faq)
