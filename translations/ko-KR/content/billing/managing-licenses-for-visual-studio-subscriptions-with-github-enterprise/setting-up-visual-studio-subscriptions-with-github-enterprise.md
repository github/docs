---
title: GitHub Enterprise가 포함된 Visual Studio 구독 설정
intro: '팀에서 {% data variables.product.prodname_vs %}를 구독하면 {% data variables.product.prodname_enterprise %}에도 액세스할 수 있게 됩니다.'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Set up
ms.openlocfilehash: ae030de637593aa723a5d2990485881ae30b333c
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120627'
---
## {% data variables.visual_studio.prodname_vss_ghe %} 설정 정보

{% data reusables.enterprise-accounts.vss-ghe-description %} 자세한 내용은 "[{% data variables.visual_studio.prodname_vss_ghe %} 정보](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise)"를 참조하세요.

이 가이드에서는 팀이 {% data variables.product.prodname_vs %} 구독자에게 라이선스를 부여하고 {% data variables.product.prodname_enterprise %}로 시작하는 방법을 보여 줍니다.

비디오를 선호하는 경우 Microsoft Visual Studio의 YouTube 채널에서 [{% data variables.product.prodname_vs %} 구독을 사용한 {% data variables.product.prodname_enterprise %} 라이선스 설정](https://www.youtube.com/watch?v=P_zBgp_BE_I)을 시청할 수 있습니다.

## {% data variables.visual_studio.prodname_vss_ghe %}에 대한 역할

{% data variables.visual_studio.prodname_vss_ghe %}를 설정하기 전에 이 결합된 제품에 대한 역할을 이해하는 것이 중요합니다.

| 역할 | 서비스 | Description | 추가 정보 |
| :- | :- | :- | :- |
| **구독 관리자** | {% data variables.product.prodname_vs %} 구독 | {% data variables.product.prodname_vs %} 구독에 대한 라이선스를 할당하는 사람 | Microsoft Docs의 [관리자 책임 개요](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) |
| **구독자** | {% data variables.product.prodname_vs %} 구독 | {% data variables.product.prodname_vs %} 구독에 대한 라이선스를 사용하는 사람 | Microsoft Docs의 [Visual Studio 구독 설명서](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) |
| **엔터프라이즈 소유자** | {% data variables.product.prodname_dotcom %} | {% data variables.location.product_location %}의 엔터프라이즈 관리자인 개인 계정이 있는 사람 | “[엔터프라이즈에서의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner)” |
| **조직 소유자** | {% data variables.product.prodname_dotcom %} | {% data variables.location.product_location %}에서 팀 엔터프라이즈에 있는 조직의 소유자인 개인 계정이 있는 사람 | “[조직의 역할](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners)” |
| **엔터프라이즈 구성원** | {% data variables.product.prodname_dotcom %} | {% data variables.location.product_location %}의 엔터프라이즈 구성원인 개인 계정이 있는 사람 | “[엔터프라이즈에서의 역할](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)”  |

## 필수 조건

- 팀의 {% data variables.product.prodname_vs %} 구독에는 {% data variables.product.prodname_enterprise %}가 포함되어야 합니다. 자세한 내용은 {% data variables.product.prodname_vs %} 웹 사이트의 [{% data variables.product.prodname_vs %} 구독 및 혜택](https://visualstudio.microsoft.com/subscriptions/) 및 Microsoft Docs의 [관리자 책임 개요](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities)를 참조하세요.
 
 - 팀에 {% data variables.location.product_location %}에 엔터프라이즈가 있어야 합니다. 팀에 엔터프라이즈가 있는지 확실하지 않은 경우 {% data variables.product.prodname_dotcom %} 관리자에게 문의하세요. 팀이 {% data variables.product.prodname_dotcom %} 담당인지 확실하지 않은 경우 {% data variables.contact.contact_enterprise_sales %}에 문의하세요. 자세한 내용은 “[엔터프라이즈 계정 정보](/admin/overview/about-enterprise-accounts)”를 참조하세요.

## {% data variables.visual_studio.prodname_vss_ghe %} 설정

{% data variables.visual_studio.prodname_vss_ghe %}를 설정하려면 팀 구성원이 다음 작업을 완료해야 합니다.

한 사람이 모든 역할을 갖기 때문에 작업을 완료할 수 있지만 여러 사용자와 작업을 조정해야 할 수도 있습니다. 자세한 내용은 "[{% data variables.visual_studio.prodname_vss_ghe %}에 대한 역할](#roles-for-visual-studio-subscriptions-with-github-enterprise)"을 참조하세요.

1. 엔터프라이즈 소유자는 {% data variables.location.product_location %}에서 엔터프라이즈에 하나 이상의 조직을 만들어야 합니다. 자세한 내용은 “[엔터프라이즈에 조직 추가](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise)”를 참조하세요.

1. 구독 관리자는 {% data variables.product.prodname_vs %}에 대한 라이선스를 {% data variables.visual_studio.prodname_vss_admin_portal_with_url %}의 구독자에게 할당해야 합니다. 자세한 내용은 Microsoft Docs의 [{% data variables.product.prodname_vs %} 구독 관리자 포털의 개요](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal) 및 [{% data variables.product.prodname_vs %} 구독 관리 포털에서 {% data variables.product.prodname_vs %} 라이선스 할당](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license)을 참조하세요.

1. 필요에 따라 구독 관리자가 구독에 {% data variables.product.prodname_enterprise %}를 추가하기 전에 {% data variables.product.prodname_vs %}의 구독자에게 라이선스를 할당한 경우 구독 관리자는 {% data variables.product.prodname_vs %} 관리 포털의 결합된 제품으로 구독자를 이동할 수 있습니다. 자세한 내용은 Microsoft Docs의 [{% data variables.product.prodname_enterprise %}로 {% data variables.product.prodname_vs %} 구독 관리](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise)를 참조하세요.

1. 구독 관리자가 이메일 알림을 사용하지 않도록 설정하지 않은 경우 구독자는 두 개의 확인 이메일을 받게 됩니다. 자세한 내용은 Microsoft Docs의 [{% data variables.product.prodname_enterprise %}를 사용한 {% data variables.product.prodname_vs %} 구독](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process)을 참조하세요.

1. 조직 소유자는 1단계의 {% data variables.location.product_location %}에서 구독자를 조직에 초대해야 합니다. 구독자는 {% data variables.product.prodname_dotcom_the_website %}에서 기존 개인 계정으로 초대를 수락하거나 새 계정을 만들 수 있습니다. 구독자가 조직에 가입하면 구독자는 엔터프라이즈 구성원이 됩니다. 자세한 내용은 “[조직에 가입할 사용자 초대](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization)”를 참조하세요.

   {% tip %}

   **팁**:

   - 필수는 아니지만 조직 소유자가 구독자의 UPN(사용자 기본 이름)에 사용된 것과 동일한 이메일 주소로 초대를 보내는 것이 좋습니다. {% data variables.location.product_location %}의 이메일 주소가 구독자의 UPN과 일치하는 경우 다른 엔터프라이즈에서 구독자의 라이선스를 클레임하지 않도록 할 수 있습니다.
   - 구독자가 {% data variables.location.product_location %}에서 기존 개인 계정으로 조직에 대한 초대를 수락하는 경우 구독자는 {% data variables.product.prodname_vs %}에 사용하는 이메일 주소를 {% data variables.location.product_location %}의 개인 계정에 추가하는 것이 좋습니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %} 계정에 메일 주소 추가](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)”를 참조하세요.
   - 조직 소유자가 많은 수의 구독자를 초대해야 하는 경우 스크립트를 사용하면 프로세스가 더 빨라질 수 있습니다. 자세한 내용은 `github/platform-samples` 리포지토리의 [샘플 PowerShell 스크립트](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1)를 참조하세요.

    {% endtip %}

팀의 구독자에 대해 {% data variables.visual_studio.prodname_vss_ghe %}를 설정한 후 엔터프라이즈 소유자는 {% data variables.location.product_location %}에 대한 라이선스 정보를 검토할 수 있습니다. 자세한 내용은 “[엔터프라이즈 계정의 구독 및 사용량 보기](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account)”를 참조하세요.

## 추가 참고 자료

- “[{% data variables.product.prodname_ghe_cloud %} 시작](/get-started/onboarding/getting-started-with-github-enterprise-cloud)”
