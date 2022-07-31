---
title: Sobre a cobrança de pacotes do GitHub
intro: 'Se você quiser usar {% data variables.product.prodname_registry %} além do armazenamento ou transferência de dados incluídos em sua conta, você será cobrado pelo uso adicional.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages/about-billing-for-github-packages
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Packages
  - Spending limits
shortTitle: Sobre a cobrança
---

## Sobre a cobrança do {% data variables.product.prodname_registry %}

{% data reusables.package_registry.packages-billing %}

{% data reusables.package_registry.packages-spending-limit-brief %} Para obter mais informações, consulte "[Sobre limites de gastos](#about-spending-limits)".

{% note %}

**A atualização de cobrança para armazenamento de imagens do contêiner:** O período de uso grátis para armazenamento de imagens do contêiner e largura de banda para {% data variables.product.prodname_container_registry %} foi ampliado. Se estiver usando {% data variables.product.prodname_container_registry %}, você será informado com pelo menos um mês antes de começar a cobrar e receberá uma estimativa de quanto espera pagar. Para obter mais informações sobre {% data variables.product.prodname_container_registry %}, consulte "[Trabalhando com o registro do contêiner](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

{% endnote %}

{% ifversion ghec %}
Se você comprou {% data variables.product.prodname_enterprise %} por meio de um Contrato da Microsoft Enterprise, você pode conectar o seu ID de assinatura do Azure à sua conta corporativa para habilitar e pagar o uso de {% data variables.product.prodname_registry %}, além dos valores incluindo na sua conta. Para obter mais informações, consulte "[Conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

A transferência de dados é reiniciada todos os meses, mas o uso do armazenamento não.

| Produto                                                             | Armazenamento | Transferência de dados (por mês) |
| ------------------------------------------------------------------- | ------------- | -------------------------------- |
| {% data variables.product.prodname_free_user %}                   | 500MB         | 1GB                              |
| {% data variables.product.prodname_pro %}                           | 2GB           | 10GB                             |
| {% data variables.product.prodname_free_team %} para organizações | 500MB         | 1GB                              |
| {% data variables.product.prodname_team %}                          | 2GB           | 10GB                             |
| {% data variables.product.prodname_ghe_cloud %}                   | 50GB          | 100GB                            |

Todos os dados transferidos, quando acionados por {% data variables.product.prodname_actions %}, e os dados transferidos de qualquer fonte são gratuitos. Verificamos que você está baixando pacotes usando {% data variables.product.prodname_actions %} quando você faz login em {% data variables.product.prodname_registry %} usando um `GITHUB_TOKEN`.

|                                          | Hospedado | Auto-hospedado |
| ---------------------------------------- | --------- | -------------- |
| Acesso usando um `GITHUB_TOKEN`          | Grátis    | Grátis         |
| Acesso usando um token de acesso pessoal | Grátis    | $              |

O uso do armazenamento é compartilhado com artefatos de construção produzidos por {% data variables.product.prodname_actions %} para repositórios de sua conta. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

O {% data variables.product.prodname_dotcom %} cobra o uso da conta que possui o repositório onde o pacote é publicado. Se o uso da sua conta ultrapassar esses limites e você definir um limite de gastos acima de US$ 0, você pagará US$ 0,008 por GB de armazenamento por dia e US$ 0,50 por GB de transferência de dados.

Por exemplo, se sua organização usa {% data variables.product.prodname_team %}, permite gastos ilimitados, usa 150GB de armazenamento, e possui 50GB de transferência de dados durante um mês, a organização teria excessos de 148GB para armazenamento e 40GB para transferência de dados para esse mês. O excesso de armazenamento custaria US$ 0,008 por GB por dia ou US$ 37. O excesso para transferência de dados custaria US$ 0,50 ou US$ 20 por GB.

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_packages %}

No final do mês, {% data variables.product.prodname_dotcom %} arredonda sua transferência de dados para o GB mais próximo.

O {% data variables.product.prodname_dotcom %} calcula seu uso do armazenamento para cada mês com base no uso por hora durante aquele mês. Por exemplo, se você usar 3 GB de armazenamento por 10 dias de março e 12 GB durante 21 dias de março, seu uso de armazenamento seria:

- 3 GB x 10 dias x (24 horas por dia) = 720 GB-Horas
- 12 GB x 21 dias x (24 horas por dia) = 6,048 GB-Horas
- 720 GB-Horas + 6.048 GB-Horas = 6.768 GB-Horas
- 6.768 GB-Horas / (744 horas por mês) = 9,0967 GB-Meses

No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. Portanto, seu uso de armazenamento para março seria de 9.097 GB.

Se uso de {% data variables.product.prodname_registry %} compartilha a data de cobrança, o método de pagamento e o recibo que já existem para sua conta. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% data reusables.user-settings.context_switcher %}

## Sobre limites de gastos

{% data reusables.package_registry.packages-spending-limit-detailed %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/managing-your-spending-limit-for-github-packages)".

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
