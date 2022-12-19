---
title: GitHub 호스팅 실행기 정보
shortTitle: About GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %}는 워크플로를 실행하는 호스팅 가상 머신을 제공합니다. 가상 머신에는 {% data variables.product.prodname_actions %}에서 사용할 수 있는 도구, 패키지 및 설정 환경이 포함되어 있습니다.'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
ms.openlocfilehash: f44c5bcf8c6cc9c48a2910d2a0d371087debd158
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180687'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_dotcom %} 호스팅 실행기 개요

실행기는 {% data variables.product.prodname_actions %} 워크플로에서 작업을 실행하는 머신입니다. 예를 들어 실행기는 리포지토리를 로컬로 복제하고, 테스트 소프트웨어를 설치한 다음, 코드를 평가하는 명령을 실행할 수 있습니다. 

{% data variables.product.prodname_dotcom %}는 작업을 실행하는 데 사용할 수 있는 실행기를 제공하거나 [사용자 고유의 실행기를 호스트](/actions/hosting-your-own-runners/about-self-hosted-runners)할 수 있습니다. 각 {% data variables.product.prodname_dotcom %} 호스팅 실행기는 실행기 애플리케이션 및 기타 도구가 미리 설치된 {% data variables.product.prodname_dotcom %}에서 호스트하는 새 VM(가상 머신)이며 Ubuntu Linux, Windows 또는 macOS 운영 체제에서 사용할 수 있습니다. {% data variables.product.prodname_dotcom %} 호스팅 실행기를 사용하면 머신 유지 관리 및 업그레이드가 자동으로 처리됩니다.

{% ifversion not ghes %}

## {% data variables.product.prodname_dotcom %} 호스팅 실행기 사용

{% data variables.product.prodname_dotcom %} 호스팅 실행기를 사용하려면 작업을 만들고 `runs-on`을 이용해 `ubuntu-latest`, `windows-latest`, `macos-latest` 등과 같이 작업을 처리할 실행기 유형을 지정합니다. 실행기 유형의 전체 목록은 “[지원되는 실행기 및 하드웨어 리소스](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)”를 참조하세요.

작업이 시작되면 {% data variables.product.prodname_dotcom %}가 해당 작업에 대한 새 VM을 자동으로 프로비저닝합니다. 모든 작업 단계는 VM에서 실행되며 실행기의 파일 체계를 사용하는 정보를 공유합니다. VM 또는 Docker 컨테이너에서 직접 워크플로를 실행할 수 있습니다. 작업이 완료되면 VM이 자동으로 서비스 해제됩니다.

다음 다이어그램은 하나의 워크플로에 속한 두 개의 작업이 어떤 방식을 통해 두 개의 서로 다른 {% data variables.product.prodname_dotcom %} 호스팅 실행기를 통해 실행되는지를 보여 줍니다. 

![별도의 작업을 처리하는 실행기 두 개](/assets/images/help/images/overview-github-hosted-runner.png)

예시된 다음 워크플로에는 `Run-npm-on-Ubuntu`, `Run-PSScriptAnalyzer-on-Windows` 두 개의 작업이 있습니다. 이 워크플로가 트리거되면 {% data variables.product.prodname_dotcom %}는 각 작업에 대해 새 가상 머신을 프로비저닝합니다. 

- 이름이 `Run-npm-on-Ubuntu`인 작업은 작업의 `runs-on:`이 `ubuntu-latest`를 지정하므로 Linux VM에서 실행됩니다. 
- 이름이 `Run-PSScriptAnalyzer-on-Windows`인 작업은 작업의 `runs-on:`가 `windows-latest`를 지정하므로 Windows VM에서 실행됩니다. 

```yaml{:copy}
name: Run commands on different operating systems
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  Run-npm-on-Ubuntu:
    name: Run npm on Ubuntu
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm help

  Run-PSScriptAnalyzer-on-Windows:
    name: Run PSScriptAnalyzer on Windows
    runs-on: windows-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install PSScriptAnalyzer module
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module PSScriptAnalyzer -ErrorAction Stop
      - name: Get list of rules
        shell: pwsh
        run: |
          Get-ScriptAnalyzerRule
```

작업이 실행되는 동안 {% data variables.product.prodname_dotcom %} UI에서 로그 및 출력을 볼 수 있습니다.

![작업 UI의 작업 출력](/assets/images/help/repository/actions-runner-output.png)

{% data reusables.actions.runner-app-open-source %}

## 지원되는 실행기 및 하드웨어 리소스

{% ifversion actions-hosted-runners %}

{% note %}

