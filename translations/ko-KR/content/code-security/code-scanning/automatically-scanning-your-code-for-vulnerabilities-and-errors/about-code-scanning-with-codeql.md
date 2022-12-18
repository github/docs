---
title: CodeQL을 사용하는 코드 검사 안내
shortTitle: Code scanning with CodeQL
intro: '{% data variables.product.prodname_codeql %}을 사용하여 코드의 취약성 및 오류를 식별할 수 있습니다. 결과가 {% data variables.product.prodname_dotcom %}에서 {% data variables.product.prodname_code_scanning %} 경고로 표시됩니다.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 41531627f73e7878cfa5667560b61cd4e21d20b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052178'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## {% data variables.product.prodname_codeql %} 포함 {% data variables.product.prodname_code_scanning %} 정보

{% data reusables.code-scanning.about-codeql-analysis %}

{% data variables.product.prodname_code_scanning %}에 대해 {% data variables.product.prodname_codeql %} 분석을 사용하는 두 가지 주요 방법이 있습니다.

- {% data variables.product.prodname_codeql %} 워크플로를 리포지토리에 추가합니다. 그러면 [github/codeql-action](https://github.com/github/codeql-action/)을 사용하여 {% data variables.product.prodname_codeql_cli %}를 실행합니다. 자세한 내용은 “[리포지토리에 대한 {% data variables.product.prodname_code_scanning %} 설정](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)”을 참조하세요.
- 외부 CI 시스템에서 직접 {% data variables.product.prodname_codeql %} CLI를 실행하고 결과를 {% data variables.product.prodname_dotcom %}에 업로드합니다. 자세한 내용은 "[CI 시스템의 {% data variables.product.prodname_codeql %} 코드 검사 정보](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)"를 참조하세요.

{% ifversion ghes or ghae %}

{% note %} {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }}에서,{% endif %} {% data variables.product.prodname_codeql %} 작업은 기본적으로 {% data variables.product.prodname_codeql_cli %} {% data variables.product.codeql_cli_ghes_recommended_version %} 버전을 사용합니다. 외부 CI 시스템에서 분석을 실행하는 경우 동일한 버전의 {% data variables.product.prodname_codeql_cli %}를 사용하는 것이 좋습니다.
{% endnote %}

{% endif %}


## {% data variables.product.prodname_codeql %} 정보

{% data variables.product.prodname_codeql %}은 데이터와 같은 코드를 처리하므로 기존 정적 분석기보다 더 높은 신뢰도로 코드에서 잠재적 취약성을 찾을 수 있습니다.

1. {% data variables.product.prodname_codeql %} 데이터베이스를 생성하여 코드베이스를 나타냅니다.
2. 그런 다음 해당 데이터베이스에서 {% data variables.product.prodname_codeql %} 쿼리를 실행하여 코드베이스의 문제를 식별합니다.
3. {% data variables.product.prodname_codeql %}을 {% data variables.product.prodname_code_scanning %}과 함께 사용하는 경우 쿼리 결과가 {% data variables.product.product_name %}에서 {% data variables.product.prodname_code_scanning %} 경고로 표시됩니다.

{% data variables.product.prodname_codeql %}은 컴파일 언어와 해석된 언어를 모두 지원하며, 지원 언어로 작성된 코드에서 취약성과 오류를 찾을 수 있습니다.

{% data reusables.code-scanning.codeql-languages-bullets %}

## {% data variables.product.prodname_codeql %} 쿼리 정보

{% data variables.product.company_short %} 전문가, 보안 연구원 및 커뮤니티 기여자는 {% data variables.product.prodname_code_scanning %}에 사용되는 기본 {% data variables.product.prodname_codeql %} 쿼리를 작성하고 유지 관리합니다. 쿼리는 분석을 개선하고 가양성 결과를 줄이기 위해 정기적으로 업데이트됩니다. 쿼리는 오픈 소스이므로 [`github/codeql`](https://github.com/github/codeql) 리포지토리에서 쿼리를 보고 기여할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_codeql %} 웹 사이트에서 [{% data variables.product.prodname_codeql %}](https://codeql.github.com/)을 참조하세요. 고유한 쿼리를 작성할 수도 있습니다. 자세한 내용은 {% data variables.product.prodname_codeql %} 설명서에서 [{% data variables.product.prodname_codeql %} 쿼리 정보](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)를 참조하세요.

코드 검사 분석의 일부로 추가 쿼리를 실행할 수 있습니다. 

{%- ifversion codeql-packs %} 이러한 쿼리는 리포지토리의 게시된 {% data variables.product.prodname_codeql %} 쿼리 팩(베타) 또는 QL 팩에 속해야 합니다. {% data variables.product.prodname_codeql %} 팩(베타)은 기존 QL 팩에 비해 다음과 같은 이점을 제공합니다.

- {% data variables.product.prodname_codeql %} 쿼리 팩(베타)이 {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %}에 게시되면 쿼리 및 컴파일 캐시에 필요한 모든 전이적 종속성이 패키지에 포함됩니다. 그러면 성능이 향상되고 새 버전의 팩 또는 CLI로 업그레이드할 때까지 팩에서 쿼리를 실행할 때마다 동일한 결과를 얻을 수 있습니다. 
- QL 팩에는 전이적 종속성이 포함되지 않으므로 팩의 쿼리는 표준 라이브러리(즉, 쿼리의 `import LANGUAGE` 문에서 참조하는 라이브러리) 또는 쿼리와 동일한 QL 팩의 라이브러리에만 의존할 수 있습니다.

자세한 내용은 {% data variables.product.prodname_codeql %} 설명서에서 "[{% data variables.product.prodname_codeql %} 팩 정보](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/)" 및 "[{% data variables.product.prodname_ql %} 팩 정보](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)"를 참조하세요.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %} 실행하려는 쿼리가 리포지토리의 QL 팩에 속해야 합니다. 쿼리는 표준 라이브러리(즉, 쿼리의 `import LANGUAGE` 문에서 참조하는 라이브러리) 또는 쿼리와 동일한 QL 팩의 라이브러리에만 의존해야 합니다. 자세한 내용은 "[{% data variables.product.prodname_ql %} 팩 정보](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)"를 참조하세요.
{% endif %}
