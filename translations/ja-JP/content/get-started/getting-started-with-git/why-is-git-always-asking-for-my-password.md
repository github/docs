---
title: Git が常にパスワードを要求するのはなぜですか？
intro: GitHub とやり取りしようとするたびに Git がユーザ名とパスワードの入力を求めてくる場合は、おそらくリポジトリに HTTPS クローン URL を使用しています。
redirect_from:
  - /articles/why-is-git-always-asking-for-my-password
  - /github/using-git/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/why-is-git-always-asking-for-my-password
  - /github/getting-started-with-github/getting-started-with-git/why-is-git-always-asking-for-my-password
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git passwords
ms.openlocfilehash: 06a8cf617072075f39a880ec58173e7cfbc5bc8a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131263'
---
HTTPS リモート URL を使用すると、 SSH を使用するときと比べていくつかの利点があります。 SSH よりも、設定が簡単です。 通常は厳密なファイアウォールやプロキシを介して動作します。 ただし、リポジトリをプルまたはプッシュするたびに、{% data variables.product.product_name %} の認証情報を入力するように求められます。 

{% data reusables.user-settings.password-authentication-deprecation %}

[資格情報をキャッシュする](/github/getting-started-with-github/caching-your-github-credentials-in-git)ように Git を設定すれば、毎回パスワードを求められないようにできます。 認証情報のキャッシュを設定すると、HTTPS を使用してリポジトリをプルまたはプッシュするときに、Git はキャッシュされた個人アクセストークンを自動的に使用します。

## 参考資料

- [リモート リポジトリについて](/github/getting-started-with-github/about-remote-repositories)
- [{% data variables.product.prodname_dotcom %} の認証について](/github/authenticating-to-github/about-authentication-to-github)
- [SSH キーを ssh-agent に追加する](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)
