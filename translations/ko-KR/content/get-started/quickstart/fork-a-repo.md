---
title: 리포지토리 포크
redirect_from:
  - /fork-a-repo
  - /forking
  - /articles/fork-a-repo
  - /github/getting-started-with-github/fork-a-repo
  - /github/getting-started-with-github/quickstart/fork-a-repo
intro: 포크는 원래 "업스트림" 리포지토리와 코드 및 표시 유형 설정을 공유하는 새 리포지토리입니다.
permissions: '{% data reusables.enterprise-accounts.emu-permission-fork %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
ms.openlocfilehash: 6756defd7567983cc7dbb1a9bfe36256e5b41a09
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191340'
---
## 포크 정보

{% data reusables.repositories.fork-definition-long %}  자세한 내용은 "[포크 작업"을 참조하세요.](/github/collaborating-with-issues-and-pull-requests/working-with-forks)

### 다른 사용자의 프로젝트에 변경 내용 제안

예를 들어 포크를 사용하여 버그 수정과 관련된 변경 내용을 제안할 수 있습니다. 찾은 버그에 대한 문제를 로깅하는 대신 다음을 수행할 수 있습니다.

- 리포지토리를 포크합니다.
- 수정합니다.
- 프로젝트 소유자에게 끌어오기 요청을 제출합니다.

### 다른 사람의 프로젝트를 아이디어의 시작점으로 사용합니다.

오픈 소스 소프트웨어는 코드를 공유함으로써 더 신뢰할 수 있고 더 나은 소프트웨어를 만들 수 있다는 생각을 기반으로 합니다. 자세한 내용은 오픈 소스 이니셔티브의 “[오픈 소스 이니셔티브 정보](https://opensource.org/about)”를 참조하세요.

{% data variables.location.product_location %}에서 조직의 개발 작업에 오픈 소스 원칙을 적용하는 방법에 대한 자세한 내용은 {% data variables.product.prodname_dotcom %}의 백서 "[내부 원본 소개](https://resources.github.com/whitepapers/introduction-to-innersource/)"를 참조하세요.

{% ifversion fpt or ghes or ghec %}

다른 사용자 프로젝트의 포크에서 공용 리포지토리를 만들 때 프로젝트를 다른 사용자와 공유할 방법을 결정하는 라이선스 파일을 포함해야 합니다. 자세한 내용은 choosealicense.com의 “[오픈 소스 라이선스 선택](https://choosealicense.com/)”을 참조하세요.

{% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning %}

{% endif %}

## 필수 조건

아직 설정하지 않은 경우 먼저 Git에서 {% data variables.location.product_location %}를 사용하여 Git 및 인증을 설정합니다. 자세한 내용은 “[Git 설정](/articles/set-up-git)”을 참조하세요.

## 리포지토리 포크

{% webui %}

업스트림 리포지토리에 대한 변경 내용을 제안하기 위해 프로젝트를 포크할 수 있습니다. 이 경우 정기적으로 포크를 업스트림 리포지토리와 동기화하는 것이 좋습니다. 이렇게 하려면 명령줄에서 Git을 사용해야 합니다. 방금 포크한 것과 동일한 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 리포지토리를 사용하여 업스트림 리포지토리를 설정하는 방법을 연습할 수 있습니다.

1. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}에서 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 리포지토리로 이동합니다.
2. 페이지의 오른쪽 상단에서 **Fork**(포크)를 클릭합니다.
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

**참고:** 업스트림 리포지토리에서 추가 분기를 복사하려는 경우 **분기** 페이지에서 복사할 수 있습니다. 자세한 내용은 "[리포지토리 내에서 분기 만들기 및 삭제"를 참조하세요](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-and-deleting-branches-within-your-repository). {% endnote %} {% endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

리포지토리의 포크를 만들려면 `gh repo fork` 하위 명령을 사용합니다.

```shell
gh repo fork REPOSITORY
```

조직에서 포크를 만들려면 `--org` 플래그를 사용합니다.

```shell
gh repo fork REPOSITORY --org "octo-org"
```

{% endcli %}

{% desktop %} {% enddesktop %}

## 포크된 리포지토리 복제

지금은 Spoon-Knife 리포지토리의 포크가 있지만 컴퓨터의 로컬에는 해당 리포지토리에 파일이 없습니다.

{% webui %}

1. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}에서 Spoon-Knife 리포지토리의 **포크** 로 이동합니다.
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
  > remote: Total 10 (delta 1), reused 10 (delta 1)
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

