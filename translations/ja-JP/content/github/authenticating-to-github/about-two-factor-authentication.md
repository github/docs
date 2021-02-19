---
title: 2 要素認証について
intro: '{% data reusables.two_fa.about-2fa %} 2FA では、ユーザ名とパスワードを使用してログインし、さらに自分だけが知っている、または利用できる別の形式の認証でログインする必要があります。'
redirect_from:
  - /articles/about-two-factor-authentication
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data variables.product.product_name %} の場合、2 番目の認証の形式は、モバイルデバイス上のアプリケーションによって生成されるコード{% if currentVersion == "free-pro-team@latest" %}、またはテキストメッセージ (SMS) として送信されるコードになります{% endif %}。 2FA を有効化すると、{% data variables.product.product_name %}は誰かが {% data variables.product.product_name %}アカウントにサインインしようとすると認証コードを生成します。 誰かがアカウントサインインできるのは、パスワードを知っており、電話上の認証コードも利用できる場合のみです。

{% data reusables.two_fa.after-2fa-add-security-key %}

2 要素認証の認証情報にアクセスできなくなった場合に備えて、追加のリカバリ方法を設定することもできます。 2FA のセットアップに関する詳しい情報については[2 要素認証の設定](/articles/configuring-two-factor-authentication)および[2 要素認証のリカバリ方法の設定](/articles/configuring-two-factor-authentication-recovery-methods)を参照してください。

アカウントの安全のため、{% data variables.product.product_name %} だけでなく、2FA をサポートする他の Web サイトやアプリケーションでも、2FA を有効にすることを**強く**お勧めします。 2FA が {% data variables.product.product_name %} および {% data variables.product.prodname_desktop %} にアクセスできるようにすることができます。

詳しい情報については [2 要素認証を用いた {% data variables.product.prodname_dotcom %}へのアクセス](/articles/accessing-github-using-two-factor-authentication)を参照してください。

### 2 要素認証のリカバリコード

{% data reusables.two_fa.about-recovery-codes %}詳しい情報については [2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)を参照してください。

{% if currentVersion == "free-pro-team@latest" %}

{% warning %}

**警告**: {% data reusables.two_fa.support-may-not-help %}詳しい情報については [2FA クレデンシャルをなくした際のアカウントの回復](/articles/recovering-your-account-if-you-lose-your-2fa-credentials)を参照してください。

{% endwarning %}

{% endif %}

### Organization で 2 要素認証を要求する

Organization のオーナーは、Organization のメンバー{% if currentVersion == "free-pro-team@latest" %}、支払いマネージャー{% endif %}および外部のコラボレータが個人アカウントを保護するために 2 要素認証を使うことを要求できます。 詳しい情報については [Organization で 2 要素認証を要求する](/articles/requiring-two-factor-authentication-in-your-organization)を参照してください。

{% data reusables.two_fa.auth_methods_2fa %}
