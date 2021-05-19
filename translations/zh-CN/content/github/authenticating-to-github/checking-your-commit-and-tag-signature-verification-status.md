---
title: 检查提交和标记签名验证状态
intro: '您可以在 {% data variables.product.product_name %} 上检查提交和标记签名的验证状态。'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

### 检查提交签名验证状态

1. 在

{% data variables.product.product_name %} 上，导航到您的拉取请求。
{% data reusables.repositories.review-pr-commits %}
3. Next to your commit's abbreviated commit hash, there is a box that shows whether your commit signature is verified{% if currentVersion == "free-pro-team@latest" %}, partially verified,{% endif %} or unverified. ![已签名提交](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. To view more detailed information about the commit signature, click **Verified**{% if currentVersion == "free-pro-team@latest" %}, **Partially verified**,{% endif %} or **Unverified**. ![经验证签名提交](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

### 检查标记签名验证状态

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. 在 Releases（版本）页面的顶部，单击 **Tags（标记）**。 ![标记页面](/assets/images/help/releases/tags-list.png)
3. Next to your tag description, there is a box that shows whether your tag signature is verified{% if currentVersion == "free-pro-team@latest" %}, partially verified,{% endif %} or unverified. ![已验证标记签名](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. To view more detailed information about the tag signature, click **Verified**{% if currentVersion == "free-pro-team@latest" %}, **Partially verified**,{% endif %} or **Unverified**. ![经验证签名标记](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### 延伸阅读

- “[关于提交签名验证](/articles/about-commit-signature-verification)”
- "[对提交签名](/articles/signing-commits)"
- "[对标记签名](/articles/signing-tags)"
