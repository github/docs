---
title: Gerenciar a cobrança para a sua empresa
intro: Você pode visualizar as informações de cobrança para a sua empresa.
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /enterprise/admin/installation/managing-billing-for-github-enterprise
  - /enterprise/admin/overview/managing-billing-for-github-enterprise
  - /admin/overview/managing-billing-for-github-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - enterprise
---

{% if currentVersion == "github-ae@latest" %}

{% data reusables.github-ae.about-billing %} Uma vez por dia, {% data variables.product.prodname_dotcom %} contará o número de usuários com uma licença para sua empresa. {% data variables.product.company_short %} efetua a cobrança para cada usuário licenciado independentemente de o usuário estar conectado a {% data variables.product.prodname_ghe_managed %} nesse dia.

Para regiões comerciais, o preço por usuário por dia é de $ 1,2580645161. Por meses de 31 dias, o custo mensal para cada usuário é de $ 39. Nos meses com menos dias, o custo mensal é menor. Cada mês de cobrança começa em um horário fixo no primeiro dia do mês do calendário.

Se você adicionar um usuário licenciado no meio do mês, esse usuário será incluído apenas na contagem dos dias em que tem uma licença. Ao remover um usuário licenciado, esse usuário permanecerá na contagem até o final desse mês. Portanto, se você adicionar um usuário durante o mês ou depois remover o usuário no mesmo mês, o usuário será incluído na contagem a partir do dia em que o usuário foi adicionado até o final do mês. Não há custos adicionais se você adicionar novamente um usuário no mesmo mês em que o usuário foi removido.

Por exemplo, aqui estão os custos para os usuários com licenças em datas diferentes.

| Usuário   | Datas de licença                                                   | Dias contados | Custo   |
| --------- | ------------------------------------------------------------------ | ------------- | ------- |
| @octocat  | 1 de Janeiro - 31 de Janeiro                                       | 31            | $ 39    |
| @robocat  | 1 de fevereiro - 28 de fevereiro                                   | 29            | $ 35,23 |
| @devtocat | 15 de Janeiro - 31 de Janeiro                                      | 17            | $ 21,39 |
| @doctocat | 1 de Janeiro - 15 de Janeiro                                       | 31            | $ 39    |
| @prodocat | 7 de Janeiro - 15 de Janeiro                                       | 25            | $ 31,45 |
| @monalisa | 1 de janeiro - 7 de janeiro<br>15 de janeiro - 31 de janeiro | 31            | $ 39    |

A sua empresa pode incluir uma ou mais instâncias. {% data variables.product.prodname_ghe_managed %} tem uma instância mínima de 500 usuários. {% data variables.product.company_short %} cobra de você um mínimo de 500 usuários por instância, mesmo que haja menos de 500 usuários com uma licença nesse dia.

Você pode ver seu uso atual no seu [Portal da conta do Azure](https://portal.azure.com).

{% else %}

### Sobre a cobrança de contas corporativas

As contas corporativas atualmente estão disponíveis para clientes do {% data variables.product.prodname_enterprise %} que pagam com fatura. A cobrança de todas as organizações e instâncias {% data variables.product.prodname_ghe_server %} conectadas à sua conta corporativa é agregada em uma única fatura para todos os seus serviços pagos do {% data variables.product.prodname_dotcom_the_website %} (incluindo licenças pagas nas organizações, pacotes de dados do {% data variables.large_files.product_name_long %} e assinaturas de apps do {% data variables.product.prodname_marketplace %}).

Proprietários corporativos e gerentes de cobrança podem acessar e gerenciar todas as configurações de cobrança relativas a contas corporativas. Para mais informações sobre contas corporativas, {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}"[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" e {% endif %}"[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization). "Para obter mais informações sobre como gerenciar gerentes de cobrança, consulte "[Convidar pessoas para gerenciar a sua empresa](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)".

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
