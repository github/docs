{% if currentVersion == "free-pro-team@latest" %}
Ao digitar uma senha para efetuar o login, criar uma conta ou mudar sua senha
{% data variables.product.product_name %} irá verificar se a senha inserida é considerada fraca de acordo com os conjuntos de dados como o HaveIBeenPwted. A senha pode ser identificada como fraca, mesmo que você nunca tenha usado essa senha antes.

O {% data variables.product.product_name %} inspeciona a senha apenas no momento em que você a digita e nunca armazena a senha que você digitou em um texto simples. Para obter mais informações, consulte [HaveIBeenPwned](https://haveibeenpwned.com/).
{% endif %}
