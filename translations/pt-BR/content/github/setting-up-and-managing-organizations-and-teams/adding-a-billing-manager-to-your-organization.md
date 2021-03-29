---
title: Adicionar um gerente de cobrança à sua organização
intro: 'Um *gerente de cobrança* é um usuário que gerencia as configurações de cobrança para sua organização, como atualizar informações de pagamento. Essa será uma excelente opção se integrantes regulares da sua organização normalmente não tiverem acesso aos recursos de cobrança.'
redirect_from:
  - /articles/adding-a-billing-manager-to-your-organization
versions:
  free-pro-team: '*'
topics:
  - organizations
  - teams
  - cobrança
---

Os integrantes da equipe Proprietários da organização podem conceder permissões de *gerente de cobrança* para as pessoas. Depois que uma pessoa aceita o convite deles para se tornar um gerente de cobrança da sua organização, ela poderá convidar mais pessoas para serem gerentes de cobrança.

{% note %}

**Observação:** Os gerentes de cobrança não usam licenças pagas na assinatura da sua organização.

{% endnote %}

### Permissões para gerentes de cobrança

Os gerentes de cobrança podem:

- Atualizar ou fazer downgrade da conta
- Adicionar, atualizar ou remover formas de pagamento
- Exibir o histórico de pagamentos
- Baixar recibos
- Exibir, convidar e remover gerentes de cobrança

Além disso, todos os gerentes de cobrança receberão recibos de cobrança por e-mail na data de cobrança da organização.

Os gerentes de cobrança **não** podem:

- Criar ou acessar repositórios nas suas organizações
- Ver integrantes privados da sua organização
- Ser vistos na lista de integrantes da organização
- Comprar, editar ou cancelar assinaturas para aplicativos do {% data variables.product.prodname_marketplace %}

{% tip %}

**Dica:** se sua organização [exigir que integrantes, gerentes de cobrança e colaboradores externos usem a autenticação de dois fatores](/articles/requiring-two-factor-authentication-in-your-organization), o usuário deverá habilitar a autenticação de dois fatores antes de aceitar o convite para se tornar um gerente de cobrança da organização.

{% endtip %}

### Convidar um gerente de cobrança

A pessoa convidada receberá um e-mail de convite solicitando que ela se torne um gerente de cobrança da sua organização. Assim que a pessoa convidada clicar no link de aceitação no e-mail de convite, ela será adicionada automaticamente à organização como um gerente de cobrança. Se ela ainda não tiver uma conta do GitHub, ela será direcionada para se inscrever em uma, e será adicionada automaticamente à organização como um gerente de cobrança depois que ela criar uma conta.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
5. Ao lado de Billing managers (Gerentes de cobrança), clique em **Add a billing manager** (Adicionar um gerente de cobrança). ![Convidar gerente de cobrança](/assets/images/help/billing/settings_billing_managers_list.png)
6. Digite o nome de usuário ou endereço de e-mail da pessoa que deseja adicionar e clique em **Send invitation** (Enviar convite). ![Página para convidar gerente de cobrança](/assets/images/help/billing/billing_manager_invite.png)
