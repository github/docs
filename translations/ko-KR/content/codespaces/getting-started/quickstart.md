---
title: '{% data variables.product.prodname_github_codespaces %}에 대한 빠른 시작'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: '5분 만에 {% data variables.product.prodname_github_codespaces %}를 사용해 보세요.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
ms.openlocfilehash: f35fa87711ff3a7c33ed252d0d1e87865af619bc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158655'
---
## 소개

이 가이드에서는 템플릿 리포지토리에서 codespace를 만들고 codespace 내에서 사용할 수 있는 몇 가지 필수 기능을 탐색합니다. 처음에는 {% data variables.product.prodname_github_codespaces %}의 기본 편집기인 {% data variables.product.prodname_vscode %}의 브라우저 버전에서 작업합니다. 이 빠른 시작을 시도한 후 다른 편집기에서 {% data variables.product.prodname_codespaces %}를 사용할 수 있으며 기본 편집기를 변경할 수 있습니다. 링크는 이 가이드의 끝에 제공됩니다.

이 빠른 시작에서는 codespace를 만들고, 전달된 포트에 연결하여 실행 중인 애플리케이션을 보고, codespace를 새 리포지토리에 게시하고, 확장을 사용하여 설정을 개인 설정하는 방법을 알아봅니다.

{% data variables.product.prodname_github_codespaces %}의 작동 방식에 대한 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 심층 분석](/codespaces/getting-started/deep-dive)” 가이드를 참조하세요.

## codespace 만들기

1. [github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces) 템플릿 리포지토리로 이동합니다.
{% data reusables.codespaces.open-template-in-codespace-step %}

## 애플리케이션 실행

codespace가 만들어지면 템플릿 리포지토리가 자동으로 복제됩니다. 이제 애플리케이션을 실행하고 브라우저에서 시작할 수 있습니다.

