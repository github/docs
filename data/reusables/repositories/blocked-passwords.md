{% ifversion fpt or ghec %}
When you type a password to sign in, create an account, or change your password, {% data variables.product.github %} will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. The password may be identified as weak even if you have never used that password before.

{% data variables.product.github %} only inspects the password at the time you type it, and never stores the password you entered in plaintext. For more information, see [HaveIBeenPwned](https://haveibeenpwned.com/).
{% endif %}
