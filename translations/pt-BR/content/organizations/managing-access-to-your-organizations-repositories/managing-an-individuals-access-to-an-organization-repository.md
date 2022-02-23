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
shortTitle: Gerenciar acesso individual
permissions: People with admin access to a repository can manage access to the repository.
---

## Sobre acesso aos repositórios da organização

Ao remover um colaborador de um repositório de sua organização, o colaborador perde os acessos de leitura e gravação no repositório. Caso o repositório seja privado e o colaborador o tenha bifurcado, a bifurcação também é excluída, mas o colaborador ainda manterá quaisquer clones locais de seu repositório.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5974 %}
## Gerenciar o acesso de um indivíduo a um repositório da organização
Você pode dar a uma pessoa acesso a um repositório ou alterar o nível de acesso de uma pessoa a um repositório nas configurações do repositório. Para obter mais informações, consulte "[Gerenciar equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository). "
{% else %}
## Concedendo acesso a uma pessoa a um repositório

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
1. No campo de busca, comece a digitar o nome da pessoa para convidar e, em seguida, clique em um nome na lista de correspondências. ![Campo de pesquisa para digitar o nome de uma equipe ou pessoa para convidar ao repositório](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Em "Escolher uma função ", selecione a função do repositório para atribuir a pessoa e, em seguida, clique em **Adicionar NOME ao REPOSITÓRIO**. ![Selecionando permissões para a equipe ou pessoa](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

## Gerenciar o acesso de um indivíduo a um repositório da organização

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Cloque em **Members** (Integrantes) ou **Outside collaborators** (Colaboradores externos) para gerenciar pessoas com tipos diferentes de acessos. ![Botão para invite (convidar) members (colaboradores) ou outside collaborators (colaboradores externos) para uma organização](/assets/images/help/organizations/select-outside-collaborators.png)
5. À direita do nome do colaborador que deseja remover, use o menu suspenso {% octicon "gear" aria-label="The Settings gear" %} e clique em **Manage** (Gerenciar). ![Link para manage access (gerenciar acesso)](/assets/images/help/organizations/member-manage-access.png)
6. Na página "Manage access" (Gerenciar acesso), ao lado do repositório clique em **Manage access** (Gerenciar acesso). ![Botão Manage access (Gerenciar acesso) em um repositório](/assets/images/help/organizations/repository-manage-access.png)
7. Revise o acesso da pessoa em determinado repositório, por exemplo, se a pessoa é um colaborador ou tem acesso ao repositório como integrante de equipe. ![Matriz de acesso a repositório para o usuário](/assets/images/help/organizations/repository-access-matrix-for-user.png)
{% endif %}
## Leia mais

{% ifversion fpt or ghec %}- "[Restringir interações no repositório](/articles/limiting-interactions-with-your-repository)"{% endif %}
- "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)"
