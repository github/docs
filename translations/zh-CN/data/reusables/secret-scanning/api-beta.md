{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@3.0" %}

{% note %}

**注意：**{% data variables.product.prodname_secret_scanning %} API 目前处于测试阶段，可能会更改。

{% endnote %}

{% endif %}