---
title: GitHub AE 배포
intro: '{% data variables.product.product_name %}를 가용 Azure 지역에 배포할 수 있습니다.'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Deploy GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
ms.openlocfilehash: af6def26a15a1ccad2625677d9db57b2a1907850
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147614369'
---
## {% data variables.product.product_name %}의 배포 정보

{% data reusables.github-ae.github-ae-enables-you %} 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %}](/admin/overview/about-github-ae)”를 참조하세요.

{% data variables.product.product_name %} 평가판을 구입하거나 시작한 후에는 사용 가능한 Azure 지역에 {% data variables.product.product_name %}를 배포할 수 있습니다. 이 가이드에서는 {% data variables.product.product_name %}를 {% data variables.product.product_name %} 계정으로 배포하는 Azure 리소스를 참조합니다. [https://portal.azure.com](https://portal.azure.com)에서 Azure Porta을 사용하여 {% data variables.product.product_name %} 계정을 배포합니다.

## 필수 조건

Azure에서 리소스 공급 기업에 대한 `/register/action` 작업을 수행하기 위해서는 권한이 있어야 합니다. 권한은 `Contributor` 및 `Owner` 역할에 포함됩니다. 자세한 내용은 Microsoft 설명서의 [Azure 리소스 공급 기업 및 형식](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider)을 참조하세요.

## {% data variables.product.product_name %}를 사용하여 {% data variables.actions.azure_portal %} 배포

{% data variables.actions.azure_portal %}를 사용하면 Azure 리소스 그룹에 {% data variables.product.product_name %} 계정을 배포할 수 있습니다.

1. 다음 두 링크 중 하나를 클릭하여 {% data variables.product.product_name %}의 배포를 시작합니다. 클릭해야 하는 링크는 {% data variables.product.product_name %}를 배포하려는 Azure 클라우드에 따라 달라집니다. Azure Government에 대한 자세한 내용은 Microsoft 문서에서 [Azure Government란?](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome) 항목을 참조하세요.
   
   - [Azure Commercial에 {% data variables.product.product_name %} 배포](https://aka.ms/create-github-ae-instance)
   - [Azure Government에 {% data variables.product.product_name %} 배포](https://aka.ms/create-github-ae-instance-gov)
1. 새 {% data variables.product.product_name %} 계정 추가 프로세스를 시작하려면 **GitHub AE 계정 만들기** 를 클릭합니다.
1. “Project 세부 정보” 및 “인스턴스 세부 정보” 필드를 작성합니다.
    ![{% data variables.actions.azure_portal %} 검색 결과](/assets/images/azure/github-ae-azure-portal-form.png)
    - **계정 이름:** 엔터프라이즈의 호스트 이름
    - **관리자 사용자 이름:** {% data variables.product.product_name %}에 만들어질 초기 엔터프라이즈 소유자의 사용자 이름
    - **관리자 메일:** 로그인 정보를 받을 메일 주소
1. 제안된 변경 내용의 요약을 검토하려면 **검토 + 만들기** 를 클릭합니다.
1. 유효성 검사 프로세스가 완료되면 **만들기** 를 클릭합니다.

위에서 입력한 메일 주소로 엔터프라이즈에 액세스하는 방법에 대한 지침을 받게 됩니다. 액세스 권한이 있으면 초기 설정 단계를 따라 시작할 수 있습니다. 자세한 내용은 “[{% data variables.product.product_name %} 초기화](/admin/configuration/initializing-github-ae)”를 참조하세요.

{% note %}

**참고:** {% data variables.product.product_name %} 배포에 대한 소프트웨어 업데이트는 {% data variables.product.prodname_dotcom %}에서 수행됩니다. 자세한 내용은 “[새 릴리스로의 업그레이드 정보](/admin/overview/about-upgrades-to-new-releases)”를 참조하세요.

{% endnote %}

## 엔터프라이즈로 이동

{% data variables.actions.azure_portal %}을 사용해 {% data variables.product.product_name %} 배포로 이동할 수 있습니다. 결과 목록에는 Azure 지역의 모든 {% data variables.product.product_name %} 배포가 포함됩니다.

1. {% data variables.actions.azure_portal %}의 왼쪽 패널에서 **모든 리소스** 를 클릭합니다.
1. 사용 가능한 필터에서 **모든 유형** 을 클릭한 다음 **모두 선택** 을 선택 해제하고 **GitHub AE**:  ![{% data variables.actions.azure_portal %} 검색 결과](/assets/images/azure/github-ae-azure-portal-type-filter.png)를 선택합니다.

## 다음 단계

- 배포가 프로비저닝되면 다음 단계는 {% data variables.product.product_name %}를 초기화하는 것입니다. 자세한 내용은 “[{% data variables.product.product_name %} 초기화](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae)”를 참조하세요.
- {% data variables.product.product_name %}를 체험 중이라면 평가판 기간 중 언제든지 {% data variables.contact.contact_enterprise_sales %}에 문의하여 전체 라이선스로 업그레이드할 수 있습니다. 평가판의 마지막 날까지 업그레이드하지 않을 경우 배포가 자동으로 삭제됩니다. {% data variables.product.product_name %}를 평가하는 데 추가로 시간이 필요한 경우 {% data variables.contact.contact_enterprise_sales %}에 문의하여 연장을 요청하세요.

## 추가 참고 자료 

- “[{% data variables.product.product_name %}에서 {% data variables.product.prodname_advanced_security %} 기능 사용 설정](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)”
- “[{% data variables.product.product_name %} 릴리스 정보](/github-ae@latest/admin/overview/github-ae-release-notes)” 
