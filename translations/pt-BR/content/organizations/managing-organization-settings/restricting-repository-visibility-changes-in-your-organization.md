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

É possível restringir quem tem a capacidade de alterar a visibilidade dos repositórios na organização, como a alteração de um repositório privado para público. Para obter mais informações sobre a visibilidade do repositório, consulte "[Sobre repositórios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Você pode restringir a capacidade de alterar a visibilidade do repositório apenas para os proprietários da organização ou você pode permitir que qualquer pessoa com acesso de administrador a um repositório altere a visibilidade.

{% warning %}

**Aviso**: Se habilitada, esta configuração permite que pessoas com acesso de administrador escolham qualquer visibilidade de um repositório existente, mesmo que você não permita que esse tipo de repositório seja criado. Para obter mais informações sobre restringir a visibilidade de repositórios existentes durante a criação, consulte "[Restringindo a criação do repositório na sua organização](/articles/restricting-repository-creation-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Repository visibility change" (Alteração da visibilidade do repositório), desmarque a opção **Allow members to change repository visibilities for this organization** (Permitir que os integrantes alterem a visibilidade dos repositórios nesta organização). ![Caixa de seleção para permitir que os integrantes alterem a visibilidade dos repositórios](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Clique em **Salvar**.
