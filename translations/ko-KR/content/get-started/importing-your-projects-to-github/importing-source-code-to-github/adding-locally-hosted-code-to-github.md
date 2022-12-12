---
title: GitHub에 로컬로 호스트된 코드 추가
intro: '{% data variables.product.prodname_cli %} 또는 Git 명령을 사용하여 명령줄에서 {% data variables.product.product_name %}에 기존 소스 코드 또는 리포지토리를 추가하는 방법을 알아봅니다. 그런 다음 코드를 공유하고 함께 작업할 다른 사용자를 초대합니다.'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Add locally hosted code
ms.openlocfilehash: f7b8a56f2e00bbed44cb621b9f3b1701bf7422f5
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094179'
---
## {% data variables.product.product_name %}에 기존 소스 코드 추가 정보

컴퓨터나 프라이빗 네트워크에 로컬로 저장된 기존 소스 코드 또는 리포지토리가 있는 경우 터미널에서 명령을 입력하여 {% data variables.product.product_name %}에 추가할 수 있습니다. Git 명령을 직접 입력하거나 {% data variables.product.prodname_cli %}를 사용하여 이 작업을 수행할 수 있습니다.

{% data variables.product.prodname_cli %}는 컴퓨터의 명령줄에서 {% data variables.product.prodname_dotcom %}를 사용하기 위한 오픈 소스 도구입니다. {% data variables.product.prodname_cli %}는 명령줄을 사용하여 {% data variables.product.product_name %}에 기존 프로젝트를 추가하는 프로세스를 간소화할 수 있습니다. {% data variables.product.prodname_cli %}에 대한 자세한 내용은 “[{% data variables.product.prodname_cli %} 정보](/github-cli/github-cli/about-github-cli)”를 참조하세요.

{% tip %}

**팁:** 포인트 앤 클릭 사용자 인터페이스에 가장 익숙한 경우 {% data variables.product.prodname_desktop %}을 사용하여 프로젝트를 추가해 보세요. 자세한 내용은 ‘{% data variables.product.prodname_desktop %} 도움말’의 “[로컬 컴퓨터에서 GitHub Desktop에 리포지토리 추가](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)”를 참조하세요.

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## {% data variables.product.prodname_cli %}를 사용하여 {% data variables.product.product_name %}에 로컬 리포지토리 추가

1. 명령줄에서 프로젝트의 루트 디렉터리로 이동합니다.
1. 로컬 디렉터리를 Git 리포지토리로 초기화합니다.

    ```shell
    git init -b main
    ```

1. 프로젝트의 모든 파일을 스테이징 및 커밋합니다.

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. GitHub에서 프로젝트의 리포지토리를 만들려면 `gh repo create` 하위 명령을 사용합니다. 메시지가 표시되면 **GitHub에 기존 로컬 리포지토리 푸시** 를 선택하고 원하는 리포지토리 이름을 입력합니다. 프로젝트가 사용자 계정 대신 조직에 속하도록 하려면 `organization-name/project-name`을 사용하여 조직 이름과 프로젝트 이름을 지정합니다.

1. 대화형 프롬프트의 안내를 따릅니다. 원격을 추가하고 리포지토리를 푸시하려면 원격을 추가하고 커밋을 현재 분기에 푸시하라는 메시지가 표시될 때 예를 확인합니다.

