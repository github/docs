---
title: 엔터프라이즈에서 Dependabot 업데이트에 대한 자체 호스트된 실행기 관리
intro: '{% data variables.product.prodname_dependabot %}에서 사용하는 {% data variables.location.product_location %}에 대한 전용 실행기를 만들어 엔터프라이즈의 리포지토리에서 사용되는 종속성을 보호하고 유지하는 데 도움이 되는 끌어오기 요청을 만들 수 있습니다.'
redirect_from:
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/setting-up-dependabot-updates
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  ghes: '> 3.2'
topics:
  - Enterprise
  - Security
  - Dependabot
  - Dependencies
shortTitle: Dependabot updates
ms.openlocfilehash: 0f21d4bc91e519f7af89ff04bd65a6ace742f430
ms.sourcegitcommit: d411e8278b73efd0051816625c0b235ab7c263e9
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181335'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## {% data variables.product.prodname_dependabot_updates %}에 대한 자체 호스트된 실행기 정보

{% data variables.location.product_location %}의 사용자가 {% data variables.product.prodname_dependabot %} 보안 및 버전 업데이트를 설정하여 보안 코드를 만들고 유지 관리하도록 도울 수 있습니다. {% data variables.product.prodname_dependabot_updates %}를 사용하면 개발자가 리포지토리를 구성하여 자동으로 종속성이 업데이트되고 안전하게 유지되도록 할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.

{% data variables.location.product_location %}에서 {% data variables.product.prodname_dependabot_updates %}를 사용하려면 종속성을 업데이트할 끌어오기 요청을 만들도록 자체 호스팅 실행기를 구성해야 합니다.

## 필수 조건

{% ifversion dependabot-updates-github-connect %} 자체 호스트된 실행기를 구성하는 것은 프로세스 중간에 {% data variables.product.prodname_dependabot_updates %}를 사용하도록 설정하는 한 단계일 뿐입니다. 자체 호스팅 실행기에서 {% data variables.product.prodname_actions %}을(를) 사용하도록 {% data variables.location.product_location %} 구성을 포함하여 이러한 단계 전에 수행해야 하는 몇 가지 단계가 있습니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.
{% else %} {% data variables.product.prodname_dependabot_updates %}에 대해 자체 호스트된 실행기를 구성하기 전에 다음을 수행해야 합니다.

- 자체 호스팅 실행기에서 {% data variables.product.prodname_actions %}를 사용하도록 {% data variables.location.product_location %}을 구성합니다. 자세한 내용은 “[GitHub Enterprise Server용 {% data variables.product.prodname_actions %} 시작](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)”을 참조하세요.
- 엔터프라이즈에서 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정합니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.
{% endif %}

## {% data variables.product.prodname_dependabot_updates %}용 자체 호스트된 실행기 구성

{% data variables.product.prodname_actions %}를 사용하도록 {% data variables.location.product_location %}를 구성한 후에는 {% data variables.product.prodname_dependabot_updates %}에 대한 자체 호스팅 실행기를 추가해야 합니다.

### {% data variables.product.prodname_dependabot %} 실행기에 대한 시스템 요구 사항

{% data variables.product.prodname_dependabot %} 실행기에서 사용하는 모든 VM은 자체 호스트된 실행기 요구 사항을 충족해야 합니다. 또한 다음 요구 사항을 충족해야 합니다.

- Linux 운영 체제
- x64 아키텍처 {%- ifversion ghes < 3.5 %}
- Git이 설치됨 {%- endif %}
- 실행기 사용자에 대한 액세스 권한이 있는 설치된 Docker:
  - 루트리스 모드에서 Docker를 설치하고 `root` 권한 없이 Docker에 액세스하도록 실행기를 구성하는 것이 좋습니다.
  - 또는 Docker를 설치하고 실행기 사용자에게 Docker를 실행할 수 있는 권한을 부여합니다.

CPU 및 메모리 요구 사항은 지정된 VM에 배포하는 동시 실행기 수에 따라 달라집니다. 지침에 따라 2개 CPU 8GB 단일 컴퓨터에 20개의 실행기를 성공적으로 설정했지만 궁극적으로 CPU 및 메모리 요구 사항은 업데이트되는 리포지토리에 따라 크게 달라집니다. 일부 에코시스템에는 다른 에코시스템보다 더 많은 리소스가 필요합니다.

VM에서 14개 이상의 동시 실행기를 지정하는 경우 Docker `/etc/docker/daemon.json` 구성을 업데이트하여 Docker에서 만들 수 있는 기본 네트워크 수를 늘려야 합니다.

```
{
  "default-address-pools": [
    {"base":"10.10.0.0/16","size":24}
  ]
}
```

### {% data variables.product.prodname_dependabot %} 실행기에 대한 네트워크 요구 사항

{% data variables.product.prodname_dependabot %} 실행기는 퍼블릭 인터넷, {% data variables.product.prodname_dotcom_the_website %}, 그리고 {% data variables.product.prodname_dependabot %} 업데이트에 사용될 모든 내부 레지스트리에 액세스할 수 있어야 합니다. 내부 네트워크에 대한 위험을 최소화하려면 VM(가상 머신)에서 내부 네트워크로의 액세스를 제한해야 합니다. 이렇게 하면 실행기에서 하이재킹된 종속성을 다운로드하는 경우 내부 시스템이 손상될 가능성이 줄어듭니다.

### {% data variables.product.prodname_dependabot %} 업데이트를 위한 자체 호스트된 실행기 추가

1. 리포지토리, 조직 또는 엔터프라이즈 계정 수준에서 자체 호스트된 실행기를 프로비저닝합니다. 자세한 내용은 “[자체 호스트된 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”와 “[자체 호스트된 실행기 추가](/actions/hosting-your-own-runners/adding-self-hosted-runners)”를 참조하세요.

2. 위에서 설명한 요구 사항을 준수하여 자체 호스트된 실행기를 설정합니다. 예를 들어 Ubuntu 20.04를 실행하는 VM에서 다음을 수행합니다.{% ifversion ghes < 3.5 %}

   - Git 설치 여부를 확인합니다. `command -v git`{% endif %}
   - Docker를 설치하고 실행기 사용자가 Docker에 액세스할 수 있는지 확인합니다. 자세한 내용은 Docker 설명서를 참조하세요.
     - [Ubuntu에 Docker 엔진 설치](https://docs.docker.com/engine/install/ubuntu/)
     - 권장 방법: [루트가 아닌 사용자로 Docker 디먼 실행(루트리스 모드)](https://docs.docker.com/engine/security/rootless/)
     - 대체 방법: [루트가 아닌 사용자로 Docker 관리](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
   - 실행기에서 퍼블릭 인터넷에 액세스할 수 있고 {% data variables.product.prodname_dependabot %}에 필요한 내부 네트워크에만 액세스할 수 있는지 확인합니다.

3. 각 실행기에 {% data variables.product.prodname_dependabot %}가 사용하기를 원하는 `dependabot` 레이블을 할당합니다. 자세한 내용은 “[자체 호스트된 실행기에서 레이블 사용](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners#assigning-a-label-to-a-self-hosted-runner)”을 참조하세요.

4. 필요에 따라 {% data variables.product.prodname_dependabot %}에 의해 트리거된 워크플로가 읽기 전용 이상의 권한을 사용하고 일반적으로 사용할 수 있는 모든 비밀에 액세스할 수 있도록 설정합니다. 자세한 내용은 “[엔터프라이즈의 {% data variables.product.prodname_actions %} 문제 해결](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#enabling-workflows-triggered-by-dependabot-access-to-dependabot-secrets-and-increased-permissions)”을 참조하세요.
