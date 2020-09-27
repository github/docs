{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**Note:** {{ site.data.variables.product.prodname_dotcom }}-hosted runners are not currently supported on {{ site.data.variables.product.prodname_ghe_server }}. You can see more information about planned future support on the [{{ site.data.variables.product.prodname_roadmap }}](https://github.com/github/roadmap/issues/72).

{% endnote %}
{% endif %}