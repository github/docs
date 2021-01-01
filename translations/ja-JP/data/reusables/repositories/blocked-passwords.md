{% if currentVersion == "free-pro-team@latest" %}
When you type a password to sign in, create an account, or change your password,
{% data variables.product.product_name %} will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. 以前にまったく使ったことがないパスワードでも、弱いと判定されることがあります。

{% data variables.product.product_name %}がパスワードを検査するのは入力の際だけであり、入力されたパスワードが平文で保存されることはありません。 詳しい情報については[ HaveIBeenPwned](https://haveibeenpwned.com/)を参照してください。
{% endif %}
