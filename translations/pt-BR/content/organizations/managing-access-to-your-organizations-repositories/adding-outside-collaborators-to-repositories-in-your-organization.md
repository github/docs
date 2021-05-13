---
title: Adicionar colaboradores externos a repositórios em sua organização
intro: 'Um *colaborador externo* é uma pessoa que não é explicitamente um integrante da sua organização, mas que tem permissões de Gravação, Leitura ou de Administrador para um ou vários repositórios da organização.'
redirect_from:
  - /articles/adding-outside-collaborators-to-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/adding-outside-collaborators-to-repositories-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

O {% data reusables.organizations.owners-and-admins-can %} adiciona colaboradores externos em um repositório, a menos que o proprietário da organização tenha restringido a possibilidade de convidar colaboradores. Para obter mais informações, consulte "[Configurar permissões para adicionar colaboradores externos](/articles/setting-permissions-for-adding-outside-collaborators)".

{% data reusables.organizations.outside-collaborators-use-seats %}

{% if currentVersion != "github-ae@latest" %}
Se sua organização [exigir que integrantes e colaboradores externos usem a autenticação de dois fatores](/articles/requiring-two-factor-authentication-in-your-organization), eles deverão habilitar a autenticação de dois fatores antes de aceitar seu convite para colaborar no repositório de uma organização.
{% endif %}

{% data reusables.organizations.outside_collaborator_forks %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
{% data reusables.organizations.invite-teams-or-people %}
5. No campo de pesquisa, comece a digitar o nome da pessoa que deseja convidar e, em seguida, clique em um nome na lista de correspondências. ![Campo de pesquisa para digitar o nome de uma pessoa para convidar para o repositório](/assets/images/help/repository/manage-access-invite-search-field.png)
6. Em "Escolher uma função", selecione as permissões a serem concedidas à pessoa e, em seguida, clique em **Adicionar NOME ao REPOSITÓRIO**. ![Selecionar permissões para a pessoa](/assets/images/help/repository/manage-access-invite-choose-role-add.png)
{% else %}
5. Na barra lateral esquerda, clique em **Collaborators & teams** (Colaboradores e equipes). ![Barra lateral de configurações do repositório com destaque para Collaborators & teams (Colaboradores e equipes)](/assets/images/help/repository/org-repo-settings-collaborators-and-teams.png)
6. Em "Collaborators" (Colaboradores), digite o nome da pessoa à qual deseja conceder acesso ao repositório e clique em **Add collaborator** (Adicionar colaborador). ![A seção Collaborators (Colaboradores) com o nome de usuário Octocat inserido no campo de pesquisa](/assets/images/help/repository/org-repo-collaborators-find-name.png)
7. Ao lado do nome do novo colaborador, escolha o nível de permissão apropriado: *Gravação*, *Leitura* ou *Administrador*. ![O selecionador de permissões do repositório](/assets/images/help/repository/org-repo-collaborators-choose-permissions.png)
{% endif %}

### Leia mais

- "[Converter um integrante da organização em colaborador externo](/articles/converting-an-organization-member-to-an-outside-collaborator)"
- "[Remover um colaborador externo de um repositório da organização](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
