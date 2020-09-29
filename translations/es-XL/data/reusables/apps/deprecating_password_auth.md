{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Aviso de Obsoletización:** {% data variables.product.prodname_dotcom %} descontinuará la autenticación mediante contraseña para la API.  Ahora debes autenticarte a la API de {% data variables.product.prodname_dotcom %} con un token de la API tal como un token de acceso de OAuth, una GitHub App, un token de acceso a la instalación, o un token de acceso personal, dependiendo de lo que necesites hacer con dicho token.{% if currentVersion == "free-pro-team@latest" %} La autenticación por contraseña en la API se eliminará el 13 de Noviembre de 2020. {% endif %} Para obtener más información,{% if currentVersion == "free-pro-team@latest" %}incluyendo los periodos de inactividad programados,{% endif %} consulta la [publicación del blog](https://developer.github.com/changes/2020-02-14-deprecating-password-auth/).

{% if currentVersion != "free-pro-team@latest" %} La autenticación por contraseña para la API sigue disponible actualmente y no se ha obsoletizado en {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} anunciará la obsoletización y proporcionará notificaciones oportunas antes de que elimine la compatibilidad para esta característica.{% endif %}

{% endwarning %}
{% endif %}
