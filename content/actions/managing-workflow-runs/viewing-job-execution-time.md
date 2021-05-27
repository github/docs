---
title: Viewing job execution time
intro: 'You can view the execution time of a job, including the billable minutes that a job accrued.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

Billable job execution minutes are only shown for jobs run on private repositories that use {% data variables.product.prodname_dotcom %}-hosted runners. There are no billable minutes when using {% data variables.product.prodname_actions %} in public repositories or for jobs run on self-hosted runners.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under the job summary, you can view the job's execution time. To view details about the billable job execution time, click the time under **Billable time**.
   ![Run and billable time details link](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}
   
   **Note:** The billable time shown does not include any rounding or minute multipliers. To view your total {% data variables.product.prodname_actions %} usage, including rounding and minute multipliers, see "[Viewing your {% data variables.product.prodname_actions %} usage](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage)."
   
   {% endnote %}
