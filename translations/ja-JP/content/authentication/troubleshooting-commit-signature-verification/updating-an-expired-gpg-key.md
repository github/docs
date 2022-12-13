---
title: 期限切れ GPG キーを更新する
intro: 署名を検証するとき、{% data variables.product.product_name %} は、キーが取り消しまたは期限切れになっていないか確認します。 もしサインインのキーが取り消しまたは期限切れになっている場合、{% data variables.product.product_name %} は、お客様の署名を検証できません。 キーが取り消されている場合、プライマリーまたは取り消されていない他のキーを使って、コミットに署名します。
redirect_from:
- /articles/updating-an-expired-gpg-key
- /github/authenticating-to-github/updating-an-expired-gpg-key
- /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Update expired GPG key
ms.openlocfilehash: daf4f225426ccb67d2fa536afbd9a1f6517e4913
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145088259"
---
キーの有効期限が切れている場合は、[有効期限を更新](https://www.gnupg.org/gph/en/manual/c235.html#AEN328)し、新しいキーをエクスポートし、GitHub アカウントで期限切れのキーを削除し、[新しいキーを GitHub にアップロードする](/articles/adding-a-new-gpg-key-to-your-github-account/)必要があります。 キーが他のすべての検証の要件を満たしている限り、過去のコミットとタグは、検証済みとして表示されます。

キーが無効でキーセットに他に有効なキーを所有していないが、新しいクレデンシャルのセットで新しい GPG キーを作成した場合、取り消されたまたは期限切れのキーで作成されたコミットは、未検証として表示され続けます。 また、古いコミットやタグを新しいクレデンシャルで再署名したり検証したりすることはできません。

## <a name="further-reading"></a>参考資料

- 「[コミット署名の検証について](/articles/about-commit-signature-verification)」
