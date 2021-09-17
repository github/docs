{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**ノート:** {% data variables.product.prodname_dotcom %}ホストランナーは、現在{% data variables.product.prodname_ghe_server %}でサポートされていません。 [{% data variables.product.prodname_roadmap %}](https://github.com/github/roadmap/issues/72)で、計画されている将来のサポートに関する詳しい情報を見ることができます。

{% endnote %}
{% endif %}
