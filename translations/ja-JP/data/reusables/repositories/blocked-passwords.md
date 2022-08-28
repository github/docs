{% if currentVersion == "free-pro-team@latest" %}
サインイン、アカウントの作成、パスワードの変更時にパスワードを入力すると、
{% data variables.product.product_name %}は入力されたパスワードが弱いかどうかを、HaveIBeenPwnedのようなデータセットに基づいてチェックします。 以前にまったく使ったことがないパスワードでも、弱いと判定されることがあります。

{% data variables.product.product_name %}がパスワードを検査するのは入力の際だけであり、入力されたパスワードが平文で保存されることはありません。 詳しい情報については[ HaveIBeenPwned](https://haveibeenpwned.com/)を参照してください。
{% endif %}
