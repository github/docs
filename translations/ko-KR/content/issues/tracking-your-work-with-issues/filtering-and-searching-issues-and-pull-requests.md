---
title: 문제 및 끌어오기 요청 필터링 및 검색
intro: '{% data variables.product.product_name %}에서 리포지토리에 대한 자세한 정보를 찾으려면 문제를 필터링, 정렬, 검색하고 리포지토리와 관련된 요청을 끌어올 수 있습니다.'
redirect_from:
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /articles/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-assignees
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /articles/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests-by-labels
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /articles/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/filtering-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /articles/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/filtering-pull-requests-by-review-status
  - /github/managing-your-work-on-github/finding-information-in-a-repository
  - /articles/finding-information-in-a-repository
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sharing-filters
  - /articles/sharing-filters
  - /github/managing-your-work-on-github/sharing-filters
  - /github/managing-your-work-on-github/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /articles/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/using-search-to-filter-issues-and-pull-requests
  - /github/managing-your-work-on-github/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /articles/sorting-issues-and-pull-requests
  - /github/managing-your-work-on-github/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-assignees
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-issues-and-pull-requests-by-labels
  - /github/administering-a-repository/finding-information-in-a-repository/filtering-pull-requests-by-review-status
  - /github/administering-a-repository/finding-information-in-a-repository/sorting-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/using-search-to-filter-issues-and-pull-requests
  - /github/administering-a-repository/finding-information-in-a-repository/sharing-filters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Pull requests
shortTitle: Filter and search
type: how_to
ms.openlocfilehash: 24f91958f98f4b6744ee3b21bf3d748aef062eb6
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107599'
---
{% data reusables.cli.filter-issues-and-pull-requests-tip %}

## 문제 및 끌어오기 요청 필터링

문제 및 끌어오기 요청에는 목록을 구성하기 위해 적용할 수 있는 기본 필터 세트가 함께 제공됩니다.

{% data reusables.search.requested_reviews_search %}

문제 및 끌어오기 요청을 필터링하여 다음을 찾을 수 있습니다.
- 모든 미해결 문제 및 끌어오기 요청
- 사용자가 생성한 문제 및 끌어오기 요청
- 사용자에게 할당된 문제 및 끌어오기 요청
- 사용자가 [ **@mentioned**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) 문제 및 끌어오기 요청

{% data reusables.cli.filter-issues-and-pull-requests-tip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. **필터** 를 클릭하여 관심 있는 필터 유형을 선택합니다.
  ![필터 드롭다운 사용](/assets/images/help/issues/issues_filter_dropdown.png)

## 담당자별로 문제 및 끌어오기 요청 필터링

[다른 사용자에게 문제 또는 끌어오기 요청을 할당](/articles/assigning-issues-and-pull-requests-to-other-github-users)한 후에는 해당 작업을 수행하는 사람을 기준으로 항목을 찾을 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
3. 오른쪽 위 모서리에서 담당자 드롭다운 메뉴를 선택합니다.
4. 담당자 드롭다운 메뉴에는 리포지토리에 대한 쓰기 액세스 권한이 있는 모든 사용자가 나열됩니다. 보고 싶은 항목이 할당된 사람의 이름을 클릭하거나 할당되지 않은 문제를 보려면 **아무에게도 할당되지 않음** 을 클릭합니다.
![담당자 드롭다운 탭 사용](/assets/images/help/issues/issues_assignee_dropdown.png)

{% tip %}

필터 선택을 취소하려면 **현재 검색 쿼리, 필터 및 정렬 지우기** 를 클릭합니다.

{% endtip %}

## 레이블별로 문제 및 끌어오기 요청 필터링

[문제 또는 끌어오기 요청에 레이블을 적용](/articles/applying-labels-to-issues-and-pull-requests)한 후에는 해당 레이블을 기반으로 항목을 찾을 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. 레이블 목록에서 레이블을 클릭하여 적용된 문제 및 끌어오기 요청을 확인합니다.
  ![리포지토리의 레이블 목록](/assets/images/help/issues/labels-page.png)

{% tip %}

**팁:** 필터 선택을 취소하려면 **현재 검색 쿼리, 필터 및 정렬 지우기** 를 클릭합니다.

{% endtip %}

## 검토 상태별로 끌어오기 요청 필터링

필터를 사용하여 검토 상태별로 끌어오기 요청을 나열하고 검토한 끌어오기 요청 또는 다른 사용자가 검토하도록 요청한 끌어오기 요청을 찾을 수 있습니다.

리포지토리의 끌어오기 요청 목록을 필터링하여 다음을 찾을 수 있습니다.
- 아직 [검토되지](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) 않은 끌어오기 요청
- 병합되기 전에 [검토가 필요한](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) 끌어오기 요청
- 검토자가 승인한 끌어오기 요청
- 검토자가 변경을 요청한 끌어오기 요청
- 검토한 끌어오기 요청
- 누군가가 직접 검토하도록 요청한 끌어오기 요청
- [다른 사용자가 사용자 또는 사용자가 구성원인 팀에 검토를 요청한](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) 끌어오기 요청

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-pr %}
3. 오른쪽 위 모서리에서 검토 드롭다운 메뉴를 선택합니다.
  ![끌어오기 요청 목록 위의 필터 메뉴에 있는 검토 드롭다운 메뉴](/assets/images/help/pull_requests/reviews-filter-dropdown.png)
