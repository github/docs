---
title: 強力なパスワードの作成
intro: '{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} では、パスワード マネージャーを使用して強力で固有のパスワードでアカウントをセキュリティで保護します。'
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
ms.openlocfilehash: 97473f9b04c8d033471f89cac9a0b0d08bebcba3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145088451'
---
{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} では、アカウントに、少なくとも次の条件を満たすパスワードを選択、または生成する必要があります。
- 長さが {% ifversion ghes %}7{% else %}8{% endif %} 文字以上 (数字と小文字が含まれている場合)、または
- 文字の組み合わせを考慮しない場合は長さ 15 文字以上

アカウントを安全に保つため、以下のベストプラクティスに従うことをお勧めします:
- [LastPass](https://lastpass.com/) や [1Password](https://1password.com/) などのパスワード マネージャーを使用して、少なくとも 15 文字以上のパスワードを生成すること。
- {% data variables.product.product_name %}用に独自のパスワードを生成すること。 {% data variables.product.product_name %} パスワードを他でも使用していて、そのサービスが侵害を受けると、攻撃者や悪意のある者がその情報を使用して {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のアカウントにアクセスする可能性があります。

- 個人アカウントに 2 要素認証を設定する。 詳細については、「[2 要素認証について](/articles/about-two-factor-authentication)」を参照してください。
- 潜在的なコラボレーターであっても誰であっても、パスワードは決して共有しないでください。 {% data variables.product.product_name %}では一人ひとりが自分の個人アカウントを使用すべきです。 共同作業の方法の詳細については、「[コラボレーターを個人リポジトリに招待する](/articles/inviting-collaborators-to-a-personal-repository)」、「[共同開発モデルについて](/articles/about-collaborative-development-models/)」、「[Organization のグループでコラボレーションする](/organizations/collaborating-with-groups-in-organizations/)」を参照してください。

{% data reusables.repositories.blocked-passwords %}

ブラウザを使用して {% data variables.product.product_name %} にログオンする場合のみパスワードを使用できます。 コマンドラインや API などの他の方法で {% data variables.product.product_name %} を認証する場合は、他の認証情報を使用する必要があります。 詳細については、「[{% data variables.product.prodname_dotcom %} への認証について](/github/authenticating-to-github/about-authentication-to-github)」を参照してください。 

{% ifversion fpt or ghec %}{% data reusables.user-settings.password-authentication-deprecation %}{% endif %}

## 参考資料

- 「[Git で {% data variables.product.product_name %} 資格情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git/)」
- 「[アカウントとデータを安全に保つ](/articles/keeping-your-account-and-data-secure/)」
