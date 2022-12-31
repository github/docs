---
title: Dependabot에 대한 암호화된 비밀 관리
intro: '암호 및 액세스 토큰과 같은 중요한 정보를 암호화된 비밀로 저장한 다음 이를 {% data variables.product.prodname_dependabot %} 구성 파일에서 참조할 수 있습니다.'
redirect_from:
  - /github/administering-a-repository/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/managing-encrypted-secrets-for-dependabot
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Dependabot
  - Version updates
  - Secret store
  - Repositories
  - Dependencies
shortTitle: Manage encrypted secrets
ms.openlocfilehash: 94b9e4c1945385ee9abca9cc548b159231e212c3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106375'
---
{% data reusables.dependabot.beta-security-and-version-updates %}

## {% data variables.product.prodname_dependabot %}에 대한 암호화된 비밀 정보

{% data variables.product.prodname_dependabot %} 비밀은 조직 수준 또는 리포지토리 수준에서 만드는 암호화된 자격 증명입니다.
조직 수준에서 비밀을 추가하는 경우 비밀에 액세스할 수 있는 리포지토리를 지정할 수 있습니다. 비밀을 사용하여 {% data variables.product.prodname_dependabot %}에서 프라이빗 패키지 레지스트리에 있는 종속성을 업데이트할 수 있습니다. 비밀을 추가하면 {% data variables.product.prodname_dotcom %}에 도달하기 전에 암호화되고 {% data variables.product.prodname_dependabot %}에서 프라이빗 패키지 레지스트리에 액세스하는 데 사용될 때까지 암호화된 상태로 유지됩니다.

{% data variables.product.prodname_dependabot %} 비밀을 추가한 후 _dependabot.yml_ 구성 파일(예: {% raw %}`${{secrets.NAME}}`{% endraw %})에서 참조할 수 있습니다. 여기서 “NAME”은 비밀에 대해 선택한 이름입니다. 예를 들면 다음과 같습니다. 

{% raw %}
```yaml
password: ${{secrets.MY_ARTIFACTORY_PASSWORD}}
```
{% endraw %}

자세한 내용은 “[dependabot.yml 파일에 대한 구성 옵션](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)”을 참조하세요.

### 비밀 이름 지정

{% data variables.product.prodname_dependabot %} 비밀의 이름입니다.
* 영숫자 문자(`[A-Z]`, `[0-9]`) 또는 밑줄(`_`)만 포함할 수 있습니다. 공백은 허용되지 않습니다. 소문자를 입력하면 대문자로 변경됩니다.
* `GITHUB_` 접두사로 시작하지 않아야 합니다.
* 숫자로 시작할 수 없습니다.

## {% data variables.product.prodname_dependabot %}에 대한 리포지토리 비밀 추가

{% data reusables.actions.permissions-statement-secrets-repository %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.dependabot.sidebar-secret %}
1. **새 리포지토리 비밀** 을 선택합니다.
1. **이름** 입력 상자에 비밀의 이름을 입력합니다.
1. 비밀 값을 입력합니다.
1. **비밀 추가** 를 클릭합니다.

   비밀의 이름은 Dependabot 비밀 페이지에 나열됩니다. **업데이트를** 클릭하여 비밀 값을 변경할 수 있습니다. **제거** 를 클릭하여 비밀을 삭제할 수 있습니다.

   ![리포지토리 비밀 업데이트 또는 제거](/assets/images/help/dependabot/update-remove-repo-secret.png)

## {% data variables.product.prodname_dependabot %}에 대한 조직 암호 추가

조직에서 비밀을 만들 때 정책을 사용하여 해당 비밀에 액세스할 수 있는 리포지토리를 제한할 수 있습니다. 예를 들어 모든 리포지토리에 대한 액세스 권한을 부여하거나 프라이빗 리포지토리 또는 지정된 리포지토리 목록에 대해서만 액세스를 제한할 수 있습니다.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.dependabot.sidebar-secret %}
1. **새 조직 비밀** 을 클릭합니다.
1. **이름** 입력 상자에 비밀의 이름을 입력합니다.
1. **값** 필드에 비밀 값을 입력합니다.
1. **리포지토리 액세스** 드롭다운 목록에서 액세스 정책을 선택합니다.
1. **선택한 리포지토리** 를 선택한 경우:

   * {% octicon "gear" aria-label="The Gear icon" %} 아이콘을 클릭합니다.
   * 이 비밀에 액세스할 수 있는 리포지토리를 선택합니다. 
     ![이 비밀에 대한 리포지토리 선택](/assets/images/help/dependabot/secret-repository-access.png)
   * **선택 항목 업데이트** 를 클릭합니다.

1. **비밀 추가** 를 클릭합니다.

   비밀의 이름은 Dependabot 비밀 페이지에 나열됩니다. **업데이트** 를 클릭하여 비밀 값 또는 해당 액세스 정책을 변경할 수 있습니다. **제거** 를 클릭하여 비밀을 삭제할 수 있습니다.

   ![조직 암호 업데이트 또는 제거](/assets/images/help/dependabot/update-remove-org-secret.png)
   
## 레지스트리 IP 허용 목록에 {% data variables.product.prodname_dependabot %} 추가

개인 레지스트리가 IP 허용 목록으로 구성된 경우 {% data variables.product.prodname_dependabot %}에서 `dependabot` 키 아래 메타 API 엔드포인트의 레지스트리에 액세스하는 데 사용하는 IP 주소를 찾을 수 있습니다. 자세한 내용은 “[Meta](/rest/reference/meta)”를 참조하세요.
