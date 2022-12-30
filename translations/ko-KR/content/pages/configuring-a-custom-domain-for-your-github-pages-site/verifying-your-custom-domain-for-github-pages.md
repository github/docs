---
title: GitHub Pages에 대한 사용자 지정 도메인 확인
intro: 도메인을 확인하여 사용자 지정 도메인의 보안을 강화하고 인수 공격을 방지할 수 있습니다.
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Verify a custom domain
ms.openlocfilehash: b3c44dacd98882afa7a43854b96d803352e879ca
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147529673'
---
## GitHub Pages에 대한 도메인 확인 정보

개인 계정 또는 조직의 사용자 지정 도메인을 확인하는 경우에는 확인된 사용자 지정 도메인 또는 도메인의 직접 하위 도메인에 {% data variables.product.prodname_pages %} 사이트를 게시하는 데 개인 계정 또는 조직이 소유한 리포지토리만 사용할 수 있습니다.

도메인을 확인하면 다른 GitHub 사용자가 여러분의 사용자 지정 도메인을 인수하여 자체 {% data variables.product.prodname_pages %} 사이트를 게시하는 데 사용할 수 없습니다. 리포지토리를 삭제하는 경우, 청구 플랜이 다운그레이드된 경우 또는 도메인이 {% data variables.product.prodname_pages %}에 대해 구성된 상태로 유지되고 확인되지 않은 상태일 때 사용자 지정 도메인의 연결을 해제하거나 {% data variables.product.prodname_pages %}를 사용하지 않도록 설정하는 기타 모든 변경이 발생한 후 도메인 인수가 발생할 수 있습니다.

도메인을 확인하면 직속 하위 도메인도 확인에 포함됩니다. 예를 들어 `github.com` 사용자 지정 도메인이 확인되면 `docs.github.com`, `support.github.com` 및 다른 직속 하위 도메인도 인수되지 않도록 방지됩니다.

{% data reusables.pages.wildcard-dns-warning %}

조직{% ifversion ghec %} 또는 엔터프라이즈{% endif %}에 대한 도메인을 확인할 수도 있는데, 그러면 조직 {% ifversion ghec %}또는 엔터프라이즈{% endif %} 프로필{% ifversion ghec %}에 “확인됨” 배지가 표시되고, {% data variables.product.prodname_ghe_cloud %}에서 확인된 도메인을 사용하는 메일 주소로 알림을 제한할 수 있습니다{% endif %}. 자세한 내용은 “[조직의 도메인 확인 또는 승인](/organizations/managing-organization-settings/verifying-or-approving-a-domain-for-your-organization){% ifversion ghec %}” 및 “[엔터프라이즈의 도메인 확인 또는 승인](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise)”{% endif %}을 참조하세요.

## 사용자 사이트에 대한 도메인 확인

{% data reusables.user-settings.access_settings %}
1. 사이드바의 “코드, 계획, 자동화” 섹션에서 **{% octicon "browser" aria-label="The pages icon" %} 페이지** 를 클릭합니다.
{% data reusables.pages.settings-verify-domain-setup %}
1. DNS 구성이 변경될 때까지 기다리세요. 즉시 변경되거나 최대 24시간이 걸릴 수 있습니다. 명령줄에서 `dig` 명령을 실행하여 DNS 구성의 변경 내용을 확인할 수 있습니다. 아래 명령에서 `USERNAME`은 사용자 이름으로, `example.com`은 확인 중인 도메인으로 바꿉니다. DNS 구성이 업데이트된 경우 출력에 새 TXT 레코드가 표시됩니다.
  ```
  dig _github-pages-challenge-USERNAME.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}

## 조직 사이트의 도메인 확인

조직 소유자는 조직의 사용자 지정 도메인을 확인할 수 있습니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. 사이드바의 “코드, 계획 및 자동화” 섹션에서 **{% octicon "browser" aria-label="The browser icon" %} Pages** 를 클릭합니다.
{% data reusables.pages.settings-verify-domain-setup %}
1. DNS 구성이 변경될 때까지 기다리세요. 즉시 변경되거나 최대 24시간이 걸릴 수 있습니다. 명령줄에서 `dig` 명령을 실행하여 DNS 구성의 변경 내용을 확인할 수 있습니다. 아래 명령에서 `ORGANIZATION`은 조직의 이름으로, `example.com`은 확인 중인 도메인으로 바꿉니다. DNS 구성이 업데이트된 경우 출력에 새 TXT 레코드가 표시됩니다.
  ```
  dig _github-pages-challenge-ORGANIZATION.example.com +nostats +nocomments +nocmd TXT
  ```
{% data reusables.pages.settings-verify-domain-confirm %}
