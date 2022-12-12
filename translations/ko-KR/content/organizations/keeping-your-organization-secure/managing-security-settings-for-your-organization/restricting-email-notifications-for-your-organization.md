---
title: 조직에 대한 메일 알림 제한
intro: 조직 정보가 개인 메일 계정으로 유출되지 않도록 하려면 멤버가 조직 활동에 대한 메일 알림을 받을 수 있는 도메인을 제한할 수 있습니다.
permissions: Organization owners can restrict email notifications for an organization.
redirect_from:
  - /articles/restricting-email-notifications-about-organization-activity-to-an-approved-email-domain
  - /articles/restricting-email-notifications-to-an-approved-domain
  - /github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-to-an-approved-domain
  - /organizations/keeping-your-organization-secure/restricting-email-notifications-for-your-organization
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Notifications
  - Organizations
  - Policy
shortTitle: Restrict email notifications
ms.openlocfilehash: 480f587862e0618c0624eec581520343c54afa35
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060100'
---
## 메일 제한 정보

조직에서 제한된 메일 알림을 사용하도록 설정하면 구성원은 확인되거나 승인된 도메인과 연결된 메일 주소만 사용하여 조직 활동에 대한 메일 알림을 받을 수 있습니다. 자세한 내용은 “[조직의 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”을 참조하세요.

{% ifversion ghec %} {% note %}

**참고:** 메일 알림을 제한하려면 조직에서 {% data variables.product.prodname_ghe_cloud %}을(를) 사용해야 합니다. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.notifications.email-restrictions-verification %}

외부 협력자는 확인되거나 승인된 도메인에 대한 메일 알림에 대한 제한이 적용되지 않습니다. 외부 협력자에 대한 자세한 내용은 “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#outside-collaborators)”을 참조하세요.

조직이 엔터프라이즈 계정의 소유인 경우 조직 구성원은 조직에 대해 확인되거나 승인된 도메인 외에도 엔터프라이즈 계정에 대해 확인되거나 승인된 모든 도메인에서 알림을 받을 수 있습니다. 자세한 내용은 “[엔터프라이즈의 도메인 확인 또는 승인](/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”을 참조하세요.

## 메일 알림 제한

조직에 대한 메일 알림을 제한하려면 먼저 조직의 도메인을 하나 이상 확인하거나 승인해야 합니다. 또는 엔터프라이즈 소유자가 엔터프라이즈 계정에 대해 하나 이상의 도메인을 확인하거나 승인해야 합니다.

조직의 도메인 확인 및 승인에 대한 자세한 내용은 “[조직의 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”을 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.verified-domains %} {% data reusables.organizations.restrict-email-notifications %}
6. **저장** 을 클릭합니다.
