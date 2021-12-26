{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@3.0" %}

{% note %}

**ノート:** {% data variables.product.prodname_secret_scanning %} APIは現在ベータで、変更されることがあります。

{% endnote %}

{% endif %}