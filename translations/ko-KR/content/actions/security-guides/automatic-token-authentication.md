---
title: 자동 토큰 인증
intro: '{% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_actions %}를 대신하여 인증하는 데 사용할 수 있는 토큰을 제공합니다.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
  - /actions/reference/authentication-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Automatic token authentication
ms.openlocfilehash: eacf395921d9d4be949657bf421cf1b9bee6908b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107039'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## `GITHUB_TOKEN` 비밀 정보

각 워크플로 실행이 시작될 때 {% data variables.product.prodname_dotcom %}은(는) 워크플로에서 사용할 고유한 `GITHUB_TOKEN` 비밀을 자동으로 만듭니다. `GITHUB_TOKEN`은 워크플로 실행에서 인증하는 데 사용할 수 있습니다.

{% data variables.product.prodname_actions %}을(를) 사용하도록 설정하면 {% data variables.product.prodname_dotcom %}이(가) 리포지토리에 {% data variables.product.prodname_github_app %}을(를) 설치합니다. `GITHUB_TOKEN` 비밀은 {% data variables.product.prodname_github_app %} 설치 액세스 토큰입니다. 설치 액세스 토큰을 사용하여 리포지토리에 설치된 {% data variables.product.prodname_github_app %}을(를) 대신하여 인증할 수 있습니다. 토큰의 권한은 워크플로를 포함하는 리포지토리로 제한됩니다. 자세한 내용은 “[`GITHUB_TOKEN`에 대한 권한](#permissions-for-the-github_token)”을 참조하세요.

각 작업이 시작되기 전에 {% data variables.product.prodname_dotcom %}은(는) 작업에 대한 설치 액세스 토큰을 가져옵니다. {% data reusables.actions.github-token-expiration %}

토큰은 `github.token` 컨텍스트에서도 사용할 수 있습니다. 자세한 내용은 “[컨텍스트](/actions/learn-github-actions/contexts#github-context)”를 참조하세요.

## 워크플로에서 `GITHUB_TOKEN` 사용

다음과 같이 비밀을 참조하는 데 표준 구문을 사용하면 `GITHUB_TOKEN`을 사용할 수 있습니다. {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. `GITHUB_TOKEN` 사용의 예에는 토큰을 입력으로 작업에 전달하거나 인증된 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API 요청을 수행하는 데 사용하는 경우가 포함됩니다.

{% note %}

**중요:** 워크플로가 `GITHUB_TOKEN`을 작업에 명시적으로 전달하지 않더라도 작업은 `github.token` 컨텍스트를 통해 `GITHUB_TOKEN`에 액세스할 수 있습니다. 좋은 보안 사례로, 항상 `GITHUB_TOKEN`에 부여된 권한을 제한하여 필요한 최소 액세스 권한만 갖도록 해야 합니다. 자세한 내용은 “[`GITHUB_TOKEN`에 대한 권한](#permissions-for-the-github_token)”을 참조하세요.

{% endnote %}

{% data reusables.actions.actions-do-not-trigger-workflows %}

### 예제 1: 입력으로 `GITHUB_TOKEN` 전달

{% data reusables.actions.github_token-input-example %}

### 예제 2: REST API 호출

`GITHUB_TOKEN`은 인증된 API 호출을 수행하는 데 사용할 수 있습니다. 이 예제 워크플로는 {% data variables.product.prodname_dotcom %} REST API를 사용하여 이슈를 만듭니다.

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_issue:
    runs-on: ubuntu-latest
    permissions:
      issues: write 
    steps:
      - name: Create issue using REST API
        run: |
          curl --request POST \
          --url {% data variables.product.api_url_code %}/repos/${% raw %}{{ github.repository }}{% endraw %}/issues \
          --header 'authorization: Bearer ${% raw %}{{ secrets.GITHUB_TOKEN }}{% endraw %}' \
          --header 'content-type: application/json' \
          --data '{
            "title": "Automated issue for commit: ${% raw %}{{ github.sha }}{% endraw %}",
            "body": "This issue was automatically created by the GitHub Action workflow **${% raw %}{{ github.workflow }}{% endraw %}**. \n\n The commit hash was: _${% raw %}{{ github.sha }}{% endraw %}_."
            }' \
          --fail
```

## `GITHUB_TOKEN`에 대한 권한

{% data variables.product.prodname_github_apps %}에서 각 권한으로 액세스할 수 있는 API 엔드포인트에 대한 자세한 내용은 “[{% data variables.product.prodname_github_app %} 권한](/rest/reference/permissions-required-for-github-apps)”을 참조하세요.

다음 표에서는 기본적으로 `GITHUB_TOKEN`에 부여된 사용 권한을 보여 줍니다. {% ifversion not ghes %}엔터프라이즈, 조직 또는 리포지토리{% else %}조직 또는 리포지토리{% endif %}에 대한 관리자 권한이 있는 사람은 기본 권한을 허용 또는 제한됨으로 설정할 수 있습니다. 엔터프라이즈, 조직 또는 리포지토리에 대해 `GITHUB_TOKEN`에 대한 기본 권한을 설정하는 방법에 대한 자세한 내용은 “[엔터프라이즈에서 {% data variables.product.prodname_actions %}엔터프라이즈에 대한 정책 적용](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)”, “[조직에 대한 {% data variables.product.prodname_actions %} 사용 안 함 또는 제한](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)” 또는 “[리포지토리에 대한 {% data variables.product.prodname_actions %} 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)”를 참조하세요.

| Scope         | 기본 액세스 권한<br>(허용) | 기본 액세스 권한<br>(제한) | 포크된 리포지토리별<br>최대 액세스 권한 |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | 읽기/쓰기  | 없음 | 읽기 |
| checks        | 읽기/쓰기  | 없음 | 읽기 |
| 내용      | 읽기/쓰기  | 읽기 | 읽기 |
| 배포   | 읽기/쓰기  | 없음 | 읽기 |{% ifversion fpt or ghec %}
| id-token      | 없음        | 없음 | 읽기 |{% endif %}
| issues        | 읽기/쓰기  | 없음 | 읽기 |
| metadata      | 읽기        | 읽기 | 읽기 |
| 패키지      | 읽기/쓰기  | 없음 | 읽기 |
| 페이지         | 읽기/쓰기  | 없음 | 읽기 |
| pull-requests | 읽기/쓰기  | 없음 | 읽기 |
| repository-projects | 읽기/쓰기 | 없음 | 읽기 |
| security-events     | 읽기/쓰기 | 없음 | 읽기 |
| statuses      | 읽기/쓰기  | 없음 | 읽기 |

{% data reusables.actions.workflow-runs-dependabot-note %}

### `GITHUB_TOKEN`에 대한 권한 수정

개별 워크플로 파일에서 `GITHUB_TOKEN`에 대한 권한을 수정할 수 있습니다. `GITHUB_TOKEN`에 대한 기본 권한이 제한적이면 일부 작업과 명령이 성공적으로 실행되도록 권한을 상승해야 할 수 있습니다. 기본 권한이 허용되는 경우 워크플로 파일을 편집하여 `GITHUB_TOKEN`에서 일부 권한을 제거할 수 있습니다. 적절한 보안 사례로, `GITHUB_TOKEN`에 최소한의 액세스 권한을 부여해야 합니다.

워크플로 실행 로그의 “작업 설정” 섹션에서 `GITHUB_TOKEN`이 특정 작업에 대해 가지고 있는 권한을 확인할 수 있습니다. 자세한 내용은 “[워크플로 실행 로그 사용](/actions/managing-workflow-runs/using-workflow-run-logs)”을 참조하세요.

워크플로 파일의 `permissions` 키를 사용하여 전체 워크플로 또는 개별 작업에 대한 `GITHUB_TOKEN`의 권한을 수정할 수 있습니다. 이렇게 하면 워크플로 또는 작업에 필요한 최소 권한을 구성할 수 있습니다. `permissions` 키를 사용하는 경우 항상 읽기 액세스 권한을 가져오는 `metadata` 범위를 제외하고 지정되지 않은 모든 권한은 액세스 권한 없음으로 설정됩니다.

{% data reusables.actions.forked-write-permission %}

이 문서의 앞부분에 있는 워크플로 예제 두 개는 워크플로 수준 및 작업 수준에서 사용 중인 `permissions` 키를 보여 줍니다. [예제 1](#example-1-passing-the-github_token-as-an-input)에서는 전체 워크플로에 대해 두 가지 권한이 지정됩니다. [예제 2](#example-2-calling-the-rest-api)에서 단일 작업의 하나의 범위에 대해 쓰기 액세스 권한이 부여됩니다.

`permissions` 키에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#permissions)”을 참조하세요.

#### 워크플로 작업에 대한 권한을 계산하는 방법

`GITHUB_TOKEN`에 대한 권한은 처음에 엔터프라이즈, 조직 또는 리포지토리의 기본 설정으로 설정됩니다. 기본값이 이러한 수준에서 제한된 권한으로 설정된 경우 관련 리포지토리에 적용됩니다. 예를 들어 조직 수준에서 제한된 기본값을 선택하는 경우 해당 조직의 모든 리포지토리는 제한된 권한을 기본값으로 사용합니다. 그런 다음 워크플로 파일 내의 구성에 따라 먼저 워크플로 수준에서 그리고 작업 수준에서 차례로 권한을 조정합니다. 마지막으로, 워크플로가 포크된 리포지토리의 끌어오기 요청에 의해 트리거되고 **끌어오기 요청에서 워크플로에 쓰기 토큰 보내기** 설정을 선택하지 않은 경우 읽기 전용으로 쓰기 권한을 변경하도록 권한이 조정됩니다.

### 추가 권한 부여

에서 `GITHUB_TOKEN`사용할 수 없는 권한이 필요한 토큰이 필요한 경우 {% data variables.product.pat_generic %}를 만들고 리포지토리에서 비밀로 설정할 수 있습니다.

1. 해당 리포지토리에 대한 적절한 권한이 있는 토큰을 사용하거나 만드세요. 자세한 내용은 "[{% data variables.product.pat_generic %} 만들기](/github/authenticating-to-github/creating-a-personal-access-token)"를 참조하세요.
1. 워크플로 리포지토리에 토큰을 비밀로 추가하고 {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} 구문을 사용하여 토큰을 참조합니다. 자세한 내용은 “[암호화된 비밀 만들기 및 사용](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”을 참조하세요.

### 추가 참고 자료

- “[REST API의 리소스](/rest/overview/resources-in-the-rest-api#rate-limiting)”
