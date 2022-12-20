---
title: Remover um colaborador externo do repositório da organização
intro: Os proprietários e administradores do repositório podem remover o acesso de um colaborador externo a um repositório.
redirect_from:
- /articles/removing-an-outside-collaborator-from-an-organization-repository
- /github/setting-up-and-managing-organizations-and-teams/removing-an-outside-collaborator-from-an-organization-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Remove collaborator
ms.openlocfilehash: 71c8017b79425570e4ee7c2d2c7d3ac695c5c531
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145126444"
---
{% ifversion fpt or ghec %}

{% warning %}

**Aviso:**
- Ao remover um colaborador externo de um repositório privado, a contagem de licenças pagas não faz o downgrade automaticamente. Para pagar menos licenças depois de remover usuários da sua organização, siga as etapas descritas em "[Como fazer downgrade das estações pagas da sua organização](/articles/downgrading-your-organization-s-paid-seats)".

- Você é responsável por garantir que as pessoas que perderam o acesso a um repositório excluam qualquer informação confidencial ou de propriedade intelectual.

{% endwarning %}

{% endif %}

Apesar de as bifurcações de repositórios privados serem excluídas quando um colaborador é removido, o colaborador mantém todos os clones locais do seu repositório.

## Remover colaboradores externos de todos os repositórios da organização

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. Selecione um ou mais colaboradores externos que deseja remover da organização.
![Lista de colaboradores externos com dois colaboradores selecionados](/assets/images/help/teams/list-of-outside-collaborators-selected-bulk.png)
6. Acima da lista de colaboradores externos, use o menu suspenso e clique em **Remover de todos os repositórios**.
![Menu suspenso com a opção para remover colaboradores externos](/assets/images/help/teams/user-bulk-management-options-for-outside-collaborators.png)
7. Revise os colaboradores externos que serão removidos da organização e clique em **Remover colaboradores externos**.
  ![Lista de colaboradores externos que serão removidos e botão Remover colaboradores externos](/assets/images/help/teams/confirm-remove-outside-collaborators-bulk.png)

## Remover um colaborador externo de um repositório específico na organização

Se você desejar remover um colaborador externo de repositórios específicos na organização, poderá remover o acesso desse usuário a um determinado repositório por vez.

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people_tab_outside_collaborators %}
5. À direita do nome de usuário do colaborador que você deseja remover, use o menu suspenso {% octicon "gear" aria-label="The Settings gear" %} e clique em **Gerenciar**.
  ![Botão Gerenciar o acesso](/assets/images/help/organizations/member-manage-access.png)
6. À direita do repositório do qual você deseja remover o colaborador externo, clique em **Gerenciar o acesso**.
![Seleção do botão Gerenciar o acesso ao lado do repositório ao qual o colaborador externo tem acesso](/assets/images/help/organizations/second-manage-access-selection-for-collaborator.png)
7. Para remover por completo o acesso do colaborador externo ao repositório, clique em **Remover o acesso a este repositório** no canto superior direito.
![Botão Remover o acesso a este repositório](/assets/images/help/organizations/remove-access-to-this-repository.png)
8. Para confirmar, clique em **Remover o acesso**.
![Confirmar o colaborador externo que será removido do repositório](/assets/images/help/teams/confirm-remove-outside-collaborator-from-a-repository.png)

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Você também pode remover um colaborador externo de um repositório na visão geral de acesso nas configurações do repositório. Para obter mais informações, confira "[Como gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#removing-access-for-a-team-or-person)".
{% endif %}
## Leitura adicional

- "[Como adicionar colaboradores externos a repositórios na sua organização](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Como converter um membro da organização em um colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
