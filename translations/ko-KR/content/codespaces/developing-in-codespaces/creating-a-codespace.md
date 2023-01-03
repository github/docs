---
title: codespace 만들기
intro: 리포지토리의 분기에 대한 Codespace를 만들어 온라인으로 개발할 수 있습니다.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-github-codespaces/creating-a-codespace
- /github/developing-online-with-codespaces/creating-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Fundamentals
- Developer
shortTitle: Create a codespace
ms.openlocfilehash: ae14b01f409f9c6bfb43c579aaa9c76bb2421cfe
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148106735"
---
## codespace 만들기 정보

{% data variables.product.prodname_dotcom_the_website %}이나 {% data variables.product.prodname_vscode %}에서 또는 {% data variables.product.prodname_cli %}를 사용하여 codespace를 만들 수 있습니다. {% data reusables.codespaces.codespaces-are-personal %}

codespace는 리포지토리의 특정 분기와 연결되며, 리포지토리를 비워 둘 수 없습니다. 리포지토리 또는 분기당 둘 이상의 codespace를 만들 수 있습니다.

codespace를 만드는 경우 개발 환경을 만들고 연결하기 위해 여러 단계가 수행됩니다.

- 1단계: VM 및 스토리지가 codespace에 할당됩니다.
- 2단계: 컨테이너가 생성되고 리포지토리가 복제됩니다.
- 3단계: codespace에 연결할 수 있습니다.
- 4단계: codespace에서 생성 후 설정을 계속합니다.

codespace를 만들 때 수행되는 작업에 대한 자세한 내용은 “[심층 분석](/codespaces/getting-started/deep-dive)”을 참조하세요.

codespace의 수명 주기에 대한 자세한 내용은 “[codespace 수명 주기](/codespaces/developing-in-codespaces/codespaces-lifecycle)”를 참조하세요.

codespace에 Git 후크를 사용하려면 4단계에서 [`devcontainer.json` 수명 주기 스크립트](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts)(예: `postCreateCommand`)를 사용하여 후크를 설정해야 합니다. 리포지토리가 복제된 후 codespace 컨테이너가 생성되므로 컨테이너 이미지에서 구성된 [git 템플릿 디렉터리](https://git-scm.com/docs/git-init#_template_directory)는 codespace에 적용되지 않습니다. 대신, codespace가 생성된 후 후크를 설치해야 합니다. `postCreateCommand` 사용에 대한 자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서에서 [`devcontainer.json` 참조](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties)를 참조하세요.

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.you-can-see-all-your-codespaces %}

{% data reusables.codespaces.prebuilds-crossreference %}

## {% data variables.product.prodname_github_codespaces %} 액세스

{% data variables.product.prodname_github_codespaces %}에 액세스할 수 있는 경우 리포지토리를 볼 때 **{% octicon "code" aria-label="The code icon" %} 코드** 드롭다운 메뉴 내에 “Codespace” 탭이 표시됩니다.

다음 조건에서 {% data variables.product.prodname_github_codespaces %}에 액세스할 수 있습니다.

이 모두는 true입니다.
* {% data variables.product.prodname_codespaces %}를 사용하도록 설정했으며 지출 한도를 설정한 조직의 구성원 또는 외부 협력자입니다.
* 조직 소유자는 조직의 비용으로 codespace를 만들 수 있게 허용했습니다.
* codespace를 만들려는 리포지토리는 이 조직이 소유합니다.

또는 이 두 가지 모두 사실입니다.
* 개별 사용자에 대한 {% data variables.product.prodname_codespaces %}의 베타에 참여하고 있습니다.
* codespace를 만들려는 리포지토리를 소유하거나 구성원 또는 외부 협력자인 조직이 소유하고 있습니다.

소유자 또는 청구 관리자가 먼저 지출 한도를 설정해야 조직에서 {% data variables.product.prodname_codespaces %}를 사용할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces#about-spending-limits-for-codespaces)”를 참조하세요.

