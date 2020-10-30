{% if currentVersion == "free-pro-team@latest" %}
在输入密码进行登录、创建帐户或更改密码时，{% data variables.product.product_name %} 将根据 HaveIBeenPwned 等资料集检查您输入的密码是否被视为弱密码。 即使是以前从未用过的密码，也可能被视为弱密码。

{% data variables.product.product_name %} 仅在您输入密码时检查密码，绝不会以纯文本存储您输入的密码。 更多信息请参阅 [HaveIBeenPwned](https://haveibeenpwned.com/)。
{% endif %}
