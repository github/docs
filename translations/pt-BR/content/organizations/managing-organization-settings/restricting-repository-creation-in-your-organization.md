---
title: Restringir a criação de repositórios na organização
intro: 'Para proteger os dados da organização, você pode configurar as permissões de criação de repositórios na organização.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organizations
  - teams
---

Você pode escolher se os integrantes podem criar repositórios na sua organização. Se você permitir que os integrantes criem repositórios, você poderá escolher quais tipos de repositórios os integrantes poderão criar.{% if currentVersion == "free-pro-team@latest" %} Para permitir que os integrantes criem apenas repositórios privados, a sua organização deve usar {% data variables.product.prodname_ghe_cloud %}.{% endif %} Para obter mais informações, consulte "[Sobre a visibilidade do repositório](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

Os proprietários da organização sempre podem criar qualquer tipo de repositório.

{% if currentVersion == "free-pro-team@latest" %}Os proprietários da empresa{% else %}administradores do site{% endif %} podem restringir as opções disponíveis para você para a política de criação de repositório da sua organização. Para obter mais informações, consulte {% if currentVersion == "free-pro-team@latest" %}"[Aplicar políticas de gerenciamento do repositório na sua conta corporativa](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account).{% else %}"[Restringir a criação do repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% endif %}

{% warning %}

**Aviso**: Essa configuração restringe apenas as opções de visibilidade disponíveis quando os repositórios são criados e não restringe a capacidade de alterar a visibilidade do repositório mais tarde. Para obter mais informações sobre restringir alterações em visibilidades de repositórios existentes, consulte "[Restringindo alterações da visibilidade do repositório na sua organização](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)".

{% endwarning %}

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Criação do repositório", selecione uma ou mais opções. ![Opções de criação de repositório](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
6. Clique em **Salvar**.
