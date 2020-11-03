---
title: Restringir as alterações de visibilidade de repositório na organização
intro: 'Para proteger os dados da organização, você pode configurar as permissões de alteração da visibilidade do repositório na organização.'
redirect_from:
  - /articles/restricting-repository-visibility-changes-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Você pode restringir a capacidade de alterar a visibilidade do repositório aos proprietários da organização ou permitir que integrantes com privilégios de administrador em um repositório também alterem a visibilidade do repositório.

{% warning %}

**Aviso**: Se habilitada, esta configuração permite que pessoas com permissões de administrador alterem um repositório existente para qualquer visibilidade, mesmo que você não permita que esse tipo de repositório seja criado. Para obter mais informações sobre restringir a visibilidade de repositórios existentes durante a criação, consulte "[Restringindo a criação do repositório na sua organização](/articles/restricting-repository-creation-in-your-organization)".

{% endwarning %}


{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Repository visibility change" (Alteração da visibilidade do repositório), desmarque a opção **Allow members to change repository visibilities for this organization** (Permitir que os integrantes alterem a visibilidade dos repositórios nesta organização). ![Caixa de seleção para permitir que os integrantes alterem a visibilidade dos repositórios](/assets/images/help/organizations/disallow-members-to-change-repo-visibility.png)
6. Clique em **Salvar**.
