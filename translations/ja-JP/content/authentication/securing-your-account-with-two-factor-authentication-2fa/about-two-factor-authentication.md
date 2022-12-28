---
title: 2 要素認証について
intro: '{% data reusables.two_fa.about-2fa %} 2FA では、ユーザ名とパスワードを使用してログインし、さらに自分だけが知っている、または利用できる別の形式の認証でログインする必要があります。'
redirect_from:
  - /articles/about-two-factor-authentication
  - /github/authenticating-to-github/about-two-factor-authentication
  - /github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - 2FA
shortTitle: About 2FA
ms.openlocfilehash: f4b15aeeece76ce5e5afe915e0e0bc4893c4dbb6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088320'
---
{% data variables.product.product_name %} では、2 番目の形態の認証は、モバイル デバイス上のアプリケーションで生成された{% ifversion fpt or ghec %}またはテキスト メッセージ (SMS) で送信された{% endif %}コードです。 2FA を有効化すると、{% data variables.product.product_name %} は誰かが {% data variables.product.product_location %} 上のアカウントにサインインしようとするたびに認証コードを生成します。 本人のアカウントにサインインできるのは、パスワードを知っていて、本人の携帯電話で認証コードにもアクセスできる方だけです。

{% data reusables.two_fa.after-2fa-add-security-key %}

{% ifversion fpt or ghec %} セキュリティ キーに加えて、TOTP モバイル アプリまたはテキスト メッセージを構成した後、2FA に {% data variables.product.prodname_mobile %} を使用することもできます。 {% data variables.product.prodname_mobile %} では、公開キー暗号を使ってアカウントをセキュリティで保護しているので、2 番目の要素として {% data variables.product.prodname_mobile %} へのサインインに使ったモバイル デバイスを使用できます。
{% endif %}

2 要素認証の認証情報にアクセスできなくなった場合に備えて、追加のリカバリ方法を設定することもできます。 2FA の設定の詳細については、「[2 要素認証の構成](/articles/configuring-two-factor-authentication)」および「[2 要素認証の回復メソッドの構成](/articles/configuring-two-factor-authentication-recovery-methods)」を参照してください。

アカウントの安全のため、{% data variables.product.product_name %} でだけでなく、2FA をサポートする他の Web サイトやアプリでも、2FA を有効にすることを **強く** お勧めします。 2FA が {% data variables.product.product_name %} および {% data variables.product.prodname_desktop %} にアクセスできるようにすることができます。

詳細については、「[2 要素認証を使用した {% data variables.product.prodname_dotcom %} へのアクセス](/articles/accessing-github-using-two-factor-authentication)」を参照してください。

## 2 要素認証のリカバリコード

{% data reusables.two_fa.about-recovery-codes %} 詳細については、「[2FA 資格情報を失った場合のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)」を参照してください。

{% ifversion fpt or ghec %}

{% warning %}

**警告**: {% data reusables.two_fa.support-may-not-help %} 詳細については、「[2FA 資格情報を失った場合のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)」を参照してください。

{% endwarning %}

{% endif %}

## Organization で 2 要素認証を要求する

組織の所有者は、その組織のメンバー{% ifversion fpt or ghec %}、課金マネージャー、{% endif %}および外部のコラボレーターが個人アカウントを保護するために 2 要素認証を使うことを要求できます。 詳細については、「[組織内で 2 要素認証を要求する](/articles/requiring-two-factor-authentication-in-your-organization)」を参照してください。

{% data reusables.two_fa.auth_methods_2fa %}
