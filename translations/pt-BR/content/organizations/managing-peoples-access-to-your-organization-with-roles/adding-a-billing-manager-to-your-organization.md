---
title: Adicionar um gerente de cobrança à sua organização
intro: '*Gerente de cobrança* é um usuário que gerencia as configurações de cobrança da organização, como a atualização das informações de pagamento. Essa será uma excelente opção se integrantes regulares da sua organização normalmente não tiverem acesso aos recursos de cobrança.'
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-a-billing-manager-to-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
  - Billing
shortTitle: Add a billing manager
ms.openlocfilehash: f7b4e6d17ff0e6680fdf9509b467f314b1a9e4ec
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145095605'
---
Os membros da equipe Proprietários da sua organização podem conceder permissões de *gerente de cobrança* para as pessoas. Depois que uma pessoa aceita o convite deles para se tornar um gerente de cobrança da sua organização, ela poderá convidar mais pessoas para serem gerentes de cobrança.

{% note %}

**Observação:** os gerentes de cobrança não usam licenças pagas na assinatura da sua organização.

{% endnote %}

## Permissões para gerentes de cobrança

Os gerentes de cobrança podem:

- Atualizar ou fazer downgrade da conta
- Adicionar, atualizar ou remover formas de pagamento
- Exibir o histórico de pagamentos
- Baixar recibos
- Exibir, convidar e remover gerentes de cobrança
- Iniciar, modificar ou cancelar patrocínios

Além disso, todos os gerentes de cobrança receberão recibos de cobrança por e-mail na data de cobrança da organização.

Os gerentes de cobrança **não** podem:

- Criar ou acessar repositórios nas suas organizações
- Ver integrantes privados da sua organização
- Ser vistos na lista de integrantes da organização
- Comprar, editar ou cancelar assinaturas para aplicativos do {% data variables.product.prodname_marketplace %}

{% tip %}

**Dica:** se a sua organização [exigir que membros, gerentes de cobrança e colaboradores externos usem a autenticação de dois fatores](/articles/requiring-two-factor-authentication-in-your-organization), o usuário precisará habilitar a autenticação de dois fatores para aceitar o convite a fim de se tornar um gerente de cobrança da organização.

{% endtip %}

## Convidar um gerente de cobrança

{% ifversion ghec %} {% note %}

**Observação:** se a sua organização pertencer a uma conta corporativa, você não poderá convidar gerentes de cobrança no nível da organização. Para obter mais informações, confira "[Sobre as contas corporativas](/admin/overview/about-enterprise-accounts)".

{% endnote %} {% endif %}

A pessoa convidada receberá um e-mail de convite solicitando que ela se torne um gerente de cobrança da sua organização. Assim que a pessoa convidada clicar no link de aceitação no e-mail de convite, ela será adicionada automaticamente à organização como um gerente de cobrança. Se ela ainda não tiver uma conta do GitHub, ela será direcionada para se inscrever em uma, e será adicionada automaticamente à organização como um gerente de cobrança depois que ela criar uma conta.

{% data reusables.organizations.billing-settings %}
1. Em "Gerenciamento de cobrança", ao lado de "Gerentes de cobrança", clique em **Adicionar**.
  ![Convidar gerente de cobrança](/assets/images/help/billing/settings_billing_managers_list.png)
6. Digite o nome de usuário ou o endereço de email da pessoa que você deseja adicionar e clique em **Enviar convite**.
  ![Página Convidar gerente de cobrança](/assets/images/help/billing/billing_manager_invite.png)

## Leitura adicional

- "[Como convidar pessoas para gerenciar sua empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise)"{% ifversion fpt %} na documentação do {% data variables.product.prodname_ghe_cloud %}{% endif %}
