---
title: 하위 폴더를 새 리포지토리로 분할
redirect_from:
  - /articles/splitting-a-subpath-out-into-a-new-repository
  - /articles/splitting-a-subfolder-out-into-a-new-repository
  - /github/using-git/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/splitting-a-subfolder-out-into-a-new-repository
  - /github/getting-started-with-github/using-git/splitting-a-subfolder-out-into-a-new-repository
intro: Git 리포지토리 내의 폴더를 새 리포지토리로 전환할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Splitting a subfolder
ms.openlocfilehash: e99c1c1411b335837b478b32f085596ec4f5fc0f
ms.sourcegitcommit: 46eac8c63f52669996a9c832f2abf04864dc89ba
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172911'
---
리포지토리의 새 복제본을 만드는 경우 폴더를 별도의 리포지토리로 분할할 때 Git 기록이나 변경 내용이 손실되지 않습니다.

{% data reusables.command_line.open_the_multi_os_terminal %}

2. 현재 작업 디렉터리를 새 리포지토리를 만들 위치로 변경합니다.

4. 하위 폴더가 포함된 리포지토리를 복제합니다.
   ```shell
   $ git clone https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME
   ```

4. 현재 작업 디렉터리를 복제된 리포지토리로 변경합니다.
   ```shell
   $ cd REPOSITORY-NAME
   ```

5. 리포지토리의 나머지 파일에서 하위 폴더를 필터링하려면 를 설치 [`git-filter-repo`](https://github.com/newren/git-filter-repo)한 다음, 다음 인수를 사용하여 를 실행 `git filter-repo` 합니다.
   - `FOLDER-NAME`: 별도의 리포지토리를 만들려는 프로젝트 내의 폴더입니다.

   {% windows %}

   {% tip %}

   **팁:** Windows 사용자는 폴더를 구분하기 위해 `/`를 사용해야 합니다.

   {% endtip %}

   {% endwindows %}
  
   ```shell
   $ git filter-repo --path FOLDER-NAME1/ --path FOLDER-NAME2/
   # Filter the specified branch in your directory and remove empty commits
   > Rewrite 48dc599c80e20527ed902928085e7861e6b3cbe6 (89/89)
   > Ref 'refs/heads/BRANCH-NAME' was rewritten
   ```
   
   이제 리포지토리에는 하위 폴더에 있던 파일만 포함되어 있습니다.

6. {% data variables.product.product_name %}에 [새 리포지토리를 만듭니다](/articles/creating-a-new-repository/).

7. {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}의 빠른 설정 페이지에서 새 리포지토리 맨 위에 있는 {% octicon "clippy" aria-label="The copy to clipboard icon" %}을 클릭하여 원격 리포지토리 URL을 복사합니다.
    
   ![원격 리포지토리 URL 필드 복사](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)

   {% tip %}

   **팁:** HTTPS와 SSH URL 간의 차이점에 대한 자세한 내용은 “[원격 리포지토리 정보](/github/getting-started-with-github/about-remote-repositories)”를 참조하세요.

   {% endtip %}

8. 리포지토리의 기존 원격 이름을 확인합니다. 예를 들어 일반적으로 선택하는 두 가지는 `origin` 또는 `upstream`입니다.
   ```shell
   $ git remote -v
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (fetch)
   > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY-NAME.git (push)
   ```

9. 7단계에서 복사한 기존 원격 이름 및 원격 리포지토리 URL을 사용하여 새 리포지토리에 대한 새 원격 URL을 설정합니다.
   ```shell
   git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git
   ```

10. 원격 URL이 새 리포지토리 이름으로 변경되었는지 확인합니다.
    ```shell
    $ git remote -v
    # Verify new remote URL
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (fetch)
    > origin  https://{% data variables.command_line.codeblock %}/USERNAME/NEW-REPOSITORY-NAME.git (push)
    ```

11. {% data variables.product.product_name %}의 새 리포지토리에 변경 내용을 푸시합니다.
    ```shell
    git push -u origin BRANCH-NAME
    ```
