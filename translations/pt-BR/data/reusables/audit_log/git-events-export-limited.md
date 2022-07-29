{% ifversion ghec %}
{% note %}

**Note:** When you export Git events, events that were initiated via the web browser or the REST or GraphQL APIs are not included. Por exemplo, quando um usuário faz merge de um pull request no navegador da web, as alterações são enviadas por push para o branch base, mas o evento do Git para esse push não está incluído na exportação.

{% endnote %}
{% endif %}
