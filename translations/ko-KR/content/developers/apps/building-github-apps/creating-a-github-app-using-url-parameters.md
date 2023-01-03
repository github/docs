---
title: URL 매개 변수를 사용하여 GitHub 앱 만들기
intro: 'URL [쿼리 매개 변수](https://en.wikipedia.org/wiki/Query_string)를 사용하여 새 {% data variables.product.prodname_github_app %}의 설정을 미리 선택하여 새 {% data variables.product.prodname_github_app %}의 구성을 신속하게 설정할 수 있습니다.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-using-url-parameters
  - /developers/apps/creating-a-github-app-using-url-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation query parameters
ms.openlocfilehash: aa54eb3dcd66e86c04a1e95e4da2d45d7858a996
ms.sourcegitcommit: a3e975955acbabbd582bb298a6c09aa81572bf52
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009395'
---
## {% data variables.product.prodname_github_app %} URL 매개 변수 정보

쿼리 매개 변수를 해당 URL에 추가하여 개인 또는 조직 계정에서 {% data variables.product.prodname_github_app %}의 구성을 미리 선택할 수 있습니다.

* **개인 계정:** `{% data variables.product.oauth_host_code %}/settings/apps/new`
* **조직 계정:** `{% data variables.product.oauth_host_code %}/organizations/:org/settings/apps/new`

앱을 만드는 사람은 앱을 제출하기 전에 {% data variables.product.prodname_github_app %} 등록 페이지에서 미리 선택된 값을 편집할 수 있습니다. URL 쿼리 문자열에 필수 매개 변수를 포함하지 않는 경우(예: `name`) 앱을 만드는 사람은 앱을 제출하기 전에 값을 입력해야 합니다.

웹후크를 보호하기 위해 비밀이 필요한 앱의 경우 암호 값은 쿼리 매개 변수를 사용하는 것이 아니라 앱을 만드는 사람이 양식에 설정해야 합니다. 자세한 내용은 “[웹후크 보안](/developers/webhooks-and-events/webhooks/securing-your-webhooks)”을 참조하세요.

다음 URL은 미리 구성된 설명 및 콜백 URL을 사용하여 `octocat-github-app`이라는 새 공용 앱을 만듭니다. 또한 이 URL은 `checks`에 대한 읽기 및 쓰기 권한을 선택하고, `check_run` 및 `check_suite` 웹후크 이벤트를 구독하고, 설치하는 동안 사용자 권한 부여(OAuth)를 요청하는 옵션을 선택합니다.

```text
{% data variables.product.oauth_host_code %}/settings/apps/new?name=octocat-github-app&description=An%20Octocat%20App&callback_urls[]=https://example.com&request_oauth_on_install=true&public=true&checks=write&events[]=check_run&events[]=check_suite
```

사용 가능한 쿼리 매개 변수, 사용 권한 및 이벤트의 전체 목록은 아래 섹션에 나열되어 있습니다.

## {% data variables.product.prodname_github_app %} 구성 매개 변수

 Name | 형식 | 설명
