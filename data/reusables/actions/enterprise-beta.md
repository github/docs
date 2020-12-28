{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.22" %}
{% note %}

**Note:** {% data variables.product.prodname_actions %} support on {% data variables.product.prodname_ghe_server %} 2.22 is a limited public beta. To review the external storage requirements and request access to the beta, see "[Enabling {% data variables.product.prodname_actions %} and configuring storage](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)."

{% endnote %}
{% endif %}
