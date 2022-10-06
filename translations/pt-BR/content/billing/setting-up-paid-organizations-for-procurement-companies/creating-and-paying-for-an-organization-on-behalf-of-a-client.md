---
title: Criar e pagar uma organização em nome de um cliente
intro: 'Você pode criar e pagar por uma organização do {% data variables.product.prodname_dotcom %} em nome de um cliente.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Organizations
  - Upgrades
shortTitle: On behalf of a client
ms.openlocfilehash: 6c0cdaa09d3e2bf476b6314c38d369ec89840aad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145083410'
---
## Requisitos

Antes de iniciar, certifique-se de que sabe:
- O nome de usuário no {% data variables.product.prodname_dotcom %} do cliente que se tornará o proprietário da organização que você cria
- O nome do cliente que deseja usar para a organização
- O endereço de e-mail para onde deseja que os recibos sejam enviados
- O [produto](/articles/github-s-products) que o cliente deseja comprar
- O número de [estações pagas](/articles/about-per-user-pricing/) que o cliente deseja que você compre para a organização

## Etapa 1: Criar sua conta pessoal no {% data variables.product.prodname_dotcom %}

Você usará sua conta pessoal para configurar a organização. Você também precisará entrar nessa conta para renovar ou fazer alterações na assinatura do seu cliente no futuro.

Se você já tiver uma conta de usuário pessoal do {% data variables.product.prodname_dotcom %}, pule para a [etapa 2](#step-2-create-the-organization).

1. Acesse a página [Ingresse no GitHub](https://github.com/join).
2. Em "Criar sua conta pessoal", digite seu nome de usuário, o endereço de email e a senha e clique em **Criar uma conta**.
![Formulário de entrada para criação de uma conta pessoal](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. Selecione {% data variables.product.prodname_free_user %} para sua conta pessoal.
4. Clique em **Concluir inscrição**.

## Etapa 2: Criar a organização

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
3. Em "Escolher um plano", clique em **Escolher o {% data variables.product.prodname_free_team %}** . Você atualizará a organização na próxima etapa.
{% data reusables.organizations.organization-name %}
5. Em "Contact email" (E-mail de contato), digite um endereço de e-mail de contato para seu cliente.
  ![Campo Email de contato](/assets/images/help/organizations/contact-email-field.png) {% data reusables.dotcom_billing.owned_by_business %}
8. Clique em **Próximo**.

## Etapa 3: Atualizar a organização para uma assinatura paga anual


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} (Você poderá adicionar mais estações à organização na próxima etapa).
6. Em "Resumo do upgrade", selecione **Pagar anualmente** para pagar a organização anualmente.
![Botão de opção para cobrança anual](/assets/images/help/billing/choose-annual-billing-org-resellers.png) {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## Etapa 4: Atualizar o número de estações pagas na organização

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

## Etapa 5: Convidar cliente para ingressar na organização

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %}
5. Digite o nome de usuário do cliente no {% data variables.product.prodname_dotcom %} e pressione **ENTER**.
![Campo usado para digitar o nome de usuário do cliente](/assets/images/help/organizations/org-invite-modal.png)
6. Escolha a função *proprietário* para o cliente e clique em **Enviar convite**.
![Botão de opção Proprietário e botão Enviar convite](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. O cliente receberá um e-mail convidando-o para a organização. Ele precisará aceitar o convite para que você possa passar para a próxima etapa.

## Etapa 6: Transferir a propriedade da organização para seu cliente

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Confirme se o cliente está listado entre os membros da organização e se ele recebeu a função *proprietário*.
5. À direita do seu nome de usuário, use o menu suspenso {% octicon "gear" aria-label="The Settings gear" %} e clique em **Gerenciar**.
  ![Link Gerenciar acesso](/assets/images/help/organizations/member-manage-access.png)
6. À esquerda, clique em **Remover da organização**.
  ![Botão Remover da organização](/assets/images/help/organizations/remove-from-org-button.png)
7. Confirme sua escolha e clique em **Remover membros**.
  ![Botão de confirmação Remover membros](/assets/images/help/organizations/confirm-remove-from-org.png)

## Próximas etapas

1. Entre em contato com o cliente e peça a ele que [adicione você à organização como um gerente de cobrança](/articles/adding-a-billing-manager-to-your-organization). Você precisará ser um gerente de cobrança da organização para que possa renovar ou fazer alterações na assinatura do seu cliente no futuro.
2. Se quiser que o cartão de crédito seja removido da organização para que não seja cobrado novamente, contate o {% data variables.contact.contact_support %}.
3. Quando for hora de renovar a assinatura paga do cliente, confira "[Como renovar a organização paga do cliente](/articles/renewing-your-client-s-paid-organization)".

## Leitura adicional

- "[Sobre as organizações para empresas de compras](/articles/about-organizations-for-procurement-companies)"
- "[Como fazer upgrade ou downgrade da organização paga do cliente](/articles/upgrading-or-downgrading-your-client-s-paid-organization)"
- "[Como renovar a organização paga do cliente](/articles/renewing-your-client-s-paid-organization)"
