---
title: 테마 설정 관리
intro: You can manage how {% data variables.product.product_name %} looks to you by setting a theme preference that either follows your system settings or always uses a light or dark mode.
versions:
  fpt: '*'
  ghae: '*'
  ghes: '>=3.2'
  ghec: '*'
topics:
- Accounts
redirect_from:
- /github/setting-up-and-managing-your-github-user-account/managing-your-theme-settings
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
shortTitle: Manage theme settings
ms.openlocfilehash: 238af803ead331a9323e9457024a85dff05fc5d4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088846"
---
{% data variables.product.product_name %}를 언제 어떻게 사용하는지에 대한 선택과 유연성을 위해 테마 설정을 구성하여 {% data variables.product.product_name %}의 모양을 변경할 수 있습니다. 밝거나 어두운 테마 중에서 선택하거나 시스템 설정을 따르도록 {% data variables.product.product_name %}를 구성할 수 있습니다.

어두운 테마를 사용하여 특정 디바이스에서 전력 소비를 줄이거나 저조도 조건에서 눈의 부담을 줄이거나 테마의 모양을 선호하기 때문일 수 있습니다.

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}시력이 낮으면 전경과 배경 요소 간의 대비가 더 높은 고대비 테마를 활용할 수 있습니다.{% endif %}{% ifversion fpt or ghae or ghec %} 색맹인 경우 밝거나 어두운 색맹 테마를 활용할 수 있습니다.

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.appearance-settings %}

1. “테마 모드”에서 드롭다운 메뉴를 선택한 다음 테마 기본 설정을 클릭합니다.

   ![테마 기본 설정을 선택하기 위한 “테마 모드”의 드롭다운 메뉴](/assets/images/help/settings/theme-mode-drop-down-menu.png)
1. 사용하려는 테마를 클릭합니다.
    - 단일 테마를 선택한 경우 하나의 테마를 클릭합니다.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![단일 테마를 선택할 수 있는 라디오 단추](/assets/images/help/settings/theme-choose-a-single-theme-highcontrast.png){% else %}![단일 테마를 선택할 수 있는 라디오 단추](/assets/images/help/settings/theme-choose-a-single-theme.png){% endif %}
    - 시스템 설정을 따르도록 선택한 경우 낮 테마와 밤 테마를 클릭합니다.

      {% ifversion fpt or ghes > 3.2 or ghae or ghec %}![시스템 설정과 동기화할 테마 선택 단추](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync-highcontrast.png){% else %}![시스템 설정과 동기화할 테마 선택 단추](/assets/images/help/settings/theme-choose-a-day-and-night-theme-to-sync.png){% endif %} {% ifversion fpt or ghec %}
    - 현재 퍼블릭 베타 상태인 테마를 선택하려면 먼저 기능 미리 보기로 이를 사용하도록 설정해야 합니다. 자세한 내용은 “[기능 미리 보기를 사용하여 초기 액세스 릴리스 탐색](/get-started/using-github/exploring-early-access-releases-with-feature-preview)”을 참조하세요.{% endif %}

{% if command-palette %}

{% note %}

**참고:** 명령 팔레트를 사용하여 테마 설정을 변경할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)”를 참조하세요.

{% endnote %}

{% endif %}

## <a name="further-reading"></a>추가 참고 자료

- “[{% data variables.product.prodname_desktop %}에 대한 테마 설정](/desktop/installing-and-configuring-github-desktop/setting-a-theme-for-github-desktop)”
