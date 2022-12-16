---
title: GitHub Enterprise Server에 새 라이선스 업로드
intro: '{% 데이터 variables.product.prodname_enterprise %}에 대한 라이선스 파일을 {% 데이터 variables.location.product_location_enterprise %}에 업로드하여 애플리케이션의 유효성을 검사할 수 있습니다.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Upload a new license
ms.openlocfilehash: 7e967f0c42fe6e37f987b22097579ed38a4d99cf
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098446'
---
## {% data variables.product.prodname_enterprise %}에 대한 라이선스 파일 정보

{% 데이터 variables.contact.contact_enterprise_sales %}에서 {% 데이터 variables.product.prodname_enterprise %}에 대한 라이선스를 구입하거나 업그레이드한 후 새 라이선스 파일을 {% 데이터 variables.location.product_location_enterprise %}에 업로드하여 새 사용자 라이선스의 잠금을 해제해야 합니다. {% data variables.product.product_name %}용 라이선스에 대한 자세한 내용은 "[{% data variables.product.prodname_enterprise %}에 대한 라이선스 정보](/billing/managing-your-license-for-github-enterprise/about-licenses-for-github-enterprise)" 및 "[{% data variables.product.prodname_enterprise %}에 대한 라이선스 다운로드](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)"를 참조하세요.

{% data reusables.enterprise-licensing.contact-sales-for-renewals-or-seats %}

## {% 데이터 variables.location.product_location_enterprise %}에 라이선스 업로드

{% warning %}

**경고:** 라이선스를 업데이트하면 {% 데이터 variables.location.product_location %}에 약간의 가동 중지 시간이 발생합니다.

{% endwarning %}

1. 사이트 관리자 권한으로 {% 데이터 variables.location.product_location_enterprise %}에 로그인합니다.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. "빠른 링크"에서 **라이선스 업데이트** 를 클릭합니다.
  ![라이선스 업데이트 링크](/assets/images/enterprise/business-accounts/update-license-link.png)
1. 라이선스를 선택하려면 **라이선스 파일** 을 클릭하거나 라이선스 파일을 **라이선스 파일** 로 끌어다 놓습니다.
  ![라이선스 파일 업로드](/assets/images/enterprise/management-console/upload-license.png)
1. **업로드** 를 클릭합니다.
  ![업로드 시작](/assets/images/enterprise/management-console/begin-upload.png)

