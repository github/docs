---
title: GitHub Copilot 정보
intro: '{% data variables.product.prodname_copilot %}은 자동 완성 스타일 제안을 제공하여 코딩하는 데 도움이 될 수 있습니다. {% data variables.product.prodname_copilot %}의 작동 방식과 {% data variables.product.prodname_copilot %}을(를) 사용하는 동안 고려해야 할 사항을 알아볼 수 있습니다.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot
ms.openlocfilehash: 4ff4c73e61c10c2c3f75d9581bf426266122550b
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192780'
---
## {% data variables.product.prodname_copilot %} 정보

{% data variables.product.prodname_copilot %}은 코딩할 때 자동 완성 스타일 제안을 제공하는 AI 쌍 프로그래머입니다. 사용하려는 코드를 작성하기 시작하거나 코드가 수행할 작업을 설명하는 자연어 주석을 작성하여 {% data variables.product.prodname_copilot %}로부터 제안을 얻을 수 있습니다. {% data variables.product.prodname_copilot %}은 편집 중인 파일의 컨텍스트 및 관련 파일을 분석하고 텍스트 편집기 내에서 제안을 제공합니다. {% data variables.product.prodname_copilot %}은 OpenAI에서 만든 새로운 AI 시스템인 OpenAI Codex로 구동됩니다.

{% data variables.product.prodname_copilot %}은(는) 퍼블릭 리포지토리에 표시되는 모든 언어에서 학습됩니다. 각 언어에 대해 수신하는 제안의 품질은 해당 언어에 대한 학습 데이터의 양과 다양성에 따라 달라질 수 있습니다. 예를 들어 JavaScript는 퍼블릭 리포지토리에서 잘 표현되며 {% data variables.product.prodname_copilot %}의 가장 지원되는 언어 중 하나입니다. 퍼블릭 리포지토리에서 표현이 적은 언어는 더 적거나 덜 강력한 제안을 생성할 수 있습니다.

{% data variables.product.prodname_copilot %}은 Visual Studio Code, Visual Studio, Neovim 및 JetBrains IDE 제품군에서 확장으로 사용할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_copilot %} 시작](/copilot/getting-started-with-github-copilot)"을 참조하세요.

## {% data variables.product.prodname_copilot %} 사용

실제로 작동하는 {% data variables.product.prodname_copilot %}의 실제 예제를 볼 수 있습니다. 자세한 내용은 [{% data variables.product.prodname_copilot %}](https://copilot.github.com/) 웹 사이트를 참조하세요. 

{% data variables.product.prodname_copilot %}는 OpenAI가 수십억 줄의 오픈 소스 코드에서 빌드한 모델의 제안을 제공합니다. 따라서 {% data variables.product.prodname_copilot %}에 대한 학습 집합에는 안전하지 않은 코딩 패턴, 버그 또는 오래된 API 또는 관용구에 대한 참조가 포함될 수 있습니다. {% data variables.product.prodname_copilot %}이 이 학습 데이터를 기반으로 제안을 생성하면 해당 제안에도 바람직하지 않은 패턴이 포함될 수 있습니다. 

사용자에게 코드의 보안 및 품질을 보장할 책임이 있습니다. {% data variables.product.prodname_copilot %}에 의해 생성된 코드를 사용할 때는 직접 작성하지 않은 코드를 사용할 때와 동일한 예방 조치를 취하는 것이 좋습니다. 이러한 예방 조치에는 엄격한 테스트, IP 검사 및 보안 취약성 추적이 포함됩니다. {% data variables.product.company_short %}는 {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dependabot %}, {% data variables.product.prodname_codeql %}, {% data variables.product.prodname_code_scanning %} 같이 코드 품질을 모니터링하고 개선하는 데 도움이 되는 다양한 기능을 제공합니다. 이러한 기능은 모두 공용 리포지토리에서 무료로 사용할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_actions %} 이해](/actions/learn-github-actions/understanding-github-actions)" 및 "[{% data variables.product.company_short %} 보안 기능](/code-security/getting-started/github-security-features)"을 참조하세요.

{% data variables.product.prodname_copilot %}은 필터를 사용하여 프롬프트에서 불쾌한 단어를 차단하고 중요한 컨텍스트에서 제안을 생성하지 않습니다. 당사는 {% data variables.product.prodname_copilot %}이 생성한 공격적 제안(편견적, 차별적 또는 악의적인 출력 포함)을 보다 지능적으로 감지하고 제거하기 위해 필터 시스템을 지속적으로 개선하는 데 최선을 다하고 있습니다. {% data variables.product.prodname_copilot %}이 생성한 불쾌한 제안이 표시되는 경우 당사가 보호 조치를 개선할 수 있도록 해당 제안을 copilot-safety@github.com에 직접 보고하세요. 

## {% data variables.product.prodname_copilot %} 청구 정보

{% data variables.product.prodname_copilot %}은 월간 또는 연간 구독이 필요한 유료 기능입니다. {% data variables.product.prodname_copilot %} 구독은 {% data variables.product.prodname_copilot_for_individuals %}을(를) 사용하여 {% data variables.product.prodname_dotcom_the_website %}의 개인 계정을 통해 지불 및 관리하거나 {% data variables.product.prodname_ghe_cloud %}에서 {% data variables.product.prodname_copilot_for_business %}의 엔터프라이즈 계정을 통해 중앙에서 지불 및 관리할 수 있습니다.

{% data variables.product.prodname_dotcom %}에서 인기 있는 오픈 소스 프로젝트의 확인된 학생, 교사 및 유지 관리자는 {% data variables.product.prodname_copilot_individuals_short %}을(를) 무료로 사용할 수 있습니다. 무료 {% data variables.product.prodname_copilot_individuals_short %} 구독 조건을 충족하는 경우 {% data variables.product.prodname_copilot %} 구독 페이지를 방문하면 자동으로 알림이 표시됩니다. 무료 {% data variables.product.prodname_copilot_individuals_short %} 구독에 대한 기준을 충족하지 않으면 60일 무료 평가판이 제공되며, 그 후에는 유료 구독을 계속 사용해야 합니다. {% data variables.product.prodname_copilot_for_business %}은(는) 평가판을 포함하지 않습니다. 자세한 내용은 "[{% data variables.product.prodname_copilot %} 청구 정보](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)"를 참조하세요.

## JetBrains IDE의 {% data variables.product.prodname_copilot %} 플러그 인에 대한 라이선스 정보

{% data variables.product.prodname_dotcom %}, Inc.는 JetBrains 플러그 인의 라이선스 허가자입니다. 이 플러그 인에 대한 최종 사용자 라이선스 계약은 [{% data variables.product.prodname_dotcom %} 추가 제품 및 기능 사용 약관](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)이며 이 플러그 인의 사용에는 해당 약관이 적용됩니다. JetBrains는 플러그 인 또는 그러한 계약과 관련하여 아무 책임이 없습니다. 플러그 인을 사용하면 상기 약관에 동의하는 것입니다.

## 추가 참고 자료

- "[{% data variables.product.company_short %} 추가 제품 및 기능에 대한 약관](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"{% ifversion ghec %}
- "[{% data variables.product.prodname_copilot_for_business %} 개인정보처리방침](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"{% endif %}
