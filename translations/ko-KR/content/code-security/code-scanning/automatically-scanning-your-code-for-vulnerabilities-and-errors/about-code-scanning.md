---
title: 코드 검사 정보
intro: '{% data variables.product.prodname_code_scanning %}을 사용하여 {% data variables.product.prodname_dotcom %}의 프로젝트 코드에서 보안 취약성 및 오류를 찾을 수 있습니다.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/managing-security-vulnerabilities/about-automated-code-scanning
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/about-code-scanning
  - /code-security/secure-coding/about-code-scanning
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
ms.openlocfilehash: 0bf49aa695e9e5a60cef7eb78c6e44f5ecd4ece5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145087736'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_code_scanning %} 정보

{% data reusables.code-scanning.about-code-scanning %}

{% data variables.product.prodname_code_scanning %}을(를) 사용하여 코드에서 기존 문제에 대한 수정 사항을 찾고, 심사하고, 우선 순위를 지정할 수 있습니다. {% data variables.product.prodname_code_scanning_capc %}은(는) 개발자가 새로운 문제를 발생시키는 것도 방지합니다. 특정 날짜 및 시간에 검사를 예약하거나 푸시처럼 리포지토리에 특정 이벤트가 발생하는 경우 검색을 트리거할 수 있습니다.

{% data variables.product.prodname_code_scanning %}이(가) 코드에서 잠재적 취약성 또는 오류를 발견하면 {% data variables.product.prodname_dotcom %}이(가) 리포지토리에 경고를 표시합니다. 경고를 트리거한 코드를 수정하면 {% data variables.product.prodname_dotcom %}이(가) 경고를 닫습니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 경고 관리](/code-security/secure-coding/managing-code-scanning-alerts-for-your-repository)”를 참조하세요.

리포지토리 또는 조직에서 {% data variables.product.prodname_code_scanning %}의 결과를 모니터링하려면 웹후크 및 {% data variables.product.prodname_code_scanning %} API를 사용할 수 있습니다. {% data variables.product.prodname_code_scanning %}의 웹후크에 대한 자세한 내용은 “[웹후크 이벤트 및 페이로드](/developers/webhooks-and-events/webhook-events-and-payloads#code_scanning_alert)”를 참조하세요. API 엔드포인트에 대한 자세한 내용은 “[{% data variables.product.prodname_code_scanning_capc %}](/rest/reference/code-scanning)”을(를) 참조하세요. 

{% data variables.product.prodname_code_scanning %}을(를) 시작하려면 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)”을 참조하세요.

{% ifversion fpt or ghec %}

## {% data variables.product.prodname_code_scanning %}에 대한 청구 정보

{% data variables.product.prodname_code_scanning_capc %}은(는) {% data variables.product.prodname_actions %}을(를) 사용하며, {% data variables.product.prodname_code_scanning %} 워크플로를 실행할 때마다 {% data variables.product.prodname_actions %}에 몇 분이 걸립니다. 자세한 내용은 “[{% data variables.product.prodname_actions %} 청구 정보](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)”를 참조하세요.

{% endif %}

## {% data variables.product.prodname_code_scanning %}에 대한 도구 정보

{% data variables.product.company_short%}에서 유지 관리하는 {% data variables.product.prodname_codeql %} 제품 또는 타사 {% data variables.product.prodname_code_scanning %} 도구를 사용하도록 {% data variables.product.prodname_code_scanning %}을(를) 설정할 수 있습니다. 

### {% data variables.product.prodname_codeql %} 분석 정보

{% data reusables.code-scanning.about-codeql-analysis %} {% data variables.product.prodname_codeql %}에 대한 자세한 내용은 “[CodeQL을 사용하여 코드 검색 정보](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)”를 참조하세요.

### 타사 {% data variables.product.prodname_code_scanning %} 도구 정보

{% data reusables.code-scanning.interoperable-with-tools-that-output-sarif %}

작업을 사용하거나 외부 CI 시스템 내에서 {% data variables.product.product_name %} 내의 타사 분석 도구를 실행할 수 있습니다. 자세한 내용은 “[리포지토리에 대한 코드 검색 설정](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)” 또는 “[GitHub에 SARIF 파일 업로드](/code-security/secure-coding/uploading-a-sarif-file-to-github)”를 참조하세요.
