---
title: Converter um integrante da organização em colaborador externo
intro: 'If a current member of your organization only needs access to certain repositories, such as consultants or temporary employees, you can convert them to an outside collaborator.'
permissions: Organization owners can convert an organization member to an outside collaborator.
redirect_from:
  - /articles/converting-an-organization-member-to-an-outside-collaborator
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-member-to-an-outside-collaborator
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Converter integrante em colaborador
---

## Sobre a conversão de integrantes da organização para colaboradores externos

You can convert a member of an organization to an outside collaborator. Para obter mais informações sobre colaboradores externos, consulte "[Adicionando colaboradores externos aos repositórios da organização](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)".

{% ifversion fpt or ghec %}If the organization is owned by an enterprise, converting{% elsif ghes or ghae %}Converting{% endif %} an organization member to an outside collaborator may be restricted. For more information, see "[Enforcing repository management policies in your enterprise]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-{% ifversion fpt or ghec %}outside-{% endif %}collaborators-to-repositories){% ifversion ghec or ghes or ghae %}."{% elsif fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

{% data reusables.organizations.outside-collaborators-use-seats %} {% data reusables.organizations.outside_collaborator_forks %}

Após conversão de um integrante da organização em um colaborador externo, ele só terá acesso aos repositórios que sua associação à equipe atual permitir. A pessoa não será mais um integrante explícito da organização e não poderá mais:

- Criar equipes
- Ver todos os integrantes e equipes da organização
- @mencionar qualquer equipe visível
- Seja um mantenedor de equipe

Para obter mais informações, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Recomendamos rever o acesso dos membros da organização aos repositórios para garantir que seu o acesso seja como você espera. Para obter mais informações, consulte "[Gerenciar o acesso de um indivíduo ao repositório de uma organização](/articles/managing-an-individual-s-access-to-an-organization-repository)".

When you convert an organization member to an outside collaborator, their privileges as organization members are saved for three months so that you can restore their membership privileges if you{% ifversion fpt or ghec %} invite them to rejoin{% else %} add them back to{% endif %} your organization within that time frame. Para obter mais informações, consulte "[Restabelecer ex-integrantes da organização](/articles/reinstating-a-former-member-of-your-organization)".

## Converter um integrante da organização em colaborador externo

{% note %}

**Observaçãp:** Talvez você não consiga converter um integrante da organização em um colaborador externo, se um proprietário da organização{% ifversion not fpt %} ou proprietário da empresa{% endif %} restringiu sua capacidade de adicionar colaboradores externos.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.user-settings.access_org %}
{% data reusables.organizations.people %}
4. Selecione a(s) pessoa(s) que deseja converter em colaborador(es) externo(s). ![Lista de integrantes com dois integrantes selecionados](/assets/images/help/teams/list-of-members-selected-bulk.png)
5. Acima da lista de integrantes, use o menu suspenso e clique em **Convert to outside collaborator** (Converter em colaborador externo). ![Menu suspenso com opção para converter integrantes em colaboradores externos](/assets/images/help/teams/user-bulk-management-options.png)
6. Leia as informações sobre como converter integrantes em colaboradores externos e clique em **Convert to outside collaborator** (Converter em colaborador externo). ![Informações sobre permissões de colaboradores externos e botão Convert to outside collaborators (Converter em colaboradores externos)](/assets/images/help/teams/confirm-outside-collaborator-bulk.png)

## Leia mais

- "[Adicionar colaboradores externos a repositórios na sua organização](/articles/adding-outside-collaborators-to-repositories-in-your-organization)"
- "[Remover um colaborador externo de um repositório da organização](/articles/removing-an-outside-collaborator-from-an-organization-repository)"
- "[Converter um colaborador externo em um integrante da organização](/articles/converting-an-outside-collaborator-to-an-organization-member)"
