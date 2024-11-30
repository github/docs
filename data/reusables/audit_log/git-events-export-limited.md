{% ifversion ghec %}
{% note %}

**Note:** When you export Git events, events that were initiated via the web browser or the REST or GraphQL APIs are not included. For example, when a user merges a pull request in the web browser, changes are pushed to the base branch, but the Git event for that push is not included in the export. 

{% endnote %} 
{% endif %}
