---
title: GitHub 클래스룸에서 Visual Studio Code 사용 정보
shortTitle: About using Visual Studio Code
intro: '{% data variables.product.prodname_vscode %}를 {% data variables.product.prodname_classroom %}의 할당에 대한 기본 편집기로 구성할 수 있습니다.'
versions:
  fpt: '*'
redirect_from:
  - /education/manage-coursework-with-github-classroom/about-using-vs-code-with-github-classroom
ms.openlocfilehash: fe0e8e0c3194f9c97cc30c80dcec00256824e6ab
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145148746'
---
## {% data variables.product.prodname_vscode %} 정보

{% data variables.product.prodname_vscode %}는 데스크톱에서 실행되며 Windows, macOS 및 Linux에 사용할 수 있는 간단하지만 강력한 소스 코드 편집기입니다. [{% data variables.product.prodname_vscode_shortname %}에 대한 GitHub 클래스룸 확장](https://aka.ms/classroom-vscode-ext)을 사용하면 학생이 클래스룸 과제를 쉽게 찾아보고, 편집하고, 제출하고, 협업하고, 테스트할 수 있습니다. IDE 및 {% data variables.product.prodname_classroom %}에 대한 자세한 내용은 “[{% data variables.product.prodname_classroom %}을 IDE와 통합](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)”을 참조하세요.

### 선택한 학생의 편집기 
GitHub 클래스룸과 {% data variables.product.prodname_vscode_shortname %} 통합은 학생에게 다음을 포함하는 확장 팩을 제공합니다.

1. 학생이 쉽게 시작할 수 있도록 사용자 지정 추상화가 포함된 [GitHub 클래스룸 확장](https://aka.ms/classroom-vscode-ext).
2. [Visual Studio Live Share 확장](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack)은 및 학생 보기에 통합되어 협업을 위해 조교 및 급우에게 쉽게 액세스할 수 있습니다.
3. [GitHub 끌어오기 요청 확장](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)을 사용하면 학생이 편집기 내에서 강사의 피드백을 볼 수 있습니다. 

### {% data variables.product.prodname_vscode_shortname %}에서 할당을 시작하는 방법
할당을 만들 때 {% data variables.product.prodname_vscode_shortname %}을 할당의 기본 편집기로 추가할 수 있습니다. 자세한 내용은 "[IDE와 {% data variables.product.prodname_classroom %} 통합"](/education/manage-coursework-with-github-classroom/integrate-github-classroom-with-an-ide/integrate-github-classroom-with-an-ide)을 참조하세요.

여기에는 모든 학생 리포지토리의 "{% data variables.product.prodname_vscode_shortname %}에서 열기" 배지가 포함됩니다. 이 배지는 {% data variables.product.prodname_vscode_shortname %}, 클래스룸 확장 팩 설치 및 한 번의 클릭으로 활성 과제 열기를 처리합니다.

{% note %}

**참고:** {% data variables.product.prodname_vscode_shortname %}에서 리포지토리로 코드를 푸시하려면 학생이 컴퓨터에 Git을 설치해야 합니다. **{% data variables.product.prodname_vscode_shortname %}에서 열기** 단추를 클릭할 때 자동으로 설치되지 않습니다. 학생은 [여기](https://git-scm.com/downloads)에서 Git을 다운로드할 수 있습니다.

{% endnote %}

### GitHub 클래스룸 확장 팩을 사용하는 방법 
GitHub 클래스룸 확장에는 '클래스룸' 보기와 '활성 과제' 보기의 두 가지 주요 구성 요소가 있습니다. 

학생이 처음으로 확장 프로그램을 시작하면 {% data variables.product.prodname_vscode_shortname %}의 탐색기 탭으로 자동으로 이동하여 리포지토리에 있는 파일의 트리 뷰와 함께 "활성 과제" 보기를 볼 수 있습니다. 

![GitHub 클래스룸 활성 과제 보기](/assets/images/help/classroom/vs-code-active-assignment.png)

학생은 "활성 과제" 줄 위로 마우스를 가져가면 표시되는 **동기화 변경** 단추를 클릭하여 최신 버전의 원격으로 커밋을 푸시할 수 있습니다. 이렇게 하면 Git을 사용하여 소스 제어를 추상화하여 강사가 자신의 속도로 Git을 가르칠 수 있습니다.
또한 변경 내용을 동기화하면 교사가 과제에 대한 자동 채점이 구성된 경우 실행되도록 "테스트"가 트리거됩니다.

할당이 그룹 프로젝트인 경우 "활성 할당" 아래의 "그룹" 노드에 그룹의 멤버가 표시됩니다. 또한 학생이 막혔을 때 도움을 줄 수 있는 리포지토리의 관리자 멤버도 표시됩니다. 프로젝트에서 협업을 하기 위해 학생은 그룹 노드에 있는 모든 사용자와 Live Share 세션을 시작할 수 있으며 리포지토리의 전체 컨텍스트를 즉시 공유합니다. [여기](https://docs.microsoft.com/en-us/visualstudio/liveshare/)에서 Live Share 및 협업에 대해 자세히 알아볼 수 있습니다.

학생이 과제를 완료하면 다른 과제 및 클래스룸을 보기 위해 탐색할 수도 있습니다. GitHub 탭에서 찾을 수 있습니다.
