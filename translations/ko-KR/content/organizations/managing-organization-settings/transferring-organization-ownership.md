---
title: 조직 소유권 전송
intro: '다른 사람을 조직 계정의 소유자로 만들려면 새 소유자를 추가하고{% ifversion fpt or ghec %}, 청구 정보가 업데이트되었는지 확인하고{% endif %} 자신을 계정에서 제거해야 합니다.'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
ms.openlocfilehash: 2605af47d008eff7ee786d80f64142a267676ee1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145068312'
---
{% ifversion ghec %} {% note %}

**참고:** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. 소유자 권한이 있는 유일한 구성원인 경우 다른 조직 구성원에게 소유자 역할을 부여합니다. 자세한 내용은 “[조직 소유자 임명](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)”을 참조하세요.
2. 새 소유자에게 문의하여 [조직의 설정에 액세스](/articles/accessing-your-organization-s-settings)할 수 있는지 확인합니다.
{% ifversion fpt or ghec %}
3. 현재 조직에서 GitHub 비용을 지불할 책임이 있는 경우 새 소유자 또는 [청구 관리자](/articles/adding-a-billing-manager-to-your-organization/)가 조직의 결제 정보를 업데이트해야 합니다. 자세한 내용은 “[결제 방법 추가 또는 편집](/articles/adding-or-editing-a-payment-method)”을 참조하세요.

  {% warning %}

  **경고**: 조직에서 자신을 제거해도 조직 계정의 파일에 대한 청구 정보는 업데이트되지 **않습니다**. 새 소유자 또는 청구 관리자는 신용 카드 또는 PayPal 정보를 제거하려면 파일의 청구 정보를 업데이트해야 합니다.

  {% endwarning %}

{% endif %}
4. 조직에서 [자신을 제거](/articles/removing-yourself-from-an-organization)합니다.
