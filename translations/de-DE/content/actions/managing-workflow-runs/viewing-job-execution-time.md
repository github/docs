---
title: Viewing job execution time
intro: 'Sie können die Ausführungszeit eines Auftrags anzeigen, einschließlich der fakturierbaren Minuten, die ein Einzelvorgang angesammelt hat.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Billable job execution minutes are only shown for jobs run on private repositories that use {% data variables.product.prodname_dotcom %}-hosted runners. There are no billable minutes when using {% data variables.product.prodname_actions %} in public repositories or for jobs run on self-hosted runners.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. Under the job summary, you can view the job's execution time. To view details about the billable job execution time, click the time under **Billable time**. ![Link zu Den Ausführungs- und Abrechnungsdetails](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **Hinweis:** Die angezeigte Abrechnungszeit enthält keine Rundungen oder Minutenmultiplikatoren. To view your total {% data variables.product.prodname_actions %} usage, including rounding and minute multipliers, see "[Viewing your {% data variables.product.prodname_actions %} usage](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)."

   {% endnote %}
