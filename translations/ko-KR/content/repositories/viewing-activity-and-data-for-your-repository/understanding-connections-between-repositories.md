---
title: 리포지토리 간 연결 이해
intro: 리포지토리의 네트워크와 포크 및 리포지토리에 의존하는 프로젝트를 확인하여 리포지토리 사이에 존재하는 연결을 더 잘 이해할 수 있습니다.
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
ms.openlocfilehash: f1b92a62d0acf9f31a16ce1b7c57850b87c1bf9c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060068'
---
## 리포지토리의 네트워크 보기

네트워크 그래프는 루트 리포지토리의 분기 및 네트워크에 고유한 커밋이 포함된 포크 분기를 포함하여 전체 리포지토리 네트워크의 분기 기록을 보여 줍니다.

![리포지토리 네트워크 그래프](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**팁:** 이전 분기를 보려면 그래프 내에서 클릭하고 끕니다.

{% endtip %}

## 네트워크 그래프 액세스

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 왼쪽 사이드바에서 **네트워크** 를 클릭합니다.
![네트워크 탭](/assets/images/help/graphs/network_tab.png)

## 리포지토리의 포크 나열

멤버 그래프는 리포지토리의 모든 포크를 표시합니다.

포크는 리포지토리를 포크한 사용자의 사용자 이름 순서로 나열됩니다. 사용자 이름을 클릭하여 사용자의 {% data variables.product.product_name %} 프로필 페이지로 리디렉션하거나 포크 이름을 클릭하여 리포지토리의 특정 포크로 리디렉션할 수 있습니다.

{% ifversion fpt or ghec %}

![리포지토리 멤버 그래프](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![리포지토리 멤버 그래프](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### 멤버 그래프 액세스

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. 왼쪽 사이드바에서 **포크** 를 클릭합니다.
![포크 탭](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## 리포지토리의 종속성 보기

종속성 그래프를 사용하여 리포지토리가 종속된 코드를 살펴볼 수 있습니다.

거의 모든 소프트웨어는 공급망이라고도 하는 다른 개발자가 개발하고 유지 관리하는 코드를 사용합니다. 유틸리티, 라이브러리 및 프레임워크를 예로 들 수 있습니다. 이러한 종속성은 코드의 필수적인 부분이며 해당 버그 또는 취약성이 코드에 영향을 줄 수 있습니다. 이러한 종속성을 검토하고 유지 관리하는 것이 중요합니다.

종속성 그래프는 리포지토리에 대한 종속성을 시각화하고 살펴보는 적절한 방법을 제공합니다. 자세한 내용은 "[종속성 그래프 정보](/code-security/supply-chain-security/about-the-dependency-graph)" 및 "[리포지토리의 종속성 살펴보기](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository)"를 참조하세요.

또한 종속성 중 하나에서 보안 취약성이 발견되면 {% data variables.product.company_short %}가 자동으로 경고하도록 리포지토리를 설정할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_dependabot_alerts %} 정보](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”를 참조하세요.
