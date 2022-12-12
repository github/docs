---
title: github.dev 웹 기반 편집기
intro: '리포지토리 또는 끌어오기 요청에서 github.dev {% data variables.codespaces.serverless %}를 사용하여 변경 내용을 만들고 커밋합니다.'
versions:
  feature: githubdev-editor
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
shortTitle: Web-based editor
redirect_from:
  - /codespaces/developing-in-codespaces/web-based-editor
ms.openlocfilehash: adc5622d666f6a32e698a29ceedfc24217b27df9
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172181'
---
{% note %}

**참고:** github.dev {% data variables.codespaces.serverless %}는 현재 베타 미리 보기로 제공됩니다. [토론](https://github.com/community/community/discussions/categories/general)에서 피드백을 제공할 수 있습니다.

{% endnote %}

## {% data variables.codespaces.serverless %} 정보

{% data variables.codespaces.serverless %}에서는 브라우저에서 완전히 실행되는 간단한 편집 환경을 도입했습니다. {% data variables.codespaces.serverless %}를 사용하여 {% data variables.product.prodname_dotcom %}에서 파일 및 소스 코드 리포지토리를 탐색하고 코드를 변경하고 커밋할 수 있습니다. 편집기에서 리포지토리, 포크 또는 끌어오기 요청을 열 수 있습니다.

{% data variables.codespaces.serverless %}는 {% data variables.product.prodname_dotcom_the_website %}에서 모든 사용자가 무료로 사용할 수 있습니다.

{% data variables.codespaces.serverless %}는 검색, 구문 강조 표시 및 소스 제어 뷰와 같은 {% data variables.product.prodname_vscode %}의 많은 이점을 제공합니다. 설정 동기화를 사용하여 편집기에서 사용자 고유의 {% data variables.product.prodname_vscode_shortname %} 설정을 공유할 수도 있습니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[설정 동기화](https://code.visualstudio.com/docs/editor/settings-sync)”를 참조하세요.

{% data variables.codespaces.serverless %}는 브라우저의 샌드박스에서 완전히 실행됩니다. 편집기에서 리포지토리를 복제하지 않고 대신 [GitHub 리포지토리 확장](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)을 사용하여 사용할 대부분의 기능을 수행합니다. 작업은 커밋할 때까지 브라우저의 로컬 스토리지에 저장됩니다. 항상 액세스할 수 있도록 변경 내용을 정기적으로 커밋해야 합니다.

웹 기반 편집기를 사용하려면 로그인해야 합니다.

## {% data variables.codespaces.serverless %} 열기

다음 방법 중 하나로 {% data variables.codespaces.serverless %}에서 {% data variables.product.prodname_dotcom %} 리포지토리를 열 수 있습니다.

- 동일한 브라우저 탭에서 리포지토리를 열려면 를 누릅니 <kbd>다.</kbd> {% data variables.product.prodname_dotcom %}에서 리포지토리 또는 끌어오기 요청을 검색하는 동안
 
  새 브라우저 탭에서 리포지토리를 열려면 를 누릅니다 <kbd>></kbd>.

- URL을 “github.com”에서 “github.dev”로 변경합니다.
- 파일을 볼 때 {% octicon "pencil" aria-label="The edit icon" %} 옆에 있는 드롭다운 메뉴를 사용하고 **github.dev에서 열기** 를 선택합니다.

  ![파일 편집 버튼 드롭다운 메뉴](/assets/images/help/repository/edit-file-edit-dropdown.png)

## {% data variables.product.prodname_codespaces %} 및 {% data variables.codespaces.serverless %}

{% data variables.codespaces.serverless %} 및 {% data variables.product.prodname_github_codespaces %} 모두 리포지토리에서 바로 코드를 편집할 수 있습니다. 그러나 사용 사례에 따라 둘 다 약간 다른 이점이 있습니다.

|| {% data variables.codespaces.serverless %} | {% data variables.product.prodname_github_codespaces %}|
|-|----------------|---------|
| **비용** | 비어 있음.      | 개인 계정에 대한 무료 월별 사용 할당량입니다. 가격 책정에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보"를 참조하세요](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#github-codespaces-pricing).|
| **가용성** | GitHub.com의 모든 사용자가 사용할 수 있습니다. | GitHub.com의 모든 사용자가 사용할 수 있습니다. |
| **시작** | {% data variables.codespaces.serverless %}는 키 누르기로 즉시 열리며 추가 구성 또는 설치를 기다릴 필요 없이 바로 사용할 수 있습니다. | codespace를 만들거나 다시 시작하면 codespace에 VM이 할당되고 파일 내용 `devcontainer.json`에 따라 컨테이너가 구성됩니다. 이 설정은 환경을 만드는 데 몇 분 정도 걸릴 수 있습니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository). |
| **컴퓨팅**  | 연결된 컴퓨팅이 없으므로 코드를 빌드 및 실행하거나 통합 터미널을 사용할 수 없습니다. | {% data variables.product.prodname_github_codespaces %}를 사용하면 애플리케이션을 실행하고 디버그할 수 있는 전용 VM의 기능을 얻을 수 있습니다.|
| **터미널 액세스** | 없음 | {% data variables.product.prodname_github_codespaces %}은(는) 기본적으로 일반적인 도구 집합을 제공하므로 로컬 환경에서와 똑같이 터미널을 사용할 수 있습니다.|
| **확장**  | 웹에서 실행할 수 있는 확장의 하위 집합만 확장 보기에 표시되고 설치할 수 있습니다. 자세한 내용은 “[확장 사용](#using-extensions)”을 참조하세요.| {% data variables.product.prodname_github_codespaces %}를 사용하면 {% data variables.product.prodname_vscode_marketplace %}의 대부분의 확장을 사용할 수 있습니다.|

### {% data variables.product.prodname_codespaces %}에서 계속 작업

{% data variables.codespaces.serverless %}에서 워크플로를 시작하고 codespace에서 작업을 계속할 수 있습니다. 실행 및 디버그 보기 또는 터미널에 액세스하려고 하면 {% data variables.codespaces.serverless %}에서 사용할 수 없다는 알림이 표시됩니다.

codespace에서 작업을 계속하려면 **작업 계속...** 을 클릭하고 **새 codespace 만들기** 를 선택하여 현재 분기에 codespace를 만듭니다. 이 옵션을 선택하기 전에 변경 내용을 커밋해야 합니다.

![UI의 “작업 계속” 단추를 보여 주는 스크린샷](/assets/images/help/codespaces/codespaces-continue-working.png)

## 원본 제어 사용

{% data variables.codespaces.serverless %}를 사용하는 경우 모든 작업은 왼쪽의 활동 표시줄에 있는 소스 제어 뷰를 통해 관리됩니다. 소스 제어 보기에 대한 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[버전 제어](https://code.visualstudio.com/docs/editor/versioncontrol)”를 참조하세요.

웹 기반 편집기에서는 GitHub 리포지토리 확장을 사용하여 기능을 지원하므로 변경 내용을 스태시하지 않고도 분기를 전환할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서에서 “[GitHub 리포지토리](https://code.visualstudio.com/docs/editor/github#_github-repositories-extension)”를 참조하세요.

### 새 분기 만들기

{% data reusables.codespaces.create-or-switch-branch %} 이전 분기에서 커밋되지 않은 변경 사항은 새 분기에서 사용할 수 있습니다.

### 변경 내용을 커밋합니다

{% data reusables.codespaces.source-control-commit-changes %} 
5. 변경 내용을 커밋하면 {% data variables.product.prodname_dotcom %}에서 자동으로 분기로 푸시됩니다.
### 끌어오기 요청 만들기

{% data reusables.codespaces.source-control-pull-request %}

### 기존 끌어오기 요청 작업

{% data variables.codespaces.serverless %}를 사용하여 기존 끌어오기 요청을 사용할 수 있습니다.

1. {% data variables.codespaces.serverless %}에서 열려는 끌어오기 요청으로 이동합니다.
2. {% data variables.codespaces.serverless %}에서 끌어오기 요청을 열려면 누릅니 `.` 다.
3. 변경 내용을 적용했으면 [변경 내용 커밋](#commit-your-changes)의 단계를 사용하여 커밋합니다. 변경 내용이 분기에 직접 커밋되므로 변경 내용을 푸시할 필요가 없습니다.

## 확장 사용

{% data variables.codespaces.serverless %}는 웹에서 실행되도록 특별히 만들거나 업데이트된 {% data variables.product.prodname_vscode_shortname %} 확장을 지원합니다. 이러한 확장은 “웹 확장”으로 알려져 있습니다. 웹 확장을 만들거나 웹에서 작동하도록 기존 확장을 업데이트하는 방법을 알아보려면 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[웹 확장](https://code.visualstudio.com/api/extension-guides/web-extensions)”을 참조하세요.

{% data variables.codespaces.serverless %}에서 실행할 수 있는 확장은 확장 보기에 표시되며 설치할 수 있습니다. 설정 동기화를 사용하는 경우 호환되는 확장도 자동으로 설치됩니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[설정 동기화](https://code.visualstudio.com/docs/editor/settings-sync)”를 참조하세요.


## 문제 해결

{% data variables.codespaces.serverless %}를 여는 데 문제가 있는 경우 다음을 시도해 보세요.

- {% data variables.product.prodname_dotcom %}에 로그인했는지 확인합니다.
- 광고 차단기를 사용하지 않도록 설정합니다.
- 브라우저에서 시크릿이 아닌 창을 사용하여 {% data variables.codespaces.serverless %}를 엽니다.

### 알려진 제한 사항

- {% data variables.codespaces.serverless %}는 현재 Chrome(및 기타 Chromium 기반 브라우저), Edge, Firefox 및 Safari에서 지원됩니다. 이러한 브라우저의 최신 버전을 사용하는 것이 좋습니다.
- 사용 중인 브라우저에 따라 일부 키 바인딩이 작동하지 않을 수 있습니다. 이러한 키 바인딩 제한 사항은 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[알려진 제한 사항 및 조정](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations)” 섹션에 설명되어 있습니다.
- `.` 로컬 키보드 레이아웃에 따라 {% data variables.codespaces.serverless %}를 열 수 없습니다. 이 경우 URL을 에서 `github.com` 로 변경하여 {% data variables.codespaces.serverless %}에서 {% data variables.product.prodname_dotcom %} 리포지토리를 `github.dev`열 수 있습니다.
