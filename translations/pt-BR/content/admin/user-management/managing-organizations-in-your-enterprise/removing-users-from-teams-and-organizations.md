---
title: Remover usuários de equipes e organizações
intro: 'Se algum integrante da organização não precisar mais de acesso a determinados repositórios, você poderá removê-lo da equipe que concede esse acesso. Se um integrante não precisar mais acessar os repositórios pertencentes à organização, você poderá removê-lo da organização.'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
  - /admin/user-management/removing-users-from-teams-and-organizations
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - Enterprise
  - Teams
shortTitle: Remove user membership
ms.openlocfilehash: 575cc032786b2bbbf264104002f503b5061df8e6
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145094872'
---
Somente proprietários ou administradores de equipe podem remover integrantes da organização. Quando um usuário é removido de uma equipe ou organização, seus problemas, pull requests e comentários nos repositórios da organização continuam intactos e atribuídos a ele.

{% warning %}

**Aviso**: quando você remove um usuário de uma organização, ele perde o acesso a todos os forks privados que ele tem dos **repositórios privados** da sua organização. Ele ainda terá acesso às cópias locais dessas bifurcações, mas não conseguirá sincronizá-las com os repositórios da organização. Você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual. Se o usuário removido da sua organização era membro da organização, o acesso dele aos forks privados de repositórios da organização poderá ser restaurado se o usuário for [reintegrado como membro da organização](/articles/reinstating-a-former-member-of-your-organization) em até três meses após ele ser removido de uma organização.

{% endwarning %}

## Remover um integrante da equipe

{% ifversion ghes %}

{% warning %}

**Observação:** {% data reusables.enterprise_management_console.badge_indicator %}

Para remover um integrante de uma equipe sincronizada com um grupo LDAP, entre em contato com o administrador LDAP.

{% endwarning %}

{% endif %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
4. Selecione um ou mais integrantes que deseja remover.
![Caixa de seleção ao lado do membro de organização](/assets/images/help/teams/team-member-check-box.png)
5. Acima da lista de membros da equipe, use o menu suspenso e clique em **Remover da equipe**.
![Menu suspenso com a opção para alterar a função](/assets/images/help/teams/bulk-edit-drop-down.png)

## Remover um usuário da organização

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Clique na caixa de seleção ao lado do nome dos usuários que você pretende remover.
![Caixa de seleção Remover usuário](/assets/images/help/organizations/Organization-remove-user.png)
5. Na parte superior da página, abaixo do nome da organização, clique em **Remover da organização**.
![Botão Remover da organização](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
