---
title: Sobre o faturamento do GitHub Codespaces
shortTitle: About billing
intro: 'Veja os preços e veja como gerenciar o faturamento de {% data variables.product.prodname_github_codespaces %} para sua organização.'
permissions: 'To manage billing for {% data variables.product.prodname_github_codespaces %} for an organization, you must be an organization owner or a billing manager.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
  - Codespaces
  - Billing
redirect_from:
  - /billing/managing-billing-for-github-codespaces/about-billing-for-codespaces
ms.openlocfilehash: 51ecb4ca1811419cdaeba16865864c5f303bcc7e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431581'
---
## Preços do {% data variables.product.prodname_github_codespaces %}

O uso de {% data variables.product.prodname_github_codespaces %} é cobrado para todas as contas corporativas e da organização em {% data variables.product.prodname_team %} e {% data variables.product.prodname_enterprise %}, que não incluem minutos ou armazenamento gratuito. No momento, as contas pessoais não são cobradas pelo uso do {% data variables.product.prodname_codespaces %}. 

O uso de {% data variables.product.prodname_codespaces %} é cobrado de acordo com as unidades de medida na tabela a seguir:

| Produto             | SKU      | Unidade de medida | Preço |
| ------------------- | -------- | --------------- | ----- |
| Cálculo de codespace  |  Dois núcleos  | 1 hora          | $ 0,18 |
|                     |  Quatro núcleos  | 1 hora          | $ 0,36 |
|                     |  Oito núcleos  | 1 hora          | $ 0,72 |
|                     |  16 núcleos | 1 hora          | $ 1,44 |
|                     |  32 núcleos | 1 hora          | $ 2,88 |
| Armazenamento de codespaces  |  Armazenamento | 1 GB por mês      | US$ 0,07 |

## Sobre a cobrança do {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-billing %}

Seu uso de {% data variables.product.prodname_github_codespaces %} compartilha a data de cobrança, forma de pagamento e o recibo existentes em sua conta. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %} Se você comprou o {% data variables.product.prodname_enterprise %} por meio de um Contrato Enterprise da Microsoft, conecte sua ID de Assinatura do Azure à sua conta corporativa para habilitar e pagar pelo uso do {% data variables.product.prodname_codespaces %}. Para obter mais informações, confira "[Como conectar uma assinatura do Azure à sua empresa](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise)".
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### Cobrnça para pré-compilações de {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.billing-for-prebuilds-default %} 

{% data reusables.codespaces.billing-for-prebuilds-reducing %} 

## Definindo um limite de gastos

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Para obter informações sobre como gerenciar e alterar o limite de gastos da sua conta, confira "[Como gerenciar seu limite de gastos do {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)".

{% data reusables.codespaces.exporting-changes %}

## Limitando a escolha dos tipos de máquina

Por padrão, o tipo de computador com os recursos válidos mais baixos é usado quando um codespace é criado. No entanto, os usuários podem escolher um tipo de computador com mais recursos. Eles podem fazer isso ao criar um codespace ou podem alterar o tipo de computador de um codespace existente. Para obter mais informações, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)" e "[Como alterar o tipo de computador do seu codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)".

Se um tipo de computador com mais recursos for escolhido, isso afetará a cobrança por minuto desse codespace, conforme mostrado acima. 

Os proprietários da organização podem criar uma política para restringir os tipos de máquina disponíveis para os usuários. Para obter mais informações, confira "[Como restringir o acesso aos tipos de computadores](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types)".

## Como a cobrança é administrada para repositórios bifurcados

{% data variables.product.prodname_codespaces %} só pode ser usado em organizações em que um proprietário cobrável tenha sido definido. Para incorrer em encargos com a organização, o usuário deve ser integrante ou colaborador. Caso contrário, não poderá criar um codespace. 

Por exemplo, um usuário em uma organização privada pode bifurcar um repositório dentro dessa organização e, consequentemente, usar um codespace cobrado para a organização. Isto porque a organização é proprietária do repositório principal, que pode remover o acesso do usuário, o repositório bifurcado e o codespace.
  
## Como o faturamento é adminisrado quando um repositório é transferido

O uso é cobrado e informado a cada hora. Como tal, você paga qualquer uso quando um repositório está dentro da sua organização. Quando um repositório é transferido para fora da sua organização, todos os codespaces do repositório são removidos como parte do processo de transferência.

## O que acontece quando os usuários são removidos

Se um usuário for removido de uma organização ou repositório, seus codespaces serão automaticamente excluídos. 
