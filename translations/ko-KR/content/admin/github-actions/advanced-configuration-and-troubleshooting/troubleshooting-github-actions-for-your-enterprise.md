---
title: 엔터프라이즈의 GitHub Actions 문제 해결
intro: '{% data variables.product.prodname_ghe_server %}에서 {% data variables.product.prodname_actions %}를 사용할 때 발생하는 일반적인 문제를 해결합니다.'
permissions: 'Site administrators can troubleshoot {% data variables.product.prodname_actions %} issues and modify {% data variables.product.prodname_ghe_server %} configurations.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Troubleshooting
redirect_from:
  - /admin/github-actions/troubleshooting-github-actions-for-your-enterprise
shortTitle: Troubleshoot GitHub Actions
ms.openlocfilehash: a0965405e8e37bd75a245738d8d20c91f11ce254
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107303'
---
## {% data variables.product.prodname_actions %} 상태 검사

명령줄 유틸리티를 사용하여 {% data variables.location.product_location %}에서 {% data variables.product.prodname_actions %} `ghe-actions-check` 의 상태를 확인할 수 있습니다. 자세한 내용은 “[명령줄 유틸리티](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-actions-check)” 및 “[관리 셸(SSH) 액세스](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)”를 참조하세요.

## {% data variables.product.prodname_ghe_server %}에 자체 서명된 인증서를 사용하는 경우 자체 호스팅 실행기 구성

{% data reusables.actions.enterprise-self-signed-cert %} 자세한 내용은 “[TLS 구성](/admin/configuration/configuring-tls)”을 참조하세요.

### 실행기 머신에 인증서 설치

자체 호스팅 실행기에서 자체 서명된 인증서를 사용하여 {% data variables.product.prodname_ghe_server %}에 연결하려면 연결 보안이 강화되도록 실행기 머신에 인증서를 설치해야 합니다.

인증서를 설치하는 데 필요한 단계는 실행기 운영 체제 설명서를 참조하세요.

### 인증서를 사용하도록 Node.JS 구성

대부분의 작업은 JavaScript로 작성되며, 운영 체제 인증서 저장소를 사용하지 않는 Node.js를 사용하여 실행됩니다. 자체 호스팅 실행기 애플리케이션에서 인증서를 사용하려면 실행기 머신에서 `NODE_EXTRA_CA_CERTS` 환경 변수를 설정해야 합니다.

환경 변수를 시스템 환경 변수로 설정하거나, 자체 호스팅 실행기 애플리케이션 디렉터리의 _.env_ 파일에서 선언할 수 있습니다.

예를 들면 다음과 같습니다.

```shell
NODE_EXTRA_CA_CERTS=/usr/share/ca-certificates/extra/mycertfile.crt
```

자체 호스팅 실행기 애플리케이션이 시작될 때 환경 변수를 읽으므로 자체 호스팅 실행기 애플리케이션을 구성하거나 시작하기 전에 환경 변수를 설정해야 합니다. 인증서 구성이 변경되면 자체 호스팅 실행기 애플리케이션을 다시 시작해야 합니다.

### 인증서를 사용하도록 Docker 컨테이너 구성

워크플로에서 Docker 컨테이너 작업 또는 서비스 컨테이너를 사용하는 경우 위 환경 변수를 설정하는 것 외에도 Docker 이미지에 인증서를 설치해야 할 수 있습니다.

## {% data variables.product.prodname_actions %}의 HTTP 프록시 설정 구성

{% data reusables.actions.enterprise-http-proxy %}

이 설정을 올바르게 구성하지 않은 경우 {% data variables.product.prodname_actions %} 구성을 설정하거나 변경할 때 `Resource unexpectedly moved to https://<IP_ADDRESS>`와 같은 오류가 표시될 수 있습니다.

## 실행기가 새 호스트 이름을 사용하는 {% data variables.product.prodname_ghe_server %}에 연결하지 않음

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

새 호스트 이름을 사용하여 {% data variables.product.prodname_ghe_server %}를 환경에 배포하고 이전 호스트 이름이 더 이상 해당 인스턴스로 확인되지 않는 경우 자체 호스팅 실행기가 이전 호스트 이름에 연결할 수 없으며 작업을 실행하지 않습니다.

