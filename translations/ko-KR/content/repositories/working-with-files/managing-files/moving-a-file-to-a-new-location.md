---
title: 파일을 새 위치로 이동
intro: '{% data variables.product.product_name %}에서 또는 명령줄을 사용하여 파일을 다른 디렉터리로 이동할 수 있습니다.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location
  - /articles/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/moving-a-file-to-a-new-location-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/moving-a-file-to-a-new-location
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/moving-a-file-to-a-new-location-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Move a file
ms.openlocfilehash: 17f0e4dde2865f7c849c481f68acc05ed1cfd7d9
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009177'
---
파일 위치를 변경하는 것 외에도 [파일 내용을 업데이트](/articles/editing-files-in-your-repository)하거나 동일한 커밋에서 [새 이름을 지정](/articles/renaming-a-file)할 수도 있습니다.

## {% data variables.product.product_name %}에서 새 위치로 파일 이동

{% tip %}

**팁**:

- 액세스할 수 없는 리포지토리의 파일을 이동하려고 하면 프로젝트를 개인 계정으로 포크하고 변경 내용을 커밋한 후 원래 리포지토리로 [끌어오기 요청](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)을 보낼 수 있습니다.
- 이미지와 같은 일부 파일은 명령줄에서 이동해야 합니다. 자세한 내용은 "[명령줄을 사용하여 파일을 새 위치로 이동](/articles/moving-a-file-to-a-new-location-using-the-command-line)"을 참조하세요.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. 리포지토리에서 이동할 파일로 이동합니다.
2. 파일 보기의 오른쪽 위 모서리에서 {% octicon "pencil" aria-label="The edit icon" %}을 클릭하여 파일 편집기를 엽니다.
![파일 편집 아이콘](/assets/images/help/repository/move-file-edit-file-icon.png)
3. 파일 이름 필드에서 ![파일 이름 편집](/assets/images/help/repository/moving_files.gif) 지침을 사용하여 파일 이름을 변경합니다.
    - 파일을 **하위 폴더** 로 이동하려면 원하는 폴더의 이름 뒤에 다음 `/`를 입력합니다. 새 폴더 이름은 탐색 이동 경로의 새 항목이 됩니다.
    - 파일을 **파일의 현재 위치 위의** 디렉터리로 이동하려면 파일 이름 필드의 시작 부분에 커서를 놓고 `../`를 입력하여 전체 디렉터리 수준을 한 수준 높이거나 `backspace` 키를 입력하여 부모 폴더의 이름을 편집합니다.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

## 명령줄을 사용하여 파일을 새 위치로 이동 

명령줄을 사용하여 이전 위치에서 파일을 제거한 다음, 새 위치에 추가하여 리포지토리 내에서 파일을 이동할 수 있습니다.

많은 파일은 [{% data variables.product.product_name %}에서 직접 이동](/articles/moving-a-file-to-a-new-location)할 수 있지만 이미지와 같은 일부 파일은 명령줄에서 이동해야 합니다.

{% data reusables.command_line.manipulating_file_prereqs %}

1. 컴퓨터에서 리포지토리를 복제할 때 컴퓨터에서 로컬로 만든 디렉터리 내의 새 위치로 파일을 이동합니다.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. `git status`를 사용하여 이전 및 새 파일 위치를 확인합니다.
  ```shell
  $ git status
  > # On branch YOUR-BRANCH
  > # Changes not staged for commit:
  > #   (use "git add/rm <file>..." to update what will be committed)
  > #   (use "git checkout -- <file>..." to discard changes in working directory)
  > #
  > #     deleted:    /OLD-FOLDER/IMAGE.PNG
  > #
  > # Untracked files:
  > #   (use "git add <file>..." to include in what will be committed)
  > #
  > #     /NEW-FOLDER/IMAGE.PNG
  > #
  > # no changes added to commit (use "git add" and/or "git commit -a")
  ```
{% data reusables.git.stage_for_commit %} 이렇게 하면 이전 위치에서 파일이 삭제(또는 `git rm`)되고 새 위치에 파일이 추가(또는 `git add`)됩니다.
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit.
  # {% data reusables.git.unstage-codeblock %}
  ```
5. `git status`를 사용하여 커밋을 위해 준비된 변경 내용을 확인합니다.
  ```shell
  $ git status
  > # On branch YOUR-BRANCH
  > # Changes to be committed:
  > #   (use "git reset HEAD <file>..." to unstage)
  > #
  > #    renamed:    /old-folder/image.png -> /new-folder/image.png
  # Displays the changes staged for commit
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Move file to new directory"
  # Commits the tracked changes and prepares them to be pushed to a remote repository.
  # {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}
