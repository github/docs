---
title: Gerenciar o acesso de um indivíduo a um repositório da organização
intro: Você pode gerenciar o acesso de uma pessoa ao repositório de sua organização.
redirect_from:
- /articles/managing-an-individual-s-access-to-an-organization-repository-early-access-program
- /articles/managing-an-individual-s-access-to-an-organization-repository
- /articles/managing-an-individuals-access-to-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/managing-an-individuals-access-to-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Manage individual access
permissions: People with admin access to a repository can manage access to the repository.
ms.openlocfilehash: 90a9df66f0cd4089634b2d29dd798b37629bbb7b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145126456"
---
## Sobre acesso aos repositórios da organização

Ao remover um colaborador de um repositório de sua organização, o colaborador perde os acessos de leitura e gravação no repositório. Caso o repositório seja privado e o colaborador o tenha bifurcado, a bifurcação também é excluída, mas o colaborador ainda manterá quaisquer clones locais de seu repositório.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
## Gerenciar o acesso de um indivíduo a um repositório da organização
Você pode dar a uma pessoa acesso a um repositório ou alterar o nível de acesso de uma pessoa a um repositório nas configurações do repositório. Para obter mais informações, confira "[Como gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".
{% else %}
## Concedendo acesso a uma pessoa a um repositório

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-manage-access %} {% data reusables.organizations.invite-teams-or-people %}
1. No campo de busca, comece a digitar o nome da pessoa para convidar e, em seguida, clique em um nome na lista de correspondências.
  ![Campo de pesquisa usado para digitar o nome de uma equipe ou uma pessoa para convite ao repositório](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Em "Escolher uma função", selecione a função de repositório para atribuir à pessoa e clique em **Adicionar NAME ao REPOSITORY**.
  ![Seleção das permissões para a equipe ou a pessoa](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Gerenciar o acesso de um indivíduo a um repositório da organização

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Clique em **Membros** ou **Colaboradores externos** para gerenciar pessoas com diferentes tipos de acesso. ![Botão usado para convidar colaboradores ou colaboradores externos para uma organização](/assets/images/help/organizations/select-outside-collaborators.png)
5. À direita do nome da pessoa que você deseja gerenciar, use o menu suspenso {% octicon "gear" aria-label="The Settings gear" %} e clique em **Gerenciar**.
  ![Link Gerenciar acesso](/assets/images/help/organizations/member-manage-access.png)
6. Na página "Gerenciar acesso", ao lado do repositório, clique em **Gerenciar acesso**.
![Botão Gerenciar acesso de um repositório](/assets/images/help/organizations/repository-manage-access.png)
7. Revise o acesso da pessoa em determinado repositório, por exemplo, se a pessoa é um colaborador ou tem acesso ao repositório como integrante de equipe.
![Matriz de acesso do repositório para o usuário](/assets/images/help/organizations/repository-access-matrix-for-user.png) {% endif %}
## Leitura adicional

{% ifversion fpt or ghec %}– "[Como limitar as interações com o seu repositório](/articles/limiting-interactions-with-your-repository)"{% endif %}
- "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
