{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@3.0" %}

{% note %}

**Observação:** A API de {% data variables.product.prodname_secret_scanning %} está atualmente em fase beta e sujeita a alterações.

{% endnote %}

{% endif %}