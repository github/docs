{% ifversion ghes = 3.0 or ghae %}
{% note %}

**ノート:** Organizationが所有するリポジトリのための{% data variables.product.prodname_secret_scanning_caps %}は現在ベータで、変更されることがあります。

If you're using an earlier version of {% data variables.product.prodname_ghe_server %}, you'll have to upgrade to use {% data variables.product.prodname_secret_scanning %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
{% ifversion ghes > 3.0 %}

{% note %}

**ノート:** {% data variables.product.prodname_secret_scanning_caps %}は{% data variables.product.prodname_ghe_server %} 3.0ではベータでした。 {% data variables.product.prodname_secret_scanning %}の一般に利用なリリースについては、{% data variables.product.prodname_ghe_server %}の最新リリースにアップグレードしてください。 For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
