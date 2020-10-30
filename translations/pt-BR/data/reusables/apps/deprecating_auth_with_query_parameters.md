{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% warning %}

**Aviso de método obsoleto:** {% data variables.product.prodname_dotcom %} irá descontinuar a autenticação para a API usando parâmetros de consulta. A autenticação para a API deve ser feita com a [autenticação básica HTTP](/v3/auth/#via-oauth-and-personal-access-tokens).{% if currentVersion == "free-pro-team@latest" %} Usar parâmetros de consulta para efetuar a autenticação na API não funcionará mais a partir de 5 de maio de 2021. {% endif %}  Para mais informações, incluindo brownouts agendadas, veja [blog post](https://developer.github.com/changes/2020-02-10-deprecating-auth-through-query-param/).

{% if enterpriseServerVersions contains currentVersion %} Autenticação à API usando parâmetros de consulta, enquanto disponível não é mais suportada devido a questões de segurança. Em vez disso, recomendamos que integradores movam seu token de acesso, `client_id`, or `client_secret` no cabeçalho. {% data variables.product.prodname_dotcom %} anunciará a remoção da autenticação por parâmetros de consulta com aviso prévio. {% endif %}

{% endwarning %}
{% endif %}