{% data variables.location.product_location %}의 새 호스트 이름을 사용하려면 자체 호스팅 실행기의 구성을 업데이트해야 합니다. 각 자체 호스팅 실행기에서 다음 절차 중 하나를 수행해야 합니다.

* 자체 호스팅 실행기 애플리케이션 디렉터리에서 `.runner` 및 `.credentials` 파일을 편집하여 이전 호스트 이름의 모든 멘션을 새 호스트 이름으로 바꾼 다음, 자체 호스팅 실행기 애플리케이션을 다시 시작합니다.
* UI를 사용하여 {% data variables.product.prodname_ghe_server %}에서 실행기를 제거했다가 다시 추가합니다. 자세한 내용은 “[자체 호스팅 실행기 제거](/actions/hosting-your-own-runners/removing-self-hosted-runners)” 및 “[자체 호스팅 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.

## 중단된 작업과 {% data variables.product.prodname_actions %} 메모리 및 CPU 한도

{% data variables.product.prodname_actions %}은(는) {% data variables.location.product_location %}에서 실행되는 여러 서비스로 구성됩니다. 기본적으로 이 서비스는 대부분의 인스턴스에서 적용 가능한 기본 CPU 및 메모리 한도를 사용하여 설정됩니다. 그러나 {% data variables.product.prodname_actions %}를 많이 사용하는 경우 설정을 조정해야 할 수 있습니다.

유휴 실행기가 있는데도 작업이 시작되지 않거나 UI에서 작업 진행률이 업데이트 또는 변경되지 않는 경우 CPU 또는 메모리 한도에 도달한 것일 수 있습니다.

### 1. 관리 콘솔에서 전체 CPU 및 메모리 사용량 확인

관리 콘솔에 액세스하고 모니터 대시보드를 사용하여 “시스템 상태” 아래에 있는 전체 CPU 및 메모리 그래프를 검사합니다. 자세한 내용은 “[모니터 대시보드 액세스](/admin/enterprise-management/accessing-the-monitor-dashboard)”를 참조하세요.

전체 "시스템 상태" CPU 사용량이 100%에 가까울 경우 또는 여유 메모리가 남아 있지 않으면 {% data variables.location.product_location %}이(가) 용량에서 실행 중이며 스케일 업해야 합니다. 자세한 내용은 “[CPU 또는 메모리 리소스 증가](/admin/enterprise-management/increasing-cpu-or-memory-resources)”를 참조하세요.

### 2. 관리 콘솔에서 Nomad 작업 CPU 및 메모리 사용량 확인

전체 “시스템 상태” CPU 및 메모리 사용량이 정상인 경우 모니터 대시보드 페이지에서 “Nomad 작업” 섹션까지 아래로 스크롤하고 “CPU 백분율 값” 및 “메모리 사용량” 그래프를 확인합니다.

그래프의 각 플롯은 하나의 서비스에 해당합니다. {% data variables.product.prodname_actions %} 서비스의 경우 다음을 찾습니다.

* `mps_frontend`
* `mps_backend`
* `token_frontend`
* `token_backend`
* `actions_frontend`
* `actions_backend`

CPU 사용률이 100%에 도달했거나 근접한 서비스가 있는 경우 또는 메모리가 한도(기본값은 2GB)에 근접한 경우 서비스에 대한 리소스 할당을 늘려야 할 수 있습니다. 위 서비스 중에서 한도에 도달했거나 근접한 서비스를 기록해 둡니다.

### 3. 한도에 도달한 서비스에 대한 리소스 할당 증가

1. SSH를 사용하여 관리 셸에 로그인합니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/accessing-the-administrative-shell-ssh)”를 참조하세요.
1. 다음 명령을 실행하여 할당할 수 있는 리소스를 확인합니다.

   ```shell
   nomad node status -self
   ```

   출력에서 “할당된 리소스” 섹션을 찾습니다. 다음 예제와 같이 표시됩니다.

   ```
   Allocated Resources
   CPU              Memory          Disk
   7740/49600 MHZ   23 GiB/32 GiB   4.4 GiB/7.9 GiB
   ```

   CPU 및 메모리의 경우 **모든** 서비스의 **총계** 에 할당된 양(왼쪽 값) 및 사용 가능한 양(오른쪽 값)이 표시됩니다. 위 예제에서는 총 32GiB 중에서 23GiB의 메모리가 할당되었습니다. 따라서 할당할 수 있는 메모리는 9GiB입니다.

   {% warning %}

   **경고:** 사용 가능한 총 리소스보다 많이 할당하지 않도록 주의해야 합니다. 그렇지 않으면 서비스가 시작되지 않습니다.

   {% endwarning %}
