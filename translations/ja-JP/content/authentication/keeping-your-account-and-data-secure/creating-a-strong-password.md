---
title: 強力なパスワードの作成
intro: 'Secure your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} with a strong and unique password using a password manager.'
redirect_from:
  - /articles/what-is-a-strong-password
  - /articles/creating-a-strong-password
  - /github/authenticating-to-github/creating-a-strong-password
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-strong-password
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a strong password
---

You must choose or generate a password for your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} that is at least:
- 数字と小文字アルファベットを含む場合は長さ {% ifversion ghes %}7{% else %}8{% endif %} 文字以上、または
- 文字の組み合わせを考慮しない場合は長さ 15 文字以上

アカウントを安全に保つため、以下のベストプラクティスに従うことをお勧めします:
- [LastPass](https://lastpass.com/) や [1Password](https://1password.com/) などのパスワードマネージャを使用して、15 文字以上のパスワードを生成すること。
- {% data variables.product.product_name %}用に独自のパスワードを生成すること。 If you use your {% data variables.product.product_name %} password elsewhere and that service is compromised, then attackers or other malicious actors could use that information to access your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

- 個人アカウントに 2 要素認証を設定する。 詳しい情報については「[2 要素認証について](/articles/about-two-factor-authentication)」を参照してください。
- 潜在的なコラボレーターであっても誰であっても、パスワードは決して共有しないでください。 {% data variables.product.product_name %}では一人ひとりが自分の個人アカウントを使用すべきです。 コラボレートする方法の詳しい情報については、「[コラボレーターを個人リポジトリに招待する](/articles/inviting-collaborators-to-a-personal-repository)」、「[共同開発モデルについて](/articles/about-collaborative-development-models/)」、または「[Organization のグループでコラボレーションする](/organizations/collaborating-with-groups-in-organizations/)」を参照してください。

{% data reusables.repositories.blocked-passwords %}

ブラウザを使用して {% data variables.product.product_name %} にログオンする場合のみパスワードを使用できます。 コマンドラインや API などの他の方法で {% data variables.product.product_name %} を認証する場合は、他の認証情報を使用する必要があります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} への認証について](/github/authenticating-to-github/about-authentication-to-github)」を参照してください。

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## 参考リンク

- "[Git で {% data variables.product.product_name %} 認証情報をキャッシュ](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
- "[アカウントとデータの安全を保つ](/articles/keeping-your-account-and-data-secure/)"