-----|------|-------------
`name` | `string` | {% data variables.product.prodname_github_app %}의 이름입니다. 앱에 명확하고 간결한 이름을 지정합니다. 앱은 고유의 사용자 이름 또는 조직 이름이 아니면 기존 GitHub 사용자와 동일한 이름을 가질 수 없습니다. 통합이 작업을 수행할 때 앱 이름의 슬러그 버전이 사용자 인터페이스에 표시됩니다.
`description` | `string` | {% data variables.product.prodname_github_app %}에 대한 설명입니다.
`url` | `string` | {% data variables.product.prodname_github_app %}의 웹 사이트 홈페이지의 전체 URL입니다.
`callback_urls` | `array of strings` | 다른 사람이 설치 권한을 부여한 후 리디렉션할 전체 URL입니다. 최대 10개의 콜백 URL을 제공할 수 있습니다. 해당 URL은 앱이 사용자-서버 요청을 식별하고 권한을 부여해야 하는 경우에 사용됩니다. 예: `callback_urls[]=https://example.com&callback_urls[]=https://example-2.com`.
`request_oauth_on_install` | `boolean` | 앱에서 OAuth 흐름을 사용하여 사용자에게 권한을 부여하는 경우 사람들이 앱을 설치할 때 앱에 권한을 부여할 수 있도록 이 옵션을 `true`로 설정하여 단계를 절약할 수 있습니다. 이 옵션을 선택하면 `setup_url`을 사용할 수 없게 되고 사용자는 앱을 설치한 후 `callback_url`로 리디렉션됩니다.
`setup_url` | `string` | 설치 후 앱에 추가 설정이 필요한 경우 다른 사람이 {% data variables.product.prodname_github_app %}을 설치한 후 리디렉션할 전체 URL입니다.
`setup_on_update` | `boolean` | 예를 들어 리포지토리가 추가되거나 제거된 후 설치가 업데이트될 때 사용자를 설정 URL로 리디렉션하려면 `true`로 설정합니다.
`public` | `boolean` | {% data variables.product.prodname_github_app %}을 누구나 사용할 수 있는 경우 `true`로 설정하고 앱 소유자만 액세스할 수 있는 경우 `false`로 설정합니다.
`webhook_active` | `boolean` | 웹후크를 사용하지 않도록 설정하려면 `false`로 설정합니다. 웹후크는 기본적으로 사용하도록 설정됩니다.
`webhook_url` | `string` | 웹후크 이벤트 페이로드를 보내려는 전체 URL입니다.
{% ifversion ghae %}`webhook_secret` | `string` | 비밀을 지정하여 웹후크를 보호할 수 있습니다. 자세한 내용은 “[웹후크 보안](/webhooks/securing/)”을 참조하세요.
{% endif %}`events` | `array of strings` | 웹후크 이벤트입니다. 새 {% data variables.product.prodname_github_app %}을 등록할 때 이벤트를 선택하기 전에 일부 웹후크 이벤트에는 리소스에 대한 `read` 또는 `write` 권한이 필요합니다. 사용 가능한 이벤트 및 필요한 사용 권한은 “[{% data variables.product.prodname_github_app %} 웹후크 이벤트](#github-app-webhook-events)” 섹션을 참조하세요. 쿼리 문자열에서 여러 이벤트를 선택할 수 있습니다. 예: `events[]=public&events[]=label`.{% ifversion ghes < 3.4 %}
`domain` | `string` | 콘텐츠 참조의 URL입니다.{% endif %}
`single_file_name` | `string` | 이는 앱이 모든 리포지토리의 단일 파일에 액세스할 수 있도록 하는 좁은 범위의 사용 권한입니다. `single_file` 사용 권한을 `read` 또는 `write`로 설정하면 이 필드는 {% data variables.product.prodname_github_app %}에서 관리할 단일 파일의 경로를 제공합니다. {% ifversion fpt or ghes or ghec %} 여러 파일을 관리해야 하는 경우 아래 `single_file_paths`를 참조하세요. {% endif %}{% ifversion fpt or ghes or ghec %}
`single_file_paths` | `array of strings` | 이렇게 하면 앱이 리포지토리에서 최대 10개의 지정된 파일에 액세스할 수 있습니다. `single_file` 사용 권한을 `read` 또는 `write`로 설정하면 이 배열은 {% data variables.product.prodname_github_app %}에서 관리할 최대 10개 파일의 경로를 저장할 수 있습니다. 파일은 모두 `single_file`에 의해 설정된 동일한 사용 권한을 받으며 별도의 개별 사용 권한은 없습니다. 두 개 이상의 파일을 구성하면 API가 `multiple_single_files=true`를 반환하고, 그렇지 않으면 `multiple_single_files=false`를 반환합니다.{% endif %}

## {% data variables.product.prodname_github_app %} 사용 권한

다음 표의 사용 권한 이름을 쿼리 매개 변수 이름으로 사용하고 사용 권한 유형을 쿼리 값으로 사용하여 쿼리 문자열에서 사용 권한을 선택할 수 있습니다. 예를 들어 `contents`에 대한 사용자 인터페이스에서 `Read & write` 권한을 선택하려면 쿼리 문자열에 `&contents=write`를 포함합니다. `blocking`에 대한 사용자 인터페이스에서 `Read-only` 권한을 선택하려면 쿼리 문자열에 `&blocking=read`를 포함합니다. `checks`에 대한 사용자 인터페이스에서 `no-access`를 선택하려면 권리 문자열에 `checks` 사용 권한을 포함하지 않습니다.

사용 권한 | 설명
---------- | -----------
[`administration`](/rest/reference/permissions-required-for-github-apps#administration) | 조직 및 리포지토리 관리를 위해 다양한 엔드포인트에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% ifversion fpt or ghec %}
[`blocking`](/rest/reference/permissions-required-for-github-apps#blocking-users) | [사용자 차단 API](/rest/reference/users#blocking)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% endif %}
[`checks`](/rest/reference/permissions-required-for-github-apps#checks) | [검사 API](/rest/reference/checks)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% ifversion ghes < 3.4 %}
`content_references` | "[콘텐츠 첨부 파일 만들기](/rest/reference/apps#create-a-content-attachment)" 엔드포인트에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% endif %}
[`contents`](/rest/reference/permissions-required-for-github-apps#contents) |  리포지토리 콘텐츠를 수정할 수 있는 다양한 엔드포인트에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`deployments`](/rest/reference/permissions-required-for-github-apps#deployments) | [배포 API](/rest/reference/repos#deployments)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% ifversion fpt or ghes or ghec %}
[`emails`](/rest/reference/permissions-required-for-github-apps#email-addresses) | [이메일 API](/rest/reference/users#emails)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% endif %}
[`followers`](/rest/reference/permissions-required-for-github-apps#followers) | [팔로워 API](/rest/reference/users#followers)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`gpg_keys`](/rest/reference/permissions-required-for-github-apps#gpg-keys) | [GPG 키 API](/rest/reference/users#gpg-keys)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`issues`](/rest/reference/permissions-required-for-github-apps#issues) | [이슈 API](/rest/reference/issues)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`keys`](/rest/reference/permissions-required-for-github-apps#git-ssh-keys) | [퍼블릭 키 API](/rest/reference/users#keys)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`members`](/rest/reference/permissions-required-for-github-apps#members) |  조직 구성원을 관리할 수 있는 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% ifversion fpt or ghec %}
[`metadata`](/rest/reference/permissions-required-for-github-apps#metadata) | 중요한 데이터를 유출하지 않는 읽기 전용 엔드포인트에 대한 액세스 권한을 부여합니다. `read` 또는 `none`일 수 있습니다. 사용 권한을 설정하면 기본값은 `read`이고, {% data variables.product.prodname_github_app %}의 사용 권한을 지정하지 않으면 기본값은 `none`입니다.
[`organization_administration`](/rest/reference/permissions-required-for-github-apps#organization-administration) | “[조직 업데이트](/rest/reference/orgs#update-an-organization)” 엔드포인트 및 [조직 상호 작용 제한 API](/rest/reference/interactions#set-interaction-restrictions-for-an-organization)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% endif %}
[`organization_hooks`](/rest/reference/permissions-required-for-github-apps#organization-webhooks) | [조직 웹후크 API](/rest/reference/orgs#webhooks/)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
`organization_plan` | “[조직 가져오기](/rest/reference/orgs#get-an-organization)” 엔드포인트를 사용하여 조직의 계획에 대한 정보를 가져올 수 있는 액세스 권한을 부여합니다. `none` 또는 `read` 중 하나일 수 있습니다.
[`organization_projects`](/rest/reference/permissions-required-for-github-apps#organization-projects) |  [프로젝트 API](/rest/reference/projects)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write`, `admin` 중 하나일 수 있습니다.{% ifversion fpt or ghec %}
[`organization_user_blocking`](/rest/reference/permissions-required-for-github-apps#organization-user-blocking) | [조직 사용자 차단 API](/rest/reference/orgs#blocking)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% endif %}
[`pages`](/rest/reference/permissions-required-for-github-apps#pages) | [페이지 API](/rest/reference/repos#pages)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
`plan` | “[사용자 가져오기](/rest/reference/users#get-a-user)” 엔드포인트를 사용하여 사용자의 GitHub 계획에 대한 정보를 가져올 수 있는 액세스 권한을 부여합니다. `none` 또는 `read` 중 하나일 수 있습니다.
[`pull_requests`](/rest/reference/permissions-required-for-github-apps#pull-requests) | 다양한 끌어오기 요청 엔드포인트에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`repository_hooks`](/rest/reference/permissions-required-for-github-apps#repository-webhooks) | [리포지토리 웹후크 API](/rest/reference/repos#hooks)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`repository_projects`](/rest/reference/permissions-required-for-github-apps#repository-projects) |  [프로젝트 API](/rest/reference/projects)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 또는 `admin` 중 하나일 수 있습니다.{% ifversion ghes or ghec %}
[`secret_scanning_alerts`](/rest/reference/permissions-required-for-github-apps#secret-scanning-alerts) |  [비밀 검사 API](/rest/reference/secret-scanning)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% endif %}{% ifversion fpt or ghes or ghec %}
[`security_events`](/rest/reference/permissions-required-for-github-apps#code-scanning-alerts) |  [코드 검사 API](/rest/reference/code-scanning/)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.{% endif %}
[`single_file`](/rest/reference/permissions-required-for-github-apps#single-file) | [콘텐츠 API](/rest/reference/repos#contents)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`starring`](/rest/reference/permissions-required-for-github-apps#starring) | [별표 API](/rest/reference/activity#starring)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`statuses`](/rest/reference/permissions-required-for-github-apps#commit-statuses) | [상태 API](/rest/reference/commits#commit-statuses)에 대한 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.
[`team_discussions`](/rest/reference/permissions-required-for-github-apps#team-discussions) | [팀 토론 API](/rest/reference/teams#discussions) 및 [팀 토론 주석 API](/rest/reference/teams#discussion-comments)에 대한 액세스 권한을 부여합니다. `none`는 `read`, `write` 중 하나일 수 있습니다.
[`vulnerability_alerts`](/rest/reference/permissions-required-for-github-apps#dependabot-alerts)| 리포지토리에서 {% data variables.product.prodname_dependabot_alerts %}를 받을 수 있는 액세스 권한을 부여합니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)”를 참조하세요. `none`는 `read`, `write` 중 하나일 수 있습니다.
`watching` | 사용자가 구독하는 리포지토리를 나열하고 변경할 수 있는 액세스 권한을 부여합니다. `none`, `read`, `write` 중 하나일 수 있습니다.

## {% data variables.product.prodname_github_app %} 웹후크 이벤트

웹후크 이벤트 이름 | 필요한 권한 | 설명
------------------ | ------------------- | -----------
[`check_run`](/webhooks/event-payloads/#check_run) |`checks` | {% data reusables.webhooks.check_run_short_desc %}
[`check_suite`](/webhooks/event-payloads/#check_suite) |`checks` | {% data reusables.webhooks.check_suite_short_desc %}
[`commit_comment`](/webhooks/event-payloads/#commit_comment) | `contents` | {% data reusables.webhooks.commit_comment_short_desc %}{% ifversion ghes < 3.4 %}
[`content_reference`](/webhooks/event-payloads/#content_reference) |`content_references` | {% data reusables.webhooks.content_reference_short_desc %}{% endif %}
[`create`](/webhooks/event-payloads/#create) | `contents` | {% data reusables.webhooks.create_short_desc %}
[`delete`](/webhooks/event-payloads/#delete) | `contents` | {% data reusables.webhooks.delete_short_desc %}
[`deployment`](/webhooks/event-payloads/#deployment) | `deployments` | {% data reusables.webhooks.deployment_short_desc %}
[`deployment_status`](/webhooks/event-payloads/#deployment_status) | `deployments` | {% data reusables.webhooks.deployment_status_short_desc %}
[`fork`](/webhooks/event-payloads/#fork) | `contents` | {% data reusables.webhooks.fork_short_desc %}
[`gollum`](/webhooks/event-payloads/#gollum) | `contents` | {% data reusables.webhooks.gollum_short_desc %}
[`issues`](/webhooks/event-payloads/#issues) | `issues` | {% data reusables.webhooks.issues_short_desc %}
[`issue_comment`](/webhooks/event-payloads/#issue_comment) | `issues` | {% data reusables.webhooks.issue_comment_short_desc %}
[`label`](/webhooks/event-payloads/#label) | `metadata` | {% data reusables.webhooks.label_short_desc %}
[`member`](/webhooks/event-payloads/#member) | `members` | {% data reusables.webhooks.member_short_desc %}
[`membership`](/webhooks/event-payloads/#membership) | `members` | {% data reusables.webhooks.membership_short_desc %}
[`milestone`](/webhooks/event-payloads/#milestone) | `pull_request` | {% data reusables.webhooks.milestone_short_desc %}{% ifversion fpt or ghec %}
[`org_block`](/webhooks/event-payloads/#org_block) | `organization_administration` | {% data reusables.webhooks.org_block_short_desc %}{% endif %}
[`organization`](/webhooks/event-payloads/#organization) | `members` | {% data reusables.webhooks.organization_short_desc %}
[`page_build`](/webhooks/event-payloads/#page_build) | `pages` | {% data reusables.webhooks.page_build_short_desc %}
[`project`](/webhooks/event-payloads/#project) | `repository_projects` 또는 `organization_projects` | {% data reusables.webhooks.project_short_desc %}
[`project_card`](/webhooks/event-payloads/#project_card) | `repository_projects` 또는 `organization_projects` | {% data reusables.webhooks.project_card_short_desc %}
[`project_column`](/webhooks/event-payloads/#project_column) | `repository_projects` 또는 `organization_projects` | {% data reusables.webhooks.project_column_short_desc %}
[`public`](/webhooks/event-payloads/#public) | `metadata` | {% data reusables.webhooks.public_short_desc %}
[`pull_request`](/webhooks/event-payloads/#pull_request) | `pull_requests` | {% data reusables.webhooks.pull_request_short_desc %}
[`pull_request_review`](/webhooks/event-payloads/#pull_request_review) | `pull_request` | {% data reusables.webhooks.pull_request_review_short_desc %}
[`pull_request_review_comment`](/webhooks/event-payloads/#pull_request_review_comment) | `pull_request` | {% data reusables.webhooks.pull_request_review_comment_short_desc %}
[`pull_request_review_thread`](/webhooks/event-payloads/#pull_request_review_thread) | `pull_request` | {% data reusables.webhooks.pull_request_review_thread_short_desc %}
[`push`](/webhooks/event-payloads/#push) | `contents` | {% data reusables.webhooks.push_short_desc %}
[`release`](/webhooks/event-payloads/#release) | `contents` | {% data reusables.webhooks.release_short_desc %}
[`repository`](/webhooks/event-payloads/#repository) |`metadata` | {% data reusables.webhooks.repository_short_desc %}{% ifversion fpt or ghec %}
[`repository_dispatch`](/webhooks/event-payloads/#repository_dispatch) | `contents` | 통합업체가 GitHub Actions를 사용하여 사용자 지정 이벤트를 트리거할 수 있습니다.{% endif %}
[`status`](/webhooks/event-payloads/#status) | `statuses` | {% data reusables.webhooks.status_short_desc %}
[`team`](/webhooks/event-payloads/#team) | `members` | {% data reusables.webhooks.team_short_desc %}
[`team_add`](/webhooks/event-payloads/#team_add) | `members` | {% data reusables.webhooks.team_add_short_desc %}
[`watch`](/webhooks/event-payloads/#watch) | `metadata` | {% data reusables.webhooks.watch_short_desc %}
