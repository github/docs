---
title: Restaurando uma organização excluída
intro: 'Você pode restaurar parcialmente uma organização que foi anteriormente excluída em {% data variables.product.product_location %}.'
versions:
  ghes: '*'
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Restore organization
permissions: 'Site administers can restore an organization on {% data variables.product.product_name %}.'
ms.openlocfilehash: 1963b1e55a9c8047c19bafd087162caa8d5085f2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147063751'
---
## Sobre a restauração da organização

Use o painel de administração do site para restaurar uma organização que foi excluída no {% data variables.product.product_location %}, desde que os índices do Elasticsearch do log de auditoria contenham os dados do evento `org.delete`.

Imediatamente após restaurar uma organização, ela não será exatamente a mesma que era antes da exclusão. Você tem que restaurar manualmente os repositórios que pertenciam à organização. Para obter mais informações, confira "[Como restaurar um repositório excluído](/admin/user-management/managing-repositories-in-your-enterprise/restoring-a-deleted-repository)".

Você também pode utilizar o log de auditoria para ajudar você a readicionar as equipes manualmente e os integrantes da organização. Para obter mais informações, confira "[Como restaurar membros e equipes](#restoring-members-and-teams)".

## Restaurando uma organização

{% data reusables.enterprise_site_admin_settings.access-settings %}
1. Em "Pesquisar usuários, organizações, empresas, equipes, repositórios, gists e aplicativos", pesquise pela organização.

  ![Captura de tela do campo de busca e botão Pesquisar](/assets/images/enterprise/stafftools/search-field.png)

1. Em "Contas excluídas", à direita da organização que deseja restaurar, selecione o menu suspenso {% octicon "kebab-horizontal" aria-label="The edit icon" %} e clique em **Recriar**.

   ![Captura de tela do menu suspenso para uma organização excluída](/assets/images/enterprise/stafftools/recreate-organization.png)

## Restaurando integrantes e equipes

Você pode usar o log de auditoria para encontrar uma lista dos integrantes e equipes anteriores da organização e, em seguida, recriá-los manualmente. Para obter mais informações sobre como usar o log de auditoria, confira "[Como auditar os usuários em toda a empresa](/admin/user-management/managing-users-in-your-enterprise/auditing-users-across-your-enterprise)".

Em todas as frases de pesquisa abaixo, substitua ORGANIZAÇÃO pelo nome da organização e EQUIPE pelo nome da equipe.

### Restaurando integrantes da organização

1. Para localizar todos os usuários que foram adicionados e removidos da organização, pesquise `action:org.add_member org:ORGANIZATION` e `action:org.remove_member org:ORGANIZATION` no log de auditoria.
1. Adicione manualmente à organização cada usuário que ainda deve ser um integrante. Para obter mais informações, confira "[Como adicionar pessoas à sua organização](/organizations/managing-membership-in-your-organization/adding-people-to-your-organization)".

### Restaurando equipes

1. Para localizar cada nome de equipe, pesquise `action:team.create org:ORGANIZATION` no log de auditoria.
1. Recrie a equipe manualmente. Para obter mais informações, confira "[Como criar uma equipe](/organizations/organizing-members-into-teams/creating-a-team)".
1. Para localizar os membros que foram adicionados a cada equipe, pesquise `action:team.add_member team:"ORGANIZATION/TEAM"`.
1. Adicionar manualmente os integrantes da equipe. Para obter mais informações, confira "[Como adicionar membros da organização a uma equipe](/organizations/organizing-members-into-teams/adding-organization-members-to-a-team)".
1. Para localizar os repositórios aos quais a equipe recebeu acesso, pesquise `action:team.add_repository team:"ORGANIZATION/TEAM"`.
1. Para localizar o nível de acesso que a equipe recebeu para cada repositório, pesquise `action:team.update_repository_permission team:"ORGANIZATION/TEAM"`.
1. Dê acesso manual à equipe novamente. Para obter mais informações, confira "[Como gerenciar o acesso da equipe a um repositório da organização](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".
