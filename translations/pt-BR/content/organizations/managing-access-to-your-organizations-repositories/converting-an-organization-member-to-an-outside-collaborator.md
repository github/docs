---
title: Converter um integrante da organização em colaborador externo
intro: 'Se um integrante atual da organização precisar de acesso apenas a determinados repositórios, como consultores ou funcionários temporários, você poderá convertê-lo em um *colaborador externo*.'
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

{% data reusables.organizations.owners-and-admins-can %} converter integrantes da organização em colaboradores externos.

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

Após conversão de um integrante da organização em um colaborador externo, ele só terá acesso aos repositórios que sua associação à equipe atual permitir. A pessoa não será mais um integrante explícito da organização e não poderá mais:

- Criar equipes
- Ver todos os integrantes e equipes da organização
- @mencionar qualquer equipe visível
- Seja um mantenedor de equipe

Para obter mais informações, consulte "[Níveis de permissão para uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization)".

Recomendamos rever o acesso dos membros da organização aos repositórios para garantir que seu o acesso seja como você espera. Para obter mais informações, consulte "[Gerenciar o acesso de um indivíduo ao repositório de uma organização](/articles/managing-an-individual-s-access-to-an-organization-repository)".

Ao converter um integrante da organização em um colaborador externo, seus privilégios como integrantes da organização serão salvos por três meses para que você possa restaurar seus privilégios de associação se você{% if currentVersion == "free-pro-team@latest" %} convidá-los a juntar-se novamente{% else %} adicione-os à{% endif %} sua organização nesse período de tempo. Para obter mais informações, consulte "[Restabelecer ex-integrantes da organização](/articles/reinstating-a-former-member-of-your-organization)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Selecione a(s) pessoa(s) que deseja converter em colaborador(es) externo(s). ![Lista de integrantes com dois integrantes selecionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Acima da lista de integrantes, use o menu suspenso e clique em **Convert to outside collaborator** (Converter em colaborador externo). ![Menu suspenso com opção para converter integrantes em colaboradores externos](/assets/images/help/teams/user-bulk-management-options.png)
6. Leia as informações sobre como converter integrantes em colaboradores externos e clique em **Convert to outside collaborator** (Converter em colaborador externo). ![Informações sobre permissões de colaboradores externos e botão Convert to outside collaborators (Converter em colaboradores externos)](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

### Leia mais

- "[Adicionar colaboradores externos a repositórios na sua organização](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Remover um colaborador externo de um repositório da organização](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
- "[Converter um colaborador externo em um integrante da organização](/articles/converting-an-outside-collaborator-to-an-organization-member)"
