---
title: Criar e pagar uma organização em nome de um cliente
intro: 'Você pode criar e pagar por uma organização do {% data variables.product.prodname_dotcom %} em nome de um cliente.'
redirect_from:
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  free-pro-team: '*'
topics:
  - cobrança
---

### Requisitos

Antes de iniciar, certifique-se de que sabe:
- O nome de usuário no {% data variables.product.prodname_dotcom %} do cliente que se tornará o proprietário da organização que você cria
- O nome do cliente que deseja usar para a organização
- O endereço de e-mail para onde deseja que os recibos sejam enviados
- O [produto](/articles/github-s-products) que o cliente deseja comprar
- O número de [estações pagas](/articles/about-per-user-pricing/) que o cliente deseja comprar para a organização

### Etapa 1: Criar sua conta pessoal no {% data variables.product.prodname_dotcom %}

Você usará sua conta pessoal para configurar a organização. Você também precisará entrar nessa conta para renovar ou fazer alterações na assinatura do seu cliente no futuro.

Se você já tem uma conta de usuário pessoal no {% data variables.product.prodname_dotcom %}, pule para a [etapa 2](#step-2-create-the-organization).

1. Acesse a página para [ingressar no GitHub](https://github.com/join).
2. Em "Create your personal account" (Criar sua conta pessoal), digite seu nome de usuário, endereço de e-mail e senha, e clique em **Create an account** (Criar uma conta). ![Formulário de entrada para criar conta pessoal](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. Selecione {% data variables.product.prodname_free_user %} para sua conta pessoal.
4. Clique em **Finish sign up** (Finalizar inscrição).

### Etapa 2: Criar a organização

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
3. Em "Choose a plan" (Escolher um plano), clique em **Choose {% data variables.product.prodname_free_team %}** (Escolher {% data variables.product.prodname_team_os %}). Você atualizará a organização na próxima etapa.
{% data reusables.organizations.organization-name %}
5. Em "Contact email" (E-mail de contato), digite um endereço de e-mail de contato para seu cliente. ![Campo Contact email (E-mail de contato)](/assets/images/help/organizations/contact-email-field.png)
{% data reusables.dotcom_billing.owned_by_business %}
8. Clique em **Próximo**.

### Etapa 3: Atualizar a organização para uma assinatura paga anual

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %} (Você pode adicionar mais estações na organização na próxima etapa.)
6. Em "Upgrade summary" (Atualizar resumo), selecione **Pay yearly** (Pagar anualmente) para pagar pela organização anualmente. ![Botão de rádio para cobrança anual](/assets/images/help/billing/choose-annual-billing-org-resellers.png)
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.add-payment-method %}
1. Em "Pay with" (Pagar com), digite as informações do seu cartão de crédito. ![Formulário para inserir informações do cartã de crédito](/assets/images/help/billing/settings_billing_upgrade_with_credit_card.png)
1. Clique em **Update credit card** (Atualizar cartão de crédito).
{% data reusables.dotcom_billing.finish_upgrade %}

### Etapa 4: Atualizar o número de estações pagas na organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### Etapa 5: Convidar cliente para ingressar na organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
5. Digite o nome de usuário do cliente no {% data variables.product.prodname_dotcom %} e pressione **Enter**. ![Campo para digitar nome de usuário do cliente](/assets/images/help/organizations/org-invite-modal.png)
6. Escolha a função *owner* (proprietário) para o cliente e clique em **Send invitation** (Enviar convite). ![Botão de opção Owner (Proprietário) e botão Send invitation (Enviar convite)](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. O cliente receberá um e-mail convidando-o para a organização. Ele precisará aceitar o convite para que você possa passar para a próxima etapa.

### Etapa 6: Transferir a propriedade da organização para seu cliente

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Confirme se o cliente está listado entre os integrantes da organização e recebeu a função *owner* (proprietário).
5. À direita do seu nome de usuário, use o menu suspenso {% octicon "gear" aria-label="The Settings gear" %} e clique em **Manage** (Gerenciar). ![Link para manage access (gerenciar acesso)](/assets/images/help/organizations/member-manage-access.png)
6. À esquerda, clique em **Remove from organization** (Remover da organização). ![Botão Remove from organization (Remover da organização)](/assets/images/help/organizations/remove-from-org-button.png)
7. Confirme sua escolha e clique em **Remove members** (Remover membros). ![Botão de confirmação Remove members (Remover integrantes)](/assets/images/help/organizations/confirm-remove-from-org.png)

### Próximas etapas

1. Entre em contato com o cliente e peça a ele para [adicionar você à organização como um gerente de cobrança](/articles/adding-a-billing-manager-to-your-organization). Você precisará ser um gerente de cobrança da organização para que possa renovar ou fazer alterações na assinatura do seu cliente no futuro.
2. Se quiser que o cartão de crédito seja removido da organização para que não seja cobrado novamente, contate o {% data variables.contact.contact_support %}.
3. Quando chegar o momento de renovar a assinatura paga do cliente, consulte "[Renovar a organização paga do cliente](/articles/renewing-your-client-s-paid-organization)".

### Leia mais

- "[Sobre organizações para empresas de compras](/articles/about-organizations-for-procurement-companies)"
- "[Atualizar ou fazer downgrade da organização paga do cliente](/articles/upgrading-or-downgrading-your-client-s-paid-organization)"
- "[Renovar a organização paga do cliente](/articles/renewing-your-client-s-paid-organization)"
