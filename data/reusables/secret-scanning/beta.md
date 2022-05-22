{% ifversion ghes = 3.0 or ghae %}
{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} for organization-owned repositories is currently in beta and subject to change.

If you're using an earlier version of {% data variables.product.prodname_ghe_server %}, you'll have to upgrade to use {% data variables.product.prodname_secret_scanning %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
{% ifversion ghes > 3.0 %}

{% note %}

**Note:** {% data variables.product.prodname_secret_scanning_caps %} was in beta in {% data variables.product.prodname_ghe_server %} 3.0. For the generally available release of {% data variables.product.prodname_secret_scanning %}, upgrade to the latest release of {% data variables.product.prodname_ghe_server %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
