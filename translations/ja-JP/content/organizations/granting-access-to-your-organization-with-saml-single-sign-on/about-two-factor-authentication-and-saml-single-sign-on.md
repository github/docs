---
title: 2 要素認証と SAML シングルサインオンについて
intro: Organization の管理者は、SAML シングルサインオンと 2 要素認証を共に有効化し、Organization のメンバーの認証方法を追加できます。
redirect_from:
  - /articles/about-two-factor-authentication-and-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-two-factor-authentication-and-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: 2FA & SAML single sign-on
ms.openlocfilehash: 1dc8eff35906a5f2c59f097d3bf53482547bd1f5
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145130851'
---
2 要素認証 (2FA) は、Organization のメンバーに基本的な認証を提供します。 2FA を有効化することで、Organization の管理者は{% data variables.product.product_location %}のメンバーアカウントが悪用される可能性を抑制できます。 2 要素認証の詳細については、「[2 要素認証について](/articles/about-two-factor-authentication)」を参照してください。

追加の認証手段を追加するために、Organization の管理者は、Organization のメンバーがシングル サインオンを使用して Organization にアクセスしなければならないように、[SAML シングル サインオン (SSO) を有効](/articles/enabling-and-testing-saml-single-sign-on-for-your-organization)にすることもできます。 SAML SSO の詳細については、「[SAML シングル サインオンを使用した ID およびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)」を参照してください。

2 要素認証と SAML SSO をどちらも有効化した場合、Organization のメンバーは以下のようにしなければなりません:
- {% data variables.product.product_location %}のアカウントへのログインに2FAを利用
- Organization へのアクセスにはシングルサインオンを利用
- API あるいは Git のアクセスには認可されたトークンを使い、トークンの認可にはシングルサインオンを利用

## 参考資料

- 「[Organization に SAML シングル サインオンを適用する](/articles/enforcing-saml-single-sign-on-for-your-organization)」
