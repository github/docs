---
ms.openlocfilehash: 432a33a54f6568b889f8089173f3787a960410fe
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147763742"
---
{% ifversion ghes < 3.5 %}

GitHub Enterprise Server 3.5 이상으로 업그레이드한 일부 GitHub Advanced Security 고객의 웹 UI와 REST API에 비밀 검사에서 보내는 경고가 표시되지 않는 경우가 있습니다. 경고가 계속 표시되게 하려면 이전 릴리스에서 3.5 이상으로 업그레이드할 때 3.4를 건너뛰지 않아야 합니다. 수정 사항은 [3.5.5](/enterprise-server@3.5/admin/release-notes#3.5.5) 및 [3.6.1](/enterprise-server@3.6/admin/release-notes#3.6.1) 패치 릴리스에서 사용할 수 있습니다.

3\.4를 거치는 업그레이드를 계획하는 방법은 [업그레이드 도우미](https://support.github.com/enterprise/server-upgrade)를 참조하세요. [업데이트한 날짜: 2022년 9월 1일]

{% elsif ghes = 3.5 or ghes = 3.6 %}

GitHub Enterprise Server {{ allVersions[currentVersion].currentRelease }} 이상으로 업그레이드한 일부 GitHub Advanced Security 고객의 웹 UI와 REST API에 비밀 검사에서 보내는 경고가 표시되지 않는 경우가 있습니다. 경고가 계속 표시되게 하려면 최신 릴리스로 업그레이드할 때 3.4를 건너뛰지 않아야 합니다. 3\.4를 거치는 업그레이드를 계획하는 방법은 [업그레이드 도우미](https://support.github.com/enterprise/server-upgrade)를 참조하세요.

- 조직에서 소유한 모든 리포지토리에 대한 누락된 경고를 표시하려면, 조직 소유자는 조직의 **코드 보안 및 분석** 설정으로 이동한 다음 비밀 검사의 **모두 활성화** 를 클릭해야 합니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-existing-repositories)”를 참조하세요.
- 개별 리포지토리에 대한 누락된 경고를 표시하려면, 리포지토리에 대한 관리자 액세스 권한이 있는 사람이 리포지토리의 비밀 검사를 비활성화한 다음 다시 활성화해야 합니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)”를 참조하세요.

수정 사항은 {% ifversion ghes = 3.5 %}[3.5.5](/admin/release-notes#3.5.5){% elsif ghes = 3.6 %}[3.6.1](/admin/release-notes#3.6.1){% endif %} 패치 릴리스에서 사용할 수 있습니다. [업데이트한 날짜: 2022년 9월 1일]

{% endif %}
