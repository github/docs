---
title: Dependabot 경고에 대한 알림 구성
shortTitle: Configure notifications
intro: '{% data variables.product.prodname_dependabot_alerts %}에 대한 알림을 받는 방법을 최적화합니다.'
redirect_from:
  - /github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Notifications
  - Vulnerabilities
  - Dependencies
  - Repositories
ms.openlocfilehash: 570a41570821b61aa68d625c92e6e9384e893f1a
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/05/2022
ms.locfileid: '148134894'
---
## {% data variables.product.prodname_dependabot_alerts %}의 알림 정보

{% data variables.product.prodname_dependabot %}에서 리포지토리의 취약한 종속성{% ifversion GH-advisory-db-supports-malware %} 또는 맬웨어{% endif %} 문제를 감지하면 {% data variables.product.prodname_dependabot %} 경고가 생성되어 리포지토리의 보안 탭에 표시됩니다. {% data variables.product.product_name %}은 알림 기본 설정에 따라 영향을 받는 리포지토리의 유지 관리자에게 새 경고를 알릴 수 있습니다. {% ifversion fpt or ghec %} {% data variables.product.prodname_dependabot %}은 모든 퍼블릭 리포지토리에서 기본적으로 사용하도록 설정됩니다. {% data variables.product.prodname_dependabot_alerts %}의 경우에는 기본적으로 특정 취약성별로 그룹화되는 이메일을 통해 {% data variables.product.prodname_dependabot_alerts %}를 수신합니다.
{% endif %} 

{% ifversion fpt or ghec %}조직 소유자인 경우 클릭 한 병으로 조직의 모든 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하거나 사용하지 않도록 설정할 수 있습니다. 새로 만든 리포지토리에 대해 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정할 수도 있습니다. 자세한 내용은 “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization#enabling-or-disabling-a-feature-for-all-new-repositories-when-they-are-added)”를 참조하세요.
{% endif %}

{% ifversion ghes or ghae %} 기본적으로 엔터프라이즈 소유자가 엔터프라이즈의 알림을 위한 이메일을 구성한 경우 {% data variables.product.prodname_dependabot_alerts %}를 이메일로 받게 됩니다.

엔터프라이즈 소유자는 알림 없이 {% data variables.product.prodname_dependabot_alerts %}를 사용하도록 설정할 수도 있습니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.
{% endif %}

## {% data variables.product.prodname_dependabot_alerts %}의 알림 구성

{% ifversion fpt or ghes or ghec %} 새 {% data variables.product.prodname_dependabot %} 경고가 감지되면 {% data variables.product.product_name %}에서는 리포지토리에 대한 {% data variables.product.prodname_dependabot_alerts %}에 액세스할 수 있는 모든 사용자에게 알림 기본 설정에 따라 알림을 보냅니다. 리포지토리를 보고 있거나, 보안 경고 또는 리포지토리의 모든 활동에 대한 알림을 사용하도록 설정했거나, 리포지토리를 무시하지 않는 경우 경고를 받게 됩니다. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository)”을 참조하세요.
{% endif %}

각 페이지 맨 위에 표시되는 알림 병합 드롭다운 {% octicon "bell" aria-label="The notifications bell" %}에서 자신 또는 조직에 대한 알림 설정을 구성할 수 있습니다. 자세한 내용은 “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#choosing-your-notification-settings)”을 참조하세요.

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} {% data reusables.notifications.vulnerable-dependency-notification-options %}

{% ifversion update-notification-settings-22 %} ![ {% data variables.product.prodname_dependabot_alerts %} 옵션](/assets/images/help/dependabot/dependabot-notification-frequency.png)의 스크린샷{% endif %}{% ifversion ghes > 3.7 or ghae > 3.7 %} {% data variables.product.prodname_dependabot_alerts %의 ![스크린샷 } 옵션](/assets/images/help/enterprises/dependabot-alerts-options-no-UI.png){% endif %}{% ifversion ghes < 3.8 or ghae < 3.8 %} ![{% data variables.product.prodname_dependabot_alerts %} 옵션](/assets/images/help/notifications-v2/dependabot-alerts-options.png)의 스크린샷{% endif %}


{% note %}

**참고:** {% data variables.product.company_short %}에 대한 알림을 필터링하여 {% data variables.product.prodname_dependabot_alerts %}를 표시할 수 있습니다. 자세한 내용은 “[받은 편지함의 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)”를 참조하세요.

{% endnote %}

{% data reusables.repositories.security-alerts-x-github-severity %} 자세한 내용은 "[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications)"을 참조하세요.

## {% data variables.product.prodname_dependabot_alerts %}의 알림에서 노이즈를 줄이는 방법

{% data variables.product.prodname_dependabot_alerts %}에 대한 알림이 너무 많이 수신됨이 염려된다면 주간 이메일 다이제스트를 신청하거나, {% data variables.product.prodname_dependabot_alerts %}는 사용하도록 설정하되 선택하거나 알림은 끄는 것이 좋습니다. 여전히 리포지토리의 보안 탭으로 이동하면 {% data variables.product.prodname_dependabot_alerts %}를 확인할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”를 참조하세요.

## 추가 참고 자료

- “[알림 구성](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications)”
- "[받은 편지함에서 알림 관리](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#supported-is-queries)"
