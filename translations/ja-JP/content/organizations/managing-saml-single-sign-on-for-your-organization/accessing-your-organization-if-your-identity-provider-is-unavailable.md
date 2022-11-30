---
title: アイデンティティプロバイダが利用できない場合の Organization へのアクセス
intro: 'アイデンティティプロバイダが利用できない場合でも、Organization の管理者はシングルサインオンをバイパスし、リカバリコードを利用して {% data variables.product.product_name %}にサインインできます。'
redirect_from:
  - /articles/accessing-your-organization-if-your-identity-provider-is-unavailable
  - /github/setting-up-and-managing-organizations-and-teams/accessing-your-organization-if-your-identity-provider-is-unavailable
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Unavailable identity provider
ms.openlocfilehash: fd965c2c847378936e10ff5cc5560397a09ca372
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145119173'
---
Organization の管理者は、[ダウンロードまたは保存したリカバリ コードのいずれか](/articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes)を使用して、シングル サインオンをバイパスできます。 これらを [LastPass](https://lastpass.com/) や [1Password](https://1password.com/) などのパスワード マネージャーに保存した可能性があります。

{% data reusables.saml.recovery-code-caveats %}

{% data reusables.saml.recovery-code-access %}

## 参考資料

- 「[SAML SSO を使用した ID およびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)」
