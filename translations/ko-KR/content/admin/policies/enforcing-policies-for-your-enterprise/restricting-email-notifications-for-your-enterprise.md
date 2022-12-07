---
title: 엔터프라이즈에 대한 메일 알림 제한
intro: 구성원이 엔터프라이즈가 소유한 조직의 활동에 대한 이메일 알림을 받을 수 있는 도메인을 제한하여 기업의 정보가 개인 이메일 계정으로 유출되는 것을 방지할 수 있습니다.
product: '{% data reusables.gated-features.restrict-email-domain %}'
versions:
  ghec: '*'
  ghes: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise.
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policies
redirect_from:
  - /admin/policies/restricting-email-notifications-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account-to-approved-domains
  - /github/setting-up-and-managing-your-enterprise/restricting-email-notifications-for-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/restricting-email-notifications-for-your-enterprise-account
shortTitle: Restrict email notifications
ms.openlocfilehash: f5ef3b4ffd3db266e96d4f7fc90f43cbd226034f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066499'
---
## 엔터프라이즈에 대한 메일 제한 정보

메일 알림을 제한하는 경우 엔터프라이즈 구성원은 확인되거나 승인된 도메인의 메일 주소만 사용하여 엔터프라이즈가 소유한 조직의 활동에 대한 메일 알림을 받을 수 있습니다.

{% data reusables.enterprise-accounts.approved-domains-beta-note %}

도메인은 엔터프라이즈에서 상속되거나 특정 조직에 대해 구성할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 도메인 확인 또는 승인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)” 및 “[조직에 대한 메일 알림 제한](/organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization)”을 참조하세요.

{% data reusables.notifications.email-restrictions-verification %}

엔터프라이즈의 메일 제한을 사용하도록 설정한 경우 조직 소유자는 엔터프라이즈가 소유한 모든 조직에 대해 메일 제한을 사용하지 않도록 설정할 수 없습니다. 변경으로 인해 조직을 소유하는 엔터프라이즈로부터 상속되거나 또는 특정 조직에 대해 상속되는 확인 및 승인된 도메인이 없는 조직의 경우, 이 조직에 대한 메일 제한은 비활성화됩니다.

## 엔터프라이즈에 대한 메일 알림 제한

엔터프라이즈에 대한 메일 알림을 제한하려면 먼저 엔터프라이즈에 대해 하나 이상의 도메인을 확인하거나 승인해야 합니다. {% ifversion ghec %} 자세한 내용은 “[엔터프라이즈의 도메인 확인 또는 승인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”을 참조하세요.{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.verified-domains-tab %} {% data reusables.organizations.restrict-email-notifications %}
1. **저장** 을 클릭합니다.
