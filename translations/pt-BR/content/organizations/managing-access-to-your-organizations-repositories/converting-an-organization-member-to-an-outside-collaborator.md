---
title: Converter um integrante da organização em colaborador externo
intro: Se um membro atual da organização precisar de acesso apenas a determinados repositórios, como consultores ou funcionários temporários, você poderá convertê-los em colaboradores externos.
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
- /articles/converting-an-organization-member-to-an-outside-collaborator
- /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Convert member to collaborator
ms.openlocfilehash: 4b9330559895ec96cb6c842d89dbe4e9a8773685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146754595"
---
## Sobre conversão de membros da organização em colaboradores externos

Você pode converter um membro de uma organização em um colaborador externo. Para obter mais informações sobre colaboradores externos, confira "[Como adicionar colaboradores externos aos repositórios da sua organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

{% ifversion fpt or ghec %} Se a organização pertencer a uma empresa, a conversão{% elsif ghes or ghae %}Conversão{% endif %} de um membro da organização em um colaborador externo poderá ser restrita. Para obter mais informações, confira "[Como impor políticas de gerenciamento de repositório em sua empresa]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %}"{% elsif fpt %} na documentação do {% data variables.product.prodname_ghe_cloud %}. {% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

Após conversão de um integrante da organização em um colaborador externo, ele só terá acesso aos repositórios que sua associação à equipe atual permitir. A pessoa não será mais um integrante explícito da organização e não poderá mais:

- Criar equipes
- Ver todos os integrantes e equipes da organização
- @mention qualquer equipe visível
- Seja um mantenedor de equipe

Para obter mais informações, confira "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Recomendamos rever o acesso dos membros da organização aos repositórios para garantir que seu o acesso seja como você espera. Para obter mais informações, confira "[Como gerenciar o acesso de uma pessoa a um repositório da organização](/articles/managing-an-individual-s-access-to-an-organization-repository)".

Na conversão de um membro da organização em um colaborador externo, os privilégios dele como membro da organização ficam salvos por três meses, para que seja possível restaurar os privilégios de associação se você{% ifversion fpt or ghec %} convidá-lo para reingressar{% else %} adicioná-lo de volta{% endif %} na organização nesse período. Para obter mais informações, confira "[Como restabelecer um ex-membro da sua organização](/articles/reinstating-a-former-member-of-your-organization)".

## Converter um integrante da organização em colaborador externo

{% note %}

**Observação:** talvez você não consiga converter um membro da organização em um colaborador externo, se um proprietário da organização{% ifversion not fpt %} ou proprietário da empresa{% endif %} restringiu sua capacidade de adicionar colaboradores externos.

{% endnote %}

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Selecione a(s) pessoa(s) que deseja converter em colaborador(es) externo(s).
  ![Lista de membros com dois membros selecionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Acima da lista de membros, use o menu suspenso e clique em **Converter em colaborador externo**.
  ![Menu suspenso com a opção para converter membros em colaboradores externos](/assets/images/help/teams/user-bulk-management-options.png)
6. Leia as informações sobre como converter membros em colaboradores externos e clique em **Converter em colaborador externo**.
  ![Informações sobre permissões de colaboradores externos e botão Converter em colaboradores externos](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

## Leitura adicional

- "[Como adicionar colaboradores externos a repositórios na sua organização](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Como remover um colaborador externo de um repositório da organização](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
- "[Como converter um membro externo em um colaborador da organização](/articles/converting-an-outside-collaborator-to-an-organization-member)"
