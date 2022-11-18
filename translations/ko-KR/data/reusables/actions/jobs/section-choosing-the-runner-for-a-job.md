---
ms.openlocfilehash: 89c3ed1592c000322cf4f0d6915e355bc81014ed
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/01/2022
ms.locfileid: "148120925"
---
`jobs.<job_id>.runs-on`을 사용하여 작업을 실행할 머신 형식을 정의합니다. 

{% ifversion fpt or ghec %}- 대상 컴퓨터는 [{% data variables.product.prodname_dotcom %}호스팅 실행기](#choosing-github-hosted-runners), [{% data variables.actions.hosted_runner %}](#choosing-runners-in-a-group) 또는 [자체 호스팅 실행](#choosing-self-hosted-runners)기일 수 있습니다. {% else %}
- 대상 컴퓨터는 [자체 호스팅 실행](#choosing-self-hosted-runners)기일 수 있습니다. {% endif %} {% ifversion target-runner-groups %}- 할당된 레이블 또는 해당 그룹 멤버 자격 또는 이들 조합을 기반으로 실행기를 대상으로 지정할 수 있습니다. {% else %}
- 할당된 레이블에 따라 실행기를 대상으로 지정할 수 있습니다. {% endif %}
- 단일 문자열 또는 문자열 배열로 제공할 `runs-on` 수 있습니다. 
- 문자열 배열을 지정하면 지정된 `runs-on` 모든 값과 일치하는 실행기에서 워크플로가 실행됩니다. 
- 여러 머신에서 워크플로를 실행하려면 [`jobs.<job_id>.strategy`](/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)를 사용합니다.

{% ifversion fpt or ghec or ghes %} {% data reusables.actions.enterprise-github-hosted-runners %}

### {% data variables.product.prodname_dotcom %} 호스팅 실행기 선택

{% data variables.product.prodname_dotcom %}에서 호스트되는 실행기를 사용하는 경우 각 작업은 `runs-on`으로 지정된 실행기 이미지의 새 인스턴스에서 실행됩니다.

사용 가능한 {% data variables.product.prodname_dotcom %} 호스팅 실행기 유형은 다음과 같습니다.

{% data reusables.actions.supported-github-runners %}

#### 예제: 운영 체제 지정

```yaml
runs-on: ubuntu-latest
```

자세한 내용은 “[{% data variables.product.prodname_dotcom %} 호스팅 실행기 정보](/actions/using-github-hosted-runners/about-github-hosted-runners)”를 참조하세요.
{% endif %}

{% ifversion fpt or ghec or ghes %}
### 자체 호스팅 실행기 선택
{% endif %}

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

#### 예제: 실행기 선택에 레이블 사용

```yaml
runs-on: [self-hosted, linux]
```

자세한 내용은 “[자체 호스팅 실행기 정보](/github/automating-your-workflow-with-github-actions/about-self-hosted-runners)” 및 “[워크플로에서 자체 호스팅 실행기 사용](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)”을 참조하세요.

{% ifversion target-runner-groups %}

### 그룹에서 실행기 선택

를 사용하여 `runs-on` 실행기 그룹을 대상으로 지정할 수 있으므로 해당 그룹의 구성원인 모든 실행기에서 작업이 실행됩니다. 보다 세분화된 컨트롤을 위해 실행기 그룹을 레이블과 결합할 수도 있습니다.

실행기 그룹에 [는 {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners) 또는 [자체 호스팅 실행기](/actions/hosting-your-own-runners) 만 구성원으로 사용할 수 있습니다.

#### 예: 그룹을 사용하여 작업 실행 위치 제어

{% data reusables.actions.jobs.example-runs-on-groups %}

#### 예: 그룹 및 레이블 결합

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endif %}