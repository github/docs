{% if currentVersion == "free-pro-team@latest" %}
When you type a password to sign in, create an account, or change your password,
{% data variables.product.product_name %} will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. 即使是以前从未用过的密码，也可能被视为弱密码。

{% data variables.product.product_name %} 仅在您输入密码时检查密码，绝不会以纯文本存储您输入的密码。 更多信息请参阅 [HaveIBeenPwned](https://haveibeenpwned.com/)。
{% endif %}
