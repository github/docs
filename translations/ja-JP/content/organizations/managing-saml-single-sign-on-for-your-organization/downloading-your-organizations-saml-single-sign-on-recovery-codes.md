---
title: Organization の SAML シングルサインオンのリカバリコードをダウンロードする
intro: 'Organization のアイデンティティプロバイダを利用できない場合でも変わりなく {% data variables.product.product_name %} にアクセスできるよう、Organization の管理者は Organization 用に SAML シングルサインオンのリカバリコードをダウンロードする必要があります。'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Download SAML recovery codes
ms.openlocfilehash: 9b17e3e4fc20cc9eaedf59afe45e393054d7d8e5
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: '145125669'
---
リカバリコードは共有や配布しないでください。 これらを [LastPass](https://lastpass.com/) や [1Password](https://1password.com/) などのパスワード マネージャーで保存することをお勧めします。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. [SAML シングル サインオン] の下のリカバリ コードに関するメモで、 **[リカバリ コードを保存]** をクリックします。
![リカバリ コードを表示して保存するリンク](/assets/images/help/saml/saml_recovery_codes.png)
6. **[ダウンロード]** 、 **[印刷]** 、 **[コピー]** のいずれかをクリックしてリカバリ コードを保存します。
![リカバリ コードをダウンロード、印刷、またはコピーするボタン](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **注:** リカバリ コードがあれば IdP を使用できないときに {% data variables.product.product_name %} に戻れます。 新しいリカバリコードを生成すると、「シングルサインオンのリカバリコード」ページに表示されているリカバリコードは自動的に更新されます。

  {% endnote %}

7. リカバリコードを {% data variables.product.product_name %}へのアクセス回復のために一度使用すると、再利用はできません。 {% data variables.product.product_name %} へのアクセスは、シングルサインオンを使用してサインインするか聞かれるまでの 24 時間だけ有効です。

## 参考資料

- 「[SAML シングル サインオンを使用した ID およびアクセス管理について](/articles/about-identity-and-access-management-with-saml-single-sign-on)」
- 「[ID プロバイダーが利用できない場合の Organization へのアクセス](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)」
