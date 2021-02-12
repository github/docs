{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.22" %}
{% note %}

**Observação:** O suporte de {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} 2.22 é beta pública limitada. To review the external storage requirements and request access to the beta, see "[Getting started with {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)."

{% endnote %}
{% endif %}
