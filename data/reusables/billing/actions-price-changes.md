{% ifversion actions-cloud-platform-march %}
<!--Nothing to show-->
{% elsif fpt or ghec %}

> [!NOTE]
> Upcoming changes to {% data variables.product.prodname_actions %} pricing:
>
> * **Self-hosted runners**: You will be charged for using the {% data variables.product.prodname_actions %} cloud platform from **{% data variables.actions.self_hosted_runner_charge_date %}**.
> * **{% data variables.product.github %}-hosted runners**: The charge for using actions minutes in private and internal repositories will include the cost of using the cloud platform from **January 1, 2026**.
>
> See [2026 pricing changes for {% data variables.product.prodname_actions %}](https://resources.github.com/actions/2026-pricing-changes-for-github-actions) in {% data variables.product.github %} Executive Insights.

{% endif %}
