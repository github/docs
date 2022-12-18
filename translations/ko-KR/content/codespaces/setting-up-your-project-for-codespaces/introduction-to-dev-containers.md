---
title: 개발 컨테이너 소개
intro: Codespace에서 작업할 때 작업 중인 환경은 가상 머신에서 호스트되는 개발 컨테이너 또는 개발자 컨테이너를 사용하여 만들어집니다.
permissions: People with write permissions to a repository can create or edit the codespace configuration.
redirect_from:
  - /github/developing-online-with-github-codespaces/configuring-github-codespaces-for-your-project
  - /codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project
  - /github/developing-online-with-codespaces/configuring-codespaces-for-your-project
  - /codespaces/customizing-your-codespace/configuring-codespaces-for-your-project
  - /codespaces/setting-up-your-project-for-codespaces/configuring-codespaces-for-your-project
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 646f8068e68040f1d12f8155c3ba9e2bdb84c2ca
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185093'
---
## 개발 컨테이너 정보

개발 컨테이너 또는 개발 컨테이너는 완전한 기능을 갖춘 개발 환경을 제공하도록 특별히 구성된 Docker 컨테이너입니다. codespace에서 작업할 때마다 가상 머신에서 개발 컨테이너를 사용하는 것입니다.

리포지토리용으로 만든 codespace가 특정 프로젝트에서 작업하는 데 필요한 모든 도구와 런타임을 갖춘 맞춤형 개발 환경을 제공하도록 해당 리포지토리에 대한 개발 컨테이너를 구성할 수 있습니다. 리포지토리에서 구성을 정의하지 않으면 {% data variables.product.prodname_github_codespaces %}는 기본 구성을 사용하며, 이 구성에는 팀이 프로젝트 개발에 필요할 수 있는 많은 일반적인 도구가 포함됩니다. 자세한 내용은 “[기본 개발 컨테이너 구성 사용](#using-the-default-dev-container-configuration)”을 참조하세요.

개발 컨테이너 구성 파일은 리포지토리의 `.devcontainer` 디렉터리에 포함됩니다. {% data variables.product.prodname_vscode %}를 사용하여 구성 파일을 추가할 수 있습니다. 다양한 프로젝트 형식에 대해 미리 정의된 구성 중에서 선택할 수 있습니다. 추가 구성 없이 해당 구성을 사용하거나, 생성하는 개발 환경을 구체화하도록 구성을 편집할 수 있습니다. 자세한 내용은 “[미리 정의된 개발 컨테이너 구성 사용](#using-a-predefined-dev-container-configuration)”을 참조하세요.

또는 사용자 지정 구성 파일을 추가할 수 있습니다. 자세한 내용은 “[사용자 지정 개발 컨테이너 구성 만들기](#creating-a-custom-dev-container-configuration)”를 참조하세요.

리포지토리에 대한 단일 개발 컨테이너 구성을 정의하거나, 분기에 따라 서로 다른 구성을 정의하거나, 여러 구성을 정의할 수 있습니다. 여러 구성을 사용할 수 있는 경우 사용자는 codespace를 만들 때 원하는 구성을 선택할 수 있습니다. 이는 다양한 프로그래밍 언어의 원본 코드를 포함하는 대규모 리포지토리 또는 다양한 프로젝트에 특히 유용합니다. 여러 팀이 수행 중인 작업에 적절하게 설정된 codespace에서 작업할 수 있는 구성을 선택할 수 있습니다.

템플릿에서 codespace를 만들 때 작업 영역에서 하나 이상의 개발 컨테이너 구성 파일로 시작할 수 있습니다. 환경을 추가로 구성하려면 이러한 파일에서 설정을 추가하거나 제거하고 컨테이너를 다시 빌드하여 작업 중인 codespace에 변경 내용을 적용할 수 있습니다. {% data variables.product.product_name %}의 리포지토리에 codespace를 게시하는 경우 해당 리포지토리에서 만든 모든 codespace는 정의한 구성을 공유합니다. 자세한 내용은 "[codespace에 구성 변경 내용 적용](#applying-configuration-changes-to-a-codespace)" 및 "[템플릿에서 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-to-a-remote-repository).

### devcontainer.json

개발 컨테이너 구성의 기본 파일은 `devcontainer.json` 파일입니다. 이 파일을 사용하여 리포지토리에 대해 만든 codespace의 환경을 확인할 수 있습니다. 이 파일의 콘텐츠는 프레임워크, 도구, 확장, 포트 전달 등을 포함할 수 있는 개발 컨테이너를 정의합니다. `devcontainer.json` 파일에는 일반적으로 `devcontainer.json` 파일과 함께 있는 Dockerfile에 대한 참조가 포함됩니다.

파일이 없는 리포지토리에서 codespace를 `devcontainer.json` 만들거나 {% data variables.product.company_short %}의 빈 템플릿에서 시작하는 경우 기본 개발 컨테이너 구성이 사용됩니다. 자세한 내용은 “[기본 개발 컨테이너 구성 사용](#using-the-default-dev-container-configuration)”을 참조하세요.

`devcontainer.json` 파일은 일반적으로 리포지토리의 `.devcontainer` 디렉터리에 있습니다. 또는 리포지토리의 루트에서 직접 이 파일을 찾을 수 있습니다. 이 경우 파일 이름은 마침표로 시작해야 합니다(`.devcontainer.json`). 

리포지토리에서 개발 컨테이너 구성을 선택하려는 경우 `.devcontainer/devcontainer.json`(또는 `.devcontainer.json`) 파일의 대체 파일이 경로 `.devcontainer/SUBDIRECTORY/devcontainer.json`의 자체 하위 디렉터리에 있어야 합니다. 예를 들어, 다음 두 가지 구성을 선택할 수 있습니다. 
* `.devcontainer/database-dev/devcontainer.json` 
* `.devcontainer/gui-dev/devcontainer.json`

리포지토리에 여러 `devcontainer.json` 파일이 있는 경우 각 codespace는 구성 중 하나에서만 만들어집니다. 설정은 `devcontainer.json` 파일 간에 가져오거나 상속할 수 없습니다. 사용자 지정 하위 디렉터리의 `devcontainer.json` 파일에 `devcontainer.json` 파일에서 명령으로 실행되는 스크립트 또는 Dockerfile과 같은 종속 파일이 있는 경우 동일한 하위 디렉터리에 해당 파일을 함께 배치하는 것이 좋습니다.

codespace를 만들 때 기본 개발 컨테이너 구성을 선택하는 방법에 대한 자세한 내용은 "[리포지토리에 대한 codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)"를 참조하세요.

{% data reusables.codespaces.more-info-devcontainer %}

#### devcontainer.json을 사용하는 방법

`devcontainer.json` 파일이 “개인 설정”이 아닌 “사용자 지정”을 제공한다고 생각하는 것이 유용합니다. 코드베이스에서 작업하는 모든 사용자에게 개인 기본 설정 항목이 아니라 개발 환경의 표준 요소로 필요한 항목만 포함해야 합니다. Linter 같은 항목은 표준화하고 모든 사용자가 설치하게 하는 것이 좋으므로 `devcontainer.json` 파일에 포함하는 것이 좋습니다. 사용자 인터페이스 데코레이터 또는 테마 같은 항목은 `devcontainer.json` 파일에 넣으면 안 되는 개인적인 선택입니다.

dot 파일 및 설정 동기화를 사용하여 codespace를 개인 설정할 수 있습니다. 자세한 내용은 “[계정에 대한 {% data variables.product.prodname_github_codespaces %} 개인 설정](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)”을 참조하세요.

### Dockerfile

개발 컨테이너 구성의 일부로 Dockerfile을 추가할 수 있습니다. 

Dockerfile은 Docker 컨테이너 이미지를 만드는 데 필요한 명령을 포함하는 텍스트 파일입니다. 이 이미지는 누군가가 이 Dockerfile을 참조하는 `devcontainer.json` 파일을 사용하여 codespace를 만들 때마다 개발 컨테이너를 생성하는 데 사용됩니다. Dockerfile의 명령은 일반적으로 만들어질 새 이미지의 기반이 되는 부모 이미지를 먼저 참조합니다. 다음으로, 이미지 만들기 프로세스 중에 실행되는 명령(예: 소프트웨어 패키지 설치)이 뒤따릅니다.

개발 컨테이너의 Dockerfile은 일반적으로 참조되는 `devcontainer.json`과 함께 `.devcontainer` 폴더에 있습니다. 

{% note %}

**참고**: Dockerfile을 사용하는 대신 `devcontainer.json` 파일의 `image` 속성을 사용하여 사용하려는 기존 이미지를 직접 참조할 수 있습니다. 여기서 지정하는 이미지는 설정된 모든 조직 이미지 정책에서 허용되어야 합니다. 자세한 내용은 "[codespaces에 대한 기본 이미지 제한"을 참조하세요.](/codespaces/managing-codespaces-for-your-organization/restricting-the-base-image-for-codespaces) Dockerfile과 이미지를 모두 찾을 수 없는 경우 기본 컨테이너 이미지가 사용됩니다. 자세한 내용은 “[기본 개발 컨테이너 구성 사용](#using-the-default-dev-container-configuration)”을 참조하세요.

{% endnote %}

#### 간단한 Dockerfile 예제

다음 예제에서는 네 가지 명령을 사용합니다.

`ARG`는 빌드 시간 변수를 정의합니다.

`FROM`은 생성된 Docker 이미지의 기반이 되는 부모 이미지를 지정합니다.

`COPY`는 파일을 복사하고 파일 시스템에 추가합니다. 

`RUN`은 패키지 목록을 업데이트하고 스크립트를 실행합니다. 주석 처리된 명령에 표시된 대로 `RUN` 명령을 사용하여 소프트웨어를 설치할 수도 있습니다. 여러 명령을 실행하려면 `&&`를 사용하여 명령을 단일 `RUN` 문으로 결합합니다.

```Dockerfile{:copy}
ARG VARIANT="16-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"

COPY library-scripts/github-debian.sh /tmp/library-scripts/
RUN apt-get update && bash /tmp/library-scripts/github-debian.sh
```

Docker 명령에 관한 자세한 내용은 Docker 설명서의 “[Dockerfile 참조](https://docs.docker.com/engine/reference/builder)”를 참조하세요.

#### Dockerfile 사용

Dockerfile을 개발 컨테이너 구성의 일부로 사용하려면 `dockerfile` 속성을 사용하여 `devcontainer.json` 파일에서 참조합니다.

```json{:copy}
{
  ...
  "build": { "dockerfile": "Dockerfile" },
  ...
}
```

개발 컨테이너에서 기존 컨테이너 오케스트레이션을 사용하려는 경우 다양한 옵션을 사용할 수 있습니다. 자세한 내용은 개발 컨테이너 웹 사이트의 [사양](https://containers.dev/implementors/spec/#orchestration-options) 의 "오케스트레이션 옵션" 섹션을 참조하세요.

## 기본 개발 컨테이너 구성 사용

리포지토리에서 구성을 정의하지 않으면 {% data variables.product.prodname_dotcom %}는 기본 Linux 이미지를 사용하여 codespace를 만듭니다. 이 Linux 이미지에는 Python, Node, PHP, Java, Go, C++, Ruby, .NET Core/C# 등의 인기 있는 언어에 대한 다양한 런타임 버전이 포함됩니다. 이러한 언어의 최신 또는 LTS 릴리스가 사용됩니다. JupyterLab, Conda 등의 데이터 과학 및 기계 학습을 지원하는 도구도 있습니다. 이미지에는 Git, GitHub CLI, yarn, openssh, vim 등의 다른 개발자 도구 및 유틸리티도 포함됩니다. 포함된 모든 언어, 런타임 및 도구를 보려면 codespace 터미널 내에서 `devcontainer-info content-url` 명령을 사용하고 명령이 출력하는 URL을 따릅니다.

기본 Linux 이미지에 포함된 항목에 대한 자세한 내용은 리포지토리를 [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal) 참조하세요. 

기본 구성은 {% data variables.product.prodname_github_codespaces %}에서 제공하는 언어와 도구를 사용하는 소규모 프로젝트에서 작업하는 경우 좋은 옵션입니다.

## 미리 정의된 컨테이너 구성 사용

{% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_codespaces %}을(를) 사용하거나 웹 브라우저에서 미리 정의된 구성 목록에서 선택하여 리포지토리에 대한 개발 컨테이너 구성을 만들 수 있습니다. 이러한 구성은 특정 프로젝트 형식에 대한 일반적인 설정을 제공하며 이미 적절한 컨테이너 옵션, {% data variables.product.prodname_vscode %} 설정 및 설치해야 하는 {% 데이터 variables.product.prodname_vscode %} 확장이 있는 구성을 빠르게 시작하는 데 도움이 될 수 있습니다.

추가 확장성이 필요한 경우 사전 정의된 구성을 사용하는 것이 좋습니다. 미리 정의된 구성으로 시작하고 프로젝트에 필요한 대로 수정할 수도 있습니다. 미리 정의된 개발 컨테이너의 정의에 대한 자세한 내용은 리포지토리를 [`devcontainers/images`](https://github.com/devcontainers/images/tree/main/src) 참조하세요.

codespace에서 작업하는 동안 또는 리포지토리에서 로컬로 작업하는 동안 미리 정의된 개발 컨테이너 구성을 추가할 수 있습니다. 코드스페이스에 연결되지 않고 로컬로 작업하는 동안 {% data variables.product.prodname_vscode_shortname %}에서 이 작업을 수행하려면 "Dev Containers" 확장을 설치하고 사용하도록 설정해야 합니다. 이 확장에 대한 자세한 내용은 [{% data variables.product.prodname_vs_marketplace_shortname %}를 참조하세요](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers). 다음 절차에서는 codespace를 사용할 때의 프로세스를 설명합니다. codespace에 연결되지 않은 경우 {% data variables.product.prodname_vscode_shortname %}의 단계는 매우 유사합니다.

{% data reusables.codespaces.command-palette-container %}
1. 사용할 정의를 클릭합니다.

   ![미리 정의된 컨테이너 정의 목록의 스크린샷](/assets/images/help/codespaces/predefined-container-definitions-list.png)

1. 프롬프트에 따라 정의를 사용자 지정합니다. 정의를 사용자 정의하는 옵션에 대한 자세한 내용은 “[`devcontainer.json` 파일에 기능 추가](#adding-additional-features-to-your-devcontainerjson-file)”를 참조하세요.
1. **확인** 을 클릭합니다.

   ![확인 단추의 스크린샷](/assets/images/help/codespaces/prebuilt-container-ok-button.png)

1. codespace에서 작업하는 경우 창의 오른쪽 아래에 있는 메시지에서 **지금 다시 빌드** 를 클릭하여 변경 내용을 적용합니다. 컨테이너를 다시 빌드하는 방법에 대한 자세한 내용은 “[구성에 변경 내용 적용](#applying-configuration-changes-to-a-codespace)”을 참조하세요.

   !['지금 다시 빌드'라는 프롬프트의 스크린샷](/assets/images/help/codespaces/rebuild-prompt.png)

### `devcontainer.json` 파일에 추가 기능 추가

{% data reusables.codespaces.about-features %} 자세한 내용은 "[파일에 기능 추가"를 `devcontainer.json` 참조하세요](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=vscode).

## 사용자 지정 개발 컨테이너 구성 만들기

미리 정의된 구성이 요구 사항을 충족하지 않는 경우 자체 `devcontainer.json` 파일을 작성하여 사용자 지정 구성을 만들 수 있습니다.

* 리포지토리에서 codespace를 만드는 모든 사용자가 사용할 단일 `devcontainer.json` 파일을 추가하는 경우 리포지토리의 루트에 있는 `.devcontainer` 디렉터리 내에 파일을 만듭니다. 
* 사용자에게 구성 선택 항목을 제공하려는 경우 각각 `.devcontainer` 디렉터리의 개별 하위 디렉터리 내에 있는 여러 사용자 지정 `devcontainer.json` 파일을 만들 수 있습니다.

   {% note %}

   **참고**:
   - 아래`.devcontainer`의 두 수준 이상 디렉터리에서 파일을 찾을 `devcontainer.json` 수 없습니다. 예를 들어, `.devcontainer/teamA/devcontainer.json` 파일은 작동하지만 `.devcontainer/teamA/testing/devcontainer.json`은 작동하지 않습니다.
   - {% data reusables.codespaces.configuration-choice-templates %} 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 템플릿 리포지토리 설정](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)"을 참조하세요.

   {% endnote %}

   리포지토리에 여러 `devcontainer.json` 파일이 있으면 codespace 만들기 옵션 페이지에 나열됩니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

   ![선택한 구성 파일 스크린샷](/assets/images/help/codespaces/configuration-file-choice.png)

### `devcontainer.json` 파일 추가

리포지토리에 파일이 아직 `devcontainer.json` 없는 경우 {% data variables.product.prodname_dotcom_the_website %}에서 파일을 빠르게 추가할 수 있습니다.
1. 리포지토리로 이동하여 **{% octicon "code" aria-label="The code icon" %} 코드** 드롭다운을 클릭합니다.
1. **Codespaces** 탭에서 줄임표(**...**)를 클릭한 다음 **, 개발 컨테이너 구성을** 선택합니다.

   !["개발 컨테이너 구성"이 강조 표시된 코드 드롭다운의 스크린샷](/assets/images/help/codespaces/configure-dev-container.png)

편집기에서 새 `.devcontainer/devcontainer.json` 파일이 열립니다. 파일에는 새 도구, 라이브러리 또는 런타임을 `features` 추가할 수 있는 개체를 포함하여 몇 가지 초기 속성이 포함됩니다. 자세한 내용은 "[파일에 기능 추가"를 `devcontainer.json` 참조하세요](/codespaces/setting-up-your-project-for-codespaces/adding-features-to-a-devcontainer-file?tool=webui).

리포지토리에 이미 하나 이상의 `devcontainer.json` 파일이 포함된 경우 **개발 컨테이너 구성** 을 클릭하면 containers.dev [사양](https://containers.dev/implementors/spec/#devcontainerjson)에 따라 우선 순위가 가장 높은 기존 `devcontainer.json` 파일이 열립니다. 

### codespace를 만드는 동안 기본 구성 선택

`.devcontainer/devcontainer.json` 또는 `.devcontainer.json`이 있으면 해당 파일은 codespace를 만들 때 사용 가능한 구성 파일 목록에서 기본 선택 항목이 됩니다. 두 파일이 모두 없으면 기본 개발 컨테이너 구성이 기본적으로 선택됩니다. 

![선택한 기본 구성 선택 스크린샷](/assets/images/help/codespaces/configuration-file-choice-default.png)

### devcontainer.json 파일 편집

`devcontainer.json` 파일에서 지원되는 구성 키를 추가하고 편집하여 설치할 {% data variables.product.prodname_vscode_shortname %} 확장과 같은 codespace 환경의 측면을 지정할 수 있습니다. {% data reusables.codespaces.more-info-devcontainer %}

파일은 `devcontainer.json` JSONC(주석이 있는 JSON) 형식을 사용하여 작성됩니다. 이렇게 하면 구성 파일 내에 주석을 포함할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 “[{% data variables.product.prodname_vscode_shortname %}를 사용하여 JSON 편집](https://code.visualstudio.com/docs/languages/json#_json-with-comments)”을 참조하세요.

{% note %}

**참고**: Linter를 사용하여 `devcontainer.json` 파일의 유효성을 검사하는 경우 JSON이 아닌 JSONC로 설정되어야 합니다. 그렇지 않으면 주석이 오류로 보고됩니다.

{% endnote %}

### {% data variables.product.prodname_vscode_shortname %}에 대한 인터페이스 설정

작업 영역, 원격 [Codespaces] 및 User의 세 가지 범위로 {% data variables.product.prodname_vscode_shortname %}에 대한 인터페이스 설정을 구성할 수 있습니다. {% data variables.product.prodname_vscode_shortname %} 설정 편집기에서 이러한 범위를 볼 수 있습니다.

![설정 편집기에서 범위 선택을 보여 주는 스크린샷](/assets/images/help/codespaces/scopes-for-vscode.png)

여러 범위에서 설정이 정의된 경우 작업 영역 설정, 원격 [codespace], 사용자 순으로 적용됩니다.  

{% data variables.product.prodname_vscode_shortname %}에 대한 기본 인터페이스 설정을 두 곳에서 정의할 수 있습니다.

* 리포지토리의 `.vscode/settings.json` 파일에 정의된 인터페이스 설정은 codespace에서 작업 영역 범위 설정으로 적용됩니다.
* 파일의 `settings` 키에 정의된 인터페이스 설정은 codespace에서 `devcontainer.json` 원격 [Codespaces] 범위 설정으로 적용됩니다.

## codespace에 구성 변경 내용 적용

구성에 대한 변경 내용은 다음에 codespace를 만들 때 적용됩니다. 그러나 컨테이너를 다시 빌드하여 기존 codespace에 변경 내용을 적용할 수 있습니다. {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트 또는 데스크톱 애플리케이션의 codespace 내에서 이 작업을 수행하거나 {% data variables.product.prodname_cli %}를 사용할 수 있습니다.

### {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트 또는 데스크톱 애플리케이션에서 개발 컨테이너 다시 빌드

{% data reusables.codespaces.rebuild-command %}
1. {% data reusables.codespaces.recovery-mode %}

   ![복구 모드에 대한 오류 메시지 스크린샷](/assets/images/help/codespaces/recovery-mode-error-message.png)

   - 만들기 로그를 검토하여 오류를 진단하려면 **만들기 로그 보기** 를 클릭합니다.
   - 로그에서 식별된 오류를 수정하려면 `devcontainer.json` 파일을 업데이트합니다.
   - 변경 내용을 적용하려면 컨테이너를 다시 빌드합니다. 

### {% data variables.product.prodname_cli %}을(를) 사용하여 개발 컨테이너 다시 빌드

VS Code 외부에서 개발 컨테이너 구성을 변경한 경우(예: {% data variables.product.prodname_dotcom_the_website %} 또는 JetBrains IDE에서) {% data variables.product.prodname_cli %}를 사용하여 기존 codespace에 대한 개발 컨테이너를 다시 빌드할 수 있습니다.

1. 터미널에서 다음 명령을 입력합니다.

   ```
   gh cs rebuild
   ```

   codespace가 나열됩니다.

1. 키보드의 화살표 키를 사용하여 필요한 codespace를 강조 표시한 다음 Enter 키를 누릅니 <kbd>다</kbd>.


## 추가 참고 자료

- “[codespace 사전 빌드](/codespaces/prebuilding-your-codespaces)”
