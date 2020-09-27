{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
{% warning %}

**Warning:** Aplicativos devem usar [web application flow](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) para obter tokens OAuth que funcionam com as organizações do GitHub SAML. Os tokens OAuth criados usando a API de Autorizações não poderão acessar as organizações de GitHub SAML. Para obter mais informações, consulte [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

{% endwarning %}
{% endif %}
