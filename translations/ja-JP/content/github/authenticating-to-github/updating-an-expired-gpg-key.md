---
title: 期限切れ GPG キーを更新する
intro: '署名を検証するとき、{% data variables.product.product_name %} は、キーが取り消しまたは期限切れになっていないか確認します。 もしサインインのキーが取り消しまたは期限切れになっている場合、{% data variables.product.product_name %} は、お客様の署名を検証できません。 キーが取り消されている場合、プライマリーまたは取り消されていない他のキーを使って、コミットに署名します。'
redirect_from:
  - /articles/updating-an-expired-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

キーが期限切れの場合、[期限を更新し](https://www.gnupg.org/gph/en/manual/c235.html#AEN328)、新しいキーをエクスポートし、GitHub アカウントから期限切れのキーを削除し、[Github に新しいキーをアップロードする](/articles/adding-a-new-gpg-key-to-your-github-account/)必要があります。 キーが他のすべての検証の要件を満たしている限り、過去のコミットとタグは、検証済みとして表示されます。

キーが無効でキーセットに他に有効なキーを所有していないが、新しいクレデンシャルのセットで新しい GPG キーを作成した場合、取り消されたまたは期限切れのキーで作成されたコミットは、未検証として表示され続けます。 また、古いコミットやタグを新しいクレデンシャルで再署名したり検証したりすることはできません。

### 参考リンク

- [コミット署名の検証について](/articles/about-commit-signature-verification)
