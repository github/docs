{% note %}

**Note:** SARIF upload supports a maximum of {% if currentVersion == "github-ae@next" or currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}5000{% else %}1000{% endif %} results per upload. Any results over this limit are ignored. If a tool generates too many results, you should update the configuration to focus on results for the most important rules or queries.

{% endnote %}
