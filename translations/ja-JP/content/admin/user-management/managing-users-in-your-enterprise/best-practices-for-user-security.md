---
title: ユーザセキュリティのベストプラクティス
intro: '{% ifversion ghes %}サイト管理者が実装できるインスタンスレベルのセキュリティ対策 (SSL、サブドメイン分離、ファイアウォールの構成) 以外に、{% else %}{% endif %}エンタープライズを保護するためにユーザーが実行できるステップがあります。'
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
ms.openlocfilehash: 57d19d97a8944ac20d6b90794bcf0cda63fc5bd0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331657'
---
{% ifversion ghes %}
## 2要素認証の有効化

2要素認証（2FA）は、Webサイトやサービスへのログインの方法で、認証のパスワードの先に2番目の要素を必要とします。 {% data variables.product.prodname_ghe_server %} の場合、この 2 番目の要素はユーザのスマートフォン上のアプリケーションが生成するワンタイムの認証コードです。 ユーザにアカウントで2要素認証を有効化するよう求めることを強くおすすめします。 2要素認証を使っていれば、アカウントそのものを侵犯するためには、ユーザのパスワードとスマートフォンの両方を侵犯しなければならなくなります。

2 要素認証の構成の詳細については、「[2 要素認証について](/enterprise/user/articles/about-two-factor-authentication)」を参照してください。
{% endif %}

## パスワードマネージャの要求

企業への接続に使用するコンピューターに [LastPass](https://lastpass.com/) や [1Password](https://1password.com/) などのパスワード マネージャーをインストールして使用するよう、ユーザーに求めることを強くお勧めします。 そうすることで、確実に、パスワードが強力になり、侵犯されたり盗まれたりする可能性が低くなります。

## Teamやリポジトリへのアクセス制限

セキュリティ侵害が生じた際の潜在的な攻撃対象を制限するために、ユーザには本当に作業に必要なTeamやリポジトリにのみアクセス権を与えることを強くおすすめします。 オーナーロールを持つメンバーはOrganization内のすべてのTeamとリポジトリにアクセスできるので、このTeamはできる限り小さく保つことを強くおすすめします。

チームとチームのアクセス許可の構成の詳細については、「[Organization 内のロール](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)」を参照してください。
