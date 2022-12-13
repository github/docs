---
title: 워크플로를 트리거하는 이벤트
intro: '{% data variables.product.product_name %}에 대한 특정 작업이 예약된 시간에 발생하거나 {% data variables.product.product_name %} 외부의 이벤트가 발생할 때 실행되도록 워크플로를 구성할 수 있습니다.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/events-that-trigger-workflows
  - /github/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows
  - /actions/reference/events-that-trigger-workflows
  - /actions/learn-github-actions/events-that-trigger-workflows
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Events that trigger workflows
ms.openlocfilehash: 0b98c948f4246257336f174498596f3d3115cb08
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148093603'
---
## 워크플로를 트리거하는 이벤트 정보

워크플로 트리거는 워크플로를 실행하게 하는 이벤트입니다. 워크플로 트리거를 사용하는 방법에 대한 자세한 내용은 “[워크플로 트리거”](/actions/using-workflows/triggering-a-workflow)를 참조하세요.

## 사용 가능한 이벤트

일부 이벤트에는 여러 작업 유형이 있습니다. 해당 이벤트의 경우 워크플로 실행을 트리거할 작업 유형을 지정할 수 있습니다. 각 작업 형식의 의미에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhook-events-and-payloads)”를 참조하세요. 모든 웹후크 이벤트가 워크플로를 트리거하는 것은 아닙니다.

{% ifversion fpt or ghec or ghes > 3.3 or ghae  %}
### `branch_protection_rule`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`branch_protection_rule`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule) | - `created`<br/>- `edited`<br/>- `deleted` | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#branch_protection_rule)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

