{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Aviso de Depreciação:** {% data variables.product.prodname_dotcom %} irá cancelar a API de Autorizações OAuth, que é usado por integrações para criar tokens de acesso pessoais e tokens OAuth, e agora você deve criar esses tokens usando nosso fluxo [web application flow](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow).{% if currentVersion == "free-pro-team@latest" %} A API de Autorizações OAuth será removida em 13 de Novembro 2020.{% endif %} Para mais informações,{% if currentVersion == "free-pro-team@latest" %} incluindo brownouts agendados{% endif %} veja a postagem [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

{% if currentVersion != "free-pro-team@latest" %} A API de Autorizações OAuth está disponível e ainda não está obsoleta no {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} anunciará a depreciação e fornecerá um aviso antecipadamente antes de remover o suporte para este recurso.{% endif %}

{% endwarning %}
{% endif %}
