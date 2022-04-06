{% data variables.product.prodname_ghe_server %} usernames can only contain alphanumeric characters and dashes (`-`). {% data variables.product.prodname_ghe_server %} will normalize any non-alphanumeric character in your account's username into a dash. For example, a username of `gregory.st.john` will be normalized to `gregory-st-john`. Note that normalized usernames also can't start or end with a dash. They also can't contain two consecutive dashes.

Usernames created from email addresses are created from the normalized characters that precede the `@` character.

If multiple accounts are normalized into the same {% data variables.product.prodname_ghe_server %} username, only the first user account is created. Subsequent users with the same username won't be able to sign in.
