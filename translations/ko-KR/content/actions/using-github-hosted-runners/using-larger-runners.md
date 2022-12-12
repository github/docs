---
title: 더 큰 실행기 사용
shortTitle: Larger runners
intro: '{% data variables.product.prodname_dotcom %}은 RAM과 CPU가 더 많은 더 큰 실행기를 제공합니다.'
miniTocMaxHeadingLevel: 3
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
ms.openlocfilehash: eca33ee8b427f918a3db5d8b4ca05947b7662896
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120875'
---
## {% data variables.actions.hosted_runner %} 개요

[표준 {% data variables.product.prodname_dotcom %} 호스팅된 실행기](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources) 외에도 {% data variables.product.prodname_dotcom %}은 {% data variables.product.prodname_team %} 계획 및 {% data variables.product.prodname_ghe_cloud %} 계획 고객에게 RAM 및 CPU가 더 많은 {% data variables.actions.hosted_runner %}를 다양하게 제공합니다. 이러한 실행기는 {% data variables.product.prodname_dotcom %}에서 호스팅되며 실행기 애플리케이션 및 기타 도구가 미리 설치되어 있습니다.

조직에 대해 {% data variables.actions.hosted_runner %}s를 사용하도록 설정하면 미리 구성된 4개의 {% data variables.actions.hosted_runner %}s 집합으로 기본 실행기 그룹이 자동으로 만들어집니다.

조직에 {% data variables.actions.hosted_runner %}를 추가하는 경우 사용 가능한 하드웨어 사양 및 운영 체제 이미지 중에서 컴퓨터 유형을 정의합니다. {% data variables.product.prodname_dotcom %}은 정의한 자동 크기 조정 제한에 따라 조직의 작업 요구에 맞게 확장 및 축소되는 이 실행기의 인스턴스를 여러 개 만듭니다.

## {% data variables.actions.hosted_runner %}s에 대한 컴퓨터 사양 

|크기(vcpu) | 메모리(GB) | 스토리지(SSD) |
| ------------- | ------------- | ------------- |
|4개 코어 | RAM 16개  | 150GB|
| 8개 코어 | 32 RAM | 300GB |
|16개 코어| 64 RAM | 600GB |
|32코어| 128 RAM| 1200GB|
|64코어| 256 RAM | 2040GB|

## {% data variables.actions.hosted_runner %}의 아키텍처 개요

{% data variables.actions.hosted_runner %}는 조직 수준에서 관리되며, 여기서 실행기의 인스턴스를 여러 개 포함할 수 있는 그룹으로 정렬됩니다. 또한 엔터프라이즈 수준에서 만들고 계층 구조의 조직과 공유할 수도 있습니다. 그룹을 만든 후에는 그룹에 실행기를 추가하고 워크플로를 업데이트하여 {% data variables.actions.hosted_runner %}에 할당된 그룹 이름 또는 레이블을 대상으로 지정할 수 있습니다. 처리를 위해 그룹에 작업을 보낼 수 있는 리포지토리를 제어할 수도 있습니다. 그룹에 대한 자세한 내용은 “[{% data variables.actions.hosted_runner %}에 대한 액세스 제어](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)”를 참조하세요.

다음 다이어그램에서는 사용자 지정된 하드웨어 및 운영 체제 구성을 사용하여 `ubuntu-20.04-16core`라는 호스트된 실행기 클래스를 정의했습니다.

![{% data variables.actions.hosted_runner %}를 설명하는 다이어그램](/assets/images/hosted-runner.png)

1. 이 실행기의 인스턴스는 자동으로 만들어지고 라는 `grp-ubuntu-20.04-16core` 그룹에 추가됩니다. 
2. 실행기에 `ubuntu-20.04-16core` 레이블이 할당되었습니다. 
3. 워크플로 작업은 `runs-on` 키의 `ubuntu-20.04-16core` 레이블을 사용하여 작업을 실행하는 데 필요한 실행기 유형을 나타냅니다.
4. {% data variables.product.prodname_actions %}는 실행기 그룹을 확인하여 리포지토리가 실행기에게 작업을 보낼 권한이 있는지 확인합니다.
5. 이 작업은 `ubuntu-20.04-16core` 실행기의 다음 사용 가능한 인스턴스에서 실행됩니다.

## {% data variables.actions.hosted_runner %} 자동 크기 조정

