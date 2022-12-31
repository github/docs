---
title: 조직의 도메인 확인 또는 승인
intro: '{% data variables.product.company_short %}를 사용하여 도메인의 소유권을 확인하면 조직의 ID를 확인할 수 있습니다. {% data variables.product.company_short %}가 조직의 구성원에게 이메일 알림을 보낼 수 있는 도메인을 승인할 수도 있습니다.'
redirect_from:
  - /articles/verifying-your-organization-s-domain
  - /articles/verifying-your-organizations-domain
  - /github/setting-up-and-managing-organizations-and-teams/verifying-your-organizations-domain
  - /organizations/managing-organization-settings/verifying-your-organizations-domain
permissions: Organization owners can verify or approve a domain for an organization.
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Verify or approve a domain
ms.openlocfilehash: ef866608c32bbcce36292822521f941a5c37476f
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009302'
---
## 도메인 확인 정보

조직 도메인의 소유권을 확인한 후에는 조직의 프로필에 “확인된” 배지가 표시됩니다. {% ifversion ghec %}조직에서 회사 서비스 약관에 동의한 경우 조직 소유자는 확인된 도메인 내에서 각 구성원의 이메일 주소를 확인하여 조직 구성원의 ID를 확인할 수 있습니다. 자세한 내용은 “[조직의 프로필 페이지 정보](/articles/about-your-organization-s-profile/)” 및 “<a href="/articles/upgrading-to-the-corporate-terms-of-service" class="dotcom-only">회사 서비스 약관으로 업그레이드</a>”를 참조하세요. {% endif %}

{% ifversion ghec %} 조직이 엔터프라이즈 계정으로 소유되는 경우 {% elsif ghes %}A{% endif %} “확인됨” 배지는 조직에 대해 확인된 도메인 외에 엔터프라이즈 계정에 대해 확인된 도메인에 대한 조직의 프로필에 표시됩니다. 조직 소유자는 엔터프라이즈 소유자가 확인하거나 승인한 도메인을 보고, 조직 소유자가 엔터프라이즈 소유자인 경우 도메인을 편집할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 도메인 확인 또는 승인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”을 참조하세요.

{% ifversion ghec %} {% note %}

**참고:** 도메인을 확인하거나 승인하려면 조직에서 {% data variables.product.prodname_ghe_cloud %}를 사용해야 합니다. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.organizations.verified-domains-details %}

{% ifversion ghec or ghes %} 조직 도메인의 소유권을 확인한 후 조직의 이메일 알림을 해당 도메인으로 제한할 수 있습니다. 자세한 내용은 “[조직의 이메일 알림 제한](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”을 참조하세요.
{% endif %}

{% ifversion ghec %}사용자 지정 도메인이 구성되었지만 {% data variables.product.prodname_pages %} 사이트가 비활성화되었거나 더 이상 도메인을 사용하지 않는 경우 도메인 인수를 방지하기 위해 {% data variables.product.prodname_pages %}에 사용되는 사용자 지정 도메인을 확인할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_pages %}에 대한 사용자 지정 도메인 확인](/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)”을 참조하세요.{% endif %}

## 도메인 승인 정보

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

조직의 도메인을 승인한 후에는 조직 내 활동에 대한 이메일 알림을 확인되거나 승인된 도메인 내에서 확인된 이메일 주소가 있는 사용자로 제한할 수 있습니다. 자세한 내용은 “[조직의 이메일 알림 제한](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”을 참조하세요.

엔터프라이즈 소유자는 승인된 도메인 내에서 알림을 받는 조직 구성원 또는 이메일 주소를 볼 수 없습니다.

엔터프라이즈 소유자는 엔터프라이즈가 소유한 조직의 추가 도메인을 승인할 수도 있습니다. {% ifversion ghec %}자세한 내용은 “[엔터프라이즈의 도메인 확인 또는 승인](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”을 참조하세요.{% endif %}{% ifversion ghes %}자세한 내용은 “[엔터프라이즈의 도메인 확인 또는 승인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”을 참조하세요.{% endif %}

## 조직의 도메인 확인

도메인을 확인하려면 도메인 호스팅 서비스를 사용하여 도메인 레코드를 수정할 수 있는 액세스 권한이 있어야 합니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. DNS 구성이 변경될 때까지 기다리세요. 최대 72시간이 걸릴 수 있습니다. 명령줄에서 `dig` 명령을 실행하고 `ORGANIZATION`을 조직의 이름으로 바꾸고 `example.com`을 확인하려는 도메인으로 대체하여 DNS 구성이 변경되었는지 확인할 수 있습니다. 명령 출력에 나열된 새 TXT 레코드가 표시되어야 합니다.
   ```shell
   $ dig _github-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
   ```
1. TXT 레코드가 DNS에 추가되었는지 확인한 후 위의 1~3단계를 수행하여 조직의 승인 및 확인된 도메인으로 이동합니다.
{% data reusables.organizations.continue-verifying-domain %}
11. 필요에 따라 조직 프로필 페이지에 “확인된” 배지가 표시되면 도메인 호스팅 서비스의 DNS 레코드에서 TXT 항목을 삭제할 수 있습니다.
![확인된 배지](/assets/images/help/organizations/verified-badge.png)

## 조직의 도메인 확인

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## 승인되거나 확인된 도메인 제거

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %}
1. 제거할 도메인 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음, **삭제** 를 클릭합니다.
    ![도메인에 대한 “삭제”](/assets/images/help/organizations/domains-delete.png)
