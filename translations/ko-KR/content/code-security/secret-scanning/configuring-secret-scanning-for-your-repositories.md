---
title: 리포지토리에 대한 비밀 검사 구성
intro: '{% data variables.product.prodname_dotcom %}가 리포지토리에서 고급 보안 패턴과 일치하는 비밀을 검색하는 방법을 구성할 수 있습니다.'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configure secret scans
ms.openlocfilehash: 7739cca195f46043945f39f48aad8bf88aa97fed
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192939'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## {% data variables.product.prodname_secret_scanning_GHAS %} 활성화

조직이 소유한 모든 리포지토리에 대해 {% data variables.product.prodname_secret_scanning_GHAS %}를 사용하도록 설정할 수 있습니다. {% data reusables.secret-scanning.secret-scanning-process %} {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}

{% note %}

**참고:** 문제 설명 및 주석에 대한 {% data variables.product.prodname_secret_scanning_caps %}은(는) 공개 베타 버전이며 변경될 수 있습니다.

{% endnote %} {% endif %}

{% ifversion secret-scanning-enterprise-level %} {% note %}

**참고:** 조직이 엔터프라이즈 계정이 소유한 경우 엔터프라이즈 소유자는 엔터프라이즈 수준에서 {% data variables.product.prodname_secret_scanning %}을(를) 사용하도록 설정할 수도 있습니다. 자세한 내용은 "[엔터프라이즈에 대한 {% 데이터 variables.product.prodname_GH_advanced_security %} 기능 관리"를 참조하세요](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise).

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. {% data variables.product.prodname_advanced_security %}가 리포지토리에 대해 아직 사용하도록 설정되지 않은 경우 "{% data variables.product.prodname_GH_advanced_security %}" 오른쪽에 있는 **활성화** 를 클릭합니다.
   {% ifversion fpt or ghec %}![ 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 활성화](/assets/images/help/repository/enable-ghas-dotcom.png) {% elsif ghes or ghae %}![리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 활성화](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
2. {% data variables.product.prodname_advanced_security %} 활성화의 영향을 검토한 다음, **이 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 활성화** 를 클릭합니다.
3. {% data variables.product.prodname_advanced_security %}를 활성화하면 조직의 설정으로 인해 리포지토리에 대해 {% data variables.product.prodname_secret_scanning %}이 자동으로 활성화될 수 있습니다. "{% data variables.product.prodname_secret_scanning_caps %}"가 **활성화** 단추와 함께 표시되는 경우에도 **활성화** 를 클릭하여 {% data variables.product.prodname_secret_scanning %}을 활성화해야 합니다. **비활성화** 단추가 표시되면 {% data variables.product.prodname_secret_scanning %}이 이미 활성화된 것입니다. 
   ![리포지토리에 대해 {% data variables.product.prodname_secret_scanning %} 사용](/assets/images/help/repository/enable-secret-scanning-dotcom.png) {% ifversion secret-scanning-push-protection %}
1. 필요에 따라 푸시 보호를 활성화하려면 "푸시 보호" 오른쪽에 있는 **활성화** 를 클릭합니다. {% data reusables.secret-scanning.push-protection-overview %} 자세한 내용은 "[{% data variables.product.prodname_secret_scanning %}으로 푸시 보호](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)"를 참조하세요.
   ![리포지토리에 대한 푸시 보호 활성화](/assets/images/help/repository/secret-scanning-enable-push-protection.png) {% endif %} {% ifversion ghae %}
1. {% data variables.product.prodname_secret_scanning %}을 활성화하려면 먼저 {% data variables.product.prodname_GH_advanced_security %}를 활성화해야 합니다. "{% data variables.product.prodname_GH_advanced_security %}" 오른쪽에서 **활성화** 를 클릭합니다.
   ![리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 활성화](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. **이 리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 활성화** 를 클릭하여 작업을 확인합니다.
   ![리포지토리에 대해 {% data variables.product.prodname_GH_advanced_security %} 활성화 확인](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. {% data variables.product.prodname_secret_scanning_caps %} 오른쪽에서 **활성화** 를 클릭합니다.
   ![리포지토리에 대해 {% data variables.product.prodname_secret_scanning %} 활성화](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png) {% endif %}

## {% data variables.product.prodname_secret_scanning_GHAS %}에서 디렉터리 제외

*secret_scanning.yml* 파일을 사용하여 {% data variables.product.prodname_secret_scanning %}에서 디렉터리를 제외할 수 있습니다. 예를 들어 테스트 또는 임의로 생성된 콘텐츠가 포함된 디렉터리를 제외할 수 있습니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에 *.github/secret_scanning.yml* 을 입력합니다.
4. **새 파일 편집** 에서 `paths-ignore:`를 입력하고 {% data variables.product.prodname_secret_scanning %}에서 제외할 경로를 입력합니다.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```
    
    `*`와 같은 특수 문자를 사용하여 경로를 필터링할 수 있습니다. 필터 패턴에 대한 자세한 내용은 “[GitHub Actions에 대한 워크플로 구문](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”을 참조하세요.

    {% note %}
    
    **참고:**
    - `paths-ignore`에 1,000개가 넘는 항목이 있는 경우 {% data variables.product.prodname_secret_scanning %}은 검사에서 처음 1,000개의 디렉터리만 제외합니다.
    - *secret_scanning.yml* 이 1MB보다 크면 {% data variables.product.prodname_secret_scanning %}은 전체 파일을 무시합니다.
    
    {% endnote %}

{% data variables.product.prodname_secret_scanning %}에서 개별 경고를 무시할 수도 있습니다. 자세한 내용은 “[{% data variables.product.prodname_secret_scanning %}의 알림 관리](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts)”를 참조하세요.

## 추가 참고 자료

- “[조직의 보안 및 분석 설정 관리](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”
- “[{% data variables.product.prodname_secret_scanning %}에 대한 사용자 지정 패턴 정의](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)”