1. 터미널이 사용 가능해지면 `npm run dev` 명령을 입력합니다. 이 예제에서는 Node.js 프로젝트를 사용하고, 이 명령은 파일에서 `package.json` "dev"라는 레이블이 지정된 스크립트를 실행하여 샘플 리포지토리에 정의된 웹 애플리케이션을 시작합니다.
   
   ![터미널의 npm run dev](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   다른 애플리케이션 유형을 따르는 경우 해당 프로젝트에 해당하는 시작 명령을 입력합니다.

2. 애플리케이션이 시작되면 codespace는 애플리케이션이 실행 중인 포트를 인식하고 전달되었음을 알리는 프롬프트를 표시합니다. 

   ![포트 전달 "알림" 알림](/assets/images/help/codespaces/quickstart-port-toast.png)

3. **브라우저에서 열기** 를 클릭하여 새 탭에서 실행 중인 애플리케이션을 봅니다.

## 애플리케이션 편집 및 변경 내용 보기

1. codespace로 다시 전환하고 탐색기에서 파일을 클릭하여 엽니다 `haikus.json` .

2. 첫 번째 haiku의 `text` 필드를 편집하여 고유한 haiku로 애플리케이션을 개인 설정합니다.

3. 브라우저에서 실행 중인 애플리케이션 탭으로 돌아가서 새로 고침하여 변경 내용을 확인합니다.
   
   {% octicon "light-bulb" aria-label="The lightbulb icon" %} 탭을 닫은 경우 포트 패널을 열고 실행 중인 포트 **에 대해 브라우저에서 열기** 아이콘을 클릭합니다.

   ![포트 전달 패널](/assets/images/help/codespaces/quickstart-forward-port.png)

## 변경 내용 커밋 및 푸시

이제 몇 가지 변경을 수행했으므로 통합 터미널 또는 원본 뷰를 사용하여 새 리포지토리에 작업을 게시할 수 있습니다.

{% data reusables.codespaces.source-control-display-dark %}
1. 변경 내용을 스테이징하려면 파일 옆을 `haikus.json` 클릭하거나 여러 파일을 변경하고 모두 스테이징하려는 경우 **변경 내용** 옆에 있는 를 클릭합니다 **+**.

   ![스테이징 단추가 강조 표시된 소스 제어 사이드바](/assets/images/help/codespaces/codespaces-commit-stage.png)

2. 준비된 변경 내용을 커밋하려면 변경 내용을 설명하는 커밋 메시지를 입력한 다음 **커밋** 을 클릭합니다.

   ![커밋 메시지가 있는 소스 제어 사이드바](/assets/images/help/codespaces/vscode-commit-button.png)

3. **분기 게시** 를 클릭합니다.
   
   ![VS Code의 "분기 게시" 단추 스크린샷](/assets/images/help/codespaces/vscode-publish-branch-button.png)

4. "리포지토리 이름" 드롭다운에서 새 리포지토리의 이름을 입력한 다음 **{% data variables.product.company_short %} 프라이빗 리포지토리에 게시** 또는 **{% data variables.product.company_short %} 퍼블릭 리포지토리에 게시** 를 선택합니다.
   
   ![VS Code의 "리포지토리 이름" 드롭다운 스크린샷](/assets/images/help/codespaces/choose-new-repository.png)

   새 리포지토리의 소유자는 codespace를 만든 {% data variables.product.prodname_dotcom %} 계정이 됩니다.
5. 편집기의 오른쪽 아래 모서리에 표시되는 팝업에서 **{% data variables.product.company_short %}에서 열기를 클릭하여 {% data** variables.product.prodname_dotcom_the_website %}에서 새 리포지토리를 봅니다. 새 리포지토리에서 파일을 보고 `haikus.json` codespace에서 변경한 내용이 리포지토리에 성공적으로 푸시되었는지 확인합니다.
   
   ![VS Code의 "GitHub에서 열기" 팝업 스크린샷](/assets/images/help/codespaces/open-on-github.png)

## 확장을 사용하여 개인 설정

브라우저 또는 {% data variables.product.prodname_vscode %} 데스크톱 애플리케이션을 사용하여 codespace에 연결하는 경우 편집기에서 직접 Visual Studio Code Marketplace에 액세스할 수 있습니다. 이 예제에서는 테마를 변경하는 {% data variables.product.prodname_vscode_shortname %} 확장을 설치하지만 워크플로에 유용한 확장을 설치할 수 있습니다.

1. 왼쪽 사이드바에서 확장 아이콘을 클릭합니다.
1. 검색 창에서 를 입력 `fairyfloss` 하고 **설치** 를 클릭합니다.

   ![확장 추가](/assets/images/help/codespaces/add-extension.png)

1. 목록에서 `fairyfloss` 테마를 선택하여 선택합니다.

   ![fairyfloss 테마 선택](/assets/images/help/codespaces/fairyfloss.png)

브라우저 또는 {% data variables.product.prodname_vscode %} 데스크톱 애플리케이션에서 codespace를 사용하고 있고 [설정 동기화](https://code.visualstudio.com/docs/editor/settings-sync) 가 켜져 있는 경우 테마 또는 키보드 바인딩 변경과 같이 현재 codespace의 편집기 설정에 대한 변경 내용은 {% variables.product.prodname_dotcom data variables.product.prodname_vscode %} 계정에 로그인된 모든 인스턴스와 사용자가 만든 다른 코드스페이스에 자동으로 동기화됩니다.

## 다음 단계

codespace 내에서 첫 번째 애플리케이션을 성공적으로 만들고, 개인화하고, 실행했지만 탐색할 것이 훨씬 더 많습니다. 다음은 {% data variables.product.prodname_github_codespaces %}을(를) 사용하여 다음 단계를 수행하는 데 유용한 리소스입니다.

* "[심층 분석](/codespaces/getting-started/deep-dive)": 이 빠른 시작에서는 {% data variables.product.prodname_github_codespaces %}의 몇 가지 기능을 제공했습니다. 심층 분석에서는 기술적인 관점에서 이러한 영역을 살펴봅니다.
* "[리포지토리에 개발 컨테이너 구성 추가](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)": 이 가이드에서는 특정 언어로 {% data variables.product.prodname_github_codespaces %}를 사용하도록 리포지토리를 설정하는 방법에 대한 정보를 제공합니다.
* "[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)": 이 가이드에서는 프로젝트에 대한 {% data variables.product.prodname_codespaces %}에 대한 사용자 지정 구성을 만드는 방법에 대한 세부 정보를 제공합니다.

## 추가 정보

* "[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"
* "[{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
* "[JetBrains IDE에서 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)"
* "[{% data variables.product.prodname_github_codespaces %}와 함께 {% data variables.product.prodname_cli %} 사용](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)"
* "[{% data variables.product.prodname_github_codespaces %}에 대한 기본 편집기 설정](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)."
* "[조직에서 {% data variables.product.prodname_github_codespaces %}의 비용 관리](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
