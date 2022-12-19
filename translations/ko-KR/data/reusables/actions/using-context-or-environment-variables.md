---
ms.openlocfilehash: c8e09d66bc8f0f35ca319e3650c6913174e59067
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145067824"
---
{% data variables.product.prodname_actions %}에는 _컨텍스트_ 라는 변수 컬렉션과 _기본 환경 변수_ 라는 유사한 변수 컬렉션이 포함되어 있습니다. 이러한 변수는 워크플로의 여러 지점에서 사용하기 위한 것입니다.

- **기본 환경 변수:** 이러한 변수는 작업을 실행하는 실행기에서만 존재합니다. 자세한 내용은 “[기본 환경 변수](/actions/reference/environment-variables#default-environment-variables)”를 참조하세요.
- **컨텍스트:** _기본 환경 변수_ 를 사용할 수 없는 경우를 비롯한 대부분의 컨텍스트를 워크플로의 모든 지점에서 사용할 수 있습니다. 예를 들어 작업이 실행을 위해 실행기로 라우팅되기 전에 식과 함께 컨텍스트를 사용하여 초기 처리를 수행할 수 있습니다. 이렇게 하면 조건부 `if` 키워드가 포함된 컨텍스트를 사용하여 단계를 실행할지 여부를 결정할 수 있습니다. 작업이 실행되면 작업을 실행하는 실행기에서 컨텍스트 변수를 검색할 수도 있습니다(예: `runner.os`). 워크플로 내에서 다양한 컨텍스트를 사용할 수 있는 위치에 대한 자세한 내용은 “[컨텍스트 가용성](/actions/reference/context-and-expression-syntax-for-github-actions#context-availability)”을 참조하세요.

다음 예제에서는 이러한 다양한 유형의 환경 변수를 작업에서 함께 사용하는 방법을 보여 줍니다.

{% raw %}
```yaml
name: CI
on: push
jobs:
  prod-check:
    if: ${{ github.ref == 'refs/heads/main' }}
    runs-on: ubuntu-latest
    steps:
      - run: echo "Deploying to production server on branch $GITHUB_REF"
```
{% endraw %}

이 예제에서 `if` 문은 [`github.ref`](/actions/reference/context-and-expression-syntax-for-github-actions#github-context) 컨텍스트를 검사하여 현재 분기 이름을 확인합니다. 이름이 `refs/heads/main`이면 후속 단계가 실행됩니다. `if` 확인은 {% data variables.product.prodname_actions %}에 의해 처리되며, 결과가 `true`이면 작업은 실행기로만 전송됩니다. 작업이 실행기로 전송되면 단계가 실행되고 실행기의 [`$GITHUB_REF`](/actions/reference/environment-variables#default-environment-variables) 환경 변수를 참조합니다.
