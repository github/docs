---
title: コミット署名の検証を管理する
intro: 'コミットが信頼できるソースからのものであることを他のユーザーがわかるよう、{% data variables.product.product_name %} によって GPG、{% ifversion ssh-commit-verification %}SSH、{% endif %}S/MIME のいずれかの署名が検証されます。{% ifversion fpt %}ユーザーが {% data variables.product.product_name %} Web インターフェイスを使って行ったコミットは、{% data variables.product.product_name %} によって自動的に署名されます。{% endif %}'
redirect_from:
  - /articles/generating-a-gpg-key
  - /articles/signing-commits-with-gpg
  - /articles/managing-commit-signature-verification
  - /github/authenticating-to-github/managing-commit-signature-verification
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
children:
  - /about-commit-signature-verification
  - /displaying-verification-statuses-for-all-of-your-commits
  - /checking-for-existing-gpg-keys
  - /generating-a-new-gpg-key
  - /adding-a-gpg-key-to-your-github-account
  - /telling-git-about-your-signing-key
  - /associating-an-email-with-your-gpg-key
  - /signing-commits
  - /signing-tags
shortTitle: Verify commit signatures
ms.openlocfilehash: 168d3a078c1f2cbf0ec65e5a372dedb79d918176
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147653251'
---

