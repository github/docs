{% if currentVersion == "free-pro-team@latest" %}
Cuando tecleas una contraseña para ingresar, creas una cuenta, o cambias tu contraseña, {% data variables.product.product_name %} verificará si la contraseña que ingresaste se considera como débil de acuerdo con los sets de datos como HavelBeenPwned. La contraseña se puede considerar débil, incluso si no la usaste nunca antes.

{% data variables.product.product_name %} solo inspecciona la contraseña cuando la escribes, pero nunca almacena la contraseña que ingresaste como texto simple. Para obtener más información, consulta [HaveIBeenPwned](https://haveibeenpwned.com/).
{% endif %}
