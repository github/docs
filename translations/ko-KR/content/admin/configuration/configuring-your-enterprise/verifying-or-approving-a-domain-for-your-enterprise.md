---
title: 엔터프라이즈의 도메인 확인 또는 승인
shortTitle: Verify or approve a domain
intro: '{% data variables.product.company_short %}를 사용하여 도메인 소유권을 확인하여 엔터프라이즈 계정이 소유한 조직의 ID를 확인할 수 있습니다. 조직 구성원이 이메일 알림을 받을 수 있는 도메인을 승인할 수도 있습니다.'
product: '{% data reusables.gated-features.verify-and-approve-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can verify or approve a domain for an enterprise account.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
redirect_from:
  - /admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-account/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/configuration/verifying-or-approving-a-domain-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain
  - /github/articles/verifying-your-enterprise-accounts-domain
  - /early-access/github/articles/verifying-your-enterprise-accounts-domain
  - /github/setting-up-and-managing-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise-account
  - /admin/policies/verifying-or-approving-a-domain-for-your-enterprise
ms.openlocfilehash: dd4b832eebac9b709f5ee03d91b74df2dc778dfa
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/04/2022
ms.locfileid: '148008824'
---
## 도메인 확인 정보

엔터프라이즈 계정이 소유한 조직의 프로필에 나열된 웹 사이트 및 이메일 주소가 도메인을 확인하여 엔터프라이즈에서 제어되는지 확인할 수 있습니다. 엔터프라이즈 계정의 확인된 도메인은 엔터프라이즈 계정이 소유한 모든 조직에 적용됩니다.

엔터프라이즈 계정 도메인의 소유권을 확인한 후에는 프로필에 도메인이 나열된 각 조직의 프로필에 "확인됨" 배지가 표시됩니다. {% data reusables.organizations.verified-domains-details %}

엔터프라이즈 수준에서 구성된 도메인의 경우 엔터프라이즈 소유자는 확인된 도메인 내에서 각 구성원의 이메일 주소를 확인하여 조직 구성원의 ID를 확인할 수 있습니다. 엔터프라이즈 소유자는 {% data variables.product.prodname_dotcom %}에서 사용자 계정과 연결된 확인된 도메인의 이메일 주소가 없는 엔터프라이즈 구성원의 목록을 볼 수도 있습니다. 자세한 내용은 "[확인된 도메인의 이메일 주소가 없는 구성원 보기](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain)"를 참조하세요.

엔터프라이즈 계정의 도메인을 확인한 후에는 엔터프라이즈 계정이 소유한 모든 조직의 확인된 도메인으로 이메일 알림을 제한할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 메일 알림 제한](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”을 참조하세요.

엔터프라이즈 계정에 대한 이메일 알림을 제한하지 않더라도 조직 소유자가 조직에 대한 이메일 알림을 제한한 경우 조직 구성원은 조직에 대해 확인되거나 승인된 도메인 외에도 엔터프라이즈 계정에 대해 확인되거나 승인된 모든 도메인에서 알림을 받을 수 있습니다. 조직에 대한 알림 제한에 관한 자세한 내용은 "[조직에 대한 이메일 알림 제한](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)"을 참조하세요.

조직 소유자는 해당 조직에 대한 추가 도메인을 확인할 수도 있습니다. 자세한 내용은 “[조직의 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”을 참조하세요.

## 도메인 승인 정보

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.approved-domains-about %}

엔터프라이즈 계정의 도메인을 승인한 후에는 엔터프라이즈 계정 내 활동에 대한 이메일 알림을 확인되거나 승인된 도메인 내에서 확인된 이메일 주소가 있는 사용자로 제한할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 메일 알림 제한](/admin/policies/enforcing-policies-for-your-enterprise/restricting-email-notifications-for-your-enterprise)”을 참조하세요.

{% ifversion ghec %} 이메일 알림을 받으려면 사용자 계정 소유자가 {% data variables.product.product_name %}에서 이메일 주소를 확인해야 합니다. 자세한 내용은 “[메일 주소 확인](/github/getting-started-with-github/verifying-your-email-address)”을 참조하세요.{% endif %}

조직 소유자는 이메일 주소 또는 승인된 도메인의 이메일 주소와 연결된 사용자 계정을 볼 수 없습니다.

조직 소유자는 해당 조직에 대한 추가 도메인을 승인할 수도 있습니다. 자세한 내용은 “[조직의 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”을 참조하세요.

## 엔터프라이즈 계정의 도메인 확인

엔터프라이즈 계정의 도메인을 확인하려면 도메인 호스팅 서비스를 사용하여 도메인 레코드를 수정할 수 있는 액세스 권한이 있어야 합니다.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.add-dns-txt-record %}
1. DNS 구성이 변경될 때까지 기다리세요. 최대 72시간이 걸릴 수 있습니다. 명령줄에서 `dig` 명령을 실행하고 `ENTERPRISE-ACCOUNT`를 엔터프라이즈 계정의 이름으로 바꾸고 `example.com`을 확인하려는 도메인으로 대체하여 DNS 구성이 변경되었는지 확인할 수 있습니다. 명령 출력에 나열된 새 TXT 레코드가 표시되어야 합니다.
   ```shell
   dig _github-challenge-ENTERPRISE-ACCOUNT.DOMAIN-NAME +nostats +nocomments +nocmd TXT
   ```
1. TXT 레코드가 DNS에 추가되었는지 확인한 후 위의 1~4단계를 수행하여 엔터프라이즈 계정의 승인 및 확인된 도메인으로 이동합니다.
{% data reusables.enterprise-accounts.continue-verifying-domain %}
1. 필요에 따라 조직 프로필에 "확인됨" 배지가 표시되면 도메인 호스팅 서비스의 DNS 레코드에서 TXT 항목을 삭제합니다.
![확인된 배지](/assets/images/help/organizations/verified-badge.png)

## 엔터프라이즈 계정의 도메인 승인

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.enterprise-accounts.add-a-domain %} {% data reusables.organizations.add-domain %} {% data reusables.organizations.domains-approve-it-instead %} {% data reusables.organizations.domains-approve-domain %}

## 승인되거나 확인된 도메인 제거

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %}
1. 제거할 도메인 오른쪽에서 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}을 클릭한 다음, **삭제** 를 클릭합니다.
    ![도메인에 대한 “삭제”](/assets/images/help/organizations/domains-delete.png)
