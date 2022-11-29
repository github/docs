---
title: GitHub Desktop을 사용하여 첫 번째 리포지토리 만들기
shortTitle: Creating your first repository
intro: '{% data variables.product.prodname_desktop %}을 사용하여 명령줄을 사용하지 않고 Git 리포지토리를 만들고 관리할 수 있습니다.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
  - /desktop/installing-and-configuring-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: bdfaa5770faef23d8176b24753e23d6a3d5159a1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145117327'
---
## 소개
{% data variables.product.prodname_desktop %}은 명령줄의 텍스트 명령 대신 시각적 인터페이스를 사용하여 {% data variables.product.prodname_dotcom_the_website %} 워크플로를 확장하고 간소화합니다. 이 가이드를 마치면 {% data variables.product.prodname_desktop %}을 사용하여 리포지토리를 만들고, 리포지토리를 변경하고, 변경 내용을 {% data variables.product.product_name %}에 게시합니다.

{% data variables.product.prodname_desktop %}을 설치하고 {% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에 로그인한 후 자습서 리포지토리를 만들고 복제할 수 있습니다. 이 자습서에서는 텍스트 편집기 설치, 분기 만들기, 커밋하기, {% data variables.product.prodname_dotcom_the_website %}에 푸시, 끌어오기 요청 열기 등 Git 및 {% data variables.product.prodname_dotcom %}를 사용하는 방법의 기본 사항을 소개합니다. {% data variables.product.prodname_desktop %}에 리포지토리가 아직 없는 경우 이 자습서를 사용할 수 있습니다.

자습서를 완료하는 것이 좋지만 새 리포지토리를 만들어 {% data variables.product.prodname_desktop %}을 살펴보려는 경우 이 가이드에서는 {% data variables.product.prodname_desktop %}을 사용하여 Git 리포지토리에서 작업하는 방법을 안내합니다.

## 1부: {% data variables.product.prodname_desktop %} 설치 및 계정 인증
지원되는 모든 운영 체제에 {% data variables.product.prodname_desktop %}을 설치할 수 있습니다. 앱을 설치한 후 자습서 리포지토리를 만들고 복제하려면 {% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에 로그인하고 계정을 인증해야 합니다.

설치 및 인증에 대한 자세한 내용은 “[{% data variables.product.prodname_desktop %} 설정](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)”을 참조하세요.

## 2부: 새 리포지토리 만들기
{% data variables.product.prodname_desktop %}과 연결된 리포지토리가 없는 경우 “이제 시작하겠습니다” 뷰가 표시되어 자습서 리포지토리를 만들고 복제하거나, 인터넷에서 기존 리포지토리를 복제하거나, 새 리포지토리를 만들거나, 하드 드라이브에서 기존 리포지토리를 추가하도록 선택할 수 있습니다.
  ![이제 시작하겠습니다 화면](/assets/images/help/desktop/lets-get-started.png)

### 자습서 리포지토리 만들기 및 복제
{% data variables.product.prodname_desktop %} 사용을 연습하기 위해 첫 번째 프로젝트로 자습서 리포지토리를 만들고 복제하는 것이 좋습니다.

1. **자습서 리포지토리 만들기 및 복제** 를 클릭합니다.
  ![자습서 리포지토리 만들기 및 복제 단추](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. 자습서의 프롬프트에 따라 텍스트 편집기를 설치하고, 분기를 만들고, 파일을 편집하고, 커밋하고, {% data variables.product.prodname_dotcom %}에 게시하고, 끌어오기 요청을 엽니다.

### 새 리포지토리 만들기
자습서 리포지토리를 만들고 복제하는 것을 원하지 않는 경우 새 리포지토리를 만들 수 있습니다.

1. **하드 드라이브에서 새 리포지토리 만들기** 를 클릭합니다. ![새 리포지토리 만들기](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. 필드에 정보를 입력하고 원하는 옵션을 선택합니다.
  ![리포지토리 만들기 옵션](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - “이름”은 로컬 및 {% data variables.product.product_name %}에서 리포지토리의 이름을 정의합니다.
   - “설명”은 리포지토리의 용도에 대한 자세한 정보를 제공하는 데 사용할 수 있는 선택적 필드입니다.
   - “로컬 경로”는 컴퓨터에서 리포지토리의 위치를 설정합니다. 기본적으로 {% data variables.product.prodname_desktop %}은 문서 폴더 내에 _GitHub_ 폴더를 만들어 리포지토리를 저장하지만 컴퓨터의 모든 위치를 선택할 수 있습니다. 새 리포지토리는 선택한 위치 내의 폴더가 됩니다. 예를 들어 리포지토리의 이름을 `Tutorial`로 지정하면 로컬 경로에 선택한 폴더 내에 _Tutorial_ 이라는 폴더가 생성됩니다. {% data variables.product.prodname_desktop %}은 다음에 새 리포지토리를 만들거나 복제할 때 선택한 위치를 기억합니다.
   - **README를 사용하여 이 리포지토리를 초기화** 하면 _README.md_ 파일을 사용하여 초기 커밋이 생성됩니다. README는 사람들이 프로젝트의 목적을 이해하는 데 도움이 되므로 README를 선택하고 유용한 정보를 입력하는 것이 좋습니다. 누군가가 {% data variables.product.product_name %}에서 리포지토리를 방문하면 가장 먼저 README에서 프로젝트에 대해 파악할 수 있습니다. 자세한 내용은 “[README 정보](/articles/about-readmes)”를 참조하세요.
   - **Git 무시** 드롭다운 메뉴를 사용하면 버전 제어에 저장하지 않으려는 로컬 리포지토리의 특정 파일을 무시하는 사용자 지정 파일을 추가할 수 있습니다. 사용할 특정 언어 또는 프레임워크가 있는 경우 사용 가능한 목록에서 옵션을 선택할 수 있습니다. 이제 막 시작하는 경우 이 선택을 건너뛸 수 있습니다. 자세한 내용은 “[파일 무시](/github/getting-started-with-github/ignoring-files)”를 참조하세요.
   - **라이선스** 드롭다운 메뉴를 사용하면 리포지토리의 _LICENSE_ 파일에 오픈 소스 라이선스를 추가할 수 있습니다. 라이선스를 바로 추가하는 것에 대해 걱정할 필요가 없습니다. 사용 가능한 오픈 소스 라이선스 및 리포지토리에 라이선스를 추가하는 방법에 대한 자세한 내용은 “[리포지토리 라이선스](/articles/licensing-a-repository)”를 참조하세요.
3. **리포지토리 만들기** 를 클릭합니다.

## 3부: {% data variables.product.prodname_desktop %} 탐색
화면 상단의 파일 메뉴에서 {% data variables.product.prodname_desktop %}에서 수행할 수 있는 설정 및 작업에 액세스할 수 있습니다. 대부분의 작업에는 보다 효율적으로 작업하는 데 도움이 되는 바로 가기 키가 있습니다. 바로 가기 키의 전체 목록은 “[바로 가기 키](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)”를 참조하세요.

### {% data variables.product.prodname_desktop %} 메뉴 모음
{% data variables.product.prodname_desktop %} 앱 상단에 리포지토리의 현재 상태를 보여 주는 표시줄이 나타납니다.
  - **현재 리포지토리** 에는 작업 중인 리포지토리의 이름이 표시됩니다. {% data variables.product.prodname_desktop %}에서 **현재 리포지토리** 를 클릭하여 다른 리포지토리로 전환할 수 있습니다.
  - **현재 분기** 는 작업 중인 분기의 이름을 표시합니다. **현재 분기** 를 클릭하여 리포지토리의 모든 분기를 보거나, 다른 분기로 전환하거나, 새 분기를 만들 수 있습니다. 리포지토리에서 끌어오기 요청을 만든 후에는 **현재 분기** 를 클릭하여 요청을 볼 수도 있습니다.
  - {% data variables.product.product_name %}에 리포지토리를 아직 게시하지 않았으므로 **리포지토리 게시** 가 나타납니다. 이는 다음 단계에서 수행하겠습니다. 표시줄의 이 섹션은 현재 분기 및 리포지토리의 상태에 따라 변경됩니다. 로컬 리포지토리와 원격 리포지토리 간에 데이터를 교환할 수 있는 다양한 컨텍스트 종속 작업을 사용할 수 있습니다.

  ![GitHub Desktop 탐색](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

### 변경 내용 및 기록
왼쪽 사이드바에서 **변경 내용** 및 **기록** 보기를 찾을 수 있습니다.
  ![변경 내용 및 기록 탭](/assets/images/help/desktop/changes-and-history.png)

  - **변경 내용** 보기에는 현재 분기의 파일에 적용되었지만 로컬 리포지토리에 커밋되지 않은 변경 내용이 표시됩니다. 하단에는 “요약” 및 “설명” 텍스트 상자가 있는 상자와 **분기에 커밋** 단추가 있습니다. 여기서 새 변경 내용을 커밋합니다. **분기에 커밋** 단추는 동적이며 변경 내용을 커밋하는 분기를 표시합니다.
  ![커밋 영역](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - **기록** 보기에는 리포지토리의 현재 분기에 대한 이전 커밋이 표시됩니다. 리포지토리를 만들 때 {% data variables.product.prodname_desktop %}에서 만든 “초기 커밋”이 표시됩니다. 커밋 오른쪽에 리포지토리를 만들 때 선택한 옵션에 따라 _.gitattributes_, _.gitignore_, _LICENSE_ 또는 _README_ 파일이 표시됩니다. 각 파일을 클릭하여 해당 커밋의 파일에 대한 변경 내용인 해당 파일에 대한 diff를 볼 수 있습니다. diff는 파일의 전체 내용이 아니라 파일의 변경된 부분만 표시합니다.
  ![기록 보기](/assets/images/help/desktop/getting-started-guide/history-view.png)

## 4부: {% data variables.product.product_name %}에 리포지토리 게시
새 리포지토리를 만들면 해당 리포지토리는 사용자의 컴퓨터에만 존재하며 해당 사용자만이 이 리포지토리에 액세스할 수 있습니다. 리포지토리를 {% data variables.product.product_name %}에 게시하여 여러 컴퓨터에 걸쳐 동기화된 상태로 유지하고 다른 사용자가 액세스할 수 있도록 할 수 있습니다. 리포지토리를 게시하려면 로컬 변경 내용을 {% data variables.product.product_name %}에 푸시합니다.

1. 메뉴 모음에서 **리포지토리 게시** 를 클릭합니다.
    ![리포지토리 게시](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - {% data variables.product.prodname_desktop %}은 “이름” 및 “설명” 필드에 리포지토리를 만들 때 입력한 정보를 자동으로 입력합니다.
    - **이 코드를 비공개로 유지** 하면 프로젝트를 볼 수 있는 사용자를 제어할 수 있습니다. 이 옵션을 선택하지 않은 상태로 두면 {% data variables.product.product_name %}의 다른 사용자가 코드를 볼 수 있습니다. 이 옵션을 선택하면 코드가 공개되지 않습니다.
    - **조직** 드롭다운 메뉴가 있는 경우 {% data variables.product.product_name %}에서 소속 조직에 리포지토리를 게시할 수 있습니다.

    ![리포지토리 게시 단계](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. **리포지토리 게시** 단추를 클릭합니다.
  3. {% data variables.product.prodname_desktop %}에서 {% data variables.product.prodname_dotcom_the_website %}의 리포지토리에 액세스할 수 있습니다. 파일 메뉴에서 **리포지토리** 를 클릭한 다음 **GitHub 보기** 를 클릭합니다. 이렇게 하면 기본 브라우저의 리포지토리로 바로 이동합니다.

## 5부: 변경 내용 만들기, 커밋, 푸시
이제 리포지토리를 만들고 게시했으므로 이번에는 프로젝트를 변경하고 리포지토리에 대한 첫 번째 커밋 만들기를 시작해 보겠습니다.

1. {% data variables.product.prodname_desktop %}에서 외부 편집기를 시작하려면 **리포지토리** 를 클릭한 다음 **편집기에서 열기** 를 클릭합니다. 자세한 내용은 “[기본 편집기 구성](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)”을 참조하세요.
  ![편집기에서 열기](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. 이전에 만든 _README.md_ 파일을 약간 변경합니다. 프로젝트를 설명하는 정보(예: 역할 및 기능)를 추가할 수 있습니다. 변경 내용에 만족하면 텍스트 편집기에서 저장합니다.
3. {% data variables.product.prodname_desktop %}에서 **변경 내용** 보기로 이동합니다. 파일 목록에 _README.md_ 가 표시됩니다. _README.md_ 파일 왼쪽에 확인 표시는 파일에 대한 변경 내용이 커밋의 일부임을 나타냅니다. 나중에 여러 파일을 변경할 수 있지만 일부 파일에 대해 변경한 내용만 커밋하려고 합니다. 파일 옆에 있는 확인 표시를 클릭하면 해당 파일이 커밋에 포함되지 않습니다.
  ![변경 내용 보기](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. **변경 내용** 목록 하단에 커밋 메시지를 입력합니다. 프로필 사진 오른쪽에 커밋에 대한 간단한 설명을 입력합니다. _README.md_ 파일을 변경하기 때문에 “프로젝트의 목적에 대한 정보 추가”는 좋은 커밋 요약이 될 것입니다. 요약에는 커밋의 변경 내용에 대한 더 긴 설명을 입력할 수 있는 “설명” 텍스트 필드가 표시됩니다. 이를 통해 프로젝트 기록을 되돌아보고 변경된 이유를 이해할 수 있습니다. _README.md_ 파일의 기본적인 업데이트를 하고 있으므로 설명을 건너뛸 수 있습니다.
  ![커밋 메시지](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. **분기 이름에 커밋** 을 클릭합니다. 커밋 단추에는 현재 분기가 표시되므로 원하는 분기에 커밋해야 합니다.
  ![분기에 커밋](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png):
6. {% data variables.product.product_name %}에서 원격 리포지토리에 변경 내용을 푸시하려면  **원본 푸시** 를 클릭합니다.
  ![원본 푸시](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - **원본 푸시** 단추는 {% data variables.product.product_name %}에 리포지토리를 게시하기 위해 클릭한 단추와 동일합니다. 이 단추는 Git 워크플로에서의 위치에 따라 상황별로 변경됩니다. 이제 `Push origin` 옆에 `1`이 나타나 {% data variables.product.product_name %}까지 푸시되지 않은 커밋이 1개 있음을 나타냅니다.
  - **푸시 원본** 의 “원본”은 변경 내용을 `origin`이라는 이름의 원격, 이 경우에는 {% data variables.product.prodname_dotcom_the_website %}의 프로젝트의 리포지토리로 푸시하고 있음을 의미합니다. {% data variables.product.product_name %}에 새 커밋을 푸시할 때까지 컴퓨터의 프로젝트 리포지토리와 {% data variables.product.prodname_dotcom_the_website %}의 프로젝트 리포지토리 간에 차이가 있습니다. 이렇게 하면 로컬에서 작업하고 준비가 되면 변경 내용을 {% data variables.product.prodname_dotcom_the_website %}에만 푸시할 수 있습니다.
7. **변경 내용** 보기 오른쪽 창에 다음에 수행할 수 있는 작업에 대한 제안이 표시됩니다. 브라우저에서 {% data variables.product.product_name %}의 리포지토리를 열려면 **{% data variables.product.product_name %}에서 보기** 를 클릭합니다.
  ![사용 가능한 작업](/assets/images/help/desktop/available-actions.png)
8. 브라우저에서 **커밋 2개** 을 클릭합니다. {% data variables.product.product_name %}의 이 리포지토리에 커밋 목록이 표시됩니다. 첫 번째 커밋은 {% data variables.product.prodname_desktop %}에서 방금 만든 커밋입니다.
  ![커밋 2개 클릭](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

## 결론
이제 리포지토리를 만들고, 리포지토리를 {% data variables.product.product_name %}에 게시하고, 커밋하고, 변경 내용을 {% data variables.product.product_name %}에 푸시했습니다. 만들거나 협업하는 다른 프로젝트에 참여할 때 이 워크플로를 따를 수 있습니다.

## 추가 참고 자료
- “[Git 시작](/github/getting-started-with-github/getting-started-with-git)”
- “[{% data variables.product.prodname_dotcom %}에 대해 알아보기](/github/getting-started-with-github/learning-about-github)”
- “[{% data variables.product.prodname_dotcom %} 시작](/github/getting-started-with-github)”
