---
title: Managing billing for your enterprise
intro: 'You can view billing information for your enterprise.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "github-ae@latest" %}

{% data reusables.github-ae.about-billing %} Once per day, {% data variables.product.prodname_dotcom %} will count the number of users with a license for your enterprise. {% data variables.product.company_short %} bills you for each licensed user regardless of whether the user logged into {% data variables.product.prodname_ghe_managed %} that day.

For commercial regions, the price per user per day is $1.2580645161. For 31-day months, the monthly cost for each user is $39. For months with fewer days, the monthly cost is lower. Each billing month begins at a fixed time on the first day of the calendar month.

If you add a licensed user mid-month, that user will only be included in the count for the days they have a license. When you remove a licensed user, that user will remain in the count until the end of that month. Therefore, if you add a user mid-month and later remove the user in the same month, the user will be included in the count from the day the user was added through the end of the month. There is no additional cost if you re-add a user during the same month the user was removed.

For example, here are the costs for users with licenses on different dates.

| Usuário   | License dates                                           | Counted days | Cost   |
| --------- | ------------------------------------------------------- | ------------ | ------ |
| @octocat  | January 1 - January 31                                  | 31           | $39    |
| @robocat  | February 1 - February 28                                | 29           | $35.23 |
| @devtocat | January 15 - January 31                                 | 17           | $21.39 |
| @doctocat | January 1 - January 15                                  | 31           | $39    |
| @prodocat | January 7 - January 15                                  | 25           | $31.45 |
| @monalisa | January 1 - January 7,<br>January 15 - January 31 | 31           | $39    |

Your enterprise can include one or more instances. {% data variables.product.prodname_ghe_managed %} has a 500-user minimum per instance. {% data variables.product.company_short %} bills you for a minimum of 500 users per instance, even if there are fewer than 500 users with a license that day.

You can see your current usage in your [Azure account portal](https://portal.azure.com).

{% else %}

### Sobre a cobrança de contas corporativas

As contas corporativas atualmente estão disponíveis para clientes do {% data variables.product.prodname_enterprise %} que pagam com fatura. A cobrança de todas as organizações e instâncias {% data variables.product.prodname_ghe_server %} conectadas à sua conta corporativa é agregada em uma única fatura para todos os seus serviços pagos do {% data variables.product.prodname_dotcom_the_website %} (incluindo licenças pagas nas organizações, pacotes de dados do {% data variables.large_files.product_name_long %} e assinaturas de apps do {% data variables.product.prodname_marketplace %}).

Proprietários corporativos e gerentes de cobrança podem acessar e gerenciar todas as configurações de cobrança relativas a contas corporativas. For more information about enterprise accounts, {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}"[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" and {% endif %}"[Repository permission levels for an organization](/articles/repository-permission-levels-for-an-organization)."For more information about managing billing managers, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

### Visualizando sua fatura atual

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Em "Quick Actions" (Ações rápidas), clique em **View invoice** (Visualizar fatura). ![Link de visualização da fatura](/assets/images/help/business-accounts/view-invoice-link.png)

### Pagando sua fatura atual

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Em "Quick Actions" (Ações rápidas), clique em **Pay invoice** (Pagar fatura). ![Link de pagamento da fatura](/assets/images/help/business-accounts/pay-invoice-link.png)
5. Em "Pagar fatura", digite as informações do seu cartão de crédito no formulário de segurança e clique em **Pay Invoice** (Pagar fatura). ![Confirmar e pagar a fatura](/assets/images/help/business-accounts/pay-invoice.png)

### Baixando sua fatura atual

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Em "Quick Actions" (Ações rápidas), clique em **Download current invoice** (Baixar fatura atual). ![Link para baixar fatura atual](/assets/images/help/business-accounts/download-current-invoice.png)

### Visualizando seu histórico de pagamento

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
4. Em "Faturamento", clique na aba **Past Invoices** (Últimas Faturas) para ver um resumo de sua atividade anterior de faturamento. ![Aba de visualização de histórico de pagamento](/assets/images/help/business-accounts/view-payment-history.png)

{% endif %}
