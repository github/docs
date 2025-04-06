{%- ifversion ghes %}
* {% data variables.product.prodname_actions %} must be enabled for {% data variables.product.product_name %}. A site administrator can enable and configure {% data variables.product.prodname_actions %} for your instance. For more information, see "[AUTOTITLE](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)."
{%- endif %}

* You must have access to the machine you will use as a self-hosted runner in your environment.

{% ifversion ghes %}- {% data reusables.actions.self-hosted-runner-ports-protocols %}{% endif %}