{% data variables.actions.hosted_runner %}는 필요에 따라 크기를 자동 조정하게 구성할 수 있습니다. 처리를 위해 작업을 제출하면 미리 정의된 최대 한도에 도달할 때까지 작업을 실행하도록 더 많은 컴퓨터를 자동으로 프로비저닝할 수 있습니다. 각 컴퓨터는 한 번에 하나의 작업만 처리하므로 이러한 설정은 동시에 실행할 수 있는 작업 수를 효과적으로 결정합니다. 

실행기 배포 프로세스 중에 이 집합에서 만든 최대 병렬 컴퓨터 수를 설정하여 비용을 제어할 수 있는 최댓값 옵션을 구성할 수 있습니다. 여기서 값이 높을수록 병렬 처리로 인해 워크플로가 차단되지 않게 방지할 수 있습니다.

## {% data variables.actions.hosted_runner %}에 대한 네트워킹

기본적으로 {% data variables.actions.hosted_runner %}는 각 작업 실행에 대해 변경되는 동적 IP 주소를 받습니다. 필요에 따라 {% data variables.product.prodname_ghe_cloud %} 고객은 {% data variables.actions.hosted_runner %}를 구성하여 {% data variables.product.prodname_dotcom %}의 IP 주소 풀에서 고정 IP 주소를 받을 수 있습니다. 활성화된 {% data variables.actions.hosted_runner %} 인스턴스는 실행기 고유의 범위에서 주소를 수신하므로 이 범위를 사용하여 방화벽 허용 목록을 구성할 수 있습니다. {% ifversion fpt %} 모든 {% data variables.actions.hosted_runner %}s{% endif %}{% ifversion ghec %}엔터프라이즈 수준에서 만든 {% data variables.actions.hosted_runner %}에 대해 최대 10개의 고정 IP 주소 범위를 사용할 수 있습니다. 또한 조직 수준에서 만든 {% data variables.actions.hosted_runner %}s에 대해 엔터프라이즈의 각 조직에 대해 최대 10개의 고정 IP 주소 범위를 사용할 수 있습니다{% endif %}.

{% note %}

**참고**: 실행기를 30일 넘게 사용하지 않으면 해당 IP 주소 범위가 자동으로 제거되고 복구할 수 없습니다.

{% endnote %}

## {% data variables.actions.hosted_runner %} 계획

### 실행기 그룹 만들기

실행기 그룹은 가상 머신 집합을 수집하고 주위에 보안 경계를 만드는 데 사용됩니다. 그런 다음 해당 컴퓨터 집합에서 작업을 실행할 수 있는 조직 또는 리포지토리를 결정할 수 있습니다. {% data variables.actions.hosted_runner %} 배포 프로세스 중에 실행기를 기존 그룹에 추가하거나 기본 그룹에 조인할 수 있습니다. “[{% data variables.actions.hosted_runner %}에 대한 액세스 제어”](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)의 단계에 따라 그룹을 만들 수 있습니다.

### 청구 이해

{% note %}

**참고**: {% data variables.actions.hosted_runner %}s는 포함된 권한 분을 사용하지 않으며 퍼블릭 리포지토리에는 무료가 아닙니다.

{% endnote %}

표준 {% data variables.product.prodname_dotcom %}호스팅 실행기와 비교하면 {% data variables.actions.hosted_runner %}는 다르게 청구됩니다. 자세한 내용은 “[분당 요금](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)”을 참조하세요.

## 엔터프라이즈에 {% data variables.actions.hosted_runner %} 추가

