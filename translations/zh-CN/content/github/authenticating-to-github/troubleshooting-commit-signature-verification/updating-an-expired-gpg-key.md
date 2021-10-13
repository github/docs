---
title: 更新过期的 GPG 密钥
intro: '验证签名时，{% data variables.product.product_name %} 会检查密钥是否已撤销或过期。 如果您的签名密钥已撤销或过期，则 {% data variables.product.product_name %} 无法验证您的签名。 如果您的密钥已撤销，请使用主密钥或未撤销的其他密钥为提交签名。'
redirect_from:
  - /articles/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

如果您的密钥已过期，则必须[更新有效期](https://www.gnupg.org/gph/en/manual/c235.html#AEN328)、导出新密钥、删除 GitHub 帐户中已过期的密钥并[将新密钥上传到 GitHub](/articles/adding-a-new-gpg-key-to-your-github-account/)。 只要密钥满足所有其他验证要求，您以前的提交和标记就会显示为已验证。

如果您的密钥无效且您没有在密钥集中使用其他有效的密钥，而是使用一组新凭据生成新的 GPG 密钥，则使用已撤销或过期的密钥进行的提交将仍显示为未验证。 此外，您的新凭据无法重新签名或验证旧提交和标记。

### 延伸阅读

- “[关于提交签名验证](/articles/about-commit-signature-verification)”
