---
title: 워크플로에서 자체 호스팅 실행기 사용
intro: 워크플로에서 자체 호스팅 실행기를 사용하려면 레이블을 사용하여 작업에 대한 실행기 유형을 지정할 수 있습니다.
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Use runners in a workflow
ms.openlocfilehash: 5c0ff57f5b3eda79e3fcf8b09706ed19f981b8ae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573419'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

사용자 지정 레이블과 기본 레이블을 만드는 방법에 대한 자세한 내용은 “[자체 호스팅 실행기에서 레이블 사용](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)”을 참조하세요.

## 워크플로에서 자체 호스팅 실행기 사용

레이블을 사용하면 공유 특성에 따라 특정 유형의 자체 호스팅 실행기에 워크플로 작업을 보낼 수 있습니다. 예를 들어 작업에 특정 하드웨어 구성 요소 또는 소프트웨어 패키지가 필요한 경우 실행기에 사용자 지정 레이블을 할당한 다음, 해당 레이블이 있는 실행기에서만 실행되도록 작업을 구성할 수 있습니다.

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

자세한 내용은 “[{% data variables.product.prodname_actions %}에 대한 워크플로 구문](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)”을 참조하세요.

## 기본 레이블을 사용하여 작업 라우팅

자체 호스팅 실행기는 {% data variables.product.prodname_actions %}에 추가된 특정 레이블을 자동으로 받습니다. 이 레이블은 운영 체제와 하드웨어 플랫폼을 나타내는 데 사용됩니다.

* `self-hosted`: 모든 자체 호스팅 실행기에 적용되는 기본 레이블입니다.
* `linux`, `windows` 또는 `macOS`: 운영 체제에 따라 적용됩니다.
* `x64`, `ARM` 또는 `ARM64`: 하드웨어 아키텍처에 따라 적용됩니다.

워크플로의 YAML을 사용하여 이 레이블의 조합에 작업을 보낼 수 있습니다. 이 예제에서는 다음 3개 레이블과 모두 일치하는 자체 호스팅 실행기에서 작업을 실행할 수 있습니다.

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` - 자체 호스팅 실행기에서 이 작업을 실행합니다.
- `linux` - Linux 기반 실행기만 사용합니다.
- `ARM64` - ARM64 하드웨어 기반의 실행기만 사용합니다.

기본 레이블은 고정되어 있으며 변경하거나 제거할 수 없습니다. 작업 라우팅을 더 자세히 제어해야 하는 경우 사용자 지정 레이블을 사용하는 것이 좋습니다.

## 사용자 지정 레이블을 사용하여 작업 라우팅

언제든지 사용자 지정 레이블을 만들어 자체 호스팅 실행기에 할당할 수 있습니다. 사용자 지정 레이블을 사용하면 레이블 지정 방법에 따라 특정 유형의 자체 호스팅 실행기에 작업을 보낼 수 있습니다. 

예를 들어 특정 유형의 그래픽 하드웨어가 필요한 작업이 있는 경우 `gpu`라는 사용자 지정 레이블을 생성하여 하드웨어가 설치된 실행기에 할당할 수 있습니다. 그런 다음, 할당된 모든 레이블과 일치하는 자체 호스팅 실행기에서 작업을 실행할 수 있습니다. 

다음 예제에서는 기본 레이블과 사용자 지정 레이블을 결합하는 작업을 보여 줍니다.

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` - 자체 호스팅 실행기에서 이 작업을 실행합니다.
- `linux` - Linux 기반 실행기만 사용합니다.
- `x64` - x64 하드웨어 기반의 실행기만 사용합니다.
- `gpu` - 이 사용자 지정 레이블은 GPU 하드웨어가 설치된 자체 호스팅 실행기에 수동으로 할당되었습니다. 

이러한 레이블은 누적해서 작동하므로 4개의 레이블이 모두 있어야 자체 호스팅 실행기에서 작업을 처리할 수 있습니다.

## 자체 호스팅 실행기의 라우팅 우선 순위

작업을 자체 호스팅 실행기로 라우팅할 때 {% data variables.product.prodname_dotcom %}는 작업의 `runs-on` 레이블과 일치하는 실행기를 찾습니다.

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
- {% data variables.product.prodname_dotcom %}가 작업의 `runs-on` 레이블과 일치하는 온라인 유휴 실행기를 찾으면 작업이 실행기에 할당되어 전송됩니다.
  - 해당 실행기가 할당된 작업을 60초 이내에 선택하지 않으면 새 실행기가 수락할 수 있도록 작업이 다시 큐에 대기됩니다.
- {% data variables.product.prodname_dotcom %}가 작업의 `runs-on` 레이블과 일치하는 온라인 유휴 실행기를 찾지 못하면 실행기 중 하나가 온라인 상태가 될 때까지 작업이 큐에서 대기합니다.
- 24시간 넘게 큐에서 대기한 작업은 실패합니다.
{% elsif ghes = 3.3 %}
- {% data variables.product.prodname_dotcom %}는 먼저 리포지토리 수준에서 실행기를 검색한 다음, 차례로 조직 수준과 엔터프라이즈 수준에서 검색합니다.
- {% data variables.product.prodname_dotcom %}가 특정 수준에서 작업의 `runs-on` 레이블과 일치하는 온라인 유휴 실행기를 찾으면 작업이 실행기에 할당되어 전송됩니다.
  - 해당 실행기가 할당된 작업을 60초 이내에 선택하지 않으면 작업이 모든 수준에서 큐에 대기되고, 임의 수준의 일치하는 실행기가 온라인 상태가 되어 작업을 선택할 때까지 기다립니다.
- {% data variables.product.prodname_dotcom %}가 모든 수준에서 온라인 유휴 실행기를 찾지 못하면 작업이 모든 수준에서 큐에 대기되고, 임의 수준의 일치하는 실행기가 온라인 상태가 되어 작업을 선택할 때까지 기다립니다.
- 24시간 넘게 큐에서 대기한 작업은 실패합니다.
{% else %}
1. {% data variables.product.prodname_dotcom %}는 먼저 리포지토리 수준에서 실행기를 검색한 다음, 차례로 조직 수준과 엔터프라이즈 수준에서 검색합니다.
2. 그런 다음, 온라인 유휴 상태인 첫 번째 일치하는 실행기에 작업이 전송됩니다.
   - 일치하는 모든 온라인 실행기가 사용 중이면 일치하는 온라인 실행기 수가 가장 많은 수준에서 작업이 큐에 대기됩니다.
   - 일치하는 모든 실행기가 오프라인 상태이면 일치하는 오프라인 실행기 수가 가장 많은 수준에서 작업이 큐에 대기됩니다.
   - 모든 수준에서 일치하는 실행기가 없으면 작업이 실패합니다.
   - 24시간 넘게 큐에서 대기한 작업은 실패합니다.
{% endif %}
