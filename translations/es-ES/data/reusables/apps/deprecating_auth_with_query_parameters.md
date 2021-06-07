{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% warning %}

**Aviso de Obsoletización:** {% data variables.product.prodname_dotcom %} descontinuará la autenticación a la API utilizando parámetros de consulta. La autenticación en la API debe hacerse con la [autenticación básica de HTTP](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens).{% if currentVersion == "free-pro-team@latest" %} El utilizar parámetros de consulta para autenticarse en la API ya no funcionará desde el 5 de mayo de 2021. {% endif %} Para obtener más información, incluyendo los periodos de interrupción programada, consulta la [publicación del blog](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} La autenticación a la API utilizando parámetros de consulta, aunque está disponible, ya no es compatible por motivos de seguridad. En vez de ésto, recomendamos a los integradores que migren su token de acceso, `client_id`, o `client_secret` al encabezado. {% data variables.product.prodname_dotcom %} notificará sobre la eliminación de la autenticación por parámetros de consulta con tiempo suficiente. {% endif %}

{% endwarning %}
{% endif %}
