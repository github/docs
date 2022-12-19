---
ms.openlocfilehash: a314ace9dc0cc07e1119fa2a02c5ea45ef3a90fe
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147878441"
---
작업 또는 워크플로 실행에는 [`id-token: write`](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) 관련 `permissions` 설정이 필요합니다. `id-token`에 대한 `permissions` 설정이 `read` 또는 `none`으로 설정된 경우 OIDC JWT ID 토큰을 요청할 수 없습니다.

이 `id-token: write` 설정을 통해 다음 방법 중 하나를 사용하여 {% data variables.product.prodname_dotcom %}의 OIDC 공급자에서 JWT를 요청할 수 있습니다.

- 실행기(`ACTIONS_ID_TOKEN_REQUEST_URL` 및 `ACTIONS_ID_TOKEN_REQUEST_TOKEN`)에서 환경 변수 사용
- Actions 도구 키트에서 `getIDToken()` 사용

워크플로에 대한 OIDC 토큰을 페치해야 하는 경우 워크플로 수준에서 사용 권한을 설정할 수 있습니다. 예를 들어:

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
  contents: read  # This is required for actions/checkout
```

단일 작업에 대한 OIDC 토큰만 가져와야 하는 경우 해당 작업 내에서 이 권한을 설정할 수 있습니다. 예를 들면 다음과 같습니다.

```yaml{:copy}
permissions:
  id-token: write # This is required for requesting the JWT
```

워크플로의 요구 사항에 따라 여기에서 추가 권한을 지정해야 할 수 있습니다. 
