---
title: Sobre a cobrança das GitHub Actions
intro: 'Se você quiser usar {% data variables.product.prodname_actions %} além do armazenamento ou dos minutos incluídos em sua conta, você será cobrado pelo uso adicional.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions/about-billing-for-github-actions
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Actions
  - Spending limits
shortTitle: Billing for GitHub Actions
ms.openlocfilehash: fcc8f84b8a11b214ca66e8a3851a1afc9df6213a
ms.sourcegitcommit: 9af8891fea10039b3374c76818634e05410e349d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/06/2022
ms.locfileid: '148191883'
---
## Sobre a cobrança do {% data variables.product.prodname_actions %}

{% data reusables.actions.actions-billing %}

{% data reusables.actions.actions-spending-limit-brief %} Para obter mais informações, confira "[Sobre os limites de gastos](#about-spending-limits)".

{% ifversion ghec %} Se você comprou o {% data variables.product.prodname_enterprise %} por meio de um Contrato Enterprise da Microsoft, conecte sua ID de Assinatura do Azure à sua conta corporativa para habilitar e pagar pelo uso do {% data variables.product.prodname_actions %} além dos valores, incluindo com a sua conta. Para obter mais informações, confira "[Como conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

Os minutos são redefinidos todos os meses, enquanto o uso de armazenamento não.

### Armazenamento e minutos incluídos

{% ifversion actions-hosted-runners %} {% note %}

**Observação**: os minutos de direito não podem ser usados por executores do Windows e do Ubuntu sobre dois núcleos. Esses executores sempre serão cobrados, inclusive em repositórios públicos. Para obter mais informações, confira "[Taxas por minuto para executores](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)".

{% endnote %} {% endif %}

|Produto | Armazenamento | Minutos (por mês)|
|------- | ------- | ---------|
| {% data variables.product.prodname_free_user %} | 500 MB | 2\.000 |
| {% data variables.product.prodname_pro %} | 1 GB | 3\.000 |
| {% data variables.product.prodname_free_team %} para organizações | 500 MB | 2\.000 |
| {% data variables.product.prodname_team %} | 2 GB | 3\.000 |
| {% data variables.product.prodname_ghe_cloud %} | 50 GB | 50.000 |

Os trabalhos que são executados em Windows e macOS runners que o {% data variables.product.prodname_dotcom %} hospeda consomem minutos na proporção de 2 a 10 vezes a taxa que os trabalhos em Linux consomem. Por exemplo, o uso de mil minutos do Windows consumiria 2 mil dos minutos incluídos em sua conta. O uso de mil minutos do macOS consumiria 10 mil minutos incluídos em sua conta.

### Multiplicadores de minutos

| Sistema operacional | Multiplicador de minutos |
|------- | ---------|
| Linux | 1 |
| macOS| 10 |
| Windows | 2 |

O armazenamento usado por um repositório é o armazenamento total usado por artefatos {% data variables.product.prodname_actions %} e {% data variables.product.prodname_registry %}. Seu custo de armazenamento corresponde ao uso total de todos os repositórios de propriedade da sua conta. Para obter mais informações sobre os preços do {% data variables.product.prodname_registry %}, confira "[Sobre a cobrança do {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".

 Se o uso da sua conta ultrapassar esses limites e você definir um limite de gastos acima de US$ 0, você pagará US$ 0,008 por GB de armazenamento por dia e o uso por minuto, dependendo do sistema operacional usado pelo executor hospedado no {% data variables.product.prodname_dotcom %}. {% data variables.product.prodname_dotcom %} arredonda os minutos e os minutos parciais que cada trabalho usa até o minuto inteiro mais próximo.

{% note %}

**Observação:** os multiplicadores de minutos não se aplicam às taxas por minuto mostradas abaixo.

{% endnote %}

### Taxa por minuto

{% data reusables.billing.billing-standard-runners %} {%- ifversion actions-hosted-runners %} {% data reusables.billing.billing-hosted-runners %} {%- endif %}

- O número de trabalhos que você pode executar simultaneamente em todos os repositórios em sua conta de usuário ou organização depende do seu plano GitHub. Para obter mais informações, confira "[Limites de uso e cobrança dos executores hospedados no {% data variables.product.prodname_dotcom %}](/actions/reference/usage-limits-billing-and-administration)" e "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners/#usage-limits)" para ver os limites de uso dos executores auto-hospedados.
- {% data reusables.user-settings.context_switcher %} {% ifversion actions-hosted-runners %} 
- Para {% data variables.actions.hosted_runner %}s, não há custo adicional para configurações que atribuem endereços IP estáticos públicos a um {% data variables.actions.hosted_runner %}. Para obter mais informações sobre {% data variables.actions.hosted_runner %}s, confira "[Como usar {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/using-larger-runners)".
- Os minutos de direito não podem ser usados para {% data variables.actions.hosted_runner %}s.
- Os {% data variables.actions.hosted_runner %} não são gratuitos para repositórios públicos.
{% endif %}

## Calculando minutos e gastos de armazenamento

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_actions %}

No final do mês, {% data variables.product.prodname_dotcom %} calcula o custo de minutos e armazenamento usado sobre o valor incluído em sua conta.

### Cálculo de custo de amostra em minutos

Por exemplo, se sua organização usa {% data variables.product.prodname_team %} e permite gastos ilimitados, usando 5.000 minutos, poderia ter um custo total de armazenamento e custo médio de minuto de US$ 56,00, dependendo dos sistemas operacionais usados para executar trabalhos.

- 5\.000 (3.000 Linux e 2.000 Windows) minutos = US$ 56 (US$ 24 + US$ 32).
  - 3\.000 minutos de Linux por US$ 0,008 por minuto = US$ 24.
  - 2\.000 Windows minutos com US$ 0,016 por minuto = US$ 32.

O {% data variables.product.prodname_dotcom %} calcula seu uso do armazenamento para cada mês com base no uso por hora durante aquele mês.

### Cálculo de custo de armazenamento

Por exemplo, se durante o mês de março você utilizar 3 GB em 10 dias e 12 GB nos 21 dias subsequentes, o uso do armazenamento será de:

- 3 GB x 10 dias x (24 horas por dia) = 720 GB-Horas
- 12 GB x 21 dias x (24 horas por dia) = 6,048 GB-Horas
- 720 GB-Horas + 6.048 GB-Horas = 6.768 GB-Horas
- 6\.768 GB-Horas / (744 horas por mês) = 9,0967 GB-Meses

No final do mês, {% data variables.product.prodname_dotcom %} arredonda seu armazenamento para o MB mais próximo. Portanto, seu uso de armazenamento em março seria de 9,097 GB.

Se uso de {% data variables.product.prodname_actions %} compartilha a data de cobrança, o método de pagamento e o recibo que já existem para sua conta. {% data reusables.dotcom_billing.view-all-subscriptions %}

## Sobre limites de gastos

{% data reusables.actions.actions-spending-limit-detailed %}

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, confira "[Como gerenciar seu limite de gastos do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/managing-your-spending-limit-for-github-actions)".

{% data reusables.dotcom_billing.actions-packages-unpaid-account %}
