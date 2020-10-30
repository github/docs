{% note %}

**Note**: GitHub's REST API considers every pull request an issue, but not every issue is a pull request. Por esse motivo, os pontos de extremidade dos "Problemas" podem retornar problemas e pull requests na resposta. Você pode identificar pull requests pela chave `pull_request`.

Esteja ciente de que o `id` de um pull request retornado dos pontos de extremidade de "Problemas" será um _id de problema_. Para descobrir o id do pull request, use o ponto de extremidade "[List pull requests](/v3/pulls/#list-pull-requests)".

{% endnote %}
