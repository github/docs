---
title: 파일 이름 바꾸기
intro: '{% data variables.product.product_name %}에서 직접 또는 명령줄을 사용하여 리포지토리의 파일 이름을 바꿀 수 있습니다.'
redirect_from:
  - /articles/renaming-a-file
  - /github/managing-files-in-a-repository/renaming-a-file
  - /articles/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/renaming-a-file-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/renaming-a-file
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/renaming-a-file-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f841c1f2071d59b28b04681528ba4420fc5b08e4
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009263'
---
## {% data variables.product.product_name %}에서 파일 이름 바꾸기

파일 이름을 바꾸면 [파일을 새 위치로 이동](/articles/moving-a-file-to-a-new-location)할 수도 있습니다.

{% tip %}

**팁**:

- 액세스할 수 없는 리포지토리의 파일 이름을 바꾸려고 하면 프로젝트를 개인 계정으로 포크하고 변경 내용을 커밋한 후 원래 리포지토리로 [끌어오기 요청](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)을 보낼 수 있습니다.
- 웹 인터페이스를 통해 만든 파일 이름에는 영숫자 문자와 하이픈(`-`)만 포함될 수 있습니다. 다른 문자를 사용하려면 파일을 로컬로 만들고 커밋한 다음, 리포지토리에 푸시합니다.
- 이미지와 같은 일부 파일은 명령줄에서 이름을 바꿔야 합니다. 자세한 내용은 "[명령줄을 사용하여 파일 이름 바꾸기](/articles/renaming-a-file-using-the-command-line)"를 참조하세요.

{% endtip %}

1. 리포지토리에서 이름을 바꿀 파일로 이동합니다.
2. 파일 보기의 오른쪽 위 모서리에서 {% octicon "pencil" aria-label="The edit icon" %}을 클릭하여 파일 편집기를 엽니다.
![파일 편집 아이콘](/assets/images/help/repository/edit-file-icon.png)
3. 파일 이름 필드에서 파일 이름을 원하는 새 파일 이름으로 변경합니다. 파일의 콘텐츠를 동시에 업데이트할 수도 있습니다.
![파일 이름 편집](/assets/images/help/repository/changing-file-name.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## 명령줄을 사용하여 파일 이름 바꾸기 

명령줄을 사용하여 리포지토리의 파일 이름을 바꿀 수 있습니다.

많은 파일은 [{% data variables.product.product_name %}에서 직접 이름을 바꿀](/articles/renaming-a-file) 수 있지만 이미지와 같은 일부 파일은 명령줄에서 이름을 바꿔야 합니다.

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %}
3. 파일 이름을 바꾸고 이전 파일 이름과 파일을 지정하려는 새 이름을 지정합니다. 그러면 커밋에 대한 변경 내용이 준비됩니다.
  ```shell
  $ git mv OLD-FILENAME NEW-FILENAME
  ```
4. `git status`를 사용하여 이전 및 새 파일 이름을 확인합니다.
  ```shell
  $ git status
  > # On branch YOUR-BRANCH
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #     renamed: OLD-FILENAME -> NEW-FILENAME
  > #
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Rename file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

