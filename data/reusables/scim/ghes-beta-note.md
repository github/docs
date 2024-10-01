{% ifversion scim-for-ghes-public-beta %}

>[!NOTE] SCIM for {% data variables.product.product_name %} is currently in {% data variables.release-phases.public_preview %} and subject to change. {% data variables.product.company_short %} recommends testing with a staging instance first. See "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% elsif ghes < 3.14 %}

>[!NOTE] SCIM for {% data variables.product.product_name %} is currently in {% data variables.release-phases.private_preview %} and is subject to change. For access to the {% data variables.release-phases.public_preview %}, contact your account manager on {% data variables.contact.contact_enterprise_sales %}. Please provide feedback in the [{% data variables.product.prodname_github_community %} discussion](https://github.com/orgs/community/discussions/36825).

>[!WARNING] The {% data variables.release-phases.public_preview %} is exclusively for testing and feedback, and no support is available. {% data variables.product.company_short %} recommends testing with a staging instance. For more information, see "[AUTOTITLE](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance)."

{% endif %}
