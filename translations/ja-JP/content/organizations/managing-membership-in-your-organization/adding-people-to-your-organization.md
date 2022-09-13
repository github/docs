---
title: Organization への人の追加
intro: '{% data variables.product.product_name %}のユーザ名あるいはメールアドレスを使えば、誰でも Organization のメンバーにすることができます。'
redirect_from:
  - /articles/adding-people-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-people-to-your-organization
versions:
  ghes: '*'
  ghae: '*'
permissions: Organization owners can add people to an organization.
shortTitle: Add people to organization
ms.openlocfilehash: 4dc022539ca8458e20fe5c04eadf6f2b71b1735c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109830'
---
{% ifversion not ghae %} Organization で[メンバーが 2 要素認証を使用する必要がある](/articles/requiring-two-factor-authentication-in-your-organization)場合、ユーザーは、メンバーを Organization に追加する前に [2 要素認証を有効](/articles/securing-your-account-with-two-factor-authentication-2fa) にする必要があります。
{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %} {% data reusables.organizations.invite_to_org %} {% data reusables.organizations.choose-to-restore-privileges %} {% data reusables.organizations.choose-user-role %} {% data reusables.organizations.choose-user-license %} {% data reusables.organizations.add-user-to-teams %} {% data reusables.organizations.send-invitation %}

## 参考資料
- 「[Team への Organization メンバーの追加](/articles/adding-organization-members-to-a-team)」