**참고**: 또한 {% data variables.product.prodname_dotcom %}에서는 더 큰 구성에서 사용할 수 있는 {% data variables.actions.hosted_runner %}를 제공합니다. 자세한 내용은 "[{% data variables.actions.hosted_runner %}s에 대한 컴퓨터 사양"을 참조하세요](/actions/using-github-hosted-runners/using-larger-runners#machine-specs-for-larger-runners).  

{% endnote %} {% endif %}

Windows 및 Linux 가상 머신에 대한 하드웨어 사양:
- 2코어 CPU(x86_64)
- RAM 7GB
- SSD 용량 14GB

macOS 가상 머신에 대한 하드웨어 사양:
- 3코어 CPU(x86_64)
- RAM 14GB
- SSD 용량 14GB

{% data reusables.actions.supported-github-runners %}

워크플로 로그는 작업을 실행하는 데 사용되는 실행기를 나열합니다. 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.

## 지원되는 소프트웨어

{% data variables.product.prodname_dotcom %} 호스팅 실행기에 포함된 소프트웨어 도구는 매주 업데이트됩니다. 업데이트 프로세스는 며칠이 걸리며 `main` 분기에 사전 설치된 소프트웨어 목록은 전체 배포가 종료된 후 업데이트됩니다.

### 사전 설치된 소프트웨어

워크플로 로그에는 정확한 실행기에서 사전 설치된 도구에 대한 링크가 포함됩니다. 워크플로 로그에서 이 정보를 찾으려면 `Set up job` 섹션을 확장합니다. 해당 섹션에서 `Runner Image` 섹션을 확장합니다. `Included Software` 뒤의 링크는 워크플로를 실행한 실행기에 사전 설치된 도구에 대해 설명합니다.
![설치된 소프트웨어 링크](/assets/images/actions-runner-installed-software-link.png) 자세한 내용은 “[워크플로 실행 기록 보기](/actions/managing-workflow-runs/viewing-workflow-run-history)”를 참조하세요.

각 실행기 운영 체제에 포함된 도구의 전체 목록은 아래 링크를 참조하세요.

* [Ubuntu 22.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md)
* [Ubuntu 20.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu1804-Readme.md)(사용되지 않음)
* [Windows Server 2022](https://github.com/actions/runner-images/blob/main/images/win/Windows2022-Readme.md)
* [Windows Server 2019](https://github.com/actions/runner-images/blob/main/images/win/Windows2019-Readme.md)
* [macOS 12](https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md)

{% data variables.product.prodname_dotcom %} 호스팅 실행기는 위의 참조에 나열된 패키지 외에도 운영 체제의 기본 제공 도구를 포함합니다. 예를 들어 Ubuntu 및 macOS 실행기는 `grep`, `find`, `which` 등 여러 기본 도구를 포함합니다. 

### 사전 설치된 소프트웨어 사용

실행기에 설치된 소프트웨어와 상호 작용하는 작업을 사용하는 것이 좋습니다. 이 접근 방식에는 몇 가지 이점이 있습니다.
- 일반적으로 작업은 버전 선택, 인수 전달 기능 및 매개 변수와 같은 보다 유연한 기능을 제공합니다.
- 이를 통해 소프트웨어 업데이트와 관계없이 워크플로에 사용되는 도구 버전이 동일하게 유지됩니다.

요청하려는 도구가 있는 경우 [actions/runner-images](https://github.com/actions/runner-images)에서 문제를 여세요. 이 리포지토리에는 실행기에서 모든 주요 소프트웨어 업데이트에 대한 공지 사항도 포함되어 있습니다.

### 추가 소프트웨어 설치

{% data variables.product.prodname_dotcom %} 호스팅 실행기에 추가 소프트웨어를 설치할 수 있습니다. 자세한 내용은 “[GitHub 호스팅 실행기 사용자 지정](/actions/using-github-hosted-runners/customizing-github-hosted-runners)”을 참조하세요.

## {% data variables.product.prodname_dotcom %} 호스팅 실행기용 클라우드 호스트

{% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_actions %} 실행기 애플리케이션이 설치된 Microsoft Azure의 `Standard_DS2_v2` 가상 머신에서 Linux 및 Windows 실행기를 호스트합니다. {% data variables.product.prodname_dotcom %} 호스팅 실행기 애플리케이션은 Azure Pipelines 에이전트의 포크입니다. 모든 Azure 가상 머신에 대해 인바운드 ICMP 패킷이 차단되므로 ping 또는 traceroute 명령이 작동하지 않을 수 있습니다. `Standard_DS2_v2` 리소스에 대한 자세한 내용은 Microsoft Azure 설명서의 “[Dv2 및 DSv2-시리즈](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)”를 참조하세요.

{% data variables.product.prodname_dotcom %}는 {% data variables.product.prodname_dotcom %}의 자체 macOS 클라우드에서 macOS 실행기를 호스트합니다.

## 워크플로 연속성

{% data reusables.actions.runner-workflow-continuity %}

또한 워크플로 실행이 성공적으로 큐에 대기되었지만 {% data variables.product.prodname_dotcom %} 호스팅 실행기에서 45분 이내에 처리되지 않은 경우 대기 중인 워크플로 실행이 삭제됩니다.

## 관리자 권한

Linux 및 macOS 가상 머신은 모두 암호 없는 `sudo`를 사용하여 실행됩니다. 명령을 실행하거나 현재 사용자보다 더 많은 권한이 필요한 도구를 설치해야 하는 경우 암호를 제공하지 않고 `sudo`를 사용할 수 있습니다. 자세한 내용은 “[sudo 설명서](https://www.sudo.ws/man/1.8.27/sudo.man.html)”를 참조하세요.

Windows 가상 머신은 UAC(사용자 계정 컨트롤)를 사용하지 않고 관리자로 실행하도록 구성됩니다. 자세한 내용은 Windows 설명서의 “[사용자 계정 컨트롤의 작동 방식](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)”을 참조하세요.

## IP 주소

{% note %}

**참고:** {% data variables.product.prodname_dotcom %} 조직 또는 엔터프라이즈 계정에 대한 IP 주소 허용 목록을 사용하는 경우 {% data variables.product.prodname_dotcom %} 호스팅 실행기를 사용할 수 없으며 대신 자체 호스팅 실행기를 사용해야 합니다. 자세한 내용은 “[자체 호스트 실행기 정보](/actions/hosting-your-own-runners/about-self-hosted-runners)”를 참조하세요.

{% endnote %}

{% data variables.product.prodname_actions %}가 {% data variables.product.prodname_dotcom %} 호스팅 실행기에서 사용하는 IP 주소 범위 목록을 얻으려면 {% data variables.product.prodname_dotcom %} REST API를 사용할 수 있습니다. 자세한 내용은 “[GitHub 메타 정보 가져오기](/rest/reference/meta#get-github-meta-information)” 엔드포인트의 응답에서 `actions` 키를 참조하세요.

Windows 및 Ubuntu 실행기는 Azure에서 호스트되며 이후 Azure 데이터 센터와 동일한 IP 주소 범위를 갖습니다. macOS 실행기는 {% data variables.product.prodname_dotcom %}의 자체 macOS 클라우드에서 호스트됩니다.

{% data variables.product.prodname_dotcom %} 호스팅 실행기의 IP 주소 범위가 너무 많으므로 내부 리소스에 대한 허용 목록으로 사용하지 않는 것이 좋습니다.

API에서 반환하는 {% data variables.product.prodname_actions %} IP 주소 목록은 일주일에 한 번 업데이트됩니다. 

## 파일 시스템

{% data variables.product.prodname_dotcom %}는 가상 머신의 특정 디렉터리에서 작업 및 셸 명령을 실행합니다. 가상 머신의 파일 경로는 고정적이지 않습니다. {% data variables.product.prodname_dotcom %}에서 제공하는 환경 변수를 사용하여 `home`, `workspace` 및 `workflow` 디렉터리에 대한 파일 경로를 생성합니다.

| 디렉터리 | 환경 변수 | 설명 |
|-----------|----------------------|-------------|
| `home` | `HOME` | 사용자 관련 데이터를 포함합니다. 예를 들어 이 디렉터리에는 로그인 시도의 자격 증명이 포함될 수 있습니다. |
| `workspace` | `GITHUB_WORKSPACE` | 작업 및 셸 명령이 이 디렉터리에서 실행됩니다. 작업은 후속 작업이 액세스할 수 있는 이 디렉터리의 콘텐츠를 수정할 수 있습니다. |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | 워크플로를 트리거한 웹후크 이벤트의 `POST` 페이로드입니다. {% data variables.product.prodname_dotcom %}는 작업 간에 파일 콘텐츠를 격리하기 위해 작업을 실행할 때마다 이를 다시 작성합니다.

{% data variables.product.prodname_dotcom %}가 각 워크플로에 대해 만드는 환경 변수 목록은 “[환경 변수 사용](/github/automating-your-workflow-with-github-actions/using-environment-variables)”을 참조하세요.

### Docker 컨테이너 파일 시스템

Docker 컨테이너에서 실행되는 작업에는 `/github` 경로 아래에 고정 디렉터리가 있습니다. 그러나 기본 환경 변수를 사용하여 Docker 컨테이너에서 파일 경로를 생성하는 것이 좋습니다.

{% data variables.product.prodname_dotcom %}는 `/github` 경로 접두사를 예약하고 작업에 대한 세 개의 디렉터리를 만듭니다.

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

## 추가 참고 자료
- “[{% data variables.product.prodname_actions %}에 대한 청구 관리](/billing/managing-billing-for-github-actions)”
- 행렬 전략을 사용하여 여러 이미지에서 작업을 실행할 수 있습니다. 자세한 내용은 “[작업에 매트릭스 사용](/actions/using-jobs/using-a-matrix-for-your-jobs)”을 참조하세요.

{% endif %}
