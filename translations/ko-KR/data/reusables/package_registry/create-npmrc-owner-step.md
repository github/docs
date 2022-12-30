---
ms.openlocfilehash: aed38f3bac029ba576c409188e4c4bc8499a52d0
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: "148008940"
---
2. `package.json` 파일과 동일한 디렉터리에서 {% data variables.product.prodname_registry %} URL 및 계정 소유자를 지정하는 행을 포함하도록 `.npmrc` 파일을 만들거나 편집합니다. `OWNER`를 프로젝트가 포함하는 리포지토리를 소유하는 사용자 또는 조직 계정의 이름으로 바꿉니다.

{% ifversion fpt or ghec %}
  ```shell
  @OWNER:registry=https://npm.pkg.github.com
  ```
{% else %} 하위 도메인 격리를 사용하도록 설정한 경우:
  ```shell
  @OWNER:registry=https://npm.HOSTNAME
  ```
  하위 도메인 격리를 사용하지 않도록 설정한 경우:
  ```shell
  @OWNER:registry=https://HOSTNAME/_registry/npm
  ```
{% endif %}
