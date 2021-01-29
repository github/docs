{% if currentVersion == "free-pro-team@latest" %}
Cuando tecleas una contraseña para iniciar sesión, crear una cuenta, o cambiar tu contraseña,
{% data variables.product.product_name %} verificará si la contraseña que ingresaste se considera débil de acuerdo con los conjuntos de datos como en HaveIBeenPwned. La contraseña se puede considerar débil, incluso si no la usaste nunca antes.

{% data variables.product.product_name %} solo inspecciona la contraseña cuando la escribes, pero nunca almacena la contraseña que ingresaste como texto simple. Para obtener más información, consulta [HaveIBeenPwned](https://haveibeenpwned.com/).
{% endif %}
