{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Aviso de Obsoletización:** {% data variables.product.prodname_dotcom %} descontinuará la API de Autorizaciones de OAuth, la cual utilizan las integraciones para crear tokens de acceso personal y de OAuth, y ahora debes crear estos tokens utilizando nuestro [flujo de aplicaciones web](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow).{% if currentVersion == "free-pro-team@latest" %} La API de Autorizaciones de OAuth se eliminará el 13 de Noviembre de 2020.{% endif %} Para obtener más información,{% if currentVersion == "free-pro-team@latest" %} incluyendo los periodos de inactividad programados,{% endif %} consulta la [publicación del blog](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

{% if currentVersion != "free-pro-team@latest" %} La API de autorizaciones de OAuth sigue disponible actualmente y no se ha obsoletizado en {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} anunciará la obsoletización y proporcionará notificaciones oportunas antes de que elimine la compatibilidad para esta característica.{% endif %}

{% endwarning %}
{% endif %}
