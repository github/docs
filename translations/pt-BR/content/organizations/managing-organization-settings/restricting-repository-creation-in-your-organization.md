---
title: Restringir a criação de repositórios na organização
intro: 'Para proteger os dados da organização, você pode configurar as permissões de criação de repositórios na organização.'
redirect_from:
  - /articles/restricting-repository-creation-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Restringir criação de repositório
---

Você pode escolher se os integrantes podem criar repositórios na sua organização. Se você permitir que os integrantes criem repositórios, você poderá escolher quais tipos de repositórios os integrantes poderão criar.{% ifversion fpt or ghec %} Para permitir que os integrantes criem apenas repositórios privados, a sua organização deve usar {% data variables.product.prodname_ghe_cloud %}.{% endif %}{% ifversion fpt %} Para obter mais informações, consulte "[Sobre repositórios](/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories)" na documentação de {% data variables.product.prodname_ghe_cloud %}{% endif %}.

Os proprietários da organização sempre podem criar qualquer tipo de repositório.
{% ifversion ghec or ghae or ghes %}
{% ifversion ghec or ghae %}Proprietários corporativos{% elsif ghes %}administradores do site{% endif %} podem restringir as opções que você tem disponíveis para a política de criação de repositório da sua organização.{% ifversion ghec or ghes or ghae %} Para obter mais informações, consulte "[Restringindo a criação de repositório na sua empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#setting-a-policy-for-repository-creation)."{% endif %}{% endif %}

{% warning %}

**Aviso**: Essa configuração restringe apenas as opções de visibilidade disponíveis quando os repositórios são criados e não restringe a capacidade de alterar a visibilidade do repositório mais tarde. Para obter mais informações sobre restringir alterações em visibilidades de repositórios existentes, consulte "[Restringindo alterações da visibilidade do repositório na sua organização](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)".

{% endwarning %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Em "Criação do repositório", selecione uma ou mais opções.

   {%- ifversion ghes or ghec or ghae %}
   ![Opções de criação de repositório](/assets/images/help/organizations/repo-creation-perms-radio-buttons.png)
   {%- elsif fpt %}
   ![Opções de criação de repositório](/assets/images/help/organizations/repo-creation-perms-radio-buttons-fpt.png)
   {%- endif %}
6. Clique em **Salvar**.
