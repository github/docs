---
title: ユーザセキュリティのベストプラクティス
intro: '{% ifversion ghes %}サイト管理者が実装できるインスタンスレベルのセキュリティ対策（SSL、Subdomain Isolation、ファイアウォールの設定）以外では、{% else %}{% endif %}Enterprise を保護するためにユーザが実行できるステップがあります。'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
  - /admin/user-management/best-practices-for-user-security
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Security
  - User account
shortTitle: User security best practices
---

{% ifversion ghes %}
## 2要素認証の有効化

2要素認証（2FA）は、Webサイトやサービスへのログインの方法で、認証のパスワードの先に2番目の要素を必要とします。 {% data variables.product.prodname_ghe_server %} の場合、この 2 番目の要素はユーザのスマートフォン上のアプリケーションが生成するワンタイムの認証コードです。 ユーザにアカウントで2要素認証を有効化するよう求めることを強くおすすめします。 2要素認証を使っていれば、アカウントそのものを侵犯するためには、ユーザのパスワードとスマートフォンの両方を侵犯しなければならなくなります。

2要素認証の設定に関する詳しい情報については、[2要素認証について](/enterprise/user/articles/about-two-factor-authentication)を参照してください。
{% endif %}

## パスワードマネージャの要求

We strongly recommend requiring your users to install and use a password manager--such as [LastPass](https://lastpass.com/) or [1Password](https://1password.com/)--on any computer they use to connect to your enterprise. そうすることで、確実に、パスワードが強力になり、侵犯されたり盗まれたりする可能性が低くなります。

## Teamやリポジトリへのアクセス制限

セキュリティ侵害が生じた際の潜在的な攻撃対象を制限するために、ユーザには本当に作業に必要なTeamやリポジトリにのみアクセス権を与えることを強くおすすめします。 オーナーロールを持つメンバーはOrganization内のすべてのTeamとリポジトリにアクセスできるので、このTeamはできる限り小さく保つことを強くおすすめします。

For more information on configuring teams and team permissions, see "[Roles in an organization](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)."
