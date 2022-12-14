---
title: 개인 계정에 대한 보안 및 분석 설정 관리
intro: '{% data variables.product.prodname_dotcom %}에서 프로젝트의 코드를 보호하고 분석하는 기능을 제어할 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: Manage security & analysis
ms.openlocfilehash: 22ff867691f79360db54f0fe85f5e988c71536a3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108954'
---
## 보안 및 분석 설정 관리 정보

{% data variables.product.prodname_dotcom %}는 리포지토리를 보호하는 데 도움이 될 수 있습니다. 이 항목에서는 모든 기존 또는 새 리포지토리에 대한 보안 및 분석 기능을 관리하는 방법을 설명합니다.

개별 리포지토리에 대한 보안 및 분석 기능을 계속 관리할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”를 참조하세요.

개인 계정의 모든 작업에 대한 보안 로그를 검토할 수도 있습니다. 자세한 내용은 “[보안 로그 검토](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)”를 참조하세요.

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

리포지토리 수준 보안에 대한 개요는 “[리포지토리 보안 설정](/code-security/getting-started/securing-your-repository)”을 참조하세요.

## 기존 리포지토리에 대한 기능을 사용하거나 사용하지 않도록 설정

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. “코드 보안 및 분석”에서 기능 오른쪽에 있는 **모두 사용** 또는 **모두 사용 안 함** 을 클릭합니다.
  {% ifversion ghes %}![" "보안 및 분석 구성" 기능에 대해 모두 사용" 또는 "모두 사용 안 함" 단추](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}!["모두 사용" 또는 "보안 및 분석 구성" 기능에](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png) 대해 "모두 사용 안 함" 단추{% endif %}
6. 필요에 따라 사용자가 소유한 새 리포지토리에 대해 기본적으로 기능을 사용하도록 설정합니다.
  {% ifversion ghes %}![" 새 리포지토리](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png)에 대해 기본적으로 사용" 옵션{% else %}!["기본적으로 사용" 새 리포지토리](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png)에 대한 옵션{% endif %}
7. **기능 사용 안 함** 또는 **기능 사용** 을 클릭하여 소유한 모든 리포지토리에 대해 기능을 사용하거나 사용하지 않도록 설정합니다.
  {% ifversion ghes %}![ 기능을](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png) 사용하지 않도록 설정하거나 사용하도록 설정하는 단추{% else %}![기능을](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png) 사용하지 않도록 설정하거나 사용하도록 설정하는 단추{% endif %}

{% data reusables.security.displayed-information %}

## 새 리포지토리에 대한 기능 사용 또는 사용 안 함

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. “코드 보안 및 분석”의 기능 오른쪽에서 사용자가 소유한 새 리포지토리에 대해 기본값으로 기능을 사용하거나 사용하지 않도록 설정합니다.
  {% ifversion ghes %}![ 새 리포지토리에 대한 기능을 사용하거나 사용하지 않도록 설정하기 위한 확인란{% else %}![새 리포](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png)지](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png)토리에 대한 기능을 사용하거나 사용하지 않도록 설정하기 위한 확인란{% endif %}

## 추가 참고 자료

- “[종속성 그래프 정보](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- “[{% data variables.product.prodname_dependabot_alerts %} 정보](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”
- “[종속성을 자동으로 업데이트된 상태로 유지](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)”
