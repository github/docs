---
title: OAuth 앱에 대한 범위
intro: '{% data reusables.shortdesc.understanding_scopes_for_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps
  - /apps/building-oauth-apps/scopes-for-oauth-apps
  - /apps/building-oauth-apps/understanding-scopes-for-oauth-apps
  - /developers/apps/scopes-for-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 8398a7162b3ab77677651d5404c0738c6d0877b1
ms.sourcegitcommit: 34d500fe45b362043b4b4685d6705a7bfb484d11
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148164366'
---
GitHub OAuth 앱을 설정할 때 요청된 범위가 권한 부여 양식에서 사용자에게 표시됩니다.

{% note %}

**참고:** GitHub 앱을 빌드하는 경우 권한 부여 요청에 범위를 제공할 필요가 없습니다. 자세한 내용은 “[GitHub 앱의 사용자 식별 및 권한 부여](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”를 참조하세요.

{% endnote %}

{% data variables.product.prodname_oauth_app %}에서 CLI 도구와 같은 브라우저에 액세스할 수 없는 경우 사용자가 앱에 인증할 범위를 지정할 필요가 없습니다. 자세한 내용은 “[OAuth 앱 권한 부여](/developers/apps/authorizing-oauth-apps#device-flow)”를 참조하세요.

헤더를 확인하여 사용 중인 OAuth 범위와 API 작업이 무엇을 허용하는지 확인합니다.

```shell
$ curl -H "Authorization: Bearer OAUTH-TOKEN" {% data variables.product.api_url_pre %}/users/codertocat -I
HTTP/2 200
X-OAuth-Scopes: repo, user
X-Accepted-OAuth-Scopes: user
```

* `X-OAuth-Scopes`는 토큰에 권한이 부여된 범위를 나열합니다.
* `X-Accepted-OAuth-Scopes`는 작업이 검사하는 범위를 나열합니다.

## 사용 가능한 범위

이름 | 설명 -----|-----------| {% ifversion not ghae %} **`(no scope)`** | 공개 정보에 대한 읽기 전용 액세스 권한 부여합니다(사용자 프로필 정보, 리포지토리 정보 및 gist 포함).{% endif %}{% ifversion ghes or ghae %} **`site_admin`** | 사이트 관리자에게 [{% data variables.product.prodname_ghe_server %} 관리 API 엔드포인트에 대한 액세스 권한을 부여합니다](/rest/reference/enterprise-admin).{% endif %} **`repo`** | 퍼블릭{% ifversion ghec or ghes or ghae %}, 내부,{% endif %} 및 프라이빗 리포지토리에 대한 모든 액세스 권한을 부여합니다(코드에 대한 읽기 및 쓰기 권한, 커밋 상태, 리포지토리 초대, 협력자, 배포 상태 및 리포지토리 웹후크 포함). **참고**: 리포지토리 관련 리소스 외에도 `repo` 범위는 프로젝트, 초대, 팀 멤버 자격 및 웹후크를 포함하여 조직 소유 리소스를 관리할 수 있는 액세스 권한을 부여합니다. 이 범위는 사용자가 소유한 프로젝트를 관리하는 기능도 부여합니다.
&emsp;`repo:status`| {% ifversion fpt %}퍼블릭 및 프라이빗{% elsif ghec or ghes %}퍼블릭, 프라이빗, 내부{% elsif ghae %}프라이빗 및 내부{% endif %} 리포지토리의 커밋 상태에 대한 읽기/쓰기 액세스 권한을 부여합니다. 이 범위는 코드에 대한 액세스 권한을 부여하지 않고 다른 사용자 또는 서비스에 프라이빗 리포지토리 커밋 상태에 대한 액세스 권한을 부여하는 데만 필요합니다.
&emsp;`repo_deployment`| {% ifversion not ghae %}퍼블릭{% else %}내부{% endif %} 및 프라이빗 리포지토리의 [배포 상태](/rest/reference/repos#deployments)에 대한 액세스 권한을 부여합니다. 이 범위는 코드에 대한 액세스 권한을 부여하지 않고 다른 사용자 또는 서비스에 배포 상태에 대한 액세스 권한을 부여하는 데만 필요합니다.{% ifversion not ghae %} &emsp;`public_repo`| 퍼블릭 리포지토리에 대한 액세스를 제한합니다. 여기에는 퍼블릭 리포지토리 및 조직의 코드, 커밋 상태, 리포지토리 프로젝트, 협력자 및 배포 상태에 대한 읽기/쓰기 액세스가 포함됩니다. 공용 리포지토리를 별표로 지정하는 데도 필요합니다.{% endif %} &emsp;`repo:invite` | 리포지토리에서 협업하도록 초대에 대한 수락/거절 기능을 부여합니다. 이 범위는 코드에 대한 액세스 권한을 부여하지 않고 다른 사용자 또는 서비스에 초대에 대한 액세스 권한을 부여하는 데만 필요합니다.{% ifversion fpt or ghes or ghec %} &emsp;`security_events` | <br/> [{% data variables.product.prodname_code_scanning %} API](/rest/reference/code-scanning)의 보안 이벤트에 대한 읽기 및 쓰기 액세스를 부여합니다.{%- ifversion ghec %}<br/> [{% data variables.product.prodname_secret_scanning %} API](/rest/reference/secret-scanning)의 보안 이벤트에 대한 읽기 및 쓰기 액세스를 부여합니다.{%- endif %} <br/> 이 범위는 코드에 대한 액세스 권한을 부여하지 않고 다른 사용자 또는 서비스에 보안 이벤트에 대한 액세스 권한을 부여하는 데만 필요합니다.{% endif %} **`admin:repo_hook`** | {% ifversion fpt %}퍼블릭 또는 프라이빗{% elsif ghec or ghes %}퍼블릭, 프라이빗 또는 내부{% elsif ghae %}프라이빗 또는 내부{% endif %} 리포지토리의 리포지토리 후크에 대한 읽기, 쓰기, ping 및 삭제 액세스 권한을 부여합니다. `repo` {% ifversion fpt or ghec or ghes %}와 `public_repo` 범위는 리포지토리 후크를 포함하여 리포지토리에 대한 모든 권한을 {% else %}부여합니다{% endif %}. `admin:repo_hook` 범위를 사용하여 리포지토리 후크로 액세스를 제한합니다.
&emsp;`write:repo_hook`| {% ifversion fpt %}퍼블릭 또는 프라이빗{% elsif ghec or ghes %}퍼블릭, 프라이빗 또는 내부{% elsif ghae %}프라이빗 또는 내부{% endif %} 리포지토리의 후크에 대한 읽기, 쓰기 및 ping 액세스 권한을 부여합니다.
&emsp;`read:repo_hook`| {% ifversion fpt %}퍼블릭 또는 프라이빗{% elsif ghec or ghes %}퍼블릭, 프라이빗 또는 내부{% elsif ghae %}프라이빗 또는 내부{% endif %} 리포지토리의 후크에 대한 읽기 및 ping 액세스 권한을 부여합니다.
**`admin:org`** | 조직 및 해당 팀, 프로젝트, 멤버 자격을 완전히 관리합니다.
&emsp;`write:org`| 조직 멤버 자격, 조직 프로젝트 및 팀 멤버 자격에 대한 읽기 및 쓰기 권한입니다.
&emsp;`read:org`| 조직 멤버 자격, 조직 프로젝트 및 팀 멤버 자격에 대한 읽기 전용 권한입니다.
**`admin:public_key`** | 공개 키를 완전히 관리합니다.
&emsp;`write:public_key`| 공개 키에 대한 세부 정보를 만들고 나열하고 봅니다.
&emsp;`read:public_key`| 공개 키에 대한 세부 정보를 나열하고 봅니다.
**`admin:org_hook`** | 조직 후크에 대한 읽기, 쓰기, ping 및 삭제 액세스 권한을 부여합니다. **참고:** OAuth 토큰은 OAuth 앱에서 만든 조직 후크에서만 해당 작업을 수행할 수 있습니다. {% data variables.product.pat_generic_caps %}s는 사용자가 만든 조직 후크에서만 이러한 작업을 수행할 수 있습니다.
**`gist`** | gist에 대한 쓰기 권한을 부여합니다.
**`notifications`** | 다음 권한을 부여합니다. <br/>* 사용자의 알림에 대한 읽기 권한 <br/>* 스레드에 대한 읽기 권한으로 표시 <br/>* 리포지토리에 대한 조사식 및 비조사식 액세스 권한 <br/>* 스레드 구독에 대한 읽기, 쓰기 및 삭제 액세스 권한
**`user`** | 프로필 정보에 대한 읽기/쓰기 권한만 부여합니다.  이 범위에는 `user:email`과 `user:follow`가 포함됩니다.
&emsp;`read:user`| 사용자 프로필 데이터를 읽을 수 있는 액세스 권한을 부여합니다.
&emsp;`user:email`| 사용자의 이메일 주소에 대한 읽기 권한을 부여합니다.
&emsp;`user:follow`| 다른 사용자에 대한 팔로우 및 팔로우 취소 관련 액세스 권한을 부여합니다.{% ifversion projects-oauth-scope %} **`project`** | 사용자와 조직 {% data variables.projects.projects_v2 %}에 대한 읽기/쓰기 액세스 권한을 부여합니다.
&emsp;`read:project`| 사용자 및 조직 {% data variables.projects.projects_v2 %}에 대한 읽기 전용 액세스 권한을 부여합니다.{% endif %} **`delete_repo`** | 관리 가능한 리포지토리 삭제에 대한 액세스 권한을 부여합니다.
**`write:discussion`** | 팀 토론에 대한 읽기 및 쓰기 권한을 허용합니다.
&emsp;`read:discussion` | 팀 토론에 대한 읽기 권한을 허용합니다.
**`write:packages`** | {% data variables.product.prodname_registry %}에서 패키지를 업로드하거나 게시할 수 있는 액세스 권한을 부여합니다. 자세한 내용은 “[패치지 게시](/github/managing-packages-with-github-packages/publishing-a-package)”를 참조하세요.
**`read:packages`** | {% data variables.product.prodname_registry %}에서 패키지를 다운로드하거나 설치할 수 있는 액세스 권한을 부여합니다. 자세한 내용은 “[패키지 설치](/github/managing-packages-with-github-packages/installing-a-package)”를 참조하세요.
**`delete:packages`** | {% data variables.product.prodname_registry %}에서 패키지를 삭제할 수 있는 액세스 권한을 부여합니다. 자세한 내용은 “[패키지 삭제 및 복원](/packages/learn-github-packages/deleting-and-restoring-a-package)”을 참조하세요.
**`admin:gpg_key`** | GPG 키를 완전히 관리합니다.
&emsp;`write:gpg_key`| GPG 키에 대한 세부 정보를 만들고 나열하고 봅니다.
&emsp;`read:gpg_key`| GPG 키에 대한 세부 정보를 나열하고 봅니다.{% ifversion fpt or ghec %} **`codespace`** | codespace를 만들고 관리하는 기능을 부여합니다. codespace는 다른 범위 집합이 있을 수 있는 GITHUB_TOKEN을 노출할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}의 보안](/codespaces/codespaces-reference/security-in-github-codespaces#authentication)”을 참조하세요.{% endif %} **`workflow`** | {% data variables.product.prodname_actions %} 워크플로 파일을 추가하고 업데이트하는 기능을 부여합니다. 경로와 내용이 모두 동일한 파일이 동일한 리포지토리의 다른 분기에 있는 경우 이 범위 없이 워크플로 파일을 커밋할 수 있습니다. 워크플로 파일은 다른 범위 집합을 포함할 수 있는 `GITHUB_TOKEN`을 노출할 수 있습니다. 자세한 내용은 “[워크플로의 인증](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)”을 참조하세요.{% ifversion not fpt %} **`admin:enterprise`** | 엔터프라이즈 기능을 완전히 제어할 수 있습니다. 자세한 내용은 GraphQL API 설명서의 “[엔터프라이즈 계정 관리](/graphql/guides/managing-enterprise-accounts)”를 참조하세요.<br><br>`manage_runners:enterprise`{% ifversion ghec or ghes > 3.3 %}, `manage_billing:enterprise`,{% endif %} 및 `read:enterprise` 포함. &emsp;`manage_runners:enterprise` | 엔터프라이즈 내에서 자체 호스팅 실행기를 완전히 제어할 수 있습니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요. {% ifversion ghec or ghes > 3.3 %} &emsp;`manage_billing:enterprise` | 엔터프라이즈 청구 데이터를 읽고 씁니다. 자세한 내용은 REST API 설명서의 “[청구](/rest/billing)”를 참조하세요. {% endif %} &emsp;`read:enterprise` | 엔터프라이즈 프로필의 모든 데이터를 읽습니다. 엔터프라이즈 멤버 또는 조직의 프로필 데이터는 포함하지 않습니다. {% endif %} {% ifversion read-audit-scope %} **`read:audit_log`** | 감사 로그 데이터를 읽습니다. {% endif %} {% note %}

**참고:** OAuth 앱은 초기 리디렉션에서 범위를 요청할 수 있습니다. 다음과 같이 `%20`을 사용하여 여러 범위를 공백으로 구분하여 지정할 수 있습니다.

    https://github.com/login/oauth/authorize?
      client_id=...&
      scope=user%20repo_deployment

{% endnote %}

## 요청된 범위 및 권한 부여된 범위

`scope` 특성에는 사용자가 권한을 부여한 토큰에 연결된 범위가 나열됩니다. 일반적으로 해당 범위는 요청한 범위와 동일합니다.
그러나 사용자는 범위를 편집하여 애플리케이션에 원래 요청한 것보다 적은 액세스 권한을 효과적으로 부여할 수 있습니다. 또한 사용자는 OAuth 흐름이 완료된 후 토큰 범위를 편집할 수 있습니다.
가능성을 인지하고 그에 따라 애플리케이션의 동작을 조정해야 합니다.

사용자가 원래 요청한 것보다 적은 액세스 권한을 부여하는 오류 사례를 처리하는 것이 중요합니다. 예를 들어 애플리케이션은 사용자에게 기능이 축소되거나 일부 작업을 수행할 수 없음을 경고하거나 전달할 수 있습니다.

또한 애플리케이션이 항상 추가 권한을 얻도록 흐름을 통해 사용자를 돌려보낼 수 있지만 사용자는 항상 거절할 수 있다는 것을 잊지 마세요.

수정 가능한 토큰 범위 처리에 대한 팁을 제공하는 [인증의 기본 사항 가이드](/guides/basics-of-authentication/)를 확인하세요.

## 정규화된 범위

여러 범위를 요청할 때 토큰은 정규화된 범위 목록과 함께 저장되어 요청된 다른 범위에 암시적으로 포함된 범위를 삭제합니다. 예를 들어`user,gist,user:email`을 요청하면 `user:email` 범위에서 부여된 액세스가 `user` 범위에 포함되므로 `user` 및 `gist` 범위만 있는 토큰이 생성됩니다.
