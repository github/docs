---
title: 프로젝트에 기여
intro: 포크를 통해 프로젝트에 기여하는 방법을 알아봅니다.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Forks
  - GitHub
  - Open Source
ms.openlocfilehash: da38c6f5b3ea953fc58bf79080b9fa4eb5a2712d
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191348'
---
## 포크 정보

다른 사람의 프로젝트에 기여하고 싶지만 리포지토리에 대한 쓰기 권한이 없는 경우 "포크 및 끌어오기 요청" 워크플로를 사용할 수 있습니다. 

{% data reusables.repositories.fork-definition-long %}

포크에서 업스트림 리포지토리로 끌어오기 요청을 제출하여 기여할 수 있습니다. 자세한 내용은 [리포지토리 포크](/get-started/quickstart/fork-a-repo)를 참조하세요.

## 리포지토리 포크

이 자습서에서는 포크 및 끌어오기 요청 워크플로를 테스트할 수 있는 {% data variables.product.prodname_dotcom_the_website %}에서 호스트되는 테스트 리포지토리인 [Spoon-Knife 프로젝트](https://github.com/octocat/Spoon-Knife)를 사용합니다.

1. https://github.com/octocat/Spoon-Knife 에서 `Spoon-Knife` 프로젝트로 이동합니다.
2. **Fork**(포크)를 클릭합니다.
   ![포크 단추](/assets/images/help/repository/fork_button.png){% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}
3. 포크된 리포지토리의 소유자를 선택합니다.
   ![소유자 드롭다운이 강조 표시된 새 포크 페이지 만들기](/assets/images/help/repository/fork-choose-owner.png)
4. 기본적으로 포크의 이름은 업스트림 리포지토리와 동일합니다. 포크의 이름을 변경하여 추가로 구분할 수 있습니다. 
   ![리포지토리 이름 필드가 강조 표시된 새 포크 페이지 만들기](/assets/images/help/repository/fork-choose-repo-name.png)
5. 선택적으로 포크의 설명을 추가합니다.
   ![설명 필드가 강조 표시된 새 포크 페이지 만들기](/assets/images/help/repository/fork-description.png)
6. 기본 분기만 복사할지 아니면 모든 분기를 새 포크로 복사할지 선택합니다. 오픈 소스 프로젝트에 기여하는 것과 같은 많은 포크 시나리오의 경우 기본 분기만 복사하면 됩니다. 기본적으로 기본 분기만 복사됩니다.
   ![기본 분기만 복사하는 옵션](/assets/images/help/repository/copy-default-branch-only.png)
7. **포크 만들기** 를 클릭합니다.
   ![강조 표시된 포크 만들기 단추](/assets/images/help/repository/fork-create-button.png)

{% note %}

**참고:** 업스트림 리포지토리에서 추가 분기를 복사하려는 경우 **분기** 페이지에서 복사할 수 있습니다. 자세한 내용은 “[리포지토리 내에서 분기 만들기 및 삭제](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository)”를 참조하세요.

{% endnote %} {% endif %}

## 포크 복제

Spoon-Knife 리포지토리를 성공적으로 포크했지만 지금까지는 포크가 {% data variables.product.product_name %}에만 존재합니다. 프로젝트에서 사용하려면 이를 컴퓨터에 복제해야 합니다.

명령줄, {% data variables.product.prodname_cli %} 또는 {% data variables.product.prodname_desktop %}을 사용하여 포크를 복제할 수 있습니다.

{% webui %}

1. {% data variables.product.product_name %}에서 Spoon-Knife 리포지토리의 **포크** 로 이동합니다.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.change-current-directory-clone %}
4. `git clone`을 입력한 다음 이전에 복사한 URL을 붙여넣습니다. 그러면 다음과 같이 되며, 여기서 `YOUR-USERNAME` 대신 {% data variables.product.product_name %} 사용자 이름을 사용합니다.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  ```

5. **Enter** 키를 누릅니다. 로컬 복제본이 만들어집니다.
  ```shell
  $ git clone https://{% data variables.command_line.codeblock %}/YOUR-USERNAME/Spoon-Knife
  > Cloning into `Spoon-Knife`...
  > remote: Counting objects: 10, done.
  > remote: Compressing objects: 100% (8/8), done.
  > remove: Total 10 (delta 1), reused 10 (delta 1)
  > Unpacking objects: 100% (10/10), done.
  ```

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

포크의 복제본을 만들려면 `--clone` 플래그를 사용합니다.

```shell
gh repo fork REPOSITORY --clone=true
```

{% endcli %}

{% desktop %}

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

{% enddesktop %}

## 작업할 분기 만들기

프로젝트를 변경하기 전에 새 분기를 만들고 체크 아웃해야 합니다. 자체 분기에서 변경 내용을 유지하면 GitHub Flow를 따르고 나중에 동일한 프로젝트에 더 쉽게 기여할 수 있는지 확인합니다. 자세한 내용은 "[GitHub Flow"를 참조하세요](/get-started/quickstart/github-flow#following-github-flow).

{% webui %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endwebui %}

{% cli %}

```shell
git branch BRANCH-NAME
git checkout BRANCH-NAME
```

{% endcli %}

{% desktop %}

{% data variables.product.prodname_desktop %}에서 분기를 만들고 관리하는 방법에 대한 자세한 내용은 "[분기 관리"를 참조하세요](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches).

{% enddesktop %}

## 변경 내용 만들기 및 푸시

[Visual Studio Code](https://code.visualstudio.com)와 같이 자주 사용하는 텍스트 편집기를 사용하여 프로젝트 내용을 몇 가지 변경합니다. 예를 들어 `index.html`에서 텍스트를 변경하여 GitHub 사용자 이름을 추가할 수 있습니다.

변경 내용을 제출할 준비가 되면 변경 내용을 스테이징하고 커밋합니다. `git add .`는 Git에 다음 커밋에 모든 변경 내용을 포함하도록 지시합니다. `git commit`은 변경 내용의 스냅샷을 만듭니다.

{% webui %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endwebui %}

{% cli %}

```shell
git add .
git commit -m "a short description of the change"
```

{% endcli %}

{% desktop %}

{% data variables.product.prodname_desktop %}에서 변경 내용을 스테이징하고 커밋하는 방법에 대한 자세한 내용은 “[프로젝트 변경 내용 커밋 및 검토](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project#selecting-changes-to-include-in-a-commit)”를 참조하세요.

{% enddesktop %}

파일을 스테이징하고 커밋하면 Git에 “좋아, 내 변경 사항의 스냅샷을 만들어 줘”라고 전달하는 셈입니다. 계속해서 더 많은 변경을 수행하고 더 많은 커밋 스냅샷을 만들 수 있습니다.

현재, 변경 내용은 로컬에만 존재합니다. {% data variables.product.product_name %}까지 변경 내용을 푸시할 준비가 되면 변경 내용을 원격으로 푸시합니다.

{% webui %}

```shell
git push
```

{% endwebui %}

{% cli %}

```shell
git push
```

{% endcli %}

{% desktop %}

{% data variables.product.prodname_desktop %}에서 변경 내용을 푸시하는 방법에 대한 자세한 내용은 “[GitHub 변경 내용 푸시](/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/pushing-changes-to-github)”를 참조하세요.

{% enddesktop %}

## 끌어오기 요청

이제 기본 프로젝트에 변경 내용을 제안할 준비가 완료되었습니다. 이는 다른 사람의 프로젝트의 포크를 생성하는 마지막 단계이며 틀림없이 가장 중요합니다. 커뮤니티 전체에 도움이 될 것이라고 생각하는 변경을 수행한 경우에는 분명히 다시 기여하는 것을 고려해야 합니다.

이렇게 하려면 프로젝트가 있는 {% data variables.product.product_name %}의 리포지토리로 이동합니다. 이 예제에서는 이 리포지토리가 `https://github.com/<your_username>/Spoon-Knife`에 있습니다. `octocat:main`의 앞에 분기가 앞에 하나의 커밋임을 나타내는 배너가 표시됩니다. **Contribute**(기여), **Open a pull request**(끌어오기 요청 열기)를 클릭합니다.

