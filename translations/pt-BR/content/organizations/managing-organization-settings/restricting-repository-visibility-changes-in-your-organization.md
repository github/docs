---
title: Restringir as alterações de visibilidade de repositório na organização
intro: 'Para proteger os dados da organização, você pode configurar as permissões de alteração da visibilidade do repositório na organização.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Definir política de alterações de visibilidade
permissions: Organization owners can restrict repository visibility changes for an organization.
---

You can restrict who has the ability to change the visibility of repositories in your organization, such as changing a repository from private to public. For more information about repository visibility, see "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)."

You can restrict the ability to change repository visibility to organization owners only, or you can allow anyone with admin access to a repository to change visibility.

{% warning %}

**Warning**: If enabled, this setting allows people with admin access to choose any visibility for an existing repository, even if you do not allow that type of repository to be created. Para obter mais informações sobre restringir a visibilidade de repositórios existentes durante a criação, consulte "[Restringindo a criação do repositório na sua organização](/articles/restricting-repository-creation-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Repository visibility change" (Alteração da visibilidade do repositório), desmarque a opção **Allow members to change repository visibilities for this organization** (Permitir que os integrantes alterem a visibilidade dos repositórios nesta organização). ![Caixa de seleção para permitir que os integrantes alterem a visibilidade dos repositórios](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Clique em **Salvar**.