조직 소유자는 조직의 비용으로 codespace를 만들고 사용할 수 있는 사용자를 지정할 수 있습니다. 조직 소유자는 codespace 사용량이 조직에 청구되는 것을 방지할 수도 있습니다. 자세한 내용은 “[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization#choose-who-can-create-codespaces-that-are-billed-to-your-organization)”을 참조하세요.

## codespace 만들기

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
1. 리포지토리 이름 아래에 있는 “분기” 드롭다운 메뉴를 사용하여 codespace를 만들 분기를 선택합니다.

   ![분기 드롭다운 메뉴](/assets/images/help/codespaces/branch-drop-down.png)

1. **{% octicon "code" aria-label="The code icon" %} 코드** 단추를 클릭한 다음 **Codespaces** 탭을 클릭합니다.

   ![새 codespace 단추](/assets/images/help/codespaces/new-codespace-button.png)

   이 리포지토리에 대한 codespace를 청구할 수 있는 경우 CODESPACE에 대한 비용을 지불할 사용자를 알려주는 메시지가 **BRANCH에서 codespace 만들기** 단추 아래에 표시됩니다.

1. 기본 옵션을 사용하거나 고급 옵션을 구성한 후 codespace를 만듭니다.
 
   * **기본 옵션 사용**

      기본 옵션을 사용하여 codespace을 만들려면 **분기에 codespace 만들기** 를 클릭합니다.

      필요에 따라 **분기에 codespace 만들기** 를 클릭하기 전에 단추 옆의 아래쪽 화살표를 클릭하여 codespace에 사용할 머신 유형을 확인할 수 있습니다.

      ![기본 머신 유형 보기](/assets/images/help/codespaces/default-machine-type.png)

      {% note %}

      **참고**: 기본적으로 리포지토리에 유효한 리소스가 가장 적은 머신 유형이 선택됩니다.

      {% endnote %}

   * **옵션 구성**

      다른 머신 유형 또는 특정 `devcontainer.json` 파일과 같은 codespace에 대한 고급 옵션을 구성하려면 다음을 수행합니다.

      1. **분기에서 codespace 만들기** 단추 옆의 아래쪽 화살표를 클릭한 다음 **구성 및 codespace 만들기** 를 클릭합니다.
      1. **codespace 구성 및 만들기** 단추를 클릭합니다.
      1. codespace의 옵션 페이지의 드롭다운 메뉴에서 원하는 옵션을 선택합니다.

         ![codespace 옵션 페이지](/assets/images/help/codespaces/advanced-options.png)

         {% note %}
      
         **참고 사항**
      
         * 옵션 페이지에 책갈피를 지정하여 이 리포지토리 및 분기에 대한 codespace를 빠르게 만들 수 있습니다.
         * [https://github.com/codespaces/new](https://github.com/codespaces/new) 페이지에서는 모든 리포지토리 및 분기에 대한 codespace를 빠르게 생성할 수 있습니다. 브라우저의 주소 표시줄에 `codespace.new`를 입력하면 이 페이지로 빠르게 이동할 수 있습니다.
         * `devcontainer.json` 파일에 대한 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#devcontainerjson)”를 참조하세요.
         * 머신 유형에 대한 자세한 내용은 “[codespace에 대한 머신 유형 변경](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace#about-machine-types)”을 참조하세요.
         * {% data reusables.codespaces.codespaces-machine-type-availability %}
      
         {% endnote %}

      1. **세션 시작** 을 클릭합니다.

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

리포지토리를 선택하라는 메시지가 표시됩니다. 이 리포지토리에 대한 codespace를 청구할 수 있는 경우 codespace에 대한 비용을 지불할 사용자를 알려주는 메시지가 표시됩니다. 그런 다음 분기, 개발 컨테이너 구성 파일(둘 이상의 사용 가능한 경우) 및 컴퓨터 유형(둘 이상의 사용 가능한 경우)을 선택하라는 메시지가 표시됩니다.

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
- “[‘GitHub Codespaces에서 열기’ 배지 추가](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge)”
