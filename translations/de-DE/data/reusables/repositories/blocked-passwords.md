{% if currentVersion == "free-pro-team@latest" %}
When you type a password to sign in, create an account, or change your password,
{% data variables.product.product_name %} will check if the password you entered is considered weak according to datasets like HaveIBeenPwned. Das Passwort wird möglicherweise als unsicher erkannt, selbst wenn Sie dieses Passwort zuvor noch nie verwendet haben.

{% data variables.product.product_name %} überprüft das Passwort nur zum Eingabezeitpunkt und wird das eingegebene Passwort nie im Klartext speichern. Weitere Informationen finden Sie unter [HaveIBeenPwned](https://haveibeenpwned.com/).
{% endif %}
