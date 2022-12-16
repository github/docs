---
title: 조직의 codespace 나열
shortTitle: List organization codespaces
intro: 조직의 현재 활성 또는 중지된 codespace를 모두 나열할 수 있습니다.
permissions: 'To list all of the current codespaces for your organization, you must be an organization owner.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Administrator
ms.openlocfilehash: e3d475560c76449ed20b70fbce29ef6273f788fc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158631'
---
## 개요

조직 소유자는 조직의 현재 활성 및 중지된 codespace를 모두 나열할 수 있습니다. 이 작업을 수행하여 사용자가 만드는 codespace 수를 확인하면 불필요한 비용이 발생하지 않는지 확인할 수 있습니다. 가격 책정에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보"를 참조하세요](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

조직의 codespace를 나열하는 가장 쉬운 방법은 {% data variables.product.prodname_cli %}를 사용하는 것입니다. 각 코드 영역에 대한 자세한 정보를 제공하는 REST API를 사용할 수도 있습니다.

조직 또는 엔터프라이즈의 현재 총 {% 데이터 variables.product.prodname_codespaces %} 사용량을 확인하고 자세한 보고서를 생성하는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %} 사용량 보기"를 참조하세요](/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage).

### {% data variables.product.prodname_cli %}를 사용하여 codespace 나열

지정된 조직의 현재 codespace를 모두 나열하려면 다음 명령을 사용합니다.

```shell{:copy}
gh codespace list --org ORGANIZATION 
```

이 명령은 각 코드 영역에 대해 다음 정보를 포함하는 목록을 반환합니다. 
    - 이름 및 표시 이름 
    - codespace를 만든 사용자
    - 리포지토리 및 분기
    - codespace의 현재 상태

특정 사용자가 만든 조직의 현재 codespace를 모두 나열하려면 다음 명령을 사용합니다.

```shell{:copy}
gh codespace list --org ORGANIZATION --user USER
```

{% note %}

**참고**: 위의 명령에서 `ORGANIZATION`을 쿼리하는 조직의 이름으로 바꿉니다. 구독의 소유자여야 합니다.

{% endnote %}

### REST API를 사용하여 codespace 나열

`/orgs/{org}/codespaces` API 엔드포인트를 조직의 현재 codespace를 나열하는 대체 방법으로 사용할 수 있습니다. {% data variables.product.prodname_cli %}보다 더 많은 정보가 반환됩니다(예: 컴퓨터 유형 세부 정보).

이 엔드포인트에 대한 자세한 내용은 “[Codespaces 조직](/rest/codespaces/organizations#list-codespaces-for-the-organization)”을 참조하세요.
