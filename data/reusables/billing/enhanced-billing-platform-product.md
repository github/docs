{% ifversion fpt %}

Outside of {% data variables.product.prodname_ghe_cloud %}, the new billing platform is **only** available to:

* Organization accounts on a {% data variables.product.prodname_team %} plan created after November 13, 2024.
* Organization accounts on a {% data variables.product.prodname_free_team %} plan created after February 4, 2025.
* Personal accounts (either on {% data variables.product.prodname_free_user %} or {% data variables.product.prodname_pro %}) created after February 13, 2025.<br><br>

<!-- expires 2025-04-30 -->

Beginning in February 2025, {% data variables.product.company_short %} will migrate organizations on {% data variables.product.prodname_team %} to the new billing platform. Organizations will receive notice 30 days before their migration.

<!-- end expires 2025-04-30 -->

For existing personal accounts created before February 13, 2025, {% data variables.product.company_short %} will migrate personal accounts to the new billing platform in the future. You will receive a notice 30 days before migration.

{% elsif ghec %}

The new billing platform is available to:

* All enterprise accounts, and their organizations, created after June 2, 2024
* Enterprises that participated in the {% data variables.release-phases.public_preview %} program

</br>Beginning in September 2024, {% data variables.product.company_short %} will migrate remaining enterprises to the new billing platform. Enterprises will receive a notice 30 days before their migration. See the [GitHub blog](https://github.blog/changelog/2024-09-24-enhanced-billing-platform-for-enterprises/).

{% endif %}
