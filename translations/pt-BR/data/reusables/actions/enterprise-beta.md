{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.22" %}
{% note %}

**Observação:** {% data variables.product.prodname_actions %} estava disponível para {% data variables.product.prodname_ghe_server %} 2.22 como um beta limitado. O beta terminou. {% data variables.product.prodname_actions %} está agora geralmente disponível em {% data variables.product.prodname_ghe_server %} 3.0 ou posterior. Para obter mais informações, consulte as observações sobre a versão [{% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/release-notes).

<br/>

- Para obter mais informações sobre a atualização para {% data variables.product.prodname_ghe_server %} 3.0 ou posterior, consulte "[Atualizar {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)".
- Para obter mais informações sobre a configuração de {% data variables.product.prodname_actions %} após atualizar, consulte a [documentação para {% data variables.product.prodname_ghe_server %} 3.0](/enterprise-server@3.0/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server).

{% endnote %}
{% endif %}
