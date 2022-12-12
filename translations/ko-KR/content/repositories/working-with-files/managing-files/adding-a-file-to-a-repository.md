---
title: 리포지토리에 파일 추가
intro: '{% data variables.product.product_name %}에 또는 명령줄을 사용하여 기존 파일을 리포지토리에 업로드하고 커밋할 수 있습니다.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
  - /articles/adding-a-file-to-a-repository-from-the-command-line
  - /articles/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-files-in-a-repository/managing-files-on-github/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/managing-files-using-the-command-line/adding-a-file-to-a-repository-using-the-command-line
  - /github/managing-large-files/about-large-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Add a file
ms.openlocfilehash: ae5a795f4e5faab662946d6b933224a5bc57ab99
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098004'
---
## {% data variables.product.product_name %}의 리포지토리에 파일 추가

브라우저를 통해 리포지토리에 추가하는 파일은 파일당 {% data variables.large_files.max_github_browser_size %}로 제한됩니다. 명령줄을 이용하면 최대 {% data variables.large_files.max_github_size %}의 파일을 추가할 수 있습니다. 자세한 내용은 "[명령줄을 사용하여 리포지토리에 파일 추가](#adding-a-file-to-a-repository-using-the-command-line)"를 참조하세요. {% data variables.large_files.max_github_size %}보다 큰 파일을 추가하려면 {% data variables.large_files.product_name_long %}을(를) 사용해야 합니다. 자세한 내용은 "[{% data variables.product.product_name %}의 대용량 파일 정보](/repositories/working-with-files/managing-large-files/about-large-files-on-github)"를 참조하세요.

{% tip %}

**팁:**
- 동시에 여러 파일을 {% data variables.product.product_name %}에 업로드할 수 있습니다.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. 파일 목록 위에서 **파일 추가** 드롭다운을 사용하여 **파일 업로드** 를 클릭합니다.
  !["파일 추가" 드롭다운의 "파일 업로드"](/assets/images/help/repository/upload-files-button.png)
3. 리포지토리에 업로드할 파일 또는 폴더를 파일 트리에 끌어다 놓습니다.
![끌어다 놓기 영역](/assets/images/help/repository/upload-files-drag-and-drop.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %}
6. **변경 내용 커밋** 을 클릭합니다.
![변경 내용 커밋 단추](/assets/images/help/repository/commit-changes-button.png)

## 명령줄을 사용하여 리포지토리에 파일 추가

명령줄을 사용하여 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 리포지토리에 기존 파일을 업로드할 수 있습니다.

{% tip %}

**팁:** [{% data variables.product.product_name %} 웹 사이트의 리포지토리에 기존 파일을 추가할 수도 있습니다](/articles/adding-a-file-to-a-repository).

{% endtip %}

{% data reusables.command_line.manipulating_file_prereqs %}

{% data reusables.repositories.sensitive-info-warning %}

1. 컴퓨터에서 {% data variables.product.product_name %}에 업로드할 파일을 리포지토리를 복제할 때 만든 로컬 디렉터리로 옮깁니다.
{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.command_line.switching_directories_procedural %} {% data reusables.git.stage_for_commit %}
  ```shell
  $ git add .
  # Adds the file to your local repository and stages it for commit. {% data reusables.git.unstage-codeblock %}
  ```
{% data reusables.git.commit-file %}
  ```shell
  $ git commit -m "Add existing file"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
{% data reusables.git.git-push %}

## 추가 참고 자료

- "[{% data variables.product.product_name %}에 로컬로 호스트된 코드 추가](/get-started/importing-your-projects-to-github/importing-source-code-to-github//adding-locally-hosted-code-to-github)"
