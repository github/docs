---
title: 자체 호스팅 실행기 정보
intro: '자체 실행기를 호스트하고 {% data variables.product.prodname_actions %} 워크플로에서 작업을 실행하는 데 사용되는 환경을 사용자 지정할 수 있습니다.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
ms.openlocfilehash: b570dbe3a5df607f0b02e0c7a42a6a7cfb860c80
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107567'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 자체 호스팅 실행기 정보

자체 호스팅 실행기는 {% ifversion ghae or ghec %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}의 {% data variables.product.prodname_actions %}에서 작업을 배포하고 실행하기 위해 관리하는 시스템입니다. {% data variables.product.prodname_actions %}에 대한 자세한 정보는 “[{% data variables.product.prodname_actions %} 이해](/actions/learn-github-actions/understanding-github-actions){% ifversion fpt %}”를 참조하세요.“{% elsif ghec or ghes or ghae %}” 및 “[엔터프라이즈용 {% data variables.product.prodname_actions %} 정보](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)”를 참조하세요.{% endif %}

{% data reusables.actions.self-hosted-runner-description %} {% data reusables.actions.self-hosted-runner-locations %}

관리 계층의 다양한 수준에서 자체 호스팅 실행기를 추가할 수 있습니다.
- 리포지토리 수준 실행기는 단일 리포지토리 전용입니다.
- 조직 수준 실행기는 조직의 여러 리포지토리에 대한 작업을 처리할 수 있습니다.
- 엔터프라이즈 수준 실행기는 엔터프라이즈 계정의 여러 조직에 할당할 수 있습니다.

{% data reusables.actions.self-hosted-runner-architecture %} {% data reusables.actions.runner-app-open-source %}새 버전이 릴리스되면 실행기 애플리케이션은 실행기에 작업이 할당될 때 또는 실행기에서 작업이 할당되지 않은 경우 릴리스 1주일 이내에 자동으로 업데이트됩니다.

{% ifversion ghes %} {% note %}

**참고:** {% data reusables.actions.upgrade-runners-before-upgrade-ghes %}

{% endnote %} {% endif %}

{% data reusables.actions.self-hosted-runner-auto-removal %}

자체 호스팅 실행기를 설치하고 사용하는 방법에 대한 자세한 내용은 “[자체 호스팅 실행기 추가](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)” 및 “[워크플로에서 자체 호스팅 실행기 사용](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)”을 참조하세요.

## {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %}에서 호스트된 실행기 및 {% elsif ghae %}{% endif %}자체 호스팅 실행기의 차이점

{% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dotcom %}에서 호스트된 실행기는 워크플로를 더 빠르고 간단하게 실행할 수 있는 방법을 제공하지만 자체 호스팅{% elsif ghae %}자체 호스팅{% endif %} 실행기는 사용자 지정 환경에서 워크플로를 실행할 수 있는 매우 구성 가능한 방법입니다. {% ifversion ghae %}자체 호스팅 실행기:{% endif %}

{% ifversion fpt or ghec or ghes %} **{% data variables.product.prodname_dotcom %}에서 호스트된 실행기:**
- 운영 체제, 사전 설치된 패키지 및 도구, 자체 호스팅 실행기 응용 프로그램에 대한 자동 업데이트를 받습니다.
- {% data variables.product.prodname_dotcom %}에 의해 관리되고 유지됩니다.
- 모든 작업 실행에 대한 클린 인스턴스를 제공합니다.
- {% data variables.product.prodname_dotcom %} 플랜에서 무료 분을 사용하고, 무료 분을 초과한 후 분당 요금이 적용됩니다.

