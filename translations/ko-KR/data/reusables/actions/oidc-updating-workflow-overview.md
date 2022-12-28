---
ms.openlocfilehash: a2d715cc94af2755d4161ef0715314caa0e82047
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145089393"
---
클라우드 배포 워크플로에 OIDC 통합을 추가하려면 다음 코드 변경을 추가해야 합니다.

- {% data variables.product.prodname_dotcom %} OIDC 공급자에서 토큰을 가져올 수 있는 권한을 부여합니다.
  - 워크플로에는 정의된 `id-token` 값이 있는 `permissions` 설정이 필요합니다. 이렇게 하면 워크플로의 모든 작업에서 OIDC 토큰을 가져올 수 있습니다. 단일 작업에 대한 OIDC 토큰을 가져오기만 하면 되는 경우 해당 작업 내에서 이 권한을 설정할 수 있습니다.
- {% data variables.product.prodname_dotcom %} OIDC 공급자로부터 JWT(JSON Web Token)를 요청하고 클라우드 공급자에게 제시하여 액세스 토큰을 받습니다.
  - 동작 도구 키트를 사용하여 작업에서 토큰을 가져오거나 클라우드 공급자가 만든 공식 동작을 사용하여 JWT를 가져오고 클라우드에서 액세스 토큰을 받을 수 있습니다.
