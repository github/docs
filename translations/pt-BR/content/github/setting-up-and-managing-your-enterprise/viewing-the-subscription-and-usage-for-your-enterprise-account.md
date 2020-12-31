---
title: Exibir assinatura e uso da conta corporativa
intro: 'Você pode exibir a assinatura atual, o uso da licença, as faturas, o histórico de pagamentos e outras informações de cobrança da sua conta corporativa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Proprietários corporativos e gerentes de cobrança podem acessar e gerenciar todas as configurações de cobrança relativas a contas corporativas.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre a cobrança de contas corporativas

As contas corporativas atualmente estão disponíveis para clientes do {% data variables.product.prodname_enterprise %} que pagam com fatura. A cobrança de todas as organizações e instâncias {% data variables.product.prodname_ghe_server %} conectadas à sua conta corporativa é agregada em uma única fatura para todos os seus serviços pagos do {% data variables.product.prodname_dotcom_the_website %} (incluindo licenças pagas nas organizações, pacotes de dados do {% data variables.large_files.product_name_long %} e assinaturas de apps do {% data variables.product.prodname_marketplace %}).

Para obter mais informações sobre como administrar gerentes de cobrança, consulte "[Convidar pessoas para gerenciar a sua empresa](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)".

### Exibir assinatura e uso da conta corporativa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
4. Em
{% if currentVersion == "free-pro-team@latest" %}Licenças{% else %}licenças{% endif %} do usuário", visualize o seu total de licenças, o número de licenças consumidas e a data de expiração da assinatura.
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Informações de assinaturas e licenças nas configurações de cobrança da empresa](/assets/images/enterprise/enterprises/enterprise-server-billing-license-info.png){% endif %}
5. Para ver os detalhes das licenças dos usuários em uso atualmente, clique em **Ver {% if currentVersion == "free-pro-team@latest" %}detalhes{% else %}de usuários{% endif %}**.
