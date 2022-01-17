{% ifversion ghes = 3.0 or ghae %}
{% note %}

**Observação:** {% data variables.product.prodname_secret_scanning_caps %} para repositórios pertencentes à organização, está atualmente na versão beta e sujeita a alterações.

If you're using an earlier version of {% data variables.product.prodname_ghe_server %}, you'll have to upgrade to use {% data variables.product.prodname_secret_scanning %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
{% ifversion ghes > 3.0 %}

{% note %}

**Observação:** {% data variables.product.prodname_secret_scanning_caps %} estava em beta em {% data variables.product.prodname_ghe_server %} 3.0. Para a versão geral disponível de {% data variables.product.prodname_secret_scanning %}, faça a atualização para a versão mais recente de {% data variables.product.prodname_ghe_server %}. For more information about upgrading your {% data variables.product.prodname_ghe_server %} instance, see "[About upgrades to new releases](/admin/overview/about-upgrades-to-new-releases)" and refer to the [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) to find the upgrade path from your current release version.


{% endnote %}

{% endif %}
