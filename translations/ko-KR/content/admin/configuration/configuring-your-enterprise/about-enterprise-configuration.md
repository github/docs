---
title: 엔터프라이즈 구성 정보
intro: '사이트 관리자 대시보드{% ifversion ghes %}, {% data variables.enterprise.management_console %}, 관리 셸(SSH) {% elsif ghae %} 및 엔터프라이즈 설정 또는 문의 지원{% endif %}을 사용하여 엔터프라이즈를 관리할 수 있습니다.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: About configuration
ms.openlocfilehash: 86012c1fc7b56367d171fd271c5f3d12125cf461
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112892'
---
{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} 자세한 내용은 “[사이트 관리자 대시보드](/admin/configuration/site-admin-dashboard)”를 참조하세요.

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} 자세한 내용은 “[관리 콘솔 액세스](/admin/configuration/accessing-the-management-console)”를 참조하세요.

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} 자세한 내용은 “[관리 셸(SSH) 액세스](/admin/configuration/accessing-the-administrative-shell-ssh)”를 참조하세요.
{% endif %}

{% ifversion ghae %} {% data variables.product.product_name %}를 시작하려면 먼저 {% data variables.product.product_name %}를 배포해야 합니다. 자세한 내용은 “[{% data variables.product.product_name %} 배포](/admin/configuration/configuring-your-enterprise/deploying-github-ae)”를 참조하세요.

엔터프라이즈에 처음 액세스할 때 {% data variables.product.product_name %}를 사용할 수 있도록 초기 구성을 완료합니다. 초기 구성에는 엔터프라이즈를 IdP(ID 공급자)와 연결하고, SAML SSO를 사용하여 인증하고, 엔터프라이즈의 리포지토리 및 조직에 대한 정책을 구성하고, 아웃바운드 메일에 대한 SMTP를 구성하는 것이 포함됩니다. 자세한 내용은 “[{% data variables.product.prodname_ghe_managed %} 초기화](/admin/configuration/initializing-github-ae)”를 참조하세요.

나중에 사이트 관리자 대시보드 및 엔터프라이즈 설정을 사용하여 엔터프라이즈를 추가로 구성하고, 사용자, 조직 및 리포지토리를 관리하고, 위험을 줄이고 품질을 높이는 정책을 설정할 수 있습니다. 

모든 엔터프라이즈는 암호화된 트래픽에 대해서만 TLS 1.2 이상에 대한 하위 도메인 격리 및 지원으로 구성됩니다.
{% endif %}

## 추가 참고 자료

- “[사용자, 조직, 리포지토리 관리](/admin/user-management)”
- “[엔터프라이즈에 대한 정책 설정](/admin/policies)”
