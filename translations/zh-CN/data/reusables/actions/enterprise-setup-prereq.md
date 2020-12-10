{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}

#### 在 {% data variables.product.prodname_ghe_server %} 上使用自托管的运行器

在包含自托管运行器的 {% data variables.product.prodname_ghe_server %} 上使用设置操作（例如 `actions/setup-LANGUAGE`）时，您可能需要在没有连接互联网的运行器上设置工具缓存。 更多信息请参阅“[在没有互联网连接的自托管运行器上设置工具缓存](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)”。

{% endif %}
