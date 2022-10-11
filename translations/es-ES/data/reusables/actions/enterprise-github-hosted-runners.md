{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**Nota:** Los ejecutores hospedados en {% data variables.product.prodname_dotcom %} no son compatibles con {% data variables.product.prodname_ghe_server %} actualmente. Puedes encontrar más información sobre el soporte que se tiene planeado en el futuro en el [{% data variables.product.prodname_roadmap %}](https://github.com/github/roadmap/issues/72).

{% endnote %}
{% endif %}
