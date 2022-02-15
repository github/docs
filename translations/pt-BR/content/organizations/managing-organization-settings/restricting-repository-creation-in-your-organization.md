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

Você pode escolher se os integrantes podem criar repositórios na sua organização. {% ifversion ghec or ghes or ghae %}If you allow members to create repositories, you can choose which types of repositories members can create.{% elsif fpt %}If you allow members to create repositories, you can choose whether members can create both public and private repositories or public repositories only.{% endif %} Organization owners can always create any type of repository.

{% ifversion fpt %}
Organizations using {% data variables.product.prodname_ghe_cloud %} can also restrict members to creating private repositories only. Para obter mais informações, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %}
Enterprise owners can restrict the options you have available for your organization's repository creation policy. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
{% endif %}

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

   {% note %}

   **Note:** To restrict members to creating private repositories only, your organization must use {% data variables.product.prodname_ghe_cloud %}.

   {% endnote %}
   {%- endif %}

6. Clique em **Salvar**.
