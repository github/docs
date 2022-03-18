{% ifversion ghes > 3.2 or ghae-issue-4815 %}
{% note %}

**Observação:** Quando um fluxo de trabalho usa uma ação fazendo referência ao repositório onde a ação é armazenada, {% data variables.product.prodname_actions %} tentará encontrar o repositório na sua instância de {% data variables.product.prodname_ghe_server %} antes de voltar para {% data variables.product.prodname_dotcom_the_website %}. Se um usuário tiver criado uma organização e um repositório em sua empresa, que corresponde a uma organização e nome do repositório em {% data variables.product.prodname_dotcom %}, o repositório da sua empresa será usado no lugar do repositório de {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Desativação automática de namespaces para ações acessadas em {% data variables.product.prodname_dotcom_the_website%}](#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom)".

{% endnote %}
{% endif %}

{% ifversion ghes < 3.3 or ghae %}
{% note %}

**Observação:** Quando um fluxo de trabalho usa uma ação fazendo referência ao repositório onde a ação é armazenada, {% data variables.product.prodname_actions %} tentará encontrar o repositório na sua instância de {% data variables.product.prodname_ghe_server %} antes de voltar para {% data variables.product.prodname_dotcom_the_website %}. Se um usuário criar uma organização e um repositório em sua empresa, que corresponde a uma organização e nome do repositório em {% data variables.product.prodname_dotcom %}, o repositório da sua empresa será usado no lugar do repositório de {% data variables.product.prodname_dotcom %}. Um usuário malicioso pode aproveitar este comportamento para executar o código como parte de um fluxo de trabalho.

{% endnote %}
{% endif %}
