{% data variables.product.prodname_ghe_server %} 用户名只能包含字母数字和短划线 (`-`)。 {% data variables.product.prodname_ghe_server %} 会将帐户用户名中的所有非字母数字字符标准化为短划线。 例如，用户名 `gregory.st.john` 将标准化为 `gregory-st-john`。 请注意，标准化的用户名也不能以短划线开头或结尾。 它们还不能包含两个连续的短划线。

创建自电子邮件地址的用户名使用前置 `@` 字符的标准化字符创建。

如果多个帐户标准化为同一个 {% data variables.product.prodname_ghe_server %} 用户名，则只创建第一个用户帐户。 使用相同用户名的后续用户无法登录。
