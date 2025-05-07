{% ifversion scim-for-ghes-public-beta %}

>[!NOTE] SCIM for {% data variables.product.prodname_ghe_server %} is currently in {% data variables.release-phases.public_preview %} and subject to change. {% data variables.product.company_short %} recommends testing with a staging instance first. See [AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

{% elsif ghes < 3.14 %}

>[!NOTE] This is an outdated, {% data variables.release-phases.private_preview %} version of SCIM for {% data variables.product.prodname_ghe_server %}. Customers must upgrade to 3.14 or newer and use the SCIM {% data variables.release-phases.public_preview %} in order for their SCIM feedback or bug reports to be considered.

>[!WARNING] The {% data variables.release-phases.public_preview %} is exclusively for testing and feedback, and no support is available. {% data variables.product.company_short %} recommends testing with a staging instance. For more information, see [AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance).

{% endif %}
