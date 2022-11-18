---
title: GitHub AE 정보
intro: '{% data variables.product.prodname_ghe_managed %}는 클라우드에서 {% data variables.product.prodname_dotcom %}를 사용하는 보안이 강화되고 규정을 준수하는 방법입니다.'
versions:
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 9e7769fca5b36252fad5566450ba156120491649
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147389853'
---
## {% data variables.product.prodname_ghe_managed %} 정보

{% data reusables.github-ae.github-ae-enables-you %} {% data variables.product.prodname_ghe_managed %}는 완전 관리형이고 안정적이며 확장 가능하므로 위험 및 규정 준수 태세를 개선하는 동시에 제공을 가속화할 수 있습니다.

{% data variables.product.prodname_ghe_managed %}는 아이디어에서 프로덕션에 이르는 하나의 개발자 플랫폼을 제공합니다. 보안 및 액세스 제어, 워크플로 자동화, 정책 적용을 통해 업계 및 규정 준수를 유지하면서 팀에서 잘 알고 좋아하는 도구를 사용하여 개발 속도를 높일 수 있습니다. 

{% data reusables.enterprise.about-github-for-enterprises %}

## 고가용성 및 전 지구적 스케일의 클라우드

{% data variables.product.prodname_ghe_managed %}는 고가용성 아키텍처에서 호스트되는 완전 관리형 서비스입니다. {% data variables.product.prodname_ghe_managed %}는 제한 없이 전체 개발 수명 주기를 지원하도록 스케일링할 수 있는 클라우드에서 전 세계적으로 호스트됩니다. {% data variables.product.prodname_dotcom %}는 백업, 장애 조치(failover), 재해 복구를 완벽하게 관리하므로 서비스나 데이터에 대해 걱정할 필요가 없습니다. 

## 데이터 상주

모든 데이터는 선택한 지리적 지역 내에 저장됩니다. 선택한 지역 내에서 모든 데이터를 유지하여 GDPR 데이터 보존 요구 사항 및 글로벌 데이터 보호 표준을 준수할 수 있습니다.

## 격리된 계정

기본적으로 {% data variables.product.product_name %}의 모든 개발자 계정은 {% data variables.product.company_short %}의 제품을 포함하여 다른 서비스와 완전히 격리됩니다. SAML Single Sign-On을 필수로 사용하여 ID 공급자를 통해 계정을 제어할 수 있습니다. SCIM을 사용하면 중앙 ID 관리 시스템에 정의된 대로 직원이 필요한 리소스에만 액세스하도록 할 수 있습니다. 자세한 내용은 “[엔터프라이즈의 ID 및 액세스 관리](/admin/authentication/managing-identity-and-access-for-your-enterprise)”를 참조하세요.

필요에 따라 엔터프라이즈 소유자는 {% data variables.product.product_name %}와 {% data variables.product.prodname_dotcom_the_website %}간의 제한된 통합을 사용하도록 설정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_connect %} 정보](/admin/configuration/configuring-github-connect/about-github-connect)”를 참조하세요.

## 제한된 네트워크 액세스

네트워크 액세스가 제한된 {% data variables.product.prodname_ghe_managed %}에서 엔터프라이즈에 안전하게 액세스하여 네트워크 내에서만 데이터에 액세스할 수 있습니다. 자세한 내용은 “[엔터프라이즈에 대한 네트워크 트래픽 제한](/admin/configuration/restricting-network-traffic-to-your-enterprise)”을 참조하세요.

## 상업 및 정부 환경

{% data variables.product.prodname_ghe_managed %}는 미국 정부 기관 및 파트너가 신뢰할 수 있는 클라우드인 Azure Government 클라우드에서 사용할 수 있습니다. {% data variables.product.prodname_ghe_managed %}는 상용 클라우드에서도 사용할 수 있으므로 조직에 적합한 호스팅 환경을 선택할 수 있습니다.

## 규정 준수 인증

{% data variables.product.company_short %}은(는) 데이터가 안전하고, 개발자가 생산성을 높이며, 팀이 문제 해결에 집중할 수 있도록 보안 모범 사례에 계속 투자하고 있습니다. 보안에 대한 노력의 일환으로 {% data variables.product.prodname_ghe_managed %}는 다음 인증을 준수합니다.

- FedRAMP High ATO(Provisional Authorization to Operate)
- SOC 1, SOC 2 Type II 및 SOC 3
- ISO/IEC 인증
   - ISO/IEC 27001:2013 
   - ISO/IEC 27701:2019
   - ISO/IEC 9001:2015
   - ISO/IEC 22301:2019 
   - ISO/IEC 27018:2014 
   - ISO/IEC 20000-1:2018 
   - ISO/IEC 27017:2015

## 추가 참고 자료

- “[{% data variables.product.prodname_docs %} 버전 정보](/get-started/learning-about-github/about-versions-of-github-docs)”
- “[{% data variables.product.company_short %} 지원에서 도움받기](/admin/enterprise-support/receiving-help-from-github-support)”
