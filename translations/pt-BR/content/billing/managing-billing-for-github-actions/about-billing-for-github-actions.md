---
title: Sobre a cobrança do GitHub Actions
intro: 'Se você quiser usar {% data variables.product.prodname_actions %} além do armazenamento ou dos minutos incluídos em sua conta, você será cobrado pelo uso adicional.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Cobrança para o GitHub Actions
---

## Sobre a cobrança do {% data variables.product.prodname_actions %}

{% data reusables.github-actions.actions-billing %}

{% data reusables.github-actions.actions-spending-limit-brief %} Para obter mais informações, consulte "[Sobre limites de gastos](#about-spending-limits)".

Se você comprou {% data variables.product.prodname_enterprise %} por meio de um Contrato da Microsoft Enterprise, você pode conectar o ID da sua assinatura do Azure à sua conta corporativa para habilitar e pagar pelo uso de {% data variables.product.prodname_actions %} além dos valores incluindo na sua conta. Para obter mais informações, consulte "[Conectar uma assinatura do Azure à sua empresa](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)".

Os minutos são reiniciados todos os meses, mas o uso do armazenamento não.

### Included storage and minutes

| Produto                                                             | Armazenamento | Minutos (por mês) |
| ------------------------------------------------------------------- | ------------- | ----------------- |
| {% data variables.product.prodname_free_user %}                   | 500 MB        | 2.000             |
| {% data variables.product.prodname_pro %}                           | 1 GB          | 3.000             |
| {% data variables.product.prodname_free_team %} para organizações | 500 MB        | 2.000             |
| {% data variables.product.prodname_team %}                          | 2 GB          | 3.000             |
| {% data variables.product.prodname_ghe_cloud %}                   | 50 GB         | 50.000            |

Os trabalhos que são executados em Windows e macOS runners que o {% data variables.product.prodname_dotcom %} hospeda consomem minutos na proporção de 2 a 10 vezes a taxa que os trabalhos em Linux consomem. Por exemplo, usar 1.000 minutos do Windows consumiria 2.000 minutos incluídos em sua conta. O uso de 1.000 minutos no macOS consumiria 10.000 minutos incluídos em sua conta.

### Minute multipliers

| Sistema operacional | Multiplicador de minutos |
| ------------------- | ------------------------ |
| Linux               | 1                        |
| macOS               | 10                       |
| Windows             | 2                        |

O armazenamento usado por um repositório é o armazenamento total usado por artefatos {% data variables.product.prodname_actions %} e {% data variables.product.prodname_registry %}. Seu custo de armazenamento é o uso total de todos os repositórios de sua conta. Para obter mais informações sobre preços para  {% data variables.product.prodname_registry %}, consulte "[Sobre cobrança para {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)."

 If your account's usage surpasses these limits and you have set a spending limit above $0 USD, you will pay $0.25 USD per GB of storage per month and per-minute usage depending on the operating system used by the {% data variables.product.prodname_dotcom %}-hosted runner. {% data variables.product.prodname_dotcom %} arredonda os minutos que cada trabalho usa até o minuto mais próximo.

{% note %}

**Observação:** Os multiplicadores de minutos não se aplicam às taxas por minuto mostradas abaixo.

{% endnote %}

### Per-minute rates

| Sistema operacional | Per-minute rate (USD) |
| ------------------- | --------------------- |
| Linux               | $0,008                |
| macOS               | $0,08                 |
| Windows             | $0,016                |

O número de trabalhos que você pode executar simultaneamente em todos os repositórios em sua conta de usuário ou organização depende do seu plano GitHub. Para obter mais informações, consulte "[Limites de uso e cobrança](/actions/reference/usage-limits-billing-and-administration)" para executores hospedados em {% data variables.product.prodname_dotcom %} e "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" para limites de uso de executores auto-hospedados.

{% data reusables.user_settings.context_switcher %}

## Calculando minutos e gastos de armazenamento

No final do mês, {% data variables.product.prodname_dotcom %} calcula o custo de minutos e armazenamento usado sobre o valor incluído em sua conta.

### Sample minutes cost calculation

For example, if your organization uses {% data variables.product.prodname_team %} and allows unlimited spending, using 15,000 minutes could have a total storage and minute overage cost of $56 USD, depending on the operating systems used to run jobs.

- 5,000 (3,000 Linux and 2,000 Windows) minutes = $56 USD ($24 USD + $32 USD).
  - 3,000 Linux minutes at $0.008 USD per minute = $24 USD.
  - 2,000 Windows minutes at $0.016 USD per minute = $32 USD.

O {% data variables.product.prodname_dotcom %} calcula seu uso do armazenamento para cada mês com base no uso por hora durante aquele mês.

### Sample storage cost calculation

Por exemplo, se você usar 3 GB de armazenamento por 10 dias de março e 12 GB durante 21 dias de março, seu uso de armazenamento seria:

- 3 GB x 10 dias x (24 horas por dia) = 720 GB-Horas
- 12 GB x 21 dias x (24 horas por dia) = 6,048 GB-Horas
- 720 GB-Horas + 6.048 GB-Horas = 6.768 GB-Horas
- 6.768 GB-Horas / (744 horas por mês) = 9,0967 GB-Meses

No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. Portanto, seu uso de armazenamento para março seria de 9.097 GB.

Se uso de {% data variables.product.prodname_actions %} compartilha a data de cobrança, o método de pagamento e o recibo que já existem para sua conta. {% data reusables.dotcom_billing.view-all-subscriptions %}

## Sobre limites de gastos

{% data reusables.github-actions.actions-spending-limit-detailed %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, consulte "[Gerenciar seu limite de gastos para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)".

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
