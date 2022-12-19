---
title: Adicionar colaboradores externos a repositórios em sua organização
intro: Você pode permitir que as pessoas que não são integrantes da sua organização acessem repositórios pertencentes à sua organização.
redirect_from:
- /articles/adding-outside-collaborators-to-repositories-in-your-organization
- /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Organizations
- Teams
shortTitle: Add outside collaborator
permissions: People with admin access to a repository can add an outside collaborator to the repository.
ms.openlocfilehash: caac79aba845f433effd3a3461e739d07cee135b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145126461"
---
## Sobre colaboradores externos

Um colaborador externo é uma pessoa que não é integrante da sua organização, mas tem acesso a um ou mais repositórios da sua organização. Você pode escolher o nível de acesso a cada colaborador externo. {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %} As organizações que usam o {% data variables.product.prodname_ghe_cloud %} podem restringir a capacidade de convidar colaboradores. Para obter mais informações, confira "[Como configurar permissões para adicionar colaboradores externos](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)" na documentação do {% data variables.product.prodname_ghe_cloud %}.
{% else %} Um proprietário da organização pode restringir a capacidade de convidar colaboradores. Para obter mais informações, confira "[Como definir permissões para adicionar colaboradores externos](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)".
{% endif %}

{% ifversion ghes %} Para adicionar alguém como um colaborador externo em um repositório, a pessoa precisa ter uma conta pessoal no {% data variables.product.product_location %}. Se a empresa usa um sistema de autenticação externa, como SAML ou LDAP, a pessoa que você deseja adicionar deverá efetuar o login por meio desse sistema para criar uma conta. Se a pessoa não tiver acesso ao sistema de autenticação e a autenticação interna estiver habilitada para a sua empresa, um administrador do site poderá criar uma conta para a pessoa. Para obter mais informações, veja "[Configurar a autenticação interna](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)".
{% endif %}

{% ifversion not ghae %} Se a sua organização exigir a autenticação de dois fatores, todos os colaboradores externos precisarão habilitar a autenticação de dois fatores antes de aceitar o convite para colaborar em um repositório. Para obter mais informações, confira "[Como exigir a autenticação de dois fatores na sua organização](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)".
{% endif %}

## Adicionando colaboradores externos a um repositório

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %} Você pode permitir aos colaboradores externos acesso em um repositório nas configurações do repositório. Para obter mais informações, confira "[Como gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person)". {% else %} {% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
5. Na barra lateral esquerda, clique em **Colaboradores e equipes**.
  ![Barra lateral das configurações do repositório com a opção Colaboradores e equipes realçada](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. Em "Colaboradores", digite o nome da pessoa à qual você deseja dar acesso ao repositório e clique em **Adicionar colaborador**.
![A seção Colaboradores com o nome de usuário do Octocat inserido no campo de pesquisa](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. Ao lado do nome do novo colaborador, use o menu suspenso e selecione o nível de acesso apropriado.
![O seletor de permissões do repositório](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png) {% endif %}
