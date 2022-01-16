{% ifversion fpt or ghes or ghae %}
{% warning %}

**Aviso de Obsoletización:** {% data variables.product.prodname_dotcom %} descontinuará la autenticación a la API utilizando parámetros de consulta. Se debe autenticar en la API con [autenticación básica de HTTP](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens).{% ifversion fpt %} El utilizar parámetros de consulta para autenticarse en la API ya no funcionará desde el 5 de mayo de 2021. {% endif %} Para obtener más información, incluyendo los periodos de interrupción programada, consulta la [publicación del blog](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% ifversion ghes or ghae %} La autenticación a la API a través de parámetros de búsqueda, si bien está disponible, ya no es compatible por motivos de seguridad. En vez de ésto, recomendamos a los integradores que migren su token de acceso, `client_id`, o `client_secret` al encabezado. {% data variables.product.prodname_dotcom %} notificará sobre la eliminación de la autenticación por parámetros de consulta con tiempo suficiente. {% endif %}

{% endwarning %}
{% endif %}