{% data variables.product.product_name %}를 통해 포크와 `octocat/Spoon-Knife` 리포지토리 간의 차이점을 보여 주는 페이지로 이동합니다. **끌어오기 요청 만들기** 를 클릭합니다.

{% data variables.product.product_name %}를 통해 변경 내용에 대한 제목과 설명을 입력할 수 있는 페이지로 이동합니다. 처음에 이 끌어오기 요청을 만드는 이유에 대한 유용한 정보와 근거를 최대한 제공하는 것이 중요합니다. 변경 내용이 생각만큼 모든 사람에게 유용한지 프로젝트 소유자가 확인할 수 있어야 합니다. 마지막으로, **Create pull request**(끌어오기 요청 만들기)를 클릭합니다.

## 피드백 관리

끌어오기 요청은 토론의 영역입니다. 이 경우 Octocat은 매우 바쁘며 변경 내용을 병합하지 않을 수 있습니다. 다른 프로젝트에서 프로젝트 소유자가 끌어오기 요청을 거부하거나 끌어오기 요청이 만들어진 이유에 대한 자세한 정보를 요청하는 경우 불쾌해 하지 마세요. 프로젝트 소유자가 끌어오기 요청을 병합하지 않기로 선택할 수도 있으며 그래도 괜찮습니다. 변경 내용이 포크에 있습니다. 만난 적도 없는 사람이 원래 프로젝트보다 훨씬 더 가치 있는 여러분의 변경 내용을 찾을지도 모릅니다.

## 프로젝트 찾기

리포지토리를 성공적으로 포크하고 다시 기여했습니다. 계속해서 기여하세요.{% ifversion fpt %} 자세한 내용은 “[GitHub에서 오픈 소스에 기여하는 방법 찾기](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)”를 참조하세요.{% endif %}
