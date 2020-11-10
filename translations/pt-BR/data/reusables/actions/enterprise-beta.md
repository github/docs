{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.22" %}
{% note %}

**Observação:** O suporte de {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} 2.22 é beta pública limitada. Para revisar os requisitos de armazenamento externo e solicitar acesso ao beta, consulte "[Habilitar {% data variables.product.prodname_actions %} e configurar o armazenamento](/enterprise/admin/github-actions/enabling-github-actions-and-configuring-storage)".

{% endnote %}
{% endif %}
