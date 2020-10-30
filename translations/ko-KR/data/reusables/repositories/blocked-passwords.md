{% if currentVersion == "free-pro-team@latest" %}
When you type a password to sign in, create an account, or change your password, {% data variables.product.product_name %} will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. The password may be identified as weak even if you have never used that password before.

{% data variables.product.product_name %} only inspects the password at the time you type it, and never stores the password you entered in plaintext. For more information, see [HaveIBeenPwned](https://haveibeenpwned.com/).
{% endif %}
