---
title: 強力なパスワードの作成
intro: 'パスワードマネージャを使用して、自分の {% data variables.product.product_name %}アカウントを強力な独自のパスワードで保護しましょう。'
redirect_from:
  - /articles/what-is-a-strong-password/
  - /articles/creating-a-strong-password
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - アイデンティティ
  - アクセス管理
---

{% data variables.product.product_name %} アカウントのパスワードを選択または生成する必要があります。パスワードの条件は次のとおりです。
- 数字と小文字アルファベットを含む場合は長さ 8 文字、または
- 文字の組み合わせを考慮しない場合は長さ 15 文字

アカウントを安全に保つため、以下のベストプラクティスに従うことをお勧めします:
- [LastPass](https://lastpass.com/) や [1Password](https://1password.com/) などのパスワードマネージャを使用して、15 文字以上のパスワードを生成すること。
- {% data variables.product.product_name %}用に独自のパスワードを生成すること。 {% data variables.product.product_name %} パスワードを他でも使用していて、そのサービスが危険にさらされると、攻撃者や悪意のある者がその情報を使用して {% data variables.product.product_name %} アカウントにアクセスする可能性があります。
- 個人アカウントに 2 要素認証を設定する。 詳しい情報については「[2 要素認証について](/articles/about-two-factor-authentication)」を参照してください。
- 潜在的なコラボレーターであっても誰であっても、パスワードは決して共有しないでください。 {% data variables.product.product_name %}では一人ひとりが自分の個人アカウントを使用すべきです。 コラボレートする方法の詳しい情報については、「[コラボレーターを個人リポジトリに招待する](/articles/inviting-collaborators-to-a-personal-repository)」、「[共同開発モデルについて](/articles/about-collaborative-development-models/)」、または「[Organization のグループでコラボレーションする](/organizations/collaborating-with-groups-in-organizations/)」を参照してください。

{% data reusables.repositories.blocked-passwords %}

ブラウザを使用して {% data variables.product.product_name %} にログオンする場合のみパスワードを使用できます。 コマンドラインや API などの他の方法で {% data variables.product.product_name %} を認証する場合は、他の認証情報を使用する必要があります。 詳しい情報については、「[{% data variables.product.prodname_dotcom %} への認証について](/github/authenticating-to-github/about-authentication-to-github)」を参照してください。

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.password-authentication-deprecation %}{% endif %}

### 参考リンク

- "[Git で {% data variables.product.product_name %} 認証情報をキャッシュ](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
- "[アカウントとデータの安全を保つ](/articles/keeping-your-account-and-data-secure/)"
