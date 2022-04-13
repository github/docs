---
title: Configurar permissões para adicionar colaboradores externos
intro: 'Para proteger os dados da organização e o o número de licenças pagas usadas, você pode permitir que somente proprietários convidem colaboradores externos para os repositórios da organização.'
redirect_from:
  - /articles/restricting-the-ability-to-add-outside-collaborators-to-organization-repositories
  - /articles/setting-permissions-for-adding-outside-collaborators
  - /github/setting-up-and-managing-organizations-and-teams/setting-permissions-for-adding-outside-collaborators
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Definir política de colaborador
---

Por padrão, qualquer pessoa com acesso de administrador a um repositório pode convidar colaboradores externos para trabalhar no repositório. Você pode optar por restringir a capacidade de convidar colaboradores externos apenas para os proprietários da organização.

{% ifversion ghec %}
{% note %}

**Observação:** Somente as organizações que usam {% data variables.product.prodname_ghe_cloud %} podem restringir a capacidade de convidar colaboradores externos para os proprietários da organização. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% ifversion ghec %}Se sua organização pertencer a uma conta corporativa, você{% else %}você{% endif %} não poderá definir essa configuração para sua organização, se um proprietário da empresa definiu uma política a nível da empresa. Para obter mais informações, consulte "[Aplicando políticas de gerenciamento de repositórios na sua empresa]{% ifversion ghec %}(/admin/policies/execuing-policies-por-sua-empresa-empresa/execução-repositório-gerenciamento-em-your-enterprise#enforcing-a-policy-for-inviting-collaborators-to-repositories)"{% else %}(/admin/polices/enforcing-polices-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositórios){% endif %}."

{% data reusables.organizations.outside-collaborators-use-seats %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Repository invitations" (Convites para o repositório), selecione **Allow members to invite outside collaborators to repositories for this organization** (Permitir que os integrantes convidem colaboradores externos aos repositórios desta organização). ![Caixa de seleção para permitir que os integrantes convidem colaboradores externos aos repositórios da organização](/assets/images/help/organizations/repo-invitations-checkbox-updated.png)
6. Clique em **Salvar**.
