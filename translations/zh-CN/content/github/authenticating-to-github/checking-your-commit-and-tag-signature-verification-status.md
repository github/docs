---
title: 检查提交和标记签名验证状态
intro: '您可以在 {% data variables.product.product_name %} 上检查提交和标记签名的验证状态。'
redirect_from:
  - /articles/checking-your-gpg-commit-and-tag-signature-verification-status/
  - /articles/checking-your-commit-and-tag-signature-verification-status
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 检查提交签名验证状态

1. 在 {% data variables.product.product_name %} 上，导航到您的拉取请求。
{% data reusables.repositories.review-pr-commits %}
3. 在提交的缩写提交哈希旁边有一个框，显示您的提交签名是否经过验证。 ![已签名提交](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)
4. 要查看有关提交签名的更详细信息，请单击 **Verified（已验证）**或 **Unverified（未验证）**。 ![经验证签名提交](/assets/images/help/commits/gpg-signed-commit_verified_details.png)

如果您的提交签名未经验证，可单击 **Unverified（未验证）**框以了解详细原因。 ![未经验证签名提交](/assets/images/help/commits/gpg-signed-commit-unverified-details.png)

### 检查标记签名验证状态

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. 在 Releases（版本）页面的顶部，单击 **Tags（标记）**。 ![标记页面](/assets/images/help/releases/tags-list.png)
3. 在标记说明的旁边有一个框，显示您的标记签名是否经过验证。 ![已验证标记签名](/assets/images/help/commits/gpg-signed-tag-verified.png)
4. 要查看有关标记签名的更详细信息，请单击 **Verified（已验证）**或 **Unverified（未验证）**。 如果您的标记签名未经验证，可单击 **Unverified（未验证）**框以了解详细原因。 ![经验证签名标记](/assets/images/help/commits/gpg-signed-tag-verified-details.png)

### 延伸阅读

- “[关于提交签名验证](/articles/about-commit-signature-verification)”
- "[对提交签名](/articles/signing-commits)"
- "[对标记签名](/articles/signing-tags)"
