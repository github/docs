{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}

#### Using self-hosted runners on {% data variables.product.prodname_ghe_server %}

When using setup actions (such as `actions/setup-LANGUAGE`) on {% data variables.product.prodname_ghe_server %} with self-hosted runners, you might need to set up the tools cache on runners that do not have internet access. Para obter mais informações, consulte "[Configurar o cache da ferramenta em executores auto-hospedados sem acesso à internet](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)".

{% endif %}
