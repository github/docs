---
title: GitHub Codespaces에 대한 Node.js 프로젝트 설정
allowTitleToDifferFromFilename: true
shortTitle: Setting up your Node.js project
intro: '사용자 지정 개발 컨테이너를 만들어 {% data variables.product.prodname_github_codespaces %}에서 JavaScript, Node.js 또는 TypeScript 프로젝트를 시작합니다.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/getting-started-with-codespaces/getting-started-with-your-nodejs-project-in-codespaces
type: tutorial
topics:
  - Codespaces
  - Developer
  - Node
  - JavaScript
hasExperimentalAlternative: true
hidden: true
ms.openlocfilehash: 19c29f7d3c8110d1c671a9af46227a399a467800
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159905'
---
## 소개

이 가이드에서는 JavaScript, Node.js 또는 TypeScript 프로젝트 {% data reusables.codespaces.setting-up-project-intro %}를 설정하는 방법을 보여 줍니다.

### 필수 조건

- {% data variables.product.prodname_dotcom_the_website %}의 리포지토리에 기존 JavaScript, Node.js 또는 TypeScript 프로젝트가 있어야 합니다. 프로젝트가 없는 경우 다음 예제(https://github.com/microsoft/vscode-remote-try-node )를 사용하여 이 자습서를 사용해 볼 수 있습니다.
- 조직에 대해 {% 데이터 variables.product.prodname_github_codespaces %}을(를) 사용하도록 설정해야 합니다.

## 1단계: codespace에서 프로젝트 열기

1. 리포지토리 이름 아래에서 **{% octicon "code" aria-label="The code icon" %} 코드** 드롭다운 메뉴를 사용하고 **Codespaces** 탭에서 더하기 기호({% octicon "plus" aria-label="The plus icon" %})를 클릭합니다.

   ![새 codespace 단추](/assets/images/help/codespaces/new-codespace-button.png)

codespace를 만들면 프로젝트가 전용인 원격 VM에 만들어집니다. 기본적으로 codespace의 컨테이너에는 Node.js, JavaScript, Typescript, nvm, npm, yarn을 포함한 다양한 언어와 런타임이 있습니다. 또한 git, wget, rsync, openssh, nano와 같은 일반적인 도구 세트가 포함되어 있습니다.

{% data reusables.codespaces.customize-vcpus-and-ram %}

## 2단계: 템플릿에서 리포지토리에 개발 컨테이너 구성 추가

{% data variables.product.prodname_github_codespaces %}에 대한 기본 개발 컨테이너는 기본적으로 [vscode-remote-try-node](https://github.com/microsoft/vscode-remote-try-node)와 같은 Node.js 프로젝트 실행을 지원합니다. 그러나 프로젝트에 필요한 특정 도구와 스크립트를 정의할 수 있으므로 고유한 개발 컨테이너를 구성하는 것이 좋습니다. 이렇게 하면 리포지토리의 모든 {% data variables.product.prodname_github_codespaces %} 사용자에게 완전히 재현 가능한 환경이 보장됩니다.

{% data reusables.codespaces.setup-custom-devcontainer %}

{% data reusables.codespaces.command-palette-container %}
1. 이 예제에서는 **Node.js** 를 클릭합니다.  추가 기능이 필요한 경우 Node에 특정한 컨테이너 또는 Node 및 MongoDB와 같은 도구 조합을 선택할 수 있습니다.

   ![목록에서 Node 옵션 선택](/assets/images/help/codespaces/add-node-prebuilt-container.png)

1. Node.js의 권장 버전을 클릭합니다.

   ![Node.js 버전 선택](/assets/images/help/codespaces/add-node-version.png)

{% data reusables.codespaces.rebuild-command %}

### 개발 컨테이너 분석

Node.js 개발 컨테이너 템플릿을 추가하면 다음 파일이 있는 프로젝트 리포지토리의 루트에 `.devcontainer` 디렉터리가 추가됩니다.

- `devcontainer.json`
- Dockerfile

새로 추가된 `devcontainer.json` 파일은 샘플 뒤에 설명된 몇 가지 속성을 정의합니다.

#### devcontainer.json

```json
// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:
// https://github.com/microsoft/vscode-dev-containers/tree/v0.162.0/containers/javascript-node
{
    "name": "Node.js",
    "build": {
        "dockerfile": "Dockerfile",
        // Update 'VARIANT' to pick a Node version: 10, 12, 14
        "args": { "VARIANT": "14" }
    },

    // Set *default* container specific settings.json values on container create.
    "settings": {
        "terminal.integrated.shell.linux": "/bin/bash"
    },

    // Add the IDs of extensions you want installed when the container is created.
    "extensions": [
        "dbaeumer.vscode-eslint"
    ],

    // Use 'forwardPorts' to make a list of ports inside the container available locally.
    // "forwardPorts": [],

    // Use 'postCreateCommand' to run commands after the container is created.
    // "postCreateCommand": "yarn install",

    // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.
    "remoteUser": "node"
}
```

- **name** - 개발 컨테이너의 이름은 무엇으로든 지정할 수 있으며 이것은 기본값입니다.
- **build** - 빌드 속성입니다.
  - **dockerfile** - `build` 개체에서 `dockerfile`은 템플릿에서도 추가된 Dockerfile의 경로를 포함합니다.
  - **args**
    - **variant**: 이 파일에는 Dockerfile에 전달되는 노드 변형인 빌드 인수가 하나만 포함되어 있습니다.
- **settings** - 설정할 수 있는 {% data variables.product.prodname_vscode %} 설정입니다.
  - **terminal.integrated.shell.linux** - 기본값은 Bash지만 이를 수정하여 다른 터미널 셸을 사용할 수 있습니다.
- **extensions** - 기본값으로 포함된 확장입니다.
  - **dbaeumer.vscode-eslint** - ES 린트는 린팅을 위한 유용한 확장이지만 JavaScript의 경우 포함할 수 있는 유용한 Marketplace 확장이 많이 있습니다.
- **forwardPorts** - 여기에 나열된 모든 포트는 자동으로 전달됩니다. 자세한 내용은 “[codespace에서 포트 전달](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)”을 참조하세요.
- **postCreateCommand** - codespace가 생성된 후 Dockerfile에 정의되지 않은 명령을 실행하는 데 사용합니다.
- **remoteUser** - 기본적으로 vscode 사용자로 실행되지만 필요에 따라 이를 루트로 설정할 수 있습니다.

#### Dockerfile

```bash
# [Choice] Node.js version: 14, 12, 10
ARG VARIANT="14-buster"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"
```

Dockerfile을 사용하여 컨테이너 계층을 추가하고 컨테이너에 포함하려는 OS 패키지, 노드 버전 또는 전역 패키지를 지정할 수 있습니다.

## 3단계: devcontainer.json 파일 수정

개발 컨테이너 구성을 추가하고 모든 기능을 기본적으로 이해하면 이제 환경을 추가로 사용자 지정하기 위해 변경할 수 있습니다. 이 예제에서는 codespace가 시작될 때 npm을 설치하는 속성을 추가하고 컨테이너 내의 포트 목록을 로컬에서 사용할 수 있도록 합니다.

1. 탐색기의 트리에서 `devcontainer.json` 파일을 선택하여 엽니다. 이를 보려면 `.devcontainer` 폴더를 확장해야 할 수 있습니다.

   ![Explorer의 devcontainer.json 파일](/assets/images/help/codespaces/devcontainers-options.png)

2. `extensions` 다음에 있는 `devcontainer.json` 파일에 다음 줄을 추가합니다.

   ```json{:copy}
   "postCreateCommand": "npm install",
   "forwardPorts": [4000],
   ```

   {% data reusables.codespaces.more-info-devcontainer %}

{% data reusables.codespaces.rebuild-command %}

   {% data reusables.codespaces.rebuild-reason %}

## 4단계: 애플리케이션 실행

이전 섹션에서는 `postCreateCommand`을 사용하여 npm을 통해 패키지 세트를 설치했습니다. 이제 이를 사용하여 npm으로 애플리케이션을 실행할 수 있습니다.

1. `npm start`을 사용하여 터미널에서 시작 명령을 실행합니다.

   ![터미널에서 npm 시작](/assets/images/help/codespaces/codespaces-npmstart.png)

2. 프로젝트가 시작되면 {% data variables.product.prodname_vscode_shortname %}의 오른쪽 아래 모서리에 프로젝트에서 사용하는 포트에 연결하라는 메시지가 포함된 "알림 메시지"가 표시됩니다.

   ![포트 전달 "알림" 알림](/assets/images/help/codespaces/codespaces-port-toast.png)

## 5단계: 변경 내용 커밋

{% data reusables.codespaces.committing-link-to-procedure %}

## 다음 단계

이제 {% data variables.product.prodname_github_codespaces %}에서 JavaScript 프로젝트 개발을 시작할 준비가 되었습니다. 다음은 고급 시나리오를 위한 몇 가지 추가 리소스입니다.

{% data reusables.codespaces.next-steps-adding-devcontainer %}
