{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
{% note %}

**注：**启用 {% data variables.product.prodname_github_connect %} 后，{% data variables.product.prodname_actions %} 将尝试在您的 {% data variables.product.prodname_ghe_server %} 实例上查找仓库，然后返回到 {% data variables.product.prodname_dotcom %}。 如果用户在企业中创建的组织和仓库与 {% data variables.product.prodname_dotcom %} 上的组织和仓库名称匹配，则将使用企业上的仓库代替 {% data variables.product.prodname_dotcom %} 仓库。 恶意用户可能利用此行为在工作流程中运行代码。

{% endnote %}
{% endif %}