1. 또는 모든 프롬프트를 건너뛰려면 `--source` 플래그가 있는 리포지토리의 경로를 제공하고 표시 유형 플래그(`--public`, `--private` 또는`--internal`)를 전달합니다. 예: `gh repo create --source=. --public`. `--remote` 플래그를 사용하여 원격을 지정합니다. 커밋을 푸시하려면 `--push` 플래그를 전달합니다. 가능한 인수에 대한 자세한 내용은 [GitHub CLI 설명서](https://cli.github.com/manual/gh_repo_create)를 참조하세요.

## Git을 사용하여 {% data variables.product.product_name %}에 로컬 리포지토리 추가

{% mac %}

1. {% 데이터 variables.location.product_location %}에 [새 리포지토리를 만듭니](/repositories/creating-and-managing-repositories/creating-a-new-repository)다. 오류를 방지하려면 ‘추가 정보’, 라이선스 또는 `gitignore` 파일을 사용하여 새 리포지토리를 초기화하지 마세요. 프로젝트가 {% data variables.product.product_name %}에 푸시된 후 해당 파일을 추가할 수 있습니다.
    ![새 리포지토리 만들기 드롭다운](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. 현재 작업 디렉터리를 로컬 프로젝트로 변경합니다.
4. `init` 명령으로 로컬 디렉터리를 Git 리포지토리로 초기화합니다. 기본적으로 초기 분기를 `master`라고 합니다.
   
   Git 2.28.0 이상 버전을 사용하는 경우 기본 분기의 이름을 `-b`로 설정할 수 있습니다.

   ``` shell
   $ git init -b main
   ```

   Git 2.27.1 이하 버전을 사용하는 경우 기본 분기의 이름을 `&& git symbolic-ref HEAD refs/heads/main`으로 설정할 수 있습니다.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. 새 로컬 리포지토리에서 파일을 추가합니다. 그러면 파일이 첫 번째 커밋을 위해 스테이징됩니다.
  
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. 로컬 리포지토리에서 스테이징한 파일을 커밋합니다.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 빠른 설치 페이지에서 리포지토리 맨 위에서 {% 옥티콘 "clippy" aria-label="클립보드로 복사 아이콘" %}을(를) 클릭하여 원격 리포지토리 URL을 복사합니다.
    ![원격 리포지토리 URL 필드 복사](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 터미널에서 로컬 리포지토리가 푸시될 [원격 리포지토리의 URL을 추가](/github/getting-started-with-github/managing-remote-repositories)합니다.
  ```shell
  $ git remote add origin &lt;REMOTE_URL>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. 로컬 리포지토리[의 변경 내용을](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) {% 데이터 variables.location.product_location %}으로 푸시합니다.
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. {% 데이터 variables.location.product_location %}에 [새 리포지토리를 만듭니](/articles/creating-a-new-repository)다. 오류를 방지하려면 ‘추가 정보’, 라이선스 또는 `gitignore` 파일을 사용하여 새 리포지토리를 초기화하지 마세요. 프로젝트가 {% data variables.product.product_name %}에 푸시된 후 해당 파일을 추가할 수 있습니다.
    ![새 리포지토리 만들기 드롭다운](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. 현재 작업 디렉터리를 로컬 프로젝트로 변경합니다.
4. `init` 명령으로 로컬 디렉터리를 Git 리포지토리로 초기화합니다. 기본적으로 초기 분기를 `master`라고 합니다.
   
   Git 2.28.0 이상 버전을 사용하는 경우 기본 분기의 이름을 `-b`로 설정할 수 있습니다.

   ``` shell
   $ git init -b main
   ```

   Git 2.27.1 이하 버전을 사용하는 경우 기본 분기의 이름을 `&& git symbolic-ref HEAD refs/heads/main`으로 설정할 수 있습니다.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. 새 로컬 리포지토리에서 파일을 추가합니다. 그러면 파일이 첫 번째 커밋을 위해 스테이징됩니다.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. 로컬 리포지토리에서 스테이징한 파일을 커밋합니다.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 빠른 설치 페이지에서 리포지토리 맨 위에서 {% 옥티콘 "clippy" aria-label="클립보드로 복사 아이콘" %}을(를) 클릭하여 원격 리포지토리 URL을 복사합니다.
    ![원격 리포지토리 URL 필드 복사](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 명령 프롬프트에서 로컬 리포지토리가 푸시될 [원격 리포지토리의 URL을 추가](/github/getting-started-with-github/managing-remote-repositories)합니다.
  ```shell
  $ git remote add origin &lt;REMOTE_URL>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. 로컬 리포지토리[의 변경 내용을](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) {% 데이터 variables.location.product_location %}으로 푸시합니다.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. {% 데이터 variables.location.product_location %}에 [새 리포지토리를 만듭니](/articles/creating-a-new-repository)다. 오류를 방지하려면 ‘추가 정보’, 라이선스 또는 `gitignore` 파일을 사용하여 새 리포지토리를 초기화하지 마세요. 프로젝트가 {% data variables.product.product_name %}에 푸시된 후 해당 파일을 추가할 수 있습니다.
    ![새 리포지토리 만들기 드롭다운](/assets/images/help/repository/repo-create.png) {% data reusables.command_line.open_the_multi_os_terminal %}
3. 현재 작업 디렉터리를 로컬 프로젝트로 변경합니다.
4. `init` 명령으로 로컬 디렉터리를 Git 리포지토리로 초기화합니다. 기본적으로 초기 분기를 `master`라고 합니다.
   
   Git 2.28.0 이상 버전을 사용하는 경우 기본 분기의 이름을 `-b`로 설정할 수 있습니다.

   ``` shell
   $ git init -b main
   ```

   Git 2.27.1 이하 버전을 사용하는 경우 기본 분기의 이름을 `&& git symbolic-ref HEAD refs/heads/main`으로 설정할 수 있습니다.

   ``` shell
   $ git init && git symbolic-ref HEAD refs/heads/main
   ```
5. 새 로컬 리포지토리에서 파일을 추가합니다. 그러면 파일이 첫 번째 커밋을 위해 스테이징됩니다.
  ```shell
  $ git add .
  # Adds the files in the local repository and stages them for commit. {% data reusables.git.unstage-codeblock %}
  ```
6. 로컬 리포지토리에서 스테이징한 파일을 커밋합니다.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}의 빠른 설치 페이지에서 리포지토리 맨 위에서 {% 옥티콘 "clippy" aria-label="클립보드로 복사 아이콘" %}을(를) 클릭하여 원격 리포지토리 URL을 복사합니다.
    ![원격 리포지토리 URL 필드 복사](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. 터미널에서 로컬 리포지토리가 푸시될 [원격 리포지토리의 URL을 추가](/github/getting-started-with-github/managing-remote-repositories)합니다.
  ```shell
  $ git remote add origin &lt;REMOTE_URL>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. 로컬 리포지토리[의 변경 내용을](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) {% 데이터 variables.location.product_location %}으로 푸시합니다.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## 추가 참고 자료

- “[리포지토리에 파일 추가](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)”
