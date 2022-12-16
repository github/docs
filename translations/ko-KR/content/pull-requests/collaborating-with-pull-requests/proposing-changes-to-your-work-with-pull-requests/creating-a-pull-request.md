---
title: 끌어오기 요청 만들기
intro: 리포지토리의 변경 내용을 제안하고 공동 작업하는 끌어오기 요청을 만듭니다. 이러한 변경 내용은 분기에서 제안되어 기본 분기에 완료 및 승인된 작업만 포함되도록 합니다.
permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request
  - /articles/creating-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: de387cea338fb927d2baeedd79855eefbdbc82ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147110995'
---
끌어오기 요청에 대한 새 분기를 만들려고 하는데 리포지토리에 대한 쓰기 권한이 없는 경우 먼저 리포지토리를 포크할 수 있습니다. 자세한 내용은 “[포크에서 끌어오기 요청 만들기](/articles/creating-a-pull-request-from-a-fork)” 및 “[포크 정보](/articles/about-forks)”를 참조하세요.

끌어오기 요청을 만들 때 변경 내용을 병합할 분기를 지정할 수 있습니다. 끌어오기 요청은 서로 다른 두 분기 간에만 열 수 있습니다.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## 분기 범위 및 대상 리포지토리 변경

기본적으로 끌어오기 요청은 부모 리포지토리의 기본 분기를 기반으로 합니다. 자세한 내용은 “[분기 정보](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)”를 참조하세요.

기본 부모 리포지토리가 올바르지 않으면 드롭다운 목록을 사용하여 부모 리포지토리와 분기를 모두 변경할 수 있습니다. 헤드 및 베이스 분기를 드롭다운 목록으로 교환하여 참조 지점 간에 Diff를 설정할 수도 있습니다. 여기서 참조는 GitHub 리포지토리의 분기 이름이어야 합니다.

