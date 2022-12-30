---
title: GPG キーで検証済みのメールアドレスを使う
intro: '署名を検証するとき、{% data variables.product.product_name %} は、コミッターまたはタガーのメールアドレスが GPG キーの ID からのメールアドレスと一致し、ユーザアカウントの確認済みメールアドレスであることを確認します。 これにより、キーが自分のものであり、自分がコミットまたはタグを作成したことが保証されます。'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/using-a-verified-email-address-in-your-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/using-a-verified-email-address-in-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Use verified email in GPG key
ms.openlocfilehash: bb9f4fbbfdb70ba55870ab068a33c566791fbaf2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088248'
---
{% ifversion fpt or ghec %} GitHub のメール アドレスを確認する必要がある場合は、「[メール アドレスの確認](/articles/verifying-your-email-address/)」を参照してください。 {% endif %} GPG キーにメール アドレスを更新または追加する必要がある場合は、「[GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)」を参照してください。

コミットとタグには複数のメールアドレスが含まれる場合があります。 コミットについては、作者 - コードを書いた人 - とコミッター - ツリーにコミットを追加した人がいます。 マージ中、チェリーピック中、あるいは通常の `git commit` のいずれであっても、Git でコミットに署名すると、作者のメール アドレスがそうでなくても、コミッターのメール アドレスが自分のものになります。 タグの方が簡単です: タガーのメールアドレスは常にタグを作成したユーザです。

コミッターまたはタガーのメール アドレスを変更する必要がある場合は、「[コミット メール アドレスを設定する](/articles/setting-your-commit-email-address/)」を参照してください。

## 参考資料

- 「[コミット署名の検証について](/articles/about-commit-signature-verification)」