4. 필터를 선택하여 해당 필터의 상태를 가진 모든 끌어오기 요청을 찾습니다.
  ![검토 드롭다운 메뉴의 필터 목록](/assets/images/help/pull_requests/pr-review-filters.png)

## 검색을 사용하여 문제 및 끌어오기 요청 필터링

고급 필터를 사용하여 특정 기준을 충족하는 문제 및 끌어오기 요청을 검색할 수 있습니다.

### 문제 및 끌어오기 요청 검색

{% webui %}

문제 및 끌어오기 요청 검색 창을 사용하면 사용자 지정 필터를 정의하고 다양한 기준으로 정렬할 수 있습니다. 각 리포지토리의 **문제** 및 **끌어오기 요청** 탭과 [문제 및 끌어오기 요청 대시보드](/articles/viewing-all-of-your-issues-and-pull-requests)에서 검색 창을 찾을 수 있습니다.

![문제 및 끌어오기 요청 검색 창](/assets/images/help/issues/issues_search_bar.png)

{% tip %}

**팁:** {% data reusables.search.search_issues_and_pull_requests_shortcut %}

{% endtip %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %}를 사용하여 문제 또는 끌어오기 요청을 검색할 수 있습니다. `--search` 인수 및 검색 쿼리와 함께 `gh issue list` 또는 `gh pr list` 하위 명령을 사용합니다.

예를 들어, 담당자가 없고 레이블이 `help wanted` 또는 `bug`인 모든 문제를 만든 날짜 순서대로 나열할 수 있습니다.

```shell
gh issue list --search 'no:assignee label:"help wanted",bug sort:created-asc'
```

`octo-org/octo-team` 팀을 언급하는 모든 끌어오기 요청을 나열할 수도 있습니다.

```shell
gh pr list --search "team:octo-org/octo-team"
```

{% endcli %}

### 검색어 정보

문제 및 끌어오기 요청 검색어를 사용하면 다음을 수행할 수 있습니다.

- 작성자별로 문제 및 끌어오기 요청 필터링: `state:open type:issue author:octocat`
- 특정 사용자를 포함하지만 반드시 [ **@mention**](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)할 필요는 없는 문제 및 끌어오기 요청 필터링: `state:open type:issue involves:octocat`
- 담당자별로 문제 및 끌어오기 요청 필터링: `state:open type:issue assignee:octocat`
- 레이블별로 문제 및 끌어오기 요청 필터링: `state:open type:issue label:"bug"`
- 검색어 앞에 `-`을 사용하여 검색어 필터링: `state:open type:issue -author:octocat`