![끌어오기 요청 편집 분기](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

분기를 고려할 때 베이스 분기는 변경 내용을 적용해야 하는 **위치** 이며 헤드 분기에는 적용하려는 **항목** 이 포함되어 있습니다. 

베이스 리포지토리를 변경하는 경우 끌어오기 요청에 대한 알림도 변경합니다. 베이스 리포지토리로 푸시할 수 있는 모든 사용자는 다음에 로그인할 때 메일 알림을 받고 대시보드에서 새 끌어오기 요청을 볼 수 있습니다.

분기 범위의 정보를 변경하면 커밋 및 파일 변경 미리 보기 영역이 업데이트되어 새 범위가 표시됩니다.

{% tip %}

**팁**:
- 비교 보기를 사용하여 모든 기간에 걸쳐 비교를 설정할 수 있습니다. 자세한 내용은 “[커밋 비교](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)”를 참조하세요.
- 프로젝트 유지 관리자는 리포지토리에 대한 끌어오기 요청 템플릿을 추가할 수 있습니다. 템플릿에는 끌어오기 요청 본문의 정보에 대한 프롬프트가 포함됩니다. 자세한 내용은 “[문제 및 끌어오기 요청 템플릿 정보](/articles/about-issue-and-pull-request-templates)”를 참조하세요.

{% endtip %}

## 끌어오기 요청 만들기

{% webui %}

{% data reusables.repositories.navigate-to-repo %}
2. “분기” 메뉴에서 커밋이 포함된 분기를 선택합니다.
  ![분기 드롭다운 메뉴](/assets/images/help/pull_requests/branch-dropdown.png) {% data reusables.repositories.new-pull-request %}
4. 베이스 분기 드롭다운 메뉴를 사용하여 변경 내용을 병합할 분기를 선택한 다음 비교 분기 드롭다운 메뉴를 사용하여 변경한 항목 분기를 선택합니다. 
  ![베이스 및 비교 분기 선택을 위한 드롭다운 메뉴](/assets/images/help/pull_requests/choose-base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

끌어오기 요청을 검토한 후 [리포지토리에 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)할 수 있습니다.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

끌어오기 요청을 만들려면 `gh pr create` 하위 명령을 사용합니다.

```shell
gh pr create
```

개인에게 끌어오기 요청을 할당하려면 `--assignee` 또는 `-a` 플래그를 사용합니다. `@me`을 사용하여 끌어오기 요청을 자체 할당할 수 있습니다.

```shell
gh pr create --assignee "@octocat"
```

끌어오기 요청을 병합할 분기를 지정하려면 `--base` 또는 `-B` 플래그를 사용합니다. 끌어오기 요청에 대한 커밋이 포함되어 있는 분기를 지정하려면 `--head` 또는 `-H` 플래그를 사용합니다.

```shell
gh pr create --base my-base-branch --head my-changed-branch
```

새 끌어오기 요청에 대한 제목과 본문을 포함하려면 `--title` 및 `--body` 플래그를 사용합니다.

```shell
gh pr create --title "The bug is fixed" --body "Everything works again"
```

끌어오기 요청을 초안으로 표시하려면 `--draft` 플래그를 사용합니다.

```shell
gh pr create --draft
```

새 끌어오기 요청에 레이블 또는 마일스톤을 추가하려면 `--label` 및 `--milestone` 플래그를 사용합니다.

```shell
gh pr create --label "bug,help wanted" --milestone octocat-milestone
```

특정 프로젝트에 새 끌어오기 요청을 추가하려면 `--project` 플래그를 사용합니다.

```shell
gh pr create --project octocat-project
```

개인 또는 팀을 검토자로 할당하려면 `--reviewer` 플래그를 사용합니다.

```shell
gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
```

기본 웹 브라우저에서 끌어오기 요청을 만들려면 `--web` 플래그를 사용합니다.

```shell
gh pr create --web
```

{% endcli %}

{% desktop %}

{% mac %}

1. 끌어오기 요청을 만들려는 분기로 전환합니다. 자세한 내용은 “[분기 간 전환](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”을 참조하세요.
2. **끌어오기 요청 만들기** 를 클릭합니다. {% data variables.product.prodname_desktop %}이 기본 브라우저를 열어 {% data variables.product.prodname_dotcom %}로 이동합니다.
  ![끌어오기 요청 만들기 단추](/assets/images/help/desktop/mac-create-pull-request.png)
4. {% data variables.product.prodname_dotcom %}에서 **베이스:** 드롭다운 메뉴의 분기가 변경 내용을 병합하려는 분기인지 확인합니다. **비교:** 드롭다운 메뉴의 분기가 변경한 토픽 분기인지 확인합니다.
  ![베이스 및 비교 분기 선택을 위한 드롭다운 메뉴](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. 끌어오기 요청을 만들려는 분기로 전환합니다. 자세한 내용은 “[분기 간 전환](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)”을 참조하세요.
2. **끌어오기 요청 만들기** 를 클릭합니다. {% data variables.product.prodname_desktop %}이 기본 브라우저를 열어 {% data variables.product.prodname_dotcom %}로 이동합니다.
  ![끌어오기 요청 만들기 단추](/assets/images/help/desktop/windows-create-pull-request.png)
3. {% data variables.product.prodname_dotcom %}에서 **베이스:** 드롭다운 메뉴의 분기가 변경 내용을 병합하려는 분기인지 확인합니다. **비교:** 드롭다운 메뉴의 분기가 변경한 토픽 분기인지 확인합니다.
  ![베이스 및 비교 분기 선택을 위한 드롭다운 메뉴](/assets/images/help/desktop/base-and-compare-branches.png) {% data reusables.repositories.pr-title-description %} {% data reusables.repositories.create-pull-request %}

{% endwindows %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. 리포지토리의 로컬 복사본에 대한 변경 내용을 커밋했으면 **끌어오기 요청 만들기** 아이콘을 클릭합니다.
![스테이징 단추가 강조 표시된 원본 제어 사이드바](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. 병합하려는 로컬 분기 및 리포지토리와 병합하려는 원격 분기 및 리포지토리가 올바른지 확인합니다. 그런 다음 끌어오기 요청에 제목과 설명을 입력합니다.
![GitHub 끌어오기 요청 사이드바](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. **만들기** 를 클릭합니다.

{% data variables.product.prodname_github_codespaces %}에서 끌어오기 요청을 생성하는 방법에 대한 자세한 내용은 “[끌어오기 요청에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/developing-in-codespaces/using-github-codespaces-for-pull-requests)”을 참조하세요.

{% endcodespaces %}

{% endif %}
## 추가 참고 자료

- “[포크에서 끌어오기 요청 만들기](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)”
- “[끌어오기 요청을 베이스 분기와 동기화 상태로 유지](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch)”
- “[끌어오기 요청의 베이스 분기 변경](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)”
- “[사이드바에서 프로젝트 보드에 문제 추가 및 끌어오기 요청](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)”
- “[쿼리 매개 변수를 사용하여 문제 및 끌어오기 요청에 대한 자동화 정보](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)”
- “[다른 GitHub 사용자에게 문제 및 끌어오기 요청 할당](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)”
- “[GitHub에 쓰기](/github/writing-on-github)”
