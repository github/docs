---
title: 조직의 프로필 정보
intro: 조직의 프로필 페이지에는 조직에 대한 기본 정보가 표시됩니다.
redirect_from:
  - /articles/about-your-organization-s-profile
  - /articles/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-organizations-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-organizations-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Organization's profile
ms.openlocfilehash: a42d5393de00e57f0b642c89a349da86b4ad55f1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108957'
---
필요에 따라 조직의 설명, 위치, 웹 사이트 및 전자 메일 주소를 추가하고 중요한 리포지토리를 고정하도록 선택할 수 있습니다. {% ifversion fpt or ghec or ghes > 3.3 %} README.md 파일을 추가하여 조직의 공개 프로필을 사용자 지정할 수 있습니다. 자세한 내용은 “[조직의 프로필 사용자 지정](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)”을 참조하세요.{% endif %}

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %}를 사용하는 조직은 {% data variables.product.product_name %}을 사용하여 조직의 도메인을 확인하여 조직의 ID를 확인하고 조직의 프로필 페이지에 "확인됨" 배지를 표시할 수 있습니다. 자세한 내용은 {% data variables.product.prodname_ghe_cloud %} 설명서에서 "[조직의 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)"을 참조하세요.
{% elsif ghec or ghes %} 조직의 ID를 확인하고 조직 프로필 페이지에 "확인됨" 배지를 표시하려면 {% data variables.product.prodname_dotcom %}로 조직의 도메인을 확인할 수 있습니다. 자세한 내용은 “[조직의 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization)”을 참조하세요.
{% endif %}

{% ifversion fpt or ghes or ghec %} ![ 샘플 조직 프로필 페이지](/assets/images/help/organizations/org_profile_with_overview.png) {% else %} ![샘플 조직 프로필 페이지](/assets/images/help/profile/org_profile.png) {% endif %}

## 추가 참고 자료

- “[조직 정보](/organizations/collaborating-with-groups-in-organizations/about-organizations)”