## 업스트림 리포지토리와 포크를 동기화하도록 Git 구성

업스트림 리포지토리에 대한 변경 내용을 제안하기 위해 프로젝트를 포크하는 경우 업스트림 리포지토리의 변경 내용을 포크의 로컬 복제본으로 끌어오도록 Git을 구성할 수 있습니다.

{% webui %}

1. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% else %}{% data variables.location.product_location %}{% endif %}에서 [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) 리포지토리로 이동합니다.
{% data reusables.repositories.copy-clone-url %} {% data reusables.command_line.open_the_multi_os_terminal %}
4. 디렉터리를 복제한 포크의 위치로 변경합니다.
    - 홈 디렉터리로 이동하려면 다른 텍스트 없이 `cd`를 입력합니다.
    - 현재 디렉터리의 파일 및 폴더를 나열하려면 `ls`를 입력합니다.
    - 나열된 디렉터리 중 하나로 이동하려면 `cd your_listed_directory`를 입력합니다.
    - 디렉터리를 하나 위로 이동하려면 `cd ..`를 입력합니다.
5. `git remote -v`를 입력하고 **Enter** 키를 누릅니다. 포크에 대해 현재 구성된 원격 리포지토리가 표시됩니다.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  ```

6. `git remote add upstream`을 입력한 다음, 3단계에서 복사한 URL을 붙여넣고 **Enter** 키를 누릅니다. 다음과 같이 표시됩니다.
  ```shell
  $ git remote add upstream https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/Spoon-Knife.git
  ```

7. 포크에 대해 지정한 새 업스트림 리포지토리를 확인하려면 `git remote -v`를 다시 입력합니다. 포크의 URL이 로 `origin`표시되고 업스트림 리포지토리의 URL이 로 표시됩니다 `upstream`.
  ```shell
  $ git remote -v
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (fetch)
  > origin    https://{% data variables.command_line.codeblock %}/YOUR_USERNAME/YOUR_FORK.git (push)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (fetch)
  > upstream  https://{% data variables.command_line.codeblock %}/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git (push)
  ```

이제 몇 가지 Git 명령을 사용하여 포크를 업스트림 리포지토리와 동기화된 상태로 유지할 수 있습니다. 자세한 내용은 “[포크 동기화](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)”를 참조하세요.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

포크된 리포지토리에 대한 원격 리포지토리를 구성하려면 `--remote` 플래그를 사용합니다.

```shell
gh repo fork REPOSITORY --remote=true
```

원격 리포지토리의 이름을 지정하려면 `--remote-name` 플래그를 사용합니다.

```shell
gh repo fork REPOSITORY --remote-name "main-remote-repo"
```

{% endcli %}

### 포크 편집

다음을 포함하여 포크를 변경할 수 있습니다.

- **분기 만들기:** [분기](/articles/creating-and-deleting-branches-within-your-repository/)를 사용하면 주 프로젝트를 위험에 빠뜨리지 않고 새 기능을 빌드하거나 아이디어를 테스트할 수 있습니다.
- **끌어오기 요청 열기:** 업스트림 리포지토리에 다시 기여하려는 경우 [끌어오](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)기 요청을 제출하여 원래 작성자에게 포크를 리포지토리로 끌어오라는 요청을 보낼 수 있습니다.

## 포크할 다른 리포지토리 찾기
리포지토리를 포크하여 프로젝트에 기여하기 시작합니다. {% data reusables.repositories.you-can-fork %}

{% ifversion fpt or ghec %}[Explore](https://github.com/explore)(탐색)를 살펴보며 프로젝트를 찾고 오픈 소스 리포지토리에 대한 기여를 시작할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}에서 오픈 소스에 기여하는 방법 찾기](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)”를 참조하세요.

{% endif %}

## 다음 단계

이제 리포지토리를 포크하고, 포크 복제를 연습하고, 업스트림 리포지토리를 구성했습니다.

* 포크를 복제하고 컴퓨터에서 포크된 리포지토리의 변경 내용을 동기화하는 방법에 대한 자세한 내용은 “[Git 설정](/articles/set-up-git)”을 참조하세요.

* 모든 프로젝트를 배치하고 {% data variables.product.prodname_dotcom %}에 코드를 공유할 수 있는 새 리포지토리를 만들 수도 있습니다. {% data reusables.getting-started.create-a-repository %}"

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
