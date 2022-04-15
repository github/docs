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

Você pode escolher se os integrantes podem criar repositórios na sua organização. {% ifversion ghec or ghes or ghae %}Se você permitir que os integrantes criem repositórios, você poderá escolher quais tipos de repositórios os integrantes poderão criar.{% elsif fpt %}Se você permitir que os integrantes criem repositórios, você poderá escolher se os integrantes poderão criar repositórios públicos e privados ou apenas repositórios públicos.{% endif %}Os proprietários da organização sempre podem criar qualquer tipo de repositório.

{% ifversion fpt %}
As organizações que usam {% data variables.product.prodname_ghe_cloud %} também podem restringir os integrantes à criação de repositórios privados. Para obter mais informações, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization).
{% endif %}

{% ifversion ghec or ghae or ghes %}
Os proprietários de empresas podem restringir as opções que você tem disponíveis para a política de criação de repositório da sua organização. Para obter mais informações, consulte "[Aplicar políticas de gerenciamento do repositório na sua empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)".
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
   {%- endif %}

   {% ifversion fpt or ghec %}
   {% note %}

   **Observação:** Para restringir os integrantes de criar repositórios privados apenas, sua organização deverá usar {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

   {% endnote %}
   {%- endif %}

6. Clique em **Salvar**.
