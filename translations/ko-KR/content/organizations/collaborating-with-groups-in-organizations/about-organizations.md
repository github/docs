---
title: 조직 정보
intro: 조직은 비즈니스와 오픈 소스 프로젝트가 정교한 보안 및 관리 기능을 사용하여 여러 프로젝트에서 동시에 협업할 수 있는 공유 계정입니다.
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 0269554568c8781706a8d79600f5b6191d0b9598
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164333'
---
## 조직 정보

{% data reusables.organizations.about-organizations %} 계정 유형에 대한 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정 유형](/get-started/learning-about-github/types-of-github-accounts)”을 참조하세요.

무제한의 사용자를 조직에 가입하도록 초대한 다음, 조직 구성원에게 조직 및 해당 데이터에 대한 다양한 수준의 액세스 권한을 부여하는 다양한 역할을 제공할 수 있습니다. 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)”을 참조하세요.

조직 자체에 대한 액세스를 관리하는 것 외에도 조직의 리포지토리, 프로젝트 보드, 앱에 대한 액세스를 별도로 관리할 수 있습니다. 자세한 내용은 “[조직의 리포지토리 역할](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”, “[조직의 프로젝트 보드 권한](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)”, “[조직의 앱에 대한 액세스 관리](/organizations/managing-access-to-your-organizations-apps)”를 참조하세요.

액세스 관리를 간소화하고 협업을 강화하기 위해 연속 액세스 권한 및 멘션을 사용하여 그룹의 구조를 반영하는 중첩된 팀을 만들 수 있습니다. 자세한 내용은 “[팀 정보](/organizations/organizing-members-into-teams/about-teams)”를 참조하세요.

구성원이 만들 수 있는 리포지토리 유형을 제한하는 등의 설정을 관리하여 그룹의 고유한 요구 사항을 충족하도록 조직을 구성할 수 있습니다. 자세한 내용은 “[조직 설정 관리](/organizations/managing-organization-settings)”를 참조하세요.

조직의 보안을 강화하기 위해 보안 요구 사항을 적용하고 조직의 감사 로그를 검토할 수 있습니다. 자세한 내용은 “[조직 보안 유지](/organizations/keeping-your-organization-secure)”를 참조하세요.

조직을 가장 효과적으로 사용하는 방법을 알아보려면 "[조직에 대한 모범 사례"를 참조하세요](/organizations/collaborating-with-groups-in-organizations/best-practices-for-organizations).

{% ifversion fpt or ghec %}
## 기능 가용성 정보

{% data reusables.organizations.organization-plans %} {% endif %}

## 조직 및 엔터프라이즈 계정

{% ifversion fpt %} 엔터프라이즈 계정은 소유자가 여러 조직에 대한 정책 및 청구를 중앙에서 관리할 수 있도록 하는 {% data variables.product.prodname_ghe_cloud %}의 기능입니다. 자세한 내용은 [{% data variables.product.prodname_ghe_cloud %} 설명서](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations)를 참조하세요.
{% else %} {% ifversion ghec %}엔터프라이즈 계정에 속하는 조직의 경우 청구는 엔터프라이즈 계정 수준에서 관리되며, 청구 설정은 조직 수준에서 사용할 수 없습니다. {% endif %} 엔터프라이즈 소유자는 엔터프라이즈 계정의 모든 조직에 대한 정책을 설정하거나 조직 소유자가 조직 수준에서 정책을 설정하도록 허용할 수 있습니다. 조직 소유자는 엔터프라이즈 계정 수준에서 조직에 적용되는 설정을 변경할 수 없습니다. 조직의 정책 또는 설정에 대한 질문이 있는 경우 엔터프라이즈 계정 소유자에게 문의하세요.

{% ifversion ghec %} {% data reusables.enterprise.create-an-enterprise-account %} 자세한 내용은 “[엔터프라이즈 계정 만들기](/admin/overview/creating-an-enterprise-account)”를 참조하세요.

{% data reusables.enterprise-accounts.invite-organization %}

{% endif %} {% endif %}

{% ifversion fpt or ghec %}
## 조직의 서비스 약관 및 데이터 보호

회사, 비영리 단체 또는 그룹과 같은 업체는 조직의 표준 서비스 약관 또는 기업 서비스 약관에 동의할 수 있습니다. 자세한 내용은 “[기업 서비스 약관으로 업그레이드](/articles/upgrading-to-the-corporate-terms-of-service)”를 참조하세요.

{% endif %}
