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
shortTitle: E-mail de cobrança
---

## Configurar o e-mail de cobrança da conta pessoal

O e-mail principal da conta pessoal é o endereço para o qual o {% data variables.product.product_name %} envia recibos e outras comunicações relacionadas a cobranças.

O endereço de e-mail principal é o primeiro e-mail relacionado nas configurações de e-mail da conta. O endereço de e-mail principal também é usado como endereço de e-mail de cobrança.

Se quiser alterar o e-mail de cobrança, consulte "[Alterar endereço de e-mail principal](/articles/changing-your-primary-email-address)".

## Configurar o e-mail de cobrança da organização

O e-mail de cobrança da organização é o endereço para o qual o {% data variables.product.product_name %} envia recibos e outras comunicações relacionadas a cobranças. O endereço de e-mail não precisa ser exclusivo para a conta da organização.

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
1. Em "Gerenciamento de cobrança", à direita do endereço de e-mail de cobrança, clique em **Editar**. ![E-mails de cobrança atual](/assets/images/help/billing/billing-change-email.png)
2. Insira um endereço de e-mail válido e clique **Atualizar**. ![Altere modal do endereço de e-mail de cobrança](/assets/images/help/billing/billing-change-email-modal.png)

## Gerenciar destinatários adicionais para o e-mail de cobrança da sua organização

Se você tiver usuários que desejem receber relatórios de cobrança, você poderá adicionar seus endereços de e-mail como destinatários de e-mail de cobrança. Esse recurso está disponível apenas para organizações que não são gerenciadas por uma empresa.

{% data reusables.dotcom_billing.org-billing-perms %}

### Adicionar um destinatário para notificações de cobrança

{% data reusables.organizations.billing-settings %}
1. Em gerenciamento de cobrança, à direita "destinatários de e-mail", clique em **Adicionar**. ![Adicionar destinatário](/assets/images/help/billing/billing-add-email-recipient.png)
1. Digite o endereço de e-mail do destinatário e, em seguida, clique em **Adicionar**. ![Adicionar modal de destinatário](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Alterar o destinatário primário para notificações de cobrança

Deve-se sempre designar um endereço como o destinatário principal. O endereço com esta designação não pode ser removido até que um novo destinatário principal seja selecionado.

{% data reusables.organizations.billing-settings %}
1. Em "Gestão de cobrança", encontre o endereço de e-mail que deseja definir como principal destinatário.
1. À direita do endereço de e-mail, use o menu suspenso "Editar" e, em seguida, clique em **Marcar como primário**. ![Marque o destinatário primário](/assets/images/help/billing/billing-change-primary-email-recipient.png)

### Remover um destinatário das notificações de cobrança

{% data reusables.organizations.billing-settings %}
1. Em "Destinatários de e-mail", encontre o endereço de e-mail que deseja remover.
1. Para inserir o usuário na lista, clique em **Editar**. ![Editar destinatário](/assets/images/help/billing/billing-edit-email-recipient.png)
1. À direita do endereço de e-mail, use o menu suspenso "Editar" e clique em **Remover**. ![Remover destinatário](/assets/images/help/billing/billing-remove-email-recipient.png)
1. Revise a instrução de confirmação e clique em **Remover**.

{% ifversion ghec %}
## Setting your enterprise's billing email

Your enterprise's billing email is where {% data variables.product.product_name %} sends receipts and other billing-related communication. The email address does not need to be unique to the enterprise account.

Only enterprise members with the owner or billing manager role can access or change billing settings for your enterprise. For more information, see "[Managing users in your enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Billing emails**.
2. Under "Email recipients", to the right of the billing email address, click **Edit**. ![Screenshot of the current billing email with the edit button emphasized](/assets/images/help/billing/billing-change-email.png)
2. Insira um endereço de e-mail válido e clique **Atualizar**. ![Screenshot of the edit billing email address modal window with a sample email address entered](/assets/images/help/billing/billing-change-email-modal.png)

## Managing additional recipients for your enterprise's billing email

Se você tiver usuários que desejem receber relatórios de cobrança, você poderá adicionar seus endereços de e-mail como destinatários de e-mail de cobrança.

Only enterprise members with the owner or billing manager role can access or change billing settings for your enterprise. For more information, see "[Managing users in your enterprise](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

### Adicionar um destinatário para notificações de cobrança

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Billing emails**.
2. Under "Email recipients", to the right of the billing email address, click **Add**. ![Screenshot of the current billing email with the add button emphasized](/assets/images/help/billing/billing-add-email-recipient.png)
3. Digite o endereço de e-mail do destinatário e, em seguida, clique em **Adicionar**. ![Screenshot of the add billing email address modal window without a sample email address entered](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Remover um destinatário das notificações de cobrança

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Click **Billing emails**.
2. Em "Destinatários de e-mail", encontre o endereço de e-mail que deseja remover.
3. Para inserir o usuário na lista, clique em **Editar**. ![Screenshot of the recipient's email with the edit button emphasized](/assets/images/help/billing/billing-edit-email-recipient.png)
4. À direita do endereço de e-mail, use o menu suspenso "Editar" e clique em **Remover**. ![Screenshot of the recipient's email with the remove button emphasized](/assets/images/help/billing/billing-remove-email-recipient.png)
5. Revise a instrução de confirmação e clique em **Remover**.
{% endif %}
