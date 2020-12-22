---
title: コミットおよびタグの署名の検証ステータスを確認する
intro: '{% data variables.product.product_name %}のコミットやタグの署名について、検証ステータスを確認できます。'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### コミットの署名検証のステータスの確認

1. On

{% data variables.product.product_name %} 上で、プルリクエストに移動します。
{% data reusables.repositories.review-pr-commits %}
3. コミットの短縮版コミットハッシュの隣に、コミットの署名が検証されているかどうかを示すボックスがあります。 ![署名されたコミット](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. コミットの署名について詳しい情報を表示するには、[**Verified**] または [**Unverified**] をクリックします。 ![検証された署名済みコミット](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

コミットの署名が検証されていない場合、[**Unverified**] のボックスをクリックするとその理由について詳しく知ることができます。 ![検証されていない署名済みコミット](/assets/images/help/commits/gpg-signed-commit-unverified-details.png)

### タグの署名検証のステータスの確認

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. [Releases] ページの上部にある [**Tags**] をクリックします。 ![[Tags] ページ](/assets/images/help/releases/tags-list.png)
3. タグの説明の隣に、タグの署名が検証されているかどうかを示すボックスがあります。 ![検証されたタグ署名](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. タグの署名について詳しい情報を表示するには、[**Verified**] または [**Unverified**] をクリックします。 タグの署名が検証されていない場合、[**Unverified**] のボックスをクリックするとその理由について詳しく知ることができます。 ![検証された署名済みタグ](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### 参考リンク

- [コミット署名の検証について](/articles/about-commit-signature-verification)
- 「[コミットに署名する](/articles/signing-commits)」
- 「[タグに署名する](/articles/signing-tags)」
