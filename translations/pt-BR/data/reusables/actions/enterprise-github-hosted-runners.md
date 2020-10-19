{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**Observação:** Executores hospedados em {% data variables.product.prodname_dotcom %} não são atualmente compatíveis com {% data variables.product.prodname_ghe_server %}. Você pode ver mais informações sobre suporte futuro planejado no [{% data variables.product.prodname_roadmap %}](https://github.com/github/roadmap/issues/72).

{% endnote %}
{% endif %}
