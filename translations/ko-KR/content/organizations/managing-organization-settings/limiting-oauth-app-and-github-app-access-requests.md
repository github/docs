---
title: OAuth 앱 및 GitHub 앱 액세스 요청 제한
intro: '조직 소유자는 외부 협력자가 {% data variables.product.prodname_oauth_apps %} 및 {% data variables.product.prodname_github_apps %}에 대한 조직 액세스를 요청할 수 있도록 허용할지 여부를 선택할 수 있습니다.'
versions:
  feature: limit-app-access-requests
permissions: Organization owners can limit who can make app access requests to the organization.
topics:
  - Organizations
  - GitHub Apps
  - OAuth Apps
shortTitle: Limit app access requests
ms.openlocfilehash: 4ea1bd133dcbabb9e7b3e3cbe65da5ff9c6eabac
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148008695'
---
## 통합 액세스 요청 정보

통합 액세스 요청을 사용하도록 설정하면 외부 협력자는 조직에서 아직 승인하지 않은 {% data variables.product.prodname_github_apps %} 및 {% data variables.product.prodname_oauth_apps %}에 대한 조직 액세스를 요청할 수 있습니다. 통합 액세스 요청을 사용하지 않도록 설정하면 조직 구성원만 승인되지 않은 {% data variables.product.prodname_github_apps %} 및 {% data variables.product.prodname_oauth_apps %}에 대한 조직 액세스를 요청할 수 있습니다. 외부 협력자는 외부 협력자가 액세스할 수 있는 동일한 리소스에 액세스하는 사전 승인된 {% data variables.product.prodname_github_apps %} 및 {% data variables.product.prodname_oauth_apps %}에 계속 동의할 수 있습니다.

기본적으로 통합 액세스 요청은 사용하도록 설정됩니다. 조직에 많은 수의 외부 협력자가 있는 경우 통합 액세스 요청을 사용하지 않도록 설정하여 검토해야 하는 요청 수를 줄일 수 있습니다. 

## 교차 액세스 요청 사용 또는 사용 안 함

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.profile.org_member_privileges %}
1. "통합 액세스 요청" **에서 외부 협력자의 통합 요청 허용을** 선택하거나 선택 취소하고 **저장** 을 클릭합니다.
    ![통합 액세스 요청 설정 스크린샷](/assets/images/help/organizations/integration-access-requests.png)
