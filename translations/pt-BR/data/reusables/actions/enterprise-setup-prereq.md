{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}

#### Usar executores auto-hospedados no {% data variables.product.prodname_ghe_server %}

Ao usar ações de configuração (como `actions/setup-LANGUAGE`) em {% data variables.product.prodname_ghe_server %} com executores auto-hospedados, você pode precisar configurar o armazenamento de ferramentas em executores que não possuem acesso à internet. Para obter mais informações, consulte "[Configurar o cache da ferramenta em executores auto-hospedados sem acesso à internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".

{% endif %}
