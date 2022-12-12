---
title: GitHub의 액세스 권한
redirect_from:
  - /articles/needs-to-be-written-what-can-the-different-types-of-org-team-permissions-do
  - /articles/what-are-the-different-types-of-team-permissions
  - /articles/what-are-the-different-access-permissions
  - /articles/access-permissions-on-github
  - /github/getting-started-with-github/access-permissions-on-github
  - /github/getting-started-with-github/learning-about-github/access-permissions-on-github
intro: '역할을 사용하면 {% data variables.product.product_name %}에서 계정 및 리소스에 대한 액세스 권한이 있는 사용자와 각 사용자가 가진 액세스 수준을 제어할 수 있습니다.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Permissions
  - Accounts
shortTitle: Access permissions
ms.openlocfilehash: 0e13bf53980ab6e239890dd155f952882d122db1
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098046'
---
## {% data variables.product.prodname_dotcom %}의 액세스 권한 정보

{% data reusables.organizations.about-roles %} 

역할은 계정 유형마다 다르게 작동합니다. 계정에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정 유형](/get-started/learning-about-github/types-of-github-accounts)”을 참조하세요.

## 개인 계정

개인 계정이 소유한 리포지토리에는 *리포지토리 소유자* 와 *협력자* 라는 두 가지 권한 수준이 있습니다. 자세한 내용은 “[사용자 계정 리포지토리의 권한 수준](/articles/permission-levels-for-a-user-account-repository)”을 참조하세요.

## 조직 계정

조직 멤버는 ‘소유자’{% ifversion fpt or ghec %}, ‘청구 관리자’,{% endif %} 또는 ‘멤버’ 역할을 가질 수 있습니다.   {% ifversion fpt or ghec %}청구 관리자는 청구 설정을 관리할 수 있지만 {% endif %}소유자는 조직에 대한 완전한 관리 권한을 갖습니다. 멤버는 다른 모든 사용자의 기본 역할입니다. 팀을 사용하여 한 번에 여러 멤버의 액세스 권한을 관리할 수 있습니다. 자세한 내용은 다음을 참조하세요.
- “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”
- “[조직의 프로젝트 보드 권한](/articles/project-board-permissions-for-an-organization)”
- “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”
- “[팀 정보](/articles/about-teams)”

## 엔터프라이즈 계정

{% ifversion fpt %} {% data reusables.gated-features.enterprise-accounts %} 

엔터프라이즈 계정의 권한에 대한 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/get-started/learning-about-github/access-permissions-on-github)를 참조하세요.
{% else %} ‘엔터프라이즈 소유자’는 엔터프라이즈 계정에 대한 궁극적인 권한을 가지며 엔터프라이즈 계정의 모든 작업을 수행할 수 있습니다.{% ifversion ghec or ghes %} ‘청구 관리자’는 엔터프라이즈 계정의 청구 설정을 관리할 수 있습니다.{% endif %} 엔터프라이즈 계정이 소유한 조직의 멤버 및 외부 협력자는 엔터프라이즈 계정 자체 또는 해당 설정에 액세스할 수 없지만 자동으로 엔터프라이즈 계정의 멤버가 됩니다.  자세한 내용은 “[엔터프라이즈의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)”을 참조하세요.

{% ifversion ghec %} 엔터프라이즈에서 {% data variables.product.prodname_emus %}를 사용하는 경우 멤버는 {% data variables.product.prodname_dotcom %}에서 새 개인 계정으로 프로비저닝되고 ID 공급자가 완전히 관리합니다. {% 데이터 variables.enterprise.prodname_managed_users %}은(는) 엔터프라이즈에 속하지 않고 엔터프라이즈 구성원이 아닌 사용자와 상호 작용할 수 없는 리포지토리에 대한 읽기 전용 액세스 권한을 가집니다. 엔터프라이즈가 소유한 조직 내에서 {% 데이터 variables.enterprise.prodname_managed_users %}은(는) 일반 조직에서 사용할 수 있는 것과 동일한 세분화된 액세스 수준을 부여할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_emus %} 정보](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)”를 참조하세요.
{% endif %} {% endif %}

## 추가 참고 자료

- “[{% data variables.product.prodname_dotcom %} 계정 유형](/articles/types-of-github-accounts)”
