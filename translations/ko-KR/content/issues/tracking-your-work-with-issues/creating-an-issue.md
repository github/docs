---
title: 문제 만들기
intro: 문제는 다양한 방법으로 만들 수 있으므로 워크플로에 가장 편리한 방법을 선택하면 됩니다.
permissions: 'People with read access can create an issue in a repository where issues are enabled. {% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/opening-an-issue-from-a-comment
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-a-comment
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/opening-an-issue-from-code
  - /articles/opening-an-issue-from-code
  - /github/managing-your-work-on-github/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/opening-an-issue-from-code
  - /issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /github/managing-your-work-on-github/about-automation-for-issues-and-pull-requests-with-query-parameters
  - /issues/tracking-your-work-with-issues/creating-issues/creating-an-issue
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
shortTitle: Create an issue
type: how_to
ms.openlocfilehash: 21bef9325848b6242b505a8c28ec65483b36448f
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147410085'
---
이슈는 버그, 향상된 기능 또는 기타 요청을 추적하는 데 사용할 수 있습니다. 자세한 내용은 “[이슈 정보](/issues/tracking-your-work-with-issues/about-issues)”를 참조하세요.

{% data reusables.repositories.administrators-can-disable-issues %}

## 리포지토리에서 이슈 만들기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %} {% data reusables.repositories.new_issue %}
1. 리포지토리에서 이슈 템플릿을 사용하는 경우 열려는 이슈 유형 옆에 있는 **시작** 을 클릭합니다.
  ![만들려는 이슈 유형을 선택](/assets/images/help/issues/issue_template_get_started_button.png)하거나 열려는 이슈 유형이 사용 가능한 옵션에 포함되지 않은 경우 **빈 이슈 열기** 를 클릭합니다.
   ![빈 이슈 열기 링크](/assets/images/help/issues/blank_issue_link.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## {% data variables.product.prodname_cli %}로 이슈 만들기

{% data reusables.cli.about-cli %} {% data variables.product.prodname_cli %}에 대한 자세한 내용은 “[{% data variables.product.prodname_cli %} 정보](/github-cli/github-cli/about-github-cli)”를 참조하세요.

이슈를 만들려면 `gh issue create` 하위 명령을 사용합니다. 대화형 프롬프트를 건너뛰려면 `--body` 및 `--title` 플래그를 포함합니다.

```shell
gh issue create --title "My new issue" --body "Here are more details."
```

담당자, 레이블, 마일스톤 및 프로젝트를 지정할 수도 있습니다.

```shell
gh issue create --title "My new issue" --body "Here are more details." --assignee @me,monalisa --label "bug,help wanted" --project onboarding --milestone "learning codebase"
```

## 주석에서 이슈 만들기

이슈 또는 끌어오기 요청의 주석에서 새 이슈를 열 수 있습니다. 주석에서 이슈를 열면 주석이 원래 게시된 위치를 보여 주는 코드 조각이 이슈에 포함됩니다.

1. 이슈를 열려는 주석으로 이동합니다.
2. 해당 주석에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭합니다.
  ![끌어오기 요청 검토 주석의 Kebab 단추](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. **새 이슈의 참조** 를 클릭합니다.
  ![새 이슈 메뉴 항목의 참조](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. "리포지토리" 드롭다운 메뉴를 사용하고 이슈를 열려는 리포지토리를 선택합니다.
  ![새 이슈에 대한 리포지토리 드롭다운](/assets/images/help/pull_requests/new-issue-repository.png)
5. 이슈에 대해 설명이 포함된 제목과 본문을 입력합니다.
  ![새 이슈의 제목 및 본문](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. **이슈 만들기** 를 클릭합니다.
  ![새 이슈 만들기 단추](/assets/images/help/pull_requests/create-issue.png) {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

## 코드에서 이슈 만들기

파일 또는 끌어오기 요청의 특정 줄 또는 코드 줄에서 새 이슈를 열 수 있습니다. 코드에서 이슈를 열면 선택한 코드 줄 또는 범위를 보여 주는 코드 조각이 이슈에 포함됩니다. 코드가 저장된 동일한 리포지토리에서만 이슈를 열 수 있습니다.

![코드에서 열린 이슈에서 렌더링된 코드 조각](/assets/images/help/repository/issue-opened-from-code.png)

{% data reusables.repositories.navigate-to-repo %}
1. 이슈에서 참조할 코드를 찾습니다.
    - 파일의 코드에 대한 이슈를 열려면 파일로 이동합니다.
    - 끌어오기 요청의 코드에 대한 이슈를 열려면 끌어오기 요청으로 이동하고 {% octicon "diff" aria-label="The file diff icon" %} **변경된 파일** 을 클릭합니다. 그런 다음, 주석에 포함할 코드가 포함된 파일을 찾아 **보기** 를 클릭합니다.
{% data reusables.repositories.choose-line-or-range %}
4. 코드 범위 왼쪽에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}을 클릭합니다. 드롭다운 메뉴에서 **새 이슈의 참조** 를 클릭합니다.
  ![선택한 줄에서 새 이슈 열기 옵션이 있는 Kebab 메뉴](/assets/images/help/repository/open-new-issue-specific-line.png) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% ifversion discussions %}

## 토론에서 이슈 만들기

리포지토리에 대한 심사 권한이 있는 사용자는 토론에서 이슈를 만들 수 있습니다.

토론에서 이슈를 만들면 토론 게시물의 내용이 이슈 본문에 자동으로 포함되고 레이블이 유지됩니다. 토론에서 이슈를 만들면 토론이 이슈로 변환되거나 기존 토론이 삭제되지 않습니다. {% data variables.product.prodname_discussions %}에 대한 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요.

{% data reusables.discussions.discussions-tab %} {% data reusables.discussions.click-discussion-in-list %}
1. 오른쪽 사이드바에서 {% octicon "issue-opened" aria-label="The issues icon" %} **토론에서 이슈 만들기** 를 클릭합니다.
   ![토론에서 이슈 만들기 버튼](/assets/images/help/discussions/create-issue-from-discussion.jpg) {% data reusables.repositories.type-issue-title-and-description %} {% data reusables.repositories.assign-an-issue-as-project-maintainer %} {% data reusables.repositories.submit-new-issue %}

{% endif %}

## 프로젝트 보드 노트에서 이슈 만들기

프로젝트 보드를 사용하여 작업을 추적하고 우선 순위를 지정하는 경우 프로젝트 보드 노트를 이슈로 변환할 수 있습니다. 자세한 내용은 "[프로젝트 보드 정보](/github/managing-your-work-on-github/about-project-boards)" 및 "[프로젝트 보드에 노트 추가](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)"를 참조하세요.

{% ifversion fpt or ghec %}

## 작업 목록 항목에서 이슈 만들기

이슈 내에서 작업 목록을 사용하여 작업을 더 작은 작업으로 분할하고 전체 작업 집합을 완료될 때까지 추적할 수 있습니다. 작업에 추가 추적 또는 토론이 필요한 경우 작업을 마우스로 가리키고 작업의 오른쪽 위 모서리에 있는 {% octicon "issue-opened" aria-label="The issue opened icon" %} 아이콘을 클릭하여 작업을 문제로 변환할 수 있습니다. 자세한 내용은 “[작업 목록 정보](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists)”를 참조하세요.

{% endif %}

## URL 쿼리에서 이슈 만들기

쿼리 매개 변수를 사용하여 이슈를 열 수 있습니다. 쿼리 매개 변수는 검색 필터 결과 또는 {% data variables.product.prodname_dotcom %}의 이슈 템플릿과 같은 특정 웹 페이지 보기를 공유하도록 사용자 지정할 수 있는 URL의 선택적 부분입니다. 사용자 고유의 쿼리 매개 변수를 만들려면 키 및 값 쌍과 일치해야 합니다.

{% tip %}

**팁:** 기본 레이블, 담당자 및 이슈 제목을 사용하여 열리는 이슈 템플릿을 만들 수도 있습니다. 자세한 내용은 “[템플릿을 사용하여 유용한 이슈 및 끌어오기 요청 권장](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”을 참조하세요.

{% endtip %}

해당하는 쿼리 매개 변수를 사용하려면 모든 작업에 대한 적절한 사용 권한이 있어야 합니다. 예를 들어 `labels` 쿼리 매개 변수를 사용하려면 이슈에 레이블을 추가할 수 있는 사용 권한이 있어야 합니다. 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”을 참조하세요.

쿼리 매개 변수를 사용하여 잘못된 URL을 만들거나 적절한 사용 권한이 없는 경우 URL은 `404 Not Found` 오류 페이지를 반환합니다. 서버 한도를 초과하는 URL을 만들면 URL이 `414 URI Too Long` 오류 페이지를 반환합니다.

쿼리 매개 변수 | 예제
---  | ---
`title` | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report`는 레이블 "bug"와 제목 "New bug report"를 사용하여 이슈를 만듭니다.
`body` | `https://github.com/octo-org/octo-repo/issues/new?title=New+bug+report&body=Describe+the+problem.`은 이슈 본문에 제목 "New bug report" 및 주석 "Describe the problem"을 사용하여 이슈를 만듭니다.
`labels` | `https://github.com/octo-org/octo-repo/issues/new?labels=help+wanted,bug`는 레이블 "help wanted" 및 "bug"를 사용하여 이슈를 만듭니다.
`milestone` | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones`는 마일스톤 "testing milestones"를 사용하여 이슈를 만듭니다.
`assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat`은 이슈를 만들고 @octocat에 할당합니다.
`projects` | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1`은 제목 “Bug fix”를 사용하여 이슈를 만들고 조직의 프로젝트 보드 1에 추가합니다.
`template` | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md`는 이슈 본문의 템플릿을 사용하여 이슈를 만듭니다. `template` 쿼리 매개 변수는 루트 내 `ISSUE_TEMPLATE` 하위 디렉터리에 저장된 템플릿, `docs/` 또는 리포지토리의 `.github/` 디렉터리에서 작동합니다. 자세한 내용은 “[템플릿을 사용하여 유용한 이슈 및 끌어오기 요청 권장](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”을 참조하세요.

{% ifversion code-scanning-task-lists %}
## {% data variables.product.prodname_code_scanning %} 경고에서 이슈 만들기

{% data reusables.code-scanning.beta-alert-tracking-in-issues %} 이슈를 사용하여 작업을 추적하고 우선 순위를 지정하는 경우 이슈를 사용하여 {% data variables.product.prodname_code_scanning %} 경고를 추적할 수 있습니다.
{% data reusables.code-scanning.alert-tracking-link %}

{% endif %}

## 추가 참고 자료

- “[GitHub에 쓰기](/github/writing-on-github)”
