---
title: Gerenciando equipes e pessoas com acesso ao seu repositório
intro: Você pode ver todos os que têm acesso ao seu repositório e ajustar as permissões.
permissions: Repository administrators can manage teams and people with access to a repository.
redirect_from:
  - /github/administering-a-repository/managing-people-and-teams-with-access-to-your-repository
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

### Sobre gerenciar o acesso ao seu repositório

Para cada repositório que você administra no {% data variables.product.prodname_dotcom %}, você pode ter uma visão geral de cada equipe ou pessoa com acesso ao repositório. A partir da visão geral, você também pode convidar novas equipes ou pessoas, alterar as permissões de cada equipe ou pessoa ou remover o acesso ao repositório.

Esta visão geral pode ajudá-lo a auditar o acesso ao seu repositório, incluir ou excluir funcionários ou colaboradores, e responder efetivamente aos incidentes de segurança.

Para obter mais informações, consulte "[Níveis de permissão para um repositório de conta de usuário](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository)" e "[Níveis de permissão de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization)".

![Acessar visão geral do gerenciamento ](/assets/images/help/repository/manage-access-overview.png)

### Filtrando a lista de equipes e pessoas

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Em "Gerenciar acesso", no campo de busca, comece a digitar o nome da equipe ou pessoa que você gostaria de encontrar. ![Campo de busca para lista de filtros de equipes ou pessoas com acesso](/assets/images/help/repository/manage-access-filter.png)

### Alterando as permissões para uma equipe ou pessoa

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Em "Gerenciar acesso", localize a equipe ou pessoa cujas permissões você gostaria de alterar, em seguida, use o menu suspenso da **Função** para selecionar novas permissões. ![Usando a "Função" menu suspenso para selecionar novas permissões para uma equipe ou pessoa](/assets/images/help/repository/manage-access-role-drop-down.png)

### Convidando uma equipe ou pessoa

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. No campo de busca, comece a digitar o nome da equipe ou pessoa para convidar, depois clique em um nome na lista de correspondências. ![Campo de pesquisa para digitar o nome de uma equipe ou pessoa para convidar ao repositório](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Em "Escolher uma função", selecione as permissões a conceder à equipe ou pessoa e, em seguida, clique em **Adicionar um NOME ao REPOSITÓRIO**. ![Selecionando permissões para a equipe ou pessoa](/assets/images/help/repository/manage-access-invite-choose-role-add.png)

### Removendo acesso de uma equipe ou pessoa

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-manage-access %}
4. Em "Gerenciar acesso", localize a equipe ou pessoa cujo acesso você deseja remover e clique em {% octicon "trashcan" aria-label="The trashcan icon" %}. ![Ícone da lixeira para remover acesso](/assets/images/help/repository/manage-access-remove.png)

### Leia mais

- "[Definir a visibilidade de um repositório](/github/administering-a-repository/setting-repository-visibility)"
- "[Configurando permissões de base para uma organização](/organizations/managing-access-to-your-organizations-repositories/setting-base-permissions-for-an-organization)"
