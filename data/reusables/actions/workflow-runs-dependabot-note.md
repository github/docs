{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Note:**  Pull requests for {% data variables.product.prodname_dependabot %} version updates will trigger workflow runs with a read-only `GITHUB_TOKEN`. These workflow runs will not be granted access to any secrets. 

{% endnote %}
{% endif %}
