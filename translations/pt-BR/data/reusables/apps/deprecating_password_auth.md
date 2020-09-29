{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Aviso de Depreciação:** {% data variables.product.prodname_dotcom %} irá descontinuar a autenticação de senha com a API.  Você deve agora autenticar na API {% data variables.product.prodname_dotcom %} com um token de API, como um token de acesso OAuth, token de acesso de instalação do GitHub APP ou token de acesso pessoal, dependendo do que você precisar fazer com o token.{% if currentVersion == "free-pro-team@latest" %} A autenticação da senha para a API, será removida em 13 de Novembro, 2020.{% endif %} Para mais informações,{% if currentVersion == "free-pro-team@latest" %} incluindo brownouts agendados,{% endif %} veja a postagem [blog post](https://developer.github.com/changes/2020-02-14-deprecating-password-auth/).

{% if currentVersion != "free-pro-team@latest" %} A API de Autorizações OAuth está disponível e ainda não está obsoleta no {% data variables.product.prodname_ghe_server %}. {% data variables.product.prodname_dotcom %} anunciará a depreciação e fornecerá um aviso antecipadamente antes de remover o suporte para este recurso.{% endif %}

{% endwarning %}
{% endif %}
