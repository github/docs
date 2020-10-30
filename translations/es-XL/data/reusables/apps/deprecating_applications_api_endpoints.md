{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Aviso de Obsoletización:** {% data variables.product.prodname_dotcom %} reemplazará y descontinuará las terminales de OAuth que contengan `access_token` en el parámetro de la ruta. Estamos introduciendo terminales nuevas que te permitirán administrar de forma segura los tokens para las Apps de OAuth utilizando un `access_token` como parámetro de entrada.{% if currentVersion == "free-pro-team@latest" %} La API de Aplicación de OAuth se eliminará el 5 de mayo de 2021.{% endif %} Para obtener más información,{% if currentVersion == "free-pro-team@latest" %} incluyendo los periodos de indisposición programados,{% endif %} consulta la [publicación del blog](https://developer.github.com/changes/2020-02-14-deprecating-oauth-app-endpoint/).

{% if currentVersion != "free-pro-team@latest" %} Las terminales de OAuth que utilizan un `access_token` en el parámetro de ruta se encuentran disponibles actualmente y no se han obsoletizado en el {% data variables.product.prodname_ghe_server %} aún. {% data variables.product.prodname_dotcom %} anunciará la obsoletización y proporcionará notificaciones oportunas antes de que elimine la compatibilidad para esta característica.{% endif %}

{% endwarning %}
{% endif %}
