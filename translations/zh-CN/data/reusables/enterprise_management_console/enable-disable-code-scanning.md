{% warning %}

**Warning**: Changing this setting will cause {% if currentVersion ver_gt "enterprise-server@2.21" %}{{ site.data.variables.product.prodname_ghe_server }}{% else %}{{ site.data.variables.product.prodname_dotcom }}{% endif %} to restart. You should time this change carefully, to minimize downtime.

{% endwarning %}
