---
title: GitHub Enterprise 라이선스 정보
intro: '{% ifversion ghec %} {% data variables.product.prodname_ghe_cloud %}를 사용하는 것 외에 {% data variables.product.prodname_ghe_server %}를 배포하는 경우 {% else %}You{% endif %}{% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %} 배포 간에 라이선스 사용을 동기화하고 라이선스 파일을 사용하여 각 {% data variables.product.prodname_ghe_server %} 인스턴스를 잠금 해제할 수 있습니다.'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
ms.openlocfilehash: 1ccd9dce77f74e0e53fbf185cd0c827fb4bc4a7d
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098453'
---
## {% data variables.product.prodname_enterprise %} 라이선스 정보

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

동일한 사용자가 여러 엔터프라이즈 배포에 대해 둘 이상의 라이선스를 사용하지 않도록 하려면 {% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 배포 간에 라이선스 사용량을 동기화할 수 있습니다.

{% data variables.product.prodname_ghe_server %} 인스턴스를 사용하려면 {% data variables.product.company_short %}가 사용자 라이선스를 구매, 갱신 또는 {% data variables.product.prodname_enterprise %}에 추가할 때 제공하는 라이선스 파일을 업로드해야 합니다.

## {% data variables.product.prodname_enterprise %}에 대한 라이선스 사용량 동기화 정보

{% data reusables.enterprise-licensing.about-license-sync %} 자세한 내용은 “[{% data variables.product.prodname_ghe_server %}와 {% data variables.product.prodname_ghe_cloud %} 간에 라이선스 사용량 동기화](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)”를 참조하세요.

## {% data variables.product.prodname_enterprise %}에 대한 라이선스 파일 정보

{% 데이터 variables.product.prodname_enterprise %}을(를) 구입하거나 갱신하는 경우 {% 데이터 variables.product.company_short %}은(는) {% 데이터 variables.product.prodname_ghe_server %}{% elsif ghes %}의 배포에 대한 라이선스 파일 {% ifversion ghec %}을(를) 제공합니다. {% 데이터 variables.location.product_location_enterprise %}{% endif %}. 라이선스 파일에 만료 날짜가 있으며 {% 데이터 variables.location.product_location_enterprise %}을(를) 사용할 수 있는 사용자 수를 제어합니다. {% data variables.product.prodname_ghe_server %}을(를) 다운로드하여 설치한 후에는 사용할 애플리케이션의 잠금을 해제하기 위해 라이선스 파일을 업로드해야 합니다.

라이선스 파일 다운로드에 대한 자세한 내용은 “[{% data variables.product.prodname_enterprise %}에 대한 라이선스 다운로드](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)”를 참조하세요. 

라이선스 파일 업로드에 대한 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서에서 {% ifversion ghec %}“[{% data variables.product.prodname_ghe_server %}에 새 라이선스 업로드](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)”를 참조하세요.{% elsif ghes %}“[{% data variables.product.prodname_ghe_server %}에 새 라이선스 업로드](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server).”{% endif %}

라이선스가 만료되면 웹 브라우저 또는 Git을 통해 {% data variables.product.prodname_ghe_server %}에 액세스할 수 없습니다. 필요한 경우 명령줄 유틸리티를 사용하여 모든 데이터를 백업할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_server %} 설명서의 {% ifversion ghec %}“[어플라이언스에 백업 구성]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)”을 참조하세요.{% elsif ghes %}“[어플라이언스에 백업 구성](/admin/guides/installation/configuring-backups-on-your-appliance)”. {% endif %}

라이선스 갱신에 대한 질문이 있는 경우 {% data variables.contact.contact_enterprise_sales %}에 문의하세요.

## 추가 참고 자료

- “[엔터프라이즈에 대한 청구 정보](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)”
- [{% data variables.product.prodname_enterprise %} 릴리스](https://enterprise.github.com/releases/) 웹 사이트
- “[{% data variables.product.prodname_ghe_server %} 인스턴스 설정]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)”
