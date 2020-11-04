{% warning %}

**Warning**: Changing this setting will cause {% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}{% data variables.product.prodname_ghe_server %}{% else %}{% data variables.product.prodname_dotcom %}{% endif %} to restart. 您应谨慎安排更改时间，以尽量减少停机时间。

{% endwarning %}
