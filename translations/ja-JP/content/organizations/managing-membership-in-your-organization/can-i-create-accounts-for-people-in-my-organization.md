---
title: 私の Organization に所属する人のためにアカウントを作成できますか?
intro: 作成した Organization にユーザーを追加することはできますが、個人用アカウントを代理で作成することはできません。
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
ms.openlocfilehash: 9ddbb857d86a3cada3f11a20a3ed1fab7bb263b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109829'
---
## 個人用アカウントについて

Organization にアクセスするには個人用アカウントでログインするため、Team メンバーは各自の個人用アカウントを作成する必要があります。 Organizationに追加したい各人のユーザ名があれば、それらのユーザをTeamに追加できます。

{% ifversion fpt or ghec %} {% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} を使用する Organization {% else %}ユーザー{% endif %}は、SAML シングル サインオンを使用して、ID プロバイダー (IdP) を介した Organization のリソースへの個人用アカウントのアクセスを一元管理できます。 詳細については、{% ifversion fpt %}{% data variables.product.prodname_ghe_cloud %} ドキュメントの{% else %}{% endif %}「[SAML シングル サインオンによる ID とアクセスの管理について](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

{% data variables.product.prodname_emus %}を検討することもできます。 {% data reusables.enterprise-accounts.emu-short-summary %} {% endif %}

## Organization へのユーザの追加

1. [個人用アカウントを作成する](/articles/signing-up-for-a-new-github-account)手順を各ユーザーに提供します。
2. Organization のメンバーシップを与えたい人に、ユーザー名を尋ねます。
3. Organization に[参加するよう新しい個人アカウントを招待します](/articles/inviting-users-to-join-your-organization)。 [Organization ロール](/articles/permission-levels-for-an-organization)と[リポジトリのアクセス許可](/articles/repository-permission-levels-for-an-organization)を使用して、各アカウントのアクセスを制限します。
