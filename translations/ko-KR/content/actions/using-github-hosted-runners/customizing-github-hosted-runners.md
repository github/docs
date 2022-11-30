---
title: GitHub 호스팅 실행기 사용자 지정
intro: 워크플로의 일부로 GitHub 호스팅 실행기에 추가 소프트웨어를 설치할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
shortTitle: Customize runners
ms.openlocfilehash: d6793216b099fe3dcec44572da0b3d65cbb13fd9
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121087'
---
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_dotcom %} 호스팅 실행기에서 추가 소프트웨어 패키지가 필요한 경우 워크플로의 일부로 패키지를 설치하는 작업을 만들 수 있습니다. 

기본적으로 이미 설치된 패키지를 보려면 “[사전 설치된 소프트웨어](/actions/using-github-hosted-runners/about-github-hosted-runners#preinstalled-software)”를 참조하세요.

이 가이드에서는 {% data variables.product.prodname_dotcom %} 호스팅 실행기에서 추가 소프트웨어를 설치하는 작업을 만드는 방법을 보여 줍니다.

## Ubuntu 실행기에서 소프트웨어 설치

다음 예제에서는 작업의 일부로 `apt` 패키지를 설치하는 방법을 보여 줍니다.

```yaml
name: Build on Ubuntu
on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install jq tool
        run: |
          sudo apt-get update
          sudo apt-get install jq
```

{% note %}

**참고:** 패키지를 설치하기 전에 항상 `sudo apt-get update`을 실행합니다. `apt` 인덱스가 부실한 경우 이 명령은 사용 가능한 패키지를 가져오고 다시 인덱싱하여 패키지 설치 오류를 방지하는 데 도움이 됩니다. 

{% endnote %}

## macOS 실행기에서 소프트웨어 설치

다음 예제에서는 작업의 일부로 Brew 패키지 및 캐스크를 설치하는 방법을 보여 줍니다.

```yaml
name: Build on macOS
on: push

jobs:
  build:
    runs-on: macos-latest
    steps:
      - name: Check out repository code
        uses: {% data reusables.actions.action-checkout %}
      - name: Install GitHub CLI
        run: |
          brew update
          brew install gh
      - name: Install Microsoft Edge
        run: |
          brew update
          brew install --cask microsoft-edge
```

## Windows 실행기에서 소프트웨어 설치

다음 예제에서는 [Chocolatey](https://community.chocolatey.org/packages) 를 사용하여 작업의 일부로 {% data variables.product.prodname_dotcom %} CLI를 설치하는 방법을 보여 줍니다.

{% raw %}
```yaml
name: Build on Windows
on: push
jobs:
  build:
    runs-on: windows-latest
    steps:
      - run: choco install gh
      - run: gh version
```
{% endraw %}
