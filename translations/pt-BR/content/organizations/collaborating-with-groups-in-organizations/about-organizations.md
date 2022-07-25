---
title: Sobre organizações
intro: 'Organizations are shared accounts where businesses and open-source projects can collaborate across many projects at once, with sophisticated security and administrative features.'
redirect_from:
  - /articles/about-organizations
  - /github/setting-up-and-managing-organizations-and-teams/about-organizations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
---

## Sobre organizações

{% data reusables.organizations.about-organizations %} Para obter mais informações sobre tipos de conta, consulte "[Tipos de contas de {% data variables.product.prodname_dotcom %}](/get-started/learning-about-github/types-of-github-accounts)".

You can invite an unlimited number of people to join your organization, then give these organization members a variety of roles that grant different levels of access to the organization and its data. Para obter mais informações, consulte "[Funções em uma organização](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

In addition to managing access to the organization itself, you can separately manage access to your organization's repositories, project boards, and apps. For more information, see "[Repository roles for an organization](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)", "[Project board permissions for an organization](/organizations/managing-access-to-your-organizations-project-boards/project-board-permissions-for-an-organization)", and "[Managing access to your organization's apps](/organizations/managing-access-to-your-organizations-apps)."

To simplify access management and enhance collaboration, you can create nested teams that reflect your group's structure, with cascading access permissions and mentions. Para obter mais informações, consulte "[Sobre equipes](/organizations/organizing-members-into-teams/about-teams)".

You can configure the organization to meet the unique needs of your group by managing settings, such as restricting the types of repositories that members can create. For more information, see "[Managing organization settings](/organizations/managing-organization-settings)."

To harden your organization's security, you can enforce security requirements and review the organization's audit log. Para obter mais informações, consulte "[Mantendo sua organização segura](/organizations/keeping-your-organization-secure)".

{% data reusables.organizations.org-ownership-recommendation %} Para obter mais informações, consulte "[Manter a continuidade da propriedade para sua organização](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization)".

{% ifversion fpt or ghec %}
## About feature availability

{% data reusables.organizations.organization-plans %}
{% endif %}

## Organizações e contas corporativas

{% ifversion fpt %}
As contas corporativas são uma funcionalidade de {% data variables.product.prodname_ghe_cloud %} que permite aos proprietários gerenciar a política e cobrança centralmente para várias organizações. Para obter mais informações, consulte [a documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/collaborating-with-groups-in-organizations/about-organizations).
{% else %}
{% ifversion ghec %}Para organizações que pertencem a uma conta corporativa, a cobrança é gerenciada no nível da conta corporativa, e as configurações de cobrança não estão disponíveis no nível da organização.{% endif %} Os proprietários de empresas podem definir políticas para todas as organizações na conta corporativa ou permitir que os proprietários da organização definam a política no nível da organização. Os proprietários da organização não podem alterar as configurações aplicadas à sua organização no nível da conta corporativa. Se você tiver dúvidas sobre uma política ou configuração da sua organização, entre em contato com o proprietário da conta corporativa.

{% ifversion ghec %}
{% data reusables.enterprise.create-an-enterprise-account %} Para obter mais informações, consulte "[Criando uma conta corporativa](/admin/overview/creating-an-enterprise-account)".

{% data reusables.enterprise-accounts.invite-organization %}
{% endif %}
{% endif %}

{% ifversion fpt or ghec %}
## Termos de serviços e proteção de dados para organizações

Uma entidade, como uma empresa, não lucrativa, ou um grupo, pode concordar com os Termos de serviço padrão ou os Termos de serviço corporativos para a respectiva organização. Para obter mais informações, consulte "[Atualizar para os Termos de serviço corporativos](/articles/upgrading-to-the-corporate-terms-of-service)".

{% endif %}
