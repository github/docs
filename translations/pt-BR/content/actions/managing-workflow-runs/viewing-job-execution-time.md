---
title: Visualizar o tempo de execução do trabalho
intro: 'Você pode visualizar o tempo de execução de um trabalho, incluindo os minutos faturáveis que um trabalho acumulou.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Os minutos de execução de um trabalho faturável são exibidos para trabalhos executados em repositórios privados que usam executores hospedados em {% data variables.product.prodname_dotcom %}. Não há minutos faturáveis ao usar {% data variables.product.prodname_actions %} nos repositórios públicos ou para trabalhos executados em executores auto-hospedados.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. No resumo do trabalho, você pode ver o tempo de execução do trabalho. Para visualizar os detalhes sobre o tempo de execução do trabalho faturável, clique no tempo abaixo do **Tempo faturável**. ![Link com informações sobre o tempo faturável e execução](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}

   **Observação:**O tempo faturável exibido não inclui arredondamentos ou multiplicadores de minutos. Para visualizar o uso total de {% data variables.product.prodname_actions %}, incluindo arredondamento e multiplicadores de minutos, consulte "[Visualizando o seu uso {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-actions-usage)".

   {% endnote %}
