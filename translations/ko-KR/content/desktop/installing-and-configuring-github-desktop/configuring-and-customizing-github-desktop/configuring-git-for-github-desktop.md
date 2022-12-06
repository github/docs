---
title: GitHub Desktop용 Git 구성
shortTitle: Configuring Git
intro: '{% data variables.product.prodname_desktop %}을 사용하여 로컬 리포지토리에 대한 Git 구성 설정을 관리할 수 있습니다.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
  - /desktop/installing-and-configuring-github-desktop/configuring-git-for-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: f14b309dcc7a4c779e9debb68f3962dfd38247cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146058518'
---
## {% data variables.product.prodname_desktop %}에 대한 Git 구성 정보

{% data variables.product.prodname_desktop %}은 로컬 Git 구성 설정을 사용하고 전역 작성자 정보 및 새 리포지토리를 만들 때 사용되는 기본 분기와 같은 이러한 설정 중 일부를 구성하는 옵션을 제공합니다.

{% data variables.product.prodname_desktop %}을 사용하면 리포지토리에서 커밋과 연결하려는 이름과 메일 주소를 설정할 수 있습니다. 컴퓨터의 전역 Git 구성에 이름과 메일 주소가 이미 설정된 경우 {% data variables.product.prodname_desktop %}에서 해당 값을 검색하고 사용합니다. {% data variables.product.prodname_desktop %}을 사용하면 개별 리포지토리의 다른 이름 및 메일 주소를 설정할 수도 있습니다. 이는 특정 리포지토리에 대해 별도의 회사 메일 주소를 사용해야 하는 경우에 유용합니다.

Git 구성에 설정된 메일 주소가 현재 로그인한 {% data variables.product.product_name %} 계정과 연결된 메일 주소와 일치하지 않으면 {% data variables.product.prodname_desktop %}은 커밋하기 전에 경고를 표시합니다.

{% data variables.product.prodname_desktop %}을 사용하면 새 리포지토리를 만들 때 사용할 기본 분기 이름을 변경할 수도 있습니다. 기본적으로 {% data variables.product.prodname_desktop %}은 사용자가 만든 모든 새 리포지토리의 기본 분기 이름으로 `main`을 사용합니다.

{% tip %}

**팁**: 퍼블릭 커밋을 수행하면 누구나 Git 구성에서 메일 주소를 볼 수 있습니다. 자세한 내용은 “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address/)”을 참조하세요.

{% endtip %}

## 전역 작성자 정보 구성

{% data variables.product.prodname_desktop %}에서 전역 작성자 정보를 구성하면 전역 Git 구성에서 이름과 메일 주소가 업데이트됩니다. {% data variables.product.prodname_desktop %}에서 만든 모든 새 로컬 리포지토리의 기본 이름 및 메일 주소입니다.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
7. 기본 설정 창에서 **Git** 을 클릭합니다.
  ![기본 설정 메뉴의 Git 창](/assets/images/help/desktop/mac-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Git 구성의 이름 필드](/assets/images/help/desktop/mac-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Git 구성 필드에서 메일 주소 선택](/assets/images/help/desktop/mac-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Git 구성 필드의 저장 단추](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
8. 옵션 창에서 **Git** 을 클릭합니다.
![옵션 메뉴의 Git 창](/assets/images/help/desktop/windows-select-git-pane.png) {% data reusables.desktop.name-field-git-config %} ![Git 구성의 이름 필드](/assets/images/help/desktop/windows-name-git-config.png) {% data reusables.desktop.select-email-git-config %} ![Git 구성 필드에서 메일 주소 선택](/assets/images/help/desktop/windows-email-git-config.png) {% data reusables.desktop.click-save-git-config %} ![Git 구성 필드의 저장 단추](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

## 개별 리포지토리에 대한 다양한 작성자 정보 구성

특정 리포지토리에서 커밋을 작성하는 데 사용되는 이름 및 메일 주소를 변경할 수 있습니다. 이 로컬 Git 구성은 이 하나의 리포지토리에 대해서만 전역 Git 구성 설정을 재정의합니다.

{% mac %}

{% data reusables.desktop.mac-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-repository-settings-menu %} {% data reusables.desktop.select-git-config %} {% data reusables.desktop.use-local-git-config %} {% data reusables.desktop.local-config-name %} {% data reusables.desktop.local-config-email %} {% data reusables.desktop.repository-settings-save %}

{% endwindows %}


## 새 리포지토리에 대한 기본 분기 구성

{% data variables.product.prodname_desktop %}에서 새 리포지토리를 만들 때 사용할 기본 분기를 구성할 수 있습니다. 기본 분기에 대한 자세한 내용은 “[기본 분기 정보](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”를 참조하세요.

{% mac %}

{% data reusables.desktop.mac-select-desktop-menu %}
1. 기본 설정 창에서 **Git** 을 클릭합니다.
  ![기본 설정 메뉴의 Git 창](/assets/images/help/desktop/mac-select-git-pane.png)
1. “새 리포지토리의 기본 분기 이름”에서 사용할 기본 분기 이름을 선택합니다. 또는 사용자 지정 이름을 입력하려면 “기타...”를 선택합니다.
  ![기본 분기 이름 선택 옵션](/assets/images/help/desktop/mac-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Git 구성 필드에서 저장 단추](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.windows-choose-options %}
1. 옵션 창에서 **Git** 을 클릭합니다.
  ![옵션 메뉴의 Git 창](/assets/images/help/desktop/windows-select-git-pane.png)
1. “새 리포지토리의 기본 분기 이름”에서 사용할 기본 분기 이름을 선택합니다. 또는 “기타...”를 선택하여 사용자 지정 이름을 입력합니다.
  ![기본 분기 이름 선택 옵션](/assets/images/help/desktop/windows-select-default-branch-name.png) {% data reusables.desktop.click-save-git-config %} ![Git 구성 필드에서 저장 단추](/assets/images/help/desktop/repository-settings-git-config-save.png)

{% endwindows %}

## 추가 참고 자료

- “[GitHub 계정에 메일 주소 추가](/articles/adding-an-email-address-to-your-github-account/)”
- “[커밋 메일 주소 설정](/articles/setting-your-commit-email-address/)”
- “[분기 정보](/github/collaborating-with-issues-and-pull-requests/about-branches)”
