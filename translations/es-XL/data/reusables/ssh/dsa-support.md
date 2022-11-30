{% note %}

**Nota:** Las llaves DSA de {% if currentVersion != "free-pro-team@latest" or currentVersion ver_lt "enterprise-server@2.19" %} se obsoletizaron en OpenSSH 7.0. Si tu sistema operativo utiliza OpenSSH, deberas utilizar una tipo de llave alterno cuando configures SSH, tal como una llave RSA. Por ejemplo, si tu sistema operativo es macOS Sierra, puedes configurar SSH utilizando una llave RSA.{% else %}Ya no hay compatibilidad con las llaves DSA (SSH-DSS). Las llaves existentes seguirán funcionando, pero no puedes agregar una llave DSA nueva a tu cuenta de {% data variables.product.product_name %}.{% endif %}

{% endnote %}
