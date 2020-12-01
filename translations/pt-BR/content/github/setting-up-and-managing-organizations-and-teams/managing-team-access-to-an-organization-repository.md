---
title: Gerenciar o acesso da equipe em um repositório da organização
intro: 'Você pode conceder e remover o acesso da equipe a um repositório ou mudar o nível de permissão dela no repositório.'
redirect_from:
  - /articles/managing-team-access-to-an-organization-repository-early-access-program/
  - /articles/managing-team-access-to-an-organization-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Pessoas com acesso de administrador a um repositório podem gerenciar o acesso de equipes ao repositório. Mantenedores de equipes podem remover o acesso de uma equipe a um repositório.

{% warning %}

**Avisos:**
- Você pode alterar os níveis de permissões de uma equipe se a equipe tiver acesso direto a um repositório. Se o acesso da equipe ao repositório é herança de uma equipe principal, você deve alterar o acesso da equipe principal ao repositório.
- Se você adicionar ou remover acesso de uma equipe principal ao repositório, cada uma das equipes secundárias da equipe principal também receberá ou perderá o acesso ao repositório. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams)".

{% endwarning %}

### Conceder a uma equipe acesso a um repositório

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. Acima da lista de repositórios, clique em **Add repository** (Adicionar repositório). ![Botão Add repository (Adicionar repositório)](/assets/images/help/organizations/add-repositories-button.png)
6. Digite o nome de um repositório e clique em **Add repository to team** (Adicionar repositório a uma equipe). ![Campo de pesquisa Repository (Repositório)](/assets/images/help/organizations/team-repositories-add.png)
7. Como opção, use o menu suspenso à direita do nome do repositório e escolha um nível de permissão diferente para a equipe. ![Menu suspenso Repository access level (Nível de acesso ao repositório)](/assets/images/help/organizations/team-repositories-change-permission-level.png)

### Remover acesso de uma equipe a um repositório

Você pode remover o acesso de uma equipe a um repositório se a equipe tiver acesso direto a ele. Se o acesso da equipe ao repositório é herdado de uma equipe principal, você deve remover o repositório da equipe principal para remover o repositório das equipes secundárias.

{% data reusables.repositories.deleted_forks_from_private_repositories_warning %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team-repositories-tab %}
5. Selecione o repositório ou repositórios que deseja remover da equipe. ![Lista de repositórios de equipes com as caixas de seleção para alguns repositórios selecionadas](/assets/images/help/teams/select-team-repositories-bulk.png)
6. Acesse o menu suspenso acima da lista de repositórios e clique em **Remove from team** (Remover da equipe). ![Menu suspenso com a opção para Remove a repository from a team (Remover um repositório de uma equipe)](/assets/images/help/teams/remove-team-repo-dropdown.png)
7. Verifique o repositório ou repositórios que serão removidos da equipe e clique em **Remove repositories** (Remover repositórios). ![Caixa modal com uma lista de repositórios que a equipe não terá mais acesso](/assets/images/help/teams/confirm-remove-team-repos.png)

### Leia mais

- "[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)"
