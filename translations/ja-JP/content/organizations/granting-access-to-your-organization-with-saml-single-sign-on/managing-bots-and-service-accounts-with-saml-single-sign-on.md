---
title: SAML シングルサインオンでボットおよびサービスアカウントを管理する
intro: SAML シングルサインオンを有効にしている Organization は、ボットおよびサービスアカウントへのアクセスを維持できます。
redirect_from:
  - /articles/managing-bots-and-service-accounts-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/managing-bots-and-service-accounts-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage bots & service accounts
ms.openlocfilehash: 57f1150929db674a658d52a5cb7e455444cc48de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145130844'
---
ボットとサービス アカウントのアクセス権を保持するために、Organization の管理者は SAML シングル サインオンを [有効](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)にできますが、自分の Organization に対しては [適用](/articles/enforcing-saml-single-sign-on-for-your-organization)**できません**。 Organization に対して SAML シングルサインオンを強制する必要がある場合は、アイデンティティプロバイダ (IdP) を利用してボットまたはサービスアカウントに外部アイデンティティを作成する方法があります。

{% warning %}

**注:** 自分の Organization に SAML シングル サインオンを適用し、IdP を使用してボットとサービス アカウントに対して外部 ID を設定 **していない** 場合は、それらは Organization から削除されます。

{% endwarning %}

## 参考資料

- 「[SAML シングル サインオンを使用した ID およびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)」
