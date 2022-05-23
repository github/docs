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
shortTitle: Adicionar colaborador externo
permissions: People with admin access to a repository can add an outside collaborator to the repository.
---

## Sobre colaboradores externos

Um colaborador externo é uma pessoa que não é integrante da sua organização, mas tem acesso a um ou mais repositórios da sua organização. Você pode escolher o nível de acesso a cada colaborador externo. {% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.organizations.outside-collaborators-use-seats %}

{% ifversion fpt %}
As organizações que usam {% data variables.product.prodname_ghe_cloud %} podem restringir a capacidade de convidar colaboradores. Para obter mais informações, consulte "[Configurações de permissões para adicionar colaboradores externos](/enterprise-cloud@latest/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)" na documentação de {% data variables.product.prodname_ghe_cloud %}.
{% else %}
O proprietário da organização pode restringir a capacidade de convidar colaboradores. Para obter mais informações, consulte "[Configurar permissões para adicionar colaboradores externos](/organizations/managing-organization-settings/setting-permissions-for-adding-outside-collaborators)".
{% endif %}

{% ifversion ghes %}
Antes de adicionar alguém como colaborador externo em um repositório, a pessoa deve ter uma conta pessoal em {% data variables.product.product_location %}. Se a empresa usa um sistema de autenticação externa, como SAML ou LDAP, a pessoa que você deseja adicionar deverá efetuar o login por meio desse sistema para criar uma conta. Se a pessoa não tiver acesso ao sistema de autenticação e a autenticação integrada estiver habilitada para a sua empresa, um administrador do site poderá criar uma conta para a pessoa. Para obter mais informações, consulte "[onfigurando a autenticação integrada](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)".
{% endif %}

{% ifversion not ghae %}
Se a sua organização exigir a autenticação de dois fatores, todos os colaboradores externos deverão habilitar a autenticação de dois fatores antes de aceitar o convite para colaborar em um repositório. Para obter mais informações, consulte "[Exigir autenticação de dois fatores em sua organização](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/requiring-two-factor-authentication-in-your-organization)".
{% endif %}

## Adicionando colaboradores externos a um repositório

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
Você pode dar acesso de colaboradores externos a um repositório nas configurações do repositório. Para obter mais informações, consulte "[Gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository#inviting-a-team-or-person). "
{% else %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
5. Na barra lateral esquerda, clique em **Collaborators & teams** (Colaboradores e equipes). ![Barra lateral de configurações do repositório com colaboradores & equipes destacadas](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. Em "Colaboradores", digite o nome da pessoa à qual deseja conceder acesso ao repositório e clique em **Adicionar colaborador**. ![A seção Collaborators (Colaboradores) com o nome de usuário Octocat inserido no campo de pesquisa](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. Ao lado do nome do novo colaborador, use o menu suspenso e selecione o nível de acesso apropriado. ![O seletor de permissões do repositório](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}
