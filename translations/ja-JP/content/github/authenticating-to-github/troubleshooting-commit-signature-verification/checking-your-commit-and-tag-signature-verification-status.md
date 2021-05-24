---
title: コミットおよびタグの署名の検証ステータスを確認する
intro: '{% data variables.product.product_name %}のコミットやタグの署名について、検証ステータスを確認できます。'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
  - /github/authenticating-to-github/checking-your-commit-and-tag-signature-verification-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
### コミットの署名検証のステータスの確認

1. On

{% data variables.product.product_name %} 上で、プルリクエストに移動します。
{% data reusables.repositories.review-pr-commits %}
3. コミットの省略されたコミットハッシュの横に、コミット署名が検証済みか{% if currentVersion == "free-pro-team@latest" %}、部分的に検証済みか、{% endif %}未検証かを示すボックスがあります。 ![署名されたコミット](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. コミットシグニチャの詳細情報を表示するには、[**検証済み**]{% if currentVersion == "free-pro-team@latest" %}、[**部分的に検証済み**]、{% endif %}または [**未検証**] をクリックします。 ![検証された署名済みコミット](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

### タグの署名検証のステータスの確認

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. [Releases] ページの上部にある [**Tags**] をクリックします。 ![[Tags] ページ](/assets/images/help/releases/tags-list.png)
3. タグの説明の横に、タグの署名が検証済みか{% if currentVersion == "free-pro-team@latest" %}、部分的に検証済みか{% endif %}、未検証かを示すボックスがあります。 ![検証されたタグ署名](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. タグシグニチャの詳細情報を表示するには、[**検証済み**]{% if currentVersion == "free-pro-team@latest" %}、[**部分的に検証済み**]、{% endif %}または [**未検証**] をクリックします。 ![検証された署名済みタグ](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### 参考リンク

- [コミット署名の検証について](/articles/about-commit-signature-verification)
- 「[コミットに署名する](/articles/signing-commits)」
- 「[タグに署名する](/articles/signing-tags)」
