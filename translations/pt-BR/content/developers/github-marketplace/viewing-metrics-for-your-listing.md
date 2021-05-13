---
title: Visualizar métricas para a sua listagem
intro: 'A página de Insights do {% data variables.product.prodname_marketplace %} exibe métricas para o seu {% data variables.product.prodname_github_app %}. Você pode usar as métricas para acompanhar o desempenho do seu {% data variables.product.prodname_github_app %} e tomar decisões mais informadas sobre os preços, planos, testes grátis, bem como visualizar os efeitos das campanhas de marketing.'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing/
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing/
  - /apps/marketplace/github-marketplace-insights/
  - /marketplace/github-marketplace-insights
versions:
  free-pro-team: '*'
topics:
  - Marketplace
---



Você pode visualizar as métricas do último dia (24 horas), semana, mês ou referente a todo o tempo em que seu {% data variables.product.prodname_github_app %} foi listada.

{% note %}

**Observação:** Como leva tempo para agregar dados, você notará um pequeno atraso nas datas exibidas. Ao selecionar um período de tempo, você poderá ver datas exatas para as métricas no topo da página.

{% endnote %}

### Métricas de desempenho

A página de Insights exibe essas métricas de desempenho para o período de tempo selecionado:

* **Valor da assinatura:** Receita total possível (em dólar) para assinaturas. Esse valor representa a receita possível, caso nenhum plano ou teste grátis seja cancelado e todas as transações de crédito forem bem sucedidas. O valor da assinatura inclui o valor integral dos planos que começam com um teste grátis no período de tempo selecionado, mesmo quando não há transações financeiras nesse período. O valor da assinatura também inclui o valor total dos planos atualizados no período de tempo selecionado, mas não inclui a quantia rateada. Para visualizar e fazer o download das transações individuais, consulte "[Transações do GitHub Marketplace](/marketplace/github-marketplace-transactions/)".
* **Visitantes:** Número de pessoas que visualizaram uma página na sua listagem de aplicativos GitHub. Este número inclui tanto visitantes conectados quanto desconectados.
* **Visualizações de página:** Número de páginas recebidas na listagem do seu aplicativo GitHub. Um único visitante pode gerar mais de uma exibição de página.

{% note %}

**Observação:**  Seu valor de assinatura estimado pode ser muito maior que as transações processadas para este período.

{% endnote %}

#### Desempenho de conversão

* **Visitantes únicos da página de destino:** Número de pessoas que visualizaram a página inicial do seu aplicativo GitHub.
* **Visitantes únicos para a página de checkout:** Número de pessoas que visualizaram uma das páginas de checkout do seu aplicativo GitHub.
* **Página de checkout para novas assinaturas:** Número total de assinaturas pagas, testes grátis e assinaturas grátis. Veja o detalhamento de assinaturas totais para obter para o número específico de cada tipo de assinatura.

![Perspectivas do Marketplace](/assets/images/marketplace/marketplace_insights.png)

Para acessar as perspectivas do {% data variables.product.prodname_marketplace %}:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.marketplace_apps %}
4. Selecione o
{% data variables.product.prodname_github_app %} para o qual você gostaria de ver Insights.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Clique na aba **Perspectivas**.
7. Opcionalmente, selecione um período de tempo diferente, clicando no menu suspenso Período, no canto superior direito da página de Insights. ![Período de tempo do Marketplace](/assets/images/marketplace/marketplace_insights_time_period.png)
