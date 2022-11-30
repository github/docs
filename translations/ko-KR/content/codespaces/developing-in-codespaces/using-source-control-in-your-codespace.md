---
title: codespace에서 원본 제어 사용
intro: Codespace에서 파일을 변경한 후 신속하게 변경 내용을 커밋하고 원격 리포지토리에 업데이트를 푸시할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Source control
ms.openlocfilehash: 513bf0729e1f04bf93f45999b2fa9e45231add5c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160001'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## {% data variables.product.prodname_github_codespaces %}의 원본 제어 정보

codespace 내에서 직접, 필요한 모든 Git 작업을 수행할 수 있습니다. 예를 들어 원격 리포지토리에서 변경 내용을 가져오고, 분기를 전환하고, 새 분기를 만들고, 변경 내용을 커밋 및 푸시하고, 끌어오기 요청을 만들 수 있습니다. codespace 내의 통합 터미널을 사용하여 Git 명령을 입력하거나 아이콘 및 메뉴 옵션을 클릭하여 가장 일반적인 모든 Git 작업을 완료할 수 있습니다. 이 가이드에서는 원본 제어에 그래픽 사용자 인터페이스를 사용하는 방법을 설명합니다.

{% vscode %}

{% data variables.product.prodname_vscode %}의 Git 지원에 대한 자세한 내용은 {% data variables.product.prodname_vscode %} 설명서의 "[VS Code에서 버전 제어 사용](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)"을 참조하세요.

{% endvscode %}

{% webui %}

{% data variables.product.prodname_vscode %} 웹 클라이언트의 소스 제어는 {% data variables.product.prodname_vscode %} 데스크톱 애플리케이션과 동일한 워크플로를 사용합니다. 자세한 내용은 {% data variables.product.prodname_vscode %} 설명서의 "[VS Code에서 버전 제어 사용](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)"을 참조하세요.

{% endwebui %}

{% data variables.product.prodname_github_codespaces %}를 사용하여 파일을 업데이트하는 일반적인 워크플로는 다음과 같습니다.

* {% data variables.product.prodname_dotcom %}에 있는 리포지토리의 기본 분기에서 codespace를 만듭니다. "[리포지토리에 대한 codespace 만들기"를](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository) 참조하세요.
* codespace에서 작업할 새 분기를 만듭니다.
* 내용을 변경하고 저장합니다.
* 변경 내용을 커밋합니다.
* 끌어오기 요청을 실행합니다.

{% webui %}

{% data reusables.codespaces.source-control %} 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.source-control %} 

{% endvscode %}

{% jetbrains %}

## 분기 만들기 또는 전환

1. 상태 표시줄의 오른쪽에 있는 분기 이름을 클릭합니다.

   ![상태 표시줄의 분기 이름 스크린샷](/assets/images/help/codespaces/jetbrains-branch-button.png)

1. 팝업 메뉴에서 다음 중 하나를 수행합니다.
   * 현재 분기를 기반으로 새 분기를 만들려면 현재 분기의 이름을 클릭한 다음 **새 분기** 를 선택합니다. 

     ![새 분기 옵션의 스크린샷](/assets/images/help/codespaces/jetbrains-new-branch-option.png)

     새 분기의 이름을 입력하고 **만들기** 를 클릭합니다.

     ![분기 만들기 대화 상자의 스크린샷](/assets/images/help/codespaces/jetbrains-create-branch-dialog.png)

   * 기존 분기를 확인하려면 체크 아웃하려는 분기의 이름을 입력하기 시작합니다. 목록에서 분기를 클릭한 다음 **체크 아웃** 을 클릭합니다.

     ![체크 아웃 옵션의 스크린샷](/assets/images/help/codespaces/jetbrains-checkout-submenu.png)

     {% tip %}

     **팁**: 최근에 원격 리포지토리의 파일을 변경한 경우 전환한 분기에서 변경 내용을 codespace로 끌어올 때까지 해당 변경 내용이 표시되지 않을 수 있습니다. 

     {% endtip %}


## 변경 내용 커밋 

1. 탐색 모음의 오른쪽에서 확인 표시를 클릭합니다.

   ![커밋 확인 표시의 스크린샷](/assets/images/help/codespaces/jetbrains-commit-button.png)

1. 변경 내용 커밋 대화 상자에서 커밋 메시지를 입력합니다.
1. **커밋** 을 클릭합니다.

   또는 **커밋** 옆에 있는 아래쪽 화살표를 클릭하고 **커밋 및 푸시** 를 클릭합니다.

   ![커밋 및 푸시 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-commit-and-push.png)

## 원격 리포지토리에서 변경 내용 끌어오기

원격 리포지토리의 동일한 분기에서 변경 내용을 가져와서 codespace에서 작업 중인 리포지토리의 복사본에 적용할 수 있습니다.

1. 탐색 모음의 오른쪽에서 아래쪽 화살표를 클릭합니다.

   ![프로젝트 아래쪽 화살표 업데이트 단추의 스크린샷](/assets/images/help/codespaces/jetbrains-update-project-button.png)

1. 프로젝트 업데이트 대화 상자에서 들어오는 변경 내용을 병합하거나 다시 지정할지 여부를 선택합니다.

   ![프로젝트 업데이트 대화 상자의 스크린샷](/assets/images/help/codespaces/jetbrains-update-options.png)

1. **확인** 을 클릭합니다.

## 원격 리포지토리에 변경 내용 푸시

저장하고 커밋한 변경 내용을 푸시할 수 있습니다. 그러면 이러한 변경 내용이 원격 리포지토리의 업스트림 분기에 적용됩니다. 끌어오기 요청을 만들 준비가 되지 않았거나 {% data variables.product.prodname_dotcom %}에 끌어오기 요청을 만들려는 경우 이 작업을 수행할 수 있습니다.

1. 탐색 모음의 오른쪽에서 위쪽 화살표를 클릭합니다.

   ![푸시 커밋 위쪽 화살표의 스크린샷](/assets/images/help/codespaces/jetbrains-push-button.png)

1. 커밋 푸시 대화 상자에서 **푸시** 를 클릭합니다.

{% endjetbrains %}
