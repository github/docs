---
title: Definir seu e-mail de cobrança
intro: 'O e-mail de cobrança da conta é o endereço para o qual o {% data variables.product.product_name %} envia recibos e outras comunicações relacionadas a cobranças.'
redirect_from:
  - /articles/setting-your-personal-account-s-billing-email/
  - /articles/can-i-change-what-email-address-received-my-github-receipt/
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email/'
  - /articles/setting-your-organization-s-billing-email/
  - /articles/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
versions:
  free-pro-team: '*'
topics:
  - Billing
---
### Configurar o e-mail de cobrança da conta pessoal

O e-mail principal da conta pessoal é o endereço para o qual o {% data variables.product.product_name %} envia recibos e outras comunicações relacionadas a cobranças.

O endereço de e-mail principal é o primeiro e-mail relacionado nas configurações de e-mail da conta. O endereço de e-mail principal também é usado como endereço de e-mail de cobrança.

Se quiser alterar o e-mail de cobrança, consulte "[Alterar endereço de e-mail principal](/articles/changing-your-primary-email-address)".

### Configurar o e-mail de cobrança da organização

O e-mail de cobrança da organização é o endereço para o qual o {% data variables.product.product_name %} envia recibos e outras comunicações relacionadas a cobranças.

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
4. Em **Billing email** (E-mail de cobrança), insira um endereço de e-mail válido. O e-mail não precisa ser exclusivo na conta da organização. ![Caixa de texto Billing email (E-mail de cobrança)](/assets/images/help/settings/org-billing-email.png)
5. Para confirmar as alterações, clique em **Update profile** (Atualizar perfil). ![Botão Update profile (Atualizar perfil)](/assets/images/help/settings/update-profile-button.png)

### Gerenciar destinatários adicionais para o e-mail de cobrança da sua organização

Se você tiver usuários que desejem receber relatórios de cobrança, você poderá adicionar seus endereços de e-mail como destinatários de e-mail de cobrança. Esse recurso está disponível apenas para organizações que não são gerenciadas por uma empresa.

#### Adicionar um destinatário para notificações de cobrança

{% data reusables.organizations.navigate-to-org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. Em gerenciamento de cobrança, à direita "destinatários de e-mail", clique em **Adicionar**. ![Adicionar destinatário](/assets/images/help/billing/billing-add-email-recipient.png)
1. Digite o endereço de e-mail do destinatário e, em seguida, clique em **Adicionar**. ![Adicionar modal de destinatário](/assets/images/help/billing/billing-add-email-recipient-modal.png)

#### Alterar o destinatário primário para notificações de cobrança

Deve-se sempre designar um endereço como o destinatário principal. O endereço com esta designação não pode ser removido até que um novo destinatário principal seja selecionado.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. Em "Gestão de cobrança", encontre o endereço de e-mail que deseja definir como principal destinatário.
1. À direita do endereço de e-mail, use o menu suspenso "Editar" e, em seguida, clique em **Marcar como primário**. ![Marque o destinatário primário](/assets/images/help/billing/billing-change-primary-email-recipient.png)

#### Remover um destinatário das notificações de cobrança

{% data reusables.organizations.navigate-to-org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.billing_plans %}
1. Em "Destinatários de e-mail", encontre o endereço de e-mail que deseja remover.
1. Para inserir o usuário na lista, clique em **Editar**. ![Editar destinatário](/assets/images/help/billing/billing-edit-email-recipient.png)
1. To the right of the email address, use the "Edit" drop-down menu, and click **Remove**. ![Remover destinatário](/assets/images/help/billing/billing-remove-email-recipient.png)
1. Revise a instrução de confirmação e clique em **Remover**.
