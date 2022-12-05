---
title: Visual Studio Code에서 Github Codespaces 사용
shortTitle: Visual Studio Code
intro: '{% data variables.product.prodname_github_codespaces %} 확장을 {% data variables.product.product_name %}의 계정과 연결해 {% data variables.product.prodname_vscode %}에서 바로 Codespace에 개발할 수 있습니다.'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
  - /codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
ms.openlocfilehash: c651620e2795fb29f2b995f745ad3880e99c0f4e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159921'
---
## {% data variables.product.prodname_vscode %}의 {% data variables.product.prodname_github_codespaces %} 정보

{% data variables.product.prodname_vscode %}의 로컬 설치를 사용하여 codespace를 만들고, 관리하고, 작업하고, 삭제할 수 있습니다. {% data reusables.codespaces.using-codespaces-in-vscode %} {% data variables.product.prodname_vscode_shortname %}에서 {% data variables.product.prodname_github_codespaces %}을(를) 설정하는 방법에 대한 자세한 내용은 "[필수 조건"을 참조하세요.](#prerequisites)

기본적으로 {% data variables.product.prodname_dotcom_the_website %}에서 새 codespace를 만들면 브라우저에서 열립니다. {% data variables.product.prodname_vscode_shortname %}에서 새 codespace를 자동으로 열려면 기본 편집기를 {% data variables.product.prodname_vscode_shortname %}로 설정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}의 기본 편집기 설정](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)”을 참조하세요.

브라우저에서 작업하고 싶지만 기존 {% data variables.product.prodname_vscode_shortname %} 확장, 테마 및 바로 가기를 계속 사용하려는 경우 설정 동기화를 설정할 수 있습니다. 자세한 내용은 “[계정에 대한 {% data variables.product.prodname_github_codespaces %} 개인 설정](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)”을 참조하세요.

## 필수 조건

{% data variables.product.prodname_vscode_shortname %}에서 직접 codespace에서 개발하려면 {% data variables.product.product_name %} 자격 증명을 사용하여 {% data variables.product.prodname_github_codespaces %} 확장을 설치하고 로그인해야 합니다. {% data variables.product.prodname_github_codespaces %} 확장에는 {% data variables.product.prodname_vscode_shortname %} 2020년 10월 릴리스 1.51 이상이 필요합니다.

{% data variables.product.prodname_vscode_marketplace %}를 사용하여 [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) 확장을 설치합니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 [Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)를 참조하세요.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. **{% data variables.product.prodname_dotcom %}에 로그인...** 을 클릭합니다.

   ![{% data variables.product.prodname_github_codespaces %}에 로그인](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. {% data variables.product.prodname_vscode_shortname %}에게 {% data variables.product.product_name %}의 계정에 액세스하도록 권한을 부여하려면 **허용** 을 클릭합니다.
3. {% data variables.product.product_name %}에 로그인하여 확장을 승인합니다.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. "REMOTE EXPLORER" 드롭다운을 사용하고 **{% data variables.product.prodname_github_codespaces %}** 를 클릭합니다.

   ![{% data variables.product.prodname_github_codespaces %} 헤더](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. **로그인을 클릭하여 {% data variables.product.prodname_codespaces %}을(를) 봅니** 다.

   ![{% data variables.product.prodname_github_codespaces %}을(를) 보기 위해 로그인](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. {% data variables.product.prodname_vscode_shortname %}에게 {% data variables.product.product_name %}의 계정에 액세스하도록 권한을 부여하려면 **허용** 을 클릭합니다.
1. {% data variables.product.product_name %}에 로그인하여 확장을 승인합니다.

{% endwindows %}

## {% data variables.product.prodname_vscode_shortname %}에서 codespace 만들기

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## {% data variables.product.prodname_vscode_shortname %}에서 codespace 열기

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. "Codespaces" 아래에서 개발하려는 codespace를 클릭합니다.
1. Codespace에 연결 아이콘을 클릭합니다.

   ![{% data variables.product.prodname_vscode_shortname %}의 Codespace에 연결 아이콘](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## {% data variables.product.prodname_vscode_shortname %}에서 머신 유형 변경

{% data reusables.codespaces.codespaces-machine-types %} 언제든지 codespace의 머신 유형을 변경할 수 있습니다.

{% note %}

**참고**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## {% data variables.product.prodname_vscode_shortname %}에서 codespace 삭제

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## {% data variables.product.prodname_vscode_shortname %}의 참가자 빌드로 전환

[{% data variables.product.prodname_github_codespaces %} 내에서 {% data variables.product.prodname_vscode_shortname %}의 참가자 빌드](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build)를 사용할 수 있습니다.

1. {% data variables.product.prodname_github_codespaces %} 창의 왼쪽 아래에서 **{% octicon "gear" aria-label="The settings icon" %} 설정을** 선택합니다.
2. 목록에서 "참가자 버전으로 전환"을 선택합니다.

   ![{% data variables.product.prodname_github_codespaces %}에서 "참가자 빌드" 클릭](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

3. 선택되면 {% data variables.product.prodname_github_codespaces %}이(가) 참가자 버전에서 계속 열립니다.

## 추가 정보

- "[{% data variables.product.prodname_github_codespaces %}에서 {% data variables.product.prodname_vscode_command_palette %} 사용](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)"
- "[{% data variables.product.prodname_copilot %}에서 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)"
