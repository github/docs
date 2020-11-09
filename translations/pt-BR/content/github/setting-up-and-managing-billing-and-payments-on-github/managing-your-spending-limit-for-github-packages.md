---
title: Gerenciando seu limite de gastos para o GitHub Packages (Pacotes do GitHub)
intro: 'Você pode definir um limite de gastos para o uso do {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### Sobre limites de gastos para o {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

Você pode definir um limite de gastos mais alto ou, em algumas contas, permitir gastos ilimitados. Se você pagar a conta da organização ou empresa por fatura, você poderá pagar antecipadamente por excessos para definir um limite de despesas mais elevado. O limite de gastos aplica-se aos seus excessos conjuntos para {% data variables.product.prodname_registry %} e {% data variables.product.prodname_actions %}. Para obter mais informações sobre preços para o uso de {% data variables.product.prodname_registry %}, consulte "[Sobre cobranças para o {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."

Assim que você definir um limite de gastos acima de $0, você será responsável por quaisquer excessos ocorridos no passado. Por exemplo, se a sua organização usa o {% data variables.product.prodname_team %}, não permite excessos, e publica uma nova versão de um pacote privado que aumenta seu uso de armazenamento para o mês de 1.9GB para 2.1GB, a publicar a versão, você usará um pouco mais de armazenamento do que os 2GB que seu produto inclui.

Como você não ativou os excessos, sua próxima tentativa de publicar uma versão do pacote irá falhar. Você não receberá uma fatura pelo excesso de 0.1GB naquele mês. No entanto, se você habilitar excessos em um mês futuro, sua primeira fatura incluirá o 0.1 GB de excesso do passado, além de qualquer excesso para o ciclo de faturamento atual.

### Gerenciando o limite de gastos de {% data variables.product.prodname_registry %} para sua conta de usuário

Qualquer pessoa pode gerenciar o limite de gastos do {% data variables.product.prodname_registry %} para sua própria conta de usuário.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Gerenciando o limite de gastos de {% data variables.product.prodname_registry %} para sua organização

Proprietários de organizações e gestores de faturamento podem gerenciar o limite de gastos de {% data variables.product.prodname_registry %} para uma organização.

Se você pagar pela conta da organização por fatura, você não poderá gerenciar o limite de gastos para a conta corporativa em {% data variables.product.product_name %}. Se desejar permitir que repositórios pertencentes à sua organização usem o {% data variables.product.prodname_registry %} além do armazenamento ou da transferência de dados incluída em cada repositório, você pode efetuar um pré-pagamento por excessos. Como os excessos devem ser pagos antecipadamente, você não pode permitir gastos ilimitados em contas pagas por fatura. Seu limite de gastos será de 150% do valor que você pagou antecipadamente. Se tiver alguma dúvida, [entre em contato com nossa equipe de gerenciamento de conta](https://enterprise.github.com/contact).

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.user_settings.cost-management-tab %}
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}

### Gerenciando o limite de gastos de {% data variables.product.prodname_registry %} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem gerenciar o limite de gastos de {% data variables.product.prodname_registry %} para uma conta corporativa.

{% data reusables.package_registry.spending-limit-enterprise-account %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Em "
{% data variables.product.prodname_actions %} e pacotes de uso mensal", clique em **Gestão de custo**.
  ![Aba de gestão de custos](/assets/images/help/settings/cost-management-tab-enterprise.png)
{% data reusables.dotcom_billing.monthly-spending-limit %}
{% data reusables.dotcom_billing.update-spending-limit %}
