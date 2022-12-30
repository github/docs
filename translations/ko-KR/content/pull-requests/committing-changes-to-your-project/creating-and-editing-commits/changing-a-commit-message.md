---
title: 커밋 메시지 변경
redirect_from:
  - /articles/can-i-delete-a-commit-message
  - /articles/changing-a-commit-message
  - /github/committing-changes-to-your-project/changing-a-commit-message
  - /github/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message
intro: '커밋 메시지에 명확하지 않거나 잘못되거나 중요한 정보가 포함된 경우 로컬에서 수정하고 새 메시지와 함께 새 커밋을 {% data variables.product.product_name %}에 푸시할 수 있습니다. 커밋 메시지를 변경하여 누락된 정보를 추가할 수도 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 70cd5386c6594081950364efe09969f97a153d43
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094707'
---
## 가장 최근 커밋 메시지 다시 쓰기

`git commit --amend` 명령을 사용하여 가장 최근의 커밋 메시지를 변경할 수 있습니다.

Git에서 커밋 메시지의 텍스트는 커밋의 일부입니다. 커밋 메시지를 변경하면 커밋 ID(즉, 커밋 이름을 지정하는 SHA1 체크섬)가 변경됩니다. 실제로 이전 커밋을 대체하는 새 커밋을 만드는 것입니다.

## 커밋이 온라인으로 푸시되지 않음

커밋이 로컬 리포지토리에만 있고 {% 데이터 variables.location.product_location %}에 푸시되지 않은 경우 명령을 사용하여 `git commit --amend` 커밋 메시지를 수정할 수 있습니다.

1. 명령줄에서, 수정하려는 커밋이 포함된 리포지토리로 이동합니다.
2. `git commit --amend`를 입력하고 **Enter** 키를 누릅니다.
3. 텍스트 편집기에서 커밋 메시지를 편집하고 커밋을 저장합니다.
    - 커밋에 후행부를 추가하여 공동 작성자를 추가할 수 있습니다. 자세한 내용은 “[여러 작성자와 함께 커밋 만들기](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors)”를 참조하세요.
{% ifversion fpt or ghec %}
    - 커밋에 후행부를 추가하여 조직을 대신하여 커밋을 만들 수 있습니다. 자세한 내용은 “[조직을 대신하여 커밋 만들기](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization)”를 참조하세요.{% endif %}

다음에 푸시할 때 {% 데이터 variables.location.product_location %}에 새 커밋 및 메시지가 표시됩니다.

{% tip %}

`core.editor` 설정을 변경하여 Git의 기본 텍스트 편집기를 변경할 수 있습니다. 자세한 내용은 Git 설명서의 “[기본 클라이언트 구성](https://git-scm.com/book/en/Customizing-Git-Git-Configuration#_basic_client_configuration)”을 참조하세요.

{% endtip %}

## 이전 또는 여러 커밋 메시지 수정

이미 {% 데이터 variables.location.product_location %}에 커밋을 푸시한 경우 수정된 메시지와 함께 커밋을 강제로 푸시해야 합니다.

{% warning %}

리포지토리의 기록이 변경되므로 강제 푸시를 사용하지 않을 것을 강력히 권장합니다. 강제 푸시를 사용할 경우 이미 리포지토리를 복제한 사용자는 로컬 기록을 수동으로 수정해야 합니다. 자세한 내용은 Git 설명서의 “[업스트림 다시 지정에서 복구](https://git-scm.com/docs/git-rebase#_recovering_from_upstream_rebase)”를 참조하세요.

{% endwarning %}

**가장 최근에 푸시된 커밋의 메시지 변경**

1. [위 단계](/articles/changing-a-commit-message#commit-has-not-been-pushed-online)에 따라 커밋 메시지를 수정합니다.
2. 이전 커밋을 강제로 푸시하려면 `push --force-with-lease` 명령을 사용합니다.
  ```shell
  $ git push --force-with-lease origin EXAMPLE-BRANCH
  ```

**이전 또는 여러 커밋 메시지 변경**

여러 커밋 또는 이전 커밋에 대한 메시지를 수정해야 하는 경우 대화형 다시 지정을 사용한 다음 강제 푸시를 사용하여 커밋 기록을 변경할 수 있습니다.

1. 명령줄에서, 수정하려는 커밋이 포함된 리포지토리로 이동합니다.
2. 기본 텍스트 편집기에서 마지막 `n`개 커밋의 목록을 표시하려면 `git rebase -i HEAD~n` 명령을 사용합니다.

    ```shell
    # Displays a list of the last 3 commits on the current branch
    $ git rebase -i HEAD~3
    ```
    목록은 다음과 유사합니다.

    ```shell
    pick e499d89 Delete CNAME
    pick 0c39034 Better README
    pick f7fde4a Change the commit message but push the same commit.

    # Rebase 9fdb3bd..f7fde4a onto 9fdb3bd
    #
    # Commands:
    # p, pick = use commit
    # r, reword = use commit, but edit the commit message
    # e, edit = use commit, but stop for amending
    # s, squash = use commit, but meld into previous commit
    # f, fixup = like "squash", but discard this commit's log message
    # x, exec = run command (the rest of the line) using shell
    #
    # These lines can be re-ordered; they are executed from top to bottom.
    #
    # If you remove a line here THAT COMMIT WILL BE LOST.
    #
    # However, if you remove everything, the rebase will be aborted.
    #
    # Note that empty commits are commented out
    ```
3. 변경하려는 각 커밋 메시지 앞에서 `pick`를 `reword`로 바꿉니다.
  ```shell
  pick e499d89 Delete CNAME
  reword 0c39034 Better README
  reword f7fde4a Change the commit message but push the same commit.
  ```
4. 커밋 목록 파일을 저장한 후 닫습니다.
5. 결과 커밋 파일마다 새 커밋 메시지를 입력하고 파일을 저장한 후 닫습니다.
6. 변경 내용을 GitHub로 푸시할 준비가 되면 push --force 명령을 사용하여 이전 커밋을 강제로 푸시합니다.
```shell
$ git push --force origin EXAMPLE-BRANCH
```

대화형 다시 지정에 대한 자세한 내용은 Git 설명서의 “[대화형 모드](https://git-scm.com/docs/git-rebase#_interactive_mode)”를 참조하세요.

{% tip %}

이전과 마찬가지로 커밋 메시지를 수정하면 새 ID가 있는 새 커밋이 생성됩니다. 그러나 이 경우 각 커밋에 부모의 ID도 포함되어 있기 때문에 수정된 커밋 뒤에 오는 모든 커밋은 새 ID도 얻게 됩니다.

{% endtip %}

{% warning %}

커밋 메시지에 중요한 정보를 포함했다면 수정된 커밋으로 커밋을 강제로 푸시해도 {% data variables.product.product_name %}에서 원래 커밋이 제거되지 않을 수 있습니다. 이전 커밋은 후속 클론의 일부가 되지 않습니다. 그러나 여전히 {% data variables.product.product_name %}에서 캐시될 수 있고 커밋 ID를 통해 액세스가 가능할 수 있습니다. 원격 리포지토리에서 제거하려면 이전 커밋 ID를 사용하여 {% data variables.contact.contact_support %}에 문의해야 합니다.

{% endwarning %}

## 추가 참고 자료

* “[커밋 서명](/articles/signing-commits)”
