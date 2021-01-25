{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.22" %}
{% note %}

**Nota:** El soporte para {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_server %} 2.22 es un beta público limitado. To review the external storage requirements and request access to the beta, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)."

{% endnote %}
{% endif %}
