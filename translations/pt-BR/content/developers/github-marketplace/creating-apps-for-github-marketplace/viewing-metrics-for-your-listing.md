---
title: Visualizar métricas para a sua listagem
intro: 'A página de Insights do {% data variables.product.prodname_marketplace %} exibe métricas para o seu {% data variables.product.prodname_github_app %}. Você pode usar as métricas para acompanhar o desempenho do seu {% data variables.product.prodname_github_app %} e tomar decisões mais informadas sobre os preços, planos, testes grátis, bem como visualizar os efeitos das campanhas de marketing.'
redirect_from:
  - /apps/marketplace/managing-github-marketplace-listings/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/viewing-performance-metrics-for-a-github-marketplace-listing
  - /apps/marketplace/github-marketplace-insights
  - /marketplace/github-marketplace-insights
  - /developers/github-marketplace/viewing-metrics-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing metrics
ms.openlocfilehash: 92fde52b0edbc7c11ac22d641bc4d9c4bd02709f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083961'
---
Você pode visualizar as métricas do último dia (24 horas), semana, mês ou referente a todo o tempo em que seu {% data variables.product.prodname_github_app %} foi listada.

{% note %}

**Observação:** como leva tempo para agregar os dados, você observará um pequeno atraso nas datas mostradas. Ao selecionar um período de tempo, você poderá ver datas exatas para as métricas no topo da página.

{% endnote %}

## Métricas de desempenho

A página de Insights exibe essas métricas de desempenho para o período de tempo selecionado:

* **Valor da assinatura:** receita total possível (em dólares americanos) para assinaturas. Esse valor representa a receita possível, caso nenhum plano ou teste grátis seja cancelado e todas as transações de crédito forem bem sucedidas. O valor da assinatura inclui o valor integral dos planos que começam com um teste grátis no período de tempo selecionado, mesmo quando não há transações financeiras nesse período. O valor da assinatura também inclui o valor total dos planos atualizados no período de tempo selecionado, mas não inclui a quantia rateada. Para ver e baixar transações individuais, confira "[Transações do GitHub Marketplace](/marketplace/github-marketplace-transactions/)".
* **Visitantes:** número de pessoas que visualizaram uma página na listagem dos Aplicativos do GitHub. Este número inclui tanto visitantes conectados quanto desconectados.
* **Visualizações de página:** número de visualizações recebidas pelas páginas na listagem do Aplicativo do GitHub. Um único visitante pode gerar mais de uma exibição de página.

{% note %}

**Observação:** o valor estimado da assinatura pode ser muito maior do que as transações processadas para esse período. 

{% endnote %}

### Desempenho de conversão

* **Visitantes exclusivos na página de aterrissagem:** número de pessoas que visualizaram a página de aterrissagem do Aplicativo do GitHub.
* **Visitantes exclusivos na página de check-out:** número de pessoas que visualizaram uma das páginas de check-out do Aplicativo do GitHub.
* **Página de check-out para novas assinaturas:** número total de assinaturas pagas, avaliações gratuitas e assinaturas gratuitas. Veja o detalhamento de assinaturas totais para obter para o número específico de cada tipo de assinatura.

![Insights do Marketplace](/assets/images/marketplace/marketplace_insights.png)

Para acessar as perspectivas do {% data variables.product.prodname_marketplace %}:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Selecione o {% data variables.product.prodname_github_app %} para o qual você gostaria de ver perspectivas.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Clique na guia **Insights**.
7. Opcionalmente, selecione um período de tempo diferente, clicando no menu suspenso Período, no canto superior direito da página de Insights.
![Período do Marketplace](/assets/images/marketplace/marketplace_insights_time_period.png)
