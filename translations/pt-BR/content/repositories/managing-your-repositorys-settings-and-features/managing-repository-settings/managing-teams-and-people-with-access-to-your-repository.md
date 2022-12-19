---
title: Gerenciando equipes e pessoas com acesso ao seu repositório
intro: Você pode ver todos os que têm acesso ao seu repositório e ajustar as permissões.
permissions: People with admin access to a repository can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
  - /github/administering-a-repository/managing-teams-and-people-with-access-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '>= 3.4'
topics:
  - Repositories
shortTitle: Teams & people
ms.openlocfilehash: e378332dda56fad39b18fd10da4ee9bf799a9fe3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127021'
---
## Sobre gerenciamento de acesso para repositórios

Para cada repositório que você administra no {% data variables.product.prodname_dotcom %}, você pode ter uma visão geral de cada equipe ou pessoa com acesso ao repositório. Na visão geral, você também pode convidar novas equipes ou pessoas, alterar a função de cada equipe ou pessoa para o repositório ou remover o acesso ao repositório.

Esta visão geral pode ajudá-lo a auditar o acesso ao seu repositório, incluir ou excluir funcionários ou colaboradores, e responder efetivamente aos incidentes de segurança.

{% data reusables.organizations.mixed-roles-warning %}

Para obter mais informações sobre as funções de repositório, confira "[Níveis de permissão em um repositório da conta pessoal](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" e "[Funções de repositório em uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)".

![Acessar visão geral do gerenciamento](/assets/images/help/repository/manage-access-overview.png)

## Filtrando a lista de equipes e pessoas

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
1. Em "Gerenciar acesso", no campo de busca, comece a digitar o nome da equipe ou pessoa que você gostaria de encontrar. Opcionalmente, use os menus suspensos para filtrar sua pesquisa. 
  ![Campo de pesquisa usado para filtrar a lista de equipes ou pessoas com acesso](/assets/images/help/repository/manage-access-filter.png)

## Alterando as permissões para uma equipe ou pessoa

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. Em "Gerenciar acesso", encontre a equipe ou pessoa cuja função você gostaria de alterar. Em seguida, selecione a função suspensa e clique em uma nova função.
  ![Usando o menu suspenso "Função" para selecionar novas permissões para uma equipe ou uma pessoa](/assets/images/help/repository/manage-access-role-drop-down.png)

## Convidando uma equipe ou pessoa

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %} {% data reusables.organizations.invite-teams-or-people %}
5. No campo de busca, comece a digitar o nome da equipe ou pessoa para convidar, depois clique em um nome na lista de correspondências.
  ![Campo de pesquisa usado para digitar o nome de uma equipe ou uma pessoa para convite ao repositório](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Em "Escolher uma função", selecione a função de repositório a ser concedida à equipe ou à pessoa e clique em **Adicionar NAME ao REPOSITORY**.
  ![Seleção das permissões para a equipe ou a pessoa](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Removendo acesso de uma equipe ou pessoa

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %} {% data reusables.repositories.click-collaborators-teams %} {% else %} {% data reusables.repositories.navigate-to-manage-access %} {% endif %}
4. Em "Gerenciar acesso", localize a equipe ou a pessoa cujo acesso você deseja remover e clique em {% octicon "trash" aria-label="The trash icon" %}.
  ![ícone da lixeira para remover o acesso](/assets/images/help/repository/manage-access-remove.png)

## Leitura adicional

- "[Como definir a visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)"
- "[Como definir as permissões base de uma organização](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
