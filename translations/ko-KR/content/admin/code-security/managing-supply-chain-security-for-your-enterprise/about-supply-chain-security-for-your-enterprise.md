---
title: 기업을 위한 공급망 보안 정보
intro: 코드가 사용하는 종속성을 개발자가 이해하고 업데이트하는 데 도움이 되는 기능을 사용하도록 설정할 수 있습니다.
shortTitle: About supply chain security
permissions: ''
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
ms.openlocfilehash: edfa8c2abecfa4eb7dc797d1dac3a06827fff5d7
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135697'
---
{% ifversion ghes %}{% elsif ghae %}를 사용하여 {% data variables.location.product_location %}에 대한 종속성 그래프를 사용하여 사용자가 프로젝트의 종속성을 식별하도록 허용할 수 있습니다. 자세한 내용은 “{% ifversion ghes %}[엔터프라이즈에 대해 종속성 그래프 사용](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise){% elsif ghae %}[종속성 그래프 정보](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph){% endif %}”를 참조하세요.

{% data reusables.dependency-review.dependency-review-enabled-ghes %}

{% data variables.location.product_location %}의 사용자가 {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} 및 {% data variables.product.prodname_dependabot_updates %}{% endif %}를 사용하도록 설정하여 코드 종속성에서 취약성을 찾아 수정하도록 허용할 수도 있습니다. 자세한 내용은 “[엔터프라이즈에 {% data variables.product.prodname_dependabot %} 사용](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)”을 참조하세요.

{% data variables.product.prodname_dependabot_alerts %}을(를) 사용하도록 설정한 후 {% data variables.product.prodname_advisory_database %}의 {% data variables.location.product_location %}에서 취약성 데이터를 보고 데이터를 수동으로 동기화할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 취약성 데이터 보기](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)”를 참조하세요.
