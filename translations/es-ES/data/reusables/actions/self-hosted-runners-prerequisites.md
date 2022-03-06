{%- ifversion ghes %}
- {% data variables.product.prodname_actions %} must be enabled for {% data variables.product.product_name %}. A site administrator can enable and configure {% data variables.product.prodname_actions %} for your instance. Para obtener más información, consulta la sección "[Iniciar con las {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".
{%- endif %}

- You must have access to the machine you will use as a self-hosted runner in your environment.

- {% data reusables.actions.self-hosted-runner-ports-protocols %} For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-ae)."
