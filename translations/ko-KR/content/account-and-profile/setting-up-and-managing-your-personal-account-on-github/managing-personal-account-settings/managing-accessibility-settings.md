---
title: 접근성 설정 관리
shortTitle: Manage accessibility settings
intro: '{% data variables.product.product_name %}의 사용자 인터페이스는 시력, 청력, 동작, 인지 또는 학습 요구에 맞게 조정할 수 있습니다.'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 088bb097004f6c3b13412ec9716665b1f02edca5
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107215'
---
## 접근성 설정 정보

{% ifversion fpt or ghec or ghes %}{% data variables.location.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}에서 사용자 요구에 맞는 환경을 만들려면 사용자 인터페이스를 사용자 지정할 수 있습니다. 접근성 설정은 장애가 있는 사용자에게 필수적일 수 있지만 누구에게나 유용할 수 있습니다. 예를 들어 음성 제어를 사용하여 탐색하는 사용자에게는 바로 가기 키를 사용자 지정해야 하지만 {% data variables.product.product_name %}에 대한 바로 가기 키가 다른 애플리케이션 바로 가기와 충돌하는 경우 누구에게나 유용할 수 있습니다.

## 접근성 설정 관리

{% ifversion fpt or ghec %}{% data variables.location.product_location %}{% elsif ghes or ghae %}{% data variables.location.product_location %}{% endif %}에 대한 웹 사이트에서 일부 또는 모든 바로 가기 키를 사용할지 여부를 결정할 수 있으며 애니메이션 이미지의 표시를 제어할 수 있습니다.

### 바로 가기 키 관리

키보드만 사용하여 {% data variables.product.product_name %} 웹 사이트에서 작업을 수행할 수 있습니다. 바로 가기 키는 시간을 절약하는 데 유용할 수 있지만 실수로 활성화되거나 보조 기술을 방해할 수 있습니다.

기본적으로 {% data variables.product.product_name %}에서 모든 바로 가기 키가 사용하도록 설정됩니다. 자세한 내용은 “[바로 가기 키](/get-started/using-github/keyboard-shortcuts)”를 참조하세요.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. “바로 가기 키”에서 바로 가기 키에 대한 설정을 관리합니다.

   - <kbd>Ctrl</kbd> 또는 <kbd>Command</kbd>와 같은 한정자 키를 사용하지 않는 바로 가기 키를 사용하지 않도록 설정하려면 “일반”에서 **문자 키** 를 선택 취소합니다.
     - 문자 키를 사용하지 않도록 설정하면 웹 브라우저에 대한 바로 가기를 트리거할 수 있으며 한정자 키를 사용하는 {% data variables.product.product_name %}에 대한 바로 가기를 트리거할 수 있습니다.
   {%- ifversion command-palette %}
   - 명령 팔레트를 트리거하기 위한 바로 가기 키를 사용자 지정하려면 “명령 팔레트”에서 드롭다운 메뉴를 사용하여 바로 가기 키를 선택합니다. 자세한 내용은 “[{% data variables.product.company_short %} 명령 팔레트](/get-started/using-github/github-command-palette)”를 참조하세요.
   {%- endif %}

{% ifversion motion-management %}

### 동작 관리

{% data variables.product.product_name %}에서 애니메이션 _.gif_ 이미지를 표시하는 방법을 제어할 수 있습니다.

기본적으로 {% data variables.product.product_name %}는 축소된 동작에 대한 시스템 수준 기본 설정과 동기화됩니다. 자세한 내용은 사용 중인 운영 체제의 설명서 또는 설정을 참조하세요.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. “동작”에서 동작에 대한 설정을 관리합니다.

   - {% data variables.product.product_name %}가 애니메이션 이미지를 표시하는 방법을 제어하려면 “애니메이션 이미지 자동 실행”에서 **시스템과 동기화**, **사용** 또는 **사용 안 함** 을 선택합니다.

{% endif %}