워크플로 리포지토리의 분기 보호 규칙이 변경되면 워크플로를 실행합니다. 분기 보호 규칙에 대한 자세한 내용은 “[보호된 분기 정보](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)”를 참조하세요. 분기 보호 규칙 API에 대한 자세한 내용은 GraphQL API 설명서의 “[BranchProtectionRule](/graphql/reference/objects#branchprotectionrule)”을 참조하거나 REST API 설명서의 “[분기](/rest/reference/branches)”를 참조하세요.

예를 들어 분기 보호 규칙이 `created` 또는 `deleted` 상태인 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  branch_protection_rule:
    types: [created, deleted]
```

{% endif %}

### `check_run`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_run) | - `created`<br/>- `rerequested`<br/>- `completed`<br/>-`requested_action` | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_run)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

검사 실행과 관련된 작업이 발생할 때 워크플로를 실행합니다. 검사 실행은 검사 도구 모음의 일부인 개별 테스트입니다. 자세한 내용은 “[검사 API 시작](/rest/guides/getting-started-with-the-checks-api)”을 참조하세요. 검사 실행 API에 대한 자세한 내용은 GraphQL API 설명서의 “[CheckRun](/graphql/reference/objects#checkrun)”을 참조하거나 REST API 설명서의 “[검사](/rest/reference/checks#runs)”를 참조하세요.

예를 들어 검사 실행이 `rerequested` 또는 `completed`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  check_run:
    types: [rerequested, completed]
```

### `check_suite`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`check_suite`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#check_suite) | - `completed` | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#check_suite)”를 참조하세요. `started` 작업 유형만 지원되지만 작업 유형을 지정하면 나중에 더 많은 작업 형식이 추가될 경우 워크플로가 특정 상태로 유지됩니다. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**참고:** 재귀 워크플로를 방지하기 위해 {% data variables.product.prodname_actions %}에서 검사 도구 모음을 만든 경우 이 이벤트는 워크플로를 트리거하지 않습니다.

{% endnote %}

검사 도구 모음 작업이 발생할 때 워크플로를 실행합니다. 검사 도구 모음은 특정 커밋에 대해 생성된 검사 실행의 컬렉션입니다. 검사 도구 모음은 도구 모음에 있는 검사 실행의 상태와 결론을 요약합니다. 자세한 내용은 “[검사 API 시작](/rest/guides/getting-started-with-the-checks-api)”을 참조하세요. 검사 도구 모음 API에 대한 자세한 내용은 GraphQL API 설명서의 “[CheckSuite](/graphql/reference/objects#checksuite)”를 참조하거나 REST API 설명서의 “[검사](/rest/reference/checks#suites)”를 참조하세요.

예를 들어 검사 도구 모음이 `completed`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  check_suite:
    types: [completed]
```

### `create`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`create`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#create) | 해당 없음 | 만든 분기 또는 태그에 대한 마지막 커밋 | 만든 분기 또는 태그 |

{% note %}

**참고**: 한 번에 세 개 이상의 태그를 만들 때 이벤트가 생성되지 않습니다.

{% endnote %}

누군가가 워크플로의 리포지토리에서 Git 참조(Git 분기 또는 태그)를 만들 때 워크플로를 실행합니다. Git 참조를 만드는 API에 대한 자세한 내용은 GraphQL API 설명서의 “[createRef](/graphql/reference/mutations#createref)” 또는 REST API 설명서의 “[참조 만들기](/rest/reference/git#create-a-reference)”를 참조하세요.

예를 들어 `create` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  create
```

### `delete`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`delete`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#delete) | 해당 없음 | 기본 분기의 마지막 커밋 | 기본 분기 |

{% data reusables.actions.branch-requirement %}

{% note %}

**참고**: 한 번에 세 개 이상의 태그를 삭제할 때 이벤트가 생성되지 않습니다.

{% endnote %}

누군가가 워크플로의 리포지토리에서 Git 참조(Git 분기 또는 태그)를 삭제할 때 워크플로를 실행합니다. Git 참조를 삭제하는 API에 대한 자세한 내용은 GraphQL API 설명서의 “[deleteRef](/graphql/reference/mutations#deleteref)” 또는 REST API 설명서의 “[참조 삭제](/rest/reference/git#delete-a-reference)”를 참조하세요.

예를 들어 `delete` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  delete
```

### `deployment`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment) | 해당 없음 | 배포할 커밋 | 배포할 분기 또는 태그(커밋 SHA를 사용하여 만든 경우 비어 있음)|

누군가가 워크플로의 리포지토리에서 배포를 만들 때 워크플로를 실행합니다. 커밋 SHA를 사용하여 만든 배포에는 Git 참조가 없을 수 있습니다. 배포를 만드는 API에 대한 자세한 내용은 GraphQL API 설명서의 “[createDeployment](/graphql/reference/mutations#createdeployment)”를 참조하거나 REST API 설명서의 “[배포](/rest/reference/repos#deployments)”를 참조하세요.

예를 들어 `deployment` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  deployment
```

### `deployment_status`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`deployment_status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#deployment_status) | 해당 없음 | 배포할 커밋 | 배포할 분기 또는 태그(커밋할 경우 비어 있음)|

{% note %}

**참고:** 배포 상태의 상태가 `inactive`로 설정되면 워크플로 실행이 트리거되지 않습니다.

{% endnote %}

타사에서 배포 상태를 제공하는 경우 워크플로를 실행합니다. 커밋 SHA를 사용하여 만든 배포에는 Git 참조가 없을 수 있습니다. 배포 상태를 만드는 API에 대한 자세한 내용은 GraphQL API 설명서의 “[createDeploymentStatus](/graphql/reference/mutations#createdeploymentstatus)”를 참조하거나 REST API 설명서의 “[배포 상태 생성](/rest/reference/deployments#create-a-deployment-status)”을 참조하세요.

예를 들어 `deployment_status` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  deployment_status
```

{% ifversion discussions %}
### `discussion`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#discussion) | - `created`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `category_changed`<br/> - `answered`<br/> - `unanswered` | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

워크플로의 리포지토리에서 토론이 만들어지거나 수정될 때 워크플로를 실행합니다. 토론의 댓글과 관련된 작업의 경우 [`discussion_comment`](#discussion_comment) 이벤트를 사용합니다. 토론에 대한 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요. GraphQL API에 대한 자세한 내용은 “[토론](/graphql/reference/objects#discussion)”을 참조하세요.

예를 들어 토론이 `created`, `edited` 또는 `answered` 된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  discussion:
    types: [created, edited, answered]
```

### `discussion_comment`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`discussion_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#discussion_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#discussion_comment)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% data reusables.webhooks.discussions-webhooks-beta %}

워크플로의 리포지토리에서 토론의 댓글이 만들어지거나 수정될 때 워크플로를 실행합니다. 토론 댓글이 아닌 토론 관련 작업의 경우 [`discussion`](#discussion) 이벤트를 사용합니다. 토론에 대한 자세한 내용은 “[토론 정보](/discussions/collaborating-with-your-community-using-discussions/about-discussions)”를 참조하세요. GraphQL API에 대한 자세한 내용은 “[토론](/graphql/reference/objects#discussion)”을 참조하세요.

예를 들어 토론 댓글이 `created` 또는 `deleted`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  discussion_comment:
    types: [created, deleted]
```

{% endif %}

### `fork`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`fork`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#fork) | 해당 없음 | 기본 분기의 마지막 커밋 |  기본 분기 |

{% data reusables.actions.branch-requirement %}

누군가가 리포지토리를 포크할 때 워크플로를 실행합니다. REST API에 대한 자세한 내용은 “[포크 만들기](/rest/reference/repos#create-a-fork)”를 참조하세요.

예를 들어 `fork` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  fork
```

### `gollum`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`gollum`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#gollum) | 해당 없음 | 기본 분기의 마지막 커밋 |  기본 분기 |

{% data reusables.actions.branch-requirement %}

누군가가 Wiki 페이지를 만들거나 업데이트할 때 워크플로를 실행합니다. 자세한 내용은 “[wikis 정보](/communities/documenting-your-project-with-wikis/about-wikis)”를 참조하세요.

예를 들어 `gollum` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  gollum
```

### `issue_comment`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issue_comment`](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issue_comment)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

문제 또는 끌어오기 요청 설명이 생성, 편집 또는 삭제될 때 워크플로를 실행합니다. 문제 설명 API에 대한 자세한 내용은 GraphQL API 설명서의 “[IssueComment](/graphql/reference/objects#issuecomment)” 또는 REST API 설명서의 “[문제 설명](/developers/webhooks-and-events/webhook-events-and-payloads#issue_comment)”을 참조하세요.

예를 들어 문제 또는 끌어오기 요청 설명이 `created` 또는 `deleted`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  issue_comment:
    types: [created, deleted]
```

#### 문제 전용 또는 끌어오기 요청 전용 `issue_comment`

`issue_comment` 이벤트는 문제 및 끌어오기 요청 모두에 대한 설명에 대해 발생합니다. 조건에서 `github.event.issue.pull_request` 속성을 사용하여 트리거하는 개체가 문제인지 끌어오기 요청인지에 따라 다른 작업을 수행할 수 있습니다.

예를 들어 이 워크플로는 `issue_comment` 이벤트가 끌어오기 요청에서 시작된 경우에만 `pr_commented` 작업을 실행합니다. `issue_comment` 이벤트가 문제에서 시작된 경우에만 `issue_commented` 작업을 실행합니다.

```yaml
on: issue_comment

jobs:
  pr_commented:
    # This job only runs for pull request comments
    name: PR comment
    if: {% raw %}${{ github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on PR $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}

  issue_commented:
    # This job only runs for issue comments
    name: Issue comment
    if: {% raw %}${{ !github.event.issue.pull_request }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo A comment on issue $NUMBER
        env:
          NUMBER: {% raw %}${{ github.event.issue.number }}{% endraw %}
```

### `issues`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`issues`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#issues) | - `opened`<br/>- `edited`<br/>- `deleted`<br/>- `transferred`<br/>- `pinned`<br/>- `unpinned`<br/>- `closed`<br/>- `reopened`<br/>- `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `locked`<br/>- `unlocked`<br/>- `milestoned`<br/> - `demilestoned` | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#issues)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

워크플로의 리포지토리에서 문제가 만들어지거나 수정될 때 워크플로를 실행합니다. 문제의 설명과 관련된 작업의 경우 [`issue_comment`](#issue_comment) 이벤트를 사용합니다. 문제에 대한 자세한 내용은 “[문제 정보](/issues/tracking-your-work-with-issues/about-issues)”를 참조하세요. 문제 API에 대한 자세한 내용은 GraphQL API 설명서의 “[Issue](/graphql/reference/objects#issue)” 또는 REST API 설명서의 “[문제](/rest/reference/issues)”를 참조하세요.

예를 들어 문제가 `opened`, `edited` 또는 `milestoned`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  issues:
    types: [opened, edited, milestoned]
```

### `label`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`label`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#label) | - `created`<br/>- `edited`<br/>- `deleted`<br/> | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#label)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

워크플로의 리포지토리에서 레이블이 만들어지거나 수정될 때 워크플로를 실행합니다. 레이블에 대한 자세한 내용은 “[레이블 관리](/issues/using-labels-and-milestones-to-track-work/managing-labels)”를 참조하세요. 레이블 API에 대한 자세한 내용은 GraphQL API 설명서의 “[레이블](/graphql/reference/objects#label)” 또는 REST API 설명서의 “[레이블](/rest/reference/issues#labels)”을 참조하세요.

레이블이 문제, 끌어오기 요청 또는 토론에서 추가되거나 제거될 때 워크플로를 실행하려면 [`issues`](#issues), [`pull_request`](#pull_request), [`pull_request_target`](#pull_request_target) 또는 [`discussion`](#discussion) 이벤트 대신 `labeled` 또는 `unlabeled` 작업 유형을 사용합니다.

예를 들어 레이블이 `created` 또는 `deleted`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  label:
    types: [created, deleted]
```

{% ifversion fpt or ghec  %}

### `merge_group`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`merge_group`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#merge_group) | `checks_requested` | 병합 그룹의 SHA | 병합 그룹의 참조 |

{% data reusables.pull_requests.merge-queue-beta %}

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} `checks_requested` 작업 유형만 지원되지만 작업 유형을 지정하면 나중에 더 많은 작업 형식이 추가될 경우 워크플로가 특정 상태로 유지됩니다. 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#merge_group)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

끌어오기 요청이 병합 큐에 추가되면 워크플로를 실행합니다. 그러면 병합 그룹에 끌어오기 요청이 추가됩니다. 자세한 내용은 “[끌어오기 요청과 병합 큐 병합](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue)”을 참조하세요.

예를 들어 `checks_requested` 작업이 발생한 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  merge_group:
    types: [checks_requested]

```

{% endif %}
### `milestone`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`milestone`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#milestone) | - `created`<br/>- `closed`<br/>- `opened`<br/>- `edited`<br/>- `deleted`<br/> | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#milestone)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

워크플로의 리포지토리에서 마일스톤이 만들어지거나 수정될 때 워크플로를 실행합니다. 마일스톤에 대한 자세한 내용은 “[마일스톤 정보](/issues/using-labels-and-milestones-to-track-work/about-milestones)”를 참조하세요. 마일스톤 API에 대한 자세한 내용은 GraphQL API 설명서의 “[마일스톤](/graphql/reference/objects#milestone)”을 참조하거나 REST API 설명서의 “[마일스톤](/rest/reference/issues#milestones)”을 참조하세요.

마일스톤에 문제가 추가되거나 제거될 때 워크플로를 실행하려면 [`issues`](#issues) 이벤트 대신 `milestoned` 또는 `demilestoned` 작업 유형을 사용합니다.

예를 들어 마일스톤이 `opened` 또는 `deleted`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  milestone:
    types: [opened, deleted]
```

### `page_build`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`page_build`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#page_build) | 해당 없음 | 기본 분기의 마지막 커밋 | 해당 없음 |

{% data reusables.actions.branch-requirement %}

{% data variables.product.prodname_pages %}가 리포지토리에 대해 사용하도록 설정된 경우 누군가가 {% data variables.product.prodname_pages %}의 게시 원본인 분기로 푸시할 때 워크플로를 실행합니다. {% data variables.product.prodname_pages %} 게시 원본에 대한 자세한 내용은 “[GitHub Pages 사이트의 게시 원본 구성](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)”을 참조하세요. REST API에 대한 자세한 내용은 “[페이지](/rest/reference/repos#pages)”를 참조하세요.

예를 들어 `page_build` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  page_build
```

### `project`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project) | - `created`<br/>- `closed`<br/>- `reopened`<br/>- `edited`<br/>- `deleted`<br/> | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} `edited` 작업 유형은 프로젝트 보드의 열이나 카드가 아닌 프로젝트 보드가 편집될 때를 나타냅니다. 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**참고**: 이 이벤트는 조직이 소유하거나 사용자가 소유한 프로젝트 또는 다른 리포지토리가 소유한 프로젝트가 아닌 워크플로 리포지토리가 소유한 프로젝트에 대해서만 발생합니다.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**참고**: 이 이벤트는 {% data variables.product.prodname_projects_v1 %}에 대해서만 발생합니다.

{% endnote %} {% endif %}

프로젝트 보드를 만들거나 수정할 때 워크플로를 실행합니다. 프로젝트 보드의 카드 또는 열과 관련된 작업의 경우 [`project_card`](#project_card) 또는 [`project_column`](#project_column) 이벤트를 대신 사용합니다. 프로젝트 보드에 대한 자세한 내용은 “[프로젝트 보드 정보](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”를 참조하세요. 프로젝트 보드 API에 대한 자세한 내용은 GraphQL API 설명서의 “[프로젝트](/graphql/reference/objects#project)” 또는 REST API 설명서의 “[프로젝트](/rest/reference/projects)”를 참조하세요.

예를 들어 프로젝트가 `created` 또는 `deleted`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  project:
    types: [created, deleted]
```

### `project_card`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_card`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_card) | - `created`<br/>- `moved`<br/>- 문제로 `converted`됨<br/>- `edited`<br/>- `deleted` | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_card)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**참고**: 이 이벤트는 조직이 소유하거나 사용자가 소유한 프로젝트 또는 다른 리포지토리가 소유한 프로젝트가 아닌 워크플로 리포지토리가 소유한 프로젝트에 대해서만 발생합니다.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**참고**: 이 이벤트는 {% data variables.product.prodname_projects_v1 %}에 대해서만 발생합니다.

{% endnote %} {% endif %}

프로젝트 보드에 카드를 만들거나 수정할 때 워크플로를 실행합니다. 프로젝트 보드 또는 프로젝트 보드의 열과 관련된 작업의 경우 [`project`](#project) 또는 [`project_column`](#project_column) 이벤트를 대신 사용합니다. 프로젝트 보드에 대한 자세한 내용은 “[프로젝트 보드 정보](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”를 참조하세요. 프로젝트 보드 API에 대한 자세한 내용은 GraphQL API 설명서의 “[ProjectCard](/graphql/reference/objects#projectcard)” 또는 REST API 설명서의 “[프로젝트 카드](/rest/reference/projects#cards)”를 참조하세요.

예를 들어 프로젝트 카드가 `created` 또는 `deleted`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  project_card:
    types: [created, deleted]
```

### `project_column`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`project_column`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#project_column) | - `created`<br/>- `updated`<br/>- `moved`<br/>- `deleted` | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#project_column)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**참고**: 이 이벤트는 조직이 소유하거나 사용자가 소유한 프로젝트 또는 다른 리포지토리가 소유한 프로젝트가 아닌 워크플로 리포지토리가 소유한 프로젝트에 대해서만 발생합니다.

{% endnote %}

{% ifversion fpt or ghec %} {% note %}

**참고**: 이 이벤트는 {% data variables.product.prodname_projects_v1 %}에 대해서만 발생합니다.

{% endnote %} {% endif %}

프로젝트 보드에 열을 만들거나 수정할 때 워크플로를 실행합니다. 프로젝트 보드 또는 프로젝트 보드의 카드와 관련된 작업의 경우 [`project`](#project) 또는 [`project_card`](#project_card) 이벤트를 대신 사용합니다. 프로젝트 보드에 대한 자세한 내용은 “[프로젝트 보드 정보](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards)”를 참조하세요. 프로젝트 열 API에 대한 자세한 내용은 GraphQL API 설명서의 “[프로젝트 열](/graphql/reference/objects#projectcolumn)” 또는 REST API 설명서의 “[프로젝트 열](/rest/reference/projects#columns)”을 참조하세요.

예를 들어 프로젝트 열이 `created` 또는 `deleted`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  project_column:
    types: [created, deleted]
```

### `public`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`public`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#public) | 해당 없음 | 기본 분기의 마지막 커밋 |  기본 분기 |

{% data reusables.actions.branch-requirement %}

워크플로의 리포지토리가 프라이빗에서 퍼블릭으로 변경되면 워크플로를 실행합니다. REST API에 대한 자세한 내용은 “[리포지토리 편집](/rest/reference/repos#edit)”을 참조하세요.

예를 들어 `public` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  public
```

### `pull_request`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | `GITHUB_REF` 분기의 마지막 병합 커밋 | PR 병합 분기 `refs/pull/:prNumber/merge` |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request)”를 참조하세요. 기본적으로 워크플로는 `pull_request` 이벤트의 작업 유형이 `opened`, `synchronize` 또는 `reopened`인 경우에만 실행됩니다. 다양한 작업 유형별로 워크플로를 트리거하려면 `types` 키워드를 사용합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/articles/workflow-syntax-for-github-actions#onevent_nametypes)”을 참조하세요.

{% endnote %}

{% note %}

**참고:** 끌어오기 요청에 병합 충돌이 있는 경우 워크플로는 `pull_request` 작업에서 실행되지 않습니다. 병합 충돌을 먼저 해결해야 합니다.

반대로 끌어오기 요청에 병합 충돌이 있는 경우에도 `pull_request_target` 이벤트가 있는 워크플로가 실행됩니다. `pull_request_target` 트리거를 사용하기 전에 보안 위험을 알고 있어야 합니다. 자세한 내용은 [`pull_request_target`](#pull_request_target)를 참조하세요.

{% endnote %}

워크플로 리포지토리의 끌어오기 요청에 대한 작업이 발생할 때 워크플로를 실행합니다. 예를 들어 작업 형식이 지정되지 않은 경우 끌어오기 요청이 열리거나 다시 열리거나 끌어오기 요청의 헤드 분기가 업데이트될 때 워크플로가 실행됩니다. 끌어오기 요청 검토, 끌어오기 요청 검토 주석 또는 끌어오기 요청 주석과 관련된 작업의 경우 [`pull_request_review`](#pull_request_review), [`pull_request_review_comment`](#pull_request_review_comment), 또는 [`issue_comment`](#issue_comment) 이벤트를 대신 사용합니다. 끌어오기 요청 API에 대한 자세한 내용은 GraphQL API 설명서의 “[PullRequest](/graphql/reference/objects#pullrequest)” 또는 REST API 설명서의 “[끌어오기 요청](/rest/reference/pulls)”을 참조하세요.

이 이벤트의 `GITHUB_SHA`는 끌어오기 요청 병합 분기의 마지막 병합 커밋입니다. 끌어오기 요청 헤드 분기의 마지막 커밋에 대한 커밋 ID를 가져오려면 `github.event.pull_request.head.sha`를 대신 사용합니다.

예를 들어 끌어오기 요청을 열거나 다시 열 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  pull_request:
    types: [opened, reopened]
```

이벤트 컨텍스트를 사용하여 워크플로의 작업이 실행되는 시기를 추가로 제어할 수 있습니다. 예를 들어 이 워크플로는 끌어오기 요청에 대한 검토가 요청될 때 실행되지만 `specific_review_requested`에 의한 검토가 요청된 경우에만 `octo-team` 작업이 실행됩니다.

```yaml
on:
  pull_request:
    types: [review_requested]
jobs:
  specific_review_requested:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.requested_team.name == 'octo-team'}}{% endraw %}
    steps:
      - run: echo 'A review from octo-team was requested'
```

#### 끌어오기 요청의 헤드 또는 베이스 분기를 기반으로 워크플로 실행

`branches` 또는 `branches-ignore` 필터를 사용하여 특정 분기를 대상으로 하는 끌어오기 요청에서만 실행되도록 워크플로를 구성할 수 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)”을 참조하세요.

예를 들어 이 워크플로는 이름이 `releases/`로 시작하는 분기를 대상으로 하는 끌어오기 요청을 열 때 실행됩니다.

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**참고:** {% data reusables.actions.branch-paths-filter %} 예를 들어 다음 워크플로는 이름이 `.js`로 시작하는 분기에서 JavaScript(`releases/`) 파일 변경을 포함하는 끌어오기 요청을 여는 경우에만 실행됩니다.

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

(끌어오기 요청의 베이스 분기 이름이 아닌) 끌어오기 요청의 헤드 분기 이름에 따라 작업을 실행하려면 조건부에서 `github.head_ref` 컨텍스트를 사용합니다. 예를 들어 이 워크플로는 끌어오기 요청이 열릴 때마다 실행되지만 끌어오기 요청의 헤드가 이름이 `releases/`로 시작하는 분기인 경우에만 `run_if` 작업이 실행됩니다.

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### 끌어오기 요청에서 변경된 파일을 기반으로 워크플로 실행

끌어오기 요청이 특정 파일을 변경할 때 실행되도록 워크플로를 구성할 수도 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”을 참조하세요.

예를 들어 끌어오기 요청에 JavaScript 파일(`.js`) 변경 내용이 포함된 경우 이 워크플로가 실행됩니다.

```yaml
on:
  pull_request:
    paths:
      - '**.js'
```

{% note %}

**참고:** {% data reusables.actions.branch-paths-filter %} 예를 들어 다음 워크플로는 이름이 `.js`로 시작하는 분기에서 JavaScript(`releases/`) 파일 변경을 포함하는 끌어오기 요청을 여는 경우에만 실행됩니다.

```yaml
on:
  pull_request:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### 끌어오기 요청 병합 시 워크플로 실행

끌어오기 요청이 병합되면 끌어오기 요청이 자동으로 닫힙니다. 끌어오기 요청이 병합되는 경우 워크플로를 실행하려면 `merged` 이벤트 값을 확인하는 조건과 함께 `pull_request` `closed` 이벤트 형식을 사용합니다. 예를 들어 끌어오기 요청이 닫힐 때마다 다음 워크플로가 실행됩니다. 끌어오기 요청도 병합된 경우에만 `if_merged` 작업이 실행됩니다.

```yaml
on:
  pull_request:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_comment`(`issue_comment` 사용)

(끌어오기 요청의 diff가 아닌) 끌어오기 요청에 대한 주석이 생성, 편집 또는 삭제될 때 워크플로를 실행하려면 [`issue_comment`](#issue_comment) 이벤트를 사용합니다. 끌어오기 요청 검토 또는 끌어오기 요청 검토 주석과 관련된 활동의 경우 [`pull_request_review`](#pull_request_review) 또는 [`pull_request_review_comment`](#pull_request_review_comment) 이벤트를 대신 사용합니다.

### `pull_request_review`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review) | - `submitted`<br/>- `edited`<br/>- `dismissed` | `GITHUB_REF` 분기의 마지막 병합 커밋 | PR 병합 분기 `refs/pull/:prNumber/merge` |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

끌어오기 요청 검토가 제출되거나 편집되거나 해제될 때 워크플로를 실행합니다. 끌어오기 요청 검토는 본문 주석 및 상태 외에도 끌어오기 요청 검토 주석 그룹입니다. 끌어오기 요청 검토 주석 또는 끌어오기 요청 주석과 관련된 활동의 경우 [`pull_request_review_comment`](#pull_request_review_comment) 또는 [`issue_comment`](#issue_comment) 이벤트를 대신 사용합니다. 끌어오기 요청 검토 API에 대한 자세한 내용은 GraphQL API 설명서의 “[PullRequestReview](/graphql/reference/objects#pullrequest)” 또는 REST API 설명서의 “[끌어오기 요청 검토](/rest/reference/pulls#reviews)”를 참조하세요.

예를 들어 끌어오기 요청 검토가 `edited` 또는 `dismissed`될 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  pull_request_review:
    types: [edited, dismissed]
```

#### 끌어오기 요청이 승인될 때 워크플로 실행

끌어오기 요청이 승인되었을 때 워크플로를 실행하려면 `submitted` 이벤트 유형으로 워크플로를 `pull_request_review` 트리거한 다음 `github.event.review.state` 속성으로 검토 상태를 확인할 수 있습니다. 예를 들어 이 워크플로는 끌어오기 요청 검토가 제출될 때마다 실행되지만 제출된 검토가 승인 검토인 경우에만 `approved` 작업이 실행됩니다.

```yaml
on:
  pull_request_review:
    types: [submitted]

jobs:
  approved:
    if: github.event.review.state == 'approved'
    runs-on: ubuntu-latest
    steps:
      - run: echo "This PR was approved"
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_review_comment`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request_review_comment`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request_review_comment) | - `created`<br/>- `edited`<br/>- `deleted`| `GITHUB_REF` 분기의 마지막 병합 커밋 | PR 병합 분기 `refs/pull/:prNumber/merge` |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_review_comment)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

끌어오기 요청 검토 주석이 수정되면 워크플로를 실행합니다. 끌어오기 요청 검토 주석은 끌어오기 요청의 diff에 대한 주석입니다. 끌어오기 요청 검토 또는 끌어오기 요청 주석과 관련된 활동의 경우 [`pull_request_review`](#pull_request_review) 또는 [`issue_comment`](#issue_comment) 이벤트를 대신 사용합니다. 끌어오기 요청 검토 주석 API에 대한 자세한 내용은 GraphQL API 설명서의 “[PullRequestReviewComment](/graphql/reference/objects#pullrequestreviewcomment)” 또는 REST API 설명서의 “[검토 주석](/rest/reference/pulls#comments)”을 참조하세요.

예를 들어 끌어오기 요청 검토 주석이 `created` 또는 `deleted`될 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  pull_request_review_comment:
    types: [created, deleted]
```

{% data reusables.developer-site.pull_request_forked_repos_link %}

### `pull_request_target`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`pull_request`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#pull_request) | - `assigned`<br/>- `unassigned`<br/>- `labeled`<br/>- `unlabeled`<br/>- `opened`<br/>- `edited`<br/>- `closed`<br/>- `reopened`<br/>- `synchronize`<br/>- `converted_to_draft`<br/>- `ready_for_review`<br/>- `locked`<br/>- `unlocked` <br/>- `review_requested` <br/>- `review_request_removed` <br/>- `auto_merge_enabled` <br/>- `auto_merge_disabled` | PR 베이스 분기의 마지막 커밋 | PR 베이스 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request_target)”를 참조하세요. 기본적으로 워크플로는 `pull_request_target` 이벤트의 작업 유형이 `opened`, `synchronize` 또는 `reopened`인 경우에만 실행됩니다. 다양한 작업 유형별로 워크플로를 트리거하려면 `types` 키워드를 사용합니다. 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/articles/workflow-syntax-for-github-actions#onevent_nametypes)”을 참조하세요.

{% endnote %}

워크플로 리포지토리의 끌어오기 요청에 대한 작업이 발생할 때 워크플로를 실행합니다. 예를 들어 작업 형식이 지정되지 않은 경우 끌어오기 요청이 열리거나 다시 열리거나 끌어오기 요청의 헤드 분기가 업데이트될 때 워크플로가 실행됩니다.

이 이벤트는 `pull_request` 이벤트와 마찬가지로 병합 커밋의 컨텍스트가 아닌 끌어오기 요청의 베이스 컨텍스트에서 실행됩니다. 이렇게 하면 리포지토리를 변경하거나 워크플로에서 사용하는 비밀을 도용할 수 있는 끌어오기 요청의 헤드에서 안전하지 않은 코드가 실행되지 않습니다. 이 이벤트를 사용하면 워크플로에서 포크의 끌어오기 요청에 대한 레이블 또는 주석과 같은 작업을 수행할 수 있습니다. 끌어오기 요청에서 코드를 빌드하거나 실행해야 하는 경우 이 이벤트를 사용하지 마세요.

리포지토리 보안을 보장하기 위해 특정 패턴(예: SHA와 유사한 패턴)과 일치하는 이름을 가진 분기가 `pull_request_target` 이벤트 발생 시 워크플로를 트리거하지 않을 수 있습니다.

{% warning %}

**경고:** `pull_request_target` 이벤트에 의해 트리거되는 워크플로의 경우 `permissions` 키를 지정하지 않으면 `GITHUB_TOKEN`에 읽기/쓰기 리포지토리 권한이 부여되고 워크플로는 포크에서 트리거되는 경우에도 비밀에 액세스할 수 있습니다. 워크플로는 끌어오기 요청의 베이스 컨텍스트에서 실행되지만 이 이벤트를 사용하여 끌어오기 요청에서 신뢰할 수 없는 코드를 체크 아웃하거나 빌드하거나 실행하지 않아야 합니다. 또한 모든 캐시는 베이스 분기와 동일한 범위를 공유합니다. 캐시 중독을 방지하기 위해 캐시 내용이 변경되었을 가능성이 있는 경우 캐시를 저장하면 안 됩니다. 자세한 내용은 GitHub Security Lab 웹 사이트에서 “[GitHub Actions 및 워크플로 보안 유지: pwn 요청 방지](https://securitylab.github.com/research/github-actions-preventing-pwn-requests)”를 참조하세요.

{% endwarning %}

예를 들어 끌어오기 요청이 `assigned`, `opened`, `synchronize`, 또는 `reopened`될 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  pull_request_target:
    types: [assigned, opened, synchronize, reopened]
```

#### 끌어오기 요청의 헤드 또는 베이스 분기를 기반으로 워크플로 실행

`branches` 또는 `branches-ignore` 필터를 사용하여 특정 분기를 대상으로 하는 끌어오기 요청에서만 실행되도록 워크플로를 구성할 수 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)”을 참조하세요.

예를 들어 이 워크플로는 이름이 `releases/`로 시작하는 분기를 대상으로 하는 끌어오기 요청을 열 때 실행됩니다.

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
```

{% note %}

**참고:** {% data reusables.actions.branch-paths-filter %} 예를 들어 다음 워크플로는 이름이 `.js`로 시작하는 분기에서 JavaScript(`releases/`) 파일 변경을 포함하는 끌어오기 요청을 여는 경우에만 실행됩니다.

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

(끌어오기 요청의 베이스 분기 이름이 아닌) 끌어오기 요청의 헤드 분기 이름에 따라 작업을 실행하려면 조건부에서 `github.head_ref` 컨텍스트를 사용합니다. 예를 들어 이 워크플로는 끌어오기 요청이 열릴 때마다 실행되지만 끌어오기 요청의 헤드가 이름이 `releases/`로 시작하는 분기인 경우에만 `run_if` 작업이 실행됩니다.

```yaml
on:
  pull_request:
    types:
      - opened
jobs:
  run_if:
    if:  startsWith(github.head_ref, 'releases/')
    runs-on: ubuntu-latest
    steps:
      - run: echo "The head of this PR starts with 'releases/'"
```

#### 끌어오기 요청에서 변경된 파일을 기반으로 워크플로 실행

끌어오기 요청이 특정 파일을 변경할 때 실행되도록 `paths` 또는 `paths-ignore` 필터를 사용하여 워크플로를 구성할 수도 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”을 참조하세요.

예를 들어 끌어오기 요청에 JavaScript 파일(`.js`) 변경 내용이 포함된 경우 이 워크플로가 실행됩니다.

```yaml
on:
  pull_request_target:
    paths:
      - '**.js'
```

{% note %}

**참고:** {% data reusables.actions.branch-paths-filter %} 예를 들어 다음 워크플로는 이름이 `.js`로 시작하는 분기에서 JavaScript(`releases/`) 파일 변경을 포함하는 끌어오기 요청을 여는 경우에만 실행됩니다.

```yaml
on:
  pull_request_target:
    types:
      - opened
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### 끌어오기 요청 병합 시 워크플로 실행

끌어오기 요청이 병합되면 끌어오기 요청이 자동으로 닫힙니다. 끌어오기 요청이 병합되는 경우 워크플로를 실행하려면 `merged` 이벤트 값을 확인하는 조건과 함께 `pull_request_target` `closed` 이벤트 형식을 사용합니다. 예를 들어 끌어오기 요청이 닫힐 때마다 다음 워크플로가 실행됩니다. 끌어오기 요청도 병합된 경우에만 `if_merged` 작업이 실행됩니다.

```yaml
on:
  pull_request_target:
    types:
      - closed

jobs:
  if_merged:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-latest
    steps:
    - run: |
        echo The PR was merged
```

### `push`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`push`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#push) | 해당 없음 | 분기를 삭제하면 워크플로의 SHA 실행(및 관련 참조)이 리포지토리의 기본 분기로 되돌아갑니다. | 업데이트된 참조 |

{% note %}

**참고:** GitHub Actions에서 사용할 수 있는 웹후크 페이로드는 `commit` 개체의 `added`, `removed` 및 `modified` 특성을 포함하지 않습니다. API를 사용하여 전체 커밋 개체를 검색할 수 있습니다. 자세한 내용은 GraphQL API 설명서의 “[커밋](/graphql/reference/objects#commit)” 또는 REST API 설명서의 “[커밋 가져오기](/rest/reference/commits#get-a-commit)”를 참조하세요.

{% endnote %}

{% note %}

**참고**: 한 번에 세 개 이상의 태그를 푸시할 때 이벤트가 생성되지 않습니다.

{% endnote %}

커밋 또는 태그를 푸시할 때 워크플로를 실행합니다.

예를 들어 `push` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  push
```

{% note %}

**참고**: `push` webhook 이벤트가 워크플로 실행을 트리거할 때 작업 UI의 “푸시한 사람” 필드에는 작성자나 커밋한 사람이 아닌 푸셔의 계정이 표시됩니다. 그러나 배포 키와 함께 SSH 인증을 사용하여 변경 내용이 리포지토리로 푸시되는 경우 “푸시한 사람” 필드는 배포 키를 리포지토리에 추가할 때 확인한 리포지토리 관리자가 됩니다.

{% endnote %}

#### 특정 분기에 푸시가 발생하는 경우에만 워크플로 실행

`branches` 또는 `branches-ignore` 필터를 사용하여 특정 분기가 푸시될 때만 실행되도록 워크플로를 구성할 수 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)”을 참조하세요.

예를 들어 이 워크플로는 다른 사용자가 `main` 분기로 푸시하거나 `releases/`로 시작하는 분기로 푸시할 때 실행됩니다.

```yaml
on:
  push:
    branches:
      - 'main'
      - 'releases/**'
```

{% note %}

**참고:** {% data reusables.actions.branch-paths-filter %} 예를 들어 다음 워크플로는 이름이 `.js`로 시작하는 분기에 JavaScript(`releases/`) 파일 변경을 포함하는 끌어오기 푸시를 만드는 경우에만 실행됩니다.

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

#### 특정 태그의 푸시가 발생하는 경우에만 워크플로 실행

`tags` 또는 `tags-ignore` 필터를 사용하여 특정 태그가 푸시될 때만 실행되도록 워크플로를 구성할 수 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushbranchestagsbranches-ignoretags-ignore)”을 참조하세요.

예를 들어 이 워크플로는 `v1.`으로 시작하는 태그를 푸시할 때 실행됩니다.

```yaml
on:
  push:
    tags:
      - v1.**
```

#### 푸시가 특정 파일에 영향을 미치는 경우에만 워크플로 실행

`paths` 또는 `paths-ignore` 필터를 사용하여 특정 파일에 푸시가 발생할 때 실행되도록 워크플로를 구성할 수 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)”을 참조하세요.

예를 들어 이 워크플로는 JavaScript 파일(`.js`)에 변경 내용을 푸시할 때 실행됩니다.

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**참고:** {% data reusables.actions.branch-paths-filter %} 예를 들어 다음 워크플로는 이름이 `.js`로 시작하는 분기에 JavaScript(`releases/`) 파일 변경을 포함하는 끌어오기 푸시를 만드는 경우에만 실행됩니다.

```yaml
on:
  push:
    branches:
      - 'releases/**'
    paths:
      - '**.js'
```

{% endnote %}

### `registry_package`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`registry_package`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#package) | - `published`<br/>- `updated` | 게시된 패키지 커밋 | 게시된 패키지의 분기 또는 태그 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#registry_package)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

리포지토리에서 {% data variables.product.prodname_registry %}에 관련된 작업이 발생하면 워크플로를 실행합니다. 자세한 내용은 “[{% data variables.product.prodname_registry %} 설명서](/packages)”를 참조하세요.

예를 들어 새 패키지 버전이 `published`인 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  registry_package:
    types: [published]
```

### `release`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`release`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#release) | - `published` <br/>- `unpublished` <br/>- `created` <br/>- `edited` <br/>- `deleted` <br/>- `prereleased`<br/> - `released` | 태그가 지정된 릴리스의 마지막 커밋 | 릴리스의 태그 참조 `refs/tags/<tag_name>` |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#release)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% note %}

**참고:** 워크플로는 초안 릴리스의 `created`, `edited` 또는 `deleted` 작업 유형에 대해 트리거되지 않습니다. {% data variables.product.product_name %} 브라우저 UI를 통해 릴리스를 만들면 릴리스가 자동으로 초안으로 저장될 수 있습니다.

{% endnote %}

{% note %}

**참고:** `prereleased` 유형은 초안 릴리스에서 게시된 시험판에 대해 트리거되지 않지만 `published` 유형이 트리거됩니다. 안정적인 사전 릴리스가 게시될 때 워크플로를 실행하려면 `released`와 `prereleased` 대신 `published`를 구독합니다.

{% endnote %}

리포지토리에서 릴리스 작업이 발생하면 워크플로를 실행합니다. 릴리스 API에 대한 자세한 내용은 GraphQL API 설명서의 “[릴리스](/graphql/reference/objects#release)” 또는 REST API 설명서의 “[릴리스](/rest/reference/releases)”를 참조하세요.

예를 들어 릴리스가 `published`된 경우 워크플로를 실행할 수 있습니다.

```yaml
on:
  release:
    types: [published]
```

### `repository_dispatch`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [repository_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch) | 사용자 지정 | 기본 분기의 마지막 커밋 | 기본 분기 |

{% data reusables.actions.branch-requirement %}

{% data variables.product.product_name %} 외부에서 발생하는 작업에 대한 워크플로를 트리거하려는 경우 {% data variables.product.product_name %} API를 사용하여 [`repository_dispatch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#repository_dispatch)라고 불리는 웹후크 이벤트를 트리거할 수 있습니다. 자세한 내용은 “[리포지토리 디스패치 이벤트 만들기](/rest/reference/repos#create-a-repository-dispatch-event)”를 참조하세요.

`repository_dispatch` 이벤트 만들기를 요청할 때 작업 유형을 설명하는 `event_type`을 지정해야 합니다. 기본적으로 모든 `repository_dispatch` 작업 유형은 워크플로를 실행하도록 트리거합니다. `types` 키워드를 사용하여 `event_type` 웹후크 페이로드에서 특정 `repository_dispatch` 값을 보낼 때 워크플로를 실행하도록 제한할 수 있습니다.

```yaml
on:
  repository_dispatch:
    types: [on-demand-test]
```

{% note %}

**참고:** `event_type` 값의 최대 길이는 100자입니다.

{% endnote %}

`client_payload` 매개 변수를 통해 보내는 모든 데이터는 워크플로의 `github.event` 컨텍스트에서 사용할 수 있습니다. 예를 들어 리포지토리 디스패치 이벤트를 만들 때 다음과 같은 요청 본문을 보내는 경우

```json
{
  "event_type": "test_result",
  "client_payload": {
    "passed": false,
    "message": "Error: timeout"
  }
}
```

다음과 같은 워크플로의 페이로드에 액세스할 수 있습니다.

```yaml
on:
  repository_dispatch:
    types: [test_result]

jobs:
  run_if_failure:
    if: {% raw %}${{ !github.event.client_payload.passed }}{% endraw %}
    runs-on: ubuntu-latest
    steps:
      - env:
          MESSAGE: {% raw %}${{ github.event.client_payload.message }}{% endraw %}
        run: echo $MESSAGE
```

### `schedule`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| 해당 없음 | 해당 없음 | 기본 분기의 마지막 커밋 | 기본 분기 | 예약된 워크플로가 실행되도록 설정된 경우 예약된 워크플로는 [POSIX cron 구문](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)을 사용합니다. 자세한 내용은 “[이벤트를 사용하여 워크플로 트리거](/articles/configuring-a-workflow/#triggering-a-workflow-with-events)”를 참조하세요. |

{% data reusables.actions.schedule-delay %}

`schedule` 이벤트를 사용하면 예약된 시간에 워크플로를 트리거할 수 있습니다.

{% data reusables.repositories.actions-scheduled-workflow-example %}

Cron 구문에는 공백으로 구분된 5개의 필드가 있으며 각 필드는 시간 단위를 나타냅니다.

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12 or JAN-DEC)
│ │ │ │ ┌───────────── day of the week (0 - 6 or SUN-SAT)
│ │ │ │ │
│ │ │ │ │
│ │ │ │ │
* * * * *
```

5개 필드 모두에서 다음과 같은 연산자를 사용할 수 있습니다.

| 연산자 | 설명 | 예제 |
| -------- | ----------- | ------- |
| * | 어떤 값 | `15 * * * *`의 경우 매일 매시 15분마다 실행됩니다. |
| , | 값 목록 구분 기호 | `2,10 4,5 * * *`의 경우 매일 4번째 및 5번째 시간의 2분과 10분에 실행됩니다. |
| - | 값 범위 | `30 4-6 * * *`의 경우 4번째, 5번째 및 6번째 시간의 30분에 실행됩니다. |
| / | 단계 값 | `20/15 * * * *`의 경우 20~59분 중 15분마다(20, 35 및 50분) 실행됩니다. |

{% note %}

**참고:** {% data variables.product.prodname_actions %}는 비표준 구문 `@yearly`, `@monthly`, `@weekly`, `@daily`, `@hourly` 및 `@reboot`를 지원하지 않습니다.

{% endnote %}

[crontab guru](https://crontab.guru/)를 사용하여 cron 구문을 생성하고 실행 시간을 확인할 수 있습니다. 시작하는 데 도움이 되는 [crontab guru 예제](https://crontab.guru/examples.html) 목록도 있습니다.

예약된 워크플로에 대한 알림은 워크플로 파일에서 cron 구문을 마지막으로 수정한 사용자에게 전송됩니다. 자세한 내용은 “[워크플로 실행에 대한 알림](/actions/monitoring-and-troubleshooting-workflows/notifications-for-workflow-runs)”을 참조하세요.

### `status`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`status`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#status) | 해당 없음 | 기본 분기의 마지막 커밋 | 해당 없음 |

{% data reusables.actions.branch-requirement %}

Git 커밋의 상태가 변경되면 워크플로를 실행합니다. 예를 들어 커밋을 `error`, `failure`, `pending` 또는 `success`로 표시할 수 있습니다. 상태 변경에 대한 자세한 정보를 제공하려는 경우 [`check_run`](#check_run) 이벤트를 사용할 수 있습니다. 커밋 상태 API에 대한 자세한 내용은 GraphQL API 설명서의 “[상태](/graphql/reference/objects#status)” 또는 REST API 설명서의 “[상태](/rest/reference/commits#commit-statuses)”를 참조하세요.

예를 들어 `status` 이벤트가 발생할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  status
```

새 커밋 상태에 따라 워크플로에서 작업을 실행하려는 경우 `github.event.state` 컨텍스트를 사용할 수 있습니다. 예를 들어 다음 워크플로는 커밋 상태가 변경되면 트리거되지만 새 커밋 상태가 `error` 또는 `failure`인 경우에만 `if_error_or_failure` 작업이 실행됩니다.

```yaml
on:
  status
jobs:
  if_error_or_failure:
    runs-on: ubuntu-latest
    if: >-
      github.event.state == 'error' ||
      github.event.state == 'failure'
    steps:
      - env:
          DESCRIPTION: {% raw %}${{ github.event.description }}{% endraw %}
        run: |
          echo The status is error or failed: $DESCRIPTION
```

### `watch`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`watch`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#watch) | - `started` | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} `started` 작업 유형만 지원되지만 작업 유형을 지정하면 나중에 더 많은 작업 형식이 추가될 경우 워크플로가 특정 상태로 유지됩니다. 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#watch)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

워크플로의 리포지토리가 별표로 표시되면 워크플로를 실행합니다. 끌어오기 요청 API에 대한 자세한 내용은 GraphQL API 설명서의 “[addStar](/graphql/reference/mutations#addstar)” 또는 REST API 설명서의 “[별표로 표시](/rest/reference/activity#starring)”를 참조하세요.

예를 들어 누군가가 조사식 이벤트의 `started` 작업 유형인 리포지토리에 별을 표시할 때 워크플로를 실행할 수 있습니다.

```yaml
on:
  watch:
    types: [started]
```

{% ifversion fpt 또는 ghes > 3.3 또는 ghae > 3.3 또는 ghec %}

### `workflow_call`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| 호출자 워크플로와 동일 | 해당 없음 | 호출자 워크플로와 동일 | 호출자 워크플로와 동일 |

`workflow_call`은 다른 워크플로에서 워크플로를 호출할 수 있음을 나타내는 데 사용됩니다. 워크플로가 `workflow_call` 이벤트로 트리거되면 호출된 워크플로의 이벤트 페이로드는 호출 워크플로의 이벤트 페이로드와 동일합니다. 자세한 내용은 “[워크플로 재사용](/actions/learn-github-actions/reusing-workflows)”을 참조하세요.

아래 예제에서는 워크플로가 다른 워크플로에서 호출된 경우에만 실행됩니다.

```yaml
on: workflow_call
```

{% endif %}

### `workflow_dispatch`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| ------------------ | ------------ | ------------ | ------------------|
| [workflow_dispatch](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_dispatch) | 해당 없음 | 분기 또는 태그의 `GITHUB_REF` 마지막 커밋 | 디스패치를 받은 분기 또는 태그 |

워크플로를 수동으로 트리거하려면 `workflow_dispatch` 이벤트를 사용합니다. {% data variables.product.product_name %} API, {% data variables.product.prodname_cli %} 또는 {% data variables.product.product_name %} 브라우저 인터페이스를 사용하여 워크플로 실행을 수동으로 트리거할 수 있습니다. 자세한 내용은 “[워크플로 수동 실행](/actions/managing-workflow-runs/manually-running-a-workflow)”을 참조하세요.

```yaml
on: workflow_dispatch
```

#### 입력 제공

워크플로에서 직접 이벤트에 대한 사용자 지정 정의 입력 속성, 기본 입력 값 및 필수 입력을 구성할 수 있습니다. 이벤트를 트리거할 때 `ref` 및 모든 `inputs`를 제공할 수 있습니다. 워크플로가 실행되면 {% ifversion actions-unified-inputs %}`inputs`{% else %}`github.event.inputs`{% endif %} 컨텍스트의 입력 값에 액세스할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts)”를 참조하세요.

{% data reusables.actions.inputs-vs-github-event-inputs %}

{% ifversion fpt 또는 ghec 또는 ghes > 3.3 또는 ghae > 3.3 %} 이 예제에서는 , 및 `environment`.라는 `logLevel``tags`입력을 정의합니다. 워크플로를 실행할 때 입력에 대한 값을 워크플로에 전달합니다. 그런 다음, 이 워크플로는 {% ifversion actions-unified-inputs %}`inputs.logLevel`, `inputs.tags`, and  `inputs.environment`{% else %}`github.event.inputs.logLevel`, `github.event.inputs.tags` 및 `github.event.inputs.environment`{% endif %} 컨텍스트 속성을 사용하여 값을 로그에 출력합니다.

```yaml
on:
  workflow_dispatch:
    inputs:
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning'
        type: choice
        options:
        - info
        - warning
        - debug
      tags:
        description: 'Test scenario tags'
        required: false
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true

jobs:
  log-the-inputs:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo "Log level: $LEVEL"
          echo "Tags: $TAGS"
          echo "Environment: $ENVIRONMENT"
        env:
          LEVEL: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.logLevel }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.logLevel }}{% endraw %}{% endif %}
          TAGS: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.tags }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.tags }}{% endraw %}{% endif %}
          ENVIRONMENT: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.environment }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.environment }}{% endraw %}{% endif %}
```

브라우저에서 이 워크플로를 실행하는 경우 워크플로가 실행되기 전에 필수 입력에 대한 값을 수동으로 입력해야 합니다.

![워크플로 입력에 입력](/assets/images/help/images/workflow-dispatch-inputs.png)

스크립트에서 워크플로를 실행하거나 {% data variables.product.prodname_cli %}를 사용하여 입력을 전달할 수도 있습니다. 예를 들면 다음과 같습니다.

```
gh workflow run run-tests.yml -f logLevel=warning -f tags=false -f environment=staging
```

자세한 내용은 “[워크플로 수동 실행](/actions/managing-workflow-runs/manually-running-a-workflow)”의 {% data variables.product.prodname_cli %} 정보를 참조하세요.

{% else %} 이 예제에서는 `name` 및 `home` 입력을 정의하고 {% ifversion actions-unified-inputs %}`inputs.name` 및 `inputs.home`{% else %}`github.event.inputs.name` 및 `github.event.inputs.home`{% endif %} 컨텍스트를 사용하여 출력합니다. `home`이 제공되지 않으면 기본값 ‘Octoverse’가 인쇄됩니다.

```yaml
name: Manually triggered workflow
on:
  workflow_dispatch:
    inputs:
      name:
        description: 'Person to greet'
        required: true
        default: 'Mona the Octocat'
      home:
        description: 'location'
        required: false
        default: 'The Octoverse'

jobs:
  say_hello:
    runs-on: ubuntu-latest
    steps:
      - run: |
          echo Hello $NAME!
          echo -in $HOME
        env:
          NAME: {% ifversion actions-unified-inputs %}{% raw %}${{ inputs.name }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.name }}{% endraw %}{% endif %}
          HOME: {% ifversion actions-unified-inputs %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% else %}{% raw %}${{ github.event.inputs.home }}{% endraw %}{% endif %}
```
{% endif %}

### `workflow_run`

| 웹후크 이벤트 페이로드 | 작업 유형 | `GITHUB_SHA` | `GITHUB_REF` |
| --------------------- | -------------- | ------------ | -------------|
| [`workflow_run`](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads/#workflow_run) | - `completed`<br/>- `requested`{% ifversion actions-workflow-run-in-progress %}<br/>- `in_progress`{% endif %} | 기본 분기의 마지막 커밋 | 기본 분기 |

{% note %}

**참고**: {% data reusables.developer-site.multiple_activity_types %} 워크플로를 다시 실행할 때 `requested` 작업 유형이 발생하지 않습니다. 각 작업 유형에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)”를 참조하세요. {% data reusables.developer-site.limit_workflow_to_activity_types %}

{% endnote %}

{% data reusables.actions.branch-requirement %}

{% note %}

**참고:** 세 개 이상의 워크플로 수준을 함께 연결하는 데 `workflow_run`을 사용할 수 없습니다. 예를 들어 초기 워크플로 `A`가 실행된 후 순차적으로 실행되도록 (`B`부터 `F`까지의) 5개의 워크플로를 트리거하려고 하면(즉, `A` → `B` → `C` → `D` → `E` → `F`) `E` 및 `F` 워크플로가 실행되지 않습니다.

{% endnote %}

이 이벤트는 워크플로 실행을 요청하거나 완료할 때 발생합니다. 이를 통해 다른 워크플로의 실행 또는 완료에 따라 워크플로를 실행할 수 있습니다. `workflow_run` 이벤트에 의해 시작된 워크플로는 이전 워크플로는 그렇지 않더라도 비밀에 액세스하고 토큰을 쓸 수 있습니다. 이는 이전 워크플로가 의도적으로 권한이 없지만 이후 워크플로에서 권한 있는 작업을 수행해야 하는 경우에 유용합니다.

이 예제에서는 별도의 “테스트 실행” 워크플로가 완료된 후 실행되도록 워크플로가 구성됩니다.

```yaml
on:
  workflow_run:
    workflows: [Run Tests]
    types:
      - completed
```

`workflow_run` 이벤트에 대해 여러 개의 `workflows`를 지정하는 경우 워크플로 중 하나만 실행해야 합니다. 예를 들어 다음 트리거가 있는 워크플로는 “스테이징” 워크플로 또는 “랩” 워크플로가 완료될 때마다 실행됩니다.

```yaml
on:
  workflow_run:
    workflows: [Staging, Lab]
    types:
      - completed
```

#### 다른 워크플로의 결론에 따라 워크플로 실행

워크플로 실행은 이전 워크플로의 결론에 관계없이 트리거됩니다. 트리거 워크플로의 결과에 따라 작업 또는 단계를 실행하려는 경우 `github.event.workflow_run.conclusion` 속성과 함께 조건을 사용할 수 있습니다. 예를 들어 이 워크플로는 “빌드”라는 워크플로가 완료될 때마다 실행되지만, “빌드” 워크플로가 성공한 경우에만 `on-success` 작업이 실행되고 “빌드” 워크플로가 실패한 경우에만 `on-failure` 작업이 실행됩니다.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [completed]

jobs:
  on-success:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'success' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow passed'
  on-failure:
    runs-on: ubuntu-latest
    if: {% raw %}${{ github.event.workflow_run.conclusion == 'failure' }}{% endraw %}
    steps:
      - run: echo 'The triggering workflow failed'
```

#### 분기를 기반으로 실행하도록 워크플로 제한

`branches` 또는 `branches-ignore` 필터를 사용하여 워크플로를 트리거하기 위해 트리거 워크플로가 실행되어야 하는 분기를 지정할 수 있습니다. 자세한 내용은 “[GitHub Actions의 워크플로 구문](/actions/learn-github-actions/workflow-syntax-for-github-actions#onworkflow_runbranchesbranches-ignore)”을 참조하세요. 예를 들어 다음 트리거가 있는 워크플로는 이름이 `canary`인 분기에서 `Build`라는 워크플로가 실행되는 경우에만 실행됩니다.

```yaml
on:
  workflow_run:
    workflows: [Build]
    types: [requested]
    branches: [canary]
```

#### 트리거 워크플로의 데이터 사용

워크플로를 트리거한 워크플로에 해당하는 [`workflow_run`이벤트 페이로드](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#workflow_run)에 액세스할 수 있습니다. 예를 들어 트리거 워크플로에서 아티팩트가 생성되면 `workflow_run` 이벤트로 트리거된 워크플로가 아티팩트에 액세스할 수 있습니다.

다음 워크플로는 데이터를 아티팩트로 업로드합니다. (이 기본 예제에서 데이터는 끌어오기 요청 번호입니다.)

```yaml
name: Upload data

on:
  pull_request:

jobs:
  upload:
    runs-on: ubuntu-latest

    steps:
      - name: Save PR number
        env:
          PR_NUMBER: {% raw %}${{ github.event.number }}{% endraw %}
        run: |
          mkdir -p ./pr
          echo $PR_NUMBER > ./pr/pr_number
      - uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: pr_number
          path: pr/
```

위의 워크플로 실행이 완료되면 다음 워크플로의 실행을 트리거합니다. 다음 워크플로에서는 `github.event.workflow_run` 컨텍스트 및 {% data variables.product.product_name %} REST API를 사용하여 위의 워크플로에서 업로드한 아티팩트를 다운로드하고, 다운로드한 아티팩트 압축을 풀고, 숫자가 아티팩트로 업로드된 끌어오기 요청에 대한 주석을 다운로드합니다.

```yaml
name: Use the data

on:
  workflow_run:
    workflows: [Upload data]
    types:
      - completed

jobs:
  download:
    runs-on: ubuntu-latest
    steps:
      - name: 'Download artifact'
        uses: {% data reusables.actions.action-github-script %}
        with:
          script: |
            let allArtifacts = await github.rest.actions.listWorkflowRunArtifacts({
               owner: context.repo.owner,
               repo: context.repo.repo,
               run_id: context.payload.workflow_run.id,
            });
            let matchArtifact = allArtifacts.data.artifacts.filter((artifact) => {
              return artifact.name == "pr_number"
            })[0];
            let download = await github.rest.actions.downloadArtifact({
               owner: context.repo.owner,
               repo: context.repo.repo,
               artifact_id: matchArtifact.id,
               archive_format: 'zip',
            });
            let fs = require('fs');
            fs.writeFileSync(`${process.env.GITHUB_WORKSPACE}/pr_number.zip`, Buffer.from(download.data));

      - name: 'Unzip artifact'
        run: unzip pr_number.zip

      - name: 'Comment on PR'
        uses: {% data reusables.actions.action-github-script %}
        with:
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          script: |
            let fs = require('fs');
            let issue_number = Number(fs.readFileSync('./pr_number'));
            await github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: issue_number,
              body: 'Thank you for the PR!'
            });
```
