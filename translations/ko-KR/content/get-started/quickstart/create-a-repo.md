---
title: 리포지토리 만들기
redirect_from:
  - /create-a-repo
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: '{% data variables.product.prodname_dotcom %}에 프로젝트를 배치하려면 라이브로 사용할 리포지토리를 만들어야 합니다.'
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
ms.openlocfilehash: 6054d22495cf4b6c6329a545d628d5e9c143c21f
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148099245'
---
## 리포지토리 만들기

{% ifversion fpt or ghec %}

오픈 소스 프로젝트를 포함하여 {% data variables.product.prodname_dotcom %} 리포지토리에 다양한 프로젝트를 저장할 수 있습니다. 오픈 소스 프로젝트를 사용하면 코드를 공유하여 더 신뢰할 수 있고 더 나은 소프트웨어를 만들 수 있습니다. 리포지토리를 사용하여 다른 사람들과 협업하고 작업을 추적할 수 있습니다. 자세한 내용은 “[리포지토리 정보](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)”를 참조하세요. 오픈 소스 프로젝트에 대해 자세히 알아보려면 [OpenSource.org](https://opensource.org/about)를 방문하세요.

{% elsif ghes or ghae %}

이너소스 프로젝트를 포함하여 {% data variables.product.product_name %} 리포지토리에 다양한 프로젝트를 저장할 수 있습니다. 이너소스를 사용하면 코드를 공유하여 더 신뢰할 수 있고 더 나은 소프트웨어를 만들 수 있습니다. 이너소스에 대한 자세한 내용은 {% data variables.product.company_short %}의 백서 “[이너소스 소개](https://resources.github.com/whitepapers/introduction-to-innersource/)”를 참조하세요.

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**참고:** 
- 오픈 소스 프로젝트에 대한 퍼블릭 리포지토리를 만들 수 있습니다. 공용 리포지토리를 만들 때 프로젝트를 다른 사용자와 공유할 방법을 결정하는 [라이선스 파일](https://choosealicense.com/)을 포함해야 합니다. {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- 커뮤니티 상태 파일을 리포지토리에 추가하고, 기여하는 방법에 대한 지침을 설정하고, 리포지토리를 안전하게 유지하는 등의 작업을 수행할 수도 있습니다. 자세한 내용은 “[기본 커뮤니티 상태 파일 만들기](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)”를 참조하세요. 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. 짧고 기억하기 쉬운 리포지토리 이름을 입력합니다. 예를 들어 “hello-world”입니다.
  ![리포지토리 이름을 입력하기 위한 필드](/assets/images/help/repository/create-repository-name.png)
3. 필요에 따라 리포지토리에 관한 설명을 추가합니다. 예를 들어 “{% data variables.product.product_name %}의 첫 번째 리포지토리”입니다.
  ![리포지토리 설명을 입력하기 위한 필드](/assets/images/help/repository/create-repository-desc.png) {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

축하합니다! 첫 번째 리포지토리를 만들고 *README* 파일을 사용하여 초기화했습니다.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. 명령줄에서 새 프로젝트의 로컬 복제본을 만들 디렉터리로 이동합니다.
2. 프로젝트에 대한 리포지토리를 만들려면 `gh repo create` 하위 명령을 사용합니다. 메시지가 표시되면 **Create a new repository on GitHub from scratch**(GitHub에서 처음부터 새 리포지토리 만들기)를 선택하고 새 프로젝트의 이름을 입력합니다. 프로젝트가 개인 계정 대신 조직에 속하도록 하려면 `organization-name/project-name`을 사용하여 조직 이름과 프로젝트 이름을 지정합니다. 
3. 대화형 프롬프트의 안내를 따릅니다. 리포지토리를 로컬로 복제하려면 원격 프로젝트 디렉터리를 복제할지 묻는 메시지가 표시될 때 yes(예)를 눌러 확인합니다.  
4. 또는 프롬프트를 건너뛰려면 리포지토리 이름과 표시 여부 플래그(`--public`, `--private` 또는 `--internal`)를 제공합니다. 예: `gh repo create project-name --public`. 리포지토리를 로컬로 복제하려면 `--clone` 플래그를 전달합니다.  가능한 인수에 대한 자세한 내용은 [GitHub CLI 설명서](https://cli.github.com/manual/gh_repo_create)를 참조하세요.

{% endcli %}

## 첫 번째 변경 내용 커밋

{% webui %}

*[커밋](/articles/github-glossary#commit)* 은 특정 시점에 프로젝트에 있는 모든 파일의 스냅샷과 같습니다.

새 리포지토리를 만들었을 때 *README* 파일을 사용하여 초기화했습니다. *README* 파일에서는 프로젝트를 보다 자세히 설명하거나 프로젝트를 설치 또는 사용하는 방법과 같은 몇 가지 설명서를 추가할 수 있습니다. *README* 파일의 콘텐츠는 리포지토리의 앞 페이지에 자동으로 표시됩니다.

*README* 파일에 대한 변경 내용을 커밋해 보겠습니다.

1. 리포지토리의 파일 목록에서 ***README.md*** 를 클릭합니다.
  ![파일 목록의 README 파일](/assets/images/help/repository/create-commit-open-readme.png)
2. 파일의 콘텐츠 위에서 {% octicon "pencil" aria-label="The edit icon" %} 아이콘을 클릭합니다.
3. **Edit file**(파일 편집) 탭에서 자신에 대한 몇 가지 정보를 입력합니다.
  ![파일의 새 콘텐츠](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %}
5. 파일 변경 사항을 검토합니다. 새 콘텐츠가 녹색으로 표시됩니다.
  ![파일 미리 보기](/assets/images/help/repository/create-commit-review.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

이제 프로젝트를 만들었으므로 변경 내용 커밋을 시작할 수 있습니다.

*README* 파일에서는 프로젝트를 보다 자세히 설명하거나 프로젝트를 설치 또는 사용하는 방법과 같은 몇 가지 설명서를 추가할 수 있습니다. *README* 파일의 콘텐츠는 리포지토리의 앞 페이지에 자동으로 표시됩니다. *README* 파일을 추가하려면 다음 단계를 수행합니다.

1. 명령줄에서 새 프로젝트의 루트 디렉터리로 이동합니다. (`gh repo create` 명령을 실행했을 때 이 디렉터리가 만들어졌습니다.)
1. 프로젝트에 대한 몇 가지 정보를 사용하여 *README* 파일을 만듭니다.

    ```shell
    echo "info about this project" >> README.md
    ```

1. `git status`를 입력합니다. 추적되지 않은 `README.md` 파일이 표시됩니다.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. 파일을 스테이징하고 커밋합니다.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. 해당 분기에 변경 내용을 푸시합니다.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## 다음 단계

이제 *README* 파일을 포함하여 리포지토리를 만들고 {% 데이터 variables.location.product_location %}에 첫 번째 커밋을 만들었습니다.

{% webui %}

* 이제 {% data variables.product.prodname_dotcom %} 리포지토리를 복제하여 컴퓨터에 로컬 복사본을 만들 수 있습니다. 로컬 리포지토리에서 커밋하고, 끌어오기 요청을 만들어 업스트림 리포지토리의 변경 내용을 업데이트할 수 있습니다. 자세한 내용은 “[리포지토리 복제](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)” 및 “[Git 설정](/articles/set-up-git)”을 참조하세요.

{% endwebui %}

* {% data variables.product.prodname_dotcom %}에서 흥미로운 프로젝트 및 리포지토리를 찾고 리포지토리의 포크를 만들어 변경할 수 있습니다. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
