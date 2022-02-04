{% ifversion ghes > 3.2 or ghae-issue-4815 %}
{% note %}

**Observação:** Com {% data variables.product.prodname_github_connect %} habilitado, {% data variables.product.prodname_actions %} tentará localizar o repositório na sua instância de {% data variables.product.prodname_ghe_server %} primeiro antes de voltar para {% data variables.product.prodname_dotcom_the_website%}. If a user has already created an organization and repository in your enterprise that matches an organization and repository name on {% data variables.product.prodname_dotcom %}, the repository on your enterprise will be used in place of the {% data variables.product.prodname_dotcom %} repository. For more information, see "[Automatic retirement of namespaces for actions accessed on {% data variables.product.prodname_dotcom_the_website%}](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)."

{% endnote %}
{% endif %}

{% ifversion ghes < 3.3 %}
{% note %}

**Observação:** Com {% data variables.product.prodname_github_connect %} habilitado, {% data variables.product.prodname_actions %} tentará localizar o repositório na sua instância de {% data variables.product.prodname_ghe_server %} primeiro antes de voltar para {% data variables.product.prodname_dotcom_the_website%}. Se um usuário criar uma organização e um repositório em sua empresa, que corresponde a uma organização e nome do repositório em {% data variables.product.prodname_dotcom %}, o repositório da sua empresa será usado no lugar do repositório de {% data variables.product.prodname_dotcom %}. Um usuário malicioso pode aproveitar este comportamento para executar o código como parte de um fluxo de trabalho.

{% endnote %}
{% endif %}
