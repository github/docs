{% ifversion ghes %}
{% note %}

**Observação:** Com {% data variables.product.prodname_github_connect %} habilitado, {% data variables.product.prodname_actions %} tentará localizar o repositório na sua instância de {% data variables.product.prodname_ghe_server %} primeiro antes de voltar para {% data variables.product.prodname_dotcom %}. Se um usuário criar uma organização e um repositório em sua empresa, que corresponde a uma organização e nome do repositório em {% data variables.product.prodname_dotcom %}, o repositório da sua empresa será usado no lugar do repositório de {% data variables.product.prodname_dotcom %}. Um usuário malicioso pode aproveitar este comportamento para executar o código como parte de um fluxo de trabalho.

{% endnote %}
{% endif %}
