{% if enterpriseServerVersions contains currentVersion and currentVersion == "enterprise-server@2.22" %}
{% note %}

**注：**{% data variables.product.prodname_ghe_server %} 2.22 上的 {% data variables.product.prodname_actions %} 支持是有限的公测版。 测试已结束。 {% data variables.product.prodname_actions %} 现在一般可用于 {% data variables.product.prodname_ghe_server %} 3.0 或更新版本。 更多信息请参阅 [{% data variables.product.prodname_ghe_server %} 3.0 发行说明](/enterprise-server@3.0/admin/release-notes)。

<br/>

- 有关升级到 {% data variables.product.prodname_ghe_server %} 3.0 或更新版本的更多信息，请参阅“[升级 {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/upgrading-github-enterprise-server)”。
- 有关在升级后配置 {% data variables.product.prodname_actions %} 的更多信息，请参阅 [{% data variables.product.prodname_ghe_server %} 3.0 的文档](/enterprise-server@3.0/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server)。

{% endnote %}
{% endif %}
