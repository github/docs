---
title: 배포 키 관리
intro: 배포 스크립트를 자동화할 때 서버에서 SSH 키를 관리하는 다양한 방법과 가장 적합한 방법을 알아봅니다.
redirect_from:
  - /guides/managing-deploy-keys
  - /v3/guides/managing-deploy-keys
  - /deploy-keys
  - /articles/managing-deploy-keys
  - /multiple-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: d038e6d56395a5a3d414170e431487fc0b80b426
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148094187'
---
SSH 에이전트 전달, OAuth 토큰을 사용하는 HTTPS, 배포 키 또는 컴퓨터 사용자를 사용하여 배포 스크립트를 자동화할 때 서버에서 SSH 키를 관리할 수 있습니다.

## SSH 에이전트 전달

대부분의 경우, 특히 프로젝트의 시작 부분에서 SSH 에이전트 전달은 가장 빠르고 간단한 사용 방법입니다. 에이전트 전달은 로컬 개발 컴퓨터에서 사용하는 것과 동일한 SSH 키를 사용합니다.

#### 장점

* 새 키를 생성하거나 추적할 필요가 없습니다.
* 키 관리가 없습니다. 서버에서 사용자는 로컬에서 수행하는 것과 동일한 권한을 갖습니다.
* 서버에 저장된 키가 없으므로 서버가 손상된 경우 손상된 키를 찾아 제거할 필요가 없습니다.

#### 단점

* 배포하려면 사용자가 SSH에 **있어야 합니다**. 그러지 않으면 자동화된 배포 프로세스를 사용할 수 없습니다.
* SSH 에이전트 전달은 Windows 사용자에 대해 실행하는 데 문제가 될 수 있습니다.

#### 설정

1. 로컬로 에이전트 전달을 켭니다. 자세한 내용은 [SSH 에이전트 전달에 대한 가이드][ssh-agent-forwarding]를 참조하세요.
2. 에이전트 전달을 사용하도록 배포 스크립트를 설정합니다. 예를 들어 bash 스크립트에서 에이전트 전달을 사용하도록 설정하려면 다음과 같이 입력합니다. `ssh -A serverA 'bash -s' < deploy.sh`

## OAuth 토큰을 사용하는 HTTPS 복제

SSH 키를 사용하지 않으려면 OAuth 토큰을 사용하는 HTTPS를 사용할 수 있습니다.

#### 장점

