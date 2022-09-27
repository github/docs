---
title: Visualizar transações para a sua listagem
intro: 'A página de transações do {% data variables.product.prodname_marketplace %} permite que você faça o download e visualize todas as transações para a sua listagem do {% data variables.product.prodname_marketplace %}. Você pode visualizar as transações do último dia (24 horas), semana, mês ou por todo o período em que o seu {% data variables.product.prodname_github_app %} foi listado.'
redirect_from:
  - /marketplace/github-marketplace-transactions
  - /developers/github-marketplace/viewing-transactions-for-your-listing
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Marketplace
shortTitle: View listing transactions
ms.openlocfilehash: f0e02ca4038131752d4a5fab54de1f1f539289c2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083959'
---
{% note %}

**Observação:** como leva tempo para agregar os dados, você observará um pequeno atraso nas datas mostradas. Ao selecionar um período de tempo, você poderá ver datas exatas para as métricas no topo da página.

{% endnote %}


Você pode visualizar ou fazer o download dos dados de transação para acompanhar suas atividades de assinatura. Clique no botão **Exportar CSV** para baixar um arquivo `.csv`. Você também pode selecionar um período de tempo para visualizar e pesquisar na página de transação.

## Campos de dados transação

* **date:** a data da transação no formato `yyyy-mm-dd`.
* **app_name:** o nome do aplicativo.
* **user_login:** o logon do usuário com a assinatura.
* **user_id:** a ID do usuário com a assinatura.
* **user_type:** o tipo de conta do GitHub, `User` ou `Organization`.
* **country:** o código de três letras do país.
* **amount_in_cents:** o valor da transação em centavos. Quando um valor for inferior ao montante do plano, o usuário fez a atualização e o novo plano será rateado. Um valor zero indica que o usuário cancelou seu plano.
* **renewal_frequency:** a frequência de renovação da assinatura, `Monthly` ou `Yearly`.
* **marketplace_listing_plan_id:** a `id` do plano de assinatura.
* **region:** o nome da região presente no endereço para cobrança.
* **postal_code:** o valor do CEP presente no endereço para cobrança.

![Insights do Marketplace](/assets/images/marketplace/marketplace_transactions.png)

## Acessar as transações do {% data variables.product.prodname_marketplace %}

Para acessar as transações do {% data variables.product.prodname_marketplace %}:

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.marketplace_apps %}
4. Selecione o {% data variables.product.prodname_github_app %} cujas transações você gostaria de ver.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Clique na guia **Transações**.
7. Opcionalmente, selecione um período de tempo diferente, clicando no período suspenso no canto superior direito da página de transações.
![Período do Marketplace](/assets/images/marketplace/marketplace_insights_time_period.png)
