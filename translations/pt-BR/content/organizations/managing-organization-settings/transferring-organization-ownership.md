---
title: Transferir a propriedade da organização
intro: 'Para tornar outra pessoa o proprietário de uma conta da organização, você deverá adicionar um novo proprietário{% ifversion fpt or ghec %}, garantir que as informações de cobrança estejam atualizadas{% endif %} e, em seguida, remover-se da conta.'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
ms.openlocfilehash: 2605af47d008eff7ee786d80f64142a267676ee1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145065456'
---
{% ifversion ghec %} {% note %}

**Observação:** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. Se você for o único membro com privilégios de *proprietário*, dê a outro membro da organização a função de proprietário. Para obter mais informações, confira "[Como nomear um proprietário da organização](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)".
2. Entre em contato com o novo proprietário e verifique se ele pode [acessar as configurações da organização](/articles/accessing-your-organization-s-settings).
{% ifversion fpt or ghec %}
3. Se, atualmente, você for responsável por pagar pelo GitHub na sua organização, também precisará solicitar ao novo proprietário ou a um [gerente de cobrança](/articles/adding-a-billing-manager-to-your-organization/) que atualize as informações de pagamento da organização. Para obter mais informações, confira "[Como adicionar ou editar uma forma de pagamento](/articles/adding-or-editing-a-payment-method)".

  {% warning %}

  **Aviso**: se você se remover da organização, isso **não** atualizará as informações de cobrança registradas para a conta da organização. O novo proprietário ou um gerente de cobrança deve atualizar as informações de cobrança no arquivo para apagar suas informações de cartão de crédito ou PayPal.

  {% endwarning %}

{% endif %}
4. [Remova-se](/articles/removing-yourself-from-an-organization) da organização.
