---
title: 코드 검사와의 통합 정보
shortTitle: About integration
intro: '외부에서 {% data variables.product.prodname_code_scanning %}을 수행한 다음 {% data variables.product.prodname_dotcom %}에 결과를 표시하거나 리포지토리에서 {% data variables.product.prodname_code_scanning %} 활동을 수신 대기하는 웹후크를 설정할 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-integration-with-code-scanning
  - /code-security/secure-coding/about-integration-with-code-scanning
  - /code-security/secure-coding/integrating-with-code-scanning/about-integration-with-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - Webhooks
  - Integration
ms.openlocfilehash: b12f5146a90cae0ed1bd38d452e43eb611232e72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145116828'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

{% data variables.product.prodname_dotcom %} 내의 {% data variables.product.prodname_code_scanning %}을 실행하는 대신 다른 곳에서 분석을 수행한 다음, 결과를 업로드할 수 있습니다. 외부에서 실행하는 {% data variables.product.prodname_code_scanning %}에 대한 경고는 {% data variables.product.prodname_dotcom %} 내에서 실행하는 {% data variables.product.prodname_code_scanning %}에 대한 경고와 동일한 방식으로 표시됩니다. 자세한 내용은 "[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)"를 참조하세요.

결과를 SARIF(정적 분석 결과 교환 형식) 2.1.0 데이터로 생성할 수 있는 타사 정적 분석 도구를 사용하는 경우 {% data variables.product.prodname_dotcom %}에 업로드할 수 있습니다. 자세한 내용은 "[SARIF 파일을 GitHub에 업로드](/code-security/secure-coding/uploading-a-sarif-file-to-github)"를 참조하세요.

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %} {% data reusables.code-scanning.about-analysis-origins-link %} {% endif %}

## 웹후크와 통합

{% data variables.product.prodname_code_scanning %} 웹후크를 사용하여 리포지토리의 {% data variables.product.prodname_code_scanning %} 이벤트를 구독하는 [{% data variables.product.prodname_github_apps %}](/apps/building-github-apps/) 또는 [{% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/)와 같은 통합을 빌드하거나 설정할 수 있습니다. 예를 들어 {% data variables.product.product_name %}에서 문제를 발생시키는 통합을 빌드하거나 리포지토리에 새 {% data variables.product.prodname_code_scanning %} 경고가 추가되면 Slack 알림을 보낼 수 있습니다. 자세한 내용은 "[웹후크 만들기](/developers/webhooks-and-events/creating-webhooks)" 및 "[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)"를 참조하세요.

## 추가 참고 자료

* "[{% data variables.product.prodname_code_scanning %} 정보](/code-security/secure-coding/about-code-scanning)"
* "[기존 CI 시스템에서 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 사용](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system)"
* "[{% data variables.product.prodname_code_scanning %}에 대한 SARIF 지원](/code-security/secure-coding/sarif-support-for-code-scanning)"