1. 디렉터리를 `/etc/consul-templates/etc/nomad-jobs/actions`로 변경합니다.

   ```shell
   cd /etc/consul-templates/etc/nomad-jobs/actions
   ```

   이 디렉터리에는 위의 {% data variables.product.prodname_actions %} 서비스에 해당하는 파일 3개가 들어 있습니다.

   * `mps.hcl.ctmpl`
   * `token.hcl.ctmpl`
   * `actions.hcl.ctmpl`
1. 조정이 필요하다고 판단한 서비스의 경우 해당 파일을 열고 다음과 같은 `resources` 그룹을 찾습니다.

   ```
   resources {
     cpu = 512
     memory = 2048
     network {
       port "http" { }
     }
   }
   ```

   값은 CPU 리소스의 경우 MHz, 메모리 리소스의 경우 MB 단위로 표시됩니다.

   예를 들어 위 예제의 리소스 한도를 1GHz CPU, 4GB 메모리로 늘리려면 다음과 같이 변경합니다.

   ```
   resources {
     cpu = 1024
     memory = 4096
     network {
       port "http" { }
     }
   }
   ```
1. 파일을 저장하고 종료합니다.
1. `ghe-config-apply`를 실행하여 변경 내용을 적용합니다.

    `ghe-config-apply`를 실행할 때 `Failed to run nomad job '/etc/nomad-jobs/<name>.hcl'`과 같은 출력이 표시되는 경우 변경 내용이 CPU 또는 메모리 리소스를 과도하게 할당하는 것일 수 있습니다. 이 경우 구성 파일을 다시 편집하여 할당된 CPU 또는 메모리를 줄인 다음, `ghe-config-apply`를 다시 실행합니다.
1. 구성을 적용한 후 `ghe-actions-check`를 실행하여 {% data variables.product.prodname_actions %} 서비스가 작동하는지 확인합니다.

{% ifversion fpt or ghec or ghes %}
## {% data variables.product.prodname_dependabot %}이 기존 워크플로를 트리거할 때 발생하는 오류 문제 해결

{% data reusables.dependabot.beta-security-and-version-updates %}

{% data variables.location.product_location %}에 대한 {% data variables.product.prodname_dependabot %} 업데이트를 설정한 후 {% data variables.product.prodname_dependabot %} 이벤트에 의해 기존 워크플로가 트리거될 때 오류가 표시될 수 있습니다.

기본적으로 {% data variables.product.prodname_dependabot %}의 `push`, `pull_request`, `pull_request_review` 또는 `pull_request_review_comment` 이벤트에서 트리거된 {% data variables.product.prodname_actions %} 워크플로 실행은 리포지토리 포크에서 열린 것처럼 처리됩니다. 이 경우 다른 작업자에서 트리거된 워크플로와 달리, 읽기 전용 `GITHUB_TOKEN`을 받게 되며 일반적으로 사용할 수 있는 비밀에 액세스할 수 없습니다. 따라서 리포지토리에 쓰려는 워크플로가 {% data variables.product.prodname_dependabot %}에서 트리거된 경우 실패합니다.

문제를 해결하는 방법에는 다음 세 가지가 있습니다.

