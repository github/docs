---
title: GitHub アカウントに GPG キーを追加する
intro: '{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} で新しい (または既存の) GPG キーを使用するようにアカウントを構成するには、アカウントのキーも必要です。'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
ms.openlocfilehash: db832d4e02ea5f19303b3178fb669967238e661b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369341'
---
## アカウントへの GPG キーの追加について

{% data variables.product.product_name %} でアカウントに関連付けられているコミットに署名するには、個人アカウントに公開 GPG キーを追加します。 キーを追加する前に、既存のキーを確認する必要があります。 既存のキーが見つからない場合は、新しいキーを生成してコピーできます。 詳しい情報については、「[既存の GPG キーの確認](/articles/checking-for-existing-gpg-keys)」と「[新しい GPG キーを生成する](/articles/generating-a-new-gpg-key)」を参照してください。

{% data variables.product.product_name %} でアカウントに複数の公開キーを追加できます。 対応する秘密キーのいずれかによって署名されたコミットは、検証済みとして表示されます。 公開キーを削除すると、対応する秘密キーによって署名されたコミットは検証済みとして表示されなくなります。

{% ifversion upload-expired-or-revoked-gpg-key %} できるだけ多くのコミットを検証するために、期限切れキーと取り消されたキーを追加できます。 キーが他のすべての検証要件を満たしている場合、対応する秘密キーのいずれかによって以前に署名されたコミットは検証済みとして表示され、署名キーが期限切れか、取り消されたことを示します。

![キーの有効期限が切れている検証済みコミット](/assets/images/help/settings/gpg-verified-with-expired-key.png) {% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

署名を検証する際、{% data variables.product.product_name %} によって、署名が抽出され、そのキー ID の解析が試みられます。 次に、キー ID が、{% data variables.product.product_name %} に追加されたキーと照合されます。 一致する GPG キーが {% data variables.product.product_name %} に追加されるまで、署名を検証することはできません。

## GPG キーの追加

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. **[新しい GPG キー]** をクリックします。
   ![GPG キー ボタン](/assets/images/help/settings/gpg-add-gpg-key.png)
4. "キー" フィールドに、[GPG キーを生成](/articles/generating-a-new-gpg-key)したときにコピーした GPG キーを貼り付けます。
   ![キー フィールド](/assets/images/help/settings/gpg-key-paste.png)
5. **[GPG キーの追加]** をクリックします。
   ![[キーの追加] ボタン](/assets/images/help/settings/gpg-add-key.png)
6. 処理を確認するには、{% data variables.product.product_name %}のパスワードを入力します。

{% ifversion upload-expired-or-revoked-gpg-key %} {% else %}
## 期限切れ GPG キーを更新する

署名を検証するとき、{% data variables.product.product_name %} は、キーが取り消しまたは期限切れになっていないか確認します。 もしサインインのキーが取り消しまたは期限切れになっている場合、{% data variables.product.product_name %} は、お客様の署名を検証できません。

キーの有効期限が切れている場合は、[有効期限を更新](https://www.gnupg.org/gph/en/manual.html#AEN329)し、新しいキーをエクスポートし、{% data variables.product.product_name %} でアカウントの期限切れキーを削除し、上記の方法で新しいキーをアカウントに追加する必要があります。 キーが他のすべての検証の要件を満たしている限り、過去のコミットとタグは、検証済みとして表示されます。

キーが取り消されている場合、プライマリーまたは取り消されていない他のキーを使って、コミットに署名します。

キーが無効でキーセットに他に有効なキーを所有していないが、新しいクレデンシャルのセットで新しい GPG キーを作成した場合、取り消されたまたは期限切れのキーで作成されたコミットは、未検証として表示され続けます。 また、新しい資格情報で古いコミットとタグを再署名または検証することはできなくなります。
{% endif %}

## 参考資料

- 「[既存の GPG キーの確認](/articles/checking-for-existing-gpg-keys)」
- 「[新しい GPG キーを生成する](/articles/generating-a-new-gpg-key)」
- 「[Git へ署名キーを伝える](/articles/telling-git-about-your-signing-key)」
- 「[GPG キーとメールの関連付け](/articles/associating-an-email-with-your-gpg-key)」
- [GPG キーを使ったコミットとタグへの署名](/articles/signing-commits-and-tags-using-gpg)に関する記事
- 「[コミット署名の検証について](/articles/about-commit-signature-verification)」
