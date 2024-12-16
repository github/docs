{% ifversion fpt %}

Outside of {% data variables.product.prodname_ghe_cloud %}, the enhanced billing platform is available only to organization accounts created after November 13, 2024 on a {% data variables.product.prodname_team %} plan. It is currently **not** available to:

* {% data variables.product.prodname_free_user %}
* {% data variables.product.prodname_pro %}
* Organizations that upgrade from {% data variables.product.prodname_free_user %} to {% data variables.product.prodname_team %}

{% elsif ghec %}

The enhanced billing platform is available to:

* All enterprise accounts, and their organizations, created after June 2, 2024
* Enterprises that participated in the {% data variables.release-phases.public_preview %} program

Beginning in September 2024, {% data variables.product.company_short %} will migrate remaining enterprises to the new billing platform. Enterprises will receive a notice 30 days before their migration. See the [GitHub blog](https://github.blog/changelog/2024-09-24-enhanced-billing-platform-for-enterprises/).

{% endif %}
