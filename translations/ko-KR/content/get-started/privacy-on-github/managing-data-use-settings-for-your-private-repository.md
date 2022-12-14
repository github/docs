---
title: 프라이빗 리포지토리에 대한 데이터 사용 설정 관리
intro: '{% data variables.product.product_name %}이 관련 도구, 사람, 프로젝트, 정보에 연결할 수 있도록 프라이빗 리포지토리에 대한 데이터 사용을 구성할 수 있습니다.'
redirect_from:
  - /articles/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/opting-into-or-out-of-data-use-for-your-private-repository
  - /github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: Manage data use for private repo
ms.openlocfilehash: 36ddc4449726b67863e7d4e045dd1582b12f2c27
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147526672'
---
## 프라이빗 리포지토리에 대한 데이터 사용 정보


보안 및 분석 기능을 사용하여 프라이빗 리포지토리에 대한 데이터 사용을 제어할 수 있습니다. 

- 리포지토리에서 읽기 전용 데이터 분석을 허용하도록 종속성 그래프를 활성화합니다. 
- 리포지토리의 읽기 전용 데이터 분석을 차단하도록 종속성 그래프를 비활성화합니다. 

프라이빗 리포지토리에 대한 데이터 사용을 활성화하면 종속성 그래프에 액세스할 수 있습니다. 여기서 {% data variables.product.product_name %}에서 취약한 종속성을 감지하면 리포지토리의 종속성을 추적하고 {% data variables.product.prodname_dependabot_alerts %}를 받을 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)”를 참조하세요.


{% note %}

**참고:** 종속성 그래프를 비활성화하면 {% data variables.product.prodname_dependabot_alerts %} 및 {% data variables.product.prodname_dependabot_security_updates %}도 비활성화됩니다. 자세한 내용은 “[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)”를 참조하세요. 

{% endnote %}

## 보안 및 분석 기능을 통해 데이터 사용 활성화 또는 비활성화

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. "코드 보안 및 분석"의 기능 오른쪽에서 **사용 안 함** 또는 **사용** 을 클릭합니다.{% ifversion fpt %} !["보안 및 분석 구성" 기능에 대한 "사용" 또는 "사용 안 함" 단추](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} !["보안 및 분석 구성" 기능에 대한 "사용" 또는 "사용 안 함" 단추](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% endif %}

## 추가 참고 자료

- "[{% data variables.product.prodname_dotcom %}의 데이터 사용 정보](/articles/about-github-s-use-of-your-data)"
- “[{% data variables.product.prodname_dependabot_alerts %} 보기 및 업데이트](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)”
- “[리포지토리에 대한 보안 및 분석 설정 관리](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)”
