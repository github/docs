---
title: コミットおよびタグの署名の検証ステータスを確認する
intro: '{% data variables.product.product_name %}のコミットやタグの署名について、検証ステータスを確認できます。'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/checking-your-commit-and-tag-signature-verification-status
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Check verification status
ms.openlocfilehash: c43072b238d6064b8d6a8cc27bb1994f4806875f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147653315'
---
## コミットの署名検証のステータスの確認

1. {% data variables.product.product_name %}上で、プルリクエストに移動します。
{% data reusables.repositories.review-pr-commits %}
3. コミットの短縮コミット ハッシュの横にボックスがあり、コミット署名が、検証済み{% ifversion fpt or ghec %}、部分的に検証済み、{% endif %}または未検証のいずれであるかが示されます。
![署名されたコミット](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. コミット署名の詳細を確認するには、 **[Verified]\(検証済み\)** {% ifversion fpt or ghec %}、 **[Partially verified]\(部分的に検証済み\)、** {% endif %}または **[Unverified]\(未検証\)** をクリックします。
  GPG で署名されたコミットには、使われたキーの ID が表示されます。
  ![検証済みの GPG で署されたコミット](/assets/images/help/commits/gpg-signed-commit_verified_details.png) {% ifversion ssh-commit-verification %} SSH で署名されたコミットには、使われた公開キーの署名が表示されます。
![検証済みの SSH で署名されたコミット](/assets/images/help/commits/ssh-signed-commit-verified-details.png) {% endif %}

## タグの署名検証のステータスの確認

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
2. [Releases]\(リリース\) ページの上部にある **[Tags]\(タグ\)** をクリックします。
![[Tags]\(タグ\) ページ](/assets/images/help/releases/tags-list.png)
3. タグの説明の横にボックスがあり、タグ署名が、検証済み{% ifversion fpt or ghec %}、部分的に検証済み、{% endif %}または未検証のいずれであるかが示されます。
![検証されたタグ署名](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. タグ署名の詳細を確認するには、 **[Verified]\(検証済み\)** {% ifversion fpt or ghec %}、 **[Partially verified]\(部分的に検証済み\)、** {% endif %}または **[Unverified]\(未検証\)** をクリックします。 
![検証された署名済みタグ](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

## 参考資料

- 「[コミット署名の検証について](/articles/about-commit-signature-verification)」
- 「[コミットに署名する](/articles/signing-commits)」
- [タグに署名する](/articles/signing-tags)
