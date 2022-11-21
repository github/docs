---
title: 리포지토리에 대한 codespace 만들기
intro: 리포지토리의 분기에 대한 Codespace를 만들어 온라인으로 개발할 수 있습니다.
redirect_from:
  - /github/developing-online-with-github-codespaces/creating-a-codespace
  - /github/developing-online-with-codespaces/creating-a-codespace
  - /codespaces/developing-in-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace for a repo
ms.openlocfilehash: 7ce85e7d6dc180d08407205188434e3474b9cfd5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160078'
---
## 리포지토리에 대한 codespace 만들기 정보

{% data reusables.codespaces.ways-to-create-a-codespace %} 이 문서의 탭을 사용하여 codespace를 만드는 각 방법에 대한 지침을 표시합니다.

{% data reusables.codespaces.starting-new-project-template %} 자세한 내용은 "[템플릿에서 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

{% note %}

**참고**: JetBrains IDE를 사용하는 경우 {% data variables.product.prodname_cli %}를 사용하여 codespace를 만들 수 있습니다. 그런 다음 JetBrains 게이트웨이 애플리케이션을 사용하여 JetBrains IDE에서 codespace를 열 수 있습니다. 자세한 내용은 "[JetBrains IDE에서 Codespaces 사용"을 참조하세요](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).

{% endnote %}

개인 {% data variables.product.prodname_dotcom_the_website %} 계정에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용할 수 있으며, 무료 및 Pro 요금제의 계정에 대해 매월 무료 사용 할당량이 포함됩니다. {% data reusables.codespaces.codespaces-continue-by-paying %}

