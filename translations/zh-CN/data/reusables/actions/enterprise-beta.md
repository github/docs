{% if currentVersion != "free-pro-team@latest" and currentVersion == "enterprise-server@2.22" %}
{% note %}

**Note:** {{ site.data.variables.product.prodname_actions }} support on {{ site.data.variables.product.prodname_ghe_server }} 2.22 is a limited public beta. To review the external storage requirements and request access to the beta, see "[Enabling {{ site.data.variables.product.prodname_actions }} and configuring storage](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)."

{% endnote %}
{% endif %}