{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}

{% note %}

**注：**站点管理员必须为 {% data variables.product.product_location %} 启用 {% data variables.product.prodname_secret_scanning %}，然后您才可使用此功能。 更多信息请参阅“[为设备配置 {% data variables.product.prodname_secret_scanning %}](/enterprise/admin/configuration/configuring-secret-scanning-for-your-appliance)”。

{% endnote %}

{% endif %}
