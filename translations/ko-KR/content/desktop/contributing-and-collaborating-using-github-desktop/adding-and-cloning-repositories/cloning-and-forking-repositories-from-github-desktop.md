---
title: GitHub Desktop에서 리포지토리 복제 및 포크
intro: '{% data variables.product.prodname_desktop %}을 사용하여 {% data variables.product.prodname_dotcom %}에 있는 리포지토리를 복제 및 포크할 수 있습니다.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
versions:
  fpt: '*'
shortTitle: Clone & fork from Desktop
ms.openlocfilehash: e4182e56d0418e3aea07c94e0a3657ef8e104ea0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090155'
---
## 로컬 리포지토리 정보
{% data variables.product.prodname_dotcom %}의 리포지토리는 원격 리포지토리입니다. {% data variables.product.prodname_desktop %}을 사용하여 리포지토리를 복제하거나 포크하여 컴퓨터에 로컬 리포지토리를 만들 수 있습니다.

리포지토리를 복제하여 액세스할 수 있는 모든 리포지토리의 로컬 복사본을 {% data variables.product.product_name %}에 만들 수 있습니다. 리포지토리를 소유하거나 쓰기 권한이 있는 경우 로컬 위치와 원격 위치 간에 동기화할 수 있습니다. 자세한 내용은 “[분기 동기화](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)”를 참조하세요.

리포지토리를 복제할 때 {% data variables.product.product_name %}에 푸시하는 변경 내용은 원래 리포지토리에 영향을 미칩니다. 원래 프로젝트에 영향을 미치지 않고 변경하려면 리포지토리를 포크하여 별도의 복사본을 만들 수 있습니다. 끌어오기 요청을 만들어 유지 관리자가 포크의 변경 내용을 원래 업스트림 리포지토리에 통합하도록 제안할 수 있습니다. 자세한 내용은 “[포크 정보](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)”를 참조하세요.

{% data variables.product.prodname_desktop %}을 사용하여 쓰기 권한이 없는 리포지토리를 복제하려고 하면 {% data variables.product.prodname_desktop %}에서 포크를 만들라는 메시지가 자동으로 표시됩니다. 포크를 사용하여 원래 업스트림 리포지토리에 기여하거나 자체 프로젝트에서 독립적으로 작업하도록 선택할 수 있습니다. 기존 포크는 기본적으로 업스트림 리포지토리에 변경 내용을 적용합니다. 언제든지 이 선택을 수정할 수 있습니다. 자세한 내용은 “[포크 동작 관리](#managing-fork-behavior)”를 참조하세요.

{% data variables.product.prodname_dotcom %} 또는 {% data variables.product.prodname_enterprise %}에서 직접 리포지토리를 복제할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 {% data variables.product.prodname_desktop %}으로 리포지토리 복제](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)”를 참조하세요.

## 리포지토리 복제

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

## 리포지토리 포크
쓰기 권한이 없는 리포지토리를 복제하는 경우 {% data variables.product.prodname_desktop %}에서 포크를 만듭니다. 포크를 만들거나 복제한 후 {% data variables.product.prodname_desktop %}에서 포크를 어떻게 사용할 것인지 질문합니다.

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %} {% data reusables.desktop.fork-type-prompt %}

## 포크 동작 관리
{% data variables.product.prodname_desktop %}의 업스트림 리포지토리에서 포크가 작동하는 방식을 변경할 수 있습니다.

{% data reusables.desktop.open-repository-settings %} {% data reusables.desktop.select-fork-behavior %}

## 로컬 리포지토리에 대한 별칭 만들기
로컬 리포지토리에 대한 별칭을 만들어 {% data variables.product.prodname_desktop %}에서 동일한 이름의 리포지토리를 구분할 수 있습니다. 별칭을 만들어도 {% data variables.product.prodname_dotcom %}에서 리포지토리의 이름에는 영향을 미치지 않습니다. 리포지토리 목록에 별칭이 기울임꼴로 표시됩니다.

1. {% data variables.product.prodname_desktop %}의 왼쪽 위 모서리에서 현재 리포지토리 이름의 오른쪽에 있는 {% octicon "triangle-down" aria-label="The triangle-down icon" %}을 클릭합니다.
2. 별칭을 만들 리포지토리를 마우스 오른쪽 단추로 클릭한 다음 **별칭 만들기** 를 클릭합니다.
3. 리포지토리의 별칭을 입력합니다.
4. **별칭 만들기** 를 클릭합니다.

## 추가 참고 자료
- [원격 리포지토리 정보](/github/getting-started-with-github/about-remote-repositories)
