{% ifversion ghes = 3.0 or ghae %}
{% note %}

**注意：**组织拥有的仓库的 {% data variables.product.prodname_secret_scanning_caps %} 目前处于公测阶段，可能会有变动。

If you're using an earlier version of {% data variables.product.prodname_ghe_server %}, you'll have to upgrade to use {% data variables.product.prodname_secret_scanning %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
{% ifversion ghes > 3.0 %}

{% note %}

**注：** {% data variables.product.prodname_secret_scanning_caps %} 是 {% data variables.product.prodname_ghe_server %} 3.0 中的测试版功能。 对于 {% data variables.product.prodname_secret_scanning %} 的一般可用版本，请升级到 {% data variables.product.prodname_ghe_server %} 的最新版本。 For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
