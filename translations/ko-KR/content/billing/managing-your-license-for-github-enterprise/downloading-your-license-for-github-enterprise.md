---
title: GitHub Enterprise 라이선스 다운로드
intro: '{% data variables.product.prodname_ghe_server %}에 대한 라이선스 파일의 복사본을 다운로드할 수 있습니다.'
permissions: 'Enterprise owners can download license files for {% data variables.product.prodname_ghe_server %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Download your license
ms.openlocfilehash: 2ee664fc25afef6d5afeb9a1e4bb6c5953739c5d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098917'
---
## {% data variables.product.prodname_enterprise %}에 대한 라이선스 파일 정보

{% data variables.contact.contact_enterprise_sales %}에서 {% data variables.product.prodname_enterprise %}에 대한 라이선스를 구입하거나 업그레이드한 후 새 라이선스 파일을 다운로드해야 합니다. {% data variables.product.prodname_enterprise %}에 대한 라이선스에 관한 자세한 내용은 "[{% data variables.product.prodname_enterprise %}에 대한 라이선스 정보](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)"를 참조하세요.

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## {% data variables.product.prodname_dotcom_the_website %}에서 라이선스 다운로드

{% data variables.product.prodname_dotcom_the_website %}에서 라이선스를 다운로드하려면 {% data variables.product.prodname_dotcom_the_website %}에 대한 엔터프라이즈 계정이 있어야 합니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서의 “[엔터프라이즈 계정 정보](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion ghes %}”를 참조하세요.{% elsif ghec %}."{% endif %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. 왼쪽 사이드바에서 **Enterprise 라이선스** 를 클릭합니다.
  ![엔터프라이즈 계정 설정 사이드바의 "Enterprise 라이선스" 탭](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. "Enterprise 서버 인스턴스"에서 {% octicon "download" aria-label="The download icon" %}을 클릭하여 라이선스 파일을 다운로드합니다.
  ![GitHub Enterprise Server 라이선스 다운로드](/assets/images/help/business-accounts/download-ghes-license.png)

라이선스 파일을 다운로드한 후 {% 데이터 variables.location.product_location_enterprise %}에 파일을 업로드하여 애플리케이션의 유효성을 검사할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서에서 {% ifversion ghec %}"[{% data variables.product.prodname_ghe_server %}에 대한 새 라이선스 업로드](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)"를 참조하세요.{% elsif ghes %}"[{% data variables.product.prodname_ghe_server %}에 새 라이선스 업로드](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)."{% endif %}

## {% data variables.product.prodname_dotcom_the_website %}에 엔터프라이즈 계정이 없는 경우 라이선스 다운로드

{% data variables.product.prodname_dotcom_the_website %}에 엔터프라이즈 계정이 없거나 확실하지 않은 경우 [{% data variables.product.prodname_enterprise %} 웹사이트](https://enterprise.github.com/download)에서 {% data variables.product.prodname_ghe_server %} 라이선스를 다운로드할 수 있습니다.

라이선스 다운로드에 대한 질문이 있는 경우 {% data variables.contact.contact_enterprise_sales %}에 문의하세요.