{% tip %}

**팁:** 논리적 OR 또는 논리적 AND를 사용하여 레이블별로 문제 및 끌어오기 요청을 필터링할 수 있습니다.
- 논리적 OR을 사용하여 문제를 필터링하려면 쉼표 구문(예: `label:"bug","wip"`)을 사용합니다.
- 논리적 AND를 사용하여 문제를 필터링하려면 별도의 레이블 필터(예: `label:"bug" label:"wip"`)를 사용합니다.

{% endtip %}

문제의 경우 검색을 사용하여 다음을 수행할 수도 있습니다.

- 닫는 참조로 끌어오기 요청에 연결된 문제 필터링: `linked:pr`{% ifversion issue-close-reasons %}
- 닫힌 이유별로 문제 필터링: `is:closed reason:complete` 또는 `is:closed reason:"not planned"`{% endif %}

끌어오기 요청의 경우 검색을 사용하여 다음을 수행할 수도 있습니다.
- [초안](/articles/about-pull-requests#draft-pull-requests) 끌어오기 요청 필터링: `is:draft`
- 아직 [검토되지](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) 않은 끌어오기 요청 필터링: `state:open type:pr review:none`
- 병합되기 전에 [검토가 필요한](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) 끌어오기 요청 필터링: `state:open type:pr review:required`
- 검토자가 승인한 끌어오기 요청 필터링: `state:open type:pr review:approved`
- 검토자가 변경을 요청한 끌어오기 요청 필터링: `state:open type:pr review:changes_requested`
- [검토자](/articles/about-pull-request-reviews/)별로 끌어오기 요청 필터링: `state:open type:pr reviewed-by:octocat`
- [검토를 요청한](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) 특정 사용자의 끌어오기 요청을 필터링합니다.`state:open type:pr review-requested:octocat`
- 누군가가 직접 검토하도록 요청한 끌어오기 요청을 필터링합니다. `state:open type:pr user-review-requested:@me`
- 검토를 요청한 팀별로 끌어오기 요청 필터링: `state:open type:pr team-review-requested:github/docs`
- 끌어오기 요청이 닫을 수 있는 문제에 연결된 끌어오기 요청 필터링: `linked:issue`

## 문제 및 끌어오기 요청 정렬

필터를 정렬하여 특정 기간 동안 더 나은 정보를 제공할 수 있습니다.

필터링된 보기를 다음 기준으로 정렬할 수 있습니다.

* 가장 최근에 만든 문제 또는 끌어오기 요청
* 가장 오래전에 만든 문제 또는 끌어오기 요청
* 가장 많은 댓글이 달린 문제 또는 끌어오기 요청
* 가장 적은 댓글이 달린 문제 또는 끌어오기 요청
* 가장 최근에 업데이트된 문제 또는 끌어오기 요청
* 가장 오래전에 업데이트된 문제 또는 끌어오기 요청
* 문제 또는 끌어오기 요청에 대해 가장 많이 추가된 반응

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %}
1. 오른쪽 위 모서리에서 정렬 드롭다운 메뉴를 선택합니다.
  ![정렬 드롭다운 탭 사용](/assets/images/help/issues/issues_sort_dropdown.png)

정렬 선택을 취소하려면 **정렬** > **최신** 을 클릭합니다.

## 필터 공유

문제 및 끌어오기 요청을 필터링하거나 정렬하면 브라우저의 URL이 새 보기와 일치하도록 자동으로 업데이트됩니다.

문제가 발생하는 URL을 모든 사용자에게 보낼 수 있으며 사용자는 여러분이 보는 것과 동일한 필터 보기를 볼 수 있습니다.

예를 들어, Hubot에 할당된 문제를 필터링하고 가장 오래된 미해결 문제를 정렬하면 URL이 다음과 같이 업데이트됩니다.

```
/issues?q=state:open+type:issue+assignee:hubot+sort:created-asc
```

## 추가 참고 자료

- "[문제 및 끌어오기 요청 검색](/articles/searching-issues)"