1. `if: github.actor != 'dependabot[bot]'`과 같은 식을 사용하여 더 이상 {% data variables.product.prodname_dependabot %}에서 트리거되지 않도록 워크플로를 업데이트할 수 있습니다. 자세한 내용은 “[식](/actions/learn-github-actions/expressions)”을 참조하세요.
2. `pull_request_target`이 포함되어 이 제한 사항이 없는 2단계 프로세스를 사용하도록 워크플로를 수정할 수 있습니다. 자세한 내용은 “[ {% data variables.product.prodname_actions %}를 사용하여 {% data variables.product.prodname_dependabot %} 자동화](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions#responding-to-events)”를 참조하세요.
3. 비밀에 대한 {% data variables.product.prodname_dependabot %} 액세스로 트리거되는 워크플로를 제공하고 `permissions` 용어가 `GITHUB_TOKEN`의 기본 범위를 늘리도록 허용할 수 있습니다. 자세한 내용은 아래의 “[비밀에 대한 {% data variables.product.prodname_dependabot %} 액세스로 트리거되는 워크플로 제공 및 증가된 권한](#providing-workflows-triggered-by-dependabot-access-to-secrets-and-increased-permissions)”을 참조하세요.

### 비밀에 대한 {% data variables.product.prodname_dependabot %} 액세스로 트리거되는 워크플로 제공 및 증가된 권한

1. SSH를 사용하여 관리 셸에 로그인합니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/accessing-the-administrative-shell-ssh)”를 참조하세요.
1. {% data variables.location.product_location %}에서 {% data variables.product.prodname_dependabot %}에 의해 트리거되는 워크플로에 대한 제한을 제거하려면 다음 명령을 사용합니다.
    ``` shell
    $ ghe-config app.actions.disable-dependabot-enforcement true
    ```
1. 구성을 적용합니다.
    ```shell
    $ ghe-config-apply
    ```
1. {% data variables.product.prodname_ghe_server %}로 돌아갑니다.

{% endif %}

{% ifversion ghes > 3.3 %}

<a name="bundled-actions"></a>

## {% data variables.product.prodname_actions %}에서 번들 작업 문제 해결

{% data variables.product.prodname_ghe_server %}에 {% data variables.product.prodname_actions %}를 설치할 때 다음 오류가 표시되는 경우 공식 번들 작업과 시작 워크플로를 설치하여 문제를 해결할 수 있습니다.

```shell
A part of the Actions setup had problems and needs an administrator to resolve.
```

{% data variables.product.prodname_ghe_server %}의 지정된 조직 내에 공식 번들 작업과 시작 워크플로를 설치하려면 다음 절차를 수행합니다.

1. 공식 번들 작업과 시작 웜플로를 저장할 조직을 식별합니다. 새 조직을 만들거나 기존 조직을 재사용할 수 있습니다. 
    - 새 조직을 만들려면 “[처음부터 새 조직 만들기](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)”를 참조하세요. 
    - 이 조직의 이름 선택과 관련해서 도움이 필요하면 “[예약된 이름](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#reserved-names)”을 참조하세요. 

1. SSH를 사용하여 관리 셸에 로그인합니다. 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/accessing-the-administrative-shell-ssh)”를 참조하세요.
1. 번들 작업을 저장할 위치로 사용자 조직을 지정하려면 `ghe-config` 명령을 사용하고 `ORGANIZATION`을 사용자 조직의 이름으로 바꿉니다.
    ```shell
    $ ghe-config app.actions.actions-org ORGANIZATION
    ```
    and:
    ```shell
    $ ghe-config app.actions.github-org ORGANIZATION
    ```
1.  사용자 조직에 번들 작업을 추가하려면 SHA를 설정 해제합니다.
    ```shell
    $ ghe-config --unset 'app.actions.actions-repos-sha1sum'
    ```
1. 구성을 적용합니다.
    ```shell
    $ ghe-config-apply
    ```

이 단계를 완료한 후 “[엔터프라이즈에서 GitHub Actions에 대한 액세스 권한 관리](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#managing-access-permissions-for-github-actions-in-your-enterprise)”에서 {% data variables.product.prodname_actions %} 구성을 다시 시작할 수 있습니다.

{% endif %}
