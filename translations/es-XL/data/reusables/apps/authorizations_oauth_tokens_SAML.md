{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
{% warning %}

**Advertencia:** Las apps deben utilizar el [flujo de aplicaciones web](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) para obtener tokens de OAuth que funcionen con las organizaciones SAML de GitHub. Los tokens de OAuth que se crean utilizando la API de autorizaciones no podrán acceder a las organizaciones SAML de GitHub. Para obtener más información, consulta la [publicación del blog](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

{% endwarning %}
{% endif %}
