---
title: Definir seu e-mail de cobrança
intro: 'O e-mail de cobrança da conta é o endereço para o qual o {% data variables.product.product_name %} envia recibos e outras comunicações relacionadas a cobranças.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
  - /articles/setting-your-personal-account-s-billing-email
  - /articles/can-i-change-what-email-address-received-my-github-receipt
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email'
  - /articles/setting-your-organization-s-billing-email
  - /articles/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/setting-your-billing-email
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Billing email
ms.openlocfilehash: 35b340a697bafd0c7e3047983496b71048cbe0ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083432'
---
## Configurar o e-mail de cobrança da conta pessoal

O e-mail principal da conta pessoal é o endereço para o qual o {% data variables.product.product_name %} envia recibos e outras comunicações relacionadas a cobranças.

O endereço de e-mail principal é o primeiro e-mail relacionado nas configurações de e-mail da conta.
O endereço de e-mail principal também é usado como endereço de e-mail de cobrança.

Caso deseje alterar seu email de cobrança, confira "[Como alterar seu endereço de email principal](/articles/changing-your-primary-email-address)".

## Configurar o e-mail de cobrança da organização

O e-mail de cobrança da organização é o endereço para o qual o {% data variables.product.product_name %} envia recibos e outras comunicações relacionadas a cobranças. O endereço de e-mail não precisa ser exclusivo para a conta da organização.

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
1. Em "Gerenciamento de cobrança", à direita do endereço de email de cobrança, clique em **Editar**.
  ![Emails de cobrança atuais](/assets/images/help/billing/billing-change-email.png)
2. Digite um endereço de email válido e clique em **Atualizar**.
  ![Caixa de diálogo modal Alterar endereço de email de cobrança](/assets/images/help/billing/billing-change-email-modal.png)

## Gerenciar destinatários adicionais para o e-mail de cobrança da sua organização

Se você tiver usuários que desejem receber relatórios de cobrança, você poderá adicionar seus endereços de e-mail como destinatários de e-mail de cobrança. Esse recurso está disponível apenas para organizações que não são gerenciadas por uma empresa.

{% data reusables.dotcom_billing.org-billing-perms %}

### Adicionar um destinatário para notificações de cobrança

{% data reusables.organizations.billing-settings %}
1. Em "Gerenciamento de cobrança", à direita de "Destinatários de email", clique em **Adicionar**.
  ![Adicionar destinatário](/assets/images/help/billing/billing-add-email-recipient.png)
1. Digite o endereço de email do destinatário e clique em **Adicionar**.
  ![Caixa de diálogo modal Adicionar destinatário](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Alterar o destinatário primário para notificações de cobrança

Deve-se sempre designar um endereço como o destinatário principal. O endereço com esta designação não pode ser removido até que um novo destinatário principal seja selecionado.

{% data reusables.organizations.billing-settings %}
1. Em "Gestão de cobrança", encontre o endereço de e-mail que deseja definir como principal destinatário.
1. À direita do endereço de email, use o menu suspenso "Editar" e clique em **Marcar como principal**.
  ![Marcar destinatário principal](/assets/images/help/billing/billing-change-primary-email-recipient.png)

### Remover um destinatário das notificações de cobrança

{% data reusables.organizations.billing-settings %}
1. Em "Destinatários de e-mail", encontre o endereço de e-mail que deseja remover.
1. Para a entrada do usuário na lista, clique em **Editar**.
  ![Editar destinatário](/assets/images/help/billing/billing-edit-email-recipient.png)
1. À direita do endereço de email, use o menu suspenso "Editar" e clique em **Remover**.
  ![Remover destinatário](/assets/images/help/billing/billing-remove-email-recipient.png)
1. Revise o prompt de commit e clique em **Remover**.

{% ifversion ghec %}
## Definindo o e-mail de cobrança da sua empresa

O e-mail de cobrança da sua empresa é para onde {% data variables.product.product_name %} envia recibos e outras comunicações relacionadas à cobrança. O endereço de e-mail não precisa ser exclusivo para a conta corporatva.

Apenas os integrantes da empresa com a função de proprietário ou gerente de cobrança podem acessar ou alterar as configurações de cobrança da sua empresa. Para obter mais informações, confira "[Como gerenciar usuários na sua empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Clique em **Emails de cobrança**. 
2. Em "Destinatários de email", à direita do endereço de email de cobrança, clique em **Editar**.
  ![Captura de tela do email de cobrança atual com o botão Editar realçado](/assets/images/help/billing/billing-change-email.png)
2. Digite um endereço de email válido e clique em **Atualizar**.
  ![Captura de tela da janela restrita Editar endereço de email de cobrança com um exemplo de endereço de email inserido](/assets/images/help/billing/billing-change-email-modal.png)

## Gerenciar destinatários adicionais para o e-mail de cobrança da sua empresa

Se você tiver usuários que desejem receber relatórios de cobrança, você poderá adicionar seus endereços de e-mail como destinatários de e-mail de cobrança. 

Apenas os integrantes da empresa com a função de proprietário ou gerente de cobrança podem acessar ou alterar as configurações de cobrança da sua empresa. Para obter mais informações, confira "[Como gerenciar usuários na sua empresa](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)".

### Adicionar um destinatário para notificações de cobrança

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Clique em **Emails de cobrança**. 
2. Em "Destinatários de email", à direita do endereço de email de cobrança, clique em **Adicionar**.
   ![Captura de tela do email de cobrança atual com o botão Adicionar realçado](/assets/images/help/billing/billing-add-email-recipient.png)
3. Digite o endereço de email do destinatário e clique em **Adicionar**.
   ![Captura de tela da janela restrita Adicionar endereço de email de cobrança sem um exemplo de endereço de email inserido](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Remover um destinatário das notificações de cobrança

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Clique em **Emails de cobrança**. 
2. Em "Destinatários de e-mail", encontre o endereço de e-mail que deseja remover.
3. Para a entrada do usuário na lista, clique em **Editar**.
   ![Captura de tela do email do destinatário com o botão Editar realçado](/assets/images/help/billing/billing-edit-email-recipient.png)
4. À direita do endereço de email, use o menu suspenso "Editar" e clique em **Remover**.
   ![Captura de tela do email do destinatário com o botão Remover realçado](/assets/images/help/billing/billing-remove-email-recipient.png)
5. Revise o prompt de commit e clique em **Remover**.
{% endif %}
