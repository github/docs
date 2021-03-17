---
title: Visualizar transações para a sua listagem
intro: 'A página de transações do {% data variables.product.prodname_marketplace %} permite que você faça o download e visualize todas as transações para a sua listagem do {% data variables.product.prodname_marketplace %}. Você pode visualizar as transações do último dia (24 horas), semana, mês ou por todo o período em que o seu {% data variables.product.prodname_github_app %} foi listado.'
redirect_from:
  - /marketplace/github-marketplace-transactions
versions:
  free-pro-team: '*'
---



{% note %}

**Observação:** Como leva tempo para agregar dados, você notará um pequeno atraso nas datas exibidas. Ao selecionar um período de tempo, você poderá ver datas exatas para as métricas no topo da página.

{% endnote %}


Você pode visualizar ou fazer o download dos dados de transação para acompanhar suas atividades de assinatura. Clique no botão **Exportar CSV** para fazer o download de um arquivo `.csv`. Você também pode selecionar um período de tempo para visualizar e pesquisar na página de transação.

### Campos de dados transação

* **Data:** A data da transação no formato `aaaa-mm-dd.`.
* **app_name:** O nome do aplicativo.
* **user_login:** O login do usuário com a assinatura.
* **user_id:** O identificador do usuário com a assinatura.
* **user_type:** O tipo de conta do GitHub, que pode ser `Usuário` ou `Organização`.
* **country:** O código do país com três letras.
* **amount_in_centes:** O valor da transação em centavos. Quando um valor for inferior ao montante do plano, o usuário fez a atualização e o novo plano será rateado. Um valor zero indica que o usuário cancelou seu plano.
* **renewal_frequency:** A frequência de renovação da assinatura, seja `Mensal` ou `Anual`.
* **The following place_listing_plan_id:** O `id` do plano de assinatura.

![Perspectivas do Marketplace](/assets/images/marketplace/marketplace_transactions.png)

### Acessar as transações do {% data variables.product.prodname_marketplace %}

Para acessar as transações do {% data variables.product.prodname_marketplace %}:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.marketplace_apps %}
4. Selecione o
{% data variables.product.prodname_github_app %} para o qual você gostaria de ver as transações.
{% data reusables.user-settings.edit_marketplace_listing %}
6. Clique na aba **Transações**.
7. Opcionalmente, selecione um período de tempo diferente, clicando no período suspenso no canto superior direito da página de transações. ![Período de tempo do Marketplace](/assets/images/marketplace/marketplace_insights_time_period.png)