조직은 구성원과 외부 협력자가 조직의 비용으로 codespace를 만들고 사용할 수 있도록 할 수 있습니다. 자세한 내용은 “[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”을 참조하세요.

{% data reusables.codespaces.codespaces-are-personal %}

리포지토리에서 codespace를 만드는 경우 codespace는 비어 있을 수 없는 특정 분기와 연결됩니다. 리포지토리 또는 분기당 둘 이상의 codespace를 만들 수 있습니다.

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

### codespace 만들기 프로세스

codespace를 만드는 경우 개발 환경을 만들고 연결하기 위해 여러 단계가 수행됩니다.

- 1단계: VM 및 스토리지가 codespace에 할당됩니다.
- 2단계: 컨테이너가 생성되고 리포지토리가 복제됩니다.
- 3단계: codespace에 연결할 수 있습니다.
- 4단계: codespace에서 생성 후 설정을 계속합니다.

codespace를 만들 때 수행되는 작업에 대한 자세한 내용은 “[심층 분석](/codespaces/getting-started/deep-dive)”을 참조하세요.

codespace의 수명 주기에 대한 자세한 내용은 "[codespace 수명 주기](/codespaces/developing-in-codespaces/the-codespace-lifecycle)"를 참조하세요.

codespace에 Git 후크를 사용하려면 4단계에서 [`devcontainer.json` 수명 주기 스크립트](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)(예: `postCreateCommand`)를 사용하여 후크를 설정해야 합니다. 리포지토리가 복제된 후 codespace 컨테이너가 생성되므로 컨테이너 이미지에서 구성된 [git 템플릿 디렉터리](https://git-scm.com/docs/git-init#_template_directory)는 codespace에 적용되지 않습니다. 대신, codespace가 생성된 후 후크를 설치해야 합니다. `postCreateCommand` 사용에 대한 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서에서 [`devcontainer.json` 참조](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)를 참조하세요.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.prebuilds-crossreference %}

## 리포지토리에 대한 codespace 만들기

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. 리포지토리 이름 아래에서 "분기" 드롭다운 메뉴를 사용하고 codespace를 만들려는 분기를 선택합니다.

   ![분기 드롭다운 메뉴](/assets/images/help/codespaces/branch-drop-down.png)

1. **{% octicon "code" aria-label="The code icon" %} 코드** 단추를 클릭한 다음 **Codespaces** 탭을 클릭합니다.

   ![새 codespace 단추](/assets/images/help/codespaces/new-codespace-button.png)

   이 리포지토리에 대한 codespace를 조직 또는 해당 부모 엔터프라이즈에 청구할 수 있는 경우 codespace에 대한 비용을 지불할 사람을 알려주는 메시지가 **BRANCH의 codespace 만들기** 단추 아래에 표시됩니다.

1. 기본 옵션을 사용하거나 고급 옵션을 구성한 후 codespace를 만듭니다.
 
   * **기본 옵션 사용**

      기본 옵션을 사용하여 codespace를 만들려면 더하기 기호({% octicon "plus" aria-label="The plus icon" %})를 클릭합니다. 또는 현재 이 리포지토리에 대한 codespace가 없는 경우 **BRANCH에서 codespace 만들기** 를 클릭할 수 있습니다.

   * **옵션 구성**

      다른 머신 유형 또는 특정 `devcontainer.json` 파일과 같은 codespace에 대한 고급 옵션을 구성하려면 다음을 수행합니다.

      1. **Codespaces** 탭의 오른쪽 위에 있는 줄임표(**...**)를 클릭하고 **옵션을 사용하여 새로 만들기를** 선택합니다.

      ![기본 머신 유형 보기](/assets/images/help/codespaces/default-machine-type.png)

      1. codespace에 대한 옵션 페이지의 드롭다운 메뉴에서 원하는 옵션을 선택합니다.

         ![codespace 옵션 페이지](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **참고 사항**
      
         * 옵션 페이지에 책갈피를 지정하여 이 리포지토리 및 분기에 대한 codespace를 빠르게 만들 수 있습니다.
         * [https://github.com/codespaces/new](https://github.com/codespaces/new) 페이지에서는 모든 리포지토리 및 분기에 대한 codespace를 빠르게 생성할 수 있습니다. 브라우저의 주소 표시줄에 `codespace.new`를 입력하면 이 페이지로 빠르게 이동할 수 있습니다.
         * `devcontainer.json` 파일에 대한 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)”를 참조하세요.
         * 머신 유형에 대한 자세한 내용은 “[codespace에 대한 머신 유형 변경](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)”을 참조하세요.
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. **codespace 만들기** 를 클릭합니다.

{% endwebui %}
   
{% vscode %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

{% endvscode %}
   
{% cli %}

{% data reusables.cli.cli-learn-more %}

새 codespace를 만들려면 `gh codespace create` 하위 명령을 사용합니다. 

```shell
gh codespace create 
```

리포지토리를 선택하라는 메시지가 표시됩니다. 이 리포지토리에 대한 codespace가 조직 또는 해당 부모 엔터프라이즈에 청구될 수 있는 경우 codespace에 대한 비용을 누가 지불할 것인지 알려주는 메시지가 표시됩니다. 그런 다음 분기, 개발 컨테이너 구성 파일(둘 이상의 사용 가능한 경우) 및 컴퓨터 유형(둘 이상의 사용 가능한 경우)을 선택하라는 메시지가 표시됩니다.

또는 플래그를 사용하여 다음 옵션을 일부 또는 모두 지정할 수 있습니다.

```shell
gh codespace create -r OWNER/REPO -b BRANCH --devcontainer-path PATH -m MACHINE-TYPE
```

이 예에서는 `owner/repo`를 리포지토리 식별자로 바꿉니다. `branch`를 codespace에서 초기에 체크 아웃할 분기 이름 또는 커밋의 전체 SHA 해시로 바꿉니다. `b` 플래그 없이 `-r` 플래그를 사용하면 기본 분기에서 codespace가 생성됩니다.

`path`을(를) 새 코드스페이스에 사용할 개발 컨테이너 구성 파일의 경로로 바꿉니다. 이 플래그를 생략했으며 둘 이상의 개발 컨테이너 파일을 사용할 수 있는 경우 목록에서 하나를 선택하라는 메시지가 표시됩니다. 개발 컨테이너 구성 파일에 대한 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요.

`machine-type`을 사용 가능한 머신 유형의 유효한 식별자로 바꿉니다. 식별자는 `basicLinux32gb` 및 `standardLinux32gb`와 같은 문자열입니다. 사용 가능한 머신 유형은 리포지토리, 개인 계정, 위치에 따라 다릅니다. 잘못되었거나 사용할 수 없는 머신 유형을 입력하면 오류 메시지에 사용 가능한 유형이 표시됩니다. 이 플래그를 생략했으며 둘 이상의 머신 유형을 사용할 수 있는 경우 목록에서 하나를 선택하라는 메시지가 표시됩니다.

이 명령의 옵션에 대한 자세한 내용은 [ {% data variables.product.prodname_cli %} 설명서](https://cli.github.com/manual/gh_codespace_create)를 참조하세요.

{% endcli %}

## 추가 참고 자료
- "[기존 codespace 열기](/codespaces/developing-in-codespaces/opening-an-existing-codespace)"
- "[{% data variables.product.prodname_github_codespaces %}에서 열기' 배지 추가"](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)