{% data variables.actions.hosted_runner %}를 여러 조직에 할당할 수 있는 엔터프라이즈에 추가할 수 있습니다. 그러면 조직 관리자가 실행기를 사용할 수 있는 리포지토리를 제어할 수 있습니다. 엔터프라이즈에 {% data variables.actions.hosted_runner %}를 추가하려면 엔터프라이즈 소유자여야 합니다.

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.add-hosted-runner %}
1. 조직이 {% data variables.actions.hosted_runner %}에 액세스할 수 있게 하려면 사용할 수 있는 조직 목록을 지정합니다. 자세한 내용은 “[실행기에 대한 액세스 관리](#managing-access-to-your-runners)”를 참조하세요.

## 조직에 {% data variables.actions.hosted_runner %} 추가

조직 관리자가 사용할 수 있는 리포지토리를 제어할 수 있는 조직에 {% data variables.actions.hosted_runner %}를 추가할 수 있습니다. 

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.add-hosted-runner %}
1. 리포지토리가 {% data variables.actions.hosted_runner %}에 액세스할 수 있도록 하게 사용할 수 있는 리포지토리 목록에 추가합니다. 자세한 내용은 “[실행기에 대한 액세스 관리](#managing-access-to-your-runners)”를 참조하세요.

## 실행기에서 작업 실행

실행기 유형이 정의되면 워크플로 YAML 파일을 업데이트하여 처리를 위해 새로 만든 실행기 인스턴스로 작업을 보낼 수 있습니다. 실행기 그룹 또는 레이블을 사용하여 작업이 실행되는 위치를 정의할 수 있습니다. 

소유자 또는 관리자 계정만 실행기 설정을 볼 수 있습니다. 관리자가 아닌 사용자는 조직 관리자에게 문의하여 사용하도록 설정된 실행기를 확인할 수 있습니다. 조직 관리자는 새 실행기 및 실행기 그룹을 만들고 실행기 그룹에 액세스할 수 있는 리포지토리를 지정하는 권한을 구성할 수 있습니다.

### 그룹을 사용하여 작업 실행 위치 제어

{% data reusables.actions.jobs.example-runs-on-groups %}

### 레이블을 사용하여 작업 실행 위치 제어

이 예제에서 실행기 그룹은 레이블 `ubuntu-20.04-16core`도 할당된 Ubuntu 16코어 실행기로 채워집니다. 키는 `runs-on` 일치하는 레이블이 있는 사용 가능한 실행기에 작업을 보냅니다.

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

### 레이블 및 그룹을 사용하여 작업 실행 위치 제어

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

### 여러 레이블 사용

실행기에서 작업을 실행하기 위해 일치해야 하는 여러 레이블을 지정할 수 있습니다. 실행기는 작업을 실행할 수 있도록 모든 레이블과 일치해야 합니다.

이 예제에서 실행기는 작업을 실행하려면 세 레이블을 모두 일치시켜야 합니다.

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: [ ubuntu-20.04-16core, gpu, qa ]
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

## 실행기 액세스 관리

{% note %}

**참고**: 워크플로가 {% data variables.actions.hosted_runner %}에 작업을 보내려면 먼저 실행기 그룹에 대한 권한을 구성해야 합니다. 자세한 내용은 다음 섹션을 참조하세요.

{% endnote %}

실행기 그룹은 {% data variables.actions.hosted_runner %}에서 작업을 실행할 수 있는 리포지토리를 제어하는 데 사용됩니다. {% data variables.actions.hosted_runner %}를 정의한 위치에 따라 관리 계층의 각 수준에서 그룹에 대한 액세스 권한을 부여해야 합니다.

- **엔터프라이즈 수준의 실행기**: 필요한 모든 조직에 대한 액세스 권한을 부여하도록 실행기 그룹을 구성합니다. 또한 각 조직에 대해 액세스가 허용되는 리포지토리를 지정하도록 그룹을 구성해야 합니다.
- **조직 수준의 실행기**: 액세스가 허용되는 리포지토리를 지정하여 실행기 그룹을 구성합니다.

예를 들어 다음 다이어그램에는 엔터프라이즈 수준에 `grp-ubuntu-20.04-16core`라는 된 실행기 그룹이 있습니다. `octo-repo` 리포지토리가 그룹에서 실행기를 사용하려면 먼저 엔터프라이즈 수준에서 그룹을 구성하여 `octo-org` 조직의 액세스를 허용해야 합니다. 그런 다음 `octo-repo`의 액세스를 허용하도록 조직 수준에서 그룹을 구성해야 합니다.

![{% data variables.actions.hosted_runner %} 그룹을 설명하는 다이어그램](/assets/images/hosted-runner-mgmt.png)

### 리포지토리가 실행기 그룹에 액세스할 수 있도록 허용

이 절차에서는 엔터프라이즈 수준 및 조직 수준에서 그룹 권한을 구성하는 방법을 보여 줍니다.

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
  - 엔터프라이즈의 실행기 그룹의 경우 **조직 액세스** 에서 실행기 그룹에 액세스할 수 있는 조직을 수정합니다.
  - 조직의 실행기 그룹의 경우 **리포지토리 액세스** 에서 실행기 그룹에 액세스할 수 있는 리포지토리를 수정합니다.

{% warning %}

**경고**:

{% data reusables.actions.hosted-runner-security %}

자세한 내용은 “[{% data variables.actions.hosted_runner %}에 대한 액세스 제어](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)”를 참조하세요.

{% endwarning %}