* 서버에 액세스할 수 있는 모든 사용자는 리포지토리를 배포할 수 있습니다.
* 사용자는 로컬 SSH 설정을 변경할 필요가 없습니다.
* 여러 토큰이 필요하지 않습니다(각 사용자에 대해 하나씩만 필요함). 서버당 하나의 토큰으로 충분합니다.
* 토큰은 언제든지 해지하여 기본적으로 일회용 암호로 전환할 수 있습니다.
{% ifversion ghes %}
* [OAuth API](/rest/reference/oauth-authorizations#create-a-new-authorization)를 사용하여 새 토큰 생성을 쉽게 스크립팅할 수 있습니다.
{% endif %}

#### 단점

* 올바른 액세스 범위로 토큰을 구성했는지 확인해야 합니다.
* 토큰은 기본적으로 암호이며 동일한 방식으로 보호되어야 합니다.

#### 설정

[{% 데이터 variables.product.pat_generic %}을(를) 만드는 방법에 대한 가이드](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)를 참조하세요.

## 키 배포

{% data reusables.repositories.deploy-keys %}

{% data reusables.repositories.deploy-keys-write-access %}

#### 장점

* 리포지토리 및 서버에 액세스할 수 있는 모든 사용자가 프로젝트를 배포할 수 있습니다.
* 사용자는 로컬 SSH 설정을 변경할 필요가 없습니다.
* 배포 키는 기본적으로 읽기 전용이지만 리포지토리에 추가할 때 쓰기 권한을 부여할 수 있습니다.

#### 단점

* 배포 키는 단일 리포지토리에 대한 액세스 권한만 부여합니다. 더 복잡한 프로젝트에는 동일한 서버로 풀할 리포지토리가 많을 수 있습니다.
* 배포 키는 일반적으로 암호로 보호되지 않으므로 서버가 손상된 경우 키에 쉽게 액세스할 수 있습니다.

#### 설정

1. 서버에서 [`ssh-keygen` 프로시저를 실행][generating-ssh-keys]하고 생성된 퍼블릭 및 프라이빗 rsa 키 쌍을 저장하는 위치를 기억합니다.
{% data reusables.profile.navigating-to-profile %} 

   ![프로필 탐색](/assets/images/profile-page.png)
1. 프로필 페이지에서 **리포지토리** 를 클릭한 다음 리포지토리의 이름을 클릭합니다. ![리포지토리 링크](/assets/images/repos.png)
2. 리포지토리에서 **설정** 을 클릭합니다. ![리포지토리 설정](/assets/images/repo-settings.png)
3. 사이드바에서 **배포 키** 를 클릭한 다음 **배포 키 추가** 를 클릭합니다. ![키 배포 추가 링크](/assets/images/add-deploy-key.png)
4. 제목을 입력하고 퍼블릭 키를 붙여 넣습니다.  ![배포 키 페이지](/assets/images/deploy-key.png)
5. 이 키가 리포지토리에 대한 쓰기 액세스 권한을 갖도록 하려면 **쓰기 액세스 허용** 을 선택합니다. 쓰기 액세스 권한이 있는 배포 키를 사용하면 배포가 리포지토리로 푸시됩니다.
6. **키 추가** 를 클릭합니다.

#### 서버 하나에서 여러 리포지토리 사용

한 서버에서 여러 리포지토리를 사용하는 경우 각 서버에 대해 전용 키 쌍을 생성해야 합니다. 여러 리포지토리에 대해 배포 키 하나를 다시 사용할 수 없습니다.

서버의 SSH 구성 파일(일반적으로 `~/.ssh/config`)에서 각 리포지토리에 대한 별칭 항목을 추가합니다. 예를 들면 다음과 같습니다.

```bash
Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-0_deploy_key

Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1
        Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}
        IdentityFile=/home/user/.ssh/repo-1_deploy_key
```

* `Host {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-0` - 리포지토리의 별칭
* `Hostname {% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}` - 별칭과 함께 사용할 호스트 이름을 구성합니다.
* `IdentityFile=/home/user/.ssh/repo-0_deploy_key` - 별칭에 프라이빗 키를 할당합니다.

그런 다음 호스트 이름의 별칭을 사용하여 해당 별칭에 할당된 고유 배포 키를 사용하는 SSH를 사용하여 리포지토리와 상호 작용할 수 있습니다. 예를 들면 다음과 같습니다.

```bash
$ git clone git@{% ifversion fpt or ghec %}github.com{% else %}my-GHE-hostname.com{% endif %}-repo-1:OWNER/repo-1.git
```

## GitHub 서버 간 토큰

서버가 하나 이상의 조직 간에 리포지토리에 액세스해야 하는 경우 GitHub 앱을 사용하여 필요한 액세스를 정의한 다음 해당 GitHub 앱에서 _범위가 엄격하게 지정된_ _서버 간_ 토큰을 생성할 수 있습니다. 서버-서버 토큰은 범위를 단일 또는 여러 리포지토리로 지정할 수 있으며 세분화된 권한을 가질 수 있습니다. 예를 들어 리포지토리의 콘텐츠에 대한 읽기 전용 액세스 권한을 가진 토큰을 생성할 수 있습니다.

GitHub 앱은 {% data variables.product.product_name %}에서 첫 번째 클래스 작업자이므로 서버 간 토큰은 모든 GitHub 사용자와 분리되어 “서비스 토큰”과 비슷합니다. 또한 서버-서버 토큰에는 작업하는 조직의 크기에 따라 크기가 스케일링되는 전용 속도 제한이 있습니다. 자세한 내용은 [{% data variables.product.prodname_github_apps %}의 속도 제한](/developers/apps/rate-limits-for-github-apps)을 참조하세요.

#### 장점

- 잘 정의된 권한 집합 및 만료 시간(API를 사용하여 수동으로 해지된 경우 1시간 이하)이 있는, 범위가 엄격하게 지정된 토큰
- 조직에 따라 증가하는 전용 속도 제한
- GitHub 사용자에게서 분리되어 GitHub 사용자가 라이선스가 부여된 사용자를 더 이상 사용하지 않음
- 암호를 부여하지 않으므로 직접 로그인할 수 없음

#### 단점

- GitHub 앱을 만들려면 추가 설정이 필요함
- 서버-서버 토큰은 1시간 후에 만료되므로 일반적으로 코드를 사용하여 주문형으로 다시 생성해야 함

#### 설정

1. GitHub 앱이 퍼블릭 또는 프라이빗이어야 하는지 확인합니다. GitHub 앱이 조직 내의 리포지토리에서만 작동하는 경우 비공개로 사용할 수 있습니다.
1. GitHub 앱에 필요한 권한(예: 리포지토리 콘텐츠에 대한 읽기 전용 액세스 권한)을 결정합니다.
1. 조직의 설정 페이지를 통해 GitHub 앱을 만듭니다. 자세한 내용은 [OAuth 앱 만들기](/developers/apps/creating-a-github-app)를 참조하세요.
1. GitHub 앱 `id`를 기록해 둡니다.
1. GitHub 앱의 프라이빗 키를 생성 및 다운로드하고 안전하게 저장합니다. 자세한 내용은 [프라이빗 키 생성](/developers/apps/authenticating-with-github-apps#generating-a-private-key)을 참조하세요.
1. 작업이 필요한 리포지토리에 GitHub 앱을 설치합니다. 필요에 따라 조직의 모든 리포지토리에 GitHub 앱을 설치할 수 있습니다.
1. GitHub 앱과 액세스할 수 있는 조직 리포지토리 간의 연결을 나타내는 `installation_id`를 식별합니다.  각 GitHub 앱 및 조직 쌍에는 최대 하나의 `installation_id`가 있습니다. [인증된 앱에 대한 조직 설치 가져오기](/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app)를 통해 `installation_id`를 식별할 수 있습니다. 이를 위해서는 JWT를 사용하여 GitHub 앱으로 인증해야 합니다. 자세한 내용은 [GitHub 앱으로 인증](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app)을 참조하세요.
1. 해당 REST API 엔드포인트를 사용하여 서버 간 토큰을 생성하고, [앱에 대한 설치 액세스 토큰을 만듭니다](/rest/reference/apps#create-an-installation-access-token-for-an-app). 이를 위해서는 JWT를 사용하여 GitHub 앱으로 인증해야 합니다. 자세한 내용은 [GitHub 앱으로 인증](/developers/apps/authenticating-with-github-apps#authenticating-as-a-github-app) 및 [설치로 인증](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)을 참조하세요.
1. 이 서버-서버 토큰을 사용하여 REST 또는 GraphQL API를 통해 아니면 Git 클라이언트를 통해 리포지토리와 상호 작용합니다.

## 컴퓨터 사용자

서버가 여러 리포지토리에 액세스해야 하는 경우 {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에 새 계정을 만들고 자동화에만 사용되는 SSH 키를 연결할 수 있습니다. {% ifversion ghae %}{% 데이터 variables.product.product_name %}{% else %}{% 데이터 variables.location.product_location %}{% endif %}에 대한 이 계정은 사람이 사용하지 않으므로 _컴퓨터 사용자_ 라고 합니다. 컴퓨터 사용자는 개인 리포지토리에서 [협력자][collaborator]로(읽기 및 쓰기 액세스 권한 부여), 조직 리포지토리에서 [외부 협력자][outside-collaborator]로(읽기, 쓰기 또는 관리자 액세스 권한 부여) 또는 자동화해야 하는 리포지토리에 대한 액세스 권한이 있는 [팀][team]에 추가할 수 있습니다(팀의 사용 권한 부여).

{% ifversion fpt or ghec %}

{% tip %}

**팁:** [서비스 약관][tos] 상태:

> *"봇" 또는 기타 자동화된 메서드가 등록한 계정은 허용되지 않습니다.*

즉, 계정 생성은 자동화할 수 없습니다. 그러나 프로젝트 또는 조직에 스크립트 배포와 같은 작업을 자동화하기 위한 단일 컴퓨터 사용자를 만들려는 경우에는 아주 유용합니다.

{% endtip %}

{% endif %}

#### 장점

* 리포지토리 및 서버에 액세스할 수 있는 모든 사용자가 프로젝트를 배포할 수 있습니다.
* 사람이 아닌 사용자가 로컬 SSH 설정을 변경할 필요가 없습니다.
* 여러 키가 필요하지 않고 서버당 1개가 적절합니다.

#### 단점

* 조직만 컴퓨터 사용자를 읽기 전용 액세스로 제한할 수 있습니다. 개인 리포지토리는 항상 공동 협력자에게 읽기/쓰기 권한을 부여합니다.
* 배포 키와 같은 컴퓨터 사용자 키는 일반적으로 암호로 보호되지 않습니다.

#### 설정

1. 서버에서 [`ssh-keygen` 프로시저][generating-ssh-keys]를 실행하고 퍼블릭 키를 컴퓨터 사용자 계정에 연결합니다.
2. 컴퓨터 사용자 계정에 자동화하려는 리포지토리에 대한 액세스 권한을 부여합니다. 조직에서 계정을 [협력자][collaborator], [외부 협력자][outside-collaborator] 또는 [팀][team]으로 추가하여 이러한 액세스 권한을 부여할 수 있습니다.

[ssh-agent-forwarding]: /guides/using-ssh-agent-forwarding/
[generating-ssh-keys]: /articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#generating-a-new-ssh-key
[tos]: /free-pro-team@latest/github/site-policy/github-terms-of-service/
[git-automation]: /articles/git-automation-with-oauth-tokens
[collaborator]: /articles/inviting-collaborators-to-a-personal-repository
[outside-collaborator]: /articles/adding-outside-collaborators-to-repositories-in-your-organization
[team]: /articles/adding-organization-members-to-a-team

## 추가 참고 자료
- [알림 구성](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
