---
title: devcontainer.json 파일에 기능 추가
shortTitle: Adding features
intro: '기능을 사용하면 도구, 런타임 또는 라이브러리를 개발 컨테이너 구성에 빠르게 추가할 수 있습니다.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 7e72739e93e83995d86baf19d62f7bf2e1c5b6bc
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180829'
---
{% data reusables.codespaces.about-features %} 이 문서의 탭을 사용하여 이러한 각 기능 추가 방법에 대한 지침을 표시합니다.

## 파일에 기능 `devcontainer.json` 추가

{% webui %}

1. {% data variables.product.prodname_dotcom_the_website %}에서 리포지토리로 이동하여 파일을 찾 `devcontainer.json` 은 다음 {% octicon "pencil" aria-label="The edit icon" %}을 클릭하여 파일을 편집합니다.
   
   파일이 아직 `devcontainer.json` 없는 경우 지금 만들 수 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)”를 참조하세요.
1. 파일 편집기 오른쪽의 **Marketplace** 탭에서 추가하려는 기능을 찾아보거나 검색한 다음 기능의 이름을 클릭합니다.

   ![검색 창에 "Terra"가 있는 Marketplace 탭의 Terraform 기능 스크린샷](/assets/images/help/codespaces/feature-marketplace.png)
3. "설치"에서 코드 조각을 클릭하여 클립보드에 복사한 다음, 코드 조각을 파일의 `features` 개체에 `devcontainer.json` 붙여넣습니다.

   ![Marketplace 탭의 설치 섹션에 있는 코드 블록 스크린샷](/assets/images/help/codespaces/feature-installation-code.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        ...
    }
    ```
1. 기본적으로 기능의 최신 버전이 사용됩니다. 다른 버전을 선택하거나 기능에 대한 다른 옵션을 구성하려면 "옵션" 아래에 나열된 속성을 확장하여 사용 가능한 값을 확인한 다음 파일의 개체를 수동으로 편집하여 옵션을 추가합니다 `devcontainer.json` .

   !["버전" 및 "tflint"가 확장된 Marketplace 탭의 옵션 섹션 스크린샷](/assets/images/help/codespaces/feature-options.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        ...
    }
    ```
1. 변경 내용을 파일에 커밋합니다 `devcontainer.json` .

구성 변경 내용은 리포지토리에서 만든 새 codespace에 적용됩니다. 기존 codespace에서 변경 내용을 적용하려면 파일에 대한 업데이트를 `devcontainer.json` codespace로 끌어온 다음 codespace에 대한 컨테이너를 다시 빌드해야 합니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)”를 참조하세요.

{% endwebui %}

{% vscode %}

{% note %}

코드스페이스에 연결되지 않고 로컬로 작업하는 동안 {% data variables.product.prodname_vscode_shortname %}의 기능을 추가하려면 "Dev Containers" 확장을 설치하고 사용하도록 설정해야 합니다. 이 확장에 대한 자세한 내용은 [{% data variables.product.prodname_vs_marketplace_shortname %}를 참조하세요](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

{% endnote %}

{% data reusables.codespaces.command-pallette %}
2. "구성"을 입력하고 **Codespaces: Dev Container Features 구성** 을 선택합니다.

   ![명령 팔레트의 Devcontainer 기능 구성 명령](/assets/images/help/codespaces/codespaces-configure-features.png)

3. 기능 선택을 업데이트한 다음 **확인** 을 클릭합니다.

   ![컨테이너 구성 중에 추가 기능 선택 메뉴](/assets/images/help/codespaces/select-additional-features.png)

4. codespace에서 작업하는 경우 오른쪽 아래 모서리에 프롬프트가 표시됩니다. 컨테이너를 다시 빌드하고 작업 중인 codespace에 변경 내용을 적용하려면 **지금 다시 빌드** 를 클릭합니다.

   ![명령 팔레트의 “Codespaces: 컨테이너 다시 빌드”](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}
