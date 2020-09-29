---
title: 在 GPG 密钥中使用经验证的电子邮件地址
intro: '验证签名时，{% data variables.product.product_name %} 会检查提交者或标记者电子邮件地址是否匹配 GPG 密钥身份的电子邮件地址，并且是用户帐户中经验证的电子邮件地址。 这可确保密钥属于您且您已创建提交或标记。'
redirect_from:
  - /articles/using-a-verified-email-address-in-your-gpg-key
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
如果您需要验证 GitHub 电子邮件地址，请参阅“[验证电子邮件地址](/articles/verifying-your-email-address/)”。
{% endif %}如果您需要更新电子邮件地址或将其添加到 GPG 密钥，请参阅“[将电子邮件与 GPG 密钥关联](/articles/associating-an-email-with-your-gpg-key)”。

提交和标记可能包含多个 电子邮件地址。 对于提交，有作者（编写代码的人员）和提交者（将提交添加到树的人员）。 使用 Git 对提交签名时，无论是合并、优选还是正常的 `git commit`，提交者电子邮件地址都将是您的地址，即使并非作者电子邮件地址。 标记更为简单：标记者电子邮件地址始终为创建标记的用户。

如果您需要更改提交者或标记者的电子邮件地址，请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address/)”。

### 延伸阅读

- “[关于提交签名验证](/articles/about-commit-signature-verification)”
