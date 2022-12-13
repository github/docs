---
title: GitHub アカウントへの新しい GPG キーの追加
intro: '{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} で新しい (または既存の) GPG キーを使用するようにアカウントを構成するには、アカウントのキーも必要です。'
redirect_from:
- /articles/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
- /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Identity
- Access management
shortTitle: Add a new GPG key
ms.openlocfilehash: 73d58f3194e2ba37b38ce8e4b80de6b78888bbff
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145088373"
---
{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} でのアカウントに新しい GPG キーを追加する前に、以下が必要です。
- [既存の GPG キーの確認](/articles/checking-for-existing-gpg-keys)
- [新しい GPG キーの生成とコピー](/articles/generating-a-new-gpg-key)

GitHub アカウントに複数の公開キーを追加できます。 対応する秘密キーのいずれかによって署名されたコミットは、検証済みとして表示されます。 公開キーを削除すると、対応する秘密キーによって署名されたコミットは検証済みとして表示されなくなります。

{% data reusables.gpg.supported-gpg-key-algorithms %}

署名を確認するときに、署名を抽出し、そのキー ID の解析を試みます。キー ID を、{% data variables.product.product_name %} にアップロードされたキーと照合します。 GPG キーが {% data variables.product.product_name %}にアップロードされるまで、署名は検証できません。

## <a name="adding-a-gpg-key"></a>GPG キーの追加

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. **[新しい GPG キー]** をクリックします。
   ![GPG キー ボタン](/assets/images/help/settings/gpg-add-gpg-key.png)
4. "キー" フィールドに、[GPG キーを生成](/articles/generating-a-new-gpg-key)したときにコピーした GPG キーを貼り付けます。
   ![キー フィールド](/assets/images/help/settings/gpg-key-paste.png)
5. **[GPG キーの追加]** をクリックします。
   ![[キーの追加] ボタン](/assets/images/help/settings/gpg-add-key.png)
6. 処理を確認するには、{% data variables.product.product_name %}のパスワードを入力します。

## <a name="further-reading"></a>参考資料

* 「[既存の GPG キーの確認](/articles/checking-for-existing-gpg-keys)」
* 「[新しい GPG キーを生成する](/articles/generating-a-new-gpg-key)」
* 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
* 「[GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)」
* [GPG キーを使ったコミットとタグへの署名](/articles/signing-commits-and-tags-using-gpg)に関する記事
