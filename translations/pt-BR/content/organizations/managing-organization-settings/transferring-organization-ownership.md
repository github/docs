---
title: Transferir a propriedade da organização
intro: 'Para tornar outra pessoa a proprietária de uma conta da organização, é preciso adicionar um novo proprietário{% ifversion fpt %}, verificar se as informações de cobrança estão atualizadas{% endif %} e remover a si mesmo da conta.'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else/
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transferir propriedade
---

{% ifversion fpt %}
{% note %}

**Observação:** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. Caso você seja o único integrante com privilégios de *proprietário*, atribua a função de proprietário a outro integrante da organização. Para obter mais informações, consulte "[Designar um proprietário da organização](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)".
2. Entre em contato com o novo proprietário e verifique se ele consegue [acessar as configurações da organização](/articles/accessing-your-organization-s-settings).
{% ifversion fpt %}
3. Se você é o atual responsável pelo pagamento do GitHub na organização, também precisará pedir ao novo proprietário ou a um [gerente de cobrança](/articles/adding-a-billing-manager-to-your-organization/) que atualize as informações de pagamento da organização. Para obter mais informações, consulte "[Adicionar ou editar forma de pagamento](/articles/adding-or-editing-a-payment-method)".

  {% warning %}

  **Aviso**: remover a si mesmo da organização **não** atualiza as informações de cobrança no arquivo referentes à conta da organização. O novo proprietário ou um gerente de cobrança deve atualizar as informações de cobrança no arquivo para apagar suas informações de cartão de crédito ou PayPal.

  {% endwarning %}

{% endif %}
4. [Remova a si mesmo](/articles/removing-yourself-from-an-organization) da organização.
