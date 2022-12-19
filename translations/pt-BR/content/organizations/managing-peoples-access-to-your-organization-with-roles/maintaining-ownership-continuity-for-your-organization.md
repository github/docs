---
title: Manter a continuidade da propriedade para sua organização
intro: As organizações podem ter mais de um proprietário para evitar intermitências de propriedade.
redirect_from:
  - /articles/changing-a-person-s-role-to-owner
  - /articles/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/changing-a-persons-role-to-owner
  - /github/setting-up-and-managing-organizations-and-teams/managing-ownership-continuity-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization
permissions: Organization owners can promote any member of an organization to an organization owner.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Maintain ownership continuity
ms.openlocfilehash: 636982e8985a79e617b01220df8a63256c874b70
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179556'
---
## Sobre a manutenção da continuidade da propriedade da sua organização

{% data reusables.organizations.org-ownership-recommendation %}

Os proprietários da organização têm pleno acesso administrativo à organização. {% data reusables.organizations.new-org-permissions-more-info %}

{% note %}

**Observação**: como proprietário de uma organização, você pode alterar a função de outros membros e proprietários da organização. Você não pode mudar a sua própria função. 

{% endnote %}

{% ifversion enterprise-owner-join-org %} Se a organização pertencer a uma conta empresarial, qualquer proprietário da empresa poderá se tornar um proprietário da organização. Para obter mais informações, confira "[Como gerenciar sua função em uma organização pertencente à sua empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".
{% endif %}

## Designar um proprietário da organização

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Selecione a(s) pessoa(s) que deseja promover a proprietário.
  ![Lista de membros com dois membros selecionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Acima da lista de membros, use o menu suspenso e clique em **Alterar função**.
  ![Menu suspenso com a opção para remover membros](/assets/images/help/teams/user-bulk-management-options.png)
6. Selecione uma nova função para as pessoas e clique em **Alterar função**.
  ![Botões de opção com as funções proprietário e membro e botão Alterar função](/assets/images/help/teams/select-and-confirm-new-role-bulk.png)
