{% if  currentVersion == "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
{% note %}

**ノート:** Organizationが所有するリポジトリのための{% data variables.product.prodname_secret_scanning_caps %}は現在ベータで、変更されることがあります。

{% endnote %}

{% endif %}
{% if currentVersion ver_gt "enterprise-server@3.0" %}

{% note %}

**ノート:** {% data variables.product.prodname_secret_scanning_caps %}は{% data variables.product.prodname_ghe_server %} 3.0ではベータでした。 {% data variables.product.prodname_secret_scanning %}の一般に利用なリリースについては、{% data variables.product.prodname_ghe_server %}の最新リリースにアップグレードしてください。


{% endnote %}

{% endif %}