**자체 호스팅 실행기:** {% endif %}
- 자체 호스팅 실행기 애플리케이션에 대한 자동 업데이트만 수신{% ifversion fpt or ghec or ghes > 3.4 또는 ghae %}, 실행기의 자동 업데이트를 사용하지 않도록 설정할 수 있습니다. 자체 호스팅 실행기에서 실행기 소프트웨어 업데이트를 제어하는 방법에 대한 자세한 내용은 “[자체 호스팅 실행기를 사용하여 자동 스케일링](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners#controlling-runner-software-updates-on-self-hosted-runners)”을 참조하세요.{% else %}.{% endif %} 운영 체제 및 기타 모든 소프트웨어를 업데이트할 책임은 사용자에게 있습니다.
- 이미 지불한 클라우드 서비스 또는 로컬 컴퓨터를 사용할 수 있습니다.
- 하드웨어, 운영 체제, 소프트웨어, 보안 요구 사항에 맞게 사용자 지정할 수 있습니다.
- 모든 작업 실행에 대한 클린 인스턴스가 필요하지 않습니다.
- {% data variables.product.prodname_actions %}를 무료로 사용할 수 있지만 실행기 컴퓨터를 유지 관리하는 데 드는 비용은 부담해야 합니다.{% ifversion ghec or ghes or ghae %}
- 그룹으로 구성하여 특정 {% ifversion restrict-groups-to-workflows %}워크플로, {% endif %}조직, 리포지토리에 대한 액세스를 제한할 수 있습니다. 자세한 내용은 “[그룹을 사용하여 자체 호스팅 실행기에 대한 액세스 관리](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”를 참조하세요.{% endif %}

## 자체 호스팅 실행기 컴퓨터에 대한 요구 사항

다음 요구 사항을 충족하는 한 모든 컴퓨터를 자체 호스팅 실행기로 사용할 수 있습니다.

* 컴퓨터에 자체 호스팅 실행기 애플리케이션을 설치하고 실행할 수 있습니다. 자세한 내용은 “[자체 호스팅 실행기에 대해 지원되는 아키텍처 및 운영 체제](#supported-architectures-and-operating-systems-for-self-hosted-runners)”를 참조하세요.
* 컴퓨터는 {% data variables.product.prodname_actions %}와 통신할 수 있습니다. 자세한 내용은 “[자체 호스팅 실행기와 {% data variables.product.product_name %} 간의 통신](#communication-requirements)”을 참조하세요.
* 머신에는 실행하려는 워크플로 유형에 대한 충분한 하드웨어 리소스가 있습니다. 자체 호스팅 실행기 애플리케이션 자체에는 최소한의 리소스만 필요합니다.
* Docker 컨테이너 작업 또는 서비스 컨테이너를 사용하는 워크플로를 실행하려면 Linux 컴퓨터를 사용해야 하며 Docker를 설치해야 합니다.

## 자체 호스팅 실행기 자동 스케일링

수신하는 웹후크 이벤트에 대한 응답으로 환경에서 자체 호스팅 실행기 수를 자동으로 늘리거나 줄일 수 있습니다. 자세한 내용은 “[자체 호스팅 실행기 자동 스케일링](/actions/hosting-your-own-runners/autoscaling-with-self-hosted-runners)”을 참조하세요.

## 사용 제한

자체 호스팅 실행기를 사용할 때 {% data variables.product.prodname_actions %} 사용에는 몇 가지 제한이 있습니다. 한도는 변경될 수 있습니다.

{% data reusables.actions.usage-workflow-run-time %}
- **작업 큐 시간** - 자체 호스팅 실행기의 각 작업은 최대 24시간 동안 큐에 대기할 수 있습니다. 자체 호스팅 실행기에서 이 시간 내에서 작업 실행을 시작하지 않으면 작업이 종료되고 완료되지 않습니다.
{% data reusables.actions.usage-api-requests %}
- **작업 매트릭스** - {% data reusables.actions.usage-matrix-limits %} {% data reusables.actions.usage-workflow-queue-limits %}

## 자체 호스팅 실행기의 워크플로 연속성

{% data reusables.actions.runner-workflow-continuity %}

## 자체 호스팅 실행기에 대해 지원되는 아키텍처 및 운영 체제

다음 운영 체제는 자체 호스팅 실행기 애플리케이션에 대해 지원됩니다.

### Linux

- Red Hat Enterprise Linux 7 이상
- CentOS 7 이상
- Oracle Linux 7
- Fedora 29 이상
- Debian 9 이상
- Ubuntu 16.04 이상
- Linux Mint 18 이상
- openSUSE 15 이상
- SLES(SUSE Enterprise Linux) 12 SP2 이상

### Windows

- Windows 7 64비트
- Windows 8.1 64비트
- Windows 10 64비트
- Windows Server 2012 R2 64비트
- Windows Server 2019 64비트

### macOS

- macOS 10.13(High Sierra) 이상

### 아키텍처

다음 프로세서 아키텍처는 자체 호스팅 실행기 애플리케이션에 대해 지원됩니다.

- `x64` - Linux, macOS, Windows.
- `ARM64` - Linux{% ifversion actions-macos-arm %}, macOS{% endif %}{% ifversion actions-windows-arm %}, Windows(현재 베타){% endif %}.
- `ARM32` -리눅스.

{% ifversion ghes %}

## 자체 호스팅 실행기에서 지원되는 작업

{% data variables.product.prodname_dotcom_the_website %}에서 {% data variables.product.prodname_ghe_server %}의 작업을 사용하거나 인터넷에 액세스할 수 없는 자체 호스팅 실행기에서 `actions/setup-LANGUAGE` 작업을 사용하려면 몇 가지 추가 구성이 필요할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom_the_website %}에서 작업에 대한 액세스 관리](/enterprise/admin/github-actions/managing-access-to-actions-from-githubcom)”를 참조하고 {% data variables.product.prodname_enterprise %} 사이트 관리자에게 문의하세요.

{% endif %}

<a name="communication-requirements"></a>

## 자체 호스팅 실행기와 {% data variables.product.product_name %} 간의 통신

자체 호스팅 실행기는 {% data variables.product.product_name %}에 연결하여 작업 할당을 받고 새 버전의 실행기 애플리케이션을 다운로드합니다. 자체 호스팅 실행기는 {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %} 긴 폴을 사용하여 50초 동안 {% data variables.product.product_name %}에 대한 연결을 열고 응답이 수신되지 않으면 시간이 초과되고 새 롱 폴을 만듭니다. {% data variables.product.prodname_actions %} 작업을 수락하고 실행하려면 애플리케이션이 컴퓨터에서 실행되고 있어야 합니다.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

{% ifversion fpt or ghec %} 자체 호스팅 실행기가 {% data variables.location.product_location %}에 대한 연결을 열기 때문에 {% data variables.product.prodname_dotcom %}이(가) 자체 호스팅 실행기에 인바운드 연결을 만들도록 허용할 필요가 없습니다.
{% elsif ghes or ghae %} 실행기에서 {% data variables.location.product_location %}로의 아웃바운드 연결만 필요합니다. {% data variables.location.product_location %}에서 실행기로의 인바운드 연결은 필요하지 않습니다.
{%- endif %}

{% ifversion ghes %}

{% data variables.product.product_name %}는 {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %}의 {% data variables.location.product_location %}의 호스트 이름 및 API 하위 도메인을 통해 실행기에서 인바운드 연결을 수락해야 합니다. 실행기는 {% ifversion ghes %}HTTP(S){% else %}HTTPS{% endif %}에서 {% data variables.location.product_location %}의 호스트 이름 및 API 하위 도메인에 대한 아웃바운드 연결을 허용해야 합니다.

{% elsif ghae %}

자체 호스팅 실행기에 {% data variables.product.product_name %} URL 및 해당 하위 도메인과 통신할 수 있는 적절한 네트워크 액세스 권한이 있는지 확인해야 합니다. 예를 들어 {% data variables.product.product_name %}에 대한 하위 도메인이 `octoghae`인 경우 자체 호스팅 실행기에서 `octoghae.githubenterprise.com`, `api.octoghae.githubenterprise.com` 및 `codeload.octoghae.githubenterprise.com`에 액세스할 수 있도록 허용해야 합니다.

IP 주소 허용 목록을 사용하는 경우 자체 호스팅 실행기 IP 주소를 허용 목록에 추가해야 합니다. 자세한 내용은 “[조직에 허용된 IP 주소 관리](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)”를 참조하세요.

{% endif %}

{% ifversion fpt or ghec %}

컴퓨터에 아래 나열된 {% data variables.product.prodname_dotcom %} 호스트와 통신할 수 있는 적절한 네트워크 액세스 권한이 있는지 확인해야 합니다. 일부 호스트는 필수 실행기 작업에 필요하지만 다른 호스트는 특정 기능에만 필요합니다.

{% note %}

**참고:** 아래에 나열된 도메인 중 일부는 `CNAME` 레코드를 사용하여 구성됩니다. 일부 방화벽에서는 모든 `CNAME` 레코드에 대해 규칙을 재귀적으로 추가해야 할 수 있습니다. `CNAME` 레코드는 나중에 변경될 수 있으며 아래에 나열된 도메인만 일정하게 유지됩니다.

{% endnote %}

**다음은 필수 작업에 필요합니다.**

```
github.com
api.github.com
```

**다음은 작업을 다운로드하는 데 필요합니다.**

```
codeload.github.com
```

**다음은 실행기 버전 업데이트에 필요합니다.**

```
objects.githubusercontent.com
objects-origin.githubusercontent.com
github-releases.githubusercontent.com
github-registry-files.githubusercontent.com
```

**다음은 캐시 및 워크플로 아티팩트 업로드/다운로드에 필요합니다.**    

```
*.blob.core.windows.net
```

**다음은 OIDC 토큰을 검색하는 데 필요합니다.**

```
*.actions.githubusercontent.com
```

**패키지 또는 컨테이너를 {% data variables.product.prodname_dotcom %} 패키지에 다운로드하거나 게시하는 데 필요합니다.**

```
*.pkg.github.com
ghcr.io
```

또한 워크플로에서 다른 네트워크 리소스에 액세스해야 할 수도 있습니다.

{% data variables.product.prodname_dotcom %} 조직 또는 엔터프라이즈 계정에 IP 주소 허용 목록을 사용하는 경우 자체 호스팅 실행기의 IP 주소를 허용 목록에 추가해야 합니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 “[조직에 허용된 IP 주소 관리](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)” 또는 “[엔터프라이즈의 보안 설정에 대한 정책 적용](/{% ifversion fpt %}enterprise-cloud@latest/{% endif %}admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise){% ifversion fpt %}”을 참조하세요.{% else %}.”{% endif %}

{% else %}

{% ifversion ghes %}자체 호스팅 실행기는 작동하기 위해 외부 인터넷 액세스가 필요하지 않습니다. 따라서 네트워크 라우팅을 사용하여 자체 호스팅 실행기와 {% data variables.location.product_location %} 간의 직접 통신을 수행할 수 있습니다. 예를 들어 자체 호스팅 실행기에 개인 IP 주소를 할당하고 트래픽이 공용 네트워크를 트래버스할 필요 없이 {% data variables.location.product_location %}에 트래픽을 보내도록 라우팅을 구성할 수 있습니다. {% endif %}

{% endif %}

{% ifversion ghae %} {% data variables.product.prodname_dotcom %} 조직 또는 엔터프라이즈 계정에 IP 주소 허용 목록을 사용하는 경우 자체 호스팅 실행기의 IP 주소를 허용 목록에 추가해야 합니다. 자세한 내용은 “[조직에 허용된 IP 주소 관리](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)”를 참조하세요.
{% endif %}

프록시 서버에서 자체 호스팅 실행기를 사용할 수도 있습니다. 자세한 내용은 “[자체 호스팅 실행기에서 프록시 서버 사용](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)”을 참조하세요.

일반적인 네트워크 연결 문제 해결에 대한 자세한 내용은 “[자체 호스팅 실행기 모니터링 및 문제 해결](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#troubleshooting-network-connectivity)”을 참조하세요.

{% ifversion ghes or ghae %}

## 자체 호스팅 실행기와 {% data variables.product.prodname_dotcom_the_website %} 간의 통신

{% data variables.location.product_location %}에 대한 {% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스를 사용하도록 설정하지 않은 한 자체 호스팅 실행기는 {% data variables.product.prodname_dotcom_the_website %}에 연결할 필요가 없습니다. 자세한 내용은 “[엔터프라이즈에서의 작업 사용 정보](/admin/github-actions/managing-access-to-actions-from-githubcom/about-using-actions-in-your-enterprise)”를 참조하세요.

{% data variables.product.prodname_dotcom_the_website %} 작업에 대한 자동 액세스를 사용하도록 설정한 경우 자체 호스팅 실행기는 {% data variables.product.prodname_dotcom_the_website %}에 직접 연결하여 작업을 다운로드합니다. 컴퓨터에 아래 나열된 {% data variables.product.prodname_dotcom %} URL과 통신할 수 있는 적절한 네트워크 액세스 권한이 있는지 확인해야 합니다. 

```
github.com
api.github.com
codeload.github.com
```

{% note %}

**참고:** 위에 나열된 도메인 중 일부는 `CNAME` 레코드를 사용하여 구성됩니다. 일부 방화벽에서는 모든 `CNAME` 레코드에 대해 규칙을 재귀적으로 추가해야 할 수 있습니다. `CNAME` 레코드는 나중에 변경될 수 있으며 위에 나열된 도메인만 일정하게 유지됩니다.

{% endnote %}

{% endif %}

## 자체 호스팅 실행기 보안

{% ifversion fpt or ghec %}

{% data reusables.actions.self-hosted-runner-security %}

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %}에서 호스트되는 각 실행기는 항상 격리된 깨끗한 가상 머신이며 작업 실행이 끝날 때 삭제되므로 {% data variables.product.prodname_dotcom %}에서 호스트되는 실행기에는 문제가 없습니다.

{% endif %}

자체 호스팅 실행기에서 실행되는 신뢰할 수 없는 워크플로는 특히 컴퓨터가 작업 간에 환경을 유지하는 경우 컴퓨터 및 네트워크 환경에 상당한 보안 위험을 초래합니다. 몇 가지 위험은 다음과 같습니다.

* 컴퓨터에서 실행되는 악성 프로그램
* 머신의 실행기 샌드박스를 이스케이프
* 컴퓨터의 네트워크 환경에 대한 액세스 노출
* 머신에서 원치 않거나 위험한 데이터를 유지

자체 호스팅 실행기의 보안 강화에 대한 자세한 내용은 “[{% data variables.product.prodname_actions %}의 보안 강화](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)”를 참조하세요.

{% ifversion ghec or ghes or ghae %}

## 추가 참고 자료

- “[엔터프라이즈의 자체 호스팅 실행기 시작](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)”

{% endif %}
