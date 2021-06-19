{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% warning %}

**Aviso de Depreciação:** {% data variables.product.prodname_dotcom %} irá descontinuar a autenticação de senha com a API.  Agora, você deve efetuar a autenticação na API de {% data variables.product.prodname_dotcom %} com um token da API, como, por exemplo, um token de acesso do OAuth, token de acesso de instalação do aplicativo GitHub ou token de acesso pessoal, dependendo do que você precisa fazer com o token.{% if currentVersion == "free-pro-team@latest" %} A autenticação de senha na API será removida em 13 de Novembro de 2020.{% endif %} Para mais informações{% if currentVersion == "free-pro-team@latest" %} incluindo períodos de inatividade agendados,{% endif %} veja o [post no blogue](https://developer.github.com/changes/2020-02-14-deprecating-password-auth/).

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} Authenticating to the API using a password is currently available and not yet deprecated in {% data variables.product.product_name %}. {% data variables.product.prodname_dotcom %} anunciará a depreciação e fornecerá um aviso antecipadamente antes de remover o suporte para este recurso.{% endif %}

{% endwarning %}
{% endif %}
