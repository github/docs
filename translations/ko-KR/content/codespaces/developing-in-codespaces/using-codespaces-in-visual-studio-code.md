---
title: Visual Studio Code에서 Codespaces 사용
intro: '{% data variables.product.prodname_github_codespaces %} 확장을 {% data variables.product.product_name %}의 계정과 연결해 {% data variables.product.prodname_vscode %}에서 바로 Codespace에 개발할 수 있습니다.'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
- /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Visual Studio Code
- Developer
shortTitle: Visual Studio Code
ms.openlocfilehash: b49a0504dd939a18c34073176e11359725cac7e9
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145148770"
---
## <a name="about--data-variablesproductprodname_codespaces--in--data-variablesproductprodname_vscode-"></a>{% data variables.product.prodname_vscode %}의 {% data variables.product.prodname_codespaces %} 정보

{% data variables.product.prodname_vscode %}의 로컬 설치를 사용하여 codespace를 만들고, 관리하고, 작업하고, 삭제할 수 있습니다. {% data variables.product.prodname_vscode_shortname %}에서 {% data variables.product.prodname_codespaces %}를 사용하려면 {% data variables.product.prodname_github_codespaces %} 확장을 설치해야 합니다. {% data variables.product.prodname_vscode_shortname %}에서 Codespaces를 설정하는 방법에 대한 자세한 내용은 "[필수 조건](#prerequisites)"을 참조하세요.

기본적으로 {% data variables.product.prodname_dotcom_the_website %}에서 새 codespace를 만들면 브라우저에서 열립니다. {% data variables.product.prodname_vscode_shortname %}에서 새 codespace를 자동으로 열려면 기본 편집기를 {% data variables.product.prodname_vscode_shortname %}로 설정할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_codespaces %}의 기본 편집기 설정](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)"을 참조하세요.

브라우저에서 작업하고 싶지만 기존 {% data variables.product.prodname_vscode_shortname %} 확장, 테마 및 바로 가기를 계속 사용하려는 경우 설정 동기화를 설정할 수 있습니다. 자세한 내용은 "[계정에 대한 {% data variables.product.prodname_codespaces %} 개인 설정](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)"을 참조하세요.

## <a name="prerequisites"></a>필수 조건

{% data variables.product.prodname_vscode_shortname %}에서 직접 codespace에서 개발하려면 {% data variables.product.product_name %} 자격 증명을 사용하여 {% data variables.product.prodname_github_codespaces %} 확장을 설치하고 로그인해야 합니다. {% data variables.product.prodname_github_codespaces %} 확장에는 {% data variables.product.prodname_vscode_shortname %} 2020년 10월 릴리스 1.51 이상이 필요합니다.

{% data variables.product.prodname_vscode_marketplace %}를 사용하여 [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 확장을 설치합니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)를 참조하세요.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. **로그인하여 {% data variables.product.prodname_dotcom %} 보기...** 를 클릭합니다.

   ![로그인하여 {% data variables.product.prodname_codespaces %} 보기](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. {% data variables.product.prodname_vscode_shortname %}에게 {% data variables.product.product_name %}의 계정에 액세스하도록 권한을 부여하려면 **허용** 을 클릭합니다.
3. {% data variables.product.product_name %}에 로그인하여 확장을 승인합니다.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. "REMOTE EXPLORER" 드롭다운을 사용하고 **{% data variables.product.prodname_github_codespaces %}** 를 클릭합니다.

   ![{% data variables.product.prodname_codespaces %} 헤더](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. **로그인하여 {% data variables.product.prodname_codespaces %} 보기...** 를 클릭합니다.

   ![로그인하여 {% data variables.product.prodname_codespaces %} 보기](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. {% data variables.product.prodname_vscode_shortname %}에게 {% data variables.product.product_name %}의 계정에 액세스하도록 권한을 부여하려면 **허용** 을 클릭합니다.
1. {% data variables.product.product_name %}에 로그인하여 확장을 승인합니다.

{% endwindows %}

## <a name="creating-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>{% data variables.product.prodname_vscode_shortname %}에서 codespace 만들기

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## <a name="opening-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>{% data variables.product.prodname_vscode_shortname %}에서 codespace 열기

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. "Codespaces" 아래에서 개발하려는 codespace를 클릭합니다.
1. Codespace에 연결 아이콘을 클릭합니다.

   ![{% data variables.product.prodname_vscode_shortname %}의 Codespace에 연결 아이콘](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## <a name="changing-the-machine-type-in--data-variablesproductprodname_vscode_shortname-"></a>{% data variables.product.prodname_vscode_shortname %}에서 머신 유형 변경

{% data reusables.codespaces.codespaces-machine-types %} 언제든지 codespace의 머신 유형을 변경할 수 있습니다.

1. {% data variables.product.prodname_vscode_shortname %}에서 명령 팔레트를 엽니다(`shift command P` / `shift control P`).
1. "Codespaces: Change Machine Type"을 검색하여 선택합니다.

   ![분기를 검색하여 새 {% data variables.product.prodname_codespaces %} 만들기](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. 변경할 codespace를 클릭합니다.

   ![분기를 검색하여 새 {% data variables.product.prodname_codespaces %} 만들기](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

1. 사용할 머신 유형을 선택합니다. 

   {% note %}

   **참고**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

1. 현재 codespace가 실행 중인 경우 지금 codespace를 다시 시작하고 다시 연결할 것인지 묻는 메시지가 표시됩니다.

   이 codespace에 사용되는 머신 유형을 즉시 변경하려면 **예** 를 클릭합니다.
   
   **아니요** 를 클릭하거나 codespace가 현재 실행되고 있지 않으면 다음에 codespace가 다시 시작될 때 변경 내용이 적용됩니다.

## <a name="deleting-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>{% data variables.product.prodname_vscode_shortname %}에서 codespace 삭제

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## <a name="switching-to-the-insiders-build-of--data-variablesproductprodname_vscode_shortname-"></a>{% data variables.product.prodname_vscode_shortname %}의 참가자 빌드로 전환

{% data variables.product.prodname_codespaces %} 내에서 [{% data variables.product.prodname_vscode_shortname %}의 참가자 빌드](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build)를 사용할 수 있습니다.

1. {% data variables.product.prodname_codespaces %} 창의 왼쪽 아래에서 **{% octicon "gear" aria-label="The settings icon" %} 설정** 을 선택합니다.
2. 목록에서 "참가자 버전으로 전환"을 선택합니다.

   ![{% data variables.product.prodname_codespaces %}에서 "참가자 빌드" 클릭](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. 선택하면 {% data variables.product.prodname_codespaces %}가 참가자 버전에서 계속 열립니다.
